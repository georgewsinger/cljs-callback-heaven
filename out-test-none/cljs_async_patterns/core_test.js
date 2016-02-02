// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core_test');
goog.require('cljs.core');
goog.require('cljs_async_patterns.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
/**
 * Executes a 1-argument callback.
 */
cljs_async_patterns.core_test.async_1 = (function cljs_async_patterns$core_test$async_1(arg,cb){
if(cljs.core._EQ_.call(null,arg,"err")){
return cb.call(null,null);
} else {
return cb.call(null,"suc");

}
});
/**
 * Executes a 2-argument callback.
 */
cljs_async_patterns.core_test.async_2 = (function cljs_async_patterns$core_test$async_2(arg,cb){
if(cljs.core._EQ_.call(null,arg,"err")){
return cb.call(null,"err",null);
} else {
return cb.call(null,null,"suc");

}
});
/**
 * Executes a 3-argument callback.
 */
cljs_async_patterns.core_test.async_3 = (function cljs_async_patterns$core_test$async_3(arg,cb){
if(cljs.core._EQ_.call(null,arg,"err1")){
return cb.call(null,"err1",null,null);
} else {
if(cljs.core._EQ_.call(null,arg,"err2")){
return cb.call(null,null,"err2",null);
} else {
return cb.call(null,null,null,"suc");

}
}
});
cljs_async_patterns.core_test.async_2_saturated = (function cljs_async_patterns$core_test$async_2_saturated(arg,cb){
return cb.call(null,"err","suc");
});
cljs_async_patterns.core_test.async_3_saturated = (function cljs_async_patterns$core_test$async_3_saturated(arg,cb){
return cb.call(null,"err1","err2","suc");
});
cljs_async_patterns.core_test._GT_1_test = (function cljs_async_patterns$core_test$_GT_1_test(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT_1_test.cljs$lang$var);
});
cljs_async_patterns.core_test._GT_1_test.cljs$lang$test = (function (){
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104 = (function (meta29105){
this.meta29105 = meta29105;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29106,meta29105__$1){
var self__ = this;
var _29106__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104(meta29105__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29106){
var self__ = this;
var _29106__$1 = this;
return self__.meta29105;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_29233){
var state_val_29234 = (state_29233[(1)]);
if((state_val_29234 === (7))){
var inst_29130 = (state_29233[(7)]);
var inst_29140 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29141 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29142 = cljs.core.List.EMPTY;
var inst_29143 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29144 = cljs.core.cons.call(null,inst_29143,inst_29130);
var inst_29145 = cljs.core._conj.call(null,inst_29142,inst_29144);
var inst_29146 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29147 = cljs.core._conj.call(null,inst_29145,inst_29146);
var inst_29148 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29141,inst_29147,null];
var inst_29149 = cljs.core.PersistentHashMap.fromArrays(inst_29140,inst_29148);
var inst_29150 = cljs.test.do_report.call(null,inst_29149);
var state_29233__$1 = state_29233;
var statearr_29235_29444 = state_29233__$1;
(statearr_29235_29444[(2)] = inst_29150);

(statearr_29235_29444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (20))){
var inst_29206 = (state_29233[(8)]);
var inst_29209 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29210 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29211 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29206);
var inst_29212 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29210,inst_29211,null];
var inst_29213 = cljs.core.PersistentHashMap.fromArrays(inst_29209,inst_29212);
var inst_29214 = cljs.test.do_report.call(null,inst_29213);
var state_29233__$1 = state_29233;
var statearr_29236_29445 = state_29233__$1;
(statearr_29236_29445[(2)] = inst_29214);

(statearr_29236_29445[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (1))){
var inst_29109 = (state_29233[(9)]);
var inst_29108 = (state_29233[(10)]);
var inst_29110 = (state_29233[(11)]);
var inst_29108__$1 = cljs.core.async.chan.call(null,(1));
var inst_29109__$1 = cljs.core.async.chan.call(null,(1));
var inst_29110__$1 = cljs.core.async.chan.call(null,(1));
var inst_29111 = cljs_async_patterns.core._GT_1.call(null,inst_29108__$1);
var inst_29112 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_29111);
var inst_29113 = cljs_async_patterns.core._GT_1.call(null,inst_29109__$1);
var inst_29114 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_29113);
var inst_29115 = cljs_async_patterns.core._GT_1.call(null,inst_29110__$1,"ERROR:");
var inst_29116 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_29115);
var state_29233__$1 = (function (){var statearr_29237 = state_29233;
(statearr_29237[(9)] = inst_29109__$1);

(statearr_29237[(12)] = inst_29116);

(statearr_29237[(10)] = inst_29108__$1);

(statearr_29237[(11)] = inst_29110__$1);

(statearr_29237[(13)] = inst_29112);

(statearr_29237[(14)] = inst_29114);

return statearr_29237;
})();
var statearr_29238_29446 = state_29233__$1;
(statearr_29238_29446[(2)] = null);

(statearr_29238_29446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (4))){
var inst_29108 = (state_29233[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29233,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29126 = cljs.core.List.EMPTY;
var inst_29127 = cljs.core._conj.call(null,inst_29126,"suc");
var state_29233__$1 = (function (){var statearr_29239 = state_29233;
(statearr_29239[(15)] = inst_29127);

return statearr_29239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29233__$1,(5),inst_29108);
} else {
if((state_val_29234 === (15))){
var inst_29169 = (state_29233[(16)]);
var inst_29190 = (state_29233[(2)]);
var state_29233__$1 = (function (){var statearr_29240 = state_29233;
(statearr_29240[(17)] = inst_29190);

return statearr_29240;
})();
var statearr_29241_29447 = state_29233__$1;
(statearr_29241_29447[(2)] = inst_29169);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (21))){
var inst_29206 = (state_29233[(8)]);
var inst_29216 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29217 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29218 = cljs.core.List.EMPTY;
var inst_29219 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29220 = cljs.core.cons.call(null,inst_29219,inst_29206);
var inst_29221 = cljs.core._conj.call(null,inst_29218,inst_29220);
var inst_29222 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29223 = cljs.core._conj.call(null,inst_29221,inst_29222);
var inst_29224 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29217,inst_29223,null];
var inst_29225 = cljs.core.PersistentHashMap.fromArrays(inst_29216,inst_29224);
var inst_29226 = cljs.test.do_report.call(null,inst_29225);
var state_29233__$1 = state_29233;
var statearr_29242_29448 = state_29233__$1;
(statearr_29242_29448[(2)] = inst_29226);

(statearr_29242_29448[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (13))){
var inst_29168 = (state_29233[(18)]);
var inst_29171 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29172 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_29173 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29168);
var inst_29174 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29172,inst_29173,null];
var inst_29175 = cljs.core.PersistentHashMap.fromArrays(inst_29171,inst_29174);
var inst_29176 = cljs.test.do_report.call(null,inst_29175);
var state_29233__$1 = state_29233;
var statearr_29243_29449 = state_29233__$1;
(statearr_29243_29449[(2)] = inst_29176);

(statearr_29243_29449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (22))){
var inst_29207 = (state_29233[(19)]);
var inst_29228 = (state_29233[(2)]);
var state_29233__$1 = (function (){var statearr_29244 = state_29233;
(statearr_29244[(20)] = inst_29228);

return statearr_29244;
})();
var statearr_29245_29450 = state_29233__$1;
(statearr_29245_29450[(2)] = inst_29207);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (6))){
var inst_29130 = (state_29233[(7)]);
var inst_29133 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29134 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29135 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29130);
var inst_29136 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29134,inst_29135,null];
var inst_29137 = cljs.core.PersistentHashMap.fromArrays(inst_29133,inst_29136);
var inst_29138 = cljs.test.do_report.call(null,inst_29137);
var state_29233__$1 = state_29233;
var statearr_29246_29451 = state_29233__$1;
(statearr_29246_29451[(2)] = inst_29138);

