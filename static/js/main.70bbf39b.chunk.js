(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={bg:"Modal_bg__3JyQl",content:"Modal_content__1Bh5b"}},,function(e,t,n){e.exports={square:"Square_square__1-A_r"}},function(e,t,n){e.exports={board:"Board_board__3EveX"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(8),s=n.n(i),a=(n(15),n(5)),l=n(2),o=n(9),u=n.n(o),d=n(0);var b=function(e){var t=e.id,n=e.type,r=e.onClickHandler;return Object(d.jsx)("button",{className:u.a.square,onClick:function(){return r(t)},children:n})},j=n(10),f=n.n(j);var O=function(e){var t=e.squares,n=e.onClickHandler;return Object(d.jsx)("div",{className:f.a.board,children:t.map((function(e,t){return Object(d.jsx)(b,{id:t,type:e.type,onClickHandler:function(){return n(t)}},t)}))})},p=n(7),h=n.n(p);var v=function(e){var t=e.children,n=e.isOpenModal;return Object(d.jsx)("div",{className:h.a.bg,style:n?{visibility:"visible",opacity:1}:{visibility:"hidden",opacity:0},children:Object(d.jsx)("div",{className:h.a.content,children:t})})};var x=function(e){var t=e.id,n=e.type,r=e.square,c=e.onClickHandler;return Object(d.jsxs)("button",{className:"step",onClick:function(){return c(t-1)},children:[Object(d.jsxs)("span",{children:[t,")"]})," \u0445\u043e\u0434 ",Object(d.jsxs)("span",{children:['"',n,'"']})," \u043d\u0430 \u043a\u043b\u0435\u0442\u043a\u0443 ",Object(d.jsxs)("span",{children:['"',r+1,'"']})]})};var k=function(e){var t=e.steps,n=e.onClickHandler,r=Object(a.a)(t).sort((function(e,t){return e.step-t.step}));return Object(d.jsxs)("ul",{className:"steps",children:[Object(d.jsx)("h2",{className:"steps__title",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0445\u043e\u0434\u043e\u0432:"}),r.filter((function(e){return void 0!==e.step})).length?r.map((function(e,t){return e.step?Object(d.jsx)(x,{id:e.step,type:e.type,square:e.id,onClickHandler:n},t):null})):Object(d.jsx)("div",{style:{textAlign:"center"},children:"\u0425\u043e\u0434\u043e\u0432 \u043d\u0435 \u0431\u044b\u043b\u043e"})]})},y=function(){var e=Object(r.useState)(Array(9).fill({})),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)("X"),s=Object(l.a)(i,2),o=s[0],u=s[1],b=Object(r.useState)(""),j=Object(l.a)(b,2),f=j[0],p=j[1],h=Object(r.useState)(1),x=Object(l.a)(h,2),y=x[0],m=x[1],N=Object(r.useState)(!1),_=Object(l.a)(N,2),g=_[0],C=_[1],q=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function H(){c(Array(9).fill({})),m(1),p("")}return Object(d.jsxs)("div",{className:"content",style:{display:"flex",gap:"50px"},children:[Object(d.jsxs)(v,{isOpenModal:g,children:[f?Object(d.jsx)("div",{className:"winner",children:"X"===f?"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438 \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!":"O"===f?"\u041d\u043e\u043b\u0438\u043a\u0438 \u043f\u043e\u0431\u0435\u0434\u0438\u043b\u0438!":f}):null,Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{className:"button dark",onClick:function(){H(),C(!1)},children:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(d.jsx)("button",{className:"button dark",onClick:function(){return C(!1)},children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"title",children:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a\u0438-\u043d\u043e\u043b\u0438\u043a\u0438"}),Object(d.jsx)(O,{squares:n,onClickHandler:function(e){var t=Object(a.a)(n);if(!t[e].type&&!f){t[e]={id:e,type:o,step:y,history:t},c(t),m(y+1),u("X"===o?"O":"X");for(var r=t.filter((function(e){return"X"===e.type})).map((function(e){return e.id})),i=t.filter((function(e){return"O"===e.type})).map((function(e){return e.id})),s=!1,l=!1,d=function(e){for(var t=function(t){if(void 0===r.find((function(n){return n===q[e][t]})))return s=!1,"break";s=!0},n=0;n<q[e].length;n++){if("break"===t(n))break}for(var c=function(t){if(void 0===i.find((function(n){return n===q[e][t]})))return l=!1,"break";l=!0},a=0;a<q[e].length;a++){if("break"===c(a))break}if(s||l)return"break"},b=0;b<q.length;b++){if("break"===d(b))break}(s||l)&&(s?p("X"):l?p("O"):9===t.filter((function(e){return void 0!==e.id})).length&&p("\u041d\u0438\u0447\u044c\u044f!"),C(!0),m(1))}}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(k,{steps:n,onClickHandler:function(e){c(n[e].history),m(n[e].step+1),p("")}}),Object(d.jsx)("button",{className:"button",onClick:H,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]})]})};n(17);var m=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(y,{})})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.70bbf39b.chunk.js.map