if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("InstantGamesTrackingData",[],(function(a,b,c,d,e,f){"use strict";a=function(){function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.getEcosystem=function(){return this.$1};b.getSurface=function(){return this.$2};b.getFeature=function(){return this.$3};b.serialize=function(){return this.$1+"~"+this.$2+"~"+this.$3};return a}();f["default"]=a}),66);
__d("CometGamingImpressionLogger.react",["react","useGamingVideoDestinationEventLogger","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useCallback;function a(a){var b=a.children,d=a.dataToLog;a=c("useGamingVideoDestinationEventLogger")();var e=a.logImpression;a=i(function(a){if(a==null)return;e(d)},[d,e]);a=c("useSinglePartialViewImpression")({onImpressionStart:a});return h.cloneElement(b,{ref:a})}g["default"]=a}),98);
__d("InstantGamesWebHubEventsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743697");c=b("FalcoLoggerInternal").create("instant_games_web_hub_events",a);e.exports=c}),null);
__d("useInstantGamesWebHubImpressionLogging",["InstantGamesWebHubEventsFalcoEvent","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=c("useSinglePartialViewImpression")({onImpressionStart:function(){var b=babelHelpers["extends"]({},a,{event:"impression"});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return b})}}),d=function(b){var d=babelHelpers["extends"]({},a,b,{event:"click"});c("InstantGamesWebHubEventsFalcoEvent").log(function(){return d})};return{impressionRef:b,logClick:d}}g["default"]=a}),98);
__d("QPLE2ESessionMarkers",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({NONE:"none",START:"start",END:"end"});c=a;f["default"]=c}),66);
__d("XCometInstantGamesHubControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/play/",Object.freeze({sort_type:"recommended",category:400}),void 0);b=a;g["default"]=b}),98);
__d("XCometInstantGamesHubPlayControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/gaming/play/{game_or_link}/{?link_fragment}/",Object.freeze({source:"www_unknown",skip_check:!1,prefer_close:!1,ota_update:!1}),void 0);b=a;g["default"]=b}),98);
__d("QPLE2E",["QuickPerformanceLogger"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(){}var b=a.prototype;b.logPoint=function(a,b,d,e){var f,g;e===void 0&&(e={});f=(f=e.timestamp)!=null?f:c("QuickPerformanceLogger").currentTimestamp();var h=babelHelpers["extends"]({},e.pointData);g=(g=e.action)!=null?g:12524;e.secondaryOrder!=void 0&&(h.string||(h.string={}),h.string.qpl_e2e__secondary_order=e.secondaryOrder);if(e.sessionMarker&&e.sessionMarker!=="none"){var i;h.bool||(h.bool={});h.bool=babelHelpers["extends"]({},h.bool,(i={},i.qpl_e2e__session_marker_start_point=e.sessionMarker==="start",i.qpl_e2e__session_marker_end_point=e.sessionMarker==="end",i))}c("QuickPerformanceLogger").markerStart(a,void 0,f,{samplingBasis:d});c("QuickPerformanceLogger").markerPoint(a,b,{data:h,timestamp:f*2});e.annotations&&c("QuickPerformanceLogger").markerAnnotate(a,e.annotations);c("QuickPerformanceLogger").markerAnnotate(a,{string:(i={},i.join_id=d,i.source="client",i),bool:(b={},b.qpl_e2e__align_points=!0,b)});c("QuickPerformanceLogger").markerEnd(a,g,void 0,f)};return a}();b=new a();g["default"]=b}),98);
__d("XDataPolicyController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/privacy/explanation/",{show_nav_menu_mbasic:{type:"Bool",defaultValue:!1},annotation:{type:"String"},back_id:{type:"String"},ref:{type:"String"},locale:{type:"String"},settings_tracking:{type:"String"},m_no_header:{type:"Bool",defaultValue:!1}})}),null);