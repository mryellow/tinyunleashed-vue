(self.webpackChunk_tinymce_tinymce_vue=self.webpackChunk_tinymce_tinymce_vue||[]).push([[179],{"./.storybook/preview.js-generated-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,{__namedExportsOrder:()=>__namedExportsOrder,parameters:()=>parameters});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},__namedExportsOrder=["parameters"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return(0,ClientApi.uc)(value);case"argTypes":return(0,ClientApi.v9)(value);case"decorators":return value.forEach((function(decorator){return(0,ClientApi.$9)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return(0,ClientApi.HZ)(loader,!1)}));case"parameters":return(0,ClientApi.h1)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return(0,ClientApi.My)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return(0,ClientApi._C)(enhancer)}));case"render":return(0,ClientApi.$P)(value);case"globals":case"globalTypes":var v={};return v[key]=value,(0,ClientApi.h1)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./src/main/ts/ScriptLoader.ts":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.ScriptLoader=void 0;var Utils_1=__webpack_require__("./src/main/ts/Utils.ts"),createState=function createState(){return{listeners:[],scriptId:(0,Utils_1.uuid)("tiny-script"),scriptLoaded:!1}},ScriptLoader=function CreateScriptLoader(){var state=createState();return{load:function load(doc,url,callback){state.scriptLoaded?callback():(state.listeners.push(callback),doc.getElementById(state.scriptId)||function injectScriptTag(scriptId,doc,url,callback){var scriptTag=doc.createElement("script");scriptTag.referrerPolicy="origin",scriptTag.type="application/javascript",scriptTag.id=scriptId,scriptTag.src=url,scriptTag.addEventListener("load",(function handler(){scriptTag.removeEventListener("load",handler),callback()})),doc.head&&doc.head.appendChild(scriptTag)}(state.scriptId,doc,url,(function(){state.listeners.forEach((function(fn){return fn()})),state.scriptLoaded=!0})))},reinitialize:function reinitialize(){state=createState()}}}();exports.ScriptLoader=ScriptLoader},"./src/main/ts/TinyMCE.ts":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.getTinymce=void 0;exports.getTinymce=function getTinymce(){var global=function getGlobal(){return"undefined"!=typeof window?window:__webpack_require__.g}();return global&&global.tinymce?global.tinymce:null}},"./src/main/ts/Utils.ts":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.date.now.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNullOrUndefined=exports.mergePlugins=exports.isTextarea=exports.uuid=exports.isValidKey=exports.initEditor=exports.bindModelHandlers=exports.bindHandlers=void 0;var vue_1=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js"),validEvents=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],isValidKey=function isValidKey(key){return-1!==validEvents.map((function(event){return event.toLowerCase()})).indexOf(key.toLowerCase())};exports.isValidKey=isValidKey;var bindHandlers=function bindHandlers(initEvent,listeners,editor){Object.keys(listeners).filter(isValidKey).forEach((function(key){var handler=listeners[key];"function"==typeof handler&&("onInit"===key?handler(initEvent,editor):editor.on(key.substring(2),(function(e){return handler(e,editor)})))}))};exports.bindHandlers=bindHandlers;var bindModelHandlers=function bindModelHandlers(props,ctx,editor,modelValue){var modelEvents=props.modelEvents?props.modelEvents:null,normalizedEvents=Array.isArray(modelEvents)?modelEvents.join(" "):modelEvents;(0,vue_1.watch)(modelValue,(function(val,prevVal){editor&&"string"==typeof val&&val!==prevVal&&val!==editor.getContent({format:props.outputFormat})&&editor.setContent(val)})),editor.on(normalizedEvents||"change input undo redo",(function(){ctx.emit("update:modelValue",editor.getContent({format:props.outputFormat}))}))};exports.bindModelHandlers=bindModelHandlers;exports.initEditor=function initEditor(initEvent,props,ctx,editor,modelValue,content){editor.setContent(content()),ctx.attrs["onUpdate:modelValue"]&&bindModelHandlers(props,ctx,editor,modelValue),bindHandlers(initEvent,ctx.attrs,editor)};var unique=0;exports.uuid=function uuid(prefix){var time=Date.now();return prefix+"_"+Math.floor(1e9*Math.random())+ ++unique+String(time)};exports.isTextarea=function isTextarea(element){return null!==element&&"textarea"===element.tagName.toLowerCase()};var normalizePluginArray=function normalizePluginArray(plugins){return void 0===plugins||""===plugins?[]:Array.isArray(plugins)?plugins:plugins.split(" ")};exports.mergePlugins=function mergePlugins(initPlugins,inputPlugins){return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins))};exports.isNullOrUndefined=function isNullOrUndefined(value){return null==value}},"./src/main/ts/components/Editor.ts":function(__unused_webpack_module,exports,__webpack_require__){"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js");var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Editor=void 0;var ScriptLoader_1=__webpack_require__("./src/main/ts/ScriptLoader.ts"),TinyMCE_1=__webpack_require__("./src/main/ts/TinyMCE.ts"),Utils_1=__webpack_require__("./src/main/ts/Utils.ts"),EditorPropTypes_1=__webpack_require__("./src/main/ts/components/EditorPropTypes.ts"),vue_1=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js");exports.Editor=(0,vue_1.defineComponent)({props:EditorPropTypes_1.editorProps,setup:function setup(props,ctx){var conf=props.init?__assign({},props.init):{},_a=(0,vue_1.toRefs)(props),disabled=_a.disabled,modelValue=_a.modelValue,tagName=_a.tagName,element=(0,vue_1.ref)(null),vueEditor=null,elementId=props.id||(0,Utils_1.uuid)("tiny-vue"),inlineEditor=props.init&&props.init.inline||props.inline,modelBind=!!ctx.attrs["onUpdate:modelValue"],mounting=!0,initialValue=props.initialValue?props.initialValue:"",cache="",initWrapper=function initWrapper(){var content=function getContent(isMounting){return modelBind?function(){return(null==modelValue?void 0:modelValue.value)?modelValue.value:""}:function(){return isMounting?initialValue:cache}}(mounting),finalInit=__assign(__assign({},conf),{readonly:props.disabled,target:element.value,plugins:(0,Utils_1.mergePlugins)(conf.plugins,props.plugins),toolbar:props.toolbar||conf.toolbar,inline:inlineEditor,setup:function setup(editor){vueEditor=editor,editor.on("init",(function(e){return(0,Utils_1.initEditor)(e,props,ctx,editor,modelValue,content)})),"function"==typeof conf.setup&&conf.setup(editor)}});(0,Utils_1.isTextarea)(element.value)&&(element.value.style.visibility=""),(0,TinyMCE_1.getTinymce)().init(finalInit),mounting=!1};(0,vue_1.watch)(disabled,(function(disable){var _a;null!==vueEditor&&("function"==typeof(null===(_a=vueEditor.mode)||void 0===_a?void 0:_a.set)?vueEditor.mode.set(disable?"readonly":"design"):vueEditor.setMode(disable?"readonly":"design"))})),(0,vue_1.watch)(tagName,(function(_){var _a;modelBind||(cache=vueEditor.getContent()),null===(_a=(0,TinyMCE_1.getTinymce)())||void 0===_a||_a.remove(vueEditor),(0,vue_1.nextTick)((function(){return initWrapper()}))})),(0,vue_1.onMounted)((function(){if(null!==(0,TinyMCE_1.getTinymce)())initWrapper();else if(element.value&&element.value.ownerDocument){var channel=props.cloudChannel?props.cloudChannel:"6",apiKey=props.apiKey?props.apiKey:"no-api-key",scriptSrc=(0,Utils_1.isNullOrUndefined)(props.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(apiKey,"/tinymce/").concat(channel,"/tinymce.min.js"):props.tinymceScriptSrc;ScriptLoader_1.ScriptLoader.load(element.value.ownerDocument,scriptSrc,initWrapper)}})),(0,vue_1.onBeforeUnmount)((function(){null!==(0,TinyMCE_1.getTinymce)()&&(0,TinyMCE_1.getTinymce)().remove(vueEditor)})),inlineEditor||((0,vue_1.onActivated)((function(){mounting||initWrapper()})),(0,vue_1.onDeactivated)((function(){var _a;modelBind||(cache=vueEditor.getContent()),null===(_a=(0,TinyMCE_1.getTinymce)())||void 0===_a||_a.remove(vueEditor)})));return ctx.expose({rerender:function rerender(init){var _a;cache=vueEditor.getContent(),null===(_a=(0,TinyMCE_1.getTinymce)())||void 0===_a||_a.remove(vueEditor),conf=__assign(__assign({},conf),init),(0,vue_1.nextTick)((function(){return initWrapper()}))},getEditor:function getEditor(){return vueEditor}}),function(){return inlineEditor?function renderInline(ce,id,elementRef,tagName){return ce(tagName||"div",{id,ref:elementRef})}(vue_1.h,elementId,element,props.tagName):function renderIframe(ce,id,elementRef){return ce("textarea",{id,visibility:"hidden",ref:elementRef})}(vue_1.h,elementId,element)}}})},"./src/main/ts/components/EditorPropTypes.ts":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.editorProps=void 0,exports.editorProps={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function validator(prop){return"html"===prop||"text"===prop}}}},"./src/stories/Editor.stories.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.Disable=exports.Controlled=exports.Inline=exports.Iframe=void 0;var vue_1=__webpack_require__("./node_modules/vue/dist/vue.esm-bundler.js"),ScriptLoader_1=__webpack_require__("./src/main/ts/ScriptLoader.ts"),Editor_1=__webpack_require__("./src/main/ts/components/Editor.ts"),apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",content='\n<h2 style="text-align: center;">\n  TinyMCE provides a <span style="text-decoration: underline;">full-featured</span> rich text editing experience, and a featherweight download.\n</h2>\n<p style="text-align: center;">\n  <strong><span style="font-size: 14pt;"><span style="color: #7e8c8d; font-weight: 600;">No matter what you\'re building, TinyMCE has got you covered.</span></span></strong>\n</p>',lastChannel="5",getConf=function getConf(stringConf){var conf={};console.log("parsing: ",stringConf);try{conf=Function('"use strict";return ('+stringConf+")")()}catch(err){console.error("failed to parse configuration: ",err)}return conf},loadTiny=function loadTiny(currentArgs){var channel=currentArgs.channel||lastChannel;channel!==lastChannel&&(!function removeTiny(){delete window.tinymce,delete window.tinyMCE}(),ScriptLoader_1.ScriptLoader.reinitialize(),ScriptLoader_1.ScriptLoader.load(document,"https://cdn.tiny.cloud/1/".concat(apiKey,"/tinymce/").concat(channel,"/tinymce.min.js"),(function(){console.log("script ready")})),lastChannel=channel)};exports.default={title:"Editor",component:Editor_1.Editor,argTypes:{channel:{table:{defaultValue:{summary:"5"}},defaultValue:["5"],options:["5","5-dev","5-testing","6-dev","6-testing","6-stable"],control:{type:"select"}},conf:{defaultValue:"{height: 300}",control:{type:"text"}}},parameters:{previewTabs:{docs:{hidden:!0}},controls:{hideNoControlsWarning:!0}}};exports.Iframe=function Iframe(args){return{components:{Editor:Editor_1.Editor},setup:function setup(){(0,vue_1.onBeforeMount)((function(){loadTiny(args)}));var cc=args.channel||lastChannel,conf=getConf(args.conf);return console.log("conf: ",conf),{apiKey,content,cloudChannel:cc,conf}},template:'<div ><p>Ready</p><editor :api-key="apiKey" :initialValue="content" :cloud-channel="cloudChannel" :init="conf" /></div>'}};exports.Inline=function Inline(args){return{components:{Editor:Editor_1.Editor},setup:function setup(){(0,vue_1.onBeforeMount)((function(){loadTiny(args)}));var cc=args.channel||lastChannel,conf=getConf(args.conf);return{apiKey,content,cloudChannel:cc,conf}},template:'\n    <div style="padding-top: 100px;">\n      <editor\n        api-key="'.concat(apiKey,'"\n        v-model="content"\n        inline\n        :init="conf"\n      />\n    </div>')}};exports.Controlled=function Controlled(args){return{components:{Editor:Editor_1.Editor},setup:function setup(){(0,vue_1.onBeforeMount)((function(){loadTiny(args)}));var cc=args.channel||lastChannel,conf=getConf(args.conf),controlledContent=(0,vue_1.ref)(content);return{apiKey,content:controlledContent,cloudChannel:cc,conf,log:function log(e,editor){console.log(e)}}},template:'\n    <div>\n      <editor\n        api-key="'.concat(apiKey,'"\n        v-model="content"\n        @onBlur="log"\n        :init="conf"\n      />\n      <textarea\n        style="width: 100%;\n        height:200px;"\n        v-model="content"\n      ></textarea>\n      <div v-html="content"></div>\n    </div>')}};exports.Disable=function Disable(args){return{components:{Editor:Editor_1.Editor},setup:function setup(){(0,vue_1.onBeforeMount)((function(){loadTiny(args)}));var cc=args.channel||lastChannel,conf=getConf(args.conf),disabled=(0,vue_1.ref)(!1);return{apiKey,content,cloudChannel:cc,conf,disabled,toggleDisabled:function toggleDisabled(_){disabled.value=!disabled.value}}},template:"\n    <div>\n      <button @click=\"toggleDisabled\">{{ disabled ? 'enable' : 'disable' }}</button>\n      <editor\n        api-key=\"".concat(apiKey,'"\n        v-bind:disabled="disabled"\n        :init="conf"\n        v-model="content"\n      />\n    </div>')}}},"./storybook-init-framework-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/@storybook/vue3/dist/esm/client/index.js")},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./stories/Editor.stories.tsx":"./src/stories/Editor.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"},"./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackEmptyContext},"?4f7e":()=>{},"./generated-stories-entry.cjs":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module=__webpack_require__.nmd(module),(0,__webpack_require__("./node_modules/@storybook/vue3/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")],module,!1)}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[464],(()=>(__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_exec__("./storybook-init-framework-entry.js"),__webpack_exec__("./node_modules/@storybook/vue3/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/vue3/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_exec__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),__webpack_exec__("./generated-stories-entry.cjs"))));__webpack_require__.O()}]);