(this["webpackJsonpgifs-react-app"]=this["webpackJsonpgifs-react-app"]||[]).push([[0],{28:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(19),r=a.n(s),n=(a(28),a(9)),i=a(1),j=Object(c.createContext)(),l=function(e){var t=e.children,a=Object(c.useState)([]),s=Object(n.a)(a,2),r=s[0],l=s[1],o=Object(c.useState)({}),u=Object(n.a)(o,2),d=u[0],b=u[1],m=Object(c.useState)(!1),O=Object(n.a)(m,2),h=O[0],g=O[1],f=Object(c.useState)(""),x=Object(n.a)(f,2),p=x[0],v=x[1];return Object(i.jsx)(j.Provider,{value:{gifs:r,setGifs:l,loading:h,setLoading:g,gif:d,setGif:b,term:p,setTerm:v},children:t})},o=function(){return Object(c.useContext)(j)},u=function(){return Object(i.jsx)("div",{className:"loading",children:Object(i.jsx)("h1",{children:"Loading..."})})},d=a(22),b=a(7),m=a(15),O=a.n(m),h=a(23),g=a(20),f=function(e){var t=o(),a=t.setGifs,s=t.setLoading,r=t.setGif,n=t.term,i=function(){var t=Object(g.a)(O.a.mark((function t(){var c,n,i,j,l,o,u,d,b,m,g;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s(!0),t.prev=1,t.next=4,fetch(e);case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,i=n.data,Array.isArray(i)?a(Object(h.a)(i)):(j=i.images.downsized.url,l=i.title,o=i.user,u=o.avatar_url,d=o.display_name,b=o.instagram_url,m=o.description,g=o.website_url,r({imgSrc:j,title:l,avatar:u,userName:d,instagram:b,profession:m,website:g})),s(!1),t.next=18;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0),a([]),s(!1);case 18:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){return i()}),[n])};var x=function(){var e=o().setTerm,t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],r=a[1];return Object(i.jsxs)("form",{className:"search_form",onSubmit:function(t){t.preventDefault(),e(s)},children:[Object(i.jsx)("input",{type:"text",placeholder:"Search for sticker",value:s,onChange:function(e){r(e.target.value)}}),Object(i.jsx)("button",{type:"submit",children:"Search"})]})},p="AavJDMsKe396L23p7BxujH4TqAeuUn7Z",v="https://api.giphy.com/v1/stickers/trending?api_key=".concat(p,"&limit=10&rating=g"),N=function(){var e=o(),t=e.gifs,a=e.term,c=e.loading;""!==a&&(v="https://api.giphy.com/v1/stickers/search?api_key=".concat(p,"&q=").concat(a.trim(),"&limit=20&offset=0&rating=g&lang=en")),f(v);var s=!1===c?t.map((function(e,t){if(a)var c=e.id,s=e.images.downsized_large.url,r=e.username,n=e.trending_datetime;else{c=e.id,s=e.images.downsized_large.url;var j=e.user.avatar_url;r=e.username,n=e.trending_datetime}return n=new Date(n).toLocaleDateString(),Object(i.jsxs)(b.b,{to:"/gif/".concat(c),className:"gif card",children:[Object(i.jsx)("img",{src:s,alt:""}),Object(i.jsxs)("div",{className:"info",children:[""!==j&&j?Object(i.jsx)("img",{src:j,alt:r,className:"avatar"}):Object(i.jsx)(d.a,{className:"avatar"}),Object(i.jsx)("p",{className:"us_name",children:r}),Object(i.jsx)("span",{className:"tr_time",children:n})]})]},t)})):Object(i.jsx)(u,{});return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(x,{}),Object(i.jsx)("main",{className:"hero",children:s}),";"]})},_=a(2),y=function(){var e=o(),t=e.gif,a=e.loading,c=Object(_.f)().id,s="https://api.giphy.com/v1/gifs/".concat(c,"?api_key=").concat("AavJDMsKe396L23p7BxujH4TqAeuUn7Z");f(s);var r=a?"asad":Object(i.jsxs)("div",{className:"single_gif card",children:[Object(i.jsx)("img",{src:t.imgSrc,alt:"s"}),Object(i.jsxs)("div",{className:"details",children:[Object(i.jsx)("img",{src:t.avatar,alt:""}),Object(i.jsx)("span",{children:t.userName}),Object(i.jsx)("h3",{children:t.title}),Object(i.jsx)("p",{children:t.profession})]})]});return Object(i.jsxs)("main",{className:"main",children:[a?Object(i.jsx)(u,{}):r,!a&&Object(i.jsx)(b.b,{to:"/",className:"home-btn",children:"Go Back Home"})]})};var k=function(){return Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(b.a,{children:Object(i.jsxs)(_.c,{children:[Object(i.jsx)(_.a,{path:"/",exact:!0,children:Object(i.jsx)(N,{})}),Object(i.jsx)(_.a,{exact:!0,path:"/gif/:id",children:Object(i.jsx)(y,{})})]})})})};r.a.render(Object(i.jsx)(l,{children:Object(i.jsx)(k,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.1e5b0c0d.chunk.js.map