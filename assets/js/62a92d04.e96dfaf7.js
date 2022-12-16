"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3061],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4573:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const i={id:"core-api",title:"Core API",sidebar_label:"Core API"},a=void 0,l={unversionedId:"core-api",id:"core-api",title:"Core API",description:"MindAR comes with an AFRAME wrapper, which allows you to kickstart project easily with minimal coding. The workflow, is admittedly, opinionated, and might not suit every use cases. If you need to have higher customized behavior, it's still doable by utilizing the core API.",source:"@site/docs/core-api.md",sourceDirName:".",slug:"/core-api",permalink:"/mind-ar-js-doc/core-api",draft:!1,tags:[],version:"current",frontMatter:{id:"core-api",title:"Core API",sidebar_label:"Core API"}},s={},p=[{value:"non-ARAME build",id:"non-arame-build",level:2},{value:"Core API",id:"core-api",level:2},{value:"Compiler",id:"compiler",level:3},{value:"Controller",id:"controller",level:3}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"MindAR comes with an AFRAME wrapper, which allows you to kickstart project easily with minimal coding. The workflow, is admittedly, opinionated, and might not suit every use cases. If you need to have higher customized behavior, it's still doable by utilizing the core API. "),(0,n.kt)("h2",{id:"non-arame-build"},"non-ARAME build"),(0,n.kt)("p",null,"First of all, MindAR comes with a production build without AFRAME. "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@0.4.2/dist/mindar.prod-min.js\n")),(0,n.kt)("p",null,"You might want to use this build for numerous reasons:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Your app is already using AFRAME, so you don't want to double import ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You don't like the given behavior of our aframe wrapper, and you need to write your own.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You don't want to use AFRAME at all. e.g. you want to build the app with just THREE.js, babylon.js etc."))),(0,n.kt)("h2",{id:"core-api"},"Core API"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Be aware that the Core API is still changing rapidly, so it's highly possible they will not be backward compatible. You might also need to study the source code to understand how it works. ")),(0,n.kt)("p",null,"MindAR library exposed two components for core access of the AR engine, compiler and controller"),(0,n.kt)("h3",{id:"compiler"},"Compiler"),(0,n.kt)("p",null,"Compiler allows you to compile target images"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'const compiler = new window.MINDAR.Compiler();\nconst dataList = await compiler.compileImageTargets(images, (progress) => {  // images is an array of HTML image object\n  // console.log("progress", progress);\n});\nconst exportedBuffer = await compiler.exportData(); // export the compiled data into buffer for download (e.g. the .mind file)\n \n')),(0,n.kt)("h3",{id:"controller"},"Controller"),(0,n.kt)("p",null,"Controller is the main API interacting with the AR engine"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"const controller = new window.MINDAR.Controller(...);\n")),(0,n.kt)("p",null,"Unfortunately, no fixed specs can be given at this moment. This section is for advanced users who need to implement highly customized workflow. This is given, so you have at least an entry point to start looking. We recommend you to refer to the source code of our aframe wrapper to see how it's being used: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://github.com/hiukim/mind-ar-js/blob/master/src/aframe.js")),(0,n.kt)("p",null,"A lot of people want to customize the behavior, for example, make object stays visible even when the image target is lost. If you want to do something like this, you can approach the problem by using the non-aframe library build, then include and modify the above ",(0,n.kt)("inlineCode",{parentName:"p"},"aframe.js")," script."))}u.isMDXComponent=!0}}]);