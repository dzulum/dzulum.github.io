if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("StoriesTrayTileWatchLivePopover_bucket.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c=[a];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesTrayTileWatchLivePopover_bucket",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"live_video",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],storageKey:null}],type:"DirectMessageThreadBucket",abstractKey:null},{kind:"InlineDataFragmentSpread",name:"useStoriesLogger_bucketNode",selections:[{kind:"InlineDataFragmentSpread",name:"StoriesLogger_bucketNode",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"story_bucket_owner",plural:!1,selections:[b,{kind:"InlineFragment",selections:c,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"is_viewer_friend",storageKey:null}],type:"User",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"story_bucket_type",storageKey:null},{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesConnection",kind:"LinkedField",name:"unified_stories",plural:!1,selections:[{alias:null,args:null,concreteType:"UnifiedStoryBucketToUnifiedStoriesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"organic_tracking",storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:c,type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:c,type:"Video",abstractKey:null},b],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryCardToStoryViewersConnection",kind:"LinkedField",name:"story_viewers",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryCardSeenState",kind:"LinkedField",name:"story_card_seen_state",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_seen_by_viewer",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]}]}],type:"StoryBucket",abstractKey:"__isStoryBucket"}}();e.exports=a}),null);
__d("StoriesTrayTileWatchLivePopover.react",["fbt","ix","CometMenu.react","CometMenuItem.react","CometRelay","StoriesActorContext","StoriesLoggingConstants","StoriesTrayTileWatchLivePopover_bucket.graphql","fbicon","react","useStoriesLogger"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");e=d("react");var l=e.useContext,m=e.useEffect,n=e.useRef;function a(a){var e=a.bucket;a=a.viewStoryUrl;e=d("CometRelay").useFragment(j!==void 0?j:j=b("StoriesTrayTileWatchLivePopover_bucket.graphql"),e);var f=l(c("StoriesActorContext"));f=f.actorID;var g=c("useStoriesLogger")(f,{bucketIndex:0,cardIndex:0},e),o=n(!1);m(function(){!o.current&&g!=null&&(o.current=!0,g.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_TRAY_DROPDOWN_IMPRESSION))},[g]);e=[{icon:d("fbicon")._(i("484863"),20),onClick:function(){g.handleLiveVideoLog(c("StoriesLoggingConstants").LIVE_IN_STORIES_EVENTS.STORY_LIVE_TRAY_DROPDOWN_CLICK)},passThroughProps:{playerOriginOverride:"fb_stories",playerSubOrigin:"story_tray_live_dropdown"},primaryText:h._(/*FBT_CALL*/"Ver video en vivo"/*FBT_CALL*/),url:e==null?void 0:(f=e.live_video)==null?void 0:f.url},{icon:d("fbicon")._(i("1160717"),20),onClick:void 0,passThroughProps:void 0,primaryText:h._(/*FBT_CALL*/"Ver historia"/*FBT_CALL*/),url:a}];return k.jsx(c("CometMenu.react"),{size:"small",children:e.map(function(a,b){return k.jsx(c("CometMenuItem.react"),{href:a.url||"",icon:a.icon,iconStyle:"contained",onClick:a.onClick,passthroughProps:a.passThroughProps,primaryText:a.primaryText},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("StoriesQueryArgumentsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={hideSelfBucket:!1,initialBucketID:null,initialBucketsCount:9,pageBucketsCount:9};c=a.createContext(b);g["default"]=c}),98);
__d("StoriesUtils",["ExecutionEnvironment","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h={};b=function(a){h[a]==null&&(h[a]=window.atob(a).split(":")[2]);return h[a]};function a(){var a={format:"image/jpeg",quality:.92};return!c("UserAgent").isBrowser("Chrome")?a:{format:"image/webp",quality:.86}}var i=500;e=function(a,b){b===void 0&&(b=i);return!d("ExecutionEnvironment").canUseDOM?!1:a<b};g.cardID2ThreadID=b;g.getBlobImageParams=a;g.shouldResizeToViewStories=e}),98);