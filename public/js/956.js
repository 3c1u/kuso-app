(self.webpackChunk=self.webpackChunk||[]).push([[956],{683:(e,t,n)=>{"use strict";n.d(t,{S:()=>m});var a=n(3931),r=n(9669),l=n(7294),o=n(4884),c=n(4594),s=n(1636);function i(e){return e}var m=function(e){var t=a._1(o.I0,void 0),n=a._1(o.v9,i).user;return l.createElement("div",{className:"header"},l.createElement("h1",{className:"header-branding"},"Kuso App"),void 0!==n?l.createElement("div",{className:"logout-group flex flex-row items-center"},l.createElement("p",{className:"m-0 p-0 text-sm"},"Logged as: "+n.name),l.createElement("form",{className:"flex",onSubmit:function(e){e.preventDefault(),r.post("/api/logout").then((function(e){return a._1(t,{RE_EXN_ID:c.g,_1:o.II}),Promise.resolve(void 0)}))}},l.createElement("button",{className:"fancy-link text-sm m-0 ml-2"},"Logout"))):l.createElement("div",{className:"login-group"},l.createElement(s.ZQ,{href:"/login",children:l.createElement("span",{className:"fancy-link"},"Login")})))}},7956:(e,t,n)=>{"use strict";n.r(t),n.d(t,{$$default:()=>p,default:()=>p,make:()=>f});var a=n(7294),r=n(3931);function l(e,t){return function(e,t){for(var n=e.length,a=new Array(n),r=0;r<n;++r)a[r]=t(e[r]);return a}(e,r.Dm(t))}var o=n(143),c=n(4884),s=n(683);var i=function(e){var t=e.user;if(void 0===t)return a.createElement("span",{className:"icon-skeleton"});var n=t.avatar;return a.createElement("img",{className:"icon",alt:t.name,src:void 0!==n?n:"",width:"24"})},m=n(4594);var u=function(e){var t=e.onClick;return a.createElement("button",{className:"delete-button",onClick:t},a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",void 0,a.createElement("g",void 0,a.createElement("rect",{height:"24",width:"24",opacity:"0",transform:"rotate(180 12 12)"}),a.createElement("path",{d:"M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"})))))};function d(e){return e}var v=function(e){var t=a.useState((function(){return""})),n=t[1],v=t[0],E=r._1(c.I0,void 0),f=r._1(c.v9,d),p=f.user,g=function(e){var t=e.user;return null==t||void 0!==p&&t.id===p.id};return a.createElement("div",void 0,a.createElement(s.S,{}),a.createElement("div",{className:"app-body"},a.createElement("div",{className:"app-container"},a.createElement("h2",{className:"todos-heading"},"Todos"),a.createElement("div",{className:"todos"},f.loading?a.createElement("p",void 0,"loading..."):l(f.todos,(function(e){var t=e.user;return a.createElement("p",{key:String(e.id),className:"todo-item"},g(e)?a.createElement(u,{onClick:function(t){var n=e.id;r._1(E,{RE_EXN_ID:m.g,_1:function(e){return c.Xd(n,e)}})}}):a.createElement(i,{user:o.Tl(e.user)}),a.createElement("span",{className:"todo-label"},e.title),null==t?a.createElement("span",void 0):a.createElement("span",{className:"user-label"},"（"+t.name+"）"))})),a.createElement("form",{className:"todo-form",onSubmit:function(e){0!==v.length&&(r._1(E,{RE_EXN_ID:m.g,_1:function(e){return c.vM(v,e)}}),r._1(n,(function(e){return""}))),e.preventDefault()}},a.createElement("input",{className:"todo-input",placeholder:"Lorem ipsum...",type:"text",value:v,onChange:function(e){var t=e.target;return r._1(n,t.value)}}),a.createElement("button",{className:"add-button",disabled:f.sending||0===v.length},"Add"))))))};function E(e){return a.createElement(v,{})}var f=E,p=E}}]);