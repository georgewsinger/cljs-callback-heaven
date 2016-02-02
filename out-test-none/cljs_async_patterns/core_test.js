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
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276 = (function (meta14277){
this.meta14277 = meta14277;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14278,meta14277__$1){
var self__ = this;
var _14278__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276(meta14277__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14278){
var self__ = this;
var _14278__$1 = this;
return self__.meta14277;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10176__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10176__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10176__auto__,self____$1){
return (function (state_14405){
var state_val_14406 = (state_14405[(1)]);
if((state_val_14406 === (7))){
var inst_14302 = (state_14405[(7)]);
var inst_14312 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14313 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_14314 = cljs.core.List.EMPTY;
var inst_14315 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_14316 = cljs.core.cons.call(null,inst_14315,inst_14302);
var inst_14317 = cljs.core._conj.call(null,inst_14314,inst_14316);
var inst_14318 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_14319 = cljs.core._conj.call(null,inst_14317,inst_14318);
var inst_14320 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_14313,inst_14319,null];
var inst_14321 = cljs.core.PersistentHashMap.fromArrays(inst_14312,inst_14320);
var inst_14322 = cljs.test.do_report.call(null,inst_14321);
var state_14405__$1 = state_14405;
var statearr_14407_14616 = state_14405__$1;
(statearr_14407_14616[(2)] = inst_14322);

(statearr_14407_14616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (20))){
var inst_14378 = (state_14405[(8)]);
var inst_14381 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14382 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_14383 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14378);
var inst_14384 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_14382,inst_14383,null];
var inst_14385 = cljs.core.PersistentHashMap.fromArrays(inst_14381,inst_14384);
var inst_14386 = cljs.test.do_report.call(null,inst_14385);
var state_14405__$1 = state_14405;
var statearr_14408_14617 = state_14405__$1;
(statearr_14408_14617[(2)] = inst_14386);

(statearr_14408_14617[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (1))){
var inst_14282 = (state_14405[(9)]);
var inst_14281 = (state_14405[(10)]);
var inst_14280 = (state_14405[(11)]);
var inst_14280__$1 = cljs.core.async.chan.call(null,(1));
var inst_14281__$1 = cljs.core.async.chan.call(null,(1));
var inst_14282__$1 = cljs.core.async.chan.call(null,(1));
var inst_14283 = cljs_async_patterns.core._GT_1.call(null,inst_14280__$1);
var inst_14284 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_14283);
var inst_14285 = cljs_async_patterns.core._GT_1.call(null,inst_14281__$1);
var inst_14286 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_14285);
var inst_14287 = cljs_async_patterns.core._GT_1.call(null,inst_14282__$1,"ERROR:");
var inst_14288 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_14287);
var state_14405__$1 = (function (){var statearr_14409 = state_14405;
(statearr_14409[(9)] = inst_14282__$1);

(statearr_14409[(12)] = inst_14284);

(statearr_14409[(13)] = inst_14286);

(statearr_14409[(10)] = inst_14281__$1);

(statearr_14409[(11)] = inst_14280__$1);

(statearr_14409[(14)] = inst_14288);

return statearr_14409;
})();
var statearr_14410_14618 = state_14405__$1;
(statearr_14410_14618[(2)] = null);

(statearr_14410_14618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (4))){
var inst_14280 = (state_14405[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14405,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_14298 = cljs.core.List.EMPTY;
var inst_14299 = cljs.core._conj.call(null,inst_14298,"suc");
var state_14405__$1 = (function (){var statearr_14411 = state_14405;
(statearr_14411[(15)] = inst_14299);

return statearr_14411;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14405__$1,(5),inst_14280);
} else {
if((state_val_14406 === (15))){
var inst_14341 = (state_14405[(16)]);
var inst_14362 = (state_14405[(2)]);
var state_14405__$1 = (function (){var statearr_14412 = state_14405;
(statearr_14412[(17)] = inst_14362);

return statearr_14412;
})();
var statearr_14413_14619 = state_14405__$1;
(statearr_14413_14619[(2)] = inst_14341);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (21))){
var inst_14378 = (state_14405[(8)]);
var inst_14388 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14389 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_14390 = cljs.core.List.EMPTY;
var inst_14391 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_14392 = cljs.core.cons.call(null,inst_14391,inst_14378);
var inst_14393 = cljs.core._conj.call(null,inst_14390,inst_14392);
var inst_14394 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_14395 = cljs.core._conj.call(null,inst_14393,inst_14394);
var inst_14396 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_14389,inst_14395,null];
var inst_14397 = cljs.core.PersistentHashMap.fromArrays(inst_14388,inst_14396);
var inst_14398 = cljs.test.do_report.call(null,inst_14397);
var state_14405__$1 = state_14405;
var statearr_14414_14620 = state_14405__$1;
(statearr_14414_14620[(2)] = inst_14398);

(statearr_14414_14620[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (13))){
var inst_14340 = (state_14405[(18)]);
var inst_14343 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14344 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_14345 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14340);
var inst_14346 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_14344,inst_14345,null];
var inst_14347 = cljs.core.PersistentHashMap.fromArrays(inst_14343,inst_14346);
var inst_14348 = cljs.test.do_report.call(null,inst_14347);
var state_14405__$1 = state_14405;
var statearr_14415_14621 = state_14405__$1;
(statearr_14415_14621[(2)] = inst_14348);

(statearr_14415_14621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (22))){
var inst_14379 = (state_14405[(19)]);
var inst_14400 = (state_14405[(2)]);
var state_14405__$1 = (function (){var statearr_14416 = state_14405;
(statearr_14416[(20)] = inst_14400);

return statearr_14416;
})();
var statearr_14417_14622 = state_14405__$1;
(statearr_14417_14622[(2)] = inst_14379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (6))){
var inst_14302 = (state_14405[(7)]);
var inst_14305 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14306 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_14307 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14302);
var inst_14308 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_14306,inst_14307,null];
var inst_14309 = cljs.core.PersistentHashMap.fromArrays(inst_14305,inst_14308);
var inst_14310 = cljs.test.do_report.call(null,inst_14309);
var state_14405__$1 = state_14405;
var statearr_14418_14623 = state_14405__$1;
(statearr_14418_14623[(2)] = inst_14310);

