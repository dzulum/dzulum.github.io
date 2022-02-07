if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("useCometInspirationsCustomFont_customFont.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometInspirationsCustomFont_customFont",selections:[{alias:null,args:null,kind:"ScalarField",name:"font_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"font_url",storageKey:null}],type:"InspirationsCustomFont",abstractKey:null};e.exports=a}),null);
__d("useCometFeedFormattedTextRenderer_message.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometFeedFormattedTextRenderer_message",selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("useCometFeedFormattedTextRenderer_metadata.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],b=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useCometFeedFormattedTextRenderer_metadata",selections:[{alias:null,args:null,kind:"ScalarField",name:"avatar_story_text_format_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"background_color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"background_gradient_color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"background_gradient_direction",storageKey:null},{alias:null,args:a,concreteType:"Image",kind:"LinkedField",name:"background_image",plural:!1,selections:b,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"font_weight",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"font_style",storageKey:null},{alias:null,args:a,concreteType:"Image",kind:"LinkedField",name:"portrait_background_image",plural:!1,selections:b,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text_align",storageKey:null}],type:"TextFormatMetadata",abstractKey:null}}();e.exports=a}),null);
__d("CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message$normalization.graphql",["CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],c=[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message$normalization",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},{args:null,fragment:b("CometTextWithEntitiesRelay_textWithEntities$normalization.graphql"),kind:"FragmentSpread"}],storageKey:null},{alias:null,args:null,concreteType:"TextFormatMetadata",kind:"LinkedField",name:"text_format_metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"avatar_story_text_format_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"background_color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"background_gradient_color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"background_gradient_direction",storageKey:null},{alias:null,args:a,concreteType:"Image",kind:"LinkedField",name:"background_image",plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"font_weight",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"font_style",storageKey:null},{alias:null,args:a,concreteType:"Image",kind:"LinkedField",name:"portrait_background_image",plural:!1,selections:c,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text_align",storageKey:null},{alias:null,args:null,concreteType:"InspirationsCustomFont",kind:"LinkedField",name:"inspirations_custom_font_object",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"font_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"font_url",storageKey:null},d],storageKey:null}],storageKey:null},d],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,concreteType:"TextWithEntities",kind:"LinkedField",name:"message",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedFormattedTextRenderer_message"},{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],storageKey:null},{alias:null,args:null,concreteType:"TextFormatMetadata",kind:"LinkedField",name:"text_format_metadata",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedFormattedTextRenderer_metadata"},{alias:null,args:null,concreteType:"InspirationsCustomFont",kind:"LinkedField",name:"inspirations_custom_font_object",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometInspirationsCustomFont_customFont"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"CometFeedStoryFormattedBackgroundMessageRenderingStrategy",abstractKey:null};e.exports=a}),null);
__d("cometHexToRgba",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=parseInt(a.substring(0,2),16)/255,c=parseInt(a.substring(2,4),16),d=parseInt(a.substring(4,6),16);a=parseInt(a.substring(6,8),16);return"rgba("+c+","+d+","+a+","+b+")"}f["default"]=a}),66);
__d("useCometInspirationsCustomFont",["CometRelay","promiseDone","useCometInspirationsCustomFont_customFont.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i=new Set();function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometInspirationsCustomFont_customFont.graphql"),a);if(a==null)return null;var e=a.font_name;a=a.font_url;if(e==null||a==null)return null;if(!i.has(e)){i.add(e);var f=typeof document.fonts==="object"&&typeof FontFace==="function";if(f&&a!=null){f=new FontFace(e,"url("+a+")");c("promiseDone")(f.load(),function(a){window.document.fonts.add(a)})}}return e}g["default"]=a}),98);
__d("useCometFeedFormattedTextRenderer",["CometRelay","UnicodeUtils","cometHexToRgba","react","useCometFeedFormattedTextRenderer_message.graphql","useCometFeedFormattedTextRenderer_metadata.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react").useMemo,k=30;function l(a,b,c){var d="";switch(c){case"BOTTOM_TOP":d="to top";break;case"BL_TR":d="45deg";break;case"LEFT_RIGHT":d="to right";break;case"TL_BR":d="135deg";break;case"TR_BL":d="225deg";break;case"RIGHT_LEFT":d="to left";break;case"BR_TL":d="315deg";break;case"TOP_BOTTOM":default:d="to bottom";break}return"linear-gradient("+d+","+a+","+b+")"}function m(a){switch(a){case"normal":return"normal";case"bold":default:return"bold"}}function n(a){if(a==null||a.length===0)return k;a=d("UnicodeUtils").strlen(a);if(a>360)return 16;return a>180?24:k}function a(a,e,f){f===void 0&&(f=!1);a=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometFeedFormattedTextRenderer_message.graphql"),a);e=d("CometRelay").useFragment(i!==void 0?i:i=b("useCometFeedFormattedTextRenderer_metadata.graphql"),e);var g=a==null?void 0:a.text;a=j(function(){return n(g)},[g]);if(e==null)return{avatarStoryTextFormatId:null,backgroundStyle:null,fontSize:a,textColor:null,textStyle:null};var k=e.avatar_story_text_format_id,o=e.background_color,p=e.background_gradient_color,q=e.background_gradient_direction,r=e.background_image,s=e.color,t=e.font_style,u=e.font_weight,v=e.portrait_background_image;e=e.text_align;var w={backgroundColor:o!=null?c("cometHexToRgba")(o):null};r=r==null?void 0:r.uri;v=v==null?void 0:v.uri;if(r!=null)f&&v!=null?w.backgroundImage="url("+v+")":w.backgroundImage="url("+r+")",w.backgroundPosition="center center",w.backgroundSize="cover";else if(p!=null&&o!=null){f=c("cometHexToRgba")(o);v=c("cometHexToRgba")(p);w.backgroundImage=l(f,v,q)}r=s!=null?c("cometHexToRgba")(s):null;o={color:r,fontSize:a+"px",fontStyle:t,fontWeight:m(u),textAlign:e};return{avatarStoryTextFormatId:k,backgroundStyle:w,fontSize:a,textColor:r,textStyle:o}}g["default"]=a}),98);
__d("CometFeedStoryFormattedBackgroundMessageRenderingStrategy.react",["CometEmojiTransform","CometEmoticonTransform","CometFeedARIAProperties.react","CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message.graphql","CometFeedStoryFormattedBackgroundTextContext.react","CometLineBreakTransform","CometLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","CometTrackingNodeRenderer","PageWhatsAppNumberCometRenderer","react","stylex","unrecoverableViolation","useCometFeedFormattedTextRenderer","useCometFeedStoryMatchDebugger","useCometInspirationsCustomFont","useCometSeeMoreKeyCommand"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=e.useMemo,m=e.useState,n=420,o=5,p={aspectRatioBox:{"float":"bzsjyuwj",paddingTop:"jsq31si4"},aspectRatioBoxWithAvatars:{"float":"bzsjyuwj",paddingTop:"n1ap2d1u"},border:{borderBottom:"linmgsc8",borderTop:"opwvks06",bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",pointerEvents:"hzruof5a",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},container:{width:"k4urcfbm"},hiddenOverflowText:{visibility:"kr9hpln1"},link:{textDecoration:"oo483o9r",":hover":{opacity:"quwhnjym"}},root:{alignItems:"ll8tlv6m",display:"j83agx80",justifyContent:"jifvfom9",position:"l9j0dhe7",width:"k4urcfbm"},sizingBox:{width:"k4urcfbm"},text:{maxWidth:"sfj4j7ms",paddingTop:"pvbba8z0",paddingEnd:"rqr5e5pd",paddingBottom:"dy7m38rt",paddingStart:"j7igg4fr"},textContainer:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",height:"datstx6m",justifyContent:"taijpn5t",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},textContainerWithAvatars:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"cbu4d94t",height:"hdr16bak",justifyContent:"taijpn5t",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"}},q=i.forwardRef(function(a,b){var d=a.expanded,e=a.onToggleExpanded,f=a.renderers,g=a.style,h=a.textWithEntities,j=a.transforms;a=babelHelpers.objectWithoutPropertiesLoose(a,["expanded","onToggleExpanded","renderers","style","textWithEntities","transforms"]);return i.jsx("div",babelHelpers["extends"]({className:c("stylex")(p.text),style:g},a,{ref:b,children:i.jsx(c("CometTextWithEntitiesRelay.react"),{expanded:d,maxLength:n,maxLines:o,onToggleExpanded:e,renderers:f,textWithEntities:h,transforms:j,truncationStyle:"see-more",withParagraphs:!0})}))}),r=function(a){return function(b){return i.jsx("span",{className:c("stylex")(p.link),style:{color:a},children:b})}},s=h!==void 0?h:h=b("CometFeedStoryFormattedBackgroundMessageRenderingStrategy_message.graphql");function a(a){a=d("CometRelay").useFragment(s,a.message);c("useCometFeedStoryMatchDebugger")(a);a=a.story;var b=a==null?void 0:a.message;a=a==null?void 0:a.text_format_metadata;var e=m(!1),f=e[0],g=e[1];e=j(function(){g(function(a){return!a})},[]);c("useCometSeeMoreKeyCommand")(f,e);var h=c("useCometFeedFormattedTextRenderer")(b,a,f),n=h.avatarStoryTextFormatId,o=h.backgroundStyle,t=h.fontSize,u=h.textColor;h=h.textStyle;var v=l(function(){return[c("CometEmoticonTransform")({size:t}),c("CometEmojiTransform")({size:t}),c("CometLineBreakTransform")]},[t]),w=l(function(){var a=[r(u),c("CometLinkedEntityRenderer"),c("CometTrackingNodeRenderer")];return{Event:a,ExternalUrl:a,Group:a,GroupHashtag:a,GroupRule:a,Hashtag:a,Page:a,PageWhatsAppNumber:[c("PageWhatsAppNumberCometRenderer")],User:a}},[u]),x=k(c("CometFeedARIAProperties.react"));a=c("useCometInspirationsCustomFont")(a==null?void 0:a.inspirations_custom_font_object);if(b==null)throw c("unrecoverableViolation")("storyMessage cannot be null in CometFeedStoryFormattedBackgroundMessageRenderingStrategy","comet_feed");h=babelHelpers["extends"]({},h,{fontFamily:a});a=l(function(){return{textColor:u}},[u]);return i.jsx(d("CometFeedStoryFormattedBackgroundTextContext.react").CometFeedStoryFormattedBackgroundTextContext.Provider,{value:a,children:i.jsx("div",{className:c("stylex")(p.container),"data-testid":void 0,children:i.jsxs("div",{className:c("stylex")(p.root),style:o,children:[i.jsxs("div",{"aria-hidden":!0,className:c("stylex")(p.sizingBox),children:[i.jsx("div",{className:n===null?c("stylex")(p.aspectRatioBox):c("stylex")(p.aspectRatioBoxWithAvatars)}),i.jsx("div",{className:c("stylex")(p.hiddenOverflowText),children:i.jsx(q,{expanded:f,renderers:w,style:h,textWithEntities:b,transforms:v})})]}),i.jsx("div",{className:n===null?c("stylex")(p.textContainer):c("stylex")(p.textContainerWithAvatars),children:i.jsx(q,babelHelpers["extends"]({expanded:f},x.contentTargetProps,{onToggleExpanded:e,ref:x.contentTargetRef,renderers:w,style:h,textWithEntities:b,transforms:v}))}),i.jsx("div",{className:c("stylex")(p.border)})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);