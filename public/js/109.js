(self.webpackChunk=self.webpackChunk||[]).push([[109],{2956:(e,n,t)=>{"use strict";t.r(n),t.d(n,{$$default:()=>c,default:()=>c,make:()=>s});var a=t(3931),o=t(9669),r=t(7294),i=t(4884),l=t(9680);t(1636);var u=t(4594);function v(e){var n=r.useState((function(){return""})),t=n[1],v=n[0],s=r.useState((function(){return""})),c=s[1],d=s[0],m=a._1(i.I0,void 0);return r.createElement("div",void 0,r.createElement("h2",void 0,"Login"),r.createElement("form",{onSubmit:function(e){e.preventDefault(),o.post("/api/login",{email:v,password:d}).then((function(e){var n,t,o,r,v,s,c,d,p,f,h,E;return a._1(m,{RE_EXN_ID:u.g,_1:i.II}),n=void 0,t=void 0,o=void 0,r=void 0,v=void 0,s=void 0,c=void 0,d=void 0,p=void 0,f=void 0,h=void 0,E="/",l.Inertia.visit(E,{method:n,replace:t,preserveScroll:o,preserveState:r,only:v,onCancel:s,onFinish:c,onSuccess:d,onError:p,headers:f,onCancelToken:h}),Promise.resolve(void 0)}))}},r.createElement("input",{className:"form-input",name:"email",placeholder:"Email",type:"email",value:v,onChange:function(e){var n=e.target;return a._1(t,n.value)}}),r.createElement("input",{className:"form-input",name:"password",placeholder:"Password",type:"password",value:d,onChange:function(e){var n=e.target;return a._1(c,n.value)}}),r.createElement("button",{className:"login-button"},"Login")))}var s=v,c=v}}]);