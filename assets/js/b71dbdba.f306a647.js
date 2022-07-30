(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[2371],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},7375:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=a(3117),i=(a(7294),a(3905)),r=a(1410);const o={id:"webpage",title:"Build the page",sidebar_label:"Build the page"},s=void 0,l={unversionedId:"face-tracking-quick-start/webpage",id:"face-tracking-quick-start/webpage",title:"Build the page",description:"MindAR application can be as simple as a regular webpage, which is a single .html file.",source:"@site/docs/face-tracking-quick-start/webpage.md",sourceDirName:"face-tracking-quick-start",slug:"/face-tracking-quick-start/webpage",permalink:"/mind-ar-js-doc/face-tracking-quick-start/webpage",draft:!1,tags:[],version:"current",frontMatter:{id:"webpage",title:"Build the page",sidebar_label:"Build the page"},sidebar:"docs",previous:{title:"Overview",permalink:"/mind-ar-js-doc/face-tracking-quick-start/overview"},next:{title:"Run It",permalink:"/mind-ar-js-doc/face-tracking-quick-start/run"}},c={},p=[{value:"Minimal Example",id:"minimal-example",level:3},{value:"standard HTML stuff",id:"standard-html-stuff",level:3},{value:"mind-ar-js and aframe library",id:"mind-ar-js-and-aframe-library",level:3},{value:"aframe",id:"aframe",level:3},{value:"scale",id:"scale",level:3},{value:"rotation",id:"rotation",level:3},{value:"anchor points",id:"anchor-points",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MindAR application can be as simple as a regular webpage, which is a single .html file."),(0,i.kt)("h3",{id:"minimal-example"},"Minimal Example"),(0,i.kt)("p",null,"Let's start with a minimal example to understand how face tracking work in MindAR. Create a blank index.html with editor of your choices and paste the following content:"),(0,i.kt)("code",null,'\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-face.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-face-aframe.prod.js"><\/script>\n  </head>\n  <body>\n    <a-scene mindar-face embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-camera active="false" position="0 0 0"></a-camera>\n      <a-entity mindar-face-target="anchorIndex: 1">\n\t<a-sphere color="green" radius="0.1"></a-sphere>\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n'),(0,i.kt)("p",null,"Let's digest them:"),(0,i.kt)("h3",{id:"standard-html-stuff"},"standard HTML stuff"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"html"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"head"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"meta")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," are just standard html stuff, and we will skip."),(0,i.kt)("h3",{id:"mind-ar-js-and-aframe-library"},"mind-ar-js and aframe library"),(0,i.kt)("code",null,'<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-face.prod.js"><\/script>\n<script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-face-aframe.prod.js"><\/script>\n'),(0,i.kt)("p",null,"They are the ",(0,i.kt)("inlineCode",{parentName:"p"},"mindar")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"aframe")," library hosted in cdn. They are the only things you need to build a web AR application!"),(0,i.kt)("h3",{id:"aframe"},"aframe"),(0,i.kt)("p",null,"MindAR comes with an AFRAME extension that allows you to construct a 3D scene easily. We will not go into the details of AFRAME in this tutorial. If you want to learn more about it, please refer to ",(0,i.kt)("a",{href:"https://aframe.io/",target:"_blank"},"AFRAME")),(0,i.kt)("p",null,"In short, you can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"<a-scene>")," block inside ",(0,i.kt)("inlineCode",{parentName:"p"},"body"),". This is the main part of the application. If you don't have AFRAME background, don't worry. Most of the time you can just copy this block of code as a template to start."),(0,i.kt)("p",null,"We'll highlight two things here related to MindAR. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Within ",(0,i.kt)("inlineCode",{parentName:"p"},"<a-scene>")," you can see a property ",(0,i.kt)("inlineCode",{parentName:"p"},"mindar-face"),". It tells MindAR engine to control this scene")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There is an ",(0,i.kt)("inlineCode",{parentName:"p"},"<a-entity>"),", with a prpoerty ",(0,i.kt)("inlineCode",{parentName:"p"},'mindar-face-target="anchorIndex: 1"'),'. It tells the engine to track a particular anchor position (in this case position "1", which is the nose tip), and stick this entity to that position.'))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Remember this. The AR engine does ONE thing! - It updates the visibility and positions of a-entity")),(0,i.kt)("h3",{id:"scale"},"scale"),(0,i.kt)("p",null,"MindAR engine will scale the entity according to the size of the face. More specially, the width of the face is 1 unit of length. You can see that we set the green sphere size to 0.1 radius in the above example, and it will cover rougly 20% of the face in width."),(0,i.kt)("h3",{id:"rotation"},"rotation"),(0,i.kt)("p",null,"MindAR engine uses the relative positions of two eyes to compute the face orientation, and the anchored objects will automatically rotated accordingly."),(0,i.kt)("h3",{id:"anchor-points"},"anchor points"),(0,i.kt)("p",null,"MindAR provides 486 anchor points on the face, and you can anchor object on any of them. Detailed positions can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tensorflow/tfjs-models/blob/master/facemesh/mesh_map.jpg"},"https://github.com/tensorflow/tfjs-models/blob/master/facemesh/mesh_map.jpg")))}m.isMDXComponent=!0}}]);