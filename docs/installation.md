---
id: installation 
title: Installation
sidebar_label: Installation
---

MindAR project can be run directly in plain static HTML file. It's super easy! 

MindAR comes with different types of tracking capabilities, including Image Tracking and Face Tracking. To minimize library size, each of these are independetly built. Furthermore, for each type of tracking, there are two javascript files: `mindar-[TYPE].prod.js` and `mindar-[TYPE]-aframe.prod.js`

The first one is the core tracking library while the second one is a aframe extension. Normally, you will import the first script, followed by aframe library, then followed by the second script. We decided to not embed AFRAME inside MindAR to make it more flexible. Also, for highly customizable applications, you can write your own aframe extension (second script).

There are two generally two ways to install the library.


## 1. HTML script


### Image Tracking

```
<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image.prod.js"></script>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-image-aframe.prod.js"></script>
```

### Face Tracking

```
<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-face.prod.js"></script>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.0.0/dist/mindar-face-aframe.prod.js"></script>
```


## 2. npm  

```
> npm i mind-ar --save
> npm i aframe --save
```

### Image Tracking

```
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
```

### Face Tracking
```
import 'mind-ar/dist/mindar-face.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-face-aframe.prod.js';
```