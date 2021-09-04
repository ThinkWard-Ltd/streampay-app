(this["webpackJsonpstreamflow-app"]=this["webpackJsonpstreamflow-app"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t){},109:function(e,t){},125:function(e,t){},145:function(e,t){},146:function(e,t){},166:function(e,t){},169:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(49),s=n.n(c),i=(n(104),n(5)),o=n(23),u=n(13),l=n(3);function d(e){return Object(l.jsxs)("div",{className:"col-span-full",children:[Object(l.jsx)("label",{htmlFor:"account",className:"block font-medium text-gray-100",children:"Recipient Account"}),Object(l.jsx)("div",{className:"mt-1",children:Object(l.jsx)("input",{type:"text",name:"account",id:"account",defaultValue:e.value,onChange:function(t){return e.onChange(t.target.value)},pattern:"[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{43,44}",className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"Please double check the address","aria-describedby":"account-description",required:!0})})]})}function b(){return Object(l.jsxs)("div",{className:"col-span-2 sm:col-span-1",children:[Object(l.jsx)("label",{htmlFor:"token",className:"block font-medium text-gray-100",children:"Token"}),Object(l.jsxs)("select",{id:"token",name:"token",className:"mt-1 text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",defaultValue:"SOL",children:[Object(l.jsx)("option",{children:"SOL"}),Object(l.jsx)("option",{disabled:!0,children:"ETH - Coming soon\ufe0f\u2122"}),Object(l.jsx)("option",{disabled:!0,children:"BTC - Coming soon\u2122"}),Object(l.jsx)("option",{disabled:!0,children:"USDC - Coming soon\u2122"}),Object(l.jsx)("option",{disabled:!0,children:"Other tokens..."})]})]})}var j=n(172),m=n(173),f=n(8),p=Object(r.createContext)(void 0);function x(e){var t=new Date,n=Object(r.useState)(void 0),a=Object(u.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(void 0),o=Object(u.a)(i,2),d=o[0],b=o[1],m=Object(r.useState)(Object(j.a)(t,f.b)),x=Object(u.a)(m,2),O=x[0],h=x[1],g=Object(r.useState)(""),v=Object(u.a)(g,2),y=v[0],w=v[1],k=Object(r.useState)(O),N=Object(u.a)(k,2),S=N[0],C=N[1],D=Object(r.useState)(""),T=Object(u.a)(D,2),B=T[0],F=T[1];return Object(l.jsx)(p.Provider,{value:{amount:c,setAmount:s,receiver:d,setReceiver:b,startDate:O,setStartDate:h,startTime:y,setStartTime:w,endDate:S,setEndDate:C,endTime:B,setEndTime:F},children:e.children})}function O(){return Object(r.useContext)(p)}function h(e){var t=e.title,n=e.date,r=e.updateDate,a=e.time,c=e.updateTime,s=O(),i=s.startDate,o=s.startTime;function u(){var e=Object(j.a)(Object(m.a)(new Date,{minutes:1}),f.p);if(t===f.c){var s=i?new Date(i+f.q):new Date;(!i||!n||n<i)&&r(Object(j.a)(s,f.b)),i&&i===n&&a<=o?c(Object(j.a)(Object(m.a)(new Date(i+"T"+o),{minutes:5}),f.p)):o||c(e)}else(!a||a<e)&&c(e)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"col-span-3 sm:col-span-1",children:[Object(l.jsxs)("label",{htmlFor:t,className:"block font-medium text-gray-100 capitalize",children:[t," Date"]}),Object(l.jsx)("div",{className:"mt-1",children:Object(l.jsx)("input",{type:"date",name:t,id:t,value:n,min:t===f.c&&i?Object(j.a)(new Date(i+f.q),f.b):Object(j.a)(new Date,f.b),max:Object(j.a)(Object(m.a)(new Date,{years:1}),f.b),onFocus:u,onClick:u,onChange:function(e){return r(e.target.value)},className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"","aria-describedby":t+"-description",required:!0})})]}),Object(l.jsxs)("div",{className:"col-span-2 sm:col-span-1",children:[Object(l.jsxs)("label",{htmlFor:t+"_time",className:"block font-medium text-gray-100 capitalize",children:[t," time"]}),Object(l.jsx)("div",{className:"mt-1",children:Object(l.jsx)("input",{type:"time",name:t+"_time",id:t+"_time",value:a,onFocus:u,onClick:u,onChange:function(e){return c(e.target.value)},className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",placeholder:"","aria-describedby":t+"_time-description",required:!0})})]})]})}function g(e){return Object(l.jsxs)("div",{className:"col-span-3 sm:col-span-1",children:[Object(l.jsx)("label",{htmlFor:"amount",className:"block font-medium text-gray-100",children:"Amount"}),Object(l.jsx)("div",{className:"mt-1",children:Object(l.jsx)("input",{step:"any",autoFocus:!0,type:"number",name:"amount",id:"amount",defaultValue:e.value,onChange:function(t){return e.onChange(t.target.value)},className:"text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",min:0,max:e.max||Number.MAX_SAFE_INTEGER,placeholder:"0.00","aria-describedby":"amount-description",required:!0})})]})}function v(e){return Object(l.jsx)("div",{className:"fixed top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-90 z-10 ".concat(e.visible?"block":"hidden"),children:Object(l.jsx)("div",{className:"loader",children:" "})})}function y(e){var t=e.type,n=e.color;return Object(l.jsx)("div",{className:"inline",children:Object(l.jsxs)("span",{className:"align-top px-2.5 py-0.5 rounded-full text-xs font-medium bg-".concat(n,"-100 text-").concat(n,"-800 capitalize"),children:[Object(l.jsx)("svg",{className:"mr-1 -ml-1 inline align-baseline h-2 w-2 text-".concat(n,"-400"),fill:"currentColor",viewBox:"0 0 8 8",children:Object(l.jsx)("circle",{cx:4,cy:4,r:3})}),t]})})}function w(e){var t=e.title,n=e.action,r=e.color;return Object(l.jsx)("button",{onClick:n,className:"rounded-md text-sm bg-".concat(r,"-500 hover:bg-").concat(r,"-700 active:bg-").concat(r,"-900 text-white py-1 px-2"),children:t})}var k=n(170),N=n(171);function S(e){return Object(l.jsxs)("dt",{className:"col-span-full text-center",children:[Object(j.a)(Object(N.a)(e.start),"yyyy-MM-dd HH:mm")," \u2013 ",Object(j.a)(Object(N.a)(e.end),"yyyy-MM-dd HH:mm")]})}var C=Object(r.memo)(S);function D(e){var t=e.title,n=e.value,r=e.max,a=e.rtl;return n=Number(n).toFixed(2),r=Number(r).toFixed(2),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("dt",{children:t}),Object(l.jsx)("div",{className:"rounded-sm h-3 bg-gray-900 w-full my-auto",children:Object(l.jsx)("div",{className:"max-w-full bg-gradient-to-r from-primary to-secondary rounded-sm h-full "+(a?"float-right":""),style:{width:n/r*100+"%"}})}),Object(l.jsxs)("label",{className:"ml-2 text-right truncate",children:["\u25ce",n,Object(l.jsxs)("small",{className:"text-gray-400",children:["/",r]})]})]})}var T=n(22),B=n(28);function F(e){var t=e.data,n=t.start,a=t.end,c=t.withdrawn,s=t.amount,i=t.receiver,o=t.sender,d=t.status,b=e.myAddress,j=e.removeStream,m=e.onStatusUpdate,p=e.onCancel,x=e.onWithdraw,O=e.id,h=f.l[d],g=Object(r.useState)(W(n,a,s)),v=Object(u.a)(g,2),N=v[0],S=v[1],F=Object(r.useState)(N-c),I=Object(u.a)(F,2),E=I[0],A=I[1],M=(d===f.o||d===f.m&&c<s)&&b===i,U=(d===f.o||d===f.n)&&b===o;return Object(r.useEffect)((function(){var e=setInterval((function(){S(W(n,a,s)),A(N-c);var e=function(e,t,n){var r=Object(k.a)(new Date);return e===f.n&&r>=t?f.o:e===f.o&&r>=n?f.m:e}(d,n,a);e!==d&&m(e)}),1e3);return function(){return clearInterval(e)}})),Object(l.jsxs)("dl",{className:"text-white my-4 grid gap-y-4 gap-x-2 grid-cols-3 p-4 bg-".concat(h,"-300 bg-opacity-10 hover:bg-opacity-20 shadow rounded-lg"),children:[Object(l.jsxs)("div",{className:"col-span-full",children:[Object(l.jsx)(y,{className:"inline",type:d,color:h}),Object(l.jsx)("button",{onClick:j,className:"p-1.5 h-6 w-6 float-right align-top rounded-sm hover:bg-".concat(h,"-100 focus:outline-none focus:ring-1"),children:Object(l.jsx)(B.d,{className:"float-right w-3 h-3"})})]}),Object(l.jsx)(C,{start:n,end:a}),Object(l.jsx)(H,{url:Object(T.e)(f.d,O),title:"ID"}),Object(l.jsx)(R,{address:O,className:"col-span-2 text-sm text-gray-400"}),Object(l.jsx)(H,{url:Object(T.e)(f.d,i),title:"Recipient"}),Object(l.jsx)(R,{address:i,className:"col-span-2 text-sm text-gray-400"}),Object(l.jsx)(D,{title:"Withdrawn",value:c,max:s}),d===f.k&&Object(l.jsx)(D,{title:"Returned",value:s-c,max:s,rtl:!0}),d!==f.k&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(D,{title:"Streamed",value:N,max:s}),M&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("dt",{children:["Available",Object(l.jsx)("br",{}),Object(l.jsx)("sup",{className:"text-xs text-gray-300 align-top",children:"for withdrawal"})]}),Object(l.jsxs)("dd",{className:"col-span-2",children:["\u25ce",E.toFixed(2)]}),Object(l.jsx)(w,{title:"Withdraw",action:x,color:f.l[f.o]})]}),U&&Object(l.jsx)(w,{title:"Cancel",action:p,color:f.l[f.k]})]})]})}function W(e,t,n,r){return(r=r||Object(k.a)(new Date))<e?0:r>t?n:(r-e)/(t-e)*n}function I(){return Object(l.jsxs)("footer",{className:"mt-40 mb-4 text-center text-sm font-mono text-gray-400",children:[Object(l.jsx)("img",{src:"https://solana.com/branding/horizontal/logo-horizontal-gradient-dark.png",className:"w-40 mx-auto my-2",alt:"Solana logo",loading:"lazy"}),Object(l.jsxs)("small",{children:[Object(l.jsx)(H,{url:"https://streamflow.finance",title:"StreamFlow",hideIcon:!0}),"@ ",Object(l.jsx)(H,{url:"https://solana.com/solanaszn",title:"SolanaSZN",hideIcon:!0})]})]})}function E(e){return Object(l.jsxs)("div",{className:"mb-8 text-white",children:[Object(l.jsx)("img",{src:e.src,alt:"StreamFlow Finance logo",className:"w-24 mx-auto"}),Object(l.jsxs)("h1",{className:"text-6xl text-center",children:["Stream",Object(l.jsx)("strong",{children:"Flow"})]})]})}var A=n(10),M=n(54),U=["children","className"];function K(e){var t=e.children,n=e.className,r=Object(M.a)(e,U);return Object(l.jsx)("button",Object(A.a)(Object(A.a)({className:"block mx-auto px-8 py-4 bg-gradient-to-br from-primary via-primary to-secondary border-transparent font-medium rounded shadow-sm text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary "+n},r),{},{children:t}))}function H(e){var t=e.url,n=e.title,r=e.className,a=e.hideIcon||Object(l.jsx)("sup",{children:Object(l.jsx)(B.c,{className:"w-3 h-3 inline"})});return Object(l.jsx)("strong",{className:"text-gray-300 hover:text-white "+r,children:Object(l.jsxs)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:[n||t," ",a]})})}function R(e){var t=e.address,n=e.className,a="h-4 inline mr-1 cursor-pointer hover:opacity-80 align-text-bottom ",c=Object(r.useState)(!1),s=Object(u.a)(c,2),i=s[0],o=s[1];return Object(l.jsxs)("span",{className:"block truncate "+n,children:[i?Object(l.jsxs)("span",{className:"text-green-300 mr-1",children:[Object(l.jsx)(B.a,{className:a}),Object(l.jsx)("small",{children:"Copied!"})]}):Object(l.jsx)(B.b,{className:a,onClick:function(){Object(T.c)(t),o(!0),setTimeout((function(){o(!1)}),1e3)}}),t]})}var z=n(2),P=n.n(z),q=n(20),V=n(11),_=n(6),L=n(92),Z=n(93),G=n(94),X=n(39),J=Object(X.a)((function(e){return{balance:0,setBalance:function(t){return e({balance:t})}}})),Y=n(36),Q=n(18),$=Object(r.createContext)(void 0),ee=function(e){return e.clusterUrl()};function te(e){var t=Object(Q.e)(ee),n=Object(r.useState)(f.h),a=Object(u.a)(n,1)[0],c=Object(r.useState)(void 0),s=Object(u.a)(c,2),o=s[0],d=s[1],b=Object(r.useState)(!1),j=Object(u.a)(b,2),m=j[0],p=j[1],x=Object(r.useMemo)((function(){return new i.a(t)}),[t]),O=Object(r.useMemo)((function(){return new Y.a(a,t)}),[a,t]);return Object(l.jsx)($.Provider,{value:{providerUrl:a,selectedWallet:o,setSelectedWallet:d,connected:m,setConnected:p,connection:x,urlWallet:O},children:e.children})}function ne(){return Object(r.useContext)($)}var re=Object(X.a)((function(e){return{streams:localStorage.streams?JSON.parse(localStorage.streams):{},setStreams:function(t){return e({streams:t})}}})),ae=function(e){return e.cluster};function ce(e){var t=e.loading,n=e.setLoading,r=i.b.generate(),a=O(),c=a.amount,s=a.setAmount,o=a.receiver,u=a.setReceiver,j=a.startDate,m=a.setStartDate,p=a.startTime,x=a.setStartTime,v=a.endDate,y=a.setEndDate,w=a.endTime,N=a.setEndTime,S=ne(),C=S.connection,D=S.selectedWallet,B=Object(Q.e)(ae),F=J(),W=F.balance,I=F.setBalance,E=re(),M=E.streams,U=E.setStreams;function H(e){var t,n=e.name,r=e.value,a="";switch(n){case"start":a=(t=new Date(r+f.q))<new Date((new Date).toDateString())?"Cannot start the stream in the past.":"";break;case"start_time":a=(t=new Date(j+"T"+r))<new Date?"Cannot start the stream in the past.":"";break;case"end":a=new Date(r+f.q)<new Date(j+f.q)?"Umm... end date before the start date?":"";break;case"end_time":t=new Date(j+"T"+p),a=new Date(v+"T"+r)<t?"Err... end time before the start time?":""}e.setCustomValidity(a)}function R(){return z.apply(this,arguments)}function z(){return(z=Object(_.a)(P.a.mark((function e(){var t,a,s,u,l,d,b,m;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.getElementById("form"),a=Object(V.a)(t.elements);try{for(a.s();!(s=a.n()).done;)H(s.value)}catch(f){a.e(f)}finally{a.f()}if(t.checkValidity()){e.next=6;break}return t.reportValidity(),e.abrupt("return",!1);case 6:return u=Object(k.a)(new Date(j+"T"+p)),(l=Object(k.a)(new Date(v+"T"+w)))===u&&(l=u+1),n(!0),d=new T.a(D.publicKey.toBase58(),o,c,u,l),e.next=13,Object(L.a)(d,C,D,B,r);case 13:if(b=e.sent,n(!1),!b){e.next=22;break}return Object(T.f)(r.publicKey.toBase58()),e.next=19,C.getMinimumBalanceForRentExemption(96);case 19:m=e.sent,I(W-c-m/i.c),U(Object(A.a)(Object(A.a)({},M),{},Object(q.a)({},r.publicKey.toBase58(),d)));case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.jsxs)("form",{onSubmit:R,id:"form",children:[Object(l.jsxs)("div",{className:"my-4 grid gap-4 grid-cols-5 sm:grid-cols-2",children:[Object(l.jsx)(g,{onChange:s,value:c,max:W}),Object(l.jsx)(b,{}),Object(l.jsx)(d,{onChange:u,value:o}),Object(l.jsx)(h,{title:f.i,date:j,updateDate:m,time:p,updateTime:x}),Object(l.jsx)(h,{title:f.c,date:v,updateDate:y,time:w,updateTime:N})]}),Object(l.jsx)(K,{className:"font-bold text-2xl my-5",onClick:R,type:"button",disabled:t,children:"Stream!"})]})}var se=function(e){return e.cluster===Q.c};function ie(e){var t=e.wallet,n=e.loading,a=e.setLoading,c=Object(r.useState)(void 0),s=Object(u.a)(c,2),d=s[0],b=s[1],j=J(),m=j.balance,p=j.setBalance,x=ne(),O=x.connection,h=x.selectedWallet,g=Object(Q.e)(se);function v(){return(v=Object(_.a)(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,O.requestAirdrop(h.publicKey,f.a*i.c);case 3:t=e.sent,b(t),a(!1),o.b.success("Airdrop requested!");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){d&&O.confirmTransaction(d,f.r).then((function(e){e.value.err?o.b.error("Airdrop failed!"):(p(m+f.a),o.b.success("Airdrop confirmed. Balance updated!"))}))}),[d]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"mb-4 text-white",children:[Object(l.jsx)(H,{url:Object(T.e)("address",t.publicKey.toBase58()),title:"My Wallet Address"}),Object(l.jsx)(R,{address:t.publicKey.toBase58(),className:"block truncate"})]}),Object(l.jsxs)("div",{className:"mb-4 clearfix text-white",children:[Object(l.jsx)("strong",{className:"block",children:"Balance"}),Object(l.jsxs)("span",{children:["\u25ce",Number(m).toFixed(4)]}),Object(l.jsx)("button",{type:"button",onClick:function(){return t.disconnect()},className:"float-right items-center px-2.5 py-1.5 shadow-sm text-xs  font-medium rounded bg-gray-500 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",children:"Disconnect"}),Object(l.jsx)(K,{type:"button",onClick:function(){return v.apply(this,arguments)},className:"float-right mr-2 px-2.5 py-1.5 text-xs my-0 rounded active:bg-white"+(g?" hidden":""),disabled:n,children:"Airdrop"})]})]})}var oe=function(e){return[e.cluster,e.setCluster]};function ue(){var e=Object(Q.e)(oe),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("select",{id:"cluster",name:"cluster",className:"mt-1 text-white bg-gray-800 border-primary block w-full border-black rounded-md focus:ring-secondary focus:border-secondary",defaultValue:n,onChange:function(e){return r(e.target.value)},children:[Object(l.jsxs)("option",{value:Q.c,disabled:!0,children:[Q.c," \u2014 soon\u2122"]}),Object(l.jsx)("option",{value:Q.a,children:Q.a}),Object(l.jsx)("option",{value:Q.d,children:Q.d}),Object(l.jsx)("option",{value:Q.b,hidden:!0,children:Q.b})]})}var le=n(14),de=n(16),be=n(24),je=n(25);r.Component;function me(){return Object(l.jsxs)("div",{className:"mx-auto my-10 text-white text-center",children:[Object(l.jsx)("span",{children:"Your streams will appear here."}),Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"Start streaming!"})]})}var fe=function(e){return e.cluster};function pe(){var e=ne(),t=e.selectedWallet,n=e.connection,a=Object(Q.e)(fe),c=J(),s=c.balance,d=c.setBalance,b=re((function(e){return[e.streams,e.setStreams]})),j=Object(u.a)(b,2),m=j[0],p=j[1];function x(){return(x=Object(_.a)(P.a.mark((function e(r){var c,o,u,l,b,j,x;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=m[r],o=c.start,u=c.end,l=c.amount,e.next=3,Object(Z.a)(r,m[r],n,t,a);case 3:if(!e.sent){e.next=18;break}return b=W(o,u,l),d(s+b),p(Object(A.a)(Object(A.a)({},m),{},Object(q.a)({},r,Object(A.a)(Object(A.a)({},m[r]),{},{withdrawn:b})))),e.next=10,n.getBalance(t.publicKey,f.s);case 10:return e.t0=e.sent,e.t1=i.c,j=e.t0/e.t1,e.next=15,n.getAccountInfo(new i.d(r));case 15:x=e.sent,d(j),p(Object(A.a)(Object(A.a)({},m),{},Object(q.a)({},r,Object(T.d)(x.data))));case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(_.a)(P.a.mark((function e(r){var c,o,u,l,b,j,x;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=m[r],o=c.amount,u=c.withdrawn,l=new Date,b=s,e.next=5,Object(G.a)(r,m[r],n,t,a);case 5:if(!e.sent){e.next=15;break}return e.next=9,n.getBalance(t.publicKey);case 9:e.t0=e.sent,e.t1=i.c,j=e.t0/e.t1,x=o-(j-b),d(s+o-u),p(Object(A.a)(Object(A.a)({},m),{},Object(q.a)({},r,Object(A.a)(Object(A.a)({},m[r]),{},{withdrawn:x,canceled_at:Object(k.a)(l),status:f.k}))));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(_.a)(P.a.mark((function e(t,n){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!n,!e.t0){e.next=5;break}return e.next=4,Object(T.b)();case 4:e.t0=e.sent;case 5:if(!e.t0){e.next=9;break}delete(r=Object(A.a)({},m))[t],p(r);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=Object(A.a)({},m),t=window.location.hash.substring(1);if(t)try{new i.d(t),e[t]=void 0}catch(c){o.b.error("Stream doesn't exist. Please double check with the sender.")}var r=function(r){if(e.hasOwnProperty(r)){var a=void 0;try{a=new i.d(r)}catch(c){o.b.error(c.message+r)}a&&n.getAccountInfo(new i.d(r)).then((function(e){var n=Object(A.a)({},m);(null===e||void 0===e?void 0:e.data)?n[r]=Object(T.d)(e.data):(r===t&&o.b.error("Stream doesn't exist. Please double check with the sender."),delete n[r]),p(n)}))}};for(var a in e)r(a)}),[]),Object(r.useEffect)((function(){localStorage.streams=JSON.stringify(m)}),[m]),Object(l.jsxs)("div",{children:[Object(l.jsx)("strong",{className:"text-white text-center text-2xl block",children:"My Streams"}),Object.keys(m).length>0?Object.entries(m).sort((function(e,t){var n=Object(u.a)(e,2)[1];return Object(u.a)(t,2)[1].start-n.start})).map((function(e){var n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(l.jsx)(F,{onStatusUpdate:function(e){return p(Object(A.a)(Object(A.a)({},m),{},Object(q.a)({},r,Object(A.a)(Object(A.a)({},m[r]),{},{status:e}))))},onWithdraw:function(){return function(e){return x.apply(this,arguments)}(r)},onCancel:function(){return function(e){return O.apply(this,arguments)}(r)},id:r,data:a,myAddress:t.publicKey.toBase58(),removeStream:function(){return function(e,t){return h.apply(this,arguments)}(r)}},r)})):Object(l.jsx)(me,{})]})}function xe(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=ne().selectedWallet;return Object(l.jsxs)("div",{className:"mx-auto grid grid-cols-1 gap-16 max-w-lg xl:grid-cols-2 xl:max-w-5xl",children:[Object(l.jsxs)("div",{className:"mb-8",children:[Object(l.jsx)(v,{visible:n}),Object(l.jsx)(ie,{wallet:c,loading:n,setLoading:a}),Object(l.jsx)("hr",{}),Object(l.jsx)(ce,{loading:n,setLoading:a})]}),Object(l.jsx)(pe,{})]})}function Oe(e){return Object(l.jsxs)("div",{className:"max-w-md mx-auto",children:[Object(l.jsx)("iframe",{width:"100%",height:270,src:"https://www.youtube-nocookie.com/embed/7HWzcxu-De0",title:"StreamFlow Finance Demo",frameBorder:"0",allowFullScreen:!0,children:"\xa0"}),Object(l.jsx)(K,{className:"font-bold text-2xl my-5",type:"button",onClick:e.action,children:"Connect"})]})}var he=n.p+"static/media/logo.c4294b7c.png",ge=(n(168),function(e,t){return e?Object(l.jsx)(xe,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"sm:absolute top-0 right-0 p-4",children:Object(l.jsx)(ue,{})}),Object(l.jsx)(Oe,{action:function(){return t.connect()}})]})});var ve=function(){var e=ne(),t=e.selectedWallet,n=e.setSelectedWallet,a=e.urlWallet,c=e.connected,s=e.setConnected,u=e.connection,d=J().setBalance;return Object(r.useEffect)((function(){if(t)return t.on("connect",(function(){s(!0),u.getBalance(t.publicKey).then((function(e){return d(e/i.c)})),o.b.success("Connected to wallet!")})),t.on("disconnect",(function(){s(!1),o.b.info("Disconnected from wallet")})),function(){t.disconnect()}}),[u,t,d,s]),Object(r.useEffect)((function(){n(a)}),[n,a]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"mx-auto bg-blend-darken px-4 my-4",children:[Object(l.jsx)(E,{src:he}),ge(c,t)]}),Object(l.jsx)(o.a,{hideProgressBar:!0,position:"bottom-left",limit:3}),Object(l.jsx)(I,{})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(te,{children:Object(l.jsx)(x,{children:Object(l.jsx)(ve,{})})})}),document.getElementById("root"))},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return b}));var r,a,c=n(20),s=n(39),i=n(5),o=n(98),u="local",l="devnet",d="testnet",b="mainnet-beta",j=(r={},Object(c.a)(r,u,(function(){return"http://127.0.0.1:8899"})),Object(c.a)(r,l,(function(){return Object(i.i)(l)})),Object(c.a)(r,d,(function(){return Object(i.i)(d)})),Object(c.a)(r,b,(function(){return Object(i.i)(b)})),r),m=(a={},Object(c.a)(a,u,(function(){return prompt("Program ID?")})),Object(c.a)(a,l,(function(){return"8tQZMH3NWtoiNDYwTpSZ3GVrRKbMVi2S5Xjy6UcbG5rR"})),Object(c.a)(a,d,(function(){return"8tQZMH3NWtoiNDYwTpSZ3GVrRKbMVi2S5Xjy6UcbG5rR"})),Object(c.a)(a,b,(function(){return null})),a),f=Object(s.a)(Object(o.devtools)((function(e,t){return{cluster:localStorage.cluster||l,programId:m[localStorage.cluster||l](),clusterUrl:function(){return j[t().cluster]()},explorerUrl:function(){var e=t().cluster;return e===u?"custom&customUrl=".concat(encodeURIComponent(t().clusterUrl)):e},setCluster:function(t){var n=m[t]();e(n?{cluster:t,programId:n}:{cluster:l,programId:m[l]()})}}})));window.addEventListener("beforeunload",(function(){var e=f.getState();localStorage.cluster=e.cluster,localStorage.programId=e.programId})),t.e=f},22:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return g}));var r=n(8),a=n(4),c=n.n(a),s=n(5),i=n(43),o=n(170),u=n(57),l=n.n(u),d=(n(9),n(18)),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"publicKey";return c.a.blob(32,e)},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uint64";return c.a.blob(8,e)},m=c.a.struct([j("starttime"),j("endtime"),j("amount"),j("withdrawn"),b("sender"),b("recipient")]);function f(e){var t=m.decode(e),n=Number(i.a.fromBuffer(t.starttime)),a=Number(i.a.fromBuffer(t.endtime)),c=Number(i.a.fromBuffer(t.amount))/s.c,u=Number(i.a.fromBuffer(t.withdrawn))/s.c;return new x(new s.d(t.sender).toBase58(),new s.d(t.recipient).toBase58(),c,n,a,u,function(e,t,n){return n<e?r.n:n<t?r.o:r.m}(Number(n),Number(a),Object(o.a)(new Date)))}function p(e,t){return"https://explorer.solana.com/".concat(e,"/").concat(t,"?cluster=").concat(d.e.getState().explorerUrl())}function x(e,t,n,a,c,s,i,o){this.sender=e,this.receiver=t,this.amount=n,this.start=a,this.end=c,this.withdrawn=s||0,this.status=o?r.k:i||r.n,this.canceled_at=o}function O(){return l()({text:"Are you sure?",icon:"warning",buttons:!0})}function h(e){var t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function g(e){var t=window.location.origin+"#"+e;l()({button:"Copy Stream URL",icon:"success",title:"Stream created!",content:{element:"a",attributes:{className:"text-primary block truncate max-w-full",href:t,target:"_blank",innerHTML:t}}}).then((function(e){e&&(h(t),l()("Link copied to clipboard!","Send it to the recipient!","success"))}))}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2),a=n.n(r),c=n(6),s=n(23),i=(n(5),n(28)),o=n(3);function u(e){var t=e.url,n=e.urlText,r=e.nonUrlText;return Object(o.jsxs)("span",{children:[r,Object(o.jsx)("br",{}),Object(o.jsxs)("a",{className:"font-bold",href:t,rel:"noopener noreferrer",target:"_blank",children:[n,Object(o.jsx)(i.c,{className:"ml-1 w-4 h-4 inline"})]})]})}n(36);var l=n(8),d=n(22);function b(e,t,n,r,a,c){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t,n,r,c,i,b){var j,m,f,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getRecentBlockhash();case 3:return n.recentBlockhash=e.sent.blockhash,s.b.info("Please confirm transaction in your wallet.",{autoClose:15e3}),n.feePayer=c.publicKey,t===l.f&&n.partialSign(b),e.next=9,c.signTransaction(n);case 9:return j=e.sent,e.next=12,r.sendRawTransaction(j.serialize());case 12:return m=e.sent,s.b.dismiss(),s.b.info("Submitted transaction. Awaiting confirmation...",{autoClose:15e3}),f=l.r,e.next=18,r.confirmTransaction(m,f);case 18:return p=Object(d.e)("tx",m),s.b.dismiss(),s.b.success(Object(o.jsx)(u,{url:p,urlText:"View on explorer",nonUrlText:"Transaction ".concat(f,"!")+(f===l.r?" Please allow it few seconds to finalize.":"")}),{autoClose:2e4,closeOnClick:!0}),e.abrupt("return",!0);case 24:return e.prev=24,e.t0=e.catch(0),console.warn(e.t0),s.b.error("Error: "+e.t0.message),e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,null,[[0,24]])})))).apply(this,arguments)}},8:function(e,t,n){"use strict";n.d(t,"j",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"r",(function(){return o})),n.d(t,"s",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return m})),n.d(t,"p",(function(){return f})),n.d(t,"q",(function(){return p})),n.d(t,"i",(function(){return x})),n.d(t,"c",(function(){return O})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return g})),n.d(t,"m",(function(){return v})),n.d(t,"k",(function(){return y})),n.d(t,"l",(function(){return w}));var r,a=n(20),c="DrFtxPb9F6SxpHHHFiEtSNXE3SZCUNLXMaHS6r8pkoz2",s="https://www.sollet.io",i=1,o="confirmed",u="finalized",l=0,d=1,b=2,j="address",m="yyyy-MM-dd",f="HH:mm",p="T00:00",x="start",O="end",h="scheduled",g="streaming",v="complete",y="canceled",w=(r={},Object(a.a)(r,h,"gray"),Object(a.a)(r,g,"green"),Object(a.a)(r,v,"blue"),Object(a.a)(r,y,"red"),r)},92:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b}));var r=n(2),a=n.n(r),c=n(6),s=n(5),i=n(4),o=n.n(i),u=n(8),l=(n(22),n(40)),d=(n(36),n(18));function b(e,t,n,r,a){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t,n,r,c,i){var o,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=m(t,i.publicKey),d=new s.g({feePayer:r.publicKey}).add(o),e.next=4,Object(l.a)(u.f,d,n,r,c,i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){var n=e.sender,r=e.receiver;return new s.h({keys:[{pubkey:new s.d(n),isSigner:!0,isWritable:!0},{pubkey:new s.d(r),isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!0,isWritable:!0},{pubkey:s.f.programId,isSigner:!1,isWritable:!1}],programId:new s.d(d.e.getState().programId),data:f(e)})}function f(t){var n=t.amount,r=t.start,a=t.end,c=o.a.struct([o.a.u8("instruction"),o.a.ns64("start"),o.a.ns64("end"),o.a.nu64("amount")]),i=e.alloc(c.span);return c.encode({instruction:u.f,start:r,end:a,amount:Math.trunc(n*s.c)},i),i}}).call(this,n(9).Buffer)},93:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b}));var r=n(2),a=n.n(r),c=n(6),s=n(4),i=n.n(s),o=n(8),u=n(5),l=(n(22),n(40)),d=(n(36),n(18));function b(e,t,n,r,a){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t,n,r,c,s){var i,d,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.receiver,d=m(t,i),b=(new u.g).add(d),e.next=5,Object(l.a)(o.g,b,r,c,s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return new u.h({keys:[{pubkey:new u.d(t),isSigner:!0,isWritable:!0},{pubkey:new u.d(e),isSigner:!1,isWritable:!0},{pubkey:new u.d(o.j),isSigner:!1,isWritable:!0},{pubkey:u.f.programId,isSigner:!1,isWritable:!1}],programId:new u.d(d.e.getState().programId),data:f()})}function f(){var t=i.a.struct([i.a.u8("instruction"),i.a.nu64("amount")]),n=e.alloc(t.span);return t.encode({instruction:o.g,amount:0},n),n}}).call(this,n(9).Buffer)},94:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b}));var r=n(2),a=n.n(r),c=n(6),s=n(4),i=n.n(s),o=n(8),u=n(5),l=(n(22),n(40)),d=(n(36),n(18));function b(e,t,n,r,a){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t,n,r,c,s){var i,d,b,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.sender,d=n.receiver,b=m(t,i,d),j=(new u.g).add(b),e.next=5,Object(l.a)(o.e,j,r,c,s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return new u.h({keys:[{pubkey:new u.d(t),isSigner:!0,isWritable:!0},{pubkey:new u.d(n),isSigner:!1,isWritable:!0},{pubkey:new u.d(e),isSigner:!1,isWritable:!0},{pubkey:u.f.programId,isSigner:!1,isWritable:!1}],programId:new u.d(d.e.getState().programId),data:f()})}function f(){var t=i.a.struct([i.a.u8("instruction")]),n=e.alloc(t.span);return t.encode({instruction:o.e},n),n}}).call(this,n(9).Buffer)}},[[169,1,2]]]);
//# sourceMappingURL=main.63e917a5.chunk.js.map