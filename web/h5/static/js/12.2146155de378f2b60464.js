webpackJsonp([12],{SOOt:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s("Dd8w"),i=s.n(r),n=s("oHlh"),a=s("gyMJ"),o={components:{eCourse:n.a},data:function(){return{orderList:[],isEmptyOrder:!0,isFirstRequestCompile:!1}},created:function(){var t=this;a.a.getMyOrder().then(function(e){t.orderList=e.data,t.orderList.length&&(t.isEmptyOrder=!1),t.isFirstRequestCompile=!0})}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"orders"},[s("span",{staticClass:"orders-title"},[t._v("我的订单")]),t._v(" "),t.isEmptyOrder&&t.isFirstRequestCompile?s("div",{staticClass:"orders-container__empty"},[s("img",{attrs:{src:"static/images/orderEmpty.png"}}),t._v(" "),s("span",[t._v("暂无订单记录")])]):s("div",{staticClass:"order"},t._l(t.orderList,function(t){return s("e-course",{key:t.id,attrs:{order:t,type:"order"}})}))])},staticRenderFns:[]},u=s("VU/8")(o,c,!1,null,null,null).exports,l=s("NYxO"),d={computed:i()({},Object(l.mapState)({user:function(t){return t.user}})),created:function(){this.getUserInfo()},methods:i()({},Object(l.mapActions)(["getUserInfo"]))},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user"},[e("div",{staticClass:"user-section"},[e("router-link",{attrs:{to:"/settings"}},[e("img",{staticClass:"user-img",attrs:{src:this.user.avatar.large}})]),this._v(" "),e("span",{staticClass:"user-name"},[this._v(this._s(this.user.nickname))]),this._v(" "),e("router-link",{staticClass:"user-setting",attrs:{to:"/settings"}},[e("img",{attrs:{src:"static/images/setting.png"}})])],1)])},staticRenderFns:[]},p=s("VU/8")(d,m,!1,null,null,null).exports,g=s("IcnI"),v={components:{Orders:u,User:p},computed:i()({},Object(l.mapState)({isLoading:function(t){return t.isLoading}})),beforeRouteEnter:function(t,e,s){!!g.a.state.token?s():s({name:"prelogin",query:{redirect:t.name}})}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isLoading?e("e-loading"):this._e(),this._v(" "),e("user"),this._v(" "),e("orders")],1)},staticRenderFns:[]},h=s("VU/8")(v,_,!1,null,null,null);e.default=h.exports}});