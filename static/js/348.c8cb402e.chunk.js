"use strict";(self.webpackChunkreact_phonebook=self.webpackChunkreact_phonebook||[]).push([[348],{4348:function(n,t,e){e.r(t),e.d(t,{default:function(){return pt}});var r,o,a,i,s,c=e(9439),u=e(2791),d=e(168),l=e(82),p=l.ZP.h2(r||(r=(0,d.Z)(["\nmargin:0;\npadding: 2rem;\ntext-align: center;\ncolor: #000;\nfont-weight: bold;\nfont-size: 24px;\n"]))),f=l.ZP.div(o||(o=(0,d.Z)(["\nmargin-top: 20px;\npadding-top: 20px;\npadding-bottom: 20px;\nborder: solid;\n"]))),m=l.ZP.label(a||(a=(0,d.Z)(["\n   display: block;\n  margin-top:30px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n"]))),g=l.ZP.input(i||(i=(0,d.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n\n  &:focus {\n   outline-color: #2196F3;\n    }\n"]))),h=l.ZP.button(s||(s=(0,d.Z)(["\n    padding: 10px 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  cursor: pointer;\n  color: black;\n  font-weight: 700;\n  font-size: 16px;\n  text-transform: uppercase;\n  &:focus, :hover {\n   opacity: 1;\n   color: #2196F3;\n }\n"]))),x=e(3433),b=e(1413),v=e(4942),y={data:""},Z=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||y},w=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,j=/\/\*[^]*?\*\/|  +/g,k=/\n+/g,C=function n(t,e){var r="",o="",a="",i=function(i){var c=t[i];"@"==i[0]?"i"==i[1]?r=i+" "+c+";":o+="f"==i[1]?n(c,i):i+"{"+n(c,"k"==i[1]?"":e)+"}":"object"==typeof c?o+=n(c,e?e.replace(/([^,])+/g,(function(n){return i.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):i):null!=c&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=n.p?n.p(i,c):i+":"+c+";"),s=i};for(var s in t)i(s);return r+(e&&a?e+"{"+a+"}":a)+o},E={},P=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},z=function(n,t,e,r,o){var a=P(n),i=E[a]||(E[a]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(a));if(!E[i]){var s=a!==n?n:function(n){for(var t,e,r=[{}];t=w.exec(n.replace(j,""));)t[4]?r.shift():t[3]?(e=t[3].replace(k," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(k," ").trim();return r[0]}(n);E[i]=C(o?(0,v.Z)({},"@keyframes "+i,s):s,e?"":"."+i)}var c=e&&E.g?E.g:null;return e&&(E.g=E[i]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(E[i],t,r,c),i},N=function(n,t,e){return n.reduce((function(n,r,o){var a=t[o];if(a&&a.call){var i=a(e),s=i&&i.props&&i.props.className||/^go/.test(i)&&i;a=s?"."+s:i&&"object"==typeof i?i.props?"":C(i,""):!1===i?"":i}return n+r+(null==a?"":a)}),"")};function F(n){var t=this||{},e=n.call?n(t.p):n;return z(e.unshift?e.raw?N(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,Z(t.target),t.g,t.o,t.k)}F.bind({g:1});var O,L,A,D,I,S,T,M,_,H,U,J,R,q,B,V,X,Y,$,G=F.bind({k:1});function K(n,t){var e=this||{};return function(){var r=arguments;function o(a,i){var s=Object.assign({},a),c=s.className||o.className;e.p=Object.assign({theme:L&&L()},s),e.o=/ *go\d+/.test(c),s.className=F.apply(e,r)+(c?" "+c:""),t&&(s.ref=i);var u=n;return n[0]&&(u=s.as||n,delete s.as),A&&u[0]&&A(s),O(u,s)}return t?t(o):o}}var Q=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},W=function(){var n=0;return function(){return(++n).toString()}}(),nn=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),tn=new Map,en=function(n){if(!tn.has(n)){var t=setTimeout((function(){tn.delete(n),sn({type:4,toastId:n})}),1e3);tn.set(n,t)}},rn=function n(t,e){switch(e.type){case 0:return(0,b.Z)((0,b.Z)({},t),{},{toasts:[e.toast].concat((0,x.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=tn.get(n);t&&clearTimeout(t)}(e.toast.id),(0,b.Z)((0,b.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,b.Z)((0,b.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var o=e.toastId;return o?en(o):t.toasts.forEach((function(n){en(n.id)})),(0,b.Z)((0,b.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?(0,b.Z)((0,b.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,b.Z)((0,b.Z)({},t),{},{toasts:[]}):(0,b.Z)((0,b.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,b.Z)((0,b.Z)({},t),{},{pausedAt:e.time});case 6:var a=e.time-(t.pausedAt||0);return(0,b.Z)((0,b.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,b.Z)((0,b.Z)({},n),{},{pauseDuration:n.pauseDuration+a})}))})}},on=[],an={toasts:[],pausedAt:void 0},sn=function(n){an=rn(an,n),on.forEach((function(n){n(an)}))},cn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},un=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,b.Z)((0,b.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||W()})}(t,n,e);return sn({type:2,toast:r}),r.id}},dn=function(n,t){return un("blank")(n,t)};dn.error=un("error"),dn.success=un("success"),dn.loading=un("loading"),dn.custom=un("custom"),dn.dismiss=function(n){sn({type:3,toastId:n})},dn.remove=function(n){return sn({type:4,toastId:n})},dn.promise=function(n,t,e){var r=dn.loading(t.loading,(0,b.Z)((0,b.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return dn.success(Q(t.success,n),(0,b.Z)((0,b.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){dn.error(Q(t.error,n),(0,b.Z)((0,b.Z)({id:r},e),null==e?void 0:e.error))})),n};var ln=function(n,t){sn({type:1,toast:{id:n,height:t}})},pn=function(){sn({type:5,time:Date.now()})},fn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,u.useState)(an),e=(0,c.Z)(t,2),r=e[0],o=e[1];(0,u.useEffect)((function(){return on.push(o),function(){var n=on.indexOf(o);n>-1&&on.splice(n,1)}}),[r]);var a=r.toasts.map((function(t){var e,r;return(0,b.Z)((0,b.Z)((0,b.Z)((0,b.Z)({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||cn[t.type],style:(0,b.Z)((0,b.Z)((0,b.Z)({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return(0,b.Z)((0,b.Z)({},r),{},{toasts:a})}(n),e=t.toasts,r=t.pausedAt;(0,u.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return dn.dismiss(t.id)}),e);t.visible&&dn.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var o=(0,u.useCallback)((function(){r&&sn({type:6,time:Date.now()})}),[r]),a=(0,u.useCallback)((function(n,t){var r,o=t||{},a=o.reverseOrder,i=void 0!==a&&a,s=o.gutter,c=void 0===s?8:s,u=o.defaultPosition,d=e.filter((function(t){return(t.position||u)===(n.position||u)&&t.height})),l=d.findIndex((function(t){return t.id===n.id})),p=d.filter((function(n,t){return t<l&&n.visible})).length;return(r=d.filter((function(n){return n.visible}))).slice.apply(r,(0,x.Z)(i?[p+1]:[0,p])).reduce((function(n,t){return n+(t.height||0)+c}),0)}),[e]);return{toasts:e,handlers:{updateHeight:ln,startPause:pn,endPause:o,calculateOffset:a}}},mn=G(D||(D=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),gn=G(I||(I=(0,d.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),hn=G(S||(S=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),xn=K("div")(T||(T=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),mn,gn,(function(n){return n.secondary||"#fff"}),hn),bn=G(M||(M=(0,d.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),vn=K("div")(_||(_=(0,d.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),bn),yn=G(H||(H=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),Zn=G(U||(U=(0,d.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),wn=K("div")(J||(J=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),yn,Zn,(function(n){return n.secondary||"#fff"})),jn=K("div")(R||(R=(0,d.Z)(["\n  position: absolute;\n"]))),kn=K("div")(q||(q=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),Cn=G(B||(B=(0,d.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),En=K("div")(V||(V=(0,d.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),Cn),Pn=function(n){var t=n.toast,e=t.icon,r=t.type,o=t.iconTheme;return void 0!==e?"string"==typeof e?u.createElement(En,null,e):e:"blank"===r?null:u.createElement(kn,null,u.createElement(vn,(0,b.Z)({},o)),"loading"!==r&&u.createElement(jn,null,"error"===r?u.createElement(xn,(0,b.Z)({},o)):u.createElement(wn,(0,b.Z)({},o))))},zn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},Nn=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},Fn=K("div")(X||(X=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),On=K("div")(Y||(Y=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Ln=u.memo((function(n){var t=n.toast,e=n.position,r=n.style,o=n.children,a=t.height?function(n,t){var e=n.includes("top")?1:-1,r=nn()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[zn(e),Nn(e)],o=(0,c.Z)(r,2),a=o[0],i=o[1];return{animation:t?"".concat(G(a)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(G(i)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},i=u.createElement(Pn,{toast:t}),s=u.createElement(On,(0,b.Z)({},t.ariaProps),Q(t.message,t));return u.createElement(Fn,{className:t.className,style:(0,b.Z)((0,b.Z)((0,b.Z)({},a),r),t.style)},"function"==typeof o?o({icon:i,message:s}):u.createElement(u.Fragment,null,i,s))}));!function(n,t,e,r){C.p=t,O=n,L=e,A=r}(u.createElement);var An=function(n){var t=n.id,e=n.className,r=n.style,o=n.onHeightUpdate,a=n.children,i=u.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;o(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,o]);return u.createElement("div",{ref:i,className:e,style:r},a)},Dn=F($||($=(0,d.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),In=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,o=n.toastOptions,a=n.gutter,i=n.children,s=n.containerStyle,c=n.containerClassName,d=fn(o),l=d.toasts,p=d.handlers;return u.createElement("div",{style:(0,b.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:p.startPause,onMouseLeave:p.endPause},l.map((function(n){var e=n.position||r,o=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return(0,b.Z)((0,b.Z)({left:0,right:0,display:"flex",position:"absolute",transition:nn()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),o)}(e,p.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:r}));return u.createElement(An,{id:n.id,key:n.id,onHeightUpdate:p.updateHeight,className:n.visible?Dn:"",style:o},"custom"===n.type?Q(n.message,n):i?i(n):u.createElement(Ln,{toast:n,position:e}))})))},Sn=dn,Tn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},Mn=e(9782),_n=e(4162),Hn=e(3329);var Un,Jn,Rn=function(){var n=(0,u.useState)(""),t=(0,c.Z)(n,2),e=t[0],r=t[1],o=(0,u.useState)(""),a=(0,c.Z)(o,2),i=a[0],s=a[1],d=(0,Mn.Jx)(),l=d.data,x=d.isLoading,b=(0,Mn.Lr)(),v=(0,c.Z)(b,1)[0],y=function(n){var t=n.currentTarget,e=t.name,o=t.value;switch(e){case"name":r(o);break;case"number":s(o);break;default:return}},Z=function(){r(""),s("")};return(0,Hn.jsx)("form",{onSubmit:function(n){n.preventDefault();var t,r={id:Tn(),name:e,number:i};t=r,l.map((function(n){return n.name.toLowerCase()})).includes(t.name.toLowerCase())?Sn.error("".concat(t.name," is already in contacts.")):(v(t),Z(),Sn.success("Contact, ".concat(e," successfully added")))},autoComplete:"off",children:(0,Hn.jsxs)(p,{children:["Phonebook",(0,Hn.jsxs)(f,{children:[(0,Hn.jsxs)(m,{children:["Name",(0,Hn.jsx)(g,{type:"text",id:"name",name:"name",value:e,onChange:y,placeholder:"Ivan Ivanov"})]}),(0,Hn.jsxs)(m,{children:["Number",(0,Hn.jsx)(g,{type:"tel",id:"number",name:"number",value:i,onChange:y,placeholder:"123-45-78"})]}),(0,Hn.jsx)(h,{type:"submit",children:"Add contact"}),(0,Hn.jsx)(In,{}),x&&(0,Hn.jsx)(_n.Z,{})]})]})})},qn=l.ZP.li(Un||(Un=(0,d.Z)(["\n    display: flex;\n  justify-content: space-between;\n"]))),Bn=l.ZP.button(Jn||(Jn=(0,d.Z)(["\n  padding: 10px 20px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  cursor: pointer;\n  color: black;\n  font-weight: 700;\n  font-size: 16px;\n  text-transform: uppercase;\n  &:focus, :hover {\n   opacity: 1;\n   color: #2196F3;\n }    \n"]))),Vn=e(5243);var Xn,Yn,$n,Gn,Kn,Qn,Wn,nt=function(n){var t=n.id,e=n.name,r=n.number,o=(0,Mn.Nt)(),a=(0,c.Z)(o,2),i=a[0],s=a[1].isLoading;return(0,Hn.jsx)(Hn.Fragment,{children:(0,Hn.jsxs)(qn,{children:[(0,Hn.jsxs)("p",{children:[e,": ",r]}),(0,Hn.jsxs)(Bn,{type:"button",onClick:function(){return i(t)},disabled:s,children:[s&&(0,Hn.jsx)(Vn.s5,{width:"10"})," Delete"]})]},t)})},tt=l.ZP.ul(Xn||(Xn=(0,d.Z)(["\nmargin-top: 30px;\n  color: black;\n  font-weight: 500;\n  font-size: 18px;\n"]))),et=l.ZP.h2(Yn||(Yn=(0,d.Z)(["\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 1.62;\n  letter-spacing: 0.03em;\n  text-align: center;\n  color: #232323;\n"]))),rt=e(5048),ot=function(n){return n.contacts.filter},at=function(){var n=(0,Mn.Jx)(),t=n.data,e=n.error,r=n.isLoading,o=(0,rt.v9)(ot),a=t&&t.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())})),i=t&&a.length>0;return(0,Hn.jsx)(Hn.Fragment,{children:(0,Hn.jsxs)(tt,{children:[i&&a.map((function(n){var t=n.id,e=n.name,r=n.number;return(0,Hn.jsx)(nt,{id:t,name:e,number:r},t)})),r&&(0,Hn.jsx)(_n.Z,{}),e&&(0,Hn.jsx)(et,{children:"Try adding phone details or contact your administrator"})]})})},it=l.ZP.label($n||($n=(0,d.Z)(["\n display: block;\n  margin-top:30px;\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 20px;\n\n"]))),st=l.ZP.p(Gn||(Gn=(0,d.Z)(["\n margin:0;\npadding: 2rem;\ntext-align: center;\ncolor: #000;\nfont-weight: bold;\nfont-size: 24px;\n"]))),ct=l.ZP.input(Kn||(Kn=(0,d.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10px;\n  width: 50%;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n\n  &:focus {\n   outline-color: #2196F3;\n    }\n"]))),ut=e(1538),dt=function(){var n=(0,rt.I0)(),t=(0,rt.v9)(ot);return(0,Hn.jsxs)(it,{htmlFor:"",value:t,children:[(0,Hn.jsx)(st,{children:"Find contacts by name"}),(0,Hn.jsx)(ct,{type:"text",onChange:function(t){n((0,ut.hX)(t.currentTarget.value.trim()))},placeholder:"Enter search name"})]})},lt=l.ZP.div(Qn||(Qn=(0,d.Z)(["\n  max-width: 40%;\nmargin-right: auto;\nmargin-left: auto;\nmargin-top: 20px;\npadding-bottom: 10px;\npadding-right: 5px;\nalign-items: center;\nbackground: rgb(220,220,220);\nbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\nborder-radius: 0.5rem;\n"])));l.ZP.h1(Wn||(Wn=(0,d.Z)(["\nmargin:0;\npadding: 2rem;\ntext-align: center;\ncolor: #000;\nfont-weight: bold;\nfont-size: 24px;\n"])));var pt=function(){return(0,Hn.jsxs)(lt,{children:[(0,Hn.jsx)(Rn,{}),(0,Hn.jsx)(dt,{}),(0,Hn.jsx)(at,{})]})}}}]);
//# sourceMappingURL=348.c8cb402e.chunk.js.map