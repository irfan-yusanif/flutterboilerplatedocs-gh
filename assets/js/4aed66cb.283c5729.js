"use strict";(self.webpackChunkdyte_docs=self.webpackChunkdyte_docs||[]).push([["40923"],{73770:function(e,t,i){i.r(t),i.d(t,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"build-in-call-ui/build-your-own/add-custom-sidebar","title":"Add custom sidebar","description":"Source Code//github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui","source":"@site/docs/react-ui-kit/build-in-call-ui/build-your-own/add-custom-sidebar.mdx","sourceDirName":"build-in-call-ui/build-your-own","slug":"/build-in-call-ui/build-your-own/add-custom-sidebar","permalink":"/flutterboilerplatedocs/react-ui-kit/build-in-call-ui/build-your-own/add-custom-sidebar","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Add custom sidebar","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Build Stage UI using DyteGrid","permalink":"/flutterboilerplatedocs/react-ui-kit/build-in-call-ui/build-your-own/stage-ui-using-dyte-grid"},"next":{"title":"Render participant videos","permalink":"/flutterboilerplatedocs/react-ui-kit/basics/display-videos"}}'),n=i("85893"),a=i("50065"),o=i("11258");let r={title:"Add custom sidebar",sidebar_position:6},d=void 0,l={},c=[];function u(e){let t={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Source Code: ",(0,n.jsx)(t.a,{href:"https://github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui",children:"https://github.com/dyte-io/react-samples/tree/main/samples/create-your-own-ui"})]}),"\n",(0,n.jsx)(t.p,{children:"To create a sidebar of your own, you need 2 things."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"A custom sidebar UI"}),"\n",(0,n.jsx)(t.li,{children:"An action button to trigger the UI"}),"\n"]}),"\n","\n",(0,n.jsx)(o.Z,{hide:[{start:1,end:5},{start:98,end:268}],highlight:[{start:6,end:64},{start:85,end:98}],file:`
import { DyteStage, DyteGrid, DyteNotifications, DyteSidebar, DyteControlbar, DyteParticipantsAudio, DyteDialogManager, DyteControlbarButton, DyteSidebarUi, defaultIconPack, defaultConfig, generateConfig } from '@dytesdk/react-ui-kit';
import { useDyteMeeting, useDyteSelector } from '@dytesdk/react-web-core';
import { useEffect, useState } from 'react';

function SidebarWithCustomUI({
    meeting, states, config, setStates,
}: { meeting: DyteClient, config: UIConfig, states: CustomStates, setStates: SetStates }
){
    const [tabs, setTabs] = useState([
        { id: 'chat', name: 'chat' },
        { id: 'polls', name: 'polls' },
        { id: 'participants', name: 'participants' },
        { id: 'plugins', name: 'plugins' },
        { id: 'guidelines', name: 'Guidelines' }
    ]);
    const [view, setView] = useState<DyteSidebarView>('sidebar');

    if(!states.activeSidebar || (!states.sidebar && !states.customSidebar)){
        return null;
    }

    const currentTab = states.sidebar || states.customSidebar;

    return (
    <DyteSidebarUi
        tabs={tabs}
        currentTab={currentTab}
        view={view}
        onTabChange={(e) => {
            setStates((oldState) => {
                return {
                    ...oldState,
                    activeSidebar: true,
                    customSidebar: e.detail,
                    sidebar: e.detail,
                }
            });
        }}
        className="w-80 "
        onSidebarClose={() => {
            setStates((oldState) => {
                return {
                    ...oldState,
                    activeSidebar: false,
                    sidebar: null,
                    customSidebar: null,
                }
            });
        }}>
        {currentTab === 'chat' && <DyteChat meeting={meeting} config={config} slot="chat" /> }
        {currentTab === 'polls' && <DytePolls meeting={meeting} config={config} slot="polls" /> }
        {currentTab === 'participants' && <DyteParticipants meeting={meeting} config={config} states={states} slot="participants" /> }
        {currentTab === 'plugins' && <DytePlugins meeting={meeting} config={config} slot="plugins" /> }
        {currentTab === 'guidelines' && <div slot="guidelines" className="flex justify-center items-center p-2">
            <div>
              <p>1. Ensure active participation and professionalism by muting your microphone when not speaking.</p>
              <br></br>
              <p>2. Utilize the chat feature for questions or comments during the meeting.</p>
            </div>
        </div> }
    </DyteSidebarUi>);

}

function MeetingStage({ meeting, config, states, setStates }: { meeting: DyteClient, config: UIConfig, states: CustomStates, setStates: SetStates}) {

return (

<div className="flex h-full w-full flex-col">
  <DyteStage className="flex h-full w-full flex-1 p-2">
    <DyteGrid meeting={meeting} config={config} states={states} />
    <DyteNotifications meeting={meeting} config={config} states={states} />
    {states.activeSidebar && (
      <SidebarWithCustomUI
        meeting={meeting}
        config={config}
        states={states}
        setStates={setStates}
      />
    )}
  </DyteStage>
  <DyteParticipantsAudio meeting={meeting} />
  <DyteDialogManager meeting={meeting} config={config} states={states} />
  <div>
    <DyteControlbarButton
      onClick={() => {
          if(states.activeSidebar && !states.sidebar && states.customSidebar === 'guidelines'){
              setStates( (oldState) => { return { ...oldState, activeSidebar: false, sidebar: null, customSidebar: null }});    
          } else {
              setStates( (oldState) => { return { ...oldState, activeSidebar: true, sidebar: null, customSidebar: 'guidelines' }});
          }
      }}
      icon={defaultIconPack.add}
      label={'Open Custom SideBar'}
    />
</div>

</div>
); }

export default function Meeting() {
const { meeting } = useDyteMeeting();
const [config, setConfig] = useState(defaultConfig);
const [states, setStates] = useState<CustomStates>({
  meeting: 'setup',
  sidebar: 'chat'
});

useEffect(() => {
async function setupMeetingConfigs(){
const theme = meeting!.self.config;
const { config } = generateConfig(theme, meeting!);

      /**
       * Full screen by default requests dyte-meeting/DyteMeeting element to be in full screen.
       * Since DyteMeeting element is not here,
       *  we need to pass dyte-fullscreen-toggle, an targetElementId through config.
       */
      // setFullScreenToggleTargetElement({config, targetElementId: 'root'});

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
    /**
     * During development phase, make sure to expose meeting object to window,
     * for debugging purposes.
     */
      Object.assign(window, {
        meeting,
      })
      setupMeetingConfigs();
    }

}, [meeting]);

return (

  <div className="flex w-full h-full" ref={(el) => {
            el?.addEventListener('dyteStateUpdate', (e) => {
              const { detail: newStateUpdate } = e as unknown as { detail: CustomStates };
              console.log('dyteStateUpdateSetup:: ', newStateUpdate);
              setStates((oldState: CustomStates) => { return {
                ...oldState,
                ...newStateUpdate,
              }});
            });
          }}>
      <MeetingStage meeting={meeting} config={config} states={states} setStates={setStates} />
  </div>
)

}

export class DyteStateListenersUtils{
    
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
`}),"\n",(0,n.jsxs)(t.p,{children:["Let's say, we want to show some meeting guidelines to all the participants in a side bar. To do so, in the below code snippet, we have added ",(0,n.jsx)(t.code,{children:"guidelines"})," sidebar section."]}),"\n",(0,n.jsxs)(t.p,{children:["We have added a custom button to trigger the UI as well using ",(0,n.jsx)(t.code,{children:"DyteControlbarButton"})," component."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"    <DyteControlbarButton\n      onClick={() => {\n          if(states.activeSidebar && !states.sidebar && states.customSidebar === 'guidelines'){\n              setStates( (oldState) => { return { ...oldState, activeSidebar: false, sidebar: null, customSidebar: null }});    \n          } else {\n              setStates( (oldState) => { return { ...oldState, activeSidebar: true, sidebar: null, customSidebar: 'guidelines' }});\n          }\n      }}\n      icon={defaultIconPack.add}\n      label={'Open Custom SideBar'}\n    />\n"})}),"\n",(0,n.jsx)(t.p,{children:"For such a sidebar extension, we will have to update the types as well if in case you are using react with Typescript."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import type { States } from "@dytesdk/ui-kit";\nimport { DyteSidebarSection } from "@dytesdk/ui-kit/dist/types/components/dyte-sidebar/dyte-sidebar";\n\nexport type CustomSideBarTabs = DyteSidebarSection | \'guidelines\';\n\nexport type CustomStates = States & { activeMediaPreviewModal?: boolean, customSidebar?: CustomSideBarTabs }\n\nexport type SetStates = React.Dispatch<React.SetStateAction<CustomStates>>;\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Now that we know how we can add a custom sidebar, we can move on to customise the ",(0,n.jsx)(t.code,{children:"DyteStage"})," component further."]})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11258:function(e,t,i){i.d(t,{Z:()=>p});var s=i("85893"),n=i("15957"),a=i("67294");let o=e=>`import React, { useEffect } from 'react';
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
export class AppModule {}`;var d=i("79207"),l=i("73808");let c=function(e,t,i){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return"react-ts"==e?{files:{"/App.tsx":o(t),"/meeting.tsx":i},activeFile:"/meeting.tsx",visibleFiles:["/meeting.tsx",...Object.keys(s)],scripts:[]}:"angular"==e?{files:{"/src/app/app.component.html":'<dyte-meeting #meeting show-setup-screen="true"></dyte-meeting>',"/src/app/app.component.ts":i,"/src/app/app.module.ts":r},activeFile:"/src/app/app.component.ts",visibleFiles:["/src/app/app.module.ts","/src/app/app.component.ts","/src/app/app.component.html",...Object.keys(s)],scripts:[]}:{activeFile:"/index.html",visibleFiles:["/index.html"],files:{"/index.html":i},scripts:["https://cdn.jsdelivr.net/npm/@dytesdk/web-core@1.31.0-stripped.2/dist/index.iife.js","https://assets.dyte.io/docs/web.js"]}},u=e=>"react-ts"==e?{"@dytesdk/react-ui-kit":"1.66.0","@dytesdk/react-web-core":"1.36.4-stripped.1","@dytesdk/web-core":"1.31.0-stripped.2"}:"angular"==e?{"@dytesdk/angular-ui-kit":"1.66.0","@dytesdk/web-core":"1.31.0-stripped.2"}:{},m=(e,t)=>{let i=[];return e.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"highlight",line:t})}),t.forEach(e=>{for(let t=e.start;t<=e.end;t++)i.push({className:"hide",line:t})}),i},g=e=>"light"===e?l.FM:l.pJ;function p(e){let{file:t,files:i={},framework:o="react-ts",entry:r,highlight:l=[],additionalDecorators:p=[],hide:f=[],minHeight:h="480px"}=e,{colorMode:S}=(0,d.I)(),b=c(o,S,t??"",i),y=u(o),v=[...p,...m(l,f)],[w,x]=(0,a.useState)(0===v.length);return(0,a.useEffect)(()=>{let e=()=>{0!==v.length&&!0==w&&x(!1)};return window.addEventListener("click",e),()=>{window.removeEventListener("click",e)}},[v.length,w]),(0,s.jsxs)(n.oT,{template:o,customSetup:{dependencies:{...y}},theme:g(S),options:{activeFile:b.activeFile,visibleFiles:b.visibleFiles,externalResources:["https://assets.dyte.io/docs/tailwind.js",...b.scripts]},files:b.files,children:[(0,s.jsxs)("div",{className:"relative top-2 z-10 flex w-fit items-center space-x-2 rounded-sm bg-neutral-800 p-1.5 text-xs font-bold text-neutral-100 dark:bg-neutral-300  dark:text-neutral-900",children:[(0,s.jsx)("span",{children:"LIVE EDITOR"}),(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",className:"ml-2 h-4",children:(0,s.jsx)("path",{fill:"#FFD43B",d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"})})]}),(0,s.jsxs)("div",{className:"flex flex-col rounded-sm border border-secondary-700 mb-4",children:[(0,s.jsx)("div",{onClick:e=>{e.stopPropagation(),x(!0)},className:"cursor-text",children:w?(0,s.jsx)(n._V,{showLineNumbers:!0,showInlineErrors:!0,className:"code-viewer",style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px",overflow:"scroll"}}):(0,s.jsx)(n.Pw,{className:"code-viewer",initMode:"immediate",decorators:v,style:{flexGrow:0,flexShrink:1,flexBasis:"max-content",maxHeight:"500px"}})}),(0,s.jsx)(n.Gj,{showOpenInCodeSandbox:!1,className:"border-t-2 border-t-secondary-700",style:{flex:1,minHeight:h}})]})]})}}}]);