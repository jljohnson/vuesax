(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{602:function(t,o,r){},708:function(t,o,r){"use strict";var e=r(602);r.n(e).a},846:function(t,o,r){"use strict";r.r(o);var e={data:function(){return{colorAlert:"primary",titleAlert:"Alert",activeAlert:!1,valueInput:""}},methods:{openAlert:function(t){this.colorAlert=t||this.getColorRandom(),this.$vs.dialog({color:this.colorAlert,title:"Dialog - ".concat(this.colorAlert),text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",accept:this.acceptAlert})},acceptAlert:function(){this.$vs.notify({color:this.colorAlert,title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},getColorRandom:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}return"rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")")}}},n=(r(708),r(1)),c=Object(n.a)(e,function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"centerx"},[r("vs-button",{attrs:{"vs-color":"primary","vs-type":"flat"},on:{click:function(o){t.openAlert("primary")}}},[t._v("Alert Primary")]),r("vs-button",{attrs:{"vs-color":"success","vs-type":"flat"},on:{click:function(o){t.openAlert("success")}}},[t._v("Alert success")]),r("vs-button",{attrs:{"vs-color":"danger","vs-type":"flat"},on:{click:function(o){t.openAlert("danger")}}},[t._v("Alert Danger")]),r("vs-button",{attrs:{"vs-color":"warning","vs-type":"flat"},on:{click:function(o){t.openAlert("warning")}}},[t._v("Alert Warning")]),r("vs-button",{attrs:{"vs-color":"dark","vs-type":"flat"},on:{click:function(o){t.openAlert("dark")}}},[t._v("Alert Dark")]),r("vs-button",{attrs:{"vs-color":"primary","vs-type":"gradient"},on:{click:function(o){t.openAlert(null)}}},[t._v("Alert Color RGB | HEX")])],1)},[],!1,null,null,null);o.default=c.exports}}]);