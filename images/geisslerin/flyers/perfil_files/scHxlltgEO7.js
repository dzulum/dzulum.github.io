if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometPrivacyIcon_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"CometPrivacyIcon_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacyIcon_image"}],storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useCometPrivacyIcon_image.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacyIcon_image",selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],type:"Image",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointIcon_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometPrivacySelectorEntryPointIcon_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation"},{kind:"Variable",name:"selected_override",variableName:"CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"CometPrivacySelectorEntryPointIcon_renderer$tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointIcon_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorEntryPointIcon_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacyIcon_scope"},{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorTooltip_scope"},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null}],storageKey:null}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointMatchContainer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"localPrivacyRow",variableName:"localPrivacyRow"},{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"tags",variableName:"tags"}];return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorEntryPointMatchContainer_renderer",selections:[{alias:null,args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Literal",name:"supported",value:["PrivacyScopeCometButtonEntryPointRenderer","PrivacyScopeCometComposerButtonEntryPointRenderer","PrivacyScopeCometIconEntryPointRenderer","PrivacyScopeCometLabelEntryPointRenderer","PrivacyScopeCometToggleEntryPointRenderer"]}],concreteType:null,kind:"LinkedField",name:"entry_point_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometComposerPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointIcon_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLabel_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLabelEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:a,documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointToggle_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometToggleEntryPointRenderer",abstractKey:null}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}}();e.exports=a}),null);
__d("useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer",selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PrivacyRowInput_fragment"}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"};e.exports=a}),null);
__d("CometPrivacySelectorTooltip_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPrivacySelectorTooltip_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useCometPrivacyIcon",["CometRelay","TintableIconSource","coerceRelayImage","react","useCometPrivacyIcon_image.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useMemo,j=[8,10,12,16,18,20,24,28,32,48],k=[20,24],l=[20];function m(a,e){var f=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacyIcon_image.graphql"),a);return i(function(){if(f==null)return null;var a=f.height,b=f.scale,d=f.width;if(a==null||b==null||d==null)return null;var g=Math.max(d,a)/b;d=e.find(function(a){return a>=g});return d==null?null:new(c("TintableIconSource"))("FB",c("coerceRelayImage")(f),d)},[f,e])}function a(a){return m(a,j)}function e(a){return m(a,k)}function f(a){return m(a,l)}g.useCometPrivacyIcon=a;g.useCometPrivacyIconForSkittleIcon=e;g.useCometPrivacyIconForMenuItem=f}),98);
__d("CometPrivacyIcon.react",["CometPrivacyIcon_scope.graphql","CometRelay","TetraIcon.react","react","useCometPrivacyIcon"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a["aria-hidden"];e=e===void 0?!1:e;var f=a.color;f=f===void 0?"secondary":f;var g=a.disabled;g=g===void 0?!1:g;var j=a.marginEnd;a=a.scope;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacyIcon_scope.graphql"),a);var k=a.icon_image;a=a.label;k=d("useCometPrivacyIcon").useCometPrivacyIcon(k);return k==null?null:i.jsx("div",{"aria-hidden":e,className:"taijpn5t pq6dq46d bp9cbjyn"+(j===4?" cgat1ltu":""),children:i.jsx(c("TetraIcon.react"),{alt:(e=a)!=null?e:"",color:g?"disabled":f,disabled:g,icon:k})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorButtonSavingOverlay.react",["CometProgressIndicator.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.isSaving;return!a?null:h.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg stjgntxs ni8dbmo4 n7fi1qx3 i09qtzwb taijpn5t j83agx80 bp9cbjyn",children:h.jsx(c("CometProgressIndicator.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorTooltip.react",["fbt","CometPrivacySelectorTooltip_scope.graphql","CometRelay","CometTooltip.react","gkx","killswitch","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");function k(){return h._(/*FBT_CALL*/"Cargando..."/*FBT_CALL*/)}k.displayName=k.name+" [from "+f.id+"]";function a(a){var e=a.children,f=a.entryPointHasLabel,g=a.isLoading;a=a.scope;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometPrivacySelectorTooltip_scope.graphql"),a);var h=a.can_viewer_edit,l=a.description,m=a.extended_description;a=a.label;if(g)return j.jsx(c("CometTooltip.react"),{tooltip:j.jsx(k,{}),children:e});g=c("killswitch")("COMET_PRIVACY_SELECTOR_EDITABLE_DISABLED");var n=c("gkx")("1593908");return g&&h||f&&l===a&&(!n||m==null)?e:j.jsx(c("CometTooltip.react"),{tooltip:n&&m!=null?m:l,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorEntryPointIcon.react",["fbt","CometPressable.react","CometPrivacyIcon.react","CometPrivacySelectorButtonSavingOverlay.react","CometPrivacySelectorEntryPointIcon_renderer.graphql","CometPrivacySelectorTooltip.react","CometRelay","CometTrackingNodeProvider.react","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k={centerContent:{alignItems:"bp9cbjyn",display:"j83agx80",justifyContent:"taijpn5t"},hiddenLabel:{clip:"q45zohi1",clipPath:"g0aa4cga",position:"pmk7jnqg"},invisible:{visibility:"kr9hpln1"},marginFixer:{marginStart:"rl04r1d5"},pressableOverlayPressed:{backgroundColor:"sx5rzos5"},pressablePosition:{position:"hwddc3l5"},savingOverlayContainer:{position:"l9j0dhe7"}};function a(a){var e=a.isEnabled,f=a.isSaving,g=a.onPress,l=a.renderer;a=a.triggerRef;l=d("CometRelay").useFragment(i!==void 0?i:i=b("CometPrivacySelectorEntryPointIcon_renderer.graphql"),l);l=(l=l.source)==null?void 0:l.scope;if(l==null)throw c("unrecoverableViolation")("Failed to render privacy selector icon entry point. Either source or source.scope were not available.","comet_privacy_selector");e=f||!e;var m=j.jsxs("div",{className:c("stylex")(k.centerContent,f&&k.invisible),children:[j.jsx(c("CometPrivacyIcon.react"),{disabled:e,marginEnd:4,scope:l}),j.jsx("div",{className:c("stylex")(k.marginFixer)})]}),n=l.description;n=n!=null?j.jsx("span",{className:c("stylex")(k.hiddenLabel),children:h._(/*FBT_CALL*/"Compartido con: {audience}"/*FBT_CALL*/,[h._param("audience",n)])}):null;var o=h._(/*FBT_CALL*/"Editar privacidad"/*FBT_CALL*/);o=j.jsxs(c("CometPressable.react"),{"aria-label":o,disabled:e,display:"inline",onPress:g,overlayOffset:4,overlayPressedStyle:k.pressableOverlayPressed,overlayRadius:"50%",ref:a,xstyle:k.pressablePosition,children:[j.jsx(c("CometPrivacySelectorButtonSavingOverlay.react"),{isSaving:f}),m]});return j.jsx(c("CometPrivacySelectorTooltip.react"),{entryPointHasLabel:!1,isLoading:f,scope:l,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:29,children:j.jsxs("span",{className:c("stylex")(k.savingOverlayContainer),children:[n,o]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorEntryPointMatchContainer.react",["CometPrivacySelectorEntryPointMatchContainer_renderer.graphql","CometRelay","react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.props;a=a.renderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorEntryPointMatchContainer_renderer.graphql"),a);a=a.entry_point_renderer;if(a==null)throw c("unrecoverableViolation")("Trying to render an editable Privacy Selector without an entry point","comet_privacy_selector");return i.jsx(d("CometRelay").MatchContainer,{match:a,props:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometPrivacySelectorNotifyPrivacyOnInitEffect",["CometRelay","PrivacyRowInput","react","useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react").useEffect;function a(a,c){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer.graphql"),a);var e=d("PrivacyRowInput").usePrivacyRowInput(a.privacy_row_input);i(function(){c&&c({privacyRowInput:e,type:"init"})},[c])}g["default"]=a}),98);