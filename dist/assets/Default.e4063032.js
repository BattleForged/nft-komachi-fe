import{u as he,m as J,a as E,b as _e,c as xe,d as Ve,e as Se,f as Ie,g as Be,h as ke,V as Ce,i as G,j as we,k as Te,l as Ae,n as Re,o as oe,p as $e,q as Pe}from"./VSelect.a5ae5514.js";import{p as U,i as Q,c as d,r as T,a as L,g as le,o as se,b as S,d as ze,e as ue,f as Le,h as He,j as Me,k as Ne,l as O,m as l,n as ie,t as Y,q as re,s as Ee,u as Oe,v as De,w as je,x as qe,y as Ke,z as M,A as N,B as C,C as W,D as H,E as Ue,F as Fe,G as Ze,H as Xe}from"./index.e5061d0a.js";const K=Symbol.for("vuetify:layout"),ce=Symbol.for("vuetify:layout-item"),ne=1e3,Ge=U({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),We=U({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Ye(){const e=Q(K);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Je(e){var v;const a=Q(K);if(!a)throw new Error("[Vuetify] Could not find injected layout");const t=(v=e.id)!=null?v:`layout-item-${ze()}`,o=le("useLayoutItem");ue(ce,{id:t});const n=T(!1);Le(()=>n.value=!0),He(()=>n.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:i}=a.register(o,{...e,active:d(()=>n.value?!1:e.active.value),id:t});return Me(()=>a.unregister(t)),{layoutItemStyles:s,layoutRect:a.layoutRect,layoutItemScrimStyles:i}}const Qe=(e,a,t,o)=>{let n={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...n}}];for(const i of e){const v=a.get(i),m=t.get(i),y=o.get(i);if(!v||!m||!y)continue;const f={...n,[v.value]:parseInt(n[v.value],10)+(y.value?parseInt(m.value,10):0)};s.push({id:i,layer:f}),n=f}return s};function et(e){const a=Q(K,null),t=d(()=>a?a.rootZIndex.value-100:ne),o=T([]),n=L(new Map),s=L(new Map),i=L(new Map),v=L(new Map),m=L(new Map),{resizeRef:y,contentRect:f}=he(),x=d(()=>{var u;const r=new Map,p=(u=e.overlaps)!=null?u:[];for(const _ of p.filter(c=>c.includes(":"))){const[c,b]=_.split(":");if(!o.value.includes(c)||!o.value.includes(b))continue;const k=n.get(c),$=n.get(b),P=s.get(c),j=s.get(b);!k||!$||!P||!j||(r.set(b,{position:k.value,amount:parseInt(P.value,10)}),r.set(c,{position:$.value,amount:-parseInt(j.value,10)}))}return r}),g=d(()=>{const r=[...new Set([...i.values()].map(u=>u.value))].sort((u,_)=>u-_),p=[];for(const u of r){const _=o.value.filter(c=>{var b;return((b=i.get(c))==null?void 0:b.value)===u});p.push(..._)}return Qe(p,n,s,v)}),I=d(()=>!Array.from(m.values()).some(r=>r.value)),B=d(()=>g.value[g.value.length-1].layer),D=d(()=>({"--v-layout-left":S(B.value.left),"--v-layout-right":S(B.value.right),"--v-layout-top":S(B.value.top),"--v-layout-bottom":S(B.value.bottom),...I.value?void 0:{transition:"none"}})),V=d(()=>g.value.slice(1).map((r,p)=>{let{id:u}=r;const{layer:_}=g.value[p],c=s.get(u),b=n.get(u);return{id:u,..._,size:Number(c.value),position:b.value}})),A=r=>V.value.find(p=>p.id===r),w=le("createLayout"),R=T(!1);se(()=>{R.value=!0}),ue(K,{register:(r,p)=>{let{id:u,order:_,position:c,layoutSize:b,elementSize:k,active:$,disableTransitions:P,absolute:j}=p;i.set(u,_),n.set(u,c),s.set(u,b),v.set(u,$),P&&m.set(u,P);const ee=Ne(ce,w==null?void 0:w.vnode).indexOf(r);ee>-1?o.value.splice(ee,0,u):o.value.push(u);const te=d(()=>V.value.findIndex(z=>z.id===u)),F=d(()=>t.value+g.value.length*2-te.value*2),pe=d(()=>{const z=c.value==="left"||c.value==="right",Z=c.value==="right",be=c.value==="bottom",ae={[c.value]:0,zIndex:F.value,transform:`translate${z?"X":"Y"}(${($.value?0:-110)*(Z||be?-1:1)}%)`,position:j.value||t.value!==ne?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!R.value)return ae;const h=V.value[te.value];if(!h)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const X=x.value.get(u);return X&&(h[X.position]+=X.amount),{...ae,height:z?`calc(100% - ${h.top}px - ${h.bottom}px)`:k.value?`${k.value}px`:void 0,left:Z?void 0:`${h.left}px`,right:Z?`${h.right}px`:void 0,top:c.value!=="bottom"?`${h.top}px`:void 0,bottom:c.value!=="top"?`${h.bottom}px`:void 0,width:z?k.value?`${k.value}px`:void 0:`calc(100% - ${h.left}px - ${h.right}px)`}}),ge=d(()=>({zIndex:F.value-1}));return{layoutItemStyles:pe,layoutItemScrimStyles:ge,zIndex:F}},unregister:r=>{i.delete(r),n.delete(r),s.delete(r),v.delete(r),m.delete(r),o.value=o.value.filter(p=>p!==r)},mainRect:B,mainStyles:D,getLayoutItem:A,items:V,layoutRect:f,rootZIndex:t});const fe=d(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ye=d(()=>({zIndex:t.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:fe,layoutStyles:ye,getLayoutItem:A,items:V,layoutRect:f,layoutRef:y}}const tt=(e,a)=>{const t=e.__vccOpts||e;for(const[o,n]of a)t[o]=n;return t};const at=U({text:String,...J()},"v-toolbar-title"),de=O()({name:"VToolbarTitle",props:at(),setup(e,a){let{slots:t}=a;return E(()=>{const o=!!(t.default||t.text||e.text);return l(e.tag,{class:"v-toolbar-title"},{default:()=>{var n;return[o&&l("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(n=t.default)==null?void 0:n.call(t)])]}})}),{}}}),ot=[null,"prominent","default","comfortable","compact"],ve=U({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ot.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,..._e(),...xe(),...Ve(),...J({tag:"header"}),...ie()},"v-toolbar"),q=O()({name:"VToolbar",props:ve(),setup(e,a){var g;let{slots:t}=a;const{backgroundColorClasses:o,backgroundColorStyles:n}=Se(Y(e,"color")),{borderClasses:s}=Ie(e),{elevationClasses:i}=Be(e),{roundedClasses:v}=ke(e),{themeClasses:m}=re(e),y=T(!!(e.extended||((g=t.extension)==null?void 0:g.call(t)))),f=d(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),x=d(()=>y.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ee({VBtn:{variant:"text"}}),E(()=>{var V;const I=!!(e.title||t.title),B=!!(t.image||e.image),D=(V=t.extension)==null?void 0:V.call(t);return y.value=!!(e.extended||D),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,i.value,v.value,m.value],style:[n.value]},{default:()=>[B&&l("div",{key:"image",class:"v-toolbar__image"},[t.image?l(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):l(Ce,{key:"image-img",cover:!0,src:e.image},null)]),l(G,{defaults:{VTabs:{height:S(f.value)}}},{default:()=>{var A,w,R;return[l("div",{class:"v-toolbar__content",style:{height:S(f.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(A=t.prepend)==null?void 0:A.call(t)]),I&&l(de,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(R=t.append)==null?void 0:R.call(t)])])]}}),l(G,{defaults:{VTabs:{height:S(x.value)}}},{default:()=>[l(we,null,{default:()=>[y.value&&l("div",{class:"v-toolbar__extension",style:{height:S(x.value)}},[D])]})]})]})}),{contentHeight:f,extensionHeight:x}}});function nt(e){var a;return Oe(e,Object.keys((a=q==null?void 0:q.props)!=null?a:{}))}function me(){const e=T(!1);return se(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:d(()=>e.value?void 0:{transition:"none !important"}),isBooted:De(e)}}const lt=O()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ve(),...We(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=T(),n=je(e,"modelValue"),s=d(()=>{var f,x,g,I;const m=(x=(f=o.value)==null?void 0:f.contentHeight)!=null?x:0,y=(I=(g=o.value)==null?void 0:g.extensionHeight)!=null?I:0;return m+y}),{ssrBootStyles:i}=me(),{layoutItemStyles:v}=Je({id:e.name,order:d(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:s,elementSize:s,active:n,absolute:Y(e,"absolute")});return E(()=>{const[m]=nt(e);return l(q,qe({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...v.value,height:void 0,...i.value}},m),t)}),{}}}),st={class:"btn-wapper"},ut={__name:"AppBar",setup(e){const a=Te(),{accounts:t,selectedAccount:o}=Ke(a),{connect:n,reconnect:s,test:i}=a;return(v,m)=>(M(),N(lt,{flat:"",color:"primary"},{default:C(()=>[l(Ae,{icon:"mdi-ethereum"}),l(de,null,{default:C(()=>[W("\u5C0F\u753A-KOMACHI-")]),_:1}),l(Re),H(t).length<=0?(M(),N(oe,{key:0,color:"secondary",variant:"flat",onClick:H(n)},{default:C(()=>[W(" Connect ")]),_:1},8,["onClick"])):(M(),N($e,{key:1,label:"Account",class:"mt-2",items:H(t),modelValue:H(o),"onUpdate:modelValue":m[0]||(m[0]=y=>Ue(o)?o.value=y:null)},{"append-item":C(()=>[l(Pe,{class:"mb-2"}),Fe("div",st,[l(oe,{color:"secondary",variant:"flat",onClick:H(s)},{default:C(()=>[W(" Reconnect ")]),_:1},8,["onClick"])])]),_:1},8,["items","modelValue"]))]),_:1}))}},it=tt(ut,[["__scopeId","data-v-6b87183b"]]);const rt=O()({name:"VMain",props:{scrollable:Boolean,...J({tag:"main"})},setup(e,a){let{slots:t}=a;const{mainStyles:o}=Ye(),{ssrBootStyles:n}=me();return E(()=>l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[o.value,n.value]},{default:()=>{var s,i;return[e.scrollable?l("div",{class:"v-main__scroller"},[(s=t.default)==null?void 0:s.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),ct={__name:"View",setup(e){return(a,t)=>{const o=Ze("router-view");return M(),N(rt,null,{default:C(()=>[l(o)]),_:1})}}};const dt=O()({name:"VApp",props:{...Ge({fullHeight:!0}),...ie()},setup(e,a){let{slots:t}=a;const o=re(e),{layoutClasses:n,layoutStyles:s,getLayoutItem:i,items:v,layoutRef:m}=et(e),{rtlClasses:y}=Xe();return E(()=>{var f;return l("div",{ref:m,class:["v-application",o.themeClasses.value,n.value,y.value],style:s.value},[l("div",{class:"v-application__wrap"},[(f=t.default)==null?void 0:f.call(t)])])}),{getLayoutItem:i,items:v,theme:o}}}),yt={__name:"Default",setup(e){return(a,t)=>(M(),N(dt,null,{default:C(()=>[l(it),l(ct)]),_:1}))}};export{yt as default};
