if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("CometPagePostsRootHoistedStoryQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5743451912380663"}),null);
__d("CometPagePostsRootHoistedStoryQuery$Parameters",["CometPagePostsRootHoistedStoryQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPagePostsRootHoistedStoryQuery_facebookRelayOperation"),metadata:{},name:"CometPagePostsRootHoistedStoryQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPagePostsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4285000571600803"}),null);
__d("CometPagePostsRootQuery$Parameters",["CometPagePostsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPagePostsRootQuery_facebookRelayOperation"),metadata:{},name:"CometPagePostsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPostsLoggedOutCTAWrapperFooterDataQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4136983986396077"}),null);
__d("CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters",["CometPostsLoggedOutCTAWrapperFooterDataQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometPostsLoggedOutCTAWrapperFooterDataQuery_facebookRelayOperation"),metadata:{},name:"CometPostsLoggedOutCTAWrapperFooterDataQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPagePostsRoot.entrypoint",["CometPagePostsRootHoistedStoryQuery$Parameters","CometPagePostsRootQuery$Parameters","CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeProps,e=b.pageID;b=b.storyIDs;a=a.routeParams;var f=a.comment_id;a=a.reply_comment_id;a=(a=a)!=null?a:f;f={cometPagePostsRootHoistedStoryQueryReference:{parameters:c("CometPagePostsRootHoistedStoryQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometPagePostsRootHoistedStoryQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:2,feedLocation:"PAGE_TIMELINE_PERMALINK",focusCommentID:a!=null?String(a):null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),storyIDs:b,useDefaultActor:!1}},cometPagePostsRootQueryReference:{parameters:c("CometPagePostsRootQuery$Parameters"),variables:{UFI2CommentsProvider_commentsKey:"CometPagePostsRootPostsQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedbackSource:22,feedLocation:"PAGE_TIMELINE",focusCommentID:a!=null?String(a):null,pageID:e,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1}}};if(c("gkx")("1692176"))return{queries:babelHelpers["extends"]({loggedOutCTAfooterDataQueryReference:{parameters:c("CometPostsLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{profileID:e,scale:d("WebPixelRatio").get()}}},f)};else return{queries:f}},root:c("JSResourceForInteraction")("CometPagePostsRoot.react").__setRef("CometPagePostsRoot.entrypoint")};g["default"]=a}),98);