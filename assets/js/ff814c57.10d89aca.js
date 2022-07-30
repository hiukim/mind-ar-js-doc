"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6227],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7277:function(e,t,n){n.r(t),n.d(t,{Compile:function(){return k},UploadTab:function(){return h},VisualizeTab:function(){return v},assets:function(){return g},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var a=n(3117),r=n(7294),o=n(3905),i="startButton_OY2G",l="visualizeCanvasWrapper_YP4_",s="visualizeCanvas_bKhT",c="tabItem_gCJA",u=n(6010),m=n(2389);function p(e){let{children:t,fallback:n}=e;return(0,m.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=n?n:null}const d={id:"compile",title:"Image Targets Compiler"},f=void 0,b={unversionedId:"tools/compile",id:"tools/compile",title:"Image Targets Compiler",description:"",source:"@site/docs/tools/compile.mdx",sourceDirName:"tools",slug:"/tools/compile",permalink:"/mind-ar-js-doc/tools/compile",draft:!1,tags:[],version:"current",frontMatter:{id:"compile",title:"Image Targets Compiler"},sidebar:"docs",previous:{title:"ThreeJS FaceMesh",permalink:"/mind-ar-js-doc/more-examples/threejs-face-facemesh"}},g={},y=[],h=e=>{let{onDataReady:t}=e;const[n,a]=(0,r.useState)(""),[l,s]=(0,r.useState)(null),[c,m]=(0,r.useState)(null),p=(0,r.useRef)(null),d=new window.MINDAR.IMAGE.Compiler,f=(0,r.useCallback)((async e=>new Promise(((t,n)=>{let a=new Image;a.onload=()=>t(a),a.onerror=n,a.src=URL.createObjectURL(e)}))),[]),b=(0,r.useCallback)((async e=>{m(0);const n=[];for(let t=0;t<e.length;t++)n.push(await f(e[t]));console.log("files",e,n);const a=await d.compileImageTargets(n,(e=>{m(e.toFixed(2))})),r=await d.exportData();t(a,r)}),[]),g=(0,r.useCallback)((async e=>{var n=new FileReader;n.onload=async function(){const e=d.importData(this.result),n=await d.exportData();t(e,n)},n.readAsArrayBuffer(e)}),[]);(0,r.useEffect)((()=>{console.log("use effect",p.current);const e=new Dropzone(p.current,{url:"#",autoProcessQueue:!1,addRemoveLinks:!0});s(e)}),[]);const y=(0,r.useCallback)((async()=>{const e=l.files;if(0===e.length)return void a("please select images.");"mind"===e[0].name.split(".").pop()?g(e[0]):b(e)}),[l]);return(0,o.kt)("div",null,(0,o.kt)("p",null,"Select target images and start"),(0,o.kt)("div",{ref:p,className:"dropzone"}),n&&(0,o.kt)("p",{className:"text--danger"},n),(0,o.kt)("div",{className:"padding-vert--md"},null===c&&(0,o.kt)("button",{className:(0,u.Z)("button","button--primary",i),onClick:y},"Start"),null!==c&&(0,o.kt)("div",null,"Progress: ",c," %")))},v=e=>{let{dataList:t,exportedBuffer:n}=e;const a=(0,r.useRef)(null),[m,p]=(0,r.useState)(0),[d,f]=(0,r.useState)(0),b=(0,r.useCallback)((function(e,t,n,a,r){void 0===r&&(r=1),e.beginPath(),e.arc(n,a,r,0,2*Math.PI,!1),e.fillStyle=t,e.lineWidth=1,e.strokeStyle=t,e.stroke()}),[]);(0,r.useCallback)(((e,t,n,a,r)=>{e.beginPath(),e.strokeStyle=t,e.rect(n-r/2,a-r/2,r,r),e.stroke()}),[]);(0,r.useEffect)((()=>{const e=t[m].imageList[d],n=[...t[m].matchingData[d].maximaPoints,t[m].matchingData[d].minimaPoints],r=a.current;r.width=e.width,r.height=e.height;const o=r.getContext("2d");o.clearRect(0,0,r.width,r.height);const i=new Uint8ClampedArray(e.width*e.height*4);for(let t=0;t<e.data.length;t++)i[4*t+0]=e.data[t],i[4*t+1]=e.data[t],i[4*t+2]=e.data[t],i[4*t+3]=255;const l=new ImageData(i,e.width,e.height);o.putImageData(l,0,0);for(let t=0;t<n.length;t++){const e=n[t];b(o,"#ff0000",Math.round(e.x),Math.round(e.y),e.scale)}}),[t,m,d]);const g=(0,r.useMemo)((()=>t.map(((e,t)=>t))),[t]),y=(0,r.useMemo)((()=>t[m].imageList.map(((e,t)=>t))),[t,m]),h=(0,r.useMemo)((()=>{const e=100*t[m].imageList[d].scale;return{width:e+"%",maxHeight:"100%",top:(100-e)/2+"%"}}),[t,m,d]),v=(0,r.useCallback)((()=>{var e=new Blob([n]),t=window.document.createElement("a");t.download="targets.mind",t.href=window.URL.createObjectURL(e),t.click(),window.URL.revokeObjectURL(t.href)}),[n]);return(0,o.kt)("div",null,(0,o.kt)("div",{className:"tabs-container"},(0,o.kt)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs")},g.map((e=>(0,o.kt)("li",{role:"tab",className:(0,u.Z)("tabs__item",{"tabs__item--active":m===e},c),key:e,onClick:()=>{p(e),f(0)}},"Image ",e+1))))),(0,o.kt)("div",{className:"tabs-container"},(0,o.kt)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs")},y.map((e=>(0,o.kt)("li",{role:"tab",className:(0,u.Z)("tabs__item",{"tabs__item--active":d===e},c),key:e,onClick:()=>{f(e)}},"Scale ",e+1))))),(0,o.kt)("div",{className:l},(0,o.kt)("canvas",{style:h,className:s,ref:a})),(0,o.kt)("div",{className:"padding-vert--md"},(0,o.kt)("button",{className:(0,u.Z)("button","button--primary",i),onClick:v},"Download compiled")))},k=()=>{const[e,t]=(0,r.useState)("upload"),[n,a]=(0,r.useState)(null),[i,l]=(0,r.useState)(null),s=(0,r.useCallback)(((e,n)=>{a(e),l(n),t("visualize")}),[]);return(0,o.kt)(p,{mdxType:"BrowserOnly"},(()=>(0,o.kt)("div",null,"upload"===e&&(0,o.kt)(h,{onDataReady:s,mdxType:"UploadTab"}),"visualize"===e&&(0,o.kt)(v,{dataList:n,exportedBuffer:i,mdxType:"VisualizeTab"}))))},w={toc:y,UploadTab:h,VisualizeTab:v,Compile:k};function O(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(k,{mdxType:"Compile"}))}O.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);