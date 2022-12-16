---
id: installation-v1-1-x
title: Installation - v1.1.x
sidebar_label: Installation - v1.1.x
---

import {customFields} from '/docusaurus.config.js';

**This is an old installation guide for MindAR v1.1.x**

**Since v1.2.0, MindAR migrated to ES Module, which align with ThreeJS v137 and onwards. For latest version, please go to [Installation](./installation)
**

## AFRAME installation

For each type of tracking, there are two javascript files: `mindar-[TYPE].prod.js` and `mindar-[TYPE]-aframe.prod.js`

The first one is the core tracking library while the second one is a aframe extension. Normally, you will import the first script, followed by aframe library, then followed by the second script. We decided to not embed AFRAME inside MindAR to make it more flexible. Also, for highly customizable applications, you can write your own aframe extension (second script).

There are two generally two ways to install the library.


### 1. HTML script


#### Image Tracking

<code>
{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-image.prod.js"></script>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-image-aframe.prod.js"></script>
`}
</code>

#### Face Tracking

<code>
{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-face.prod.js"></script>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-face-aframe.prod.js"></script>
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
{`<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-image-three.prod.js"></script>
`}
</code>

#### Face Tracking

<code>
{`script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-face-three.prod.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@1.1.5/dist/mindar-face-three.prod.js"></script>
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