(statearr_29246_29451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (17))){
var inst_29193 = (state_29233[(2)]);
var inst_29194 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29195 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29196 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29195,inst_29193,null];
var inst_29197 = cljs.core.PersistentHashMap.fromArrays(inst_29194,inst_29196);
var inst_29198 = cljs.test.do_report.call(null,inst_29197);
var state_29233__$1 = state_29233;
var statearr_29247_29452 = state_29233__$1;
(statearr_29247_29452[(2)] = inst_29198);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (3))){
var inst_29117 = (state_29233[(2)]);
var inst_29118 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29119 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29120 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29119,inst_29117,null];
var inst_29121 = cljs.core.PersistentHashMap.fromArrays(inst_29118,inst_29120);
var inst_29122 = cljs.test.do_report.call(null,inst_29121);
var state_29233__$1 = state_29233;
var statearr_29248_29453 = state_29233__$1;
(statearr_29248_29453[(2)] = inst_29122);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (12))){
var inst_29165 = (state_29233[(21)]);
var inst_29168 = (state_29233[(18)]);
var inst_29169 = (state_29233[(16)]);
var inst_29167 = (state_29233[(2)]);
var inst_29168__$1 = cljs.core._conj.call(null,inst_29165,inst_29167);
var inst_29169__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29168__$1);
var state_29233__$1 = (function (){var statearr_29249 = state_29233;
(statearr_29249[(18)] = inst_29168__$1);

(statearr_29249[(16)] = inst_29169__$1);

return statearr_29249;
})();
if(cljs.core.truth_(inst_29169__$1)){
var statearr_29250_29454 = state_29233__$1;
(statearr_29250_29454[(1)] = (13));

} else {
var statearr_29251_29455 = state_29233__$1;
(statearr_29251_29455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (2))){
var inst_29154 = (state_29233[(2)]);
var state_29233__$1 = (function (){var statearr_29252 = state_29233;
(statearr_29252[(22)] = inst_29154);

return statearr_29252;
})();
var statearr_29253_29456 = state_29233__$1;
(statearr_29253_29456[(2)] = null);

(statearr_29253_29456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (19))){
var inst_29207 = (state_29233[(19)]);
var inst_29206 = (state_29233[(8)]);
var inst_29203 = (state_29233[(23)]);
var inst_29205 = (state_29233[(2)]);
var inst_29206__$1 = cljs.core._conj.call(null,inst_29203,inst_29205);
var inst_29207__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29206__$1);
var state_29233__$1 = (function (){var statearr_29254 = state_29233;
(statearr_29254[(19)] = inst_29207__$1);

(statearr_29254[(8)] = inst_29206__$1);

return statearr_29254;
})();
if(cljs.core.truth_(inst_29207__$1)){
var statearr_29255_29457 = state_29233__$1;
(statearr_29255_29457[(1)] = (20));

} else {
var statearr_29256_29458 = state_29233__$1;
(statearr_29256_29458[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (11))){
var inst_29109 = (state_29233[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29233,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_29164 = cljs.core.List.EMPTY;
var inst_29165 = cljs.core._conj.call(null,inst_29164,false);
var state_29233__$1 = (function (){var statearr_29257 = state_29233;
(statearr_29257[(21)] = inst_29165);

return statearr_29257;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29233__$1,(12),inst_29109);
} else {
if((state_val_29234 === (9))){
var inst_29192 = (state_29233[(2)]);
var state_29233__$1 = (function (){var statearr_29258 = state_29233;
(statearr_29258[(24)] = inst_29192);

return statearr_29258;
})();
var statearr_29259_29459 = state_29233__$1;
(statearr_29259_29459[(2)] = null);

(statearr_29259_29459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (5))){
var inst_29127 = (state_29233[(15)]);
var inst_29130 = (state_29233[(7)]);
var inst_29131 = (state_29233[(25)]);
var inst_29129 = (state_29233[(2)]);
var inst_29130__$1 = cljs.core._conj.call(null,inst_29127,inst_29129);
var inst_29131__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29130__$1);
var state_29233__$1 = (function (){var statearr_29260 = state_29233;
(statearr_29260[(7)] = inst_29130__$1);

(statearr_29260[(25)] = inst_29131__$1);

return statearr_29260;
})();
if(cljs.core.truth_(inst_29131__$1)){
var statearr_29261_29460 = state_29233__$1;
(statearr_29261_29460[(1)] = (6));

} else {
var statearr_29262_29461 = state_29233__$1;
(statearr_29262_29461[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (14))){
var inst_29168 = (state_29233[(18)]);
var inst_29178 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29179 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_29180 = cljs.core.List.EMPTY;
var inst_29181 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29182 = cljs.core.cons.call(null,inst_29181,inst_29168);
var inst_29183 = cljs.core._conj.call(null,inst_29180,inst_29182);
var inst_29184 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29185 = cljs.core._conj.call(null,inst_29183,inst_29184);
var inst_29186 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29179,inst_29185,null];
var inst_29187 = cljs.core.PersistentHashMap.fromArrays(inst_29178,inst_29186);
var inst_29188 = cljs.test.do_report.call(null,inst_29187);
var state_29233__$1 = state_29233;
var statearr_29263_29462 = state_29233__$1;
(statearr_29263_29462[(2)] = inst_29188);

(statearr_29263_29462[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (16))){
var inst_29230 = (state_29233[(2)]);
var inst_29231 = done.call(null);
var state_29233__$1 = (function (){var statearr_29264 = state_29233;
(statearr_29264[(26)] = inst_29230);

return statearr_29264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29233__$1,inst_29231);
} else {
if((state_val_29234 === (10))){
var inst_29155 = (state_29233[(2)]);
var inst_29156 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29157 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_29158 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29157,inst_29155,null];
var inst_29159 = cljs.core.PersistentHashMap.fromArrays(inst_29156,inst_29158);
var inst_29160 = cljs.test.do_report.call(null,inst_29159);
var state_29233__$1 = state_29233;
var statearr_29265_29463 = state_29233__$1;
(statearr_29265_29463[(2)] = inst_29160);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29234 === (18))){
var inst_29110 = (state_29233[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29233,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_29202 = cljs.core.List.EMPTY;
var inst_29203 = cljs.core._conj.call(null,inst_29202,"ERROR:");
var state_29233__$1 = (function (){var statearr_29266 = state_29233;
(statearr_29266[(23)] = inst_29203);

return statearr_29266;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29233__$1,(19),inst_29110);
} else {
if((state_val_29234 === (8))){
var inst_29131 = (state_29233[(25)]);
var inst_29152 = (state_29233[(2)]);
var state_29233__$1 = (function (){var statearr_29267 = state_29233;
(statearr_29267[(27)] = inst_29152);

return statearr_29267;
})();
var statearr_29268_29464 = state_29233__$1;
(statearr_29268_29464[(2)] = inst_29131);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_29272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29272[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_29272[(1)] = (1));

return statearr_29272;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_29233){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_29233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e29273){if((e29273 instanceof Object)){
var ex__9301__auto__ = e29273;
var statearr_29274_29465 = state_29233;
(statearr_29274_29465[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29466 = state_29233;
state_29233 = G__29466;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_29233){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_29233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_29275 = f__9319__auto__.call(null);
(statearr_29275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_29275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.prototype.apply = (function (self__,args29107){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29107)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_29401){
var state_val_29402 = (state_29401[(1)]);
if((state_val_29402 === (7))){
var inst_29298 = (state_29401[(7)]);
var inst_29308 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29309 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29310 = cljs.core.List.EMPTY;
var inst_29311 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29312 = cljs.core.cons.call(null,inst_29311,inst_29298);
var inst_29313 = cljs.core._conj.call(null,inst_29310,inst_29312);
var inst_29314 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29315 = cljs.core._conj.call(null,inst_29313,inst_29314);
var inst_29316 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29309,inst_29315,null];
var inst_29317 = cljs.core.PersistentHashMap.fromArrays(inst_29308,inst_29316);
var inst_29318 = cljs.test.do_report.call(null,inst_29317);
var state_29401__$1 = state_29401;
var statearr_29403_29467 = state_29401__$1;
(statearr_29403_29467[(2)] = inst_29318);

(statearr_29403_29467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (20))){
var inst_29374 = (state_29401[(8)]);
var inst_29377 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29378 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29379 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29374);
var inst_29380 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29378,inst_29379,null];
var inst_29381 = cljs.core.PersistentHashMap.fromArrays(inst_29377,inst_29380);
var inst_29382 = cljs.test.do_report.call(null,inst_29381);
var state_29401__$1 = state_29401;
var statearr_29404_29468 = state_29401__$1;
(statearr_29404_29468[(2)] = inst_29382);

(statearr_29404_29468[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (1))){
var inst_29277 = (state_29401[(9)]);
var inst_29278 = (state_29401[(10)]);
var inst_29276 = (state_29401[(11)]);
var inst_29276__$1 = cljs.core.async.chan.call(null,(1));
var inst_29277__$1 = cljs.core.async.chan.call(null,(1));
var inst_29278__$1 = cljs.core.async.chan.call(null,(1));
var inst_29279 = cljs_async_patterns.core._GT_1.call(null,inst_29276__$1);
var inst_29280 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_29279);
var inst_29281 = cljs_async_patterns.core._GT_1.call(null,inst_29277__$1);
var inst_29282 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_29281);
var inst_29283 = cljs_async_patterns.core._GT_1.call(null,inst_29278__$1,"ERROR:");
var inst_29284 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_29283);
var state_29401__$1 = (function (){var statearr_29405 = state_29401;
(statearr_29405[(12)] = inst_29282);

(statearr_29405[(13)] = inst_29284);

(statearr_29405[(9)] = inst_29277__$1);

(statearr_29405[(14)] = inst_29280);

(statearr_29405[(10)] = inst_29278__$1);

(statearr_29405[(11)] = inst_29276__$1);

return statearr_29405;
})();
var statearr_29406_29469 = state_29401__$1;
(statearr_29406_29469[(2)] = null);

(statearr_29406_29469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (4))){
var inst_29276 = (state_29401[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29401,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29294 = cljs.core.List.EMPTY;
var inst_29295 = cljs.core._conj.call(null,inst_29294,"suc");
var state_29401__$1 = (function (){var statearr_29407 = state_29401;
(statearr_29407[(15)] = inst_29295);

return statearr_29407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29401__$1,(5),inst_29276);
} else {
if((state_val_29402 === (15))){
var inst_29337 = (state_29401[(16)]);
var inst_29358 = (state_29401[(2)]);
var state_29401__$1 = (function (){var statearr_29408 = state_29401;
(statearr_29408[(17)] = inst_29358);

return statearr_29408;
})();
var statearr_29409_29470 = state_29401__$1;
(statearr_29409_29470[(2)] = inst_29337);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (21))){
var inst_29374 = (state_29401[(8)]);
var inst_29384 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29385 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29386 = cljs.core.List.EMPTY;
var inst_29387 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29388 = cljs.core.cons.call(null,inst_29387,inst_29374);
var inst_29389 = cljs.core._conj.call(null,inst_29386,inst_29388);
var inst_29390 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29391 = cljs.core._conj.call(null,inst_29389,inst_29390);
var inst_29392 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29385,inst_29391,null];
var inst_29393 = cljs.core.PersistentHashMap.fromArrays(inst_29384,inst_29392);
var inst_29394 = cljs.test.do_report.call(null,inst_29393);
var state_29401__$1 = state_29401;
var statearr_29410_29471 = state_29401__$1;
(statearr_29410_29471[(2)] = inst_29394);

(statearr_29410_29471[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (13))){
var inst_29336 = (state_29401[(18)]);
var inst_29339 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29340 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_29341 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29336);
var inst_29342 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29340,inst_29341,null];
var inst_29343 = cljs.core.PersistentHashMap.fromArrays(inst_29339,inst_29342);
var inst_29344 = cljs.test.do_report.call(null,inst_29343);
var state_29401__$1 = state_29401;
var statearr_29411_29472 = state_29401__$1;
(statearr_29411_29472[(2)] = inst_29344);

(statearr_29411_29472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (22))){
var inst_29375 = (state_29401[(19)]);
var inst_29396 = (state_29401[(2)]);
var state_29401__$1 = (function (){var statearr_29412 = state_29401;
(statearr_29412[(20)] = inst_29396);

return statearr_29412;
})();
var statearr_29413_29473 = state_29401__$1;
(statearr_29413_29473[(2)] = inst_29375);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (6))){
var inst_29298 = (state_29401[(7)]);
var inst_29301 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29302 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29303 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29298);
var inst_29304 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29302,inst_29303,null];
var inst_29305 = cljs.core.PersistentHashMap.fromArrays(inst_29301,inst_29304);
var inst_29306 = cljs.test.do_report.call(null,inst_29305);
var state_29401__$1 = state_29401;
var statearr_29414_29474 = state_29401__$1;
(statearr_29414_29474[(2)] = inst_29306);

(statearr_29414_29474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (17))){
var inst_29361 = (state_29401[(2)]);
var inst_29362 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29363 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29364 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29363,inst_29361,null];
var inst_29365 = cljs.core.PersistentHashMap.fromArrays(inst_29362,inst_29364);
var inst_29366 = cljs.test.do_report.call(null,inst_29365);
var state_29401__$1 = state_29401;
var statearr_29415_29475 = state_29401__$1;
(statearr_29415_29475[(2)] = inst_29366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (3))){
var inst_29285 = (state_29401[(2)]);
var inst_29286 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29287 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29288 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29287,inst_29285,null];
var inst_29289 = cljs.core.PersistentHashMap.fromArrays(inst_29286,inst_29288);
var inst_29290 = cljs.test.do_report.call(null,inst_29289);
var state_29401__$1 = state_29401;
var statearr_29416_29476 = state_29401__$1;
(statearr_29416_29476[(2)] = inst_29290);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (12))){
var inst_29333 = (state_29401[(21)]);
var inst_29336 = (state_29401[(18)]);
var inst_29337 = (state_29401[(16)]);
var inst_29335 = (state_29401[(2)]);
var inst_29336__$1 = cljs.core._conj.call(null,inst_29333,inst_29335);
var inst_29337__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29336__$1);
var state_29401__$1 = (function (){var statearr_29417 = state_29401;
(statearr_29417[(18)] = inst_29336__$1);

(statearr_29417[(16)] = inst_29337__$1);

return statearr_29417;
})();
if(cljs.core.truth_(inst_29337__$1)){
var statearr_29418_29477 = state_29401__$1;
(statearr_29418_29477[(1)] = (13));

} else {
var statearr_29419_29478 = state_29401__$1;
(statearr_29419_29478[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (2))){
var inst_29322 = (state_29401[(2)]);
var state_29401__$1 = (function (){var statearr_29420 = state_29401;
(statearr_29420[(22)] = inst_29322);

return statearr_29420;
})();
var statearr_29421_29479 = state_29401__$1;
(statearr_29421_29479[(2)] = null);

(statearr_29421_29479[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (19))){
var inst_29374 = (state_29401[(8)]);
var inst_29375 = (state_29401[(19)]);
var inst_29371 = (state_29401[(23)]);
var inst_29373 = (state_29401[(2)]);
var inst_29374__$1 = cljs.core._conj.call(null,inst_29371,inst_29373);
var inst_29375__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29374__$1);
var state_29401__$1 = (function (){var statearr_29422 = state_29401;
(statearr_29422[(8)] = inst_29374__$1);

(statearr_29422[(19)] = inst_29375__$1);

return statearr_29422;
})();
if(cljs.core.truth_(inst_29375__$1)){
var statearr_29423_29480 = state_29401__$1;
(statearr_29423_29480[(1)] = (20));

} else {
var statearr_29424_29481 = state_29401__$1;
(statearr_29424_29481[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (11))){
var inst_29277 = (state_29401[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29401,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_29332 = cljs.core.List.EMPTY;
var inst_29333 = cljs.core._conj.call(null,inst_29332,false);
var state_29401__$1 = (function (){var statearr_29425 = state_29401;
(statearr_29425[(21)] = inst_29333);

return statearr_29425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29401__$1,(12),inst_29277);
} else {
if((state_val_29402 === (9))){
var inst_29360 = (state_29401[(2)]);
var state_29401__$1 = (function (){var statearr_29426 = state_29401;
(statearr_29426[(24)] = inst_29360);

return statearr_29426;
})();
var statearr_29427_29482 = state_29401__$1;
(statearr_29427_29482[(2)] = null);

(statearr_29427_29482[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (5))){
var inst_29295 = (state_29401[(15)]);
var inst_29299 = (state_29401[(25)]);
var inst_29298 = (state_29401[(7)]);
var inst_29297 = (state_29401[(2)]);
var inst_29298__$1 = cljs.core._conj.call(null,inst_29295,inst_29297);
var inst_29299__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29298__$1);
var state_29401__$1 = (function (){var statearr_29428 = state_29401;
(statearr_29428[(25)] = inst_29299__$1);

(statearr_29428[(7)] = inst_29298__$1);

return statearr_29428;
})();
if(cljs.core.truth_(inst_29299__$1)){
var statearr_29429_29483 = state_29401__$1;
(statearr_29429_29483[(1)] = (6));

} else {
var statearr_29430_29484 = state_29401__$1;
(statearr_29430_29484[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (14))){
var inst_29336 = (state_29401[(18)]);
var inst_29346 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29347 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_29348 = cljs.core.List.EMPTY;
var inst_29349 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29350 = cljs.core.cons.call(null,inst_29349,inst_29336);
var inst_29351 = cljs.core._conj.call(null,inst_29348,inst_29350);
var inst_29352 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29353 = cljs.core._conj.call(null,inst_29351,inst_29352);
var inst_29354 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29347,inst_29353,null];
var inst_29355 = cljs.core.PersistentHashMap.fromArrays(inst_29346,inst_29354);
var inst_29356 = cljs.test.do_report.call(null,inst_29355);
var state_29401__$1 = state_29401;
var statearr_29431_29485 = state_29401__$1;
(statearr_29431_29485[(2)] = inst_29356);

(statearr_29431_29485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (16))){
var inst_29398 = (state_29401[(2)]);
var inst_29399 = done.call(null);
var state_29401__$1 = (function (){var statearr_29432 = state_29401;
(statearr_29432[(26)] = inst_29398);

return statearr_29432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29401__$1,inst_29399);
} else {
if((state_val_29402 === (10))){
var inst_29323 = (state_29401[(2)]);
var inst_29324 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29325 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_29326 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29325,inst_29323,null];
var inst_29327 = cljs.core.PersistentHashMap.fromArrays(inst_29324,inst_29326);
var inst_29328 = cljs.test.do_report.call(null,inst_29327);
var state_29401__$1 = state_29401;
var statearr_29433_29486 = state_29401__$1;
(statearr_29433_29486[(2)] = inst_29328);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29402 === (18))){
var inst_29278 = (state_29401[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29401,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_29370 = cljs.core.List.EMPTY;
var inst_29371 = cljs.core._conj.call(null,inst_29370,"ERROR:");
var state_29401__$1 = (function (){var statearr_29434 = state_29401;
(statearr_29434[(23)] = inst_29371);

return statearr_29434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29401__$1,(19),inst_29278);
} else {
if((state_val_29402 === (8))){
var inst_29299 = (state_29401[(25)]);
var inst_29320 = (state_29401[(2)]);
var state_29401__$1 = (function (){var statearr_29435 = state_29401;
(statearr_29435[(27)] = inst_29320);

return statearr_29435;
})();
var statearr_29436_29487 = state_29401__$1;
(statearr_29436_29487[(2)] = inst_29299);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_29440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29440[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_29440[(1)] = (1));

return statearr_29440;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_29401){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_29401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e29441){if((e29441 instanceof Object)){
var ex__9301__auto__ = e29441;
var statearr_29442_29488 = state_29401;
(statearr_29442_29488[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29489 = state_29401;
state_29401 = G__29489;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_29401){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_29401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_29443 = f__9319__auto__.call(null);
(statearr_29443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_29443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29105","meta29105",709602495,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test29104";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test29104");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test29104 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test29104(meta29105){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104(meta29105));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29104(null));
});

cljs_async_patterns.core_test._GT_1_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"test/cljs_async_patterns/core_test.cljs",17,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT_2_test = (function cljs_async_patterns$core_test$_GT_2_test(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT_2_test.cljs$lang$var);
});
cljs_async_patterns.core_test._GT_2_test.cljs$lang$test = (function (){
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490 = (function (meta29491){
this.meta29491 = meta29491;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29492,meta29491__$1){
var self__ = this;
var _29492__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490(meta29491__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29492){
var self__ = this;
var _29492__$1 = this;
return self__.meta29491;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_29701){
var state_val_29702 = (state_29701[(1)]);
if((state_val_29702 === (7))){
var inst_29522 = (state_29701[(7)]);
var inst_29532 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29533 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29534 = cljs.core.List.EMPTY;
var inst_29535 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29536 = cljs.core.cons.call(null,inst_29535,inst_29522);
var inst_29537 = cljs.core._conj.call(null,inst_29534,inst_29536);
var inst_29538 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29539 = cljs.core._conj.call(null,inst_29537,inst_29538);
var inst_29540 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29533,inst_29539,null];
var inst_29541 = cljs.core.PersistentHashMap.fromArrays(inst_29532,inst_29540);
var inst_29542 = cljs.test.do_report.call(null,inst_29541);
var state_29701__$1 = state_29701;
var statearr_29703_30038 = state_29701__$1;
(statearr_29703_30038[(2)] = inst_29542);

(statearr_29703_30038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (20))){
var inst_29598 = (state_29701[(8)]);
var inst_29601 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29602 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29603 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29598);
var inst_29604 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29602,inst_29603,null];
var inst_29605 = cljs.core.PersistentHashMap.fromArrays(inst_29601,inst_29604);
var inst_29606 = cljs.test.do_report.call(null,inst_29605);
var state_29701__$1 = state_29701;
var statearr_29704_30039 = state_29701__$1;
(statearr_29704_30039[(2)] = inst_29606);

(statearr_29704_30039[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (27))){
var inst_29636 = (state_29701[(9)]);
var inst_29639 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29640 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_29641 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29636);
var inst_29642 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29640,inst_29641,null];
var inst_29643 = cljs.core.PersistentHashMap.fromArrays(inst_29639,inst_29642);
var inst_29644 = cljs.test.do_report.call(null,inst_29643);
var state_29701__$1 = state_29701;
var statearr_29705_30040 = state_29701__$1;
(statearr_29705_30040[(2)] = inst_29644);

(statearr_29705_30040[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (1))){
var inst_29497 = (state_29701[(10)]);
var inst_29495 = (state_29701[(11)]);
var inst_29498 = (state_29701[(12)]);
var inst_29496 = (state_29701[(13)]);
var inst_29494 = (state_29701[(14)]);
var inst_29494__$1 = cljs.core.async.chan.call(null,(1));
var inst_29495__$1 = cljs.core.async.chan.call(null,(1));
var inst_29496__$1 = cljs.core.async.chan.call(null,(1));
var inst_29497__$1 = cljs.core.async.chan.call(null,(1));
var inst_29498__$1 = cljs.core.async.chan.call(null,(1));
var inst_29499 = cljs_async_patterns.core._GT_2.call(null,inst_29494__$1);
var inst_29500 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_29499);
var inst_29501 = cljs_async_patterns.core._GT_2.call(null,inst_29495__$1);
var inst_29502 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_29501);
var inst_29503 = cljs_async_patterns.core._GT_2.call(null,inst_29496__$1,"ERROR:");
var inst_29504 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_29503);
var inst_29505 = cljs_async_patterns.core._GT_2.call(null,inst_29497__$1);
var inst_29506 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_29505);
var inst_29507 = cljs_async_patterns.core._GT_2.call(null,inst_29498__$1,"ERROR:");
var inst_29508 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_29507);
var state_29701__$1 = (function (){var statearr_29706 = state_29701;
(statearr_29706[(15)] = inst_29500);

(statearr_29706[(16)] = inst_29502);

(statearr_29706[(17)] = inst_29504);

(statearr_29706[(18)] = inst_29508);

(statearr_29706[(10)] = inst_29497__$1);

(statearr_29706[(11)] = inst_29495__$1);

(statearr_29706[(19)] = inst_29506);

(statearr_29706[(12)] = inst_29498__$1);

(statearr_29706[(13)] = inst_29496__$1);

(statearr_29706[(14)] = inst_29494__$1);

return statearr_29706;
})();
var statearr_29707_30041 = state_29701__$1;
(statearr_29707_30041[(2)] = null);

(statearr_29707_30041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (24))){
var inst_29623 = (state_29701[(2)]);
var inst_29624 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29625 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_29626 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29625,inst_29623,null];
var inst_29627 = cljs.core.PersistentHashMap.fromArrays(inst_29624,inst_29626);
var inst_29628 = cljs.test.do_report.call(null,inst_29627);
var state_29701__$1 = state_29701;
var statearr_29708_30042 = state_29701__$1;
(statearr_29708_30042[(2)] = inst_29628);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (4))){
var inst_29494 = (state_29701[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29701,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29518 = cljs.core.List.EMPTY;
var inst_29519 = cljs.core._conj.call(null,inst_29518,"suc");
var state_29701__$1 = (function (){var statearr_29709 = state_29701;
(statearr_29709[(20)] = inst_29519);

return statearr_29709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(5),inst_29494);
} else {
if((state_val_29702 === (15))){
var inst_29561 = (state_29701[(21)]);
var inst_29582 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29710 = state_29701;
(statearr_29710[(22)] = inst_29582);

return statearr_29710;
})();
var statearr_29711_30043 = state_29701__$1;
(statearr_29711_30043[(2)] = inst_29561);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (21))){
var inst_29598 = (state_29701[(8)]);
var inst_29608 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29609 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29610 = cljs.core.List.EMPTY;
var inst_29611 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29612 = cljs.core.cons.call(null,inst_29611,inst_29598);
var inst_29613 = cljs.core._conj.call(null,inst_29610,inst_29612);
var inst_29614 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29615 = cljs.core._conj.call(null,inst_29613,inst_29614);
var inst_29616 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29609,inst_29615,null];
var inst_29617 = cljs.core.PersistentHashMap.fromArrays(inst_29608,inst_29616);
var inst_29618 = cljs.test.do_report.call(null,inst_29617);
var state_29701__$1 = state_29701;
var statearr_29712_30044 = state_29701__$1;
(statearr_29712_30044[(2)] = inst_29618);

(statearr_29712_30044[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (31))){
var inst_29661 = (state_29701[(2)]);
var inst_29662 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29663 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_29664 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29663,inst_29661,null];
var inst_29665 = cljs.core.PersistentHashMap.fromArrays(inst_29662,inst_29664);
var inst_29666 = cljs.test.do_report.call(null,inst_29665);
var state_29701__$1 = state_29701;
var statearr_29713_30045 = state_29701__$1;
(statearr_29713_30045[(2)] = inst_29666);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (32))){
var inst_29498 = (state_29701[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29701,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_29670 = cljs.core.List.EMPTY;
var inst_29671 = cljs.core._conj.call(null,inst_29670,"suc");
var state_29701__$1 = (function (){var statearr_29714 = state_29701;
(statearr_29714[(23)] = inst_29671);

return statearr_29714;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(33),inst_29498);
} else {
if((state_val_29702 === (33))){
var inst_29675 = (state_29701[(24)]);
var inst_29674 = (state_29701[(25)]);
var inst_29671 = (state_29701[(23)]);
var inst_29673 = (state_29701[(2)]);
var inst_29674__$1 = cljs.core._conj.call(null,inst_29671,inst_29673);
var inst_29675__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29674__$1);
var state_29701__$1 = (function (){var statearr_29715 = state_29701;
(statearr_29715[(24)] = inst_29675__$1);

(statearr_29715[(25)] = inst_29674__$1);

return statearr_29715;
})();
if(cljs.core.truth_(inst_29675__$1)){
var statearr_29716_30046 = state_29701__$1;
(statearr_29716_30046[(1)] = (34));

} else {
var statearr_29717_30047 = state_29701__$1;
(statearr_29717_30047[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (13))){
var inst_29560 = (state_29701[(26)]);
var inst_29563 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29564 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_29565 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29560);
var inst_29566 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29564,inst_29565,null];
var inst_29567 = cljs.core.PersistentHashMap.fromArrays(inst_29563,inst_29566);
var inst_29568 = cljs.test.do_report.call(null,inst_29567);
var state_29701__$1 = state_29701;
var statearr_29718_30048 = state_29701__$1;
(statearr_29718_30048[(2)] = inst_29568);

(statearr_29718_30048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (22))){
var inst_29599 = (state_29701[(27)]);
var inst_29620 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29719 = state_29701;
(statearr_29719[(28)] = inst_29620);

return statearr_29719;
})();
var statearr_29720_30049 = state_29701__$1;
(statearr_29720_30049[(2)] = inst_29599);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (36))){
var inst_29675 = (state_29701[(24)]);
var inst_29696 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29721 = state_29701;
(statearr_29721[(29)] = inst_29696);

return statearr_29721;
})();
var statearr_29722_30050 = state_29701__$1;
(statearr_29722_30050[(2)] = inst_29675);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (29))){
var inst_29637 = (state_29701[(30)]);
var inst_29658 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29723 = state_29701;
(statearr_29723[(31)] = inst_29658);

return statearr_29723;
})();
var statearr_29724_30051 = state_29701__$1;
(statearr_29724_30051[(2)] = inst_29637);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (6))){
var inst_29522 = (state_29701[(7)]);
var inst_29525 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29526 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29527 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29522);
var inst_29528 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29526,inst_29527,null];
var inst_29529 = cljs.core.PersistentHashMap.fromArrays(inst_29525,inst_29528);
var inst_29530 = cljs.test.do_report.call(null,inst_29529);
var state_29701__$1 = state_29701;
var statearr_29725_30052 = state_29701__$1;
(statearr_29725_30052[(2)] = inst_29530);

(statearr_29725_30052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (28))){
var inst_29636 = (state_29701[(9)]);
var inst_29646 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29647 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_29648 = cljs.core.List.EMPTY;
var inst_29649 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29650 = cljs.core.cons.call(null,inst_29649,inst_29636);
var inst_29651 = cljs.core._conj.call(null,inst_29648,inst_29650);
var inst_29652 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29653 = cljs.core._conj.call(null,inst_29651,inst_29652);
var inst_29654 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29647,inst_29653,null];
var inst_29655 = cljs.core.PersistentHashMap.fromArrays(inst_29646,inst_29654);
var inst_29656 = cljs.test.do_report.call(null,inst_29655);
var state_29701__$1 = state_29701;
var statearr_29726_30053 = state_29701__$1;
(statearr_29726_30053[(2)] = inst_29656);

(statearr_29726_30053[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (25))){
var inst_29497 = (state_29701[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29701,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_29632 = cljs.core.List.EMPTY;
var inst_29633 = cljs.core._conj.call(null,inst_29632,"suc");
var state_29701__$1 = (function (){var statearr_29727 = state_29701;
(statearr_29727[(32)] = inst_29633);

return statearr_29727;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(26),inst_29497);
} else {
if((state_val_29702 === (34))){
var inst_29674 = (state_29701[(25)]);
var inst_29677 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29678 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_29679 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29674);
var inst_29680 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29678,inst_29679,null];
var inst_29681 = cljs.core.PersistentHashMap.fromArrays(inst_29677,inst_29680);
var inst_29682 = cljs.test.do_report.call(null,inst_29681);
var state_29701__$1 = state_29701;
var statearr_29728_30054 = state_29701__$1;
(statearr_29728_30054[(2)] = inst_29682);

(statearr_29728_30054[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (17))){
var inst_29585 = (state_29701[(2)]);
var inst_29586 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29587 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29588 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29587,inst_29585,null];
var inst_29589 = cljs.core.PersistentHashMap.fromArrays(inst_29586,inst_29588);
var inst_29590 = cljs.test.do_report.call(null,inst_29589);
var state_29701__$1 = state_29701;
var statearr_29729_30055 = state_29701__$1;
(statearr_29729_30055[(2)] = inst_29590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (3))){
var inst_29509 = (state_29701[(2)]);
var inst_29510 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29511 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29512 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29511,inst_29509,null];
var inst_29513 = cljs.core.PersistentHashMap.fromArrays(inst_29510,inst_29512);
var inst_29514 = cljs.test.do_report.call(null,inst_29513);
var state_29701__$1 = state_29701;
var statearr_29730_30056 = state_29701__$1;
(statearr_29730_30056[(2)] = inst_29514);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (12))){
var inst_29560 = (state_29701[(26)]);
var inst_29557 = (state_29701[(33)]);
var inst_29561 = (state_29701[(21)]);
var inst_29559 = (state_29701[(2)]);
var inst_29560__$1 = cljs.core._conj.call(null,inst_29557,inst_29559);
var inst_29561__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29560__$1);
var state_29701__$1 = (function (){var statearr_29731 = state_29701;
(statearr_29731[(26)] = inst_29560__$1);

(statearr_29731[(21)] = inst_29561__$1);

return statearr_29731;
})();
if(cljs.core.truth_(inst_29561__$1)){
var statearr_29732_30057 = state_29701__$1;
(statearr_29732_30057[(1)] = (13));

} else {
var statearr_29733_30058 = state_29701__$1;
(statearr_29733_30058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (2))){
var inst_29546 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29734 = state_29701;
(statearr_29734[(34)] = inst_29546);

return statearr_29734;
})();
var statearr_29735_30059 = state_29701__$1;
(statearr_29735_30059[(2)] = null);

(statearr_29735_30059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (23))){
var inst_29660 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29736 = state_29701;
(statearr_29736[(35)] = inst_29660);

return statearr_29736;
})();
var statearr_29737_30060 = state_29701__$1;
(statearr_29737_30060[(2)] = null);

(statearr_29737_30060[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (35))){
var inst_29674 = (state_29701[(25)]);
var inst_29684 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29685 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_29686 = cljs.core.List.EMPTY;
var inst_29687 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29688 = cljs.core.cons.call(null,inst_29687,inst_29674);
var inst_29689 = cljs.core._conj.call(null,inst_29686,inst_29688);
var inst_29690 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29691 = cljs.core._conj.call(null,inst_29689,inst_29690);
var inst_29692 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29685,inst_29691,null];
var inst_29693 = cljs.core.PersistentHashMap.fromArrays(inst_29684,inst_29692);
var inst_29694 = cljs.test.do_report.call(null,inst_29693);
var state_29701__$1 = state_29701;
var statearr_29738_30061 = state_29701__$1;
(statearr_29738_30061[(2)] = inst_29694);

(statearr_29738_30061[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (19))){
var inst_29599 = (state_29701[(27)]);
var inst_29598 = (state_29701[(8)]);
var inst_29595 = (state_29701[(36)]);
var inst_29597 = (state_29701[(2)]);
var inst_29598__$1 = cljs.core._conj.call(null,inst_29595,inst_29597);
var inst_29599__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29598__$1);
var state_29701__$1 = (function (){var statearr_29739 = state_29701;
(statearr_29739[(27)] = inst_29599__$1);

(statearr_29739[(8)] = inst_29598__$1);

return statearr_29739;
})();
if(cljs.core.truth_(inst_29599__$1)){
var statearr_29740_30062 = state_29701__$1;
(statearr_29740_30062[(1)] = (20));

} else {
var statearr_29741_30063 = state_29701__$1;
(statearr_29741_30063[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (11))){
var inst_29495 = (state_29701[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29701,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_29556 = cljs.core.List.EMPTY;
var inst_29557 = cljs.core._conj.call(null,inst_29556,"err");
var state_29701__$1 = (function (){var statearr_29742 = state_29701;
(statearr_29742[(33)] = inst_29557);

return statearr_29742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(12),inst_29495);
} else {
if((state_val_29702 === (9))){
var inst_29584 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29743 = state_29701;
(statearr_29743[(37)] = inst_29584);

return statearr_29743;
})();
var statearr_29744_30064 = state_29701__$1;
(statearr_29744_30064[(2)] = null);

(statearr_29744_30064[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (5))){
var inst_29522 = (state_29701[(7)]);
var inst_29519 = (state_29701[(20)]);
var inst_29523 = (state_29701[(38)]);
var inst_29521 = (state_29701[(2)]);
var inst_29522__$1 = cljs.core._conj.call(null,inst_29519,inst_29521);
var inst_29523__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29522__$1);
var state_29701__$1 = (function (){var statearr_29745 = state_29701;
(statearr_29745[(7)] = inst_29522__$1);

(statearr_29745[(38)] = inst_29523__$1);

return statearr_29745;
})();
if(cljs.core.truth_(inst_29523__$1)){
var statearr_29746_30065 = state_29701__$1;
(statearr_29746_30065[(1)] = (6));

} else {
var statearr_29747_30066 = state_29701__$1;
(statearr_29747_30066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (14))){
var inst_29560 = (state_29701[(26)]);
var inst_29570 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29571 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_29572 = cljs.core.List.EMPTY;
var inst_29573 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29574 = cljs.core.cons.call(null,inst_29573,inst_29560);
var inst_29575 = cljs.core._conj.call(null,inst_29572,inst_29574);
var inst_29576 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29577 = cljs.core._conj.call(null,inst_29575,inst_29576);
var inst_29578 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29571,inst_29577,null];
var inst_29579 = cljs.core.PersistentHashMap.fromArrays(inst_29570,inst_29578);
var inst_29580 = cljs.test.do_report.call(null,inst_29579);
var state_29701__$1 = state_29701;
var statearr_29748_30067 = state_29701__$1;
(statearr_29748_30067[(2)] = inst_29580);

(statearr_29748_30067[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (26))){
var inst_29636 = (state_29701[(9)]);
var inst_29637 = (state_29701[(30)]);
var inst_29633 = (state_29701[(32)]);
var inst_29635 = (state_29701[(2)]);
var inst_29636__$1 = cljs.core._conj.call(null,inst_29633,inst_29635);
var inst_29637__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29636__$1);
var state_29701__$1 = (function (){var statearr_29749 = state_29701;
(statearr_29749[(9)] = inst_29636__$1);

(statearr_29749[(30)] = inst_29637__$1);

return statearr_29749;
})();
if(cljs.core.truth_(inst_29637__$1)){
var statearr_29750_30068 = state_29701__$1;
(statearr_29750_30068[(1)] = (27));

} else {
var statearr_29751_30069 = state_29701__$1;
(statearr_29751_30069[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (16))){
var inst_29622 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29752 = state_29701;
(statearr_29752[(39)] = inst_29622);

return statearr_29752;
})();
var statearr_29753_30070 = state_29701__$1;
(statearr_29753_30070[(2)] = null);

(statearr_29753_30070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (30))){
var inst_29698 = (state_29701[(2)]);
var inst_29699 = done.call(null);
var state_29701__$1 = (function (){var statearr_29754 = state_29701;
(statearr_29754[(40)] = inst_29698);

return statearr_29754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29701__$1,inst_29699);
} else {
if((state_val_29702 === (10))){
var inst_29547 = (state_29701[(2)]);
var inst_29548 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29549 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_29550 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29549,inst_29547,null];
var inst_29551 = cljs.core.PersistentHashMap.fromArrays(inst_29548,inst_29550);
var inst_29552 = cljs.test.do_report.call(null,inst_29551);
var state_29701__$1 = state_29701;
var statearr_29755_30071 = state_29701__$1;
(statearr_29755_30071[(2)] = inst_29552);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29702 === (18))){
var inst_29496 = (state_29701[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29701,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_29594 = cljs.core.List.EMPTY;
var inst_29595 = cljs.core._conj.call(null,inst_29594,"ERROR:");
var state_29701__$1 = (function (){var statearr_29756 = state_29701;
(statearr_29756[(36)] = inst_29595);

return statearr_29756;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29701__$1,(19),inst_29496);
} else {
if((state_val_29702 === (8))){
var inst_29523 = (state_29701[(38)]);
var inst_29544 = (state_29701[(2)]);
var state_29701__$1 = (function (){var statearr_29757 = state_29701;
(statearr_29757[(41)] = inst_29544);

return statearr_29757;
})();
var statearr_29758_30072 = state_29701__$1;
(statearr_29758_30072[(2)] = inst_29523);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_29762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29762[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_29762[(1)] = (1));

return statearr_29762;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_29701){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_29701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e29763){if((e29763 instanceof Object)){
var ex__9301__auto__ = e29763;
var statearr_29764_30073 = state_29701;
(statearr_29764_30073[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30074 = state_29701;
state_29701 = G__30074;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_29701){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_29701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_29765 = f__9319__auto__.call(null);
(statearr_29765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_29765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.prototype.apply = (function (self__,args29493){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args29493)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_29973){
var state_val_29974 = (state_29973[(1)]);
if((state_val_29974 === (7))){
var inst_29794 = (state_29973[(7)]);
var inst_29804 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29805 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29806 = cljs.core.List.EMPTY;
var inst_29807 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29808 = cljs.core.cons.call(null,inst_29807,inst_29794);
var inst_29809 = cljs.core._conj.call(null,inst_29806,inst_29808);
var inst_29810 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29811 = cljs.core._conj.call(null,inst_29809,inst_29810);
var inst_29812 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29805,inst_29811,null];
var inst_29813 = cljs.core.PersistentHashMap.fromArrays(inst_29804,inst_29812);
var inst_29814 = cljs.test.do_report.call(null,inst_29813);
var state_29973__$1 = state_29973;
var statearr_29975_30075 = state_29973__$1;
(statearr_29975_30075[(2)] = inst_29814);

(statearr_29975_30075[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (20))){
var inst_29870 = (state_29973[(8)]);
var inst_29873 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29874 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29875 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29870);
var inst_29876 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29874,inst_29875,null];
var inst_29877 = cljs.core.PersistentHashMap.fromArrays(inst_29873,inst_29876);
var inst_29878 = cljs.test.do_report.call(null,inst_29877);
var state_29973__$1 = state_29973;
var statearr_29976_30076 = state_29973__$1;
(statearr_29976_30076[(2)] = inst_29878);

(statearr_29976_30076[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (27))){
var inst_29908 = (state_29973[(9)]);
var inst_29911 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29912 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_29913 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29908);
var inst_29914 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29912,inst_29913,null];
var inst_29915 = cljs.core.PersistentHashMap.fromArrays(inst_29911,inst_29914);
var inst_29916 = cljs.test.do_report.call(null,inst_29915);
var state_29973__$1 = state_29973;
var statearr_29977_30077 = state_29973__$1;
(statearr_29977_30077[(2)] = inst_29916);

(statearr_29977_30077[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (1))){
var inst_29769 = (state_29973[(10)]);
var inst_29767 = (state_29973[(11)]);
var inst_29768 = (state_29973[(12)]);
var inst_29770 = (state_29973[(13)]);
var inst_29766 = (state_29973[(14)]);
var inst_29766__$1 = cljs.core.async.chan.call(null,(1));
var inst_29767__$1 = cljs.core.async.chan.call(null,(1));
var inst_29768__$1 = cljs.core.async.chan.call(null,(1));
var inst_29769__$1 = cljs.core.async.chan.call(null,(1));
var inst_29770__$1 = cljs.core.async.chan.call(null,(1));
var inst_29771 = cljs_async_patterns.core._GT_2.call(null,inst_29766__$1);
var inst_29772 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_29771);
var inst_29773 = cljs_async_patterns.core._GT_2.call(null,inst_29767__$1);
var inst_29774 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_29773);
var inst_29775 = cljs_async_patterns.core._GT_2.call(null,inst_29768__$1,"ERROR:");
var inst_29776 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_29775);
var inst_29777 = cljs_async_patterns.core._GT_2.call(null,inst_29769__$1);
var inst_29778 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_29777);
var inst_29779 = cljs_async_patterns.core._GT_2.call(null,inst_29770__$1,"ERROR:");
var inst_29780 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_29779);
var state_29973__$1 = (function (){var statearr_29978 = state_29973;
(statearr_29978[(10)] = inst_29769__$1);

(statearr_29978[(15)] = inst_29780);

(statearr_29978[(16)] = inst_29778);

(statearr_29978[(11)] = inst_29767__$1);

(statearr_29978[(12)] = inst_29768__$1);

(statearr_29978[(17)] = inst_29772);

(statearr_29978[(18)] = inst_29774);

(statearr_29978[(19)] = inst_29776);

(statearr_29978[(13)] = inst_29770__$1);

(statearr_29978[(14)] = inst_29766__$1);

return statearr_29978;
})();
var statearr_29979_30078 = state_29973__$1;
(statearr_29979_30078[(2)] = null);

(statearr_29979_30078[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (24))){
var inst_29895 = (state_29973[(2)]);
var inst_29896 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29897 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_29898 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29897,inst_29895,null];
var inst_29899 = cljs.core.PersistentHashMap.fromArrays(inst_29896,inst_29898);
var inst_29900 = cljs.test.do_report.call(null,inst_29899);
var state_29973__$1 = state_29973;
var statearr_29980_30079 = state_29973__$1;
(statearr_29980_30079[(2)] = inst_29900);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (4))){
var inst_29766 = (state_29973[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29973,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_29790 = cljs.core.List.EMPTY;
var inst_29791 = cljs.core._conj.call(null,inst_29790,"suc");
var state_29973__$1 = (function (){var statearr_29981 = state_29973;
(statearr_29981[(20)] = inst_29791);

return statearr_29981;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29973__$1,(5),inst_29766);
} else {
if((state_val_29974 === (15))){
var inst_29833 = (state_29973[(21)]);
var inst_29854 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_29982 = state_29973;
(statearr_29982[(22)] = inst_29854);

return statearr_29982;
})();
var statearr_29983_30080 = state_29973__$1;
(statearr_29983_30080[(2)] = inst_29833);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (21))){
var inst_29870 = (state_29973[(8)]);
var inst_29880 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29881 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29882 = cljs.core.List.EMPTY;
var inst_29883 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29884 = cljs.core.cons.call(null,inst_29883,inst_29870);
var inst_29885 = cljs.core._conj.call(null,inst_29882,inst_29884);
var inst_29886 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29887 = cljs.core._conj.call(null,inst_29885,inst_29886);
var inst_29888 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29881,inst_29887,null];
var inst_29889 = cljs.core.PersistentHashMap.fromArrays(inst_29880,inst_29888);
var inst_29890 = cljs.test.do_report.call(null,inst_29889);
var state_29973__$1 = state_29973;
var statearr_29984_30081 = state_29973__$1;
(statearr_29984_30081[(2)] = inst_29890);

(statearr_29984_30081[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (31))){
var inst_29933 = (state_29973[(2)]);
var inst_29934 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29935 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_29936 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29935,inst_29933,null];
var inst_29937 = cljs.core.PersistentHashMap.fromArrays(inst_29934,inst_29936);
var inst_29938 = cljs.test.do_report.call(null,inst_29937);
var state_29973__$1 = state_29973;
var statearr_29985_30082 = state_29973__$1;
(statearr_29985_30082[(2)] = inst_29938);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (32))){
var inst_29770 = (state_29973[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29973,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_29942 = cljs.core.List.EMPTY;
var inst_29943 = cljs.core._conj.call(null,inst_29942,"suc");
var state_29973__$1 = (function (){var statearr_29986 = state_29973;
(statearr_29986[(23)] = inst_29943);

return statearr_29986;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29973__$1,(33),inst_29770);
} else {
if((state_val_29974 === (33))){
var inst_29946 = (state_29973[(24)]);
var inst_29947 = (state_29973[(25)]);
var inst_29943 = (state_29973[(23)]);
var inst_29945 = (state_29973[(2)]);
var inst_29946__$1 = cljs.core._conj.call(null,inst_29943,inst_29945);
var inst_29947__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29946__$1);
var state_29973__$1 = (function (){var statearr_29987 = state_29973;
(statearr_29987[(24)] = inst_29946__$1);

(statearr_29987[(25)] = inst_29947__$1);

return statearr_29987;
})();
if(cljs.core.truth_(inst_29947__$1)){
var statearr_29988_30083 = state_29973__$1;
(statearr_29988_30083[(1)] = (34));

} else {
var statearr_29989_30084 = state_29973__$1;
(statearr_29989_30084[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (13))){
var inst_29832 = (state_29973[(26)]);
var inst_29835 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29836 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_29837 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29832);
var inst_29838 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29836,inst_29837,null];
var inst_29839 = cljs.core.PersistentHashMap.fromArrays(inst_29835,inst_29838);
var inst_29840 = cljs.test.do_report.call(null,inst_29839);
var state_29973__$1 = state_29973;
var statearr_29990_30085 = state_29973__$1;
(statearr_29990_30085[(2)] = inst_29840);

(statearr_29990_30085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (22))){
var inst_29871 = (state_29973[(27)]);
var inst_29892 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_29991 = state_29973;
(statearr_29991[(28)] = inst_29892);

return statearr_29991;
})();
var statearr_29992_30086 = state_29973__$1;
(statearr_29992_30086[(2)] = inst_29871);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (36))){
var inst_29947 = (state_29973[(25)]);
var inst_29968 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_29993 = state_29973;
(statearr_29993[(29)] = inst_29968);

return statearr_29993;
})();
var statearr_29994_30087 = state_29973__$1;
(statearr_29994_30087[(2)] = inst_29947);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (29))){
var inst_29909 = (state_29973[(30)]);
var inst_29930 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_29995 = state_29973;
(statearr_29995[(31)] = inst_29930);

return statearr_29995;
})();
var statearr_29996_30088 = state_29973__$1;
(statearr_29996_30088[(2)] = inst_29909);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (6))){
var inst_29794 = (state_29973[(7)]);
var inst_29797 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29798 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29799 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29794);
var inst_29800 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29798,inst_29799,null];
var inst_29801 = cljs.core.PersistentHashMap.fromArrays(inst_29797,inst_29800);
var inst_29802 = cljs.test.do_report.call(null,inst_29801);
var state_29973__$1 = state_29973;
var statearr_29997_30089 = state_29973__$1;
(statearr_29997_30089[(2)] = inst_29802);

