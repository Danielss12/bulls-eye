import WebRTC from '../scripts/WebRTC/index';
import 'tracking'

var FastTracker = function() {
  FastTracker.base(this, 'constructor');
};

tracking.inherits(FastTracker, tracking.Tracker);
tracking.Fast.THRESHOLD = 2;

FastTracker.prototype.threshold = tracking.Fast.THRESHOLD;
FastTracker.prototype.track = function(pixels, width, height) {
  // stats.begin();
  var gray = tracking.Image.grayscale(pixels, width, height);
  var corners = tracking.Fast.findCorners(gray, width, height);
  // stats.end();
  this.emit('track', {
    data: corners
  });
};

var tracker = new FastTracker();

// Initialize WebRTC object
var webRTC = new WebRTC.WebRTC();

tracker.on('track', function(event) {
	console.log("Canvas context", webRTC.context)
	webRTC.context.clearRect(0, 0, webRTC.width, webRTC.height);
	var corners = event.data;
	console.log("EVENT", corners);
	for (var i = 0; i < corners.length; i += 2) {
		webRTC.context.fillStyle = '#f00';
		webRTC.context.fillRect(corners[i], corners[i + 1], 2, 2);
	}
});

tracking.track('#video', tracker);

var gui = new dat.GUI();

gui.add(tracker, 'threshold', 1, 100).onChange(function(value) {
  tracking.Fast.THRESHOLD = value;
});


