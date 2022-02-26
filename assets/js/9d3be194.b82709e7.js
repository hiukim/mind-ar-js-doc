(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3104],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return r?n.createElement(f,c(c({ref:t},m),{},{components:r})):n.createElement(f,c({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1410:function(e){e.exports={title:"mind-ar-js",tagline:"web augmented reality - augmented images",url:"https://hiukim.github.io",baseUrl:"/mind-ar-js-doc/",onBrokenLinks:"warn",onBrokenMarkdownLinks:"warn",favicon:"img/favicon.png",organizationName:"hiukim",projectName:"mind-ar-js-doc",themeConfig:{navbar:{title:"MindAR - Documentation",logo:{alt:"MindAR",src:"img/logo.png"}}},plugins:["docusaurus-plugin-sass"],presets:[["@docusaurus/preset-classic",{docs:{routeBasePath:"/",sidebarPath:6679},blog:{showReadingTime:!0,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/"},theme:{customCss:2295}}]],scripts:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/min/dropzone.min.js","https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"],stylesheets:["https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.7.2/dropzone.min.css"],customFields:{libVersion:"1.1.4"}}},6679:function(e){e.exports={docs:[{type:"doc",id:"home"},{type:"doc",id:"installation"},{type:"category",label:"Image Tracking Quick Start",collapsed:!0,items:["quick-start/overview","quick-start/compile","quick-start/webpage","quick-start/run","quick-start/assets","quick-start/wrapup","quick-start/tracking-config"]},{type:"category",label:"Image Tracking Examples",collapsed:!0,items:["examples/summary","examples/minimal","examples/basic","examples/multi-targets","examples/multi-tracks","examples/custom-ui","examples/events-handling","examples/interative"]},{type:"category",label:"Face Tracking Quick Start",collapsed:!0,items:["face-tracking-quick-start/overview","face-tracking-quick-start/webpage","face-tracking-quick-start/run","face-tracking-quick-start/assets","face-tracking-quick-start/occluder","face-tracking-quick-start/wrapup"]},{type:"category",label:"Face Tracking Examples",collapsed:!0,items:["face-tracking-examples/summary","face-tracking-examples/minimal","face-tracking-examples/tryon","face-tracking-examples/events-handling"]},{type:"category",label:"More Examples",collapsed:!0,items:["more-examples/react","more-examples/threejs-image","more-examples/threejs-face","more-examples/threejs-face-facemesh"]},{type:"category",label:"Tools",collapsed:!0,items:["tools/compile"]}]}},6688:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),c=r(1410),s=r(4996),o=["components"],l={id:"threejs-face-facemesh",title:"ThreeJS FaceMesh",sidebar_label:"ThreeJS FaceMesh"},m=void 0,p={unversionedId:"more-examples/threejs-face-facemesh",id:"more-examples/threejs-face-facemesh",title:"ThreeJS FaceMesh",description:"FaceMesh effect",source:"@site/docs/more-examples/threejs-face-facemesh.md",sourceDirName:"more-examples",slug:"/more-examples/threejs-face-facemesh",permalink:"/mind-ar-js-doc/more-examples/threejs-face-facemesh",tags:[],version:"current",frontMatter:{id:"threejs-face-facemesh",title:"ThreeJS FaceMesh",sidebar_label:"ThreeJS FaceMesh"},sidebar:"docs",previous:{title:"ThreeJS Face",permalink:"/mind-ar-js-doc/more-examples/threejs-face"},next:{title:"Image Targets Compiler",permalink:"/mind-ar-js-doc/tools/compile"}},u=[{value:"Try it out",id:"try-it-out",children:[],level:2}],d={toc:u};function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"FaceMesh effect"),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:r(2834).Z,width:"374",height:"375"})),(0,i.kt)("a",{href:(0,s.Z)("/face-tracking-samples/three-facemesh.html"),target:"_blank"},"Live Demo"),(0,i.kt)("code",null,'\n<html>\n  <head>\n    <script src="https://cdn.jsdelivr.net/npm/mind-ar@'+c.customFields.libVersion+'/dist/mindar-face-three.prod.js"><\/script>\n    <script type="module">\n      const THREE = window.MINDAR.FACE.THREE;\n      const mindarThree = new window.MINDAR.FACE.MindARThree({\n\tcontainer: document.querySelector("#container"),\n      });\n      const {renderer, scene, camera} = mindarThree;\n      const light = new THREE.HemisphereLight( 0xffffff, 0xbbbbff, 1 );\n      scene.add(light);\n      const faceMesh = mindarThree.addFaceMesh();\n      const texture = new THREE.TextureLoader().load(\'./assets/canonical_face_model_uv_visualization.png\');\n      faceMesh.material.map = texture;\n      faceMesh.material.transparent = true;\n      faceMesh.material.needsUpdate = true;\n      scene.add(faceMesh);\n      const start = async() => {\n\tawait mindarThree.start();\n\trenderer.setAnimationLoop(() => {\n\t  renderer.render(scene, camera);\n\t});\n      }\n      start();\n    <\/script>\n    <style>\n      body {\n\tmargin: 0;\n      }\n      #container {\n\twidth: 100vw;\n\theight: 100vh;\n\tposition: relative;\n\toverflow: hidden;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="container">\n    </div>\n  </body>\n</html>\n'))}f.isMDXComponent=!0},2834:function(e,t,r){"use strict";t.Z=r.p+"assets/images/face-mesh-demo-883c6e8c0b28ce7c6069996010a5c762.gif"}}]);