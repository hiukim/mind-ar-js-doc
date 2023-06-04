---
id: multi-targets 
title: Multi-Targets
sidebar_label: Multi-Targets 
---

import {customFields} from '/docusaurus.config.js';
import useBaseUrl from '@docusaurus/useBaseUrl';
import bandImage1 from '@site/static/img/demo/bear.png'
import bandImage2 from '@site/static/img/demo/raccoon.png'

MindAR allows you to compile multiple target images, and show different AR effects individually, like this demo:

![img](/img/demo/multi-targets-demo.gif)


## Try it out
<a href={useBaseUrl('/samples/multi-targets.html')} target="_blank">Live Demo</a>

You can use the following target images for testing:

<img src={bandImage1} width="300" />
&nbsp;
<img src={bandImage2} width="300" />

## Source
<code>
{`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-image-aframe.prod.js"></script>
  </head>

  <body>
    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/band-example/band.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>
        <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>
      </a-assets>\n
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n
      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 1">
        <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer>
      </a-entity>
    </a-scene>
  </body>
</html>
`}
</code>

It's more or less the same as the Basic example. The main difference is that you now have two `<a-entity>`, with different `targetIndex`.
