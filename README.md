# :dart: Bulls-Eye :dart:
A darts multi-player online platform where users can play in real time against other users around the globe!

# Libraries
<!-- Image Processing / Device Camera Access / Canvas Rendering -->
scikit-image  -> Python Image processor <br />
Tracking.js - > JavaScript Computer Vision on the web
WebRTC -> Real-time Communication Between Browsers
Three.js -> JavaScript 3D library

# Server
We need to decide between NodeJs or Python. This decision will be highly influenced by the technology language which is going to be responsible for image processing.

# Roadmap - 1.0 Version
1 - Access device camera through WebRTC and display the video on canvas. <-** We are here **->
2 - Understand what is the best technology/methodology to detect the dart board and the darts landing on it.
3 - Design the board score matrix, so we can match the areas with the respective points.
4 - Develop a minimal 501 single player game.
5 - Create users accounts and a score board history
6 - Multiplayer functionality


# Research Material
	-- Simple Augmented Reality With OpenCV, Three.js And WebSockets (This example does not work but its a good conceptual case):
	https://www.smashingmagazine.com/2016/02/simple-augmented-reality-with-opencv-a-three-js/
	-- WebRCT access to device camera:
	https://www.html5rocks.com/en/tutorials/getusermedia/intro/
	-- Object Detection with HTML5 getUserMedia
	http://techslides.com/object-detection-with-html5-getusermedia
	-- Computer Vision on the Web:
	https://www.packtpub.com/books/content/object-detection-using-image-features-javascript
