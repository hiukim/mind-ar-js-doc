---
id: installation 
title: Installation
sidebar_label: Installation
---

import {customFields} from '/docusaurus.config.js';


**Since v1.2.0, MindAR migrated to ES Module, which align with ThreeJS v137 and onwards. For prior version of MindAR, please go to [Installation-v1.1.x](./installation-v1-1-x)**

MindAR project can be run directly in plain static HTML file. It's super easy! 

MindAR comes with different types of tracking capabilities, including Image Tracking and Face Tracking. To minimize library size, each of these are independently built. Moreover, MindAR provides native support for three.js or AFRAME. They are also being built independently. So altogether, there are 2x2 = 4 sets of distributions.

There are two generally two ways to install the library, either through `HTML script` or `npm`

## AFRAME installation



### 1. HTML script


#### Image Tracking

<code>
{`<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-image-aframe.prod.js"></script>
`}
</code>

#### Face Tracking

<code>
{`<script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
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
import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';
```

#### Face Tracking
```
import 'aframe';
import 'mind-ar/dist/mindar-face-aframe.prod.js';
```

## THREE.js installation

To align with ThreeJS official installation of using ES module and importmaps since v137, MindAR threeJS version also follows a similar pattern.

Since MindAR v1.2.0, ThreeJS becomes an external dependency, so you can choose your own ThreeJS version, but the minimum supported version is v137.

### 1. HTML script

#### Image Tracking

<code>
{`<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.147.0/build/three.module.js",
    "three/addons/": "https://unpkg.com/three@0.147.0/examples/jsm/",
    "mindar-image-three":"https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-image-three.prod.js"
  }
}
</script>
`}
</code>

and then in your application:

<code>
{`<script type="module">
  import * as THREE from 'three';
  import { MindARThree } from 'mindar-image-three';
</script>
`}
</code>

#### Face Tracking

<code>
{`<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.147.0/build/three.module.js",
    "three/addons/": "https://unpkg.com/three@0.147.0/examples/jsm/",
    "mindar-face-three":"https://cdn.jsdelivr.net/npm/mind-ar@1.2.0/dist/mindar-face-three.prod.js"
  }
}
</script>
`}
</code>

and then in your application:

<code>
{`<script type="module">
  import * as THREE from 'three';
  import { MindARThree } from 'mindar-face-three';
</script>
`}
</code>


### 2. npm  

```
> npm i mind-ar --save
```

#### Image Tracking

```
import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';
```

#### Face Tracking
```
import {MindARThree} from 'mind-ar/dist/mindar-face-three.prod.js';
```
