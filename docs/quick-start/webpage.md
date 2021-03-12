---
id: webpage 
title: Build the page
sidebar_label: Build the page
---

Now you have the `targets.mind` file ready, we can start building the webpage.

## Preparation

First, create a clean folder for your project, let say `mindar-project`. Put the `targets.mind` file there and create a blank html file, let's say `index.html`. So the folder should have two files like this:

<blockquote>
./targets.mind

./index.html
</blockquote>


## Minimal example

Now, let's start with something simple to display a rectanglar plane just on top of the target image. Open `index.html` with editor of your choices, and paste the following content:

```
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/dist/mindar.prod.js"></script>
  </head>

  <body>
    <a-scene mindar="imageTargetSrc: ./targets.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
      <a-entity mindar-image-target="targetIndex: 0">
        <a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
      </a-entity>
    </a-scene>
  </body>
</html>
```

Let's digest them:

### standard HTML stuff

`html`, `head`, `meta` and `body` are just standard html stuff, and we will skip.

### mind-ar-js library 

`<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.3.1/dist/mindar.prod.js"></script>`

It's the `mindar` library hosted in cdn. This is the only thing you need to build a web AR application!

### aframe 
MindAR comes with an AFRAME extension that allows you to construct a 3D scene easily. We will not go into the details of AFRAME in this tutorial. If you want to learn more about it, please refer to <a href="https://aframe.io/" target="_blank">AFRAME</a>

In short, you can see the `<a-scene>` block inside `body`. This is the main part of the application. If you don't have AFRAME background, don't worry. Most of the time you can just copy this block of code as a template to start.

We'll highlight two things here related to MindAR. 

1. Within `<a-scene>` you can see a property `mindar="imageTargetSrc: ./targets.mind;"` It tells the engine where is the compiled `.mind` file you built earlier.

2. There is an `<a-entity>`, with a prpoerty `mindar-image-target="targetIndex: 0"`. This tells the engine to detect and track a particular image target. The `targetIndex` is always `0`, if your `targets.mind` contains only a single image. You can however compile multiple images together, and the `targetIndex` will follows the order of the images. We will talk more this later when we have multiple image targets. 


:::tip
Remember this. The AR engine only does ONE thing! - It updates the visibility and positions of a-entity
:::

The AR engine consume your camera feed, then detect, track the target images and update the visibility and positions of this a-entity. It means, whatever attached to the entity will be properly magically displayed accordingly. Once you have this setup properly, what you usually need to do is to construct the content inside this `a-entity` according to your application needs.

This is minimal case, you see a `<a-plane color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>`. This is the object we want to show on top of the target image. Obviously, it's a semi-transparent blue plane.

:::tip
width=1 means the width is the same as the target image
:::

As you can see we set the width to 1, to make it having the same width of the target image in reality. Why are we setting the height to 0.552, you asked? Good question, because the target image has a ratio of 0.552/1. If you set height to 1, which means also equal to the width of the target image. It will turn out to be a square (You should try and see the effect). Now this rectangular plane will perfectly overlay the target image.

Also, note that the anchor point of the entity is the center of the target image.


Now, you are all set! Let's head over to the next section and see the effect!