(statearr_29997_30089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (28))){
var inst_29908 = (state_29973[(9)]);
var inst_29918 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29919 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_29920 = cljs.core.List.EMPTY;
var inst_29921 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29922 = cljs.core.cons.call(null,inst_29921,inst_29908);
var inst_29923 = cljs.core._conj.call(null,inst_29920,inst_29922);
var inst_29924 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29925 = cljs.core._conj.call(null,inst_29923,inst_29924);
var inst_29926 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29919,inst_29925,null];
var inst_29927 = cljs.core.PersistentHashMap.fromArrays(inst_29918,inst_29926);
var inst_29928 = cljs.test.do_report.call(null,inst_29927);
var state_29973__$1 = state_29973;
var statearr_29998_30090 = state_29973__$1;
(statearr_29998_30090[(2)] = inst_29928);

(statearr_29998_30090[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (25))){
var inst_29769 = (state_29973[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29973,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_29904 = cljs.core.List.EMPTY;
var inst_29905 = cljs.core._conj.call(null,inst_29904,"suc");
var state_29973__$1 = (function (){var statearr_29999 = state_29973;
(statearr_29999[(32)] = inst_29905);

return statearr_29999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29973__$1,(26),inst_29769);
} else {
if((state_val_29974 === (34))){
var inst_29946 = (state_29973[(24)]);
var inst_29949 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29950 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_29951 = cljs.core.cons.call(null,cljs.core._EQ_,inst_29946);
var inst_29952 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_29950,inst_29951,null];
var inst_29953 = cljs.core.PersistentHashMap.fromArrays(inst_29949,inst_29952);
var inst_29954 = cljs.test.do_report.call(null,inst_29953);
var state_29973__$1 = state_29973;
var statearr_30000_30091 = state_29973__$1;
(statearr_30000_30091[(2)] = inst_29954);

(statearr_30000_30091[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (17))){
var inst_29857 = (state_29973[(2)]);
var inst_29858 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29859 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_29860 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29859,inst_29857,null];
var inst_29861 = cljs.core.PersistentHashMap.fromArrays(inst_29858,inst_29860);
var inst_29862 = cljs.test.do_report.call(null,inst_29861);
var state_29973__$1 = state_29973;
var statearr_30001_30092 = state_29973__$1;
(statearr_30001_30092[(2)] = inst_29862);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (3))){
var inst_29781 = (state_29973[(2)]);
var inst_29782 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29783 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_29784 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29783,inst_29781,null];
var inst_29785 = cljs.core.PersistentHashMap.fromArrays(inst_29782,inst_29784);
var inst_29786 = cljs.test.do_report.call(null,inst_29785);
var state_29973__$1 = state_29973;
var statearr_30002_30093 = state_29973__$1;
(statearr_30002_30093[(2)] = inst_29786);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (12))){
var inst_29832 = (state_29973[(26)]);
var inst_29833 = (state_29973[(21)]);
var inst_29829 = (state_29973[(33)]);
var inst_29831 = (state_29973[(2)]);
var inst_29832__$1 = cljs.core._conj.call(null,inst_29829,inst_29831);
var inst_29833__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29832__$1);
var state_29973__$1 = (function (){var statearr_30003 = state_29973;
(statearr_30003[(26)] = inst_29832__$1);

(statearr_30003[(21)] = inst_29833__$1);

return statearr_30003;
})();
if(cljs.core.truth_(inst_29833__$1)){
var statearr_30004_30094 = state_29973__$1;
(statearr_30004_30094[(1)] = (13));

} else {
var statearr_30005_30095 = state_29973__$1;
(statearr_30005_30095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (2))){
var inst_29818 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_30006 = state_29973;
(statearr_30006[(34)] = inst_29818);

return statearr_30006;
})();
var statearr_30007_30096 = state_29973__$1;
(statearr_30007_30096[(2)] = null);

(statearr_30007_30096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (23))){
var inst_29932 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_30008 = state_29973;
(statearr_30008[(35)] = inst_29932);

return statearr_30008;
})();
var statearr_30009_30097 = state_29973__$1;
(statearr_30009_30097[(2)] = null);

(statearr_30009_30097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (35))){
var inst_29946 = (state_29973[(24)]);
var inst_29956 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29957 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_29958 = cljs.core.List.EMPTY;
var inst_29959 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29960 = cljs.core.cons.call(null,inst_29959,inst_29946);
var inst_29961 = cljs.core._conj.call(null,inst_29958,inst_29960);
var inst_29962 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29963 = cljs.core._conj.call(null,inst_29961,inst_29962);
var inst_29964 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29957,inst_29963,null];
var inst_29965 = cljs.core.PersistentHashMap.fromArrays(inst_29956,inst_29964);
var inst_29966 = cljs.test.do_report.call(null,inst_29965);
var state_29973__$1 = state_29973;
var statearr_30010_30098 = state_29973__$1;
(statearr_30010_30098[(2)] = inst_29966);

(statearr_30010_30098[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (19))){
var inst_29870 = (state_29973[(8)]);
var inst_29867 = (state_29973[(36)]);
var inst_29871 = (state_29973[(27)]);
var inst_29869 = (state_29973[(2)]);
var inst_29870__$1 = cljs.core._conj.call(null,inst_29867,inst_29869);
var inst_29871__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29870__$1);
var state_29973__$1 = (function (){var statearr_30011 = state_29973;
(statearr_30011[(8)] = inst_29870__$1);

(statearr_30011[(27)] = inst_29871__$1);

return statearr_30011;
})();
if(cljs.core.truth_(inst_29871__$1)){
var statearr_30012_30099 = state_29973__$1;
(statearr_30012_30099[(1)] = (20));

} else {
var statearr_30013_30100 = state_29973__$1;
(statearr_30013_30100[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (11))){
var inst_29767 = (state_29973[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29973,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_29828 = cljs.core.List.EMPTY;
var inst_29829 = cljs.core._conj.call(null,inst_29828,"err");
var state_29973__$1 = (function (){var statearr_30014 = state_29973;
(statearr_30014[(33)] = inst_29829);

return statearr_30014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29973__$1,(12),inst_29767);
} else {
if((state_val_29974 === (9))){
var inst_29856 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_30015 = state_29973;
(statearr_30015[(37)] = inst_29856);

return statearr_30015;
})();
var statearr_30016_30101 = state_29973__$1;
(statearr_30016_30101[(2)] = null);

(statearr_30016_30101[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (5))){
var inst_29791 = (state_29973[(20)]);
var inst_29795 = (state_29973[(38)]);
var inst_29794 = (state_29973[(7)]);
var inst_29793 = (state_29973[(2)]);
var inst_29794__$1 = cljs.core._conj.call(null,inst_29791,inst_29793);
var inst_29795__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29794__$1);
var state_29973__$1 = (function (){var statearr_30017 = state_29973;
(statearr_30017[(38)] = inst_29795__$1);

(statearr_30017[(7)] = inst_29794__$1);

return statearr_30017;
})();
if(cljs.core.truth_(inst_29795__$1)){
var statearr_30018_30102 = state_29973__$1;
(statearr_30018_30102[(1)] = (6));

} else {
var statearr_30019_30103 = state_29973__$1;
(statearr_30019_30103[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (14))){
var inst_29832 = (state_29973[(26)]);
var inst_29842 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29843 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_29844 = cljs.core.List.EMPTY;
var inst_29845 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_29846 = cljs.core.cons.call(null,inst_29845,inst_29832);
var inst_29847 = cljs.core._conj.call(null,inst_29844,inst_29846);
var inst_29848 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_29849 = cljs.core._conj.call(null,inst_29847,inst_29848);
var inst_29850 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_29843,inst_29849,null];
var inst_29851 = cljs.core.PersistentHashMap.fromArrays(inst_29842,inst_29850);
var inst_29852 = cljs.test.do_report.call(null,inst_29851);
var state_29973__$1 = state_29973;
var statearr_30020_30104 = state_29973__$1;
(statearr_30020_30104[(2)] = inst_29852);

(statearr_30020_30104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (26))){
var inst_29909 = (state_29973[(30)]);
var inst_29908 = (state_29973[(9)]);
var inst_29905 = (state_29973[(32)]);
var inst_29907 = (state_29973[(2)]);
var inst_29908__$1 = cljs.core._conj.call(null,inst_29905,inst_29907);
var inst_29909__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_29908__$1);
var state_29973__$1 = (function (){var statearr_30021 = state_29973;
(statearr_30021[(30)] = inst_29909__$1);

(statearr_30021[(9)] = inst_29908__$1);

return statearr_30021;
})();
if(cljs.core.truth_(inst_29909__$1)){
var statearr_30022_30105 = state_29973__$1;
(statearr_30022_30105[(1)] = (27));

} else {
var statearr_30023_30106 = state_29973__$1;
(statearr_30023_30106[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (16))){
var inst_29894 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_30024 = state_29973;
(statearr_30024[(39)] = inst_29894);

return statearr_30024;
})();
var statearr_30025_30107 = state_29973__$1;
(statearr_30025_30107[(2)] = null);

(statearr_30025_30107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (30))){
var inst_29970 = (state_29973[(2)]);
var inst_29971 = done.call(null);
var state_29973__$1 = (function (){var statearr_30026 = state_29973;
(statearr_30026[(40)] = inst_29970);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29973__$1,inst_29971);
} else {
if((state_val_29974 === (10))){
var inst_29819 = (state_29973[(2)]);
var inst_29820 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_29821 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_29822 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_29821,inst_29819,null];
var inst_29823 = cljs.core.PersistentHashMap.fromArrays(inst_29820,inst_29822);
var inst_29824 = cljs.test.do_report.call(null,inst_29823);
var state_29973__$1 = state_29973;
var statearr_30027_30108 = state_29973__$1;
(statearr_30027_30108[(2)] = inst_29824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29974 === (18))){
var inst_29768 = (state_29973[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29973,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_29866 = cljs.core.List.EMPTY;
var inst_29867 = cljs.core._conj.call(null,inst_29866,"ERROR:");
var state_29973__$1 = (function (){var statearr_30028 = state_29973;
(statearr_30028[(36)] = inst_29867);

return statearr_30028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29973__$1,(19),inst_29768);
} else {
if((state_val_29974 === (8))){
var inst_29795 = (state_29973[(38)]);
var inst_29816 = (state_29973[(2)]);
var state_29973__$1 = (function (){var statearr_30029 = state_29973;
(statearr_30029[(41)] = inst_29816);

return statearr_30029;
})();
var statearr_30030_30109 = state_29973__$1;
(statearr_30030_30109[(2)] = inst_29795);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_30034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30034[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_30034[(1)] = (1));

return statearr_30034;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_29973){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_29973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30035){if((e30035 instanceof Object)){
var ex__9301__auto__ = e30035;
var statearr_30036_30110 = state_29973;
(statearr_30036_30110[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30111 = state_29973;
state_29973 = G__30111;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_29973){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_29973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30037 = f__9319__auto__.call(null);
(statearr_30037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29491","meta29491",-1796655709,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test29490";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test29490");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test29490 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test29490(meta29491){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490(meta29491));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test29490(null));
});

cljs_async_patterns.core_test._GT_2_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_2_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">2-test","cljs-async-patterns.core-test/>2-test",-296840385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">2-test",">2-test",418650270,null),"test/cljs_async_patterns/core_test.cljs",17,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_2_test)?cljs_async_patterns.core_test._GT_2_test.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT_3_test = (function cljs_async_patterns$core_test$_GT_3_test(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT_3_test.cljs$lang$var);
});
cljs_async_patterns.core_test._GT_3_test.cljs$lang$test = (function (){
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112 = (function (meta30113){
this.meta30113 = meta30113;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30114,meta30113__$1){
var self__ = this;
var _30114__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112(meta30113__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30114){
var self__ = this;
var _30114__$1 = this;
return self__.meta30113;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_30405){
var state_val_30406 = (state_30405[(1)]);
if((state_val_30406 === (7))){
var inst_30150 = (state_30405[(7)]);
var inst_30160 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30161 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_30162 = cljs.core.List.EMPTY;
var inst_30163 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30164 = cljs.core.cons.call(null,inst_30163,inst_30150);
var inst_30165 = cljs.core._conj.call(null,inst_30162,inst_30164);
var inst_30166 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30167 = cljs.core._conj.call(null,inst_30165,inst_30166);
var inst_30168 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30161,inst_30167,null];
var inst_30169 = cljs.core.PersistentHashMap.fromArrays(inst_30160,inst_30168);
var inst_30170 = cljs.test.do_report.call(null,inst_30169);
var state_30405__$1 = state_30405;
var statearr_30407_30868 = state_30405__$1;
(statearr_30407_30868[(2)] = inst_30170);

(statearr_30407_30868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (20))){
var inst_30226 = (state_30405[(8)]);
var inst_30229 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30230 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_30231 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30226);
var inst_30232 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30230,inst_30231,null];
var inst_30233 = cljs.core.PersistentHashMap.fromArrays(inst_30229,inst_30232);
var inst_30234 = cljs.test.do_report.call(null,inst_30233);
var state_30405__$1 = state_30405;
var statearr_30408_30869 = state_30405__$1;
(statearr_30408_30869[(2)] = inst_30234);

(statearr_30408_30869[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (27))){
var inst_30264 = (state_30405[(9)]);
var inst_30267 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30268 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_30269 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30264);
var inst_30270 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30268,inst_30269,null];
var inst_30271 = cljs.core.PersistentHashMap.fromArrays(inst_30267,inst_30270);
var inst_30272 = cljs.test.do_report.call(null,inst_30271);
var state_30405__$1 = state_30405;
var statearr_30409_30870 = state_30405__$1;
(statearr_30409_30870[(2)] = inst_30272);

(statearr_30409_30870[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (1))){
var inst_30121 = (state_30405[(10)]);
var inst_30122 = (state_30405[(11)]);
var inst_30117 = (state_30405[(12)]);
var inst_30119 = (state_30405[(13)]);
var inst_30120 = (state_30405[(14)]);
var inst_30118 = (state_30405[(15)]);
var inst_30116 = (state_30405[(16)]);
var inst_30116__$1 = cljs.core.async.chan.call(null,(1));
var inst_30117__$1 = cljs.core.async.chan.call(null,(1));
var inst_30118__$1 = cljs.core.async.chan.call(null,(1));
var inst_30119__$1 = cljs.core.async.chan.call(null,(1));
var inst_30120__$1 = cljs.core.async.chan.call(null,(1));
var inst_30121__$1 = cljs.core.async.chan.call(null,(1));
var inst_30122__$1 = cljs.core.async.chan.call(null,(1));
var inst_30123 = cljs_async_patterns.core._GT_3.call(null,inst_30116__$1);
var inst_30124 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_30123);
var inst_30125 = cljs_async_patterns.core._GT_3.call(null,inst_30117__$1);
var inst_30126 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_30125);
var inst_30127 = cljs_async_patterns.core._GT_3.call(null,inst_30118__$1);
var inst_30128 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_30127);
var inst_30129 = cljs_async_patterns.core._GT_3.call(null,inst_30119__$1,"ERROR:");
var inst_30130 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_30129);
var inst_30131 = cljs_async_patterns.core._GT_3.call(null,inst_30120__$1,"ERROR:");
var inst_30132 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_30131);
var inst_30133 = cljs_async_patterns.core._GT_3.call(null,inst_30121__$1);
var inst_30134 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_30133);
var inst_30135 = cljs_async_patterns.core._GT_3.call(null,inst_30122__$1,"ERROR:");
var inst_30136 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_30135);
var state_30405__$1 = (function (){var statearr_30410 = state_30405;
(statearr_30410[(17)] = inst_30136);

(statearr_30410[(18)] = inst_30130);

(statearr_30410[(10)] = inst_30121__$1);

(statearr_30410[(11)] = inst_30122__$1);

(statearr_30410[(12)] = inst_30117__$1);

(statearr_30410[(19)] = inst_30124);

(statearr_30410[(20)] = inst_30128);

(statearr_30410[(21)] = inst_30126);

(statearr_30410[(13)] = inst_30119__$1);

(statearr_30410[(22)] = inst_30134);

(statearr_30410[(14)] = inst_30120__$1);

(statearr_30410[(23)] = inst_30132);

(statearr_30410[(15)] = inst_30118__$1);

(statearr_30410[(16)] = inst_30116__$1);

return statearr_30410;
})();
var statearr_30411_30871 = state_30405__$1;
(statearr_30411_30871[(2)] = null);

(statearr_30411_30871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (24))){
var inst_30251 = (state_30405[(2)]);
var inst_30252 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30253 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_30254 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30253,inst_30251,null];
var inst_30255 = cljs.core.PersistentHashMap.fromArrays(inst_30252,inst_30254);
var inst_30256 = cljs.test.do_report.call(null,inst_30255);
var state_30405__$1 = state_30405;
var statearr_30412_30872 = state_30405__$1;
(statearr_30412_30872[(2)] = inst_30256);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (39))){
var inst_30121 = (state_30405[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30405,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_30336 = cljs.core.List.EMPTY;
var inst_30337 = cljs.core._conj.call(null,inst_30336,"suc");
var state_30405__$1 = (function (){var statearr_30413 = state_30405;
(statearr_30413[(24)] = inst_30337);

return statearr_30413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(40),inst_30121);
} else {
if((state_val_30406 === (46))){
var inst_30122 = (state_30405[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30405,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_30374 = cljs.core.List.EMPTY;
var inst_30375 = cljs.core._conj.call(null,inst_30374,"suc");
var state_30405__$1 = (function (){var statearr_30414 = state_30405;
(statearr_30414[(25)] = inst_30375);

return statearr_30414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(47),inst_30122);
} else {
if((state_val_30406 === (4))){
var inst_30116 = (state_30405[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30405,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_30146 = cljs.core.List.EMPTY;
var inst_30147 = cljs.core._conj.call(null,inst_30146,"suc");
var state_30405__$1 = (function (){var statearr_30415 = state_30405;
(statearr_30415[(26)] = inst_30147);

return statearr_30415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(5),inst_30116);
} else {
if((state_val_30406 === (15))){
var inst_30189 = (state_30405[(27)]);
var inst_30210 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30416 = state_30405;
(statearr_30416[(28)] = inst_30210);

return statearr_30416;
})();
var statearr_30417_30873 = state_30405__$1;
(statearr_30417_30873[(2)] = inst_30189);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (48))){
var inst_30378 = (state_30405[(29)]);
var inst_30381 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30382 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_30383 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30378);
var inst_30384 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30382,inst_30383,null];
var inst_30385 = cljs.core.PersistentHashMap.fromArrays(inst_30381,inst_30384);
var inst_30386 = cljs.test.do_report.call(null,inst_30385);
var state_30405__$1 = state_30405;
var statearr_30418_30874 = state_30405__$1;
(statearr_30418_30874[(2)] = inst_30386);

(statearr_30418_30874[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (50))){
var inst_30379 = (state_30405[(30)]);
var inst_30400 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30419 = state_30405;
(statearr_30419[(31)] = inst_30400);

return statearr_30419;
})();
var statearr_30420_30875 = state_30405__$1;
(statearr_30420_30875[(2)] = inst_30379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (21))){
var inst_30226 = (state_30405[(8)]);
var inst_30236 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30237 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_30238 = cljs.core.List.EMPTY;
var inst_30239 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30240 = cljs.core.cons.call(null,inst_30239,inst_30226);
var inst_30241 = cljs.core._conj.call(null,inst_30238,inst_30240);
var inst_30242 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30243 = cljs.core._conj.call(null,inst_30241,inst_30242);
var inst_30244 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30237,inst_30243,null];
var inst_30245 = cljs.core.PersistentHashMap.fromArrays(inst_30236,inst_30244);
var inst_30246 = cljs.test.do_report.call(null,inst_30245);
var state_30405__$1 = state_30405;
var statearr_30421_30876 = state_30405__$1;
(statearr_30421_30876[(2)] = inst_30246);

(statearr_30421_30876[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (31))){
var inst_30289 = (state_30405[(2)]);
var inst_30290 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30291 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_30292 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30291,inst_30289,null];
var inst_30293 = cljs.core.PersistentHashMap.fromArrays(inst_30290,inst_30292);
var inst_30294 = cljs.test.do_report.call(null,inst_30293);
var state_30405__$1 = state_30405;
var statearr_30422_30877 = state_30405__$1;
(statearr_30422_30877[(2)] = inst_30294);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (32))){
var inst_30120 = (state_30405[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30405,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_30298 = cljs.core.List.EMPTY;
var inst_30299 = cljs.core._conj.call(null,inst_30298,"ERROR:");
var state_30405__$1 = (function (){var statearr_30423 = state_30405;
(statearr_30423[(32)] = inst_30299);

return statearr_30423;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(33),inst_30120);
} else {
if((state_val_30406 === (40))){
var inst_30337 = (state_30405[(24)]);
var inst_30341 = (state_30405[(33)]);
var inst_30340 = (state_30405[(34)]);
var inst_30339 = (state_30405[(2)]);
var inst_30340__$1 = cljs.core._conj.call(null,inst_30337,inst_30339);
var inst_30341__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30340__$1);
var state_30405__$1 = (function (){var statearr_30424 = state_30405;
(statearr_30424[(33)] = inst_30341__$1);

(statearr_30424[(34)] = inst_30340__$1);

return statearr_30424;
})();
if(cljs.core.truth_(inst_30341__$1)){
var statearr_30425_30878 = state_30405__$1;
(statearr_30425_30878[(1)] = (41));

} else {
var statearr_30426_30879 = state_30405__$1;
(statearr_30426_30879[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (33))){
var inst_30303 = (state_30405[(35)]);
var inst_30302 = (state_30405[(36)]);
var inst_30299 = (state_30405[(32)]);
var inst_30301 = (state_30405[(2)]);
var inst_30302__$1 = cljs.core._conj.call(null,inst_30299,inst_30301);
var inst_30303__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30302__$1);
var state_30405__$1 = (function (){var statearr_30427 = state_30405;
(statearr_30427[(35)] = inst_30303__$1);

(statearr_30427[(36)] = inst_30302__$1);

return statearr_30427;
})();
if(cljs.core.truth_(inst_30303__$1)){
var statearr_30428_30880 = state_30405__$1;
(statearr_30428_30880[(1)] = (34));

} else {
var statearr_30429_30881 = state_30405__$1;
(statearr_30429_30881[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (13))){
var inst_30188 = (state_30405[(37)]);
var inst_30191 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30192 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_30193 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30188);
var inst_30194 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30192,inst_30193,null];
var inst_30195 = cljs.core.PersistentHashMap.fromArrays(inst_30191,inst_30194);
var inst_30196 = cljs.test.do_report.call(null,inst_30195);
var state_30405__$1 = state_30405;
var statearr_30430_30882 = state_30405__$1;
(statearr_30430_30882[(2)] = inst_30196);

(statearr_30430_30882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (22))){
var inst_30227 = (state_30405[(38)]);
var inst_30248 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30431 = state_30405;
(statearr_30431[(39)] = inst_30248);

return statearr_30431;
})();
var statearr_30432_30883 = state_30405__$1;
(statearr_30432_30883[(2)] = inst_30227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (36))){
var inst_30303 = (state_30405[(35)]);
var inst_30324 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30433 = state_30405;
(statearr_30433[(40)] = inst_30324);

return statearr_30433;
})();
var statearr_30434_30884 = state_30405__$1;
(statearr_30434_30884[(2)] = inst_30303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (41))){
var inst_30340 = (state_30405[(34)]);
var inst_30343 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30344 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_30345 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30340);
var inst_30346 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30344,inst_30345,null];
var inst_30347 = cljs.core.PersistentHashMap.fromArrays(inst_30343,inst_30346);
var inst_30348 = cljs.test.do_report.call(null,inst_30347);
var state_30405__$1 = state_30405;
var statearr_30435_30885 = state_30405__$1;
(statearr_30435_30885[(2)] = inst_30348);

(statearr_30435_30885[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (43))){
var inst_30341 = (state_30405[(33)]);
var inst_30362 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30436 = state_30405;
(statearr_30436[(41)] = inst_30362);

return statearr_30436;
})();
var statearr_30437_30886 = state_30405__$1;
(statearr_30437_30886[(2)] = inst_30341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (29))){
var inst_30265 = (state_30405[(42)]);
var inst_30286 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30438 = state_30405;
(statearr_30438[(43)] = inst_30286);

return statearr_30438;
})();
var statearr_30439_30887 = state_30405__$1;
(statearr_30439_30887[(2)] = inst_30265);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (44))){
var inst_30402 = (state_30405[(2)]);
var inst_30403 = done.call(null);
var state_30405__$1 = (function (){var statearr_30440 = state_30405;
(statearr_30440[(44)] = inst_30402);

return statearr_30440;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30405__$1,inst_30403);
} else {
if((state_val_30406 === (6))){
var inst_30150 = (state_30405[(7)]);
var inst_30153 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30154 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_30155 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30150);
var inst_30156 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30154,inst_30155,null];
var inst_30157 = cljs.core.PersistentHashMap.fromArrays(inst_30153,inst_30156);
var inst_30158 = cljs.test.do_report.call(null,inst_30157);
var state_30405__$1 = state_30405;
var statearr_30441_30888 = state_30405__$1;
(statearr_30441_30888[(2)] = inst_30158);

(statearr_30441_30888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (28))){
var inst_30264 = (state_30405[(9)]);
var inst_30274 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30275 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_30276 = cljs.core.List.EMPTY;
var inst_30277 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30278 = cljs.core.cons.call(null,inst_30277,inst_30264);
var inst_30279 = cljs.core._conj.call(null,inst_30276,inst_30278);
var inst_30280 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30281 = cljs.core._conj.call(null,inst_30279,inst_30280);
var inst_30282 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30275,inst_30281,null];
var inst_30283 = cljs.core.PersistentHashMap.fromArrays(inst_30274,inst_30282);
var inst_30284 = cljs.test.do_report.call(null,inst_30283);
var state_30405__$1 = state_30405;
var statearr_30442_30889 = state_30405__$1;
(statearr_30442_30889[(2)] = inst_30284);

