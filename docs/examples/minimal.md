---
id: minimal 
title: Minimal
sidebar_label: Minimal 
---

import {customFields} from '/docusaurus.config.js';
import useBaseUrl from '@docusaurus/useBaseUrl';
import cardImage from '@site/static/img/demo/card.png'

This is a minimal example. It detects a target image and display a blue rectangle on top. 

We have a step-by-step tutorial in `Quick Start`. If you are new to MindAR, please check that out to understand some basic principles.

![img](/img/demo/minimal-demo.jpeg)

## Try it out
<a href={useBaseUrl('/samples/minimal.html')} target="_blank">Live Demo</a>

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
    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/card.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
      </a-entity>
    </a-scene>
  </body>
</html>
`}
</code>
