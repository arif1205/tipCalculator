(this["webpackJsonptip-calc"]=this["webpackJsonptip-calc"]||[]).push([[0],{20:function(t,n,e){},24:function(t,n,e){"use strict";e.r(n);var r,i,o,a,c,s,l=e(1),d=e.n(l),p=e(11),u=e.n(p),b=(e(20),e(5)),x=e(2),j=e(3),f=j.a.main(r||(r=Object(x.a)(["\n\tmin-height: 100vh;\n\twidth: 100%;\n\tbackground: var(--body-bg);\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 70px;\n\n\t@media screen and (max-width: 375px) {\n\t\tgap: 40px;\n\t\tmin-height: 100%;\n\t\tpadding: 30px 10px;\n\t\toverflow: hidden;\n\t}\n"]))),m=j.a.div(i||(i=Object(x.a)([""]))),v=e.p+"static/media/logo.3cc0528b.svg",g=j.a.div(o||(o=Object(x.a)(["\n\tpadding: 32px;\n\tbackground: #ffffff;\n\tborder-radius: 20px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-gap: 30px;\n\n\t@media screen and (max-width: 375px) {\n\t\tgrid-template-columns: 1fr;\n\t\tpadding: 32px 15px;\n\t}\n"]))),h=j.a.div(a||(a=Object(x.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\n\t@media screen and (max-width: 375px) {\n\t\tpadding: 0 0;\n\t\toverflow: hidden;\n\t}\n"]))),O=j.a.div(c||(c=Object(x.a)(['\n\t& > * {\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t}\n\n\tlabel {\n\t\tfont-size: 0.82rem;\n\t\tcolor: var(--label-color);\n\t\tmargin-bottom: 5px;\n\t\tfont-weight: 600;\n\t\tdisplay: inline-block;\n\t\twidth: fit-content;\n\t}\n\n\tdiv {\n\t\tposition: relative;\n\t}\n\n\tinput {\n\t\tpadding: 10px 15px;\n\t\tpadding-left: 50px;\n\t\tbackground: var(--input-bg);\n\t\tcolor: var(--input-text-color);\n\t\tfont-weight: var(--font-bold);\n\t\tborder: 2px solid transparent;\n\t\tfont-size: var(--input-font-size);\n\t\tborder-radius: 8px;\n\t\ttext-align: right;\n\t\twidth: 100%;\n\t\tfont-family: "Space Mono", monospace;\n\n\t\t&:focus {\n\t\t\tborder-color: var(--input-focus-border);\n\t\t\toutline: none;\n\t\t}\n\t}\n\n\tspan {\n\t\tdisplay: inline-block;\n\t\twidth: 50px;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\theight: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n']))),w=j.a.p(s||(s=Object(x.a)(["\n\tdisplay: block;\n\tposition: absolute;\n\ttop: -25px;\n\tright: 0;\n\tcolor: #cd7861;\n\tfont-size: 0.8rem;\n\tdisplay: ",";\n"])),(function(t){return 0!==t.value?"none":"block"})),y=e(0);var C,T,k,S,z=function(t){var n=t.label,e=t.name,r=t.icon,i=t.min,o=t.setState,a=t.value;return Object(y.jsxs)(O,{children:[Object(y.jsx)("label",{htmlFor:e,children:n}),Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{type:"text",name:e,id:e,onFocus:function(t){return t.target.style.borderColor="#70b7ae"},onBlur:function(t){return n=t.target,isNaN(Number(n.value))?(n.style.borderColor="#CD7861",void o(0)):""===n.value?(n.style.borderColor="transparent",void o(0)):void(Number(n.value)<i?(n.style.borderColor="#CD7861",o(0)):(n.style.borderColor="#70b7ae",o(Number(n.value))));var n},onChange:function(t){return o(t.target.value)},value:a||""}),Object(y.jsx)("span",{children:Object(y.jsx)("img",{src:r,alt:"icon"})}),Object(y.jsx)(w,{value:a,children:"Isn't valid input"})]})]})},N=e(15),P=j.a.div(C||(C=Object(x.a)(["\n\tlabel {\n\t\tfont-size: 0.82rem;\n\t\tcolor: var(--label-color);\n\t\tmargin-bottom: 10px;\n\t\tfont-weight: 600;\n\t}\n"]))),F=j.a.div(T||(T=Object(x.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-gap: 15px;\n\n\t@media screen and (max-width: 375px) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n"]))),B=j.a.input(k||(k=Object(x.a)(['\n\tmax-width: 125px;\n\tmin-width: 125px;\n\tbackground: var(--input-bg);\n\tcolor: var(--input-text-color);\n\tfont-weight: var(--font-bold);\n\tborder: 2px solid transparent;\n\tfont-family: "Space Mono", monospace;\n\tfont-size: 1.3rem;\n\tborder-radius: 5px;\n\tpadding: 8px;\n\ttransition: 0.2s;\n\ttext-align: center;\n\n\t&:hover,\n\t&:focus {\n\t\tborder-color: var(--input-focus-border);\n\t\toutline: none;\n\t}\n\n\t&.active {\n\t\tbackground: var(--tip-input-hover-bg);\n\t\tcolor: var(--tip-input-hover-color);\n\t\tborder-color: var(--input-focus-border);\n\t}\n\n\t@media screen and (max-width: 375px) {\n\t\tmin-width: 125px;\n\t\tmax-width: 150px;\n\t}\n']))),L=j.a.button(S||(S=Object(x.a)(['\n\tbackground: var(--tip-input-bg);\n\tcolor: var(--tip-input-color);\n\tcursor: pointer;\n\twidth: 100%;\n\tborder: 2px solid transparent;\n\tfont-family: "Space Mono", monospace;\n\tfont-size: var(--input-font-size);\n\tborder-radius: 5px;\n\ttransition: 0.2s;\n\tpadding: 8px;\n\n\t&:hover {\n\t\tbackground: var(--tip-input-hover-bg);\n\t\tcolor: var(--tip-input-hover-color);\n\t\tborder-color: var(--input-focus-border);\n\t}\n\n\t&.active {\n\t\tbackground: var(--tip-input-hover-bg);\n\t\tcolor: var(--tip-input-hover-color);\n\t\tborder-color: var(--input-focus-border);\n\t}\n'])));var M=function(t){var n=t.amount,e=t.setTip,r=t.setCustomTip;return Object(y.jsxs)(L,{onClick:function(){e(n),r(0)},children:[n,"%"]})};var D=function(t){var n=t.tip,e=t.customTip,r=t.setTip,i=t.setCustomTip;return Object(l.useEffect)((function(){!n&&document.querySelector(".active")&&document.querySelector(".active").classList.remove("active")}),[n]),Object(y.jsxs)(P,{children:[Object(y.jsx)("label",{htmlFor:"tip-amount",children:"Select Tip %"}),Object(y.jsxs)(F,{onClick:function(t){return function(t){Object(N.a)(t.target.parentElement.children).map((function(t){return t.classList.remove("active")})),t.target.classList.add("active")}(t)},children:[Object(y.jsx)(M,{amount:5,setTip:r,setCustomTip:i}),Object(y.jsx)(M,{amount:10,setTip:r,setCustomTip:i}),Object(y.jsx)(M,{amount:15,setTip:r,setCustomTip:i}),Object(y.jsx)(M,{amount:25,setTip:r,setCustomTip:i}),Object(y.jsx)(M,{amount:50,setTip:r,setCustomTip:i}),Object(y.jsx)(B,{type:"text",name:"custom-tip",placeholder:"Custom",value:0===e?"":e,onChange:function(t){return function(t){isNaN(Number(t.target.value))||(r(Number(t.target.value)),i(Number(t.target.value)))}(t)},onBlur:function(t){return function(t){isNaN(t.target.value)||(r(t.target.value),i(t.target.value),t.target.style.borderColor="var(--input-focus-border)")}(t)}})]})]})},E=e.p+"static/media/icon-dollar.9f9be353.svg",I=e.p+"static/media/icon-person.65bfd204.svg",q=d.a.createContext({}),J=d.a.createContext({});var A,R,$,G,H,K=function(){var t=Object(l.useContext)(q),n=Object(l.useContext)(J),e=t.setBill,r=t.setPeople,i=t.setTip,o=t.setCustomTip,a=n.bill,c=n.people,s=n.customTip,d=n.tip;return Object(y.jsxs)(h,{children:[Object(y.jsx)(z,{label:"Bill",icon:E,name:"bill",min:0,setState:e,value:a}),Object(y.jsx)(D,{customTip:s,setTip:i,setCustomTip:o,tip:d}),Object(y.jsx)(z,{label:"Number of People",icon:I,name:"people",min:1,setState:r,value:c})]})},Q=j.a.div(A||(A=Object(x.a)(["\n\tpadding: 40px;\n\tbackground: var(--cart-bg);\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder-radius: 25px;\n\n\t@media screen and (max-width: 375px) {\n\t\tpadding: 20px;\n\t\toverflow: hidden;\n\t\tborder-radius: 10px;\n\t}\n"]))),U=j.a.div(R||(R=Object(x.a)(["\n\t@media screen and (max-width: 375px) {\n\t\twidth: 100%;\n\t}\n"]))),V=j.a.div($||($=Object(x.a)(["\n\tpadding: 10px 0 20px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tfont-family: var(--font);\n"]))),W=j.a.div(G||(G=Object(x.a)(["\n\tcolor: #ffffff;\n\tfont-size: 1rem;\n\tpadding-right: 40px;\n\n\tp {\n\t\tfont-weight: var(--font-bold);\n\t}\n\n\tspan {\n\t\tfont-size: 0.8rem;\n\t\tcolor: var(--cart-secondary-text);\n\t}\n\n\t@media screen and (max-width: 375px) {\n\t\tfont-size: 0.9rem;\n\t\tpadding-right: 20px;\n\n\t\tspan {\n\t\t\tfont-size: 0.7rem;\n\t\t}\n\t}\n"]))),X=j.a.div(H||(H=Object(x.a)(["\n\tcolor: var(--cart-price-text);\n\n\tp {\n\t\tfont-size: 36px;\n\t\tfont-weight: var(--font-bold);\n\t\tmargin-bottom: 0;\n\t\twidth: 180px;\n\t\ttext-align: right;\n\t\toverflow: auto;\n\t}\n\n\t@media screen and (max-width: 375px) {\n\t\tp {\n\t\t\tfont-size: 26px;\n\t\t\twidth: 120px;\n\t\t}\n\t}\n"])));var Y,Z=function(t){var n=t.leftPara,e=t.leftSecondary,r=t.amount;return Object(y.jsxs)(V,{children:[Object(y.jsxs)(W,{children:[Object(y.jsx)("p",{children:n}),Object(y.jsxs)("span",{children:["/ ",e]})]}),Object(y.jsx)(X,{children:Object(y.jsxs)("p",{children:["$",Object(y.jsx)("span",{children:r})]})})]})},_=j.a.div(Y||(Y=Object(x.a)(["\n\twidth: 100%;\n\n\tbutton {\n\t\twidth: 100%;\n\t\tpadding: 12px 0;\n\t\tbackground: var(--reset-bg);\n\t\tcolor: var(--reset-color);\n\t\ttext-align: center;\n\t\tborder: none;\n\t\tborder-radius: 5px;\n\t\tcursor: pointer;\n\t\tfont-weight: var(--font-bold);\n\t\tfont-size: 17px;\n\t\ttext-transform: uppercase;\n\t\tletter-spacing: 1px;\n\t\ttransition: 0.2s;\n\n\t\t&:hover {\n\t\t\tbackground-color: #9fe8df;\n\t\t}\n\n\t\t@media screen and (max-width: 375px) {\n\t\t\tpadding: 10px 0;\n\t\t\tfont-size: 15px;\n\t\t}\n\t}\n"])));var tt=function(){var t=Object(l.useContext)(q),n=t.setBill,e=t.setPeople,r=t.setTip,i=t.setCustomTip;return Object(y.jsx)(_,{children:Object(y.jsx)("button",{type:"reset",onClick:function(t){return n(""),e(""),r(0),void i(0)},children:"Reset"})})};var nt=function(){var t,n,e,r=Object(l.useContext)(J),i=r.bill,o=r.people,a=r.tip;return i>0&&o>0&&(n=((t=(i/o).toFixed(2))*a/100).toFixed(2),e=(Number(t)+Number(n)).toFixed(2)),Object(y.jsxs)(Q,{children:[Object(y.jsxs)(U,{children:[Object(y.jsx)(Z,{leftPara:"Tip Amount",leftSecondary:"Person",amount:n||"00.00"}),Object(y.jsx)(Z,{leftPara:"Total",leftSecondary:"Person",amount:e||"00.00"})]}),Object(y.jsx)(tt,{})]})};var et=function(){return Object(y.jsxs)(g,{children:[Object(y.jsx)(K,{}),Object(y.jsx)(nt,{})]})};var rt=function(){var t=Object(l.useState)(""),n=Object(b.a)(t,2),e=n[0],r=n[1],i=Object(l.useState)(""),o=Object(b.a)(i,2),a=o[0],c=o[1],s=Object(l.useState)(0),d=Object(b.a)(s,2),p=d[0],u=d[1],x=Object(l.useState)(0),j=Object(b.a)(x,2),g=j[0],h=j[1];return Object(y.jsxs)(f,{children:[Object(y.jsx)(m,{children:Object(y.jsx)("img",{src:v,alt:"logo"})}),Object(y.jsx)(q.Provider,{value:{setBill:r,setPeople:c,setTip:u,setCustomTip:h},children:Object(y.jsx)(J.Provider,{value:{bill:e,people:a,tip:p,customTip:g},children:Object(y.jsx)(et,{})})})]})};var it=function(){return Object(y.jsx)(rt,{})},ot=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(n){var e=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;e(t),r(t),i(t),o(t),a(t)}))};u.a.render(Object(y.jsx)(d.a.StrictMode,{children:Object(y.jsx)(it,{})}),document.getElementById("root")),ot()}},[[24,1,2]]]);
//# sourceMappingURL=main.c01364a1.chunk.js.map