(statearr_30442_30889[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (25))){
var inst_30119 = (state_30405[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30405,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_30260 = cljs.core.List.EMPTY;
var inst_30261 = cljs.core._conj.call(null,inst_30260,"ERROR:");
var state_30405__$1 = (function (){var statearr_30443 = state_30405;
(statearr_30443[(45)] = inst_30261);

return statearr_30443;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(26),inst_30119);
} else {
if((state_val_30406 === (34))){
var inst_30302 = (state_30405[(36)]);
var inst_30305 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30306 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_30307 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30302);
var inst_30308 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30306,inst_30307,null];
var inst_30309 = cljs.core.PersistentHashMap.fromArrays(inst_30305,inst_30308);
var inst_30310 = cljs.test.do_report.call(null,inst_30309);
var state_30405__$1 = state_30405;
var statearr_30444_30890 = state_30405__$1;
(statearr_30444_30890[(2)] = inst_30310);

(statearr_30444_30890[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (17))){
var inst_30213 = (state_30405[(2)]);
var inst_30214 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30215 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_30216 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30215,inst_30213,null];
var inst_30217 = cljs.core.PersistentHashMap.fromArrays(inst_30214,inst_30216);
var inst_30218 = cljs.test.do_report.call(null,inst_30217);
var state_30405__$1 = state_30405;
var statearr_30445_30891 = state_30405__$1;
(statearr_30445_30891[(2)] = inst_30218);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (3))){
var inst_30137 = (state_30405[(2)]);
var inst_30138 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30139 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_30140 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30139,inst_30137,null];
var inst_30141 = cljs.core.PersistentHashMap.fromArrays(inst_30138,inst_30140);
var inst_30142 = cljs.test.do_report.call(null,inst_30141);
var state_30405__$1 = state_30405;
var statearr_30446_30892 = state_30405__$1;
(statearr_30446_30892[(2)] = inst_30142);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (12))){
var inst_30188 = (state_30405[(37)]);
var inst_30189 = (state_30405[(27)]);
var inst_30185 = (state_30405[(46)]);
var inst_30187 = (state_30405[(2)]);
var inst_30188__$1 = cljs.core._conj.call(null,inst_30185,inst_30187);
var inst_30189__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30188__$1);
var state_30405__$1 = (function (){var statearr_30447 = state_30405;
(statearr_30447[(37)] = inst_30188__$1);

(statearr_30447[(27)] = inst_30189__$1);

return statearr_30447;
})();
if(cljs.core.truth_(inst_30189__$1)){
var statearr_30448_30893 = state_30405__$1;
(statearr_30448_30893[(1)] = (13));

} else {
var statearr_30449_30894 = state_30405__$1;
(statearr_30449_30894[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (2))){
var inst_30174 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30450 = state_30405;
(statearr_30450[(47)] = inst_30174);

return statearr_30450;
})();
var statearr_30451_30895 = state_30405__$1;
(statearr_30451_30895[(2)] = null);

(statearr_30451_30895[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (23))){
var inst_30288 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30452 = state_30405;
(statearr_30452[(48)] = inst_30288);

return statearr_30452;
})();
var statearr_30453_30896 = state_30405__$1;
(statearr_30453_30896[(2)] = null);

(statearr_30453_30896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (47))){
var inst_30378 = (state_30405[(29)]);
var inst_30375 = (state_30405[(25)]);
var inst_30379 = (state_30405[(30)]);
var inst_30377 = (state_30405[(2)]);
var inst_30378__$1 = cljs.core._conj.call(null,inst_30375,inst_30377);
var inst_30379__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30378__$1);
var state_30405__$1 = (function (){var statearr_30454 = state_30405;
(statearr_30454[(29)] = inst_30378__$1);

(statearr_30454[(30)] = inst_30379__$1);

return statearr_30454;
})();
if(cljs.core.truth_(inst_30379__$1)){
var statearr_30455_30897 = state_30405__$1;
(statearr_30455_30897[(1)] = (48));

} else {
var statearr_30456_30898 = state_30405__$1;
(statearr_30456_30898[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (35))){
var inst_30302 = (state_30405[(36)]);
var inst_30312 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30313 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_30314 = cljs.core.List.EMPTY;
var inst_30315 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30316 = cljs.core.cons.call(null,inst_30315,inst_30302);
var inst_30317 = cljs.core._conj.call(null,inst_30314,inst_30316);
var inst_30318 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30319 = cljs.core._conj.call(null,inst_30317,inst_30318);
var inst_30320 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30313,inst_30319,null];
var inst_30321 = cljs.core.PersistentHashMap.fromArrays(inst_30312,inst_30320);
var inst_30322 = cljs.test.do_report.call(null,inst_30321);
var state_30405__$1 = state_30405;
var statearr_30457_30899 = state_30405__$1;
(statearr_30457_30899[(2)] = inst_30322);

(statearr_30457_30899[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (19))){
var inst_30227 = (state_30405[(38)]);
var inst_30223 = (state_30405[(49)]);
var inst_30226 = (state_30405[(8)]);
var inst_30225 = (state_30405[(2)]);
var inst_30226__$1 = cljs.core._conj.call(null,inst_30223,inst_30225);
var inst_30227__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30226__$1);
var state_30405__$1 = (function (){var statearr_30458 = state_30405;
(statearr_30458[(38)] = inst_30227__$1);

(statearr_30458[(8)] = inst_30226__$1);

return statearr_30458;
})();
if(cljs.core.truth_(inst_30227__$1)){
var statearr_30459_30900 = state_30405__$1;
(statearr_30459_30900[(1)] = (20));

} else {
var statearr_30460_30901 = state_30405__$1;
(statearr_30460_30901[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (11))){
var inst_30117 = (state_30405[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30405,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_30184 = cljs.core.List.EMPTY;
var inst_30185 = cljs.core._conj.call(null,inst_30184,"err1");
var state_30405__$1 = (function (){var statearr_30461 = state_30405;
(statearr_30461[(46)] = inst_30185);

return statearr_30461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(12),inst_30117);
} else {
if((state_val_30406 === (9))){
var inst_30212 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30462 = state_30405;
(statearr_30462[(50)] = inst_30212);

return statearr_30462;
})();
var statearr_30463_30902 = state_30405__$1;
(statearr_30463_30902[(2)] = null);

(statearr_30463_30902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (5))){
var inst_30150 = (state_30405[(7)]);
var inst_30147 = (state_30405[(26)]);
var inst_30151 = (state_30405[(51)]);
var inst_30149 = (state_30405[(2)]);
var inst_30150__$1 = cljs.core._conj.call(null,inst_30147,inst_30149);
var inst_30151__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30150__$1);
var state_30405__$1 = (function (){var statearr_30464 = state_30405;
(statearr_30464[(7)] = inst_30150__$1);

(statearr_30464[(51)] = inst_30151__$1);

return statearr_30464;
})();
if(cljs.core.truth_(inst_30151__$1)){
var statearr_30465_30903 = state_30405__$1;
(statearr_30465_30903[(1)] = (6));

} else {
var statearr_30466_30904 = state_30405__$1;
(statearr_30466_30904[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (14))){
var inst_30188 = (state_30405[(37)]);
var inst_30198 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30199 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_30200 = cljs.core.List.EMPTY;
var inst_30201 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30202 = cljs.core.cons.call(null,inst_30201,inst_30188);
var inst_30203 = cljs.core._conj.call(null,inst_30200,inst_30202);
var inst_30204 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30205 = cljs.core._conj.call(null,inst_30203,inst_30204);
var inst_30206 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30199,inst_30205,null];
var inst_30207 = cljs.core.PersistentHashMap.fromArrays(inst_30198,inst_30206);
var inst_30208 = cljs.test.do_report.call(null,inst_30207);
var state_30405__$1 = state_30405;
var statearr_30467_30905 = state_30405__$1;
(statearr_30467_30905[(2)] = inst_30208);

(statearr_30467_30905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (45))){
var inst_30365 = (state_30405[(2)]);
var inst_30366 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30367 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_30368 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30367,inst_30365,null];
var inst_30369 = cljs.core.PersistentHashMap.fromArrays(inst_30366,inst_30368);
var inst_30370 = cljs.test.do_report.call(null,inst_30369);
var state_30405__$1 = state_30405;
var statearr_30468_30906 = state_30405__$1;
(statearr_30468_30906[(2)] = inst_30370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (26))){
var inst_30265 = (state_30405[(42)]);
var inst_30264 = (state_30405[(9)]);
var inst_30261 = (state_30405[(45)]);
var inst_30263 = (state_30405[(2)]);
var inst_30264__$1 = cljs.core._conj.call(null,inst_30261,inst_30263);
var inst_30265__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30264__$1);
var state_30405__$1 = (function (){var statearr_30469 = state_30405;
(statearr_30469[(42)] = inst_30265__$1);

(statearr_30469[(9)] = inst_30264__$1);

return statearr_30469;
})();
if(cljs.core.truth_(inst_30265__$1)){
var statearr_30470_30907 = state_30405__$1;
(statearr_30470_30907[(1)] = (27));

} else {
var statearr_30471_30908 = state_30405__$1;
(statearr_30471_30908[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (16))){
var inst_30250 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30472 = state_30405;
(statearr_30472[(52)] = inst_30250);

return statearr_30472;
})();
var statearr_30473_30909 = state_30405__$1;
(statearr_30473_30909[(2)] = null);

(statearr_30473_30909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (38))){
var inst_30327 = (state_30405[(2)]);
var inst_30328 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30329 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_30330 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30329,inst_30327,null];
var inst_30331 = cljs.core.PersistentHashMap.fromArrays(inst_30328,inst_30330);
var inst_30332 = cljs.test.do_report.call(null,inst_30331);
var state_30405__$1 = state_30405;
var statearr_30474_30910 = state_30405__$1;
(statearr_30474_30910[(2)] = inst_30332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (30))){
var inst_30326 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30475 = state_30405;
(statearr_30475[(53)] = inst_30326);

return statearr_30475;
})();
var statearr_30476_30911 = state_30405__$1;
(statearr_30476_30911[(2)] = null);

(statearr_30476_30911[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (10))){
var inst_30175 = (state_30405[(2)]);
var inst_30176 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30177 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_30178 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30177,inst_30175,null];
var inst_30179 = cljs.core.PersistentHashMap.fromArrays(inst_30176,inst_30178);
var inst_30180 = cljs.test.do_report.call(null,inst_30179);
var state_30405__$1 = state_30405;
var statearr_30477_30912 = state_30405__$1;
(statearr_30477_30912[(2)] = inst_30180);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (18))){
var inst_30118 = (state_30405[(15)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30405,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_30222 = cljs.core.List.EMPTY;
var inst_30223 = cljs.core._conj.call(null,inst_30222,"err2");
var state_30405__$1 = (function (){var statearr_30478 = state_30405;
(statearr_30478[(49)] = inst_30223);

return statearr_30478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30405__$1,(19),inst_30118);
} else {
if((state_val_30406 === (42))){
var inst_30340 = (state_30405[(34)]);
var inst_30350 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30351 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_30352 = cljs.core.List.EMPTY;
var inst_30353 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30354 = cljs.core.cons.call(null,inst_30353,inst_30340);
var inst_30355 = cljs.core._conj.call(null,inst_30352,inst_30354);
var inst_30356 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30357 = cljs.core._conj.call(null,inst_30355,inst_30356);
var inst_30358 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30351,inst_30357,null];
var inst_30359 = cljs.core.PersistentHashMap.fromArrays(inst_30350,inst_30358);
var inst_30360 = cljs.test.do_report.call(null,inst_30359);
var state_30405__$1 = state_30405;
var statearr_30479_30913 = state_30405__$1;
(statearr_30479_30913[(2)] = inst_30360);

(statearr_30479_30913[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (37))){
var inst_30364 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30480 = state_30405;
(statearr_30480[(54)] = inst_30364);

return statearr_30480;
})();
var statearr_30481_30914 = state_30405__$1;
(statearr_30481_30914[(2)] = null);

(statearr_30481_30914[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (8))){
var inst_30151 = (state_30405[(51)]);
var inst_30172 = (state_30405[(2)]);
var state_30405__$1 = (function (){var statearr_30482 = state_30405;
(statearr_30482[(55)] = inst_30172);

return statearr_30482;
})();
var statearr_30483_30915 = state_30405__$1;
(statearr_30483_30915[(2)] = inst_30151);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30406 === (49))){
var inst_30378 = (state_30405[(29)]);
var inst_30388 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30389 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_30390 = cljs.core.List.EMPTY;
var inst_30391 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30392 = cljs.core.cons.call(null,inst_30391,inst_30378);
var inst_30393 = cljs.core._conj.call(null,inst_30390,inst_30392);
var inst_30394 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30395 = cljs.core._conj.call(null,inst_30393,inst_30394);
var inst_30396 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30389,inst_30395,null];
var inst_30397 = cljs.core.PersistentHashMap.fromArrays(inst_30388,inst_30396);
var inst_30398 = cljs.test.do_report.call(null,inst_30397);
var state_30405__$1 = state_30405;
var statearr_30484_30916 = state_30405__$1;
(statearr_30484_30916[(2)] = inst_30398);

(statearr_30484_30916[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_30488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30488[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_30488[(1)] = (1));

return statearr_30488;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_30405){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30489){if((e30489 instanceof Object)){
var ex__9301__auto__ = e30489;
var statearr_30490_30917 = state_30405;
(statearr_30490_30917[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30918 = state_30405;
state_30405 = G__30918;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_30405){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_30405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_30491 = f__9319__auto__.call(null);
(statearr_30491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.prototype.apply = (function (self__,args30115){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args30115)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_30781){
var state_val_30782 = (state_30781[(1)]);
if((state_val_30782 === (7))){
var inst_30526 = (state_30781[(7)]);
var inst_30536 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30537 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_30538 = cljs.core.List.EMPTY;
var inst_30539 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30540 = cljs.core.cons.call(null,inst_30539,inst_30526);
var inst_30541 = cljs.core._conj.call(null,inst_30538,inst_30540);
var inst_30542 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30543 = cljs.core._conj.call(null,inst_30541,inst_30542);
var inst_30544 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30537,inst_30543,null];
var inst_30545 = cljs.core.PersistentHashMap.fromArrays(inst_30536,inst_30544);
var inst_30546 = cljs.test.do_report.call(null,inst_30545);
var state_30781__$1 = state_30781;
var statearr_30783_30919 = state_30781__$1;
(statearr_30783_30919[(2)] = inst_30546);

(statearr_30783_30919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (20))){
var inst_30602 = (state_30781[(8)]);
var inst_30605 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30606 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_30607 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30602);
var inst_30608 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30606,inst_30607,null];
var inst_30609 = cljs.core.PersistentHashMap.fromArrays(inst_30605,inst_30608);
var inst_30610 = cljs.test.do_report.call(null,inst_30609);
var state_30781__$1 = state_30781;
var statearr_30784_30920 = state_30781__$1;
(statearr_30784_30920[(2)] = inst_30610);

(statearr_30784_30920[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (27))){
var inst_30640 = (state_30781[(9)]);
var inst_30643 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30644 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_30645 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30640);
var inst_30646 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30644,inst_30645,null];
var inst_30647 = cljs.core.PersistentHashMap.fromArrays(inst_30643,inst_30646);
var inst_30648 = cljs.test.do_report.call(null,inst_30647);
var state_30781__$1 = state_30781;
var statearr_30785_30921 = state_30781__$1;
(statearr_30785_30921[(2)] = inst_30648);

(statearr_30785_30921[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (1))){
var inst_30497 = (state_30781[(10)]);
var inst_30492 = (state_30781[(11)]);
var inst_30494 = (state_30781[(12)]);
var inst_30495 = (state_30781[(13)]);
var inst_30498 = (state_30781[(14)]);
var inst_30496 = (state_30781[(15)]);
var inst_30493 = (state_30781[(16)]);
var inst_30492__$1 = cljs.core.async.chan.call(null,(1));
var inst_30493__$1 = cljs.core.async.chan.call(null,(1));
var inst_30494__$1 = cljs.core.async.chan.call(null,(1));
var inst_30495__$1 = cljs.core.async.chan.call(null,(1));
var inst_30496__$1 = cljs.core.async.chan.call(null,(1));
var inst_30497__$1 = cljs.core.async.chan.call(null,(1));
var inst_30498__$1 = cljs.core.async.chan.call(null,(1));
var inst_30499 = cljs_async_patterns.core._GT_3.call(null,inst_30492__$1);
var inst_30500 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_30499);
var inst_30501 = cljs_async_patterns.core._GT_3.call(null,inst_30493__$1);
var inst_30502 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_30501);
var inst_30503 = cljs_async_patterns.core._GT_3.call(null,inst_30494__$1);
var inst_30504 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_30503);
var inst_30505 = cljs_async_patterns.core._GT_3.call(null,inst_30495__$1,"ERROR:");
var inst_30506 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_30505);
var inst_30507 = cljs_async_patterns.core._GT_3.call(null,inst_30496__$1,"ERROR:");
var inst_30508 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_30507);
var inst_30509 = cljs_async_patterns.core._GT_3.call(null,inst_30497__$1);
var inst_30510 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_30509);
var inst_30511 = cljs_async_patterns.core._GT_3.call(null,inst_30498__$1,"ERROR:");
var inst_30512 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_30511);
var state_30781__$1 = (function (){var statearr_30786 = state_30781;
(statearr_30786[(10)] = inst_30497__$1);

(statearr_30786[(11)] = inst_30492__$1);

(statearr_30786[(12)] = inst_30494__$1);

(statearr_30786[(17)] = inst_30508);

(statearr_30786[(18)] = inst_30504);

(statearr_30786[(13)] = inst_30495__$1);

(statearr_30786[(19)] = inst_30512);

(statearr_30786[(14)] = inst_30498__$1);

(statearr_30786[(15)] = inst_30496__$1);

(statearr_30786[(20)] = inst_30500);

(statearr_30786[(21)] = inst_30502);

(statearr_30786[(22)] = inst_30510);

(statearr_30786[(23)] = inst_30506);

(statearr_30786[(16)] = inst_30493__$1);

return statearr_30786;
})();
var statearr_30787_30922 = state_30781__$1;
(statearr_30787_30922[(2)] = null);

(statearr_30787_30922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (24))){
var inst_30627 = (state_30781[(2)]);
var inst_30628 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30629 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_30630 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30629,inst_30627,null];
var inst_30631 = cljs.core.PersistentHashMap.fromArrays(inst_30628,inst_30630);
var inst_30632 = cljs.test.do_report.call(null,inst_30631);
var state_30781__$1 = state_30781;
var statearr_30788_30923 = state_30781__$1;
(statearr_30788_30923[(2)] = inst_30632);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (39))){
var inst_30497 = (state_30781[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30781,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_30712 = cljs.core.List.EMPTY;
var inst_30713 = cljs.core._conj.call(null,inst_30712,"suc");
var state_30781__$1 = (function (){var statearr_30789 = state_30781;
(statearr_30789[(24)] = inst_30713);

return statearr_30789;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(40),inst_30497);
} else {
if((state_val_30782 === (46))){
var inst_30498 = (state_30781[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30781,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_30750 = cljs.core.List.EMPTY;
var inst_30751 = cljs.core._conj.call(null,inst_30750,"suc");
var state_30781__$1 = (function (){var statearr_30790 = state_30781;
(statearr_30790[(25)] = inst_30751);

return statearr_30790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(47),inst_30498);
} else {
if((state_val_30782 === (4))){
var inst_30492 = (state_30781[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30781,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_30522 = cljs.core.List.EMPTY;
var inst_30523 = cljs.core._conj.call(null,inst_30522,"suc");
var state_30781__$1 = (function (){var statearr_30791 = state_30781;
(statearr_30791[(26)] = inst_30523);

return statearr_30791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(5),inst_30492);
} else {
if((state_val_30782 === (15))){
var inst_30565 = (state_30781[(27)]);
var inst_30586 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30792 = state_30781;
(statearr_30792[(28)] = inst_30586);

return statearr_30792;
})();
var statearr_30793_30924 = state_30781__$1;
(statearr_30793_30924[(2)] = inst_30565);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (48))){
var inst_30754 = (state_30781[(29)]);
var inst_30757 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30758 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_30759 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30754);
var inst_30760 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30758,inst_30759,null];
var inst_30761 = cljs.core.PersistentHashMap.fromArrays(inst_30757,inst_30760);
var inst_30762 = cljs.test.do_report.call(null,inst_30761);
var state_30781__$1 = state_30781;
var statearr_30794_30925 = state_30781__$1;
(statearr_30794_30925[(2)] = inst_30762);

(statearr_30794_30925[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (50))){
var inst_30755 = (state_30781[(30)]);
var inst_30776 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30795 = state_30781;
(statearr_30795[(31)] = inst_30776);

return statearr_30795;
})();
var statearr_30796_30926 = state_30781__$1;
(statearr_30796_30926[(2)] = inst_30755);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (21))){
var inst_30602 = (state_30781[(8)]);
var inst_30612 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30613 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_30614 = cljs.core.List.EMPTY;
var inst_30615 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30616 = cljs.core.cons.call(null,inst_30615,inst_30602);
var inst_30617 = cljs.core._conj.call(null,inst_30614,inst_30616);
var inst_30618 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30619 = cljs.core._conj.call(null,inst_30617,inst_30618);
var inst_30620 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30613,inst_30619,null];
var inst_30621 = cljs.core.PersistentHashMap.fromArrays(inst_30612,inst_30620);
var inst_30622 = cljs.test.do_report.call(null,inst_30621);
var state_30781__$1 = state_30781;
var statearr_30797_30927 = state_30781__$1;
(statearr_30797_30927[(2)] = inst_30622);

(statearr_30797_30927[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (31))){
var inst_30665 = (state_30781[(2)]);
var inst_30666 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30667 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_30668 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30667,inst_30665,null];
var inst_30669 = cljs.core.PersistentHashMap.fromArrays(inst_30666,inst_30668);
var inst_30670 = cljs.test.do_report.call(null,inst_30669);
var state_30781__$1 = state_30781;
var statearr_30798_30928 = state_30781__$1;
(statearr_30798_30928[(2)] = inst_30670);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (32))){
var inst_30496 = (state_30781[(15)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30781,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_30674 = cljs.core.List.EMPTY;
var inst_30675 = cljs.core._conj.call(null,inst_30674,"ERROR:");
var state_30781__$1 = (function (){var statearr_30799 = state_30781;
(statearr_30799[(32)] = inst_30675);

return statearr_30799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(33),inst_30496);
} else {
if((state_val_30782 === (40))){
var inst_30717 = (state_30781[(33)]);
var inst_30713 = (state_30781[(24)]);
var inst_30716 = (state_30781[(34)]);
var inst_30715 = (state_30781[(2)]);
var inst_30716__$1 = cljs.core._conj.call(null,inst_30713,inst_30715);
var inst_30717__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30716__$1);
var state_30781__$1 = (function (){var statearr_30800 = state_30781;
(statearr_30800[(33)] = inst_30717__$1);

(statearr_30800[(34)] = inst_30716__$1);

return statearr_30800;
})();
if(cljs.core.truth_(inst_30717__$1)){
var statearr_30801_30929 = state_30781__$1;
(statearr_30801_30929[(1)] = (41));

} else {
var statearr_30802_30930 = state_30781__$1;
(statearr_30802_30930[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (33))){
var inst_30678 = (state_30781[(35)]);
var inst_30675 = (state_30781[(32)]);
var inst_30679 = (state_30781[(36)]);
var inst_30677 = (state_30781[(2)]);
var inst_30678__$1 = cljs.core._conj.call(null,inst_30675,inst_30677);
var inst_30679__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30678__$1);
var state_30781__$1 = (function (){var statearr_30803 = state_30781;
(statearr_30803[(35)] = inst_30678__$1);

(statearr_30803[(36)] = inst_30679__$1);

return statearr_30803;
})();
if(cljs.core.truth_(inst_30679__$1)){
var statearr_30804_30931 = state_30781__$1;
(statearr_30804_30931[(1)] = (34));

} else {
var statearr_30805_30932 = state_30781__$1;
(statearr_30805_30932[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (13))){
var inst_30564 = (state_30781[(37)]);
var inst_30567 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30568 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_30569 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30564);
var inst_30570 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30568,inst_30569,null];
var inst_30571 = cljs.core.PersistentHashMap.fromArrays(inst_30567,inst_30570);
var inst_30572 = cljs.test.do_report.call(null,inst_30571);
var state_30781__$1 = state_30781;
var statearr_30806_30933 = state_30781__$1;
(statearr_30806_30933[(2)] = inst_30572);

(statearr_30806_30933[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (22))){
var inst_30603 = (state_30781[(38)]);
var inst_30624 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30807 = state_30781;
(statearr_30807[(39)] = inst_30624);

return statearr_30807;
})();
var statearr_30808_30934 = state_30781__$1;
(statearr_30808_30934[(2)] = inst_30603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (36))){
var inst_30679 = (state_30781[(36)]);
var inst_30700 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30809 = state_30781;
(statearr_30809[(40)] = inst_30700);

return statearr_30809;
})();
var statearr_30810_30935 = state_30781__$1;
(statearr_30810_30935[(2)] = inst_30679);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (41))){
var inst_30716 = (state_30781[(34)]);
var inst_30719 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30720 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_30721 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30716);
var inst_30722 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30720,inst_30721,null];
var inst_30723 = cljs.core.PersistentHashMap.fromArrays(inst_30719,inst_30722);
var inst_30724 = cljs.test.do_report.call(null,inst_30723);
var state_30781__$1 = state_30781;
var statearr_30811_30936 = state_30781__$1;
(statearr_30811_30936[(2)] = inst_30724);

(statearr_30811_30936[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (43))){
var inst_30717 = (state_30781[(33)]);
var inst_30738 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30812 = state_30781;
(statearr_30812[(41)] = inst_30738);

return statearr_30812;
})();
var statearr_30813_30937 = state_30781__$1;
(statearr_30813_30937[(2)] = inst_30717);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (29))){
var inst_30641 = (state_30781[(42)]);
var inst_30662 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30814 = state_30781;
(statearr_30814[(43)] = inst_30662);

return statearr_30814;
})();
var statearr_30815_30938 = state_30781__$1;
(statearr_30815_30938[(2)] = inst_30641);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (44))){
var inst_30778 = (state_30781[(2)]);
var inst_30779 = done.call(null);
var state_30781__$1 = (function (){var statearr_30816 = state_30781;
(statearr_30816[(44)] = inst_30778);

return statearr_30816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30781__$1,inst_30779);
} else {
if((state_val_30782 === (6))){
var inst_30526 = (state_30781[(7)]);
var inst_30529 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30530 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_30531 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30526);
var inst_30532 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30530,inst_30531,null];
var inst_30533 = cljs.core.PersistentHashMap.fromArrays(inst_30529,inst_30532);
var inst_30534 = cljs.test.do_report.call(null,inst_30533);
var state_30781__$1 = state_30781;
var statearr_30817_30939 = state_30781__$1;
(statearr_30817_30939[(2)] = inst_30534);

(statearr_30817_30939[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (28))){
var inst_30640 = (state_30781[(9)]);
var inst_30650 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30651 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_30652 = cljs.core.List.EMPTY;
var inst_30653 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30654 = cljs.core.cons.call(null,inst_30653,inst_30640);
var inst_30655 = cljs.core._conj.call(null,inst_30652,inst_30654);
var inst_30656 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30657 = cljs.core._conj.call(null,inst_30655,inst_30656);
var inst_30658 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30651,inst_30657,null];
var inst_30659 = cljs.core.PersistentHashMap.fromArrays(inst_30650,inst_30658);
var inst_30660 = cljs.test.do_report.call(null,inst_30659);
var state_30781__$1 = state_30781;
var statearr_30818_30940 = state_30781__$1;
(statearr_30818_30940[(2)] = inst_30660);

(statearr_30818_30940[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (25))){
var inst_30495 = (state_30781[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30781,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_30636 = cljs.core.List.EMPTY;
var inst_30637 = cljs.core._conj.call(null,inst_30636,"ERROR:");
var state_30781__$1 = (function (){var statearr_30819 = state_30781;
(statearr_30819[(45)] = inst_30637);

return statearr_30819;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(26),inst_30495);
} else {
if((state_val_30782 === (34))){
var inst_30678 = (state_30781[(35)]);
var inst_30681 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30682 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_30683 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30678);
var inst_30684 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_30682,inst_30683,null];
var inst_30685 = cljs.core.PersistentHashMap.fromArrays(inst_30681,inst_30684);
var inst_30686 = cljs.test.do_report.call(null,inst_30685);
var state_30781__$1 = state_30781;
var statearr_30820_30941 = state_30781__$1;
(statearr_30820_30941[(2)] = inst_30686);

(statearr_30820_30941[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (17))){
var inst_30589 = (state_30781[(2)]);
var inst_30590 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30591 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_30592 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30591,inst_30589,null];
var inst_30593 = cljs.core.PersistentHashMap.fromArrays(inst_30590,inst_30592);
var inst_30594 = cljs.test.do_report.call(null,inst_30593);
var state_30781__$1 = state_30781;
var statearr_30821_30942 = state_30781__$1;
(statearr_30821_30942[(2)] = inst_30594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (3))){
var inst_30513 = (state_30781[(2)]);
var inst_30514 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30515 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_30516 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30515,inst_30513,null];
var inst_30517 = cljs.core.PersistentHashMap.fromArrays(inst_30514,inst_30516);
var inst_30518 = cljs.test.do_report.call(null,inst_30517);
var state_30781__$1 = state_30781;
var statearr_30822_30943 = state_30781__$1;
(statearr_30822_30943[(2)] = inst_30518);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (12))){
var inst_30565 = (state_30781[(27)]);
var inst_30564 = (state_30781[(37)]);
var inst_30561 = (state_30781[(46)]);
var inst_30563 = (state_30781[(2)]);
var inst_30564__$1 = cljs.core._conj.call(null,inst_30561,inst_30563);
var inst_30565__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30564__$1);
var state_30781__$1 = (function (){var statearr_30823 = state_30781;
(statearr_30823[(27)] = inst_30565__$1);

(statearr_30823[(37)] = inst_30564__$1);

return statearr_30823;
})();
if(cljs.core.truth_(inst_30565__$1)){
var statearr_30824_30944 = state_30781__$1;
(statearr_30824_30944[(1)] = (13));

} else {
var statearr_30825_30945 = state_30781__$1;
(statearr_30825_30945[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (2))){
var inst_30550 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30826 = state_30781;
(statearr_30826[(47)] = inst_30550);

return statearr_30826;
})();
var statearr_30827_30946 = state_30781__$1;
(statearr_30827_30946[(2)] = null);

(statearr_30827_30946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (23))){
var inst_30664 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30828 = state_30781;
(statearr_30828[(48)] = inst_30664);

return statearr_30828;
})();
var statearr_30829_30947 = state_30781__$1;
(statearr_30829_30947[(2)] = null);

