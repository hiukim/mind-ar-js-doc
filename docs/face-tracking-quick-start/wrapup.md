---
id: wrapup 
title: Wrapup 
sidebar_label: Wrapping Up 
---

That's more or less everything you need to know about face tracking in MindAR. It's extremely to use, you pick anchor points and put objects there. 

To make a fully functional virtual tryon application, you just need to prepare more 3D objects and add them to the scene. Then you programatically control their visibilities.

### Toggle visiblity

To toggle visiblity, you can set a property "visible" for the model, e.g.

```
<a-entity mindar-face-target="anchorIndex: 10">
  <a-gltf-model rotation="0 -0 0" position="0 1.0 -0.5" scale="0.35 0.35 0.35" src="#hatModel" visible="false"></a-gltf-model>
</a-entity>
```

### Full Example
The rest is just standard javascript and HTML, and we will not go into details. The full source code can be found here: <a href="../face-tracking-examples/tryon">Virtual Try-On Example</a>
