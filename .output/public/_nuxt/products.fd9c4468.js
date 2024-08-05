import{_ as T,o as i,c as n,a as e,J as U,s as S,u as y,n as B,G as A,r as g,I as N,B as t,F as j,q as E,b as G,w as z,K as X,t as _,L as I,M as F,N as ee,d as te,p as se,e as oe}from"./entry.57491fe1.js";import{h as re}from"./moment.a9aaa855.js";import{u as D}from"./fetch.e3187f9b.js";import{p as L}from"./product.bd4fe7c7.js";import{S as V}from"./login.e8c36bde.js";import"./axios.config.dbe20dcc.js";import"./axios.4d564c32.js";import"./auth.2da18a9f.js";const ie={props:{src:String},data(){return{isFullScreen:!1}},methods:{toggleImage(){this.isFullScreen=!this.isFullScreen}}},ne=["src"],le=["src"];function ae(a,c,p,m,r,l){return i(),n("div",null,[e("img",{src:p.src,onClick:c[0]||(c[0]=(...s)=>l.toggleImage&&l.toggleImage(...s)),class:"cursor-pointer rounded-full h-10 w-10",alt:""},null,8,ne),r.isFullScreen?(i(),n("div",{key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",onClick:c[1]||(c[1]=U((...s)=>l.toggleImage&&l.toggleImage(...s),["self"]))},[e("img",{alt:"",src:p.src,class:S(["max-w-full max-h-full transition-transform duration-500",{"scale-100":r.isFullScreen,"scale-0":!r.isFullScreen}])},null,10,le)])):y("",!0)])}const ce=T(ie,[["render",ae]]),de={key:0,class:"relative z-10","aria-labelledby":"slide-over-title",role:"dialog","aria-modal":"true"},ue=e("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),pe={class:"fixed inset-0 overflow-hidden"},me={class:"absolute inset-0 overflow-hidden"},ge={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"},he={class:"pointer-events-auto w-screen max-w-md"},fe={class:"flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"},_e={class:"flex min-h-0 flex-1 flex-col overflow-y-scroll py-6"},ve={class:"px-4 sm:px-6"},xe={class:"flex items-start justify-between"},ye=e("span",{class:"absolute -inset-2.5"},null,-1),we=e("span",{class:"sr-only"},"Close panel",-1),be=e("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ke=[ye,we,be],Pe={class:"relative mt-6 flex-1 px-4 sm:px-6"},Se={key:0,class:"flex flex-shrink-0 justify-end px-4 py-4"},Ce=e("button",{type:"button",class:"rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"},"Cancel",-1),Ie=e("button",{type:"submit",class:"ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"},"Save",-1),Ne=[Ce,Ie],$e=B({__name:"slideOver",props:{show:{type:Boolean},showFooter:{type:Boolean,default:!0}},emits:["close"],setup(a,{emit:c}){const p=()=>{c("close")};return(m,r)=>a.show?(i(),n("div",de,[ue,e("div",pe,[e("div",me,[e("div",ge,[e("div",he,[e("div",fe,[e("div",_e,[e("div",ve,[e("div",xe,[A(m.$slots,"title"),e("div",{class:"ml-3 flex h-7 items-center"},[e("button",{onClick:p,type:"button",class:"relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"},ke)])])]),e("div",Pe,[A(m.$slots,"default")])]),a.showFooter?(i(),n("div",Se,Ne)):y("",!0)])])])])])])):y("",!0)}}),Fe=()=>{const a=g(null),c=g(!1),p=g(!1),m=g(["desktops","computer accessories","laptops","laptop parts","cctv","printers and scanners","networking and wifi","gaming","snacks","groceries","storage and memory","smartphones","tablets","smartwatches","home appliances","kitchen appliances","personal care","beauty products","clothing","shoes","books","toys","sports equipment","office supplies","pet supplies","automotive parts","musical instruments","furniture","garden tools","health and wellness"]),r=g({name:"",description:"",price:"",currentInStock:"",category:"",image:null,imageUrl:"",file:""}),l=g({name:"",description:"",price:"",currentInStock:"",category:""}),s=()=>(l.value.name=r.value.name?"":"Product name is required",l.value.description=r.value.description?"":"Product description is required",l.value.price=r.value.price&&!isNaN(Number(r.value.price))?"":"Valid product price is required",l.value.currentInStock=r.value.currentInStock&&!isNaN(Number(r.value.currentInStock))?"":"Valid estimated price is required",l.value.category=r.value.category?"":"Product category is required",!l.value.name&&!l.value.description&&!l.value.price&&!l.value.currentInStock&&!l.value.category),d=()=>{r.value={name:"",description:"",price:"",currentInStock:"",category:"",image:null,imageUrl:"",file:""},l.value={name:"",description:"",price:"",currentInStock:"",category:""}};return{createProduct:async()=>{if(s())try{p.value=!0;const f=new FormData;f.append("name",r.value.name),f.append("description",r.value.description),f.append("price",r.value.price),f.append("currentInStock",r.value.currentInStock),f.append("category",r.value.category),r.value.image&&f.append("file",r.value.file);const k=await L.createProduct(f);if(typeof k<"u")return console.log(k,"res here"),d(),N().$toast.success("Product was created successfully.",{autoClose:5e3,dangerouslyHTMLString:!0}),console.log(k,"res here"),k}catch(f){console.log(f,"err here"),N().$toast.error("Something went wrong!",{autoClose:5e3,dangerouslyHTMLString:!0})}finally{p.value=!1}},resetForm:d,form:r,loading:p,errors:l,showDropdown:c,foodCategories:m,editProduct:f=>{a.value=f,r.value={...f,imageUrl:f.image||""},c.value=!0},selectedProduct:a}},Ue=()=>{const a=g(null),c=g(""),p=g(!1),m=g(!1),{fetchProducts:r}=D(),l=g(["desktops","computer accessories","laptops","laptop parts","cctv","printers and scanners","networking and wifi","gaming","snacks","groceries","storage and memory","smartphones","tablets","smartwatches","home appliances","kitchen appliances","personal care","beauty products","clothing","shoes","books","toys","sports equipment","office supplies","pet supplies","automotive parts","musical instruments","furniture","garden tools","health and wellness"]),s=g({name:"",description:"",price:"",currentInStock:"",category:"",image:null,imageUrl:""}),d=g({name:"",description:"",price:"",currentInStock:"",category:""}),v=()=>(d.value.name=s.value.name?"":"Product name is required",d.value.description=s.value.description?"":"Product description is required",d.value.price=s.value.price&&!isNaN(Number(s.value.price))?"":"Valid product price is required",d.value.currentInStock=s.value.currentInStock&&!isNaN(Number(s.value.currentInStock))?"":"Valid estimated price is required",d.value.category=s.value.category?"":"Product category is required",!d.value.name&&!d.value.description&&!d.value.price&&!d.value.currentInStock&&!d.value.category),w=()=>{s.value={name:"",description:"",price:"",currentInStock:"",category:"",image:null,imageUrl:""},d.value={name:"",description:"",price:"",currentInStock:"",category:""}};return{updateProduct:async()=>{if(v())try{m.value=!0;const b=await L.updateProduct(s.value,c.value);return w(),N().$toast.success("Product was successfully updated.",{autoClose:5e3,dangerouslyHTMLString:!0}),await r(),b}catch{N().$toast.error("Something went wrong!",{autoClose:5e3,dangerouslyHTMLString:!0})}finally{m.value=!1}},resetForm:w,form:s,loading:m,errors:d,showDropdown:p,foodCategories:l,setEditProduct:b=>{a.value=b,c.value=b._id,s.value={...b,imageUrl:b.image||""},p.value=!0}}},{fetchProducts:Me}=D(),Ve=()=>{const a=g(!1);return{deleteProduct:p=>{V.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",preConfirm:async()=>{try{a.value=!0;const m=await L.deleteProduct(p);return V.fire("Deleted!","Product has been deleted.","success"),Me(),m}catch{N().$toast.error("Something went wrong!",{autoClose:5e3,dangerouslyHTMLString:!0})}finally{a.value=!1}}}).then(()=>{V.fire("Cancelled","Action was cancelled","info")})},loading:a}},h=a=>(se("data-v-b17e0a0c"),a=a(),oe(),a),Be={key:0},De={class:"sm:flex sm:items-center"},Le=h(()=>e("div",{class:"sm:flex-auto pt-10"},[e("h1",{class:"text-xl font-semibold leading-6 text-gray-900"},"Products"),e("p",{class:"mt-2 text-sm text-gray-700"},"A list of all your products including name, description, image and price.")],-1)),qe={class:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none"},Ae={key:0,class:"mt-8 flow-root"},je={class:"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},Ee={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},ze={class:"min-w-full divide-y divide-gray-300"},Te=h(()=>e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"},"Name"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Description"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Price"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"In Stock"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Category"),e("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900"},"Created At"),e("th",{scope:"col",class:"relative py-3.5 pl-3 pr-4 sm:pr-0"},"Actions")])],-1)),Ge={class:"divide-y divide-gray-200 bg-white"},He={class:"whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"},Ye={class:"flex items-center"},Oe={class:"h-11 w-11 flex-shrink-0"},Re={class:"ml-4"},Je={class:"font-medium text-gray-900"},Ke={class:"mt-1"},Ze={class:"text-white bg-gray-900 rounded-2xl text-xs text-center px-3 py-1"},Qe={class:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},We={class:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},Xe={class:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},et={class:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},tt={class:"whitespace-nowrap px-3 py-5 text-sm text-gray-500"},st={class:"relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"},ot={class:"flex items-center justify-center gap-x-4"},rt=["onClick"],it=["onClick"],nt={key:1,class:"h-32 bg-slate-300 rounded w-full mt-6 animate-pulse"},lt={key:2,class:"text-center border rounded-xl py-6 mt-6"},at=h(()=>e("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"vector-effect":"non-scaling-stroke","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"})],-1)),ct=h(()=>e("h3",{class:"mt-2 text-sm font-semibold text-gray-900"},"No products available",-1)),dt=h(()=>e("p",{class:"mt-1 text-sm text-gray-500"},"Get started by creating a new project.",-1)),ut=[at,ct,dt],pt={class:"text-base font-semibold leading-6 text-gray-900",id:"slide-over-title"},mt=["onSubmit"],gt=h(()=>e("label",{for:"name",class:"block text-sm font-medium leading-6 text-gray-900"},"Enter Product Name",-1)),ht={class:"relative mt-2 rounded-md shadow-sm"},ft={key:0,class:"mt-2 text-sm text-red-600"},_t=h(()=>e("label",{for:"description",class:"block text-sm font-medium leading-6 text-gray-900"},"Enter Product Description",-1)),vt={class:"relative mt-2 rounded-md shadow-sm"},xt={key:0,class:"mt-2 text-sm text-red-600"},yt=h(()=>e("label",{for:"price",class:"block text-sm font-medium leading-6 text-gray-900"},"Enter Product Price",-1)),wt={class:"relative mt-2 rounded-md shadow-sm"},bt={key:0,class:"mt-2 text-sm text-red-600"},kt=h(()=>e("label",{for:"currentInStock",class:"block text-sm font-medium leading-6 text-gray-900"},"Number in stock",-1)),Pt={class:"relative mt-2 rounded-md shadow-sm"},St={key:0,class:"mt-2 text-sm text-red-600"},Ct=h(()=>e("label",{for:"category",class:"block text-sm font-medium leading-6 text-gray-900"},"Select Product Category",-1)),It={class:"relative mt-2 rounded-md shadow-sm"},Nt=h(()=>e("option",{value:"",disabled:""},"Select category",-1)),$t=["value"],Ft={key:0,class:"mt-2 text-sm text-red-600"},Ut=h(()=>e("label",{for:"image",class:"block text-sm font-medium leading-6 text-gray-900"},"Upload Product Image",-1)),Mt={class:"mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},Vt={class:"text-center"},Bt=["src"],Dt={key:1,class:"mx-auto h-12 w-12 text-gray-300",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},Lt=h(()=>e("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z","clip-rule":"evenodd"},null,-1)),qt=[Lt],At={class:"mt-4 flex text-sm leading-6 text-gray-600"},jt={for:"file-upload",class:"relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"},Et=h(()=>e("span",null,"Upload a file",-1)),zt=h(()=>e("p",{class:"pl-1"},"or drag and drop",-1)),Tt=h(()=>e("p",{class:"text-xs leading-5 text-gray-600"},"PNG, JPG, GIF up to 10MB",-1)),Gt={class:"w-full"},Ht=["disabled"],Yt={key:0,class:"flex items-center justify-center"},Ot=h(()=>e("svg",{class:"animate-spin h-5 w-5 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291l2.829-2.829a4 4 0 000-5.656L6 4.707l-1.414 1.414 2.829 2.829a2 2 0 010 2.828L4.586 17.707 6 19.121z"})],-1)),Rt={key:1},Jt=B({__name:"index",setup(a){const{fetchProducts:c,products:p,loading:m}=D(),{createProduct:r,resetForm:l,form:s,loading:d,errors:v,selectedProduct:w,showDropdown:f,foodCategories:k}=Fe(),{updateProduct:b,setEditProduct:H,loading:q}=Ue(),{deleteProduct:Y,loading:Zt}=Ve(),O=g("list"),P=g(!1);g(!1),c();const R=()=>{P.value=!1,l(),w.value=null},J=async()=>{w.value?(H(s.value),await b().then(()=>{P.value=!1,c()})):await r().then(()=>{P.value=!1,c()})},C=x=>v[x]?"border-red-500":"border-gray-300",K=x=>{const u=x.target;if(u.files&&u.files[0]){const $=new FileReader;s.value.file=u.files[0],s.value.image=URL.createObjectURL(u.files[0]),$.onload=M=>{s.value.imageUrl=M.target.result},$.readAsDataURL(u.files[0])}},Z=x=>{P.value=!0,w.value={...x},s.value={...x}},Q=x=>x==null?"Nil":new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN"}).format(x);return(x,u)=>{const $=ce,M=$e;return i(),n("main",null,[t(O)==="list"?(i(),n("div",Be,[e("div",De,[Le,e("div",qe,[e("button",{type:"button",onClick:u[0]||(u[0]=o=>P.value=!0),class:"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},"Add products")])]),!t(m)&&t(p).length?(i(),n("div",Ae,[e("div",je,[e("div",Ee,[e("table",ze,[Te,e("tbody",Ge,[(i(!0),n(j,null,E(t(p),o=>(i(),n("tr",{key:o.id},[e("td",He,[e("div",Ye,[e("div",Oe,[o.image?(i(),X($,{key:0,class:"h-10 w-10",src:o.image},null,8,["src"])):y("",!0)]),e("div",Re,[e("div",Je,_(o.name||"Nil"),1),e("div",Ke,[e("span",Ze,_(o.productType),1)])])])]),e("td",Qe,_(o.description.slice(0,30)+"..."||"Nil"),1),e("td",We,_(Q(o.price)||"Nil"),1),e("td",Xe,_(o.currentInStock||"Nil"),1),e("td",et,_(o.category||"Nil"),1),e("td",tt,_(t(re).utc(o.createdAt).format("MMMM Do YYYY")||"Nil"),1),e("td",st,[e("div",ot,[e("a",{onClick:U(W=>Z(o),["prevent"]),href:"#",class:"text-indigo-600 hover:text-indigo-900"},"Edit",8,rt),e("a",{onClick:U(W=>t(Y)(o._id),["prevent"]),href:"#",class:"text-red-600 hover:text-red-900"},"Delete",8,it)])])]))),128))])])])])])):t(m)?(i(),n("div",nt)):(i(),n("div",lt,ut))])):y("",!0),G(M,{show:t(P),onClose:R,showFooter:!1},{title:z(()=>[e("h2",pt,_(t(w)?"Edit Product":"Create Product"),1)]),default:z(()=>[e("form",{onSubmit:U(J,["prevent"]),class:"space-y-6"},[e("div",null,[gt,e("div",ht,[I(e("input",{type:"text",id:"name","onUpdate:modelValue":u[1]||(u[1]=o=>t(s).name=o),class:S([C("name"),"block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"]),placeholder:"Product Name"},null,2),[[F,t(s).name]]),t(v).name?(i(),n("p",ft,_(t(v).name),1)):y("",!0)])]),e("div",null,[_t,e("div",vt,[I(e("textarea",{id:"description","onUpdate:modelValue":u[2]||(u[2]=o=>t(s).description=o),class:S([C("description"),"block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"]),rows:"4",placeholder:"Product Description"},null,2),[[F,t(s).description]]),t(v).description?(i(),n("p",xt,_(t(v).description),1)):y("",!0)])]),e("div",null,[yt,e("div",wt,[I(e("input",{type:"text",id:"price","onUpdate:modelValue":u[3]||(u[3]=o=>t(s).price=o),class:S([C("price"),"block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"]),placeholder:"Product Price"},null,2),[[F,t(s).price]]),t(v).price?(i(),n("p",bt,_(t(v).price),1)):y("",!0)])]),e("div",null,[kt,e("div",Pt,[I(e("input",{type:"text",id:"currentInStock","onUpdate:modelValue":u[4]||(u[4]=o=>t(s).currentInStock=o),class:S([C("currentInStock"),"block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"]),placeholder:"Product Estimated Price"},null,2),[[F,t(s).currentInStock]]),t(v).currentInStock?(i(),n("p",St,_(t(v).currentInStock),1)):y("",!0)])]),e("div",null,[Ct,e("div",It,[I(e("select",{id:"category","onUpdate:modelValue":u[5]||(u[5]=o=>t(s).category=o),class:S([C("category"),"block w-full rounded-md border-0 py-2.5 px-3 pr-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"])},[Nt,(i(!0),n(j,null,E(t(k),o=>(i(),n("option",{key:o,value:o},_(o),9,$t))),128))],2),[[ee,t(s).category]]),t(v).category?(i(),n("p",Ft,_(t(v).category),1)):y("",!0)])]),e("div",null,[Ut,e("div",Mt,[e("div",Vt,[t(s).image||t(s).imageUrl?(i(),n("img",{key:0,src:t(s).image?t(s).image:t(s).imageUrl,alt:"Image preview",class:"mt-4 mx-auto h-24 w-24 rounded-md object-cover"},null,8,Bt)):(i(),n("svg",Dt,qt)),e("div",At,[e("label",jt,[Et,e("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only",onChange:K},null,32)]),zt]),Tt])])]),e("div",Gt,[e("button",{disabled:t(d)||t(q),type:"submit",class:"rounded-md disabled:cursor-not-allowed disabled:opacity-25 w-full bg-indigo-600 px-3.5 py-2.5 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},[t(d)||t(q)?(i(),n("span",Yt,[Ot,te(" Processing... ")])):(i(),n("span",Rt,_(t(w)?"Update":"Submit"),1))],8,Ht)])],40,mt)]),_:1},8,["show"])])}}});const Kt=T(Jt,[["__scopeId","data-v-b17e0a0c"]]),is=B({__name:"products",setup(a){return(c,p)=>{const m=Kt;return i(),n("main",null,[G(m,{class:"px-4 sm:px-6 lg:px-8"})])}}});export{is as default};
