(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[511],{46511:function(e,t,r){"use strict";r.r(t);r(30573);var n=r(99722),i=r(47181),o=(r(35602),r(92923),r(14089),r(52039),r(59602),r(41682)),a=r(77097),s=r(11654);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){var e=m(["\n        .form {\n          color: var(--primary-text-color);\n        }\n\n        ha-settings-row {\n          margin-top: 32px;\n          padding: 0;\n        }\n\n        ha-circular-progress {\n          display: block;\n          margin: 32px;\n          text-align: center;\n        }\n\n        .progress-text {\n          text-align: center;\n        }\n      "]);return l=function(){return e},e}function u(){var e=m(['<p class="error">',"</p>"]);return u=function(){return e},e}function d(){var e=m(['<ha-circular-progress alt="Updating" size="large" active>\n              </ha-circular-progress>\n              <p class="progress-text">\n                ',"\n              </p>"]);return d=function(){return e},e}function p(){var e=m(['<slot name="heading">\n                <h2 id="title" class="header_title">\n                  ',"\n                </h2>\n              </slot>\n              <div>\n                ",'\n              </div>\n\n              <ha-settings-row>\n                <span slot="heading">\n                  ','\n                </span>\n                <span slot="description">\n                  ',"\n                </span>\n                <ha-switch\n                  .checked=","\n                  haptic\n                  @click=","\n                >\n                </ha-switch>\n              </ha-settings-row>\n              <mwc-button @click=",' slot="secondaryAction">\n                ',"\n              </mwc-button>\n              <mwc-button\n                .disabled=","\n                @click=",'\n                slot="primaryAction"\n              >\n                ',"\n              </mwc-button>"]);return p=function(){return e},e}function f(){var e=m(["\n      <ha-dialog .open="," scrimClickAction escapeKeyAction>\n        ","\n        ","\n      </ha-dialog>\n    "]);return f=function(){return e},e}function h(){var e=m([""]);return h=function(){return e},e}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function v(e,t,r,n,i,o,a){try{var s=e[o](a),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){v(o,n,i,a,s,"next",e)}function s(e){v(o,n,i,a,s,"throw",e)}a(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=P(e);if(t){var i=P(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return w(this,r)}}function w(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(){E=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!z(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=C(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:A(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=A(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function x(e){var t,r=C(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function S(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function z(e){return e.decorators&&e.decorators.length}function D(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function A(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function C(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(e,t,r,n){var i=E();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(D(o.descriptor)||D(i.descriptor)){if(z(o)||z(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(z(o)){if(z(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}S(o,i)}else t.push(o)}return t}(a.d.map(x)),e);i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("dialog-supervisor-update")],(function(e,t){var r,c;return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,t);var r=b(n);function n(){var t;g(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(_(t)),t}return n}(t),d:[{kind:"field",key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_opened",value:function(){return!1}},{kind:"field",decorators:[(0,n.sz)()],key:"_createSnapshot",value:function(){return!0}},{kind:"field",decorators:[(0,n.sz)()],key:"_action",value:function(){return null}},{kind:"field",decorators:[(0,n.sz)()],key:"_error",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_dialogParams",value:void 0},{kind:"method",key:"showDialog",value:(c=y(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._opened=!0,this._dialogParams=t,e.next=4,this.updateComplete;case 4:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{kind:"method",key:"closeDialog",value:function(){this._action=null,this._createSnapshot=!0,this._error=void 0,this._dialogParams=void 0,(0,i.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"focus",value:function(){var e=this;this.updateComplete.then((function(){var t,r;return null===(t=e.shadowRoot)||void 0===t||null===(r=t.querySelector("[dialogInitialFocus]"))||void 0===r?void 0:r.focus()}))}},{kind:"method",key:"render",value:function(){return this._dialogParams?(0,n.dy)(f(),this._opened,null===this._action?(0,n.dy)(p(),this._dialogParams.supervisor.localize("confirm.update.title","name",this._dialogParams.name),this._dialogParams.supervisor.localize("confirm.update.text","name",this._dialogParams.name,"version",this._dialogParams.version),this._dialogParams.supervisor.localize("dialog.update.snapshot"),this._dialogParams.supervisor.localize("dialog.update.create_snapshot","name",this._dialogParams.name),this._createSnapshot,this._toggleSnapshot,this.closeDialog,this._dialogParams.supervisor.localize("common.cancel"),void 0!==this._error,this._update,this._dialogParams.supervisor.localize("common.update")):(0,n.dy)(d(),"update"===this._action?this._dialogParams.supervisor.localize("dialog.update.updating","name",this._dialogParams.name,"version",this._dialogParams.version):this._dialogParams.supervisor.localize("dialog.update.snapshotting","name",this._dialogParams.name)),this._error?(0,n.dy)(u(),this._error):""):(0,n.dy)(h())}},{kind:"method",key:"_toggleSnapshot",value:function(){this._createSnapshot=!this._createSnapshot}},{kind:"method",key:"_update",value:(r=y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._createSnapshot){e.next=12;break}return this._action="snapshot",e.prev=2,e.next=5,(0,a.iN)(this.hass,this._dialogParams.snapshotParams);case 5:e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(2),this._error=(0,o.js)(e.t0),this._action=null,e.abrupt("return");case 12:return this._action="update",e.prev=13,e.next=16,this._dialogParams.updateHandler();case 16:e.next=23;break;case 18:return e.prev=18,e.t1=e.catch(13),this.hass.connection.connected&&!(0,o.yz)(e.t1)&&(this._error=(0,o.js)(e.t1)),this._action=null,e.abrupt("return");case 23:this.closeDialog();case 24:case"end":return e.stop()}}),e,this,[[2,7],[13,18]])}))),function(){return r.apply(this,arguments)})},{kind:"get",static:!0,key:"styles",value:function(){return[s.Qx,s.yu,(0,n.iv)(l())]}}]}}),n.oi)}}]);
//# sourceMappingURL=chunk.1f8410f33a657b459bc6.js.map