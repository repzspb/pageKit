!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}({0:function(e,t,n){var o,r;o=n(2),r=n(14),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options:e.exports).template=r)},2:function(e,t){"use strict";e.exports={props:{active:{type:Array,"default":function(){return[]}}},data:function(){return{menus:[],nodes:[]}},ready:function(){var e=this;Vue.Promise.all([this.$http.get("api/site/node"),this.$http.get("api/site/menu")]).then(function(t){e.$set("nodes",t[0].data),e.$set("menus",t[1].data)},function(){e.$notify("Could not load config.","danger")})},computed:{grouped:function(){return _(this.nodes).groupBy("menu").mapValues(function(e){return _(e||{}).sortBy("priority").groupBy("parent_id").value()}).value()},all:function(){return!this.active||!this.active.length}},partials:{"node-partial":'<li><label><input type="checkbox" :value="node.id" v-model="active" number> {{ node.title }}</label><ul class="uk-list" v-if="grouped[menu.id][node.id]"><partial name="node-partial" v-for="node in grouped[menu.id][node.id]"></partial></ul><li>'}},window.Vue.component("input-tree",function(t){t(e.exports)})},14:function(e,t){e.exports='<p><strong>{{ all ? \'All Pages\' : \'Only selected pages\' | trans }}</strong></p> <ul class="uk-list uk-margin-top-remove" v-for="menu in menus" v-if=menu.count> <li class=pk-list-header>{{ menu.label }}</li> <partial name=node-partial v-for="node in grouped[menu.id][0]"></partial> </ul>'}});