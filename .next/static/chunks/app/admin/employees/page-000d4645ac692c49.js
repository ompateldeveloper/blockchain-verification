(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[24],{932:(e,a,t)=>{Promise.resolve().then(t.bind(t,5148))},5148:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>et});var s=t(5155),r=t(9749),n=t(2115),i=t(9253),l=t(3312),d=t(1567);let c=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{className:"relative w-full overflow-auto",children:(0,s.jsx)("table",{ref:a,className:(0,d.cn)("w-full caption-bottom text-sm",t),...r})})});c.displayName="Table";let o=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("thead",{ref:a,className:(0,d.cn)("[&_tr]:border-b",t),...r})});o.displayName="TableHeader";let m=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("tbody",{ref:a,className:(0,d.cn)("[&_tr:last-child]:border-0",t),...r})});m.displayName="TableBody",n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("tfoot",{ref:a,className:(0,d.cn)("border-t bg-zinc-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-zinc-800/50",t),...r})}).displayName="TableFooter";let x=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("tr",{ref:a,className:(0,d.cn)("border-b transition-colors hover:bg-zinc-100/50 data-[state=selected]:bg-zinc-100 dark:hover:bg-zinc-800/50 dark:data-[state=selected]:bg-zinc-800",t),...r})});x.displayName="TableRow";let f=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("th",{ref:a,className:(0,d.cn)("h-12 px-4 text-left align-middle font-medium text-zinc-500 [&:has([role=checkbox])]:pr-0 dark:text-zinc-400",t),...r})});f.displayName="TableHead";let p=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("td",{ref:a,className:(0,d.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...r})});p.displayName="TableCell",n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("caption",{ref:a,className:(0,d.cn)("mt-4 text-sm text-zinc-500 dark:text-zinc-400",t),...r})}).displayName="TableCaption";var h=t(7485),u=t(3518),j=t(6967),g=t(4858);let b=e=>{let{className:a,...t}=e;return(0,s.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,d.cn)("mx-auto flex w-full justify-center",a),...t})};b.displayName="Pagination";let N=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("ul",{ref:a,className:(0,d.cn)("flex flex-row items-center gap-1",t),...r})});N.displayName="PaginationContent";let v=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("li",{ref:a,className:(0,d.cn)("",t),...r})});v.displayName="PaginationItem";let z=e=>{let{className:a,isActive:t,size:r="icon",...n}=e;return(0,s.jsx)("a",{"aria-current":t?"page":void 0,className:(0,d.cn)((0,l.r)({variant:t?"outline":"ghost",size:r}),a),...n})};z.displayName="PaginationLink";let y=e=>{let{className:a,...t}=e;return(0,s.jsxs)(z,{"aria-label":"Go to previous page",size:"default",className:(0,d.cn)("gap-1 pl-2.5",a),...t,children:[(0,s.jsx)(u.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{children:"Previous"})]})};y.displayName="PaginationPrevious";let w=e=>{let{className:a,...t}=e;return(0,s.jsxs)(z,{"aria-label":"Go to next page",size:"default",className:(0,d.cn)("gap-1 pr-2.5",a),...t,children:[(0,s.jsx)("span",{children:"Next"}),(0,s.jsx)(j.A,{className:"h-4 w-4"})]})};w.displayName="PaginationNext";let k=e=>{let{className:a,...t}=e;return(0,s.jsxs)("span",{"aria-hidden":!0,className:(0,d.cn)("flex h-9 w-9 items-center justify-center",a),...t,children:[(0,s.jsx)(g.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"More pages"})]})};k.displayName="PaginationEllipsis";var R=t(1517),C=t(6046);function D(){let[e,a]=(0,n.useState)([]),[t,r]=(0,n.useState)(1),[d,u]=(0,n.useState)(0),j=(0,C.useRouter)();(0,n.useEffect)(()=>{D()},[t]);let D=async()=>{try{R.K.get("/employees?page=".concat(t,"&limit=5")).then(e=>{a(e.data.data),u(e.data.totalPages)}).catch(e=>{console.error("Error fetching employees:",e)})}catch(e){console.error("Error fetching employees:",e)}},E=e=>{R.K.delete("/employees/".concat(e)).then(e=>{D()}).catch(e=>{console.error("Error deleting employee:",e)})};return(0,s.jsxs)("div",{children:[(0,s.jsxs)(c,{children:[(0,s.jsx)(o,{children:(0,s.jsxs)(x,{children:[(0,s.jsx)(f,{children:"Employee ID"}),(0,s.jsx)(f,{children:"Employee Hash"}),(0,s.jsx)(f,{children:"Employee Name"}),(0,s.jsx)(f,{children:"Start Date"}),(0,s.jsx)(f,{children:"Active Status"}),(0,s.jsx)(f,{children:"Actions"})]})}),(0,s.jsx)(m,{children:0===e.length?(0,s.jsx)(x,{children:(0,s.jsx)(p,{colSpan:6,className:"text-center",children:"No employees found"})}):e.map(e=>(0,s.jsxs)(x,{children:[(0,s.jsx)(p,{className:"truncate max-w-32 ",children:e.empId}),(0,s.jsx)(p,{className:"truncate max-w-64",children:null==e.empHash?(0,s.jsx)("span",{className:"text-red-500 dark:text-red-600 text-xs ",children:"Action Required"}):e.empHash}),(0,s.jsx)(p,{children:"".concat(e.fname," ").concat(e.mname||""," ").concat(e.lname)}),(0,s.jsx)(p,{children:(0,i.GP)(new Date(e.startDate),"PP")}),(0,s.jsx)(p,{children:e.endDate?"Inactive":"Active"}),(0,s.jsx)(p,{children:(0,s.jsxs)(h.rI,{children:[(0,s.jsx)(h.ty,{asChild:!0,children:(0,s.jsxs)(l.$,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,s.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,s.jsx)(g.A,{className:"h-4 w-4"})]})}),(0,s.jsxs)(h.SQ,{align:"end",children:[(0,s.jsx)(h.lp,{children:"Actions"}),(0,s.jsx)(h._2,{onClick:()=>{j.push("/admin/employees/"+e.empId)},children:"Edit details"}),!e.empHash&&(0,s.jsx)(h._2,{onClick:()=>console.log("Re:do",e.empId),children:"Take Action"}),e.endDate&&(0,s.jsx)(h._2,{onClick:()=>{j.push("/certificate/"+e.empId)},children:"View Certificate"}),(0,s.jsx)(h._2,{className:"text-red-500 dark:text-red-600",onClick:()=>E(e.empId),children:"Delete Employee Data"})]})]})})]},e.id))})]}),(0,s.jsx)("div",{className:"flex justify-between items-center mt-4",children:(0,s.jsx)(b,{children:(0,s.jsxs)(N,{children:[(0,s.jsx)(v,{children:(0,s.jsx)(y,{href:"#"})}),(0,s.jsx)(v,{children:(0,s.jsx)(z,{href:"#",children:"1"})}),(0,s.jsx)(v,{children:(0,s.jsx)(k,{})}),(0,s.jsx)(v,{children:(0,s.jsx)(w,{href:"#"})})]})})})]})}var E=t(6217),_=t(767);let A=E.bL,S=E.l9,I=E.ZL,P=E.bm,F=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(E.hJ,{ref:a,className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...r})});F.displayName=E.hJ.displayName;let J=n.forwardRef((e,a)=>{let{className:t,children:r,...n}=e;return(0,s.jsxs)(I,{children:[(0,s.jsx)(F,{}),(0,s.jsxs)(E.UC,{ref:a,className:(0,d.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-zinc-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-zinc-800 dark:bg-zinc-950",t),...n,children:[r,(0,s.jsxs)(E.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-500 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-400",children:[(0,s.jsx)(_.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});J.displayName=E.UC.displayName;let T=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(E.hE,{ref:a,className:(0,d.cn)("text-lg font-semibold leading-none tracking-tight",t),...r})});T.displayName=E.hE.displayName;let H=n.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(E.VY,{ref:a,className:(0,d.cn)("text-sm text-zinc-500 dark:text-zinc-400",t),...r})});H.displayName=E.VY.displayName;var L=t(7301),Z=t(3900),U=t(8986),B=t(2679),M=t(582),q=t(8982),V=t(7594),$=t(8617),G=t(9606),O=t(2353),K=t(3595);function W(){var e,a,t,r,i,d,c,o;let[m,x]=n.useState("idle"),[f,p]=n.useState("");console.log(f);let h=n.useRef(null),{register:u,handleSubmit:j,reset:g,formState:{errors:b}}=(0,G.mN)({resolver:(0,B.u)(K.w)}),N=async e=>{var a;let t=new M.k(null===(a=window)||void 0===a?void 0:a.ethereum),s=await t.getSigner(),r="0x86686D239bc67de752B28b7A12c7D5Df0fE551C0";if(!r)throw Error("Contract address is not defined");let n=new q.NZ(r,O.HV,s),i=await n.addExperience(e.empId,"".concat(e.fname," ").concat(e.mname," ").concat(e.lname),"Accentiqa",String(e.startDate),String(e.endDate),e.pfNumber),l=await i.wait();return console.log(i,"tx"),console.log(l,"receipt"),{empHash:l.logs[0].args[0],tx:i.hash||""}},v=async e=>{R.K.post("/employees",e).then(e=>{x("Updating hash on blockchain")}).catch(e=>{console.error("Error adding employee:",e),x("idle"),p("Error adding employee to Database")});let{empHash:a,tx:t}=await N(e);x("Updating hash on database"),R.K.post("/employees/update-hash/".concat(e.empId),{empHash:a,tx:t}).then(e=>{var a;x("idle"),null===(a=h.current)||void 0===a||a.click(),g()}).catch(e=>{console.error("Error adding employee:",e),x("idle"),p("Error adding employee to Database")})};return(0,s.jsxs)("form",{className:" flex flex-col px-2 space-y-2 relative",onSubmit:j(v),children:["idle"!==m&&(0,s.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-zinc-50 dark:bg-gray-900 rounded-md shadow-md",children:(0,s.jsxs)("div",{children:[m,(0,s.jsx)("div",{className:"animate-spin w-min",children:(0,s.jsx)(V.A,{})})]})}),(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(U.J,{htmlFor:"fname",children:"First Name *"}),(0,s.jsx)(Z.p,{...u("fname")}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(e=b.fname)||void 0===e?void 0:e.message})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(U.J,{htmlFor:"mname",children:"Middle Name *"}),(0,s.jsx)(Z.p,{...u("mname")}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(a=b.mname)||void 0===a?void 0:a.message})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(U.J,{htmlFor:"lname",children:"Last Name *"}),(0,s.jsx)(Z.p,{...u("lname")}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(t=b.lname)||void 0===t?void 0:t.message})]})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(U.J,{htmlFor:"email",children:"Email *"}),(0,s.jsx)(Z.p,{...u("email")}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(r=b.email)||void 0===r?void 0:r.message})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(U.J,{htmlFor:"empId",children:"Employee ID *"}),(0,s.jsx)(Z.p,{...u("empId")}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(i=b.empId)||void 0===i?void 0:i.message})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(U.J,{htmlFor:"pfNumber",children:"PF Number *"}),(0,s.jsx)(Z.p,{...u("pfNumber")}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(d=b.pfNumber)||void 0===d?void 0:d.message})]}),(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsx)(U.J,{htmlFor:"startDate",children:"Start Date *"}),(0,s.jsx)(Z.p,{type:"date",...u("startDate",{valueAsDate:!0})}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(c=b.startDate)||void 0===c?void 0:c.message})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)(U.J,{htmlFor:"endDate",className:"flex items-center gap-1",children:["End Date",(0,s.jsxs)(L.jc,{children:[(0,s.jsx)(L.d0,{children:(0,s.jsx)($.A,{className:"w-4"})}),(0,s.jsx)(L.Et,{children:"Leave empty if the employee is still active"})]})]}),(0,s.jsx)(Z.p,{type:"date",...u("endDate")}),(0,s.jsx)("div",{className:"text-red-500 dark:text-red-600 text-xs",children:null==b?void 0:null===(o=b.endDate)||void 0===o?void 0:o.message})]})]}),(0,s.jsx)(l.$,{type:"submit",children:"Submit"}),(0,s.jsx)(P,{ref:h})]})}var Y=t(1719),Q=t(5770);let X=Q.bL,ee=Q.l9,ea=n.forwardRef((e,a)=>{let{className:t,align:r="center",sideOffset:n=4,...i}=e;return(0,s.jsx)(Q.ZL,{children:(0,s.jsx)(Q.UC,{ref:a,align:r,sideOffset:n,className:(0,d.cn)("z-50 w-72 rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",t),...i})})});function et(){let[e,a]=(0,n.useState)(),[t,i]=(0,n.useState)("");async function d(){if(void 0===window.ethereum)return console.log("MetaMask is not installed."),a(!1),!1;{let e=new M.k(window.ethereum);return(await e.listAccounts()).length>0?(a(!0),!0):(console.log("MetaMask is installed but not connected."),a(!1),!1)}}async function c(){if(e)i(""),a(!1),await window.ethereum.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]});else{let e=new M.k(window.ethereum),t=await e.getSigner(),s=await t.getAddress();a(!0),i(s)}}return(0,n.useEffect)(()=>{d()},[]),(0,s.jsx)("div",{className:"container mx-auto md:py-10 p-4 ",children:(0,s.jsxs)(r.Zp,{children:[(0,s.jsx)(r.aR,{children:(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsxs)("div",{className:"flex-col",children:[(0,s.jsx)(r.ZB,{children:"Employee List"}),(0,s.jsx)(r.BT,{children:"Here you can view all employees"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)(L.jc,{children:[(0,s.jsx)(L.d0,{children:(0,s.jsx)($.A,{className:"w-5"})}),(0,s.jsx)(L.Et,{children:(0,s.jsx)("div",{className:"text-xs text-zinc-500 ",children:" Add Employee Data to Blockchain"})})]}),(0,s.jsxs)(A,{children:[(0,s.jsx)(S,{className:"",children:(0,s.jsx)(l.$,{asChild:!0,children:(0,s.jsx)("div",{className:"",children:"Add"})})}),(0,s.jsxs)(J,{children:[e?(0,s.jsxs)(X,{children:[(0,s.jsx)(ee,{className:"w-fit",children:(0,s.jsxs)("div",{className:"text-xs text-zinc-500 flex items-center gap-1 w-fit",children:[(0,s.jsx)("div",{className:"bg-green-500 w-2 h-2 rounded-full"})," Connected to Metamask ",(0,s.jsx)(Y.A,{className:"w-4"})]})}),(0,s.jsx)(ea,{align:"start",className:"w-min p-1",children:(0,s.jsx)(l.$,{onClick:c,variant:"destructive",children:"Disconnect Wallet"})})]}):(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:"text-zinc-500 font-semibold text-lg",children:"It looks like You are not Connected to Metamask"}),(0,s.jsx)(l.$,{className:"btn",onClick:c,children:"Connect Wallet"})]}),e&&(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)(T,{children:"Add Employee"}),(0,s.jsx)(H,{className:"mb-2",children:"Fill in the details of the employee"}),(0,s.jsx)(W,{})]})]})]})]})]})}),(0,s.jsx)(r.Wu,{children:(0,s.jsx)(D,{})})]})})}ea.displayName=Q.UC.displayName},3595:(e,a,t)=>{"use strict";t.d(a,{w:()=>r});var s=t(3415);let r=s.z.object({fname:s.z.string().min(2,"First name must be at least 2 characters long"),mname:s.z.string().min(1,"Middle name must be at least 1 characters long").optional().or(s.z.literal("")),lname:s.z.string().min(2,"Last name must be at least 2 characters long"),email:s.z.string().email(),empId:s.z.string().min(1),pfNumber:s.z.string().min(1),startDate:s.z.date({required_error:"Start date is required"}),endDate:s.z.string().optional().transform(e=>e?new Date(e):void 0).refine(e=>!e||!isNaN(e.getTime()),{message:"Invalid date format"})})},3312:(e,a,t)=>{"use strict";t.d(a,{$:()=>c,r:()=>d});var s=t(5155),r=t(2115),n=t(2317),i=t(1027),l=t(1567);let d=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",{variants:{variant:{default:"bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",destructive:"bg-red-500 text-zinc-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",outline:"border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",secondary:"bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",ghost:"hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",link:"text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,a)=>{let{className:t,variant:r,size:i,asChild:c=!1,...o}=e,m=c?n.DX:"button";return(0,s.jsx)(m,{className:(0,l.cn)(d({variant:r,size:i,className:t})),ref:a,...o})});c.displayName="Button"},9749:(e,a,t)=>{"use strict";t.d(a,{BT:()=>c,Wu:()=>o,ZB:()=>d,Zp:()=>i,aR:()=>l});var s=t(5155),r=t(2115),n=t(1567);let i=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:(0,n.cn)("rounded-lg border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",t),...r})});i.displayName="Card";let l=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",t),...r})});l.displayName="CardHeader";let d=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:(0,n.cn)("text-2xl font-semibold leading-none tracking-tight",t),...r})});d.displayName="CardTitle";let c=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:(0,n.cn)("text-sm text-zinc-500 dark:text-zinc-400",t),...r})});c.displayName="CardDescription";let o=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:(0,n.cn)("p-6 pt-0",t),...r})});o.displayName="CardContent",r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)("div",{ref:a,className:(0,n.cn)("flex items-center p-6 pt-0",t),...r})}).displayName="CardFooter"},7485:(e,a,t)=>{"use strict";t.d(a,{SQ:()=>x,_2:()=>f,lp:()=>p,mB:()=>h,rI:()=>o,ty:()=>m});var s=t(5155),r=t(2115),n=t(8755),i=t(6967),l=t(8867),d=t(3565),c=t(1567);let o=n.bL,m=n.l9;n.YJ,n.ZL,n.Pb,n.z6,r.forwardRef((e,a)=>{let{className:t,inset:r,children:l,...d}=e;return(0,s.jsxs)(n.ZP,{ref:a,className:(0,c.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-zinc-100 data-[state=open]:bg-zinc-100 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus:bg-zinc-800 dark:data-[state=open]:bg-zinc-800",r&&"pl-8",t),...d,children:[l,(0,s.jsx)(i.A,{className:"ml-auto"})]})}).displayName=n.ZP.displayName,r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(n.G5,{ref:a,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",t),...r})}).displayName=n.G5.displayName;let x=r.forwardRef((e,a)=>{let{className:t,sideOffset:r=4,...i}=e;return(0,s.jsx)(n.ZL,{children:(0,s.jsx)(n.UC,{ref:a,sideOffset:r,className:(0,c.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-zinc-200 bg-white p-1 text-zinc-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50",t),...i})})});x.displayName=n.UC.displayName;let f=r.forwardRef((e,a)=>{let{className:t,inset:r,...i}=e;return(0,s.jsx)(n.q7,{ref:a,className:(0,c.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",r&&"pl-8",t),...i})});f.displayName=n.q7.displayName,r.forwardRef((e,a)=>{let{className:t,children:r,checked:i,...d}=e;return(0,s.jsxs)(n.H_,{ref:a,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",t),checked:i,...d,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.VF,{children:(0,s.jsx)(l.A,{className:"h-4 w-4"})})}),r]})}).displayName=n.H_.displayName,r.forwardRef((e,a)=>{let{className:t,children:r,...i}=e;return(0,s.jsxs)(n.hN,{ref:a,className:(0,c.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50",t),...i,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(n.VF,{children:(0,s.jsx)(d.A,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=n.hN.displayName;let p=r.forwardRef((e,a)=>{let{className:t,inset:r,...i}=e;return(0,s.jsx)(n.JU,{ref:a,className:(0,c.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",t),...i})});p.displayName=n.JU.displayName;let h=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(n.wv,{ref:a,className:(0,c.cn)("-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800",t),...r})});h.displayName=n.wv.displayName},3900:(e,a,t)=>{"use strict";t.d(a,{p:()=>i});var s=t(5155),r=t(2115),n=t(1567);let i=r.forwardRef((e,a)=>{let{className:t,type:r,...i}=e;return(0,s.jsx)("input",{type:r,className:(0,n.cn)("flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",t),ref:a,...i})});i.displayName="Input"},8986:(e,a,t)=>{"use strict";t.d(a,{J:()=>c});var s=t(5155),r=t(2115),n=t(6195),i=t(1027),l=t(1567);let d=(0,i.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=r.forwardRef((e,a)=>{let{className:t,...r}=e;return(0,s.jsx)(n.b,{ref:a,className:(0,l.cn)(d(),t),...r})});c.displayName=n.b.displayName}},e=>{var a=a=>e(e.s=a);e.O(0,[651,780,942,572,149,707,253,105,985,441,517,358],()=>a(932)),_N_E=e.O()}]);