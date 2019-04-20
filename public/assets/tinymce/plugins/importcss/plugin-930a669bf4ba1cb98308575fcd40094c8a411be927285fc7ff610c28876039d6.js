/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.3 (2019-03-19)
 */

!function(){"use strict";var t,e,n,r,i,o=tinymce.util.Tools.resolve("tinymce.PluginManager"),d=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),f=tinymce.util.Tools.resolve("tinymce.EditorManager"),m=tinymce.util.Tools.resolve("tinymce.Env"),v=tinymce.util.Tools.resolve("tinymce.util.Tools"),c=function(t){return t.getParam("importcss_merge_classes")},u=function(t){return t.getParam("importcss_exclusive")},h=function(t){return t.getParam("importcss_selector_converter")},l=function(t){return t.getParam("importcss_selector_filter")},p=function(t){return t.getParam("importcss_groups")},_=function(t){return t.getParam("importcss_append")},O=function(t){return t.getParam("importcss_file_filter")},s=function(t){return function(){return t}},a=s(!1),y=s(!0),g=function(){return x},x=(r={fold:function(t,e){return t()},is:a,isSome:a,isNone:y,getOr:n=function(t){return t},getOrThunk:e=function(t){return t()},getOrDie:function(t){throw new Error(t||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:n,orThunk:e,map:g,ap:g,each:function(){},bind:g,flatten:g,exists:a,forall:y,filter:g,equals:t=function(t){return t.isNone()},equals_:t,toArray:function(){return[]},toString:s("none()")},Object.freeze&&Object.freeze(r),r),T=(i="function",function(t){return function(t){if(null===t)return"null";var e=typeof t;return"object"===e&&Array.prototype.isPrototypeOf(t)?"array":"object"===e&&String.prototype.isPrototypeOf(t)?"string":e}(t)===i}),b=Array.prototype.push,k=function(t,e){return function(t){for(var e=[],n=0,r=t.length;n<r;++n){if(!Array.prototype.isPrototypeOf(t[n]))throw new Error("Arr.flatten item "+n+" was not an array, input: "+t);b.apply(e,t[n])}return e}(function(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;i++){var o=t[i];r[i]=e(o,i,t)}return r}(t,e))},P=(Array.prototype.slice,T(Array.from)&&Array.from,function(e){return"string"==typeof e?function(t){return-1!==t.indexOf(e)}:e instanceof RegExp?function(t){return e.test(t)}:e}),S=function(c,t,s){var a=[],n={};function l(t,e){var n,r,i,o=t.href;if(r=o,i=m.cacheSuffix,"string"==typeof r&&(r=r.replace("?"+i,"").replace("&"+i,"")),(o=r)&&s(o,e)&&!function(t,e){var n=t.settings,r=!1!==n.skin&&(n.skin||"oxide");if(r){var i=n.skin_url?t.documentBaseURI.toAbsolute(n.skin_url):f.baseURL+"/skins/ui/"+r,o=f.baseURL+"/skins/content/";return e===i+"/content"+(t.inline?".inline":"")+".min.css"||-1!==e.indexOf(o)}return!1}(c,o)){v.each(t.imports,function(t){l(t,!0)});try{n=t.cssRules||t.rules}catch(u){}v.each(n,function(t){t.styleSheet?l(t.styleSheet,!0):t.selectorText&&v.each(t.selectorText.split(","),function(t){a.push(v.trim(t))})})}}v.each(c.contentCSS,function(t){n[t]=!0}),s||(s=function(t,e){return e||n[t]});try{v.each(t.styleSheets,function(t){l(t)})}catch(e){}return a},A=function(t,e){var n,r=/^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e);if(r){var i=r[1],o=r[2].substr(1).split(".").join(" "),u=v.makeMap("a,img");return r[1]?(n={title:e},t.schema.getTextBlockElements()[i]?n.block=i:t.schema.getBlockElements()[i]||u[i.toLowerCase()]?n.selector=i:n.inline=i):r[2]&&(n={inline:"span",title:e.substr(1),classes:o}),!1!==c(t)?n.classes=o:n.attributes={"class":o},n}},w=function(t,e){return null===e||!1!==u(t)},E=A,I=function(g){g.on("init",function(t){var e,n,r,i,o=(e=[],n=[],r={},{addItemToGroup:function(t,e){r[t]?r[t].push(e):(n.push(t),r[t]=[e])},addItem:function(t){e.push(t)},toFormats:function(){return k(n,function(t){var e=r[t];return 0===e.length?[]:[{title:t,items:e}]}).concat(e)}}),y={},u=P(l(g)),c=(i=p(g),v.map(i,function(t){return v.extend({},t,{original:t,selectors:{},filter:P(t.filter),item:{text:t.title,menu:[]}})})),s=function(t,e){if(f=t,p=y,!(w(g,m=e)?f in p:f in m.selectors)){s=t,l=y,w(g,a=e)?l[s]=!0:a.selectors[s]=!0;var n=(o=(i=g).plugins.importcss,u=t,((c=e)&&c.selector_converter?c.selector_converter:h(i)?h(i):function(){return A(i,u)}).call(o,u,c));if(n){var r=n.name||d.DOM.uniqueId();return g.formatter.register(r,n),v.extend({},{title:n.title,format:r})}}var i,o,u,c,s,a,l,f,m,p;return null};v.each(S(g,t.doc||g.getDoc(),P(O(g))),function(n){if(-1===n.indexOf(".mce-")&&(!u||u(n))){var t=(r=c,i=n,v.grep(r,function(t){return!t.filter||t.filter(i)}));if(0<t.length)v.each(t,function(t){var e=s(n,t);e&&o.addItemToGroup(t.title,e)});else{var e=s(n,null);e&&o.addItem(e)}}var r,i});var a=o.toFormats();g.fire("addStyleModifications",{items:a,replace:!_(g)})})},M=function(e){return{convertSelectorToFormat:function(t){return E(e,t)}}};o.add("importcss",function(t){return I(t),M(t)}),function j(){}}();
