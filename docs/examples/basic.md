---
id: basic 
title: Basic 
sidebar_label: Basic 
---

import {customFields} from '/docusaurus.config.js';
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
<code>
{`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/dist/mindar-image.prod.js"></script>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/dist/mindar-image-aframe.prod.js"></script>
  </head>
  <body>
    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/card.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
	<img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/card.png" />
	<a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
      </a-assets>\n
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel"
          animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
        >
      </a-entity>
    </a-scene>
  </body>
</html>
`}
</code>

