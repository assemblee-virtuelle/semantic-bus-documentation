"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[4022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,s={unversionedId:"bus-wiki/Composant:-Post-consumer",id:"bus-wiki/Composant:-Post-consumer",title:"Composant:-Post-consumer",description:"\xe0 renommer HTTP Consumer",source:"@site/docs/bus-wiki/Composant:-Post-consumer.md",sourceDirName:"bus-wiki",slug:"/bus-wiki/Composant:-Post-consumer",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Post-consumer",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composant:-Params-creation",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Params-creation"},next:{title:"Composant:-Post-provider",permalink:"/semantic-bus-documentation/en/docs/bus-wiki/Composant:-Post-provider"}},l={},p=[{value:"Exemple",id:"exemple",level:3},{value:"Param\xe8tres",id:"param\xe8tres",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\xe0 renommer HTTP Consumer")),(0,o.kt)("p",null,"Cr\xe9\xe9 des API HTTP supportant tous les verbes HTTP (Get, Post, Patch, Put, Delete)."),(0,o.kt)("h3",{id:"exemple"},"Exemple"),(0,o.kt)("p",null,"Si on veut lire des donn\xe9es provenant de cette url : ",(0,o.kt)("inlineCode",{parentName:"p"},"https://grappe.io/75tzO9hd21otest-donnes"),', on va mettre l\'url dans "Url externe o\xf9 envoyer les donn\xe9es", valider l\'option corps de requ\xeate vide et employer la m\xe9thode GET.\nPour afficher les donn\xe9es il suffit d\'appuyer sur "Persistance du processus (payant)" en haut \xe0 droite du composant.\nPuis sur le petit logo jaune en revenant \xe0 la cha\xeene de composants. Si \xe7a a fonctionn\xe9, des donn\xe9es apparaissent.'),(0,o.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Url externe o\xf9 envoyer les donn\xe9es"),": L'url de l'API gr\xe2ce \xe0 laquelle on va pouvoir cr\xe9er, lire, modifier, corriger, supprimer des donn\xe9es."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Corps de requ\xeate vide"),": ne pas remplir le body de la requete avec le flux. G\xe9n\xe9ralement utilis\xe9 pour les requettes GET par exemple."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content-type"),": Type de contenu de la requ\xeate HTTP, par exemple ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"M\xe9thode"),' : Le "verbe" HTTP qui d\xe9terminera la nature de la requ\xeate, par exemple : Get, Post, Patch, Put, Delete.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Content-type de r\xe9ponse forc\xe9"),": Dans le as ou la requ\xeate ne retourne pas de content-type, il est posible de le forcer ici. Par exemple ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Header"),": Informations suppl\xe9mentaires pouvant \xeatre rajout\xe9es lors d'une requ\xeate, par exemple ",(0,o.kt)("inlineCode",{parentName:"li"},"Accept-Encoding : gzip"),".")))}m.isMDXComponent=!0}}]);