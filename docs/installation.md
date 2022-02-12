---
id: installation 
title: Installation
sidebar_label: Installation
---

import {customFields} from '/docusaurus.config.js';

MindAR project can be run directly in plain static HTML file. It's super easy! 

MindAR comes with different types of tracking capabilities, including Image Tracking and Face Tracking. To minimize library size, each of these are independently built. Moreover, MindAR provides native support for three.js or AFRAME. They are also being built independently. So altogehter, there are 2x2 = 4 sets of distributions.

## AFRAME installation

For each type of tracking, there are two javascript files: `mindar-[TYPE].prod.js` and `mindar-[TYPE]-aframe.prod.js`

The first one is the core tracking library while the second one is a aframe extension. Normally, you will import the first script, followed by aframe library, then followed by the second script. We decided to not embed AFRAME inside MindAR to make it more flexible. Also, for highly customizable applications, you can write your own aframe extension (second script).

There are two generally two ways to install the library.


### 1. HTML script


#### Image Tracking

<code>
{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-image.prod.js"></script>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-image-aframe.prod.js"></script>
`}
</code>

#### Face Tracking

<code>
{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-face.prod.js"></script>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-face-aframe.prod.js"></script>
`}
</code>

### 2. npm  

```
> npm i mind-ar --save
> npm i aframe --save
```

#### Image Tracking

```
import 'mind-ar/dist/mindar-image.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
```

#### Face Tracking
```
import 'mind-ar/dist/mindar-face.prod.js';
import 'aframe';
import 'mind-ar/dist/mindar-face-aframe.prod.js';
```

## THREE.js installation

Three.js integration is simpler. You only need to import a single script. 

### 1. HTML script

#### Image Tracking

<code>
{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-image-three.prod.js"></script>
`}
</code>

#### Face Tracking

<code>
{`script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${customFields.libVersion}/dist/mindar-face-three.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-face-three.prod.js"></script>
`}
</code>

### 2. npm  

```
> npm i mind-ar --save
```

#### Image Tracking

```
import 'mind-ar/dist/mindar-image-three.prod.js';
```

#### Face Tracking
```
import 'mind-ar/dist/mindar-face-three.prod.js';
```
