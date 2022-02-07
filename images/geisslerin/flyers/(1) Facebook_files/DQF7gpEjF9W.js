if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometUFIClassicCommentReactionIconTooltipContent_feedback$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFIClassicCommentReactionIconTooltipContent_feedback$normalization",selections:[{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionSummaryPerReaction",kind:"LinkedField",name:"summary",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"reaction",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"interesting_reactors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"session_id",variableName:"stagesSessionID"}],concreteType:"XFBStagesProfileInfoData",kind:"LinkedField",name:"stages_profile_info_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"selected_profile_name",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},a],storageKey:null}],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'}]}}();e.exports=a}),null);
__d("CometUFIClassicCommentReactionIconTooltipContent_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"stagesSessionID"}],kind:"Fragment",metadata:null,name:"CometUFIClassicCommentReactionIconTooltipContent_feedback",selections:[{alias:null,args:[{kind:"Literal",name:"orderby",value:["COUNT_DESC","REACTION_TYPE"]}],concreteType:"TopReactionsConnection",kind:"LinkedField",name:"top_reactions",plural:!1,selections:[{alias:null,args:null,concreteType:"TopReactionSummaryPerReaction",kind:"LinkedField",name:"summary",plural:!0,selections:[{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"reaction",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"reaction_count_reduced",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"interesting_reactors",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"session_id",variableName:"stagesSessionID"}],concreteType:"XFBStagesProfileInfoData",kind:"LinkedField",name:"stages_profile_info_data",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"selected_profile_name",storageKey:null}],storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:'top_reactions(orderby:["COUNT_DESC","REACTION_TYPE"])'}],type:"Feedback",abstractKey:null};e.exports=a}),null);
__d("CometUFITooltipNamesList.react",["fbt","CometNumber.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.hideReactionCount;b=b===void 0?!1:b;var d=a.names,e=a.totalCount;a=babelHelpers.objectWithoutPropertiesLoose(a,["hideReactionCount","names","totalCount"]);a=[].concat(d);e>d.length&&(d.length===0?a.push(b?h._(/*FBT_CALL*/"m\u00e1s..."/*FBT_CALL*/):h._(/*FBT_CALL*/"{reactionCount} m\u00e1s..."/*FBT_CALL*/,[h._param("reactionCount",i.jsx(c("CometNumber.react"),{decimals:0,number:e-d.length}))])):a.push(b?h._(/*FBT_CALL*/"y m\u00e1s\u2026"/*FBT_CALL*/):h._(/*FBT_CALL*/"y {reactionCount} personas m\u00e1s\u2026"/*FBT_CALL*/,[h._param("reactionCount",i.jsx(c("CometNumber.react"),{decimals:0,number:e-d.length}))])));return i.jsx("div",{"data-testid":void 0,children:i.jsx("ul",{className:"hcukyx3x tvmbv18p cxmmr5t8 aahdfvyu",children:i.Children.map(a,function(a){return a!==null?i.jsx("li",{children:a}):null})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIClassicCommentReactionIconTooltipContent.react",["CometRelay","CometUFIClassicCommentReactionIconTooltipContent_feedback.graphql","CometUFITooltipNamesList.react","TetraText.react","cr:933","react","recoverableViolation","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j={names:{color:"m9osqain"},reaction:{marginBottom:"w0hvl6rk"},reactionIcon:{marginEnd:"qq4y78aw",outline:"lzcic4wl",verticalAlign:"j1lvzwm4"},reactionRow:{marginBottom:"oud54xpy"}};function a(a){a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFIClassicCommentReactionIconTooltipContent_feedback.graphql"),a.feedback);var e=a==null?void 0:(a=a.top_reactions)==null?void 0:a.summary;return e==null?null:i.jsx(i.Fragment,{children:e.map(function(a,d){var f=a.reaction_count_reduced,g=a.reaction,h=a.reaction_count,k=g==null?void 0:g.reaction_type,l=g==null?void 0:g.id;if(g==null||k==null||h==null)return c("recoverableViolation")("Missing reaction data","ufi2");g=a.interesting_reactors;a=g.map(function(a){var b;return(b=a==null?void 0:(b=a.stages_profile_info_data)==null?void 0:b.selected_profile_name)!=null?b:a==null?void 0:a.name}).filter(Boolean);var m;b("cr:933")!=null&&(m=i.jsx(b("cr:933"),{reactionType:k,size:16,xstyle:j.reactionIcon}));return i.jsxs("div",{className:c("stylex")(d!==e.length-1&&j.reactionRow),children:[i.jsxs("div",{className:c("stylex")(j.reaction),children:[m,i.jsx(c("TetraText.react"),{type:"body4",children:f},"count_reduced")]}),a.length===0?null:i.jsx("div",{className:c("stylex")(j.names),children:i.jsx(c("CometUFITooltipNamesList.react"),{names:a,totalCount:h})})]},"CometUFICommentReactionIconTooltipContent/content_"+k+":"+((g=l)!=null?g:""))}).filter(Boolean)})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);