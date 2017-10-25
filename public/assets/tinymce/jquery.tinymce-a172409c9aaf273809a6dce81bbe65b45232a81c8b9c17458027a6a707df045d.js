!function(){var n={},e=function(e){for(var t=n[e],r=t.deps,a=t.defn,o=r.length,c=new Array(o),u=0;u<o;++u)c[u]=i(r[u]);var f=a.apply(null,c);if(void 0===f)throw"module ["+e+"] returned undefined";t.instance=f},t=function(e,t,i){if("string"!=typeof e)throw"module id must be a string";if(void 0===t)throw"no dependencies for "+e;if(void 0===i)throw"no definition function for "+e;n[e]={deps:t,defn:i,instance:void 0}},i=function(t){var i=n[t];if(void 0===i)throw"module ["+t+"] was undefined";return void 0===i.instance&&e(t),i.instance},r=function(n,e){for(var t=n.length,r=new Array(t),a=0;a<t;++a)r[a]=i(n[a]);e.apply(null,r)};({}).bolt={module:{api:{define:t,require:r,demand:i}}};var a=t,o=function(n,e){a(n,[],function(){return e})};o("1",document),o("2",window),a("0",["1","2"],function(n,e){return function(t){var i,r,a,o,c,u=[];c=t||e,o=c.jQuery;var f=function(){return c.tinymce};o.fn.tinymce=function(t){var i,s,d,p=this,v="";if(!p.length)return p;if(!t)return f()?f().get(p[0].id):null;p.css("visibility","hidden");var h=function(){var n=[],e=0;a||(l(),a=!0),p.each(function(i,r){var a,o=r.id,c=t.oninit;o||(r.id=o=f().DOM.uniqueId()),f().get(o)||(a=f().createEditor(o,t),n.push(a),a.on("init",function(){var t,i=c;p.css("visibility",""),c&&++e==n.length&&("string"==typeof i&&(t=-1===i.indexOf(".")?null:f().resolve(i.replace(/\.\w+$/,"")),i=f().resolve(i)),i.apply(t||f(),n))}))}),o.each(n,function(n,e){e.render()})};if(c.tinymce||r||!(i=t.script_url))1===r?u.push(h):h();else{r=1,s=i.substring(0,i.lastIndexOf("/")),-1!=i.indexOf(".min")&&(v=".min"),c.tinymce=c.tinyMCEPreInit||{base:s,suffix:v},-1!=i.indexOf("gzip")&&(d=t.language||"en",i=i+(/\?/.test(i)?"&":"?")+"js=true&core=true&suffix="+escape(v)+"&themes="+escape(t.theme||"modern")+"&plugins="+escape(t.plugins||"")+"&languages="+(d||""),c.tinyMCE_GZ||(c.tinyMCE_GZ={start:function(){var n=function(n){f().ScriptLoader.markDone(f().baseURI.toAbsolute(n))};n("langs/"+d+".js"),n("themes/"+t.theme+"/theme"+v+".js"),n("themes/"+t.theme+"/langs/"+d+".js"),o.each(t.plugins.split(","),function(e,t){t&&(n("plugins/"+t+"/plugin"+v+".js"),n("plugins/"+t+"/langs/"+d+".js"))})},end:function(){}}));var m=n.createElement("script");m.type="text/javascript",m.onload=m.onreadystatechange=function(n){n=n||e.event,2===r||"load"!=n.type&&!/complete|loaded/.test(m.readyState)||(f().dom.Event.domLoaded=1,r=2,t.script_loaded&&t.script_loaded(),h(),o.each(u,function(n,e){e()}))},m.src=i,n.body.appendChild(m)}return p},o.extend(o.expr[":"],{tinymce:function(n){var e;return!!(n.id&&"tinymce"in c&&(e=f().get(n.id))&&e.editorManager===f())}});var l=function(){var n=function(n){"remove"===n&&this.each(function(n,e){var i=t(e);i&&i.remove()}),this.find("span.mceEditor,div.mceEditor").each(function(n,e){var t=f().get(e.id.replace(/_parent$/,""));t&&t.remove()})},e=function(e){var t,i=this;if(null!=e)n.call(i),i.each(function(n,t){var i;(i=f().get(t.id))&&i.setContent(e)});else if(i.length>0&&(t=f().get(i[0].id)))return t.getContent()},t=function(n){var e=null;return n&&n.id&&c.tinymce&&(e=f().get(n.id)),e},r=function(n){return!!(n&&n.length&&c.tinymce&&n.is(":tinymce"))},a={};o.each(["text","html","val"],function(n,c){var u=a[c]=o.fn[c],f="text"===c;o.fn[c]=function(n){var a=this;if(!r(a))return u.apply(a,arguments);if(n!==i)return e.call(a.filter(":tinymce"),n),u.apply(a.not(":tinymce"),arguments),a;var c="",l=arguments;return(f?a:a.eq(0)).each(function(n,e){var i=t(e);c+=i?f?i.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):i.getContent({save:!0}):u.apply(o(e),l)}),c}}),o.each(["append","prepend"],function(n,e){var c=a[e]=o.fn[e],u="prepend"===e;o.fn[e]=function(n){var e=this;return r(e)?n!==i?("string"==typeof n&&e.filter(":tinymce").each(function(e,i){var r=t(i);r&&r.setContent(u?n+r.getContent():r.getContent()+n)}),c.apply(e.not(":tinymce"),arguments),e):void 0:c.apply(e,arguments)}}),o.each(["remove","replaceWith","replaceAll","empty"],function(e,t){var i=a[t]=o.fn[t];o.fn[t]=function(){return n.call(this,t),i.apply(this,arguments)}}),a.attr=o.fn.attr,o.fn.attr=function(n,c){var u=this,f=arguments;if(!n||"value"!==n||!r(u))return a.attr.apply(u,f);if(c!==i)return e.call(u.filter(":tinymce"),c),a.attr.apply(u.not(":tinymce"),f),u;var l=u[0],s=t(l);return s?s.getContent({save:!0}):a.attr.apply(o(l),f)}}}}),i("0")()}();