(statearr_30829_30947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (47))){
var inst_30754 = (state_30781[(29)]);
var inst_30755 = (state_30781[(30)]);
var inst_30751 = (state_30781[(25)]);
var inst_30753 = (state_30781[(2)]);
var inst_30754__$1 = cljs.core._conj.call(null,inst_30751,inst_30753);
var inst_30755__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30754__$1);
var state_30781__$1 = (function (){var statearr_30830 = state_30781;
(statearr_30830[(29)] = inst_30754__$1);

(statearr_30830[(30)] = inst_30755__$1);

return statearr_30830;
})();
if(cljs.core.truth_(inst_30755__$1)){
var statearr_30831_30948 = state_30781__$1;
(statearr_30831_30948[(1)] = (48));

} else {
var statearr_30832_30949 = state_30781__$1;
(statearr_30832_30949[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (35))){
var inst_30678 = (state_30781[(35)]);
var inst_30688 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30689 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_30690 = cljs.core.List.EMPTY;
var inst_30691 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30692 = cljs.core.cons.call(null,inst_30691,inst_30678);
var inst_30693 = cljs.core._conj.call(null,inst_30690,inst_30692);
var inst_30694 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30695 = cljs.core._conj.call(null,inst_30693,inst_30694);
var inst_30696 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30689,inst_30695,null];
var inst_30697 = cljs.core.PersistentHashMap.fromArrays(inst_30688,inst_30696);
var inst_30698 = cljs.test.do_report.call(null,inst_30697);
var state_30781__$1 = state_30781;
var statearr_30833_30950 = state_30781__$1;
(statearr_30833_30950[(2)] = inst_30698);

(statearr_30833_30950[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (19))){
var inst_30602 = (state_30781[(8)]);
var inst_30603 = (state_30781[(38)]);
var inst_30599 = (state_30781[(49)]);
var inst_30601 = (state_30781[(2)]);
var inst_30602__$1 = cljs.core._conj.call(null,inst_30599,inst_30601);
var inst_30603__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30602__$1);
var state_30781__$1 = (function (){var statearr_30834 = state_30781;
(statearr_30834[(8)] = inst_30602__$1);

(statearr_30834[(38)] = inst_30603__$1);

return statearr_30834;
})();
if(cljs.core.truth_(inst_30603__$1)){
var statearr_30835_30951 = state_30781__$1;
(statearr_30835_30951[(1)] = (20));

} else {
var statearr_30836_30952 = state_30781__$1;
(statearr_30836_30952[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (11))){
var inst_30493 = (state_30781[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30781,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_30560 = cljs.core.List.EMPTY;
var inst_30561 = cljs.core._conj.call(null,inst_30560,"err1");
var state_30781__$1 = (function (){var statearr_30837 = state_30781;
(statearr_30837[(46)] = inst_30561);

return statearr_30837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(12),inst_30493);
} else {
if((state_val_30782 === (9))){
var inst_30588 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30838 = state_30781;
(statearr_30838[(50)] = inst_30588);

return statearr_30838;
})();
var statearr_30839_30953 = state_30781__$1;
(statearr_30839_30953[(2)] = null);

(statearr_30839_30953[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (5))){
var inst_30527 = (state_30781[(51)]);
var inst_30526 = (state_30781[(7)]);
var inst_30523 = (state_30781[(26)]);
var inst_30525 = (state_30781[(2)]);
var inst_30526__$1 = cljs.core._conj.call(null,inst_30523,inst_30525);
var inst_30527__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30526__$1);
var state_30781__$1 = (function (){var statearr_30840 = state_30781;
(statearr_30840[(51)] = inst_30527__$1);

(statearr_30840[(7)] = inst_30526__$1);

return statearr_30840;
})();
if(cljs.core.truth_(inst_30527__$1)){
var statearr_30841_30954 = state_30781__$1;
(statearr_30841_30954[(1)] = (6));

} else {
var statearr_30842_30955 = state_30781__$1;
(statearr_30842_30955[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (14))){
var inst_30564 = (state_30781[(37)]);
var inst_30574 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30575 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_30576 = cljs.core.List.EMPTY;
var inst_30577 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30578 = cljs.core.cons.call(null,inst_30577,inst_30564);
var inst_30579 = cljs.core._conj.call(null,inst_30576,inst_30578);
var inst_30580 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30581 = cljs.core._conj.call(null,inst_30579,inst_30580);
var inst_30582 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30575,inst_30581,null];
var inst_30583 = cljs.core.PersistentHashMap.fromArrays(inst_30574,inst_30582);
var inst_30584 = cljs.test.do_report.call(null,inst_30583);
var state_30781__$1 = state_30781;
var statearr_30843_30956 = state_30781__$1;
(statearr_30843_30956[(2)] = inst_30584);

(statearr_30843_30956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (45))){
var inst_30741 = (state_30781[(2)]);
var inst_30742 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30743 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_30744 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30743,inst_30741,null];
var inst_30745 = cljs.core.PersistentHashMap.fromArrays(inst_30742,inst_30744);
var inst_30746 = cljs.test.do_report.call(null,inst_30745);
var state_30781__$1 = state_30781;
var statearr_30844_30957 = state_30781__$1;
(statearr_30844_30957[(2)] = inst_30746);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (26))){
var inst_30637 = (state_30781[(45)]);
var inst_30640 = (state_30781[(9)]);
var inst_30641 = (state_30781[(42)]);
var inst_30639 = (state_30781[(2)]);
var inst_30640__$1 = cljs.core._conj.call(null,inst_30637,inst_30639);
var inst_30641__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30640__$1);
var state_30781__$1 = (function (){var statearr_30845 = state_30781;
(statearr_30845[(9)] = inst_30640__$1);

(statearr_30845[(42)] = inst_30641__$1);

return statearr_30845;
})();
if(cljs.core.truth_(inst_30641__$1)){
var statearr_30846_30958 = state_30781__$1;
(statearr_30846_30958[(1)] = (27));

} else {
var statearr_30847_30959 = state_30781__$1;
(statearr_30847_30959[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (16))){
var inst_30626 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30848 = state_30781;
(statearr_30848[(52)] = inst_30626);

return statearr_30848;
})();
var statearr_30849_30960 = state_30781__$1;
(statearr_30849_30960[(2)] = null);

(statearr_30849_30960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (38))){
var inst_30703 = (state_30781[(2)]);
var inst_30704 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30705 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_30706 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30705,inst_30703,null];
var inst_30707 = cljs.core.PersistentHashMap.fromArrays(inst_30704,inst_30706);
var inst_30708 = cljs.test.do_report.call(null,inst_30707);
var state_30781__$1 = state_30781;
var statearr_30850_30961 = state_30781__$1;
(statearr_30850_30961[(2)] = inst_30708);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (30))){
var inst_30702 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30851 = state_30781;
(statearr_30851[(53)] = inst_30702);

return statearr_30851;
})();
var statearr_30852_30962 = state_30781__$1;
(statearr_30852_30962[(2)] = null);

(statearr_30852_30962[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (10))){
var inst_30551 = (state_30781[(2)]);
var inst_30552 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30553 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_30554 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30553,inst_30551,null];
var inst_30555 = cljs.core.PersistentHashMap.fromArrays(inst_30552,inst_30554);
var inst_30556 = cljs.test.do_report.call(null,inst_30555);
var state_30781__$1 = state_30781;
var statearr_30853_30963 = state_30781__$1;
(statearr_30853_30963[(2)] = inst_30556);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (18))){
var inst_30494 = (state_30781[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30781,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_30598 = cljs.core.List.EMPTY;
var inst_30599 = cljs.core._conj.call(null,inst_30598,"err2");
var state_30781__$1 = (function (){var statearr_30854 = state_30781;
(statearr_30854[(49)] = inst_30599);

return statearr_30854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30781__$1,(19),inst_30494);
} else {
if((state_val_30782 === (42))){
var inst_30716 = (state_30781[(34)]);
var inst_30726 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30727 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_30728 = cljs.core.List.EMPTY;
var inst_30729 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30730 = cljs.core.cons.call(null,inst_30729,inst_30716);
var inst_30731 = cljs.core._conj.call(null,inst_30728,inst_30730);
var inst_30732 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30733 = cljs.core._conj.call(null,inst_30731,inst_30732);
var inst_30734 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30727,inst_30733,null];
var inst_30735 = cljs.core.PersistentHashMap.fromArrays(inst_30726,inst_30734);
var inst_30736 = cljs.test.do_report.call(null,inst_30735);
var state_30781__$1 = state_30781;
var statearr_30855_30964 = state_30781__$1;
(statearr_30855_30964[(2)] = inst_30736);

(statearr_30855_30964[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (37))){
var inst_30740 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30856 = state_30781;
(statearr_30856[(54)] = inst_30740);

return statearr_30856;
})();
var statearr_30857_30965 = state_30781__$1;
(statearr_30857_30965[(2)] = null);

(statearr_30857_30965[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (8))){
var inst_30527 = (state_30781[(51)]);
var inst_30548 = (state_30781[(2)]);
var state_30781__$1 = (function (){var statearr_30858 = state_30781;
(statearr_30858[(55)] = inst_30548);

return statearr_30858;
})();
var statearr_30859_30966 = state_30781__$1;
(statearr_30859_30966[(2)] = inst_30527);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30782 === (49))){
var inst_30754 = (state_30781[(29)]);
var inst_30764 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30765 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_30766 = cljs.core.List.EMPTY;
var inst_30767 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_30768 = cljs.core.cons.call(null,inst_30767,inst_30754);
var inst_30769 = cljs.core._conj.call(null,inst_30766,inst_30768);
var inst_30770 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_30771 = cljs.core._conj.call(null,inst_30769,inst_30770);
var inst_30772 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_30765,inst_30771,null];
var inst_30773 = cljs.core.PersistentHashMap.fromArrays(inst_30764,inst_30772);
var inst_30774 = cljs.test.do_report.call(null,inst_30773);
var state_30781__$1 = state_30781;
var statearr_30860_30967 = state_30781__$1;
(statearr_30860_30967[(2)] = inst_30774);

(statearr_30860_30967[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_30864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30864[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_30864[(1)] = (1));

return statearr_30864;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_30781){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_30781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e30865){if((e30865 instanceof Object)){
var ex__9301__auto__ = e30865;
var statearr_30866_30968 = state_30781;
(statearr_30866_30968[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30969 = state_30781;
state_30781 = G__30969;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_30781){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_30781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_30867 = f__9319__auto__.call(null);
(statearr_30867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_30867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30113","meta30113",-777890744,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test30112";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test30112");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test30112 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test30112(meta30113){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112(meta30113));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30112(null));
});

cljs_async_patterns.core_test._GT_3_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_3_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">3-test","cljs-async-patterns.core-test/>3-test",1820323724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">3-test",">3-test",-1651940881,null),"test/cljs_async_patterns/core_test.cljs",17,1,74,74,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_3_test)?cljs_async_patterns.core_test._GT_3_test.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT__QMARK__one = (function cljs_async_patterns$core_test$_GT__QMARK__one(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT__QMARK__one.cljs$lang$var);
});
cljs_async_patterns.core_test._GT__QMARK__one.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Mirror of the >1 tests.");

try{if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970 = (function (meta30971){
this.meta30971 = meta30971;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30972,meta30971__$1){
var self__ = this;
var _30972__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970(meta30971__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30972){
var self__ = this;
var _30972__$1 = this;
return self__.meta30971;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_31099){
var state_val_31100 = (state_31099[(1)]);
if((state_val_31100 === (7))){
var inst_30996 = (state_31099[(7)]);
var inst_31006 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31007 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31008 = cljs.core.List.EMPTY;
var inst_31009 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31010 = cljs.core.cons.call(null,inst_31009,inst_30996);
var inst_31011 = cljs.core._conj.call(null,inst_31008,inst_31010);
var inst_31012 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31013 = cljs.core._conj.call(null,inst_31011,inst_31012);
var inst_31014 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31007,inst_31013,null];
var inst_31015 = cljs.core.PersistentHashMap.fromArrays(inst_31006,inst_31014);
var inst_31016 = cljs.test.do_report.call(null,inst_31015);
var state_31099__$1 = state_31099;
var statearr_31101_31310 = state_31099__$1;
(statearr_31101_31310[(2)] = inst_31016);

(statearr_31101_31310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (20))){
var inst_31072 = (state_31099[(8)]);
var inst_31075 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31076 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31077 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31072);
var inst_31078 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31076,inst_31077,null];
var inst_31079 = cljs.core.PersistentHashMap.fromArrays(inst_31075,inst_31078);
var inst_31080 = cljs.test.do_report.call(null,inst_31079);
var state_31099__$1 = state_31099;
var statearr_31102_31311 = state_31099__$1;
(statearr_31102_31311[(2)] = inst_31080);

(statearr_31102_31311[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (1))){
var inst_30976 = (state_31099[(9)]);
var inst_30974 = (state_31099[(10)]);
var inst_30975 = (state_31099[(11)]);
var inst_30974__$1 = cljs.core.async.chan.call(null,(1));
var inst_30975__$1 = cljs.core.async.chan.call(null,(1));
var inst_30976__$1 = cljs.core.async.chan.call(null,(1));
var inst_30977 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_30974__$1);
var inst_30978 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_30977);
var inst_30979 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_30975__$1);
var inst_30980 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_30979);
var inst_30981 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_30976__$1,"ERROR:");
var inst_30982 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_30981);
var state_31099__$1 = (function (){var statearr_31103 = state_31099;
(statearr_31103[(12)] = inst_30978);

(statearr_31103[(9)] = inst_30976__$1);

(statearr_31103[(13)] = inst_30980);

(statearr_31103[(14)] = inst_30982);

(statearr_31103[(10)] = inst_30974__$1);

(statearr_31103[(11)] = inst_30975__$1);

return statearr_31103;
})();
var statearr_31104_31312 = state_31099__$1;
(statearr_31104_31312[(2)] = null);

