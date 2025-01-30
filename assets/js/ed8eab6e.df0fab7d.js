"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["2916"],{25853:function(e,t,i){i.r(t),i.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"build-in-call-ui/build-your-own/customize-header","title":"Customize Header","description":"Source Code//github.com/dyte-io/react-native-samples/tree/main/samples/createyourown_ui","source":"@site/docs/rn-ui-kit/build-in-call-ui/build-your-own/customize-header.mdx","sourceDirName":"build-in-call-ui/build-your-own","slug":"/build-in-call-ui/build-your-own/customize-header","permalink":"/flutterboilerplatedocs/react-native/build-in-call-ui/build-your-own/customize-header","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Customize Header","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"States Based UI Split","permalink":"/flutterboilerplatedocs/react-native/build-in-call-ui/build-your-own/states based UI Split"},"next":{"title":"Customize Control Bar","permalink":"/flutterboilerplatedocs/react-native/build-in-call-ui/build-your-own/customize-control-bar"}}'),s=i("85893"),r=i("50065");i("11258");let o={title:"Customize Header",sidebar_position:3},a=void 0,l={},c=[];function d(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Source Code: ",(0,s.jsx)(t.a,{href:"https://github.com/dyte-io/react-native-samples/tree/main/samples/create_your_own_ui",children:"https://github.com/dyte-io/react-native-samples/tree/main/samples/create_your_own_ui"})]}),"\n",(0,s.jsxs)(t.p,{children:["Dyte's default header component ",(0,s.jsx)(t.code,{children:"DyteHeader"})," can be used as the following."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"<DyteHeader meeting={meeting} />\n"})}),"\n",(0,s.jsx)(t.p,{children:"Following code shows how you can customise the DyteHeader or build it from scratch as per your use case."}),"\n","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\nimport {\n  DyteClock,\n  DyteGridPagination,\n  DyteHeader,\n  DyteLiveStreamIndicator,\n  DyteLogo,\n  DyteMeetingTitle,\n  DyteParticipantCount,\n  DyteRecordingIndicator,\n  defaultIconPack,\n  useLanguage,\n} from '@dytesdk/react-native-ui-kit';\nimport { UIConfig } from '@dytesdk/react-native-ui-kit';\nimport DyteClient from '@dytesdk/web-core';\nimport { CustomStates, SetStates } from '../types';\nimport { View } from 'react-native';\n\nfunction HeaderWithCustomUI({\n  meeting,\n  states,\n  // eslint-disable-next-line @typescript-eslint/no-unused-vars\n  config,\n}: {\n  meeting: DyteClient;\n  config: UIConfig;\n  states: CustomStates;\n  setStates: SetStates;\n}) {\n  const t = useLanguage();\n  return (\n    <View className=\"flex justify-between bg-black text-white\">\n      <View className=\"flex h-[24px] items-center\">\n        <DyteLogo meeting={meeting} />\n        <DyteRecordingIndicator meeting={meeting} />\n        <DyteLiveStreamIndicator meeting={meeting} />\n      </View>\n      <View className=\"flex h-[24px] items-center\">\n        <DyteMeetingTitle meeting={meeting} />\n      </View>\n      <View className=\"flex h-[24px] items-center\">\n        <DyteGridPagination meeting={meeting} states={states} />\n        <DyteParticipantCount meeting={meeting} t={t} />\n        <DyteClock meeting={meeting} />\n      </View>\n    </View>\n  );\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Please note that the ",(0,s.jsx)(t.code,{children:"DyteRecordingIndicator"})," will be shown only when recording is in-progress. Similarly ",(0,s.jsx)(t.code,{children:"DyteLivestreamIndicator"}),' only shows "Live" indicator if the preset is a livestream preset.']}),"\n",(0,s.jsxs)(t.p,{children:["if user's preset has a logo, that logo will be shown using ",(0,s.jsx)(t.code,{children:"DyteLogo"})," component."]}),"\n",(0,s.jsx)(t.p,{children:"Now that we know how we can build a custom header, let's move on to discuss how we can build a custom footer otherwise knows as control bar."})]})}function m(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11258:function(e,t,i){i.d(t,{Z:()=>h});var n=i("85893"),s=i("15957"),r=i("67294");let o=e=>`import React, { useEffect } from 'react';
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
export class AppModule {}`;var l=i("79207"),c=i("73808");let d=function(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":o(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(n)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":a},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(n)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},m=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},u=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},p=e=>"light"===e?c.FM:c.pJ;function h(e){let{file:t,files:i={},framework:o="react-ts",entry:a,highlight:c=[],additionalDecorators:h=[],hide:g=[],minHeight:f="480px"}=e,{colorMode:y}=(0,l.I)(),w=d(o,y,t??"",i),x=m(o),b=[...h,...u(c,g)],[v,j]=(0,r.useState)(0===b.length);return(0,r.useEffect)(()=>{let e=()=>{0!==b.length&&!0==v&&j(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[b.length,v]),(0,n.jsxs)(s.oT,{template:o,customSetup:{dependencies:{...x}},theme:p(y),options:{activeFile:w.activeFile,visibleFiles:w.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...w.scripts]},files:w.files,children:[(0,n.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,n.jsx)("span",{children:"LIVE EDITOR"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,n.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,n.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,n.jsx)("div",{onClick:e=>{e.stopPropagation(),j(!0)},className:"cursor-text",children:v?(0,n.jsx)(s._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,n.jsx)(s.Pw,{className:"code-viewer",initMode:"immediate",decorators:b,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,n.jsx)(s.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})]})]})}}}]);