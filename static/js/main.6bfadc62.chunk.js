(this["webpackJsonpstreamflow-app"]=this["webpackJsonpstreamflow-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"i",(function(){return s})),n.d(t,"h",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"p",(function(){return l})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return m})),n.d(t,"o",(function(){return f})),n.d(t,"m",(function(){return h})),n.d(t,"n",(function(){return x})),n.d(t,"l",(function(){return p})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return g}));var r,a=n(24),c="2DvvSEde36Ch3B52g9hKWDYbfmJimLpJwVBV9Cknypi4",s="DrFtxPb9F6SxpHHHFiEtSNXE3SZCUNLXMaHS6r8pkoz2",i="https://www.sollet.io",o=10,l="confirmed",u=0,d=1,b=2,j="address",m="yyyy-MM-dd",f="HH:mm",h="scheduled",x="streaming",p="complete",O="canceled",g=(r={},Object(a.a)(r,h,"gray"),Object(a.a)(r,x,"green"),Object(a.a)(r,p,"blue"),Object(a.a)(r,O,"red"),r)},102:function(e,t,n){},103:function(e,t){},107:function(e,t){},123:function(e,t){},143:function(e,t){},144:function(e,t){},164:function(e,t){},167:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(48),s=n.n(c),i=(n(102),n(5)),o=n(20),l=n(13),u=n(3);function d(e){return Object(u.jsxs)("div",{className:"col-span-full",children:[Object(u.jsx)("label",{htmlFor:"account",className:"block font-medium text-gray-100",children:"Recipient Account"}),Object(u.jsx)("div",{className:"mt-1",children:Object(u.jsx)("input",{type:"text",name:"account",id:"account",defaultValue:e.value,onChange:function(t){return e.onChange(t.target.value)},pattern:"[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{43,44}",className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"Please double check the address","aria-describedby":"account-description",required:!0})})]})}function b(){return Object(u.jsxs)("div",{className:"col-span-2 sm:col-span-1",children:[Object(u.jsx)("label",{htmlFor:"token",className:"block font-medium text-gray-100",children:"Token"}),Object(u.jsxs)("select",{id:"token",name:"token",className:"mt-1 text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",defaultValue:"SOL",children:[Object(u.jsx)("option",{children:"SOL"}),Object(u.jsx)("option",{disabled:!0,children:"ETH - Coming soon\ufe0f\u2122"}),Object(u.jsx)("option",{disabled:!0,children:"BTC - Coming soon\u2122"}),Object(u.jsx)("option",{disabled:!0,children:"USDC - Coming soon\u2122"}),Object(u.jsx)("option",{disabled:!0,children:"Other tokens..."})]})]})}var j=n(14),m=n(16),f=n(22),h=n(23),x=n(27),p=function(e){Object(f.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hidden:!1},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"relative bg-primary ".concat(this.state.hidden&&"hidden"),children:Object(u.jsxs)("div",{className:"max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8",children:[Object(u.jsx)("div",{className:"pr-16 sm:text-center sm:px-16",children:Object(u.jsxs)("p",{className:"font-small text-white",children:[Object(u.jsx)("b",{children:"Devnet version. Test freely! "}),Object(u.jsx)("span",{className:"hidden lg:inline",children:"Coming soon\u2122 to mainnet."})]})}),Object(u.jsx)("div",{className:"absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start",children:Object(u.jsxs)("button",{type:"button",onClick:function(){return e.setState({hidden:!0})},className:"flex p-2 rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-white",children:[Object(u.jsx)("span",{className:"sr-only",children:"Dismiss"}),Object(u.jsx)(x.d,{className:"h-6 w-6 text-white"})]})})]})})}}]),n}(r.Component),O=n(169),g=n(170),v=n(10);function y(e){var t=e.title,n=e.date,r=e.updateDate,a=e.time,c=e.updateTime;function s(){var e=Object(O.a)(new Date,v.o);(!a||a<e)&&c(e)}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"col-span-3 sm:col-span-1",children:[Object(u.jsxs)("label",{htmlFor:t,className:"block font-medium text-gray-100 capitalize",children:[t," Date"]}),Object(u.jsx)("div",{className:"mt-1",children:Object(u.jsx)("input",{type:"date",name:t,id:t,value:n,min:Object(O.a)(new Date,v.b),max:Object(O.a)(Object(g.a)(new Date,{years:1}),v.b),onChange:function(e){return r(e.target.value)},className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"","aria-describedby":t+"-description",required:!0})})]}),Object(u.jsxs)("div",{className:"col-span-2 sm:col-span-1",children:[Object(u.jsxs)("label",{htmlFor:t+"_time",className:"block font-medium text-gray-100 capitalize",children:[t," time"]}),Object(u.jsx)("div",{className:"mt-1",children:Object(u.jsx)("input",{type:"time",name:t+"_time",id:t+"_time",value:a,onFocus:s,onClick:s,onChange:function(e){return c(e.target.value)},className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"","aria-describedby":t+"_time-description",required:!0})})]})]})}function w(e){return Object(u.jsxs)("div",{className:"col-span-3 sm:col-span-1",children:[Object(u.jsx)("label",{htmlFor:"amount",className:"block font-medium text-gray-100",children:"Amount"}),Object(u.jsx)("div",{className:"mt-1",children:Object(u.jsx)("input",{step:"any",autoFocus:!0,type:"number",name:"amount",id:"amount",defaultValue:e.value,onChange:function(t){return e.onChange(t.target.value)},className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",min:0,max:e.max||Number.MAX_SAFE_INTEGER,placeholder:"0.00","aria-describedby":"amount-description",required:!0})})]})}function N(e){return Object(u.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-90 z-10 ".concat(e.visible?"block":"hidden"),children:Object(u.jsx)("div",{className:"loader",children:" "})})}function k(e){var t=e.type,n=e.color;return Object(u.jsx)("div",{className:"inline",children:Object(u.jsxs)("span",{className:"align-top px-2.5 py-0.5 rounded-full text-xs font-medium bg-".concat(n,"-100 text-").concat(n,"-800 capitalize"),children:[Object(u.jsx)("svg",{className:"mr-1 -ml-1 inline align-baseline h-2 w-2 text-".concat(n,"-400"),fill:"currentColor",viewBox:"0 0 8 8",children:Object(u.jsx)("circle",{cx:4,cy:4,r:3})}),t]})})}function S(e){var t=e.title,n=e.action,r=e.color;return Object(u.jsx)("button",{onClick:n,className:"rounded-md text-sm bg-".concat(r,"-500 hover:bg-").concat(r,"-700 active:bg-").concat(r," text-white py-1 px-2"),children:t})}var C=n(171),D=n(168);function B(e){return Object(u.jsxs)("dt",{className:"col-span-full text-center",children:[Object(O.a)(Object(D.a)(e.start),"yyyy-MM-dd HH:mm")," \u2013 ",Object(O.a)(Object(D.a)(e.end),"yyyy-MM-dd HH:mm")]})}var T=Object(r.memo)(B);function F(e){var t=e.title,n=e.value,r=e.max,a=e.rtl;return n=Number(n).toFixed(2),r=Number(r).toFixed(2),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("dt",{children:t}),Object(u.jsx)("div",{className:"rounded-sm h-3 bg-gray-900 w-full my-auto",children:Object(u.jsx)("div",{className:"bg-gradient-to-r from-primary to-secondary rounded-sm h-full "+(a?"float-right":""),style:{width:n/r*100+"%"}})}),Object(u.jsxs)("label",{className:"ml-2 text-right truncate",children:["\u25ce",n,Object(u.jsxs)("small",{className:"text-gray-400",children:["/",r]})]})]})}var W=n(21);function E(e){var t=e.data,n=t.start,a=t.end,c=t.withdrawn,s=t.amount,i=t.receiver,o=t.sender,d=t.status,b=e.myAddress,j=e.removeStream,m=e.onStatusUpdate,f=e.onCancel,h=e.onWithdraw,p=e.id,O=v.k[d],g=Object(r.useState)(A(n,a,s)),y=Object(l.a)(g,2),w=y[0],N=y[1],D=Object(r.useState)(w-c),B=Object(l.a)(D,2),E=B[0],I=B[1],M=(d===v.n||d===v.l&&c<s)&&b===i,H=(d===v.n||d===v.m)&&b===o;return Object(r.useEffect)((function(){var e=setInterval((function(){N(A(n,a,s)),I(w-c);var e=function(e,t,n){var r=Object(C.a)(new Date);return e===v.m&&r>=t?v.n:e===v.n&&r>=n?v.l:e}(d,n,a);e!==d&&m(e)}),1e3);return function(){return clearInterval(e)}})),Object(u.jsxs)("dl",{className:"text-white my-4 grid gap-y-4 gap-x-2 grid-cols-3 p-4 bg-".concat(O,"-300 bg-opacity-10 hover:bg-opacity-20 shadow rounded-lg"),children:[Object(u.jsxs)("div",{className:"col-span-full",children:[Object(u.jsx)(k,{className:"inline",type:d,color:O}),Object(u.jsx)("button",{onClick:j,className:"p-1.5 h-6 w-6 float-right align-top rounded-sm hover:bg-".concat(O,"-100 focus:outline-none focus:ring-1"),children:Object(u.jsx)(x.d,{className:"float-right w-3 h-3"})})]}),Object(u.jsx)(T,{start:n,end:a}),Object(u.jsx)(K,{url:Object(W.e)(v.c,p),title:"ID"}),Object(u.jsx)(_,{address:p,className:"col-span-2 text-sm text-gray-400"}),Object(u.jsx)(K,{url:Object(W.e)(v.c,i),title:"Recipient"}),Object(u.jsx)(_,{address:i,className:"col-span-2 text-sm text-gray-400"}),Object(u.jsx)(F,{title:"Withdrawn",value:c,max:s}),d===v.j&&Object(u.jsx)(F,{title:"Returned",value:s-c,max:s,rtl:!0}),d!==v.j&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(F,{title:"Streamed",value:w,max:s}),M&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("dt",{children:["Available",Object(u.jsx)("br",{}),Object(u.jsx)("sup",{className:"text-xs text-gray-300 align-top",children:"for withdrawal"})]}),Object(u.jsxs)("dd",{className:"col-span-2",children:["\u25ce",E.toFixed(2)]}),Object(u.jsx)(S,{title:"Withdraw",action:h,color:v.k[v.n]})]}),H&&Object(u.jsx)(S,{title:"Cancel",action:f,color:v.k[v.j]})]})]})}function A(e,t,n,r){return(r=r||Object(C.a)(new Date))<e?0:r>t?n:(r-e)/(t-e)*n}function I(){return Object(u.jsxs)("footer",{className:"mt-40 mb-4 text-center text-sm font-mono text-gray-400",children:[Object(u.jsx)("img",{src:"https://solana.com/branding/horizontal/logo-horizontal-gradient-dark.png",className:"w-40 mx-auto my-2",alt:"Solana logo"}),Object(u.jsxs)("small",{children:[Object(u.jsx)(K,{url:"https://streamflow.finance",title:"StreamFlow",hideIcon:!0}),"@ ",Object(u.jsx)(K,{url:"https://solana.com/solanaszn",title:"SolanaSZN",hideIcon:!0})]})]})}function M(e){return Object(u.jsxs)("div",{className:"mb-8 text-white",children:[Object(u.jsx)("img",{src:e.src,alt:"StreamFlow Finance logo",className:"w-24 mx-auto"}),Object(u.jsxs)("h1",{className:"text-6xl text-center",children:["Stream",Object(u.jsx)("strong",{children:"Flow"})]})]})}var H=n(9),L=n(53);function P(e){var t=e.children,n=e.className,r=Object(L.a)(e,["children","className"]);return Object(u.jsx)("button",Object(H.a)(Object(H.a)({className:"block mx-auto px-8 py-4 bg-gradient-to-br from-primary via-primary to-secondary border-transparent font-medium rounded shadow-sm text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "+n},r),{},{children:t}))}function K(e){var t=e.url,n=e.title,r=e.className,a=e.hideIcon||Object(u.jsx)("sup",{children:Object(u.jsx)(x.c,{className:"w-3 h-3 inline"})});return Object(u.jsx)("strong",{className:"text-gray-300 hover:text-white "+r,children:Object(u.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[n||t," ",a]})})}function _(e){var t=e.address,n=e.className,a="h-4 inline mr-1 cursor-pointer hover:opacity-80 align-text-bottom ",c=Object(r.useState)(!1),s=Object(l.a)(c,2),i=s[0],o=s[1];return Object(u.jsxs)("span",{className:"block truncate "+n,children:[i?Object(u.jsxs)("span",{className:"text-green-300 mr-1",children:[Object(u.jsx)(x.a,{className:a}),Object(u.jsx)("small",{children:"Copied!"})]}):Object(u.jsx)(x.b,{className:a,onClick:function(){Object(W.c)(t),o(!0),setTimeout((function(){o(!1)}),1e3)}}),t]})}var z=n(2),U=n.n(z),R=n(24),V=n(11),q=n(6),J=Object(r.createContext)(void 0);function X(e){var t=new Date,n=Object(r.useState)(void 0),a=Object(l.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(void 0),o=Object(l.a)(i,2),d=o[0],b=o[1],j=Object(r.useState)(Object(O.a)(t,v.b)),m=Object(l.a)(j,2),f=m[0],h=m[1],x=Object(r.useState)(""),p=Object(l.a)(x,2),g=p[0],y=p[1],w=Object(r.useState)(f),N=Object(l.a)(w,2),k=N[0],S=N[1],C=Object(r.useState)(""),D=Object(l.a)(C,2),B=D[0],T=D[1];return Object(u.jsx)(J.Provider,{value:{amount:c,setAmount:s,receiver:d,setReceiver:b,startDate:f,setStartDate:h,startTime:g,setStartTime:y,endDate:k,setEndDate:S,endTime:B,setEndTime:T},children:e.children})}var Y=n(91),Z=n(92),G=n(93),Q=n(38),$=Object(Q.a)((function(e){return{balance:0,setBalance:function(t){return e({balance:t})}}})),ee=n(35),te=Object(r.createContext)(void 0);function ne(e){var t=Object(r.useState)(Object(i.i)("devnet")),n=Object(l.a)(t,1)[0],a=Object(r.useState)(v.h),c=Object(l.a)(a,1)[0],s=Object(r.useState)(void 0),o=Object(l.a)(s,2),d=o[0],b=o[1],j=Object(r.useState)(!1),m=Object(l.a)(j,2),f=m[0],h=m[1],x=Object(r.useMemo)((function(){return new i.a(n)}),[n]),p=Object(r.useMemo)((function(){return new ee.a(c,n)}),[c,n]);return Object(u.jsx)(te.Provider,{value:{network:n,providerUrl:c,selectedWallet:d,setSelectedWallet:b,connected:f,setConnected:h,connection:x,urlWallet:p},children:e.children})}function re(){return Object(r.useContext)(te)}var ae=Object(Q.a)((function(e){return{streams:localStorage.streams?JSON.parse(localStorage.streams):{},setStreams:function(t){return e({streams:t})}}}));function ce(e){e.loading;var t=e.setLoading,n=i.b.generate(),a=Object(r.useContext)(J),c=a.amount,s=a.setAmount,o=a.receiver,l=a.setReceiver,j=a.startDate,m=a.setStartDate,f=a.startTime,h=a.setStartTime,x=a.endDate,p=a.setEndDate,O=a.endTime,g=a.setEndTime,v=re(),N=v.connection,k=v.selectedWallet,S=v.network,D=$(),B=D.balance,T=D.setBalance,F=ae(),E=F.streams,A=F.setStreams;function I(e){var t,n=e.name,r=e.value,a="";switch(n){case"start":a=new Date(r)<new Date((new Date).toDateString())?"Cannot start the stream in the past.":"";break;case"start_time":a=(t=new Date(j+"T"+r))<new Date?"Cannot start the stream in the past.":"";break;case"end":a=new Date(r)<new Date(j)?"Umm... end date before the start date?":"";break;case"end_time":t=new Date(j+"T"+f),a=new Date(x+"T"+r)<t?"Err... end time before the start time?":""}e.setCustomValidity(a)}function M(){return L.apply(this,arguments)}function L(){return(L=Object(q.a)(U.a.mark((function e(){var r,a,s,i,l,u,d;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=document.getElementById("form"),a=Object(V.a)(r.elements);try{for(a.s();!(s=a.n()).done;)I(s.value)}catch(b){a.e(b)}finally{a.f()}if(r.checkValidity()){e.next=6;break}return r.reportValidity(),e.abrupt("return",!1);case 6:return i=Object(C.a)(new Date(j+"T"+f)),(l=Object(C.a)(new Date(x+"T"+O)))===i&&(l=i+1),t(!0),u=new W.a(k.publicKey.toBase58(),o,c,i,l),e.next=13,Object(Y.a)(u,N,k,S,n);case 13:d=e.sent,t(!1),d&&(Object(W.f)(n.publicKey.toBase58()),T(B-c),A(Object(H.a)(Object(H.a)({},E),{},Object(R.a)({},n.publicKey.toBase58(),u))));case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsxs)("form",{onSubmit:M,id:"form",children:[Object(u.jsxs)("div",{className:"my-4 grid gap-4 grid-cols-5 sm:grid-cols-2",children:[Object(u.jsx)(w,{onChange:s,value:c,max:B}),Object(u.jsx)(b,{}),Object(u.jsx)(d,{onChange:l,value:o}),Object(u.jsx)(y,{title:"start",date:j,updateDate:m,time:f,updateTime:h}),Object(u.jsx)(y,{title:"end",date:x,updateDate:p,time:O,updateTime:g})]}),Object(u.jsx)(P,{className:"font-bold text-2xl my-5",onClick:M,type:"button",children:"Stream!"})]})}function se(e){var t=e.wallet,n=e.loading,a=e.setLoading,c=Object(r.useState)(void 0),s=Object(l.a)(c,2),d=s[0],b=s[1],j=$(),m=j.balance,f=j.setBalance,h=re(),x=h.connection,p=h.selectedWallet;function O(){return(O=Object(q.a)(U.a.mark((function e(){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,x.requestAirdrop(p.publicKey,v.a*i.c);case 3:t=e.sent,b(t),a(!1),o.b.success("Airdrop requested!");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){d&&x.confirmTransaction(d,v.p).then((function(e){e.value.err?o.b.error("Airdrop failed!"):(f(m+v.a),o.b.success("Airdrop confirmed. Balance updated!"))}))}),[d]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"mb-4 text-white",children:[Object(u.jsx)(K,{url:Object(W.e)("address",t.publicKey.toBase58()),title:"My Wallet Address"}),Object(u.jsx)(_,{address:t.publicKey.toBase58(),className:"block truncate"})]}),Object(u.jsxs)("div",{className:"mb-4 clearfix text-white",children:[Object(u.jsx)("strong",{className:"block",children:"Balance"}),Object(u.jsxs)("span",{children:["\u25ce",Number(m).toFixed(4)]}),Object(u.jsx)("button",{type:"button",onClick:function(){return t.disconnect()},className:"float-right items-center px-2.5 py-1.5 shadow-sm text-xs  font-medium rounded bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",children:"Disconnect"}),Object(u.jsx)(P,{type:"button",onClick:function(){return O.apply(this,arguments)},className:"float-right mr-2 px-2.5 py-1.5 text-xs my-0 rounded active:bg-white",disabled:n,children:"Airdrop"})]})]})}function ie(){return Object(u.jsxs)("div",{className:"mx-auto my-10 text-white text-center",children:[Object(u.jsx)("span",{children:"Your streams will appear here."}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{children:"Start streaming!"})]})}function oe(){var e=re(),t=e.network,n=e.selectedWallet,a=e.connection,c=$(),s=c.balance,d=c.setBalance,b=ae((function(e){return[e.streams,e.setStreams]})),j=Object(l.a)(b,2),m=j[0],f=j[1];function h(){return(h=Object(q.a)(U.a.mark((function e(r){var c,i,o,l,u;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=m[r],i=c.start,o=c.end,l=c.amount,e.next=3,Object(Z.a)(r,m[r],a,n,t);case 3:e.sent&&(u=A(i,o,l),d(s+u),f(Object(H.a)(Object(H.a)({},m),{},Object(R.a)({},r,Object(H.a)(Object(H.a)({},m[r]),{},{withdrawn:u})))));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(q.a)(U.a.mark((function e(r){var c,i,o,l,u,b;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=m[r],i=c.start,o=c.end,l=c.amount,u=new Date,b=A(i,o,l),e.next=5,Object(G.a)(r,m[r],a,n,t);case 5:e.sent&&(d(s+l-b),f(Object(H.a)(Object(H.a)({},m),{},Object(R.a)({},r,Object(H.a)(Object(H.a)({},m[r]),{},{withdrawn:b,canceled_at:Object(C.a)(u),status:v.j})))));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(q.a)(U.a.mark((function e(t,n){var r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!n,!e.t0){e.next=5;break}return e.next=4,Object(W.b)();case 4:e.t0=e.sent;case 5:if(!e.t0){e.next=9;break}delete(r=Object(H.a)({},m))[t],f(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=Object(H.a)({},m),t=window.location.hash.substring(1);if(t)try{new i.d(t),e[t]=void 0}catch(c){o.b.error("Stream doesn't exist. Please double check with the sender.")}var n=function(n){if(e.hasOwnProperty(n)){var r=void 0;try{r=new i.d(n)}catch(c){o.b.error(c.message+n)}r&&a.getAccountInfo(new i.d(n)).then((function(e){var r=Object(H.a)({},m);(null===e||void 0===e?void 0:e.data)?r[n]=Object(W.d)(e.data):(n===t&&o.b.error("Stream doesn't exist. Please double check with the sender."),delete r[n]),f(r)}))}};for(var r in e)n(r)}),[]),Object(r.useEffect)((function(){localStorage.streams=JSON.stringify(m)}),[m]),Object(u.jsxs)("div",{children:[Object(u.jsx)("strong",{className:"text-white text-center text-2xl block",children:"My Streams"}),Object.keys(m).length>0?Object.entries(m).sort((function(e,t){var n=Object(l.a)(e,2)[1];return Object(l.a)(t,2)[1].start-n.start})).map((function(e){var t=Object(l.a)(e,2),r=t[0],a=t[1];return Object(u.jsx)(E,{onStatusUpdate:function(e){return f(Object(H.a)(Object(H.a)({},m),{},Object(R.a)({},r,Object(H.a)(Object(H.a)({},m[r]),{},{status:e}))))},onWithdraw:function(){return function(e){return h.apply(this,arguments)}(r)},onCancel:function(){return function(e){return x.apply(this,arguments)}(r)},id:r,data:a,myAddress:n.publicKey.toBase58(),removeStream:function(){return function(e,t){return p.apply(this,arguments)}(r)}},r)})):Object(u.jsx)(ie,{})]})}function le(){var e=Object(r.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],c=re().selectedWallet;return Object(u.jsxs)("div",{className:"mx-auto grid grid-cols-1 gap-16 max-w-lg xl:grid-cols-2 xl:max-w-5xl",children:[Object(u.jsxs)("div",{className:"mb-8",children:[Object(u.jsx)(N,{visible:n}),Object(u.jsx)(se,{wallet:c,loading:n,setLoading:a}),Object(u.jsx)("hr",{}),Object(u.jsx)(ce,{loading:n,setLoading:a})]}),Object(u.jsx)(oe,{})]})}function ue(e){return Object(u.jsxs)("div",{className:"max-w-md mx-auto",children:[Object(u.jsx)("iframe",{width:"100%",height:270,src:"https://www.youtube-nocookie.com/embed/7HWzcxu-De0",title:"StreamFlow Finance Demo",frameBorder:"0",allowFullScreen:!0,children:"\xa0"}),Object(u.jsx)(P,{className:"font-bold text-2xl my-5",type:"button",onClick:e.action,children:"Connect"})]})}var de=n.p+"static/media/logo.c4294b7c.png";n(166);var be=function(){var e=re(),t=e.selectedWallet,n=e.setSelectedWallet,a=e.urlWallet,c=e.connected,s=e.setConnected,l=e.connection,d=$().setBalance;return Object(r.useEffect)((function(){if(t)return t.on("connect",(function(){s(!0),l.getBalance(t.publicKey).then((function(e){return d(e/i.c)})),o.b.success("Connected to wallet!")})),t.on("disconnect",(function(){s(!1),o.b.info("Disconnected from wallet")})),function(){t.disconnect()}}),[l,t,d,s]),Object(r.useEffect)((function(){n(a)}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)(p,{}),Object(u.jsxs)("div",{className:"mx-auto bg-blend-darken px-4 my-4",children:[Object(u.jsx)(M,{src:de}),c?Object(u.jsx)(le,{}):Object(u.jsx)(ue,{action:function(){return t.connect()}})]}),Object(u.jsx)(o.a,{hideProgressBar:!0,position:"bottom-left",limit:3}),Object(u.jsx)(I,{})]})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(ne,{children:Object(u.jsx)(X,{children:Object(u.jsx)(be,{})})})}),document.getElementById("root")),je()},21:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return x})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return v}));var r=n(10),a=n(4),c=n.n(a),s=n(5),i=n(42),o=n(171),l=n(56),u=n.n(l),d=(n(8),n(38)),b=Object(d.a)((function(e){return{network:Object(s.i)("devnet"),setNetwork:function(t){return e({network:t})}}})),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"publicKey";return c.a.blob(32,e)},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uint64";return c.a.blob(8,e)},f=c.a.struct([m("starttime"),m("endtime"),m("amount"),m("withdrawn"),j("sender"),j("recipient")]);function h(e){var t=f.decode(e),n=Number(i.a.fromBuffer(t.starttime)),a=Number(i.a.fromBuffer(t.endtime)),c=Number(i.a.fromBuffer(t.amount))/s.c,l=Number(i.a.fromBuffer(t.withdrawn))/s.c;return new p(new s.d(t.sender).toBase58(),new s.d(t.recipient).toBase58(),c,n,a,l,function(e,t,n){return n<e?r.m:n<t?r.n:r.l}(Number(n),Number(a),Object(o.a)(new Date)))}function x(e,t){var n=b.getState().network,r=function(e){var t=e.match(/https:\/\/api\.(.*)\.solana\.com/);return t?t[1]:null}(n)||"custom&customUrl=".concat(n);return"https://explorer.solana.com/".concat(e,"/").concat(t,"?cluster=").concat(r)}function p(e,t,n,a,c,s,i,o){this.sender=e,this.receiver=t,this.amount=n,this.start=a,this.end=c,this.withdrawn=s||0,this.status=o?r.j:i||r.m,this.canceled_at=o}function O(){return u()({text:"Are you sure?",icon:"warning",buttons:!0})}function g(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function v(e){var t=window.location.origin+"#"+e;u()({button:"Copy Stream URL",icon:"success",title:"Stream created!",content:{element:"a",attributes:{className:"text-primary block truncate max-w-full",href:t,target:"_blank",innerHTML:t}}}).then((function(e){e&&(g(t),u()("Link copied to clipboard!","Send it to the recipient!","success"))}))}},39:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2),a=n.n(r),c=n(6),s=n(20),i=(n(5),n(27)),o=n(3);function l(e){var t=e.url,n=e.urlText,r=e.nonUrlText;return Object(o.jsxs)("span",{children:[r,Object(o.jsx)("br",{}),Object(o.jsxs)("a",{className:"font-bold",href:t,rel:"noopener noreferrer",target:"_blank",children:[n,Object(o.jsx)(i.c,{className:"ml-1 w-4 h-4 inline"})]})]})}n(35);var u=n(10),d=n(21);function b(e,t,n,r,a,c){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t,n,r,c,i,b){var j,m,f,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getRecentBlockhash();case 3:return n.recentBlockhash=e.sent.blockhash,s.b.info("Please confirm transaction in your wallet.",{autoClose:15e3}),n.feePayer=c.publicKey,t===u.e&&n.partialSign(b),e.next=9,c.signTransaction(n);case 9:return j=e.sent,e.next=12,r.sendRawTransaction(j.serialize());case 12:return m=e.sent,s.b.dismiss(),s.b.info("Submitted transaction. Awaiting confirmation...",{autoClose:15e3}),f=u.p,e.next=18,r.confirmTransaction(m,f);case 18:return h=Object(d.e)("tx",m),s.b.dismiss(),s.b.success(Object(o.jsx)(l,{url:h,urlText:"View on explorer",nonUrlText:"Transaction ".concat(f,"!")+(f===u.p?" Please allow it some time to finalize.":"")}),{autoClose:2e4,closeOnClick:!1}),e.abrupt("return",!0);case 24:return e.prev=24,e.t0=e.catch(0),console.warn(e.t0),s.b.error("Error: "+e.t0.message),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[0,24]])})))).apply(this,arguments)}},91:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n(2),a=n.n(r),c=n(6),s=n(5),i=n(4),o=n.n(i),l=n(10),u=(n(21),n(39));n(35);function d(e,t,n,r,a){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t,n,r,c,i){var o,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=j(t,i.publicKey),d=(new s.g).add(o),e.next=4,Object(u.a)(l.e,d,n,r,c,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){var n=e.sender,r=e.receiver;return new s.h({keys:[{pubkey:new s.d(n),isSigner:!0,isWritable:!0},{pubkey:new s.d(r),isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!0,isWritable:!0},{pubkey:s.f.programId,isSigner:!1,isWritable:!1}],programId:new s.d(l.g),data:m(e)})}function m(t){var n=t.amount,r=t.start,a=t.end,c=o.a.struct([o.a.u8("instruction"),o.a.u32("start"),o.a.u32("end"),o.a.nu64("amount")]),i=e.alloc(c.span);return c.encode({instruction:l.e,start:r,end:a,amount:Math.trunc(n*s.c)},i),i}}).call(this,n(8).Buffer)},92:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n(2),a=n.n(r),c=n(6),s=n(4),i=n.n(s),o=n(10),l=n(5),u=(n(21),n(39));n(35);function d(e,t,n,r,a){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t,n,r,c,s){var i,d,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.receiver,d=j(t,i),b=(new l.g).add(d),e.next=5,Object(u.a)(o.f,b,r,c,s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return new l.h({keys:[{pubkey:new l.d(t),isSigner:!0,isWritable:!0},{pubkey:new l.d(e),isSigner:!1,isWritable:!0},{pubkey:new l.d(o.i),isSigner:!1,isWritable:!0},{pubkey:l.f.programId,isSigner:!1,isWritable:!1}],programId:new l.d(o.g),data:m()})}function m(){var t=i.a.struct([i.a.u8("instruction"),i.a.nu64("amount")]),n=e.alloc(t.span);return t.encode({instruction:o.f,amount:0},n),n}}).call(this,n(8).Buffer)},93:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d}));var r=n(2),a=n.n(r),c=n(6),s=n(4),i=n.n(s),o=n(10),l=n(5),u=(n(21),n(39));n(35);function d(e,t,n,r,a){return b.apply(this,arguments)}function b(){return(b=Object(c.a)(a.a.mark((function e(t,n,r,c,s){var i,d,b,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.sender,d=n.receiver,b=j(t,i,d),m=(new l.g).add(b),e.next=5,Object(u.a)(o.d,m,r,c,s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){return new l.h({keys:[{pubkey:new l.d(t),isSigner:!0,isWritable:!0},{pubkey:new l.d(n),isSigner:!1,isWritable:!0},{pubkey:new l.d(e),isSigner:!1,isWritable:!0},{pubkey:l.f.programId,isSigner:!1,isWritable:!1}],programId:new l.d(o.g),data:m()})}function m(){var t=i.a.struct([i.a.u8("instruction")]),n=e.alloc(t.span);return t.encode({instruction:o.d},n),n}}).call(this,n(8).Buffer)}},[[167,1,2]]]);
//# sourceMappingURL=main.6bfadc62.chunk.js.map