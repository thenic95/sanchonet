"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,f=u["".concat(d,".").concat(b)]||u[b]||p[b]||a;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Start a node",sidebar_position:1,slug:"/tutorials/start-node"},i="Start a node",s={unversionedId:"tutorials/start-a-node",id:"tutorials/start-a-node",title:"Start a node",description:"Download or build cardano-node and cardano-cli binaries",source:"@site/docs/tutorials/start-a-node.mdx",sourceDirName:"tutorials",slug:"/tutorials/start-node",permalink:"/tutorials/start-node",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/start-a-node.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Start a node",sidebar_position:1,slug:"/tutorials/start-node"},sidebar:"docsSidebar",previous:{title:"Create governance actions",permalink:"/actions"},next:{title:"Create keys and the address",permalink:"/tutorials/address"}},d={},l=[{value:"Download or build cardano-node and cardano-cli binaries",id:"download-or-build-cardano-node-and-cardano-cli-binaries",level:3},{value:"Get configuration files",id:"get-configuration-files",level:3},{value:"Run the node",id:"run-the-node",level:3},{value:"Need help?",id:"need-help",level:3}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"start-a-node"},"Start a node"),(0,r.kt)("h3",{id:"download-or-build-cardano-node-and-cardano-cli-binaries"},"Download or build cardano-node and cardano-cli binaries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Latest release ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/input-output-hk/cardano-node/releases/tag/8.2.1-pre"},"8.2.1-pre"))),(0,r.kt)("h3",{id:"get-configuration-files"},"Get configuration files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://book.world.dev.cardano.org/environments/sanchonet/config.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/topology.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/byron-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/shelley-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/alonzo-genesis.json\nwget https://book.world.dev.cardano.org/environments/sanchonet/conway-genesis.json\n")),(0,r.kt)("h3",{id:"run-the-node"},"Run the node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cardano-node run --topology topology.json \\\n--database-path db \\\n--socket-path node.socket \\\n--port 3001 \\\n--config config.json \n")),(0,r.kt)("h3",{id:"need-help"},"Need help?"),(0,r.kt)("p",null,"For a step-by-step tutorial on how to build and run a node please visit  ",(0,r.kt)("a",{parentName:"p",href:"https://cardano-course.gitbook.io/cardano-course/handbook/module-1-build-and-run-the-node/building-the-node"},"CARDANO-NODE course | Building and running the node")))}p.isMDXComponent=!0}}]);