(statearr_14418_14623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (17))){
var inst_14365 = (state_14405[(2)]);
var inst_14366 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14367 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_14368 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_14367,inst_14365,null];
var inst_14369 = cljs.core.PersistentHashMap.fromArrays(inst_14366,inst_14368);
var inst_14370 = cljs.test.do_report.call(null,inst_14369);
var state_14405__$1 = state_14405;
var statearr_14419_14624 = state_14405__$1;
(statearr_14419_14624[(2)] = inst_14370);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (3))){
var inst_14289 = (state_14405[(2)]);
var inst_14290 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14291 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_14292 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_14291,inst_14289,null];
var inst_14293 = cljs.core.PersistentHashMap.fromArrays(inst_14290,inst_14292);
var inst_14294 = cljs.test.do_report.call(null,inst_14293);
var state_14405__$1 = state_14405;
var statearr_14420_14625 = state_14405__$1;
(statearr_14420_14625[(2)] = inst_14294);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (12))){
var inst_14340 = (state_14405[(18)]);
var inst_14337 = (state_14405[(21)]);
var inst_14341 = (state_14405[(16)]);
var inst_14339 = (state_14405[(2)]);
var inst_14340__$1 = cljs.core._conj.call(null,inst_14337,inst_14339);
var inst_14341__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14340__$1);
var state_14405__$1 = (function (){var statearr_14421 = state_14405;
(statearr_14421[(18)] = inst_14340__$1);

(statearr_14421[(16)] = inst_14341__$1);

return statearr_14421;
})();
if(cljs.core.truth_(inst_14341__$1)){
var statearr_14422_14626 = state_14405__$1;
(statearr_14422_14626[(1)] = (13));

} else {
var statearr_14423_14627 = state_14405__$1;
(statearr_14423_14627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (2))){
var inst_14326 = (state_14405[(2)]);
var state_14405__$1 = (function (){var statearr_14424 = state_14405;
(statearr_14424[(22)] = inst_14326);

return statearr_14424;
})();
var statearr_14425_14628 = state_14405__$1;
(statearr_14425_14628[(2)] = null);

(statearr_14425_14628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (19))){
var inst_14378 = (state_14405[(8)]);
var inst_14375 = (state_14405[(23)]);
var inst_14379 = (state_14405[(19)]);
var inst_14377 = (state_14405[(2)]);
var inst_14378__$1 = cljs.core._conj.call(null,inst_14375,inst_14377);
var inst_14379__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14378__$1);
var state_14405__$1 = (function (){var statearr_14426 = state_14405;
(statearr_14426[(8)] = inst_14378__$1);

(statearr_14426[(19)] = inst_14379__$1);

return statearr_14426;
})();
if(cljs.core.truth_(inst_14379__$1)){
var statearr_14427_14629 = state_14405__$1;
(statearr_14427_14629[(1)] = (20));

} else {
var statearr_14428_14630 = state_14405__$1;
(statearr_14428_14630[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (11))){
var inst_14281 = (state_14405[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14405,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_14336 = cljs.core.List.EMPTY;
var inst_14337 = cljs.core._conj.call(null,inst_14336,false);
var state_14405__$1 = (function (){var statearr_14429 = state_14405;
(statearr_14429[(21)] = inst_14337);

return statearr_14429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14405__$1,(12),inst_14281);
} else {
if((state_val_14406 === (9))){
var inst_14364 = (state_14405[(2)]);
var state_14405__$1 = (function (){var statearr_14430 = state_14405;
(statearr_14430[(24)] = inst_14364);

return statearr_14430;
})();
var statearr_14431_14631 = state_14405__$1;
(statearr_14431_14631[(2)] = null);

(statearr_14431_14631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (5))){
var inst_14303 = (state_14405[(25)]);
var inst_14299 = (state_14405[(15)]);
var inst_14302 = (state_14405[(7)]);
var inst_14301 = (state_14405[(2)]);
var inst_14302__$1 = cljs.core._conj.call(null,inst_14299,inst_14301);
var inst_14303__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14302__$1);
var state_14405__$1 = (function (){var statearr_14432 = state_14405;
(statearr_14432[(25)] = inst_14303__$1);

(statearr_14432[(7)] = inst_14302__$1);

return statearr_14432;
})();
if(cljs.core.truth_(inst_14303__$1)){
var statearr_14433_14632 = state_14405__$1;
(statearr_14433_14632[(1)] = (6));

} else {
var statearr_14434_14633 = state_14405__$1;
(statearr_14434_14633[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (14))){
var inst_14340 = (state_14405[(18)]);
var inst_14350 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14351 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_14352 = cljs.core.List.EMPTY;
var inst_14353 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_14354 = cljs.core.cons.call(null,inst_14353,inst_14340);
var inst_14355 = cljs.core._conj.call(null,inst_14352,inst_14354);
var inst_14356 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_14357 = cljs.core._conj.call(null,inst_14355,inst_14356);
var inst_14358 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_14351,inst_14357,null];
var inst_14359 = cljs.core.PersistentHashMap.fromArrays(inst_14350,inst_14358);
var inst_14360 = cljs.test.do_report.call(null,inst_14359);
var state_14405__$1 = state_14405;
var statearr_14435_14634 = state_14405__$1;
(statearr_14435_14634[(2)] = inst_14360);

(statearr_14435_14634[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (16))){
var inst_14402 = (state_14405[(2)]);
var inst_14403 = done.call(null);
var state_14405__$1 = (function (){var statearr_14436 = state_14405;
(statearr_14436[(26)] = inst_14402);

return statearr_14436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14405__$1,inst_14403);
} else {
if((state_val_14406 === (10))){
var inst_14327 = (state_14405[(2)]);
var inst_14328 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14329 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_14330 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_14329,inst_14327,null];
var inst_14331 = cljs.core.PersistentHashMap.fromArrays(inst_14328,inst_14330);
var inst_14332 = cljs.test.do_report.call(null,inst_14331);
var state_14405__$1 = state_14405;
var statearr_14437_14635 = state_14405__$1;
(statearr_14437_14635[(2)] = inst_14332);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14406 === (18))){
var inst_14282 = (state_14405[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14405,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_14374 = cljs.core.List.EMPTY;
var inst_14375 = cljs.core._conj.call(null,inst_14374,"ERROR:");
var state_14405__$1 = (function (){var statearr_14438 = state_14405;
(statearr_14438[(23)] = inst_14375);

return statearr_14438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14405__$1,(19),inst_14282);
} else {
if((state_val_14406 === (8))){
var inst_14303 = (state_14405[(25)]);
var inst_14324 = (state_14405[(2)]);
var state_14405__$1 = (function (){var statearr_14439 = state_14405;
(statearr_14439[(27)] = inst_14324);

return statearr_14439;
})();
var statearr_14440_14636 = state_14405__$1;
(statearr_14440_14636[(2)] = inst_14303);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405__$1);

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
});})(c__9318__auto__,___10176__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10176__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_14444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14444[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_14444[(1)] = (1));

return statearr_14444;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_14405){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14445){if((e14445 instanceof Object)){
var ex__9301__auto__ = e14445;
var statearr_14446_14637 = state_14405;
(statearr_14446_14637[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14638 = state_14405;
state_14405 = G__14638;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_14405){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_14405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10176__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_14447 = f__9319__auto__.call(null);
(statearr_14447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10176__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.prototype.apply = (function (self__,args14279){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14279)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10176__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10176__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10176__auto__){
return (function (state_14573){
var state_val_14574 = (state_14573[(1)]);
if((state_val_14574 === (7))){
var inst_14470 = (state_14573[(7)]);
var inst_14480 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14481 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_14482 = cljs.core.List.EMPTY;
var inst_14483 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_14484 = cljs.core.cons.call(null,inst_14483,inst_14470);
var inst_14485 = cljs.core._conj.call(null,inst_14482,inst_14484);
var inst_14486 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_14487 = cljs.core._conj.call(null,inst_14485,inst_14486);
var inst_14488 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_14481,inst_14487,null];
var inst_14489 = cljs.core.PersistentHashMap.fromArrays(inst_14480,inst_14488);
var inst_14490 = cljs.test.do_report.call(null,inst_14489);
var state_14573__$1 = state_14573;
var statearr_14575_14639 = state_14573__$1;
(statearr_14575_14639[(2)] = inst_14490);

(statearr_14575_14639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (20))){
var inst_14546 = (state_14573[(8)]);
var inst_14549 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14550 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_14551 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14546);
var inst_14552 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_14550,inst_14551,null];
var inst_14553 = cljs.core.PersistentHashMap.fromArrays(inst_14549,inst_14552);
var inst_14554 = cljs.test.do_report.call(null,inst_14553);
var state_14573__$1 = state_14573;
var statearr_14576_14640 = state_14573__$1;
(statearr_14576_14640[(2)] = inst_14554);

(statearr_14576_14640[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (1))){
var inst_14450 = (state_14573[(9)]);
var inst_14449 = (state_14573[(10)]);
var inst_14448 = (state_14573[(11)]);
var inst_14448__$1 = cljs.core.async.chan.call(null,(1));
var inst_14449__$1 = cljs.core.async.chan.call(null,(1));
var inst_14450__$1 = cljs.core.async.chan.call(null,(1));
var inst_14451 = cljs_async_patterns.core._GT_1.call(null,inst_14448__$1);
var inst_14452 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_14451);
var inst_14453 = cljs_async_patterns.core._GT_1.call(null,inst_14449__$1);
var inst_14454 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_14453);
var inst_14455 = cljs_async_patterns.core._GT_1.call(null,inst_14450__$1,"ERROR:");
var inst_14456 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_14455);
var state_14573__$1 = (function (){var statearr_14577 = state_14573;
(statearr_14577[(9)] = inst_14450__$1);

(statearr_14577[(10)] = inst_14449__$1);

(statearr_14577[(12)] = inst_14456);

(statearr_14577[(13)] = inst_14452);

(statearr_14577[(11)] = inst_14448__$1);

(statearr_14577[(14)] = inst_14454);

return statearr_14577;
})();
var statearr_14578_14641 = state_14573__$1;
(statearr_14578_14641[(2)] = null);

(statearr_14578_14641[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (4))){
var inst_14448 = (state_14573[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14573,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_14466 = cljs.core.List.EMPTY;
var inst_14467 = cljs.core._conj.call(null,inst_14466,"suc");
var state_14573__$1 = (function (){var statearr_14579 = state_14573;
(statearr_14579[(15)] = inst_14467);

return statearr_14579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14573__$1,(5),inst_14448);
} else {
if((state_val_14574 === (15))){
var inst_14509 = (state_14573[(16)]);
var inst_14530 = (state_14573[(2)]);
var state_14573__$1 = (function (){var statearr_14580 = state_14573;
(statearr_14580[(17)] = inst_14530);

return statearr_14580;
})();
var statearr_14581_14642 = state_14573__$1;
(statearr_14581_14642[(2)] = inst_14509);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (21))){
var inst_14546 = (state_14573[(8)]);
var inst_14556 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14557 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_14558 = cljs.core.List.EMPTY;
var inst_14559 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_14560 = cljs.core.cons.call(null,inst_14559,inst_14546);
var inst_14561 = cljs.core._conj.call(null,inst_14558,inst_14560);
var inst_14562 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_14563 = cljs.core._conj.call(null,inst_14561,inst_14562);
var inst_14564 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_14557,inst_14563,null];
var inst_14565 = cljs.core.PersistentHashMap.fromArrays(inst_14556,inst_14564);
var inst_14566 = cljs.test.do_report.call(null,inst_14565);
var state_14573__$1 = state_14573;
var statearr_14582_14643 = state_14573__$1;
(statearr_14582_14643[(2)] = inst_14566);

(statearr_14582_14643[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (13))){
var inst_14508 = (state_14573[(18)]);
var inst_14511 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14512 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_14513 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14508);
var inst_14514 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_14512,inst_14513,null];
var inst_14515 = cljs.core.PersistentHashMap.fromArrays(inst_14511,inst_14514);
var inst_14516 = cljs.test.do_report.call(null,inst_14515);
var state_14573__$1 = state_14573;
var statearr_14583_14644 = state_14573__$1;
(statearr_14583_14644[(2)] = inst_14516);

(statearr_14583_14644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (22))){
var inst_14547 = (state_14573[(19)]);
var inst_14568 = (state_14573[(2)]);
var state_14573__$1 = (function (){var statearr_14584 = state_14573;
(statearr_14584[(20)] = inst_14568);

return statearr_14584;
})();
var statearr_14585_14645 = state_14573__$1;
(statearr_14585_14645[(2)] = inst_14547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (6))){
var inst_14470 = (state_14573[(7)]);
var inst_14473 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14474 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_14475 = cljs.core.cons.call(null,cljs.core._EQ_,inst_14470);
var inst_14476 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_14474,inst_14475,null];
var inst_14477 = cljs.core.PersistentHashMap.fromArrays(inst_14473,inst_14476);
var inst_14478 = cljs.test.do_report.call(null,inst_14477);
var state_14573__$1 = state_14573;
var statearr_14586_14646 = state_14573__$1;
(statearr_14586_14646[(2)] = inst_14478);

(statearr_14586_14646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (17))){
var inst_14533 = (state_14573[(2)]);
var inst_14534 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14535 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_14536 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_14535,inst_14533,null];
var inst_14537 = cljs.core.PersistentHashMap.fromArrays(inst_14534,inst_14536);
var inst_14538 = cljs.test.do_report.call(null,inst_14537);
var state_14573__$1 = state_14573;
var statearr_14587_14647 = state_14573__$1;
(statearr_14587_14647[(2)] = inst_14538);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (3))){
var inst_14457 = (state_14573[(2)]);
var inst_14458 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14459 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_14460 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_14459,inst_14457,null];
var inst_14461 = cljs.core.PersistentHashMap.fromArrays(inst_14458,inst_14460);
var inst_14462 = cljs.test.do_report.call(null,inst_14461);
var state_14573__$1 = state_14573;
var statearr_14588_14648 = state_14573__$1;
(statearr_14588_14648[(2)] = inst_14462);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (12))){
var inst_14508 = (state_14573[(18)]);
var inst_14505 = (state_14573[(21)]);
var inst_14509 = (state_14573[(16)]);
var inst_14507 = (state_14573[(2)]);
var inst_14508__$1 = cljs.core._conj.call(null,inst_14505,inst_14507);
var inst_14509__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14508__$1);
var state_14573__$1 = (function (){var statearr_14589 = state_14573;
(statearr_14589[(18)] = inst_14508__$1);

(statearr_14589[(16)] = inst_14509__$1);

return statearr_14589;
})();
if(cljs.core.truth_(inst_14509__$1)){
var statearr_14590_14649 = state_14573__$1;
(statearr_14590_14649[(1)] = (13));

} else {
var statearr_14591_14650 = state_14573__$1;
(statearr_14591_14650[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (2))){
var inst_14494 = (state_14573[(2)]);
var state_14573__$1 = (function (){var statearr_14592 = state_14573;
(statearr_14592[(22)] = inst_14494);

return statearr_14592;
})();
var statearr_14593_14651 = state_14573__$1;
(statearr_14593_14651[(2)] = null);

(statearr_14593_14651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (19))){
var inst_14543 = (state_14573[(23)]);
var inst_14547 = (state_14573[(19)]);
var inst_14546 = (state_14573[(8)]);
var inst_14545 = (state_14573[(2)]);
var inst_14546__$1 = cljs.core._conj.call(null,inst_14543,inst_14545);
var inst_14547__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14546__$1);
var state_14573__$1 = (function (){var statearr_14594 = state_14573;
(statearr_14594[(19)] = inst_14547__$1);

(statearr_14594[(8)] = inst_14546__$1);

return statearr_14594;
})();
if(cljs.core.truth_(inst_14547__$1)){
var statearr_14595_14652 = state_14573__$1;
(statearr_14595_14652[(1)] = (20));

} else {
var statearr_14596_14653 = state_14573__$1;
(statearr_14596_14653[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (11))){
var inst_14449 = (state_14573[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14573,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_14504 = cljs.core.List.EMPTY;
var inst_14505 = cljs.core._conj.call(null,inst_14504,false);
var state_14573__$1 = (function (){var statearr_14597 = state_14573;
(statearr_14597[(21)] = inst_14505);

return statearr_14597;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14573__$1,(12),inst_14449);
} else {
if((state_val_14574 === (9))){
var inst_14532 = (state_14573[(2)]);
var state_14573__$1 = (function (){var statearr_14598 = state_14573;
(statearr_14598[(24)] = inst_14532);

return statearr_14598;
})();
var statearr_14599_14654 = state_14573__$1;
(statearr_14599_14654[(2)] = null);

(statearr_14599_14654[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (5))){
var inst_14471 = (state_14573[(25)]);
var inst_14470 = (state_14573[(7)]);
var inst_14467 = (state_14573[(15)]);
var inst_14469 = (state_14573[(2)]);
var inst_14470__$1 = cljs.core._conj.call(null,inst_14467,inst_14469);
var inst_14471__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_14470__$1);
var state_14573__$1 = (function (){var statearr_14600 = state_14573;
(statearr_14600[(25)] = inst_14471__$1);

(statearr_14600[(7)] = inst_14470__$1);

return statearr_14600;
})();
if(cljs.core.truth_(inst_14471__$1)){
var statearr_14601_14655 = state_14573__$1;
(statearr_14601_14655[(1)] = (6));

} else {
var statearr_14602_14656 = state_14573__$1;
(statearr_14602_14656[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (14))){
var inst_14508 = (state_14573[(18)]);
var inst_14518 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14519 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_14520 = cljs.core.List.EMPTY;
var inst_14521 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_14522 = cljs.core.cons.call(null,inst_14521,inst_14508);
var inst_14523 = cljs.core._conj.call(null,inst_14520,inst_14522);
var inst_14524 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_14525 = cljs.core._conj.call(null,inst_14523,inst_14524);
var inst_14526 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_14519,inst_14525,null];
var inst_14527 = cljs.core.PersistentHashMap.fromArrays(inst_14518,inst_14526);
var inst_14528 = cljs.test.do_report.call(null,inst_14527);
var state_14573__$1 = state_14573;
var statearr_14603_14657 = state_14573__$1;
(statearr_14603_14657[(2)] = inst_14528);

(statearr_14603_14657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (16))){
var inst_14570 = (state_14573[(2)]);
var inst_14571 = done.call(null);
var state_14573__$1 = (function (){var statearr_14604 = state_14573;
(statearr_14604[(26)] = inst_14570);

return statearr_14604;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14573__$1,inst_14571);
} else {
if((state_val_14574 === (10))){
var inst_14495 = (state_14573[(2)]);
var inst_14496 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_14497 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_14498 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_14497,inst_14495,null];
var inst_14499 = cljs.core.PersistentHashMap.fromArrays(inst_14496,inst_14498);
var inst_14500 = cljs.test.do_report.call(null,inst_14499);
var state_14573__$1 = state_14573;
var statearr_14605_14658 = state_14573__$1;
(statearr_14605_14658[(2)] = inst_14500);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14574 === (18))){
var inst_14450 = (state_14573[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14573,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_14542 = cljs.core.List.EMPTY;
var inst_14543 = cljs.core._conj.call(null,inst_14542,"ERROR:");
var state_14573__$1 = (function (){var statearr_14606 = state_14573;
(statearr_14606[(23)] = inst_14543);

return statearr_14606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14573__$1,(19),inst_14450);
} else {
if((state_val_14574 === (8))){
var inst_14471 = (state_14573[(25)]);
var inst_14492 = (state_14573[(2)]);
var state_14573__$1 = (function (){var statearr_14607 = state_14573;
(statearr_14607[(27)] = inst_14492);

return statearr_14607;
})();
var statearr_14608_14659 = state_14573__$1;
(statearr_14608_14659[(2)] = inst_14471);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573__$1);

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
});})(c__9318__auto__,___10176__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10176__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_14612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14612[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_14612[(1)] = (1));

return statearr_14612;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_14573){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14613){if((e14613 instanceof Object)){
var ex__9301__auto__ = e14613;
var statearr_14614_14660 = state_14573;
(statearr_14614_14660[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14661 = state_14573;
state_14573 = G__14661;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_14573){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_14573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10176__auto__))
})();
var state__9320__auto__ = (function (){var statearr_14615 = f__9319__auto__.call(null);
(statearr_14615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10176__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta14277","meta14277",1577251600,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test14276";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test14276");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test14276 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test14276(meta14277){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276(meta14277));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test14276(null));
});

cljs_async_patterns.core_test._GT_1_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"/home/george/Dropbox/cljs-async-patterns/test/cljs_async_patterns/core_test.cljs",17,1,60,60,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]));
cljs.core.println.call(null,(35));
cljs_async_patterns.core._LT_print.call(null,(function (){var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_14669){
var state_val_14670 = (state_14669[(1)]);
if((state_val_14670 === (1))){
var inst_14662 = cljs.core.async.chan.call(null,(1));
var inst_14663 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.list(new cljs.core.Symbol("cljs-async-patterns.core",">?","cljs-async-patterns.core/>?",-1829810227,null),new cljs.core.Symbol(null,"c","c",-122660552,null),"ERROR:")], null);
var inst_14664 = cljs.core.list(new cljs.core.Symbol(null,".readFile",".readFile",263604991,null),cljs.core.list(new cljs.core.Symbol("node","require","node/require",1143936540,null),"fs"),"/home/george/1","utf8",new cljs.core.Symbol(null,"_","_",-1201019570,null));
var inst_14665 = cljs.core.replace.call(null,inst_14663,inst_14664);
var state_14669__$1 = (function (){var statearr_14671 = state_14669;
(statearr_14671[(7)] = inst_14665);

return statearr_14671;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14669__$1,(2),inst_14662);
} else {
if((state_val_14670 === (2))){
var inst_14667 = (state_14669[(2)]);
var state_14669__$1 = state_14669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14669__$1,inst_14667);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_14675 = [null,null,null,null,null,null,null,null];
(statearr_14675[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_14675[(1)] = (1));

return statearr_14675;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_14669){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14676){if((e14676 instanceof Object)){
var ex__9301__auto__ = e14676;
var statearr_14677_14679 = state_14669;
(statearr_14677_14679[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14680 = state_14669;
state_14669 = G__14680;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_14669){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_14669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_14678 = f__9319__auto__.call(null);
(statearr_14678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
})());
cljs.nodejs.require.call(null,"fs").readFile("/home/george/1","utf8",(function (err,res){
return cljs.core.println.call(null,"55");
}));
cljs_async_patterns.core._LT_print.call(null,(function (){var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_14688){
var state_val_14689 = (state_14688[(1)]);
if((state_val_14689 === (1))){
var inst_14681 = cljs.core.async.chan.call(null,(1));
var inst_14682 = cljs.nodejs.require.call(null,"fs");
var inst_14683 = (function (){var c = inst_14681;
return ((function (c,inst_14681,inst_14682,state_val_14689,c__9318__auto__){
return (function (err,res){
return cljs.core.println.call(null,"55");
});
;})(c,inst_14681,inst_14682,state_val_14689,c__9318__auto__))
})();
var inst_14684 = inst_14682.readFile("/home/george/1","utf8",inst_14683);
var state_14688__$1 = (function (){var statearr_14690 = state_14688;
(statearr_14690[(7)] = inst_14684);

return statearr_14690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14688__$1,(2),inst_14681);
} else {
if((state_val_14689 === (2))){
var inst_14686 = (state_14688[(2)]);
var state_14688__$1 = state_14688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14688__$1,inst_14686);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_14694 = [null,null,null,null,null,null,null,null];
(statearr_14694[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_14694[(1)] = (1));

return statearr_14694;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_14688){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14695){if((e14695 instanceof Object)){
var ex__9301__auto__ = e14695;
var statearr_14696_14698 = state_14688;
(statearr_14696_14698[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14699 = state_14688;
state_14688 = G__14699;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_14688){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_14688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_14697 = f__9319__auto__.call(null);
(statearr_14697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
})());

//# sourceMappingURL=core_test.js.map