(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5588],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=s,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},1768:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=a(3117),s=(a(7294),a(3905)),r=a(1410);const i={id:"assets",title:"3D Assets",sidebar_label:"3D Assets"},o=void 0,l={unversionedId:"quick-start/assets",id:"quick-start/assets",title:"3D Assets",description:"It's an augmented reality app, so it's not fun without some 3D assets!",source:"@site/docs/quick-start/assets.md",sourceDirName:"quick-start",slug:"/quick-start/assets",permalink:"/mind-ar-js-doc/quick-start/assets",draft:!1,tags:[],version:"current",frontMatter:{id:"assets",title:"3D Assets",sidebar_label:"3D Assets"},sidebar:"docs",previous:{title:"Run It",permalink:"/mind-ar-js-doc/quick-start/run"},next:{title:"Wrapping Up",permalink:"/mind-ar-js-doc/quick-start/wrapup"}},c={},d=[{value:"Adding assets",id:"adding-assets",level:2},{value:"Construct the scene",id:"construct-the-scene",level:2},{value:"Putting it together",id:"putting-it-together",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"It's an augmented reality app, so it's not fun without some 3D assets!"),(0,s.kt)("h2",{id:"adding-assets"},"Adding assets"),(0,s.kt)("p",null,"The first thing we need to do is to add some assets to the scene. In ",(0,s.kt)("inlineCode",{parentName:"p"},"AFRAME"),", we do this by ",(0,s.kt)("inlineCode",{parentName:"p"},"a-assets"),". Add this block of code inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"<a-scene/>")," element"),(0,s.kt)("code",null,'\n<a-assets>\n  <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/image-tracking/assets/card-example/card.png" />\n  <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>\n</a-assets>\n'),(0,s.kt)("p",null,"The first one is actually our target image. The second one is a 3D model in ",(0,s.kt)("inlineCode",{parentName:"p"},"gltf")," format. ",(0,s.kt)("inlineCode",{parentName:"p"},"AFRAME")," basically supports all the standard 3D format, so you can probably replace it with the models of your choices later. "),(0,s.kt)("h2",{id:"construct-the-scene"},"Construct the scene"),(0,s.kt)("p",null,"Now we can replace the dull rectangular plane in the earlier example with an image asset."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n')),(0,s.kt)("p",null,"Also, we will add an animated 3D model on top of the image."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'<a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate">\n')),(0,s.kt)("p",null,"The scale of the 3D model we use here was normalized to -1 to 1, therefore we set an appropriate scale 0.005. We also have an animation to make the model oscillate between 0 to 0.1 in z-axis. We will not go into the details of the animation, but they are just standard ",(0,s.kt)("inlineCode",{parentName:"p"},"AFRAME")," stuff. "),(0,s.kt)("p",null,"Finally, we have also modify some rendering properties inside ",(0,s.kt)("inlineCode",{parentName:"p"},"<a-scene>")," (Optional)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights"\n')),(0,s.kt)("p",null,"Sorry, I'm not entirely sure what that does, but it seems like the rendering is prettier. You can skip this and still see the effect, not a big deal."),(0,s.kt)("h2",{id:"putting-it-together"},"Putting it together"),(0,s.kt)("p",null,"Putting it together, your html page is something like below."),(0,s.kt)("code",null,'\n<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-image.prod.js"><\/script>\n    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/dist/mindar-image-aframe.prod.js"><\/script>\n  </head>\n  <body>\n    <a-scene mindar-image="imageTargetSrc: ./targets.mind; showStats: true;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">\n      <a-assets>\n        <img id="card" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/image-tracking/assets/card-example/card.png" />\n        <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@'+r.customFields.libVersion+'/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>\n      </a-assets>\n\n\n      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>\n\n\n      <a-entity mindar-image-target="targetIndex: 0">\n        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>\n        <a-gltf-model rotation="0 0 0 " position="0 0 0.1" scale="0.005 0.005 0.005" src="#avatarModel" animation="property: position; to: 0 0.1 0.1; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate">\n      </a-entity>\n    </a-scene>\n  </body>\n</html>\n'),(0,s.kt)("p",null,"The effect is what we saw in the Overview. Easy, right?"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img",src:a(3753).Z,width:"400",height:"400"})))}m.isMDXComponent=!0},3753:function(e,t,a){"use strict";t.Z=a.p+"assets/images/basic-demo-fde07aa7567bf213e61b37dbaa192fec.gif"}}]);