import{r as i,a as ut,G as lt,R as dt}from"./vendor-7ZAa7xAN.js";var Ae={exports:{}},Z={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=i,vt=Symbol.for("react.element"),ht=Symbol.for("react.fragment"),pt=Object.prototype.hasOwnProperty,mt=ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yt={key:!0,ref:!0,__self:!0,__source:!0};function Ne(e,t,n){var r,o={},a=null,c=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)pt.call(t,r)&&!yt.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:vt,type:e,key:a,ref:c,props:o,_owner:mt.current}}Z.Fragment=ht;Z.jsx=Ne;Z.jsxs=Ne;Ae.exports=Z;var y=Ae.exports;function D(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function gt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Oe(...e){return t=>e.forEach(n=>gt(n,t))}function _(...e){return i.useCallback(Oe(...e),e)}var de=i.forwardRef((e,t)=>{const{children:n,...r}=e,o=i.Children.toArray(n),a=o.find(bt);if(a){const c=a.props.children,s=o.map(d=>d===a?i.Children.count(c)>1?i.Children.only(null):i.isValidElement(c)?c.props.children:null:d);return y.jsx(ce,{...r,ref:t,children:i.isValidElement(c)?i.cloneElement(c,void 0,s):null})}return y.jsx(ce,{...r,ref:t,children:n})});de.displayName="Slot";var ce=i.forwardRef((e,t)=>{const{children:n,...r}=e;if(i.isValidElement(n)){const o=wt(n);return i.cloneElement(n,{...Ct(r,n.props),ref:t?Oe(t,o):o})}return i.Children.count(n)>1?i.Children.only(null):null});ce.displayName="SlotClone";var Et=({children:e})=>y.jsx(y.Fragment,{children:e});function bt(e){return i.isValidElement(e)&&e.type===Et}function Ct(e,t){const n={...t};for(const r in t){const o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...s)=>{a(...s),o(...s)}:o&&(n[r]=o):r==="style"?n[r]={...o,...a}:r==="className"&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}function wt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function kt(e,t){const n=i.createContext(t),r=a=>{const{children:c,...s}=a,d=i.useMemo(()=>s,Object.values(s));return y.jsx(n.Provider,{value:d,children:c})};r.displayName=e+"Provider";function o(a){const c=i.useContext(n);if(c)return c;if(t!==void 0)return t;throw new Error(`\`${a}\` must be used within \`${e}\``)}return[r,o]}function St(e,t=[]){let n=[];function r(a,c){const s=i.createContext(c),d=n.length;n=[...n,c];const l=v=>{var E;const{scope:h,children:m,...k}=v,u=((E=h==null?void 0:h[e])==null?void 0:E[d])||s,p=i.useMemo(()=>k,Object.values(k));return y.jsx(u.Provider,{value:p,children:m})};l.displayName=a+"Provider";function f(v,h){var u;const m=((u=h==null?void 0:h[e])==null?void 0:u[d])||s,k=i.useContext(m);if(k)return k;if(c!==void 0)return c;throw new Error(`\`${v}\` must be used within \`${a}\``)}return[l,f]}const o=()=>{const a=n.map(c=>i.createContext(c));return function(s){const d=(s==null?void 0:s[e])||a;return i.useMemo(()=>({[`__scope${e}`]:{...s,[e]:d}}),[s,d])}};return o.scopeName=e,[r,xt(o,...t)]}function xt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(a){const c=r.reduce((s,{useScope:d,scopeName:l})=>{const v=d(a)[`__scope${l}`];return{...s,...v}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:c}),[c])}};return n.scopeName=t.scopeName,n}var Rt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],N=Rt.reduce((e,t)=>{const n=i.forwardRef((r,o)=>{const{asChild:a,...c}=r,s=a?de:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),y.jsx(s,{...c,ref:o})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function Pt(e,t){e&&ut.flushSync(()=>e.dispatchEvent(t))}function T(e){const t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Mt(e,t=globalThis==null?void 0:globalThis.document){const n=T(e);i.useEffect(()=>{const r=o=>{o.key==="Escape"&&n(o)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var At="DismissableLayer",ue="dismissableLayer.update",Nt="dismissableLayer.pointerDownOutside",Ot="dismissableLayer.focusOutside",ye,De=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),fe=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:c,onDismiss:s,...d}=e,l=i.useContext(De),[f,v]=i.useState(null),h=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=i.useState({}),k=_(t,b=>v(b)),u=Array.from(l.layers),[p]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),E=u.indexOf(p),x=f?u.indexOf(f):-1,C=l.layersWithOutsidePointerEventsDisabled.size>0,w=x>=E,S=Tt(b=>{const A=b.target,B=[...l.branches].some(J=>J.contains(A));!w||B||(o==null||o(b),c==null||c(b),b.defaultPrevented||s==null||s())},h),M=Lt(b=>{const A=b.target;[...l.branches].some(J=>J.contains(A))||(a==null||a(b),c==null||c(b),b.defaultPrevented||s==null||s())},h);return Mt(b=>{x===l.layers.size-1&&(r==null||r(b),!b.defaultPrevented&&s&&(b.preventDefault(),s()))},h),i.useEffect(()=>{if(f)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(ye=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(f)),l.layers.add(f),ge(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=ye)}},[f,h,n,l]),i.useEffect(()=>()=>{f&&(l.layers.delete(f),l.layersWithOutsidePointerEventsDisabled.delete(f),ge())},[f,l]),i.useEffect(()=>{const b=()=>m({});return document.addEventListener(ue,b),()=>document.removeEventListener(ue,b)},[]),y.jsx(N.div,{...d,ref:k,style:{pointerEvents:C?w?"auto":"none":void 0,...e.style},onFocusCapture:D(e.onFocusCapture,M.onFocusCapture),onBlurCapture:D(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:D(e.onPointerDownCapture,S.onPointerDownCapture)})});fe.displayName=At;var Dt="DismissableLayerBranch",Te=i.forwardRef((e,t)=>{const n=i.useContext(De),r=i.useRef(null),o=_(t,r);return i.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),y.jsx(N.div,{...e,ref:o})});Te.displayName=Dt;function Tt(e,t=globalThis==null?void 0:globalThis.document){const n=T(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{const a=s=>{if(s.target&&!r.current){let d=function(){Le(Nt,n,l,{discrete:!0})};const l={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",o.current),o.current=d,t.addEventListener("click",o.current,{once:!0})):d()}else t.removeEventListener("click",o.current);r.current=!1},c=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(c),t.removeEventListener("pointerdown",a),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Lt(e,t=globalThis==null?void 0:globalThis.document){const n=T(e),r=i.useRef(!1);return i.useEffect(()=>{const o=a=>{a.target&&!r.current&&Le(Ot,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",o),()=>t.removeEventListener("focusin",o)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ge(){const e=new CustomEvent(ue);document.dispatchEvent(e)}function Le(e,t,n,{discrete:r}){const o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),r?Pt(o,a):o.dispatchEvent(a)}var Xn=fe,Qn=Te,q=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{},_t="Portal",_e=i.forwardRef((e,t)=>{var s;const{container:n,...r}=e,[o,a]=i.useState(!1);q(()=>a(!0),[]);const c=n||o&&((s=globalThis==null?void 0:globalThis.document)==null?void 0:s.body);return c?lt.createPortal(y.jsx(N.div,{...r,ref:t}),c):null});_e.displayName=_t;function It(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var X=e=>{const{present:t,children:n}=e,r=Ft(t),o=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),a=_(r.ref,jt(o));return typeof n=="function"||r.isPresent?i.cloneElement(o,{ref:a}):null};X.displayName="Presence";function Ft(e){const[t,n]=i.useState(),r=i.useRef({}),o=i.useRef(e),a=i.useRef("none"),c=e?"mounted":"unmounted",[s,d]=It(c,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const l=U(r.current);a.current=s==="mounted"?l:"none"},[s]),q(()=>{const l=r.current,f=o.current;if(f!==e){const h=a.current,m=U(l);e?d("MOUNT"):m==="none"||(l==null?void 0:l.display)==="none"?d("UNMOUNT"):d(f&&h!==m?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,d]),q(()=>{if(t){let l;const f=t.ownerDocument.defaultView??window,v=m=>{const u=U(r.current).includes(m.animationName);if(m.target===t&&u&&(d("ANIMATION_END"),!o.current)){const p=t.style.animationFillMode;t.style.animationFillMode="forwards",l=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=p)})}},h=m=>{m.target===t&&(a.current=U(r.current))};return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",v),t.addEventListener("animationend",v),()=>{f.clearTimeout(l),t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",v),t.removeEventListener("animationend",v)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:i.useCallback(l=>{l&&(r.current=getComputedStyle(l)),n(l)},[])}}function U(e){return(e==null?void 0:e.animationName)||"none"}function jt(e){var r,o;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(o=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:o.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Wt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Bt({defaultProp:t,onChange:n}),a=e!==void 0,c=a?e:r,s=T(n),d=i.useCallback(l=>{if(a){const v=typeof l=="function"?l(e):l;v!==e&&s(v)}else o(l)},[a,e,o,s]);return[c,d]}function Bt({defaultProp:e,onChange:t}){const n=i.useState(e),[r]=n,o=i.useRef(r),a=T(t);return i.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ie=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=i.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...s},d)=>i.createElement("svg",{ref:d,...Vt,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ie("lucide",o),...s},[...c.map(([l,f])=>i.createElement(l,f)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=(e,t)=>{const n=i.forwardRef(({className:r,...o},a)=>i.createElement(zt,{ref:a,iconNode:t,className:Ie(`lucide-${Ut(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=g("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=g("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=g("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=g("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=g("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=g("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=g("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=g("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=g("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=g("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=g("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=g("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=g("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=g("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=g("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=g("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=g("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=g("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=g("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=g("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=g("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=g("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=g("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=g("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=g("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=g("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=g("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=g("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=g("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=g("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=g("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=g("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=g("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=g("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var $t=dt.useId||(()=>{}),Ht=0;function ee(e){const[t,n]=i.useState($t());return q(()=>{e||n(r=>r??String(Ht++))},[e]),e||(t?`radix-${t}`:"")}var te="focusScope.autoFocusOnMount",ne="focusScope.autoFocusOnUnmount",Ee={bubbles:!1,cancelable:!0},Gt="FocusScope",Fe=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...c}=e,[s,d]=i.useState(null),l=T(o),f=T(a),v=i.useRef(null),h=_(t,u=>d(u)),m=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let u=function(C){if(m.paused||!s)return;const w=C.target;s.contains(w)?v.current=w:O(v.current,{select:!0})},p=function(C){if(m.paused||!s)return;const w=C.relatedTarget;w!==null&&(s.contains(w)||O(v.current,{select:!0}))},E=function(C){if(document.activeElement===document.body)for(const S of C)S.removedNodes.length>0&&O(s)};document.addEventListener("focusin",u),document.addEventListener("focusout",p);const x=new MutationObserver(E);return s&&x.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",p),x.disconnect()}}},[r,s,m.paused]),i.useEffect(()=>{if(s){Ce.add(m);const u=document.activeElement;if(!s.contains(u)){const E=new CustomEvent(te,Ee);s.addEventListener(te,l),s.dispatchEvent(E),E.defaultPrevented||(Kt(Qt(je(s)),{select:!0}),document.activeElement===u&&O(s))}return()=>{s.removeEventListener(te,l),setTimeout(()=>{const E=new CustomEvent(ne,Ee);s.addEventListener(ne,f),s.dispatchEvent(E),E.defaultPrevented||O(u??document.body,{select:!0}),s.removeEventListener(ne,f),Ce.remove(m)},0)}}},[s,l,f,m]);const k=i.useCallback(u=>{if(!n&&!r||m.paused)return;const p=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,E=document.activeElement;if(p&&E){const x=u.currentTarget,[C,w]=qt(x);C&&w?!u.shiftKey&&E===w?(u.preventDefault(),n&&O(C,{select:!0})):u.shiftKey&&E===C&&(u.preventDefault(),n&&O(w,{select:!0})):E===x&&u.preventDefault()}},[n,r,m.paused]);return y.jsx(N.div,{tabIndex:-1,...c,ref:h,onKeyDown:k})});Fe.displayName=Gt;function Kt(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(O(r,{select:t}),document.activeElement!==n)return}function qt(e){const t=je(e),n=be(t,e),r=be(t.reverse(),e);return[n,r]}function je(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const o=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||o?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function be(e,t){for(const n of e)if(!Yt(n,{upTo:t}))return n}function Yt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Zt(e){return e instanceof HTMLInputElement&&"select"in e}function O(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Zt(e)&&t&&e.select()}}var Ce=Xt();function Xt(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=we(e,t),e.unshift(t)},remove(t){var n;e=we(e,t),(n=e[0])==null||n.resume()}}}function we(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Qt(e){return e.filter(t=>t.tagName!=="A")}var re=0;function Jt(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??ke()),document.body.insertAdjacentElement("beforeend",e[1]??ke()),re++,()=>{re===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),re--}},[])}function ke(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var P=function(){return P=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},P.apply(this,arguments)};function We(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function en(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,a;r<o;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var G="right-scroll-bar-position",K="width-before-scroll-bar",tn="with-scroll-bars-hidden",nn="--removed-body-scroll-bar-size";function oe(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function rn(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var o=n.value;o!==r&&(n.value=r,n.callback(r,o))}}}})[0];return n.callback=t,n.facade}var on=typeof window<"u"?i.useLayoutEffect:i.useEffect,Se=new WeakMap;function an(e,t){var n=rn(null,function(r){return e.forEach(function(o){return oe(o,r)})});return on(function(){var r=Se.get(n);if(r){var o=new Set(r),a=new Set(e),c=n.current;o.forEach(function(s){a.has(s)||oe(s,null)}),a.forEach(function(s){o.has(s)||oe(s,c)})}Se.set(n,e)},[e]),n}function sn(e){return e}function cn(e,t){t===void 0&&(t=sn);var n=[],r=!1,o={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var c=t(a,r);return n.push(c),function(){n=n.filter(function(s){return s!==c})}},assignSyncMedium:function(a){for(r=!0;n.length;){var c=n;n=[],c.forEach(a)}n={push:function(s){return a(s)},filter:function(){return n}}},assignMedium:function(a){r=!0;var c=[];if(n.length){var s=n;n=[],s.forEach(a),c=n}var d=function(){var f=c;c=[],f.forEach(a)},l=function(){return Promise.resolve().then(d)};l(),n={push:function(f){c.push(f),l()},filter:function(f){return c=c.filter(f),n}}}};return o}function un(e){e===void 0&&(e={});var t=cn(null);return t.options=P({async:!0,ssr:!1},e),t}var Be=function(e){var t=e.sideCar,n=We(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,P({},n))};Be.isSideCarExport=!0;function ln(e,t){return e.useMedium(t),Be}var Ue=un(),ae=function(){},Q=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:ae,onWheelCapture:ae,onTouchMoveCapture:ae}),o=r[0],a=r[1],c=e.forwardProps,s=e.children,d=e.className,l=e.removeScrollBar,f=e.enabled,v=e.shards,h=e.sideCar,m=e.noIsolation,k=e.inert,u=e.allowPinchZoom,p=e.as,E=p===void 0?"div":p,x=e.gapMode,C=We(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),w=h,S=an([n,t]),M=P(P({},C),o);return i.createElement(i.Fragment,null,f&&i.createElement(w,{sideCar:Ue,removeScrollBar:l,shards:v,noIsolation:m,inert:k,setCallbacks:a,allowPinchZoom:!!u,lockRef:n,gapMode:x}),c?i.cloneElement(i.Children.only(s),P(P({},M),{ref:S})):i.createElement(E,P({},M,{className:d,ref:S}),s))});Q.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Q.classNames={fullWidth:K,zeroRight:G};var dn=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function fn(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=dn();return t&&e.setAttribute("nonce",t),e}function vn(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function hn(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var pn=function(){var e=0,t=null;return{add:function(n){e==0&&(t=fn())&&(vn(t,n),hn(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},mn=function(){var e=pn();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Ve=function(){var e=mn(),t=function(n){var r=n.styles,o=n.dynamic;return e(r,o),null};return t},yn={left:0,top:0,right:0,gap:0},ie=function(e){return parseInt(e||"",10)||0},gn=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],o=t[e==="padding"?"paddingRight":"marginRight"];return[ie(n),ie(r),ie(o)]},En=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return yn;var t=gn(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},bn=Ve(),W="data-scroll-locked",Cn=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(tn,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body[`).concat(W,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(o,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(c,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(G,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(K,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(G," .").concat(G,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(K," .").concat(K,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(W,`] {
    `).concat(nn,": ").concat(s,`px;
  }
`)},xe=function(){var e=parseInt(document.body.getAttribute(W)||"0",10);return isFinite(e)?e:0},wn=function(){i.useEffect(function(){return document.body.setAttribute(W,(xe()+1).toString()),function(){var e=xe()-1;e<=0?document.body.removeAttribute(W):document.body.setAttribute(W,e.toString())}},[])},kn=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=r===void 0?"margin":r;wn();var a=i.useMemo(function(){return En(o)},[o]);return i.createElement(bn,{styles:Cn(a,!t,o,n?"":"!important")})},le=!1;if(typeof window<"u")try{var V=Object.defineProperty({},"passive",{get:function(){return le=!0,!0}});window.addEventListener("test",V,V),window.removeEventListener("test",V,V)}catch{le=!1}var I=le?{passive:!1}:!1,Sn=function(e){return e.tagName==="TEXTAREA"},ze=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Sn(e)&&n[t]==="visible")},xn=function(e){return ze(e,"overflowY")},Rn=function(e){return ze(e,"overflowX")},Re=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=$e(e,r);if(o){var a=He(e,r),c=a[1],s=a[2];if(c>s)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Pn=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Mn=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},$e=function(e,t){return e==="v"?xn(t):Rn(t)},He=function(e,t){return e==="v"?Pn(t):Mn(t)},An=function(e,t){return e==="h"&&t==="rtl"?-1:1},Nn=function(e,t,n,r,o){var a=An(e,window.getComputedStyle(t).direction),c=a*r,s=n.target,d=t.contains(s),l=!1,f=c>0,v=0,h=0;do{var m=He(e,s),k=m[0],u=m[1],p=m[2],E=u-p-a*k;(k||E)&&$e(e,s)&&(v+=E,h+=k),s instanceof ShadowRoot?s=s.host:s=s.parentNode}while(!d&&s!==document.body||d&&(t.contains(s)||t===s));return(f&&(Math.abs(v)<1||!o)||!f&&(Math.abs(h)<1||!o))&&(l=!0),l},z=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Pe=function(e){return[e.deltaX,e.deltaY]},Me=function(e){return e&&"current"in e?e.current:e},On=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Dn=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Tn=0,F=[];function Ln(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(Tn++)[0],a=i.useState(Ve)[0],c=i.useRef(e);i.useEffect(function(){c.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var u=en([e.lockRef.current],(e.shards||[]).map(Me),!0).filter(Boolean);return u.forEach(function(p){return p.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),u.forEach(function(p){return p.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var s=i.useCallback(function(u,p){if("touches"in u&&u.touches.length===2||u.type==="wheel"&&u.ctrlKey)return!c.current.allowPinchZoom;var E=z(u),x=n.current,C="deltaX"in u?u.deltaX:x[0]-E[0],w="deltaY"in u?u.deltaY:x[1]-E[1],S,M=u.target,b=Math.abs(C)>Math.abs(w)?"h":"v";if("touches"in u&&b==="h"&&M.type==="range")return!1;var A=Re(b,M);if(!A)return!0;if(A?S=b:(S=b==="v"?"h":"v",A=Re(b,M)),!A)return!1;if(!r.current&&"changedTouches"in u&&(C||w)&&(r.current=S),!S)return!0;var B=r.current||S;return Nn(B,p,u,B==="h"?C:w,!0)},[]),d=i.useCallback(function(u){var p=u;if(!(!F.length||F[F.length-1]!==a)){var E="deltaY"in p?Pe(p):z(p),x=t.current.filter(function(S){return S.name===p.type&&(S.target===p.target||p.target===S.shadowParent)&&On(S.delta,E)})[0];if(x&&x.should){p.cancelable&&p.preventDefault();return}if(!x){var C=(c.current.shards||[]).map(Me).filter(Boolean).filter(function(S){return S.contains(p.target)}),w=C.length>0?s(p,C[0]):!c.current.noIsolation;w&&p.cancelable&&p.preventDefault()}}},[]),l=i.useCallback(function(u,p,E,x){var C={name:u,delta:p,target:E,should:x,shadowParent:_n(E)};t.current.push(C),setTimeout(function(){t.current=t.current.filter(function(w){return w!==C})},1)},[]),f=i.useCallback(function(u){n.current=z(u),r.current=void 0},[]),v=i.useCallback(function(u){l(u.type,Pe(u),u.target,s(u,e.lockRef.current))},[]),h=i.useCallback(function(u){l(u.type,z(u),u.target,s(u,e.lockRef.current))},[]);i.useEffect(function(){return F.push(a),e.setCallbacks({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:h}),document.addEventListener("wheel",d,I),document.addEventListener("touchmove",d,I),document.addEventListener("touchstart",f,I),function(){F=F.filter(function(u){return u!==a}),document.removeEventListener("wheel",d,I),document.removeEventListener("touchmove",d,I),document.removeEventListener("touchstart",f,I)}},[]);var m=e.removeScrollBar,k=e.inert;return i.createElement(i.Fragment,null,k?i.createElement(a,{styles:Dn(o)}):null,m?i.createElement(kn,{gapMode:e.gapMode}):null)}function _n(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const In=ln(Ue,Ln);var Ge=i.forwardRef(function(e,t){return i.createElement(Q,P({},e,{ref:t,sideCar:In}))});Ge.classNames=Q.classNames;var Fn=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},j=new WeakMap,$=new WeakMap,H={},se=0,Ke=function(e){return e&&(e.host||Ke(e.parentNode))},jn=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Ke(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},Wn=function(e,t,n,r){var o=jn(t,Array.isArray(e)?e:[e]);H[n]||(H[n]=new WeakMap);var a=H[n],c=[],s=new Set,d=new Set(o),l=function(v){!v||s.has(v)||(s.add(v),l(v.parentNode))};o.forEach(l);var f=function(v){!v||d.has(v)||Array.prototype.forEach.call(v.children,function(h){if(s.has(h))f(h);else try{var m=h.getAttribute(r),k=m!==null&&m!=="false",u=(j.get(h)||0)+1,p=(a.get(h)||0)+1;j.set(h,u),a.set(h,p),c.push(h),u===1&&k&&$.set(h,!0),p===1&&h.setAttribute(n,"true"),k||h.setAttribute(r,"true")}catch(E){console.error("aria-hidden: cannot operate on ",h,E)}})};return f(t),s.clear(),se++,function(){c.forEach(function(v){var h=j.get(v)-1,m=a.get(v)-1;j.set(v,h),a.set(v,m),h||($.has(v)||v.removeAttribute(r),$.delete(v)),m||v.removeAttribute(n)}),se--,se||(j=new WeakMap,j=new WeakMap,$=new WeakMap,H={})}},Bn=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=Fn(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),Wn(r,o,n,"aria-hidden")):function(){return null}},ve="Dialog",[qe,Tr]=St(ve),[Un,R]=qe(ve),Ye=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:c=!0}=e,s=i.useRef(null),d=i.useRef(null),[l=!1,f]=Wt({prop:r,defaultProp:o,onChange:a});return y.jsx(Un,{scope:t,triggerRef:s,contentRef:d,contentId:ee(),titleId:ee(),descriptionId:ee(),open:l,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(v=>!v),[f]),modal:c,children:n})};Ye.displayName=ve;var Ze="DialogTrigger",Vn=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(Ze,n),a=_(t,o.triggerRef);return y.jsx(N.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":me(o.open),...r,ref:a,onClick:D(e.onClick,o.onOpenToggle)})});Vn.displayName=Ze;var he="DialogPortal",[zn,Xe]=qe(he,{forceMount:void 0}),Qe=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=R(he,t);return y.jsx(zn,{scope:t,forceMount:n,children:i.Children.map(r,c=>y.jsx(X,{present:n||a.open,children:y.jsx(_e,{asChild:!0,container:o,children:c})}))})};Qe.displayName=he;var Y="DialogOverlay",Je=i.forwardRef((e,t)=>{const n=Xe(Y,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=R(Y,e.__scopeDialog);return a.modal?y.jsx(X,{present:r||a.open,children:y.jsx($n,{...o,ref:t})}):null});Je.displayName=Y;var $n=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(Y,n);return y.jsx(Ge,{as:de,allowPinchZoom:!0,shards:[o.contentRef],children:y.jsx(N.div,{"data-state":me(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),L="DialogContent",et=i.forwardRef((e,t)=>{const n=Xe(L,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=R(L,e.__scopeDialog);return y.jsx(X,{present:r||a.open,children:a.modal?y.jsx(Hn,{...o,ref:t}):y.jsx(Gn,{...o,ref:t})})});et.displayName=L;var Hn=i.forwardRef((e,t)=>{const n=R(L,e.__scopeDialog),r=i.useRef(null),o=_(t,n.contentRef,r);return i.useEffect(()=>{const a=r.current;if(a)return Bn(a)},[]),y.jsx(tt,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:D(e.onCloseAutoFocus,a=>{var c;a.preventDefault(),(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:D(e.onPointerDownOutside,a=>{const c=a.detail.originalEvent,s=c.button===0&&c.ctrlKey===!0;(c.button===2||s)&&a.preventDefault()}),onFocusOutside:D(e.onFocusOutside,a=>a.preventDefault())})}),Gn=i.forwardRef((e,t)=>{const n=R(L,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return y.jsx(tt,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var c,s;(c=e.onCloseAutoFocus)==null||c.call(e,a),a.defaultPrevented||(r.current||(s=n.triggerRef.current)==null||s.focus(),a.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:a=>{var d,l;(d=e.onInteractOutside)==null||d.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(o.current=!0));const c=a.target;((l=n.triggerRef.current)==null?void 0:l.contains(c))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&o.current&&a.preventDefault()}})}),tt=i.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...c}=e,s=R(L,n),d=i.useRef(null),l=_(t,d);return Jt(),y.jsxs(y.Fragment,{children:[y.jsx(Fe,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:y.jsx(fe,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":me(s.open),...c,ref:l,onDismiss:()=>s.onOpenChange(!1)})}),y.jsxs(y.Fragment,{children:[y.jsx(Kn,{titleId:s.titleId}),y.jsx(Yn,{contentRef:d,descriptionId:s.descriptionId})]})]})}),pe="DialogTitle",nt=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(pe,n);return y.jsx(N.h2,{id:o.titleId,...r,ref:t})});nt.displayName=pe;var rt="DialogDescription",ot=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(rt,n);return y.jsx(N.p,{id:o.descriptionId,...r,ref:t})});ot.displayName=rt;var at="DialogClose",it=i.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,o=R(at,n);return y.jsx(N.button,{type:"button",...r,ref:t,onClick:D(e.onClick,()=>o.onOpenChange(!1))})});it.displayName=at;function me(e){return e?"open":"closed"}var st="DialogTitleWarning",[Lr,ct]=kt(st,{contentName:L,titleName:pe,docsSlug:"dialog"}),Kn=({titleId:e})=>{const t=ct(st),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},qn="DialogDescriptionWarning",Yn=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ct(qn).contentName}}.`;return i.useEffect(()=>{var a;const o=(a=e.current)==null?void 0:a.getAttribute("aria-describedby");t&&o&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},_r=Ye,Ir=Qe,Fr=Je,jr=et,Wr=nt,Br=ot,Ur=it;export{_r as $,Jn as A,Qn as B,ar as C,fe as D,ur as E,lr as F,fr as G,Mr as H,pr as I,kr as J,hr as K,mr as L,br as M,nr as N,Fr as O,N as P,jr as Q,Xn as R,de as S,Rr as T,Nr as U,Ur as V,Wr as W,Or as X,Br as Y,Dr as Z,Ir as _,Wt as a,gr as a0,wr as a1,dr as a2,vr as a3,X as b,St as c,T as d,D as e,_e as f,q as g,Pt as h,Et as i,y as j,Sr as k,Pr as l,xr as m,ee as n,tr as o,cr as p,Cr as q,rr as r,or as s,er as t,_ as u,sr as v,Ar as w,yr as x,ir as y,Er as z};
