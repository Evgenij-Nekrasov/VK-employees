(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[6],{20:function(t,e,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",s=c(2);e.a=()=>Object(s.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},22:function(t,e,c){"use strict";var a=c(0);e.a=()=>{const{loading:t,request:e,error:c,clearError:s}=(()=>{const[t,e]=Object(a.useState)(!1),[c,s]=Object(a.useState)(null),n=Object(a.useCallback)((async function(t){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};e(!0);try{const s=await fetch(t,{method:c,body:a,headers:n});if(!s.ok)throw new Error("Could not fetch ".concat(t,", status: ").concat(s.status));const i=await s.json();return e(!1),i}catch(i){throw e(!1),s(i.message),i}}),[]);return{loading:t,request:n,error:c,clearError:Object(a.useCallback)((()=>s(null)),[])}})(),n="https://gateway.marvel.com:443/v1/public/",i="apikey=807256966a9f134988a0a71cdf2ddb6d",r=t=>({id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,180),"..."):"There is no data about this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items.slice(0,10)}),o=t=>{var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:t,error:c,getAllCharacters:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(n,"characters?limit=9&offset=").concat(t,"&").concat(i))).data.results.map(r)},getCharacter:async t=>{const c=await e("".concat(n,"characters/").concat(t,"?").concat(i));return r(c.data.results[0])},getCharacterByName:async t=>(await e("".concat(n,"characters?name=").concat(t,"&").concat(i))).data.results.map(r),clearError:s,getAllComics:async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:210;return(await e("".concat(n,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(i))).data.results.map(o)},getComic:async t=>{const c=await e("".concat(n,"comics/").concat(t,"?").concat(i));return o(c.data.results[0])}}}},25:function(t,e,c){"use strict";var a=c(0),s=c(20),n=c(2);class i extends a.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(t,e){console.log(t,e),this.setState({error:!0})}render(){return this.state.error?Object(n.jsx)(s.a,{}):this.props.children}}e.a=i},29:function(t,e,c){},30:function(t,e,c){"use strict";c(29);var a=c.p+"static/media/Avengers.4065c8f9.png",s=c.p+"static/media/Avengers_logo.9eaf2193.png",n=c(2);e.a=()=>Object(n.jsxs)("div",{className:"app__banner",children:[Object(n.jsx)("img",{src:a,alt:"Avengers"}),Object(n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(n.jsx)("br",{}),"Stay tuned!"]}),Object(n.jsx)("img",{src:s,alt:"Avengers logo"})]})},58:function(t,e,c){},70:function(t,e,c){"use strict";c.r(e);var a=c(23),s=c(30),n=c(0),i=c(22),r=c(6),o=c(20),l=c(4),u=(c(58),c(2));var m=()=>{const[t,e]=Object(n.useState)([]),[c,a]=Object(n.useState)(!1),[s,m]=Object(n.useState)(0),[d,b]=Object(n.useState)(!1),{loading:j,error:h,getAllComics:p}=Object(i.a)();Object(n.useEffect)((()=>{g(s,!0)}),[]);const g=(t,e)=>{a(!e),p(t).then(O)},O=c=>{let n=!1;c.length<8&&(n=!0),e([...t,...c]),a(!1),m(s+8),b(n)};const x=function(t){const e=t.map(((t,e)=>Object(u.jsx)("li",{className:"comics__item",children:Object(u.jsxs)(l.b,{to:"/comics/".concat(t.id),children:[Object(u.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(u.jsx)("div",{className:"comics__item-name",children:t.title}),Object(u.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)));return Object(u.jsx)("ul",{className:"comics__grid",children:e})}(t),v=h?Object(u.jsx)(o.a,{}):null,f=j&&!c?Object(u.jsx)(r.a,{}):null;return Object(u.jsxs)("div",{className:"comics__list",children:[v,f,x,Object(u.jsx)("button",{disabled:c,style:{display:d?"none":"block"},className:"button button__main button__long",onClick:()=>g(s),children:Object(u.jsx)("div",{className:"inner",children:"load more"})})]})},d=c(25);e.default=()=>Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(a.a,{children:[Object(u.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(u.jsx)("title",{children:"Comics page"})]}),Object(u.jsx)(s.a,{}),Object(u.jsx)(d.a,{children:Object(u.jsx)(m,{})})]})}}]);
//# sourceMappingURL=6.e2cb290d.chunk.js.map