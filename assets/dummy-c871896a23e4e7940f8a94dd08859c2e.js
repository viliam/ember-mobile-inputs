"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,i){var r=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,r=t["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(r,i["default"].modulePrefix),e["default"]=r}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,i=n["default"].APP.version;e["default"]=t["default"].extend({version:i,name:a})}),define("dummy/components/mi-date",["exports","ember-mobile-inputs/components/mi-date"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/mi-number",["exports","ember-mobile-inputs/components/mi-number"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/mi-text",["exports","ember-mobile-inputs/components/mi-text"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/mobile-input",["exports","ember-mobile-inputs/components/mobile-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/index",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({valueNumber:null,valueText:null,valueDate:null,disabled:!1,actions:{toggleDisabled:function(){this.toggleProperty("disabled")}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/ember-mobile-inputs-read-config",["exports","dummy/config/environment","ember-mobile-inputs/configuration"],function(e,t,n){function a(){var e=t["default"]["ember-mobile-inputs"]||{};n["default"].load(e)}e.initialize=a,e["default"]={name:"ember-mobile-inputs-read-config",initialize:a}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,i=n["default"].exportApplicationGlobal;a="string"==typeof i?i:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:4,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h2");e.setAttribute(n,"id","title");var a=e.createTextNode("Welcome to Ember");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,2,2,n),a},statements:[["content","outlet",["loc",[null,[3,0],[3,10]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:55,column:6}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h3"),a=e.createTextNode("Try these input on desktop and mobile as well - observe the difference.");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("button"),a=e.createTextNode("Toggle disabled");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Number");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"id","numberResult");var i=e.createComment("");e.appendChild(a,i),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Text");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"id","textResult");var i=e.createComment("");e.appendChild(a,i),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Date");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"id","dateResult");var i=e.createComment("");e.appendChild(a,i),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h3"),a=e.createTextNode("Custom format YYYY-MM-DD");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("span");e.setAttribute(a,"id","customDateResult");var i=e.createComment("");e.appendChild(a,i),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("h2"),a=e.createTextNode("Different variations");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode('\nshowOn="input"\n');e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode('\n\nshowOn="button"\n');e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode('\n\nshowOn="both"\n');e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode('\n\nshowOn="none"\n');e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),i=e.childAt(t,[6]),r=e.childAt(t,[10]),l=e.childAt(t,[14]),d=e.childAt(t,[18]),o=e.childAt(t,[22]),p=e.childAt(t,[24]),u=e.childAt(t,[26]),m=e.childAt(t,[28]),c=new Array(17);return c[0]=e.createElementMorph(a),c[1]=e.createMorphAt(i,1,1),c[2]=e.createMorphAt(e.childAt(i,[3]),0,0),c[3]=e.createMorphAt(r,1,1),c[4]=e.createMorphAt(e.childAt(r,[3]),0,0),c[5]=e.createMorphAt(l,1,1),c[6]=e.createMorphAt(e.childAt(l,[3]),0,0),c[7]=e.createMorphAt(d,1,1),c[8]=e.createMorphAt(e.childAt(d,[3]),0,0),c[9]=e.createMorphAt(o,1,1),c[10]=e.createMorphAt(o,3,3),c[11]=e.createMorphAt(p,1,1),c[12]=e.createMorphAt(p,3,3),c[13]=e.createMorphAt(u,1,1),c[14]=e.createMorphAt(u,3,3),c[15]=e.createMorphAt(m,1,1),c[16]=e.createMorphAt(m,3,3),c},statements:[["element","action",["toggleDisabled"],[],["loc",[null,[3,8],[3,35]]]],["inline","mobile-input",[],["id","numberInput","type","number","value",["subexpr","@mut",[["get","valueNumber",["loc",[null,[8,54],[8,65]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[8,75],[8,83]]]]],[],[]]],["loc",[null,[8,2],[8,85]]]],["content","valueNumber",["loc",[null,[9,26],[9,41]]]],["inline","mobile-input",[],["id","textInput","type","text","value",["subexpr","@mut",[["get","valueText",["loc",[null,[15,50],[15,59]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[15,69],[15,77]]]]],[],[]]],["loc",[null,[15,2],[15,79]]]],["content","valueText",["loc",[null,[16,24],[16,37]]]],["inline","mobile-input",[],["id","dateInput","type","date","value",["subexpr","@mut",[["get","valueDate",["loc",[null,[22,50],[22,59]]]]],[],[]],"disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[22,69],[22,77]]]]],[],[]]],["loc",[null,[22,2],[22,79]]]],["content","valueDate",["loc",[null,[23,24],[23,37]]]],["inline","mobile-input",[],["id","customDateInput","type","date","value",["subexpr","@mut",[["get","valueDateFormat",["loc",[null,[28,56],[28,71]]]]],[],[]],"format","YYYY-MM-DD","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[28,101],[28,109]]]]],[],[]]],["loc",[null,[28,2],[28,111]]]],["content","valueDateFormat",["loc",[null,[29,30],[29,49]]]],["inline","mobile-input",[],["id","inputDateInput","type","date","value",["subexpr","@mut",[["get","valueDateInput",["loc",[null,[35,55],[35,69]]]]],[],[]],"showOn","input","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[35,94],[35,102]]]]],[],[]]],["loc",[null,[35,2],[35,104]]]],["content","valueDateInput",["loc",[null,[36,2],[36,20]]]],["inline","mobile-input",[],["id","buttonDateInput","type","date","value",["subexpr","@mut",[["get","valueDateButton",["loc",[null,[41,56],[41,71]]]]],[],[]],"showOn","button","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[41,97],[41,105]]]]],[],[]]],["loc",[null,[41,2],[41,107]]]],["content","valueDateButton",["loc",[null,[42,2],[42,21]]]],["inline","mobile-input",[],["id","bothDateInput","type","date","value",["subexpr","@mut",[["get","valueDateBoth",["loc",[null,[47,54],[47,67]]]]],[],[]],"showOn","both","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[47,91],[47,99]]]]],[],[]]],["loc",[null,[47,2],[47,101]]]],["content","valueDateBoth",["loc",[null,[48,2],[48,19]]]],["inline","mobile-input",[],["id","noneDateInput","type","date","value",["subexpr","@mut",[["get","valueDateNone",["loc",[null,[53,54],[53,67]]]]],[],[]],"showOn","none","disabled",["subexpr","@mut",[["get","disabled",["loc",[null,[53,91],[53,99]]]]],[],[]]],["loc",[null,[53,2],[53,101]]]],["content","valueDateNone",["loc",[null,[54,2],[54,19]]]]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),i=JSON.parse(unescape(a));return{"default":i}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-mobile-inputs",version:"0.1.0+f22b7cd1"});
