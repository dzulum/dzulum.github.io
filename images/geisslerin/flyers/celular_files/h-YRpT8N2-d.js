if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("ProfileCometMentionsFeedQuery.graphql",["CometFeedUnit_feedUnit$normalization.graphql","ProfileCometMentionsFeedQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},c={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},d={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},e={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},f={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},g={defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},h={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},i={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},j={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},k={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},l={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},m={defaultValue:null,kind:"LocalArgument",name:"scale"},n={defaultValue:null,kind:"LocalArgument",name:"sortBy"},o={defaultValue:!1,kind:"LocalArgument",name:"useDefaultActor"},p={defaultValue:null,kind:"LocalArgument",name:"userID"},q=[{kind:"Variable",name:"id",variableName:"userID"}],r={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},s=[{kind:"Literal",name:"first",value:3},{kind:"Variable",name:"sort_by",variableName:"sortBy"}];return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i,j,k,l,m,n,o,p],kind:"Fragment",metadata:null,name:"ProfileCometMentionsFeedQuery",selections:[{alias:null,args:q,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometMentionsFeed_user"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[g,c,d,e,f,h,i,j,k,m,n,l,o,p,a],kind:"Operation",name:"ProfileCometMentionsFeedQuery",selections:[{alias:null,args:q,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_post",storageKey:null},r,{alias:"mentions_list_feed_units",args:s,concreteType:"MentionsFeedUnitsConnection",kind:"LinkedField",name:"mentions_feed_units",plural:!1,selections:[{"if":null,kind:"Stream",label:"ProfileCometMentionsFeed_user$stream$ProfileCometMentionsFeed_user_mentions_list_feed_units",selections:[{alias:null,args:null,concreteType:"MentionsFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,fragment:b("CometFeedUnit_feedUnit$normalization.graphql"),kind:"FragmentSpread"}],type:"FeedUnit",abstractKey:"__isFeedUnit"},r,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometMentionsFeed_user$defer$ProfileCometMentionsFeed_user_mentions_list_feed_units$page_info",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:"mentions_list_feed_units",args:s,filters:["sort_by"],handle:"connection",key:"ProfileCometMentionsFeed_user_mentions_list_feed_units",kind:"LinkedHandle",name:"mentions_feed_units"}],storageKey:null}]},params:{id:b("ProfileCometMentionsFeedQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometMentionsFeedQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ProfileCometMentionsFeedRefetchQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7446775742000999"}),null);
__d("ProfileCometMentionsFeedRefetchQuery.graphql",["CometFeedUnit_feedUnit$normalization.graphql","ProfileCometMentionsFeedRefetchQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"UFI2CommentsProvider_commentsKey"},c={defaultValue:3,kind:"LocalArgument",name:"count"},d={defaultValue:null,kind:"LocalArgument",name:"cursor"},e={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextEnableComment"},f={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAdPreview"},g={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsAggregatedShare"},h={defaultValue:null,kind:"LocalArgument",name:"displayCommentsContextIsStorySet"},i={defaultValue:null,kind:"LocalArgument",name:"displayCommentsFeedbackContext"},j={defaultValue:null,kind:"LocalArgument",name:"feedLocation"},k={defaultValue:null,kind:"LocalArgument",name:"feedbackSource"},l={defaultValue:null,kind:"LocalArgument",name:"focusCommentID"},m={defaultValue:null,kind:"LocalArgument",name:"id"},n={defaultValue:null,kind:"LocalArgument",name:"privacySelectorRenderLocation"},o={defaultValue:null,kind:"LocalArgument",name:"renderLocation"},p={defaultValue:null,kind:"LocalArgument",name:"scale"},q={defaultValue:null,kind:"LocalArgument",name:"sortBy"},r={defaultValue:null,kind:"LocalArgument",name:"useDefaultActor"},s=[{kind:"Variable",name:"id",variableName:"id"}],t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},v=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"},{kind:"Variable",name:"sort_by",variableName:"sortBy"}];return{fragment:{argumentDefinitions:[a,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r],kind:"Fragment",metadata:null,name:"ProfileCometMentionsFeedRefetchQuery",selections:[{alias:null,args:s,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"ProfileCometMentionsFeed_user"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,d,e,f,g,h,i,j,k,l,n,o,p,q,r,m],kind:"Operation",name:"ProfileCometMentionsFeedRefetchQuery",selections:[{alias:null,args:s,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[t,u,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_post",storageKey:null},{alias:"mentions_list_feed_units",args:v,concreteType:"MentionsFeedUnitsConnection",kind:"LinkedField",name:"mentions_feed_units",plural:!1,selections:[{"if":null,kind:"Stream",label:"ProfileCometMentionsFeed_user$stream$ProfileCometMentionsFeed_user_mentions_list_feed_units",selections:[{alias:null,args:null,concreteType:"MentionsFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,fragment:b("CometFeedUnit_feedUnit$normalization.graphql"),kind:"FragmentSpread"}],type:"FeedUnit",abstractKey:"__isFeedUnit"},u,t],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{"if":null,kind:"Defer",label:"ProfileCometMentionsFeed_user$defer$ProfileCometMentionsFeed_user_mentions_list_feed_units$page_info",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:"mentions_list_feed_units",args:v,filters:["sort_by"],handle:"connection",key:"ProfileCometMentionsFeed_user_mentions_list_feed_units",kind:"LinkedHandle",name:"mentions_feed_units"}],type:"User",abstractKey:null}],storageKey:null}]},params:{id:b("ProfileCometMentionsFeedRefetchQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometMentionsFeedRefetchQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("ProfileCometMentionsFeed_user.graphql",["ProfileCometMentionsFeedRefetchQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["mentions_list_feed_units"],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"UFI2CommentsProvider_commentsKey"},{defaultValue:3,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"displayCommentsContextEnableComment"},{kind:"RootArgument",name:"displayCommentsContextIsAdPreview"},{kind:"RootArgument",name:"displayCommentsContextIsAggregatedShare"},{kind:"RootArgument",name:"displayCommentsContextIsStorySet"},{kind:"RootArgument",name:"displayCommentsFeedbackContext"},{kind:"RootArgument",name:"feedLocation"},{kind:"RootArgument",name:"feedbackSource"},{kind:"RootArgument",name:"focusCommentID"},{kind:"RootArgument",name:"privacySelectorRenderLocation"},{kind:"RootArgument",name:"renderLocation"},{kind:"RootArgument",name:"scale"},{kind:"RootArgument",name:"sortBy"},{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a,stream:!0}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["node"],operation:b("ProfileCometMentionsFeedRefetchQuery.graphql"),identifierField:"id"}},name:"ProfileCometMentionsFeed_user",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_viewer_post",storageKey:null},c,{alias:"mentions_list_feed_units",args:[{kind:"Variable",name:"sort_by",variableName:"sortBy"}],concreteType:"MentionsFeedUnitsConnection",kind:"LinkedField",name:"__ProfileCometMentionsFeed_user_mentions_list_feed_units_connection",plural:!1,selections:[{kind:"Stream",selections:[{alias:null,args:null,concreteType:"MentionsFeedUnitsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometFeedUnit_feedUnit"},c,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null}]},{kind:"Defer",selections:[{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}]}],storageKey:null}],type:"User",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometMentionsTabHeader_user.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometMentionsTabHeader_user",selections:[{alias:null,args:[{kind:"Literal",name:"is_comet",value:!0}],kind:"ScalarField",name:"should_show_profile_mentions_filters",storageKey:"should_show_profile_mentions_filters(is_comet:true)"},{alias:null,args:[{kind:"Literal",name:"render_location",value:"WWW_MENTIONS_TAB"}],concreteType:"ProfileComposerInfo",kind:"LinkedField",name:"profile_composer_info",plural:!1,selections:[{args:null,documentName:"ProfileCometMentionsTabHeader_user",fragmentName:"ProfileCometInlineComposerWrapper_profileComposerInfo",fragmentPropName:"profileComposerInfo",kind:"ModuleImport"}],storageKey:'profile_composer_info(render_location:"WWW_MENTIONS_TAB")'}],type:"User",abstractKey:null};e.exports=a}),null);
__d("ProfileCometMentionsTabHeader_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:!1,kind:"LocalArgument",name:"is_viewing_self"}],kind:"Fragment",metadata:null,name:"ProfileCometMentionsTabHeader_viewer",selections:[{condition:"is_viewing_self",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"UserPrivacySettings",kind:"LinkedField",name:"privacy_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_timeline_review_on",storageKey:null}],storageKey:null}]}],type:"Viewer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometMentionsTabWithDeepDiveRootQuery.graphql",["ProfileCometMentionsTabWithDeepDiveRootQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:!1,kind:"LocalArgument",name:"isViewingSelf"},c={defaultValue:null,kind:"LocalArgument",name:"scale"},d={defaultValue:null,kind:"LocalArgument",name:"userID"},e=[{kind:"Variable",name:"id",variableName:"userID"}],f=[{kind:"Literal",name:"nux_id",value:8361}],g={kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometMentionsTabWithDeepDiveRootQuery",fragmentName:"ProfileCometMentionsTimelineSettingsNUX_nux",fragmentPropName:"nux",kind:"ModuleImport"}],type:"DefaultNUX",abstractKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:[a,c,d],kind:"Fragment",metadata:null,name:"ProfileCometMentionsTabWithDeepDiveRootQuery",selections:[{alias:null,args:e,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometMentionsTabHeader_user"}],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{args:[{kind:"Variable",name:"is_viewing_self",variableName:"isViewingSelf"}],kind:"FragmentSpread",name:"ProfileCometMentionsTabHeader_viewer"}],storageKey:null},{alias:"timelineSettingsNux",args:f,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[g],storageKey:"nux(nux_id:8361)"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,a],kind:"Operation",name:"ProfileCometMentionsTabWithDeepDiveRootQuery",selections:[{alias:null,args:e,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:[{kind:"Literal",name:"is_comet",value:!0}],kind:"ScalarField",name:"should_show_profile_mentions_filters",storageKey:"should_show_profile_mentions_filters(is_comet:true)"},{alias:null,args:[{kind:"Literal",name:"render_location",value:"WWW_MENTIONS_TAB"}],concreteType:"ProfileComposerInfo",kind:"LinkedField",name:"profile_composer_info",plural:!1,selections:[{args:null,documentName:"ProfileCometMentionsTabHeader_user",fragmentName:"ProfileCometInlineComposerWrapper_profileComposerInfo",fragmentPropName:"profileComposerInfo",kind:"ModuleImport"}],storageKey:'profile_composer_info(render_location:"WWW_MENTIONS_TAB")'},h],storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{condition:"isViewingSelf",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:"UserPrivacySettings",kind:"LinkedField",name:"privacy_settings",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_timeline_review_on",storageKey:null}],storageKey:null}]}],storageKey:null},{alias:"timelineSettingsNux",args:f,concreteType:null,kind:"LinkedField",name:"nux",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},g,h],storageKey:"nux(nux_id:8361)"}]},params:{id:b("ProfileCometMentionsTabWithDeepDiveRootQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometMentionsTabWithDeepDiveRootQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("ProfileCometMentionsFeedNullState.react",["fbt","NullStateFiles","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=h._(/*FBT_CALL*/"No hay publicaciones ni etiquetas"/*FBT_CALL*/),d=h._(/*FBT_CALL*/"S\u00e9 la primera persona en escribir o compartir algo."/*FBT_CALL*/),e=h._(/*FBT_CALL*/"No hay nada de otras personas para mostrar."/*FBT_CALL*/);return i.jsx("div",{className:"dati1w0a ihqw7lf3 hv4rvrfc discj3wi",children:i.jsx(c("TetraNullState.react"),{body:a.canViewerPost?d:e,headline:b,icon:c("NullStateFiles")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometMentionsFilterReducer",[],(function(a,b,c,d,e,f){"use strict";a=function(){return{sortBy:"most_relevant"}};b=function(a,b){switch(b.type){case"SET_FILTERS":return babelHelpers["extends"]({},a,{sortBy:b.sortBy});default:return babelHelpers["extends"]({},a)}};f.getInitialState=a;f.reducer=b}),66);
__d("ProfileCometMentionsFilterContext",["FBLogger","ProfileCometMentionsFilterReducer","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({dispatchAction:function(a){c("FBLogger")("comet_profile").mustfix("ProfileCometMentionsFilterContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometMentionsFilterContext.Provider value={context} />")},state:d("ProfileCometMentionsFilterReducer").getInitialState()});g["default"]=b}),98);
__d("useProfileCometMentionsFeedQueryRefetcherForFilters",["ProfileCometMentionsFilterContext","react"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useEffect,j=b.useRef,k=b.useState;function a(a){var b=a.fetchCount,d=a.refetch;a=a.variables;var e=a.userID;a=babelHelpers.objectWithoutPropertiesLoose(a,["userID"]);var f=j(a);a=k(!1);var g=a[0],l=a[1],m=j(!0),n=j(d),o=j(b),p=j(e);n.current=d;o.current=b;p.current=e;a=h(c("ProfileCometMentionsFilterContext"));var q=a.state,r=j({dispose:function(){}});i(function(){if(m.current){m.current=!1;return}var a;switch(q.sortBy){case"most_relevant":a="MOST_RELEVANT";break;case"most_recent":a="MOST_RECENT";break}l(!0);r.current.dispose();r.current=n.current(babelHelpers["extends"]({},f.current,{count:o.current,id:p.current,sortBy:a}),{fetchPolicy:"store-and-network",onComplete:function(){l(!1)}})},[q.sortBy]);return g}g["default"]=a}),98);
__d("ProfileCometMentionsFeed.react",["CometFeedInfiniteScrollSuspenseList.react","CometFeedUnit.react","CometHeroFeedItem.react","CometRelay","ProfileCometContext","ProfileCometMentionsFeedNullState.react","ProfileCometMentionsFeed_user.graphql","ProfileCometUtils","react","useCometFeedKeyCommands","useProfileCometMentionsFeedQueryRefetcherForFilters"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useCallback,k=e.useContext,l=e.useRef,m=3;function n(a){var b=a.node,d=a.position;a=a.variables;return i.jsx(c("CometFeedUnit.react"),{feedUnit:b,position:d,variables:a})}n.displayName=n.name+" [from "+f.id+"]";var o=h!==void 0?h:h=b("ProfileCometMentionsFeed_user.graphql");function a(a){var b=a.user,e=a.variables;a=d("CometRelay").usePaginationFragment(o,b);var f=a.data,g=a.hasNext,h=a.isLoadingNext,p=a.loadNext;a=a.refetch;b=d("CometRelay").useIsParentQueryActive(o,b);var q=g||b,r=l({dispose:function(){}});b=h||b;var s=c("useProfileCometMentionsFeedQueryRefetcherForFilters")({fetchCount:m,refetch:a,variables:e});s&&r.current.dispose();a=j(function(a){if(!g||h||s)return;r.current=p(m)},[g,h,s,p]);var t=f==null?void 0:f.mentions_list_feed_units;t=(t=t==null?void 0:t.edges)!=null?t:[];c("useCometFeedKeyCommands")(t.length,"newsfeed");var u=k(c("ProfileCometContext")),v=u.profileID;u=u.viewerID;v=d("ProfileCometUtils").isViewingSelfProfile(v,u);if(t.length===0){u=(f==null?void 0:f.can_viewer_post)===!0;return i.jsx(c("ProfileCometMentionsFeedNullState.react"),{canViewerPost:u&&!v})}return i.jsx(c("CometFeedInfiniteScrollSuspenseList.react"),{hasMore:q,interactionSource:3,isLoading:b,onLoadMore:a,waitOnScrollIntent:!0,children:t.map(function(a,b){var d;a=a.node;return a!=null?i.jsx(c("CometHeroFeedItem.react"),{position:b,children:i.jsx(n,{node:a,position:b,variables:e},(d=a.id)!=null?d:b)},a.id!=null?a.id:b):null})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometMentions.react",["CometErrorBoundary.react","CometHero.react","CometRelay","ProfileCometMentionsFeed.react","ProfileCometMentionsFeedQuery.graphql","ProfileCometTimelineError.react","VideoAutoplayLocalScopeProvider.react","VideoPlayerAutoplayRulesProvider","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("VideoPlayerAutoplayRulesProvider").provideAutoplayRules("default_feed");function k(a){a=a.mentionsFeedQueryReference;var e=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("ProfileCometMentionsFeedQuery.graphql"),a);e=e.user;if(e==null){c("recoverableViolation")("Can't render mentions without a User","profile_comet");return i.jsx(c("ProfileCometTimelineError.react"),{})}return i.jsx(c("ProfileCometMentionsFeed.react"),{user:e,variables:a.variables})}k.displayName=k.name+" [from "+f.id+"]";function a(a){a=a.mentionsFeedQueryReference;return i.jsx(c("CometErrorBoundary.react"),{fallback:function(){return i.jsx(c("ProfileCometTimelineError.react"),{})},children:i.jsxs(c("VideoAutoplayLocalScopeProvider.react"),{autoplayLocalRules:j,children:[i.jsx(c("CometHero.react"),{description:"ProfileMentionsFeed"}),i.jsx(k,{mentionsFeedQueryReference:a})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometMentionsFiltersDialogReducer",[],(function(a,b,c,d,e,f){"use strict";a=function(){return{sortBy:"most_relevant"}};b=function(a,b){switch(b.type){case"SET_FILTERS":return babelHelpers["extends"]({},a,{sortBy:b.sortBy});default:return babelHelpers["extends"]({},a)}};f.getInitialState=a;f.reducer=b}),66);
__d("ProfileCometMentionsFiltersDialogContext",["ProfileCometMentionsFiltersDialogReducer","react","recoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({dispatchAction:function(a){c("recoverableViolation")("ProfileCometMentionsFiltersDialogContext: Tried to dispatch an action\n        without providing a dispatch function. Please render this component with\n        a context provider, e.g.:\n        <ProfileCometMentionsFiltersDialogContext.Provider value={context} />","profile_comet")},state:d("ProfileCometMentionsFiltersDialogReducer").getInitialState()});g["default"]=b}),98);
__d("ProfileCometMentionsTabHeader.react",["fbt","ix","CometCard.react","CometCardedDialogLoadingState.react","CometLazyDialogTrigger.react","CometPlaceholder.react","CometRelay","CometRow.react","CometRowItem.react","CometTransientDialogProvider.react","JSResourceForInteraction","ProfileCometContext","ProfileCometMentionsFiltersDialogContext","ProfileCometMentionsFiltersDialogReducer","ProfileCometMentionsTabHeader_user.graphql","ProfileCometMentionsTabHeader_viewer.graphql","ProfileCometUtils","TetraButton.react","TetraTextPairing.react","XCometActivityLogControllerRouteBuilder","fbicon","mergeRefs","react","useProfileCometEngagementEventsClickCallback","useProfileCometEngagementEventsImpression","useProfileEngagementClickCallback"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=d("react");e=d("react");var m=e.useCallback,n=e.useContext,o=e.useMemo,p=e.useReducer,q=e.useRef,r=c("JSResourceForInteraction")("ProfileCometMentionsFiltersDialog.react").__setRef("ProfileCometMentionsTabHeader.react");function a(a){var e=a.user;a=a.viewer;var f=q(null),g=n(c("ProfileCometContext")),s=g.profileID;g=g.viewerID;s=d("ProfileCometUtils").isViewingSelfProfile(s,g);g=d("CometRelay").useFragment(j!==void 0?j:j=b("ProfileCometMentionsTabHeader_viewer.graphql"),a);a=d("CometRelay").useFragment(k!==void 0?k:k=b("ProfileCometMentionsTabHeader_user.graphql"),e);var t=c("useProfileEngagementClickCallback")({item_type:"review_posts_and_tags",product_bucket:"mentions",surface:"timeline",tab_name:"mentions"});e={feature_surface:null,profile_feature:"mentions_setting",profile_section:"mentions_tab"};var u=c("useProfileCometEngagementEventsImpression")(babelHelpers["extends"]({},e,{feature_item:"sort"})),v=c("useProfileCometEngagementEventsClickCallback")(babelHelpers["extends"]({},e,{feature_item:"sort"})),w=c("useProfileCometEngagementEventsImpression")(babelHelpers["extends"]({},e,{feature_item:"review"})),x=c("useProfileCometEngagementEventsClickCallback")(babelHelpers["extends"]({},e,{feature_item:"review"}));e=m(function(a){return l.jsx(c("CometCardedDialogLoadingState.react"),{onClose:a,title:h._(/*FBT_CALL*/"Ordenar por"/*FBT_CALL*/),withCloseButton:!0})},[]);var y=p(d("ProfileCometMentionsFiltersDialogReducer").reducer,d("ProfileCometMentionsFiltersDialogReducer").getInitialState()),z=y[0],A=y[1];y=o(function(){return{dispatchAction:A,state:z}},[z]);if(!g)return null;g=(g==null?void 0:(g=g.privacy_settings)==null?void 0:g.is_timeline_review_on)===!0;g=s&&g;var B=(a==null?void 0:a.should_show_profile_mentions_filters)===!0;y=l.jsxs(c("CometRow.react"),{paddingHorizontal:12,paddingVertical:16,children:[l.jsx(c("CometRowItem.react"),{verticalAlign:"center",children:l.jsx(c("TetraTextPairing.react"),{headline:B&&s?h._(/*FBT_CALL*/"Tus menciones"/*FBT_CALL*/):h._(/*FBT_CALL*/"Menciones"/*FBT_CALL*/),isSemanticHeading:!0,level:2})}),l.jsx(c("CometRowItem.react"),{verticalAlign:"center",children:l.jsxs("div",{className:"j83agx80",children:[B&&l.jsx(c("ProfileCometMentionsFiltersDialogContext").Provider,{value:y,children:l.jsx(c("CometTransientDialogProvider.react"),{children:l.jsx(c("CometLazyDialogTrigger.react"),{dialogProps:{},dialogResource:r,fallback:e,children:function(a){return l.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("500218"),16),label:h._(/*FBT_CALL*/"Ordenar"/*FBT_CALL*/),onPress:function(){a(),v()},ref:c("mergeRefs")(f,u),type:"secondary"})}})})}),g&&l.jsx("div",{className:"h676nmdw",children:l.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("502471"),16),label:h._(/*FBT_CALL*/"Revisar publicaciones y etiquetas"/*FBT_CALL*/),linkProps:{url:c("XCometActivityLogControllerRouteBuilder").buildURL({category_key:"review",entry_point:"profile_mentions_tab",log_filter:"review",vanity:"me"})},onPress:function(){t(),x()},ref:w,type:"secondary"})})]})})]});e=!s&&l.jsx("div",{className:"oygrvhab",children:l.jsx(d("CometRelay").MatchContainer,{match:a.profile_composer_info,props:{hideBottomMargin:!0}})});g=l.jsxs("div",{children:[l.jsx("div",{className:"sjgh65i0",children:l.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:l.jsx(c("CometPlaceholder.react"),{fallback:null,children:e})})}),l.jsx("div",{className:"sjgh65i0",children:l.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:l.jsx(c("CometPlaceholder.react"),{fallback:null,children:y})})})]});w=l.jsx("div",{className:"sjgh65i0",children:l.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,children:[y,e]})});return!s&&B?g:w}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometMentionsTabWithDeepDiveRoot.react",["CometErrorRoot.react","CometFeedGlimmer.react","CometPlaceholder.react","CometRelay","CometResponsiveColumns.react","ProfileCometContext","ProfileCometMentionsFilterContext","ProfileCometMentionsFilterReducer","ProfileCometMentionsTabHeader.react","ProfileCometMentionsTabWithDeepDiveRootQuery.graphql","ProfileCometUtils","RelayUFI2CommentsKeyContext","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useContext,k=e.useMemo,l=e.useReducer,m=c("deferredLoadComponent")(c("requireDeferredForDisplay")("ProfileCometMentions.react").__setRef("ProfileCometMentionsTabWithDeepDiveRoot.react")),n={mentionsFeedContainer:{marginTop:"tr9rh885",width:"o7dlgrpb"}};function a(a){a=a.queries;var e=l(d("ProfileCometMentionsFilterReducer").reducer,d("ProfileCometMentionsFilterReducer").getInitialState()),f=e[0],g=e[1];e=k(function(){return{dispatchAction:g,state:f}},[g,f]);var o=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("ProfileCometMentionsTabWithDeepDiveRootQuery.graphql"),a.mentionsTabRootQueryReference),p=o.timelineSettingsNux,q=o.user;o=o.viewer;var r=j(c("ProfileCometContext")),s=r.profileID;r=r.viewerID;s=d("ProfileCometUtils").isViewingSelfProfile(s,r);return!q||!o?i.jsx(c("CometErrorRoot.react"),{}):i.jsx(c("ProfileCometMentionsFilterContext").Provider,{value:e,children:i.jsx(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",xstyle:n.mentionsFeedContainer,children:i.jsxs(d("CometResponsiveColumns.react").Column,{columnType:"FEED",children:[s&&i.jsx(d("CometRelay").MatchContainer,{match:p}),i.jsx(c("ProfileCometMentionsTabHeader.react"),{user:q,viewer:o}),i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("CometFeedGlimmer.react"),{}),children:i.jsx(c("RelayUFI2CommentsKeyContext").Provider,{value:a.mentionsFeedQueryReference.variables.UFI2CommentsProvider_commentsKey,children:i.jsx(m,{mentionsFeedQueryReference:a.mentionsFeedQueryReference})})})]})})})}a.displayName=a.name+" [from "+f.id+"]";e=i.memo(a);g["default"]=e}),98);