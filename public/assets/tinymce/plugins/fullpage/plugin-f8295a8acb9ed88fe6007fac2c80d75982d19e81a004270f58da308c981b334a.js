/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.3 (2019-03-19)
 */

!function(m){"use strict";var o,i=function(t){var e=t,n=function(){return e};return{get:n,set:function(t){e=t},clone:function(){return i(n())}}},t=tinymce.util.Tools.resolve("tinymce.PluginManager"),g=tinymce.util.Tools.resolve("tinymce.util.Tools"),e=tinymce.util.Tools.resolve("tinymce.html.DomParser"),f=tinymce.util.Tools.resolve("tinymce.html.Node"),p=tinymce.util.Tools.resolve("tinymce.html.Serializer"),h=function(t){return t.getParam("fullpage_hide_in_source_view")},l=function(t){return t.getParam("fullpage_default_xml_pi")},a=function(t){return t.getParam("fullpage_default_encoding")},c=function(t){return t.getParam("fullpage_default_font_family")},s=function(t){return t.getParam("fullpage_default_font_size")},u=function(t){return t.getParam("fullpage_default_text_color")},d=function(t){return t.getParam("fullpage_default_title")},y=function(t){return t.getParam("fullpage_default_doctype","<!DOCTYPE html>")},v=function(t){return e({validate:!1,root_name:"#document"}).parse(t)},_=v,n=function(t,e){var n,i,r=v(e),l={};function o(t,e){return t.attr(e)||""}return l.fontface=c(t),l.fontsize=s(t),7===(n=r.firstChild).type&&(l.xml_pi=!0,(i=/encoding="([^"]+)"/.exec(n.value))&&(l.docencoding=i[1])),(n=r.getAll("#doctype")[0])&&(l.doctype="<!DOCTYPE"+n.value+">"),(n=r.getAll("title")[0])&&n.firstChild&&(l.title=n.firstChild.value),g.each(r.getAll("meta"),function(t){var e,n=t.attr("name"),i=t.attr("http-equiv");n?l[n.toLowerCase()]=t.attr("content"):"Content-Type"===i&&(e=/charset\s*=\s*(.*)\s*/gi.exec(t.attr("content")))&&(l.docencoding=e[1])}),(n=r.getAll("html")[0])&&(l.langcode=o(n,"lang")||o(n,"xml:lang")),l.stylesheets=[],g.each(r.getAll("link"),function(t){"stylesheet"===t.attr("rel")&&l.stylesheets.push(t.attr("href"))}),(n=r.getAll("body")[0])&&(l.langdir=o(n,"dir"),l.style=o(n,"style"),l.visited_color=o(n,"vlink"),l.link_color=o(n,"link"),l.active_color=o(n,"alink")),l},b=function(t,l,e){var o,n,i,a,r,c=t.dom;function s(t,e,n){t.attr(e,n||undefined)}function u(t){n.firstChild?n.insert(t,n.firstChild):n.append(t)}o=v(e),(n=o.getAll("head")[0])||(a=o.getAll("html")[0],n=new f("head",1),a.firstChild?a.insert(n,a.firstChild,!0):a.append(n)),a=o.firstChild,l.xml_pi?(r='version="1.0"',l.docencoding&&(r+=' encoding="'+l.docencoding+'"'),7!==a.type&&(a=new f("xml",7),o.insert(a,o.firstChild,!0)),a.value=r):a&&7===a.type&&a.remove(),a=o.getAll("#doctype")[0],l.doctype?(a||(a=new f("#doctype",10),l.xml_pi?o.insert(a,o.firstChild):u(a)),a.value=l.doctype.substring(9,l.doctype.length-1)):a&&a.remove(),a=null,g.each(o.getAll("meta"),function(t){"Content-Type"===t.attr("http-equiv")&&(a=t)}),l.docencoding?(a||((a=new f("meta",1)).attr("http-equiv","Content-Type"),a.shortEnded=!0,u(a)),a.attr("content","text/html; charset="+l.docencoding)):a&&a.remove(),a=o.getAll("title")[0],l.title?(a?a.empty():u(a=new f("title",1)),a.append(new f("#text",3)).value=l.title):a&&a.remove(),g.each("keywords,description,author,copyright,robots".split(","),function(t){var e,n,i=o.getAll("meta"),r=l[t];for(e=0;e<i.length;e++)if((n=i[e]).attr("name")===t)return void(r?n.attr("content",r):n.remove());r&&((a=new f("meta",1)).attr("name",t),a.attr("content",r),a.shortEnded=!0,u(a))});var d={};return g.each(o.getAll("link"),function(t){"stylesheet"===t.attr("rel")&&(d[t.attr("href")]=t)}),g.each(l.stylesheets,function(t){d[t]||((a=new f("link",1)).attr({rel:"stylesheet",text:"text/css",href:t}),a.shortEnded=!0,u(a)),delete d[t]}),g.each(d,function(t){t.remove()}),(a=o.getAll("body")[0])&&(s(a,"dir",l.langdir),s(a,"style",l.style),s(a,"vlink",l.visited_color),s(a,"link",l.link_color),s(a,"alink",l.active_color),c.setAttribs(t.getBody(),{style:l.style,dir:l.dir,vLink:l.visited_color,link:l.link_color,aLink:l.active_color})),(a=o.getAll("html")[0])&&(s(a,"lang",l.langcode),s(a,"xml:lang",l.langcode)),n.firstChild||n.remove(),(i=p({validate:!1,indent:!0,apply_source_formatting:!0,indent_before:"head,html,body,meta,title,script,link,style",indent_after:"head,html,body,meta,title,script,link,style"}).serialize(o)).substring(0,i.indexOf("</body>"))},x=Object.prototype.hasOwnProperty,C=(o=function(t,e){return e},function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];if(0===t.length)throw new Error("Can't merge zero objects");for(var n={},i=0;i<t.length;i++){var r=t[i];for(var l in r)x.call(r,l)&&(n[l]=o(n[l],r[l]))}return n}),r=function(i,r){var l=n(i,r.get()),t=C({title:"",keywords:"",description:"",robots:"",author:"",docencoding:""},l);i.windowManager.open({title:"Metadata and Document Properties",size:"normal",body:{type:"panel",items:[{name:"title",type:"input",label:"Title"},{name:"keywords",type:"input",label:"Keywords"},{name:"description",type:"input",label:"Description"},{name:"robots",type:"input",label:"Robots"},{name:"author",type:"input",label:"Author"},{name:"docencoding",type:"input",label:"Encoding"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:t,onSubmit:function(t){var e=t.getData(),n=b(i,g.extend(l,e),r.get());r.set(n),t.close()}})},k=function(t,e){t.addCommand("mceFullPageProperties",function(){r(t,e)})},w=function(t,e){return g.each(t,function(t){e=e.replace(t,function(t){return"\x3c!--mce:protected "+escape(t)+"--\x3e"})}),e},A=function(t){return t.replace(/<!--mce:protected ([\s\S]*?)-->/g,function(t,e){return unescape(e)})},P=g.each,T=function(t){return t.replace(/<\/?[A-Z]+/g,function(t){return t.toLowerCase()})},O=function(t){var e,n="",i="";if(l(t)){var r=a(t);n+='<?xml version="1.0" encoding="'+(r||"ISO-8859-1")+'" ?>\n'}return n+=y(t),n+="\n<html>\n<head>\n",(e=d(t))&&(n+="<title>"+e+"</title>\n"),(e=a(t))&&(n+='<meta http-equiv="Content-Type" content="text/html; charset='+e+'" />\n'),(e=c(t))&&(i+="font-family: "+e+";"),(e=s(t))&&(i+="font-size: "+e+";"),(e=u(t))&&(i+="color: "+e+";"),n+="</head>\n<body"+(i?' style="'+i+'"':"")+">\n"},D=function(l,o,a){l.on("BeforeSetContent",function(t){!function(t,e,n,i){var r,l,o,a,c="",s=t.dom;if(!(i.selection||(o=w(t.settings.protect,i.content),"raw"===i.format&&e.get()||i.source_view&&h(t)))){0!==o.length||i.source_view||(o=g.trim(e.get())+"\n"+g.trim(o)+"\n"+g.trim(n.get())),-1!==(r=(o=o.replace(/<(\/?)BODY/gi,"<$1body")).indexOf("<body"))?(r=o.indexOf(">",r),e.set(T(o.substring(0,r+1))),-1===(l=o.indexOf("</body",r))&&(l=o.length),i.content=g.trim(o.substring(r+1,l)),n.set(T(o.substring(l)))):(e.set(O(t)),n.set("\n</body>\n</html>")),a=_(e.get()),P(a.getAll("style"),function(t){t.firstChild&&(c+=t.firstChild.value)});var u=a.getAll("body")[0];u&&s.setAttribs(t.getBody(),{style:u.attr("style")||"",dir:u.attr("dir")||"",vLink:u.attr("vlink")||"",link:u.attr("link")||"",aLink:u.attr("alink")||""}),s.remove("fullpage_styles");var d=t.getDoc().getElementsByTagName("head")[0];c&&s.add(d,"style",{id:"fullpage_styles"}).appendChild(m.document.createTextNode(c));var f={};g.each(d.getElementsByTagName("link"),function(t){"stylesheet"===t.rel&&t.getAttribute("data-mce-fullpage")&&(f[t.href]=t)}),g.each(a.getAll("link"),function(t){var e=t.attr("href");if(!e)return!0;f[e]||"stylesheet"!==t.attr("rel")||s.add(d,"link",{rel:"stylesheet",text:"text/css",href:e,"data-mce-fullpage":"1"}),delete f[e]}),g.each(f,function(t){t.parentNode.removeChild(t)})}}(l,o,a,t)}),l.on("GetContent",function(t){var e,n,i,r;e=l,n=o.get(),i=a.get(),(r=t).selection||r.source_view&&h(e)||(r.content=A(g.trim(n)+"\n"+g.trim(r.content)+"\n"+g.trim(i)))})},E=function(t){t.ui.registry.addButton("fullpage",{tooltip:"Metadata and document properties",icon:"document-properties",onAction:function(){t.execCommand("mceFullPageProperties")}}),t.ui.registry.addMenuItem("fullpage",{text:"Metadata and document properties",icon:"document-properties",onAction:function(){t.execCommand("mceFullPageProperties")}})};t.add("fullpage",function(t){var e=i(""),n=i("");k(t,e),E(t),D(t,e,n)}),function z(){}}(window);
