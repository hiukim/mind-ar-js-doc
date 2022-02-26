(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3217],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return d},kt:function(){return u}});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=o(i),u=n,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||a;return i?r.createElement(g,s(s({ref:t},d),{},{components:i})):r.createElement(g,s({ref:t},d))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var o=2;o<a;o++)s[o]=i[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},9803:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var r=i(3117),n=i(102),a=(i(7294),i(3905)),s=i(1410),c=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation"},o=void 0,d={unversionedId:"installation",id:"installation",title:"Installation",description:"MindAR project can be run directly in plain static HTML file. It's super easy!",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/mind-ar-js-doc/installation",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Home",permalink:"/mind-ar-js-doc/"},next:{title:"Overview",permalink:"/mind-ar-js-doc/quick-start/overview"}},p=[{value:"AFRAME installation",id:"aframe-installation",children:[{value:"1. HTML script",id:"1-html-script",children:[{value:"Image Tracking",id:"image-tracking",children:[],level:4},{value:"Face Tracking",id:"face-tracking",children:[],level:4}],level:3},{value:"2. npm",id:"2-npm",children:[{value:"Image Tracking",id:"image-tracking-1",children:[],level:4},{value:"Face Tracking",id:"face-tracking-1",children:[],level:4}],level:3}],level:2},{value:"THREE.js installation",id:"threejs-installation",children:[{value:"1. HTML script",id:"1-html-script-1",children:[{value:"Image Tracking",id:"image-tracking-2",children:[],level:4},{value:"Face Tracking",id:"face-tracking-2",children:[],level:4}],level:3},{value:"2. npm",id:"2-npm-1",children:[{value:"Image Tracking",id:"image-tracking-3",children:[],level:4},{value:"Face Tracking",id:"face-tracking-3",children:[],level:4}],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,i=(0,n.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"MindAR project can be run directly in plain static HTML file. It's super easy! "),(0,a.kt)("p",null,"MindAR comes with different types of tracking capabilities, including Image Tracking and Face Tracking. To minimize library size, each of these are independently built. Moreover, MindAR provides native support for three.js or AFRAME. They are also being built independently. So altogehter, there are 2x2 = 4 sets of distributions."),(0,a.kt)("h2",{id:"aframe-installation"},"AFRAME installation"),(0,a.kt)("p",null,"For each type of tracking, there are two javascript files: ",(0,a.kt)("inlineCode",{parentName:"p"},"mindar-[TYPE].prod.js")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mindar-[TYPE]-aframe.prod.js")),(0,a.kt)("p",null,"The first one is the core tracking library while the second one is a aframe extension. Normally, you will import the first script, followed by aframe library, then followed by the second script. We decided to not embed AFRAME inside MindAR to make it more flexible. Also, for highly customizable applications, you can write your own aframe extension (second script)."),(0,a.kt)("p",null,"There are two generally two ways to install the library."),(0,a.kt)("h3",{id:"1-html-script"},"1. HTML script"),(0,a.kt)("h4",{id:"image-tracking"},"Image Tracking"),(0,a.kt)("code",null,'<script src="https://cdn.jsdelivr.net/npm/mind-ar@'+s.customFields.libVersion+'/dist/mindar-image.prod.js"><\/script>\n<script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@'+s.customFields.libVersion+'/dist/mindar-image-aframe.prod.js"><\/script>\n'),(0,a.kt)("h4",{id:"face-tracking"},"Face Tracking"),(0,a.kt)("code",null,'<script src="https://cdn.jsdelivr.net/npm/mind-ar@'+s.customFields.libVersion+'/dist/mindar-face.prod.js"><\/script>\n<script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@'+s.customFields.libVersion+'/dist/mindar-face-aframe.prod.js"><\/script>\n'),(0,a.kt)("h3",{id:"2-npm"},"2. npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> npm i mind-ar --save\n> npm i aframe --save\n")),(0,a.kt)("h4",{id:"image-tracking-1"},"Image Tracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-image.prod.js';\nimport 'aframe';\nimport 'mind-ar/dist/mindar-image-aframe.prod.js';\n")),(0,a.kt)("h4",{id:"face-tracking-1"},"Face Tracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-face.prod.js';\nimport 'aframe';\nimport 'mind-ar/dist/mindar-face-aframe.prod.js';\n")),(0,a.kt)("h2",{id:"threejs-installation"},"THREE.js installation"),(0,a.kt)("p",null,"Three.js integration is simpler. You only need to import a single script. "),(0,a.kt)("h3",{id:"1-html-script-1"},"1. HTML script"),(0,a.kt)("h4",{id:"image-tracking-2"},"Image Tracking"),(0,a.kt)("code",null,'<script src="https://cdn.jsdelivr.net/npm/mind-ar@'+s.customFields.libVersion+'/dist/mindar-image-three.prod.js"><\/script>\n'),(0,a.kt)("h4",{id:"face-tracking-2"},"Face Tracking"),(0,a.kt)("code",null,'script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/dist/mindar-face-three.prod.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/mind-ar@'+s.customFields.libVersion+'/dist/mindar-face-three.prod.js"><\/script>\n'),(0,a.kt)("h3",{id:"2-npm-1"},"2. npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"> npm i mind-ar --save\n")),(0,a.kt)("h4",{id:"image-tracking-3"},"Image Tracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-image-three.prod.js';\n")),(0,a.kt)("h4",{id:"face-tracking-3"},"Face Tracking"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import 'mind-ar/dist/mindar-face-three.prod.js';\n")))}u.isMDXComponent=!0}}]);