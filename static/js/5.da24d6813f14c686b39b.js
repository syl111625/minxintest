webpackJsonp([5],{"/PS/":function(t,s){},"5zde":function(t,s,e){e("zQR9"),e("qyJz"),t.exports=e("FeBl").Array.from},Gu7T:function(t,s,e){"use strict";s.__esModule=!0;var a,i=e("c/Tr"),o=(a=i)&&a.__esModule?a:{default:a};s.default=function(t){if(Array.isArray(t)){for(var s=0,e=Array(t.length);s<t.length;s++)e[s]=t[s];return e}return(0,o.default)(t)}},QEH3:function(t,s,e){"use strict";var a=e("Gu7T"),i=e.n(a),o={data:function(){return{content:""}},props:{endTime:{type:String,default:""},endText:{type:String,default:"已结束"},callback:{type:Function,default:""}},mounted:function(){this.countdowm(this.endTime)},methods:{countdowm:function(t){var s=this,e=setInterval(function(){var a=new Date,i=new Date(1e3*t).getTime()-a.getTime();if(i>0){var o=Math.floor(i/864e5),n=Math.floor(i/36e5%24),r=Math.floor(i/6e4%60),c=Math.floor(i/1e3%60);n=n<10?"0"+n:n,r=r<10?"0"+r:r,c=c<10?"0"+c:c;var l="";o>0&&(l=o+"天"+n+"小时"+r+"分"+c+"秒"),o<=0&&n>0&&(l=n+"小时"+r+"分"+c+"秒"),o<=0&&n<=0&&(l=r+"分"+c+"秒"),s.content=l}else clearInterval(e),s.content=s.endText,s._callback()},1e3)},_callback:function(){this.callback&&this.callback instanceof Function&&this.callback.apply(this,i()(this))}}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{endTime:this.endTime,callback:this.callback,endText:this.endText}},[this._t("default",[this._v("\n    "+this._s(this.content)+"\n  ")])],2)},staticRenderFns:[]},r=e("VU/8")(o,n,!1,null,null,null);s.a=r.exports},"c/Tr":function(t,s,e){t.exports={default:e("5zde"),__esModule:!0}},dY0y:function(t,s,e){var a=e("dSzd")("iterator"),i=!1;try{var o=[7][a]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,s){if(!s&&!i)return!1;var e=!1;try{var o=[7],n=o[a]();n.next=function(){return{done:e=!0}},o[a]=function(){return n},t(o)}catch(t){}return e}},f70j:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Q4vP"),i=e("WpU2"),o=e("CSRX"),n=e("Lmvl"),r=e("QEH3"),c={components:{homeHeader:a.a,search:i.a,contentHeader:o.a,countDown:r.a,publicFooter:n.a},data:function(){return{list:{},status:"",orderId:"",addtimes:[],cancelOrder:"取消订单",addTime:"",isaddTime:!0,countDown:"",timer:null,countTime:"",goodscentend:[],againOrder:!1,againList:[],popup:{width:"",height:"",position:"fixed",top:0,left:0,background:"rgb(0,0,0,0.6)",zIndex:9999},confirmReceiptone:{height:""},confirmReceipt:!1,shut:!1,ocrId:"",replyCheck:!1,logisticsDetails:!1,logList:[],shopsReplyList:[],deleteCheck:!1,oneMoreOrderShow:!1}},mounted:function(){this.popup.width=window.innerWidth+"px",this.popup.height=window.innerHeight+"px",this.$cookies.get("userId")&&this.$cookies.get("token")&&this.getOrderDetails()},methods:{getOrderDetails:function(){var t=this;this.$getAxios({url:"/mall/getOrderDetailByOrderId",method:"get",params:{token:this.$cookies.get("token"),orderId:this.$cookies.get("orderId"),userId:this.$cookies.get("userId")}}).then(function(s){if(2e4==s.data.code)console.log(s.data.msg);else if(1e4==s.data.code){var a=s.data.extend.success;if(t.addtimes=[],t.goodscentend=[],null==a);else{var i={payWay:a.payWay,leaveWords:a.leaveWords,orderSerialNumber:a.orderSerialNumber};t.orderId=a.orderId,t.addTime=a.addTime,null==a.payWay?i.payWay=2:i.payWay=a.payWay;var o=0;i.goodsTotalFee=(1*a.goodsTotalFee).toFixed(2),i.couponDiscount=(1*a.couponDiscount).toFixed(2),i.expressFee=(1*a.expressFee).toFixed(2),null==a.totalBuyerPay||""==a.totalBuyerPay?(o=1*a.goodsTotalFee,o+=1*a.expressFee,o-=1*a.activityDiscount,o-=1*a.coinDiscount,o-=1*a.couponDiscount,o-=1*a.flashSaleDiscount,i.totalBuyerPay=o.toFixed(2)):i.totalBuyerPay=(1*a.totalBuyerPay).toFixed(2),null==a.user_contact||(i.name=a.user_contact.name,i.phoneNumber=a.user_contact.phoneNumber,i.address=a.user_contact.address),Date.prototype.toLocaleString=function(){return this.getFullYear()+"/"+(this.getMonth()+1)+"/"+this.getDate()+"  "+this.getHours()+":"+this.getMinutes()+":"+this.getSeconds()},a.countdown<=0||null==a.countdown?t.isaddTime=!1:t.countDown=1e3*a.countdown;for(var n=0;n<a.order_status.length;n++){1==a.order_status[n].isNewStatus&&(i.status=a.order_status[n].status,t.status=a.order_status[n].status,t.countDown=t.countDown+a.order_status[n].addTime,0==a.order_status[n].status||2==a.order_status[n].status?t.timer=setInterval(function(){t.daojishi(t.countDown,t.status)},100):3==a.order_status[n].status&&(t.timer=setInterval(function(){t.daojishi(t.countDown,t.status)},100))),1==a.order_status[n].status?(t.$refs.active20.classList.add("active"),t.$refs.active21.classList.add("active"),t.$refs.active22.classList.add("active"),t.$refs.orderStatus1.classList.add("orderStatus")):2==a.order_status[n].status?(t.$refs.active30.classList.add("active"),t.$refs.active31.classList.add("active"),t.$refs.active32.classList.add("active"),t.$refs.orderStatus2.classList.add("orderStatus")):3==a.order_status[n].status?(t.$refs.active40.classList.add("active"),t.$refs.active41.classList.add("active"),t.$refs.active42.classList.add("active"),t.$refs.orderStatus3.classList.add("orderStatus")):5==a.order_status[n].status&&(t.$refs.active50.classList.add("active"),t.$refs.active51.classList.add("active"),t.$refs.orderStatus5.classList.add("orderStatus"));var r={addTime:a.order_status[n].addTime};t.addtimes.push(r),1==a.order_status[n].isNewStatus&&4==a.order_status[n].status&&t.addtimes.length>2&&t.addtimes.splice(2,1)}for(n=0;n<t.addtimes.length;n++){var c=new Date(t.addtimes[n].addTime).toLocaleString();t.addtimes[n].addTime=c}i.allgoodsamount=0;for(n=0;n<a.order_detail.length;n++)if(""!=a.order_detail[n].goods&&null!=a.order_detail[n].goods){var l={amount:a.order_detail[n].amount,price:a.order_detail[n].price,name:a.order_detail[n].goods.name,orderDetailId:a.order_detail[n].orderDetailId,replyContext:a.order_detail[n].replyContext,avtiveList:a.order_detail[n].order_detail_discount_shareVo,goodsSkuId:a.order_detail[n].goodsSkuId,goodId:a.order_detail[n].goods.goodId};if(i.allgoodsamount+=a.order_detail[n].amount,a.order_detail[n].order_detail_discount_shareVo.length>0&&(l.avtiveList=a.order_detail[n].order_detail_discount_shareVo),0==a.order_detail[n].goods.detailCpropertyVo.length)l.specification="",l.manufacturers="";else for(var d=0;d<a.order_detail[n].goods.detailCpropertyVo.length;d++)"【厂家】"==a.order_detail[n].goods.detailCpropertyVo[d].cpName?l.manufacturers=a.order_detail[n].goods.detailCpropertyVo[d].value:"【规格】"==a.order_detail[n].goods.detailCpropertyVo[d].cpName&&(l.specification=a.order_detail[n].goods.detailCpropertyVo[d].value);if(null==a.order_detail[n].refund_order_status?l.applyAfter="申请售后":(l.check=!0,0==a.order_detail[n].refund_order_status.rosStatus?l.applyAfter="已申请退款":1==a.order_detail[n].refund_order_status.rosStatus?(l.applyAfter="",l.check=!1):2==a.order_detail[n].refund_order_status.rosStatus?l.applyAfter="已申请退款":3==a.order_detail[n].refund_order_status.rosStatus?l.applyAfter="已申请退款":4==a.order_detail[n].refund_order_status.rosStatus?l.check=!1:5==a.order_detail[n].refund_order_status.rosStatus?l.applyAfter="退款成功":l.applyAfter="申请售后"),l.shopsReplyList=[],null==a.order_detail[n].replyContext||0==a.order_detail[n].replyContext.length||(l.shopsReplyList=a.order_detail[n].replyContext),l.imageUrl=e("ADp8"),0!=a.order_detail[n].goods.goods_images.length)for(var _=0;_<a.order_detail[n].goods.goods_images.length;_++)1==a.order_detail[n].goods.goods_images[_].isHead&&(l.imageUrl=a.order_detail[n].goods.goods_images[_].imageUrl,null==a.order_detail[n].goods.goods_images[_].imageUrl&&(l.imageUrl=e("ADp8")));l.valueList="",0==a.order_detail[n].goods.cps.length||0!=a.order_detail[n].goods.cps[0].valueList.length&&(l.valueList+=a.order_detail[n].goods.cps[0].valueList[0].value),t.goodscentend.push(l)}t.list=i}}}).catch(function(t){console.log(t)})},daojishi:function(t,s){var e=(new Date).getTime(),a=(this.$refs.countDownsss,t-e);if(a>0){var i=Math.floor(a/1e3/60/60/24),o=Math.floor(a/1e3/60/60%24),n=Math.floor(a/1e3/60%60),r=Math.floor(a/1e3%60),c="";i>0&&(c+=i+"天"),o>0&&(c+=o+"小时"),c+=n+"分"+r+"秒",this.countTime=c}else clearInterval(this.timer),this.isaddTime=!1},togoodDetails:function(t){window.open("#/product_details/"+t+"?goodsId="+t)},toPayment:function(t){0==t?this.$router.push("/submissionSuccess?orderId="+this.orderId):2==t?this.confirmReceipt=!0:3==t?this.$router.push("/memberCenter/my_comment"):8==t?this.shut=!0:4==t&&(this.deleteCheck=!0)},openShopsReply:function(t){var s=this,e={userId:this.$cookies.get("userId"),token:this.$cookies.get("token"),orderDetailId:t};this.$getAxios({url:"/mall/getBusinessReply",method:"get",params:e}).then(function(t){if(console.log(t.data),2e4==t.data.code)s.$message({message:"获取商家回复失败",type:"warning"}),console.log(t.data.msg);else if(1e4==t.data.code){s.shopsReplyList=[];var e=t.data.extend.resp;if(null==e||0==e.length);else for(var a=0;a<e.length;a++)s.shopsReplyList.push(e[a])}}).catch(function(t){console.log(t)}),this.replyCheck=!0},applyRefund:function(t,s){"申请售后"==s&&(this.$cookies.set("orderDetailId",t),this.$router.push("/afterSale?orderDetailId="+t))},cancelOrderEvent:function(){var t=this,s="token="+this.$cookies.get("token")+"&orderId="+t.orderId+"&userId="+this.$cookies.get("userId")+"&status=4&ocrId="+this.ocrId;this.$postAxios({url:"/mall/insertOrdersStatus",method:"post",data:s}).then(function(s){console.log(s.data),2e4==s.data.code?(t.$message({message:"取消订单失败",type:"warning"}),console.log(s.data.msg)):1e4==s.data.code&&(t.$message({message:"取消订单成功",type:"success"}),t.shut=!1,t.getOrderDetails())}).catch(function(t){console.log(t)})},confirmGoods:function(){var t=this,s=this.orderId;console.log(s);var e=this,a="userId="+this.$cookies.get("userId")+"&token="+this.$cookies.get("token")+"&orderId="+s+"&status=3&ocrId=";this.$postAxios({url:"/mall/insertOrdersStatus",method:"post",data:a}).then(function(s){console.log(s.data),2e4===s.data.code?console.log("20000"):1e4===s.data.code&&(e.$message({message:"确认成功",type:"success"}),e.$router.push("/memberCenter/order_center/wait_evaluate"),t.confirmReceipt=!1)}).catch(function(t){console.log(t)})},openAgainOrder:function(){var t=this;this.$postAxios({url:"/mall/reBuyForOrderCenter",method:"post",data:"userId="+this.$cookies.get("userId")+"&token="+this.$cookies.get("token")+"&orderId="+this.orderId}).then(function(s){if(console.log(s.data),2e4===s.data.code)t.$message({message:"添加失败",type:"warning"}),console.log(s.data.msg);else if(1e4===s.data.code){t.againList=[];s.data.extend.success;for(var e=[],a=0;a<t.goodscentend.length;a++)e.push(t.goodscentend[a].goodsSkuId);if("false"===s.data.extend.success[0])return void(t.oneMoreOrderShow=!0);t.$router.push({name:"shoppingCart",params:{goodsId:e}})}}).catch(function(t){console.log(t)})},logisticsDetail:function(){this.logisticsDetails=!0;var t=this,s={userId:this.$cookies.get("userId"),token:this.$cookies.get("token"),orderId:this.$cookies.get("orderId")};console.log(s),this.$getAxios({url:"/mall/queryUserExpress",method:"get",params:s}).then(function(s){if(console.log(s.data),console.log("物流详情"+s.data.msg),2e4==s.data.code){t.logList=[];var e={status:s.data.extend.err_code};t.logList.push(e)}else if(1e4==s.data.code){console.log(s.data.extend.success),t.logList=[];var a=s.data.extend.success;if(0==a.length||null==a);else for(var i=0;i<a.length;i++){e={timer:a[i].time,status:a[i].status};t.logList.push(e)}}}).catch(function(t){console.log(t)})},deleteOrder:function(){var t=this,s="userId="+this.$cookies.get("userId")+"&token="+this.$cookies.get("token")+"&orderId[]="+this.orderId;console.log(s),t.$postAxios({url:"/mall/deleteOrders",method:"post",data:s}).then(function(s){console.log(s.data),2e4==s.data.code?(console.log("删除订单失败"),t.$message({message:"删除此订单失败",type:"warning"})):1e4==s.data.code&&(t.$message({message:"删除此订单成功",type:"success"}),t.$router.push("/memberCenter/order_center/all_order"),t.deleteCheck=!1,console.log("删除订单成功"))}).catch(function(t){console.log(t)})}},destroyed:function(){clearInterval(this.timer)}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}],staticClass:"boss"},[e("div",{staticClass:"header"},[e("home-header")],1),t._v(" "),e("div",{staticClass:"search"},[e("search")],1),t._v(" "),e("div",{staticClass:"content"},[e("content-header"),t._v(" "),e("div",{staticClass:"order_track"},[e("p",[t._v("订单跟踪")]),t._v(" "),4!=t.list.status?e("div",{staticClass:"ordertxt"},[e("span",{staticClass:"orderStatus"},[t._v("拍下商品")]),t._v(" "),e("span",{ref:"orderStatus1"},[t._v("付款")]),t._v(" "),e("span",{ref:"orderStatus2"},[t._v("卖家发货")]),t._v(" "),e("span",{ref:"orderStatus3"},[t._v("确认收货")]),t._v(" "),e("span",{ref:"orderStatus5"},[t._v("评价")])]):t._e(),t._v(" "),4==t.list.status?e("div",{staticClass:"ordertxt"},[e("span",{staticClass:"orderStatus"},[t._v("拍下商品")]),t._v(" "),e("span",{staticClass:"orderStatus"},[t._v("交易关闭")])]):t._e(),t._v(" "),4!=t.list.status?e("div",{staticClass:"status_bar"},[e("span",{ref:"active10",staticClass:"fl active"},[t._v("1")]),t._v(" "),e("p",{ref:"active11",staticClass:"line fl active"}),t._v(" "),e("p",{ref:"active20",staticClass:"line fl"}),t._v(" "),e("span",{ref:"active21",staticClass:"fl"},[t._v("2")]),t._v(" "),e("p",{ref:"active22",staticClass:"line fl"}),t._v(" "),e("p",{ref:"active30",staticClass:"line fl"}),t._v(" "),e("span",{ref:"active31",staticClass:"fl"},[t._v("3")]),t._v(" "),e("p",{ref:"active32",staticClass:"line fl"}),t._v(" "),e("p",{ref:"active40",staticClass:"line fl"}),t._v(" "),e("span",{ref:"active41",staticClass:"fl"},[t._v("4")]),t._v(" "),e("p",{ref:"active42",staticClass:"line fl"}),t._v(" "),e("p",{ref:"active50",staticClass:"line fl"}),t._v(" "),e("span",{ref:"active51",staticClass:"fl"},[t._v("5")])]):t._e(),t._v(" "),4==t.list.status?e("div",{staticClass:"status_bar"},[e("span",{ref:"active10",staticClass:"fl active"},[t._v("1")]),t._v(" "),e("p",{staticClass:"fl closeOrder"}),t._v(" "),e("span",{ref:"active51",staticClass:"fl"},[t._v("2")])]):t._e(),t._v(" "),4!=t.list.status?e("div",{staticClass:"orderTime"},t._l(t.addtimes,function(s,a){return e("span",[t._v(t._s(s.addTime))])})):t._e(),t._v(" "),4==t.list.status?e("div",{staticClass:"orderTime-close"},t._l(t.addtimes,function(s,a){return e("span",[t._v(t._s(s.addTime))])})):t._e()]),t._v(" "),e("div",{staticClass:"orderInformation"},[e("div",{staticClass:"orderInformation_left fl"},[e("p",{staticClass:"orderInformationTxt"},[t._v("订单信息")]),t._v(" "),e("div",{staticClass:"orderInformation_left_bottom"},[e("p",{staticClass:"ptxt"},[e("span",{staticClass:"siteTxt"},[t._v("收货地址 :")]),t._v(" "),e("span",{staticClass:"site"},[t._v(t._s(t.list.name)+","+t._s(t.list.phoneNumber)+","+t._s(t.list.address))])]),t._v(" "),e("p",{staticClass:"ptxt"},[e("span",{staticClass:"siteTxt"},[t._v("买家留言 :")]),t._v(" "),e("span",{staticClass:"site"},[t._v(t._s(t.list.leaveWords))])]),t._v(" "),e("p",{staticClass:"ptxt"},[e("span",{staticClass:"siteTxt"},[t._v("订单编号 :")]),t._v(" "),e("span",{staticClass:"site orderSerialNumber"},[t._v(t._s(t.list.orderSerialNumber))])]),t._v(" "),e("p",{staticClass:"ptxt"},[e("span",{staticClass:"siteTxt"},[t._v("付款方式 :")]),t._v(" "),3==t.list.payWay?e("span",{staticClass:"site"},[t._v("货到付款")]):t._e(),t._v(" "),2==t.list.payWay?e("span",{staticClass:"site"},[t._v("微信支付")]):t._e(),t._v(" "),1==t.list.payWay?e("span",{staticClass:"site"},[t._v("支付宝支付")]):t._e(),t._v(" "),0==t.list.payWay?e("span",{staticClass:"site"},[t._v("余额支付")]):t._e()])])]),t._v(" "),e("div",{staticClass:"orderInformation_right fl"},[e("div",[e("div",{staticClass:"fl exclamation_poin"},[t._v("!")]),t._v(" "),e("div",{staticClass:"fl exclamation_poin_right"},[e("p",{staticClass:"orderInformation_right1"},[e("span",[t._v("订单状态 : ")]),t._v(" "),5==t.list.status?e("span",{staticClass:"site"},[t._v("买家已签收,交易完成")]):t._e(),t._v(" "),4==t.list.status?e("span",{staticClass:"site"},[t._v("买家已取消订单,交易关闭")]):t._e(),t._v(" "),3==t.list.status?e("span",{staticClass:"site"},[t._v("买家已签收,交易完成")]):t._e(),t._v(" "),2==t.list.status?e("span",{staticClass:"site"},[t._v("卖家已发货,等待买家确认")]):t._e(),t._v(" "),1==t.list.status?e("span",{staticClass:"site"},[t._v("买家已付款,等待卖家发货")]):t._e(),t._v(" "),0==t.list.status?e("span",{staticClass:"site"},[t._v("商品已拍下,等待买家付款")]):t._e()]),t._v(" "),t.isaddTime&&0==t.list.status?e("p",{staticClass:"orderInformation_right2"},[e("span",[t._v("您还有")]),t._v(" "),e("span",{staticClass:"colorRed"},[t._v("\n                                   "+t._s(t.countTime)+"\n                                ")]),t._v(" "),e("span",[t._v("来付款,超时订单自动关闭")])]):t._e(),t._v(" "),t.isaddTime&&2==t.list.status?e("p",{staticClass:"orderInformation_right2"},[e("span",[t._v("您还有")]),t._v(" "),e("span",{staticClass:"colorRed"},[t._v("\n                                  "+t._s(t.countTime)+"\n                                ")]),t._v(" "),e("span",[t._v("来确认收货,超时订单自动确认收货")])]):t._e(),t._v(" "),t.isaddTime&&3==t.list.status?e("p",{staticClass:"orderInformation_right2"},[e("span",[t._v("您还有")]),t._v(" "),e("span",{staticClass:"colorRed"},[t._v("\n                                   "+t._s(t.countTime)+"\n                                ")]),t._v(" "),e("span",[t._v("来评价,超时订单自动默认好评")])]):t._e(),t._v(" "),e("p",{staticClass:"orderInformation_right3"},[e("span",[t._v("您可以")]),t._v(" "),e("button",{staticClass:"button",on:{click:t.openAgainOrder}},[t._v("再来一单")]),t._v(" "),0==t.list.status?e("button",{staticClass:"btn",on:{click:function(s){t.toPayment(0)}}},[t._v("去付款")]):t._e(),t._v(" "),2==t.list.status?e("button",{staticClass:"btn-confirm",on:{click:function(s){t.toPayment(2)}}},[t._v("确认收货")]):t._e(),t._v(" "),3==t.list.status?e("button",{staticClass:"lookbtn",on:{click:function(s){t.toPayment(3)}}},[t._v("评价")]):t._e(),t._v(" "),4==t.list.status?e("button",{staticClass:"lookbtn",on:{click:function(s){t.toPayment(4)}}},[t._v("删除订单")]):t._e(),t._v(" "),2==t.list.status?e("button",{ref:"look_logistics",staticClass:"lookbtn",on:{click:t.logisticsDetail}},[t._v("查看物流\n                ")]):t._e(),t._v(" "),3==t.list.status?e("button",{ref:"look_logistics",staticClass:"lookbtn",on:{click:t.logisticsDetail}},[t._v("查看物流\n                ")]):t._e(),t._v(" "),5==t.list.status?e("button",{ref:"look_logistics",staticClass:"lookbtn",on:{click:t.logisticsDetail}},[t._v("查看物流\n                ")]):t._e(),t._v(" "),0==t.list.status?e("span",{staticClass:"remove",on:{click:function(s){t.toPayment(8)}}},[t._v("取消订单")]):t._e()])])])])]),t._v(" "),e("div",{ref:"goods_centent",staticClass:"goods_centent"},[t._m(0),t._v(" "),e("div",{staticClass:"goods_centent_box fl"},t._l(t.goodscentend,function(s,a){return e("div",{staticClass:"moreGoods_centent"},[e("div",{staticClass:"fl li1",on:{click:function(e){t.togoodDetails(s.goodId)}}},[e("img",{staticClass:"fl",attrs:{src:s.imageUrl}}),t._v(" "),e("div",{staticClass:"fl txt"},[e("span",{staticClass:"span1"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"span1",staticStyle:{color:"#aaa"}},[t._v(t._s(s.specification))]),t._v(" "),e("span",{staticClass:"span1",staticStyle:{color:"#aaa"}},[t._v(t._s(s.manufacturers))])])]),t._v(" "),e("div",{staticClass:"fl li2"},[t._v(t._s(s.price))]),t._v(" "),e("div",{staticClass:"fl li3"},[t._v(t._s(s.amount))]),t._v(" "),e("div",{staticClass:"goods_centent_status fl"},[0!=t.list.status&&4!=t.list.status?e("div",[5==t.list.status&&0!=s.replyContext.length?e("button",{on:{click:function(e){t.openShopsReply(s.orderDetailId)}}},[t._v("查看商家回复\n                ")]):t._e(),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:s.check,expression:"v.check"}],on:{click:function(e){t.applyRefund(s.orderDetailId,s.applyAfter)}}},[t._v(t._s(s.applyAfter))])]):t._e()]),t._v(" "),e("div",{staticClass:"discount_amount fl"},t._l(s.avtiveList,function(s){return e("span",[t._v(t._s(s.odds_description)+" -"+t._s(s.odds_discount_share_amount)+"元")])}))])}))]),t._v(" "),e("div",{staticClass:"goods_number"},[e("div",{staticClass:"fl goods_number_left"},[t._v("商品数量:共"+t._s(t.list.allgoodsamount)+"件")]),t._v(" "),e("div",{staticClass:"fr goods_number_right"},[e("p",[e("span",{staticClass:"goods_number_txt1 fl"},[t._v("商品总价 :")]),e("span",{staticClass:"goods_number_txt2 fl"},[t._v("￥"+t._s(t.list.goodsTotalFee))])]),t._v(" "),e("p",[e("span",{staticClass:"goods_number_txt1 fl"},[t._v("运费 :")]),t._v(" "),e("span",{staticClass:"goods_number_txt2 fl"},[t._v("￥"+t._s(t.list.expressFee))])]),t._v(" "),t.list.couponDiscount>0?e("p",[e("span",{staticClass:"goods_number_txt1 fl"},[t._v("优惠劵抵扣 :")]),t._v(" "),e("span",{staticClass:"goods_number_txt2 fl"},[t._v("￥-"+t._s(t.list.couponDiscount))])]):t._e(),t._v(" "),e("p",[e("span",{staticClass:"goods_number_txt1 fl"},[t._v("订单总价 :")]),t._v(" "),e("span",{staticClass:"goods_number_txt2 fl"},[t._v("￥"+t._s(t.list.totalBuyerPay))])]),t._v(" "),e("p",[e("span",{staticClass:"goods_number_txt1 fl"},[t._v("需付款:")]),e("span",{staticClass:"goods_number_txt2 fl font_color"},[t._v("￥"+t._s(t.list.totalBuyerPay))])])])])],1),t._v(" "),e("div",{staticClass:"footer"},[e("public-footer")],1),t._v(" "),t.againOrder?e("div",{style:t.popup},[e("div",{staticClass:"confirmReceipt confirmReceipt1"},[e("div",{staticClass:"confirmReceiptTop"},[e("span",{staticClass:"again-once"},[t._v("再来一单")]),t._v(" "),e("span",{staticClass:"spanx",on:{click:function(s){t.againOrder=!1}}},[t._v("x")])]),t._v(" "),e("div",{staticClass:"confirmReceiptBottom"},[e("div",{staticClass:"confirmReceiptBottom1"},[t._l(t.againList,function(s){return e("p",{staticClass:"again-tishi"},[t._v(t._s(s))])}),t._v(" "),e("span",{staticClass:"again-tishi"},[t._v("加入购物车成功!")])],2),t._v(" "),e("div",{staticClass:"confirmReceiptBottom2"},[e("button",{staticClass:"fr no",on:{click:function(s){t.againOrder=!1}}},[t._v("关闭")]),t._v(" "),e("button",{staticClass:"fr yes",on:{click:function(s){t.againOrder=!1}}},[t._v("确认")])])])])]):t._e(),t._v(" "),t.confirmReceipt?e("div",{style:t.popup},[e("div",{staticClass:"confirmReceipt confirmReceipt1"},[e("div",{staticClass:"confirmReceiptTop"},[e("span",{staticClass:"again-once"},[t._v("确认收货")]),t._v(" "),e("span",{staticClass:"spanx",on:{click:function(s){t.confirmReceipt=!1}}},[t._v("x")])]),t._v(" "),e("div",{staticClass:"confirmReceiptBottom"},[t._m(1),t._v(" "),e("div",{staticClass:"confirmReceiptBottom2"},[e("button",{staticClass:"fr no",on:{click:function(s){t.confirmReceipt=!1}}},[t._v("关闭")]),t._v(" "),e("button",{staticClass:"fr yes",on:{click:t.confirmGoods}},[t._v("确认")])])])])]):t._e(),t._v(" "),t.oneMoreOrderShow?e("div",{style:t.popup},[e("div",{staticClass:"confirmReceipt confirmReceipt1"},[e("div",{staticClass:"confirmReceiptTop"},[e("span",{staticClass:"again-once"},[t._v("再来一单")]),t._v(" "),e("span",{staticClass:"spanx",on:{click:function(s){t.oneMoreOrderShow=!1}}},[t._v("x")])]),t._v(" "),e("div",{staticClass:"confirmReceiptBottom"},[t._m(2),t._v(" "),e("div",{staticClass:"confirmReceiptBottom2"},[e("button",{staticClass:"fr no",on:{click:function(s){t.oneMoreOrderShow=!1}}},[t._v("关闭")]),t._v(" "),e("button",{staticClass:"fr yes",on:{click:function(s){t.oneMoreOrderShow=!1}}},[t._v("确认")])])])])]):t._e(),t._v(" "),t.shut?e("div",{style:t.popup},[e("div",{staticClass:"confirmReceipt"},[e("div",{staticClass:"confirmReceiptTop"},[e("span",{staticClass:"again-once"},[t._v("取消订单")]),t._v(" "),e("span",{staticClass:"spanx",on:{click:function(s){t.shut=!1}}},[t._v("x")])]),t._v(" "),e("div",{staticClass:"confirmReceiptBottom"},[t._m(3),t._v(" "),e("div",{staticClass:"confirmReceiptBottom2"},[e("button",{staticClass:"fr no",on:{click:function(s){t.shut=!1}}},[t._v("关闭")]),t._v(" "),e("button",{staticClass:"fr yes",on:{click:t.cancelOrderEvent}},[t._v("确认")])])])])]):t._e(),t._v(" "),t.deleteCheck?e("div",{style:t.popup},[e("div",{staticClass:"confirmReceipt"},[e("div",{staticClass:"confirmReceiptTop"},[e("span",{staticClass:"again-once"},[t._v("删除订单")]),t._v(" "),e("span",{staticClass:"spanx",on:{click:function(s){t.deleteCheck=!1}}},[t._v("x")])]),t._v(" "),e("div",{staticClass:"confirmReceiptBottom"},[t._m(4),t._v(" "),e("div",{staticClass:"confirmReceiptBottom2"},[e("button",{staticClass:"fr no",on:{click:function(s){t.deleteCheck=!1}}},[t._v("关闭")]),t._v(" "),e("button",{staticClass:"fr yes",on:{click:t.deleteOrder}},[t._v("确认")])])])])]):t._e(),t._v(" "),t.replyCheck?e("div",{style:t.popup},[e("div",{staticClass:"confirmReceipt confirmReceipt1"},[e("div",{staticClass:"confirmReceiptTop"},[e("span",{staticClass:"again-once"},[t._v("商家回复")]),t._v(" "),e("span",{staticClass:"spanx",on:{click:function(s){t.replyCheck=!1}}},[t._v("x")])]),t._v(" "),e("div",{staticClass:"confirmReceiptBottom"},[e("div",{staticClass:"confirmReceiptBottom1",attrs:{id:"shopping-reply"}},t._l(t.shopsReplyList,function(s){return e("div",[t._v(t._s(s))])})),t._v(" "),e("div",{staticClass:"confirmReceiptBottom2"},[e("button",{staticClass:"fr no",on:{click:function(s){t.replyCheck=!1}}},[t._v("关闭")]),t._v(" "),e("button",{staticClass:"fr yes",on:{click:function(s){t.replyCheck=!1}}},[t._v("确认")])])])])]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.logisticsDetails,expression:"logisticsDetails"}],style:t.popup},[e("div",{staticClass:"confirmReceiptone confirmReceipt1one",style:t.confirmReceiptone},[e("div",{staticClass:"confirmReceiptTopone"},[e("span",{staticClass:"again-once"},[t._v("物流详情")]),t._v(" "),e("span",{staticClass:"spanxone",on:{click:function(s){t.logisticsDetails=!1}}},[t._v("x")])]),t._v(" "),e("div",{staticClass:"confirmReceiptBottomone"},[t._l(t.logList,function(s,a){return e("div",{staticClass:"confirmReceiptBottom1one"},[e("p",{staticClass:"p1one"},[e("span",[t._v(t._s(s.timer))]),t._v(" "),e("span",[t._v(t._s(s.status))])])])}),t._v(" "),e("div",{staticClass:"confirmReceiptBottom2one"},[e("button",{staticClass:"fr noone",on:{click:function(s){t.logisticsDetails=!1}}},[t._v("关闭")]),t._v(" "),e("button",{staticClass:"fr yesone",on:{click:function(s){t.logisticsDetails=!1}}},[t._v("确认")])])],2)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"fl"},[e("li",{staticClass:"fl li1"},[t._v("商品")]),t._v(" "),e("li",{staticClass:"fl li2"},[t._v("单价")]),t._v(" "),e("li",{staticClass:"fl li3"},[t._v("数量")]),t._v(" "),e("li",{staticClass:"fl li5"},[t._v("交易操作")]),t._v(" "),e("li",{staticClass:"fl li4"},[t._v("优惠金额")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"confirmReceiptBottom1"},[s("p",{staticClass:"p1"},[this._v("请收到货后，再确认收货！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"confirmReceiptBottom1"},[s("p",{staticClass:"p1"},[this._v("很抱歉，库存不足，无法下单！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"confirmReceiptBottom1"},[s("p",{staticClass:"p1"},[this._v("您确定要取消该订单吗？取消订单后，不能恢复")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"confirmReceiptBottom1"},[s("p",{staticClass:"p1"},[this._v("删除后订单不可恢复，是否继续删除")])])}]};var d=e("VU/8")(c,l,!1,function(t){e("/PS/")},"data-v-8a67e252",null);s.default=d.exports},fBQ2:function(t,s,e){"use strict";var a=e("evD5"),i=e("X8DO");t.exports=function(t,s,e){s in t?a.f(t,s,i(0,e)):t[s]=e}},qyJz:function(t,s,e){"use strict";var a=e("+ZMJ"),i=e("kM2E"),o=e("sB3e"),n=e("msXi"),r=e("Mhyx"),c=e("QRG4"),l=e("fBQ2"),d=e("3fs2");i(i.S+i.F*!e("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var s,e,i,_,u=o(t),v="function"==typeof this?this:Array,p=arguments.length,f=p>1?arguments[1]:void 0,m=void 0!==f,h=0,g=d(u);if(m&&(f=a(f,p>2?arguments[2]:void 0,2)),void 0==g||v==Array&&r(g))for(e=new v(s=c(u.length));s>h;h++)l(e,h,m?f(u[h],h):u[h]);else for(_=g.call(u),e=new v;!(i=_.next()).done;h++)l(e,h,m?n(_,f,[i.value,h],!0):i.value);return e.length=h,e}})}});