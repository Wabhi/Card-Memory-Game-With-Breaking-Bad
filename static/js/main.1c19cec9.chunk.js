(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{35:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(21),r=n.n(a),o=(n(35),n(5)),s=n(8),d=n(24),l=n(3);var u=function(e){var t=e.id,n=e.color,i=e.game,a=e.flippedCount,r=e.setFlippedCount,u=e.flippedIndexes,j=e.setFlippedIndexes,p=Object(c.useState)(!1),f=Object(o.a)(p,2),b=f[0],m=f[1],O=Object(d.useSpring)({opacity:b?1:0,transform:"perspective(600px) rotateX(".concat(b?180:0,"deg)"),config:{mass:5,tension:500,friction:80}}),h=O.transform,g=O.opacity;return console.log(n),Object(c.useEffect)((function(){!0===u[2]&&u.indexOf(t)>-1?setTimeout((function(){m((function(e){return!e})),r(a+1),j([])}),1e3):!1===u[2]&&0===t&&(r(a+1),j([]))}),[u]),Object(l.jsxs)("div",{onClick:function(){if(i[t].flipped||a%3!==0){if(a%3===1&&!i[t].flipped&&u.indexOf(t)<0){m((function(e){return!e})),r(a+1);var e=Object(s.a)(u);e.push(t),j(e)}}else{m((function(e){return!e})),r(a+1);var n=Object(s.a)(u);n.push(t),j(n)}},children:[Object(l.jsx)(d.animated.div,{className:"c back",style:{opacity:g.interpolate((function(e){return 1-e})),transform:h}}),Object(l.jsx)(d.animated.div,{className:"c front",style:{opacity:g,transform:h.interpolate((function(e){return"".concat(e," rotateX(180deg)")})),backgroundImage:'url("'.concat(n,'")')}})]})},j=n.p+"static/media/fring.4efe5c24.jpg",p=n.p+"static/media/guss.19f32fe5.jpg",f=n.p+"static/media/hank.d8af0e9a.jpg",b=n.p+"static/media/hector.bbc9b94a.jpg",m=n.p+"static/media/Jimmy.37506988.jpg",O=n.p+"static/media/lydia.72ca1d72.jpg",h=n.p+"static/media/mike.213a11d5.jpg",g=n.p+"static/media/pinkman.9afc529e.jpg",x=n.p+"static/media/skyler.ebf6ee0f.jpg",v=n.p+"static/media/todd.00fc88a2.jpg",S=n.p+"static/media/walt.b73c211a.jpg",k=n.p+"static/media/walter.d9eb0ac8.jpg";var y=function(e){var t=e.options,n=e.setOptions,i=(e.highScore,e.setHighScore,e.startTime),a=(e.setStartTime,Object(c.useState)([])),r=Object(o.a)(a,2),d=r[0],y=r[1],C=Object(c.useState)(0),I=Object(o.a)(C,2),T=I[0],w=I[1],F=Object(c.useState)([]),M=Object(o.a)(F,2),E=M[0],H=M[1],N=[j,p,f,b,m,O,h,g,x,v,S,k];if(Object(c.useEffect)((function(){for(var e=[],n=0;n<t/2;n++){var c={id:2*n,colorId:n,color:N[n],flipped:!1},i={id:2*n+1,colorId:n,color:N[n],flipped:!1};e.push(c),e.push(i)}var a=e.sort((function(){return Math.random()-.5}));y(a)}),[]),Object(c.useEffect)((function(){!d.some((function(e){return!e.flipped}))&&d.length>0&&(n(null),alert("Congratulation ! You won the game\ud83d\ude03 and you took ".concat(i," seconds to complete the game.")),window.location.reload())}),[d]),2===E.length)if(d[E[0]].colorId===d[E[1]].colorId){var B=Object(s.a)(d);B[E[0]].flipped=!0,B[E[1]].flipped=!0,y(B);var J=Object(s.a)(E);J.push(!1),H(J)}else{var X=Object(s.a)(E);X.push(!0),H(X)}return 0===d.length?Object(l.jsx)("div",{children:"loading..."}):Object(l.jsx)("div",{id:"cards",children:d.map((function(e,t){return Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(u,{id:t,color:e.color,game:d,flippedCount:T,setFlippedCount:w,flippedIndexes:E,setFlippedIndexes:H})},t)}))})};n(38);function C(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(0),r=Object(o.a)(a,2),s=r[0],d=r[1],u=Object(c.useState)(0),j=Object(o.a)(u,2),p=j[0],f=j[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("h1",{children:["Memory Game ",Object(l.jsx)("span",{children:"Breaking Bad"})]}),Object(l.jsxs)("div",{children:["Start Time : ",p,"'sec"]}),Object(l.jsx)("div",{children:null===n?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){return i(12)},children:"Easy"}),Object(l.jsx)("button",{onClick:function(){return i(18)},children:"Medium"}),Object(l.jsx)("button",{onClick:function(){return i(24)},children:"Hard"})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:function(){setInterval((function(){f((function(e){return e+1}))}),1e3)},children:"Start Timer"}),Object(l.jsx)("button",{onClick:function(){var e=n;i(null),setTimeout((function(){i(e)}),5)},children:"Start Over"}),Object(l.jsx)("button",{onClick:function(){return i(null)},children:"Main Menu"})]})})]}),n?Object(l.jsx)(y,{options:n,setOptions:i,highScore:s,setHighScore:d,startTime:p,setStartTime:f}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h2",{children:"Choose anyone - Easy Medium Hard"})})]})}r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1c19cec9.chunk.js.map