(statearr_31104_31312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (4))){
var inst_30974 = (state_31099[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31099,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_30992 = cljs.core.List.EMPTY;
var inst_30993 = cljs.core._conj.call(null,inst_30992,"suc");
var state_31099__$1 = (function (){var statearr_31105 = state_31099;
(statearr_31105[(15)] = inst_30993);

return statearr_31105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31099__$1,(5),inst_30974);
} else {
if((state_val_31100 === (15))){
var inst_31035 = (state_31099[(16)]);
var inst_31056 = (state_31099[(2)]);
var state_31099__$1 = (function (){var statearr_31106 = state_31099;
(statearr_31106[(17)] = inst_31056);

return statearr_31106;
})();
var statearr_31107_31313 = state_31099__$1;
(statearr_31107_31313[(2)] = inst_31035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (21))){
var inst_31072 = (state_31099[(8)]);
var inst_31082 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31083 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31084 = cljs.core.List.EMPTY;
var inst_31085 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31086 = cljs.core.cons.call(null,inst_31085,inst_31072);
var inst_31087 = cljs.core._conj.call(null,inst_31084,inst_31086);
var inst_31088 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31089 = cljs.core._conj.call(null,inst_31087,inst_31088);
var inst_31090 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31083,inst_31089,null];
var inst_31091 = cljs.core.PersistentHashMap.fromArrays(inst_31082,inst_31090);
var inst_31092 = cljs.test.do_report.call(null,inst_31091);
var state_31099__$1 = state_31099;
var statearr_31108_31314 = state_31099__$1;
(statearr_31108_31314[(2)] = inst_31092);

(statearr_31108_31314[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (13))){
var inst_31034 = (state_31099[(18)]);
var inst_31037 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31038 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_31039 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31034);
var inst_31040 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31038,inst_31039,null];
var inst_31041 = cljs.core.PersistentHashMap.fromArrays(inst_31037,inst_31040);
var inst_31042 = cljs.test.do_report.call(null,inst_31041);
var state_31099__$1 = state_31099;
var statearr_31109_31315 = state_31099__$1;
(statearr_31109_31315[(2)] = inst_31042);

(statearr_31109_31315[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (22))){
var inst_31073 = (state_31099[(19)]);
var inst_31094 = (state_31099[(2)]);
var state_31099__$1 = (function (){var statearr_31110 = state_31099;
(statearr_31110[(20)] = inst_31094);

return statearr_31110;
})();
var statearr_31111_31316 = state_31099__$1;
(statearr_31111_31316[(2)] = inst_31073);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (6))){
var inst_30996 = (state_31099[(7)]);
var inst_30999 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31000 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31001 = cljs.core.cons.call(null,cljs.core._EQ_,inst_30996);
var inst_31002 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31000,inst_31001,null];
var inst_31003 = cljs.core.PersistentHashMap.fromArrays(inst_30999,inst_31002);
var inst_31004 = cljs.test.do_report.call(null,inst_31003);
var state_31099__$1 = state_31099;
var statearr_31112_31317 = state_31099__$1;
(statearr_31112_31317[(2)] = inst_31004);

(statearr_31112_31317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (17))){
var inst_31059 = (state_31099[(2)]);
var inst_31060 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31061 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31062 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31061,inst_31059,null];
var inst_31063 = cljs.core.PersistentHashMap.fromArrays(inst_31060,inst_31062);
var inst_31064 = cljs.test.do_report.call(null,inst_31063);
var state_31099__$1 = state_31099;
var statearr_31113_31318 = state_31099__$1;
(statearr_31113_31318[(2)] = inst_31064);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (3))){
var inst_30983 = (state_31099[(2)]);
var inst_30984 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_30985 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_30986 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_30985,inst_30983,null];
var inst_30987 = cljs.core.PersistentHashMap.fromArrays(inst_30984,inst_30986);
var inst_30988 = cljs.test.do_report.call(null,inst_30987);
var state_31099__$1 = state_31099;
var statearr_31114_31319 = state_31099__$1;
(statearr_31114_31319[(2)] = inst_30988);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (12))){
var inst_31034 = (state_31099[(18)]);
var inst_31031 = (state_31099[(21)]);
var inst_31035 = (state_31099[(16)]);
var inst_31033 = (state_31099[(2)]);
var inst_31034__$1 = cljs.core._conj.call(null,inst_31031,inst_31033);
var inst_31035__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31034__$1);
var state_31099__$1 = (function (){var statearr_31115 = state_31099;
(statearr_31115[(18)] = inst_31034__$1);

(statearr_31115[(16)] = inst_31035__$1);

return statearr_31115;
})();
if(cljs.core.truth_(inst_31035__$1)){
var statearr_31116_31320 = state_31099__$1;
(statearr_31116_31320[(1)] = (13));

} else {
var statearr_31117_31321 = state_31099__$1;
(statearr_31117_31321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (2))){
var inst_31020 = (state_31099[(2)]);
var state_31099__$1 = (function (){var statearr_31118 = state_31099;
(statearr_31118[(22)] = inst_31020);

return statearr_31118;
})();
var statearr_31119_31322 = state_31099__$1;
(statearr_31119_31322[(2)] = null);

(statearr_31119_31322[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (19))){
var inst_31072 = (state_31099[(8)]);
var inst_31069 = (state_31099[(23)]);
var inst_31073 = (state_31099[(19)]);
var inst_31071 = (state_31099[(2)]);
var inst_31072__$1 = cljs.core._conj.call(null,inst_31069,inst_31071);
var inst_31073__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31072__$1);
var state_31099__$1 = (function (){var statearr_31120 = state_31099;
(statearr_31120[(8)] = inst_31072__$1);

(statearr_31120[(19)] = inst_31073__$1);

return statearr_31120;
})();
if(cljs.core.truth_(inst_31073__$1)){
var statearr_31121_31323 = state_31099__$1;
(statearr_31121_31323[(1)] = (20));

} else {
var statearr_31122_31324 = state_31099__$1;
(statearr_31122_31324[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (11))){
var inst_30975 = (state_31099[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31099,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31030 = cljs.core.List.EMPTY;
var inst_31031 = cljs.core._conj.call(null,inst_31030,false);
var state_31099__$1 = (function (){var statearr_31123 = state_31099;
(statearr_31123[(21)] = inst_31031);

return statearr_31123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31099__$1,(12),inst_30975);
} else {
if((state_val_31100 === (9))){
var inst_31058 = (state_31099[(2)]);
var state_31099__$1 = (function (){var statearr_31124 = state_31099;
(statearr_31124[(24)] = inst_31058);

return statearr_31124;
})();
var statearr_31125_31325 = state_31099__$1;
(statearr_31125_31325[(2)] = null);

(statearr_31125_31325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (5))){
var inst_30997 = (state_31099[(25)]);
var inst_30996 = (state_31099[(7)]);
var inst_30993 = (state_31099[(15)]);
var inst_30995 = (state_31099[(2)]);
var inst_30996__$1 = cljs.core._conj.call(null,inst_30993,inst_30995);
var inst_30997__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_30996__$1);
var state_31099__$1 = (function (){var statearr_31126 = state_31099;
(statearr_31126[(25)] = inst_30997__$1);

(statearr_31126[(7)] = inst_30996__$1);

return statearr_31126;
})();
if(cljs.core.truth_(inst_30997__$1)){
var statearr_31127_31326 = state_31099__$1;
(statearr_31127_31326[(1)] = (6));

} else {
var statearr_31128_31327 = state_31099__$1;
(statearr_31128_31327[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (14))){
var inst_31034 = (state_31099[(18)]);
var inst_31044 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31045 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_31046 = cljs.core.List.EMPTY;
var inst_31047 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31048 = cljs.core.cons.call(null,inst_31047,inst_31034);
var inst_31049 = cljs.core._conj.call(null,inst_31046,inst_31048);
var inst_31050 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31051 = cljs.core._conj.call(null,inst_31049,inst_31050);
var inst_31052 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31045,inst_31051,null];
var inst_31053 = cljs.core.PersistentHashMap.fromArrays(inst_31044,inst_31052);
var inst_31054 = cljs.test.do_report.call(null,inst_31053);
var state_31099__$1 = state_31099;
var statearr_31129_31328 = state_31099__$1;
(statearr_31129_31328[(2)] = inst_31054);

(statearr_31129_31328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (16))){
var inst_31096 = (state_31099[(2)]);
var inst_31097 = done.call(null);
var state_31099__$1 = (function (){var statearr_31130 = state_31099;
(statearr_31130[(26)] = inst_31096);

return statearr_31130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31099__$1,inst_31097);
} else {
if((state_val_31100 === (10))){
var inst_31021 = (state_31099[(2)]);
var inst_31022 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31023 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_31024 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31023,inst_31021,null];
var inst_31025 = cljs.core.PersistentHashMap.fromArrays(inst_31022,inst_31024);
var inst_31026 = cljs.test.do_report.call(null,inst_31025);
var state_31099__$1 = state_31099;
var statearr_31131_31329 = state_31099__$1;
(statearr_31131_31329[(2)] = inst_31026);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31100 === (18))){
var inst_30976 = (state_31099[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31099,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31068 = cljs.core.List.EMPTY;
var inst_31069 = cljs.core._conj.call(null,inst_31068,"ERROR:");
var state_31099__$1 = (function (){var statearr_31132 = state_31099;
(statearr_31132[(23)] = inst_31069);

return statearr_31132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31099__$1,(19),inst_30976);
} else {
if((state_val_31100 === (8))){
var inst_30997 = (state_31099[(25)]);
var inst_31018 = (state_31099[(2)]);
var state_31099__$1 = (function (){var statearr_31133 = state_31099;
(statearr_31133[(27)] = inst_31018);

return statearr_31133;
})();
var statearr_31134_31330 = state_31099__$1;
(statearr_31134_31330[(2)] = inst_30997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_31138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31138[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_31138[(1)] = (1));

return statearr_31138;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_31099){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31139){if((e31139 instanceof Object)){
var ex__9301__auto__ = e31139;
var statearr_31140_31331 = state_31099;
(statearr_31140_31331[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31332 = state_31099;
state_31099 = G__31332;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_31099){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_31099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_31141 = f__9319__auto__.call(null);
(statearr_31141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.prototype.apply = (function (self__,args30973){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args30973)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_31267){
var state_val_31268 = (state_31267[(1)]);
if((state_val_31268 === (7))){
var inst_31164 = (state_31267[(7)]);
var inst_31174 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31175 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31176 = cljs.core.List.EMPTY;
var inst_31177 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31178 = cljs.core.cons.call(null,inst_31177,inst_31164);
var inst_31179 = cljs.core._conj.call(null,inst_31176,inst_31178);
var inst_31180 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31181 = cljs.core._conj.call(null,inst_31179,inst_31180);
var inst_31182 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31175,inst_31181,null];
var inst_31183 = cljs.core.PersistentHashMap.fromArrays(inst_31174,inst_31182);
var inst_31184 = cljs.test.do_report.call(null,inst_31183);
var state_31267__$1 = state_31267;
var statearr_31269_31333 = state_31267__$1;
(statearr_31269_31333[(2)] = inst_31184);

(statearr_31269_31333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (20))){
var inst_31240 = (state_31267[(8)]);
var inst_31243 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31244 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31245 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31240);
var inst_31246 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31244,inst_31245,null];
var inst_31247 = cljs.core.PersistentHashMap.fromArrays(inst_31243,inst_31246);
var inst_31248 = cljs.test.do_report.call(null,inst_31247);
var state_31267__$1 = state_31267;
var statearr_31270_31334 = state_31267__$1;
(statearr_31270_31334[(2)] = inst_31248);

(statearr_31270_31334[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (1))){
var inst_31143 = (state_31267[(9)]);
var inst_31144 = (state_31267[(10)]);
var inst_31142 = (state_31267[(11)]);
var inst_31142__$1 = cljs.core.async.chan.call(null,(1));
var inst_31143__$1 = cljs.core.async.chan.call(null,(1));
var inst_31144__$1 = cljs.core.async.chan.call(null,(1));
var inst_31145 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31142__$1);
var inst_31146 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_31145);
var inst_31147 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31143__$1);
var inst_31148 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_31147);
var inst_31149 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31144__$1,"ERROR:");
var inst_31150 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_31149);
var state_31267__$1 = (function (){var statearr_31271 = state_31267;
(statearr_31271[(9)] = inst_31143__$1);

(statearr_31271[(12)] = inst_31146);

(statearr_31271[(10)] = inst_31144__$1);

(statearr_31271[(13)] = inst_31148);

(statearr_31271[(14)] = inst_31150);

(statearr_31271[(11)] = inst_31142__$1);

return statearr_31271;
})();
var statearr_31272_31335 = state_31267__$1;
(statearr_31272_31335[(2)] = null);

(statearr_31272_31335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (4))){
var inst_31142 = (state_31267[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31267,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31160 = cljs.core.List.EMPTY;
var inst_31161 = cljs.core._conj.call(null,inst_31160,"suc");
var state_31267__$1 = (function (){var statearr_31273 = state_31267;
(statearr_31273[(15)] = inst_31161);

return statearr_31273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31267__$1,(5),inst_31142);
} else {
if((state_val_31268 === (15))){
var inst_31203 = (state_31267[(16)]);
var inst_31224 = (state_31267[(2)]);
var state_31267__$1 = (function (){var statearr_31274 = state_31267;
(statearr_31274[(17)] = inst_31224);

return statearr_31274;
})();
var statearr_31275_31336 = state_31267__$1;
(statearr_31275_31336[(2)] = inst_31203);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (21))){
var inst_31240 = (state_31267[(8)]);
var inst_31250 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31251 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31252 = cljs.core.List.EMPTY;
var inst_31253 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31254 = cljs.core.cons.call(null,inst_31253,inst_31240);
var inst_31255 = cljs.core._conj.call(null,inst_31252,inst_31254);
var inst_31256 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31257 = cljs.core._conj.call(null,inst_31255,inst_31256);
var inst_31258 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31251,inst_31257,null];
var inst_31259 = cljs.core.PersistentHashMap.fromArrays(inst_31250,inst_31258);
var inst_31260 = cljs.test.do_report.call(null,inst_31259);
var state_31267__$1 = state_31267;
var statearr_31276_31337 = state_31267__$1;
(statearr_31276_31337[(2)] = inst_31260);

(statearr_31276_31337[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (13))){
var inst_31202 = (state_31267[(18)]);
var inst_31205 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31206 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_31207 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31202);
var inst_31208 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31206,inst_31207,null];
var inst_31209 = cljs.core.PersistentHashMap.fromArrays(inst_31205,inst_31208);
var inst_31210 = cljs.test.do_report.call(null,inst_31209);
var state_31267__$1 = state_31267;
var statearr_31277_31338 = state_31267__$1;
(statearr_31277_31338[(2)] = inst_31210);

(statearr_31277_31338[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (22))){
var inst_31241 = (state_31267[(19)]);
var inst_31262 = (state_31267[(2)]);
var state_31267__$1 = (function (){var statearr_31278 = state_31267;
(statearr_31278[(20)] = inst_31262);

return statearr_31278;
})();
var statearr_31279_31339 = state_31267__$1;
(statearr_31279_31339[(2)] = inst_31241);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (6))){
var inst_31164 = (state_31267[(7)]);
var inst_31167 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31168 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31169 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31164);
var inst_31170 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31168,inst_31169,null];
var inst_31171 = cljs.core.PersistentHashMap.fromArrays(inst_31167,inst_31170);
var inst_31172 = cljs.test.do_report.call(null,inst_31171);
var state_31267__$1 = state_31267;
var statearr_31280_31340 = state_31267__$1;
(statearr_31280_31340[(2)] = inst_31172);

(statearr_31280_31340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (17))){
var inst_31227 = (state_31267[(2)]);
var inst_31228 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31229 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31230 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31229,inst_31227,null];
var inst_31231 = cljs.core.PersistentHashMap.fromArrays(inst_31228,inst_31230);
var inst_31232 = cljs.test.do_report.call(null,inst_31231);
var state_31267__$1 = state_31267;
var statearr_31281_31341 = state_31267__$1;
(statearr_31281_31341[(2)] = inst_31232);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (3))){
var inst_31151 = (state_31267[(2)]);
var inst_31152 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31153 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31154 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31153,inst_31151,null];
var inst_31155 = cljs.core.PersistentHashMap.fromArrays(inst_31152,inst_31154);
var inst_31156 = cljs.test.do_report.call(null,inst_31155);
var state_31267__$1 = state_31267;
var statearr_31282_31342 = state_31267__$1;
(statearr_31282_31342[(2)] = inst_31156);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (12))){
var inst_31203 = (state_31267[(16)]);
var inst_31199 = (state_31267[(21)]);
var inst_31202 = (state_31267[(18)]);
var inst_31201 = (state_31267[(2)]);
var inst_31202__$1 = cljs.core._conj.call(null,inst_31199,inst_31201);
var inst_31203__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31202__$1);
var state_31267__$1 = (function (){var statearr_31283 = state_31267;
(statearr_31283[(16)] = inst_31203__$1);

(statearr_31283[(18)] = inst_31202__$1);

return statearr_31283;
})();
if(cljs.core.truth_(inst_31203__$1)){
var statearr_31284_31343 = state_31267__$1;
(statearr_31284_31343[(1)] = (13));

} else {
var statearr_31285_31344 = state_31267__$1;
(statearr_31285_31344[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (2))){
var inst_31188 = (state_31267[(2)]);
var state_31267__$1 = (function (){var statearr_31286 = state_31267;
(statearr_31286[(22)] = inst_31188);

return statearr_31286;
})();
var statearr_31287_31345 = state_31267__$1;
(statearr_31287_31345[(2)] = null);

(statearr_31287_31345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (19))){
var inst_31241 = (state_31267[(19)]);
var inst_31240 = (state_31267[(8)]);
var inst_31237 = (state_31267[(23)]);
var inst_31239 = (state_31267[(2)]);
var inst_31240__$1 = cljs.core._conj.call(null,inst_31237,inst_31239);
var inst_31241__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31240__$1);
var state_31267__$1 = (function (){var statearr_31288 = state_31267;
(statearr_31288[(19)] = inst_31241__$1);

(statearr_31288[(8)] = inst_31240__$1);

return statearr_31288;
})();
if(cljs.core.truth_(inst_31241__$1)){
var statearr_31289_31346 = state_31267__$1;
(statearr_31289_31346[(1)] = (20));

} else {
var statearr_31290_31347 = state_31267__$1;
(statearr_31290_31347[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (11))){
var inst_31143 = (state_31267[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31267,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31198 = cljs.core.List.EMPTY;
var inst_31199 = cljs.core._conj.call(null,inst_31198,false);
var state_31267__$1 = (function (){var statearr_31291 = state_31267;
(statearr_31291[(21)] = inst_31199);

return statearr_31291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31267__$1,(12),inst_31143);
} else {
if((state_val_31268 === (9))){
var inst_31226 = (state_31267[(2)]);
var state_31267__$1 = (function (){var statearr_31292 = state_31267;
(statearr_31292[(24)] = inst_31226);

return statearr_31292;
})();
var statearr_31293_31348 = state_31267__$1;
(statearr_31293_31348[(2)] = null);

(statearr_31293_31348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (5))){
var inst_31165 = (state_31267[(25)]);
var inst_31164 = (state_31267[(7)]);
var inst_31161 = (state_31267[(15)]);
var inst_31163 = (state_31267[(2)]);
var inst_31164__$1 = cljs.core._conj.call(null,inst_31161,inst_31163);
var inst_31165__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31164__$1);
var state_31267__$1 = (function (){var statearr_31294 = state_31267;
(statearr_31294[(25)] = inst_31165__$1);

(statearr_31294[(7)] = inst_31164__$1);

return statearr_31294;
})();
if(cljs.core.truth_(inst_31165__$1)){
var statearr_31295_31349 = state_31267__$1;
(statearr_31295_31349[(1)] = (6));

} else {
var statearr_31296_31350 = state_31267__$1;
(statearr_31296_31350[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (14))){
var inst_31202 = (state_31267[(18)]);
var inst_31212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31213 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_31214 = cljs.core.List.EMPTY;
var inst_31215 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31216 = cljs.core.cons.call(null,inst_31215,inst_31202);
var inst_31217 = cljs.core._conj.call(null,inst_31214,inst_31216);
var inst_31218 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31219 = cljs.core._conj.call(null,inst_31217,inst_31218);
var inst_31220 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31213,inst_31219,null];
var inst_31221 = cljs.core.PersistentHashMap.fromArrays(inst_31212,inst_31220);
var inst_31222 = cljs.test.do_report.call(null,inst_31221);
var state_31267__$1 = state_31267;
var statearr_31297_31351 = state_31267__$1;
(statearr_31297_31351[(2)] = inst_31222);

(statearr_31297_31351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (16))){
var inst_31264 = (state_31267[(2)]);
var inst_31265 = done.call(null);
var state_31267__$1 = (function (){var statearr_31298 = state_31267;
(statearr_31298[(26)] = inst_31264);

return statearr_31298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31267__$1,inst_31265);
} else {
if((state_val_31268 === (10))){
var inst_31189 = (state_31267[(2)]);
var inst_31190 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31191 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_31192 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31191,inst_31189,null];
var inst_31193 = cljs.core.PersistentHashMap.fromArrays(inst_31190,inst_31192);
var inst_31194 = cljs.test.do_report.call(null,inst_31193);
var state_31267__$1 = state_31267;
var statearr_31299_31352 = state_31267__$1;
(statearr_31299_31352[(2)] = inst_31194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (18))){
var inst_31144 = (state_31267[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31267,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31236 = cljs.core.List.EMPTY;
var inst_31237 = cljs.core._conj.call(null,inst_31236,"ERROR:");
var state_31267__$1 = (function (){var statearr_31300 = state_31267;
(statearr_31300[(23)] = inst_31237);

return statearr_31300;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31267__$1,(19),inst_31144);
} else {
if((state_val_31268 === (8))){
var inst_31165 = (state_31267[(25)]);
var inst_31186 = (state_31267[(2)]);
var state_31267__$1 = (function (){var statearr_31301 = state_31267;
(statearr_31301[(27)] = inst_31186);

return statearr_31301;
})();
var statearr_31302_31353 = state_31267__$1;
(statearr_31302_31353[(2)] = inst_31165);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_31306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31306[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_31306[(1)] = (1));

return statearr_31306;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_31267){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31307){if((e31307 instanceof Object)){
var ex__9301__auto__ = e31307;
var statearr_31308_31354 = state_31267;
(statearr_31308_31354[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31355 = state_31267;
state_31267 = G__31355;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_31267){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_31267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_31309 = f__9319__auto__.call(null);
(statearr_31309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30971","meta30971",522380103,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test30970";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test30970");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test30970 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test30970(meta30971){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970(meta30971));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test30970(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

cljs_async_patterns.core_test._GT__QMARK__one.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT__QMARK__one;},new cljs.core.Symbol("cljs-async-patterns.core-test",">?-one","cljs-async-patterns.core-test/>?-one",1504447598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">?-one",">?-one",-398293297,null),"test/cljs_async_patterns/core_test.cljs",16,1,94,94,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT__QMARK__one)?cljs_async_patterns.core_test._GT__QMARK__one.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT__QMARK__two = (function cljs_async_patterns$core_test$_GT__QMARK__two(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT__QMARK__two.cljs$lang$var);
});
cljs_async_patterns.core_test._GT__QMARK__two.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Mirror of the >2 tests.");

try{if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356 = (function (meta31357){
this.meta31357 = meta31357;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31358,meta31357__$1){
var self__ = this;
var _31358__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356(meta31357__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31358){
var self__ = this;
var _31358__$1 = this;
return self__.meta31357;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_31487){
var state_val_31488 = (state_31487[(1)]);
if((state_val_31488 === (7))){
var inst_31384 = (state_31487[(7)]);
var inst_31394 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31395 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31396 = cljs.core.List.EMPTY;
var inst_31397 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31398 = cljs.core.cons.call(null,inst_31397,inst_31384);
var inst_31399 = cljs.core._conj.call(null,inst_31396,inst_31398);
var inst_31400 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31401 = cljs.core._conj.call(null,inst_31399,inst_31400);
var inst_31402 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31395,inst_31401,null];
var inst_31403 = cljs.core.PersistentHashMap.fromArrays(inst_31394,inst_31402);
var inst_31404 = cljs.test.do_report.call(null,inst_31403);
var state_31487__$1 = state_31487;
var statearr_31489_31700 = state_31487__$1;
(statearr_31489_31700[(2)] = inst_31404);

(statearr_31489_31700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (20))){
var inst_31460 = (state_31487[(8)]);
var inst_31463 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31464 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31465 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31460);
var inst_31466 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31464,inst_31465,null];
var inst_31467 = cljs.core.PersistentHashMap.fromArrays(inst_31463,inst_31466);
var inst_31468 = cljs.test.do_report.call(null,inst_31467);
var state_31487__$1 = state_31487;
var statearr_31490_31701 = state_31487__$1;
(statearr_31490_31701[(2)] = inst_31468);

(statearr_31490_31701[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (1))){
var inst_31360 = (state_31487[(9)]);
var inst_31362 = (state_31487[(10)]);
var inst_31361 = (state_31487[(11)]);
var inst_31360__$1 = cljs.core.async.chan.call(null,(1));
var inst_31361__$1 = cljs.core.async.chan.call(null,(1));
var inst_31362__$1 = cljs.core.async.chan.call(null,(1));
var inst_31363 = cljs.core.async.chan.call(null,(1));
var inst_31364 = cljs.core.async.chan.call(null,(1));
var inst_31365 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31360__$1);
var inst_31366 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_31365);
var inst_31367 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31361__$1);
var inst_31368 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_31367);
var inst_31369 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31362__$1,"ERROR:");
var inst_31370 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_31369);
var state_31487__$1 = (function (){var statearr_31491 = state_31487;
(statearr_31491[(12)] = inst_31370);

(statearr_31491[(9)] = inst_31360__$1);

(statearr_31491[(13)] = inst_31364);

(statearr_31491[(10)] = inst_31362__$1);

(statearr_31491[(11)] = inst_31361__$1);

(statearr_31491[(14)] = inst_31366);

(statearr_31491[(15)] = inst_31368);

(statearr_31491[(16)] = inst_31363);

return statearr_31491;
})();
var statearr_31492_31702 = state_31487__$1;
(statearr_31492_31702[(2)] = null);

(statearr_31492_31702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (4))){
var inst_31360 = (state_31487[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31487,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31380 = cljs.core.List.EMPTY;
var inst_31381 = cljs.core._conj.call(null,inst_31380,"suc");
var state_31487__$1 = (function (){var statearr_31493 = state_31487;
(statearr_31493[(17)] = inst_31381);

return statearr_31493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31487__$1,(5),inst_31360);
} else {
if((state_val_31488 === (15))){
var inst_31423 = (state_31487[(18)]);
var inst_31444 = (state_31487[(2)]);
var state_31487__$1 = (function (){var statearr_31494 = state_31487;
(statearr_31494[(19)] = inst_31444);

return statearr_31494;
})();
var statearr_31495_31703 = state_31487__$1;
(statearr_31495_31703[(2)] = inst_31423);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (21))){
var inst_31460 = (state_31487[(8)]);
var inst_31470 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31471 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31472 = cljs.core.List.EMPTY;
var inst_31473 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31474 = cljs.core.cons.call(null,inst_31473,inst_31460);
var inst_31475 = cljs.core._conj.call(null,inst_31472,inst_31474);
var inst_31476 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31477 = cljs.core._conj.call(null,inst_31475,inst_31476);
var inst_31478 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31471,inst_31477,null];
var inst_31479 = cljs.core.PersistentHashMap.fromArrays(inst_31470,inst_31478);
var inst_31480 = cljs.test.do_report.call(null,inst_31479);
var state_31487__$1 = state_31487;
var statearr_31496_31704 = state_31487__$1;
(statearr_31496_31704[(2)] = inst_31480);

(statearr_31496_31704[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (13))){
var inst_31422 = (state_31487[(20)]);
var inst_31425 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31426 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_31427 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31422);
var inst_31428 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31426,inst_31427,null];
var inst_31429 = cljs.core.PersistentHashMap.fromArrays(inst_31425,inst_31428);
var inst_31430 = cljs.test.do_report.call(null,inst_31429);
var state_31487__$1 = state_31487;
var statearr_31497_31705 = state_31487__$1;
(statearr_31497_31705[(2)] = inst_31430);

(statearr_31497_31705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (22))){
var inst_31461 = (state_31487[(21)]);
var inst_31482 = (state_31487[(2)]);
var state_31487__$1 = (function (){var statearr_31498 = state_31487;
(statearr_31498[(22)] = inst_31482);

return statearr_31498;
})();
var statearr_31499_31706 = state_31487__$1;
(statearr_31499_31706[(2)] = inst_31461);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (6))){
var inst_31384 = (state_31487[(7)]);
var inst_31387 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31388 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31389 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31384);
var inst_31390 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31388,inst_31389,null];
var inst_31391 = cljs.core.PersistentHashMap.fromArrays(inst_31387,inst_31390);
var inst_31392 = cljs.test.do_report.call(null,inst_31391);
var state_31487__$1 = state_31487;
var statearr_31500_31707 = state_31487__$1;
(statearr_31500_31707[(2)] = inst_31392);

(statearr_31500_31707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (17))){
var inst_31447 = (state_31487[(2)]);
var inst_31448 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31449 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31450 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31449,inst_31447,null];
var inst_31451 = cljs.core.PersistentHashMap.fromArrays(inst_31448,inst_31450);
var inst_31452 = cljs.test.do_report.call(null,inst_31451);
var state_31487__$1 = state_31487;
var statearr_31501_31708 = state_31487__$1;
(statearr_31501_31708[(2)] = inst_31452);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (3))){
var inst_31371 = (state_31487[(2)]);
var inst_31372 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31373 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31374 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31373,inst_31371,null];
var inst_31375 = cljs.core.PersistentHashMap.fromArrays(inst_31372,inst_31374);
var inst_31376 = cljs.test.do_report.call(null,inst_31375);
var state_31487__$1 = state_31487;
var statearr_31502_31709 = state_31487__$1;
(statearr_31502_31709[(2)] = inst_31376);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (12))){
var inst_31419 = (state_31487[(23)]);
var inst_31423 = (state_31487[(18)]);
var inst_31422 = (state_31487[(20)]);
var inst_31421 = (state_31487[(2)]);
var inst_31422__$1 = cljs.core._conj.call(null,inst_31419,inst_31421);
var inst_31423__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31422__$1);
var state_31487__$1 = (function (){var statearr_31503 = state_31487;
(statearr_31503[(18)] = inst_31423__$1);

(statearr_31503[(20)] = inst_31422__$1);

return statearr_31503;
})();
if(cljs.core.truth_(inst_31423__$1)){
var statearr_31504_31710 = state_31487__$1;
(statearr_31504_31710[(1)] = (13));

} else {
var statearr_31505_31711 = state_31487__$1;
(statearr_31505_31711[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (2))){
var inst_31408 = (state_31487[(2)]);
var state_31487__$1 = (function (){var statearr_31506 = state_31487;
(statearr_31506[(24)] = inst_31408);

return statearr_31506;
})();
var statearr_31507_31712 = state_31487__$1;
(statearr_31507_31712[(2)] = null);

(statearr_31507_31712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (19))){
var inst_31461 = (state_31487[(21)]);
var inst_31457 = (state_31487[(25)]);
var inst_31460 = (state_31487[(8)]);
var inst_31459 = (state_31487[(2)]);
var inst_31460__$1 = cljs.core._conj.call(null,inst_31457,inst_31459);
var inst_31461__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31460__$1);
var state_31487__$1 = (function (){var statearr_31508 = state_31487;
(statearr_31508[(21)] = inst_31461__$1);

(statearr_31508[(8)] = inst_31460__$1);

return statearr_31508;
})();
if(cljs.core.truth_(inst_31461__$1)){
var statearr_31509_31713 = state_31487__$1;
(statearr_31509_31713[(1)] = (20));

} else {
var statearr_31510_31714 = state_31487__$1;
(statearr_31510_31714[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (11))){
var inst_31361 = (state_31487[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31487,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31418 = cljs.core.List.EMPTY;
var inst_31419 = cljs.core._conj.call(null,inst_31418,"err");
var state_31487__$1 = (function (){var statearr_31511 = state_31487;
(statearr_31511[(23)] = inst_31419);

return statearr_31511;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31487__$1,(12),inst_31361);
} else {
if((state_val_31488 === (9))){
var inst_31446 = (state_31487[(2)]);
var state_31487__$1 = (function (){var statearr_31512 = state_31487;
(statearr_31512[(26)] = inst_31446);

return statearr_31512;
})();
var statearr_31513_31715 = state_31487__$1;
(statearr_31513_31715[(2)] = null);

(statearr_31513_31715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (5))){
var inst_31381 = (state_31487[(17)]);
var inst_31384 = (state_31487[(7)]);
var inst_31385 = (state_31487[(27)]);
var inst_31383 = (state_31487[(2)]);
var inst_31384__$1 = cljs.core._conj.call(null,inst_31381,inst_31383);
var inst_31385__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31384__$1);
var state_31487__$1 = (function (){var statearr_31514 = state_31487;
(statearr_31514[(7)] = inst_31384__$1);

(statearr_31514[(27)] = inst_31385__$1);

return statearr_31514;
})();
if(cljs.core.truth_(inst_31385__$1)){
var statearr_31515_31716 = state_31487__$1;
(statearr_31515_31716[(1)] = (6));

} else {
var statearr_31516_31717 = state_31487__$1;
(statearr_31516_31717[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (14))){
var inst_31422 = (state_31487[(20)]);
var inst_31432 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31433 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_31434 = cljs.core.List.EMPTY;
var inst_31435 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31436 = cljs.core.cons.call(null,inst_31435,inst_31422);
var inst_31437 = cljs.core._conj.call(null,inst_31434,inst_31436);
var inst_31438 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31439 = cljs.core._conj.call(null,inst_31437,inst_31438);
var inst_31440 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31433,inst_31439,null];
var inst_31441 = cljs.core.PersistentHashMap.fromArrays(inst_31432,inst_31440);
var inst_31442 = cljs.test.do_report.call(null,inst_31441);
var state_31487__$1 = state_31487;
var statearr_31517_31718 = state_31487__$1;
(statearr_31517_31718[(2)] = inst_31442);

(statearr_31517_31718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (16))){
var inst_31484 = (state_31487[(2)]);
var inst_31485 = done.call(null);
var state_31487__$1 = (function (){var statearr_31518 = state_31487;
(statearr_31518[(28)] = inst_31484);

return statearr_31518;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31487__$1,inst_31485);
} else {
if((state_val_31488 === (10))){
var inst_31409 = (state_31487[(2)]);
var inst_31410 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31411 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_31412 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31411,inst_31409,null];
var inst_31413 = cljs.core.PersistentHashMap.fromArrays(inst_31410,inst_31412);
var inst_31414 = cljs.test.do_report.call(null,inst_31413);
var state_31487__$1 = state_31487;
var statearr_31519_31719 = state_31487__$1;
(statearr_31519_31719[(2)] = inst_31414);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31488 === (18))){
var inst_31362 = (state_31487[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31487,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31456 = cljs.core.List.EMPTY;
var inst_31457 = cljs.core._conj.call(null,inst_31456,"ERROR:");
var state_31487__$1 = (function (){var statearr_31520 = state_31487;
(statearr_31520[(25)] = inst_31457);

return statearr_31520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31487__$1,(19),inst_31362);
} else {
if((state_val_31488 === (8))){
var inst_31385 = (state_31487[(27)]);
var inst_31406 = (state_31487[(2)]);
var state_31487__$1 = (function (){var statearr_31521 = state_31487;
(statearr_31521[(29)] = inst_31406);

return statearr_31521;
})();
var statearr_31522_31720 = state_31487__$1;
(statearr_31522_31720[(2)] = inst_31385);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_31526 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31526[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_31526[(1)] = (1));

return statearr_31526;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_31487){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31527){if((e31527 instanceof Object)){
var ex__9301__auto__ = e31527;
var statearr_31528_31721 = state_31487;
(statearr_31528_31721[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31722 = state_31487;
state_31487 = G__31722;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_31487){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_31487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_31529 = f__9319__auto__.call(null);
(statearr_31529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.prototype.apply = (function (self__,args31359){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31359)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_31657){
var state_val_31658 = (state_31657[(1)]);
if((state_val_31658 === (7))){
var inst_31554 = (state_31657[(7)]);
var inst_31564 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31565 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31566 = cljs.core.List.EMPTY;
var inst_31567 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31568 = cljs.core.cons.call(null,inst_31567,inst_31554);
var inst_31569 = cljs.core._conj.call(null,inst_31566,inst_31568);
var inst_31570 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31571 = cljs.core._conj.call(null,inst_31569,inst_31570);
var inst_31572 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31565,inst_31571,null];
var inst_31573 = cljs.core.PersistentHashMap.fromArrays(inst_31564,inst_31572);
var inst_31574 = cljs.test.do_report.call(null,inst_31573);
var state_31657__$1 = state_31657;
var statearr_31659_31723 = state_31657__$1;
(statearr_31659_31723[(2)] = inst_31574);

(statearr_31659_31723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (20))){
var inst_31630 = (state_31657[(8)]);
var inst_31633 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31634 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31635 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31630);
var inst_31636 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31634,inst_31635,null];
var inst_31637 = cljs.core.PersistentHashMap.fromArrays(inst_31633,inst_31636);
var inst_31638 = cljs.test.do_report.call(null,inst_31637);
var state_31657__$1 = state_31657;
var statearr_31660_31724 = state_31657__$1;
(statearr_31660_31724[(2)] = inst_31638);

(statearr_31660_31724[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (1))){
var inst_31532 = (state_31657[(9)]);
var inst_31530 = (state_31657[(10)]);
var inst_31531 = (state_31657[(11)]);
var inst_31530__$1 = cljs.core.async.chan.call(null,(1));
var inst_31531__$1 = cljs.core.async.chan.call(null,(1));
var inst_31532__$1 = cljs.core.async.chan.call(null,(1));
var inst_31533 = cljs.core.async.chan.call(null,(1));
var inst_31534 = cljs.core.async.chan.call(null,(1));
var inst_31535 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31530__$1);
var inst_31536 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_31535);
var inst_31537 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31531__$1);
var inst_31538 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_31537);
var inst_31539 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31532__$1,"ERROR:");
var inst_31540 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_31539);
var state_31657__$1 = (function (){var statearr_31661 = state_31657;
(statearr_31661[(12)] = inst_31533);

(statearr_31661[(13)] = inst_31540);

(statearr_31661[(9)] = inst_31532__$1);

(statearr_31661[(10)] = inst_31530__$1);

(statearr_31661[(11)] = inst_31531__$1);

(statearr_31661[(14)] = inst_31534);

(statearr_31661[(15)] = inst_31536);

(statearr_31661[(16)] = inst_31538);

return statearr_31661;
})();
var statearr_31662_31725 = state_31657__$1;
(statearr_31662_31725[(2)] = null);

(statearr_31662_31725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (4))){
var inst_31530 = (state_31657[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31657,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31550 = cljs.core.List.EMPTY;
var inst_31551 = cljs.core._conj.call(null,inst_31550,"suc");
var state_31657__$1 = (function (){var statearr_31663 = state_31657;
(statearr_31663[(17)] = inst_31551);

return statearr_31663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31657__$1,(5),inst_31530);
} else {
if((state_val_31658 === (15))){
var inst_31593 = (state_31657[(18)]);
var inst_31614 = (state_31657[(2)]);
var state_31657__$1 = (function (){var statearr_31664 = state_31657;
(statearr_31664[(19)] = inst_31614);

return statearr_31664;
})();
var statearr_31665_31726 = state_31657__$1;
(statearr_31665_31726[(2)] = inst_31593);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (21))){
var inst_31630 = (state_31657[(8)]);
var inst_31640 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31641 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31642 = cljs.core.List.EMPTY;
var inst_31643 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31644 = cljs.core.cons.call(null,inst_31643,inst_31630);
var inst_31645 = cljs.core._conj.call(null,inst_31642,inst_31644);
var inst_31646 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31647 = cljs.core._conj.call(null,inst_31645,inst_31646);
var inst_31648 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31641,inst_31647,null];
var inst_31649 = cljs.core.PersistentHashMap.fromArrays(inst_31640,inst_31648);
var inst_31650 = cljs.test.do_report.call(null,inst_31649);
var state_31657__$1 = state_31657;
var statearr_31666_31727 = state_31657__$1;
(statearr_31666_31727[(2)] = inst_31650);

(statearr_31666_31727[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (13))){
var inst_31592 = (state_31657[(20)]);
var inst_31595 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31596 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_31597 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31592);
var inst_31598 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31596,inst_31597,null];
var inst_31599 = cljs.core.PersistentHashMap.fromArrays(inst_31595,inst_31598);
var inst_31600 = cljs.test.do_report.call(null,inst_31599);
var state_31657__$1 = state_31657;
var statearr_31667_31728 = state_31657__$1;
(statearr_31667_31728[(2)] = inst_31600);

(statearr_31667_31728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (22))){
var inst_31631 = (state_31657[(21)]);
var inst_31652 = (state_31657[(2)]);
var state_31657__$1 = (function (){var statearr_31668 = state_31657;
(statearr_31668[(22)] = inst_31652);

return statearr_31668;
})();
var statearr_31669_31729 = state_31657__$1;
(statearr_31669_31729[(2)] = inst_31631);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (6))){
var inst_31554 = (state_31657[(7)]);
var inst_31557 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31558 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31559 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31554);
var inst_31560 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31558,inst_31559,null];
var inst_31561 = cljs.core.PersistentHashMap.fromArrays(inst_31557,inst_31560);
var inst_31562 = cljs.test.do_report.call(null,inst_31561);
var state_31657__$1 = state_31657;
var statearr_31670_31730 = state_31657__$1;
(statearr_31670_31730[(2)] = inst_31562);

(statearr_31670_31730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (17))){
var inst_31617 = (state_31657[(2)]);
var inst_31618 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31619 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_31620 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31619,inst_31617,null];
var inst_31621 = cljs.core.PersistentHashMap.fromArrays(inst_31618,inst_31620);
var inst_31622 = cljs.test.do_report.call(null,inst_31621);
var state_31657__$1 = state_31657;
var statearr_31671_31731 = state_31657__$1;
(statearr_31671_31731[(2)] = inst_31622);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (3))){
var inst_31541 = (state_31657[(2)]);
var inst_31542 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31543 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31544 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31543,inst_31541,null];
var inst_31545 = cljs.core.PersistentHashMap.fromArrays(inst_31542,inst_31544);
var inst_31546 = cljs.test.do_report.call(null,inst_31545);
var state_31657__$1 = state_31657;
var statearr_31672_31732 = state_31657__$1;
(statearr_31672_31732[(2)] = inst_31546);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (12))){
var inst_31593 = (state_31657[(18)]);
var inst_31589 = (state_31657[(23)]);
var inst_31592 = (state_31657[(20)]);
var inst_31591 = (state_31657[(2)]);
var inst_31592__$1 = cljs.core._conj.call(null,inst_31589,inst_31591);
var inst_31593__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31592__$1);
var state_31657__$1 = (function (){var statearr_31673 = state_31657;
(statearr_31673[(18)] = inst_31593__$1);

(statearr_31673[(20)] = inst_31592__$1);

return statearr_31673;
})();
if(cljs.core.truth_(inst_31593__$1)){
var statearr_31674_31733 = state_31657__$1;
(statearr_31674_31733[(1)] = (13));

} else {
var statearr_31675_31734 = state_31657__$1;
(statearr_31675_31734[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (2))){
var inst_31578 = (state_31657[(2)]);
var state_31657__$1 = (function (){var statearr_31676 = state_31657;
(statearr_31676[(24)] = inst_31578);

return statearr_31676;
})();
var statearr_31677_31735 = state_31657__$1;
(statearr_31677_31735[(2)] = null);

(statearr_31677_31735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (19))){
var inst_31631 = (state_31657[(21)]);
var inst_31627 = (state_31657[(25)]);
var inst_31630 = (state_31657[(8)]);
var inst_31629 = (state_31657[(2)]);
var inst_31630__$1 = cljs.core._conj.call(null,inst_31627,inst_31629);
var inst_31631__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31630__$1);
var state_31657__$1 = (function (){var statearr_31678 = state_31657;
(statearr_31678[(21)] = inst_31631__$1);

(statearr_31678[(8)] = inst_31630__$1);

return statearr_31678;
})();
if(cljs.core.truth_(inst_31631__$1)){
var statearr_31679_31736 = state_31657__$1;
(statearr_31679_31736[(1)] = (20));

} else {
var statearr_31680_31737 = state_31657__$1;
(statearr_31680_31737[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (11))){
var inst_31531 = (state_31657[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31657,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31588 = cljs.core.List.EMPTY;
var inst_31589 = cljs.core._conj.call(null,inst_31588,"err");
var state_31657__$1 = (function (){var statearr_31681 = state_31657;
(statearr_31681[(23)] = inst_31589);

return statearr_31681;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31657__$1,(12),inst_31531);
} else {
if((state_val_31658 === (9))){
var inst_31616 = (state_31657[(2)]);
var state_31657__$1 = (function (){var statearr_31682 = state_31657;
(statearr_31682[(26)] = inst_31616);

return statearr_31682;
})();
var statearr_31683_31738 = state_31657__$1;
(statearr_31683_31738[(2)] = null);

(statearr_31683_31738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (5))){
var inst_31551 = (state_31657[(17)]);
var inst_31554 = (state_31657[(7)]);
var inst_31555 = (state_31657[(27)]);
var inst_31553 = (state_31657[(2)]);
var inst_31554__$1 = cljs.core._conj.call(null,inst_31551,inst_31553);
var inst_31555__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31554__$1);
var state_31657__$1 = (function (){var statearr_31684 = state_31657;
(statearr_31684[(7)] = inst_31554__$1);

(statearr_31684[(27)] = inst_31555__$1);

return statearr_31684;
})();
if(cljs.core.truth_(inst_31555__$1)){
var statearr_31685_31739 = state_31657__$1;
(statearr_31685_31739[(1)] = (6));

} else {
var statearr_31686_31740 = state_31657__$1;
(statearr_31686_31740[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (14))){
var inst_31592 = (state_31657[(20)]);
var inst_31602 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31603 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_31604 = cljs.core.List.EMPTY;
var inst_31605 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31606 = cljs.core.cons.call(null,inst_31605,inst_31592);
var inst_31607 = cljs.core._conj.call(null,inst_31604,inst_31606);
var inst_31608 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31609 = cljs.core._conj.call(null,inst_31607,inst_31608);
var inst_31610 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31603,inst_31609,null];
var inst_31611 = cljs.core.PersistentHashMap.fromArrays(inst_31602,inst_31610);
var inst_31612 = cljs.test.do_report.call(null,inst_31611);
var state_31657__$1 = state_31657;
var statearr_31687_31741 = state_31657__$1;
(statearr_31687_31741[(2)] = inst_31612);

(statearr_31687_31741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (16))){
var inst_31654 = (state_31657[(2)]);
var inst_31655 = done.call(null);
var state_31657__$1 = (function (){var statearr_31688 = state_31657;
(statearr_31688[(28)] = inst_31654);

return statearr_31688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31657__$1,inst_31655);
} else {
if((state_val_31658 === (10))){
var inst_31579 = (state_31657[(2)]);
var inst_31580 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31581 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_31582 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31581,inst_31579,null];
var inst_31583 = cljs.core.PersistentHashMap.fromArrays(inst_31580,inst_31582);
var inst_31584 = cljs.test.do_report.call(null,inst_31583);
var state_31657__$1 = state_31657;
var statearr_31689_31742 = state_31657__$1;
(statearr_31689_31742[(2)] = inst_31584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31658 === (18))){
var inst_31532 = (state_31657[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31657,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31626 = cljs.core.List.EMPTY;
var inst_31627 = cljs.core._conj.call(null,inst_31626,"ERROR:");
var state_31657__$1 = (function (){var statearr_31690 = state_31657;
(statearr_31690[(25)] = inst_31627);

return statearr_31690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31657__$1,(19),inst_31532);
} else {
if((state_val_31658 === (8))){
var inst_31555 = (state_31657[(27)]);
var inst_31576 = (state_31657[(2)]);
var state_31657__$1 = (function (){var statearr_31691 = state_31657;
(statearr_31691[(29)] = inst_31576);

return statearr_31691;
})();
var statearr_31692_31743 = state_31657__$1;
(statearr_31692_31743[(2)] = inst_31555);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31657__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_31696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31696[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_31696[(1)] = (1));

return statearr_31696;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_31657){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e31697){if((e31697 instanceof Object)){
var ex__9301__auto__ = e31697;
var statearr_31698_31744 = state_31657;
(statearr_31698_31744[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31745 = state_31657;
state_31657 = G__31745;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_31657){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_31657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_31699 = f__9319__auto__.call(null);
(statearr_31699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_31699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31357","meta31357",-847086578,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test31356";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test31356");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test31356 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test31356(meta31357){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356(meta31357));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31356(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

cljs_async_patterns.core_test._GT__QMARK__two.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT__QMARK__two;},new cljs.core.Symbol("cljs-async-patterns.core-test",">?-two","cljs-async-patterns.core-test/>?-two",743750973,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">?-two",">?-two",-1155451236,null),"test/cljs_async_patterns/core_test.cljs",16,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT__QMARK__two)?cljs_async_patterns.core_test._GT__QMARK__two.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT__QMARK__three = (function cljs_async_patterns$core_test$_GT__QMARK__three(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT__QMARK__three.cljs$lang$var);
});
cljs_async_patterns.core_test._GT__QMARK__three.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Mirror of the >3 tests.");

try{if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746 = (function (meta31747){
this.meta31747 = meta31747;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31748,meta31747__$1){
var self__ = this;
var _31748__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746(meta31747__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31748){
var self__ = this;
var _31748__$1 = this;
return self__.meta31747;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_31957){
var state_val_31958 = (state_31957[(1)]);
if((state_val_31958 === (7))){
var inst_31778 = (state_31957[(7)]);
var inst_31788 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31789 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31790 = cljs.core.List.EMPTY;
var inst_31791 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31792 = cljs.core.cons.call(null,inst_31791,inst_31778);
var inst_31793 = cljs.core._conj.call(null,inst_31790,inst_31792);
var inst_31794 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31795 = cljs.core._conj.call(null,inst_31793,inst_31794);
var inst_31796 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31789,inst_31795,null];
var inst_31797 = cljs.core.PersistentHashMap.fromArrays(inst_31788,inst_31796);
var inst_31798 = cljs.test.do_report.call(null,inst_31797);
var state_31957__$1 = state_31957;
var statearr_31959_32294 = state_31957__$1;
(statearr_31959_32294[(2)] = inst_31798);

(statearr_31959_32294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (20))){
var inst_31854 = (state_31957[(8)]);
var inst_31857 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31858 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_31859 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31854);
var inst_31860 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31858,inst_31859,null];
var inst_31861 = cljs.core.PersistentHashMap.fromArrays(inst_31857,inst_31860);
var inst_31862 = cljs.test.do_report.call(null,inst_31861);
var state_31957__$1 = state_31957;
var statearr_31960_32295 = state_31957__$1;
(statearr_31960_32295[(2)] = inst_31862);

(statearr_31960_32295[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (27))){
var inst_31892 = (state_31957[(9)]);
var inst_31895 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31896 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_31897 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31892);
var inst_31898 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31896,inst_31897,null];
var inst_31899 = cljs.core.PersistentHashMap.fromArrays(inst_31895,inst_31898);
var inst_31900 = cljs.test.do_report.call(null,inst_31899);
var state_31957__$1 = state_31957;
var statearr_31961_32296 = state_31957__$1;
(statearr_31961_32296[(2)] = inst_31900);

(statearr_31961_32296[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (1))){
var inst_31752 = (state_31957[(10)]);
var inst_31754 = (state_31957[(11)]);
var inst_31751 = (state_31957[(12)]);
var inst_31750 = (state_31957[(13)]);
var inst_31753 = (state_31957[(14)]);
var inst_31750__$1 = cljs.core.async.chan.call(null,(1));
var inst_31751__$1 = cljs.core.async.chan.call(null,(1));
var inst_31752__$1 = cljs.core.async.chan.call(null,(1));
var inst_31753__$1 = cljs.core.async.chan.call(null,(1));
var inst_31754__$1 = cljs.core.async.chan.call(null,(1));
var inst_31755 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31750__$1);
var inst_31756 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_31755);
var inst_31757 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31751__$1);
var inst_31758 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_31757);
var inst_31759 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31752__$1);
var inst_31760 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_31759);
var inst_31761 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31753__$1,"ERROR:");
var inst_31762 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_31761);
var inst_31763 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_31754__$1,"ERROR:");
var inst_31764 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_31763);
var state_31957__$1 = (function (){var statearr_31962 = state_31957;
(statearr_31962[(15)] = inst_31760);

(statearr_31962[(10)] = inst_31752__$1);

(statearr_31962[(16)] = inst_31758);

(statearr_31962[(17)] = inst_31764);

(statearr_31962[(18)] = inst_31756);

(statearr_31962[(11)] = inst_31754__$1);

(statearr_31962[(12)] = inst_31751__$1);

(statearr_31962[(13)] = inst_31750__$1);

(statearr_31962[(19)] = inst_31762);

(statearr_31962[(14)] = inst_31753__$1);

return statearr_31962;
})();
var statearr_31963_32297 = state_31957__$1;
(statearr_31963_32297[(2)] = null);

(statearr_31963_32297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (24))){
var inst_31879 = (state_31957[(2)]);
var inst_31880 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31881 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_31882 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31881,inst_31879,null];
var inst_31883 = cljs.core.PersistentHashMap.fromArrays(inst_31880,inst_31882);
var inst_31884 = cljs.test.do_report.call(null,inst_31883);
var state_31957__$1 = state_31957;
var statearr_31964_32298 = state_31957__$1;
(statearr_31964_32298[(2)] = inst_31884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (4))){
var inst_31750 = (state_31957[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31957,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_31774 = cljs.core.List.EMPTY;
var inst_31775 = cljs.core._conj.call(null,inst_31774,"suc");
var state_31957__$1 = (function (){var statearr_31965 = state_31957;
(statearr_31965[(20)] = inst_31775);

return statearr_31965;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31957__$1,(5),inst_31750);
} else {
if((state_val_31958 === (15))){
var inst_31817 = (state_31957[(21)]);
var inst_31838 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_31966 = state_31957;
(statearr_31966[(22)] = inst_31838);

return statearr_31966;
})();
var statearr_31967_32299 = state_31957__$1;
(statearr_31967_32299[(2)] = inst_31817);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (21))){
var inst_31854 = (state_31957[(8)]);
var inst_31864 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31865 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_31866 = cljs.core.List.EMPTY;
var inst_31867 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31868 = cljs.core.cons.call(null,inst_31867,inst_31854);
var inst_31869 = cljs.core._conj.call(null,inst_31866,inst_31868);
var inst_31870 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31871 = cljs.core._conj.call(null,inst_31869,inst_31870);
var inst_31872 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31865,inst_31871,null];
var inst_31873 = cljs.core.PersistentHashMap.fromArrays(inst_31864,inst_31872);
var inst_31874 = cljs.test.do_report.call(null,inst_31873);
var state_31957__$1 = state_31957;
var statearr_31968_32300 = state_31957__$1;
(statearr_31968_32300[(2)] = inst_31874);

(statearr_31968_32300[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (31))){
var inst_31917 = (state_31957[(2)]);
var inst_31918 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31919 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_31920 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31919,inst_31917,null];
var inst_31921 = cljs.core.PersistentHashMap.fromArrays(inst_31918,inst_31920);
var inst_31922 = cljs.test.do_report.call(null,inst_31921);
var state_31957__$1 = state_31957;
var statearr_31969_32301 = state_31957__$1;
(statearr_31969_32301[(2)] = inst_31922);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (32))){
var inst_31754 = (state_31957[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31957,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_31926 = cljs.core.List.EMPTY;
var inst_31927 = cljs.core._conj.call(null,inst_31926,"ERROR:");
var state_31957__$1 = (function (){var statearr_31970 = state_31957;
(statearr_31970[(23)] = inst_31927);

return statearr_31970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31957__$1,(33),inst_31754);
} else {
if((state_val_31958 === (33))){
var inst_31927 = (state_31957[(23)]);
var inst_31931 = (state_31957[(24)]);
var inst_31930 = (state_31957[(25)]);
var inst_31929 = (state_31957[(2)]);
var inst_31930__$1 = cljs.core._conj.call(null,inst_31927,inst_31929);
var inst_31931__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31930__$1);
var state_31957__$1 = (function (){var statearr_31971 = state_31957;
(statearr_31971[(24)] = inst_31931__$1);

(statearr_31971[(25)] = inst_31930__$1);

return statearr_31971;
})();
if(cljs.core.truth_(inst_31931__$1)){
var statearr_31972_32302 = state_31957__$1;
(statearr_31972_32302[(1)] = (34));

} else {
var statearr_31973_32303 = state_31957__$1;
(statearr_31973_32303[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (13))){
var inst_31816 = (state_31957[(26)]);
var inst_31819 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31820 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_31821 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31816);
var inst_31822 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31820,inst_31821,null];
var inst_31823 = cljs.core.PersistentHashMap.fromArrays(inst_31819,inst_31822);
var inst_31824 = cljs.test.do_report.call(null,inst_31823);
var state_31957__$1 = state_31957;
var statearr_31974_32304 = state_31957__$1;
(statearr_31974_32304[(2)] = inst_31824);

(statearr_31974_32304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (22))){
var inst_31855 = (state_31957[(27)]);
var inst_31876 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_31975 = state_31957;
(statearr_31975[(28)] = inst_31876);

return statearr_31975;
})();
var statearr_31976_32305 = state_31957__$1;
(statearr_31976_32305[(2)] = inst_31855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (36))){
var inst_31931 = (state_31957[(24)]);
var inst_31952 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_31977 = state_31957;
(statearr_31977[(29)] = inst_31952);

return statearr_31977;
})();
var statearr_31978_32306 = state_31957__$1;
(statearr_31978_32306[(2)] = inst_31931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (29))){
var inst_31893 = (state_31957[(30)]);
var inst_31914 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_31979 = state_31957;
(statearr_31979[(31)] = inst_31914);

return statearr_31979;
})();
var statearr_31980_32307 = state_31957__$1;
(statearr_31980_32307[(2)] = inst_31893);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (6))){
var inst_31778 = (state_31957[(7)]);
var inst_31781 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31782 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31783 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31778);
var inst_31784 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31782,inst_31783,null];
var inst_31785 = cljs.core.PersistentHashMap.fromArrays(inst_31781,inst_31784);
var inst_31786 = cljs.test.do_report.call(null,inst_31785);
var state_31957__$1 = state_31957;
var statearr_31981_32308 = state_31957__$1;
(statearr_31981_32308[(2)] = inst_31786);

(statearr_31981_32308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (28))){
var inst_31892 = (state_31957[(9)]);
var inst_31902 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31903 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_31904 = cljs.core.List.EMPTY;
var inst_31905 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31906 = cljs.core.cons.call(null,inst_31905,inst_31892);
var inst_31907 = cljs.core._conj.call(null,inst_31904,inst_31906);
var inst_31908 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31909 = cljs.core._conj.call(null,inst_31907,inst_31908);
var inst_31910 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31903,inst_31909,null];
var inst_31911 = cljs.core.PersistentHashMap.fromArrays(inst_31902,inst_31910);
var inst_31912 = cljs.test.do_report.call(null,inst_31911);
var state_31957__$1 = state_31957;
var statearr_31982_32309 = state_31957__$1;
(statearr_31982_32309[(2)] = inst_31912);

(statearr_31982_32309[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (25))){
var inst_31753 = (state_31957[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31957,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_31888 = cljs.core.List.EMPTY;
var inst_31889 = cljs.core._conj.call(null,inst_31888,"ERROR:");
var state_31957__$1 = (function (){var statearr_31983 = state_31957;
(statearr_31983[(32)] = inst_31889);

return statearr_31983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31957__$1,(26),inst_31753);
} else {
if((state_val_31958 === (34))){
var inst_31930 = (state_31957[(25)]);
var inst_31933 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31934 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_31935 = cljs.core.cons.call(null,cljs.core._EQ_,inst_31930);
var inst_31936 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_31934,inst_31935,null];
var inst_31937 = cljs.core.PersistentHashMap.fromArrays(inst_31933,inst_31936);
var inst_31938 = cljs.test.do_report.call(null,inst_31937);
var state_31957__$1 = state_31957;
var statearr_31984_32310 = state_31957__$1;
(statearr_31984_32310[(2)] = inst_31938);

(statearr_31984_32310[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (17))){
var inst_31841 = (state_31957[(2)]);
var inst_31842 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31843 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_31844 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31843,inst_31841,null];
var inst_31845 = cljs.core.PersistentHashMap.fromArrays(inst_31842,inst_31844);
var inst_31846 = cljs.test.do_report.call(null,inst_31845);
var state_31957__$1 = state_31957;
var statearr_31985_32311 = state_31957__$1;
(statearr_31985_32311[(2)] = inst_31846);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (3))){
var inst_31765 = (state_31957[(2)]);
var inst_31766 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31767 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_31768 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31767,inst_31765,null];
var inst_31769 = cljs.core.PersistentHashMap.fromArrays(inst_31766,inst_31768);
var inst_31770 = cljs.test.do_report.call(null,inst_31769);
var state_31957__$1 = state_31957;
var statearr_31986_32312 = state_31957__$1;
(statearr_31986_32312[(2)] = inst_31770);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (12))){
var inst_31813 = (state_31957[(33)]);
var inst_31817 = (state_31957[(21)]);
var inst_31816 = (state_31957[(26)]);
var inst_31815 = (state_31957[(2)]);
var inst_31816__$1 = cljs.core._conj.call(null,inst_31813,inst_31815);
var inst_31817__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31816__$1);
var state_31957__$1 = (function (){var statearr_31987 = state_31957;
(statearr_31987[(21)] = inst_31817__$1);

(statearr_31987[(26)] = inst_31816__$1);

return statearr_31987;
})();
if(cljs.core.truth_(inst_31817__$1)){
var statearr_31988_32313 = state_31957__$1;
(statearr_31988_32313[(1)] = (13));

} else {
var statearr_31989_32314 = state_31957__$1;
(statearr_31989_32314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (2))){
var inst_31802 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_31990 = state_31957;
(statearr_31990[(34)] = inst_31802);

return statearr_31990;
})();
var statearr_31991_32315 = state_31957__$1;
(statearr_31991_32315[(2)] = null);

(statearr_31991_32315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (23))){
var inst_31916 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_31992 = state_31957;
(statearr_31992[(35)] = inst_31916);

return statearr_31992;
})();
var statearr_31993_32316 = state_31957__$1;
(statearr_31993_32316[(2)] = null);

(statearr_31993_32316[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (35))){
var inst_31930 = (state_31957[(25)]);
var inst_31940 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31941 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_31942 = cljs.core.List.EMPTY;
var inst_31943 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31944 = cljs.core.cons.call(null,inst_31943,inst_31930);
var inst_31945 = cljs.core._conj.call(null,inst_31942,inst_31944);
var inst_31946 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31947 = cljs.core._conj.call(null,inst_31945,inst_31946);
var inst_31948 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31941,inst_31947,null];
var inst_31949 = cljs.core.PersistentHashMap.fromArrays(inst_31940,inst_31948);
var inst_31950 = cljs.test.do_report.call(null,inst_31949);
var state_31957__$1 = state_31957;
var statearr_31994_32317 = state_31957__$1;
(statearr_31994_32317[(2)] = inst_31950);

(statearr_31994_32317[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (19))){
var inst_31851 = (state_31957[(36)]);
var inst_31855 = (state_31957[(27)]);
var inst_31854 = (state_31957[(8)]);
var inst_31853 = (state_31957[(2)]);
var inst_31854__$1 = cljs.core._conj.call(null,inst_31851,inst_31853);
var inst_31855__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31854__$1);
var state_31957__$1 = (function (){var statearr_31995 = state_31957;
(statearr_31995[(27)] = inst_31855__$1);

(statearr_31995[(8)] = inst_31854__$1);

return statearr_31995;
})();
if(cljs.core.truth_(inst_31855__$1)){
var statearr_31996_32318 = state_31957__$1;
(statearr_31996_32318[(1)] = (20));

} else {
var statearr_31997_32319 = state_31957__$1;
(statearr_31997_32319[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (11))){
var inst_31751 = (state_31957[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31957,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_31812 = cljs.core.List.EMPTY;
var inst_31813 = cljs.core._conj.call(null,inst_31812,"err1");
var state_31957__$1 = (function (){var statearr_31998 = state_31957;
(statearr_31998[(33)] = inst_31813);

return statearr_31998;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31957__$1,(12),inst_31751);
} else {
if((state_val_31958 === (9))){
var inst_31840 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_31999 = state_31957;
(statearr_31999[(37)] = inst_31840);

return statearr_31999;
})();
var statearr_32000_32320 = state_31957__$1;
(statearr_32000_32320[(2)] = null);

(statearr_32000_32320[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (5))){
var inst_31779 = (state_31957[(38)]);
var inst_31778 = (state_31957[(7)]);
var inst_31775 = (state_31957[(20)]);
var inst_31777 = (state_31957[(2)]);
var inst_31778__$1 = cljs.core._conj.call(null,inst_31775,inst_31777);
var inst_31779__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31778__$1);
var state_31957__$1 = (function (){var statearr_32001 = state_31957;
(statearr_32001[(38)] = inst_31779__$1);

(statearr_32001[(7)] = inst_31778__$1);

return statearr_32001;
})();
if(cljs.core.truth_(inst_31779__$1)){
var statearr_32002_32321 = state_31957__$1;
(statearr_32002_32321[(1)] = (6));

} else {
var statearr_32003_32322 = state_31957__$1;
(statearr_32003_32322[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (14))){
var inst_31816 = (state_31957[(26)]);
var inst_31826 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31827 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_31828 = cljs.core.List.EMPTY;
var inst_31829 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_31830 = cljs.core.cons.call(null,inst_31829,inst_31816);
var inst_31831 = cljs.core._conj.call(null,inst_31828,inst_31830);
var inst_31832 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_31833 = cljs.core._conj.call(null,inst_31831,inst_31832);
var inst_31834 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_31827,inst_31833,null];
var inst_31835 = cljs.core.PersistentHashMap.fromArrays(inst_31826,inst_31834);
var inst_31836 = cljs.test.do_report.call(null,inst_31835);
var state_31957__$1 = state_31957;
var statearr_32004_32323 = state_31957__$1;
(statearr_32004_32323[(2)] = inst_31836);

(statearr_32004_32323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (26))){
var inst_31889 = (state_31957[(32)]);
var inst_31893 = (state_31957[(30)]);
var inst_31892 = (state_31957[(9)]);
var inst_31891 = (state_31957[(2)]);
var inst_31892__$1 = cljs.core._conj.call(null,inst_31889,inst_31891);
var inst_31893__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_31892__$1);
var state_31957__$1 = (function (){var statearr_32005 = state_31957;
(statearr_32005[(30)] = inst_31893__$1);

(statearr_32005[(9)] = inst_31892__$1);

return statearr_32005;
})();
if(cljs.core.truth_(inst_31893__$1)){
var statearr_32006_32324 = state_31957__$1;
(statearr_32006_32324[(1)] = (27));

} else {
var statearr_32007_32325 = state_31957__$1;
(statearr_32007_32325[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (16))){
var inst_31878 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_32008 = state_31957;
(statearr_32008[(39)] = inst_31878);

return statearr_32008;
})();
var statearr_32009_32326 = state_31957__$1;
(statearr_32009_32326[(2)] = null);

(statearr_32009_32326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (30))){
var inst_31954 = (state_31957[(2)]);
var inst_31955 = done.call(null);
var state_31957__$1 = (function (){var statearr_32010 = state_31957;
(statearr_32010[(40)] = inst_31954);

return statearr_32010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31957__$1,inst_31955);
} else {
if((state_val_31958 === (10))){
var inst_31803 = (state_31957[(2)]);
var inst_31804 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_31805 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_31806 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_31805,inst_31803,null];
var inst_31807 = cljs.core.PersistentHashMap.fromArrays(inst_31804,inst_31806);
var inst_31808 = cljs.test.do_report.call(null,inst_31807);
var state_31957__$1 = state_31957;
var statearr_32011_32327 = state_31957__$1;
(statearr_32011_32327[(2)] = inst_31808);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (18))){
var inst_31752 = (state_31957[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31957,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_31850 = cljs.core.List.EMPTY;
var inst_31851 = cljs.core._conj.call(null,inst_31850,"err2");
var state_31957__$1 = (function (){var statearr_32012 = state_31957;
(statearr_32012[(36)] = inst_31851);

return statearr_32012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31957__$1,(19),inst_31752);
} else {
if((state_val_31958 === (8))){
var inst_31779 = (state_31957[(38)]);
var inst_31800 = (state_31957[(2)]);
var state_31957__$1 = (function (){var statearr_32013 = state_31957;
(statearr_32013[(41)] = inst_31800);

return statearr_32013;
})();
var statearr_32014_32328 = state_31957__$1;
(statearr_32014_32328[(2)] = inst_31779);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_32018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32018[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_32018[(1)] = (1));

return statearr_32018;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_31957){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_31957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e32019){if((e32019 instanceof Object)){
var ex__9301__auto__ = e32019;
var statearr_32020_32329 = state_31957;
(statearr_32020_32329[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32330 = state_31957;
state_31957 = G__32330;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_31957){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_31957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_32021 = f__9319__auto__.call(null);
(statearr_32021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_32021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.prototype.apply = (function (self__,args31749){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31749)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_32229){
var state_val_32230 = (state_32229[(1)]);
if((state_val_32230 === (7))){
var inst_32050 = (state_32229[(7)]);
var inst_32060 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32061 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_32062 = cljs.core.List.EMPTY;
var inst_32063 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_32064 = cljs.core.cons.call(null,inst_32063,inst_32050);
var inst_32065 = cljs.core._conj.call(null,inst_32062,inst_32064);
var inst_32066 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_32067 = cljs.core._conj.call(null,inst_32065,inst_32066);
var inst_32068 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_32061,inst_32067,null];
var inst_32069 = cljs.core.PersistentHashMap.fromArrays(inst_32060,inst_32068);
var inst_32070 = cljs.test.do_report.call(null,inst_32069);
var state_32229__$1 = state_32229;
var statearr_32231_32331 = state_32229__$1;
(statearr_32231_32331[(2)] = inst_32070);

(statearr_32231_32331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (20))){
var inst_32126 = (state_32229[(8)]);
var inst_32129 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32130 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_32131 = cljs.core.cons.call(null,cljs.core._EQ_,inst_32126);
var inst_32132 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_32130,inst_32131,null];
var inst_32133 = cljs.core.PersistentHashMap.fromArrays(inst_32129,inst_32132);
var inst_32134 = cljs.test.do_report.call(null,inst_32133);
var state_32229__$1 = state_32229;
var statearr_32232_32332 = state_32229__$1;
(statearr_32232_32332[(2)] = inst_32134);

(statearr_32232_32332[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (27))){
var inst_32164 = (state_32229[(9)]);
var inst_32167 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32168 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_32169 = cljs.core.cons.call(null,cljs.core._EQ_,inst_32164);
var inst_32170 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_32168,inst_32169,null];
var inst_32171 = cljs.core.PersistentHashMap.fromArrays(inst_32167,inst_32170);
var inst_32172 = cljs.test.do_report.call(null,inst_32171);
var state_32229__$1 = state_32229;
var statearr_32233_32333 = state_32229__$1;
(statearr_32233_32333[(2)] = inst_32172);

(statearr_32233_32333[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (1))){
var inst_32024 = (state_32229[(10)]);
var inst_32022 = (state_32229[(11)]);
var inst_32025 = (state_32229[(12)]);
var inst_32026 = (state_32229[(13)]);
var inst_32023 = (state_32229[(14)]);
var inst_32022__$1 = cljs.core.async.chan.call(null,(1));
var inst_32023__$1 = cljs.core.async.chan.call(null,(1));
var inst_32024__$1 = cljs.core.async.chan.call(null,(1));
var inst_32025__$1 = cljs.core.async.chan.call(null,(1));
var inst_32026__$1 = cljs.core.async.chan.call(null,(1));
var inst_32027 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_32022__$1);
var inst_32028 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_32027);
var inst_32029 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_32023__$1);
var inst_32030 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_32029);
var inst_32031 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_32024__$1);
var inst_32032 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_32031);
var inst_32033 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_32025__$1,"ERROR:");
var inst_32034 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_32033);
var inst_32035 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_32026__$1,"ERROR:");
var inst_32036 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_32035);
var state_32229__$1 = (function (){var statearr_32234 = state_32229;
(statearr_32234[(15)] = inst_32036);

(statearr_32234[(10)] = inst_32024__$1);

(statearr_32234[(16)] = inst_32032);

(statearr_32234[(17)] = inst_32034);

(statearr_32234[(18)] = inst_32030);

(statearr_32234[(11)] = inst_32022__$1);

(statearr_32234[(12)] = inst_32025__$1);

(statearr_32234[(19)] = inst_32028);

(statearr_32234[(13)] = inst_32026__$1);

(statearr_32234[(14)] = inst_32023__$1);

return statearr_32234;
})();
var statearr_32235_32334 = state_32229__$1;
(statearr_32235_32334[(2)] = null);

(statearr_32235_32334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (24))){
var inst_32151 = (state_32229[(2)]);
var inst_32152 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32153 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_32154 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32153,inst_32151,null];
var inst_32155 = cljs.core.PersistentHashMap.fromArrays(inst_32152,inst_32154);
var inst_32156 = cljs.test.do_report.call(null,inst_32155);
var state_32229__$1 = state_32229;
var statearr_32236_32335 = state_32229__$1;
(statearr_32236_32335[(2)] = inst_32156);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (4))){
var inst_32022 = (state_32229[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32229,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_32046 = cljs.core.List.EMPTY;
var inst_32047 = cljs.core._conj.call(null,inst_32046,"suc");
var state_32229__$1 = (function (){var statearr_32237 = state_32229;
(statearr_32237[(20)] = inst_32047);

return statearr_32237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32229__$1,(5),inst_32022);
} else {
if((state_val_32230 === (15))){
var inst_32089 = (state_32229[(21)]);
var inst_32110 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32238 = state_32229;
(statearr_32238[(22)] = inst_32110);

return statearr_32238;
})();
var statearr_32239_32336 = state_32229__$1;
(statearr_32239_32336[(2)] = inst_32089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (21))){
var inst_32126 = (state_32229[(8)]);
var inst_32136 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32137 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_32138 = cljs.core.List.EMPTY;
var inst_32139 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_32140 = cljs.core.cons.call(null,inst_32139,inst_32126);
var inst_32141 = cljs.core._conj.call(null,inst_32138,inst_32140);
var inst_32142 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_32143 = cljs.core._conj.call(null,inst_32141,inst_32142);
var inst_32144 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_32137,inst_32143,null];
var inst_32145 = cljs.core.PersistentHashMap.fromArrays(inst_32136,inst_32144);
var inst_32146 = cljs.test.do_report.call(null,inst_32145);
var state_32229__$1 = state_32229;
var statearr_32240_32337 = state_32229__$1;
(statearr_32240_32337[(2)] = inst_32146);

(statearr_32240_32337[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (31))){
var inst_32189 = (state_32229[(2)]);
var inst_32190 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32191 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_32192 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32191,inst_32189,null];
var inst_32193 = cljs.core.PersistentHashMap.fromArrays(inst_32190,inst_32192);
var inst_32194 = cljs.test.do_report.call(null,inst_32193);
var state_32229__$1 = state_32229;
var statearr_32241_32338 = state_32229__$1;
(statearr_32241_32338[(2)] = inst_32194);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (32))){
var inst_32026 = (state_32229[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32229,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_32198 = cljs.core.List.EMPTY;
var inst_32199 = cljs.core._conj.call(null,inst_32198,"ERROR:");
var state_32229__$1 = (function (){var statearr_32242 = state_32229;
(statearr_32242[(23)] = inst_32199);

return statearr_32242;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32229__$1,(33),inst_32026);
} else {
if((state_val_32230 === (33))){
var inst_32199 = (state_32229[(23)]);
var inst_32202 = (state_32229[(24)]);
var inst_32203 = (state_32229[(25)]);
var inst_32201 = (state_32229[(2)]);
var inst_32202__$1 = cljs.core._conj.call(null,inst_32199,inst_32201);
var inst_32203__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_32202__$1);
var state_32229__$1 = (function (){var statearr_32243 = state_32229;
(statearr_32243[(24)] = inst_32202__$1);

(statearr_32243[(25)] = inst_32203__$1);

return statearr_32243;
})();
if(cljs.core.truth_(inst_32203__$1)){
var statearr_32244_32339 = state_32229__$1;
(statearr_32244_32339[(1)] = (34));

} else {
var statearr_32245_32340 = state_32229__$1;
(statearr_32245_32340[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (13))){
var inst_32088 = (state_32229[(26)]);
var inst_32091 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32092 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_32093 = cljs.core.cons.call(null,cljs.core._EQ_,inst_32088);
var inst_32094 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_32092,inst_32093,null];
var inst_32095 = cljs.core.PersistentHashMap.fromArrays(inst_32091,inst_32094);
var inst_32096 = cljs.test.do_report.call(null,inst_32095);
var state_32229__$1 = state_32229;
var statearr_32246_32341 = state_32229__$1;
(statearr_32246_32341[(2)] = inst_32096);

(statearr_32246_32341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (22))){
var inst_32127 = (state_32229[(27)]);
var inst_32148 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32247 = state_32229;
(statearr_32247[(28)] = inst_32148);

return statearr_32247;
})();
var statearr_32248_32342 = state_32229__$1;
(statearr_32248_32342[(2)] = inst_32127);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (36))){
var inst_32203 = (state_32229[(25)]);
var inst_32224 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32249 = state_32229;
(statearr_32249[(29)] = inst_32224);

return statearr_32249;
})();
var statearr_32250_32343 = state_32229__$1;
(statearr_32250_32343[(2)] = inst_32203);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (29))){
var inst_32165 = (state_32229[(30)]);
var inst_32186 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32251 = state_32229;
(statearr_32251[(31)] = inst_32186);

return statearr_32251;
})();
var statearr_32252_32344 = state_32229__$1;
(statearr_32252_32344[(2)] = inst_32165);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (6))){
var inst_32050 = (state_32229[(7)]);
var inst_32053 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32054 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_32055 = cljs.core.cons.call(null,cljs.core._EQ_,inst_32050);
var inst_32056 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_32054,inst_32055,null];
var inst_32057 = cljs.core.PersistentHashMap.fromArrays(inst_32053,inst_32056);
var inst_32058 = cljs.test.do_report.call(null,inst_32057);
var state_32229__$1 = state_32229;
var statearr_32253_32345 = state_32229__$1;
(statearr_32253_32345[(2)] = inst_32058);

