/*!CK:2737555999!*//*1413171956,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["w2ZSs"]); }

__d("BusinessConf",[],function(a,b,c,d,e,f){e.exports={DOMAIN:"business",BIZ_ID_PARAM_NAME:"business_id",LABEL_ID_PARAM_NAME:"label_id",ACCOUNT_ID_PARAM_NAME:"act",ACCOUNT_ID_PARAM_NAME_LONG:"account_id",ACCOUNT_IDS_PARAM_NAME_LONG:"account_ids",PAGE_ID_PARAM_NAME:"id",PAGE_ADMIN_SELECTED_KEY:"sk",PRODUCT_CATALOG_ID_PARAM_NAME:"catalog_id",PRODUCT_FEED_ID_PARAM_NAME:"feed_id",LEGACY_ADS_MANAGER_PREFIX:"\/ads\/manage\/",CAMPAIGN_MANAGER_PREFIX:"\/ads\/manager\/",SHOW_SPLASH_PARAM_NAME:"splash",WHITELISTED_URI_CLASS:"bizOK",OPT_OUT_KEY:"do_not_redirect_to_biz_site",OPT_OUT_EXPIRE:86400,HIGHLANDER_OPT_OUT_KEY:"use_biz_page_in_highlander"};},null);
__d("PagesMessagingConst",[],function(a,b,c,d,e,f){e.exports={LOAD_MESSAGE_THREAD_URI:"\/ajax\/pages\/messages\/load_message_thread.php",ASYNC_ENDPOINT:"\/ajax\/messaging\/async.php"};},null);
__d("BusinessAssetGrouping.brands",["emptyFunction","getObjectValues"],function(a,b,c,d,e,f,g,h){'use strict';var i="personal-business",j={NULL_BIZ_ID:i,groupAssets:function(r,s,t,u,v,w,x,y){v=v||o;w=w||g.thatReturnsTrue;var z=k(r,s,t),aa=z.businessesByID;aa[i]={id:i,name:x||"You"};var ba=l(z.assetsByBizID,aa,u),ca=p(h(ba),n);if(y&&ca[0].bizID===i)ca.shift();var da=[];for(var ea=0;ea<ca.length;ea++){var fa=ca[ea],ga=false;fa.assets=p(fa.assets,v);fa.assets=q(fa.assets,w,fa.bizID);if(fa.assets.length!==0){da=da.concat(fa.assets);ga=true;}fa.projects=p(h(fa.projectsByID),m);delete fa.projectsByID;for(var ha=0;ha<fa.projects.length;ha++){fa.projects[ha].assets=p(fa.projects[ha].assets,v);fa.projects[ha].assets=q(fa.projects[ha].assets,w,fa.bizID);if(fa.projects[ha].assets.length!==0){da=da.concat(fa.projects[ha].assets);ga=true;}}if(!ga)ca[ea]=null;}ca=ca.filter(function(ia){return ia;});return {businessesByID:aa,groupedAssets:ca,assets:da};}};function k(r,s,t){var u={},v={};for(var w=0;w<r.length;w++){var x=r[w],y=t(x);if(!y||y.length===0){u[i]?u[i].push(x):u[i]=[x];continue;}for(var z=0;z<y.length;z++){var aa=y[z],ba;if(aa.business){ba=aa.business.id;v[ba]=aa.business;}else ba=i;if(u[ba]){u[ba].push(x);}else u[ba]=[x];}}return {assetsByBizID:u,businessesByID:v};}function l(r,s,t){var u={},v;for(var w in r){v=r[w];u[w]=u[w]||{bizID:w,name:s[w].name,projectsByID:{},assets:[]};for(var x=0;x<v.length;x++){var y=v[x],z=t(y),aa=false;if(w!==i&&z&&z.length>0)for(var ba=0;ba<z.length;ba++){var ca=z[ba];if(ca.business&&ca.business.id!==w)continue;var da=u[w].projectsByID;da[ca.id]=da[ca.id]||{projectID:ca.id,name:s[w].name+" - "+ca.name,assets:[]};da[ca.id].assets.push(y);aa=true;}if(!aa)u[w].assets.push(y);}}return u;}function m(r){return (r.name||"").toUpperCase();}function n(r){if(r.bizID===i)return String.fromCharCode(0);return r.name;}function o(r){return r.name?r.name:r.id;}function p(r,s){return r.sort(function(t,u){var v=s(t),w=s(u);if(v>w){return 1;}else if(v<w){return -1;}else return 0;});}function q(r,s,t){return r.filter(function(u){return s(u,t);});}e.exports=j;},null);
__d("BizSiteIdentifier.brands",["BusinessConf","BusinessAssetGrouping.brands","URI"],function(a,b,c,d,e,f,g,h,i){var j=h.NULL_BIZ_ID,k={isBizSite:function(){return i.getRequestURI(false).getSubdomain()===g.DOMAIN;},getBusinessID:function(){return i.getRequestURI(false).getQueryData()[g.BIZ_ID_PARAM_NAME];},createBusinessURL:function(l,m){if(m===j)return i(l).setSubdomain('www');var n=i(l).setSubdomain(g.DOMAIN);if(k.isBizSite())n.setDomain(i.getRequestURI().getDomain());var o=m||k.getBusinessID();n.addQueryData(g.BIZ_ID_PARAM_NAME,o);return n;}};e.exports=k;},null);
__d("FriendsCenterStickyController",["StickyController"],function(a,b,c,d,e,f,g){for(var h in g)if(g.hasOwnProperty(h))j[h]=g[h];var i=g===null?null:g.prototype;j.prototype=Object.create(i);j.prototype.constructor=j;j.__superConstructor__=g;function j(k,l,m,n){"use strict";g.call(this,k,l,m,n);this.$FriendsCenterStickyController0=l;this.$FriendsCenterStickyController1=n||k.parentNode;var o=k.getBoundingClientRect();this.$FriendsCenterStickyController2=o.bottom-o.top;this.$FriendsCenterStickyController3=true;}j.prototype.unstick=function(){"use strict";this.$FriendsCenterStickyController3=false;this.handleScroll();};j.prototype.restick=function(){"use strict";this.$FriendsCenterStickyController3=true;this.handleScroll();};j.prototype.shouldFix=function(){"use strict";if(!this.$FriendsCenterStickyController3)return false;var k=this.$FriendsCenterStickyController1.getBoundingClientRect();return this.$FriendsCenterStickyController0>=k.top&&this.$FriendsCenterStickyController0+this.$FriendsCenterStickyController2<k.bottom;};e.exports=j;},null);
__d("FriendsCenterStickyHeader",["CSS","DOM","FriendsCenterStickyController","Style","Vector","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=[];function o(p){"use strict";var q=h.scry(document,"div._4f7n")[0];if(!q)return;var r=j.isFixed(q)?k.getElementDimensions(q).y:0,s=this.getPlaceholder(p.getBoundingClientRect());h.insertAfter(p,s);g.addClass(p,"_5m65");var t=new i(p,r,function(u){g.conditionShow(s,u);g.conditionClass(p,'stuck',u);}.bind(this));t.start();n[p.id]=t;}o.prototype.getPlaceholder=function(p){"use strict";var q=h.create('div');g.hide(q);j.set(q,'height',(p.bottom-p.top)+'px');j.set(q,'width',(p.right-p.left)+'px');return q;};o.stopSticky=function(p){"use strict";p&&(p.id in n)&&n[p.id].unstick();};o.startSticky=function(p){"use strict";p&&(p.id in n)&&n[p.id].restick();};e.exports=o;},null);
__d("FriendBrowserCheckboxController",["Arbiter","AsyncRequest","CSS","DOM","Event","Form","FriendsCenterStickyHeader","OnVisible","$","bind","copyProperties","csx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t='friend_browser_list';function u(){}q(u,{instances:{},getInstance:function(v){return this.instances[v];}});q(u.prototype,{init:function(v,w,x,y){u.instances[v]=this;this._id=v;this._simplified=x;this._infiniteScroll=y;this._form=w;this._contentGrid=j.find(w,'.friendBrowserCheckboxContentGrid');this._loadingIndicator=j.find(w,'.friendBrowsingCheckboxContentLoadingIndicator');this._checkboxResults=j.find(w,'.friendBrowserCheckboxResults');this._contentPager=j.find(w,'.friendBrowserCheckboxContentPager');this._standaloneFilters=null;this._searchStarted=false;this._stickyHeader=null;g.subscribe('friend-browser/name-change',this.getNew.bind(this,false));this.numGetNewRequests=0;this.queuedRequests={};k.listen(this._form,'submit',this.onFormSubmit.bind(this));},addTypeahead:function(v,w){v.subscribe('select',this.onHubSelect.bind(this,v,w));if(this._simplified)v.subscribe('unselect',this.onHubSelect.bind(this,v,w));},setStandaloneFilters:function(v){if(v){this._standaloneFilters=j.scry(document.body,'.friendBrowserCheckboxFilters')[0];this._stickyHeader=j.scry(o('fbSearchResultsBox'),"._5m65")[0];var w=o('doneSearchButton');w.onclick=function(){this._searchStarted=false;j.scry(document.body,"._5n-u").forEach(function(x){i.show(x);});i.hide(w);window.scrollTo(0,0);m.startSticky(this._stickyHeader);}.bind(this);}return this;},onFormSubmit:function(){this.getNew(true);return false;},addSelector:function(v){v.subscribe('change',this.getNew.bind(this,false));},onHubSelect:function(v,w,event,x){if(this._simplified){this.getNew(true);return;}if(!((event=='select')&&x.selected))return;var y=this.buildNewCheckbox(w,x.selected.text,x.selected.uid),z=j.find(this._standaloneFilters||this._form,'.checkboxes_'+w);j.appendContent(z.firstChild,y);var aa=j.scry(v.getElement(),'input[type="button"]');if(aa&&aa[0])aa[0].click();this.getNew(true);},buildNewCheckbox:function(v,w,x){var y=v+'_ids_'+x,z=v+'_ids[]',aa=j.create('input',{id:y,type:'checkbox',value:x,name:z,checked:true});k.listen(aa,'click',p(this,'getNew',false));var ba=j.create('td',null,aa);i.addClass(ba,'vTop');i.addClass(ba,'hLeft');var ca=j.create('label',null,w),da=j.create('td',null,ca);i.addClass(da,'vMid');i.addClass(da,'hLeft');var ea=j.create('tr');ea.appendChild(ba);ea.appendChild(da);return ea;},showMore:function(){var v=j.scry(this._contentPager,'.friendBrowserMorePager')[0];if(!v)return false;if(i.hasClass(v,'async_saving'))return false;var w=this.numGetNewRequests,x=this.getFormData();x.show_more=true;if(this._searchStarted)x.page=t;new h().setURI('/ajax/growth/friend_browser/checkbox.php').setData(x).setHandler(p(this,function(y){this.showMoreHandler(y,w);})).setStatusElement(v).send();},showMoreHandler:function(v,w){if(w==this.numGetNewRequests){var x=v.payload;j.appendContent(this._contentGrid,x.results);this.updatePagerAndExtraData(x.pager,x.extra_data);}},getFormData:function(){var v=l.serialize(this._form);if(this._standaloneFilters){var w=l.serialize(this._standaloneFilters);for(var x in w)v[x]=w[x];}return v;},getNew:function(v){this.numGetNewRequests++;var w=this.numGetNewRequests;i.addClass(this._checkboxResults,'friendBrowserCheckboxContentOnload');if(s('friendBrowserCI'))i.addClass(o('friendBrowserCI'),'friendBrowserCheckboxContentOnload');this.startStandaloneSearch();i.show(this._loadingIndicator);var x=this.getFormData();x.used_typeahead=v;if(this._searchStarted)x.page=t;new h().setURI('/ajax/growth/friend_browser/checkbox.php').setData(x).setHandler(p(this,function(y){this.getNewHandler(y,w);})).send();},getNewHandler:function(v,w){if(w==this.numGetNewRequests){var x=v.payload;j.setContent(this._contentGrid,x.results);i.removeClass(this._checkboxResults,'friendBrowserCheckboxContentOnload');if(s('friendBrowserCI'))i.hide(o('friendBrowserCI'));i.hide(this._loadingIndicator);this.updatePagerAndExtraData(x.pager,x.extra_data);}},startStandaloneSearch:function(){if(!this._standaloneFilters)return;window.scrollTo(0,0);if(this._searchStarted)return;this._searchStarted=true;i.show(o('fbSearchResultsBox'));j.scry(document.body,"._5n-u").forEach(function(v){i.hide(v);});i.show(o('doneSearchButton'));m.stopSticky(this._stickyHeader);},updatePagerAndExtraData:function(v,w){j.setContent(this._contentPager,v);if(this._infiniteScroll)this.setupOnVisible();j.replace(this._form.elements.extra_data,w);},setupOnVisible:function(){var v=j.scry(this._contentPager,'.friendBrowserMorePager')[0];if(v&&this._id!='jewel'){this._onVisible&&this._onVisible.remove();this._onVisible=new n(v,p(this,'showMore'),false,1000);}}});e.exports=u;},null);
__d("ContextualHelpSearchController",["Event","AsyncRequest","DOM","CSS","Focus","Input","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=400;function o(){this._token=null;this._timerID=0;this._lastQuery=null;this.typing_listener=null;this.clear_listener=null;this.async_request=null;}m(o.prototype,{init:function(p,q,r,s,t,u){this.loader=p;this.search_box=q;this.topics_area=r;this.results_area=s;this.clear_button=t;this.typing_listener=g.listen(this.search_box,'keyup',this.setTimer.bind(this));this.clear_listener=g.listen(this.clear_button,'click',this.clearResults.bind(this));if(u==null||u.focusSearchBox==null||u.focusSearchBox)k.set(this.search_box);},source:'contextual_help',clearResults:function(){this.show(this.topics_area);this._lastQuery='';l.reset(this.search_box);k.set(this.search_box);if(this.async_request!==null){this.async_request.abort();this.async_request=null;}j.addClass(this.clear_button,'hidden_elem');},update:function(){var p=l.getValue(this.search_box);if(p===this._lastQuery)return;this._lastQuery=p;if(p===''){this.clearResults();return;}this.show(this.loader);var q={query:p,width:this._width||n,source:this.source};this.async_request=new h('/help/ajax/search/').setData(q).setHandler(function(r){this._update(r);}.bind(this));this.async_request.send();},_update:function(p){this.async_request=null;var q=p.getPayload().results;i.setContent(this.results_area,q);this.show(this.results_area);if(l.getValue(this.search_box)===''){this.clearResults();}else j.removeClass(this.clear_button,'hidden_elem');},setTimer:function(){if(this._timerID!==0)clearTimeout(this._timerID);this._timerID=setTimeout(this.update.bind(this),300);if(this.async_request!=null){this.async_request.abort();this.async_request=null;}},show:function(p){var q=[this.loader,this.topics_area,this.results_area];for(var r=0;r<q.length;r++)j.addClass(q[r],'hidden_elem');j.removeClass(p,'hidden_elem');}});e.exports=o;},null);
__d("LitestandNewsfeedCountUpdater",["Arbiter","AsyncRequest","LitestandMessages","LitestandSidebarBookmarkConfig","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){var l,m;function n(){m&&clearTimeout(m);if(l)return;m=setTimeout(o,j.nf_count_query_interval_ms);}function o(){if(l)return;new h().setURI('/ajax/litestand/newsfeed_count').setHandler(function(r){if(l)return;p(r.getPayload());n();}).setAllowCrossPageTransition(true).send();}function p(r){g.inform(i.UPDATE_HOME_COUNT,{count:r,onHome:l},g.BEHAVIOR_STATE);}var q={init:function(){q.init=k;g.subscribe(i.NEWSFEED_LOAD,function(){l=true;p(0);});g.subscribe(i.LEAVE_HOME,function(){l=false;n();});n();}};e.exports=q;},null);
__d("LitestandChromeHomeCount",["Arbiter","CSS","DOM","Event","LitestandMessages","LitestandNewsfeedCountUpdater","Parent","UserAgent_DEPRECATED","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q=20,r,s,t,u,v,w={init:function(x){v=x;s=i.find(document,"div._uaw ._5ahz");r=s.parentNode;t=m.byClass(r,"_1ayn");u=false;g.subscribe(k.UPDATE_HOME_COUNT,function(y,z){w.updateBadge(z.onHome?0:z.count);});j.listen(t,'click',function(event){var y=event.getModifiers();if(y.shift||(n.osx()&&y.meta)||(n.windows()&&y.control))w.updateBadge(0);});l.init();w.updateBadge(v);},updateBadge:function(x){v=x;var y=x>0;w.toggleBadge(y);if(y){var z=x>q?q+'+':x;i.setContent(s,z);}},toggleBadge:function(x){if(u===x)return;u=x;h.conditionClass(r,"_5ahy",!x);}};e.exports=w;},null);
__d("MercuryOrderedThreadlist",["LogHistory","MercuryActionTypeConstants","MercuryFilters","MercuryFolders","MercuryPayloadSource","MercurySingletonMixin","MessagingTag","RangedCallbackManager","MercuryServerRequests","MercuryThreadInformer","MercuryThreads","arrayContains","copyProperties"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=g.getInstance('ordered_threadlist_model'),u=i.getSupportedFilters().concat([i.ALL,m.GROUPS]),v=j.getSupportedFolders();function w(ga,ha,ia,ja){var ka=[],la=false,ma=false,na=(ha||[]).filter(function(ua){var va=ua.filter||i.ALL;return (ua.folder==ia||(!ua.folder&&ia==m.INBOX))&&va==ja;}),oa=ga._threadlistOrderMap[ia][ja].getAllResources(),pa;na.forEach(function(ua){ka=ka.concat(ua.thread_ids);if(ua.error){if(ua.end>oa.length)ma=ua.error;}else{var va=ua.end-ua.start;if(ua.thread_ids.length<va)la=true;}if(!pa||ua.end>pa)pa=ua.end;});aa(ga,ka,ia,ja);if(la){ga._threadlistOrderMap[ia][ja].setReachedEndOfArray();}else if(ma){ga._threadlistOrderMap[ia][ja].setError(ma);}else{var qa=ga._threadlistOrderMap[ia][ja].getCurrentArraySize();if(pa&&qa<pa){var ra={},sa=oa.concat(ka),ta=sa.filter(function(ua){var va=ra[ua];ra[ua]=true;return va;});if(ta.length){t.warn('duplicate_threads',{folder:ia,expected_final_size:pa,actual_final_size:qa,duplicate_thread_ids:ta});ga._serverRequests.fetchThreadlistInfo(pa,ta.length,ia,ja==i.ALL?null:ja);}}}}function x(ga,ha){v.forEach(function(ia){u.forEach(function(ja){w(ga,ha,ia,ja);});});}function y(ga,ha){var ia={};v.forEach(function(ja){ia[ja]={};u.forEach(function(ka){ia[ja][ka]={to_add:[],to_remove:[],to_remove_if_last_after_add:{}};});});ha.forEach(function(ja){if(ja.is_forward)return;var ka=ja.thread_id,la=ba(ga,ka),ma=ca(ga,ka);function na(){ma.forEach(function(pa){ia[la][pa].to_add.push(ka);if(!ga._threadlistOrderMap[la][pa].hasReachedEndOfArray()&&!ga._threadlistOrderMap[la][pa].hasResource(ka))ia[la][pa].to_remove_if_last_after_add[ka]=true;});}function oa(pa){if(r(u,pa))if(r(ma,pa)){ia[la][pa].to_add.push(ka);}else ia[la][pa].to_remove.push(ka);}if(!la){if(ja.action_type===h.CHANGE_FOLDER||ja.action_type===h.CHANGE_ARCHIVED_STATUS)v.forEach(function(pa){if(pa!==la)u.forEach(function(qa){ga._threadlistOrderMap[pa][qa].removeResources([ka]);});});return;}switch(ja.action_type){case h.DELETE_THREAD:ma.forEach(function(pa){ia[la][pa].to_remove.push(ka);});break;case h.CHANGE_ARCHIVED_STATUS:case h.CHANGE_FOLDER:na();break;case h.CHANGE_READ_STATUS:oa(m.UNREAD);break;case h.USER_GENERATED_MESSAGE:case h.LOG_MESSAGE:ma.forEach(function(pa){if(da(ga,ka,la,pa))ia[la][pa].to_add.push(ka);});break;}});v.forEach(function(ja){u.forEach(function(ka){var la=ga._threadlistOrderMap[ja][ka];aa(ga,ia[ja][ka].to_add,ja,ka);for(var ma=la.getCurrentArraySize()-1;ma>=0;ma--){var na=la.getResourceAtIndex(ma);if(!ia[ja][ka].to_remove_if_last_after_add[na])break;ia[ja][ka].to_remove.push(na);}la.removeResources(ia[ja][ka].to_remove);});});}function z(ga,ha){var ia={};v.forEach(function(ja){ia[ja]={};u.forEach(function(ka){ia[ja][ka]=[];});});ha.forEach(function(ja){var ka=ba(ga,ja.thread_id),la=ca(ga,ja.thread_id);if(ka)la.forEach(function(ma){if(da(ga,ja.thread_id,ka,ma))ia[ka][ma].push(ja.thread_id);});});v.forEach(function(ja){u.forEach(function(ka){if(ia[ja][ka].length>0)aa(ga,ia[ja][ka],ja,ka);});});}function aa(ga,ha,ia,ja){ja=ja||i.ALL;ga._threadlistOrderMap[ia][ja].addResources(ha);v.forEach(function(ka){if(ka!=ia)ga._threadlistOrderMap[ka][ja].removeResources(ha);});}function ba(ga,ha){var ia=ga._threads.getThreadMetaNow(ha),ja=null;if(!ia){ja='No thread metadata';}else if(!ia.folder)ja='No thread folder';if(ja){var ka={error:ja,tid:ha};t.warn('no_thread_folder',ka);return null;}var la=ia.folder;if(ia.is_archived)la=m.ACTION_ARCHIVED;if(ga._threadlistOrderMap[la]){return la;}else return null;}function ca(ga,ha){var ia=ga._threads.getThreadMetaNow(ha),ja=[i.ALL];if(!ia){var ka={error:'no_thread_metadata',tid:ha};t.warn('no_thread_metadata',ka);return [];}if(ia.unread_count)ja.push(m.UNREAD);if(!ia.is_canonical)ja.push(m.GROUPS);return ja;}function da(ga,ha,ia,ja){var ka=ga._threads.getThreadMetaNow(ha);return ka&&ka.timestamp&&ba(ga,ha)==ia&&r(ca(ga,ha),ja);}function ea(ga){this._fbid=ga;this._serverRequests=o.getForFBID(this._fbid);this._threadInformer=p.getForFBID(this._fbid);this._threads=q.getForFBID(this._fbid);this._threadlistOrderMap={};v.forEach(function(ha){this._threadlistOrderMap[ha]={};u.forEach(function(ia){this._threadlistOrderMap[ha][ia]=new n(function(ja){return this._threads.getThreadMetaNow(ja).timestamp;}.bind(this),function(ja,ka){return ka-ja;},this._serverRequests.canLinkExternally.bind(this._serverRequests));}.bind(this));}.bind(this));this._serverRequests.subscribe('update-threadlist',function(ha,ia){if(!fa(ia))return;var ja=ia.ordered_threadlists;if(ja&&ja.length){x(this,ja);}else{var ka=(ia.actions||[]).filter(function(la){return la.thread_id;});z(this,ia.threads||[]);y(this,ka);}this._threadInformer.updatedThreadlist();}.bind(this));}s(ea.prototype,{getThreadlist:function(ga,ha,ia,ja,ka,la){return this.getFilteredThreadlist(ga,ha,ia,i.ALL,ja,ka,la);},getFilteredThreadlist:function(ga,ha,ia,ja,ka,la,ma){var na=this._threadlistOrderMap[ia][ja],oa=na.executeOrEnqueue(ga,ha,ka,la),pa=na.getUnavailableResources(oa),qa=na.getError(ga,ha,la);if(pa.length||qa){if(na.getCurrentArraySize()<ga){var ra={start:ga,limit:ha,filter:ja,resources_size:na.getCurrentArraySize()};t.warn('range_with_gap',ra);}na.setError(false);this._serverRequests.fetchThreadlistInfo(na.getCurrentArraySize(),pa.length,ia,ja==i.ALL?null:ja,ma);}return oa;},getThreadlistUntilTimestamp:function(ga,ha,ia){ia=ia||i.ALL;return this._threadlistOrderMap[ha][ia].getElementsUntil(ga);},unsubscribe:function(ga,ha,ia){ia=ia||i.ALL;this._threadlistOrderMap[ha][ia].unsubscribe(ga);}});s(ea,l);function fa(ga){switch(ga.payload_source){case k.CLIENT_CHANGE_ARCHIVED_STATUS:case k.CLIENT_CHANGE_READ_STATUS:case k.CLIENT_CHANGE_FOLDER:case k.CLIENT_CHANNEL_MESSAGE:case k.CLIENT_DELETE_MESSAGES:case k.CLIENT_DELETE_THREAD:case k.CLIENT_SEND_MESSAGE:case k.SERVER_SEND_MESSAGE:case k.SERVER_CONFIRM_MESSAGES:case k.SERVER_FETCH_THREADLIST_INFO:case k.SERVER_THREAD_SYNC:return true;case k.SERVER_INITIAL_DATA:return ga.ordered_threadlists;default:return false;}}e.exports=ea;},null);
__d("MercuryPresence",["Arbiter","AvailableListConstants","DOM","CSS","requireWeak","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={},n={},o={updateOnPresenceChanges:function(u,v){n[v.tagName]=true;m[u]=true;j.addClass(v,'presenceListener_'+u);var w=p(u);q(v,w.classes);r(v,w.label);}};function p(u){var v=t(u),w={presenceActive:false,presenceMobile:false},x=null;switch(v){case h.ACTIVE:w.presenceActive=true;x="Activo";break;case h.MOBILE:w.presenceMobile=true;x="Celular";break;default:break;}return {classes:w,label:x};}function q(u,v){for(var w in v)j.conditionClass(u,w,v[w]);}function r(u,v){if(u&&v){var w=i.create('span',{className:'accessible_elem'},v);i.setContent(u,w);}}function s(){for(var u in m){var v=p(u);for(var w in n){var x=i.scry(document,w+'.presenceListener_'+u);for(var y=0;y<x.length;y++){q(x[y],v.classes);r(x[y],v.label);}}}}var t=function(u){return h.OFFLINE;};k(['AvailableList'],function(u){t=u.get;s();});g.subscribe(h.ON_AVAILABILITY_CHANGED,s);e.exports=o;},null);
__d("QuicklingAugmenter",["URI"],function(a,b,c,d,e,f,g){var h=[],i={addHandler:function(j){h.push(j);},augmentURI:function(j){var k=[],l=g(j);h.forEach(function(m){var n=m(l);if(!n)return l;k.push(m);l=l.addQueryData(n);});h=k;return l;}};e.exports=i;},null);
__d("Quickling",["AjaxPipeRequest","Arbiter","CSSClassTransition","DocumentTitle","DOM","ErrorUtils","HTML","OnloadHooks","PageTransitions","QuicklingAugmenter","QuicklingConfig","Run","URI","UserAgent_DEPRECATED","PHPQuerySerializer","goOrReplace","isEmpty"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x=q.version,y=q.sessionLength,z=new RegExp(q.inactivePageRegex),aa=0,ba,ca='',da=[];function ea(){da.forEach(clearTimeout);da.length=0;}function fa(){if(da.length===0)r.onLeave(ea);}var ga={isActive:function(){return true;},isPageActive:function(pa){if(pa=='#')return false;pa=new s(pa);if(pa.getDomain()&&pa.getDomain()!=s().getDomain())return false;if(pa.getPath()=='/l.php'){var qa=pa.getQueryData().u;if(qa){qa=s(unescape(qa)).getDomain();if(qa&&qa!=s().getDomain())return false;}}var ra=pa.getPath(),sa=pa.getQueryData();if(!w(sa))ra+='?'+u.serialize(sa);return !z.test(ra);},getLoadCount:function(){return aa;}};function ha(pa){pa=pa||'Facebook';j.set(pa);if(t.ie()){ca=pa;if(!ba)ba=window.setInterval(function(){var qa=ca,ra=j.get();if(qa!=ra)j.set(qa);},5000,false);}}function ia(pa){var qa=document.getElementsByTagName('link');for(var ra=0;ra<qa.length;++ra){if(qa[ra].rel!='alternate')continue;k.remove(qa[ra]);}if(pa.length){var sa=k.find(document,'head');sa&&k.appendContent(sa,m(pa[0]));}}for(var ja in g)if(g.hasOwnProperty(ja))la[ja]=g[ja];var ka=g===null?null:g.prototype;la.prototype=Object.create(ka);la.prototype.constructor=la;la.__superConstructor__=g;function la(pa){"use strict";var qa={version:x};g.call(this,pa,{quickling:qa});}la.prototype._preBootloadFirstResponse=function(pa){"use strict";return true;};la.prototype._fireDomContentCallback=function(){"use strict";this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');o.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);ka._fireDomContentCallback.call(this);};la.prototype._fireOnloadCallback=function(){"use strict";if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}ka._fireOnloadCallback.call(this);};la.prototype.isPageActive=function(pa){"use strict";return ga.isPageActive(pa);};la.prototype._versionCheck=function(pa){"use strict";if(pa.version==x)return true;var qa=['quickling','ajaxpipe','ajaxpipe_token'];v(window.location,s(pa.uri).removeQueryData(qa),true);return false;};la.prototype._processFirstResponse=function(pa){"use strict";var qa=pa.getPayload();ha(qa.title);ia(qa.syndication||[]);window.scrollTo(0,0);i.go(document.body,qa.body_class||'',o.getMostRecentURI(),pa.getRequest().getURI());h.inform('quickling/response');};la.prototype.getSanitizedParameters=function(){"use strict";return ['quickling'];};function ma(){aa++;return aa>=y;}function na(pa){g.setCurrentRequest(null);if(ma())return false;pa=p.augmentURI(pa);if(!ga.isPageActive(pa))return false;window.ExitTime=Date.now();r.__removeHook('onafterloadhooks');r.__removeHook('onloadhooks');n.runHooks('onleavehooks');h.inform('onload/exit',true);new la(pa).setCanvasId('content').send();return true;}function oa(pa){var qa=window[pa];function ra(sa,ta,ua){if(typeof sa!=='function')sa=eval.bind(null,sa);var va=qa(l.guard(sa,pa+' (with Quickling)'),ta);if(ta>0&&ua!==false){fa();da.push(va);}return va;}window[pa]=ra;}r.onAfterLoad(function pa(){oa('setInterval');oa('setTimeout');o.registerHandler(na,1);});e.exports=a.Quickling=ga;},null);
__d("PagesVoiceBar",["$","Arbiter","AsyncRequest","ChannelConstants","DOM","URI"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m='PagesVoiceBar/initialized',n='PagesVoiceBar/switchVoice',o='page_transition',p='pages_voice_bar_sync',q=null,r=null,s=false;function t(z,aa){new i('/ajax/pages/switch_voice.php').setData(aa).setHandler(function(ba){x();}).send();}function u(){q=null;}function v(z,aa){if(aa.obj.profile_id&&aa.obj.profile_id===q)x();}function w(z){h.subscribe(m,z);}function x(){l.getNextURI().go();}var y={initVoiceBar:function(){if(s)return;r=g('pagesVoiceBarContent');h.subscribe(n,t);h.subscribe(o,u);h.subscribe(j.getArbiterType(p),v);s=true;h.inform(m,null,h.BEHAVIOR_STATE);},update:function(z,aa){w(function(){q=aa;k.setContent(r,z);});}};e.exports=y;},null);
__d("PrivacyLiteFlyoutHelp",["Event","Arbiter","AsyncRequest","ContextualHelpSearchController","CSS","DOM","Parent","copyProperties","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q,r;function s(t,u,v,w,x){this._width=315;r=l.find(u,'input');var y=l.create('div');this.init(t,r,y,v,w,{focusSearchBox:false});q=m.byClass(u,"_8-a");g.listen(x,'click',this._hideSearch.bind(this));h.subscribe('PrivacyLiteFlyout/expandingSection',this._hideSearch.bind(this));var z=l.scry(q,"._d1r")[0];z&&g.listen(z,'click',function(){k.addClass(q,"_aw6");r.focus();if(!this.suggestedResults)new i('/ajax/privacy/privacy_lite/help_suggestions').setHandler(function(aa){var ba=aa.getPayload().searchSuggestions,ca=l.find(q,"._4_8m");l.setContent(ca,ba);k.addClass(q,"_4_8l");}.bind(this)).send();}.bind(this));}n(s.prototype,new j(),{source:'privacy_shortcuts',_hideSearch:function(){this.clearResults();k.removeClass(q,"_aw6");},show:function(t){if(t===this.topics_area){k.removeClass(q,"_aw7");return;}else if(t===this.loader){k.addClass(q,"_aw7");k.hide(this.results_area);}else k.hide(this.loader);k.show(t);}});e.exports=s;},null);
__d("ViewasChromeBar",["Event","Arbiter","AsyncRequest","CSS","DOM","Focus","ModalMask","PageTransitions","Parent","cx","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r='ViewasChromeBar/initialized',s=null,t=false;function u(x){h.subscribe(r,x);}function v(x){j.addClass(x,"_7g7");var y=k.find(x,"._7g0");l.set(k.find(y,'.textInput'));}var w={initChromeBar:function(x){if(t)return;s=x;t=true;h.inform(r,null,h.BEHAVIOR_STATE);},update:function(x,y){u(function(){k.setContent(s,x);if(y)new i('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();});},registerSpecificModeOnClick:function(x){g.listen(x,'click',v.bind(null,o.byClass(x,"_7f-")));},registerFlyoutModalMask:function(){m.show();n.registerHandler(m.hide,10);}};e.exports=w;},null);
__d("TypeaheadRegulateMemorializedUsers",["TokenizeUtil","copyProperties"],function(a,b,c,d,e,f,g,h){function i(j){"use strict";this._typeahead=j;}i.prototype._filter=function(j,k){"use strict";if(j.type!=='user'||!j.memorialized)return true;var l=g.parse(j.text).tokens;if(l.length===1&&g.isExactMatch(k,j.text))return true;var m=this._typeahead.getData().getTextToIndex(j),n=g.parse(k).tokens;return (n.length>1&&g.isQueryMatch(k,m));};i.prototype.enable=function(){"use strict";this._filterRegistry=this._typeahead.getData().addFilter(this._filter.bind(this));};i.prototype.disable=function(){"use strict";this._filterRegistry.remove();this._filterRegistry=null;};h(i.prototype,{_filterRegistry:null});e.exports=i;},null);
__d("legacy:RegulateMemorializedUsersTypeaheadBehavior",["TypeaheadRegulateMemorializedUsers"],function(a,b,c,d,e,f,g){if(!a.TypeaheadBehaviors)a.TypeaheadBehaviors={};a.TypeaheadBehaviors.regulateMemorializedUsers=function(h){h.enableBehavior(g);};},3);
__d("XUIBadge",["CSS","DOM","cx","invariant"],function(a,b,c,d,e,f,g,h,i,j){function k(m){return parseInt(m,10)===m;}function l(m){"use strict";this.target=m.target;this.count=m.count;this.maxcount=m.maxcount;}l.prototype.getCount=function(){"use strict";return this.count;};l.prototype.setCount=function(m){"use strict";j(k(m));j(m>=0);this.count=m;g.conditionClass(this.target,'hidden_elem',this.count===0);if(m>this.maxcount){h.setContent(this.target,this.maxcount+'+');g.addClass(this.target,"_5ugi");}else{h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}};l.prototype.setLegacyContent=function(m){"use strict";if(typeof m==='string'){g.conditionClass(this.target,'hidden_elem',m==0);h.setContent(this.target,m);g.removeClass(this.target,"_5ugi");}else this.setCount(m);};l.prototype.increment=function(){"use strict";this.setCount(this.getCount()+1);};e.exports=l;},null);
__d("VaultBoxURI",["URI"],function(a,b,c,d,e,f,g){var h={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j)&&i.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function(i){var j=new RegExp("\/"+h.PHOTOS_SYNCED+"\/?$");return i.getPath().match(j);},getSyncedTabURI:function(){return new g('/me/'+h.PHOTOS_SYNCED).getQualifiedURI();}};e.exports=h;},null);