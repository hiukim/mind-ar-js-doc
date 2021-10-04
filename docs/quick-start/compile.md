---
id: compile 
title: Compile Target Images
sidebar_label: Compile Target Images
---

import cardImage from '@site/static/img/demo/card.png'


Before working on the webpage, we first need to preprocess (a.k.a. compile) the images. We need to scan the images and extract interesting locations (a.k.a. feature points) so we can detect and track the images later. 

This preprocessing step takes time, therefore we want to do it beforehand as to reduce the loading time when users actually use your AR app later. 

MindAR comes with a super friendly compilation tool to do this. [Image Targets Compiler](../tools/compile)


## step 1 - select your images

Head over to the compiler and you will see this

<blockquote>

![img](/img/compile/step1.png)

</blockquote>

In this QuickStart demo, we will be using this image, so please <a href={cardImage} target="_blank">download this image</a> first

<img src={cardImage} width="300" />

Then, drop this image to the compiler and click `Start`.

## step 2 - visualize the features 

Once the compilation is done, we will see some features visualization.

<blockquote>

![img](/img/compile/step2.png)

</blockquote>
 
This visualization tool gives you an idea of the feature distributions of your images. In general, you want to have good amount of features with well distribution. Actually, this sample isn't a very good one because you can see a blank space on the top left corner.

<br/><br/>

If you want to learn more about that, this article series give a detailed explanation about how to choose good target images. 
https://blog.pictarize.com/how-to-choose-a-good-target-image-for-tracking-in-ar-part-1/

## step 3 - download .mind file 

At the bottom of the visualization, you will see a `Download` button. This will gives you a `targets.mind` file. It stores the feature data in compact format, and we will need this later when building the webpage.

