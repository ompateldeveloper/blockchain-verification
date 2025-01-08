"use strict";exports.id=8847,exports.ids=[8847],exports.modules={41680:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(58009);let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(...e)=>e.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim();var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:a="",children:s,iconNode:u,...c},f)=>(0,r.createElement)("svg",{ref:f,...l,width:t,height:t,stroke:e,strokeWidth:i?24*Number(n)/Number(t):n,className:o("lucide",a),...c},[...u.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])),s=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...l},s)=>(0,r.createElement)(a,{ref:s,iconNode:t,className:o(`lucide-${i(e)}`,n),...l}));return n.displayName=`${e}`,n}},31412:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},6004:(e,t,n)=>{n.d(t,{A:()=>l,q:()=>o});var r=n(58009),i=n(45512);function o(e,t){let n=r.createContext(t),o=e=>{let{children:t,...o}=e,l=r.useMemo(()=>o,Object.values(o));return(0,i.jsx)(n.Provider,{value:l,children:t})};return o.displayName=e+"Provider",[o,function(i){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${i}\` must be used within \`${e}\``)}]}function l(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let i=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:i}}),[n,i])}};return o.scopeName=e,[function(t,o){let l=r.createContext(o),a=n.length;n=[...n,o];let s=t=>{let{scope:n,children:o,...s}=t,u=n?.[e]?.[a]||l,c=r.useMemo(()=>s,Object.values(s));return(0,i.jsx)(u.Provider,{value:c,children:o})};return s.displayName=t+"Provider",[s,function(n,i){let s=i?.[e]?.[a]||l,u=r.useContext(s);if(u)return u;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let i=n.reduce((t,{useScope:n,scopeName:r})=>{let i=n(e)[`__scope${r}`];return{...t,...i}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:i}),[i])}};return n.scopeName=t.scopeName,n}(o,...t)]}},41675:(e,t,n)=>{n.d(t,{qW:()=>d});var r,i=n(58009),o=n(31412),l=n(30830),a=n(29952),s=n(92828),u=n(45512),c="dismissableLayer.update",f=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),d=i.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:d,onPointerDownOutside:h,onFocusOutside:g,onInteractOutside:y,onDismiss:v,...w}=e,x=i.useContext(f),[b,E]=i.useState(null),R=b?.ownerDocument??globalThis?.document,[,A]=i.useState({}),L=(0,a.s)(t,e=>E(e)),O=Array.from(x.layers),[N]=[...x.layersWithOutsidePointerEventsDisabled].slice(-1),C=O.indexOf(N),T=b?O.indexOf(b):-1,P=x.layersWithOutsidePointerEventsDisabled.size>0,S=T>=C,D=function(e,t=globalThis?.document){let n=(0,s.c)(e),r=i.useRef(!1),o=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){m("dismissableLayer.pointerDownOutside",n,i,{discrete:!0})},i={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},i=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(i),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...x.branches].some(e=>e.contains(t));!S||n||(h?.(e),y?.(e),e.defaultPrevented||v?.())},R),k=function(e,t=globalThis?.document){let n=(0,s.c)(e),r=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!r.current&&m("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target;[...x.branches].some(e=>e.contains(t))||(g?.(e),y?.(e),e.defaultPrevented||v?.())},R);return function(e,t=globalThis?.document){let n=(0,s.c)(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{T!==x.layers.size-1||(d?.(e),!e.defaultPrevented&&v&&(e.preventDefault(),v()))},R),i.useEffect(()=>{if(b)return n&&(0===x.layersWithOutsidePointerEventsDisabled.size&&(r=R.body.style.pointerEvents,R.body.style.pointerEvents="none"),x.layersWithOutsidePointerEventsDisabled.add(b)),x.layers.add(b),p(),()=>{n&&1===x.layersWithOutsidePointerEventsDisabled.size&&(R.body.style.pointerEvents=r)}},[b,R,n,x]),i.useEffect(()=>()=>{b&&(x.layers.delete(b),x.layersWithOutsidePointerEventsDisabled.delete(b),p())},[b,x]),i.useEffect(()=>{let e=()=>A({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,u.jsx)(l.sG.div,{...w,ref:L,style:{pointerEvents:P?S?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.m)(e.onFocusCapture,k.onFocusCapture),onBlurCapture:(0,o.m)(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:(0,o.m)(e.onPointerDownCapture,D.onPointerDownCapture)})});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function m(e,t,n,{discrete:r}){let i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?(0,l.hO)(i,o):i.dispatchEvent(o)}d.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(f),r=i.useRef(null),o=(0,a.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,u.jsx)(l.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch"},34666:(e,t,n)=>{n.d(t,{Mz:()=>eq,i3:()=>eZ,UC:()=>eX,bL:()=>eY,Bk:()=>eS});var r=n(58009);let i=["top","right","bottom","left"],o=Math.min,l=Math.max,a=Math.round,s=Math.floor,u=e=>({x:e,y:e}),c={left:"right",right:"left",bottom:"top",top:"bottom"},f={start:"end",end:"start"};function d(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function m(e){return e.split("-")[1]}function h(e){return"x"===e?"y":"x"}function g(e){return"y"===e?"height":"width"}function y(e){return["top","bottom"].includes(p(e))?"y":"x"}function v(e){return e.replace(/start|end/g,e=>f[e])}function w(e){return e.replace(/left|right|bottom|top/g,e=>c[e])}function x(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function b(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function E(e,t,n){let r,{reference:i,floating:o}=e,l=y(t),a=h(y(t)),s=g(a),u=p(t),c="y"===l,f=i.x+i.width/2-o.width/2,d=i.y+i.height/2-o.height/2,v=i[s]/2-o[s]/2;switch(u){case"top":r={x:f,y:i.y-o.height};break;case"bottom":r={x:f,y:i.y+i.height};break;case"right":r={x:i.x+i.width,y:d};break;case"left":r={x:i.x-o.width,y:d};break;default:r={x:i.x,y:i.y}}switch(m(t)){case"start":r[a]-=v*(n&&c?-1:1);break;case"end":r[a]+=v*(n&&c?-1:1)}return r}let R=async(e,t,n)=>{let{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:l}=n,a=o.filter(Boolean),s=await (null==l.isRTL?void 0:l.isRTL(t)),u=await l.getElementRects({reference:e,floating:t,strategy:i}),{x:c,y:f}=E(u,r,s),d=r,p={},m=0;for(let n=0;n<a.length;n++){let{name:o,fn:h}=a[n],{x:g,y:y,data:v,reset:w}=await h({x:c,y:f,initialPlacement:r,placement:d,strategy:i,middlewareData:p,rects:u,platform:l,elements:{reference:e,floating:t}});c=null!=g?g:c,f=null!=y?y:f,p={...p,[o]:{...p[o],...v}},w&&m<=50&&(m++,"object"==typeof w&&(w.placement&&(d=w.placement),w.rects&&(u=!0===w.rects?await l.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:c,y:f}=E(u,d,s)),n=-1)}return{x:c,y:f,placement:d,strategy:i,middlewareData:p}};async function A(e,t){var n;void 0===t&&(t={});let{x:r,y:i,platform:o,rects:l,elements:a,strategy:s}=e,{boundary:u="clippingAncestors",rootBoundary:c="viewport",elementContext:f="floating",altBoundary:p=!1,padding:m=0}=d(t,e),h=x(m),g=a[p?"floating"===f?"reference":"floating":f],y=b(await o.getClippingRect({element:null==(n=await (null==o.isElement?void 0:o.isElement(g)))||n?g:g.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(a.floating)),boundary:u,rootBoundary:c,strategy:s})),v="floating"===f?{x:r,y:i,width:l.floating.width,height:l.floating.height}:l.reference,w=await (null==o.getOffsetParent?void 0:o.getOffsetParent(a.floating)),E=await (null==o.isElement?void 0:o.isElement(w))&&await (null==o.getScale?void 0:o.getScale(w))||{x:1,y:1},R=b(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:w,strategy:s}):v);return{top:(y.top-R.top+h.top)/E.y,bottom:(R.bottom-y.bottom+h.bottom)/E.y,left:(y.left-R.left+h.left)/E.x,right:(R.right-y.right+h.right)/E.x}}function L(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function O(e){return i.some(t=>e[t]>=0)}async function N(e,t){let{placement:n,platform:r,elements:i}=e,o=await (null==r.isRTL?void 0:r.isRTL(i.floating)),l=p(n),a=m(n),s="y"===y(n),u=["left","top"].includes(l)?-1:1,c=o&&s?-1:1,f=d(t,e),{mainAxis:h,crossAxis:g,alignmentAxis:v}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&"number"==typeof v&&(g="end"===a?-1*v:v),s?{x:g*c,y:h*u}:{x:h*u,y:g*c}}function C(){return"undefined"!=typeof window}function T(e){return D(e)?(e.nodeName||"").toLowerCase():"#document"}function P(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function S(e){var t;return null==(t=(D(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function D(e){return!!C()&&(e instanceof Node||e instanceof P(e).Node)}function k(e){return!!C()&&(e instanceof Element||e instanceof P(e).Element)}function M(e){return!!C()&&(e instanceof HTMLElement||e instanceof P(e).HTMLElement)}function W(e){return!!C()&&"undefined"!=typeof ShadowRoot&&(e instanceof ShadowRoot||e instanceof P(e).ShadowRoot)}function j(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=B(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function $(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function F(e){let t=H(),n=k(e)?B(e):e;return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some(e=>(n.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(n.contain||"").includes(e))}function H(){return"undefined"!=typeof CSS&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function z(e){return["html","body","#document"].includes(T(e))}function B(e){return P(e).getComputedStyle(e)}function I(e){return k(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function _(e){if("html"===T(e))return e;let t=e.assignedSlot||e.parentNode||W(e)&&e.host||S(e);return W(t)?t.host:t}function U(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);let i=function e(t){let n=_(t);return z(n)?t.ownerDocument?t.ownerDocument.body:t.body:M(n)&&j(n)?n:e(n)}(e),o=i===(null==(r=e.ownerDocument)?void 0:r.body),l=P(i);if(o){let e=V(l);return t.concat(l,l.visualViewport||[],j(i)?i:[],e&&n?U(e):[])}return t.concat(i,U(i,[],n))}function V(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function G(e){let t=B(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=M(e),o=i?e.offsetWidth:n,l=i?e.offsetHeight:r,s=a(n)!==o||a(r)!==l;return s&&(n=o,r=l),{width:n,height:r,$:s}}function Y(e){return k(e)?e:e.contextElement}function q(e){let t=Y(e);if(!M(t))return u(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:o}=G(t),l=(o?a(n.width):n.width)/r,s=(o?a(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}let X=u(0);function Z(e){let t=P(e);return H()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:X}function J(e,t,n,r){var i;void 0===t&&(t=!1),void 0===n&&(n=!1);let o=e.getBoundingClientRect(),l=Y(e),a=u(1);t&&(r?k(r)&&(a=q(r)):a=q(e));let s=(void 0===(i=n)&&(i=!1),r&&(!i||r===P(l))&&i)?Z(l):u(0),c=(o.left+s.x)/a.x,f=(o.top+s.y)/a.y,d=o.width/a.x,p=o.height/a.y;if(l){let e=P(l),t=r&&k(r)?P(r):r,n=e,i=V(n);for(;i&&r&&t!==n;){let e=q(i),t=i.getBoundingClientRect(),r=B(i),o=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,l=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,f*=e.y,d*=e.x,p*=e.y,c+=o,f+=l,i=V(n=P(i))}}return b({width:d,height:p,x:c,y:f})}function K(e,t){let n=I(e).scrollLeft;return t?t.left+n:J(S(e)).left+n}function Q(e,t,n){void 0===n&&(n=!1);let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:K(e,r)),y:r.top+t.scrollTop}}function ee(e,t,n){let r;if("viewport"===t)r=function(e,t){let n=P(e),r=S(e),i=n.visualViewport,o=r.clientWidth,l=r.clientHeight,a=0,s=0;if(i){o=i.width,l=i.height;let e=H();(!e||e&&"fixed"===t)&&(a=i.offsetLeft,s=i.offsetTop)}return{width:o,height:l,x:a,y:s}}(e,n);else if("document"===t)r=function(e){let t=S(e),n=I(e),r=e.ownerDocument.body,i=l(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=l(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),a=-n.scrollLeft+K(e),s=-n.scrollTop;return"rtl"===B(r).direction&&(a+=l(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:s}}(S(e));else if(k(t))r=function(e,t){let n=J(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=M(e)?q(e):u(1),l=e.clientWidth*o.x;return{width:l,height:e.clientHeight*o.y,x:i*o.x,y:r*o.y}}(t,n);else{let n=Z(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return b(r)}function et(e){return"static"===B(e).position}function en(e,t){if(!M(e)||"fixed"===B(e).position)return null;if(t)return t(e);let n=e.offsetParent;return S(e)===n&&(n=n.ownerDocument.body),n}function er(e,t){let n=P(e);if($(e))return n;if(!M(e)){let t=_(e);for(;t&&!z(t);){if(k(t)&&!et(t))return t;t=_(t)}return n}let r=en(e,t);for(;r&&["table","td","th"].includes(T(r))&&et(r);)r=en(r,t);return r&&z(r)&&et(r)&&!F(r)?n:r||function(e){let t=_(e);for(;M(t)&&!z(t);){if(F(t))return t;if($(t))break;t=_(t)}return null}(e)||n}let ei=async function(e){let t=this.getOffsetParent||er,n=this.getDimensions,r=await n(e.floating);return{reference:function(e,t,n){let r=M(t),i=S(t),o="fixed"===n,l=J(e,!0,o,t),a={scrollLeft:0,scrollTop:0},s=u(0);if(r||!r&&!o){if(("body"!==T(t)||j(i))&&(a=I(t)),r){let e=J(t,!0,o,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else i&&(s.x=K(i))}let c=!i||r||o?u(0):Q(i,a);return{x:l.left+a.scrollLeft-s.x-c.x,y:l.top+a.scrollTop-s.y-c.y,width:l.width,height:l.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},eo={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,o="fixed"===i,l=S(r),a=!!t&&$(t.floating);if(r===l||a&&o)return n;let s={scrollLeft:0,scrollTop:0},c=u(1),f=u(0),d=M(r);if((d||!d&&!o)&&(("body"!==T(r)||j(l))&&(s=I(r)),M(r))){let e=J(r);c=q(r),f.x=e.x+r.clientLeft,f.y=e.y+r.clientTop}let p=!l||d||o?u(0):Q(l,s,!0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-s.scrollLeft*c.x+f.x+p.x,y:n.y*c.y-s.scrollTop*c.y+f.y+p.y}},getDocumentElement:S,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[..."clippingAncestors"===n?$(t)?[]:function(e,t){let n=t.get(e);if(n)return n;let r=U(e,[],!1).filter(e=>k(e)&&"body"!==T(e)),i=null,o="fixed"===B(e).position,l=o?_(e):e;for(;k(l)&&!z(l);){let t=B(l),n=F(l);n||"fixed"!==t.position||(i=null),(o?!n&&!i:!n&&"static"===t.position&&!!i&&["absolute","fixed"].includes(i.position)||j(l)&&!n&&function e(t,n){let r=_(t);return!(r===n||!k(r)||z(r))&&("fixed"===B(r).position||e(r,n))}(e,l))?r=r.filter(e=>e!==l):i=t,l=_(l)}return t.set(e,r),r}(t,this._c):[].concat(n),r],s=a[0],u=a.reduce((e,n)=>{let r=ee(t,n,i);return e.top=l(r.top,e.top),e.right=o(r.right,e.right),e.bottom=o(r.bottom,e.bottom),e.left=l(r.left,e.left),e},ee(t,s,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:er,getElementRects:ei,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:n}=G(e);return{width:t,height:n}},getScale:q,isElement:k,isRTL:function(e){return"rtl"===B(e).direction}},el=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:s,elements:u,middlewareData:c}=t,{element:f,padding:p=0}=d(e,t)||{};if(null==f)return{};let v=x(p),w={x:n,y:r},b=h(y(i)),E=g(b),R=await s.getDimensions(f),A="y"===b,L=A?"clientHeight":"clientWidth",O=a.reference[E]+a.reference[b]-w[b]-a.floating[E],N=w[b]-a.reference[b],C=await (null==s.getOffsetParent?void 0:s.getOffsetParent(f)),T=C?C[L]:0;T&&await (null==s.isElement?void 0:s.isElement(C))||(T=u.floating[L]||a.floating[E]);let P=T/2-R[E]/2-1,S=o(v[A?"top":"left"],P),D=o(v[A?"bottom":"right"],P),k=T-R[E]-D,M=T/2-R[E]/2+(O/2-N/2),W=l(S,o(M,k)),j=!c.arrow&&null!=m(i)&&M!==W&&a.reference[E]/2-(M<S?S:D)-R[E]/2<0,$=j?M<S?M-S:M-k:0;return{[b]:w[b]+$,data:{[b]:W,centerOffset:M-W-$,...j&&{alignmentOffset:$}},reset:j}}}),ea=(e,t,n)=>{let r=new Map,i={platform:eo,...n},o={...i.platform,_c:r};return R(e,t,{...i,platform:o})};var es=n(55740),eu="undefined"!=typeof document?r.useLayoutEffect:r.useEffect;function ec(e,t){let n,r,i;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((n=e.length)!==t.length)return!1;for(r=n;0!=r--;)if(!ec(e[r],t[r]))return!1;return!0}if((n=(i=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=n;0!=r--;)if(!({}).hasOwnProperty.call(t,i[r]))return!1;for(r=n;0!=r--;){let n=i[r];if(("_owner"!==n||!e.$$typeof)&&!ec(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}function ef(e){return"undefined"==typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ed(e,t){let n=ef(e);return Math.round(t*n)/n}function ep(e){let t=r.useRef(e);return eu(()=>{t.current=e}),t}let em=e=>({name:"arrow",options:e,fn(t){let{element:n,padding:r}="function"==typeof e?e(t):e;return n&&({}).hasOwnProperty.call(n,"current")?null!=n.current?el({element:n.current,padding:r}).fn(t):{}:n?el({element:n,padding:r}).fn(t):{}}}),eh=(e,t)=>({...function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:i,y:o,placement:l,middlewareData:a}=t,s=await N(t,e);return l===(null==(n=a.offset)?void 0:n.placement)&&null!=(r=a.arrow)&&r.alignmentOffset?{}:{x:i+s.x,y:o+s.y,data:{...s,placement:l}}}}}(e),options:[e,t]}),eg=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:u={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=d(e,t),f={x:n,y:r},m=await A(t,c),g=y(p(i)),v=h(g),w=f[v],x=f[g];if(a){let e="y"===v?"top":"left",t="y"===v?"bottom":"right",n=w+m[e],r=w-m[t];w=l(n,o(w,r))}if(s){let e="y"===g?"top":"left",t="y"===g?"bottom":"right",n=x+m[e],r=x-m[t];x=l(n,o(x,r))}let b=u.fn({...t,[v]:w,[g]:x});return{...b,data:{x:b.x-n,y:b.y-r,enabled:{[v]:a,[g]:s}}}}}}(e),options:[e,t]}),ey=(e,t)=>({...function(e){return void 0===e&&(e={}),{options:e,fn(t){let{x:n,y:r,placement:i,rects:o,middlewareData:l}=t,{offset:a=0,mainAxis:s=!0,crossAxis:u=!0}=d(e,t),c={x:n,y:r},f=y(i),m=h(f),g=c[m],v=c[f],w=d(a,t),x="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:0,crossAxis:0,...w};if(s){let e="y"===m?"height":"width",t=o.reference[m]-o.floating[e]+x.mainAxis,n=o.reference[m]+o.reference[e]-x.mainAxis;g<t?g=t:g>n&&(g=n)}if(u){var b,E;let e="y"===m?"width":"height",t=["top","left"].includes(p(i)),n=o.reference[f]-o.floating[e]+(t&&(null==(b=l.offset)?void 0:b[f])||0)+(t?0:x.crossAxis),r=o.reference[f]+o.reference[e]+(t?0:(null==(E=l.offset)?void 0:E[f])||0)-(t?x.crossAxis:0);v<n?v=n:v>r&&(v=r)}return{[m]:g,[f]:v}}}}(e),options:[e,t]}),ev=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r,i,o,l;let{placement:a,middlewareData:s,rects:u,initialPlacement:c,platform:f,elements:x}=t,{mainAxis:b=!0,crossAxis:E=!0,fallbackPlacements:R,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:O="none",flipAlignment:N=!0,...C}=d(e,t);if(null!=(n=s.arrow)&&n.alignmentOffset)return{};let T=p(a),P=y(c),S=p(c)===c,D=await (null==f.isRTL?void 0:f.isRTL(x.floating)),k=R||(S||!N?[w(c)]:function(e){let t=w(e);return[v(e),t,v(t)]}(c)),M="none"!==O;!R&&M&&k.push(...function(e,t,n,r){let i=m(e),o=function(e,t,n){let r=["left","right"],i=["right","left"];switch(e){case"top":case"bottom":if(n)return t?i:r;return t?r:i;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(p(e),"start"===n,r);return i&&(o=o.map(e=>e+"-"+i),t&&(o=o.concat(o.map(v)))),o}(c,N,O,D));let W=[c,...k],j=await A(t,C),$=[],F=(null==(r=s.flip)?void 0:r.overflows)||[];if(b&&$.push(j[T]),E){let e=function(e,t,n){void 0===n&&(n=!1);let r=m(e),i=h(y(e)),o=g(i),l="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[o]>t.floating[o]&&(l=w(l)),[l,w(l)]}(a,u,D);$.push(j[e[0]],j[e[1]])}if(F=[...F,{placement:a,overflows:$}],!$.every(e=>e<=0)){let e=((null==(i=s.flip)?void 0:i.index)||0)+1,t=W[e];if(t)return{data:{index:e,overflows:F},reset:{placement:t}};let n=null==(o=F.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:o.placement;if(!n)switch(L){case"bestFit":{let e=null==(l=F.filter(e=>{if(M){let t=y(e.placement);return t===P||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:l[0];e&&(n=e);break}case"initialPlacement":n=c}if(a!==n)return{reset:{placement:n}}}return{}}}}(e),options:[e,t]}),ew=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var n,r;let i,a;let{placement:s,rects:u,platform:c,elements:f}=t,{apply:h=()=>{},...g}=d(e,t),v=await A(t,g),w=p(s),x=m(s),b="y"===y(s),{width:E,height:R}=u.floating;"top"===w||"bottom"===w?(i=w,a=x===(await (null==c.isRTL?void 0:c.isRTL(f.floating))?"start":"end")?"left":"right"):(a=w,i="end"===x?"top":"bottom");let L=R-v.top-v.bottom,O=E-v.left-v.right,N=o(R-v[i],L),C=o(E-v[a],O),T=!t.middlewareData.shift,P=N,S=C;if(null!=(n=t.middlewareData.shift)&&n.enabled.x&&(S=O),null!=(r=t.middlewareData.shift)&&r.enabled.y&&(P=L),T&&!x){let e=l(v.left,0),t=l(v.right,0),n=l(v.top,0),r=l(v.bottom,0);b?S=E-2*(0!==e||0!==t?e+t:l(v.left,v.right)):P=R-2*(0!==n||0!==r?n+r:l(v.top,v.bottom))}await h({...t,availableWidth:S,availableHeight:P});let D=await c.getDimensions(f.floating);return E!==D.width||R!==D.height?{reset:{rects:!0}}:{}}}}(e),options:[e,t]}),ex=(e,t)=>({...function(e){return void 0===e&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,{strategy:r="referenceHidden",...i}=d(e,t);switch(r){case"referenceHidden":{let e=L(await A(t,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:e,referenceHidden:O(e)}}}case"escaped":{let e=L(await A(t,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:e,escaped:O(e)}}}default:return{}}}}}(e),options:[e,t]}),eb=(e,t)=>({...em(e),options:[e,t]});var eE=n(30830),eR=n(45512),eA=r.forwardRef((e,t)=>{let{children:n,width:r=10,height:i=5,...o}=e;return(0,eR.jsx)(eE.sG.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:(0,eR.jsx)("polygon",{points:"0,0 30,0 15,10"})})});eA.displayName="Arrow";var eL=n(29952),eO=n(6004),eN=n(92828),eC=n(49397),eT="Popper",[eP,eS]=(0,eO.A)(eT),[eD,ek]=eP(eT),eM=e=>{let{__scopePopper:t,children:n}=e,[i,o]=r.useState(null);return(0,eR.jsx)(eD,{scope:t,anchor:i,onAnchorChange:o,children:n})};eM.displayName=eT;var eW="PopperAnchor",ej=r.forwardRef((e,t)=>{let{__scopePopper:n,virtualRef:i,...o}=e,l=ek(eW,n),a=r.useRef(null),s=(0,eL.s)(t,a);return r.useEffect(()=>{l.onAnchorChange(i?.current||a.current)}),i?null:(0,eR.jsx)(eE.sG.div,{...o,ref:s})});ej.displayName=eW;var e$="PopperContent",[eF,eH]=eP(e$),ez=r.forwardRef((e,t)=>{let{__scopePopper:n,side:i="bottom",sideOffset:a=0,align:u="center",alignOffset:c=0,arrowPadding:f=0,avoidCollisions:d=!0,collisionBoundary:p=[],collisionPadding:m=0,sticky:h="partial",hideWhenDetached:g=!1,updatePositionStrategy:y="optimized",onPlaced:v,...w}=e,x=ek(e$,n),[b,E]=r.useState(null),R=(0,eL.s)(t,e=>E(e)),[A,L]=r.useState(null),O=function(e){let[t,n]=r.useState(void 0);return(0,eC.N)(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let r,i;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;r=t.inlineSize,i=t.blockSize}else r=e.offsetWidth,i=e.offsetHeight;n({width:r,height:i})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}n(void 0)},[e]),t}(A),N=O?.width??0,C=O?.height??0,T="number"==typeof m?m:{top:0,right:0,bottom:0,left:0,...m},P=Array.isArray(p)?p:[p],D=P.length>0,k={padding:T,boundary:P.filter(eU),altBoundary:D},{refs:M,floatingStyles:W,placement:j,isPositioned:$,middlewareData:F}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:n="absolute",middleware:i=[],platform:o,elements:{reference:l,floating:a}={},transform:s=!0,whileElementsMounted:u,open:c}=e,[f,d]=r.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=r.useState(i);ec(p,i)||m(i);let[h,g]=r.useState(null),[y,v]=r.useState(null),w=r.useCallback(e=>{e!==R.current&&(R.current=e,g(e))},[]),x=r.useCallback(e=>{e!==A.current&&(A.current=e,v(e))},[]),b=l||h,E=a||y,R=r.useRef(null),A=r.useRef(null),L=r.useRef(f),O=null!=u,N=ep(u),C=ep(o),T=ep(c),P=r.useCallback(()=>{if(!R.current||!A.current)return;let e={placement:t,strategy:n,middleware:p};C.current&&(e.platform=C.current),ea(R.current,A.current,e).then(e=>{let t={...e,isPositioned:!1!==T.current};S.current&&!ec(L.current,t)&&(L.current=t,es.flushSync(()=>{d(t)}))})},[p,t,n,C,T]);eu(()=>{!1===c&&L.current.isPositioned&&(L.current.isPositioned=!1,d(e=>({...e,isPositioned:!1})))},[c]);let S=r.useRef(!1);eu(()=>(S.current=!0,()=>{S.current=!1}),[]),eu(()=>{if(b&&(R.current=b),E&&(A.current=E),b&&E){if(N.current)return N.current(b,E,P);P()}},[b,E,P,N,O]);let D=r.useMemo(()=>({reference:R,floating:A,setReference:w,setFloating:x}),[w,x]),k=r.useMemo(()=>({reference:b,floating:E}),[b,E]),M=r.useMemo(()=>{let e={position:n,left:0,top:0};if(!k.floating)return e;let t=ed(k.floating,f.x),r=ed(k.floating,f.y);return s?{...e,transform:"translate("+t+"px, "+r+"px)",...ef(k.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:t,top:r}},[n,s,k.floating,f.x,f.y]);return r.useMemo(()=>({...f,update:P,refs:D,elements:k,floatingStyles:M}),[f,P,D,k,M])}({strategy:"fixed",placement:i+("center"!==u?"-"+u:""),whileElementsMounted:(...e)=>(function(e,t,n,r){let i;void 0===r&&(r={});let{ancestorScroll:a=!0,ancestorResize:u=!0,elementResize:c="function"==typeof ResizeObserver,layoutShift:f="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=Y(e),m=a||u?[...p?U(p):[],...U(t)]:[];m.forEach(e=>{a&&e.addEventListener("scroll",n,{passive:!0}),u&&e.addEventListener("resize",n)});let h=p&&f?function(e,t){let n,r=null,i=S(e);function a(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function u(c,f){void 0===c&&(c=!1),void 0===f&&(f=1),a();let{left:d,top:p,width:m,height:h}=e.getBoundingClientRect();if(c||t(),!m||!h)return;let g=s(p),y=s(i.clientWidth-(d+m)),v={rootMargin:-g+"px "+-y+"px "+-s(i.clientHeight-(p+h))+"px "+-s(d)+"px",threshold:l(0,o(1,f))||1},w=!0;function x(e){let t=e[0].intersectionRatio;if(t!==f){if(!w)return u();t?u(!1,t):n=setTimeout(()=>{u(!1,1e-7)},1e3)}w=!1}try{r=new IntersectionObserver(x,{...v,root:i.ownerDocument})}catch(e){r=new IntersectionObserver(x,v)}r.observe(e)}(!0),a}(p,n):null,g=-1,y=null;c&&(y=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&y&&(y.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=y)||e.observe(t)})),n()}),p&&!d&&y.observe(p),y.observe(t));let v=d?J(e):null;return d&&function t(){let r=J(e);v&&(r.x!==v.x||r.y!==v.y||r.width!==v.width||r.height!==v.height)&&n(),v=r,i=requestAnimationFrame(t)}(),n(),()=>{var e;m.forEach(e=>{a&&e.removeEventListener("scroll",n),u&&e.removeEventListener("resize",n)}),null==h||h(),null==(e=y)||e.disconnect(),y=null,d&&cancelAnimationFrame(i)}})(...e,{animationFrame:"always"===y}),elements:{reference:x.anchor},middleware:[eh({mainAxis:a+C,alignmentAxis:c}),d&&eg({mainAxis:!0,crossAxis:!1,limiter:"partial"===h?ey():void 0,...k}),d&&ev({...k}),ew({...k,apply:({elements:e,rects:t,availableWidth:n,availableHeight:r})=>{let{width:i,height:o}=t.reference,l=e.floating.style;l.setProperty("--radix-popper-available-width",`${n}px`),l.setProperty("--radix-popper-available-height",`${r}px`),l.setProperty("--radix-popper-anchor-width",`${i}px`),l.setProperty("--radix-popper-anchor-height",`${o}px`)}}),A&&eb({element:A,padding:f}),eV({arrowWidth:N,arrowHeight:C}),g&&ex({strategy:"referenceHidden",...k})]}),[H,z]=eG(j),B=(0,eN.c)(v);(0,eC.N)(()=>{$&&B?.()},[$,B]);let I=F.arrow?.x,_=F.arrow?.y,V=F.arrow?.centerOffset!==0,[G,q]=r.useState();return(0,eC.N)(()=>{b&&q(window.getComputedStyle(b).zIndex)},[b]),(0,eR.jsx)("div",{ref:M.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:$?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:G,"--radix-popper-transform-origin":[F.transformOrigin?.x,F.transformOrigin?.y].join(" "),...F.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,eR.jsx)(eF,{scope:n,placedSide:H,onArrowChange:L,arrowX:I,arrowY:_,shouldHideArrow:V,children:(0,eR.jsx)(eE.sG.div,{"data-side":H,"data-align":z,...w,ref:R,style:{...w.style,animation:$?void 0:"none"}})})})});ez.displayName=e$;var eB="PopperArrow",eI={top:"bottom",right:"left",bottom:"top",left:"right"},e_=r.forwardRef(function(e,t){let{__scopePopper:n,...r}=e,i=eH(eB,n),o=eI[i.placedSide];return(0,eR.jsx)("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:(0,eR.jsx)(eA,{...r,ref:t,style:{...r.style,display:"block"}})})});function eU(e){return null!==e}e_.displayName=eB;var eV=e=>({name:"transformOrigin",options:e,fn(t){let{placement:n,rects:r,middlewareData:i}=t,o=i.arrow?.centerOffset!==0,l=o?0:e.arrowWidth,a=o?0:e.arrowHeight,[s,u]=eG(n),c={start:"0%",center:"50%",end:"100%"}[u],f=(i.arrow?.x??0)+l/2,d=(i.arrow?.y??0)+a/2,p="",m="";return"bottom"===s?(p=o?c:`${f}px`,m=`${-a}px`):"top"===s?(p=o?c:`${f}px`,m=`${r.floating.height+a}px`):"right"===s?(p=`${-a}px`,m=o?c:`${d}px`):"left"===s&&(p=`${r.floating.width+a}px`,m=o?c:`${d}px`),{data:{x:p,y:m}}}});function eG(e){let[t,n="center"]=e.split("-");return[t,n]}var eY=eM,eq=ej,eX=ez,eZ=e_},80707:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(58009),i=n(55740),o=n(30830),l=n(49397),a=n(45512),s=r.forwardRef((e,t)=>{let{container:n,...s}=e,[u,c]=r.useState(!1);(0,l.N)(()=>c(!0),[]);let f=n||u&&globalThis?.document?.body;return f?i.createPortal((0,a.jsx)(o.sG.div,{...s,ref:t}),f):null});s.displayName="Portal"},98060:(e,t,n)=>{n.d(t,{C:()=>l});var r=n(58009),i=n(29952),o=n(49397),l=e=>{let{present:t,children:n}=e,l=function(e){var t,n;let[i,l]=r.useState(),s=r.useRef({}),u=r.useRef(e),c=r.useRef("none"),[f,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>n[e][t]??e,t));return r.useEffect(()=>{let e=a(s.current);c.current="mounted"===f?e:"none"},[f]),(0,o.N)(()=>{let t=s.current,n=u.current;if(n!==e){let r=c.current,i=a(t);e?d("MOUNT"):"none"===i||t?.display==="none"?d("UNMOUNT"):n&&r!==i?d("ANIMATION_OUT"):d("UNMOUNT"),u.current=e}},[e,d]),(0,o.N)(()=>{if(i){let e;let t=i.ownerDocument.defaultView??window,n=n=>{let r=a(s.current).includes(n.animationName);if(n.target===i&&r&&(d("ANIMATION_END"),!u.current)){let n=i.style.animationFillMode;i.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===i.style.animationFillMode&&(i.style.animationFillMode=n)})}},r=e=>{e.target===i&&(c.current=a(s.current))};return i.addEventListener("animationstart",r),i.addEventListener("animationcancel",n),i.addEventListener("animationend",n),()=>{t.clearTimeout(e),i.removeEventListener("animationstart",r),i.removeEventListener("animationcancel",n),i.removeEventListener("animationend",n)}}d("ANIMATION_END")},[i,d]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.useCallback(e=>{e&&(s.current=getComputedStyle(e)),l(e)},[])}}(t),s="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),u=(0,i.s)(l.ref,function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(s));return"function"==typeof n||l.isPresent?r.cloneElement(s,{ref:u}):null};function a(e){return e?.animationName||"none"}l.displayName="Presence"},92828:(e,t,n)=>{n.d(t,{c:()=>i});var r=n(58009);function i(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},13024:(e,t,n)=>{n.d(t,{i:()=>o});var r=n(58009),i=n(92828);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,l]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,l=r.useRef(o),a=(0,i.c)(t);return r.useEffect(()=>{l.current!==o&&(a(o),l.current=o)},[o,l,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,s=a?e:o,u=(0,i.c)(n);return[s,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&u(n)}else l(t)},[a,e,l,u])]}},49397:(e,t,n)=>{n.d(t,{N:()=>i});var r=n(58009),i=globalThis?.document?r.useLayoutEffect:()=>{}}};