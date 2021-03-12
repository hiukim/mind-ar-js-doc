---
id: run
title: Run It 
sidebar_label: Run It
---

import minimalDemoImage from '@site/static/img/demo/minimal-demo.jpeg'
import cardImage from '@site/static/img/demo/card.png'

## Web server

Although, it's a simple html page, you probably cannot run it simply by opening the file in browser. The reason is that the page requires camera access.

I believe there are many possible workarounds to that problems, like setting the browser policy or something. One way to this problem is to setup a localhost server that can server webpage.

If you are web developer, I'm sure you probably have some sort of localhost already in your machine. If not, you can try this chrome extension: <a href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb" target="_blank">Web Server for Chrome</a>. It will launch a simple web server, and you can use it to open the `index.html` built in the last section.

## Effect 
If you can successfully launch the page, the camera will start. After you point it to the image target, you will see a blue rectangle sticked on top.

<img src={minimalDemoImage} width="300" />

## How to Test

It's likely that you now are using your desktop computer to go through this tutorial. In that case, you can start run the webpage with your computer, which hopefully has equiped with a webcam.

Then, you can use your mobile phone to open this target image, and put your phone screen in front of your desktop webcam to see the effect.

<img src={cardImage} width="300" />

If you don't have two devices, you can also choose to print this image out and test it in paper.


Make sure you get it working before going to the next section, in which we will start doing interesting stuff!
