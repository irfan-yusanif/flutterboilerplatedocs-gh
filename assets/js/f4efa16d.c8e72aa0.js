"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["81935"],{84345:function(e,t,s){s.r(t),s.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>i,assets:()=>c,toc:()=>d,contentTitle:()=>a});var i=JSON.parse('{"id":"build-pre-call-ui/default-setup-screen","title":"DyteSetupScreen","description":"Dyte provides a default pre-call preview UI, also known as setup screen as part of our UI components.","source":"@site/docs/react-ui-kit/build-pre-call-ui/default-setup-screen.mdx","sourceDirName":"build-pre-call-ui","slug":"/build-pre-call-ui/default-setup-screen","permalink":"/react-ui-kit/build-pre-call-ui/default-setup-screen","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"DyteSetupScreen","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Use Web Core Hooks","permalink":"/react-ui-kit/using-hooks"},"next":{"title":"Basic structure","permalink":"/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton"}}'),r=s("85893"),n=s("50065"),o=s("11258");let l={title:"DyteSetupScreen",sidebar_position:4},a=void 0,c={},d=[];function p(e){let t={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Dyte provides a default pre-call preview UI, also known as setup screen as part of our UI components."}),"\n",(0,r.jsx)(t.p,{children:"Previously in the Quickstart example, we used the following component."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"<DyteMeeting meeting={meeting} showSetupScreen={true} />\n"})}),"\n",(0,r.jsx)(t.p,{children:"If you want to break down the above for a custom UI but still want to reuse the default setup screen, use the following component."}),"\n","\n",(0,r.jsx)(o.Z,{highlight:[{start:11,end:11}],hide:[{start:1,end:3}],file:`
import { DyteSetupScreen } from '@dytesdk/react-ui-kit';
import { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';

export default function MyMeeting() {
  const { meeting } = useDyteMeeting();
  const roomState = useDyteSelector((m) => m.self.roomState);

  return (
    <div className="flex w-full h-full">
      {roomState === 'init' && <DyteSetupScreen meeting={meeting} />}
      {roomState === 'joined' && <center>Custom in-meeting UI</center>}
      {roomState === 'ended' && <center>Custom post-meeting UI</center>}
    </div>
  );
}`}),"\n",(0,r.jsx)(t.p,{children:"If you want to build a custom pre-call UI, let's go to the next page to start building one."})]})}function u(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},11258:function(e,t,s){s.d(t,{Z:()=>f});var i=s("85893"),r=s("15957"),n=s("67294");let o=e=>`import React, { useEffect } from 'react';
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
}`,l=`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DyteComponentsModule } from '@dytesdk/angular-ui-kit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DyteComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}`;var a=s("79207"),c=s("73808");let d=function(e,t,s){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":o(t),"/meeting.tsx":s},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(i)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":s,"/src/app/app.module.ts":l},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(i)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":s},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},p=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},u=(e,t)=>{let s=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)s.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)s.push({className:"hide",line:t})}),s},m=e=>"light"===e?c.FM:c.pJ;function f(e){let{file:t,files:s={},framework:o="react-ts",entry:l,highlight:c=[],additionalDecorators:f=[],hide:h=[],minHeight:g="480px"}=e,{colorMode:x}=(0,a.I)(),y=d(o,x,t??"",s),w=p(o),v=[...f,...u(c,h)],[k,b]=(0,n.useState)(0===v.length);return(0,n.useEffect)(()=>{let e=()=>{0!==v.length&&!0==k&&b(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[v.length,k]),(0,i.jsxs)(r.oT,{template:o,customSetup:{dependencies:{...w}},theme:m(x),options:{activeFile:y.activeFile,visibleFiles:y.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...y.scripts]},files:y.files,children:[(0,i.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,i.jsx)("span",{children:"LIVE EDITOR"}),(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,i.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,i.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,i.jsx)("div",{onClick:e=>{e.stopPropagation(),b(!0)},className:"cursor-text",children:k?(0,i.jsx)(r._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,i.jsx)(r.Pw,{className:"code-viewer",initMode:"immediate",decorators:v,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,i.jsx)(r.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:g}})]})]})}}}]);