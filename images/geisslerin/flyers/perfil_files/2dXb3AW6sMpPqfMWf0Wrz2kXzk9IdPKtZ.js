if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("useGroupsCometChatLeaveSubscription_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4721480551270407"}),null);
__d("useGroupsCometChatLeaveSubscription.graphql",["useGroupsCometChatLeaveSubscription_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{kind:"Variable",name:"data",variableName:"input"}],d={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useGroupsCometChatLeaveSubscription",selections:[{alias:null,args:c,concreteType:"GroupChatLeaveSubscribeResponsePayload",kind:"LinkedField",name:"group_chat_leave_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerGlobalFBGroupChat",kind:"LinkedField",name:"thread",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometChatsJoinOrChatButton_thread"},{args:null,kind:"FragmentSpread",name:"GroupsCometChatsListCell_groupChatInboxRow"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"associated_object",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,kind:"FragmentSpread",name:"GroupsCometAdminToolsLeftRailChatItem_group"},{args:null,kind:"FragmentSpread",name:"GroupsCometQuickPromotionTopOfMallGroupsChatsNUXCMAdmodCreateOrGoToChatContent_group"}],type:"Group",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Subscription",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useGroupsCometChatLeaveSubscription",selections:[{alias:null,args:c,concreteType:"GroupChatLeaveSubscribeResponsePayload",kind:"LinkedField",name:"group_chat_leave_subscribe",plural:!1,selections:[{alias:null,args:null,concreteType:"MessengerGlobalFBGroupChat",kind:"LinkedField",name:"thread",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"associated_object",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"admod_only_chat",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometAdminToolsLeftRailChatItem_group",fragmentName:"GroupsCometAdminToolsLeftRailJoinChatItem_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerGlobalFBGroupChat",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometAdminToolsLeftRailChatItem_group",fragmentName:"GroupsCometAdminToolsLeftRailOpenChatItem_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerViewerFBGroupChat",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"MessengerCommunity",kind:"LinkedField",name:"community",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"admod_channels_count",storageKey:null},e],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"group_address",storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_see_rooms_and_chats_tab",plural:!1,selections:[d,e],storageKey:null},{alias:"admod_chat",args:null,concreteType:null,kind:"LinkedField",name:"admod_only_chat",plural:!1,selections:[d,e,{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometQuickPromotionTopOfMallGroupsChatsNUXCMAdmodCreateOrGoToChatContent_group",fragmentName:"GroupsCometQuickPromotionTopOfMallGroupsChatsNUXJoinAdmodChatBase_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerGlobalFBGroupChat",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometQuickPromotionTopOfMallGroupsChatsNUXCMAdmodCreateOrGoToChatContent_group",fragmentName:"GroupsCometQuickPromotionTopOfMallGroupsChatsNUXOpenAdmodChatBase_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerViewerFBGroupChat",abstractKey:null}],storageKey:null}],type:"Group",abstractKey:null}],storageKey:null},e,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometChatsJoinOrChatButton_thread",fragmentName:"GroupsCometChatsJoinChatButton_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerGlobalFBGroupChat",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometChatsJoinOrChatButton_thread",fragmentName:"GroupsCometChatsOpenChatButton_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerViewerFBGroupChat",abstractKey:null}],type:"MessengerFBGroupChat",abstractKey:"__isMessengerFBGroupChat"},{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometChatsListCell_groupChatInboxRow",fragmentName:"GroupsCometChatsListCellGlobalChat_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerGlobalFBGroupChat",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"GroupsCometChatsListCell_groupChatInboxRow",fragmentName:"GroupsCometChatsListCellViewerChat_thread",fragmentPropName:"thread",kind:"ModuleImport"}],type:"MessengerViewerFBGroupChat",abstractKey:null}],type:"FBGroupChatInboxRow",abstractKey:"__isFBGroupChatInboxRow"}],storageKey:null}],storageKey:null}]},params:{id:b("useGroupsCometChatLeaveSubscription_facebookRelayOperation"),metadata:{subscriptionName:"group_chat_leave_subscribe"},name:"useGroupsCometChatLeaveSubscription",operationKind:"subscription",text:null}}}();e.exports=a}),null);
__d("useGroupsCometChatsQPLLogger",["FBLogger","QPLEvent","QPLUserFlow","Random","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useMemo;function a(a){var b=a.instanceKey,e=a.joinID,f=a.quickLogEvent,g=h(function(){var a;return(a=b)!=null?a:c("Random").uint32()},[b]),i=function(){g=c("Random").uint32()},j=function(){i()};a={addPoint:function(a){var b=[a.surface,a.source,a.action].join("__");a=babelHelpers["extends"]({},a);c("QPLUserFlow").addPoint(f,b,{data:{string:a},instanceKey:g})},endCancel:function(){c("QPLUserFlow").endCancel(f,{instanceKey:g}),j()},endFailure:function(a){c("QPLUserFlow").endFailure(f,a,{instanceKey:g}),j()},endSuccess:function(){c("QPLUserFlow").endSuccess(f,{instanceKey:g}),j()},getInstanceKey:function(){return g},start:function(){var a=c("QPLUserFlow").getActiveFlowIDs().includes(d("QPLEvent").getMarkerId(f));if(a){c("FBLogger")("chats_in_groups_fb").mustfix("There already is a running QPL flow with this marker ID: ",d("QPLEvent").getMarkerId(f));return}a={};e!=null&&(a.joinID=e);i();a.instanceKey=g;c("QPLUserFlow").start(f,a)}};return a}g["default"]=a}),98);
__d("useGroupsCometChatLeaveSubscription",["CometRelay","react","useGroupsCometChatLeaveSubscription.graphql","useIsLoggedOut"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useEffect,j=h!==void 0?h:h=b("useGroupsCometChatLeaveSubscription.graphql"),k=function(a,b,c){return d("CometRelay").requestSubscription(a,{onCompleted:c&&c.onCompleted,onError:c&&c.onError,onNext:c&&c.onNext,subscription:j,variables:b})};function a(a,b){var e=d("CometRelay").useRelayEnvironment(),f=c("useIsLoggedOut")();i(function(){if(f)return;if(b==null)return;var c=k(e,{input:{group_id:a,thread_id:b}});return function(){c.dispose()}},[e,a,b,f])}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometContextualMessage.react",["fbt","ix","CometIcon.react","CometRow.react","CometRowItem.react","FbtResultBase","TetraTextPairing.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k={closeButton:{marginEnd:"dlv3wnog",marginTop:"sv5sfqaa"},icon:{marginTop:"muag1w35"},root:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",overflowX:"ni8dbmo4",overflowY:"stjgntxs",paddingTop:"ecm0bbzt",paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus",paddingBottom:"ihqw7lf3"}},l={highlight:{backgroundColor:"is6700om"},"highlight-bg":{backgroundColor:"b8zhkkm9"},primary:{backgroundColor:"cwj9ozl2"},secondary:{backgroundColor:"i94ygzvd"}};function a(a,b){var e=a.addOnPrimary,f=a.addOnSecondary,g=a.body,m=a.headline,n=a.headlineLineLimit,o=a.icon,p=a.level;p=p===void 0?3:p;var q=a.meta,r=a.testid;r=a.type;r=r===void 0?"primary":r;var s=a.onClose!=null?a.onClose:null;a=a.headlineAriaLabel!=null?a.headlineAriaLabel:typeof m==="string"||m instanceof c("FbtResultBase")?m:null;return j.jsxs("div",{className:c("stylex")(k.root,l[r]),"data-testid":void 0,ref:b,children:[j.jsxs(c("CometRow.react"),{verticalAlign:"center",children:[o!=null?j.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:j.jsx("div",{className:c("stylex")(k.icon),children:o})}):null,j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(c("TetraTextPairing.react"),{body:g,bodyColor:r==="highlight"?"white":"secondary",headline:m,headlineColor:r==="highlight"?"white":"primary",headlineLineLimit:(b=n)!=null?b:2,level:p})}),s!=null?j.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:j.jsx("div",{className:c("stylex")(k.closeButton),children:j.jsx(c("CometIcon.react"),{"aria-label":a!=null?h._(/*FBT_CALL*/"Ignorar tarjeta {card name}"/*FBT_CALL*/,[h._param("card name",a)]):h._(/*FBT_CALL*/"Ignorar tarjeta"/*FBT_CALL*/),color:r==="highlight"?"white":"secondary",icon:d("fbicon")._(i("478232"),16),onPress:s,size:16,testid:void 0})})}):null]}),e,f,q!=null&&j.jsx(c("CometRow.react"),{paddingTop:12,children:j.jsx(c("CometRowItem.react"),{children:j.jsx(c("TetraTextPairing.react"),{level:p,meta:q})})})]})}a.displayName=a.name+" [from "+f.id+"]";b=j.forwardRef(a);g["default"]=b}),98);
__d("DistanceConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({KILOMETERS_PER_MILE:1.609344,MILES_PER_KILOMETER:.621371,FEET_PER_MILE:5280,METERS_PER_MILE_APPROXIMATE:1609,METERS_PER_MILE:1609.344,METERS_PER_KILOMETER:1e3,KILOMETERS_PER_METER:.001,SQUARED_METERS_PER_SQUARED_KILOMETER:1e6,FEET_PER_DECIMETER:.328084,FEET_PER_METER:3.28084,METERS_PER_FOOT:.3048,MILES_PER_METER:621371e-9,EARTH_EQUATOR_LAT_DEGREE_TO_METERS:111132,EARTH_EQUATOR_LONG_DEGREE_TO_METERS:78847,EARTH_RADIUS_KM:6371.01,EARTH_SEMI_CIRCUMFERENCE_KM:20015.11})}),null);
__d("distance",["DistanceConstants"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d,e){var f=d*Math.PI/180-a*Math.PI/180;e=e*Math.PI/180-b*Math.PI/180;b=Math.sin(f/2)*Math.sin(f/2)+Math.cos(a*Math.PI/180)*Math.cos(d*Math.PI/180)*Math.sin(e/2)*Math.sin(e/2);f=2*Math.atan2(Math.sqrt(b),Math.sqrt(1-b));a=c("DistanceConstants").EARTH_RADIUS_KM*f;return a*c("DistanceConstants").METERS_PER_KILOMETER}g.haversine=a}),98);
__d("ClientJSResource",[],(function(a,b,c,d,e,f){"use strict";function a(a){a=new Error("Expected `ClientJSResource` not to have been called at runtime. Haste rewrites CJSR calls to require, so this error indicates that something in Haste has gone awry.");a.stack;throw a}f["default"]=a}),66);/*FB_PKG_DELIM*/
__d("GroupsCometChatsEngagementLogger",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("C4gEngagementFalcoEvent").__setRef("GroupsCometChatsEngagementLogger");function a(a){var b=a.action,c=a.category_id,d=a.event,e=a.field_value,f=a.group_id,g=a.parent_surface,i=a.source,j=a.surface,k=a.thread_id;h.onReady(function(a){return a.log(function(){return{action:b,category_id:c,event:d,field_value:e,group_id:f,parent_surface:g,source:i,surface:j,thread_id:k}})})}g.log=a}),98);
__d("useGroupsCometChatsEngagementImpressionLogger",["GroupsCometChatsEngagementLogger","react","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.category_id,e=a.group_id,f=a.source,g=a.surface,i=a.thread_id;a=h(function(){d("GroupsCometChatsEngagementLogger").log({action:"impression",category_id:b,group_id:e,source:f,surface:g,thread_id:i})},[b,e,f,g,i]);return c("usePartialViewImpression")({onImpressionStart:a})}g["default"]=a}),98);