# :dart: Bulls-Eye :dart:
A darts multi-player online platform where users can play in real time against other users around the globe!


# Roadmap - 1.0 Version
1 - Access device camera through WebRTC and display the video on canvas. <b><-** We are here **-></b> <br />
2 - Understand what is the best technology/methodology to detect the dart board and the darts landing on it. <b><-** We are here **-></b> <br />
3 - Design the board score matrix, so we can match the areas with the respective points. <br />
4 - Develop a minimal 501 single player game. <br />
5 - Create users accounts and a score board history <br />
6 - Multiplayer functionality <br />


# Roadmap - Milestone Nº1
-- WebRTC works on all the main browsers on laptops and PC's, check it out here -> (https://codelabs.developers.google.com/codelabs/webrtc-web/#0).
For mobile apps in Android & IOS WebRTC as native commands which need to be implemented but also works (https://webrtc.org/native-code/). We can develop Android and IOS apps with React native and use the specific WebRTC technology for each platform. <br />
For now we will focus on just get the video through the laptop/PC webcam to be able to process the image and guarantee we can detect the dart board, which is the main selling point of our app, withouth it everything else is pointless. <b><-** ACHIEVED **-></b> <br />

-- Try diferent image processing approaches to find wich are the best ways to detect the board and the darts on it. For now will use the Tracking.js library but have the feeling this will not be the best approach due to the fact the processing power heavy lifting will be done on the device CPU which means if the user as a old mobile it might not work. So we should have in mind to use Python or Node to process the image on the server side.


# Frameworks
Electron -> Develop desktop web apps, using Javascript, CSS, HTML. This means we can develop for web but instal on Laptop or PC like if it was a native program. <br />
React/React Native -> With React & React Native we can make our Front-End logic universal for Desktop/Mobile, changing only the render functions. Also gives us the possibility to write mobile apps withou the need to learn native code like Java or Swift. <br />


# Libraries
<!-- Image Processing / Device Camera Access / Canvas Rendering -->
scikit-image  -> Python Image processor <br />
Tracking.js - > JavaScript Computer Vision on the web <br />
WebRTC -> Real-time Communication Between Browsers <br />
Three.js -> JavaScript 3D library


# Server
We need to decide between NodeJs or Python. This decision will be highly influenced by the technology language which is going to be responsible for image processing.


# Research Material
-- Simple Augmented Reality With OpenCV, Three.js And WebSockets (This example does not work but its a good conceptual case): <br />
https://www.smashingmagazine.com/2016/02/simple-augmented-reality-with-opencv-a-three-js/ <br />

-- WebRTC list of tutorials: <br />
https://codelabs.developers.google.com/codelabs/webrtc-web/#0 <br />
https://webrtc.github.io/samples/ <br />

-- WebRTC access to device camera & React chat implementation: <br />
https://www.html5rocks.com/en/tutorials/getusermedia/intro/ <br />
https://react.rocks/tag/WebRTC <br />

-- Object Detection with HTML5 getUserMedia <br />
http://techslides.com/object-detection-with-html5-getusermedia <br />

-- Computer Vision on the Web: <br />
https://www.packtpub.com/books/content/object-detection-using-image-features-javascript <br />

-- React nice list of tutorials: <br />
https://react.rocks/ <br />

-- React & React Native implementations and boilerplate: <br />
http://jkaufman.io/react-web-native-codesharing/ <br />
https://github.com/este/este

-- Electron with React: <br />
https://github.com/gabrielbull/react-desktop <br />
https://github.com/chentsulin/electron-react-boilerplate <br />



