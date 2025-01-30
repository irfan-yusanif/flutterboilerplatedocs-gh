"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["48303"],{94489:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"build-pre-call-ui/build-your-own/add-audio-video-preview","title":"Audio/video - Preview","description":"For building audio/video preview","source":"@site/docs/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/add-audio-video-preview","permalink":"/flutterboilerplatedocs/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-preview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Audio/video - Preview","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Edit user name","permalink":"/flutterboilerplatedocs/react-ui-kit/build-pre-call-ui/build-your-own/edit-user-name"},"next":{"title":"Audio/video - Device Selection","permalink":"/flutterboilerplatedocs/react-ui-kit/build-pre-call-ui/build-your-own/add-audio-video-device"}}'),r=i("85893"),n=i("50065"),l=i("11258");let o={title:"Audio/video - Preview",sidebar_position:3},a=void 0,d={},c=[{value:"Permissions",id:"permissions",level:3},{value:"Media Preview and Controls",id:"media-preview-and-controls",level:3}];function m(e){let t={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"For building audio/video preview"}),"\n",(0,r.jsx)(t.h3,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["For AUDIO - The value of ",(0,r.jsx)(t.code,{children:"meeting.self.permissions.canProduceAudio"})," needs to be ",(0,r.jsx)(t.code,{children:"ALLOWED"})]}),"\n",(0,r.jsxs)(t.li,{children:["For VIDEO - The value of ",(0,r.jsx)(t.code,{children:"meeting.self.permissions.canProduceVideo"})," needs to be ",(0,r.jsx)(t.code,{children:"ALLOWED"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In the preset editor, toggle these settings under ",(0,r.jsx)(t.code,{children:"Media"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"media-preview-and-controls",children:"Media Preview and Controls"}),"\n",(0,r.jsxs)(t.p,{children:["We'll be using ",(0,r.jsx)(t.code,{children:"DyteParticipantTile"}),", ",(0,r.jsx)(t.code,{children:"DyteAvatar"}),", ",(0,r.jsx)(t.code,{children:"DyteNameTag"}),", ",(0,r.jsx)(t.code,{children:"DyteAudioVisualizer"})," for building a preview tile and\n",(0,r.jsx)(t.code,{children:"DyteMicToggle"})," and ",(0,r.jsx)(t.code,{children:"DyteCameraToggle"})," for media controls"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<DyteParticipantTile meeting={meeting} participant={meeting.self}>\n  <DyteAvatar participant={meeting.self} />\n  <DyteNameTag participant={meeting.self}>\n    <DyteAudioVisualizer participant={meeting.self} slot="start" />\n  </DyteNameTag>\n  <div id="user-actions" className="absolute bottom-2 right-2 flex">\n    <DyteMicToggle meeting={meeting} size="sm"></DyteMicToggle>\n    <DyteCameraToggle meeting={meeting} size="sm"></DyteCameraToggle>\n  </div>\n</DyteParticipantTile>\n'})}),"\n",(0,r.jsx)(l.Z,{highlight:[{start:18,end:22},{start:31,end:32},{start:34,end:34}],hide:[{start:1,end:6}],file:`
import {
  DyteParticipantTile, DyteAvatar,DyteNameTag,
  DyteAudioVisualizer, DyteMicToggle, DyteCameraToggle, DyteButton,
} from '@dytesdk/react-ui-kit';
import { useDyteMeeting } from '@dytesdk/react-web-core';

export default function CustomMeetingPreview() {
  const { meeting } = useDyteMeeting();

  return (
    <div
      className="h-full w-full flex flex-col items-center justify-center"
      style={{ minHeight: '400px' }}
    >
      <div className="flex w-full items-center justify-around p-[10%]">
        <div className="relative">
          <DyteParticipantTile meeting={meeting} participant={meeting.self}>
            <DyteAvatar participant={meeting.self} />
            <DyteNameTag participant={meeting.self}>
              <DyteAudioVisualizer participant={meeting.self} slot="start" />
            </DyteNameTag>
            <div
              id="user-actions"
              className="absolute flex"
              style={{
                bottom: '8px',
                right: '8px',
              }}
            >
              <DyteMicToggle meeting={meeting} size="sm"></DyteMicToggle>
              <DyteCameraToggle meeting={meeting} size="sm"></DyteCameraToggle>
            </div>
          </DyteParticipantTile>
        </div>
        <div className="flex w-1/4 flex-col justify-between">
          <div className="flex flex-col items-center">
            <p>Joining as {meeting.self.name}</p>
          </div>
          <DyteButton
            kind="wide"
            size="lg"
            onClick={async () => {
              await meeting.join();
            }}
          >
            Join
          </DyteButton>
        </div>
      </div>
    </div>
  );
}
`})]})}function p(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11258:function(e,t,i){i.d(t,{Z:()=>g});var s=i("85893"),r=i("15957"),n=i("67294");let l=e=>`import React, { useEffect } from 'react';
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
export class AppModule {}`;var a=i("79207"),d=i("73808");let c=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":l(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(s)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":o},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(s)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},m=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},p=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},u=e=>"light"===e?d.FM:d.pJ;function g(e){let{file:t,files:i={},framework:l="react-ts",entry:o,highlight:d=[],additionalDecorators:g=[],hide:f=[],minHeight:h="480px"}=e,{colorMode:v}=(0,a.I)(),y=c(l,v,t??"",i),x=m(l),w=[...g,...p(d,f)],[b,D]=(0,n.useState)(0===w.length);return(0,n.useEffect)(()=>{let e=()=>{0!==w.length&&!0==b&&D(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[w.length,b]),(0,s.jsxs)(r.oT,{template:l,customSetup:{dependencies:{...x}},theme:u(v),options:{activeFile:y.activeFile,visibleFiles:y.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...y.scripts]},files:y.files,children:[(0,s.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)("span",{children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,s.jsx)("div",{onClick:e=>{e.stopPropagation(),D(!0)},className:"cursor-text",children:b?(0,s.jsx)(r._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,s.jsx)(r.Pw,{className:"code-viewer",initMode:"immediate",decorators:w,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,s.jsx)(r.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:h}})]})]})}}}]);