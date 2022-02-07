if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometListCellContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({disabled:!1,level:void 0,shouldToggleOnListcell:!1});g["default"]=b}),98);
__d("CometListCell.react",["BaseDivider.react","BaseListCell.react","CometListCellContext","CometRowContext","CometRowItem.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo,j={addOnStartMargin:{marginTop:"muag1w35"}},k={4:{paddingEnd:"ph5uu5jm",paddingStart:"b3onmgus"},8:{paddingEnd:"dflh9lhu",paddingStart:"scb9dxdr"},12:{paddingEnd:"d1544ag0",paddingStart:"tw6a2znq"},16:{paddingEnd:"hv4rvrfc",paddingStart:"dati1w0a"}},l={4:{paddingBottom:"e5nlhep0",paddingTop:"ecm0bbzt"},8:{paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05"},12:{paddingBottom:"f10w8fjw",paddingTop:"pybr56ya"},16:{paddingBottom:"ihqw7lf3",paddingTop:"discj3wi"}},m={4:{marginEnd:"nkwizq5d",marginStart:"roh60bw9"},8:{marginEnd:"dlv3wnog",marginStart:"rl04r1d5"},12:{marginEnd:"b5q2rw42",marginStart:"lq239pai"},16:{marginEnd:"o22cckgh",marginStart:"fop5sh7t"},24:{marginEnd:"a9txdygg",marginStart:"fnu23jab"},32:{marginEnd:"tmqn73lw",marginStart:"ocgrx2df"}},n={4:{marginBottom:"scwd0bx6",marginTop:"hop8lmos"},8:{marginBottom:"enqfppq2",marginTop:"muag1w35"},12:{marginBottom:"mysgfdmx",marginTop:"hddg9phg"},16:{marginBottom:"obtkqiv7",marginTop:"sv5sfqaa"},24:{marginEnd:"a9txdygg",marginStart:"fnu23jab"},32:{marginEnd:"tmqn73lw",marginStart:"ocgrx2df"}};function a(a,b){var d=a.addOnBottom,e=a.addOnBottomResponsive;e=e===void 0?!1:e;var f=a.addOnEnd,g=a.addOnEndVerticalAlign,o=a.addOnStart,p=a.addOnStartMarginTop,q=a.addOnStartVerticalAlign,r=a.content,s=a.contentId,t=a.contentPaddingHorizontal;t=t===void 0?0:t;var u=a.disabled,v=a.hasBottomDivider;v=v===void 0?!1:v;var w=a.level,x=w===void 0?3:w;w=a.nestedSpacing;var y=a.paddingVertical;y=y===void 0?12:y;var z=a.spacingHorizontal,A=z===void 0?12:z;z=a.spacingVertical;var B=z===void 0?12:z;z=a.testid;z=a.verticalAlign;a=z===void 0?"center":z;z=i(function(){return{disabled:u,level:x}},[u,x]);var C=i(function(){return{spacingHorizontal:A,spacingVertical:B}},[A,B]);return h.jsx(c("CometListCellContext").Provider,{value:z,children:h.jsxs(c("CometRowContext").Provider,{value:C,children:[h.jsx(c("BaseListCell.react"),{addOnBottom:d!=null?h.jsx(c("CometRowItem.react"),{children:d}):void 0,addOnBottomResponsive:e,addOnEnd:f!=null?h.jsx(c("CometRowItem.react"),{verticalAlign:g,children:f}):void 0,addOnEndVerticalAlign:g,addOnStart:o!=null?h.jsx(c("CometRowItem.react"),{verticalAlign:q,xstyle:p!==0&&j.addOnStartMargin,children:o}):void 0,addOnStartVerticalAlign:q,content:h.jsx(c("CometRowItem.react"),{children:r}),contentId:s,nestedSpacing:w,ref:b,testid:void 0,verticalAlign:a,xstyle:[k[t],l[y],m[A],n[B]]}),v&&h.jsx(c("BaseDivider.react"),{})]})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometListCellPressable.react",["CometColumn.react","CometColumnItem.react","CometListCell.react","CometPressable.react","Locale","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={disabled:{cursor:"rj84mg9z",pointerEvents:"hzruof5a"},root:{borderTopStartRadius:"ue3kfks5",borderTopEndRadius:"pw54ja7n",borderBottomEndRadius:"uo3d90p7",borderBottomStartRadius:"l82x9zwi",display:"a8c37x1j"},selected:{backgroundColor:"i224opu6"},selectedWashBackground:{backgroundColor:"qsy8amke"}};function a(a,b){var e=a["aria-checked"],f=a["aria-controls"],g=a["aria-expanded"],j=a["aria-label"],k=a.contentPaddingHorizontal;k=k===void 0?8:k;var l=a.focusable,m=a.id,n=a.linkProps,o=a.nestedSpacing,p=a.onHoverIn,q=a.onHoverOut,r=a.onPress,s=a.onPressIn,t=a.onPressOut,u=a.paddingHorizontal;u=u===void 0?0:u;var v=a.role,w=a.selected,x=a.selectedBackground,y=a.suppressHydrationWarning,z=a.testOnly_pressed,A=babelHelpers.objectWithoutPropertiesLoose(a,["aria-checked","aria-controls","aria-expanded","aria-label","contentPaddingHorizontal","focusable","id","linkProps","nestedSpacing","onHoverIn","onHoverOut","onPress","onPressIn","onPressOut","paddingHorizontal","role","selected","selectedBackground","suppressHydrationWarning","testOnly_pressed"]),B=d("Locale").isRTL();B=o!=null?B?{marginRight:o}:{marginLeft:o}:void 0;return h.jsx(c("CometColumn.react"),{paddingHorizontal:u,style:B,children:h.jsx(c("CometColumnItem.react"),{children:h.jsx(c("CometPressable.react"),{"aria-checked":e,"aria-controls":f,"aria-expanded":g,"aria-label":j,"aria-pressed":w===!0?!0:void 0,disabled:a.disabled,expanding:!0,focusable:l,id:m,linkProps:n,onHoverIn:p,onHoverOut:q,onPress:r,onPressIn:s,onPressOut:t,overlayDisabled:w,ref:b,role:v,suppressHydrationWarning:y,testOnly_pressed:z,xstyle:[i.root,w===!0&&i.selected,w===!0&&x==="wash"&&i.selectedWashBackground,a.disabled===!0&&i.disabled],children:h.jsx(c("CometListCell.react"),babelHelpers["extends"]({contentPaddingHorizontal:k},A))})})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometListCellText.react",["CometListCellContext","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext;function a(a){var b=a.body,d=a.bodyColor;d=d===void 0?"secondary":d;var e=a.bodyLineLimit,f=a.emphasized;f=f===void 0?!1:f;var g=a.headline,j=a.headlineAddOn,k=a.headlineColor;k=k===void 0?"primary":k;var l=a.headlineLineLimit,m=a.meta,n=a.metaColor;n=n===void 0?"tertiary":n;var o=a.metaLineLimit;a=a.metaLocation;var p=i(c("CometListCellContext")),q=p.disabled;q=q===void 0?!1:q;p=p.level;p=p===void 0?3:p;return h.jsx(c("TetraTextPairing.react"),{body:b,bodyColor:q?"disabled":d,bodyLineLimit:e,headline:g,headlineAddOn:j,headlineColor:q?"disabled":k,headlineLineLimit:l,level:p,meta:m,metaColor:q?"disabled":n,metaLineLimit:o,metaLocation:a,reduceEmphasis:f===!1})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("AddOnEndOverride.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.children,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:c("stylex")(e),ref:b,children:d}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("AddOnStartOverride.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.children,e=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","xstyle"]);return h.jsx("div",babelHelpers["extends"]({},a,{className:c("stylex")(e),ref:b,children:d}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("DisclosureAddOn.react",["ix","AddOnEndOverride.react","CometIcon.react","CometListCellContext","Locale","TetraText.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useContext,k=c("Locale").isRTL(),l={spacer:{width:"loos5mxf"},textNode:{alignItems:"bp9cbjyn",display:"j83agx80"}};function a(a){var b=a.color,e=a.icon,f=a.text;a=babelHelpers.objectWithoutPropertiesLoose(a,["color","icon","text"]);var g=j(c("CometListCellContext")),m=g.disabled;m=m===void 0?!1:m;g=g.level;g=g===void 0?3:g;e=e;g===3?e=k?d("fbicon")._(h("492521"),24):d("fbicon")._(h("492575"),24):e=k?d("fbicon")._(h("492518"),20):d("fbicon")._(h("492572"),20);b=i.jsx(c("CometIcon.react"),babelHelpers["extends"]({},a,{color:m?"disabled":(a=b)!=null?a:"secondary",disabled:m,icon:e}));f!=null&&(b=i.jsxs(c("AddOnEndOverride.react"),{xstyle:l.textNode,children:[i.jsx(c("TetraText.react"),{color:m?"disabled":"secondary",numberOfLines:1,type:g===3?"body2":"body3",children:f}),i.jsx("div",{className:c("stylex")(l.spacer)}),b]}));return b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("InstantGamesGSSocialFeatureToastUtils",["fbt","$InternalEnum"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("$InternalEnum").Mirrored(["MediaShared","AddFavorite","RemoveFavorite","SubscribeToBot","UnsubscribeFromBot","PostUserAchievement"]);function a(a,b){switch(a){case i.MediaShared:return h._(/*FBT_CALL*/"Compartiste esta captura del juego."/*FBT_CALL*/);case i.AddFavorite:return h._(/*FBT_CALL*/"{name} lo agreg\u00f3 a los juegos fijados"/*FBT_CALL*/,[h._param("name",b)]);case i.RemoveFavorite:return h._(/*FBT_CALL*/"{name} lo elimin\u00f3 de los juegos fijados"/*FBT_CALL*/,[h._param("name",b)]);case i.SubscribeToBot:return h._(/*FBT_CALL*/"Mensajes de {name} activados"/*FBT_CALL*/,[h._param("name",b)]);case i.UnsubscribeFromBot:return h._(/*FBT_CALL*/"Mensajes de {name} desactivados"/*FBT_CALL*/,[h._param("name",b)]);case i.PostUserAchievement:return h._(/*FBT_CALL*/"Logro desbloqueado: {achievement_name}"/*FBT_CALL*/,[h._param("achievement_name",b)])}}g.InstantGamesGSSocialFeatureToastMessageEnum=i;g.getInstantGamesGSSocialFeatureToastMessageFBT=a}),98);
__d("TimeUtils",[],(function(a,b,c,d,e,f){"use strict";var g={DAY_IN_SECONDS:86400,now:function(){return Math.floor(Date.now()/1e3)},since:function(a){return g.now()-a}};a=g;f["default"]=a}),66);
__d("ImageBlock.react",["cx","invariant","LeftRight.react","joinClasses","react"],(function(a,b,c,d,e,f,g,h,i){var j=d("react");function k(a){a=a.children;a&&(a.length===2||a.length===3)||i(0,97);a[0]!==null||i(0,98);return a}function l(a){return"img _8o"+(a==="small"?" _8r":"")+(a==="medium"?" _8s":"")+(a==="large"?" _8t":"")}a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var d=b.prototype;d.render=function(){var a=k(this.props),b=a[0],d=a[1];a=a[2];var e=this.props,f=e.imageClassName,g=e.contentClassName,h=e.spacing;e=babelHelpers.objectWithoutPropertiesLoose(e,["imageClassName","contentClassName","spacing"]);var i=b.props,m=i.className,n=i.alt,o=i.tabIndex;i=i.title;m={className:c("joinClasses")(m,l(h),f)};b.type==="img"?n===void 0&&(m.alt=""):(b.type==="a"||b.type==="link")&&o===void 0&&i===void 0&&b.props["aria-label"]===void 0&&(m.tabIndex="-1",m["aria-hidden"]="true");b=j.cloneElement(b,m);f=!0;this.props.flexibleContent!=null&&(f=this.props.flexibleContent);n=c("joinClasses")(g,(f?"_42ef":"")+(h==="small"?" _8u":""));!a?o=j.jsx("div",{className:n,children:d}):o=j.jsxs(c("LeftRight.react"),{className:n,direction:c("LeftRight.react").DIRECTION.right,children:[d,a]});return j.jsxs(c("LeftRight.react"),babelHelpers["extends"]({},e,{direction:c("LeftRight.react").DIRECTION.left,children:[b,o]}))};return b}(j.Component);a.defaultProps={spacing:"small"};g["default"]=a}),98);
__d("timeString",["fbt","DateConsts"],(function(a,b,c,d,e,f,g,h){function i(a){var b,c;a<10?b=h._(/*FBT_CALL*/"hace un momento"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_MIN?b=h._(/*FBT_CALL*/"hace unos segundos"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_MIN*2?b=h._(/*FBT_CALL*/"hace aproximadamente un minuto"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_HOUR?(c=Math.floor(a/d("DateConsts").SEC_PER_MIN),b=h._(/*FBT_CALL*/"hace {number} minutos"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_HOUR*2?b=h._(/*FBT_CALL*/"hace aproximadamente una hora"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_DAY?(c=Math.floor(a/d("DateConsts").SEC_PER_HOUR),b=h._(/*FBT_CALL*/"hace {number} horas"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_DAY*2?b=h._(/*FBT_CALL*/"hace un d\u00eda"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_DAY*30?(c=Math.floor(a/d("DateConsts").SEC_PER_DAY),b=h._(/*FBT_CALL*/"hace {number} d\u00edas"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_DAY*30*2?b=h._(/*FBT_CALL*/"hace aproximadamente un mes"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_YEAR?(c=Math.floor(a/d("DateConsts").SEC_PER_DAY/30),b=h._(/*FBT_CALL*/"hace {number} meses"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_YEAR*2?b=h._(/*FBT_CALL*/"hace m\u00e1s de un a\u00f1o"/*FBT_CALL*/):(c=Math.floor(a/d("DateConsts").SEC_PER_YEAR),b=h._(/*FBT_CALL*/"hace {number} a\u00f1os"/*FBT_CALL*/,[h._param("number",c)]));return b}function j(a){var b,c;a=Math.abs(a);a<10?b=h._(/*FBT_CALL*/"hace un momento"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_MIN?b=h._(/*FBT_CALL*/"en unos segundos"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_MIN*2?b=h._(/*FBT_CALL*/"en un minuto aproximadamente"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_HOUR?(c=Math.floor(a/d("DateConsts").SEC_PER_MIN),b=h._(/*FBT_CALL*/"en {number} minutos"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_HOUR*2?b=h._(/*FBT_CALL*/"en una hora aproximadamente"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_DAY?(c=Math.floor(a/d("DateConsts").SEC_PER_HOUR),b=h._(/*FBT_CALL*/"en {number} horas"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_DAY*2?b=h._(/*FBT_CALL*/"en aproximadamente un d\u00eda"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_DAY*30?(c=Math.floor(a/d("DateConsts").SEC_PER_DAY),b=h._(/*FBT_CALL*/"en {number} d\u00edas"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_DAY*30*2?b=h._(/*FBT_CALL*/"en aproximadamente un mes"/*FBT_CALL*/):a<d("DateConsts").SEC_PER_YEAR?(c=Math.floor(a/d("DateConsts").SEC_PER_DAY/30),b=h._(/*FBT_CALL*/"en {number} meses"/*FBT_CALL*/,[h._param("number",c)])):a<d("DateConsts").SEC_PER_YEAR*2?b=h._(/*FBT_CALL*/"en m\u00e1s de un a\u00f1o"/*FBT_CALL*/):(c=Math.floor(a/d("DateConsts").SEC_PER_YEAR),b=h._(/*FBT_CALL*/"en {number} a\u00f1os"/*FBT_CALL*/,[h._param("number",c)]));return b}function a(a,b){b=b==null||b===0?Date.now():b;b=Math.floor((b-a)/d("DateConsts").MS_PER_SEC);if(b>=0)return i(b);else return j(b)}g["default"]=a}),98);
__d("InstantGamesErrorCode",[],(function(a,b,c,d,e,f){a=Object.freeze({ACHIEVEMENT_NOT_FOUND:"ACHIEVEMENT_NOT_FOUND",ADS_EXPIRED:"ADS_EXPIRED",ADS_FREQUENT_LOAD:"ADS_FREQUENT_LOAD",ADS_NO_FILL:"ADS_NO_FILL",ADS_NOT_LOADED:"ADS_NOT_LOADED",ADS_TOO_MANY_INSTANCES:"ADS_TOO_MANY_INSTANCES",ANALYTICS_POST_EXCEPTION:"ANALYTICS_POST_EXCEPTION",ARENAS_NOT_FOUND:"ARENAS_NOT_FOUND",CLIENT_REQUIRES_UPDATE:"CLIENT_REQUIRES_UPDATE",CLIENT_UNSUPPORTED_OPERATION:"CLIENT_UNSUPPORTED_OPERATION",DUPLICATE_POST:"DUPLICATE_POST",GAMING_SQUAD_NOT_FOUND:"GAMING_SQUAD_NOT_FOUND",GROUP_NOT_LINKED:"GROUP_NOT_LINKED",INVALID_OPERATION:"INVALID_OPERATION",INVALID_PARAM:"INVALID_PARAM",LEADERBOARD_NOT_FOUND:"LEADERBOARD_NOT_FOUND",LEADERBOARD_WRONG_CONTEXT:"LEADERBOARD_WRONG_CONTEXT",LIVE_MATCH_NOT_FOUND:"LIVE_MATCH_NOT_FOUND",LIVE_STREAMS_NOT_FOUND:"LIVE_STREAMS_NOT_FOUND",NETWORK_FAILURE:"NETWORK_FAILURE",PAGE_NOT_LINKED:"PAGE_NOT_LINKED",PAYMENTS_INVALID:"PAYMENTS_INVALID",PAYMENTS_NOT_ALLOWED:"PAYMENTS_NOT_ALLOWED",PAYMENTS_NOT_INITIALIZED:"PAYMENTS_NOT_INITIALIZED",PAYMENTS_PURCHASE_CREATION_FAILED:"PAYMENTS_PURCHASE_CREATION_FAILED",PAYMENTS_PURCHASE_POST_PROCESSING_FAILED:"PAYMENTS_PURCHASE_POST_PROCESSING_FAILED",PAYMENTS_USER_CANCELLED:"PAYMENTS_USER_CANCELLED",PENDING_REQUEST:"PENDING_REQUEST",RATE_LIMITED:"RATE_LIMITED",ROOM_AR_DENIED_USER_EFFECT_IN_PLACE:"ROOM_AR_DENIED_USER_EFFECT_IN_PLACE",ROOM_AR_EFFECT_ALREADY_LOADED:"ROOM_AR_EFFECT_ALREADY_LOADED",ROOM_AR_EFFECT_NOT_FOUND:"ROOM_AR_EFFECT_NOT_FOUND",SAME_CONTEXT:"SAME_CONTEXT",TOURNAMENT_NOT_FOUND:"TOURNAMENT_NOT_FOUND",TOURNAMENT_SCORE_REJECTED:"TOURNAMENT_SCORE_REJECTED",UNKNOWN:"UNKNOWN",USER_INPUT:"USER_INPUT",VIDEO_NOT_FOUND:"VIDEO_NOT_FOUND"});f["default"]=a}),66);
__d("InstantGamesGameShareDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6125385204202905"}),null);