(statearr_32253_32345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (28))){
var inst_32164 = (state_32229[(9)]);
var inst_32174 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32175 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_32176 = cljs.core.List.EMPTY;
var inst_32177 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_32178 = cljs.core.cons.call(null,inst_32177,inst_32164);
var inst_32179 = cljs.core._conj.call(null,inst_32176,inst_32178);
var inst_32180 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_32181 = cljs.core._conj.call(null,inst_32179,inst_32180);
var inst_32182 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_32175,inst_32181,null];
var inst_32183 = cljs.core.PersistentHashMap.fromArrays(inst_32174,inst_32182);
var inst_32184 = cljs.test.do_report.call(null,inst_32183);
var state_32229__$1 = state_32229;
var statearr_32254_32346 = state_32229__$1;
(statearr_32254_32346[(2)] = inst_32184);

(statearr_32254_32346[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (25))){
var inst_32025 = (state_32229[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32229,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_32160 = cljs.core.List.EMPTY;
var inst_32161 = cljs.core._conj.call(null,inst_32160,"ERROR:");
var state_32229__$1 = (function (){var statearr_32255 = state_32229;
(statearr_32255[(32)] = inst_32161);

return statearr_32255;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32229__$1,(26),inst_32025);
} else {
if((state_val_32230 === (34))){
var inst_32202 = (state_32229[(24)]);
var inst_32205 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32206 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_32207 = cljs.core.cons.call(null,cljs.core._EQ_,inst_32202);
var inst_32208 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_32206,inst_32207,null];
var inst_32209 = cljs.core.PersistentHashMap.fromArrays(inst_32205,inst_32208);
var inst_32210 = cljs.test.do_report.call(null,inst_32209);
var state_32229__$1 = state_32229;
var statearr_32256_32347 = state_32229__$1;
(statearr_32256_32347[(2)] = inst_32210);

(statearr_32256_32347[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (17))){
var inst_32113 = (state_32229[(2)]);
var inst_32114 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32115 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_32116 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32115,inst_32113,null];
var inst_32117 = cljs.core.PersistentHashMap.fromArrays(inst_32114,inst_32116);
var inst_32118 = cljs.test.do_report.call(null,inst_32117);
var state_32229__$1 = state_32229;
var statearr_32257_32348 = state_32229__$1;
(statearr_32257_32348[(2)] = inst_32118);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (3))){
var inst_32037 = (state_32229[(2)]);
var inst_32038 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32039 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_32040 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32039,inst_32037,null];
var inst_32041 = cljs.core.PersistentHashMap.fromArrays(inst_32038,inst_32040);
var inst_32042 = cljs.test.do_report.call(null,inst_32041);
var state_32229__$1 = state_32229;
var statearr_32258_32349 = state_32229__$1;
(statearr_32258_32349[(2)] = inst_32042);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (12))){
var inst_32089 = (state_32229[(21)]);
var inst_32088 = (state_32229[(26)]);
var inst_32085 = (state_32229[(33)]);
var inst_32087 = (state_32229[(2)]);
var inst_32088__$1 = cljs.core._conj.call(null,inst_32085,inst_32087);
var inst_32089__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_32088__$1);
var state_32229__$1 = (function (){var statearr_32259 = state_32229;
(statearr_32259[(21)] = inst_32089__$1);

(statearr_32259[(26)] = inst_32088__$1);

return statearr_32259;
})();
if(cljs.core.truth_(inst_32089__$1)){
var statearr_32260_32350 = state_32229__$1;
(statearr_32260_32350[(1)] = (13));

} else {
var statearr_32261_32351 = state_32229__$1;
(statearr_32261_32351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (2))){
var inst_32074 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32262 = state_32229;
(statearr_32262[(34)] = inst_32074);

return statearr_32262;
})();
var statearr_32263_32352 = state_32229__$1;
(statearr_32263_32352[(2)] = null);

