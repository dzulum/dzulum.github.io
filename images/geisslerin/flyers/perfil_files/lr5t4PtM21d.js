if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometSinglePageChannelTabRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4769512239783868"}),null);
__d("CometSinglePageChannelTabRootQuery$Parameters",["CometSinglePageChannelTabRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometSinglePageChannelTabRootQuery_facebookRelayOperation"),metadata:{},name:"CometSinglePageChannelTabRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomePlaylistRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4520581018052617",metadata:{},name:"CometVideoHomePlaylistRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeRootProviderQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="2939812456104778"}),null);
__d("CometVideoHomeRootProviderQuery$Parameters",["CometVideoHomeRootProviderQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeRootProviderQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeRootProviderQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLOEExploreLeftRailSectionQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6552733861467831"}),null);
__d("CometVideoHomeLOEExploreLeftRailSectionQuery$Parameters",["CometVideoHomeLOEExploreLeftRailSectionQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeLOEExploreLeftRailSectionQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeLOEExploreLeftRailSectionQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeStickyHeaderWatchlistMenuRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3707683145972691"}),null);
__d("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters",["CometVideoHomeStickyHeaderWatchlistMenuRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeStickyHeaderWatchlistMenuRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeStickyHeaderWatchlistMenuRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLeftRailWatchlistQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5956495877755568"}),null);
__d("CometVideoHomeLeftRailWatchlistQuery$Parameters",["CometVideoHomeLeftRailWatchlistQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeLeftRailWatchlistQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeLeftRailWatchlistQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometSinglePageChannelTabRoot.entrypoint",["CometSinglePageChannelTabRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometSinglePageRoute.entrypoint","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometSinglePageRoute.entrypoint")(c("JSResourceForInteraction")("CometSinglePageChannelTabRoot.react").__setRef("CometSinglePageChannelTabRoot.entrypoint"),function(a){a=a.routeProps.pageID;return{queries:{singlePageChannelTabRootQueryReference:{parameters:b("CometSinglePageChannelTabRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometSinglePageChannelTabRoot",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:72,feedLocation:"PAGE_TIMELINE",fetchSeriesFromMemcache:c("gkx")("2739"),focusCommentID:null,pageID:a,scale:d("WebPixelRatio").get()*4,showReactions:!0,useDefaultActor:!1}}}}});g["default"]=a}),98);
__d("buildCometVideoHomeRouteForResource.entrypoint",["CometVideoHomeLOEExploreLeftRailSectionQuery$Parameters","CometVideoHomeLeftRailWatchlistQuery$Parameters","CometVideoHomeRootProviderQuery$Parameters","CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters","WebPixelRatio","cr:1714517","createContentAreaCompoundEntryPointBuilder","gkx"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1714517");function a(a){return c("createContentAreaCompoundEntryPointBuilder")(a,function(a){return babelHelpers["extends"]({},c("gkx")("976093")?{exploreQueryReference:{parameters:b("CometVideoHomeLOEExploreLeftRailSectionQuery$Parameters"),variables:{}}}:{watchlistSettingsQueryReference:{parameters:b("CometVideoHomeLeftRailWatchlistQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}},{rootProviderQueryReference:{parameters:b("CometVideoHomeRootProviderQuery$Parameters"),variables:{}},stickyHeaderWatchlistQueryReference:{parameters:b("CometVideoHomeStickyHeaderWatchlistMenuRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}})})}g["default"]=a}),98);
__d("buildCometVideoHomeRoute.entrypoint",["JSResourceForInteraction","buildCometVideoHomeRouteForResource.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRouteForResource.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeRoot.react").__setRef("buildCometVideoHomeRoute.entrypoint"));g["default"]=a}),98);
__d("CometVideoHomeFeedRoot.entrypoint",["CometVideoHomeFeedEntryPointVariables","CometVideoHomeFeedRootQuery$Parameters","CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint","cr:1714516"],(function(a,b,c,d,e,f,g){"use strict";b("cr:1714516");a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRoot.entrypoint"),function(a){return{queries:{feedRootQueryReference:{options:{fetchPolicy:"network-only"},parameters:b("CometVideoHomeFeedRootQuery$Parameters"),variables:c("CometVideoHomeFeedEntryPointVariables")},surfaceHighlightsQueryReference:{parameters:b("CometVideoHomeSurfaceHighlightsWrapperQuery$Parameters"),variables:{}}}}});g["default"]=a}),98);
__d("CometVideoHomeFeedRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";c("JSResourceForInteraction")("CometVideoHomeFeedRoot.react").__setRef("CometVideoHomeFeedRootBEOneAhead");a=null;g["default"]=a}),98);
__d("CometVideoHomePlaylistRoot.entrypoint",["CometVideoHomePlaylistRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomePlaylistRoot.react").__setRef("CometVideoHomePlaylistRoot.entrypoint"),function(a){a={id:a.routeProps.id};return{queries:{playlistRootQueryReference:{parameters:b("CometVideoHomePlaylistRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get(),trigger_data:a}}}}});g["default"]=a}),98);
__d("CometVideoHomeRootBEOneAhead",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";c("JSResourceForInteraction")("CometVideoHomeRoot.react").__setRef("CometVideoHomeRootBEOneAhead");a=null;g["default"]=a}),98);
__d("CometVideoHomeLanceletRoot.entrypoint",["CometSinglePageChannelTabRoot.entrypoint","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeLanceletRoot.react").__setRef("CometVideoHomeLanceletRoot.entrypoint"),function(a){return{entryPoints:{pageEntryPoint:{entryPoint:b("CometSinglePageChannelTabRoot.entrypoint"),entryPointParams:a}},extraProps:a}});g["default"]=a}),98);