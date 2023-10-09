"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[4118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,b=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"bus-wiki/Composant:-Flat",id:"bus-wiki/Composant:-Flat",title:"Composant:-Flat",description:"Transformer un tableau de tableaux en un unique tableau.",source:"@site/docs/bus-wiki/Composant:-Flat.md",sourceDirName:"bus-wiki",slug:"/bus-wiki/Composant:-Flat",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Flat",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-Filter",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Filter"},next:{title:"Composant:-Framacalc",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Framacalc"}},u={},c=[{value:"Fonctionnement technique",id:"fonctionnement-technique",level:3},{value:"Exemple",id:"exemple",level:3}],s={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Transformer un tableau de tableaux en un unique tableau."),(0,a.kt)("h3",{id:"fonctionnement-technique"},"Fonctionnement technique"),(0,a.kt)("p",null,"Utilise la fonction javascript flat() sur un tableau de donn\xe9es en entr\xe9e."),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("p",null,"Si on a ces donn\xe9es en entr\xe9e : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'["16","15","11","03","06","08","01","17","04","18","19"],["16","01","17","04"],["01","17","04"]\n')),(0,a.kt)("p",null,"Le r\xe9sultat ressemblera \xe0 \xe7a en sortie : "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'["16","15","11","03","06","08","01","17","04","18","19","16","01","17","04","01","17","04"]\n')))}m.isMDXComponent=!0}}]);