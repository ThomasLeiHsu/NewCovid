(this["webpackJsonpnew-covid"]=this["webpackJsonpnew-covid"]||[]).push([[0],{216:function(e,t,n){},367:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(77),i=n.n(c),l=(n(216),n(11)),o=n(368),s=n(375),d=n(101),u=n(102),j=n(49),b=n(83),f=n(372),h=n(200),x=n(2);var O=function(e){var t=e.Data,n=e.XData,a=e.AreaData;return Object(x.jsx)("div",{className:"w-full h-full",children:Object(x.jsx)(o.a,{width:"100%",height:"100%",children:Object(x.jsxs)(s.a,{data:t,margin:{top:5,right:10,bottom:5,left:25},children:[Object(x.jsx)(d.a,{dataKey:n}),Object(x.jsx)(u.a,{}),Object(x.jsx)(j.a,{}),Object(x.jsx)(b.a,{}),Object(x.jsx)(f.a,{stroke:"#f5f5f5"}),Object(x.jsx)(h.a,{type:"linear",dataKey:a,fill:"red",stroke:"#A10220",dot:!0,animationDuration:4e3})]})})})},p=[{url:"/Introduction",title:"\u7c21\u4ecb"},{url:"/search",title:"\u641c\u5c0b"},{url:"/board",title:"\u6392\u884c\u699c"}],m=[{date:"2020-0401",new:76313,total:934668},{date:"2020-0501",new:193182,total:3397103},{date:"2020-0601",new:109649,total:6361211},{date:"2020-0701",new:193217,total:10790413},{date:"2020-0801",new:237007,total:17989715},{date:"2020-0901",new:256322,total:25888409},{date:"2020-1001",new:312498,total:34463059},{date:"2020-1101",new:427827,total:46795734},{date:"2020-1201",new:533639,total:64136200},{date:"2021-0101",new:538312,total:84338551},{date:"2021-0201",new:363993,total:103890194},{date:"2021-0301",new:277785,total:114972801},{date:"2021-0401",new:676737,total:130139757},{date:"2021-0501",new:783370,total:152782818},{date:"2021-0601",new:432744,total:171899318},{date:"2021-0701",new:417071,total:183382606}];var v=function(){return Object(x.jsxs)("div",{className:" flex flex-col justify-center items-center",children:[Object(x.jsx)("div",{className:"text-3xl mt-14 px-4 border-r-2 border-l-2 border-red-600",children:Object(x.jsx)("p",{className:"",children:"\u5168\u7403\u6bcf\u65e5\u65b0\u589e\u78ba\u8a3a\u4eba\u6578\u8da8\u52e2"})}),Object(x.jsx)("div",{className:"lg:container w-3/4 h-96  mx-auto mt-14 rounded-lg shadow-lg bg-white",children:Object(x.jsx)(O,{Data:m,XData:"date",AreaData:"new"})})]})};var w,g,y=function(){var e=Object(a.useContext)(Ie),t=(e.menuOpen,e.setMenuOpen);return Object(a.useEffect)((function(){t(!1)}),[]),Object(x.jsx)(v,{})},N=n(73),D=["title","titleId"];function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function R(e,t){var n=e.title,r=e.titleId,c=C(e,D);return a.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#ffffff",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,w||(w=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),g||(g=a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})))}var E=a.forwardRef(R);n.p;var S=function(){var e=Object(a.useContext)(Ie),t=e.menuOpen,n=e.setMenuOpen;return Object(x.jsxs)("div",{className:"w-full h-20 px-4 relative bg-gradient-to-b from-red-500 to-red-800 flex justify-between items-center",children:[Object(x.jsx)("div",{children:Object(x.jsx)(N.b,{className:"text-4xl text-white",to:"/",children:"Covid"})}),Object(x.jsx)("div",{className:"hidden lg:block",children:p.map((function(e,t){return Object(x.jsx)(N.b,{className:"text-white mx-4 cursor-pointer hover:text-gray-200",to:e.url,children:e.title},t)}))}),Object(x.jsx)("div",{className:"block lg:hidden cursor-pointer",onClick:function(){return n((function(e){return!e}))},children:Object(x.jsx)(E,{})}),Object(x.jsx)("div",{className:"absolute bg-gray-800 ".concat(t?"w-72":"w-0"," h-96 rounded-bl-md  right-0 top-20 transition-all duration-300  flex flex-col justify-center items-center"),style:{zIndex:9999},children:p.map((function(e,n){return Object(x.jsx)("div",{className:"w-2/3  border-b-2 border-red-600 my-2 p-2 flex justify-center ".concat(t?"block":"hidden"),children:Object(x.jsx)(N.b,{className:"text-white mx-4 cursor-pointer  text-xl ",to:e.url,children:e.title})},n)}))})]})};var I=function(){return Object(x.jsx)("div",{className:"w-full h-20 px-4 fixed bottom-0 left-0 right-0 bg-gradient-to-t from-red-500 to-red-700 flex justify-center items-center",children:Object(x.jsx)("p",{className:"text-white",children:"Rapid API \u4e32\u63a5\u7df4\u7fd2"})})};var L,T,P=function(){var e=Object(a.useContext)(Ie),t=(e.menuOpen,e.setMenuOpen);return Object(a.useEffect)((function(){t(!1)}),[]),Object(x.jsx)("div",{className:"w-full mt-10 flex justify-center",children:Object(x.jsx)("p",{children:"404 \u6b64\u9801\u9762\u4e0d\u5b58\u5728"})})},M=["title","titleId"];function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e,t){var n=e.title,r=e.titleId,c=U(e,M);return a.createElement("svg",A({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"red",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,L||(L=a.createElement("rect",{fill:"none",height:24,transform:"matrix(-1 -1.224647e-16 1.224647e-16 -1 24 24)",width:24})),T||(T=a.createElement("path",{d:"M15.5,15.38V8.62L18.88,12L15.5,15.38 M14,19l7-7l-7-7V19L14,19z M10,19V5l-7,7L10,19z"})))}var _,B,K=a.forwardRef(z),G=(n.p,["title","titleId"]);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function J(e,t){var n=e.title,r=e.titleId,c=V(e,G);return a.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"red",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,_||(_=a.createElement("rect",{fill:"none",height:24,width:24})),B||(B=a.createElement("path",{d:"M8.5,8.62v6.76L5.12,12L8.5,8.62 M10,5l-7,7l7,7V5L10,5z M14,5v14l7-7L14,5z"})))}var Q,q,F=a.forwardRef(J),X=(n.p,["title","titleId"]);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Z(e,t){var n=e.title,r=e.titleId,c=Y(e,X);return a.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,Q||(Q=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),q||(q=a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})))}var $=a.forwardRef(Z);n.p;function ee(e){var t=e.topLabel,n=e.bottomLabel,a=e.labelColor,r=e.options,c=e.placeholder,i=e.value,l=e.className,o=e.onChange,s=e.onSelect,d=e.defaultValue;return Object(x.jsxs)("div",{className:"flex flex-col w-full space-y-2 ",children:[Object(x.jsx)("label",{className:"".concat(a||"text-gray-400"),children:t}),Object(x.jsxs)("select",{className:"h-10 rounded-md bg-gray-100 p-2 ".concat(l),placeholder:null!==c&&void 0!==c?c:"\u8acb\u9078\u64c7",value:null!==i&&void 0!==i?i:null,defaultValue:null!==d&&void 0!==d?d:null,onChange:o,onSelect:s,children:[Object(x.jsx)("option",{value:"",children:""}),r&&r.map((function(e,t){return Object(x.jsx)("option",{value:e.value,children:e.label},t)}))]}),Object(x.jsx)("label",{className:"".concat(a||"text-red-500"," text-sm"),children:n})]})}function te(e){var t=e.type,n=e.topLabel,a=e.bottomLabel,r=e.labelColor,c=(e.options,e.placeholder),i=e.value,l=e.className,o=e.onChange;return Object(x.jsxs)("div",{className:"flex flex-col w-full space-y-2",children:[Object(x.jsx)("label",{className:"".concat(r||"text-gray-400"),children:n}),Object(x.jsx)("input",{type:t,className:"h-10 rounded-md bg-gray-100 p-2 mb-5 ".concat(l," "),placeholder:null!==c&&void 0!==c?c:"\u8acb\u8f38\u5165",onChange:o,value:i}),Object(x.jsx)("label",{className:"".concat(r||"text-red-500"," text-sm"),children:a})]})}n.p;var ne=function(e){return e?(new Intl.NumberFormat).format(e):"\u5c1a\u7121\u6700\u65b0\u8cc7\u6599"},ae=function(e){var t=[{},{},{},{},{}];return t.forEach((function(t,n){t.country=e[n].country})),t.forEach((function(t,n){var a,r;t.newCases=Number(null===(a=e[n])||void 0===a||null===(r=a.cases)||void 0===r?void 0:r.new)})),t},re=n(202);var ce=function(e){var t,n,r,c,i,o,s,d,u,j,b,f=Object(a.useState)(!0),h=Object(l.a)(f,2),O=h[0],p=h[1],m=Object(a.useState)(!1),v=Object(l.a)(m,2),w=(v[0],v[1],Object(a.useState)("")),g=Object(l.a)(w,2),y=g[0],N=g[1],D=Object(a.useState)(""),k=Object(l.a)(D,2),C=k[0],R=k[1],E=Object(a.useCallback)(Object(re.debounce)((function(e){N(e.target.value)}),600),[]),S=Object(a.useCallback)((function(t){R(t.target.value),e.getCountryData(t.target.value),e.setPending(!0)}),[e.getCountryData]);return Object(x.jsx)("div",{className:"w-full h-3/4 flex justify-center items-center",children:Object(x.jsxs)("div",{className:"w-3/4 h-4/5 mt-10 bg-white rounded-lg shadow-lg",children:[Object(x.jsxs)("div",{className:"flex justify-center items-center p-2 border-b-2 relative",children:[Object(x.jsxs)("div",{className:"".concat(O?"block":"hidden"," relative"),children:[Object(x.jsx)(te,{type:"text",className:"",placeholder:"\u8acb\u8f38\u5165\u570b\u5bb6\u82f1\u6587\u540d",onChange:E}),Object(x.jsx)("div",{className:"absolute right-1 top-4 cursor-pointer",onClick:function(){return e.getCountryData(y)},children:Object(x.jsx)($,{})})]}),Object(x.jsx)("div",{className:"".concat(O?"hidden":"block"),children:Object(x.jsx)(ee,{className:"w-48",placeholder:"\u8acb\u9078\u64c7\u570b\u5bb6",value:C,onChange:S,options:null!==(t=e.AllCountryData)&&void 0!==t?t:null})}),Object(x.jsxs)("div",{className:"absolute right-5",children:[Object(x.jsx)("div",{className:"cursor-pointer ".concat(O?"hidden":"block"),onClick:function(){return p((function(e){return!e}))},children:Object(x.jsx)(K,{})}),Object(x.jsx)("div",{className:"cursor-pointer ".concat(O?"block":"hidden"),onClick:function(){return p((function(e){return!e}))},children:Object(x.jsx)(F,{})})]})]}),e.CountryData&&Object(x.jsxs)("div",{className:"w-full flex flex-col  items-center",children:[Object(x.jsx)("div",{className:"my-2 lg:my-8 text-3xl",children:null===e||void 0===e||null===(n=e.CountryData)||void 0===n?void 0:n.country}),Object(x.jsxs)("div",{className:"w-full flex flex-col items-center lg:flex-row lg:justify-around space-y-2 lg:space-y-0 lg:space-x-2",children:[Object(x.jsxs)("div",{className:"w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-gradient-to-b from-red-600 to-red-900  rounded-md text-white",children:[Object(x.jsx)("p",{className:"lg:text-xl lg:mb-2",children:"\u65b0\u589e\u78ba\u8a3a"}),Object(x.jsx)("p",{children:ne(null===e||void 0===e||null===(r=e.CountryData)||void 0===r||null===(c=r.cases)||void 0===c?void 0:c.new)})]}),Object(x.jsxs)("div",{className:"w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-gradient-to-b from-red-600 to-red-900  rounded-md text-white",children:[Object(x.jsx)("p",{className:"lg:text-xl lg:mb-2",children:"\u65b0\u589e\u6b7b\u4ea1"}),Object(x.jsx)("p",{children:ne(null===e||void 0===e||null===(i=e.CountryData)||void 0===i||null===(o=i.deaths)||void 0===o?void 0:o.new)})]}),Object(x.jsxs)("div",{className:"w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-gradient-to-b from-red-600 to-red-900  rounded-md text-white",children:[Object(x.jsx)("p",{className:"lg:text-xl lg:mb-2",children:"\u7e3d\u5171\u78ba\u8a3a"}),Object(x.jsx)("p",{children:ne(null===e||void 0===e||null===(s=e.CountryData)||void 0===s||null===(d=s.cases)||void 0===d?void 0:d.total)})]}),Object(x.jsxs)("div",{className:"w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-md bg-gradient-to-b from-red-600 to-red-900  rounded-md text-white",children:[Object(x.jsx)("p",{className:"lg:text-xl lg:mb-2",children:"\u7e3d\u5171\u6b7b\u4ea1"}),Object(x.jsx)("p",{children:ne(null===e||void 0===e||null===(u=e.CountryData)||void 0===u||null===(j=u.deaths)||void 0===j?void 0:j.total)})]})]}),Object(x.jsxs)("div",{className:"w-44 lg:w-2/12 border-2 lg:p-4  text-center shadow-m bg-gradient-to-b from-blue-400 to-blue-600 rounded-md text-white lg:my-8 ",children:[Object(x.jsx)("p",{className:"lg:text-xl lg:mb-2",children:"\u67e5\u8a62\u65e5\u671f"}),Object(x.jsx)("p",{children:null===e||void 0===e||null===(b=e.CountryData)||void 0===b?void 0:b.day})]})]})]})})},ie="fce351f4d4msh97551c1d5bbc92dp104d0ejsn1c2fe1d64fb4";var le=function(){var e=Object(a.useContext)(Ie),t=(e.menuOpen,e.setMenuOpen),n=e.Search_API_URL,r=Object(a.useState)(!1),c=Object(l.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)(),d=Object(l.a)(s,2),u=d[0],j=d[1],b=Object(a.useState)(),f=Object(l.a)(b,2),h=f[0],O=f[1];Object(a.useEffect)((function(){o(!0),p(),t(!1)}),[]);var p=Object(a.useCallback)((function(){fetch("".concat(n,"/countries"),{method:"GET",headers:{"content-type":"application/json","x-rapidapi-key":ie,"x-rapidapi-host":"covid-193.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){var t=null===e||void 0===e?void 0:e.response.map((function(e){return{label:e,value:e}}));j(t),o(!1)})).catch((function(e){console.error(e),o(!1)}))}),[]),m=Object(a.useCallback)((function(e){fetch("".concat(n,"/statistics?country=").concat(e),{method:"GET",headers:{"content-type":"application/json","x-rapidapi-key":ie,"x-rapidapi-host":"covid-193.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e,t){if(!e.response[0])throw t;O(null===e||void 0===e?void 0:e.response[0]),o(!1)})).catch((function(e){alert("\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u570b\u5bb6\u82f1\u6587\u540d"),o(!1)}))}),[]);return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(ce,{AllCountryData:u,getCountryData:m,CountryData:h,setPending:o,pending:i})})},oe=n(373),se=n(100);var de=function(e){var t=e.DeathsRatioData,n=e.Line1,a=e.Line2,r=e.Line3,c=e.Line4,i=e.Line5;return Object(x.jsx)("div",{className:"w-full h-full",children:Object(x.jsx)(o.a,{width:"100%",height:"100%",children:Object(x.jsxs)(oe.a,{data:t,margin:{top:5,right:50,bottom:5,left:10},children:[Object(x.jsx)(d.a,{dataKey:"date"}),Object(x.jsx)(u.a,{}),Object(x.jsx)(j.a,{}),Object(x.jsx)(b.a,{}),Object(x.jsx)(f.a,{stroke:"#f5f5f5"}),Object(x.jsx)(se.a,{type:"monotone",dataKey:n,stroke:"#8884d8",animationDuration:1e3}),Object(x.jsx)(se.a,{type:"monotone",dataKey:a,stroke:"#82ca9d",animationDuration:2e3}),Object(x.jsx)(se.a,{type:"monotone",dataKey:r,stroke:"#ff7c2b",animationDuration:3e3}),Object(x.jsx)(se.a,{type:"monotone",dataKey:c,stroke:"#05fbff",animationDuration:4e3}),Object(x.jsx)(se.a,{type:"monotone",dataKey:i,stroke:"#ffbb00",animationDuration:5e3})]})})})},ue=n(376),je=n(203),be=n(70);var fe=function(e){var t=e.data,n=["#e32047","#f77c95","#8a0025","#ff5e5e","#ff1900"];return Object(x.jsx)("div",{className:"w-full h-full",children:Object(x.jsx)(o.a,{width:"100%",height:"100%",children:Object(x.jsxs)(ue.a,{width:"100%",children:[Object(x.jsx)(j.a,{}),Object(x.jsx)(je.a,{data:t,dataKey:"newCases",nameKey:"country",cx:"50%",cy:"50%",outerRadius:80,fill:"#e32047",label:!0,children:t.map((function(e,t){return Object(x.jsx)(be.a,{fill:n[t]},t)}))})]})})})};n(377);var he=function(e){var t=e.Tab,n=e.setTab,a=e.bgColor,r=e.text;return Object(x.jsx)("div",{className:"w-24 mx-4 p-2 text-xs lg:text-base text-center ".concat(t==="".concat(r)?"".concat(a||"bg-red-500"):"bg-gray-500"," text-white rounded-md cursor-pointer"),onClick:function(){return n("".concat(r))},children:r})};var xe=function(e){var t=e.item,n=e.index;return Object(x.jsxs)("div",{className:"w-48 flex flex-wrap lg:flex-col lg:w-3/5 mb-4 box-border lg:border-b-2 lg:border-red-500",children:[Object(x.jsx)("p",{className:"hidden sm:block",children:"".concat(n+1,".").concat(t.country)}),Object(x.jsx)("p",{className:"text-sm hidden lg:block",children:ne(t.newCases)})]},n)};var Oe=function(e){var t=Object(a.useState)("\u6b7b\u4ea1\u7387\u6392\u884c"),n=Object(l.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)("\u5168\u7403"),o=Object(l.a)(i,2),s=o[0],d=o[1],u=Object(a.useState)(),j=Object(l.a)(u,2),b=j[0],f=j[1],h=Object(a.useState)(),O=Object(l.a)(h,2),p=O[0],m=O[1],v=Object(a.useState)(),w=Object(l.a)(v,2),g=w[0],y=w[1],N=Object(a.useState)(),D=Object(l.a)(N,2),k=D[0],C=D[1],R=Object(a.useState)(),E=Object(l.a)(R,2),S=E[0],I=E[1],L=Object(a.useState)(),T=Object(l.a)(L,2),P=T[0],M=T[1],A=Object(a.useState)(),U=Object(l.a)(A,2),z=U[0],_=U[1],B=(null===e||void 0===e?void 0:e.TaiwanDeathsRatioData)&&(null===e||void 0===e?void 0:e.TaiwanDeathsRatioData)&&(null===e||void 0===e?void 0:e.UsaDeathsRatioData)&&(null===e||void 0===e?void 0:e.UkDeathsRatioData)&&(null===e||void 0===e?void 0:e.MexicoDeathsRatioData)&&(null===e||void 0===e?void 0:e.IndiaDeathsRatioData);Object(a.useEffect)((function(){B&&f(function(e,t,n,a,r,c){var i=[{},{},{},{},{},{},{}];return i.forEach((function(e,n){return e.date=t[n].date})),i.forEach((function(e,t){return e.UsaDeathsRatio=n[t].deathsRatio})),i.forEach((function(e,t){return e.UkDeathsRatio=a[t].deathsRatio})),i.forEach((function(e,t){return e.MexicoDeathsRatio=r[t].deathsRatio})),i.forEach((function(e,n){return e.TaiwanDeathsRatio=t[n].deathsRatio})),i.forEach((function(e,t){return e.IndiaDeathsRatio=c[t].deathsRatio})),i.reverse()}(null===e||void 0===e||e.TaiwanDeathsRatioData,null===e||void 0===e?void 0:e.TaiwanDeathsRatioData,null===e||void 0===e?void 0:e.UsaDeathsRatioData,null===e||void 0===e?void 0:e.UkDeathsRatioData,null===e||void 0===e?void 0:e.MexicoDeathsRatioData,null===e||void 0===e?void 0:e.IndiaDeathsRatioData))}),[B]);var K=!!e.GlobalData;return Object(a.useEffect)((function(){if(K){var t=function(e){var t=e.filter((function(e){return e.continent!==e.country})).sort((function(e,t){return t.cases.new-e.cases.new})).slice(0,5),n=e.filter((function(e){return"Asia"===e.continent&&e.continent!==e.country})).sort((function(e,t){return t.cases.new-e.cases.new})).slice(0,5),a=e.filter((function(e){return"Europe"===e.continent&&e.continent!==e.country})).sort((function(e,t){return t.cases.new-e.cases.new})).slice(0,5),r=e.filter((function(e){return"North-America"===e.continent})),c=e.filter((function(e){return"South-America"===e.continent}));return Array.prototype.push.apply(r,c),{global:t,asia:n,europe:a,america:r.filter((function(e){return"North-America"===e.continent&&e.continent!==e.country})).sort((function(e,t){return t.cases.new-e.cases.new})).slice(0,5),africa:e.filter((function(e){return"Africa"===e.continent&&e.continent!==e.country})).sort((function(e,t){return t.cases.new-e.cases.new})).slice(0,5),oceania:e.filter((function(e){return"Oceania"===e.continent&&e.continent!==e.country})).sort((function(e,t){return t.cases.new-e.cases.new})).slice(0,5)}}(e.GlobalData),n=t.global,a=t.asia,r=t.europe,c=t.america,i=t.africa,l=t.oceania;m(ae(n)),y(ae(a)),C(ae(r)),I(ae(c)),M(ae(i)),_(ae(l))}}),[K]),Object(x.jsx)("div",{className:"w-full h-3/4 flex justify-center items-center",children:Object(x.jsxs)("div",{className:"w-3/4 h-5/6 mt-10 bg-white rounded-lg shadow-lg flex flex-col items-center box-border",children:[Object(x.jsxs)("div",{className:"flex my-4",children:[Object(x.jsx)(he,{text:"\u6b7b\u4ea1\u7387\u6392\u884c",Tab:r,setTab:c}),Object(x.jsx)(he,{text:"\u4e94\u5927\u6d32\u6392\u884c",Tab:r,setTab:c})]}),B&&"\u6b7b\u4ea1\u7387\u6392\u884c"===r&&Object(x.jsx)(de,{DeathsRatioData:b,Line1:"IndiaDeathsRatio",Line2:"TaiwanDeathsRatio",Line3:"UsaDeathsRatio",Line4:"UkDeathsRatio",Line5:"MexicoDeathsRatio"}),K&&"\u4e94\u5927\u6d32\u6392\u884c"===r&&Object(x.jsxs)("div",{className:"w-full h-full flex flex-col",children:[Object(x.jsx)("div",{className:"w-full",children:Object(x.jsxs)("div",{className:"w-full h-full flex justify-center lg:justify-around lg:items-center",children:[Object(x.jsx)(he,{text:"\u5168\u7403",Tab:s,setTab:d}),Object(x.jsx)(he,{text:"\u4e9e\u6d32",Tab:s,setTab:d}),Object(x.jsx)(he,{text:"\u6b50\u6d32",Tab:s,setTab:d}),Object(x.jsx)(he,{text:"\u7f8e\u6d32",Tab:s,setTab:d}),Object(x.jsx)(he,{text:"\u975e\u6d32",Tab:s,setTab:d}),Object(x.jsx)(he,{text:"\u5927\u6d0b",Tab:s,setTab:d})]})}),Object(x.jsxs)("div",{className:"w-full h-full mt-4 flex flex-col lg:flex-row justify-between items-center",children:[Object(x.jsxs)("div",{className:"w-full h-1/3 lg:w-2/5 lg:h-full text-center",children:["\u4eca\u65e5\u65b0\u589e\u78ba\u8a3a\u4eba\u6578\u6392\u884c",Object(x.jsxs)("div",{className:"flex flex-row lg:flex-col justify-center items-center mt-4",children:["\u5168\u7403"===s&&p.map((function(e,t){return Object(x.jsx)(xe,{item:e,index:t})})),"\u4e9e\u6d32"===s&&g.map((function(e,t){return Object(x.jsx)(xe,{item:e,index:t})})),"\u6b50\u6d32"===s&&k.map((function(e,t){return Object(x.jsx)(xe,{item:e,index:t})})),"\u7f8e\u6d32"===s&&S.map((function(e,t){return Object(x.jsx)(xe,{item:e,index:t})})),"\u975e\u6d32"===s&&P.map((function(e,t){return Object(x.jsx)(xe,{item:e,index:t})})),"\u5927\u6d0b"===s&&z.map((function(e,t){return Object(x.jsx)(xe,{item:e,index:t})}))]})]}),Object(x.jsxs)("div",{className:"w-full h-2/3 lg:w-3/5 lg:h-full",children:["\u5168\u7403"===s&&Object(x.jsx)(fe,{data:p}),"\u4e9e\u6d32"===s&&Object(x.jsx)(fe,{data:g}),"\u6b50\u6d32"===s&&Object(x.jsx)(fe,{data:k}),"\u7f8e\u6d32"===s&&Object(x.jsx)(fe,{data:S}),"\u975e\u6d32"===s&&Object(x.jsx)(fe,{data:P}),"\u5927\u6d0b"===s&&Object(x.jsx)(fe,{data:z})]})]})]})]})})};var pe,me,ve=function(){var e=Object(a.useContext)(Ie),t=(e.menuOpen,e.setMenuOpen),n=e.Board_API_URL,r=e.Search_API_URL,c=Object(a.useState)(),i=Object(l.a)(c,2),o=i[0],s=i[1],d=Object(a.useState)(),u=Object(l.a)(d,2),j=u[0],b=u[1],f=Object(a.useState)(),h=Object(l.a)(f,2),O=h[0],p=h[1],m=Object(a.useState)(),v=Object(l.a)(m,2),w=v[0],g=v[1],y=Object(a.useState)(),N=Object(l.a)(y,2),D=N[0],k=N[1],C=Object(a.useState)(),R=Object(l.a)(C,2),E=R[0],S=R[1];Object(a.useEffect)((function(){I("mexico",k),I("uk",g),I("india",p),I("usa",b),I("taiwan",s),L(),t(!1)}),[]);var I=Object(a.useCallback)((function(e,t){fetch("".concat(n,"/v1/spots/week?region=").concat(e),{method:"GET",headers:{"content-type":"application/json","x-rapidapi-key":ie,"x-rapidapi-host":"coronavirus-map.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e,n){if(200!==e.status)throw n;var a=[{},{},{},{},{},{},{}],r=Object.keys(e.data),c=Object.values(e.data).map((function(e){return Math.round(1e3*e.death_ratio)/10}));a.forEach((function(e,t){return e.date=r[t]})),a.forEach((function(e,t){return e.deathsRatio=c[t]})),t(a)})).catch((function(e){alert("\u8acb\u7a0d\u5f8c\u518d\u5617\u8a66")}))}),[]),L=Object(a.useCallback)((function(e,t){fetch("".concat(r,"/statistics"),{method:"GET",headers:{"content-type":"application/json","x-rapidapi-key":ie,"x-rapidapi-host":"covid-193.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e,t){S(e.response)})).catch((function(e){alert("\u8acb\u7a0d\u5f8c\u518d\u5617\u8a66")}))}),[]);return Object(x.jsx)(Oe,{TaiwanDeathsRatioData:o,UsaDeathsRatioData:j,IndiaDeathsRatioData:O,UkDeathsRatioData:w,MexicoDeathsRatioData:D,GlobalData:E})},we=n(144),ge=["title","titleId"];function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function De(e,t){var n=e.title,r=e.titleId,c=Ne(e,ge);return a.createElement("svg",ye({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,pe||(pe=a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),me||(me=a.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"})))}var ke=a.forwardRef(De);n.p;var Ce=function(e){var t=e.id,n=e.question,r=e.answer,c=Object(a.useState)([]),i=Object(l.a)(c,2),o=i[0],s=i[1];return Object(x.jsxs)("div",{className:"w-full mb-4 rounded-lg border-2 border-gray-200 relative ".concat(o.includes(t)&&"shadow-md "),children:[Object(x.jsxs)("div",{className:"flex space-x-4 p-4 cursor-pointer ".concat(o.includes(t)&&"border-b-2"),onClick:function(){o.includes(t)?s((function(e){return Object(we.a)(e).filter((function(e){return e!==t}))})):s((function(e){return[].concat(Object(we.a)(e),[t])}))},children:[Object(x.jsxs)("div",{className:"w-7 h-7 bg-red-600 text-white rounded-md flex justify-center items-center",children:["Q",t]}),Object(x.jsx)("div",{children:n}),Object(x.jsx)("div",{className:"".concat(o.includes(t)&&"transform rotate-180"," transition duration-150 absolute right-5"),children:Object(x.jsx)(ke,{})})]}),Object(x.jsx)("div",{className:"".concat(o.includes(t)?"block":"hidden"," p-4"),children:r})]})};var Re=function(e){return Object(x.jsxs)("div",{className:"container min-h-screen mx-auto flex flex-col justify-start items-center",children:[Object(x.jsxs)("div",{className:"my-8",children:[Object(x.jsx)("div",{className:"border-l-2 border-r-2 border-red-500 py-4 mb-8 text-center text-2xl tracking-wider",children:"\u7df4\u7fd2\u4e32\u63a5API\u4f5c\u54c1\u96c6"}),e.IntroInfor.map((function(e){return Object(x.jsx)("p",{className:"tracking-wider",children:e.content},e.id)}))]}),Object(x.jsx)("div",{className:"w-2/3 lg:w-1/3",children:e.QnAInfor.map((function(e){return Object(x.jsx)(Ce,{id:e.id,question:e.content,answer:e.answer},e.id)}))})]})};var Ee=[{path:"/search",component:le},{path:"/board",component:ve},{path:"/introduction",component:function(){return Object(x.jsx)(Re,{IntroInfor:[{id:1,content:"\u9996\u9801\u986f\u793a\u904e\u53bb\u4e00\u5e74\u6bcf\u500b\u6708\u9996\u65e5\u65b0\u589e\u78ba\u8a3a\u4eba\u6578"},{id:2,content:"\u641c\u5c0b\u9801\u53ef\u4ee5\u67e5\u8a62\u7576\u65e5\u55ae\u4e00\u570b\u5bb6\u7684\u6700\u65b0\u8cc7\u8a0a"},{id:3,content:"\u6392\u884c\u699c\u9801\u986f\u793a\u7576\u65e5\u6b7b\u4ea1\u7387\u4ee5\u53ca\u4e94\u5927\u6d32\u524d\u56b4\u91cd\u570b\u5bb6"}],QnAInfor:[{id:1,content:"\u4f7f\u7528JS\u6846\u67b6?",answer:"\u4f7f\u7528 Create-react-app \u642d\u914d Hooks \u4ee5\u53ca useContext \u50b3\u905e\u8cc7\u6599"},{id:2,content:"\u4f7f\u7528UI\u6846\u67b6?",answer:"\u4f7f\u7528 Tailwind css\u505a\u6210\u7d44\u4ef6\u642d\u914d props \u50b3\u905e\u8cc7\u6599\uff0c\u5716\u8868\u5247\u662f\u4f7f\u7528 Rechart.js"},{id:3,content:"\u8cc7\u6599\u662f\u54ea\u88e1\u4f86\u7684?",answer:"\u4f7f\u7528 Rapid API \u9019\u500b\u7db2\u7ad9\u4e2d\u514d\u8cbb\u7684API"}]})}}],Se=n(19),Ie=r.a.createContext();var Le=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(x.jsx)(Ie.Provider,{value:{menuOpen:n,setMenuOpen:r,Search_API_URL:"https://covid-193.p.rapidapi.com",Board_API_URL:"https://coronavirus-map.p.rapidapi.com"},children:Object(x.jsx)("div",{className:"w-screen h-screen font-sans font-bold relative bg-gray-100",children:Object(x.jsxs)(N.a,{children:[Object(x.jsx)(S,{}),Object(x.jsxs)(Se.c,{children:[Object(x.jsx)(Se.a,{path:"/",exact:!0,component:y}),Ee.map((function(e){return Object(x.jsx)(Se.a,{path:e.path,component:e.component})})),Object(x.jsx)(Se.a,{path:"*",component:P})]}),Object(x.jsx)(I,{})]})})})};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Le,{})}),document.getElementById("root"))}},[[367,1,2]]]);
//# sourceMappingURL=main.d8450858.chunk.js.map