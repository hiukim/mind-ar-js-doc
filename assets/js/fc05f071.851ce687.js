(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9241],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(a),p=i,g=u["".concat(c,".").concat(p)]||u[p]||d[p]||n;return a?r.createElement(g,s(s({ref:t},m),{},{components:a})):r.createElement(g,s({ref:t},m))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},206:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return g},default:function(){return h}});var r=a(3117),i=a(102),n=(a(7294),a(3905)),s=a(1410),o=a(4996),c=a(5803),l=a(110),m=["components"],d={id:"multi-targets",title:"Multi-Targets",sidebar_label:"Multi-Targets"},u=void 0,p={unversionedId:"examples/multi-targets",id:"examples/multi-targets",title:"Multi-Targets",description:"MindAR allows you to compile multiple target images, and show different AR effects individually, like this demo:",source:"@site/docs/examples/multitargets.md",sourceDirName:"examples",slug:"/examples/multi-targets",permalink:"/mind-ar-js-doc/examples/multi-targets",tags:[],version:"current",frontMatter:{id:"multi-targets",title:"Multi-Targets",sidebar_label:"Multi-Targets"},sidebar:"docs",previous:{title:"Basic",permalink:"/mind-ar-js-doc/examples/basic"},next:{title:"Multi-Tracks",permalink:"/mind-ar-js-doc/examples/multi-tracks"}},g=[{value:"Try it out",id:"try-it-out",children:[],level:2},{value:"Source",id:"source",children:[],level:2}],f={toc:g};function h(e){var t=e.components,d=(0,i.Z)(e,m);return(0,n.kt)("wrapper",(0,r.Z)({},f,d,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"MindAR allows you to compile multiple target images, and show different AR effects individually, like this demo:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(3142).Z,width:"480",height:"492"})),(0,n.kt)("h2",{id:"try-it-out"},"Try it out"),(0,n.kt)("a",{href:(0,o.Z)("/samples/multi-targets.html"),target:"_blank"},"Live Demo"),(0,n.kt)("p",null,"You can use the following target images for testing:"),(0,n.kt)("img",{src:c.Z,width:"300"}),"\xa0",(0,n.kt)("img",{src:l.Z,width:"300"}),(0,n.kt)("h2",{id:"source"},"Source"),(0,n.kt)("code",null,'\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/dist/mindar-image.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/dist/mindar-image-aframe.prod.js"><\/script>\n  </head>\n  <body>\n    <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/image-tracking/assets/band-example/band.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-assets>\n        <a-asset-item id="bearModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/image-tracking/assets/band-example/bear/scene.gltf"></a-asset-item>\n        <a-asset-item id="raccoonModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+s.customFields.libVersion+'/examples/image-tracking/assets/band-example/raccoon/scene.gltf"></a-asset-item>\n      </a-assets>\n\n      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n\n      <a-entity mindar-image-target="targetIndex: 0">\n        <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#raccoonModel" animation-mixer>\n      </a-entity>\n      <a-entity mindar-image-target="targetIndex: 1">\n        <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.05 0.05 0.05" src="#bearModel" animation-mixer>\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n'),(0,n.kt)("p",null,"It's more or less the same as the Basic example. The main difference is that you now have two ",(0,n.kt)("inlineCode",{parentName:"p"},"<a-entity>"),", with different ",(0,n.kt)("inlineCode",{parentName:"p"},"targetIndex"),"."))}h.isMDXComponent=!0},5803:function(e,t,a){"use strict";t.Z=a.p+"assets/images/bear-3c737546fb0bde7a9c45b45ee999d132.png"},110:function(e,t,a){"use strict";t.Z=a.p+"assets/images/raccoon-2ef571baece2ee4724d0d19edf3de791.png"},3142:function(e,t,a){"use strict";t.Z=a.p+"assets/images/multi-targets-demo-8b5fc868f6b0847a9818e8bf0ba2c1c3.gif"}}]);