---
id: multi-targets 
title: Multi-Targets
sidebar_label: Multi-Targets 
---

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
```
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/dist/mindar.prod.js"></script>
  </head>

  <body>
    <a-scene mindar="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/examples/assets/band-example/band.mind; showStats: true;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
	<a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/examples/assets/band-example/bear/scene.gltf"></a-asset-item>
	<a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/examples/assets/band-example/raccoon/scene.gltf"></a-asset-item>
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity mindar-image-target="targetIndex: 0">
        <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer>
      </a-entity>
      <a-entity mindar-image-target="targetIndex: 1">
        <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer>
      </a-entity>
    </a-scene>
  </body>
</html>
```

It's more or less the same as the Basic example. The main difference is that you now have two `<a-entity>`, with different `targetIndex`.
