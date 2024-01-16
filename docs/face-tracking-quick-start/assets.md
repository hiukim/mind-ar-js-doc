---
id: assets 
title: 3D Assets 
sidebar_label: 3D Assets 
---

import {customFields} from '/docusaurus.config.js';
import demoImage from '@site/static/img/demo/face-asset-demo.png'

It's an augmented reality app, so it's not fun without some 3D assets!

## Adding assets
The first thing we need to do is to add some assets to the scene. In `AFRAME`, we do this by `a-assets`. Add this block of code inside the `<a-scene/>` element

<code>
{`
<a-assets>
  <a-asset-item id="glassesModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/glasses/scene.gltf"></a-asset-item>
</a-assets>
`}
</code>

It's a 3D glasses model in `gltf` format. `AFRAME` basically supports all the standard 3D format, so you can probably replace it with the models of your choices later. 

## Update the scene
Now we can replace the dull sphere in the earlier example with this glasses. We also changed the anchorIndex to 168 because that is a better position for glasses.

```
<a-entity mindar-face-target="anchorIndex: 168">
  <a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.01 0.01 0.01" src="#glassesModel"></a-gltf-model>
</a-entity>
```

The scale `0.01` is set by trial-and-error. It depends on the original size of the 3D models.

## Putting it together

Putting it together, your html page is something like below.

<code>
{`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-face-aframe.prod.js"></script>
  </head>

  <body>
    <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
	<a-asset-item id="glassesModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/face-tracking/assets/glasses/scene.gltf"></a-asset-item>
      </a-assets>\n
      <a-camera active="false" position="0 0 0"></a-camera>
      <a-entity mindar-face-target="anchorIndex: 168">
	<a-gltf-model rotation="0 0 0" position="0 0 0" scale="0.01 0.01 0.01" src="#glassesModel"></a-gltf-model>
      </a-entity>
    </a-scene>
  </body>
</html>
`}
</code>

If everything works correctly, you should see something like this:

<img src={demoImage} width="300" />
