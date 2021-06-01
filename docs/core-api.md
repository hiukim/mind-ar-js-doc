---
id: core-api
title: Core API
sidebar_label: Core API 
---

MindAR comes with an AFRAME wrapper, which allows you to kickstart project easily with minimal coding. The workflow, is admittedly, opinionated, and might not suit every use cases. If you need to have higher customized behaviour, it's still doable by utilizing the core API. 

## non-ARAME build

First of all, MindAR comes with a production build without AFRAME. 
```
https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/dist/mindar.prod-min.js
```

You might want to use this build for numerous reasons:

1. Your app is already using AFRAME, so you don't want to double import 

2. You don't like the given behaviour of our aframe wrapper, and you need to write your own.

3. You don't want to use AFRAME at all. e.g. you want to build the app with just THREE.js, babylon.js etc.


## Core API
:::warning
Be aware that the Core API is still changing rapidly, so it's highly possible they will not be backward compatible. You might also need to study the source code to understand how it works. 
:::

MindAR library exposed two components for core access of the AR engine, compiler and controller

### Compiler
Compiler allows you to compile target images
```
const compiler = new window.MINDAR.Compiler();
const dataList = await compiler.compileImageTargets(images, (progress) => {  // images is an array of HTML image object
  // console.log("progress", progress);
});
const exportedBuffer = await compiler.exportData(); // export the compiled data into buffer for download (e.g. the .mind file)
 
```

### Controller
Controller is the main API interacting with the AR engine
```
const controller = new window.MINDAR.Controller(...);
```
Unfortunately, no fixed specs can be given at this moment. This section is for advanced users who need to implement highly customized workflow. This is given, so you have at least an entry point to start looking. We recommend you to refer to the source code of our aframe wrapper to see how it's being used: `https://github.com/hiukim/mind-ar-js/blob/master/src/aframe.js`

A lot of people want to customize the behaviour, for eaxmple, make object stays visible even when the image target is lost. If you want to do something like this, you can approach the problem by using the non-aframe library build, then include and modify the above `aframe.js` script.
