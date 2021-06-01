---
id: basic 
title: Basic 
sidebar_label: Basic 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import cardImage from '@site/static/img/demo/card.png'

This is a very typical example that detect and track one target image, and display a 3D effects on top.

We have a step-by-step tutorial in `Quick Start`. If you are new to MindAR, please check that out to understand some basic principles.

![img](/img/demo/basic-demo.gif)

## Try it out
<a href={useBaseUrl('/samples/basic.html')} target="_blank">Live Demo</a>

You can use the following target image for testing:

<img src={cardImage} width="300" />

## Source
```
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/dist/mindar.prod.js"></script>
  </head>
  <body>
    <a-scene mindar="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/examples/assets/card-example/card.mind; showStats: true;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
	<img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/examples/assets/card-example/card.png" />
	<a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/examples/assets/card-example/softmind/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
	<a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
	<a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel"
	  animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
	>
      </a-entity>
    </a-scene>
  </body>
</html>
```

