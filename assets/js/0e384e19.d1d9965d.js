"use strict";(self.webpackChunksemantic_bus_documentation=self.webpackChunksemantic_bus_documentation||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,b=c["".concat(u,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const s={sidebar_position:1,title:"Introduction",tags:["bus s\xe9mantique"]},o="Bienvenue sur la documentation du bus s\xe9mantique \ud83c\udf3b",a={unversionedId:"intro",id:"intro",title:"Introduction",description:"Le Bus S\xe9mantique fournit \xe0 ses utilisateur.ices un outil open source ergonomique, modulaire et puissant capable d\u2019assurer l\u2019interop\xe9rabilit\xe9 entre plusieurs syst\xe8mes h\xe9t\xe9rog\xe8nes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/semantic-bus-documentation/docs/intro",draft:!1,tags:[{label:"bus s\xe9mantique",permalink:"/semantic-bus-documentation/docs/tags/bus-semantique"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",tags:["bus s\xe9mantique"]},sidebar:"tutorialSidebar",next:{title:"Description g\xe9n\xe9raliste",permalink:"/semantic-bus-documentation/docs/fonctionnement"}},u={},l=[{value:"A propos",id:"a-propos",level:2}],p={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bienvenue-sur-la-documentation-du-bus-s\xe9mantique-"},"Bienvenue sur la documentation du bus s\xe9mantique \ud83c\udf3b"),(0,i.kt)("p",null,"Le Bus S\xe9mantique fournit \xe0 ses utilisateur.ices un outil open source ergonomique, modulaire et puissant capable d\u2019assurer l\u2019interop\xe9rabilit\xe9 entre plusieurs syst\xe8mes h\xe9t\xe9rog\xe8nes."),(0,i.kt)("h2",{id:"a-propos"},"A propos"),(0,i.kt)("p",null,"Cr\xe9\xe9 en 2017 par Simon Louvet, membre de l\u2019Assembl\xe9e Virtuelle dans le but de r\xe9pondre aux probl\xe9matiques d'agr\xe9gation de donn\xe9es issues de sources h\xe9t\xe9rog\xe8nes (techniquement et s\xe9mantiquement) du projet Transiscope. "),(0,i.kt)("p",null,"Le Bus S\xe9mantique tire sa force de sa conception singuli\xe8re, fusionnant un Bus Logiciel et un ETL (Extract Transform Load), tout en exploitant la puissance et la polyvalence du traitement des graphes orient\xe9s objets. Cette particularit\xe9 lui permet de raisonner en harmonie avec les donn\xe9es telles qu'elles se pr\xe9sentent, pr\xe9servant leur complexit\xe9 tout au long du flux de traitement. "),(0,i.kt)("p",null,"Le Bus S\xe9mantique est ainsi capable de s'adapter \xe0 divers \xe9cosyst\xe8mes et de suivre leurs \xe9volutions de mani\xe8re synchronis\xe9e, sans aucune contrainte."),(0,i.kt)("p",null,"Au fil des ann\xe9es, le bus s\xe9mantique a connu de nombreuses \xe9volutions, majoritairement sur le moteur et la gestion des flux dans le but de traiter de plus gros volumes de donn\xe9es et d\u2019optimiser les performances. \xc0 terme, l\u2019objectif est de pouvoir faire du traitement \u201cBig Data\u201d."),(0,i.kt)("p",null,"Le Bus S\xe9mantique est sous licence GNU GLP v3.0, compatible sur toutes les distributions Linux. "),(0,i.kt)("admonition",{title:"Logiciel est en version b\xeata. Le moteur, le design, l\u2019ergonomie et certaines fonctionnalit\xe9s sont en cours de d\xe9veloppement.:",type:"caution"},(0,i.kt)("h2",{parentName:"admonition",id:"le-bus-s\xe9mantique-va-vous-permettre-de-r\xe9aliser-de-multiples-usages-tels-que-"},"Le Bus S\xe9mantique va vous permettre de r\xe9aliser de multiples usages tels que :"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Piloter la communication entre deux ou plusieurs syst\xe8mes, appareils ou \xe9l\xe9ments informatiques.\t"),(0,i.kt)("li",{parentName:"ul"},"Optimiser et g\xe9rer des syst\xe8mes d\u2019information pour gagner en efficacit\xe9 et performance."),(0,i.kt)("li",{parentName:"ul"},"Modeler des donn\xe9es en fonction des usages."),(0,i.kt)("li",{parentName:"ul"},"Exposer et consulter des donn\xe9es sur tous types de plateformes en temps r\xe9el.\t"),(0,i.kt)("li",{parentName:"ul"},"Faciliter l'acc\xe8s aux donn\xe9es pour permettre leur interpr\xe9tation."),(0,i.kt)("li",{parentName:"ul"},"Appeler et mettre \xe0 disposition des web services internes (micro traitement sp\xe9cialis\xe9 et r\xe9utilisable) et externe au Bus S\xe9mantique."),(0,i.kt)("li",{parentName:"ul"},"Traduire une donn\xe9e s\xe9mantique source en une donn\xe9e s\xe9mantique cible.")),(0,i.kt)("h2",{parentName:"admonition",id:"tester-le-bus-s\xe9mantique-en-ligne"},"Tester le Bus S\xe9mantique en ligne"),(0,i.kt)("p",{parentName:"admonition"},"La coop\xe9rative Data Players, principale contributrice du projet avec l\u2019Assembl\xe9e Virtuelle, h\xe9berge une version SAS du Bus S\xe9mantique sur ",(0,i.kt)("a",{parentName:"p",href:"https://grappe.io"},"https://grappe.io")," afin de pouvoir tester ces capacit\xe9s sans avoir \xe0 l\u2019installer.")))}m.isMDXComponent=!0}}]);