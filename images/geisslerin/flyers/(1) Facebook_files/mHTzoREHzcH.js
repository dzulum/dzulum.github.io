if (self.CavalryLogger) { CavalryLogger.start_js_script(document.currentScript); }

__d("GroupsCometInviteFriendsDialogQuery$Parameters",["GroupsCometInviteFriendsDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometInviteFriendsDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometInviteFriendsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometColorDefaultWrapper_group$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"GroupsCometColorDefaultWrapper_group$normalization",selections:[{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_theme_color",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hexcolor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("GroupsCometColorDefaultWrapper_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometColorDefaultWrapper_group",selections:[{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_theme_color",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"hexcolor",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometColorExpandedWrapper_group$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"hexcolor",storageKey:null}];return{kind:"SplitOperation",metadata:{},name:"GroupsCometColorExpandedWrapper_group$normalization",selections:[{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_theme_color",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_secondary_theme_color",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_wash_theme_color",plural:!1,selections:a,storageKey:null}]}}();e.exports=a}),null);
__d("GroupsCometColorExpandedWrapper_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{alias:null,args:null,kind:"ScalarField",name:"hexcolor",storageKey:null}];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometColorExpandedWrapper_group",selections:[{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_theme_color",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_secondary_theme_color",plural:!1,selections:a,storageKey:null},{alias:null,args:null,concreteType:"GroupThemeColor",kind:"LinkedField",name:"group_wash_theme_color",plural:!1,selections:a,storageKey:null}],type:"Group",abstractKey:null}}();e.exports=a}),null);
__d("GroupsCometEditCommentSortOrderMenuItem_group$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"GroupsCometEditCommentSortOrderMenuItem_group$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}]};e.exports=a}),null);
__d("GroupsCometEditCommentSortOrderMenuItem_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometEditCommentSortOrderMenuItem_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometHeaderFacepile_group$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"GroupsCometHeaderFacepile_group$normalization",selections:[a,{alias:null,args:null,kind:"ScalarField",name:"group_address",storageKey:null},{alias:"facepile_profiles",args:[{kind:"Literal",name:"first",value:20},{kind:"Literal",name:"is_memorialized",value:!1},{kind:"Literal",name:"orderby",value:"importance"}],concreteType:"GroupMemberProfilesConnection",kind:"LinkedField",name:"group_member_profiles",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"GroupMemberProfilesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[b,a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{kind:"TypeDiscriminator",abstractKey:"__isProfile"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"},{kind:"InlineFragment",selections:[{alias:null,args:[{kind:"Variable",name:"group_id",variableName:"groupID"}],concreteType:"GroupMembership",kind:"LinkedField",name:"group_membership",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_member_feed",storageKey:null},{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"associated_group",plural:!1,selections:[a,{alias:null,args:null,concreteType:"GroupLeadersEngagementLoggingSettings",kind:"LinkedField",name:"leaders_engagement_logging_settings",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comet_surface_mappings",plural:!0,selections:[b,{alias:null,args:null,kind:"ScalarField",name:"surface",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"trace_policy",storageKey:null}],type:"GroupLeadersEngagementLoggingExactCometSurfaceMapping",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"prefixes",storageKey:null}],type:"GroupLeadersEngagementLoggingPrefixCometSurfaceMapping",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null},a],storageKey:null}],type:"GroupMember",abstractKey:"__isGroupMember"}],storageKey:null}],storageKey:null}],storageKey:'group_member_profiles(first:20,is_memorialized:false,orderby:"importance")'}]}}();e.exports=a}),null);
__d("GroupsCometHeaderFacepile_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"prefetchGroupsHeaderFacepile"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"GroupsCometHeaderFacepile_group",selections:[a,{args:null,kind:"FragmentSpread",name:"useIdOrVanityRouteBuilder_group"},{alias:"facepile_profiles",args:[{kind:"Literal",name:"first",value:20},{kind:"Literal",name:"is_memorialized",value:!1},{kind:"Literal",name:"orderby",value:"importance"}],concreteType:"GroupMemberProfilesConnection",kind:"LinkedField",name:"group_member_profiles",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:"GroupMemberProfilesEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"GroupsCometMemberProfileLinkContainer_profile"},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],storageKey:null}],storageKey:null}],storageKey:'group_member_profiles(first:20,is_memorialized:false,orderby:"importance")'}],type:"Group",abstractKey:null}}();e.exports=a}),null);
__d("GroupsCometJoinedActionButton_group$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"GroupsCometJoinedActionButton_group$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}]};e.exports=a}),null);
__d("GroupsCometJoinedActionButton_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometJoinedActionButton_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometJoinedActionMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4880629645282042"}),null);
__d("GroupsCometJoinedActionMenuQuery$Parameters",["GroupsCometJoinedActionMenuQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometJoinedActionMenuQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometJoinedActionMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometEditCommentSortOrderDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="3759631184132676"}),null);
__d("GroupsCometEditCommentSortOrderDialogQuery$Parameters",["GroupsCometEditCommentSortOrderDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("GroupsCometEditCommentSortOrderDialogQuery_facebookRelayOperation"),metadata:{},name:"GroupsCometEditCommentSortOrderDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("GroupsCometInviteFriendsDialog.entrypoint",["GroupsCometInviteFriendsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{dialogQueryReference:{options:{fetchPolicy:"network-only"},parameters:c("GroupsCometInviteFriendsDialogQuery$Parameters"),variables:{groupID:a.groupID,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("GroupsCometInviteFriendsDialog.react").__setRef("GroupsCometInviteFriendsDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometColorDefaultWrapper.react",["CometRelay","GroupsCometColorDefaultWrapper_group.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c,e=a.children;a=a.group;a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometColorDefaultWrapper_group.graphql"),a);c=(c=a.group_theme_color)==null?void 0:c.hexcolor;a=(a=a.group_theme_color)==null?void 0:a.label;a=c==null||a==="FACEBOOK"||c==="FFFFFFFF"?null:"#"+c.slice(2);return i.jsx("div",{style:{"--accent":a,"--primary-button-background":a},children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("groupColorCandidates",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return{"000000":h._(/*FBT_CALL*/"negro"/*FBT_CALL*/),"000080":h._(/*FBT_CALL*/"azul oscuro"/*FBT_CALL*/),"00008B":h._(/*FBT_CALL*/"azul oscuro"/*FBT_CALL*/),"0000CD":h._(/*FBT_CALL*/"azul"/*FBT_CALL*/),"0000FF":h._(/*FBT_CALL*/"azul"/*FBT_CALL*/),"006400":h._(/*FBT_CALL*/"verde oscuro"/*FBT_CALL*/),"008000":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"008080":h._(/*FBT_CALL*/"verde azulado"/*FBT_CALL*/),"0081C1":h._(/*FBT_CALL*/"azul acero"/*FBT_CALL*/),"008B8B":h._(/*FBT_CALL*/"verde azulado"/*FBT_CALL*/),"0099E6":h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),"00BFFF":h._(/*FBT_CALL*/"azul"/*FBT_CALL*/),"00CED1":h._(/*FBT_CALL*/"azul brillante"/*FBT_CALL*/),"00FA9A":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),"00FF00":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"00FF7F":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"00FFFF":h._(/*FBT_CALL*/"azul brillante"/*FBT_CALL*/),"099E89":h._(/*FBT_CALL*/"verde azulado"/*FBT_CALL*/),"0B9CFD":h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),"1877F2":h._(/*FBT_CALL*/"azul"/*FBT_CALL*/),191970:h._(/*FBT_CALL*/"azul oscuro"/*FBT_CALL*/),"1E90FF":h._(/*FBT_CALL*/"azul"/*FBT_CALL*/),"20B2AA":h._(/*FBT_CALL*/"verde azulado"/*FBT_CALL*/),"228B22":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"24853C":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"2E8B57":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"2F4F4F":h._(/*FBT_CALL*/"verde azulado"/*FBT_CALL*/),"31A24C":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),"32CD32":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"3CB371":h._(/*FBT_CALL*/"verde"/*FBT_CALL*/),"40E0D0":h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),"4169E1":h._(/*FBT_CALL*/"azul"/*FBT_CALL*/),"4682B4":h._(/*FBT_CALL*/"azul"/*FBT_CALL*/),"483D8B":h._(/*FBT_CALL*/"morado oscuro"/*FBT_CALL*/),"48D1CC":h._(/*FBT_CALL*/"azul brillante"/*FBT_CALL*/),"4B0082":h._(/*FBT_CALL*/"morado oscuro"/*FBT_CALL*/),"556B2F":h._(/*FBT_CALL*/"aceituna"/*FBT_CALL*/),"5F9EA0":h._(/*FBT_CALL*/"verde azulado"/*FBT_CALL*/),"63BF4C":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),"6495ED":h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),663399:h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"66CDAA":h._(/*FBT_CALL*/"verde azulado"/*FBT_CALL*/),696969:h._(/*FBT_CALL*/"gris oscuro"/*FBT_CALL*/),"6A5ACD":h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"6B8E23":h._(/*FBT_CALL*/"aceituna"/*FBT_CALL*/),708090:h._(/*FBT_CALL*/"gris"/*FBT_CALL*/),778899:h._(/*FBT_CALL*/"gris"/*FBT_CALL*/),"7B68EE":h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"7CFC00":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),"7FFF00":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),"7FFFD4":h._(/*FBT_CALL*/"azul brillante"/*FBT_CALL*/),8e5:h._(/*FBT_CALL*/"rojo oscuro"/*FBT_CALL*/),800080:h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),808e3:h._(/*FBT_CALL*/"aceituna"/*FBT_CALL*/),808080:h._(/*FBT_CALL*/"gris oscuro"/*FBT_CALL*/),"814DE7":h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"87CEEB":h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),"87CEFA":h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),"8A2BE2":h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"8B0000":h._(/*FBT_CALL*/"rojo oscuro"/*FBT_CALL*/),"8B008B":h._(/*FBT_CALL*/"morado oscuro"/*FBT_CALL*/),"8B4513":h._(/*FBT_CALL*/"marr\u00f3n"/*FBT_CALL*/),"8FBC8F":h._(/*FBT_CALL*/"aceituna"/*FBT_CALL*/),"90EE90":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),"9370DB":h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"9400D3":h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"98FB98":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),"9932CC":h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),"9ACD32":h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),A0522D:h._(/*FBT_CALL*/"marr\u00f3n"/*FBT_CALL*/),A52A2A:h._(/*FBT_CALL*/"rojo oscuro"/*FBT_CALL*/),A9A9A9:h._(/*FBT_CALL*/"gris"/*FBT_CALL*/),ADD8E6:h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),ADFF2F:h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),AFEEEE:h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),B0C4DE:h._(/*FBT_CALL*/"gris claro"/*FBT_CALL*/),B0E0E6:h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),B22222:h._(/*FBT_CALL*/"rojo oscuro"/*FBT_CALL*/),B55400:h._(/*FBT_CALL*/"marr\u00f3n"/*FBT_CALL*/),B8860B:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),BA2D52:h._(/*FBT_CALL*/"carmes\u00ed"/*FBT_CALL*/),BA55D3:h._(/*FBT_CALL*/"morado"/*FBT_CALL*/),BC8F8F:h._(/*FBT_CALL*/"rojo claro"/*FBT_CALL*/),BDB76B:h._(/*FBT_CALL*/"aceituna"/*FBT_CALL*/),C0C0C0:h._(/*FBT_CALL*/"gris"/*FBT_CALL*/),C71585:h._(/*FBT_CALL*/"magenta"/*FBT_CALL*/),CD5C5C:h._(/*FBT_CALL*/"rojo"/*FBT_CALL*/),CD853F:h._(/*FBT_CALL*/"marr\u00f3n"/*FBT_CALL*/),D16F14:h._(/*FBT_CALL*/"tostado"/*FBT_CALL*/),D2691E:h._(/*FBT_CALL*/"naranja oscuro"/*FBT_CALL*/),D2B48C:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),D3D3D3:h._(/*FBT_CALL*/"gris claro"/*FBT_CALL*/),D8BFD8:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),DA70D6:h._(/*FBT_CALL*/"lila"/*FBT_CALL*/),DAA520:h._(/*FBT_CALL*/"amarillo oscuro"/*FBT_CALL*/),DB7093:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),DC143C:h._(/*FBT_CALL*/"rojo"/*FBT_CALL*/),DCDCDC:h._(/*FBT_CALL*/"gris claro"/*FBT_CALL*/),DDA0DD:h._(/*FBT_CALL*/"lila"/*FBT_CALL*/),DEB887:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),E0FFFF:h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),E6E6FA:h._(/*FBT_CALL*/"lila"/*FBT_CALL*/),E9967A:h._(/*FBT_CALL*/"naranja claro"/*FBT_CALL*/),EB660D:h._(/*FBT_CALL*/"naranja"/*FBT_CALL*/),ED41A5:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),ED4A34:h._(/*FBT_CALL*/"naranja oscuro"/*FBT_CALL*/),EE82EE:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),EEE8AA:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),F02849:h._(/*FBT_CALL*/"rojo"/*FBT_CALL*/),F08080:h._(/*FBT_CALL*/"rojo claro"/*FBT_CALL*/),F0E68C:h._(/*FBT_CALL*/"amarillo claro"/*FBT_CALL*/),F0F8FF:h._(/*FBT_CALL*/"celeste"/*FBT_CALL*/),F0FFF0:h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),F0FFFF:h._(/*FBT_CALL*/"blanco"/*FBT_CALL*/),F25529:h._(/*FBT_CALL*/"naranja oscuro"/*FBT_CALL*/),F4A460:h._(/*FBT_CALL*/"naranja claro"/*FBT_CALL*/),F5DEB3:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),F5F5DC:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),F5F5F5:h._(/*FBT_CALL*/"gris claro"/*FBT_CALL*/),F5FFFA:h._(/*FBT_CALL*/"verde claro"/*FBT_CALL*/),F6AF09:h._(/*FBT_CALL*/"amarillo"/*FBT_CALL*/),F8F8FF:h._(/*FBT_CALL*/"blanco"/*FBT_CALL*/),FA8072:h._(/*FBT_CALL*/"rojo"/*FBT_CALL*/),FAEBD7:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FAF0E6:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FAFAD2:h._(/*FBT_CALL*/"amarillo claro"/*FBT_CALL*/),FC5776:h._(/*FBT_CALL*/"coral"/*FBT_CALL*/),FDF5E6:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FF0000:h._(/*FBT_CALL*/"rojo"/*FBT_CALL*/),FF00FF:h._(/*FBT_CALL*/"magenta"/*FBT_CALL*/),FF1493:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),FF4500:h._(/*FBT_CALL*/"rojo"/*FBT_CALL*/),FF6347:h._(/*FBT_CALL*/"rojo"/*FBT_CALL*/),FF69B4:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),FF7F50:h._(/*FBT_CALL*/"naranja"/*FBT_CALL*/),FF8C00:h._(/*FBT_CALL*/"naranja"/*FBT_CALL*/),FFA07A:h._(/*FBT_CALL*/"naranja claro"/*FBT_CALL*/),FFA500:h._(/*FBT_CALL*/"naranja"/*FBT_CALL*/),FFB6C1:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),FFC0CB:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),FFD700:h._(/*FBT_CALL*/"amarillo"/*FBT_CALL*/),FFDAB9:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FFDEAD:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FFE4B5:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FFE4C4:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FFE4E1:h._(/*FBT_CALL*/"rosa"/*FBT_CALL*/),FFEBCD:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FFEFD5:h._(/*FBT_CALL*/"beige"/*FBT_CALL*/),FFF0F5:h._(/*FBT_CALL*/"rosa claro"/*FBT_CALL*/),FFF5EE:h._(/*FBT_CALL*/"blanco"/*FBT_CALL*/),FFF8DC:h._(/*FBT_CALL*/"amarillo claro"/*FBT_CALL*/),FFFACD:h._(/*FBT_CALL*/"amarillo claro"/*FBT_CALL*/),FFFAF0:h._(/*FBT_CALL*/"blanco"/*FBT_CALL*/),FFFAFA:h._(/*FBT_CALL*/"blanco"/*FBT_CALL*/),FFFF00:h._(/*FBT_CALL*/"amarillo"/*FBT_CALL*/),FFFFE0:h._(/*FBT_CALL*/"amarillo claro"/*FBT_CALL*/),FFFFF0:h._(/*FBT_CALL*/"blanco"/*FBT_CALL*/),FFFFFF:h._(/*FBT_CALL*/"blanco"/*FBT_CALL*/)}}g["default"]=a}),98);
__d("groupColorLAB",[],(function(a,b,c,d,e,f){"use strict";var g=function(a){for(var b=0;b<3;b++)a[b]=a[b]>.04045?Math.pow((a[b]+.055)/1.055,2.4):a[b]/12.92,a[b]*=100;b=a[0]*.4124+a[1]*.3576+a[2]*.1805;var c=a[0]*.2126+a[1]*.7152+a[2]*.0722;a=a[0]*.0193+a[1]*.1192+a[2]*.9505;return[b,c,a]},h=function(a){a=[a[0]/95.047,a[1]/100,a[2]/108.883];for(var b=0;b<3;b++)a[b]=a[b]>.008856?Math.pow(a[b],1/3):7.787*a[b]+16/116;b=116*a[1]-16;var c=500*(a[0]-a[1]);a=200*(a[1]-a[2]);return{a:c,b:a,l:b}},i=function(a){var b=a.l,c=a.a;a=a.b;var d=(b+16)/116;c=c/500+d;a=d-a/200;var e=Math.pow(c,3);c=e>.008856?e:(116*c-16)/903.3;d=b>903.3*.008856?Math.pow(d,3):b/903.3;e=Math.pow(a,3);b=e>.008856?e:(116*a-16)/903.3;return[c*95.047,d*100,b*108.883]},j=function(a){var b=a[0],c=a[1];a=a[2];var d=(b*3.2406+c*-1.5372+a*-.4986)/100,e=(b*-.9689+c*1.8758+a*.0415)/100;b=(b*.0557+c*-.204+a*1.057)/100;d=d>.0031308?1.055*Math.pow(d,1/2.4)-.055:12.92*d;e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e;b=b>.0031308?1.055*Math.pow(b,1/2.4)-.055:12.92*b;return[k(Math.round(d*255),0,255),k(Math.round(e*255),0,255),k(Math.round(b*255),0,255),1]},k=function(a,b,c){return a<b?b:a>c?c:a};function a(a){a=g(a.map(function(a){return a/255}));a=h(a);return l(a)}function l(a){var b={a:a.a,b:a.b,l:a.l};a=function(){var a=i(b);return j(a)};var c=function(a,c){b.l=Math.max(a,Math.min(c,b.l))},d=function(a){b.l=a},e=function(a,c){var d=Math.sqrt(Math.pow(b.a,2)+Math.pow(b.b,2)),e=1;d<.01?(b.a=0,b.b=0,b.l=0):d<a?e=a/d:d>c&&(e=c/d);b.a*=e;b.b*=e};return{clampedChroma:e,clampedLightness:c,lab:b,toRGBa:a,withLightness:d}}f.groupColorLABFromRGBA=a;f.groupColorLAB=l}),66);
__d("groupColorRGB",["FBLogger"],(function(a,b,c,d,e,f,g){"use strict";var h=/^#?([a-fA-F\d])([a-fA-F\d])([a-fA-F\d])$/i,i=/^#?([a-fA-F\d]{2})([a-fA-F\d]{2})([a-fA-F\d]{2})$/i;function a(a,b,c,d){d===void 0&&(d=!1);d=d?"#":"";return d+j(a)+j(b)+j(c)}function b(a,b,c,d,e){e===void 0&&(e=!1);e=e?"#":"";return e+j(a)+j(b)+j(c)+j(d)}function j(a){a=a.toString(16);return a.length===1?"0"+a:a}var k=function(a){a=a.replace(h,function(a,b,c,d){return b+b+c+c+d+d});a=i.exec(a);return!a?null:[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]};function d(a){a=k(a);if(a==null)throw c("FBLogger")("groups_platform").mustfixThrow("formatted hexcode must not be null");return{b:a[2],g:a[1],r:a[0]}}g.rgbToHex=a;g.rgbaToHex=b;g.hexToRGBA=k;g.hexToRgb=d}),98);
__d("groupColorAlgorithm",["gkx","groupColorCandidates","groupColorLAB","groupColorRGB"],(function(a,b,c,d,e,f,g){"use strict";var h={DARK:"DARK",LIGHT:"LIGHT"},i=c("gkx")("5004"),j=i?{accent:{chromaMax:95,chromaMin:40,lightMax:55,lightMin:30},darkAccent:{lightMax:50,lightMin:35},deemph:{chromaMax:10,chromaMin:10,light:93}}:{accent:{chromaMax:95,chromaMin:35,lightMax:61,lightMin:15},darkAccent:{lightMax:61,lightMin:30},deemph:{chromaMax:60,chromaMin:10,light:95}};function a(a){a=d("groupColorRGB").hexToRGBA(a);if(a==null)return null;var b=d("groupColorLAB").groupColorLABFromRGBA(a);b.clampedLightness(j.accent.lightMin,j.accent.lightMax);b.clampedChroma(j.accent.chromaMin,j.accent.chromaMax);var c=d("groupColorLAB").groupColorLAB(b.lab);i||(c=d("groupColorLAB").groupColorLABFromRGBA(a),c.clampedLightness(j.darkAccent.lightMin,j.darkAccent.lightMax),c.clampedChroma(j.accent.chromaMin,j.accent.chromaMax));a=function(a){switch(a){case h.DARK:a=d("groupColorLAB").groupColorLAB(c.lab);i&&a.clampedLightness(j.darkAccent.lightMin,j.darkAccent.lightMax);a=a.toRGBa();return d("groupColorRGB").rgbToHex(a[0],a[1],a[2],!0);default:case h.LIGHT:a=b.toRGBa();return d("groupColorRGB").rgbToHex(a[0],a[1],a[2],!0)}};var e=function(a){switch(a){case h.DARK:a=d("groupColorLAB").groupColorLAB(c.lab);a=a.toRGBa();return d("groupColorRGB").rgbaToHex(a[0],a[1],a[2],77,!0);default:case h.LIGHT:a=d("groupColorLAB").groupColorLAB(b.lab);a.clampedChroma(j.deemph.chromaMin,j.deemph.chromaMax);a.withLightness(j.deemph.light);a=a.toRGBa();return d("groupColorRGB").rgbToHex(a[0],a[1],a[2],!0)}},f=function(a){switch(a){case h.DARK:a=d("groupColorLAB").groupColorLAB(c.lab);return a.lab.l<70?"#ffffff":"#000000";default:case h.LIGHT:return b.lab.l<70?"#ffffff":"#000000"}},g=function(a){switch(a){case h.DARK:a=d("groupColorLAB").groupColorLAB(c.lab);a.withLightness(80);a=a.toRGBa();return d("groupColorRGB").rgbToHex(a[0],a[1],a[2],!0);default:case h.LIGHT:a=d("groupColorLAB").groupColorLAB(b.lab);a.withLightness(30);a=a.toRGBa();return d("groupColorRGB").rgbToHex(a[0],a[1],a[2],!0)}};return{accentColor:a,accentDeemphasizedColor:e,textOnAccentColor:f,textOnAccentDeemphasizedColor:g}}function b(a){a=d("groupColorRGB").hexToRGBA(a);if(a==null)return null;return d("groupColorLAB").groupColorLABFromRGBA(a).lab.l<70?"#ffffff":"#000000"}function e(a,b){a=d("groupColorRGB").hexToRGBA(a);b=d("groupColorRGB").hexToRGBA(b);if(a==null||b==null)return null;a=d("groupColorLAB").groupColorLABFromRGBA(a).lab;b=d("groupColorLAB").groupColorLABFromRGBA(b).lab;return a[0]<b[0]?!0:!1}function k(a,b){var c=a.l-b.l,d=a.a-b.a,e=a.b-b.b;a=Math.sqrt(Math.pow(a.a,2)+Math.pow(a.b,2));b=Math.sqrt(Math.pow(b.a,2)+Math.pow(b.b,2));b=a-b;d=Math.pow(d,2)+Math.pow(e,2)+Math.pow(b,2);d=d>0?Math.sqrt(d):0;e=1;var f=1+.045*a;a=1+.015*a;c=Math.sqrt(Math.pow(c/e,2)+Math.pow(b/f,2)+Math.pow(d/a,2));return c}function f(a){a=d("groupColorRGB").hexToRGBA(a);if(a==null)return null;var b=d("groupColorLAB").groupColorLABFromRGBA(a).lab;if(b==null)return null;a=c("groupColorCandidates")();var e={key:"",min:Number.MAX_SAFE_INTEGER};e=Object.keys(a).reduce(function(a,c){var e=d("groupColorRGB").hexToRGBA(c);if(e==null)return a;e=d("groupColorLAB").groupColorLABFromRGBA(e).lab;e=k(b,e);e<a.min&&(a.min=e,a.key=c);return a},e);return a[e.key]}g.COLOR_MODE=h;g.groupColorAlgorithmTheme=a;g.getCircleBorderColor=b;g.isColorOneLighterThanColorTwo=e;g.getColorStringFromHex=f}),98);
__d("GroupsCometColorExpandedWrapper.react",["CometRelay","GroupsCometColorExpandedWrapper_group.graphql","groupColorAlgorithm","react","recoverableViolation","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j="FFFFFFFF";function a(a){var e=a.children,f=a.group,g=a.properties;a=a.testid;a=d("CometRelay").useFragment(h!==void 0?h:h=b("GroupsCometColorExpandedWrapper_group.graphql"),f);f=a.group_secondary_theme_color;var k=a.group_theme_color;a=a.group_wash_theme_color;var l=c("useCurrentDisplayMode")();f=f==null?void 0:f.hexcolor;k=k==null?void 0:k.hexcolor;a=a==null?void 0:a.hexcolor;if(k==null||f==null){c("recoverableViolation")("Primary color, Secondary color, or wash color was null, falling back to default facebook styles","groups_platform");return e}if(k===j||f===j)return e;k="#"+(k==null?void 0:k.slice(2));f="#"+(f==null?void 0:f.slice(2));a=a==null?null:"#"+(a==null?void 0:a.slice(2));var m=d("groupColorAlgorithm").groupColorAlgorithmTheme(k);k=m==null?void 0:m.accentColor(l==="light"?"LIGHT":"DARK");f=m==null?void 0:m.accentDeemphasizedColor(l==="light"?"LIGHT":"DARK");var n=m==null?void 0:m.textOnAccentDeemphasizedColor(l==="light"?"LIGHT":"DARK"),o={"--accent":k,"--primary-button-background":k,"--primary-button-text":m==null?void 0:m.textOnAccentColor(l==="light"?"LIGHT":"DARK"),"--primary-deemphasized-button-background":f,"--primary-deemphasized-button-text":n,"--primary-icon":k,"--primary-text":k,"--secondary-icon":n,"--secondary-text":n,backgroundColor:l==="light"?a:null},p={};g&&g.forEach(function(a){p[a]=o[a]});return i.jsx("div",{className:"backgroundColor"in p?"k4urcfbm owwhemhu buofh1pr":"","data-testid":void 0,style:p,children:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometEditCommentSortOrderDialog.entrypoint",["GroupsCometEditCommentSortOrderDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.groupID;return{queries:{queryReference:{parameters:c("GroupsCometEditCommentSortOrderDialogQuery$Parameters"),variables:{groupID:a}}}}},root:c("JSResourceForInteraction")("GroupsCometEditCommentSortOrderDialog.react").__setRef("GroupsCometEditCommentSortOrderDialog.entrypoint")};g["default"]=a}),98);
__d("GroupsCometEditCommentSortOrderDialogLoading.react",["fbt","CometCardedDialogLoadingState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.onClose;return i.jsx(c("CometCardedDialogLoadingState.react"),{onClose:a,title:h._(/*FBT_CALL*/"Ordenar comentarios"/*FBT_CALL*/),withCloseButton:!0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometEditCommentSortOrderMenuItem.react",["fbt","ix","CometEntryPointDialogTrigger.react","CometMenuItem.react","GroupsCometEditCommentSortOrderDialog.entrypoint","GroupsCometEditCommentSortOrderDialogLoading.react","GroupsCometEditCommentSortOrderMenuItem_group.graphql","RelayHooks","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){a=a.group;a=d("RelayHooks").useFragment(j!==void 0?j:j=b("GroupsCometEditCommentSortOrderMenuItem_group.graphql"),a);a=a.id;return k.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("GroupsCometEditCommentSortOrderDialog.entrypoint"),fallback:function(a){return k.jsx(c("GroupsCometEditCommentSortOrderDialogLoading.react"),{onClose:a})},otherProps:{},preloadParams:{groupID:a},children:function(a,b){return k.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("508559"),20),onClick:a,onHoverIn:b,primaryText:h._(/*FBT_CALL*/"Ordenar comentarios"/*FBT_CALL*/)})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("overlappingFacepileGroupsCometMemberProfileLinkContainer",["GroupsCometMemberProfileLinkContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){return function(d){return h.jsx(c("GroupsCometMemberProfileLinkContainer.react"),{groupID:a,kind:"profilePhoto",profile:b,children:d.children(null)})}}g["default"]=a}),98);
__d("GroupsCometHeaderFacepile.react",["fbt","CometRelay","GroupsCometHeaderFacepile_group.graphql","ProfileCometContextualProfileGating","TetraOverlappingFacepileUnstyled.react","XCometContextualProfileControllerRouteBuilder","XCometGroupMembersControllerRouteBuilder","overlappingFacepileGroupsCometMemberProfileLinkContainer","react","useIdOrVanityRouteBuilder","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useMemo;function a(a){var e=a.align;e=e===void 0?"end":e;a=a.group;var f=d("CometRelay").useFragment(i!==void 0?i:i=b("GroupsCometHeaderFacepile_group.graphql"),a),g=c("useNullthrowsViolation")(f.id),l=c("useIdOrVanityRouteBuilder")(c("XCometGroupMembersControllerRouteBuilder"),f),m=(a=(a=f.facepile_profiles)==null?void 0:a.count)!=null?a:0,n=k(function(){var a;return(a=f.facepile_profiles)==null?void 0:a.edges},[(a=f.facepile_profiles)==null?void 0:a.edges]);a=k(function(){return(n||[]).map(function(a){a=a.node;if(a==null)return null;var b=a.id,e=a.name,f=a.profile_picture,h=a.url;b=h==null&&b!=null&&d("ProfileCometContextualProfileGating").canViewCometContextualProfile()?c("XCometContextualProfileControllerRouteBuilder").buildURL({group_idorvanity:g,member_id:b}):h;if(e==null||b==null||f==null||f.uri==null)return null;h={uri:f.uri};return[e,{alt:e,containerComponent:c("overlappingFacepileGroupsCometMemberProfileLinkContainer")(g,a),linkProps:{routeTarget:"self",url:l},source:h}]}).filter(Boolean)},[n,g,l]);var o=a.map(function(a){return a[0]});a=a.map(function(a){return a[1]});return j.jsx(c("TetraOverlappingFacepileUnstyled.react"),{align:e,ellipsisTooltip:function(a){var b=o.slice(a).slice(0,8);a=m-a-b.length;return j.jsxs("span",{children:[b.map(function(a,b){return j.jsxs("span",{children:[a,j.jsx("br",{})]},b)}),a>=1&&h._(/*FBT_CALL*/{"*":"{number} personas m\u00e1s","_1":"1 persona m\u00e1s"}/*FBT_CALL*/,[h._plural(a,"number")])]})},items:a,linkProps:{routeTarget:"self",url:l},size:36},g)}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometJoinedActionMenu.entrypoint",["GroupsCometJoinedActionMenuQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.actorID;a=a.groupID;return{queries:{queryReference:{environmentProviderOptions:{actorID:c},parameters:b("GroupsCometJoinedActionMenuQuery$Parameters"),variables:{groupID:a}}}}},root:c("JSResourceForInteraction")("GroupsCometJoinedActionMenu.react").__setRef("GroupsCometJoinedActionMenu.entrypoint")};g["default"]=a}),98);
__d("GroupsCometJoinedActionButton.react",["fbt","ix","Actor","CometEntryPointPopoverTrigger.react","CometRelay","GroupsCometJoinedActionButton_group.graphql","GroupsCometJoinedActionMenu.entrypoint","GroupsCometNextGenNavContext","TetraButton.react","TetraIcon.react","fbicon","gkx","react","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l=d("react").useContext,m=c("gkx")("62");function a(a){var e=a.group,f=a.onNotifChange,g=a.onPress;a=a.onPressNotifItem;e=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometJoinedActionButton_group.graphql"),e);var n=d("Actor").useActor();n=n[0];e=c("useNullthrowsViolation")(e==null?void 0:e.id,"Group ID is missing in Group header content");var o={addOnSecondary:m?k.jsx(c("TetraIcon.react"),{icon:d("fbicon")._(i("481882"),16)}):void 0,icon:d("fbicon")._(i("1009563"),16),label:h._(/*FBT_CALL*/"Miembro"/*FBT_CALL*/),type:"secondary"},p=l(c("GroupsCometNextGenNavContext"));return k.jsx(c("CometEntryPointPopoverTrigger.react"),{entryPointParams:{actorID:n,groupID:e},otherProps:{onNotifChange:f,onPressNotifItem:a},popoverEntryPoint:c("GroupsCometJoinedActionMenu.entrypoint"),preloadTrigger:"button",children:function(a,b,d,e,f,h){d=babelHelpers["extends"]({},o,{onHoverIn:e,onHoverOut:f,onPress:function(){b(),g&&g.apply(void 0,arguments)},onPressIn:h});return k.jsxs("span",{ref:a,children:[k.jsx("span",{className:p?"":"qpxdca5k",children:k.jsx(c("TetraButton.react"),babelHelpers["extends"]({},d,{testid:void 0}))}),!p&&k.jsx("span",{className:"g3v272sq mkhogb32",children:k.jsx(c("TetraButton.react"),babelHelpers["extends"]({},d,{labelIsHidden:!0}))})]})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);