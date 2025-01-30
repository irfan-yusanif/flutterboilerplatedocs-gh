"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["93492"],{23507:function(e,t,s){s.r(t),s.d(t,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>c,contentTitle:()=>l});var n=JSON.parse('{"id":"build-in-call-ui/build-your-own/handling-states-and-configs","title":"Handling States and Configs","description":"Source Code//github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui","source":"@site/docs/react-ui-kit/build-in-call-ui/build-your-own/handling-states-and-configs.mdx","sourceDirName":"build-in-call-ui/build-your-own","slug":"/build-in-call-ui/build-your-own/handling-states-and-configs","permalink":"/react-ui-kit/build-in-call-ui/build-your-own/handling-states-and-configs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Handling States and Configs","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"DyteMeeting","permalink":"/react-ui-kit/build-in-call-ui/default-meeting-ui"},"next":{"title":"States Based UI Split","permalink":"/react-ui-kit/build-in-call-ui/build-your-own/states based UI Split"}}'),i=s("85893"),a=s("50065"),o=s("11258");let r={title:"Handling States and Configs",sidebar_position:1},l=void 0,d={},c=[];function g(e){let t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Source Code: ",(0,i.jsx)(t.a,{href:"https://github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui",children:"https://github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"DyteMeeting"})," component does a lot more than just providing the user interface."]}),"\n",(0,i.jsx)(t.p,{children:"It does the following things internally."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Keeps a mapping of components and show them according to the preset's view_type such as group_call, webinar, and livestream."}),"\n",(0,i.jsx)(t.li,{children:"Provides background color, text colors and other such CSS properties."}),"\n",(0,i.jsx)(t.li,{children:"Maintains states of modals, sidebars between web-core & ui-kit"}),"\n",(0,i.jsx)(t.li,{children:"Shifts the control bar buttons to More menu if the screen size is small."}),"\n",(0,i.jsx)(t.li,{children:"Passes config, states, translation, icon packs to all child components."}),"\n",(0,i.jsx)(t.li,{children:"It is the target element that gets full screened on click of full screen toggle."}),"\n",(0,i.jsx)(t.li,{children:"Joins the meeting automatically if showSetupScreen is false."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Since we are splitting ",(0,i.jsx)(t.code,{children:"DyteMeeting"})," component in pieces, we need to do these ourselves now."]}),"\n","\n",(0,i.jsx)(o.Z,{hide:[{start:1,end:5}],highlight:[{start:9,end:16},{start:20,end:30},{start:32,end:37},{start:40,end:40},{start:57,end:64}],file:`
import { defaultConfig, generateConfig } from '@dytesdk/react-ui-kit';
import { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';
import { useEffect, useState } from 'react';

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
  <div className="flex w-full h-full bg-black text-white justify-center items-center" ref={(el) => {
            el?.addEventListener('dyteStateUpdate', (e) => {
              const { detail: newStateUpdate } = e as unknown as { detail: CustomStates };
              setStates((oldState: CustomStates) => { return {
                ...oldState,
                ...newStateUpdate,
              }});
            });
          }}>
      <CustomDyteMeetingUI meeting={meeting} config={config} states={states} setStates={setStates} />
  </div>
);

}

function CustomDyteMeetingUI({ meeting, config, states, setStates }: { meeting: DyteClient, config: UIConfig, states: CustomStates, setStates: SetStates}) {
return <div>Your Custom UI will come here </div>;
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

`}),"\n",(0,i.jsx)(t.p,{children:"Let's discuss the bits and pieces one by one."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"const theme = meeting!.self.config;\nconst { config } = generateConfig(theme, meeting!);\n"})}),"\n",(0,i.jsx)(t.p,{children:"In the above code snippets, we are generating configs using the preset configurations & meeting configs."}),"\n",(0,i.jsx)(t.p,{children:"Post this, We are extending the config to pass the targetElement to full screen toggle and storing this config to be passed to child components."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"    setFullScreenToggleTargetElement({config, targetElementId: 'root'});\n    setConfig({...config});\n"})}),"\n",(0,i.jsx)(t.p,{children:"We need to also ensure that web-core & ui-kit states are in sync. Since we are handling states now, we will have to add web-core & ui-kit listeners."}),"\n",(0,i.jsxs)(t.p,{children:["To add web-core listeners, ",(0,i.jsx)(t.code,{children:"DyteStateListenersUtils"})," class, is being used."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"  const stateListenersUtils = new DyteStateListenersUtils(() => meeting, () => states, () => setStates);\n  stateListenersUtils.addDyteEventListeners();\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To add ui-kit state listeners, we are using ref based hack to ensure that every propagated ",(0,i.jsx)(t.code,{children:"dyteStateUpdate"})," event is listened to."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"ref={(el) => {\n  el?.addEventListener('dyteStateUpdate', (e) => {\n    const { detail: newStateUpdate } = e as unknown as { detail: CustomStates };\n    setStates((oldState: CustomStates) => { return {\n      ...oldState,\n      ...newStateUpdate,\n    }});\n  });\n}}>\n"})}),"\n",(0,i.jsxs)(t.p,{children:["To join the meeting, we are using ",(0,i.jsx)(t.code,{children:"await meeting.join();"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Now that we know the extra overhead that comes with splitting ",(0,i.jsx)(t.code,{children:"DyteMeeting"})," component, let's start with showing custom UIs as per the meeting state."]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},11258:function(e,t,s){s.d(t,{Z:()=>p});var n=s("85893"),i=s("15957"),a=s("67294");let o=e=>`import React, { useEffect } from 'react';
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
export class AppModule {}`;var l=s("79207"),d=s("73808");let c=function(e,t,s){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":o(t),"/meeting.tsx":s},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(n)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":s,"/src/app/app.module.ts":r},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(n)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":s},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},g=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},m=(e,t)=>{let s=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)s.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)s.push({className:"hide",line:t})}),s},u=e=>"light"===e?d.FM:d.pJ;function p(e){let{file:t,files:s={},framework:o="react-ts",entry:r,highlight:d=[],additionalDecorators:p=[],hide:h=[],minHeight:f="480px"}=e,{colorMode:S}=(0,l.I)(),y=c(o,S,t??"",s),w=g(o),x=[...p,...m(d,h)],[v,b]=(0,a.useState)(0===x.length);return(0,a.useEffect)(()=>{let e=()=>{0!==x.length&&!0==v&&b(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[x.length,v]),(0,n.jsxs)(i.oT,{template:o,customSetup:{dependencies:{...w}},theme:u(S),options:{activeFile:y.activeFile,visibleFiles:y.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...y.scripts]},files:y.files,children:[(0,n.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,n.jsx)("span",{children:"LIVE EDITOR"}),(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,n.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,n.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,n.jsx)("div",{onClick:e=>{e.stopPropagation(),b(!0)},className:"cursor-text",children:v?(0,n.jsx)(i._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,n.jsx)(i.Pw,{className:"code-viewer",initMode:"immediate",decorators:x,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,n.jsx)(i.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:f}})]})]})}}}]);