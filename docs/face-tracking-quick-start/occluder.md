---
id: occluder 
title: Occluder 
sidebar_label: Occluder 
---

import demoImage1 from '@site/static/img/demo/face-occluder1-demo.png'
import demoImage2 from '@site/static/img/demo/face-occluder2-demo.png'

## Depth Problem

If you turn your head a bit, you will probably notice a problem like this (the arm of the glass should be invisible since it's behind the head):

<img src={demoImage1} width="300" />

It's a common problem in augmented reality application. The video is just a plane beneath the drawing layer. It means that none of the content inside the video can obscure the augmented objects. 

## Occluder

To solve this issue, we will need to add another 3D object in the scene which is an arbitrary 3D head. Unlike a regular 3D model, this arbitrary head has two important properties. First, obviously it needs to be transparent. Second, despite being transparent, it still need to hide everything behind. Normally, we call this special kind of 3D objects as occluders. 

Adding a occluder object is very similar to adding a regular object:

```
<a-entity mindar-face-target="anchorIndex: 168">
  <a-gltf-model mindar-face-occluder position="0 -0.3 0.15"rotation="0 0 0" scale="0.065 0.065 0.065" src="#headModel"></a-gltf-model>
</a-entity>
```

## Putting it together

Putting it together, your new html page should be like this:

```
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-face.prod.js"></script>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-face.aframe.js"></script>
  </head>

  <body>
    <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
	<a-asset-item id="glassesModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/examples/image-tracking/assets/glasses/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera active="false" position="0 0 0"></a-camera>

      <a-entity mindar-face-target="anchorIndex: 168">
        <a-gltf-model mindar-face-occluder position="0 -0.3 0.15"rotation="0 0 0" scale="0.065 0.065 0.065" src="#headModel"></a-gltf-model>
      </a-entity>

      <a-entity mindar-face-target="anchorIndex: 168">
        <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.01 0.01 0.01" src="#glassesModel"></a-gltf-model>
      </a-entity>
    </a-scene>
  </body>
</html>
```

and when you run the app again, the arm of the glasses will be somehow hidden. 

<img src={demoImage2} width="300" />

## Limitations

One major limitation of occluder is that the arbitrary head is predefined 3D model, and the shape won't fit perfectly with the person head in the video.
