(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,function(e,t,n){e.exports={wrapper:"Contacts_wrapper__K8yZc",container:"Contacts_container__2_1QV",inputsContainer:"Contacts_inputsContainer__3mQ9f",inputs:"Contacts_inputs__3Z4O2",field:"Contacts_field__-IfwA",name:"Contacts_name__Kqq-H",email:"Contacts_email__34Ft2",subject:"Contacts_subject__2Jvvv",message:"Contacts_message__3t9Wo",submit:"Contacts_submit__2JUFh",submitBtn:"Contacts_submitBtn__1J5tG",underField:"Contacts_underField__1ioM0",fieldContainer:"Contacts_fieldContainer__2Rt0D",nameText:"Contacts_nameText__1pZ6L"}},function(e,t,n){e.exports={container:"CommonStyles_container__2Vh6a",upperThenHeader:"CommonStyles_upperThenHeader__2LbIg",title:"CommonStyles_title__34EdT"}},,,function(e,t,n){e.exports={main:"Main_main__lNU7z",greeting:"Main_greeting__1JEoQ",name:"Main_name__32BA2",rest:"Main_rest__2T4Hq",photo:"Main_photo__1vDZx",keyboardSpan:"Main_keyboardSpan__94JAv",hideShow:"Main_hideShow__31BVT",developer:"Main_developer__2ha5Q",react:"Main_react__1jJ0R"}},,,function(e,t,n){e.exports={nava:"Nava_nava__1x3t3",link:"Nava_link__Wy0n_",test:"Nava_test__3qkhJ",underMenu:"Nava_underMenu__2qYUX",underTest:"Nava_underTest__2eXcZ",getWidth:"Nava_getWidth__2fkXe"}},,,function(e,t,n){e.exports={footer:"Footer_footer__UFTZ7",container:"Footer_container__1zTw7",title:"Footer_title__U0ZDi",socnetsContainer:"Footer_socnetsContainer__iWdTj",copyright:"Footer_copyright__9xevA"}},,,,,function(e,t,n){e.exports={skills:"Skills_skills__1dCkn",container:"Skills_container__13m8M",skillsContainer:"Skills_skillsContainer__306BD"}},function(e,t,n){e.exports={skill:"Skill_skill__OApuO",icon:"Skill_icon__m_i_t"}},function(e,t,n){e.exports={projects:"Projects_projects__1G1EB",container:"Projects_container__24afY",title:"Projects_title__1-KC0",projectsContainer:"Projects_projectsContainer__UGdCt"}},function(e,t,n){e.exports={project:"Project_project__1Cpeh",screen:"Project_screen__1BSw_"}},,,,,,function(e,t,n){e.exports={up:"Up_up__1mh3y",show:"Up_show__2pUUT",svg:"Up_svg__uzH6w"}},,function(e,t,n){e.exports={header:"Header_header__2ixK0"}},,,function(e,t,n){e.exports={icon:"Socnet_icon__2p_fg"}},,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(15),i=n.n(s),o=(n(38),n(5)),r=(n(39),n(29)),l=n.n(r),j=n(10),d=n.n(j),u=n(8),m=n(6),_=n(1),b=a.a.memo((function(){var e=Object(m.c)((function(e){return e.state.currentAnchor})),t=Object(c.useCallback)((function(t){return"".concat(d.a.link," ").concat(e===t?d.a.test:"")}),[e]),n=Object(c.useCallback)((function(t){return"".concat(d.a.underMenu," ").concat(e===t?d.a.underTest:"")}),[e]),a=Object(c.useCallback)((function(e){var t=document.getElementById(e);if(t){var n=t.getBoundingClientRect().top-85+window.pageYOffset;window.scrollTo({top:n,behavior:"smooth"})}}),[]);return Object(_.jsxs)("div",{className:d.a.nava,children:[Object(_.jsxs)("div",{children:[Object(_.jsx)(u.b,{className:function(){return t("main")},onClick:function(){return a("main")},to:"#main",children:"Common"}),Object(_.jsx)("div",{className:n("main")})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)(u.b,{className:function(){return t("projects")},onClick:function(){return a("projects")},to:"#projects",children:"Projects"}),Object(_.jsx)("div",{className:n("projects")})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)(u.b,{className:function(){return t("skills")},onClick:function(){return a("skills")},to:"#skills",children:"Skills"}),Object(_.jsx)("div",{className:n("skills")})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)(u.b,{className:function(){return t("contacts")},onClick:function(){return a("contacts")},to:"#contacts",children:"Contacts"}),Object(_.jsx)("div",{className:n("contacts")})]})]})})),p=a.a.memo((function(){return Object(_.jsx)("div",{id:"header",className:l.a.header,children:Object(_.jsx)(b,{})})})),O=n(7),h=n.n(O),x=n(4),f=n.n(x),v=n(16),N=n(28),C="TEST",g="CHANGE-TYPED-VALUE",T="REVERSE",k="END_TYPE_CYCLE",y="SET_CURRENT_ANCHOR",E=function(e){return{type:g,payload:{typed:e}}},S=function(e){return{type:y,payload:{currentAnchor:e}}},w={mainSpans:["Frontend","React","Redux","TypeScript","JavaScript"],typed:"",reverse:!1,count:0,currentAnchor:"main"},R=a.a.memo((function(){var e=Object(m.c)((function(e){return e.state})),t=Object(m.b)();return Object(c.useEffect)((function(){var n=e.mainSpans[e.count],c=e.typed;e.reverse?setTimeout((function(){var n;t(c?E(c.slice(0,c.length-1)):(n=(e.count+1)%e.mainSpans.length,{type:k,payload:{typed:"",reverse:!1,count:n}}))}),200):setTimeout((function(){n.length>c.length?t(E(c+n[c.length])):setTimeout((function(){t({type:T,payload:{reverse:!0}})}),2e3)}),250*Math.random()+50)}),[e.typed,e.reverse,e.count,t,e.mainSpans]),Object(_.jsx)("span",{className:h.a.react,children:e.typed})})),A=a.a.memo((function(){return Object(_.jsx)("div",{id:"main",className:h.a.main,children:Object(_.jsxs)("div",{className:f.a.container,children:[Object(_.jsxs)("div",{className:h.a.greeting,children:[Object(_.jsx)("h2",{className:h.a.rest,children:"Hi There! I am"}),Object(_.jsx)("h1",{className:h.a.name,children:"ALEXANDER BASALOV"}),Object(_.jsxs)("p",{children:[Object(_.jsx)(R,{}),Object(_.jsx)("span",{className:h.a.keyboardSpan,children:"|"}),Object(_.jsx)("span",{className:h.a.developer,children:"developer."})]})]}),Object(_.jsx)("div",{className:h.a.photo,children:"Photo"})]})})})),B=n(18),F=n.n(B),M=n(9),H=n(19),J=n.n(H),P=a.a.memo((function(e){return Object(_.jsxs)("div",{className:J.a.skill,children:[Object(_.jsx)("div",{className:J.a.icon,children:Object(_.jsx)(M.a,{icon:e.icon})}),Object(_.jsx)("h3",{children:e.title}),Object(_.jsx)("span",{className:J.a.description,children:e.description})]})})),U=n(12),D=a.a.memo((function(){var e="Dolores sit ipsum velit purus aliquet, massa fringilla leo the drana.";return Object(_.jsx)("div",{id:"skills",className:F.a.skills,children:Object(_.jsxs)("div",{className:"".concat(f.a.container," ").concat(F.a.container),children:[Object(_.jsxs)("h2",{className:f.a.title,children:[Object(_.jsx)("span",{className:f.a.upperThenHeader,children:"EXPERIENCE"}),"EXPERIENCE"]}),Object(_.jsxs)("div",{className:F.a.skillsContainer,children:[Object(_.jsx)(P,{title:"TypeScript",icon:U.faJs,description:e}),Object(_.jsx)(P,{title:"TypeScript",icon:U.faJs,description:e}),Object(_.jsx)(P,{title:"TypeScript",icon:U.faJs,description:e}),Object(_.jsx)(P,{title:"TypeScript",icon:U.faJs,description:e})]})]})})})),I=n(20),L=n.n(I),Y=n(21),Z=n.n(Y),q=a.a.memo((function(e){return Object(_.jsxs)("div",{className:Z.a.project,children:[Object(_.jsx)("div",{className:Z.a.screen}),Object(_.jsx)("h3",{children:e.title}),Object(_.jsx)("span",{className:Z.a.description,children:e.description})]})})),V=a.a.memo((function(){return Object(_.jsx)("div",{id:"projects",className:L.a.projects,children:Object(_.jsxs)("div",{className:"".concat(f.a.container," ").concat(L.a.container),children:[Object(_.jsxs)("h2",{className:f.a.title,children:[Object(_.jsx)("span",{className:f.a.upperThenHeader,children:"PROJECTS"}),"PROJECTS"]}),Object(_.jsxs)("div",{className:L.a.projectsContainer,children:[Object(_.jsx)(q,{title:"Social_network",description:"soc net",screen:null}),Object(_.jsx)(q,{title:"Social_network",description:"soc net",screen:null})]})]})})})),X=n(3),z=n.n(X),G=a.a.memo((function(){return Object(_.jsx)("div",{id:"contacts",className:z.a.wrapper,children:Object(_.jsxs)("div",{className:"".concat(f.a.container," ").concat(z.a.container),children:[Object(_.jsxs)("h2",{className:f.a.title,children:[Object(_.jsx)("span",{className:f.a.upperThenHeader,children:"GET IN TOUCH"}),"CONTACTS"]}),Object(_.jsx)("form",{className:z.a.inputsContainer,children:Object(_.jsxs)("div",{className:z.a.inputs,children:[Object(_.jsxs)("div",{className:z.a.fieldContainer,children:[Object(_.jsx)("input",{className:z.a.field+" "+z.a.name}),Object(_.jsx)("div",{className:z.a.underField}),Object(_.jsx)("div",{className:z.a.nameText,children:"Name"})]}),Object(_.jsxs)("div",{className:z.a.fieldContainer,children:[Object(_.jsx)("input",{className:z.a.field+" "+z.a.email}),Object(_.jsx)("div",{className:z.a.underField}),Object(_.jsx)("div",{className:z.a.nameText,children:"Email"})]}),Object(_.jsxs)("div",{className:z.a.fieldContainer+" "+z.a.subject,children:[Object(_.jsx)("input",{className:z.a.field+" "+z.a.subject}),Object(_.jsx)("div",{className:z.a.underField}),Object(_.jsx)("div",{className:z.a.nameText,children:"Subject"})]}),Object(_.jsxs)("div",{className:z.a.fieldContainer+" "+z.a.message,children:[Object(_.jsx)("textarea",{className:z.a.field+" "+z.a.message}),Object(_.jsx)("div",{className:z.a.underField}),Object(_.jsx)("div",{className:z.a.nameText,children:"Message"})]}),Object(_.jsx)("div",{className:z.a.submit,children:Object(_.jsx)("input",{className:z.a.submitBtn,type:"submit",value:"Send Message"})})]})})]})})})),W=n(27),K=n.n(W),Q=n(31),$=a.a.memo((function(){var e=Object(c.useCallback)((function(){var e=document.getElementById("main");if(e){var t=e.getBoundingClientRect().top-85+window.pageYOffset;window.scrollTo({top:t,behavior:"smooth"})}}),[]);return Object(_.jsx)("div",{className:K.a.up,onClick:e,children:Object(_.jsx)(M.a,{icon:Q.faChevronUp,size:"3x",className:K.a.svg})})})),ee=n(13),te=n.n(ee),ne=n(14),ce=n(22),ae=n(32),se=n.n(ae),ie=a.a.memo((function(e){return Object(_.jsx)("div",{className:se.a.icon,children:Object(_.jsx)(M.a,{icon:e.icon,size:"xs"})})})),oe=a.a.memo((function(){return Object(_.jsx)("div",{className:te.a.footer,children:Object(_.jsxs)("div",{className:"".concat(f.a.container," ").concat(te.a.container),children:[Object(_.jsxs)("div",{className:te.a.socnetsContainer,children:[Object(_.jsx)(ie,{icon:ne.c}),Object(_.jsx)(ie,{icon:ne.a}),Object(_.jsx)(ie,{icon:ne.b}),Object(_.jsx)(ie,{icon:ce.a}),Object(_.jsx)(ie,{icon:ce.c}),Object(_.jsx)(ie,{icon:ce.b}),Object(_.jsx)(ie,{icon:ne.d})]}),Object(_.jsx)("p",{className:te.a.copyright,children:"2021\xa9 React Developer Resume. Developed and Designed by Alexandr Basalov"})]})})}));var re=function(){var e=Object(m.c)((function(e){return e.state.currentAnchor})),t=Object(m.b)(),n=Object(c.useState)(0),a=Object(o.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)([]),l=Object(o.a)(r,2),j=l[0],d=l[1],u=Object(c.useMemo)((function(){return["main","skills","contacts","projects"]}),[]),b=Object(c.useState)(!1),O=Object(o.a)(b,2),h=O[0],x=O[1],f=Object(c.useCallback)((function(){i(window.scrollY)}),[]);return Object(c.useEffect)((function(){var n=document.getElementById("header");n&&(document.documentElement.scrollTop<=n.offsetHeight?h&&x(!1):h||x(!0));t(function(e,t){return function(n){var c,a=Object(v.a)(e);try{for(a.s();!(c=a.n()).done;){var s=c.value,i=s.getBoundingClientRect();(i.top>=85&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)||i.top<200&&i.bottom>=(window.innerHeight||document.documentElement.clientHeight)-100)&&t!==s.id&&(console.log(i,window.pageYOffset),n(S(s.id)))}}catch(o){a.e(o)}finally{a.f()}}}(j,e))}),[s,h]),Object(c.useEffect)((function(){document.title="React developer";for(var e=[],t=0;t<u.length;t++){var n=document.getElementById(u[t]);n&&e.push(n)}return window.addEventListener("scroll",f),d(e),function(){window.removeEventListener("scroll",f)}}),[]),Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(p,{}),Object(_.jsx)(A,{}),Object(_.jsx)(D,{}),Object(_.jsx)(V,{}),Object(_.jsx)(G,{}),Object(_.jsx)(oe,{}),h&&Object(_.jsx)($,{})]})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},je=n(23),de=n(33),ue=Object(je.b)({state:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:case T:case g:case y:return Object(N.a)(Object(N.a)({},e),t.payload);case C:default:return e}}}),me=Object(je.c)(ue,Object(je.a)(de.a));i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(u.a,{children:Object(_.jsx)(m.a,{store:me,children:Object(_.jsx)(re,{})})})}),document.getElementById("root")),le()}],[[49,1,2]]]);
//# sourceMappingURL=main.f99d859e.chunk.js.map