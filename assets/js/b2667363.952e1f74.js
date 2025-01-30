"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["16168"],{99682:function(e,t,i){i.r(t),i.d(t,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"build-pre-call-ui/build-your-own/initial-code-skeleton","title":"Basic structure","description":"What are we building?","source":"@site/docs/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/initial-code-skeleton","permalink":"/flutterboilerplatedocs/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Basic structure","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"DyteSetupScreen","permalink":"/flutterboilerplatedocs/react-ui-kit/build-pre-call-ui/default-setup-screen"},"next":{"title":"Edit user name","permalink":"/flutterboilerplatedocs/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name"}}'),n=i("85893"),r=i("50065"),o=i("11258");let l={title:"Basic structure",sidebar_position:1},a=void 0,c={},d=[{value:"What are we building?",id:"what-are-we-building",level:2},{value:"File: Meeting.tsx",id:"file-meetingtsx",level:3},{value:"File: CustomMeetingPreview.tsx",id:"file-custommeetingpreviewtsx",level:3}];function u(e){let t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"what-are-we-building",children:"What are we building?"}),"\n",(0,n.jsx)(t.p,{children:"We are deconstructing the default setup screen."}),"\n",(0,n.jsx)(t.p,{children:"At the end of this group of docs, we should have the following screen built using low level components."}),"\n",(0,n.jsx)("img",{src:"/static/guides/build-pre-call-ui/skeleton-page/meeting-precall.png",width:"1280",height:"720",alt:"Meeting Precall post skeleton changes",className:"mb-4"}),"\n",(0,n.jsx)(t.p,{children:"Let's put a basic skeleton and the initial boilerplate code."}),"\n",(0,n.jsx)(t.h3,{id:"file-meetingtsx",children:"File: Meeting.tsx"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { DyteSetupScreen } from '@dytesdk/react-ui-kit';\nimport type DyteClient from '@dytesdk/web-core';\nimport { useEffect, useState } from 'react';\nimport { CustomStates, SetState } from './types';\nimport CustomMeetingPreview from './CustomMeetingPreview';\n\nfunction MyMeeting() {\n  const { meeting } = useDyteMeeting();\n  const roomState = useDyteSelector((m) => m.self.roomState);\n\n  return (\n    <div style={{ height: '480px' }}>\n      {/* Our custom pre-call UI */}\n      {roomState === 'init' && <CustomMeetingPreview />}\n\n      {/* Essential components to play audio, show notifications etc */}\n      <DyteParticipantsAudio meeting={meeting} />\n      <DyteNotifications meeting={meeting} />\n      <DyteDialogManager meeting={meeting} />\n\n      {/* \n\n      For the sake of simplicty, the next couple of pages \n        will only talk about CustomMeetingPreview \n      \n      {roomState === 'joined' && <CustomInMeetingUI />}\n      {roomState === 'ended' && <CustomPostMeetingUI />)}\n      \n      */}\n    </div>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"file-custommeetingpreviewtsx",children:"File: CustomMeetingPreview.tsx"}),"\n",(0,n.jsx)(o.Z,{highlight:[{start:12,end:12},{start:18,end:18}],hide:[{start:1,end:3}],file:`
import { useDyteMeeting } from "@dytesdk/react-web-core";
import { DyteButton } from "@dytesdk/react-ui-kit";

export default function CustomMeetingPreview() {
  const { meeting } = useDyteMeeting();
  return (
    <div
      className="flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <p>Joining as {meeting.self.name}</p>
      </div>
      <DyteButton
        size="lg"
        onClick={async () => {
          // Call join() to enter the meeting
          await meeting.join();
        }}
      >
        Join
      </DyteButton>
    </div>
  );
}
`})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11258:function(e,t,i){i.d(t,{Z:()=>g});var s=i("85893"),n=i("15957"),r=i("67294");let o=e=>`import React, { useEffect } from 'react';
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
export class AppModule {}`;var a=i("79207"),c=i("73808");let d=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":o(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(s)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":l},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(s)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},u=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},m=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},p=e=>"light"===e?c.FM:c.pJ;function g(e){let{file:t,files:i={},framework:o="react-ts",entry:l,highlight:c=[],additionalDecorators:g=[],hide:h=[],minHeight:f="480px"}=e,{colorMode:x}=(0,a.I)(),y=d(o,x,t??"",i),w=u(o),v=[...g,...m(c,h)],[b,k]=(0,r.useState)(0===v.length);return(0,r.useEffect)(()=>{let e=()=>{0!==v.length&&!0==b&&k(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[v.length,b]),(0,s.jsxs)(n.oT,{template:o,customSetup:{dependencies:{...w}},theme:p(x),options:{activeFile:y.activeFile,visibleFiles:y.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...y.scripts]},files:y.files,children:[(0,s.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)("span",{children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,s.jsx)("div",{onClick:e=>{e.stopPropagation(),k(!0)},className:"cursor-text",children:b?(0,s.jsx)(n._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,s.jsx)(n.Pw,{className:"code-viewer",initMode:"immediate",decorators:v,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,s.jsx)(n.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})]})]})}}}]);