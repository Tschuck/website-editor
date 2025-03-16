import{u as e,C as r,j as i,a as s,r as d,b as n,c as t,s as o,K as l,P as a,d as c,D as g,e as m,S as u,h as p,M as h,f as x,g as f,L as b,v as j,i as y,R as v,k as w,O as N,l as k,m as S,n as L}from"./vendor-Da7ttJZT.js";function C(s){const{attributes:d,listeners:n,setNodeRef:t,transform:o,transition:l}=e({id:s.id}),a={transform:r.Transform.toString(o),transition:l};return i.jsx("div",{ref:t,style:a,...d,...n,children:s.children})}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var I=(e=>(e.bigImage="big-image-right",e.cards="cards",e.imageTop="image-top",e.threeImagesLeft="three-images-left",e.threeImagesRight="three-images-right",e.threeImagesTop="three-images-top",e.twoImagesLeft="two-images-left",e.twoImagesRight="two-images-right",e.textOnly="text-only",e))(I||{}),D=(e=>(e.one="one",e.sideBySide="side-by-side",e))(D||{});function $(e){const r=self.crypto.randomUUID();return{id:self.crypto.randomUUID(),layout:I.imageTop,textDisplay:D.one,slug:r,summary:"",title:e,config:{buttonLink:"",cards:[],image1:{description:"",downloadLink:"",referenceLink:""},image2:{description:"",downloadLink:"",referenceLink:""},image3:{description:"",downloadLink:"",referenceLink:""},markdown:"",markdown2:""}}}function O(...e){return e.filter((e=>!!e)).join(" ")}function B({className:e,page:r,onChange:f,disableCards:b,showSummary:j}){const{t:y}=s(),[v,w]=d.useState(),[N,k]=d.useState(),S=n(t(a),t(l,{coordinateGetter:o})),{register:L,handleSubmit:T,getValues:R}=c({values:r}),F=async e=>{f(e)};function E(e){const r=R(),i=r.config.cards,s=i.findIndex((r=>r.id===e.id));i[s]=e,f(r)}return i.jsxs("form",{className:O(e,"flex flex-col gap-4 pb-32"),onSubmit:T(F),onChange:T(F),children:[i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("slug")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"text",...L("slug")})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("title")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"text",...L("title")})]}),j&&i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("summary")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"text",...L("summary")})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("layout")}),i.jsx("select",{className:"p-2 border border-gray-400 border-solid rounded-lg",...L("layout"),children:Object.values(I).map((e=>i.jsx(i.Fragment,{children:(!b||e!==I.cards)&&i.jsx("option",{value:e,children:y(`layout-type.${e}`)},e)})))})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("text-display")}),i.jsx("select",{className:"p-2 border border-gray-400 border-solid rounded-lg",...L("textDisplay"),children:Object.values(D).map((e=>i.jsx(i.Fragment,{children:i.jsx("option",{value:e,children:y(`text-display-type.${e}`)},e)})))})]}),R().layout===I.cards?i.jsxs(i.Fragment,{children:[i.jsx("div",{children:i.jsx("button",{onClick:function(){const e=$(y("new-card"));R().config.cards.unshift(e),E(e)},className:"p-2 mt-4 text-white bg-gray-600 rounded-lg",children:y("add-card")})}),i.jsx("div",{className:"grid grid-cols-3 gap-4",children:i.jsx(g,{sensors:S,collisionDetection:m,onDragEnd:function(e){const{active:r,over:i}=e,s=R(),d=s.config.cards;if(r.id!==(null==i?void 0:i.id)){const e=d.findIndex((e=>e.id===r.id)),n=d.findIndex((e=>e.id===(null==i?void 0:i.id)));s.config.cards=x(d,e,n),f(s)}else{const e=d.find((e=>e.id===r.id));e&&(w(e),k(void 0))}},children:i.jsx(u,{items:R().config.cards,strategy:p,children:R().config.cards.map((e=>i.jsx(C,{id:e.id,children:i.jsx("div",{className:"w-full p-4 border border-gray-400 rounded-lg hover:bg-gray-200 hover:cursor-pointer "+((null==v?void 0:v.id)===e.id?"font-bold bg-gray-600 text-white":"hover:bg-gray-300 cursor-pointer"),onClick:()=>w(e),children:i.jsx("p",{children:e.title})})},e.id)))})})}),v&&i.jsxs("div",{className:"p-4 border border-gray-400 rounded-lg",children:[i.jsxs("div",{className:"flex flex-col items-end justify-end mb-4",children:[i.jsx("button",{className:"p-2 text-white bg-red-300 rounded-lg hover:bg-red-600",onClick:()=>k(v),children:y("delete")}),N&&i.jsxs("div",{children:[i.jsxs("p",{className:"mb-4",children:[y("really-delete"),": ",N.title]}),i.jsx("button",{className:"p-2 text-white bg-red-600 rounded-lg hover:bg-red-800",onClick:function(){if(!N)return;const e=R(),r=e.config.cards,i=r.findIndex((e=>e.id===N.id));r.splice(i,1),f(e),w(void 0),k(void 0)},children:y("delete")})]})]}),i.jsx(B,{disableCards:!0,onChange:E,page:v,showSummary:!0})]})]}):i.jsxs(i.Fragment,{children:[R().layout!==I.textOnly&&[1,2,3].map((e=>i.jsxs("div",{className:"flex flex-col gap-4",children:[i.jsxs("p",{children:[y("image"),": ",e]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("image-reference")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"link",...L(`config.image${e}.referenceLink`)})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("image-download")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"link",...L(`config.image${e}.downloadLink`)})]}),R().layout===I.threeImagesTop&&i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:y("description")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"link",...L(`config.image${e}.description`)})]}),i.jsx("div",{className:"flex justify-end col-span-2 mt-4",children:i.jsx("img",{src:R().config[`image${e}`].downloadLink,className:"w-[300px]"})})]},e))),i.jsxs("div",{className:"mb-16 markdown-wrapper",children:[i.jsx("p",{children:y("markdown")}),i.jsx("textarea",{className:"w-full p-2 border border-gray-400 border-solid rounded-lg",...L("config.markdown"),rows:20}),y("preview"),i.jsx("div",{className:"p-4 bg-white border border-gray-400 rounded-lg",children:i.jsx(h,{skipHtml:!1,children:R().config.markdown})})]}),R().textDisplay===D.sideBySide&&i.jsxs("div",{className:"mb-16 markdown-wrapper",children:[i.jsxs("p",{children:[y("markdown")," 2"]}),i.jsx("textarea",{className:"w-full p-2 border border-gray-400 border-solid rounded-lg",...L("config.markdown2"),rows:20}),y("preview"),i.jsx("div",{className:"p-4 bg-white border border-gray-400",children:i.jsx(h,{skipHtml:!1,children:R().config.markdown2})})]})]})]})}const T="website-definition-";const R=new class{save(e){sessionStorage.setItem(`${T}${e.id}`,JSON.stringify(e))}list(){const e=[];for(let r=0;r<sessionStorage.length;r+=1){const i=sessionStorage.key(r);(null==i?void 0:i.includes(T))&&e.push(this.get(i.replace(T,"")))}return e}get(e){const r=sessionStorage.getItem(`${T}${e}`);if(!r)throw new Error(`Website definition with id ${e} not found.`);return JSON.parse(r)}delete(e){sessionStorage.removeItem(`${T}${e}`)}};function F(){const e=f().id,{t:r}=s(),p=n(t(a),t(l,{coordinateGetter:o})),h=R.get(e),[y,v]=d.useState(h.pages),[w,N]=d.useState(),[k,S]=d.useState(!0),[L,I]=d.useState(!1),{register:D,handleSubmit:O}=c({values:h}),T=async e=>{h.title=e.title,h.phoneNumber=e.phoneNumber,R.save(h)};function F(e){N(void 0),S(!1),I(!1),setTimeout((()=>N(e)))}return i.jsxs("div",{className:"flex flex-row w-full h-full",children:[i.jsxs("div",{className:"z-10 flex flex-col p-4 bg-gray-200 shadow-lg border-right shrink-0",style:{boxShadow:"0 0 15px 0px lightgray"},children:[i.jsxs(b,{to:"/",children:["< ",r("back-to-overview")]}),i.jsx("div",{className:"mt-4 border-y border p-4 border-gray-600 rounded-lg "+(k?"font-bold bg-gray-600 text-white":"hover:bg-gray-300 cursor-pointer bg-white"),onClick:()=>{N(void 0),S(!0)},children:r("page-config")}),i.jsxs("div",{children:[i.jsx(g,{sensors:p,collisionDetection:m,onDragEnd:function(e){const{active:r,over:i}=e;if(r.id!==(null==i?void 0:i.id)){const e=y.findIndex((e=>e.id===r.id)),s=y.findIndex((e=>e.id===(null==i?void 0:i.id)));h.pages=x(y,e,s),v(h.pages),R.save(h)}else{const e=y.find((e=>e.id===r.id));e&&F(e)}},children:i.jsx(u,{items:y,strategy:j,children:y.map(((e,r)=>i.jsx(C,{id:e.id,children:i.jsx("div",{className:"mt-4 border-y border p-4 border-gray-600 rounded-lg  "+((null==w?void 0:w.id)===e.id?"font-bold bg-gray-600 text-white":"hover:bg-gray-300 cursor-pointer bg-white"),onClick:()=>F(e),children:e.title},r)},e.id)))})}),i.jsx("button",{onClick:function(){const e=$(r("new-page"));h.pages=[...y,e],I(!1),v(h.pages),F(e),R.save(h)},className:"p-2 mt-4 text-white bg-gray-600 rounded-lg",children:r("add-page")})]}),i.jsx("div",{className:"flex-grow"}),i.jsx("button",{onClick:function(){const e=JSON.stringify(h,null,2),r=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download=h.title+".json",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(i)},className:"p-2 mt-4 text-white bg-gray-600 rounded-lg",children:r("export")})]}),i.jsxs("div",{className:"w-full p-4 overflow-x-hidden overflow-y-auto bg-gray-50",children:[k&&i.jsxs("form",{className:"flex flex-col gap-4",onSubmit:O(T),onChange:O(T),children:[i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:r("title")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"text",...D("title")})]}),i.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[i.jsx("p",{children:r("phoneNumber")}),i.jsx("input",{className:"p-2 border border-gray-400 border-solid rounded-lg",type:"text",...D("phoneNumber")})]})]}),i.jsx("div",{className:"flex-grow px-8 py-4",children:w&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"flex justify-end mb-4",children:[i.jsx("button",{className:"p-2 text-white bg-red-300 rounded-lg hover:bg-red-600",onClick:()=>I(!0),children:r("delete")}),L&&i.jsxs("div",{children:[i.jsxs("p",{className:"mb-4",children:[r("really-delete"),": ",w.title]}),i.jsx("button",{className:"p-2 text-white bg-red-600 rounded-lg hover:bg-red-800",onClick:function(){if(!w)return;const e=y.findIndex((e=>e.id===w.id));h.pages.splice(e,1),v(h.pages),N(void 0),S(!0),I(!1),R.save(h)},children:r("delete")})]})]}),i.jsx(B,{page:w,onChange:function(e){const r=y.findIndex((r=>r.id===e.id)),i=[...y];i[r]=e,N(e),v(i),I(!1),h.pages=y,R.save(h)}})]})})]})]})}function E({className:e,children:r}){return i.jsx("div",{className:O(e,"mx-auto overflow-y-auto h-full overflow-x-hidden px-4 sm:px-8 xl:px-32 pt-4 pb-32 md:pb-0"),children:r})}function U(){const{t:e}=s(),r=y(),[n,t]=d.useState(),o=R.list();function l(e){var i;if("string"!=typeof(null==(i=e.target)?void 0:i.result))return;const s=JSON.parse(e.target.result);R.save(s),r(`/${s.id}`)}return i.jsxs(E,{className:"",children:[o.map((r=>i.jsxs("div",{className:"flex items-center justify-center flex-grow w-full gap-4 mb-4",children:[i.jsx(b,{className:"w-full p-4 border border-gray-400 rounded-lg hover:bg-gray-200 hover:cursor-pointer",to:`/${r.id}`,children:i.jsx("p",{children:r.title})}),i.jsx("div",{children:i.jsx("button",{className:"p-2 text-white bg-red-600 rounded-lg hover:bg-red-800",onClick:()=>t(r),children:e("delete")})})]},r.id))),i.jsxs("div",{className:"p-4 mx-16 mt-16 bg-gray-100 border border-gray-600 rounded-lg",children:[i.jsx("p",{className:"mb-4",children:e("import-definition")}),i.jsx("input",{id:"file",type:"file",className:"",onChange:function(e){var r;const i=null==(r=e.target.files)?void 0:r.item(0);if(!i)return;const s=new FileReader;s.onload=l,s.readAsText(i)}})]}),n&&i.jsxs("div",{children:[i.jsxs("p",{className:"mb-4",children:[e("really-delete"),": ",n.title]}),i.jsx("button",{className:"p-2 text-white bg-red-600 rounded-lg hover:bg-red-800",onClick:()=>{R.delete(n.id),t(void 0)},children:e("delete")})]})]})}const K=[{path:"/",element:i.jsx(U,{})},{path:"/:id",element:i.jsx(F,{})}].map((e=>({...e,nodeRef:d.createRef()}))),Z=[{path:"/",element:i.jsx(N,{}),children:K}];function z(){return i.jsx(i.Fragment,{children:i.jsx(v,{router:w(Z)})})}function J(){return i.jsx(i.Fragment,{children:i.jsx(d.Suspense,{fallback:i.jsx(i.Fragment,{children:"loading"}),children:i.jsx(z,{})})})}const P={"add-card":"Karte hinzufügen","add-page":"Seite hinzufügen","back-to-overview":"Zurück zur Übersicht",delete:"löschen",export:"Export",image:"Bild","image-download":"Download-Link","image-reference":"Impressums-Link","import-definition":"Website Konfigration importieren",layout:"Layout",description:"Beschreibung","layout-type":{"big-image-right":"Grosses Bild rechts",cards:"Karten","image-top":"Bild oben","text-only":"Nur Text","three-images-left":"Drei Bilder links","three-images-right":"Drei Bilder rechts","three-images-top":"Drei Bilder oben","two-images-left":"Zwei Bilder links","two-images-right":"Zwei Bilder rechts","two-texts":"Zwei Texte"},markdown:"Markdown","new-page":"Neue Seite","page-config":"Website Konfiguration","phone-number":"Telefonnummer",preview:"Vorschau","really-delete":"Wirklich löschen?",slug:"Slug",summary:"Zusammenfassung",title:"Titel","text-display":"Text Darstellung","text-display-type":{one:"Ein Text","side-by-side":"Zwei nebeneinander"}};k.use(S).init({debug:!0,interpolation:{escapeValue:!1},lng:"de",resources:{de:{translation:P}}}),L.createRoot(document.getElementById("root")).render(i.jsx(J,{}));
