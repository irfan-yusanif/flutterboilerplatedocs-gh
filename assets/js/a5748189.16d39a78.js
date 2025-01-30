"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["50176"],{14208:function(e,t,i){i.r(t),i.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>n,assets:()=>c,toc:()=>p,contentTitle:()=>l});var n=JSON.parse('{"id":"components/dyte-participant-tile","title":"DyteParticipantTile","description":"Learn how to use and customize the DyteParticipantTile component in Dyte\'s React UI Kit with our detailed documentation.","source":"@site/docs/react-ui-kit/components/dyte-participant-tile.mdx","sourceDirName":"components","slug":"/components/dyte-participant-tile","permalink":"/flutterboilerplatedocs/react-ui-kit/components/dyte-participant-tile","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"image":"/static/ui-kit/1.x.x/components/dyte-participant-tile.svg","description":"Learn how to use and customize the DyteParticipantTile component in Dyte\'s React UI Kit with our detailed documentation."},"sidebar":"tutorialSidebar","previous":{"title":"DyteParticipantCount","permalink":"/flutterboilerplatedocs/react-ui-kit/components/dyte-participant-count"},"next":{"title":"DyteParticipant","permalink":"/flutterboilerplatedocs/react-ui-kit/components/dyte-participant"}}'),a=i("85893"),s=i("50065"),r=i("11258");let o={image:"/static/ui-kit/1.x.x/components/dyte-participant-tile.svg",description:"Learn how to use and customize the DyteParticipantTile component in Dyte's React UI Kit with our detailed documentation."},l="DyteParticipantTile",c={},p=[{value:"Props",id:"props",level:2}];function d(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.a)(),...e.components},{Head:i,PropsTable:n}=t;return!i&&u("Head",!0),!n&&u("PropsTable",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"dyteparticipanttile",children:"DyteParticipantTile"})}),"\n","\n",(0,a.jsxs)(t.p,{children:["A component which plays a participants video and allows for placement\nof components like ",(0,a.jsx)(t.code,{children:"dyte-name-tag"}),", ",(0,a.jsx)(t.code,{children:"dyte-audio-visualizer"})," or any other component."]}),"\n",(0,a.jsx)(r.Z,{hide:[{start:1,end:3}],minHeight:"300px",file:`
import { DyteParticipantTile, DyteNameTag, DyteAudioVisualizer } from "@dytesdk/react-ui-kit";
import { useDyteMeeting } from "@dytesdk/react-web-core";

export default function MyMeetingUI() {
  const { meeting } = useDyteMeeting();
  return (
    <DyteParticipantTile participant={meeting.self}>
      <DyteNameTag participant={meeting.self}>
        <DyteAudioVisualizer slot="start" />
      </DyteNameTag>
    </DyteParticipantTile>
  );
}
`}),"\n",(0,a.jsxs)(t.p,{children:["You can change the ",(0,a.jsx)(t.code,{children:"nameTagPosition"})," to any of the supported values\nand change the placement of audio-visualizer in name-tag as well."]}),"\n",(0,a.jsx)(r.Z,{hide:[{start:1,end:3}],additionalDecorators:[{className:"tooltip",elementAttributes:{"data-text":"Try editing this"},line:7,startColumn:63,endColumn:94}],minHeight:"300px",file:`
import { DyteParticipantTile, DyteNameTag, DyteAudioVisualizer } from "@dytesdk/react-ui-kit";
import { useDyteMeeting } from "@dytesdk/react-web-core";

export default function MyMeetingUI() {
  const { meeting } = useDyteMeeting();
  return (
    <DyteParticipantTile participant={meeting.self} nameTagPosition="bottom-center">
      <DyteNameTag participant={meeting.self}>
        <DyteAudioVisualizer slot="start" />
      </DyteNameTag>
    </DyteParticipantTile>
  );
}
`}),"\n",(0,a.jsx)(t.p,{children:"It also has a few variants."}),"\n",(0,a.jsx)(r.Z,{hide:[{start:1,end:3}],highlight:[{start:12,end:12}],minHeight:"300px",file:`
import { DyteParticipantTile, DyteNameTag, DyteAudioVisualizer } from "@dytesdk/react-ui-kit";
import { useDyteMeeting } from "@dytesdk/react-web-core";

export default function MyMeetingUI() {
  const { meeting } = useDyteMeeting();

  return (
    <DyteParticipantTile
      participant={meeting.self}
      nameTagPosition="bottom-center" 
      variant="gradient"
    >
      <DyteNameTag participant={meeting.self}>
        <DyteAudioVisualizer slot="start" />
      </DyteNameTag>
    </DyteParticipantTile>
  );
}
`}),"\n",(0,a.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,a.jsx)(n,{of:"dyte-participant-tile"}),"\n",(0,a.jsx)(i,{children:(0,a.jsx)("title",{children:"React UI Kit DyteParticipantTile"})})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function u(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11258:function(e,t,i){i.d(t,{Z:()=>h});var n=i("85893"),a=i("15957"),s=i("67294");let r=e=>`import React, { useEffect } from 'react';
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
export class AppModule {}`;var l=i("79207"),c=i("73808");let p=function(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":r(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(n)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":o},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(n)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},d=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},m=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},u=e=>"light"===e?c.FM:c.pJ;function h(e){let{file:t,files:i={},framework:r="react-ts",entry:o,highlight:c=[],additionalDecorators:h=[],hide:y=[],minHeight:g="480px"}=e,{colorMode:f}=(0,l.I)(),x=p(r,f,t??"",i),D=d(r),v=[...h,...m(c,y)],[w,k]=(0,s.useState)(0===v.length);return(0,s.useEffect)(()=>{let e=()=>{0!==v.length&&!0==w&&k(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[v.length,w]),(0,n.jsxs)(a.oT,{template:r,customSetup:{dependencies:{...D}},theme:u(f),options:{activeFile:x.activeFile,visibleFiles:x.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...x.scripts]},files:x.files,children:[(0,n.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,n.jsx)("span",{children:"LIVE EDITOR"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,n.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,n.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,n.jsx)("div",{onClick:e=>{e.stopPropagation(),k(!0)},className:"cursor-text",children:w?(0,n.jsx)(a._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,n.jsx)(a.Pw,{className:"code-viewer",initMode:"immediate",decorators:v,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,n.jsx)(a.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:g}})]})]})}}}]);