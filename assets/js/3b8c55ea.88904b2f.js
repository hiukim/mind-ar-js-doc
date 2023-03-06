(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3217],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1410:e=>{e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.2.1"}}},6679:e=>{e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"doc",id:"installation-v1-1-x"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},9803:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=a(1410);const s={id:"installation",title:"Installation",sidebar_label:"Installation"},l=void 0,o={unversionedId:"installation",id:"installation",title:"Installation",description:"Since v1.2.0, MindAR migrated to ES Module, which align with ThreeJS v137 and onwards. For prior version of MindAR, please go to Installation-v1.1.x",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/mind-ar-js-doc/installation",draft:!1,tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Home",permalink:"/mind-ar-js-doc/"},next:{title:"Installation - v1.1.x",permalink:"/mind-ar-js-doc/installation-v1-1-x"}},c={},p=[{value:"AFRAME installation",id:"aframe-installation",level:2},{value:"1. HTML script",id:"1-html-script",level:3},{value:"Image Tracking",id:"image-tracking",level:4},{value:"Face Tracking",id:"face-tracking",level:4},{value:"2. npm",id:"2-npm",level:3},{value:"Image Tracking",id:"image-tracking-1",level:4},{value:"Face Tracking",id:"face-tracking-1",level:4},{value:"THREE.js installation",id:"threejs-installation",level:2},{value:"1. HTML script",id:"1-html-script-1",level:3},{value:"Image Tracking",id:"image-tracking-2",level:4},{value:"Face Tracking",id:"face-tracking-2",level:4},{value:"2. npm",id:"2-npm-1",level:3},{value:"Image Tracking",id:"image-tracking-3",level:4},{value:"Face Tracking",id:"face-tracking-3",level:4}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Since v1.2.0, MindAR migrated to ES Module, which align with ThreeJS v137 and onwards. For prior version of MindAR, please go to ",(0,r.kt)("a",{parentName:"strong",href:"./installation-v1-1-x"},"Installation-v1.1.x"))),(0,r.kt)("p",null,"MindAR project can be run directly in plain static HTML file. It's super easy! "),(0,r.kt)("p",null,"MindAR comes with different types of tracking capabilities, including Image Tracking and Face Tracking. To minimize library size, each of these are independently built. Moreover, MindAR provides native support for three.js or AFRAME. They are also being built independently. So altogether, there are 2x2 = 4 sets of distributions."),(0,r.kt)("p",null,"There are two generally two ways to install the library, either through ",(0,r.kt)("inlineCode",{parentName:"p"},"HTML script")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")),(0,r.kt)("h2",{id:"aframe-installation"},"AFRAME installation"),(0,r.kt)("h3",{id:"1-html-script"},"1. HTML script"),(0,r.kt)("h4",{id:"image-tracking"},"Image Tracking"),(0,r.kt)("code",null,`<script src="https://aframe.io/releases/1.4.1/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@${i.customFields.libVersion}/dist/mindar-image-aframe.prod.js"><\/script>\n`),(0,r.kt)("h4",{id:"face-tracking"},"Face Tracking"),(0,r.kt)("code",null,`<script src="https://aframe.io/releases/1.4.1/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@${i.customFields.libVersion}/dist/mindar-face-aframe.prod.js"><\/script>\n`),(0,r.kt)("h3",{id:"2-npm"},"2. npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm i mind-ar --save\n> npm i aframe --save\n")),(0,r.kt)("h4",{id:"image-tracking-1"},"Image Tracking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import 'aframe';\nimport 'mind-ar/dist/mindar-image-aframe.prod.js';\n")),(0,r.kt)("h4",{id:"face-tracking-1"},"Face Tracking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import 'aframe';\nimport 'mind-ar/dist/mindar-face-aframe.prod.js';\n")),(0,r.kt)("h2",{id:"threejs-installation"},"THREE.js installation"),(0,r.kt)("p",null,"To align with ThreeJS official installation of using ES module and importmaps since v137, MindAR threeJS version also follows a similar pattern."),(0,r.kt)("p",null,"Since MindAR v1.2.0, ThreeJS becomes an external dependency, so you can choose your own ThreeJS version, but the minimum supported version is v137."),(0,r.kt)("h3",{id:"1-html-script-1"},"1. HTML script"),(0,r.kt)("h4",{id:"image-tracking-2"},"Image Tracking"),(0,r.kt)("code",null,`<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"><\/script>\n<script type="importmap">\n{\n  "imports": {\n    "three": "https://unpkg.com/three@0.147.0/build/three.module.js",\n    "three/addons/": "https://unpkg.com/three@0.147.0/examples/jsm/",\n    "mindar-image-three":"https://cdn.jsdelivr.net/npm/mind-ar@${i.customFields.libVersion}/dist/mindar-image-three.prod.js"\n  }\n}\n<\/script>\n`),(0,r.kt)("p",null,"and then in your application:"),(0,r.kt)("code",null,"<script type=\"module\">\n  import * as THREE from 'three';\n  import { MindARThree } from 'mindar-image-three';\n<\/script>\n"),(0,r.kt)("h4",{id:"face-tracking-2"},"Face Tracking"),(0,r.kt)("code",null,`<script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"><\/script>\n<script type="importmap">\n{\n  "imports": {\n    "three": "https://unpkg.com/three@0.147.0/build/three.module.js",\n    "three/addons/": "https://unpkg.com/three@0.147.0/examples/jsm/",\n    "mindar-face-three":"https://cdn.jsdelivr.net/npm/mind-ar@${i.customFields.libVersion}/dist/mindar-face-three.prod.js"\n  }\n}\n<\/script>\n`),(0,r.kt)("p",null,"and then in your application:"),(0,r.kt)("code",null,"<script type=\"module\">\n  import * as THREE from 'three';\n  import { MindARThree } from 'mindar-face-three';\n<\/script>\n"),(0,r.kt)("h3",{id:"2-npm-1"},"2. npm"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm i mind-ar --save\n")),(0,r.kt)("h4",{id:"image-tracking-3"},"Image Tracking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';\n")),(0,r.kt)("h4",{id:"face-tracking-3"},"Face Tracking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import {MindARThree} from 'mind-ar/dist/mindar-face-three.prod.js';\n")))}d.isMDXComponent=!0}}]);