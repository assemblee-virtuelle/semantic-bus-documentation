"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[7730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,l={unversionedId:"bus-wiki/Composant:-Post-provider",id:"bus-wiki/Composant:-Post-provider",title:"Composant:-Post-provider",description:"\xe0 renommer HTTP Provider?",source:"@site/docs/bus-wiki/Composant:-Post-provider.md",sourceDirName:"bus-wiki",slug:"/bus-wiki/Composant:-Post-provider",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Post-provider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-Post-consumer",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Post-consumer"},next:{title:"Composant:-Property-matrix",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Property-matrix"}},p={},s=[{value:"HTTP Provider",id:"http-provider",level:4},{value:"Exemple",id:"exemple",level:3},{value:"Param\xe8tres :",id:"param\xe8tres-",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\xe0 renommer HTTP Provider?")),(0,a.kt)("h4",{id:"http-provider"},"HTTP Provider"),(0,a.kt)("p",null,"Met \xe0 disposition une API HTTP. Permet au flux de donn\xe9es d'\xeatre appel\xe9 par une requ\xeate HTTP."),(0,a.kt)("h3",{id:"exemple"},"Exemple"),(0,a.kt)("p",null,"On peut utiliser ce composant \xe0 la fin de notre flux de donn\xe9es pour le rendre accessible par une API \xe0 d'autres personnes.\nSon url commencera par ",(0,a.kt)("inlineCode",{parentName:"p"},"https://grappe.io/data/api/")," suivi de chiffres et de lettres et du texte qu'on souhaitera mettre \xe0 la fin de la case du param\xe8tre \"Cl\xe9 de l'api\".\nAinsi si on d\xe9cider d'appeler sa cl\xe9 \"saveur d'orient\" on \xe9crira ceci \xe0 la fin de la cl\xe9.\nEn sauvegardant, l'url d'acc\xe8s \xe0 la nouvelle API (",(0,a.kt)("inlineCode",{parentName:"p"},"https://grappe.io/data/api/1234d5c6ab7d8e9101"),') apparait dans "Url de l\'API" et vous pouvez y acc\xe9der en cliquant dessus.'),(0,a.kt)("h3",{id:"param\xe8tres-"},"Param\xe8tres :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cl\xe9 de l'api"),": Il faut \xe9crire du texte \xe0 la fin de la cl\xe9 pour compl\xe9ter sa, sauvegarder et recharger la page pour voir l'URL de l'API s'afficher en enti\xe8re"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Url de l'API"),": Url g\xe9n\xe9r\xe9e apr\xe8s avoir entr\xe9 du texte \xe0 la fin de la cl\xe9 de l'API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-type"),": Type de contenu de la requ\xeate HTTP, par exemple ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Composant qui tient le flux principal"),": Sert \xe0 pr\xe9ciser quel composant de la chaine de donn\xe9es contient le flux de donn\xe9es principal")))}d.isMDXComponent=!0}}]);