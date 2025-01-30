"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["49801"],{56999:function(e,i,t){t.r(i),t.d(i,{default:()=>p,frontMatter:()=>r,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>s});var n=JSON.parse('{"id":"build-pre-call-ui/build-your-own/add-audio-video-preview","title":"Audio/video - Preview","description":"For building audio/video preview","source":"@site/docs/android/build-pre-call-ui/build-your-own/add-audio-video-preview.mdx","sourceDirName":"build-pre-call-ui/build-your-own","slug":"/build-pre-call-ui/build-your-own/add-audio-video-preview","permalink":"/android/build-pre-call-ui/build-your-own/add-audio-video-preview","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Audio/video - Preview","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Edit user name","permalink":"/android/build-pre-call-ui/build-your-own/edit-user-name"},"next":{"title":"Audio/video - Device Selection","permalink":"/android/build-pre-call-ui/build-your-own/add-audio-video-device"}}'),o=t("85893"),d=t("50065");t("11258");let r={title:"Audio/video - Preview",sidebar_position:3},s=void 0,a={},l=[{value:"Permissions",id:"permissions",level:3},{value:"Media Preview and Controls",id:"media-preview-and-controls",level:3}];function c(e){let i={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"For building audio/video preview"}),"\n",(0,o.jsx)(i.h3,{id:"permissions",children:"Permissions"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:["For AUDIO - The value of ",(0,o.jsx)(i.code,{children:"meeting.self.permissions.canProduceAudio"})," needs to be ",(0,o.jsx)(i.code,{children:"ALLOWED"})]}),"\n",(0,o.jsxs)(i.li,{children:["For VIDEO - The value of ",(0,o.jsx)(i.code,{children:"meeting.self.permissions.canProduceVideo"})," needs to be ",(0,o.jsx)(i.code,{children:"ALLOWED"})]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["In the preset editor, toggle these settings under ",(0,o.jsx)(i.code,{children:"Media"}),"."]}),"\n",(0,o.jsx)(i.h3,{id:"media-preview-and-controls",children:"Media Preview and Controls"}),"\n",(0,o.jsxs)(i.p,{children:["We'll be using ",(0,o.jsx)(i.code,{children:"DyteParticipantTileView"}),", ",(0,o.jsx)(i.code,{children:"DyteInputField"})," for building a preview tile and\n",(0,o.jsx)(i.code,{children:"DyteMicToggleButton"}),", ",(0,o.jsx)(i.code,{children:"DyteCameraToggleButton"})," for media controls"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<androidx.constraintlayout.widget.ConstraintLayout \n  ....\n  >\n\n  <dyte.io.uikit.view.participanttile.DyteParticipantTileView\n    android:id="@+id/dyteparticipanttileview_setup_screen"\n    android:layout_width="0dp"\n    android:layout_height="0dp"\n  />\n\n  <dyte.io.uikit.view.controlbarbuttons.DyteMicToggleButton\n    android:id="@+id/dytemictoggle_setup_screen"\n    android:layout_width="48dp"\n    android:layout_height="48dp"\n  />\n\n  <dyte.io.uikit.view.controlbarbuttons.DyteCameraToggleButton\n    android:id="@+id/dytecameratoggle_setup_screen"\n    android:layout_width="48dp"\n    android:layout_height="48dp"\n  />\n\n  <dyte.io.uikit.view.DyteLabel\n    android:id="@+id/dyteLabelView"\n    android:layout_width="300dp"\n    android:layout_height="25dp"\n    android:text="Join in as %s"\n    android:textColor="#fff"\n    android:textSize="16sp"\n  />\n\n  <dyte.io.uikit.view.DyteInputField\n    android:id="@+id/textInputEditText"\n    android:layout_width="300dp"\n    android:layout_height="48dp"\n    android:hint="Your name"\n  />\n\n  <dyte.io.uikit.view.DyteJoinButton\n    android:id="@+id/dytejoinbutton_setup_screen"\n    android:layout_width="300dp"\n    android:layout_height="wrap_content"\n  />\n'})}),"\n",(0,o.jsx)(i.p,{children:"And on the kolin side we bind the newly added element like follows:"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-kotlin",children:"private lateinit var selfParticipantTileView: DyteParticipantTileView\nprivate lateinit var cameraToggleButton: DyteCameraToggleButton\nprivate lateinit var micToggleButton: DyteMicToggleButton\n\noverride fun onViewCreated(view: View, savedInstanceState: Bundle?) {\n  selfParticipantTileView = view.findViewById(R.id.dyteparticipanttileview_setup_screen)\n  cameraToggleButton = view.findViewById(R.id.dytecameratoggle_setup_screen)\n  micToggleButton = view.findViewById(R.id.dytemictoggle_setup_screen)\n\n  selfParticipantTileView.activateForSelfPreview(meeting.localUser)\n  micToggleButton.activate(meeting)\n  cameraToggleButton.activate(meeting)\n}\n"})}),"\n",(0,o.jsx)("img",{src:"/static/mobile/build-pre-call-ui/skeleton-page/android-setup-final-preview.png",width:"252",height:"560",alt:"Meeting Precall post skeleton changes",className:"mb-10"})]})}function p(e={}){let{wrapper:i}={...(0,d.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},11258:function(e,i,t){t.d(i,{Z:()=>g});var n=t("85893"),o=t("15957"),d=t("67294");let r=e=>`import React, { useEffect } from 'react';
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
}`,s=`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DyteComponentsModule } from '@dytesdk/angular-ui-kit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DyteComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}`;var a=t("79207"),l=t("73808");let c=function(e,i,t){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":r(i),"/meeting.tsx":t},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(n)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":t,"/src/app/app.module.ts":s},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(n)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":t},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},p=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},u=(e,i)=>{let t=[];return e.forEach(e=>{for(let i=e.start;i<=e.end;i++)t.push({className:"highlight",line:i})}),i.forEach(e=>{for(let i=e.start;i<=e.end;i++)t.push({className:"hide",line:i})}),t},m=e=>"light"===e?l.FM:l.pJ;function g(e){let{file:i,files:t={},framework:r="react-ts",entry:s,highlight:l=[],additionalDecorators:g=[],hide:h=[],minHeight:v="480px"}=e,{colorMode:w}=(0,a.I)(),y=c(r,w,i??"",t),x=p(r),f=[...g,...u(l,h)],[b,j]=(0,d.useState)(0===f.length);return(0,d.useEffect)(()=>{let e=()=>{0!==f.length&&!0==b&&j(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[f.length,b]),(0,n.jsxs)(o.oT,{template:r,customSetup:{dependencies:{...x}},theme:m(w),options:{activeFile:y.activeFile,visibleFiles:y.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...y.scripts]},files:y.files,children:[(0,n.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,n.jsx)("span",{children:"LIVE EDITOR"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,n.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,n.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,n.jsx)("div",{onClick:e=>{e.stopPropagation(),j(!0)},className:"cursor-text",children:b?(0,n.jsx)(o._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,n.jsx)(o.Pw,{className:"code-viewer",initMode:"immediate",decorators:f,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,n.jsx)(o.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:v}})]})]})}}}]);