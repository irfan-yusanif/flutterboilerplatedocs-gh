"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["38365"],{8922:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"build-pre-call-ui/build-your-own/edit-user-name","title":"Edit user name","description":"A common use case of pre-call UI is to give the user a option to set / edit their name.","source":"@site/docs/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/edit-user-name","permalink":"/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Edit user name","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Basic structure","permalink":"/react-ui-kit/build-pre-call-ui/build-your-own/initial-code-skeleton"},"next":{"title":"Audio/video - Preview","permalink":"/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview"}}'),n=i("85893"),r=i("50065"),a=i("11258");let o={title:"Edit user name",sidebar_position:2},l=void 0,d={},c=[{value:"Permissions",id:"permissions",level:3},{value:"File: CustomMeetingPreview.tsx",id:"file-custommeetingpreviewtsx",level:3}];function m(e){let t={code:"code",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A common use case of pre-call UI is to give the user a option to set / edit their name."}),"\n",(0,n.jsx)(t.h3,{id:"permissions",children:"Permissions"}),"\n",(0,n.jsxs)(t.p,{children:["Requires ",(0,n.jsx)(t.code,{children:"meeting.self.permissions.canEditDisplayName"})," to be ",(0,n.jsx)(t.code,{children:"true"})]}),"\n",(0,n.jsxs)(t.p,{children:["In the preset editor, ensure ",(0,n.jsx)(t.code,{children:"Miscellaneous > Edit Name"})," is toggled enabled."]}),"\n",(0,n.jsx)("img",{src:"/static/react/preset-edit-name.png"}),"\n",(0,n.jsx)(t.h3,{id:"file-custommeetingpreviewtsx",children:"File: CustomMeetingPreview.tsx"}),"\n",(0,n.jsxs)(t.p,{children:["We add a ",(0,n.jsx)(t.code,{children:"<input>"})," element for entering the participant name. We should not show this input if the user doese not have permission to edit name (",(0,n.jsx)(t.code,{children:"permissions.canEditDisplayName"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"await meeting.self.setName(participantName);"})," sets the new name for the participant."]}),"\n",(0,n.jsxs)(t.p,{children:["At the end, we let user join the meeting using ",(0,n.jsx)(t.code,{children:"await meeting.join();"}),"."]}),"\n",(0,n.jsx)(a.Z,{highlight:[{start:8,end:8},{start:29,end:30},{start:44,end:44}],hide:[{start:1,end:4}],file:`
import { useDyteMeeting, useDyteSelector } from "@dytesdk/react-web-core";
import { DyteButton } from "@dytesdk/react-ui-kit";
import { useState, useEffect } from "react";

export default function CustomMeetingPreview() {
  const { meeting } = useDyteMeeting();
  const permissions = useDyteSelector((m) => m.self.permissions);
  const [participantName, setParticipantName] = useState("");

  useEffect(() => {
    if (!meeting) {
      return;
    }
    setParticipantName(meeting.self.name);
  }, [meeting]);

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center"
      style={{ minHeight: "400px" }}
    >
      <div className="flex w-full items-center justify-around p-[10%]">
        <div></div>
        <div className="flex w-1/4 flex-col justify-between">
          <div className="flex flex-col items-center">
            <p>Joining as</p>
          </div>
          {permissions.canEditDisplayName && (
            <input
              placeholder="Your name"
              className="mb-10 rounded-sm border p-2.5 focus:border-blue-500"
              value={participantName}
              onChange={(event) => setParticipantName(event.target.value)}
            />
          )}
          <DyteButton
            kind="wide"
            size="lg"
            style={{ cursor: participantName ? "pointer" : "not-allowed" }}
            onClick={async () => {
              if (participantName) {
                if (permissions.canEditDisplayName) {
                  await meeting.self.setName(participantName);
                }
                await meeting.join();
              }
            }}
          >
            Join
          </DyteButton>
        </div>
      </div>
    </div>
  );
}
`})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11258:function(e,t,i){i.d(t,{Z:()=>h});var s=i("85893"),n=i("15957"),r=i("67294");let a=e=>`import React, { useEffect } from 'react';
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
}`,o=`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DyteComponentsModule } from '@dytesdk/angular-ui-kit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DyteComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}`;var l=i("79207"),d=i("73808");let c=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":a(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(s)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":o},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(s)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},m=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},p=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},u=e=>"light"===e?d.FM:d.pJ;function h(e){let{file:t,files:i={},framework:a="react-ts",entry:o,highlight:d=[],additionalDecorators:h=[],hide:f=[],minHeight:g="480px"}=e,{colorMode:x}=(0,l.I)(),v=c(a,x,t??"",i),w=m(a),y=[...h,...p(d,f)],[b,j]=(0,r.useState)(0===y.length);return(0,r.useEffect)(()=>{let e=()=>{0!==y.length&&!0==b&&j(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[y.length,b]),(0,s.jsxs)(n.oT,{template:a,customSetup:{dependencies:{...w}},theme:u(x),options:{activeFile:v.activeFile,visibleFiles:v.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...v.scripts]},files:v.files,children:[(0,s.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)("span",{children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,s.jsx)("div",{onClick:e=>{e.stopPropagation(),j(!0)},className:"cursor-text",children:b?(0,s.jsx)(n._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,s.jsx)(n.Pw,{className:"code-viewer",initMode:"immediate",decorators:y,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,s.jsx)(n.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:g}})]})]})}}}]);