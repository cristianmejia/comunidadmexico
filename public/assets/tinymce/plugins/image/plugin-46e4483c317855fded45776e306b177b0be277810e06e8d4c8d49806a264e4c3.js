!function(s){"use strict";function l(u){var n=function(e,r,i,n){var o,t;(o=function a(){return new(X.getOrDie("XMLHttpRequest"))}()).open("POST",u.url),o.withCredentials=u.credentials,o.upload.onprogress=function(e){n(e.loaded/e.total*100)},o.onerror=function(){i("Image upload failed due to a XHR Transport error. Code: "+o.status)},o.onload=function(){var e,n,t;o.status<200||300<=o.status?i("HTTP Error: "+o.status):(e=JSON.parse(o.responseText))&&"string"==typeof e.location?r((n=u.basePath,t=e.location,n?n.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t)):i("Invalid JSON: "+o.responseText)},(t=new s.FormData).append("file",e.blob(),e.filename()),o.send(t)};return u=Q.extend({credentials:!1,handler:n},u),{upload:function(e){return u.url||u.handler!==n?(t=e,r=u.handler,new K(function(e,n){try{r(t,e,n,rn)}catch(i){n(i.message)}})):K.reject("Upload url missing from the settings.");var t,r}}}var e,n,i,t,a,u,c,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]},h=function(e){return function(){return e}},f=function(e){return e},d=h(!1),m=h(!0),g=d,p=m,v=function(){return b},b=(t={fold:function(e){return e()},is:g,isSome:g,isNone:p,getOr:i=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:i,orThunk:n,map:v,ap:v,each:function(){},bind:v,flatten:v,exists:g,forall:p,filter:v,equals:e=function(e){return e.isNone()},equals_:e,toArray:function(){return[]},toString:h("none()")},Object.freeze&&Object.freeze(t),t),y=function(t){var e=function(){return t},n=function(){return i},r=function(e){return e(t)},i={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:p,isNone:g,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return y(e(t))},ap:function(e){return e.fold(v,function(e){return y(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?i:b},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(g,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return i},w={some:y,none:v,from:function(e){return null===e||e===undefined?b:y(e)}},O=function(n){return function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&Array.prototype.isPrototypeOf(e)?"array":"object"===n&&String.prototype.isPrototypeOf(e)?"string":n}(e)===n}},S=O("string"),N=O("object"),x=O("function"),T=O("number"),E=function(e,n){for(var t=0,r=e.length;t<r;t++)n(e[t],t,e)},D=Array.prototype.push,A=function(e){for(var n=[],t=0,r=e.length;t<r;++t){if(!Array.prototype.isPrototypeOf(e[t]))throw new Error("Arr.flatten item "+t+" was not an array, input: "+e);D.apply(n,e[t])}return n},C=(Array.prototype.slice,x(Array.from)&&Array.from,function(){return(C=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)}),_=function(e){var t=w.none(),n=[],r=function(e){i()?a(e):n.push(e)},i=function(){return t.isSome()},o=function(e){E(e,a)},a=function(n){t.each(function(e){s.setTimeout(function(){n(e)},0)})};return e(function(e){t=w.some(e),o(n),n=[]}),{get:r,map:function(t){return _(function(n){r(function(e){n(t(e))})})},isReady:i}},I={nu:_,pure:function(n){return _(function(e){e(n)})}},R=function(n){var i=function(e){var r;n((r=e,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=this;s.setTimeout(function(){r.apply(t,e)},0)}))},t=function(){return I.nu(i)};return{map:function(r){return R(function(t){i(function(e){var n=r(e);t(n)})})},bind:function(t){return R(function(n){i(function(e){t(e).get(n)})})},anonBind:function(n){return R(function(e){i(function(){n.get(e)})})},toLazy:t,toCached:function(){var n=null;return R(function(e){null===n&&(n=t()),n.get(e)})},get:i}},L={nu:R,pure:function(n){return R(function(e){e(n)})}},U=function(t){return{is:function(e){return t===e},isValue:m,isError:d,getOr:h(t),getOrThunk:h(t),getOrDie:h(t),or:function(){return U(t)},orThunk:function(){return U(t)},fold:function(e,n){return n(t)},map:function(e){return U(e(t))},mapError:function(){return U(t)},each:function(e){e(t)},bind:function(e){return e(t)},exists:function(e){return e(t)},forall:function(e){return e(t)},toOption:function(){return w.some(t)}}},P=function(n){return{is:d,isValue:d,isError:m,getOr:f,getOrThunk:function(e){return e()},getOrDie:function(){return e=String(n),function(){throw new Error(e)}();var e},or:function(e){return e},orThunk:function(e){return e()},fold:function(e){return e(n)},map:function(){return P(n)},mapError:function(e){return P(e(n))},each:o,bind:function(){return P(n)},exists:d,forall:m,toOption:w.none}},k={value:U,error:P},M=function(o){return C({},o,{toCached:function(){return M(o.toCached())},bindFuture:function(n){return M(o.bind(function(e){return e.fold(function(e){return L.pure(k.error(e))},function(e){return n(e)})}))},bindResult:function(n){return M(o.map(function(e){return e.bind(n)}))},mapResult:function(n){return M(o.map(function(e){return e.map(n)}))},mapError:function(n){return M(o.map(function(e){return e.mapError(n)}))},foldResult:function(n,t){return o.map(function(e){return e.fold(n,t)})},withTimeout:function(e,i){return M(L.nu(function(n){var t=!1,r=s.setTimeout(function(){t=!0,n(k.error(i()))},e);o.get(function(e){t||(s.clearTimeout(r),n(e))})}))}})},j=function(e){return M(L.nu(e))},z=Object.prototype.hasOwnProperty,B=function(a){return function(){for(var e=new Array(arguments.length),n=0;n<e.length;n++)e[n]=arguments[n];if(0===e.length)throw new Error("Can't merge zero objects");for(var t={},r=0;r<e.length;r++){var i=e[r];for(var o in i)z.call(i,o)&&(t[o]=a(t[o],i[o]))}return t}},F=B(function(e,n){return N(e)&&N(n)?F(e,n):n}),H=B(function(e,n){return n}),W="undefined"!=typeof s.window?s.window:Function("return this;")(),G=function(e,r){return function(e){for(var n=r!==undefined&&null!==r?r:W,t=0;t<e.length&&n!==undefined&&null!==n;++t)n=n[e[t]];return n}(e.split("."))},X={getOrDie:function(e,n){var t=G(e,n);if(t===undefined||null===t)throw e+" not available on this browser";return t}},$=function(){return X.getOrDie("URL")},q=function(e){return $().createObjectURL(e)},V=function(e){$().revokeObjectURL(e)},J=function(e){var n=e.imageList.map(function(e){return{name:"images",type:"selectbox",label:"Image list",items:e}}),t=e.classList.map(function(e){return{name:"classes",type:"selectbox",label:"Class",items:e}});return A([[{name:"src",type:"urlinput",filetype:"image",label:"Source"}],n.toArray(),e.hasDescription?[{name:"alt",type:"input",label:"Image description"}]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{type:"grid",columns:2,items:A([t.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]])},Y=function(e){return{title:"General",items:J(e)}},Z=J,K=tinymce.util.Tools.resolve("tinymce.util.Promise"),Q=tinymce.util.Tools.resolve("tinymce.util.Tools"),ee=tinymce.util.Tools.resolve("tinymce.util.XHR"),ne=function(e){return!1!==e.settings.image_dimensions},te=function(e){return!0===e.settings.image_advtab},re=function(e){return e.getParam("image_prepend_url","")},ie=function(e){return e.getParam("image_class_list")},oe=function(e){return!1!==e.settings.image_description},ae=function(e){return!0===e.settings.image_title},ue=function(e){return!0===e.settings.image_caption},se=function(e){return e.getParam("image_list",!1)},ce=function(e){return!!e.getParam("images_upload_url",!1)},le=function(e){return!!e.getParam("images_upload_handler",!1)},fe=function(e){return e.getParam("images_upload_url")},de=function(e){return e.getParam("images_upload_handler")},me=function(e){return e.getParam("images_upload_base_path")},ge=function(e){return e.getParam("images_upload_credentials")},pe=function(e,n){return Math.max(parseInt(e,10),parseInt(n,10))},he=function(e,n){function t(e){r.parentNode&&r.parentNode.removeChild(r),n(e)}var r=s.document.createElement("img");r.onload=function(){var e={width:pe(r.width,r.clientWidth),height:pe(r.height,r.clientHeight)};t(k.value(e))},r.onerror=function(){t(k.error(undefined))};var i=r.style;i.visibility="hidden",i.position="fixed",i.bottom=i.left="0px",i.width=i.height="auto",s.document.body.appendChild(r),r.src=e},ve=function(e){return e&&(e=e.replace(/px$/,"")),e},be=function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},ye=function(e){if(e.margin){var n=String(e.margin).split(" ");switch(n.length){case 1:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[0],e["margin-bottom"]=e["margin-bottom"]||n[0],e["margin-left"]=e["margin-left"]||n[0];break;case 2:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[1],e["margin-bottom"]=e["margin-bottom"]||n[0],e["margin-left"]=e["margin-left"]||n[1];break;case 3:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[1],e["margin-bottom"]=e["margin-bottom"]||n[2],e["margin-left"]=e["margin-left"]||n[1];break;case 4:e["margin-top"]=e["margin-top"]||n[0],e["margin-right"]=e["margin-right"]||n[1],e["margin-bottom"]=e["margin-bottom"]||n[2],e["margin-left"]=e["margin-left"]||n[3]}delete e.margin}return e},we=function(e,n){var t=se(e);"string"==typeof t?ee.send({url:t,success:function(e){n(JSON.parse(e))}}):"function"==typeof t?t(n):n(t)},Oe=function(e,n,t){function r(){t.onload=t.onerror=null,e.selection&&(e.selection.select(t),e.nodeChanged())}t.onload=function(){n.width||n.height||!ne(e)||e.dom.setAttribs(t,{width:t.clientWidth,height:t.clientHeight}),r()},t.onerror=r},Se=function(i){return new K(function(e,n){var t=function r(){return new(X.getOrDie("FileReader"))}();t.onload=function(){e(t.result)},t.onerror=function(){n(t.error.message)},t.readAsDataURL(i)})},Ne=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils").DOM,xe=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?ve(e.style.marginLeft):""},Te=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?ve(e.style.marginTop):""},Ee=function(e){return e.style.borderWidth?ve(e.style.borderWidth):""},De=function(e,n){return e.hasAttribute(n)?e.getAttribute(n):""},Ae=function(e,n){return e.style[n]?e.style[n]:""},Ce=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},_e=function(e,n,t){e.setAttribute(n,t)},Ie=function(e){var n,t,r,i;Ce(e)?(i=(r=e).parentNode,Ne.insertAfter(r,i),Ne.remove(i)):(n=e,t=Ne.create("figure",{"class":"image"}),Ne.insertAfter(t,n),t.appendChild(n),t.appendChild(Ne.create("figcaption",{contentEditable:!0},"Caption")),t.contentEditable="false")},Re=function(e,n){var t=e.getAttribute("style"),r=n(null!==t?t:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},Le=function(e,r){return function(e,n,t){e.style[n]?(e.style[n]=be(t),Re(e,r)):_e(e,n,t)}},Ue=function(e,n){return e.style[n]?ve(e.style[n]):De(e,n)},Pe=function(e,n){var t=be(n);e.style.marginLeft=t,e.style.marginRight=t},ke=function(e,n){var t=be(n);e.style.marginTop=t,e.style.marginBottom=t},Me=function(e,n){var t=be(n);e.style.borderWidth=t},je=function(e,n){e.style.borderStyle=n},ze=function(e){return"FIGURE"===e.nodeName},Be=function(e,n){var t=s.document.createElement("img");return _e(t,"style",n.style),(xe(t)||""!==n.hspace)&&Pe(t,n.hspace),(Te(t)||""!==n.vspace)&&ke(t,n.vspace),(Ee(t)||""!==n.border)&&Me(t,n.border),(Ae(t,"borderStyle")||""!==n.borderStyle)&&je(t,n.borderStyle),e(t.getAttribute("style"))},Fe=function(e,n){return{src:De(n,"src"),alt:De(n,"alt"),title:De(n,"title"),width:Ue(n,"width"),height:Ue(n,"height"),"class":De(n,"class"),style:e(De(n,"style")),caption:Ce(n),hspace:xe(n),vspace:Te(n),border:Ee(n),borderStyle:Ae(n,"borderStyle")}},He=function(e,n,t,r,i){t[r]!==n[r]&&i(e,r,t[r])},We=function(r,i){return function(e,n,t){r(e,t),Re(e,i)}},Ge=function(e,n,t){var r=Fe(e,t);He(t,r,n,"caption",function(e){return Ie(e)}),He(t,r,n,"src",_e),He(t,r,n,"alt",_e),He(t,r,n,"title",_e),He(t,r,n,"width",Le(0,e)),He(t,r,n,"height",Le(0,e)),He(t,r,n,"class",_e),He(t,r,n,"style",We(function(e,n){return _e(e,"style",n)},e)),He(t,r,n,"hspace",We(Pe,e)),He(t,r,n,"vspace",We(ke,e)),He(t,r,n,"border",We(Me,e)),He(t,r,n,"borderStyle",We(je,e))},Xe=function(e,n){var t=e.dom.styles.parse(n),r=ye(t),i=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(i)},$e=function(e){var n=e.selection.getNode(),t=e.dom.getParent(n,"figure.image");return t?e.dom.select("img",t)[0]:n&&("IMG"!==n.nodeName||n.getAttribute("data-mce-object")||n.getAttribute("data-mce-placeholder"))?null:n},qe=function(n,e){var t=n.dom,r=t.getParent(e.parentNode,function(e){return n.schema.getTextBlockElements()[e.nodeName]},n.getBody());return r?t.split(r,e):e},Ve=function(n,e){var t=function(e,n){var t=s.document.createElement("img");if(Ge(e,H(n,{caption:!1}),t),_e(t,"alt",n.alt),n.caption){var r=Ne.create("figure",{"class":"image"});return r.appendChild(t),r.appendChild(Ne.create("figcaption",{contentEditable:!0},"Caption")),r.contentEditable="false",r}return t}(function(e){return Xe(n,e)},e);n.dom.setAttrib(t,"data-mce-id","__mcenew"),n.focus(),n.selection.setContent(t.outerHTML);var r=n.dom.select('*[data-mce-id="__mcenew"]')[0];if(n.dom.setAttrib(r,"data-mce-id",null),ze(r)){var i=qe(n,r);n.selection.select(i)}else n.selection.select(r)},Je=function(e,n){var t=$e(e);t?n.src?function(n,e){var t,r=$e(n);if(Ge(function(e){return Xe(n,e)},e,r),t=r,n.dom.setAttrib(t,"src",t.getAttribute("src")),ze(r.parentNode)){var i=r.parentNode;qe(n,i),n.selection.select(r.parentNode)}else n.selection.select(r),Oe(n,e,r)}(e,n):function(e,n){if(n){var t=e.dom.is(n.parentNode,"figure.image")?n.parentNode:n;e.dom.remove(t),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}}(e,t):n.src&&Ve(e,n)},Ye=function(e){return S(e.value)?e.value:""},Ze=function(e,i){var o=[];return Q.each(e,function(e){var n=S(e.text)?e.text:S(e.title)?e.title:"";if(e.menu!==undefined){var t=Ze(e.menu,i);o.push({text:n,items:t})}else{var r=i(e);o.push({text:n,value:r})}}),o},Ke=function(n){return void 0===n&&(n=Ye),function(e){return e?w.from(e).map(function(e){return Ze(e,n)}):w.none()}},Qe=function(e,t){return function(e,n){for(var t=0;t<e.length;t++){var r=n(e[t],t);if(r.isSome())return r}return w.none()}(e,function(e){return n=e,Object.prototype.hasOwnProperty.call(n,"items")?Qe(e.items,t):e.value===t?w.some(e):w.none();var n})},en=Ke,nn=function(e){return Ke(Ye)(e)},tn=function(e,n){return e.bind(function(e){return Qe(e,n)})},rn=function(){},on=function(){return{title:"Advanced",items:[{type:"input",label:"Style",name:"style"},{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace"},{type:"input",label:"Horizontal space",name:"hspace"},{type:"input",label:"Border width",name:"border"},{type:"selectbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}},an=function(t){var n,e,r=en(function(e){return t.convertURL(e.value||e.url,"src")}),i=L.nu(function(n){we(t,function(e){n(r(e).map(function(e){return A([[{text:"None",value:""}],e])}))})}),o=nn(ie(t)),a=te(t),u=ce(t),s=le(t),c=(e=$e(n=t))?Fe(function(e){return Xe(n,e)},e):{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""},l=oe(t),f=ae(t),d=ne(t),m=ue(t),g=fe(t),p=me(t),h=ge(t),v=de(t),b=w.some(re(t)).filter(function(e){return S(e)&&0<e.length});return i.map(function(e){return{image:c,imageList:e,classList:o,hasAdvTab:a,hasUploadUrl:u,hasUploadHandler:s,hasDescription:l,hasImageTitle:f,hasDimensions:d,hasImageCaption:m,url:g,basePath:p,credentials:h,handler:v,prependURL:b}})},un=function(){return{title:"Upload",items:[{type:"dropzone",name:"fileinput"}]}},sn=function(e){return{src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e["class"],caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[]}},cn=function(e){return{src:e.src.value,alt:e.alt,title:e.title,width:e.dimensions.width,height:e.dimensions.height,"class":e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle}},ln=function(e,n){var t,r,i=n.getData();(t=e,r=i.src.value,/^(?:[a-zA-Z]+:)?\/\//.test(r)?w.none():t.prependURL.bind(function(e){return r.substring(0,e.length)!==e?w.some(e+r):w.none()})).each(function(e){n.setData({src:{value:e,meta:i.src.meta}})})},fn=function(e,n){(function(e,n){var t=n.src.meta;if(t===undefined)return w.none();var r=F({},n);return e.hasDescription&&S(t.alt)&&(r.alt=t.alt),e.hasImageTitle&&S(t.title)&&(r.title=t.title),e.hasDimensions&&(S(t.width)&&(r.dimensions.width=t.width),S(t.height)&&(r.dimensions.height=t.height)),S(t["class"])&&tn(e.classList,t["class"]).each(function(e){r.classes=e.value}),e.hasAdvTab&&(S(t.vspace)&&(r.vspace=t.vspace),S(t.border)&&(r.border=t.border),S(t.hspace)&&(r.hspace=t.hspace),S(t.borderstyle)&&(r.borderstyle=t.borderstyle)),w.some(r)})(e,n.getData()).each(function(e){return n.setData(e)})},dn=function(e,n,t,r){var i,o,a,u,s,c,l,f,d,m,g,p;ln(n,r),fn(n,r),i=e,o=n,a=t,c=(s=(u=r).getData()).src.value,(l=s.src.meta||{}).width||l.height||!o.hasDimensions||i.imageSize(c).get(function(e){e.each(function(e){a.open&&u.setData({dimensions:e})})}),f=n,d=t,g=(m=r).getData(),p=tn(f.imageList,g.src.value),d.prevImage=p,m.setData({images:p.map(function(e){return e.value}).getOr("")})},mn=function(e,n,t){var r,i,o,a,u,s=ye(e(t.style)),c=F({},t);return c.vspace=(r=s)["margin-top"]&&r["margin-bottom"]&&r["margin-top"]===r["margin-bottom"]?ve(String(r["margin-top"])):"",c.hspace=(i=s)["margin-right"]&&i["margin-left"]&&i["margin-right"]===i["margin-left"]?ve(String(i["margin-right"])):"",c.border=(o=s)["border-width"]?ve(String(o["border-width"])):"",c.borderstyle=(a=s)["border-style"]?String(a["border-style"]):"",c.style=(u=n)(e(u(s))),c},gn=function(a,u,s,c){var e,n=c.getData();c.block("Uploading image"),(e=n.fileinput,0===e.length?w.none():w.some(e[0])).fold(function(){c.unblock()},function(t){var r=q(t),i=l({url:u.url,basePath:u.basePath,credentials:u.credentials,handler:u.handler}),o=function(){c.unblock(),V(r)};Se(t).then(function(e){var n=a.createBlobCache(t,r,e);i.upload(n).then(function(e){c.setData({src:{value:e,meta:{}}}),c.showTab("General"),dn(a,u,s,c),o()})["catch"](function(e){o(),a.alertErr(c,e)})})})},pn=function(h,v,b){return function(e,n){var t,r,i,o,a,u,s,c,l,f,d,m,g,p;"src"===n.name?dn(h,v,b,e):"images"===n.name?(l=h,f=v,d=b,g=(m=e).getData(),(p=tn(f.imageList,g.images)).each(function(e){""===g.alt||d.prevImage.map(function(e){return e.text===g.alt}).getOr(!1)?""===e.value?m.setData({src:e,alt:d.prevAlt}):m.setData({src:e,alt:e.text}):m.setData({src:e})}),d.prevImage=p,dn(l,f,d,m)):"alt"===n.name?b.prevAlt=e.getData().alt:"style"===n.name?(a=h,s=(u=e).getData(),c=mn(a.parseStyle,a.serializeStyle,s),u.setData(c)):"vspace"===n.name||"hspace"===n.name||"border"===n.name||"borderstyle"===n.name?(t=h,r=e,i=F(sn(v.image),r.getData()),o=Be(t.normalizeCss,cn(i)),r.setData({style:o})):"fileinput"===n.name&&gn(h,v,b,e)}},hn=function(o){return function(e){var n,t,r,i={prevImage:tn((n=e).imageList,n.image.src),prevAlt:n.image.alt,open:!0};return{title:"Insert/Edit Image",size:"normal",body:(r=e,r.hasAdvTab||r.hasUploadUrl||r.hasUploadHandler?{type:"tabpanel",tabs:A([[Y(r)],r.hasAdvTab?[on(r)]:[],r.hasUploadUrl||r.hasUploadHandler?[un(r)]:[]])}:{type:"panel",items:Z(r)}),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:sn(e.image),onSubmit:o.onSubmit(e),onChange:pn(o,e,i),onClose:(t=i,function(){t.open=!1})}}},vn=function(n){var t,r,i,o,a,u,s,e={onSubmit:(s=n,function(t){return function(e){var n=F(sn(t.image),e.getData());s.undoManager.transact(function(){Je(s,cn(n))}),s.editorUpload.uploadImagesAuto(),e.close()}}),imageSize:(u=n,function(e){return j(function(t){he(u.documentBaseURI.toAbsolute(e),function(e){var n=e.bind(function(e){return(S(e.width)||T(e.width))&&(S(e.height)||T(e.height))?k.value({width:String(e.width),height:String(e.height)}):k.error(undefined)});t(n)})})}),createBlobCache:(a=n,function(e,n,t){return a.editorUpload.blobCache.create({blob:e,blobUri:n,name:e.name?e.name.replace(/\.[^\.]+$/,""):null,base64:t.split(",")[1]})}),alertErr:(o=n,function(e,n){o.windowManager.alert(n,e.close)}),normalizeCss:(i=n,function(e){return Xe(i,e)}),parseStyle:(r=n,function(e){return r.dom.parseStyle(e)}),serializeStyle:(t=n,function(e,n){return t.dom.serializeStyle(e,n)})};return{open:function(){return an(n).map(hn(e)).get(function(e){n.windowManager.open(e)})}}},bn=function(e){e.addCommand("mceImage",vn(e).open)},yn=function(o){return function(e){for(var n,t,r=e.length,i=function(e){e.attr("contenteditable",o?"true":null)};r--;)(t=(n=e[r]).attr("class"))&&/\bimage\b/.test(t)&&(n.attr("contenteditable",o?"false":null),Q.each(n.getAll("figcaption"),i))}},wn=function(e){e.on("preInit",function(){e.parser.addNodeFilter("figure",yn(!0)),e.serializer.addNodeFilter("figure",yn(!1))})},On=function(e){if(null===e||e===undefined)throw new Error("Node cannot be null or undefined");return{dom:h(e)}},Sn={fromHtml:function(e,n){var t=(n||s.document).createElement("div");if(t.innerHTML=e,!t.hasChildNodes()||1<t.childNodes.length)throw s.console.error("HTML does not have a single root node",e),new Error("HTML must have a single root node");return On(t.childNodes[0])},fromTag:function(e,n){var t=(n||s.document).createElement(e);return On(t)},fromText:function(e,n){var t=(n||s.document).createTextNode(e);return On(t)},fromDom:On,fromPoint:function(e,n,t){var r=e.dom();return w.from(r.elementFromPoint(n,t)).map(On)}},Nn=(s.Node.ATTRIBUTE_NODE,s.Node.CDATA_SECTION_NODE,s.Node.COMMENT_NODE,s.Node.DOCUMENT_NODE,s.Node.DOCUMENT_TYPE_NODE,s.Node.DOCUMENT_FRAGMENT_NODE,s.Node.ELEMENT_NODE,s.Node.TEXT_NODE,s.Node.PROCESSING_INSTRUCTION_NODE,s.Node.ENTITY_REFERENCE_NODE,s.Node.ENTITY_NODE,s.Node.NOTATION_NODE,function(e,n){var t=function(e,n){for(var t=0;t<e.length;t++){var r=e[t];if(r.test(n))return r}return undefined}(e,n);if(!t)return{major:0,minor:0};var r=function(e){return Number(n.replace(t,"$"+e))};return Tn(r(1),r(2))}),xn=function(){return Tn(0,0)},Tn=function(e,n){return{major:e,minor:n}},En={nu:Tn,detect:function(e,n){var t=String(n).toLowerCase();return 0===e.length?xn():Nn(e,t)},unknown:xn},Dn="Firefox",An=function(e,n){return function(){return n===e}},Cn=function(e){var n=e.current;return{current:n,version:e.version,isEdge:An("Edge",n),isChrome:An("Chrome",n),isIE:An("IE",n),isOpera:An("Opera",n),isFirefox:An(Dn,n),isSafari:An("Safari",n)}},_n={unknown:function(){return Cn({current:undefined,version:En.unknown()})},nu:Cn,edge:h("Edge"),chrome:h("Chrome"),ie:h("IE"),opera:h("Opera"),firefox:h(Dn),safari:h("Safari")},In="Windows",Rn="Android",Ln="Solaris",Un="FreeBSD",Pn=function(e,n){return function(){return n===e}},kn=function(e){var n=e.current;return{current:n,version:e.version,isWindows:Pn(In,n),isiOS:Pn("iOS",n),isAndroid:Pn(Rn,n),isOSX:Pn("OSX",n),isLinux:Pn("Linux",n),isSolaris:Pn(Ln,n),isFreeBSD:Pn(Un,n)}},Mn={unknown:function(){return kn({current:undefined,version:En.unknown()})},nu:kn,windows:h(In),ios:h("iOS"),android:h(Rn),linux:h("Linux"),osx:h("OSX"),solaris:h(Ln),freebsd:h(Un)},jn=function(e,n){var t=String(n).toLowerCase();return function(e,n){for(var t=0,r=e.length;t<r;t++){var i=e[t];if(n(i,t,e))return w.some(i)}return w.none()}(e,function(e){return e.search(t)})},zn=function(e,t){return jn(e,t).map(function(e){var n=En.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Bn=function(e,t){return jn(e,t).map(function(e){var n=En.detect(e.versionRegexes,t);return{current:e.name,version:n}})},Fn=function(e,n){return-1!==e.indexOf(n)},Hn=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,Wn=function(n){return function(e){return Fn(e,n)}},Gn=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){return Fn(e,"edge/")&&Fn(e,"chrome")&&Fn(e,"safari")&&Fn(e,"applewebkit")}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,Hn],search:function(e){return Fn(e,"chrome")&&!Fn(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Fn(e,"msie")||Fn(e,"trident")}},{name:"Opera",versionRegexes:[Hn,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:Wn("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:Wn("firefox")},{name:"Safari",versionRegexes:[Hn,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Fn(e,"safari")||Fn(e,"mobile/"))&&Fn(e,"applewebkit")}}],Xn=[{name:"Windows",search:Wn("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Fn(e,"iphone")||Fn(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:Wn("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:Wn("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:Wn("linux"),versionRegexes:[]},{name:"Solaris",search:Wn("sunos"),versionRegexes:[]},{name:"FreeBSD",search:Wn("freebsd"),versionRegexes:[]}],$n={browsers:h(Gn),oses:h(Xn)},qn=function(e){var n,t,r,i,o,a,u,s,c,l,f,d=$n.browsers(),m=$n.oses(),g=zn(d,e).fold(_n.unknown,_n.nu),p=Bn(m,e).fold(Mn.unknown,Mn.nu);return{browser:g,os:p,deviceType:(t=g,r=e,i=(n=p).isiOS()&&!0===/ipad/i.test(r),o=n.isiOS()&&!i,a=n.isAndroid()&&3===n.version.major,u=n.isAndroid()&&4===n.version.major,s=i||a||u&&!0===/mobile/i.test(r),c=n.isiOS()||n.isAndroid(),l=c&&!s,f=t.isSafari()&&n.isiOS()&&!1===/safari/i.test(r),{isiPad:h(i),isiPhone:h(o),isTablet:h(s),isPhone:h(l),isTouch:h(c),isAndroid:n.isAndroid,isiOS:n.isiOS,isWebView:h(f)})}},Vn=((a=function(){var e=s.navigator.userAgent;return qn(e)},c=!1,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return c||(c=!0,u=a.apply(null,e)),u}()).browser.isIE(),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),function(o){o.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:vn(o).open,onSetup:function(e){return o.selection.selectorChangedWithUnbind("img:not([data-mce-object],[data-mce-placeholder]),figure.image",e.setActive).unbind}}),o.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:vn(o).open}),o.ui.registry.addContextMenu("image",{update:function(e){return ze(e)||"IMG"===e.nodeName?[(i=e,{text:"Image",icon:"image",onAction:function(){var e,n,t,r=((a=function(){var e=s.navigator.userAgent;return qn(e)},c=!1,function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return c||(c=!0,u=a.apply(null,e)),u}()).browser.isIE(),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]}("element","offset"),(n=e=Sn.fromDom(i),t=n.dom(),w.from(t.parentNode).map(Sn.fromDom)).filter(function(e){return"figure"===e.dom().nodeName.toLowerCase()}).getOr(e));o.selection.select(r.dom()),vn(o).open()}})]:[];var i}})});r.add("image",function(e){wn(e),Vn(e),bn(e)}),function Jn(){}}(window);