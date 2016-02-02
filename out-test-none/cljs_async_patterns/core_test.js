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
cljs_async_patterns.core_test.prnt_cb_1 = (function cljs_async_patterns$core_test$prnt_cb_1(res){
return cljs.core.println.call(null,"res: ",res);
});
cljs_async_patterns.core_test.prnt_cb_2 = (function cljs_async_patterns$core_test$prnt_cb_2(err,res){
cljs.core.println.call(null,"err: ",err);

return cljs.core.println.call(null,"res: ",res);
});
cljs_async_patterns.core_test.prnt_cb_3 = (function cljs_async_patterns$core_test$prnt_cb_3(arg1,arg2,arg3){
cljs.core.println.call(null,"arg1: ",arg1);

cljs.core.println.call(null,"arg2: ",arg2);

return cljs.core.println.call(null,"arg3: ",arg3);
});
cljs_async_patterns.core_test._GT_1_test = (function cljs_async_patterns$core_test$_GT_1_test(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT_1_test.cljs$lang$var);
});
cljs_async_patterns.core_test._GT_1_test.cljs$lang$test = (function (){
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184 = (function (meta10185){
this.meta10185 = meta10185;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10186,meta10185__$1){
var self__ = this;
var _10186__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184(meta10185__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10186){
var self__ = this;
var _10186__$1 = this;
return self__.meta10185;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___8305__auto__ = self____$1;
var c__9631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9631__auto__,___8305__auto__,self____$1){
return (function (){
var f__9632__auto__ = (function (){var switch__9610__auto__ = ((function (c__9631__auto__,___8305__auto__,self____$1){
return (function (state_10313){
var state_val_10314 = (state_10313[(1)]);
if((state_val_10314 === (7))){
var inst_10210 = (state_10313[(7)]);
var inst_10220 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10221 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10222 = cljs.core.List.EMPTY;
var inst_10223 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10224 = cljs.core.cons.call(null,inst_10223,inst_10210);
var inst_10225 = cljs.core._conj.call(null,inst_10222,inst_10224);
var inst_10226 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10227 = cljs.core._conj.call(null,inst_10225,inst_10226);
var inst_10228 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10221,inst_10227,null];
var inst_10229 = cljs.core.PersistentHashMap.fromArrays(inst_10220,inst_10228);
var inst_10230 = cljs.test.do_report.call(null,inst_10229);
var state_10313__$1 = state_10313;
var statearr_10315_10524 = state_10313__$1;
(statearr_10315_10524[(2)] = inst_10230);

(statearr_10315_10524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (20))){
var inst_10286 = (state_10313[(8)]);
var inst_10289 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10290 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10291 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10286);
var inst_10292 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10290,inst_10291,null];
var inst_10293 = cljs.core.PersistentHashMap.fromArrays(inst_10289,inst_10292);
var inst_10294 = cljs.test.do_report.call(null,inst_10293);
var state_10313__$1 = state_10313;
var statearr_10316_10525 = state_10313__$1;
(statearr_10316_10525[(2)] = inst_10294);

(statearr_10316_10525[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (1))){
var inst_10189 = (state_10313[(9)]);
var inst_10190 = (state_10313[(10)]);
var inst_10188 = (state_10313[(11)]);
var inst_10188__$1 = cljs.core.async.chan.call(null,(1));
var inst_10189__$1 = cljs.core.async.chan.call(null,(1));
var inst_10190__$1 = cljs.core.async.chan.call(null,(1));
var inst_10191 = cljs_async_patterns.core._GT_1.call(null,inst_10188__$1);
var inst_10192 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_10191);
var inst_10193 = cljs_async_patterns.core._GT_1.call(null,inst_10189__$1);
var inst_10194 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10193);
var inst_10195 = cljs_async_patterns.core._GT_1.call(null,inst_10190__$1,"ERROR:");
var inst_10196 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10195);
var state_10313__$1 = (function (){var statearr_10317 = state_10313;
(statearr_10317[(12)] = inst_10194);

(statearr_10317[(13)] = inst_10192);

(statearr_10317[(9)] = inst_10189__$1);

(statearr_10317[(10)] = inst_10190__$1);

(statearr_10317[(14)] = inst_10196);

(statearr_10317[(11)] = inst_10188__$1);

return statearr_10317;
})();
var statearr_10318_10526 = state_10313__$1;
(statearr_10318_10526[(2)] = null);

(statearr_10318_10526[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (4))){
var inst_10188 = (state_10313[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10313,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_10206 = cljs.core.List.EMPTY;
var inst_10207 = cljs.core._conj.call(null,inst_10206,"suc");
var state_10313__$1 = (function (){var statearr_10319 = state_10313;
(statearr_10319[(15)] = inst_10207);

return statearr_10319;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10313__$1,(5),inst_10188);
} else {
if((state_val_10314 === (15))){
var inst_10249 = (state_10313[(16)]);
var inst_10270 = (state_10313[(2)]);
var state_10313__$1 = (function (){var statearr_10320 = state_10313;
(statearr_10320[(17)] = inst_10270);

return statearr_10320;
})();
var statearr_10321_10527 = state_10313__$1;
(statearr_10321_10527[(2)] = inst_10249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10313__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (21))){
var inst_10286 = (state_10313[(8)]);
var inst_10296 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10297 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10298 = cljs.core.List.EMPTY;
var inst_10299 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10300 = cljs.core.cons.call(null,inst_10299,inst_10286);
var inst_10301 = cljs.core._conj.call(null,inst_10298,inst_10300);
var inst_10302 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10303 = cljs.core._conj.call(null,inst_10301,inst_10302);
var inst_10304 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10297,inst_10303,null];
var inst_10305 = cljs.core.PersistentHashMap.fromArrays(inst_10296,inst_10304);
var inst_10306 = cljs.test.do_report.call(null,inst_10305);
var state_10313__$1 = state_10313;
var statearr_10322_10528 = state_10313__$1;
(statearr_10322_10528[(2)] = inst_10306);

(statearr_10322_10528[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (13))){
var inst_10248 = (state_10313[(18)]);
var inst_10251 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10252 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10253 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10248);
var inst_10254 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10252,inst_10253,null];
var inst_10255 = cljs.core.PersistentHashMap.fromArrays(inst_10251,inst_10254);
var inst_10256 = cljs.test.do_report.call(null,inst_10255);
var state_10313__$1 = state_10313;
var statearr_10323_10529 = state_10313__$1;
(statearr_10323_10529[(2)] = inst_10256);

(statearr_10323_10529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (22))){
var inst_10287 = (state_10313[(19)]);
var inst_10308 = (state_10313[(2)]);
var state_10313__$1 = (function (){var statearr_10324 = state_10313;
(statearr_10324[(20)] = inst_10308);

return statearr_10324;
})();
var statearr_10325_10530 = state_10313__$1;
(statearr_10325_10530[(2)] = inst_10287);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10313__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (6))){
var inst_10210 = (state_10313[(7)]);
var inst_10213 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10214 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10215 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10210);
var inst_10216 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10214,inst_10215,null];
var inst_10217 = cljs.core.PersistentHashMap.fromArrays(inst_10213,inst_10216);
var inst_10218 = cljs.test.do_report.call(null,inst_10217);
var state_10313__$1 = state_10313;
var statearr_10326_10531 = state_10313__$1;
(statearr_10326_10531[(2)] = inst_10218);

(statearr_10326_10531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (17))){
var inst_10273 = (state_10313[(2)]);
var inst_10274 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10275 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10276 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10275,inst_10273,null];
var inst_10277 = cljs.core.PersistentHashMap.fromArrays(inst_10274,inst_10276);
var inst_10278 = cljs.test.do_report.call(null,inst_10277);
var state_10313__$1 = state_10313;
var statearr_10327_10532 = state_10313__$1;
(statearr_10327_10532[(2)] = inst_10278);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10313__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (3))){
var inst_10197 = (state_10313[(2)]);
var inst_10198 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10199 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10200 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10199,inst_10197,null];
var inst_10201 = cljs.core.PersistentHashMap.fromArrays(inst_10198,inst_10200);
var inst_10202 = cljs.test.do_report.call(null,inst_10201);
var state_10313__$1 = state_10313;
var statearr_10328_10533 = state_10313__$1;
(statearr_10328_10533[(2)] = inst_10202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10313__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (12))){
var inst_10245 = (state_10313[(21)]);
var inst_10249 = (state_10313[(16)]);
var inst_10248 = (state_10313[(18)]);
var inst_10247 = (state_10313[(2)]);
var inst_10248__$1 = cljs.core._conj.call(null,inst_10245,inst_10247);
var inst_10249__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10248__$1);
var state_10313__$1 = (function (){var statearr_10329 = state_10313;
(statearr_10329[(16)] = inst_10249__$1);

(statearr_10329[(18)] = inst_10248__$1);

return statearr_10329;
})();
if(cljs.core.truth_(inst_10249__$1)){
var statearr_10330_10534 = state_10313__$1;
(statearr_10330_10534[(1)] = (13));

} else {
var statearr_10331_10535 = state_10313__$1;
(statearr_10331_10535[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (2))){
var inst_10234 = (state_10313[(2)]);
var state_10313__$1 = (function (){var statearr_10332 = state_10313;
(statearr_10332[(22)] = inst_10234);

return statearr_10332;
})();
var statearr_10333_10536 = state_10313__$1;
(statearr_10333_10536[(2)] = null);

(statearr_10333_10536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (19))){
var inst_10287 = (state_10313[(19)]);
var inst_10283 = (state_10313[(23)]);
var inst_10286 = (state_10313[(8)]);
var inst_10285 = (state_10313[(2)]);
var inst_10286__$1 = cljs.core._conj.call(null,inst_10283,inst_10285);
var inst_10287__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10286__$1);
var state_10313__$1 = (function (){var statearr_10334 = state_10313;
(statearr_10334[(19)] = inst_10287__$1);

(statearr_10334[(8)] = inst_10286__$1);

return statearr_10334;
})();
if(cljs.core.truth_(inst_10287__$1)){
var statearr_10335_10537 = state_10313__$1;
(statearr_10335_10537[(1)] = (20));

} else {
var statearr_10336_10538 = state_10313__$1;
(statearr_10336_10538[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (11))){
var inst_10189 = (state_10313[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10313,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_10244 = cljs.core.List.EMPTY;
var inst_10245 = cljs.core._conj.call(null,inst_10244,false);
var state_10313__$1 = (function (){var statearr_10337 = state_10313;
(statearr_10337[(21)] = inst_10245);

return statearr_10337;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10313__$1,(12),inst_10189);
} else {
if((state_val_10314 === (9))){
var inst_10272 = (state_10313[(2)]);
var state_10313__$1 = (function (){var statearr_10338 = state_10313;
(statearr_10338[(24)] = inst_10272);

return statearr_10338;
})();
var statearr_10339_10539 = state_10313__$1;
(statearr_10339_10539[(2)] = null);

(statearr_10339_10539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (5))){
var inst_10207 = (state_10313[(15)]);
var inst_10210 = (state_10313[(7)]);
var inst_10211 = (state_10313[(25)]);
var inst_10209 = (state_10313[(2)]);
var inst_10210__$1 = cljs.core._conj.call(null,inst_10207,inst_10209);
var inst_10211__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10210__$1);
var state_10313__$1 = (function (){var statearr_10340 = state_10313;
(statearr_10340[(7)] = inst_10210__$1);

(statearr_10340[(25)] = inst_10211__$1);

return statearr_10340;
})();
if(cljs.core.truth_(inst_10211__$1)){
var statearr_10341_10540 = state_10313__$1;
(statearr_10341_10540[(1)] = (6));

} else {
var statearr_10342_10541 = state_10313__$1;
(statearr_10342_10541[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (14))){
var inst_10248 = (state_10313[(18)]);
var inst_10258 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10259 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10260 = cljs.core.List.EMPTY;
var inst_10261 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10262 = cljs.core.cons.call(null,inst_10261,inst_10248);
var inst_10263 = cljs.core._conj.call(null,inst_10260,inst_10262);
var inst_10264 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10265 = cljs.core._conj.call(null,inst_10263,inst_10264);
var inst_10266 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10259,inst_10265,null];
var inst_10267 = cljs.core.PersistentHashMap.fromArrays(inst_10258,inst_10266);
var inst_10268 = cljs.test.do_report.call(null,inst_10267);
var state_10313__$1 = state_10313;
var statearr_10343_10542 = state_10313__$1;
(statearr_10343_10542[(2)] = inst_10268);

(statearr_10343_10542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (16))){
var inst_10310 = (state_10313[(2)]);
var inst_10311 = done.call(null);
var state_10313__$1 = (function (){var statearr_10344 = state_10313;
(statearr_10344[(26)] = inst_10310);

return statearr_10344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10313__$1,inst_10311);
} else {
if((state_val_10314 === (10))){
var inst_10235 = (state_10313[(2)]);
var inst_10236 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10237 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10238 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10237,inst_10235,null];
var inst_10239 = cljs.core.PersistentHashMap.fromArrays(inst_10236,inst_10238);
var inst_10240 = cljs.test.do_report.call(null,inst_10239);
var state_10313__$1 = state_10313;
var statearr_10345_10543 = state_10313__$1;
(statearr_10345_10543[(2)] = inst_10240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10313__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10314 === (18))){
var inst_10190 = (state_10313[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10313,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_10282 = cljs.core.List.EMPTY;
var inst_10283 = cljs.core._conj.call(null,inst_10282,"ERROR:");
var state_10313__$1 = (function (){var statearr_10346 = state_10313;
(statearr_10346[(23)] = inst_10283);

return statearr_10346;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10313__$1,(19),inst_10190);
} else {
if((state_val_10314 === (8))){
var inst_10211 = (state_10313[(25)]);
var inst_10232 = (state_10313[(2)]);
var state_10313__$1 = (function (){var statearr_10347 = state_10313;
(statearr_10347[(27)] = inst_10232);

return statearr_10347;
})();
var statearr_10348_10544 = state_10313__$1;
(statearr_10348_10544[(2)] = inst_10211);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10313__$1);

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
});})(c__9631__auto__,___8305__auto__,self____$1))
;
return ((function (switch__9610__auto__,c__9631__auto__,___8305__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9611__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9611__auto____0 = (function (){
var statearr_10352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10352[(0)] = cljs_async_patterns$core_test$state_machine__9611__auto__);

(statearr_10352[(1)] = (1));

return statearr_10352;
});
var cljs_async_patterns$core_test$state_machine__9611__auto____1 = (function (state_10313){
while(true){
var ret_value__9612__auto__ = (function (){try{while(true){
var result__9613__auto__ = switch__9610__auto__.call(null,state_10313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9613__auto__;
}
break;
}
}catch (e10353){if((e10353 instanceof Object)){
var ex__9614__auto__ = e10353;
var statearr_10354_10545 = state_10313;
(statearr_10354_10545[(5)] = ex__9614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10546 = state_10313;
state_10313 = G__10546;
continue;
} else {
return ret_value__9612__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9611__auto__ = function(state_10313){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9611__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9611__auto____1.call(this,state_10313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9611__auto____0;
cljs_async_patterns$core_test$state_machine__9611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9611__auto____1;
return cljs_async_patterns$core_test$state_machine__9611__auto__;
})()
;})(switch__9610__auto__,c__9631__auto__,___8305__auto__,self____$1))
})();
var state__9633__auto__ = (function (){var statearr_10355 = f__9632__auto__.call(null);
(statearr_10355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9631__auto__);

return statearr_10355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9633__auto__);
});})(c__9631__auto__,___8305__auto__,self____$1))
);

return c__9631__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.prototype.apply = (function (self__,args10187){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10187)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___8305__auto__ = this;
var c__9631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9631__auto__,___8305__auto__){
return (function (){
var f__9632__auto__ = (function (){var switch__9610__auto__ = ((function (c__9631__auto__,___8305__auto__){
return (function (state_10481){
var state_val_10482 = (state_10481[(1)]);
if((state_val_10482 === (7))){
var inst_10378 = (state_10481[(7)]);
var inst_10388 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10389 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10390 = cljs.core.List.EMPTY;
var inst_10391 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10392 = cljs.core.cons.call(null,inst_10391,inst_10378);
var inst_10393 = cljs.core._conj.call(null,inst_10390,inst_10392);
var inst_10394 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10395 = cljs.core._conj.call(null,inst_10393,inst_10394);
var inst_10396 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10389,inst_10395,null];
var inst_10397 = cljs.core.PersistentHashMap.fromArrays(inst_10388,inst_10396);
var inst_10398 = cljs.test.do_report.call(null,inst_10397);
var state_10481__$1 = state_10481;
var statearr_10483_10547 = state_10481__$1;
(statearr_10483_10547[(2)] = inst_10398);

(statearr_10483_10547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (20))){
var inst_10454 = (state_10481[(8)]);
var inst_10457 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10458 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10459 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10454);
var inst_10460 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10458,inst_10459,null];
var inst_10461 = cljs.core.PersistentHashMap.fromArrays(inst_10457,inst_10460);
var inst_10462 = cljs.test.do_report.call(null,inst_10461);
var state_10481__$1 = state_10481;
var statearr_10484_10548 = state_10481__$1;
(statearr_10484_10548[(2)] = inst_10462);

(statearr_10484_10548[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (1))){
var inst_10357 = (state_10481[(9)]);
var inst_10356 = (state_10481[(10)]);
var inst_10358 = (state_10481[(11)]);
var inst_10356__$1 = cljs.core.async.chan.call(null,(1));
var inst_10357__$1 = cljs.core.async.chan.call(null,(1));
var inst_10358__$1 = cljs.core.async.chan.call(null,(1));
var inst_10359 = cljs_async_patterns.core._GT_1.call(null,inst_10356__$1);
var inst_10360 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_10359);
var inst_10361 = cljs_async_patterns.core._GT_1.call(null,inst_10357__$1);
var inst_10362 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10361);
var inst_10363 = cljs_async_patterns.core._GT_1.call(null,inst_10358__$1,"ERROR:");
var inst_10364 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10363);
var state_10481__$1 = (function (){var statearr_10485 = state_10481;
(statearr_10485[(9)] = inst_10357__$1);

(statearr_10485[(12)] = inst_10362);

(statearr_10485[(13)] = inst_10360);

(statearr_10485[(10)] = inst_10356__$1);

(statearr_10485[(11)] = inst_10358__$1);

(statearr_10485[(14)] = inst_10364);

return statearr_10485;
})();
var statearr_10486_10549 = state_10481__$1;
(statearr_10486_10549[(2)] = null);

(statearr_10486_10549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (4))){
var inst_10356 = (state_10481[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10481,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_10374 = cljs.core.List.EMPTY;
var inst_10375 = cljs.core._conj.call(null,inst_10374,"suc");
var state_10481__$1 = (function (){var statearr_10487 = state_10481;
(statearr_10487[(15)] = inst_10375);

return statearr_10487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10481__$1,(5),inst_10356);
} else {
if((state_val_10482 === (15))){
var inst_10417 = (state_10481[(16)]);
var inst_10438 = (state_10481[(2)]);
var state_10481__$1 = (function (){var statearr_10488 = state_10481;
(statearr_10488[(17)] = inst_10438);

return statearr_10488;
})();
var statearr_10489_10550 = state_10481__$1;
(statearr_10489_10550[(2)] = inst_10417);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (21))){
var inst_10454 = (state_10481[(8)]);
var inst_10464 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10465 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10466 = cljs.core.List.EMPTY;
var inst_10467 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10468 = cljs.core.cons.call(null,inst_10467,inst_10454);
var inst_10469 = cljs.core._conj.call(null,inst_10466,inst_10468);
var inst_10470 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10471 = cljs.core._conj.call(null,inst_10469,inst_10470);
var inst_10472 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10465,inst_10471,null];
var inst_10473 = cljs.core.PersistentHashMap.fromArrays(inst_10464,inst_10472);
var inst_10474 = cljs.test.do_report.call(null,inst_10473);
var state_10481__$1 = state_10481;
var statearr_10490_10551 = state_10481__$1;
(statearr_10490_10551[(2)] = inst_10474);

(statearr_10490_10551[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (13))){
var inst_10416 = (state_10481[(18)]);
var inst_10419 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10420 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10421 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10416);
var inst_10422 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10420,inst_10421,null];
var inst_10423 = cljs.core.PersistentHashMap.fromArrays(inst_10419,inst_10422);
var inst_10424 = cljs.test.do_report.call(null,inst_10423);
var state_10481__$1 = state_10481;
var statearr_10491_10552 = state_10481__$1;
(statearr_10491_10552[(2)] = inst_10424);

(statearr_10491_10552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (22))){
var inst_10455 = (state_10481[(19)]);
var inst_10476 = (state_10481[(2)]);
var state_10481__$1 = (function (){var statearr_10492 = state_10481;
(statearr_10492[(20)] = inst_10476);

return statearr_10492;
})();
var statearr_10493_10553 = state_10481__$1;
(statearr_10493_10553[(2)] = inst_10455);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (6))){
var inst_10378 = (state_10481[(7)]);
var inst_10381 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10382 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10383 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10378);
var inst_10384 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10382,inst_10383,null];
var inst_10385 = cljs.core.PersistentHashMap.fromArrays(inst_10381,inst_10384);
var inst_10386 = cljs.test.do_report.call(null,inst_10385);
var state_10481__$1 = state_10481;
var statearr_10494_10554 = state_10481__$1;
(statearr_10494_10554[(2)] = inst_10386);

(statearr_10494_10554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (17))){
var inst_10441 = (state_10481[(2)]);
var inst_10442 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10443 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10444 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10443,inst_10441,null];
var inst_10445 = cljs.core.PersistentHashMap.fromArrays(inst_10442,inst_10444);
var inst_10446 = cljs.test.do_report.call(null,inst_10445);
var state_10481__$1 = state_10481;
var statearr_10495_10555 = state_10481__$1;
(statearr_10495_10555[(2)] = inst_10446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (3))){
var inst_10365 = (state_10481[(2)]);
var inst_10366 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10367 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10368 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10367,inst_10365,null];
var inst_10369 = cljs.core.PersistentHashMap.fromArrays(inst_10366,inst_10368);
var inst_10370 = cljs.test.do_report.call(null,inst_10369);
var state_10481__$1 = state_10481;
var statearr_10496_10556 = state_10481__$1;
(statearr_10496_10556[(2)] = inst_10370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (12))){
var inst_10413 = (state_10481[(21)]);
var inst_10417 = (state_10481[(16)]);
var inst_10416 = (state_10481[(18)]);
var inst_10415 = (state_10481[(2)]);
var inst_10416__$1 = cljs.core._conj.call(null,inst_10413,inst_10415);
var inst_10417__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10416__$1);
var state_10481__$1 = (function (){var statearr_10497 = state_10481;
(statearr_10497[(16)] = inst_10417__$1);

(statearr_10497[(18)] = inst_10416__$1);

return statearr_10497;
})();
if(cljs.core.truth_(inst_10417__$1)){
var statearr_10498_10557 = state_10481__$1;
(statearr_10498_10557[(1)] = (13));

} else {
var statearr_10499_10558 = state_10481__$1;
(statearr_10499_10558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (2))){
var inst_10402 = (state_10481[(2)]);
var state_10481__$1 = (function (){var statearr_10500 = state_10481;
(statearr_10500[(22)] = inst_10402);

return statearr_10500;
})();
var statearr_10501_10559 = state_10481__$1;
(statearr_10501_10559[(2)] = null);

(statearr_10501_10559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (19))){
var inst_10454 = (state_10481[(8)]);
var inst_10451 = (state_10481[(23)]);
var inst_10455 = (state_10481[(19)]);
var inst_10453 = (state_10481[(2)]);
var inst_10454__$1 = cljs.core._conj.call(null,inst_10451,inst_10453);
var inst_10455__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10454__$1);
var state_10481__$1 = (function (){var statearr_10502 = state_10481;
(statearr_10502[(8)] = inst_10454__$1);

(statearr_10502[(19)] = inst_10455__$1);

return statearr_10502;
})();
if(cljs.core.truth_(inst_10455__$1)){
var statearr_10503_10560 = state_10481__$1;
(statearr_10503_10560[(1)] = (20));

} else {
var statearr_10504_10561 = state_10481__$1;
(statearr_10504_10561[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (11))){
var inst_10357 = (state_10481[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10481,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_10412 = cljs.core.List.EMPTY;
var inst_10413 = cljs.core._conj.call(null,inst_10412,false);
var state_10481__$1 = (function (){var statearr_10505 = state_10481;
(statearr_10505[(21)] = inst_10413);

return statearr_10505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10481__$1,(12),inst_10357);
} else {
if((state_val_10482 === (9))){
var inst_10440 = (state_10481[(2)]);
var state_10481__$1 = (function (){var statearr_10506 = state_10481;
(statearr_10506[(24)] = inst_10440);

return statearr_10506;
})();
var statearr_10507_10562 = state_10481__$1;
(statearr_10507_10562[(2)] = null);

(statearr_10507_10562[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (5))){
var inst_10375 = (state_10481[(15)]);
var inst_10378 = (state_10481[(7)]);
var inst_10379 = (state_10481[(25)]);
var inst_10377 = (state_10481[(2)]);
var inst_10378__$1 = cljs.core._conj.call(null,inst_10375,inst_10377);
var inst_10379__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10378__$1);
var state_10481__$1 = (function (){var statearr_10508 = state_10481;
(statearr_10508[(7)] = inst_10378__$1);

(statearr_10508[(25)] = inst_10379__$1);

return statearr_10508;
})();
if(cljs.core.truth_(inst_10379__$1)){
var statearr_10509_10563 = state_10481__$1;
(statearr_10509_10563[(1)] = (6));

} else {
var statearr_10510_10564 = state_10481__$1;
(statearr_10510_10564[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (14))){
var inst_10416 = (state_10481[(18)]);
var inst_10426 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10427 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10428 = cljs.core.List.EMPTY;
var inst_10429 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10430 = cljs.core.cons.call(null,inst_10429,inst_10416);
var inst_10431 = cljs.core._conj.call(null,inst_10428,inst_10430);
var inst_10432 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10433 = cljs.core._conj.call(null,inst_10431,inst_10432);
var inst_10434 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10427,inst_10433,null];
var inst_10435 = cljs.core.PersistentHashMap.fromArrays(inst_10426,inst_10434);
var inst_10436 = cljs.test.do_report.call(null,inst_10435);
var state_10481__$1 = state_10481;
var statearr_10511_10565 = state_10481__$1;
(statearr_10511_10565[(2)] = inst_10436);

(statearr_10511_10565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (16))){
var inst_10478 = (state_10481[(2)]);
var inst_10479 = done.call(null);
var state_10481__$1 = (function (){var statearr_10512 = state_10481;
(statearr_10512[(26)] = inst_10478);

return statearr_10512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10481__$1,inst_10479);
} else {
if((state_val_10482 === (10))){
var inst_10403 = (state_10481[(2)]);
var inst_10404 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10405 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10406 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10405,inst_10403,null];
var inst_10407 = cljs.core.PersistentHashMap.fromArrays(inst_10404,inst_10406);
var inst_10408 = cljs.test.do_report.call(null,inst_10407);
var state_10481__$1 = state_10481;
var statearr_10513_10566 = state_10481__$1;
(statearr_10513_10566[(2)] = inst_10408);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10482 === (18))){
var inst_10358 = (state_10481[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10481,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_10450 = cljs.core.List.EMPTY;
var inst_10451 = cljs.core._conj.call(null,inst_10450,"ERROR:");
var state_10481__$1 = (function (){var statearr_10514 = state_10481;
(statearr_10514[(23)] = inst_10451);

return statearr_10514;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10481__$1,(19),inst_10358);
} else {
if((state_val_10482 === (8))){
var inst_10379 = (state_10481[(25)]);
var inst_10400 = (state_10481[(2)]);
var state_10481__$1 = (function (){var statearr_10515 = state_10481;
(statearr_10515[(27)] = inst_10400);

return statearr_10515;
})();
var statearr_10516_10567 = state_10481__$1;
(statearr_10516_10567[(2)] = inst_10379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481__$1);

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
});})(c__9631__auto__,___8305__auto__))
;
return ((function (switch__9610__auto__,c__9631__auto__,___8305__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9611__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9611__auto____0 = (function (){
var statearr_10520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10520[(0)] = cljs_async_patterns$core_test$state_machine__9611__auto__);

(statearr_10520[(1)] = (1));

return statearr_10520;
});
var cljs_async_patterns$core_test$state_machine__9611__auto____1 = (function (state_10481){
while(true){
var ret_value__9612__auto__ = (function (){try{while(true){
var result__9613__auto__ = switch__9610__auto__.call(null,state_10481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9613__auto__;
}
break;
}
}catch (e10521){if((e10521 instanceof Object)){
var ex__9614__auto__ = e10521;
var statearr_10522_10568 = state_10481;
(statearr_10522_10568[(5)] = ex__9614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10569 = state_10481;
state_10481 = G__10569;
continue;
} else {
return ret_value__9612__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9611__auto__ = function(state_10481){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9611__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9611__auto____1.call(this,state_10481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9611__auto____0;
cljs_async_patterns$core_test$state_machine__9611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9611__auto____1;
return cljs_async_patterns$core_test$state_machine__9611__auto__;
})()
;})(switch__9610__auto__,c__9631__auto__,___8305__auto__))
})();
var state__9633__auto__ = (function (){var statearr_10523 = f__9632__auto__.call(null);
(statearr_10523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9631__auto__);

return statearr_10523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9633__auto__);
});})(c__9631__auto__,___8305__auto__))
);

return c__9631__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10185","meta10185",1979344862,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test10184";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test10184");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test10184 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test10184(meta10185){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184(meta10185));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10184(null));
});

cljs_async_patterns.core_test._GT_1_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"test/cljs_async_patterns/core_test.cljs",17,1,60,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]));
cljs.core.println.call(null,(31));
cljs_async_patterns.core._LT_print.call(null,(function (){var c__9631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9631__auto__){
return (function (){
var f__9632__auto__ = (function (){var switch__9610__auto__ = ((function (c__9631__auto__){
return (function (state_10579){
var state_val_10580 = (state_10579[(1)]);
if((state_val_10580 === (1))){
var inst_10570 = cljs.core.async.chan.call(null,(1));
var inst_10571 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_10570,"ERROR:");
var inst_10572 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.list(new cljs.core.Symbol("cljs-async-patterns.core",">?","cljs-async-patterns.core/>?",-1829810227,null),new cljs.core.Symbol(null,"c","c",-122660552,null),"ERROR:")], null);
var inst_10573 = cljs.core.list(new cljs.core.Symbol(null,".readFile",".readFile",263604991,null),cljs.core.list(new cljs.core.Symbol("node","require","node/require",1143936540,null),"fs"),"/home/george/1","utf8",new cljs.core.Symbol(null,"_","_",-1201019570,null));
var inst_10574 = cljs.core.replace.call(null,inst_10572,inst_10573);
var inst_10575 = cljs.core.list(new cljs.core.Symbol(null,".readFile",".readFile",263604991,null),cljs.core.list(new cljs.core.Symbol("node","require","node/require",1143936540,null),"fs"),"/home/george/1","utf8",new cljs.core.Symbol(null,"_","_",-1201019570,null));
var inst_10576 = cljs.core.println.call(null,"func: ",inst_10575);
var inst_10577 = cljs.core.println.call(null,"rep: ",inst_10574);
var state_10579__$1 = (function (){var statearr_10581 = state_10579;
(statearr_10581[(7)] = inst_10571);

(statearr_10581[(8)] = inst_10576);

return statearr_10581;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10579__$1,inst_10577);
} else {
return null;
}
});})(c__9631__auto__))
;
return ((function (switch__9610__auto__,c__9631__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9611__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9611__auto____0 = (function (){
var statearr_10585 = [null,null,null,null,null,null,null,null,null];
(statearr_10585[(0)] = cljs_async_patterns$core_test$state_machine__9611__auto__);

(statearr_10585[(1)] = (1));

return statearr_10585;
});
var cljs_async_patterns$core_test$state_machine__9611__auto____1 = (function (state_10579){
while(true){
var ret_value__9612__auto__ = (function (){try{while(true){
var result__9613__auto__ = switch__9610__auto__.call(null,state_10579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9613__auto__;
}
break;
}
}catch (e10586){if((e10586 instanceof Object)){
var ex__9614__auto__ = e10586;
var statearr_10587_10589 = state_10579;
(statearr_10587_10589[(5)] = ex__9614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10590 = state_10579;
state_10579 = G__10590;
continue;
} else {
return ret_value__9612__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9611__auto__ = function(state_10579){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9611__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9611__auto____1.call(this,state_10579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9611__auto____0;
cljs_async_patterns$core_test$state_machine__9611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9611__auto____1;
return cljs_async_patterns$core_test$state_machine__9611__auto__;
})()
;})(switch__9610__auto__,c__9631__auto__))
})();
var state__9633__auto__ = (function (){var statearr_10588 = f__9632__auto__.call(null);
(statearr_10588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9631__auto__);

return statearr_10588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9633__auto__);
});})(c__9631__auto__))
);

return c__9631__auto__;
})());

//# sourceMappingURL=core_test.js.map