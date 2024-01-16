---
id: assets 
title: 3D Assets 
sidebar_label: 3D Assets 
---

import {customFields} from '/docusaurus.config.js';

It's an augmented reality app, so it's not fun without some 3D assets!

## Adding assets
The first thing we need to do is to add some assets to the scene. In `AFRAME`, we do this by `a-assets`. Add this block of code inside the `<a-scene/>` element

<code>
{`
<a-assets>
  <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/card.png" />
  <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
</a-assets>
`}
</code>

The first one is actually our target image. The second one is a 3D model in `gltf` format. `AFRAME` basically supports all the standard 3D format, so you can probably replace it with the models of your choices later. 

## Construct the scene
Now we can replace the dull rectangular plane in the earlier example with an image asset.

```
<a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
```

Also, we will add an animated 3D model on top of the image.

```
<a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate">
```

The scale of the 3D model we use here was normalized to -1 to 1, therefore we set an appropriate scale 0.005. We also have an animation to make the model oscillate between 0 to 0.1 in z-axis. We will not go into the details of the animation, but they are just standard `AFRAME` stuff. 

Finally, we have also modify some rendering properties inside `<a-scene>` (Optional)

```
color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights"
```

Sorry, I'm not entirely sure what that does, but it seems like the rendering is prettier. You can skip this and still see the effect, not a big deal.

## Putting it together

Putting it together, your html page is something like below.

<code>
{`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://aframe.io/releases/1.5.0/aframe.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-image-aframe.prod.js"></script>
  </head>
  <body>
    <a-scene mindar-image="imageTargetSrc: ./targets.mind; showStats: true;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-assets>
        <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/card.png" />
        <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
      </a-assets>
\n
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
\n
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate">
      </a-entity>
    </a-scene>
  </body>
</html>
`}
</code>

The effect is what we saw in the Overview. Easy, right?

![img](/img/demo/basic-demo.gif)
