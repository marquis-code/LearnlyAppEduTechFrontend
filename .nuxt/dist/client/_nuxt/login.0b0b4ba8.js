import{_ as f,e as h,a as w}from"./eye-close.5cf852ad.js";import{_ as y}from"./nuxt-link.a44b1bcd.js";import{s as b,r as v,u as k,f as C,h as D,j as t,v as E,k as r,x as S,y as P,z as s,t as V,m,l as N}from"./entry.3affc06b.js";import{_ as j}from"./ecommerce-logo.2f653554.js";import{u as B}from"./login.b9b1c25b.js";import"./auth.a92d66c7.js";import"./vuex.esm-bundler.e6377e65.js";import"./sweetalert2.all.d4f02120.js";const L={class:"flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"},M=t("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[t("img",{class:"mx-auto h-10 w-auto",src:j,alt:"Your Company"}),t("h2",{class:"mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Sign in to your account")],-1),O={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]"},T={class:"bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12"},z=t("label",{for:"email",class:"block text-sm font-medium leading-6 text-[#0D0C22]"},"Email",-1),F=t("label",{for:"password",class:"block text-sm font-medium leading-6 text-[#0D0C22]"},"Password",-1),I={class:"mt-0.5 relative"},U=["type"],Y=["src"],$=["disabled"],q={class:"mt-10 text-center text-sm text-gray-500"},Z=b({__name:"login",setup(A){const{handleLogin:n,loginPayload:a,loading:i,isFormEmpty:c}=B(),o=v(!1),p=k(()=>o.value?w:h),u=()=>{o.value=!o.value},_=d=>{a.value.email=d};return(d,e)=>{const x=f,g=y;return C(),D("div",L,[M,t("div",O,[t("div",T,[t("form",{onSubmit:e[1]||(e[1]=E((...l)=>s(n)&&s(n)(...l),["prevent"])),class:"space-y-6",action:"#",method:"POST"},[t("div",null,[z,r(x,{onCompleted:_})]),t("div",null,[F,t("div",I,[S(t("input",{name:"password",id:"password",type:s(o)?"text":"password","onUpdate:modelValue":e[0]||(e[0]=l=>s(a).password=l),class:"block w-full rounded-md border border-gray-100 p-3 py-3.5 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:font-light outline-none",placeholder:"Enter your password"},null,8,U),[[P,s(a).password]]),t("img",{src:s(p),onClick:u,alt:"",class:"absolute right-4 top-4 h-6 w-6 cursor-pointer"},null,8,Y)])]),t("div",null,[t("button",{disabled:!s(c)||s(i),type:"submit",class:"flex disabled:cursor-not-allowed disabled:opacity-25 w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm"},V(s(i)?"processing...":"Sign in"),9,$)])],32)]),t("p",q,[m(" Don't have an account? "),r(g,{to:"/signup",class:"font-semibold leading-6 text-indigo-600 hover:text-indigo-500"},{default:N(()=>[m("Sign up")]),_:1})])])])}}});export{Z as default};
