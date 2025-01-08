"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{7401:(e,t,n)=>{n.d(t,{A:()=>u});var r=n(2115);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:u,className:s="",children:c,iconNode:f,...d}=e;return(0,r.createElement)("svg",{ref:t,...l,width:i,height:i,stroke:n,strokeWidth:u?24*Number(a)/Number(i):a,className:o("lucide",s),...d},[...f.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(c)?c:[c]])}),u=(e,t)=>{let n=(0,r.forwardRef)((n,l)=>{let{className:u,...s}=n;return(0,r.createElement)(a,{ref:l,iconNode:t,className:o("lucide-".concat(i(e)),u),...s})});return n.displayName="".concat(e),n}},3610:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},8166:(e,t,n)=>{n.d(t,{A:()=>l,q:()=>o});var r=n(2115),i=n(5155);function o(e,t){let n=r.createContext(t),o=e=>{let{children:t,...o}=e,l=r.useMemo(()=>o,Object.values(o));return(0,i.jsx)(n.Provider,{value:l,children:t})};return o.displayName=e+"Provider",[o,function(i){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}function l(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return o.scopeName=e,[function(t,o){let l=r.createContext(o),a=n.length;n=[...n,o];let u=t=>{let{scope:n,children:o,...u}=t,s=n?.[e]?.[a]||l,c=r.useMemo(()=>u,Object.values(u));return(0,i.jsx)(s.Provider,{value:c,children:o})};return u.displayName=t+"Provider",[u,function(n,i){let u=i?.[e]?.[a]||l,s=r.useContext(u);if(s)return s;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(o,...t)]}},9674:(e,t,n)=>{n.d(t,{qW:()=>d});var r,i=n(2115),o=n(3610),l=n(3360),a=n(8068),u=n(1524),s=n(5155),c="dismissableLayer.update",f=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=i.forwardRef((e,t)=>{var n,d;let{disableOutsidePointerEvents:h=!1,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:w,onDismiss:x,...b}=e,E=i.useContext(f),[A,R]=i.useState(null),L=null!==(d=null==A?void 0:A.ownerDocument)&&void 0!==d?d:null===(n=globalThis)||void 0===n?void 0:n.document,[,O]=i.useState({}),N=(0,a.s)(t,e=>R(e)),C=Array.from(E.layers),[T]=[...E.layersWithOutsidePointerEventsDisabled].slice(-1),P=C.indexOf(T),S=A?C.indexOf(A):-1,D=E.layersWithOutsidePointerEventsDisabled.size>0,k=S>=P,M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,u.c)(e),o=i.useRef(!1),l=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",l.current),l.current=t,n.addEventListener("click",l.current,{once:!0})):t()}else n.removeEventListener("click",l.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",l.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...E.branches].some(e=>e.contains(t));!k||n||(null==g||g(e),null==w||w(e),e.defaultPrevented||null==x||x())},L),W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,u.c)(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...E.branches].some(e=>e.contains(t))||(null==y||y(e),null==w||w(e),e.defaultPrevented||null==x||x())},L);return!function(e,t=globalThis?.document){let n=(0,u.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{S!==E.layers.size-1||(null==v||v(e),!e.defaultPrevented&&x&&(e.preventDefault(),x()))},L),i.useEffect(()=>{if(A)return h&&(0===E.layersWithOutsidePointerEventsDisabled.size&&(r=L.body.style.pointerEvents,L.body.style.pointerEvents="none"),E.layersWithOutsidePointerEventsDisabled.add(A)),E.layers.add(A),p(),()=>{h&&1===E.layersWithOutsidePointerEventsDisabled.size&&(L.body.style.pointerEvents=r)}},[A,L,h,E]),i.useEffect(()=>()=>{A&&(E.layers.delete(A),E.layersWithOutsidePointerEventsDisabled.delete(A),p())},[A,E]),i.useEffect(()=>{let e=()=>O({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,s.jsx)(l.sG.div,{...b,ref:N,style:{pointerEvents:D?k?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.m)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,o.m)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,o.m)(e.onPointerDownCapture,M.onPointerDownCapture)})});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:i}=r,o=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&o.addEventListener(e,t,{once:!0}),i?(0,l.hO)(o,a):o.dispatchEvent(a)}d.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(f),r=i.useRef(null),o=(0,a.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,s.jsx)(l.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch"},905:(e,t,n)=>{n.d(t,{Mz:()=>eq,i3:()=>eZ,UC:()=>eX,bL:()=>eY,Bk:()=>eS});var r=n(2115);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,u=Math.floor,s=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function h(e){return"x"===e?"y":"x"}function v(e){return"y"===e?"height":"width"}function g(e){return["top","bottom"].includes(p(e))?"y":"x"}function y(e){return e.replace(/start|end/g,e=>f[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function x(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function E(e,t,n){let r,{reference:i,floating:o}=e,l=g(t),a=h(g(t)),u=v(a),s=p(t),c="y"===l,f=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,y=i[u]/2-o[u]/2;switch(s){case"top":r={x:f,y:i.y-o.height};break;case"bottom":r={x:f,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(m(t)){case"start":r[a]-=y*(n&&c?-1:1);break;case"end":r[a]+=y*(n&&c?-1:1)}return r}let A=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),u=await (null==l.isRTL?void 0:l.isRTL(t)),s=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:f}=E(s,r,u),d=r,p={},m=0;for(let n=0;n<a.length;n++){let{name:o,fn:h}=a[n],{x:v,y:g,data:y,reset:w}=await h({x:c,y:f,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:s,platform:l,elements:{reference:e,floating:t}});c=null!=v?v:c,f=null!=g?g:f,p={...p,[o]:{...p[o],...y}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(s=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:c,y:f}=E(s,d,u)),n=-1)}return{x:c,y:f,placement:d,strategy:i,middlewareData:p}};async function R(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:u}=e,{boundary:s="clippingAncestors",rootBoundary:c="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=d(t,e),h=x(m),v=a[p?"floating"===f?"reference":"floating":f],g=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(v)))||n?v:v.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:s,rootBoundary:c,strategy:u})),y="floating"===f?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),E=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},A=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:w,strategy:u}):y);return{top:(g.top-A.top+h.top)/E.y,bottom:(A.bottom-g.bottom+h.bottom)/E.y,left:(g.left-A.left+h.left)/E.x,right:(A.right-g.right+h.right)/E.x}}function L(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function O(e){return i.some(t=>e[t]>=0)}async function N(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=m(n),u="y"===g(n),s=["left","top"].includes(l)?-1:1,c=o&&u?-1:1,f=d(t,e),{mainAxis:h,crossAxis:v,alignmentAxis:y}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&"number"==typeof y&&(v="end"===a?-1*y:y),u?{x:v*c,y:h*s}:{x:h*s,y:v*c}}function C(){return"undefined"!=typeof window}function T(e){return D(e)?(e.nodeName||"").toLowerCase():"#document"}function P(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function S(e){var t;return null==(t=(D(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function D(e){return!!C()&&(e instanceof Node||e instanceof P(e).Node)}function k(e){return!!C()&&(e instanceof Element||e instanceof P(e).Element)}function M(e){return!!C()&&(e instanceof HTMLElement||e instanceof P(e).HTMLElement)}function W(e){return!!C()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof P(e).ShadowRoot)}function j(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=_(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function F(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function H(e){let t=z(),n=k(e)?_(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function z(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function B(e){return["html","body","#document"].includes(T(e))}function _(e){return P(e).getComputedStyle(e)}function I(e){return k(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function U(e){if("html"===T(e))return e;let t=e.assignedSlot||e.parentNode||W(e)&&e.host||S(e);return W(t)?t.host:t}function $(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=U(t);return B(n)?t.ownerDocument?t.ownerDocument.body:t.body:M(n)&&j(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=P(i);if(o){let e=V(l);return t.concat(l,l.visualViewport||[],j(i)?i:[],e&&n?$(e):[])}return t.concat(i,$(i,[],n))}function V(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function G(e){let t=_(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=M(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,u=a(n)!==o||a(r)!==l;return u&&(n=o,r=l),{width:n,height:r,$:u}}function Y(e){return k(e)?e:e.contextElement}function q(e){let t=Y(e);if(!M(t))return s(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=G(t),l=(o?a(n.width):n.width)/r,u=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),u&&Number.isFinite(u)||(u=1),{x:l,y:u}}let X=s(0);function Z(e){let t=P(e);return z()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:X}function J(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=Y(e),a=s(1);t&&(r?k(r)&&(a=q(r)):a=q(e));let u=(void 0===(i=n)&&(i=!1),r&&(!i||r===P(l))&&i)?Z(l):s(0),c=(o.left+u.x)/a.x,f=(o.top+u.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=P(l),t=r&&k(r)?P(r):r,n=e,i=V(n);for(;i&&r&&t!==n;){let e=q(i),t=i.getBoundingClientRect(),r=_(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,f*=e.y,d*=e.x,p*=e.y,c+=o,f+=l,i=V(n=P(i))}}return b({width:d,height:p,x:c,y:f})}function K(e,t){let n=I(e).scrollLeft;return t?t.left+n:J(S(e)).left+n}function Q(e,t,n){void 0===n&&(n=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:K(e,r)),y:r.top+t.scrollTop}}function ee(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=P(e),r=S(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,u=0;if(i){o=i.width,l=i.height;let e=z();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,u=i.offsetTop)}return{width:o,height:l,x:a,y:u}}(e,n);else if("document"===t)r=function(e){let t=S(e),n=I(e),r=e.ownerDocument.body,i=l(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=l(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+K(e),u=-n.scrollTop;return"rtl"===_(r).direction&&(a+=l(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:u}}(S(e));else if(k(t))r=function(e,t){let n=J(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=M(e)?q(e):s(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=Z(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return b(r)}function et(e){return"static"===_(e).position}function en(e,t){if(!M(e)||"fixed"===_(e).position)return null;if(t)return t(e);let n=e.offsetParent;return S(e)===n&&(n=n.ownerDocument.body),n}function er(e,t){let n=P(e);if(F(e))return n;if(!M(e)){let t=U(e);for(;t&&!B(t);){if(k(t)&&!et(t))return t;t=U(t)}return n}let r=en(e,t);for(;r&&["table","td","th"].includes(T(r))&&et(r);)r=en(r,t);return r&&B(r)&&et(r)&&!H(r)?n:r||function(e){let t=U(e);for(;M(t)&&!B(t);){if(H(t))return t;if(F(t))break;t=U(t)}return null}(e)||n}let ei=async function(e){let t=this.getOffsetParent||er,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=M(t),i=S(t),o="fixed"===n,l=J(e,!0,o,t),a={scrollLeft:0,scrollTop:0},u=s(0);if(r||!r&&!o){if(("body"!==T(t)||j(i))&&(a=I(t)),r){let e=J(t,!0,o,t);u.x=e.x+t.clientLeft,u.y=e.y+t.clientTop}else i&&(u.x=K(i))}let c=!i||r||o?s(0):Q(i,a);return{x:l.left+a.scrollLeft-u.x-c.x,y:l.top+a.scrollTop-u.y-c.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},eo={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o="fixed"===i,l=S(r),a=!!t&&F(t.floating);if(r===l||a&&o)return n;let u={scrollLeft:0,scrollTop:0},c=s(1),f=s(0),d=M(r);if((d||!d&&!o)&&(("body"!==T(r)||j(l))&&(u=I(r)),M(r))){let e=J(r);c=q(r),f.x=e.x+r.clientLeft,f.y=e.y+r.clientTop}let p=!l||d||o?s(0):Q(l,u,!0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-u.scrollLeft*c.x+f.x+p.x,y:n.y*c.y-u.scrollTop*c.y+f.y+p.y}},getDocumentElement:S,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[..."clippingAncestors"===n?F(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=$(e,[],!1).filter(e=>k(e)&&"body"!==T(e)),i=null,o="fixed"===_(e).position,l=o?U(e):e;for(;k(l)&&!B(l);){let t=_(l),n=H(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||j(l)&&!n&&function e(t,n){let r=U(t);return!(r===n||!k(r)||B(r))&&("fixed"===_(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=U(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],u=a[0],s=a.reduce((e,n)=>{let r=ee(t,n,i);return e.top=l(r.top,e.top),e.right=o(r.right,e.right),e.bottom=o(r.bottom,e.bottom),e.left=l(r.left,e.left),e},ee(t,u,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:er,getElementRects:ei,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=G(e);return{width:t,height:n}},getScale:q,isElement:k,isRTL:function(e){return"rtl"===_(e).direction}},el=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:u,elements:s,middlewareData:c}=t,{element:f,padding:p=0}=d(e,t)||{};if(null==f)return{};let y=x(p),w={x:n,y:r},b=h(g(i)),E=v(b),A=await u.getDimensions(f),R="y"===b,L=R?"clientHeight":"clientWidth",O=a.reference[E]+a.reference[b]-w[b]-a.floating[E],N=w[b]-a.reference[b],C=await (null==u.getOffsetParent?void 0:u.getOffsetParent(f)),T=C?C[L]:0;T&&await (null==u.isElement?void 0:u.isElement(C))||(T=s.floating[L]||a.floating[E]);let P=T/2-A[E]/2-1,S=o(y[R?"top":"left"],P),D=o(y[R?"bottom":"right"],P),k=T-A[E]-D,M=T/2-A[E]/2+(O/2-N/2),W=l(S,o(M,k)),j=!c.arrow&&null!=m(i)&&M!==W&&a.reference[E]/2-(M<S?S:D)-A[E]/2<0,F=j?M<S?M-S:M-k:0;return{[b]:w[b]+F,data:{[b]:W,centerOffset:M-W-F,...j&&{alignmentOffset:F}},reset:j}}}),ea=(e,t,n)=>{let r=new Map,i={platform:eo,...n},o={...i.platform,_c:r};return A(e,t,{...i,platform:o})};var eu=n(7650),es="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function ec(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!ec(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!ec(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ef(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ed(e,t){let n=ef(e);return Math.round(t*n)/n}function ep(e){let t=r.useRef(e);return es(()=>{t.current=e}),t}let em=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?el({element:n.current,padding:r}).fn(t):{}:n?el({element:n,padding:r}).fn(t):{}}}),eh=(e,t)=>({...function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:i,y:o,placement:l,middlewareData:a}=t,u=await N(t,e);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+u.x,y:o+u.y,data:{...u,placement:l}}}}}(e),options:[e,t]}),ev=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:u=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=d(e,t),f={x:n,y:r},m=await R(t,c),v=g(p(i)),y=h(v),w=f[y],x=f[v];if(a){let e="y"===y?"top":"left",t="y"===y?"bottom":"right",n=w+m[e],r=w-m[t];w=l(n,o(w,r))}if(u){let e="y"===v?"top":"left",t="y"===v?"bottom":"right",n=x+m[e],r=x-m[t];x=l(n,o(x,r))}let b=s.fn({...t,[y]:w,[v]:x});return{...b,data:{x:b.x-n,y:b.y-r,enabled:{[y]:a,[v]:u}}}}}}(e),options:[e,t]}),eg=(e,t)=>({...function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:o,middlewareData:l}=t,{offset:a=0,mainAxis:u=!0,crossAxis:s=!0}=d(e,t),c={x:n,y:r},f=g(i),m=h(f),v=c[m],y=c[f],w=d(a,t),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(u){let e="y"===m?"height":"width",t=o.reference[m]-o.floating[e]+x.mainAxis,n=o.reference[m]+o.reference[e]-x.mainAxis;v<t?v=t:v>n&&(v=n)}if(s){var b,E;let e="y"===m?"width":"height",t=["top","left"].includes(p(i)),n=o.reference[f]-o.floating[e]+(t&&(null==(b=l.offset)?void 0:b[f])||0)+(t?0:x.crossAxis),r=o.reference[f]+o.reference[e]+(t?0:(null==(E=l.offset)?void 0:E[f])||0)-(t?x.crossAxis:0);y<n?y=n:y>r&&(y=r)}return{[m]:v,[f]:y}}}}(e),options:[e,t]}),ey=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r,i,o,l;let{placement:a,middlewareData:u,rects:s,initialPlacement:c,platform:f,elements:x}=t,{mainAxis:b=!0,crossAxis:E=!0,fallbackPlacements:A,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:N=!0,...C}=d(e,t);if(null!=(n=u.arrow)&&n.alignmentOffset)return{};let T=p(a),P=g(c),S=p(c)===c,D=await (null==f.isRTL?void 0:f.isRTL(x.floating)),k=A||(S||!N?[w(c)]:function(e){let t=w(e);return[y(e),t,y(t)]}(c)),M="none"!==O;!A&&M&&k.push(...function(e,t,n,r){let i=m(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(p(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(y)))),o}(c,N,O,D));let W=[c,...k],j=await R(t,C),F=[],H=(null==(r=u.flip)?void 0:r.overflows)||[];if(b&&F.push(j[T]),E){let e=function(e,t,n){void 0===n&&(n=!1);let r=m(e),i=h(g(e)),o=v(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=w(l)),[l,w(l)]}(a,s,D);F.push(j[e[0]],j[e[1]])}if(H=[...H,{placement:a,overflows:F}],!F.every(e=>e<=0)){let e=((null==(i=u.flip)?void 0:i.index)||0)+1,t=W[e];if(t)return{data:{index:e,overflows:H},reset:{placement:t}};let n=null==(o=H.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(L){case"bestFit":{let e=null==(l=H.filter(e=>{if(M){let t=g(e.placement);return t===P||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=c}if(a!==n)return{reset:{placement:n}}}return{}}}}(e),options:[e,t]}),ew=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var n,r;let i,a;let{placement:u,rects:s,platform:c,elements:f}=t,{apply:h=()=>{},...v}=d(e,t),y=await R(t,v),w=p(u),x=m(u),b="y"===g(u),{width:E,height:A}=s.floating;"top"===w||"bottom"===w?(i=w,a=x===(await (null==c.isRTL?void 0:c.isRTL(f.floating))?"start":"end")?"left":"right"):(a=w,i="end"===x?"top":"bottom");let L=A-y.top-y.bottom,O=E-y.left-y.right,N=o(A-y[i],L),C=o(E-y[a],O),T=!t.middlewareData.shift,P=N,S=C;if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(S=O),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(P=L),T&&!x){let e=l(y.left,0),t=l(y.right,0),n=l(y.top,0),r=l(y.bottom,0);b?S=E-2*(0!==e||0!==t?e+t:l(y.left,y.right)):P=A-2*(0!==n||0!==r?n+r:l(y.top,y.bottom))}await h({...t,availableWidth:S,availableHeight:P});let D=await c.getDimensions(f.floating);return E!==D.width||A!==D.height?{reset:{rects:!0}}:{}}}}(e),options:[e,t]}),ex=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...i}=d(e,t);switch(r){case"referenceHidden":{let e=L(await R(t,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:O(e)}}}case"escaped":{let e=L(await R(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:O(e)}}}default:return{}}}}}(e),options:[e,t]}),eb=(e,t)=>({...em(e),options:[e,t]});var eE=n(3360),eA=n(5155),eR=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:i=5,...o}=e;return(0,eA.jsx)(eE.sG.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,eA.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eR.displayName="Arrow";var eL=n(8068),eO=n(8166),eN=n(1524),eC=n(6611),eT="Popper",[eP,eS]=(0,eO.A)(eT),[eD,ek]=eP(eT),eM=e=>{let{__scopePopper:t,children:n}=e,[i,o]=r.useState(null);return(0,eA.jsx)(eD,{scope:t,anchor:i,onAnchorChange:o,children:n})};eM.displayName=eT;var eW="PopperAnchor",ej=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:i,...o}=e,l=ek(eW,n),a=r.useRef(null),u=(0,eL.s)(t,a);return r.useEffect(()=>{l.onAnchorChange((null==i?void 0:i.current)||a.current)}),i?null:(0,eA.jsx)(eE.sG.div,{...o,ref:u})});ej.displayName=eW;var eF="PopperContent",[eH,ez]=eP(eF),eB=r.forwardRef((e,t)=>{var n,i,a,s,c,f,d,p;let{__scopePopper:m,side:h="bottom",sideOffset:v=0,align:g="center",alignOffset:y=0,arrowPadding:w=0,avoidCollisions:x=!0,collisionBoundary:b=[],collisionPadding:E=0,sticky:A="partial",hideWhenDetached:R=!1,updatePositionStrategy:L="optimized",onPlaced:O,...N}=e,C=ek(eF,m),[T,P]=r.useState(null),D=(0,eL.s)(t,e=>P(e)),[k,M]=r.useState(null),W=function(e){let[t,n]=r.useState(void 0);return(0,eC.N)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(k),j=null!==(d=null==W?void 0:W.width)&&void 0!==d?d:0,F=null!==(p=null==W?void 0:W.height)&&void 0!==p?p:0,H="number"==typeof E?E:{top:0,right:0,bottom:0,left:0,...E},z=Array.isArray(b)?b:[b],B=z.length>0,_={padding:H,boundary:z.filter(e$),altBoundary:B},{refs:I,floatingStyles:U,placement:V,isPositioned:G,middlewareData:q}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:u=!0,whileElementsMounted:s,open:c}=e,[f,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=r.useState(i);ec(p,i)||m(i);let[h,v]=r.useState(null),[g,y]=r.useState(null),w=r.useCallback(e=>{e!==A.current&&(A.current=e,v(e))},[]),x=r.useCallback(e=>{e!==R.current&&(R.current=e,y(e))},[]),b=l||h,E=a||g,A=r.useRef(null),R=r.useRef(null),L=r.useRef(f),O=null!=s,N=ep(s),C=ep(o),T=ep(c),P=r.useCallback(()=>{if(!A.current||!R.current)return;let e={placement:t,strategy:n,middleware:p};C.current&&(e.platform=C.current),ea(A.current,R.current,e).then(e=>{let t={...e,isPositioned:!1!==T.current};S.current&&!ec(L.current,t)&&(L.current=t,eu.flushSync(()=>{d(t)}))})},[p,t,n,C,T]);es(()=>{!1===c&&L.current.isPositioned&&(L.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let S=r.useRef(!1);es(()=>(S.current=!0,()=>{S.current=!1}),[]),es(()=>{if(b&&(A.current=b),E&&(R.current=E),b&&E){if(N.current)return N.current(b,E,P);P()}},[b,E,P,N,O]);let D=r.useMemo(()=>({reference:A,floating:R,setReference:w,setFloating:x}),[w,x]),k=r.useMemo(()=>({reference:b,floating:E}),[b,E]),M=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!k.floating)return e;let t=ed(k.floating,f.x),r=ed(k.floating,f.y);return u?{...e,transform:"translate("+t+"px, "+r+"px)",...ef(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,u,k.floating,f.x,f.y]);return r.useMemo(()=>({...f,update:P,refs:D,elements:k,floatingStyles:M}),[f,P,D,k,M])}({strategy:"fixed",placement:h+("center"!==g?"-"+g:""),whileElementsMounted:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=Y(e),m=a||s?[...p?$(p):[],...$(t)]:[];m.forEach(e=>{a&&e.addEventListener("scroll",n,{passive:!0}),s&&e.addEventListener("resize",n)});let h=p&&f?function(e,t){let n,r=null,i=S(e);function a(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return!function s(c,f){void 0===c&&(c=!1),void 0===f&&(f=1),a();let{left:d,top:p,width:m,height:h}=e.getBoundingClientRect();if(c||t(),!m||!h)return;let v=u(p),g=u(i.clientWidth-(d+m)),y={rootMargin:-v+"px "+-g+"px "+-u(i.clientHeight-(p+h))+"px "+-u(d)+"px",threshold:l(0,o(1,f))||1},w=!0;function x(e){let t=e[0].intersectionRatio;if(t!==f){if(!w)return s();t?s(!1,t):n=setTimeout(()=>{s(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...y,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,y)}r.observe(e)}(!0),a}(p,n):null,v=-1,g=null;c&&(g=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&g&&(g.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),n()}),p&&!d&&g.observe(p),g.observe(t));let y=d?J(e):null;return d&&function t(){let r=J(e);y&&(r.x!==y.x||r.y!==y.y||r.width!==y.width||r.height!==y.height)&&n(),y=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;m.forEach(e=>{a&&e.removeEventListener("scroll",n),s&&e.removeEventListener("resize",n)}),null==h||h(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(i)}}(...t,{animationFrame:"always"===L})},elements:{reference:C.anchor},middleware:[eh({mainAxis:v+F,alignmentAxis:y}),x&&ev({mainAxis:!0,crossAxis:!1,limiter:"partial"===A?eg():void 0,..._}),x&&ey({..._}),ew({..._,apply:e=>{let{elements:t,rects:n,availableWidth:r,availableHeight:i}=e,{width:o,height:l}=n.reference,a=t.floating.style;a.setProperty("--radix-popper-available-width","".concat(r,"px")),a.setProperty("--radix-popper-available-height","".concat(i,"px")),a.setProperty("--radix-popper-anchor-width","".concat(o,"px")),a.setProperty("--radix-popper-anchor-height","".concat(l,"px"))}}),k&&eb({element:k,padding:w}),eV({arrowWidth:j,arrowHeight:F}),R&&ex({strategy:"referenceHidden",..._})]}),[X,Z]=eG(V),K=(0,eN.c)(O);(0,eC.N)(()=>{G&&(null==K||K())},[G,K]);let Q=null===(n=q.arrow)||void 0===n?void 0:n.x,ee=null===(i=q.arrow)||void 0===i?void 0:i.y,et=(null===(a=q.arrow)||void 0===a?void 0:a.centerOffset)!==0,[en,er]=r.useState();return(0,eC.N)(()=>{T&&er(window.getComputedStyle(T).zIndex)},[T]),(0,eA.jsx)("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...U,transform:G?U.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:en,"--radix-popper-transform-origin":[null===(s=q.transformOrigin)||void 0===s?void 0:s.x,null===(c=q.transformOrigin)||void 0===c?void 0:c.y].join(" "),...(null===(f=q.hide)||void 0===f?void 0:f.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,eA.jsx)(eH,{scope:m,placedSide:X,onArrowChange:M,arrowX:Q,arrowY:ee,shouldHideArrow:et,children:(0,eA.jsx)(eE.sG.div,{"data-side":X,"data-align":Z,...N,ref:D,style:{...N.style,animation:G?void 0:"none"}})})})});eB.displayName=eF;var e_="PopperArrow",eI={top:"bottom",right:"left",bottom:"top",left:"right"},eU=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,i=ez(e_,n),o=eI[i.placedSide];return(0,eA.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,eA.jsx)(eR,{...r,ref:t,style:{...r.style,display:"block"}})})});function e$(e){return null!==e}eU.displayName=e_;var eV=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,l;let{placement:a,rects:u,middlewareData:s}=t,c=(null===(n=s.arrow)||void 0===n?void 0:n.centerOffset)!==0,f=c?0:e.arrowWidth,d=c?0:e.arrowHeight,[p,m]=eG(a),h={start:"0%",center:"50%",end:"100%"}[m],v=(null!==(o=null===(r=s.arrow)||void 0===r?void 0:r.x)&&void 0!==o?o:0)+f/2,g=(null!==(l=null===(i=s.arrow)||void 0===i?void 0:i.y)&&void 0!==l?l:0)+d/2,y="",w="";return"bottom"===p?(y=c?h:"".concat(v,"px"),w="".concat(-d,"px")):"top"===p?(y=c?h:"".concat(v,"px"),w="".concat(u.floating.height+d,"px")):"right"===p?(y="".concat(-d,"px"),w=c?h:"".concat(g,"px")):"left"===p&&(y="".concat(u.floating.width+d,"px"),w=c?h:"".concat(g,"px")),{data:{x:y,y:w}}}});function eG(e){let[t,n="center"]=e.split("-");return[t,n]}var eY=eM,eq=ej,eX=eB,eZ=eU},7323:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(2115),i=n(7650),o=n(3360),l=n(6611),a=n(5155),u=r.forwardRef((e,t)=>{var n,u;let{container:s,...c}=e,[f,d]=r.useState(!1);(0,l.N)(()=>d(!0),[]);let p=s||f&&(null===(u=globalThis)||void 0===u?void 0:null===(n=u.document)||void 0===n?void 0:n.body);return p?i.createPortal((0,a.jsx)(o.sG.div,{...c,ref:t}),p):null});u.displayName="Portal"},7028:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(2115),i=n(8068),o=n(6611),l=e=>{let{present:t,children:n}=e,l=function(e){var t,n;let[i,l]=r.useState(),u=r.useRef({}),s=r.useRef(e),c=r.useRef("none"),[f,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(u.current);c.current="mounted"===f?e:"none"},[f]),(0,o.N)(()=>{let t=u.current,n=s.current;if(n!==e){let r=c.current,i=a(t);e?d("MOUNT"):"none"===i||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==i?d("ANIMATION_OUT"):d("UNMOUNT"),s.current=e}},[e,d]),(0,o.N)(()=>{if(i){var e;let t;let n=null!==(e=i.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(u.current).includes(e.animationName);if(e.target===i&&r&&(d("ANIMATION_END"),!s.current)){let e=i.style.animationFillMode;i.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===i.style.animationFillMode&&(i.style.animationFillMode=e)})}},o=e=>{e.target===i&&(c.current=a(u.current))};return i.addEventListener("animationstart",o),i.addEventListener("animationcancel",r),i.addEventListener("animationend",r),()=>{n.clearTimeout(t),i.removeEventListener("animationstart",o),i.removeEventListener("animationcancel",r),i.removeEventListener("animationend",r)}}d("ANIMATION_END")},[i,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(u.current=getComputedStyle(e)),l(e)},[])}}(t),u="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),s=(0,i.s)(l.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,i=r&&"isReactWarning"in r&&r.isReactWarning;return i?e.ref:(i=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(u));return"function"==typeof n||l.isPresent?r.cloneElement(u,{ref:s}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},1524:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(2115);function i(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1488:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(2115),i=n(1524);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,l]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,l=r.useRef(o),a=(0,i.c)(t);return r.useEffect(()=>{l.current!==o&&(a(o),l.current=o)},[o,l,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,u=a?e:o,s=(0,i.c)(n);return[u,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&s(n)}else l(t)},[a,e,l,s])]}},6611:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(2115),i=globalThis?.document?r.useLayoutEffect:()=>{}}}]);