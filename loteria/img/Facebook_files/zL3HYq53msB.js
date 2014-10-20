/*!CK:693437994!*//*1413237116,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["d2Bd\/"]); }

__d("AdsTargetingUtils",["BoostedRadiusOptions","AdsTargetingConstants","LocationConstants"],function(a,b,c,d,e,f,g,h){var i=b('LocationConstants').RadiusInfo,j={getRadiusOptions:function(){var k=Object.keys(g).map(function(l){return g[l];});k=[0].concat(k);return k;},getValidRadius:function(k,l){var m=l?i.getSupportedRadii():j.getRadiusOptions();if(m.indexOf(k)!==-1)return k;return l?i.getDefaultRadius():h.DEFAULT_RADIUS;}};e.exports=j;},null);