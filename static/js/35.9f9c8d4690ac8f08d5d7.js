webpackJsonp([35],{fvOP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:function(){return{noMore:!1,isPages:!1,orderData:[],countRequest:!1,totalPages:1,pageSize:10,pageNum:1,totalData:0,timer:[],countTimer:null,loading:!0,loadingTimer:null,href:null}},mounted:function(){this.href=window.location.href,this.$cookies.get("userId")&&this.$cookies.get("token")?this.getWaitReceiving():(this.$cookies.remove("userId"),this.$cookies.remove("token"),this.$router.push({path:"/wholesalerLogin?redirectUrl="+this.href}))},activated:function(){this.pageNum>1&&(this.pageNum=1,this.getWaitReceiving())},destroyed:function(){clearInterval(this.countTimer)},methods:{togoodDetails:function(e){window.open("#/product_details/"+e+"?goodsId="+e)},toDetails:function(e){this.$cookies.set("orderId",e,{expires:.1}),window.open("#/orderDetails?orderId="+e)},paymentEvent:function(e){this.$router.push("/submissionSuccess?orderId="+e)},openAgainOrder:function(e){var t=this;this.$cookies.get("userId")&&this.$cookies.get("token")?this.$postAxios({url:"/mall/reBuyForOrderCenter",method:"post",data:"userId="+this.$cookies.get("userId")+"&token="+this.$cookies.get("token")+"&orderId="+e.orderId}).then(function(a){if(1e4==a.data.code){t.oneMoreOrder=a.data.extend.success,t.$countStore.state.cartList.getCountDate();var s=[];e.detailList.forEach(function(e){s.push(e.goodsSkuId)}),t.$router.push({name:"shoppingCart",params:{goodsId:s}})}else if(2e4==a.data.code){a.data.extend.err_code.indexOf("令牌失效")>-1?(t.$cookies.remove("userId"),t.$cookies.remove("token"),t.$router.push({path:"/wholesalerLogin?redirectUrl="+t.href})):t.$message({showClose:!0,duration:1600,message:"网络异常，请您重新刷新"})}}).catch(function(e){t.$message({showClose:!0,duration:1600,message:"网络异常，请您重新刷新"})}):(_this.$cookies.remove("userId"),_this.$cookies.remove("token"),_this.$router.push({path:"/wholesalerLogin"}))},scrollEvent:function(){var e=this.$refs.waitCont.offsetTop;window.scrollTo(100,e)},loadingEvent:function(){var e=this;this.loadingTimer=setTimeout(function(){e.loading=!1},3e3)},nextPage:function(){this.$countStore.state.orderNumber.paymentNum--,this.pageNum<this.totalPages&&(this.isPages=!1,this.loading=!0,this.pageNum++,this.getWaitReceiving())},prePage:function(){this.isPages=!1,this.loading=!0,this.pageNum>1?(this.pageNum--,this.getWaitReceiving()):(this.pageNum=1,this.getWaitReceiving())},handleSizeChange:function(e){this.pageSize=e,this.pageNum=1},handleCurrentChange:function(e){this.isPages=!1,this.loading=!0,this.pageNum=e,this.scrollEvent(),this.getWaitReceiving()},countOrderByUserId:function(){var e=this,t="userId="+this.$cookies.get("userId")+"&status=0";this.$postAxios({url:"/mall/countOrderByUserIdAndStatus",method:"post",data:t}).then(function(t){if(2e4==t.data.code)t.data.extend.err_code.indexOf("令牌失效")>-1&&(e.$cookies.remove("userId"),e.$cookies.remove("token"),e.$router.push({path:"/wholesalerLogin?redirectUrl="+e.href}));else if(1e4==t.data.code){var a=t.data.extend.success;null!=a&&(e.totalData=a,e.totalPages=Math.ceil(a/e.pageSize))}}).catch(function(e){console.log(e)})},refundOrderStatus:function(e){return 0==e?"已申请售后":1==e?"":2==e?"已申请售后":3==e?"已申请售后":4==e?"":5==e?"退款成功":void 0},daojishiEvent:function(){var e=this,t=this;this.countTimer=setInterval(function(){e.orderData.forEach(function(e,a){if(1==e.isCount){var s=1e3*parseInt(e.ots_periods_of_time)+parseInt(e.new_addTime)-(new Date).getTime();if(s>0){var i=Math.floor(s/1e3/60/60/24),o=Math.floor(s/1e3/60/60%24),r=Math.floor(s/1e3/60%60),n=Math.floor(s/1e3%60);r=r<10?"0"+r:r,n=n<10?"0"+n:n,e.daojs=i>0?"还剩"+i+"天"+o+"小时":o>=1?"还剩"+o+":"+r+":"+n:"还剩00:"+r+":"+n}else e.daojs="",e.isCount=!1,1==t.orderData.length&&t.pageNum>1&&t.pageNum--,1==t.totalData?(t.totalData=0,t.$countStore.state.orderNumber.paymentNum=0):t.$countStore.state.orderNumber.paymentNum--,t.loading=!0,t.getWaitReceiving()}})},1e3)},forlataTime:function(e){var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var i=t.getDate();i=i<10?"0"+i:i;var o=t.getHours(),r=t.getMinutes();r=r<10?"0"+r:r;var n=t.getSeconds();return n=n<10?"0"+n:n,a+"-"+s+"-"+i+" "+o+":"+r},getWaitReceiving:function(){var e=this,t=this.$cookies.get("userId"),s=this;null!=this.countTimer&&clearInterval(this.countTimer),this.$getAxios({url:"/mall/pc/listOrderDate",method:"get",params:{userId:t,startDate:"",endDate:"",orderStatus:0,commentStatus:"",customerService:"",goodsNameOrCode:"",payWay:"",pageNo:s.pageNum,number:s.pageSize}}).then(function(t){if(s.orderData=[],2e4==t.data.code)s.noMore=!0,t.data.extend.err_code.indexOf("令牌失效")>-1?(s.$cookies.remove("userId"),s.$cookies.remove("token"),s.$router.push({path:"/wholesalerLogin"})):(e.$message({showClose:!0,duration:1600,message:"网络异常，请您重新刷新"}),s.loading=!1);else if(1e4==t.data.code){s.noMore=!1,s.isPages=!0,s.loading=!1;var i=t.data.extend.success;i.length>0&&(s.totalData=i[0].count,s.totalPages=Math.ceil(s.totalData/s.pageSize));for(var o=0;o<i.length;o++){var r={payWay:i[o].payWay,orderId:i[o].orderId,orderSerialNumber:i[o].orderSerialNumber,goodsTotalFee:i[o].goodsTotalFee,addTime:i[o].addTime,totalBuyerPay:i[o].totalBuyerPay,ots_periods_of_time:i[o].ots_periods_of_time,expressFee:i[o].expressFee,isCount:!1,daojs:""};0==r.payWay?r.mode="支付方式 :余额支付":1==r.payWay?r.mode="支付方式 :支付宝支付":2==r.payWay?r.mode="支付方式 :微信支付":3==r.payWay?r.mode="支付方式 :货到付款":null==r.payWay&&(r.mode="支付方式 :未选择支付方式"),r.addTime=s.forlataTime(i[o].addTime);for(var n=0;n<t.data.extend.success[o].status.length;n++)if(0==i[o].status[n].status){r.statusWord="等待买家付款",r.status=i[o].status[n].status,r.new_addTime=i[o].status[n].addTime;var l=1e3*parseInt(r.ots_periods_of_time)+parseInt(r.new_addTime)-(new Date).getTime();if(l>0){r.isCount=!0;var d=Math.floor(l/1e3/60/60/24),c=Math.floor(l/1e3/60/60%24),u=Math.floor(l/1e3/60%60),g=Math.floor(l/1e3%60);u=u<10?"0"+u:u,g=g<10?"0"+g:g,r.daojs=d>0?"还剩"+d+"天"+c+"小时":c>=1?"还剩"+c+":"+u+":"+g:"还剩00:"+u+":"+g}}r.detailList=[],r.stool=0;for(var v=0,h=0;h<i[o].detail.length;h++){r.stool+=1*i[o].detail[h].amount;var _={amount:i[o].detail[h].amount,goodsSkuId:i[o].detail[h].goodsSkuId,price:i[o].detail[h].price,orderDetailId:i[o].detail[h].orderDetailId};null==i[o].detail[h].refund_order_status||""==i[o].detail[h].refund_order_status?_.isRefundCheck=!1:(_.isRefundCheck=!0,_.refundWord=s.refundOrderStatus(i[o].detail[h].refund_order_status.rosStatus)),_.iconUrlList=[];var m=i[o].detail[h].activityAndFlashSaleIconUrl;if(null==m||""==m);else{var f={};null!=m.activityIconUrl&&""!=m.activityIconUrl&&(f.iconUrl=m.activityIconUrl),null!=m.fsIconUrl&&""!=m.fsIconUrl&&(f.iconUrl=m.fsIconUrl),_.iconUrlList.push(f)}if(null!=i[o].detail[h].goods&&""!=i[o].detail[h].goods){_.goodsId=i[o].detail[h].goods.goodId,_.name=i[o].detail[h].goods.name;var p=i[o].detail[h].goods.detailCpropertyVo;if(_.specification="",_.manufacturers="",0==p.length||null==p);else for(var C=0;C<p.length;C++)p[C].cpName.indexOf("厂家")>-1?_.manufacturers=p[C].value:p[C].cpName.indexOf("规格")>-1&&(_.specification=p[C].value);var I=i[o].detail[h].goods.goods_images;if(null==I||0==I.length)_.imageUrl=a("ADp8");else for(var y=0;y<I.length;y++)if(1==I[y].isHead){null==I[y].imageUrl||""==I[y].imageUrl||(_.imageUrl=I[y].imageUrl);break}void 0==_.imageUrl?_.imageUrl=a("ADp8"):_.imageUrl=_.imageUrl+"?x-oss-process=style/fixed_60_60",r.detailList.push(_)}else v++}v==i[o].detail.length&&i[o].detail.length>0||s.orderData.push(r)}0==s.orderData.length?(s.noMore=!0,0==s.totalData&&(s.isPages=!1)):(s.noMore=!1,s.isPages=!0,s.daojishiEvent())}}).catch(function(t){s.noMore=!0,s.isPages=!1,s.loading=!1,s.orderData=[],e.$message({showClose:!0,duration:1600,message:"网络异常，请您重新刷新"}),console.log(t)})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"wait-receiving"}},[a("div",{staticClass:"ord_center_box"},[a("div",{ref:"waitCont",staticClass:"wait-content"},[a("div",{staticClass:"list_txt"},[e._m(0),e._v(" "),e.totalData>0?a("div",[a("button",{staticClass:"fr",class:e.pageNum==e.totalPages?"prevPage":"",attrs:{disabled:e.pageNum==e.totalPages},on:{click:e.nextPage}},[e._v("下一页")]),e._v(" "),a("button",{staticClass:"fr",class:1==e.pageNum?"prevPage":"",attrs:{disabled:1==e.pageNum},on:{click:e.prePage}},[e._v("上一页")])]):e._e()]),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"all_centent_box clear"},e._l(e.orderData,function(t,s){return a("div",{key:s,staticClass:"all_centent clear"},[a("div",{staticClass:"all_centent_header"},[a("el-checkbox"),e._v(" "),a("span",[e._v("订单号："+e._s(t.orderSerialNumber))]),e._v(" "),a("span",[e._v("下单时间："+e._s(t.addTime))]),e._v(" "),a("span",[e._v(e._s(t.mode))])],1),e._v(" "),a("table",{attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("tr",[a("td",{staticClass:"order_data1"},e._l(t.detailList,function(t,s){return a("div",{key:s},[a("tr",[a("td",{staticClass:"detailList1",on:{click:function(a){e.togoodDetails(t.goodsId)}}},[a("div",{staticClass:"fl goodsImg"},[a("img",{attrs:{src:t.imageUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"detailList1-content fl"},[a("div",{staticClass:"goods_name"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"goods_names"},[e._v(e._s(t.specification))]),e._v(" "),a("div",{staticClass:"goods_names"},[e._v(e._s(t.manufacturers))]),e._v(" "),t.iconUrlList.length>0?a("div",{staticClass:"activeIcon"},[e._l(t.iconUrlList,function(t,s){return s<2?a("div",{staticClass:"fl activeIcon-iconUrl",staticStyle:{display:"block"}},[a("img",{attrs:{src:t.iconUrl,alt:""}})]):e._e()}),e._v(" "),t.iconUrlList.length>2?a("div",{staticClass:"more_activities"},[e._l(t.iconUrlList,function(e,t){return a("div",{staticClass:"fl"},[a("img",{attrs:{src:e.iconUrl,alt:""}})])}),e._v(" "),a("span")],2):e._e()],2):e._e()])]),e._v(" "),a("td",{staticClass:"detailList2"},[e._v("￥"+e._s(t.price))]),e._v(" "),a("td",{staticClass:"detailList3"},[e._v(e._s(t.amount))]),e._v(" "),a("td",{staticClass:"detailList4"})])])})),e._v(" "),a("td",{staticClass:"order_data2"},[a("div",[a("span",{staticStyle:{"font-weight":"bold","line-height":"23px"}},[e._v("￥"+e._s(t.totalBuyerPay))]),e._v(" "),a("span",[e._v("(含运费：￥"+e._s(t.expressFee)+")")])])]),e._v(" "),a("td",{staticClass:"order_data3"},[a("div",[a("span",[e._v(e._s(t.statusWord))]),e._v(" "),a("span",{staticClass:"details-style",on:{click:function(a){e.toDetails(t.orderId)}}},[e._v("订单详情")])])]),e._v(" "),a("td",{staticClass:"order_data4"},[a("div",[a("span",{staticClass:"djsbox"},[e._v(e._s(t.daojs))]),e._v(" "),t.daojs?a("span",{staticClass:"djsbox"},[e._v("订单自动关闭")]):e._e(),e._v(" "),a("span",[a("button",{staticClass:"paymentBtn",on:{click:function(a){e.paymentEvent(t.orderId)}}},[e._v("去付款")])]),e._v(" "),a("span",[a("button",{staticClass:"single_again",on:{click:function(a){e.openAgainOrder(t)}}},[e._v("再来一单")])])])])])])])})),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isPages,expression:"isPages"}],staticClass:"page"},[a("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[10,20,50],"page-size":e.pageSize,layout:" prev, pager, next, jumper",total:e.totalData},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),e.noMore?a("div",{staticClass:"none-more"},[e._v("暂无更多订单")]):e._e()])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",{staticClass:"fl list_txt1"},[e._v("商品")]),e._v(" "),a("li",{staticClass:"fl list_txt2"},[e._v("单价")]),e._v(" "),a("li",{staticClass:"fl list_txt3"},[e._v("数量")]),e._v(" "),a("li",{staticClass:"fl list_txt7"},[e._v("申请售后")]),e._v(" "),a("li",{staticClass:"fl list_txt4"},[e._v("实付款")]),e._v(" "),a("li",{staticClass:"fl list_txt5"},[e._v("交易状态")]),e._v(" "),a("li",{staticClass:"fl list_txt6"},[e._v("交易操作")])])}]};var o=a("VU/8")(s,i,!1,function(e){a("w5Lr")},"data-v-4b36c9de",null);t.default=o.exports},w5Lr:function(e,t){}});