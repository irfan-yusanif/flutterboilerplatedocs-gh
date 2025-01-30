"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["39653"],{23127:function(e,t,i){i.r(t),i.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"build-in-call-ui/default-meeting-ui","title":"DyteMeeting","description":"Dyte provides, DyteMeeting an all encompassing component that internally handles everything from showing a pre-call UI to in-call UI and post-call screen.","source":"@site/docs/react-ui-kit/build-in-call-ui/default-meeting-ui.mdx","sourceDirName":"build-in-call-ui","slug":"/build-in-call-ui/default-meeting-ui","permalink":"/react-ui-kit/build-in-call-ui/default-meeting-ui","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"DyteMeeting","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Virtual background","permalink":"/react-ui-kit/build-pre-call-ui/build-your-own/add-middleware"},"next":{"title":"Handling States and Configs","permalink":"/react-ui-kit/build-in-call-ui/build-your-own/handling-states-and-configs"}}'),n=i("85893"),r=i("50065"),l=i("11258");let o={title:"DyteMeeting",sidebar_position:1},a=void 0,c={},d=[];function m(e){let t={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Dyte provides, ",(0,n.jsx)(t.code,{children:"DyteMeeting"})," an all encompassing component that internally handles everything from showing a pre-call UI to in-call UI and post-call screen."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"<DyteMeeting meeting={meeting} showSetupScreen={true} />\n"})}),"\n",(0,n.jsx)(t.p,{children:"This component contains pre-call, in-call UI as well post-call UIs."}),"\n",(0,n.jsxs)(t.p,{children:["Following code shows a basic split of these UIs from the ",(0,n.jsx)(t.code,{children:"DyteMeeting"})," component."]}),"\n","\n",(0,n.jsx)(l.Z,{highlight:[{start:14,end:33}],hide:[{start:1,end:4}],file:`
import { DyteSetupScreen, DyteEndedScreen, DyteHeader, DyteParticipantsAudio, DyteDialogManager, DyteStage, DyteGrid, DyteNotifications, DyteSidebar, DyteControlbar } from '@dytesdk/react-ui-kit';
import { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';
import { useEffect } from 'react';

export default function MyMeeting() {
  const { meeting } = useDyteMeeting();
  const roomState = useDyteSelector((m) => m.self.roomState);

return (

<div className="flex h-full w-full">
  {roomState === 'init' && <DyteSetupScreen meeting={meeting} />}
  {roomState === 'joined' && (
      <div className="flex flex-col w-full h-full">
        <header>
          <DyteHeader meeting={meeting}/>
        </header>

        <main className='flex w-full flex-1 justify-center items-center' style={{
          backgroundColor: '#272727',
          color: '#ffffff',
        }}>
          <span>Custom in-call UI</span>
          <DyteDialogManager meeting={meeting}/>
        </main>

        <footer className='flex w-full overflow-visible'>
          <DyteControlbar meeting={meeting}/>
        </footer>
      </div>

)}
{roomState === 'ended' && (<DyteEndedScreen meeting={meeting}/>)}

</div>
); }`}),"\n",(0,n.jsxs)(t.p,{children:["Since ",(0,n.jsx)(t.code,{children:"DyteMeeting"})," is a complex component and provides a lot more than just the UI, let's go to the next page and start splitting it to uncover what it does."]})]})}function p(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11258:function(e,t,i){i.d(t,{Z:()=>g});var s=i("85893"),n=i("15957"),r=i("67294");let l=e=>`import React, { useEffect } from 'react';
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
export class AppModule {}`;var a=i("79207"),c=i("73808");let d=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":l(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(s)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":o},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(s)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},m=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},p=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},u=e=>"light"===e?c.FM:c.pJ;function g(e){let{file:t,files:i={},framework:l="react-ts",entry:o,highlight:c=[],additionalDecorators:g=[],hide:f=[],minHeight:h="480px"}=e,{colorMode:y}=(0,a.I)(),x=d(l,y,t??"",i),v=m(l),w=[...g,...p(c,f)],[b,D]=(0,r.useState)(0===w.length);return(0,r.useEffect)(()=>{let e=()=>{0!==w.length&&!0==b&&D(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[w.length,b]),(0,s.jsxs)(n.oT,{template:l,customSetup:{dependencies:{...v}},theme:u(y),options:{activeFile:x.activeFile,visibleFiles:x.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...x.scripts]},files:x.files,children:[(0,s.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)("span",{children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,s.jsx)("div",{onClick:e=>{e.stopPropagation(),D(!0)},className:"cursor-text",children:b?(0,s.jsx)(n._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,s.jsx)(n.Pw,{className:"code-viewer",initMode:"immediate",decorators:w,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,s.jsx)(n.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:h}})]})]})}}}]);