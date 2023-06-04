---
id: webpage 
title: Build the page
sidebar_label: Build the page
---

import {customFields} from '/docusaurus.config.js';

MindAR application can be as simple as a regular webpage, which is a single .html file.

### Minimal Example

Let's start with a minimal example to understand how face tracking work in MindAR. Create a blank index.html with editor of your choices and paste the following content:

<code>
{`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-face-aframe.prod.js"></script>
  </head>

  <body>
    <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-camera active="false" position="0 0 0"></a-camera>
      <a-entity mindar-face-target="anchorIndex: 1">
	<a-sphere color="green" radius="0.1"></a-sphere>
      </a-entity>
    </a-scene>
  </body>
</html>
`}
</code>

Let's digest them:

### standard HTML stuff

`html`, `head`, `meta` and `body` are just standard html stuff, and we will skip.

### mind-ar-js and aframe library 

<code>
{`<script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-face-aframe.prod.js"></script>
`}
</code>

They are the `mindar` and `aframe` library hosted in cdn. They are the only things you need to build a web AR application!

### aframe 
MindAR comes with an AFRAME extension that allows you to construct a 3D scene easily. We will not go into the details of AFRAME in this tutorial. If you want to learn more about it, please refer to <a href="https://aframe.io/" target="_blank">AFRAME</a>

In short, you can see the `<a-scene>` block inside `body`. This is the main part of the application. If you don't have AFRAME background, don't worry. Most of the time you can just copy this block of code as a template to start.

We'll highlight two things here related to MindAR. 

1. Within `<a-scene>` you can see a property `mindar-face`. It tells MindAR engine to control this scene

2. There is an `<a-entity>`, with a prpoerty `mindar-face-target="anchorIndex: 1"`. It tells the engine to track a particular anchor position (in this case position "1", which is the nose tip), and stick this entity to that position.

:::tip
Remember this. The AR engine does ONE thing! - It updates the visibility and positions of a-entity
:::

### scale

MindAR engine will scale the entity according to the size of the face. More specially, the width of the face is 1 unit of length. You can see that we set the green sphere size to 0.1 radius in the above example, and it will cover rougly 20% of the face in width.

### rotation

MindAR engine uses the relative positions of two eyes to compute the face orientation, and the anchored objects will automatically rotated accordingly.


### anchor points

MindAR provides 486 anchor points on the face, and you can anchor object on any of them. Detailed positions can be found here: https://github.com/tensorflow/tfjs-models/blob/master/face-landmarks-detection/mesh_map.jpg
