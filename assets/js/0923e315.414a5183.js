"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["35000"],{16581:function(e,t,i){i.r(t),i.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>d});var s=JSON.parse('{"id":"quickstart","title":"Quickstart","description":"This quickstart shows how to use Dyte\'s UI Kit prebuilt components to add live","source":"@site/docs/ui-kit/quickstart.mdx","sourceDirName":".","slug":"/quickstart","permalink":"/flutterboilerplatedocs/ui-kit/quickstart","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/flutterboilerplatedocs/ui-kit/"},"next":{"title":"Design System","permalink":"/flutterboilerplatedocs/ui-kit/design-system"}}'),n=i("85893"),r=i("50065"),l=i("22380"),a=i("11258");let o={sidebar_position:3},d="Quickstart",c={},h=[{value:"Before Getting Started",id:"before-getting-started",level:2},{value:"Step 1: Install the SDK",id:"step-1-install-the-sdk",level:2},{value:"Version",id:"version",level:3},{value:"Step 2: Get Started with Dyte Prebuilt Components",id:"step-2-get-started-with-dyte-prebuilt-components",level:2}];function p(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Head:i,TabItem:s,Tabs:o}=t;return!i&&m("Head",!0),!s&&m("TabItem",!0),!o&&m("Tabs",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"quickstart",children:"Quickstart"})}),"\n",(0,n.jsx)(t.p,{children:"This quickstart shows how to use Dyte's UI Kit prebuilt components to add live\nvideo and audio to your web applications with minimal coding and a variety of\nmeeting UI customization options."}),"\n",(0,n.jsxs)(t.p,{children:["For getting started quickly, you can use our\n",(0,n.jsx)(t.a,{href:"https://github.com/dyte-io/html-samples#samples",children:"sample code"}),". You can clone\nand run a sample application from the\n",(0,n.jsx)(t.a,{href:"https://github.com/dyte-io/html-samples",children:"HTML UI Kit GitHub repository"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"before-getting-started",children:"Before Getting Started"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Make sure you've read the ",(0,n.jsx)(t.a,{href:"/getting-started",children:"Getting Started with Dyte"})," topic\nand completed the following steps:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Create a ",(0,n.jsx)(t.a,{href:"https://dev.dyte.io/",children:"Dyte Developer Account"})]}),"\n",(0,n.jsxs)(t.li,{children:["Create a ",(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/create_meeting",children:"Dyte Meeting"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/?v=v2#/operations/add_participant",children:"Add Participant"})," to the meeting"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-install-the-sdk",children:"Step 1: Install the SDK"}),"\n",(0,n.jsxs)(t.p,{children:["Since the UI Kit is built on top of the Core SDK, you must install the\n",(0,n.jsx)(t.code,{children:"web-core"})," package along with the ",(0,n.jsx)(t.code,{children:"ui-kit"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"There are two ways to use UI Kit in your project, according to your project\nsetup."}),"\n",(0,n.jsx)(t.p,{children:"You can install the SDK using CDN, npm, or Yarn."}),"\n",(0,n.jsxs)(o,{groupId:"cdn-npm",children:[(0,n.jsxs)(s,{value:"cdn",label:"CDN",default:!0,children:[(0,n.jsxs)(t.p,{children:["To set up UI Kit components and web-core, add the following script tags inside\nthe ",(0,n.jsx)(t.code,{children:"<head />"})," tag."]}),(0,n.jsx)(l._8,{}),(0,n.jsx)(t.p,{children:"You can also import utilities or any other export from CDN:"}),(0,n.jsx)(l.SQ,{})]}),(0,n.jsxs)(s,{value:"npm",label:"npm",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install @dytesdk/ui-kit @dytesdk/web-core\n"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,n.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]}),(0,n.jsxs)(s,{value:"yarn",label:"yarn",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"yarn add @dytesdk/ui-kit @dytesdk/web-core\n"})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,n.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]})]}),"\n",(0,n.jsx)(t.h3,{id:"version",children:"Version"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"@dytesdk/ui-kit"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fui-kit",children:(0,n.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fui-kit.svg",alt:"npm version"})})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"@dytesdk/web-core"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://badge.fury.io/js/@dytesdk%2Fweb-core",children:(0,n.jsx)(t.img,{src:"https://badge.fury.io/js/@dytesdk%2Fweb-core.svg",alt:"npm version"})})})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-get-started-with-dyte-prebuilt-components",children:"Step 2: Get Started with Dyte Prebuilt Components"}),"\n",(0,n.jsx)(t.p,{children:"Here's a series of steps that you need to perform:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Load the Dyte component."}),"\n",(0,n.jsx)(t.li,{children:"Initialize the Dyte client."}),"\n",(0,n.jsxs)(t.li,{children:["Call the ",(0,n.jsx)(t.code,{children:"init()"})," method and pass the ",(0,n.jsx)(t.code,{children:"authToken"}),":"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"authToken"})}),(0,n.jsxs)(t.td,{children:["After you've created the meeting, add each participant to the meeting using the ",(0,n.jsx)(t.a,{href:"/api#/operations/add_participant",children:"Add Participant API"}),". The API response contains the authToken."]})]})})]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Pass the meeting object to UI Kit, which will use it to retrieve meeting\ninformation and display it on the user interface."}),"\n",(0,n.jsx)(t.p,{children:"The meeting object serves as the link between web-core and UI Kit, allowing\nthem to communicate with one another. Once the UI Kit has the meeting object,\nit can join and leave meetings, and so on."}),"\n"]}),"\n"]}),"\n","\n",(0,n.jsx)(a.Z,{highlight:[{start:10,end:10}],hide:[{start:1,end:8}],framework:"static",file:`<head>
  <script type="module">
      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit@latest/loader/index.es2017.js';
      defineCustomElements();
  </script>
  <!-- Import Web Core via CDN too -->
  <!-- <script src="https://cdn.dyte.in/core/dyte.js"></script> -->
</head>
<body>
  <dyte-meeting id="my-meeting"></dyte-meeting>
  <script>
    const init = async () => {
      const meeting = await DyteClient.init({
        // Add your own auth token here
        authToken: yourAuthToken,
        defaults: {
          audio: false,
          video: false,
        },
      });

      document.getElementById('my-meeting').showSetupScreen = false;
      document.getElementById('my-meeting').meeting = meeting;
    };

  init();
  </script>
</body>
`}),"\n",(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"UI Kit Quickstart"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}function m(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11258:function(e,t,i){i.d(t,{Z:()=>m});var s=i("85893"),n=i("15957"),r=i("67294");let l=e=>`import React, { useEffect } from 'react';
import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { provideDyteDesignSystem } from '@dytesdk/react-ui-kit';
import Custom from './meeting.tsx';

const initInProgress = {
  value: false,
};

export default function App() {
  const [meeting, initMeeting] = useDyteClient();

  useEffect(() => {
    if (initInProgress.value) return;
    initInProgress.value = true;
    initMeeting({
      roomName: 'qplrfc-uuujcj',
      authToken:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds',
      defaults: {
        audio: false,
        video: false,
      },
    }).then((m) => {


      // window.meeting = m;
      m.meta.meetingStartedTimestamp = new Date();
      m.participants.setMockParticipantCount(5, 5);
      // m.recording.recordingState = 'RECORDING';
      const theme = document.getElementsByTagName('html')[0].dataset['theme'];
      initInProgress.value = false;
      provideDyteDesignSystem(document.body, {
        theme: "${e}",
      });
      document.getElementsByTagName("html")[0].classList.remove("dark");
      document.getElementsByTagName("html")[0].classList.remove("light");
      document.getElementsByTagName("html")[0].classList.add("${e}");

      HTMLAudioElement.prototype.play = function() {};
      window.tailwind.config.darkMode = 'selector';
    });
  }, []);


  return (<div className="bg-white dark:bg-black flex justify-center items-center w-full h-screen">
    <DyteProvider value={meeting}><Custom /></DyteProvider>
    </div>
  );
}`,a=`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DyteComponentsModule } from '@dytesdk/angular-ui-kit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DyteComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}`;var o=i("79207"),d=i("73808");let c=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":l(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(s)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":a},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(s)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},h=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},p=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},u=e=>"light"===e?d.FM:d.pJ;function m(e){let{file:t,files:i={},framework:l="react-ts",entry:a,highlight:d=[],additionalDecorators:m=[],hide:x=[],minHeight:j="480px"}=e,{colorMode:g}=(0,o.I)(),f=c(l,g,t??"",i),y=h(l),v=[...m,...p(d,x)],[b,k]=(0,r.useState)(0===v.length);return(0,r.useEffect)(()=>{let e=()=>{0!==v.length&&!0==b&&k(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[v.length,b]),(0,s.jsxs)(n.oT,{template:l,customSetup:{dependencies:{...y}},theme:u(g),options:{activeFile:f.activeFile,visibleFiles:f.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...f.scripts]},files:f.files,children:[(0,s.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)("span",{children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,s.jsx)("div",{onClick:e=>{e.stopPropagation(),k(!0)},className:"cursor-text",children:b?(0,s.jsx)(n._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,s.jsx)(n.Pw,{className:"code-viewer",initMode:"immediate",decorators:v,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,s.jsx)(n.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:j}})]})]})}},22380:function(e,t,i){i.d(t,{J$:()=>c,y0:()=>d,ym:()=>o,_8:()=>h,SQ:()=>p});var s=i("85893"),n=i("67294"),r=i("98536");let l={};async function a(e){let{pkg:t="ui-kit"}=e;if(void 0!==l[t])return l[t];let i=await fetch(`https://registry.npmjs.com/@dytesdk/${t}`),s=(await i.json())["dist-tags"].latest;return l[t]=s,s}let o=e=>{let{pkg:t}=e,[i,l]=(0,n.useState)("+");return(0,n.useEffect)(()=>{let e=JSON.stringify({maven:t});fetch("https://b72qj023g7.execute-api.ap-south-1.amazonaws.com/default/android-core-latest",{method:"POST",body:e}).then(e=>e.json()).then(e=>l(e.latestVersion??"+"))},[]),(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{language:"groovy",children:`dependencies {
    // (other dependencies)
    implementation 'io.dyte:${t}:${i}'
}`})})},d=e=>{let{pkg:t,path:i}=e,[l,a]=(0,n.useState)(void 0);return(0,n.useEffect)(()=>{fetch(`https://api.github.com/repos/CocoaPods/Specs/contents/Specs/${i}/`,{method:"GET",body:null}).then(e=>e.json()).then(e=>a(e[e.length-1].name))},[]),(0,s.jsx)("div",{children:(0,s.jsx)(r.Z,{language:"ruby",children:`pod '${t}' ${l?`, '${l}'`:""}`})})},c=()=>{let[e,t]=(0,n.useState)("");return(0,n.useEffect)(()=>{(async function e(){let e=await a({pkg:"web-core"});t(`-${e}`)})()},[]),(0,s.jsx)(r.Z,{language:"html",children:`<script src="https://cdn.dyte.in/core/dyte${e}.js" />`})},h=()=>{let[e,t]=(0,n.useState)(""),[i,l]=(0,n.useState)("");return(0,n.useEffect)(()=>{(async function e(){let e=await a({pkg:"web-core"});t(`-${e}`);let i=await a({pkg:"ui-kit"});l(`@${i}`)})()},[]),(0,s.jsx)(r.Z,{language:"html",children:`<head>
  <script type="module">
      import { defineCustomElements } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${i}/loader/index.es2017.js';
      defineCustomElements();
  </script>
  <!-- Import Web Core via CDN too -->
  <script src="https://cdn.dyte.in/core/dyte${e}.js"></script>
</head>`})},p=e=>{let{modules:t=["provideDyteDesignSystem","extendConfig,"]}=e,[i,l]=(0,n.useState)("");return(0,n.useEffect)(()=>{(async function e(){let e=await a({pkg:"ui-kit"});l(`@${e}`)})()},[]),(0,s.jsx)(r.Z,{language:"html",children:`<head>
  <script type="module">
    import {
      ${t.join(", ")}
    } from 'https://cdn.jsdelivr.net/npm/@dytesdk/ui-kit${i}/dist/esm/index.js';
  </script>
</head>`})}},12093:function(e,t,i){i.d(t,{Z:()=>N});var s=i("85893"),n=i("67294"),r=i("86010"),l=i("6735"),a=i("34550"),o=i("7670"),d=i("87262"),c=i("44634"),h=i("3829");let p="playgroundContainer_TGbA",u="playgroundHeader_qwyd",m="playgroundEditor_PvJ1",x="playgroundPreview_bb8I";var j=i("21078"),g=i("64092"),f=i("79207");function y(e){let{children:t}=e;return(0,s.jsx)("div",{className:(0,r.Z)(u),children:t})}function v(){return(0,s.jsx)("div",{children:"Loading..."})}function b(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{children:(0,s.jsx)(o.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Preview"})}),(0,s.jsx)("div",{className:x,children:(0,s.jsx)(c.Z,{fallback:(0,s.jsx)(v,{}),children:()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.i5,{}),(0,s.jsx)(a.IF,{})]})})})]})}function k(){let e=(0,l.Z)();return(0,s.jsx)(a.uz,{className:(0,r.Z)(m,"border border-secondary-800 !pb-4")},String(e))}function w(){return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("div",{className:"-mb-1 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-2 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)(o.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsx)(k,{})]})}let I={value:!1};function N(e){let{children:t,transformCode:i,...l}=e,{siteConfig:{themeConfig:o}}=(0,d.Z)(),{liveCodeBlock:{playgroundPosition:c}}=o,u=(0,h.p)(),[m,x]=(0,j.useDyteClient)(),{colorMode:y}=(0,f.I)();return(0,n.useEffect)(()=>{!I.value&&(I.value=!0,x({roomName:"qplrfc-uuujcj",authToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdkYzU0MGRjLWQ5MjUtNDVjMi1hZTFiLWM2NDc2YTUwNmM2NyIsImxvZ2dlZEluIjp0cnVlLCJpYXQiOjE2NjU2NDcxNjksImV4cCI6MTY3NDI4NzE2OX0.hJvo1PV1_jaxwiQbT8ft7Yi4lhIPgAsuEJHqohHYC_2XNef7kA4NhrYLvwrrxOo3AKh9_XTjnj_bsgzIDh35RRggawJniEjuE83ju2xhMXMVaa7TNDje2BsH5-VnFJ4y5hOwxGphrP5iHY_U4k_0qOQcEfVEJMymJvx0gq_Ueds",defaults:{audio:!1,video:!1}}).then(e=>{!1==location.href.includes("build-pre-call-ui")&&e.join(),window.meeting=e,e.meta.meetingStartedTimestamp=new Date,e.participants.setMockParticipantCount(5,5);let t=document.getElementsByTagName("html")[0].dataset.theme;(0,g.provideDyteDesignSystem)(document.body,{theme:t}),I.value=!1}))},[]),(0,n.useEffect)(()=>{(0,g.provideDyteDesignSystem)(document.body,{theme:y})},[y]),(0,s.jsx)("div",{className:(0,r.Z)(p,"!rounded-none !shadow-none"),children:(0,s.jsx)(j.DyteProvider,{value:m,children:(0,s.jsx)(a.nu,{code:t.replace(/\n$/,""),transformCode:i??(e=>`${e};`),theme:u,...l,children:"top"===c?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b,{}),(0,s.jsx)(w,{})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{}),(0,s.jsx)(b,{})]})})})})}},58015:function(e,t,i){i.d(t,{Z:()=>a});var s=i("67294"),n=i("64092"),r=i("21078"),l=i("85893");let a={React:s,...s,...n,...r,Row:function(e){let{children:t,style:i={},...s}=e;return(0,l.jsx)("div",{style:{display:"flex",gap:8,flexWrap:"wrap",...i},...s,children:t})},Col:function(e){let{children:t,style:i={},...s}=e;return(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:8,...i},...s,children:t})},Center:function(e){let{children:t,style:i,...s}=e;return(0,l.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flexWrap:"wrap",gap:8,...i},...s,children:t})},airplaneSVG:'<svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.989 11.946a1.991 1.991 0 0 1-2.05 1.99l-4.738-.139-3.454 7.143c-.277.574-.86.94-1.498.94a.926.926 0 0 1-.919-1.037l.862-7.193-3.765-.11-.49 1.341a1.29 1.29 0 0 1-1.211.847.901.901 0 0 1-.901-.902V13.35l-.81-.169a1.261 1.261 0 0 1 0-2.469l.81-.168V9.066c0-.46.343-.838.788-.894l.113-.007a1.29 1.29 0 0 1 1.21.846l.492 1.34 3.751-.11-.849-7.084a.93.93 0 0 1-.005-.055l-.002-.055c0-.511.415-.926.926-.926.585 0 1.123.307 1.423.8l.075.14 3.403 7.035 4.79-.14a1.991 1.991 0 0 1 2.048 1.932l.001.058Z" fill="currentColor"/></svg>',activePlugin:{}}}}]);