(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5348],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},678:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return p},default:function(){return g}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=n(1410),s=n(4996),l=["components"],c={id:"events-handling",title:"Events Handling",sidebar_label:"Events Handling"},d=void 0,m={unversionedId:"face-tracking-examples/events-handling",id:"face-tracking-examples/events-handling",title:"Events Handling",description:"This example demonstrates how to handle events from MindAR engine. It also explains how to programatically control the lifecycle of AR engine, including start, stop and switching camera.",source:"@site/docs/face-tracking-examples/events-handling.md",sourceDirName:"face-tracking-examples",slug:"/face-tracking-examples/events-handling",permalink:"/mind-ar-js-doc/face-tracking-examples/events-handling",tags:[],version:"current",frontMatter:{id:"events-handling",title:"Events Handling",sidebar_label:"Events Handling"},sidebar:"docs",previous:{title:"Virtual Try-On",permalink:"/mind-ar-js-doc/face-tracking-examples/tryon"},next:{title:"React",permalink:"/mind-ar-js-doc/more-examples/react"}},p=[{value:"Try it out",id:"try-it-out",children:[],level:2},{value:"Source",id:"source",children:[],level:2},{value:"arSystem",id:"arsystem",children:[],level:2},{value:"Events",id:"events",children:[{value:"<code>arReady</code>",id:"arready",children:[],level:3},{value:"<code>arError</code>",id:"arerror",children:[],level:3},{value:"<code>targetFound</code> and <code>targetLost</code>",id:"targetfound-and-targetlost",children:[],level:3}],level:2}],u={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example demonstrates how to handle events from MindAR engine. It also explains how to programatically control the lifecycle of AR engine, including start, stop and switching camera."),(0,o.kt)("p",null,"The full source code is attached first and we will go through them one by one."),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)("a",{href:(0,s.Z)("/face-tracking-samples/events.html"),target:"_blank"},"Live Demo"),(0,o.kt)("h2",{id:"source"},"Source"),(0,o.kt)("code",null,'\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+i.customFields.libVersion+'/dist/mindar-face.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+i.customFields.libVersion+'/dist/mindar-face-aframe.prod.js"><\/script>\n    <script>\n      document.addEventListener("DOMContentLoaded", function() {\n\tconst sceneEl = document.querySelector(\'a-scene\');\n\tconst arSystem = sceneEl.systems["mindar-face-system"];\n\tconst startButton = document.querySelector("#example-start-button");\n\tconst stopButton = document.querySelector("#example-stop-button");\n\tconst switchCameraButton = document.querySelector("#example-switch-camera-button");\n\t// arReady event triggered when ready\n        sceneEl.addEventListener("arReady", (event) => {\n\t  console.log("ar ready");\n        });\n\t// detect target found\n        sceneEl.addEventListener("targetFound", event => {\n          console.log("target found");\n        });\n\t// detect target lost\n        sceneEl.addEventListener("targetLost", event => {\n          console.log("target lost");\n        });\n\t// arError event triggered when something went wrong. Mostly browser compatbility issue\n        sceneEl.addEventListener("arError", (event) => {\n\t  console.log("ar error");\n        });\n\tstartButton.addEventListener(\'click\', () => {\n\t  arSystem.start(); // start AR \n        });\n\tstopButton.addEventListener(\'click\', () => {\n\t  arSystem.stop(); // stop\n\t});\n\tswitchCameraButton.addEventListener(\'click\', () => {\n\t  arSystem.switchCamera();\n\t});\n      });\n    <\/script>\n    <style>\n      body {\n        margin: 0;\n      }\n      .example-container {\n        overflow: hidden;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n      }\n      #example-control-overlay {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbackground: none;\n\theight: 30px;\n\tz-index: 2;\n      }\n      #example-control-overlay >div {\n\tposition: absolute;\n\tright: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="example-container">\n      <div id="example-control-overlay" class="overlay">\n\t<div>\n\t  <button id="example-start-button">Start</button>\n\t  <button id="example-stop-button">Stop</button>\n\t  <button id="example-switch-camera-button">Switch Camera</button>\n\t</div>\n      </div>\n      <a-scene mindar-face="autoStart: false" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n        <a-camera active="false" position="0 0 0" look-controls="false"></a-camera>\n        <a-entity mindar-face-target="anchorIndex: 1">\n\t  <a-sphere color="green" radius="0.1"></a-sphere>\n        </a-entity>\n      </a-scene>\n    </div>\n  </body>\n</html>\n'),(0,o.kt)("h2",{id:"arsystem"},"arSystem"),(0,o.kt)("p",null,"The first thing to introduce is the ",(0,o.kt)("inlineCode",{parentName:"p"},"arSystem")," component. It's embedded inside ",(0,o.kt)("inlineCode",{parentName:"p"},"a-scene")," and you can get the object by the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const sceneEl = document.querySelector('a-scene');\nconst arSystem = sceneEl.systems[\"mindar-face-system\"];\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"arSystem")," provides a few api call to control the engine lifecycle "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"arSystem.start(); // start the engine \narSystem.stop(); // stop the engine\narSystem.switchCamera(); // switch between front/back cameras\n")),(0,o.kt)("p",null,"By default, AR engine will start immediately, but you can disable the auto start by giving a param ",(0,o.kt)("inlineCode",{parentName:"p"},"autoStart: false")," inside ",(0,o.kt)("inlineCode",{parentName:"p"},"<a-scene>")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"MindAR will fire the events when the followings happen:"),(0,o.kt)("h3",{id:"arready"},(0,o.kt)("inlineCode",{parentName:"h3"},"arReady")),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},"arSystem.start()"),", or autostart, AR engine needs to boot up, when it's ready, this event will be fired up. You can listen to this event throught the scene element"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const sceneEl = document.querySelector(\'a-scene\');\nsceneEl.addEventListener("arReady", (event) => {\n  // console.log("MindAR is ready")\n});\n')),(0,o.kt)("h3",{id:"arerror"},(0,o.kt)("inlineCode",{parentName:"h3"},"arError")),(0,o.kt)("p",null,"Sometimes, AR engine might be failed to start. There could be many reasons, but one most likely reason is camera failed to start. When this happens, this event will be fired up."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const sceneEl = document.querySelector(\'a-scene\');\nsceneEl.addEventListener("arError", (event) => {\n  // console.log("MindAR failed to start")\n});\n')),(0,o.kt)("h3",{id:"targetfound-and-targetlost"},(0,o.kt)("inlineCode",{parentName:"h3"},"targetFound")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"targetLost")),(0,o.kt)("p",null,"This events are fired up when a face is detected/lost. You can listen to these events through the ",(0,o.kt)("inlineCode",{parentName:"p"},"<a-entity>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sceneEl.addEventListener("targetFound", event => {\n  console.log("target found");\n});\n\nsceneEl.addEventListener("targetLost", event => {\n  console.log("target lost");\n});\n\n')))}g.isMDXComponent=!0}}]);