(self.webpackChunk=self.webpackChunk||[]).push([[294],{683:(e,t,a)=>{"use strict";a.d(t,{S:()=>u});var n=a(3931),r=a(9669),o=a(7294),l=a(4884),s=a(352),i=a(4594),c=a(1636);function m(e){return e}var u=function(e){var t=n._1(l.I0,void 0),a=n._1(l.v9,m).user;return o.createElement("div",{className:"header"},o.createElement("h1",{className:"header-branding"},"Kuso App"),void 0!==a?o.createElement("div",{className:"logout-group flex flex-row items-center"},o.createElement("p",{className:"flex flex-row items-center m-0 p-0 text-sm"},o.createElement(s.S,{user:a}),o.createElement("span",{className:"ml-2"},"Logged as: "+a.name)),o.createElement("form",{className:"flex",onSubmit:function(e){e.preventDefault(),r.post("/api/logout").then((function(e){return n._1(t,{RE_EXN_ID:i.g,_1:l.II}),Promise.resolve(void 0)}))}},o.createElement("button",{className:"fancy-link text-sm m-0 ml-2"},"Logout"))):o.createElement("div",{className:"login-group"},o.createElement(c.ZQ,{href:"/login",children:o.createElement("span",{className:"fancy-link"},"Login")})))}},1582:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$default:()=>v,default:()=>v,make:()=>u});var n=a(3931),r=a(9669),o=a(7294),l=a(9680);a(1636);var s=a(4884),i=a(683),c=a(4594);function m(e){var t=o.useState((function(){return""})),a=t[1],m=t[0],u=o.useState((function(){return""})),v=u[1],d=u[0],p=n._1(s.I0,void 0);return o.createElement("div",void 0,o.createElement(i.S,{}),o.createElement("div",{className:"app-body"},o.createElement("div",{className:"app-container"},o.createElement("h2",{className:"todos-heading"},"Login"),o.createElement("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),r.post("/api/login",{email:m,password:d}).then((function(e){var t,a,r,o,i,m,u,v,d,f,E,g;return n._1(p,{RE_EXN_ID:c.g,_1:s.II}),t=void 0,a=void 0,r=void 0,o=void 0,i=void 0,m=void 0,u=void 0,v=void 0,d=void 0,f=void 0,E=void 0,g="/",l.Inertia.visit(g,{method:t,replace:a,preserveScroll:r,preserveState:o,only:i,onCancel:m,onFinish:u,onSuccess:v,onError:d,headers:f,onCancelToken:E}),Promise.resolve(void 0)}))}},o.createElement("input",{className:"form-input mt-4",name:"email",placeholder:"Email",type:"email",value:m,onChange:function(e){var t=e.target;return n._1(a,t.value)}}),o.createElement("input",{className:"form-input mt-4",name:"password",placeholder:"Password",type:"password",value:d,onChange:function(e){var t=e.target;return n._1(v,t.value)}}),o.createElement("button",{className:"login-button mt-4 mx-auto"},"Login")))))}var u=m,v=m},352:(e,t,a)=>{"use strict";a.d(t,{S:()=>r});var n=a(7294);var r=function(e){var t=e.user;if(void 0===t)return n.createElement("span",{className:"icon-skeleton"});var a=t.avatar;return n.createElement("img",{className:"icon",alt:t.name,src:void 0!==a?a:"",width:"24"})}}}]);