webpackJsonp([6],{"5zde":function(t,e,s){s("zQR9"),s("qyJz"),t.exports=s("FeBl").Array.from},Gu7T:function(t,e,s){"use strict";e.__esModule=!0;var a,r=s("c/Tr"),o=(a=r)&&a.__esModule?a:{default:a};e.default=function(t){if(Array.isArray(t)){for(var e=0,s=Array(t.length);e<t.length;e++)s[e]=t[e];return s}return(0,o.default)(t)}},QEH3:function(t,e,s){"use strict";var a=s("Gu7T"),r=s.n(a),o={data:function(){return{content:""}},props:{endTime:{type:String,default:""},endText:{type:String,default:"已结束"},callback:{type:Function,default:""}},mounted:function(){this.countdowm(this.endTime)},methods:{countdowm:function(t){var e=this,s=setInterval(function(){var a=new Date,r=new Date(1e3*t).getTime()-a.getTime();if(r>0){var o=Math.floor(r/864e5),n=Math.floor(r/36e5%24),i=Math.floor(r/6e4%60),l=Math.floor(r/1e3%60);n=n<10?"0"+n:n,i=i<10?"0"+i:i,l=l<10?"0"+l:l;var d="";o>0&&(d=o+"天"+n+"小时"+i+"分"+l+"秒"),o<=0&&n>0&&(d=n+"小时"+i+"分"+l+"秒"),o<=0&&n<=0&&(d=i+"分"+l+"秒"),e.content=d}else clearInterval(s),e.content=e.endText,e._callback()},1e3)},_callback:function(){this.callback&&this.callback instanceof Function&&this.callback.apply(this,r()(this))}}},n={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{endTime:this.endTime,callback:this.callback,endText:this.endText}},[this._t("default",[this._v("\n    "+this._s(this.content)+"\n  ")])],2)},staticRenderFns:[]},i=s("VU/8")(o,n,!1,null,null,null);e.a=i.exports},X88L:function(t,e){},YGoV:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("bOdI"),r=s.n(a),o=s("Q4vP"),n=s("WpU2"),i=s("CSRX"),l=s("QEH3"),d=s("Lmvl"),_={components:{homeHeader:o.a,search:n.a,contentHeader:i.a,countDown:l.a,publicFooter:d.a},data:function(){return r()({RefundDetail:[],ocrStatustxt1:"",ocrStatustxt2:"",aLLAmount:0,allShouldPay:0,isDischangeApply:!0,applyStatus:null,orderTimeSpan:"0",lineSpanTime:[]},"ocrStatustxt2","")},mounted:function(){this.getRefundInfo()},methods:{getRefundInfo:function(){var t=this;this.$getAxios({url:"/mall/getPcRefundDetail",method:"get",params:{userId:this.$cookies.get("userId"),token:this.$cookies.get("token"),refundOrderId:this.$cookies.get("refundOrderId")}}).then(function(e){var s=e.data.extend.success;console.log(s),t.RefundDetail=[],t.lineSpanTime=[];for(var a=0;a<s.length;a++){console.log(s[a].buyer_leave_word);for(var r={leave_words:s[a].leave_words,buyer_leave_word:s[a].buyer_leave_word,address:s[a].address,refund_total_fee:s[a].refund_total_fee,express_fee:s[a].express_fee,total_fee:s[a].total_fee,refund_type:s[a].refund_type,refundOrderSerialNumber:s[a].refundOrderSerialNumber,orderSerialNumber:s[a].orderSerialNumber,order_close_reason:{ocrId:s[a].order_close_reason.ocrId,ocrStatus:s[a].order_close_reason.ocrStatus,orderCloseReason:s[a].order_close_reason.orderCloseReason},refund_images:[],refund_order_status:[],goods:[]},o=0;o<s[a].refund_images.length;o++){var n=s[a].refund_images[o].riUrl;r.refund_images.push(n)}for(var i=0;i<s[a].refund_order_status.length;i++){var l={addTime:s[a].refund_order_status[i].addTime,rosStatus:s[a].refund_order_status[i].rosStatus,isNewState:s[a].refund_order_status[i].isNewState};r.refund_order_status.push(l)}for(var d=0;d<s[a].order_detail.length;d++){for(var _="",u=0;u<s[a].order_detail[d].goods.goods_images.length;u++){_=s[a].order_detail[d].goods.goods_images[u].imageUrl;break}for(var c="",f="",v=0;v<s[a].order_detail[d].goods.detailCpropertyVo.length;v++)"【规格】"==s[a].order_detail[d].goods.detailCpropertyVo[v].cpName&&(c=s[a].order_detail[d].goods.detailCpropertyVo[v].value),"【厂家】"==s[a].order_detail[d].goods.detailCpropertyVo[v].cpName&&(f=s[a].order_detail[d].goods.detailCpropertyVo[v].value);t.aLLAmount+=s[a].order_detail[d].amount,t.allShouldPay+=s[a].order_detail[d].amount*s[a].order_detail[d].price;var p={name:s[a].order_detail[d].goods.name,specName:c,proName:f,price:s[a].order_detail[d].price,discounts:s[a].order_detail[d].discounts,amount:s[a].order_detail[d].amount,refundingAmount:s[a].order_detail[d].refundingAmount,refundedAmount:s[a].order_detail[d].refundedAmount,goods_images:_};r.goods.push(p)}t.RefundDetail.push(r),console.log(t.RefundDetail)}for(var m=0;m<t.RefundDetail.length;m++)for(var g=0;g<t.RefundDetail[m].refund_order_status.length;g++){var h=new Date(t.RefundDetail[m].refund_order_status[g].addTime),C=t.changeTime(h),S=t.RefundDetail[m].refund_order_status[g].rosStatus,x=t.RefundDetail[m].refund_order_status[g].isNewState;(0==S||x)&&(console.log("重构时间线----------"),console.log(S),t.RefundDetail[m].refund_order_status[g].addTime=C,t.lineSpanTime.push(t.RefundDetail[m].refund_order_status[g].addTime)),t.RefundDetail[m].refund_order_status[g].isNewState&&(t.applyStatus=t.RefundDetail[m].refund_order_status[g].rosStatus,0==t.RefundDetail[m].refund_order_status[g].rosStatus?(t.ocrStatustxt1="买家已申请",t.ocrStatustxt2="待处理"):1==t.RefundDetail[m].refund_order_status[g].rosStatus?(t.ocrStatustxt1="拒绝退款",t.ocrStatustxt2="拒绝退款"):2==t.RefundDetail[m].refund_order_status[g].rosStatus?(t.ocrStatustxt1="待买家发货",t.ocrStatustxt2="待处理"):3==t.RefundDetail[m].refund_order_status[g].rosStatus?(t.ocrStatustxt1="待卖家收货",t.ocrStatustxt2="待处理"):4==t.RefundDetail[m].refund_order_status[g].rosStatus?(t.ocrStatustxt1="买家撤销",t.ocrStatustxt2="买家撤销",t.isDischangeApply=!1):5==t.RefundDetail[m].refund_order_status[g].rosStatus&&(t.ocrStatustxt1="退款成功",t.ocrStatustxt2="退款成功",t.isDischangeApply=!1))}console.log("判断退款状态"),console.log(t.RefundDetail),console.log(t.lineSpanTime),console.log(t.ocrStatustxt1)})},dischangeApply:function(){var t=this,e="userId="+this.$cookies.get("userId")+"&token="+this.$cookies.get("token")+"&status=4&refundOrderId="+this.$cookies.get("refundOrderId");console.log(e),this.$postAxios({url:"/mall/addRefundOrderStatus",method:"post",data:e}).then(function(e){var s=e.data.extend.success;console.log(s),2e4==e.data.code?(console.log("20000"),t.$message({message:撤销失败,type:"info"})):1e4==e.data.code&&(t.getRefundInfo(),t.$message({message:撤销成功,type:"info"}))}).catch(function(t){console.log(t)})},changeTime:function(t){var e="",s="",a="",r="",o="";return e=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,s=t.getDate()<10?"0"+t.getDate():t.getDate(),a=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),o=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),t.getFullYear()+"-"+e+"-"+s+"  "+a+":"+r+":"+o}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:t.$route.meta.title,expression:"$route.meta.title"}],staticClass:"boss"},[s("div",{staticClass:"header"},[s("home-header")],1),t._v(" "),s("div",{staticClass:"search"},[s("search")],1),t._v(" "),t._l(t.RefundDetail,function(e,a){return s("div",{staticClass:"content"},[s("div",{staticStyle:{background:"#fff","line-height":"30px",color:"#666"}},[t._v("交易管理>退款售后>交易详情")]),t._v(" "),s("div",{staticClass:"order_track"},[s("p",[t._v("订单跟踪")]),t._v(" "),s("div",{staticClass:"ordertxt"},[s("span",{},[t._v("发起申请")]),t._v(" "),s("span",{},[t._v(t._s(t.ocrStatustxt2))])]),t._v(" "),s("div",{staticClass:"status_bar"},[s("span",{ref:"active10",refInFor:!0,class:t.applyStatus>=0?"active fl":"fl"},[t._v("1")]),t._v(" "),s("p",{ref:"active11",refInFor:!0,class:t.applyStatus>=0?"active line fl":"line fl"}),t._v(" "),s("p",{ref:"active30",refInFor:!0,class:t.applyStatus>=1?"active line fl":"line fl"}),t._v(" "),s("p",{ref:"active32",refInFor:!0,class:t.applyStatus>=1?"active line fl":"line fl"}),t._v(" "),s("p",{ref:"active40",refInFor:!0,class:t.applyStatus>=1?"active line fl":"line fl"}),t._v(" "),s("span",{ref:"active41",refInFor:!0,class:t.applyStatus>=1?"active fl":"fl"},[t._v("2")])]),t._v(" "),s("div",{staticClass:"orderTime"},t._l(t.lineSpanTime,function(e,a){return s("span",{staticClass:"fl"},[t._v(t._s(e))])}))]),t._v(" "),s("div",{staticClass:"orderInformation"},[s("div",{staticClass:"orderInformation_left fl"},[s("p",{staticClass:"orderInformationTxt"},[t._v("订单信息")]),t._v(" "),s("div",{staticClass:"orderInformation_left_bottom"},[s("p",{staticClass:"ptxt"},[s("span",{staticClass:"siteTxt"},[t._v("收货地址 :")]),t._v(" "),s("span",{staticClass:"site"},[t._v(t._s(e.address))])]),t._v(" "),s("p",{staticClass:"ptxt"},[s("span",{staticClass:"siteTxt"},[t._v("买家留言 :")]),t._v(" "),s("span",{staticClass:"site"},[t._v(t._s(null==e.leave_words?"暂无":e.leave_words))])]),t._v(" "),s("p",{staticClass:"ptxt"},[s("span",{staticClass:"siteTxt"},[t._v("订单编号 :")]),t._v(" "),s("span",{staticClass:"site"},[t._v(t._s(e.orderSerialNumber))])])])]),t._v(" "),s("div",{staticClass:"orderInformation_right fl"},[s("div",[s("div",{staticClass:"fl exclamation_poin"},[t._v("!")]),t._v(" "),s("div",{staticClass:"fl exclamation_poin_right"},[s("p",{staticClass:"orderInformation_right1"},[s("span",[t._v("退款状态 : ")]),t._v(" "),s("span",[t._v(t._s(t.ocrStatustxt1))])]),t._v(" "),s("p",{staticClass:"orderInformation_right2"},[s("span",[t._v("退款原因 :")]),t._v(" "),s("span",[t._v(t._s(e.order_close_reason.orderCloseReason))])]),t._v(" "),s("p",{staticClass:"orderInformation_right2"},[s("span",[t._v("退款金额 :")]),t._v(" "),s("span",[t._v("￥"+t._s(e.refund_total_fee))])]),t._v(" "),s("p",{staticClass:"orderInformation_right2"},[s("span",[t._v("申请时间 :")]),t._v(" "),s("span",[t._v(t._s(e.refund_order_status[0].addTime))])]),t._v(" "),s("p",{staticClass:"orderInformation_right2"},[s("span",[t._v("退款编号 :")]),t._v(" "),s("span",[t._v(t._s(e.refundOrderSerialNumber))])]),t._v(" "),s("p",{staticClass:"orderInformation_right2"},[s("span",[t._v("退款说明 :")]),t._v(" "),s("span",[t._v(t._s(null==e.buyer_leave_word?"暂无":e.buyer_leave_word))])]),t._v(" "),s("p",{staticClass:"orderInformation_right2"},[s("span",[t._v("退款凭证 :")]),t._v(" "),t._l(e.refund_images,function(a,r){return""!=e.refund_images?s("span",[s("img",{attrs:{src:a}})]):t._e()}),t._v(" "),""==e.refund_images?s("span",[t._v("暂无")]):t._e()],2),t._v(" "),t.isDischangeApply?s("button",{staticClass:"imgframe",on:{click:t.dischangeApply}},[t._v("撤销申请")]):t._e()])])])]),t._v(" "),s("div",{staticClass:"goods_centent"},[t._m(0,!0),t._v(" "),s("div",{staticClass:"goods_centent_box fl"},t._l(e.goods,function(e,a){return s("div",{staticClass:"moreGoods_centent"},[s("div",{staticClass:"fl li1"},[s("img",{staticClass:"fl",attrs:{src:e.goods_images}}),t._v(" "),s("div",{staticClass:"fl txt"},[e.name?s("span",{staticClass:"span1"},[t._v(t._s(e.name))]):t._e(),t._v(" "),e.specName?s("span",{staticClass:"span1"},[t._v(t._s(e.specName))]):t._e(),t._v(" "),e.proName?s("span",{staticClass:"span1"},[t._v(t._s(e.proName))]):t._e()])]),t._v(" "),s("div",{staticClass:"fl li2"},[t._v(t._s(null==e.price?"0":e.price))]),t._v(" "),s("div",{staticClass:"fl li3"},[t._v(t._s(null==e.discounts?"0":e.discounts))]),t._v(" "),s("div",{staticClass:"fl li4"},[t._v(t._s(null==e.amount?"0":e.amount))]),t._v(" "),s("div",{staticClass:"fl li5"},[t._v(t._s(null==e.refundedAmount?"0":e.refundedAmount))]),t._v(" "),s("div",{staticClass:"fl li6"},[t._v(t._s(null==e.refundingAmount?"0":e.refundingAmount))])])}))]),t._v(" "),s("div",{staticClass:"goods_number"},[s("div",{staticClass:"fl goods_number_left"},[t._v("商品数量:共"+t._s(t.aLLAmount)+"件")]),t._v(" "),s("div",{staticClass:"fr goods_number_right"},[s("p",[s("span",{staticClass:"goods_number_txt1 fl"},[t._v("商品总价 :")]),s("span",{staticClass:"goods_number_txt2 fl"},[t._v("￥"+t._s(t.allShouldPay))])]),t._v(" "),s("p",[s("span",{staticClass:"goods_number_txt1 fl"},[t._v("运费 :")]),s("span",{staticClass:"goods_number_txt2 fl"},[t._v("￥"+t._s(e.express_fee))])]),t._v(" "),s("p",[s("span",{staticClass:"goods_number_txt1 fl"},[t._v("订单总价 :")]),s("span",{staticClass:"goods_number_txt2 fl"},[t._v("￥"+t._s(e.total_fee))])]),t._v(" "),s("p",[s("span",{staticClass:"goods_number_txt1 fl"},[t._v("退款金额:")]),s("span",{staticClass:"goods_number_txt2 fl font_color"},[t._v("￥"+t._s(e.refund_total_fee))])])])])])}),t._v(" "),s("div",{staticClass:"footer-wrapper"},[s("publicFooter")],1)],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"fl"},[s("li",{staticClass:"fl li1"},[t._v("商品")]),t._v(" "),s("li",{staticClass:"fl li2"},[t._v("单价")]),t._v(" "),s("li",{staticClass:"fl li3"},[t._v("优惠金额")]),t._v(" "),s("li",{staticClass:"fl li4"},[t._v("购买数量")]),t._v(" "),s("li",{staticClass:"fl li5"},[t._v("已退数量")]),t._v(" "),s("li",{staticClass:"fl li6"},[t._v("退货数量")])])}]};var c=s("VU/8")(_,u,!1,function(t){s("X88L")},"data-v-106a95ae",null);e.default=c.exports},"c/Tr":function(t,e,s){t.exports={default:s("5zde"),__esModule:!0}},dY0y:function(t,e,s){var a=s("dSzd")("iterator"),r=!1;try{var o=[7][a]();o.return=function(){r=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var s=!1;try{var o=[7],n=o[a]();n.next=function(){return{done:s=!0}},o[a]=function(){return n},t(o)}catch(t){}return s}},fBQ2:function(t,e,s){"use strict";var a=s("evD5"),r=s("X8DO");t.exports=function(t,e,s){e in t?a.f(t,e,r(0,s)):t[e]=s}},qyJz:function(t,e,s){"use strict";var a=s("+ZMJ"),r=s("kM2E"),o=s("sB3e"),n=s("msXi"),i=s("Mhyx"),l=s("QRG4"),d=s("fBQ2"),_=s("3fs2");r(r.S+r.F*!s("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,s,r,u,c=o(t),f="function"==typeof this?this:Array,v=arguments.length,p=v>1?arguments[1]:void 0,m=void 0!==p,g=0,h=_(c);if(m&&(p=a(p,v>2?arguments[2]:void 0,2)),void 0==h||f==Array&&i(h))for(s=new f(e=l(c.length));e>g;g++)d(s,g,m?p(c[g],g):c[g]);else for(u=h.call(c),s=new f;!(r=u.next()).done;g++)d(s,g,m?n(u,p,[r.value,g],!0):r.value);return s.length=g,s}})}});