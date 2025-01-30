"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["48466"],{7452:function(e,t,i){i.r(t),i.d(t,{default:()=>g,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"build-in-call-ui/build-your-own/customize-header","title":"Customize Header","description":"Source Code//github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui","source":"@site/docs/react-ui-kit/build-in-call-ui/build-your-own/customize-header.mdx","sourceDirName":"build-in-call-ui/build-your-own","slug":"/build-in-call-ui/build-your-own/customize-header","permalink":"/react-ui-kit/build-in-call-ui/build-your-own/customize-header","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Customize Header","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"States Based UI Split","permalink":"/react-ui-kit/build-in-call-ui/build-your-own/states based UI Split"},"next":{"title":"Customize Control Bar","permalink":"/react-ui-kit/build-in-call-ui/build-your-own/customize-control-bar"}}'),n=i("85893"),o=i("50065"),a=i("11258");let r={title:"Customize Header",sidebar_position:3},l=void 0,d={},c=[];function m(e){let t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Source Code: ",(0,n.jsx)(t.a,{href:"https://github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui",children:"https://github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui"})]}),"\n",(0,n.jsxs)(t.p,{children:["Dyte's default header component ",(0,n.jsx)(t.code,{children:"DyteHeader"})," can be used as the following."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"<DyteHeader meeting={meeting} />\n"})}),"\n",(0,n.jsx)(t.p,{children:"Following code shows how you can customise the DyteHeader or build it from scratch as per your use case."}),"\n","\n",(0,n.jsx)(a.Z,{hide:[{start:1,end:5},{start:29,end:227}],highlight:[{start:6,end:27}],file:`
import { defaultConfig, generateConfig, DyteLogo, DyteRecordingIndicator, DyteLivestreamIndicator, DyteMeetingTitle, DyteGridPagination, DyteParticipantCount, DyteViewerCount, DyteClock } from '@dytesdk/react-ui-kit';
import { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';
import { useEffect, useState } from 'react';

function HeaderWithCustomUI({
    meeting, states, config,
}: { meeting: DyteClient, config: UIConfig, states: CustomStates, setStates: SetStates }
){
    
    return <div className='flex justify-between w-full bg-black text-white'>
        <div id="header-left" className="flex items-center h-[48px]">
            <DyteLogo meeting={meeting} />
            <DyteRecordingIndicator meeting={meeting}/>
            <DyteLivestreamIndicator meeting={meeting}/>
        </div>
        <div id="header-center" className="flex items-center h-[48px]">
            <DyteMeetingTitle meeting={meeting}/>
        </div>
        <div id="header-right" className="flex items-center h-[48px]">
            <DyteGridPagination meeting={meeting} states={states}/>
            <DyteParticipantCount meeting={meeting}/>
            <DyteViewerCount meeting={meeting} />
            <DyteClock meeting={meeting} />
        </div>
    </div>
}

export default function Meeting() {
  const { meeting } = useDyteMeeting();
  const [config, setConfig] = useState(defaultConfig);
  /**
  * We need setStates method to add custom functionalities,
  * as well as to ensure that web-core & ui-kit are in Sync.
  */
  const [states, setStates] = useState<CustomStates>({
    meeting: 'setup',
    sidebar: 'chat'
  });

useEffect(() => {
  async function setupMeetingConfigs(){
      const theme = meeting!.self.config;
      const { config } = generateConfig(theme, meeting!);

      /**
       * Full screen toggle, by default requests dyte-meeting/DyteMeeting element to be in full screen.
       * Since DyteMeeting element is not here,
       *  we need to pass dyte-fullscreen-toggle, an targetElementId through config.
       */
      setFullScreenToggleTargetElement({config, targetElementId: 'root'});

      setConfig({...config});

    /**
     * Add listeners on meeting & self to monitor leave meeting, join meeting and so on.
     * This work was earlier done by DyteMeeting component internally.
     */
      const stateListenersUtils = new DyteStateListenersUtils(() => meeting, () => states, () => setStates);
      stateListenersUtils.addDyteEventListeners();

      try{
        await meeting.join();
      } catch(e){
        // do nothing
      }
    }

    if(meeting){
      setupMeetingConfigs();
    }

}, [meeting]);

return (
  /**
  * Using a ref hack, we are adding "dyteStateUpdate" listener,
  * so that we can listen to child component's internal state changes.
  */
  <div className="flex w-full h-full bg-black text-white" ref={(el) => {
            el?.addEventListener('dyteStateUpdate', (e) => {
              const { detail: newStateUpdate } = e as unknown as { detail: CustomStates };
              setStates((oldState: CustomStates) => { return {
                ...oldState,
                ...newStateUpdate,
              }});
            });
          }}>
      <HeaderWithCustomUI meeting={meeting} config={config} states={states} setStates={setStates} />
  </div>
);

}

/**
* DyteStateListenersUtils is a class that listens to web-core changes and syncs them with ui-kit
*/
class DyteStateListenersUtils{

    getStates: () => CustomStates;

    getStateSetter: () => (newState: CustomStates) => void;

    getMeeting: () => DyteClient;

    get states(){
        return this.getStates();
    }

    get setGlobalStates(){
        return this.getStateSetter();
    };

    get meeting(){
        return this.getMeeting();
    }

    constructor(getMeeting: () => DyteClient, getGlobalStates: () => CustomStates, getGlobalStateSetter: () => (newState: CustomStates) => void){
        this.getMeeting = getMeeting;
        this.getStates = getGlobalStates;
        this.getStateSetter = getGlobalStateSetter;
    }
    private updateStates(newState: CustomStates){
        this.setGlobalStates((oldState: CustomStates) => { return {
            ...oldState,
            ...newState,
        }});
        console.log(newState);
    }
    private roomJoinedListener = () => {
        this.updateStates({ meeting: 'joined' });
      };

      private socketServiceRoomJoinedListener = () => {
        if (this.meeting.stage.status === 'ON_STAGE' || this.meeting.stage.status === undefined) return;
        this.updateStates({ meeting: 'joined' });
      };

      private waitlistedListener = () => {
        this.updateStates({ meeting: 'waiting' });
      };

      private roomLeftListener = ({ state }: { state: RoomLeftState }) => {
        const states = this.states;
        if (states?.roomLeftState === 'disconnected') {
          this.updateStates({ meeting: 'ended', roomLeftState: state });
          return;
        }
        this.updateStates({ meeting: 'ended', roomLeftState: state });
      };

      private mediaPermissionUpdateListener = ({ kind, message }: {
        kind: PermissionSettings['kind'],
        message: string,
      }) => {
        if (['audio', 'video'].includes(kind!)) {
          if (message === 'ACCEPTED' || message === 'NOT_REQUESTED' || this.states.activeDebugger)
            return;
          const permissionModalSettings: PermissionSettings = {
            enabled: true,
            kind,
          };
          this.updateStates({ activePermissionsMessage: permissionModalSettings });
        }
      };

      private joinStateAcceptedListener = () => {
        this.updateStates({ activeJoinStage: true });
      };

      private handleChangingMeeting(destinationMeetingId: string) {
        this.updateStates({
            activeBreakoutRoomsManager: {
                ...this.states.activeBreakoutRoomsManager,
                active: this.states.activeBreakoutRoomsManager!.active,
                destinationMeetingId,
            }
        });
    }

    addDyteEventListeners(){
        if (this.meeting.meta.viewType === 'LIVESTREAM') {
            this.meeting.self.addListener('socketServiceRoomJoined', this.socketServiceRoomJoinedListener);
          }
          this.meeting.self.addListener('roomJoined', this.roomJoinedListener);

          this.meeting.self.addListener('waitlisted', this.waitlistedListener);
          this.meeting.self.addListener('roomLeft', this.roomLeftListener);
          this.meeting.self.addListener('mediaPermissionUpdate', this.mediaPermissionUpdateListener);
          this.meeting.self.addListener('joinStageRequestAccepted', this.joinStateAcceptedListener);

          if (this.meeting.connectedMeetings.supportsConnectedMeetings) {
            this.meeting.connectedMeetings.once('changingMeeting', this.handleChangingMeeting);
          }

    }
    cleanupDyteEventListeners(){

    }

}

/**
* setFullScreenToggleTargetElement updates the ui-kit config,
* to set targetElement to full screen toggle.
*/
function setFullScreenToggleTargetElement({config, targetElementId}: { config: UIConfig, targetElementId: string }){
    if (config.root && Array.isArray(config.root['div#controlbar-left'])) {
        const fullScreenToggleIndex = config.root['div#controlbar-left'].indexOf('dyte-fullscreen-toggle');
        if(fullScreenToggleIndex > -1){
            config.root['div#controlbar-left'][fullScreenToggleIndex] = ['dyte-fullscreen-toggle', {
                variant: 'vertical',
                targetElement: document.querySelector("#"+targetElementId),
            }];
        }
    }
    ['dyte-more-toggle.activeMoreMenu', 'dyte-more-toggle.activeMoreMenu.md', 'dyte-more-toggle.activeMoreMenu.sm'].forEach((configElemKey) => {
        const configElem = config?.root?.[configElemKey] as any;
        configElem?.forEach((dyteElemConfigSet: any) => {
            if (dyteElemConfigSet[0] === 'dyte-fullscreen-toggle') {
                dyteElemConfigSet[1].targetElement = document.querySelector("#"+targetElementId);
            }
        });
    });
}

`}),"\n",(0,n.jsxs)(t.p,{children:["Please note that the ",(0,n.jsx)(t.code,{children:"DyteRecordingIndicator"})," will be shown only when recording is in-progress. Similarly ",(0,n.jsx)(t.code,{children:"DyteLivestreamIndicator"}),' only shows "Live" indicator if the preset is a livestream preset.']}),"\n",(0,n.jsxs)(t.p,{children:["if user's preset has a logo, that logo will be shown using ",(0,n.jsx)(t.code,{children:"DyteLogo"})," component."]}),"\n",(0,n.jsx)(t.p,{children:"Now that we know how we can build a custom header, let's move on to discuss how we can build a custom footer otherwise knows as control bar."})]})}function g(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},11258:function(e,t,i){i.d(t,{Z:()=>p});var s=i("85893"),n=i("15957"),o=i("67294");let a=e=>`import React, { useEffect } from 'react';
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
}`,r=`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DyteComponentsModule } from '@dytesdk/angular-ui-kit';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DyteComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}`;var l=i("79207"),d=i("73808");let c=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":a(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(s)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":r},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(s)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},m=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},g=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},u=e=>"light"===e?d.FM:d.pJ;function p(e){let{file:t,files:i={},framework:a="react-ts",entry:r,highlight:d=[],additionalDecorators:p=[],hide:h=[],minHeight:f="480px"}=e,{colorMode:y}=(0,l.I)(),S=c(a,y,t??"",i),w=m(a),v=[...p,...g(d,h)],[x,b]=(0,o.useState)(0===v.length);return(0,o.useEffect)(()=>{let e=()=>{0!==v.length&&!0==x&&b(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[v.length,x]),(0,s.jsxs)(n.oT,{template:a,customSetup:{dependencies:{...w}},theme:u(y),options:{activeFile:S.activeFile,visibleFiles:S.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...S.scripts]},files:S.files,children:[(0,s.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)("span",{children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,s.jsx)("div",{onClick:e=>{e.stopPropagation(),b(!0)},className:"cursor-text",children:x?(0,s.jsx)(n._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,s.jsx)(n.Pw,{className:"code-viewer",initMode:"immediate",decorators:v,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,s.jsx)(n.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})]})]})}}}]);