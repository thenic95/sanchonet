"use strict";(self.webpackChunksanchonet=self.webpackChunksanchonet||[]).push([[986],{5915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>S,frontMatter:()=>h,metadata:()=>g,toc:()=>E});var r=a(7462),o=a(7294),s=a(3905),n=a(614),l=a(6010),i=a(7536),c=a(2263),u=a(4853);const d={wrapper:"wrapper_ZNPi",response:"response_qfda",form:"form_jNAG",disabled:"disabled_rWZm",captcha:"captcha_KbFd",error:"error_Z4m0",coin:"coin_MRz8"},m=e=>{let{name:t}=e;const{siteConfig:{customFields:a}}=(0,c.Z)(),{field:s,fieldState:n,formState:l}=(0,i.bc)({name:t});return o.createElement("div",null,o.createElement(u.Z,(0,r.Z)({},s,{sitekey:String(a.recaptchaSiteKey)??""})),n.error&&o.createElement("p",{className:d.error},n.error.message))};function p(e){switch(e){case"FaucetWebErrorInvalidApiKey":return"Invalid API key";case"FaucetWebErrorKeyCantDelegate":return"Key can't delegate";case"FaucetWebErrorRateLimitExeeeded":return"Rate limit exceeded, please try later";case"FaucetWebErrorUtxoNotFound":return"UTXO not found";case"FaucetWebErrorStakeKeyNotFound":return"Stake key not found";case"FaucetWebErrorAlreadyDelegated":return"Already delegated";default:return e.replace("FaucetWebError","")}}function f(){const e=(0,i.cI)({defaultValues:{type:"default",action:"funds"}}),t="address",a="poolid",s="apiKey",c="action",u=e.watch("action"),[f,h]=(0,o.useState)(null);return o.createElement("div",{className:d.wrapper},o.createElement(i.RV,e,o.createElement("form",{onSubmit:e.handleSubmit((async t=>{if(console.log(t),!t["g-recaptcha-response"])return void e.setError("g-recaptcha-response",{type:"manual",message:"Please complete the recaptcha"});const a=new URLSearchParams(t),r=new URL(`${function(e){return"delegation"===e.action?"https://faucet.sanchonet.world.dev.cardano.org/delegate":"https://faucet.sanchonet.world.dev.cardano.org/send-money"}(t)}?${a}`),o=await fetch(r,{method:"GET"});if(200===o.status){const t=await o.json();t.error?e.setError("root",{type:"manual",message:p(t.error.tag)}):h(t)}})),className:d.form},o.createElement("input",(0,r.Z)({},e.register("type"),{type:"hidden",name:"type",value:"default"})),o.createElement("label",{htmlFor:c},"Action"),o.createElement("select",(0,r.Z)({},e.register("action"),{id:c,className:d.coin}),o.createElement("option",{value:"funds"},"Test ADA"),o.createElement("option",{value:"delegation"},"Stake delegation")),o.createElement("label",{className:(0,l.Z)({[d.disabled]:"delegation"===u}),htmlFor:t},"address (required)"),o.createElement("input",(0,r.Z)({},e.register("address"),{id:t,disabled:"delegation"===u,required:!0,type:"text"})),o.createElement("label",{className:(0,l.Z)({[d.disabled]:"funds"===u}),htmlFor:a},"pool id (required)"),o.createElement("input",(0,r.Z)({},e.register("poolid"),{id:a,required:!0,disabled:"funds"===u,type:"text"})),o.createElement("label",{htmlFor:s},"api key (optional)"),o.createElement("input",(0,r.Z)({},e.register("api_key"),{id:s,type:"text"})),o.createElement("div",{className:d.captcha},o.createElement(m,{name:"g-recaptcha-response"})),o.createElement("button",{className:"button button--primary button--lg",type:"submit"},"Submit")),e.formState.errors.root&&o.createElement("p",{className:d.error},e.formState.errors.root.message),f&&o.createElement("div",{className:d.response},o.createElement(n.Z,{language:"json"},JSON.stringify(f,null,2)))))}const h={sidebar_label:"Faucet",title:"SanchoNet faucet",sidebar_position:3,slug:"/tutorials/faucet"},b=void 0,g={unversionedId:"tutorials/faucet",id:"tutorials/faucet",title:"SanchoNet faucet",description:"To request funds from the faucet:",source:"@site/docs/tutorials/faucet.mdx",sourceDirName:"tutorials",slug:"/tutorials/faucet",permalink:"/tutorials/faucet",draft:!1,editUrl:"https://github.com/input-output-hk/sanchonet/tree/master/docs/tutorials/faucet.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Faucet",title:"SanchoNet faucet",sidebar_position:3,slug:"/tutorials/faucet"},sidebar:"docsSidebar",previous:{title:"Create keys and the address",permalink:"/tutorials/address"},next:{title:"Register a stake pool",permalink:"/tutorials/stake-pool-registration"}},y={},E=[{value:"To request funds from the faucet:",id:"to-request-funds-from-the-faucet",level:2}],k={toc:E},N="wrapper";function S(e){let{components:t,...a}=e;return(0,s.kt)(N,(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"to-request-funds-from-the-faucet"},"To request funds from the faucet:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Choose whether you want to request funds or a stake delegation"),(0,s.kt)("li",{parentName:"ol"},"Fill in your details"),(0,s.kt)("li",{parentName:"ol"},"Tick the recaptcha box"),(0,s.kt)("li",{parentName:"ol"},"Click 'Submit'.")),(0,s.kt)(f,{mdxType:"Faucet"}))}S.isMDXComponent=!0}}]);