(statearr_32263_32352[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (23))){
var inst_32188 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32264 = state_32229;
(statearr_32264[(35)] = inst_32188);

return statearr_32264;
})();
var statearr_32265_32353 = state_32229__$1;
(statearr_32265_32353[(2)] = null);

(statearr_32265_32353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (35))){
var inst_32202 = (state_32229[(24)]);
var inst_32212 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32213 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_32214 = cljs.core.List.EMPTY;
var inst_32215 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_32216 = cljs.core.cons.call(null,inst_32215,inst_32202);
var inst_32217 = cljs.core._conj.call(null,inst_32214,inst_32216);
var inst_32218 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_32219 = cljs.core._conj.call(null,inst_32217,inst_32218);
var inst_32220 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_32213,inst_32219,null];
var inst_32221 = cljs.core.PersistentHashMap.fromArrays(inst_32212,inst_32220);
var inst_32222 = cljs.test.do_report.call(null,inst_32221);
var state_32229__$1 = state_32229;
var statearr_32266_32354 = state_32229__$1;
(statearr_32266_32354[(2)] = inst_32222);

(statearr_32266_32354[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (19))){
var inst_32127 = (state_32229[(27)]);
var inst_32126 = (state_32229[(8)]);
var inst_32123 = (state_32229[(36)]);
var inst_32125 = (state_32229[(2)]);
var inst_32126__$1 = cljs.core._conj.call(null,inst_32123,inst_32125);
var inst_32127__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_32126__$1);
var state_32229__$1 = (function (){var statearr_32267 = state_32229;
(statearr_32267[(27)] = inst_32127__$1);

(statearr_32267[(8)] = inst_32126__$1);

return statearr_32267;
})();
if(cljs.core.truth_(inst_32127__$1)){
var statearr_32268_32355 = state_32229__$1;
(statearr_32268_32355[(1)] = (20));

} else {
var statearr_32269_32356 = state_32229__$1;
(statearr_32269_32356[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (11))){
var inst_32023 = (state_32229[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32229,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_32084 = cljs.core.List.EMPTY;
var inst_32085 = cljs.core._conj.call(null,inst_32084,"err1");
var state_32229__$1 = (function (){var statearr_32270 = state_32229;
(statearr_32270[(33)] = inst_32085);

return statearr_32270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32229__$1,(12),inst_32023);
} else {
if((state_val_32230 === (9))){
var inst_32112 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32271 = state_32229;
(statearr_32271[(37)] = inst_32112);

return statearr_32271;
})();
var statearr_32272_32357 = state_32229__$1;
(statearr_32272_32357[(2)] = null);

(statearr_32272_32357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (5))){
var inst_32050 = (state_32229[(7)]);
var inst_32051 = (state_32229[(38)]);
var inst_32047 = (state_32229[(20)]);
var inst_32049 = (state_32229[(2)]);
var inst_32050__$1 = cljs.core._conj.call(null,inst_32047,inst_32049);
var inst_32051__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_32050__$1);
var state_32229__$1 = (function (){var statearr_32273 = state_32229;
(statearr_32273[(7)] = inst_32050__$1);

(statearr_32273[(38)] = inst_32051__$1);

return statearr_32273;
})();
if(cljs.core.truth_(inst_32051__$1)){
var statearr_32274_32358 = state_32229__$1;
(statearr_32274_32358[(1)] = (6));

} else {
var statearr_32275_32359 = state_32229__$1;
(statearr_32275_32359[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (14))){
var inst_32088 = (state_32229[(26)]);
var inst_32098 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32099 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_32100 = cljs.core.List.EMPTY;
var inst_32101 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_32102 = cljs.core.cons.call(null,inst_32101,inst_32088);
var inst_32103 = cljs.core._conj.call(null,inst_32100,inst_32102);
var inst_32104 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_32105 = cljs.core._conj.call(null,inst_32103,inst_32104);
var inst_32106 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_32099,inst_32105,null];
var inst_32107 = cljs.core.PersistentHashMap.fromArrays(inst_32098,inst_32106);
var inst_32108 = cljs.test.do_report.call(null,inst_32107);
var state_32229__$1 = state_32229;
var statearr_32276_32360 = state_32229__$1;
(statearr_32276_32360[(2)] = inst_32108);

(statearr_32276_32360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (26))){
var inst_32164 = (state_32229[(9)]);
var inst_32161 = (state_32229[(32)]);
var inst_32165 = (state_32229[(30)]);
var inst_32163 = (state_32229[(2)]);
var inst_32164__$1 = cljs.core._conj.call(null,inst_32161,inst_32163);
var inst_32165__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_32164__$1);
var state_32229__$1 = (function (){var statearr_32277 = state_32229;
(statearr_32277[(9)] = inst_32164__$1);

(statearr_32277[(30)] = inst_32165__$1);

return statearr_32277;
})();
if(cljs.core.truth_(inst_32165__$1)){
var statearr_32278_32361 = state_32229__$1;
(statearr_32278_32361[(1)] = (27));

} else {
var statearr_32279_32362 = state_32229__$1;
(statearr_32279_32362[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (16))){
var inst_32150 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32280 = state_32229;
(statearr_32280[(39)] = inst_32150);

return statearr_32280;
})();
var statearr_32281_32363 = state_32229__$1;
(statearr_32281_32363[(2)] = null);

(statearr_32281_32363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (30))){
var inst_32226 = (state_32229[(2)]);
var inst_32227 = done.call(null);
var state_32229__$1 = (function (){var statearr_32282 = state_32229;
(statearr_32282[(40)] = inst_32226);

return statearr_32282;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32229__$1,inst_32227);
} else {
if((state_val_32230 === (10))){
var inst_32075 = (state_32229[(2)]);
var inst_32076 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32077 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_32078 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_32077,inst_32075,null];
var inst_32079 = cljs.core.PersistentHashMap.fromArrays(inst_32076,inst_32078);
var inst_32080 = cljs.test.do_report.call(null,inst_32079);
var state_32229__$1 = state_32229;
var statearr_32283_32364 = state_32229__$1;
(statearr_32283_32364[(2)] = inst_32080);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (18))){
var inst_32024 = (state_32229[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32229,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_32122 = cljs.core.List.EMPTY;
var inst_32123 = cljs.core._conj.call(null,inst_32122,"err2");
var state_32229__$1 = (function (){var statearr_32284 = state_32229;
(statearr_32284[(36)] = inst_32123);

return statearr_32284;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32229__$1,(19),inst_32024);
} else {
if((state_val_32230 === (8))){
var inst_32051 = (state_32229[(38)]);
var inst_32072 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32285 = state_32229;
(statearr_32285[(41)] = inst_32072);

return statearr_32285;
})();
var statearr_32286_32365 = state_32229__$1;
(statearr_32286_32365[(2)] = inst_32051);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__9318__auto__,___10117__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10117__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_32290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32290[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_32290[(1)] = (1));

return statearr_32290;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_32229){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_32229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e32291){if((e32291 instanceof Object)){
var ex__9301__auto__ = e32291;
var statearr_32292_32366 = state_32229;
(statearr_32292_32366[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32367 = state_32229;
state_32229 = G__32367;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_32229){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_32229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_32293 = f__9319__auto__.call(null);
(statearr_32293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_32293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31747","meta31747",1161265653,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test31746";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test31746");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test31746 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test31746(meta31747){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746(meta31747));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test31746(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

cljs_async_patterns.core_test._GT__QMARK__three.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT__QMARK__three;},new cljs.core.Symbol("cljs-async-patterns.core-test",">?-three","cljs-async-patterns.core-test/>?-three",-1631860590,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">?-three",">?-three",1867805489,null),"test/cljs_async_patterns/core_test.cljs",18,1,120,120,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT__QMARK__three)?cljs_async_patterns.core_test._GT__QMARK__three.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map