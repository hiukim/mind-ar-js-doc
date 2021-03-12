---
id: multi-tracks 
title: Multi-Tracks
sidebar_label: Multi-Tracks 
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import bandImage1 from '@site/static/img/demo/bear.png'
import bandImage2 from '@site/static/img/demo/raccoon.png'

Unlike the previous example, MindAR allows you to track multiple targets simultaneously.

![img](/img/demo/multi-tracks-demo.png)

## Try it out
<a href={useBaseUrl('/samples/multi-track.html')} target="_blank">Live Demo</a>

You can use the following target images for testing:

<img src={bandImage1} width="300" />
&nbsp;
<img src={bandImage2} width="300" />

## Source
```
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/dist/mindar.prod.js"></script>
  </head>

  <body>
    <a-scene mindar="maxTrack: 2; imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/examples/assets/band-example/band.mind; showStats: true;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
	<a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/examples/assets/band-example/bear/scene.gltf"></a-asset-item>
	<a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/examples/assets/band-example/raccoon/scene.gltf"></a-asset-item>
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

This is exactly the same as the previous example, with only one difference. There is a `maxTrack: 2;` parameter set inside `a-scene`

## maxTrack

This parameter specify the maximum number of target that will be tracked simultaneously. Default is 1.

:::tip
This parameter has a great impact on performance. You should avoid tracking many targets at the same time.
:::
