---
id: run
title: Run It 
sidebar_label: Run It
---

import minimalDemoImage from '@site/static/img/demo/face-minimal-demo.png'

## Web server

Although, it's a simple html page, you probably cannot run it simply by opening the file in browser. The reason is that the page requires camera access.

I believe there are many possible workarounds to that problems, like setting the browser policy or something. One way to this problem is to setup a localhost server that can server webpage.

If you are a web developer, I'm sure you probably have some sort of localhost already in your machine. If not, you can try this chrome extension: <a href="https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb" target="_blank">Web Server for Chrome</a>. It will launch a simple web server, and you can use it to open the `index.html` built in the last section.

## Effect 
If you can successfully launch the page, the camera will start. After you point it to any face, you will see a green sphere stick at the nose tip.

<img src={minimalDemoImage} width="300" />

You should try to change the anchorIndex to something else to see how the position of the green sphere changes.

Make sure you get it working before going to the next section, in which we will start doing interesting stuff!
