(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4241],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),u=i,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||n;return a?r.createElement(g,s(s({ref:t},p),{},{components:a})):r.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1410:e=>{e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.2.0"}}},6679:e=>{e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"doc",id:"installation-v1-1-x"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},2653:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=a(7462),i=(a(7294),a(3905)),n=a(1410);const s={id:"overview",title:"Overview",sidebar_label:"Overview"},o=void 0,c={unversionedId:"quick-start/overview",id:"quick-start/overview",title:"Overview",description:"MindAR project can be run in plain static HTML file. It's super easy!",source:"@site/docs/quick-start/overview.md",sourceDirName:"quick-start",slug:"/quick-start/overview",permalink:"/mind-ar-js-doc/quick-start/overview",draft:!1,tags:[],version:"current",frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Installation - v1.1.x",permalink:"/mind-ar-js-doc/installation-v1-1-x"},next:{title:"Compile Target Images",permalink:"/mind-ar-js-doc/quick-start/compile"}},l={},p=[],m={toc:p};function d(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MindAR project can be run in plain static HTML file. It's super easy!"),(0,i.kt)("p",null,"In this quick start guide, you will build a AR webpage, which will ",(0,i.kt)("strong",{parentName:"p"},"start the device camera"),", ",(0,i.kt)("strong",{parentName:"p"},"detect an image target"),", and show an ",(0,i.kt)("strong",{parentName:"p"},"augmented object")," on top."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:a(6516).Z,width:"400",height:"400"})),(0,i.kt)("p",null,"To give you a quick idea of how easy it is, below is the ",(0,i.kt)("strong",{parentName:"p"},"complete source")," for the example!"),(0,i.kt)("code",null,`\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://aframe.io/releases/1.3.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/mind-ar@${n.customFields.libVersion}/dist/mindar-image-aframe.prod.js"><\/script>\n  </head>\n  <body>\n    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${n.customFields.libVersion}/examples/image-tracking/assets/card-example/card.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-assets>\n        <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${n.customFields.libVersion}/examples/image-tracking/assets/card-example/card.png" />\n        <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@${n.customFields.libVersion}/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>\n      </a-assets>\n\n      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n      <a-entity mindar-image-target="targetIndex: 0">\n        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate">\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n`),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Let's go!")))}d.isMDXComponent=!0},6516:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/basic-demo-fde07aa7567bf213e61b37dbaa192fec.gif"}}]);