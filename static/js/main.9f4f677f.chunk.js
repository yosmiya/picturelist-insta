(this["webpackJsonppicturelist-insta"]=this["webpackJsonppicturelist-insta"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),l=a.n(o),r=(a(86),a(87),a(12)),i=a(148),s=a(149),b=a(150),u=a(5),p=a(18),d=a.n(p),j=a(29),O=a(27),m=a.n(O),h=a(153),g=a(139),f=a(140),v=a(154),C=a(141),k=a(73),x=a(155),w=a(142),y=a(143),S=a(45),E=a(70),I=a.n(E);const W=Object(u.a)({maxWidth:"800"}),T=Object(u.a)({backgroundColor:"red"}),F=Object(u.a)({height:0,paddingTop:"56.25%"}),N=({open:e,onClose:t,postImage:a,onDelete:n})=>{const o=a,l=c.a.useState(null),i=Object(r.a)(l,2),s=i[0],b=i[1];return Object(u.b)(c.a.Fragment,null,Object(u.b)(h.a,{open:e,onClose:t,"aria-labelledby":"form-dialog-title",fullWidth:!0,maxWidth:"sm"},o?Object(u.b)(g.a,{css:W},Object(u.b)(f.a,{avatar:Object(u.b)(v.a,{"aria-label":"recipe",css:T},o.id),action:Object(u.b)(c.a.Fragment,null,Object(u.b)(C.a,{"aria-label":"settings",onClick:e=>{b(e.currentTarget)}},Object(u.b)(I.a,null)),Object(u.b)(k.a,{id:"simple-menu",anchorEl:s,keepMounted:!0,open:Boolean(s),onClose:()=>{b(null)}},Object(u.b)(x.a,{onClick:n},"\u524a\u9664"))),title:o.title,subheader:o.user.name}),Object(u.b)(w.a,{css:F,image:"http://localhost:3001/images/".concat(o.url),title:"image"}),Object(u.b)(y.a,null,Object(u.b)(S.a,{variant:"body2",color:"textSecondary",component:"p"},o.caption))):Object(u.b)("span",null,"\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093\u3002")))},P=Object(n.createContext)({proc:!1,setIsProc:()=>{}});var D=({open:e,onClose:t,postImage:a})=>{const o=Object(n.useContext)(P);return a?c.a.createElement(N,{open:e,onClose:t,postImage:a,onDelete:()=>{if(a&&null!==a.id){(function(){var e=Object(j.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={postId:a.id,postUrl:a.url},e.next=4,m.a.delete("http://localhost:3001/api/photo/delete",{data:n});case 4:o.setIsProc(!o.proc),t(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}}}):c.a.createElement("div",null)},M=a(71),B=a(146),L=a(147),J=a(72),q=a.n(J),z=a(144),G=a(145),H=a(151);const U=Object(u.a)({alignItems:"center",display:"flex",flexDirection:"column"}),V=Object(u.a)({marginTop:"8px",width:"100%"}),$=Object(u.a)({margin:"24px 0 16px 0"}),A=Object(u.a)({display:"none"}),K=({open:e,onClose:t,onChangeTitle:a,onChangeCaption:n,onChangeFile:o,onSubmit:l,uploadFile:r})=>{const i=c.a.useCallback(e=>a&&a(e.currentTarget.value),[a]),s=c.a.useCallback(e=>n&&n(e.currentTarget.value),[n]),b=c.a.useCallback(e=>o&&o(e.target.files),[o]),p=c.a.useCallback(()=>l&&l(),[l]);return Object(u.b)(h.a,{open:e,onClose:t,"aria-labelledby":"form-dialog-title"},Object(u.b)(z.a,null,Object(u.b)("div",{css:U},Object(u.b)(S.a,{component:"h2",variant:"h6"},"\u30d5\u30a1\u30a4\u30eb\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9"),Object(u.b)("form",{css:V,noValidate:!0},Object(u.b)("input",{accept:"image/*",css:A,id:"contained-button-file",type:"file",onChange:b}),Object(u.b)("label",{htmlFor:"contained-button-file"},Object(u.b)(G.a,{variant:"contained",color:"default",component:"span"},"\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e")),Object(u.b)(S.a,{variant:"caption"},r.fileName),Object(u.b)(H.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"title",label:"\u30bf\u30a4\u30c8\u30eb",name:"title",inputProps:{maxLength:20},onChange:i}),Object(u.b)(H.a,{variant:"outlined",margin:"normal",fullWidth:!0,multiline:!0,rows:4,id:"caption",label:"\u5199\u771f\u306e\u8aac\u660e",name:"caption",inputProps:{maxLength:200},onChange:s}),Object(u.b)(G.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",css:$,onClick:p},"\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9")))))},Q=({open:e,onClose:t})=>{const a=Object(n.useState)({fileName:""}),o=Object(r.a)(a,2),l=o[0],i=o[1],s=Object(n.useState)(""),b=Object(r.a)(s,2),u=b[0],p=b[1],O=Object(n.useState)(""),h=Object(r.a)(O,2),g=h[0],f=h[1],v=Object(n.useState)(),C=Object(r.a)(v,2),k=C[0],x=C[1],w=Object(n.useContext)(P);return c.a.createElement(K,{open:e,onClose:t,onChangeTitle:e=>{p(e)},onChangeCaption:e=>{f(e)},onChangeFile:e=>{null!==e&&(x(e[0]),i({fileName:e[0].name}))},onSubmit:()=>{if(null!==k&&void 0!==k){i({fileName:k.name}),function(){var e=Object(j.a)(d.a.mark((function e(){var a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(a=new FormData).append("image",k),e.next=5,m.a.post("http://localhost:3001/api/photo/uploadtest",a);case 5:return n=l.fileName,c={url:n,title:u,caption:g},e.next=9,m.a.post("http://localhost:3001/api/photo/upload",c);case 9:w.setIsProc(!w.proc),i({fileName:""}),t(),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}()()}},uploadFile:l})};function R(){const e=Object(M.a)(["\n\n  display: none;\n  flex-grow: 1;\n\n  @media (min-width: 600px) {\n    display: block;\n  }\n"]);return R=function(){return e},e}const X=Object(u.a)({flexGrow:1}),Y=Object(u.a)(R());function Z(){const e=c.a.useState(!1),t=Object(r.a)(e,2),a=t[0],n=t[1],o=c.a.useCallback(()=>{n(!0)},[]),l=c.a.useCallback(()=>{n(!1)},[]);return Object(u.b)("div",{css:X},Object(u.b)(B.a,{position:"static"},Object(u.b)(L.a,null,Object(u.b)(S.a,{css:Y,variant:"h6",noWrap:!0},"\u753b\u50cf\u4e00\u89a7"),Object(u.b)(C.a,{edge:"end",color:"inherit","aria-label":"upload",onClick:o},Object(u.b)(q.a,{fontSize:"large"})))),Object(u.b)(Q,{open:a,onClose:l}))}const _=Object(u.a)({display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:"white"}),ee=Object(u.a)({width:"100%",height:"100%",cursor:"pointer"}),te=({images:e})=>{const t=Object(n.useState)(0),a=Object(r.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(),p=Object(r.a)(l,2),d=p[0],j=p[1],O=Object(n.useState)(!1),m=Object(r.a)(O,2),h=m[0],g=m[1],f=Object(n.useCallback)(t=>{const a=e.find(e=>e.id===Number(t.currentTarget.dataset.id));j(a),g(!0)},[e]),v=Object(n.useCallback)(()=>{g(!1)},[]),C=Object(n.useCallback)(e=>{o(Number(e.currentTarget.dataset.id))},[]),k=Object(n.useCallback)(()=>{o(0)},[]);return Object(u.b)("div",{css:_},Object(u.b)(Z,null),Object(u.b)(i.a,{cellHeight:200,css:ee,cols:4},e.map(e=>Object(u.b)(s.a,{key:e.id,cols:e.cols||1,"data-id":e.id,"data-url":e.url,onClick:f,onMouseEnter:C,onMouseLeave:k},Object(u.b)("img",{src:"http://localhost:3001/images/".concat(e.url),alt:e.title}),c===e.id&&Object(u.b)(b.a,{title:e.title,subtitle:Object(u.b)("span",null,"by: ",e.user.name)})))),Object(u.b)(D,{open:h,onClose:v,postImage:d}))};var ae=e=>{const t=Object(n.useState)([]),a=Object(r.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)(()=>{(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("http://localhost:3001/api/photo/list");case 3:t=e.sent,o(t.data),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()},[e]),{images:c}};var ne=()=>{const e=Object(n.useContext)(P),t=ae(e.proc).images;return c.a.createElement(te,{images:t})};var ce=()=>{const e=(()=>{const e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1];return{proc:a,setIsProc:Object(n.useCallback)(e=>{c(e)},[])}})();return c.a.createElement("div",null,c.a.createElement(P.Provider,{value:e},c.a.createElement(ne,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},81:function(e,t,a){e.exports=a(110)},86:function(e,t,a){},87:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.9f4f677f.chunk.js.map