(function(e){function t(t){for(var r,l,i=t[0],o=t[1],u=t[2],f=0,p=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(r=!1)}r&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},s={app:0},n=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"02b2":function(e,t,a){"use strict";var r=a("be5e"),s=a.n(r);s.a},"1b92":function(e,t){e.exports={"GB/UK":"#B71C1C",Italy:"#2E7D32",Germany:"#F9A825",Netherland:"#1976D2",Australia:"#FF7100"}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:""}},[a("v-content",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-col",{attrs:{cols:"7"}},[a("v-card",{attrs:{id:"mask"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.mask,expression:"mask"}],attrs:{type:"text",placeholder:"+7900XXXXXXX"},domProps:{value:e.mask},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.generateNumber(t)},input:function(t){t.target.composing||(e.mask=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"text",placeholder:"10"},domProps:{value:e.amount},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.generateNumber(t)},input:function(t){t.target.composing||(e.amount=t.target.value)}}}),a("button",{staticClass:"green darken-4",on:{click:e.generateNumber}},[e._v("Generate")])]),a("v-card",{staticClass:"pa-2 mt-4"},[a("span",{staticClass:"caption grey--text darken-4"},[e._v("Last used masks")]),a("v-card-text",e._l(e.latest,(function(t,r){return a("v-chip",{key:r,staticClass:"ma-1",on:{click:function(a){e.mask=t}}},[e._v(e._s(t))])})),1)],1),a("v-card",{staticClass:"mt-4"},[a("v-card-text",[e.generated.length?a("div",{attrs:{refs:"gen"}},e._l(e.generated,(function(t,r){return a("div",{key:r},[e._v(e._s(t))])})),0):a("div",{staticClass:"empty grey--text darken-4"},[a("span",{staticClass:"caption"},[e._v("There will be placed generated numbers")])])])],1)],1),a("v-col",{attrs:{cols:"5"}},[a("MasksTab",{on:{fire:e.onFire}})],1)],1)],1)],1)],1)},n=[],l=(a("c975"),a("a15b"),a("d81d"),a("a9e3"),a("9129"),a("25eb"),a("ac1f"),a("5319"),a("1276"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"pa-2"},[a("v-card-title",[a("div",{staticClass:"filter-input"},[a("v-text-field",{attrs:{placeholder:"Mask",clearable:""},model:{value:e.filterMask,callback:function(t){e.filterMask=t},expression:"filterMask"}})],1),a("div",{attrs:{id:"label-filter"}},e._l(e.filterLabels,(function(t,r){return a("v-chip",{key:r,attrs:{close:"",color:e.labelsColors[t]||"default",small:""},on:{"click:close":function(a){return e.onFilterRemove(t)}}},[e._v(e._s(t))])})),1)]),e._l(e.masks,(function(t,r){return a("MaskEntity",e._b({key:r,on:{fire:e.fire,filter:e.onFilter,remove:e.onRemove}},"MaskEntity",t,!1))})),a("div",{staticClass:"masks-input"},[a("v-text-field",{staticClass:"ml-2",attrs:{clearable:"",placeholder:"Enter your mask to save it"},model:{value:e.maskInput,callback:function(t){e.maskInput=t},expression:"maskInput"}}),a("v-btn",{staticClass:"ma-2",attrs:{color:"success"},on:{click:e.saveMask}},[e._v("Save")])],1)],2)}),i=[],o=(a("99af"),a("a623"),a("4de4"),a("caad"),a("a434"),a("2532"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mask"},[a("div",{staticClass:"mask-value subtitle-2 grey--text darken-2",on:{click:function(t){return e.fire(e.value)}}},[e._v(e._s(e.value))]),a("div",{staticClass:"mask-labels"},e._l(e.labels,(function(t,r){return a("v-chip",{key:r,attrs:{small:"",color:e.labelsColors[t]||"default"},on:{click:function(a){return e.filter(t)}}},[e._v(" "+e._s(t)+" ")])})),1),e.labels.includes("Personal")?a("span",{staticClass:"mr-2 icon mdi mdi-delete",on:{click:function(t){return e.remove(e.value)}}}):e._e()])}),u=[],c=a("1b92"),f=a.n(c),p={name:"MaskEntity",data:function(){return{labelsColors:f.a}},props:{value:{type:String,required:!0},labels:{type:Array,default:function(){return[]}}},methods:{fire:function(e){this.$emit("fire",e)},filter:function(e){this.$emit("filter",e)},remove:function(e){this.$emit("remove",e)}}},d=p,v=(a("6b08"),a("2877")),m=a("6544"),b=a.n(m),h=a("cc20"),X=Object(v["a"])(d,o,u,!1,null,"8563cb5e",null),k=X.exports;b()(X,{VChip:h["a"]});var y={name:"MastsTab",components:{MaskEntity:k},data:function(){return{maskInput:"",filterMask:"",labelsColors:f.a,predefinedMasks:[{value:"+4420721XXXXX",labels:["Geographical","GB/UK"]},{value:"+4484444XXXXX",labels:["National","GB/UK"]},{value:"+44800XXXXXXX",labels:["Free","GB/UK"]},{value:"+44808XXXXXXX",labels:["Free","GB/UK"]},{value:"+39066XXXXX",labels:["Geographical","Italy"]},{value:"+39800XXXXXX",labels:["Free","Italy"]},{value:"+493023XXXXX",labels:["Geographical","Germany"]},{value:"+493060XXXXX",labels:["Geographical","Germany"]},{value:"+49177XXXXXXX",labels:["National","Germany"]},{value:"+49800XXXXXXX",labels:["Free","Germany"]},{value:"+311044XXXXX",labels:["Geographical","Netherland"]},{value:"+316200XXXXX",labels:["National","Netherland"]},{value:"+318008XXXXXX",labels:["Free","Netherland"]},{value:"+6128XXXXXXX",labels:["Geographical","Australia"]},{value:"+611800XXXXXX",labels:["Free","Australia"]}],filterLabels:[],userMasks:[]}},computed:{masks:function(){return this.filter([].concat(this.predefinedMasks,this.userMasks),this.filterMask,this.filterLabels)}},methods:{fire:function(e){this.$emit("fire",e)},onFilter:function(e){this.filterLabels.includes(e)||this.filterLabels.push(e)},onFilterRemove:function(e){var t=this.filterLabels.indexOf(e);t>-1&&this.filterLabels.splice(t,1)},onRemove:function(e){var t=this.userMasks.map((function(e){return e.value})).indexOf(e);t<0||(this.userMasks.splice(t,1),localStorage.setItem("userMasks",JSON.stringify(this.userMasks)))},filter:function(e,t,a){var r=t||"";return e.filter((function(e){return e.value.toLowerCase().includes(r.toLowerCase())&&a.every((function(t){return e.labels.includes(t)}))}))},saveMask:function(){var e=this.maskInput.toUpperCase().replace(/[xх]/,"x");e.indexOf("X")>0&&!this.userMasks.map((function(e){return e.value})).includes(e)&&(this.userMasks.push({value:e.toUpperCase(),labels:["Personal"]}),localStorage.setItem("userMasks",JSON.stringify(this.userMasks)))}},mounted:function(){if(localStorage.userMasks)try{this.userMasks=JSON.parse(localStorage.userMasks)}catch(e){console.error("Unable to parse users masks",e)}},beforeDestroy:function(){localStorage.setItem("userMasks",JSON.stringify(this.userMasks))}},g=y,M=(a("02b2"),a("8336")),C=a("b0af"),x=a("99d9"),_=a("8654"),O=Object(v["a"])(g,l,i,!1,null,"bb85abaa",null),N=O.exports;b()(O,{VBtn:M["a"],VCard:C["a"],VCardTitle:x["b"],VChip:h["a"],VTextField:_["a"]});var w={name:"App",components:{MasksTab:N},data:function(){return{mask:"",amount:1,generated:[],latest:[]}},computed:{replacedMask:function(){return this.mask.toLowerCase().replace(/[xх]/,"x")},isMaskValid:function(){return this.replacedMask.indexOf("x")>0}},methods:{_getRandomNumber:function(){return Math.floor(10*Math.random())},generateNumber:function(){var e=this,t=Number.parseInt(this.amount);if(!this.mask||!this.isMaskValid||Number.isNaN(t))return this.generated=[];this.latest.length&&this.latest[0]===this.mask||this.latest.unshift(this.mask),this.latest.length>5&&this.latest.pop(),this.generated=[],this.$refs.gen&&(this.$refs.gen.innerHTML="");for(var a=0;a<t;a++)this.generated.push(this.replacedMask.split("").map((function(t){return"x"===t?e._getRandomNumber():t})).join(""))},onFire:function(e){this.mask=e}}},G=w,F=(a("bb4a"),a("7496")),S=a("62ad"),V=a("a523"),j=a("a75b"),L=a("a722"),I=Object(v["a"])(G,s,n,!1,null,"5cde571d",null),E=I.exports;b()(I,{VApp:F["a"],VCard:C["a"],VCardText:x["a"],VChip:h["a"],VCol:S["a"],VContainer:V["a"],VContent:j["a"],VLayout:L["a"]});var P=a("f309");r["a"].use(P["a"]);var T=new P["a"]({theme:{dark:!0},icons:{iconfont:"mdi"}});r["a"].config.productionTip=!1,new r["a"]({vuetify:T,render:function(e){return e(E)}}).$mount("#app")},"6b08":function(e,t,a){"use strict";var r=a("c36c"),s=a.n(r);s.a},bb4a:function(e,t,a){"use strict";var r=a("e4ae"),s=a.n(r);s.a},be5e:function(e,t,a){},c36c:function(e,t,a){},e4ae:function(e,t,a){}});
//# sourceMappingURL=app.997d465e.js.map