---
id: threejs-face-blendshapes
title: ThreeJS Blendshapes
sidebar_label: ThreeJS Blendshapes
---

import {customFields} from '/docusaurus.config.js';
import useBaseUrl from '@docusaurus/useBaseUrl';

There is 52 blendshapes scores representing the facial expressions of the detected face. This example shows how you can control a avatar head with the detected blendshapes.  

## Try it out
<a href={useBaseUrl('/face-tracking-samples/three-blendshapes.html')} target="_blank">Live Demo</a>

![img](/img/demo/face-blendshapes-demo.gif)

Credit: the racoon avatar 3D model used in this example comes from <a href="https://developers.google.com/mediapipe" target="_blank">mediapipe</a>

<code>
{`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="importmap">
    {
      "imports": {
        "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
        "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/",
        "mindar-face-three":"https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-face-three.prod.js"
      }
    }
    </script>
    <script type="module">
      import * as THREE from 'three';
      import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
      import { MindARThree } from 'mindar-face-three';
      class Avatar {
        constructor() {
          this.gltf = null;
          this.morphTargetMeshes = [];
        }
        async init() {
          const url = "https://assets.codepen.io/9177687/raccoon_head.glb";
          const gltf = await new Promise((resolve) => {
            const loader = new GLTFLoader();
            loader.load(url, (gltf) => {
              resolve(gltf);
            });
          });
          gltf.scene.traverse((object) => {
            if ((object).isBone && !this.root) {
              this.root = object; // as THREE.Bone;
            }
            if (!(object).isMesh) return
            const mesh = object;
            if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) return
            this.morphTargetMeshes.push(mesh);
          });
          this.gltf = gltf;
        }
        updateBlendshapes(blendshapes) {
          const categories = blendshapes.categories;
          let coefsMap = new Map();
          for (let i = 0; i < categories.length; ++i) {
            coefsMap.set(categories[i].categoryName, categories[i].score);
          }
          for (const mesh of this.morphTargetMeshes) {
            if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) {
              continue;
            }
            for (const [name, value] of coefsMap) {
              if (!Object.keys(mesh.morphTargetDictionary).includes(name)) {
                continue;
              }
              const idx = mesh.morphTargetDictionary[name];
              mesh.morphTargetInfluences[idx] = value;
            }
          }
        }
      }
      let mindarThree = null;
      let avatar = null;
      const setup = async () => {
        mindarThree = new MindARThree({
          container: document.querySelector("#container"),
        });
        const { renderer, scene, camera } = mindarThree;
        const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
        scene.add(light);
        const anchor = mindarThree.addAnchor(1);
        await avatar.init();
        avatar.gltf.scene.scale.set(2, 2, 2);
        anchor.group.add(avatar.gltf.scene);
      }
      const start = async () => {
        if (!mindarThree) {
          await setup();
        }
        await mindarThree.start();
        const { renderer, scene, camera } = mindarThree;
        const feedVideo = document.querySelector("#video-feed");
        feedVideo.srcObject = mindarThree.video.srcObject.clone();
        feedVideo.play();
        renderer.setAnimationLoop(() => {
          const estimate = mindarThree.getLatestEstimate();
          if (estimate && estimate.blendshapes) {
            avatar.updateBlendshapes(estimate.blendshapes);
          }
          renderer.render(scene, camera);
        });
      }
      start();
    </script>
    <style>
      body {
        margin: 0;
      }
      #container {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
      }
      #video-feed {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 50vw;
        z-index: 9999999;
        transform: scaleX(-1);
      }
    </style>
  </head>
  <body>
    <div id="container">
    </div>
    <video id="video-feed">
    </video>
  </body>
</html>
`}
</code>

## List of blendshapes

<ol>
<li>browDownLeft</li>
<li>browDownRight</li>
<li>browInnerUp</li>
<li>browOuterUpLeft</li>
<li>browOuterUpRight</li>
<li>cheekPuff</li>
<li>cheekSquintLeft</li>
<li>cheekSquintRight</li>
<li>eyeBlinkLeft</li>
<li>eyeBlinkRight</li>
<li>eyeLookDownLeft</li>
<li>eyeLookDownRight</li>
<li>eyeLookInLeft</li>
<li>eyeLookInRight</li>
<li>eyeLookOutLeft</li>
<li>eyeLookOutRight</li>
<li>eyeLookUpLeft</li>
<li>eyeLookUpRight</li>
<li>eyeSquintLeft</li>
<li>eyeSquintRight</li>
<li>eyeWideLeft</li>
<li>eyeWideRight</li>
<li>jawForward</li>
<li>jawLeft</li>
<li>jawOpen</li>
<li>jawRight</li>
<li>mouthClose</li>
<li>mouthDimpleLeft</li>
<li>mouthDimpleRight</li>
<li>mouthFrownLeft</li>
<li>mouthFrownRight</li>
<li>mouthFunnel</li>
<li>mouthLeft</li>
<li>mouthLowerDownLeft</li>
<li>mouthLowerDownRight</li>
<li>mouthPressLeft</li>
<li>mouthPressRight</li>
<li>mouthPucker</li>
<li>mouthRight</li>
<li>mouthRollLower</li>
<li>mouthRollUpper</li>
<li>mouthShrugLower</li>
<li>mouthShrugUpper</li>
<li>mouthSmileLeft</li>
<li>mouthSmileRight</li>
<li>mouthStretchLeft</li>
<li>mouthStretchRight</li>
<li>mouthUpperUpLeft</li>
<li>mouthUpperUpRight</li>
<li>noseSneerLeft</li>
<li>noseSneerRight</li>
<li>tongueOut</li>
</ol>

