(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5951],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1410:e=>{e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.2.0"}}},6679:e=>{e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"doc",id:"installation-v1-1-x"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},3165:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(1410),i=n(4996);const s={id:"events-handling",title:"Events Handling",sidebar_label:"Events Handling"},l=void 0,c={unversionedId:"examples/events-handling",id:"examples/events-handling",title:"Events Handling",description:"This section requires basic knowledge of web development",source:"@site/docs/examples/event-handling.md",sourceDirName:"examples",slug:"/examples/events-handling",permalink:"/mind-ar-js-doc/examples/events-handling",draft:!1,tags:[],version:"current",frontMatter:{id:"events-handling",title:"Events Handling",sidebar_label:"Events Handling"},sidebar:"docs",previous:{title:"Custom UI",permalink:"/mind-ar-js-doc/examples/custom-ui"},next:{title:"Interactive",permalink:"/mind-ar-js-doc/examples/interative"}},d={},p=[{value:"Try it out",id:"try-it-out",level:2},{value:"Complete Source",id:"complete-source",level:3},{value:"arSystem",id:"arsystem",level:2},{value:"Events",id:"events",level:2},{value:"<code>arReady</code>",id:"arready",level:3},{value:"<code>arError</code>",id:"arerror",level:3},{value:"<code>targetFound</code> and <code>targetLost</code>",id:"targetfound-and-targetlost",level:3},{value:"<code>click</code>",id:"click",level:3},{value:"Wrapping up",id:"wrapping-up",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This section requires basic knowledge of web development")),(0,r.kt)("h2",{id:"try-it-out"},"Try it out"),(0,r.kt)("p",null,"To try this example, you need to run on desktop browser and open the development console to see the logs. ",(0,r.kt)("a",{href:(0,i.Z)("/samples/events.html"),target:"_blank"},"Live Demo")),(0,r.kt)("p",null,"We will go through the available events one by one in the following sub-sections. "),(0,r.kt)("h3",{id:"complete-source"},"Complete Source"),(0,r.kt)("code",null,`\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${o.customFields.libVersion}/dist/mindar-image.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${o.customFields.libVersion}/dist/mindar-image-aframe.prod.js"><\/script>\n    <script>\n      document.addEventListener("DOMContentLoaded", function() {\n\tconst sceneEl = document.querySelector('a-scene');\n\tconst arSystem = sceneEl.systems["mindar-image-system"];\n\tconst exampleTarget = document.querySelector('#example-target');\n\tconst examplePlane = document.querySelector('#example-plane');\n\tconst startButton = document.querySelector("#example-start-button");\n\tconst stopButton = document.querySelector("#example-stop-button");\n\tconst pauseButton = document.querySelector("#example-pause-button");\n\tconst pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");\n\tconst unpauseButton = document.querySelector("#example-unpause-button");\n\tstartButton.addEventListener('click', () => {\n\t  console.log("start");\n\t  arSystem.start(); // start AR \n\t});\n\tstopButton.addEventListener('click', () => {\n\t  arSystem.stop(); // stop AR \n\t});\n\tpauseButton.addEventListener('click', () => {\n\t  arSystem.pause(); // pause AR, keep video feed\n\t});\n\tpauseKeepVideoButton.addEventListener('click', () => {\n\t  arSystem.pause(true); // pause AR and video\n\t});\n\tunpauseButton.addEventListener('click', () => {\n\t  arSystem.unpause(); // unpause AR and video\n\t});\n\t// arReady event triggered when ready\n\tsceneEl.addEventListener("arReady", (event) => {\n\t  // console.log("MindAR is ready")\n\t});\n\t// arError event triggered when something went wrong. Mostly browser compatbility issue\n\tsceneEl.addEventListener("arError", (event) => {\n\t  // console.log("MindAR failed to start")\n\t});\n\t// detect target found\n\texampleTarget.addEventListener("targetFound", event => {\n\t  console.log("target found");\n\t});\n\t// detect target lost\n\texampleTarget.addEventListener("targetLost", event => {\n\t  console.log("target lost");\n\t});\n\t// detect click event\n\texamplePlane.addEventListener("click", event => {\n\t  console.log("plane click");\n\t});\n      });\n    <\/script>\n  </head>\n  <body>\n    <div style="position: absolute; z-index: 1000">\n      <button id="example-start-button">Start</button>\n      <button id="example-pause-button">Pause</button>\n      <button id="example-pause-keep-video-button">Pause (keep video)</button>\n      <button id="example-unpause-button">UnPause</button>\n      <button id="example-stop-button">Stop</button>\n    </div>\n    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${o.customFields.libVersion}/examples/image-tracking/assets/card-example/card.mind; autoStart: false;" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: ${o.customFields.libVersion}; objects: .clickable"></a-camera>\n\n      <a-entity id="example-target" mindar-image-target="targetIndex: 0">\n\t<a-plane id="example-plane" class="clickable" color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n`),(0,r.kt)("h2",{id:"arsystem"},"arSystem"),(0,r.kt)("p",null,"The first thing to introduce is the ",(0,r.kt)("inlineCode",{parentName:"p"},"arSystem")," component. It's embedded inside ",(0,r.kt)("inlineCode",{parentName:"p"},"a-scene")," and you can get the object by the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const sceneEl = document.querySelector('a-scene');\nconst arSystem = sceneEl.systems[\"mindar-image-system\"];\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"arSystem")," provides a few api call to control the engine lifecycle "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"arSystem.start(); // start the engine \narSystem.stop(); // stop the engine\narSystem.pause(keepVideo=false); // pause the engine. It has an optional parameter. if true, then ar will stop, but camera feed will keep\narSystem.unpause(); // unpause\n")),(0,r.kt)("p",null,"By default, AR engine will start immediately, but you can disable the auto start by giving a param ",(0,r.kt)("inlineCode",{parentName:"p"},"autoStart: false")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"<a-scene>")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"MindAR will fire the events when happen:"),(0,r.kt)("h3",{id:"arready"},(0,r.kt)("inlineCode",{parentName:"h3"},"arReady")),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"arSystem.start()"),", or autostart, AR engine needs to boot up, when it's ready, this event will be fired up. You can listen to this event through the scene element"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const sceneEl = document.querySelector(\'a-scene\');\nsceneEl.addEventListener("arReady", (event) => {\n  // console.log("MindAR is ready")\n});\n')),(0,r.kt)("h3",{id:"arerror"},(0,r.kt)("inlineCode",{parentName:"h3"},"arError")),(0,r.kt)("p",null,"Sometimes, AR engine might be failed to start. There could be many reasons, but one most likely reason is camera failed to start. When this happens, this event will be fired up."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'const sceneEl = document.querySelector(\'a-scene\');\nsceneEl.addEventListener("arError", (event) => {\n  // console.log("MindAR failed to start")\n});\n')),(0,r.kt)("h3",{id:"targetfound-and-targetlost"},(0,r.kt)("inlineCode",{parentName:"h3"},"targetFound")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"targetLost")),(0,r.kt)("p",null,"This events are fired up when the image target is detected/lost. You can listen to these events through the ",(0,r.kt)("inlineCode",{parentName:"p"},"<a-entity>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// detect target found\nconst exampleTarget = document.querySelector(\'#example-target\');\nexampleTarget.addEventListener("targetFound", event => {\n  console.log("target found");\n});\n\n// detect target lost\nexampleTarget.addEventListener("targetLost", event => {\n  console.log("target lost");\n});\n\n<a-entity id="example-target" mindar-image-target="targetIndex: 0">\n</a-entity>\n\n')),(0,r.kt)("h3",{id:"click"},(0,r.kt)("inlineCode",{parentName:"h3"},"click")),(0,r.kt)("p",null,"When you want to do interaction with the content, one thing you likely want to detect is when the user click/touch a certain elements. Actually, this is ",(0,r.kt)("inlineCode",{parentName:"p"},"AFRAME")," stuff, but we'll also included here for reference."),(0,r.kt)("p",null,"First, you need to include the following ",(0,r.kt)("inlineCode",{parentName:"p"},"cursor")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"raycaster")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"<a-camera>")," element like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: ${customFields.libVersion}; objects: .clickable"></a-camera>\n\n')),(0,r.kt)("p",null,"and then in the object that you want to detect, add a class ",(0,r.kt)("inlineCode",{parentName:"p"},"clickable"),". Actually, it doesn't mean to be ",(0,r.kt)("inlineCode",{parentName:"p"},"clickable"),", but the same as what you specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"raycaster")," above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<a-plane id="example-plane" class="clickable" color="blue" opacity="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n\n')),(0,r.kt)("p",null,"Then, it's ready. You can listen to the click event like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// detect click event\nconst examplePlane = document.querySelector(\'#example-plane\');\nexamplePlane.addEventListener("click", event => {\n  console.log("plane click");\n});\n')),(0,r.kt)("h2",{id:"wrapping-up"},"Wrapping up"),(0,r.kt)("p",null,"Cool, you have now basically learnt everything about MindAR image tracking. It should gives you enough tool to do some very cool applications!"))}m.isMDXComponent=!0}}]);