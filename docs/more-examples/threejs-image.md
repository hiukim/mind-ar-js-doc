---
id: threejs-image
title: ThreeJS Image Tracking
sidebar_label: ThreeJS Image
---

import {customFields} from '/docusaurus.config.js';
import useBaseUrl from '@docusaurus/useBaseUrl';
import cardImage from '@site/static/img/demo/card.png'

This is sample application using three.js instead of AFRAME. The effect should be similar to <a href="../examples/minimal">Minimal</a>

## Try it out
<a href={useBaseUrl('/samples/three.html')} target="_blank">Live Demo</a>

You can use the following target image for testing:

<img src={cardImage} width="300" />

<code>
{`
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/dist/mindar-image-three.prod.js"></script>
    <script type="module">
      const THREE = window.MINDAR.IMAGE.THREE;
      const mindarThree = new window.MINDAR.IMAGE.MindARThree({
	container: document.querySelector("#container"),
	imageTargetSrc: "https://cdn.jsdelivr.net/npm/mind-ar@${customFields.libVersion}/examples/image-tracking/assets/card-example/card.mind"
      });
      const {renderer, scene, camera} = mindarThree;
      const anchor = mindarThree.addAnchor(0);
      const geometry = new THREE.PlaneGeometry(1, 0.55);
      const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
      const plane = new THREE.Mesh( geometry, material );
      anchor.group.add(plane);
      const start = async() => {
	await mindarThree.start();
	renderer.setAnimationLoop(() => {
	  renderer.render(scene, camera);
	});
      }
      const startButton = document.querySelector("#startButton");
      startButton.addEventListener("click", () => {
	start();
      });
      stopButton.addEventListener("click", () => {
	mindarThree.stop();
	mindarThree.renderer.setAnimationLoop(null);
      });
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
      #control {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
      }
    </style>
  </head>
  <body>
    <div id="control">
      <button id="startButton">Start</button>
      <button id="stopButton">Stop</button>
    </div>
    <div id="container">
    </div>
  </body>
</html>
`}
</code>
