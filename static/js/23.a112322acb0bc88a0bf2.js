webpackJsonp([23],{j1Zb:function(e,t){},vOHc:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("Q4vP"),o=r("WpU2"),a={components:{homeHeader:s.a,search:o.a},data:function(){return{address:"",name:"",phoneNumber:"",realPay:"",orderId:"",user:{userId:"",token:"",orderId:""},orderSerialNumber:"",totalBuyerPay:""}},mounted:function(){if(this.$cookies.get("userId")&&this.$cookies.get("token")){this.user.userId=this.$cookies.get("userId"),this.user.token=this.$cookies.get("token");var e=window.location.href;console.log(e);var t=this.$route.query.orderId;console.log(t),void 0==t||""==t?this.$router.push({path:"/memberCenter/order_center/wait_payment"}):(this.user.orderId=t,this.getOrderDetailByOrderId()),console.log(this.user)}else this.$router.push({path:"/wholesalerLogin"})},methods:{getOrderDetailByOrderId:function(){var e=this;this.$getAxios({url:"/mall/getOrderDetailByOrderId",method:"get",params:{token:this.$cookies.get("token"),orderId:this.user.orderId,userId:this.$cookies.get("userId")}}).then(function(t){if(console.log(t.data),2e4==t.data.code)console.log("获取订单失败");else if(1e4==t.data.code){var r=t.data.extend.success;e.orderId=r.orderId;var s=r.user_contact.address;if(e.name=r.user_contact.name,e.phoneNumber=r.user_contact.phoneNumber,(s=s.trim()).indexOf("-")>1){var o=s.split("-");e.address=o[0]+o[1]}else e.address=s.trim();3==r.payWay?(e.payWay=3,e.payCheck=!1):(e.payWay=2,e.payCheck=!0);var a=0;null==r.totalBuyerPay||""==r.totalBuyerPay?(a=1*r.goodsTotalFee,a+=1*r.expressFee,a-=1*r.activityDiscount,a-=1*r.coinDiscount,a-=1*r.couponDiscount,a-=1*r.flashSaleDiscount,e.totalBuyerPay=a):e.totalBuyerPay=r.totalBuyerPay}}).catch(function(e){console.log(e)})},myOrder:function(){this.$router.push({path:"/memberCenter/order_center/all_order"})},orderDetails:function(){this.$cookies.set("orderId",this.orderId,{expires:.1}),this.$router.push("/orderDetails")}}},i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:e.$route.meta.title,expression:"$route.meta.title"}],staticClass:"submiss-success",attrs:{id:"submiss-success"}},[r("div",{staticClass:"header"},[r("home-header")],1),e._v(" "),r("div",{staticClass:"search"},[r("search")],1),e._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"information"},[r("h3",[e._v("您已成功付款")]),e._v(" "),r("div",[r("span",[e._v("收货地址：")]),r("span",[e._v(e._s(e.address)+" "+e._s(e.name)+" "+e._s(e.phoneNumber))])]),e._v(" "),r("div",[r("span",[e._v("实付款：")]),r("span",{staticClass:"money"},[e._v("￥"+e._s(e.totalBuyerPay))])]),e._v(" "),r("div",[r("span",[e._v("您可以 :")]),e._v(" "),r("button",{on:{click:e.orderDetails}},[e._v("查看订单详情")]),e._v(" "),r("button",{on:{click:e.myOrder}},[e._v("进入我的订单")])])])])])},staticRenderFns:[]};var n=r("VU/8")(a,i,!1,function(e){r("j1Zb")},"data-v-ed2ed6fe",null);t.default=n.exports}});