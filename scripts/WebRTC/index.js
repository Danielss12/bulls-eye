'use strict';

function WebRTC() {
  var self = this;

  this.animFram
  this.width = 640;
  this.height = 480;

  // Get DOM elements
  this.errorElement = document.querySelector('#errorMsg');
  this.video = document.querySelector('video');
  this.playButton = document.querySelector("#startVideo");
  this.stopButton = document.querySelector("#stopVideo");

  // Put variables in global scope to make them available to the browser console.
  this.constraints = window.constraints = {
    audio: false,
    video:  { width: this.width, height: this.height }
  };

  // Add event listners
  this.playButton.addEventListener('click', function() {
    self.startVideo();
  });

  this.stopButton.addEventListener('click', function() {
    self.stopVideo();
  });
  
  // Create the canvas where we can post frames
  this.canvas = document.querySelector('#myCanvas');
  // this.canvas.setAttribute("id", "myCanvas")
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.context = this.canvas.getContext('2d');
  // context.globalCompositeOperation = 'difference';

  // document.body.appendChild(this.canvas);

}

WebRTC.prototype = {
  constructor: WebRTC,
  startVideo: function() {
    navigator.mediaDevices.getUserMedia(this.constraints).then(this.handleSuccess.bind(this)).catch(this.handleError.bind(this));
  },
  handleSuccess: function(stream) {
    console.log("STREAM", stream);
    // var videoTracks = stream.getVideoTracks();
    // console.log('Got stream with constraints:', constraints);
    // console.log('Using video device: ' + videoTracks[0].label);
    // stream.oninactive = function() {
    //   console.log('Stream inactive');
    // };
    window.stream = stream; // make variable available to browser console
    this.video.srcObject = stream;
    // Stream video to canvas context
    // this.getFrame();
  },
  handleError: function(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      this.errorMsg('The resolution ' + this.constraints.video.width.exact + 'x' +
          this.constraints.video.width.exact + ' px is not supported by your device.');
    } else if (error.name === 'PermissionDeniedError') {
      this.errorMsg('Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.');
    }
    this.errorMsg('getUserMedia error: ' + error.name, error);
  },
  errorMsg: function(msg, error) {
    errorElement.innerHTML += '<p>' + msg + '</p>';
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  },
  stopVideo: function() {
    var track = stream.getTracks()[0];  // if only one media track
    track.stop();
  },
  getFrame: function () {
    // Use capture to get this frame into canvas
    this.capture();
    this.animFrame = window.requestAnimationFrame(this.getFrame.bind(this));
  },
  capture: function() {
      this.context.drawImage(this.video, 0, 0, this.width, this.height);

      // Save the image data to an url to future sharing
      // var dataURL = canvas.toDataURL();
      // console.log(dataURL);
      // do other stuff
  }
}

module.exports.WebRTC = WebRTC;