/*
 *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */

'use strict';
// Global vars
var animFrame;

// Get DOM elements
var errorElement = document.querySelector('#errorMsg');
var video = document.querySelector('video');

// Put variables in global scope to make them available to the browser console.
var constraints = window.constraints = {
  audio: false,
  video:  { width: 640, height: 480 }
};

// Create the canvas where we can post frames
var canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
var context = canvas.getContext('2d');

//document.body.appendChild("<h2>CANVAS</h2> <br />");
document.body.appendChild(canvas);

// Start script
init();

function init() {
  // Start webcam
  navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess).catch(handleError);
  // 
  getFrame();
}

// Get video frames
var i = 0;
function getFrame () {
  console.log(i++);
  // Use capture to get this frame into canvas
  capture();
  animFrame = window.requestAnimationFrame(getFrame);
}


function capture() {
    context.drawImage(video, 0, 0, 640, 480);

    // do other stuff
}


setTimeout(function() {
  stopStreaming();
  alert("Ughhh!! you ugly fucker, shutting down for system proctection!");
}, 5000);

function handleSuccess(stream) {
  // var videoTracks = stream.getVideoTracks();
  // console.log('Got stream with constraints:', constraints);
  // console.log('Using video device: ' + videoTracks[0].label);
  // stream.oninactive = function() {
  //   console.log('Stream inactive');
  // };
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
}

function handleError(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
        constraints.video.width.exact + ' px is not supported by your device.');
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg('getUserMedia error: ' + error.name, error);
}

function errorMsg(msg, error) {
  errorElement.innerHTML += '<p>' + msg + '</p>';
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}

function stopStreaming() {
  var track = stream.getTracks()[0];  // if only one media track
  track.stop();
}