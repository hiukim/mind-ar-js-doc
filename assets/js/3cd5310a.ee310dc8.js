"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8902],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(r),h=o,m=f["".concat(s,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6692:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(3117),o=(r(7294),r(3905)),a=r.p+"assets/images/face-minimal-demo-78fba27f4551c14abc47d3d613794776.png";const i={id:"run",title:"Run It",sidebar_label:"Run It"},c=void 0,s={unversionedId:"face-tracking-quick-start/run",id:"face-tracking-quick-start/run",title:"Run It",description:"Web server",source:"@site/docs/face-tracking-quick-start/run.md",sourceDirName:"face-tracking-quick-start",slug:"/face-tracking-quick-start/run",permalink:"/mind-ar-js-doc/face-tracking-quick-start/run",draft:!1,tags:[],version:"current",frontMatter:{id:"run",title:"Run It",sidebar_label:"Run It"},sidebar:"docs",previous:{title:"Build the page",permalink:"/mind-ar-js-doc/face-tracking-quick-start/webpage"},next:{title:"3D Assets",permalink:"/mind-ar-js-doc/face-tracking-quick-start/assets"}},l={},u=[{value:"Web server",id:"web-server",level:2},{value:"Effect",id:"effect",level:2}],p={toc:u};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"web-server"},"Web server"),(0,o.kt)("p",null,"Although, it's a simple html page, you probably cannot run it simply by opening the file in browser. The reason is that the page requires camera access."),(0,o.kt)("p",null,"I believe there are many possible workarounds to that problems, like setting the browser policy or something. One way to this problem is to setup a localhost server that can server webpage."),(0,o.kt)("p",null,"If you are a web developer, I'm sure you probably have some sort of localhost already in your machine. If not, you can try this chrome extension: ",(0,o.kt)("a",{href:"https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb",target:"_blank"},"Web Server for Chrome"),". It will launch a simple web server, and you can use it to open the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," built in the last section."),(0,o.kt)("h2",{id:"effect"},"Effect"),(0,o.kt)("p",null,"If you can successfully launch the page, the camera will start. After you point it to any face, you will see a green sphere sticked on the nose tip."),(0,o.kt)("img",{src:a,width:"300"}),(0,o.kt)("p",null,"You should try to change the anchorIndex to something else to see how the position of the green sphere changes."),(0,o.kt)("p",null,"Make sure you get it working before going to the next section, in which we will start doing interesting stuff!"))}f.isMDXComponent=!0}}]);