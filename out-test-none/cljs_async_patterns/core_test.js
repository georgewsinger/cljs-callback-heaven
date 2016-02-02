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
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293 = (function (meta40294){
this.meta40294 = meta40294;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40295,meta40294__$1){
var self__ = this;
var _40295__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293(meta40294__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40295){
var self__ = this;
var _40295__$1 = this;
return self__.meta40294;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_40422){
var state_val_40423 = (state_40422[(1)]);
if((state_val_40423 === (7))){
var inst_40319 = (state_40422[(7)]);
var inst_40329 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40330 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40331 = cljs.core.List.EMPTY;
var inst_40332 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40333 = cljs.core.cons.call(null,inst_40332,inst_40319);
var inst_40334 = cljs.core._conj.call(null,inst_40331,inst_40333);
var inst_40335 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40336 = cljs.core._conj.call(null,inst_40334,inst_40335);
var inst_40337 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40330,inst_40336,null];
var inst_40338 = cljs.core.PersistentHashMap.fromArrays(inst_40329,inst_40337);
var inst_40339 = cljs.test.do_report.call(null,inst_40338);
var state_40422__$1 = state_40422;
var statearr_40424_40633 = state_40422__$1;
(statearr_40424_40633[(2)] = inst_40339);

(statearr_40424_40633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (20))){
var inst_40395 = (state_40422[(8)]);
var inst_40398 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40399 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40400 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40395);
var inst_40401 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40399,inst_40400,null];
var inst_40402 = cljs.core.PersistentHashMap.fromArrays(inst_40398,inst_40401);
var inst_40403 = cljs.test.do_report.call(null,inst_40402);
var state_40422__$1 = state_40422;
var statearr_40425_40634 = state_40422__$1;
(statearr_40425_40634[(2)] = inst_40403);

(statearr_40425_40634[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (1))){
var inst_40297 = (state_40422[(9)]);
var inst_40299 = (state_40422[(10)]);
var inst_40298 = (state_40422[(11)]);
var inst_40297__$1 = cljs.core.async.chan.call(null,(1));
var inst_40298__$1 = cljs.core.async.chan.call(null,(1));
var inst_40299__$1 = cljs.core.async.chan.call(null,(1));
var inst_40300 = cljs_async_patterns.core._GT_1.call(null,inst_40297__$1);
var inst_40301 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_40300);
var inst_40302 = cljs_async_patterns.core._GT_1.call(null,inst_40298__$1);
var inst_40303 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_40302);
var inst_40304 = cljs_async_patterns.core._GT_1.call(null,inst_40299__$1,"ERROR:");
var inst_40305 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_40304);
var state_40422__$1 = (function (){var statearr_40426 = state_40422;
(statearr_40426[(12)] = inst_40305);

(statearr_40426[(9)] = inst_40297__$1);

(statearr_40426[(10)] = inst_40299__$1);

(statearr_40426[(13)] = inst_40303);

(statearr_40426[(11)] = inst_40298__$1);

(statearr_40426[(14)] = inst_40301);

return statearr_40426;
})();
var statearr_40427_40635 = state_40422__$1;
(statearr_40427_40635[(2)] = null);

(statearr_40427_40635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (4))){
var inst_40297 = (state_40422[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40422,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_40315 = cljs.core.List.EMPTY;
var inst_40316 = cljs.core._conj.call(null,inst_40315,"suc");
var state_40422__$1 = (function (){var statearr_40428 = state_40422;
(statearr_40428[(15)] = inst_40316);

return statearr_40428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40422__$1,(5),inst_40297);
} else {
if((state_val_40423 === (15))){
var inst_40358 = (state_40422[(16)]);
var inst_40379 = (state_40422[(2)]);
var state_40422__$1 = (function (){var statearr_40429 = state_40422;
(statearr_40429[(17)] = inst_40379);

return statearr_40429;
})();
var statearr_40430_40636 = state_40422__$1;
(statearr_40430_40636[(2)] = inst_40358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (21))){
var inst_40395 = (state_40422[(8)]);
var inst_40405 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40406 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40407 = cljs.core.List.EMPTY;
var inst_40408 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40409 = cljs.core.cons.call(null,inst_40408,inst_40395);
var inst_40410 = cljs.core._conj.call(null,inst_40407,inst_40409);
var inst_40411 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40412 = cljs.core._conj.call(null,inst_40410,inst_40411);
var inst_40413 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40406,inst_40412,null];
var inst_40414 = cljs.core.PersistentHashMap.fromArrays(inst_40405,inst_40413);
var inst_40415 = cljs.test.do_report.call(null,inst_40414);
var state_40422__$1 = state_40422;
var statearr_40431_40637 = state_40422__$1;
(statearr_40431_40637[(2)] = inst_40415);

(statearr_40431_40637[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (13))){
var inst_40357 = (state_40422[(18)]);
var inst_40360 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40361 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_40362 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40357);
var inst_40363 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40361,inst_40362,null];
var inst_40364 = cljs.core.PersistentHashMap.fromArrays(inst_40360,inst_40363);
var inst_40365 = cljs.test.do_report.call(null,inst_40364);
var state_40422__$1 = state_40422;
var statearr_40432_40638 = state_40422__$1;
(statearr_40432_40638[(2)] = inst_40365);

(statearr_40432_40638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (22))){
var inst_40396 = (state_40422[(19)]);
var inst_40417 = (state_40422[(2)]);
var state_40422__$1 = (function (){var statearr_40433 = state_40422;
(statearr_40433[(20)] = inst_40417);

return statearr_40433;
})();
var statearr_40434_40639 = state_40422__$1;
(statearr_40434_40639[(2)] = inst_40396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (6))){
var inst_40319 = (state_40422[(7)]);
var inst_40322 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40323 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40324 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40319);
var inst_40325 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40323,inst_40324,null];
var inst_40326 = cljs.core.PersistentHashMap.fromArrays(inst_40322,inst_40325);
var inst_40327 = cljs.test.do_report.call(null,inst_40326);
var state_40422__$1 = state_40422;
var statearr_40435_40640 = state_40422__$1;
(statearr_40435_40640[(2)] = inst_40327);

(statearr_40435_40640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (17))){
var inst_40382 = (state_40422[(2)]);
var inst_40383 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40384 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40385 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40384,inst_40382,null];
var inst_40386 = cljs.core.PersistentHashMap.fromArrays(inst_40383,inst_40385);
var inst_40387 = cljs.test.do_report.call(null,inst_40386);
var state_40422__$1 = state_40422;
var statearr_40436_40641 = state_40422__$1;
(statearr_40436_40641[(2)] = inst_40387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (3))){
var inst_40306 = (state_40422[(2)]);
var inst_40307 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40308 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40309 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40308,inst_40306,null];
var inst_40310 = cljs.core.PersistentHashMap.fromArrays(inst_40307,inst_40309);
var inst_40311 = cljs.test.do_report.call(null,inst_40310);
var state_40422__$1 = state_40422;
var statearr_40437_40642 = state_40422__$1;
(statearr_40437_40642[(2)] = inst_40311);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (12))){
var inst_40358 = (state_40422[(16)]);
var inst_40357 = (state_40422[(18)]);
var inst_40354 = (state_40422[(21)]);
var inst_40356 = (state_40422[(2)]);
var inst_40357__$1 = cljs.core._conj.call(null,inst_40354,inst_40356);
var inst_40358__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40357__$1);
var state_40422__$1 = (function (){var statearr_40438 = state_40422;
(statearr_40438[(16)] = inst_40358__$1);

(statearr_40438[(18)] = inst_40357__$1);

return statearr_40438;
})();
if(cljs.core.truth_(inst_40358__$1)){
var statearr_40439_40643 = state_40422__$1;
(statearr_40439_40643[(1)] = (13));

} else {
var statearr_40440_40644 = state_40422__$1;
(statearr_40440_40644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (2))){
var inst_40343 = (state_40422[(2)]);
var state_40422__$1 = (function (){var statearr_40441 = state_40422;
(statearr_40441[(22)] = inst_40343);

return statearr_40441;
})();
var statearr_40442_40645 = state_40422__$1;
(statearr_40442_40645[(2)] = null);

(statearr_40442_40645[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (19))){
var inst_40392 = (state_40422[(23)]);
var inst_40395 = (state_40422[(8)]);
var inst_40396 = (state_40422[(19)]);
var inst_40394 = (state_40422[(2)]);
var inst_40395__$1 = cljs.core._conj.call(null,inst_40392,inst_40394);
var inst_40396__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40395__$1);
var state_40422__$1 = (function (){var statearr_40443 = state_40422;
(statearr_40443[(8)] = inst_40395__$1);

(statearr_40443[(19)] = inst_40396__$1);

return statearr_40443;
})();
if(cljs.core.truth_(inst_40396__$1)){
var statearr_40444_40646 = state_40422__$1;
(statearr_40444_40646[(1)] = (20));

} else {
var statearr_40445_40647 = state_40422__$1;
(statearr_40445_40647[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (11))){
var inst_40298 = (state_40422[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40422,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_40353 = cljs.core.List.EMPTY;
var inst_40354 = cljs.core._conj.call(null,inst_40353,false);
var state_40422__$1 = (function (){var statearr_40446 = state_40422;
(statearr_40446[(21)] = inst_40354);

return statearr_40446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40422__$1,(12),inst_40298);
} else {
if((state_val_40423 === (9))){
var inst_40381 = (state_40422[(2)]);
var state_40422__$1 = (function (){var statearr_40447 = state_40422;
(statearr_40447[(24)] = inst_40381);

return statearr_40447;
})();
var statearr_40448_40648 = state_40422__$1;
(statearr_40448_40648[(2)] = null);

(statearr_40448_40648[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (5))){
var inst_40320 = (state_40422[(25)]);
var inst_40316 = (state_40422[(15)]);
var inst_40319 = (state_40422[(7)]);
var inst_40318 = (state_40422[(2)]);
var inst_40319__$1 = cljs.core._conj.call(null,inst_40316,inst_40318);
var inst_40320__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40319__$1);
var state_40422__$1 = (function (){var statearr_40449 = state_40422;
(statearr_40449[(25)] = inst_40320__$1);

(statearr_40449[(7)] = inst_40319__$1);

return statearr_40449;
})();
if(cljs.core.truth_(inst_40320__$1)){
var statearr_40450_40649 = state_40422__$1;
(statearr_40450_40649[(1)] = (6));

} else {
var statearr_40451_40650 = state_40422__$1;
(statearr_40451_40650[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (14))){
var inst_40357 = (state_40422[(18)]);
var inst_40367 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40368 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_40369 = cljs.core.List.EMPTY;
var inst_40370 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40371 = cljs.core.cons.call(null,inst_40370,inst_40357);
var inst_40372 = cljs.core._conj.call(null,inst_40369,inst_40371);
var inst_40373 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40374 = cljs.core._conj.call(null,inst_40372,inst_40373);
var inst_40375 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40368,inst_40374,null];
var inst_40376 = cljs.core.PersistentHashMap.fromArrays(inst_40367,inst_40375);
var inst_40377 = cljs.test.do_report.call(null,inst_40376);
var state_40422__$1 = state_40422;
var statearr_40452_40651 = state_40422__$1;
(statearr_40452_40651[(2)] = inst_40377);

(statearr_40452_40651[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (16))){
var inst_40419 = (state_40422[(2)]);
var inst_40420 = done.call(null);
var state_40422__$1 = (function (){var statearr_40453 = state_40422;
(statearr_40453[(26)] = inst_40419);

return statearr_40453;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40422__$1,inst_40420);
} else {
if((state_val_40423 === (10))){
var inst_40344 = (state_40422[(2)]);
var inst_40345 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40346 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_40347 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40346,inst_40344,null];
var inst_40348 = cljs.core.PersistentHashMap.fromArrays(inst_40345,inst_40347);
var inst_40349 = cljs.test.do_report.call(null,inst_40348);
var state_40422__$1 = state_40422;
var statearr_40454_40652 = state_40422__$1;
(statearr_40454_40652[(2)] = inst_40349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40423 === (18))){
var inst_40299 = (state_40422[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40422,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_40391 = cljs.core.List.EMPTY;
var inst_40392 = cljs.core._conj.call(null,inst_40391,"ERROR:");
var state_40422__$1 = (function (){var statearr_40455 = state_40422;
(statearr_40455[(23)] = inst_40392);

return statearr_40455;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40422__$1,(19),inst_40299);
} else {
if((state_val_40423 === (8))){
var inst_40320 = (state_40422[(25)]);
var inst_40341 = (state_40422[(2)]);
var state_40422__$1 = (function (){var statearr_40456 = state_40422;
(statearr_40456[(27)] = inst_40341);

return statearr_40456;
})();
var statearr_40457_40653 = state_40422__$1;
(statearr_40457_40653[(2)] = inst_40320);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422__$1);

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
var statearr_40461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40461[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_40461[(1)] = (1));

return statearr_40461;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_40422){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40462){if((e40462 instanceof Object)){
var ex__9301__auto__ = e40462;
var statearr_40463_40654 = state_40422;
(statearr_40463_40654[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40655 = state_40422;
state_40422 = G__40655;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_40422){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_40422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_40464 = f__9319__auto__.call(null);
(statearr_40464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.prototype.apply = (function (self__,args40296){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args40296)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_40590){
var state_val_40591 = (state_40590[(1)]);
if((state_val_40591 === (7))){
var inst_40487 = (state_40590[(7)]);
var inst_40497 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40498 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40499 = cljs.core.List.EMPTY;
var inst_40500 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40501 = cljs.core.cons.call(null,inst_40500,inst_40487);
var inst_40502 = cljs.core._conj.call(null,inst_40499,inst_40501);
var inst_40503 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40504 = cljs.core._conj.call(null,inst_40502,inst_40503);
var inst_40505 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40498,inst_40504,null];
var inst_40506 = cljs.core.PersistentHashMap.fromArrays(inst_40497,inst_40505);
var inst_40507 = cljs.test.do_report.call(null,inst_40506);
var state_40590__$1 = state_40590;
var statearr_40592_40656 = state_40590__$1;
(statearr_40592_40656[(2)] = inst_40507);

(statearr_40592_40656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (20))){
var inst_40563 = (state_40590[(8)]);
var inst_40566 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40567 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40568 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40563);
var inst_40569 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40567,inst_40568,null];
var inst_40570 = cljs.core.PersistentHashMap.fromArrays(inst_40566,inst_40569);
var inst_40571 = cljs.test.do_report.call(null,inst_40570);
var state_40590__$1 = state_40590;
var statearr_40593_40657 = state_40590__$1;
(statearr_40593_40657[(2)] = inst_40571);

(statearr_40593_40657[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (1))){
var inst_40467 = (state_40590[(9)]);
var inst_40465 = (state_40590[(10)]);
var inst_40466 = (state_40590[(11)]);
var inst_40465__$1 = cljs.core.async.chan.call(null,(1));
var inst_40466__$1 = cljs.core.async.chan.call(null,(1));
var inst_40467__$1 = cljs.core.async.chan.call(null,(1));
var inst_40468 = cljs_async_patterns.core._GT_1.call(null,inst_40465__$1);
var inst_40469 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_40468);
var inst_40470 = cljs_async_patterns.core._GT_1.call(null,inst_40466__$1);
var inst_40471 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_40470);
var inst_40472 = cljs_async_patterns.core._GT_1.call(null,inst_40467__$1,"ERROR:");
var inst_40473 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_40472);
var state_40590__$1 = (function (){var statearr_40594 = state_40590;
(statearr_40594[(12)] = inst_40473);

(statearr_40594[(9)] = inst_40467__$1);

(statearr_40594[(13)] = inst_40471);

(statearr_40594[(10)] = inst_40465__$1);

(statearr_40594[(14)] = inst_40469);

(statearr_40594[(11)] = inst_40466__$1);

return statearr_40594;
})();
var statearr_40595_40658 = state_40590__$1;
(statearr_40595_40658[(2)] = null);

(statearr_40595_40658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (4))){
var inst_40465 = (state_40590[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40590,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_40483 = cljs.core.List.EMPTY;
var inst_40484 = cljs.core._conj.call(null,inst_40483,"suc");
var state_40590__$1 = (function (){var statearr_40596 = state_40590;
(statearr_40596[(15)] = inst_40484);

return statearr_40596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40590__$1,(5),inst_40465);
} else {
if((state_val_40591 === (15))){
var inst_40526 = (state_40590[(16)]);
var inst_40547 = (state_40590[(2)]);
var state_40590__$1 = (function (){var statearr_40597 = state_40590;
(statearr_40597[(17)] = inst_40547);

return statearr_40597;
})();
var statearr_40598_40659 = state_40590__$1;
(statearr_40598_40659[(2)] = inst_40526);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (21))){
var inst_40563 = (state_40590[(8)]);
var inst_40573 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40574 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40575 = cljs.core.List.EMPTY;
var inst_40576 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40577 = cljs.core.cons.call(null,inst_40576,inst_40563);
var inst_40578 = cljs.core._conj.call(null,inst_40575,inst_40577);
var inst_40579 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40580 = cljs.core._conj.call(null,inst_40578,inst_40579);
var inst_40581 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40574,inst_40580,null];
var inst_40582 = cljs.core.PersistentHashMap.fromArrays(inst_40573,inst_40581);
var inst_40583 = cljs.test.do_report.call(null,inst_40582);
var state_40590__$1 = state_40590;
var statearr_40599_40660 = state_40590__$1;
(statearr_40599_40660[(2)] = inst_40583);

(statearr_40599_40660[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (13))){
var inst_40525 = (state_40590[(18)]);
var inst_40528 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40529 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_40530 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40525);
var inst_40531 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40529,inst_40530,null];
var inst_40532 = cljs.core.PersistentHashMap.fromArrays(inst_40528,inst_40531);
var inst_40533 = cljs.test.do_report.call(null,inst_40532);
var state_40590__$1 = state_40590;
var statearr_40600_40661 = state_40590__$1;
(statearr_40600_40661[(2)] = inst_40533);

(statearr_40600_40661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (22))){
var inst_40564 = (state_40590[(19)]);
var inst_40585 = (state_40590[(2)]);
var state_40590__$1 = (function (){var statearr_40601 = state_40590;
(statearr_40601[(20)] = inst_40585);

return statearr_40601;
})();
var statearr_40602_40662 = state_40590__$1;
(statearr_40602_40662[(2)] = inst_40564);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (6))){
var inst_40487 = (state_40590[(7)]);
var inst_40490 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40491 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40492 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40487);
var inst_40493 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40491,inst_40492,null];
var inst_40494 = cljs.core.PersistentHashMap.fromArrays(inst_40490,inst_40493);
var inst_40495 = cljs.test.do_report.call(null,inst_40494);
var state_40590__$1 = state_40590;
var statearr_40603_40663 = state_40590__$1;
(statearr_40603_40663[(2)] = inst_40495);

(statearr_40603_40663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (17))){
var inst_40550 = (state_40590[(2)]);
var inst_40551 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40552 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40553 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40552,inst_40550,null];
var inst_40554 = cljs.core.PersistentHashMap.fromArrays(inst_40551,inst_40553);
var inst_40555 = cljs.test.do_report.call(null,inst_40554);
var state_40590__$1 = state_40590;
var statearr_40604_40664 = state_40590__$1;
(statearr_40604_40664[(2)] = inst_40555);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (3))){
var inst_40474 = (state_40590[(2)]);
var inst_40475 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40476 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40477 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40476,inst_40474,null];
var inst_40478 = cljs.core.PersistentHashMap.fromArrays(inst_40475,inst_40477);
var inst_40479 = cljs.test.do_report.call(null,inst_40478);
var state_40590__$1 = state_40590;
var statearr_40605_40665 = state_40590__$1;
(statearr_40605_40665[(2)] = inst_40479);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (12))){
var inst_40526 = (state_40590[(16)]);
var inst_40525 = (state_40590[(18)]);
var inst_40522 = (state_40590[(21)]);
var inst_40524 = (state_40590[(2)]);
var inst_40525__$1 = cljs.core._conj.call(null,inst_40522,inst_40524);
var inst_40526__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40525__$1);
var state_40590__$1 = (function (){var statearr_40606 = state_40590;
(statearr_40606[(16)] = inst_40526__$1);

(statearr_40606[(18)] = inst_40525__$1);

return statearr_40606;
})();
if(cljs.core.truth_(inst_40526__$1)){
var statearr_40607_40666 = state_40590__$1;
(statearr_40607_40666[(1)] = (13));

} else {
var statearr_40608_40667 = state_40590__$1;
(statearr_40608_40667[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (2))){
var inst_40511 = (state_40590[(2)]);
var state_40590__$1 = (function (){var statearr_40609 = state_40590;
(statearr_40609[(22)] = inst_40511);

return statearr_40609;
})();
var statearr_40610_40668 = state_40590__$1;
(statearr_40610_40668[(2)] = null);

(statearr_40610_40668[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (19))){
var inst_40563 = (state_40590[(8)]);
var inst_40560 = (state_40590[(23)]);
var inst_40564 = (state_40590[(19)]);
var inst_40562 = (state_40590[(2)]);
var inst_40563__$1 = cljs.core._conj.call(null,inst_40560,inst_40562);
var inst_40564__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40563__$1);
var state_40590__$1 = (function (){var statearr_40611 = state_40590;
(statearr_40611[(8)] = inst_40563__$1);

(statearr_40611[(19)] = inst_40564__$1);

return statearr_40611;
})();
if(cljs.core.truth_(inst_40564__$1)){
var statearr_40612_40669 = state_40590__$1;
(statearr_40612_40669[(1)] = (20));

} else {
var statearr_40613_40670 = state_40590__$1;
(statearr_40613_40670[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (11))){
var inst_40466 = (state_40590[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40590,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_40521 = cljs.core.List.EMPTY;
var inst_40522 = cljs.core._conj.call(null,inst_40521,false);
var state_40590__$1 = (function (){var statearr_40614 = state_40590;
(statearr_40614[(21)] = inst_40522);

return statearr_40614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40590__$1,(12),inst_40466);
} else {
if((state_val_40591 === (9))){
var inst_40549 = (state_40590[(2)]);
var state_40590__$1 = (function (){var statearr_40615 = state_40590;
(statearr_40615[(24)] = inst_40549);

return statearr_40615;
})();
var statearr_40616_40671 = state_40590__$1;
(statearr_40616_40671[(2)] = null);

(statearr_40616_40671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (5))){
var inst_40488 = (state_40590[(25)]);
var inst_40484 = (state_40590[(15)]);
var inst_40487 = (state_40590[(7)]);
var inst_40486 = (state_40590[(2)]);
var inst_40487__$1 = cljs.core._conj.call(null,inst_40484,inst_40486);
var inst_40488__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40487__$1);
var state_40590__$1 = (function (){var statearr_40617 = state_40590;
(statearr_40617[(25)] = inst_40488__$1);

(statearr_40617[(7)] = inst_40487__$1);

return statearr_40617;
})();
if(cljs.core.truth_(inst_40488__$1)){
var statearr_40618_40672 = state_40590__$1;
(statearr_40618_40672[(1)] = (6));

} else {
var statearr_40619_40673 = state_40590__$1;
(statearr_40619_40673[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (14))){
var inst_40525 = (state_40590[(18)]);
var inst_40535 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40536 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_40537 = cljs.core.List.EMPTY;
var inst_40538 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40539 = cljs.core.cons.call(null,inst_40538,inst_40525);
var inst_40540 = cljs.core._conj.call(null,inst_40537,inst_40539);
var inst_40541 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40542 = cljs.core._conj.call(null,inst_40540,inst_40541);
var inst_40543 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40536,inst_40542,null];
var inst_40544 = cljs.core.PersistentHashMap.fromArrays(inst_40535,inst_40543);
var inst_40545 = cljs.test.do_report.call(null,inst_40544);
var state_40590__$1 = state_40590;
var statearr_40620_40674 = state_40590__$1;
(statearr_40620_40674[(2)] = inst_40545);

(statearr_40620_40674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (16))){
var inst_40587 = (state_40590[(2)]);
var inst_40588 = done.call(null);
var state_40590__$1 = (function (){var statearr_40621 = state_40590;
(statearr_40621[(26)] = inst_40587);

return statearr_40621;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40590__$1,inst_40588);
} else {
if((state_val_40591 === (10))){
var inst_40512 = (state_40590[(2)]);
var inst_40513 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40514 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_40515 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40514,inst_40512,null];
var inst_40516 = cljs.core.PersistentHashMap.fromArrays(inst_40513,inst_40515);
var inst_40517 = cljs.test.do_report.call(null,inst_40516);
var state_40590__$1 = state_40590;
var statearr_40622_40675 = state_40590__$1;
(statearr_40622_40675[(2)] = inst_40517);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40591 === (18))){
var inst_40467 = (state_40590[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40590,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_40559 = cljs.core.List.EMPTY;
var inst_40560 = cljs.core._conj.call(null,inst_40559,"ERROR:");
var state_40590__$1 = (function (){var statearr_40623 = state_40590;
(statearr_40623[(23)] = inst_40560);

return statearr_40623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40590__$1,(19),inst_40467);
} else {
if((state_val_40591 === (8))){
var inst_40488 = (state_40590[(25)]);
var inst_40509 = (state_40590[(2)]);
var state_40590__$1 = (function (){var statearr_40624 = state_40590;
(statearr_40624[(27)] = inst_40509);

return statearr_40624;
})();
var statearr_40625_40676 = state_40590__$1;
(statearr_40625_40676[(2)] = inst_40488);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590__$1);

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
var statearr_40629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40629[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_40629[(1)] = (1));

return statearr_40629;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_40590){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40630){if((e40630 instanceof Object)){
var ex__9301__auto__ = e40630;
var statearr_40631_40677 = state_40590;
(statearr_40631_40677[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40678 = state_40590;
state_40590 = G__40678;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_40590){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_40590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40632 = f__9319__auto__.call(null);
(statearr_40632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40294","meta40294",820257881,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test40293";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test40293");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test40293 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test40293(meta40294){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293(meta40294));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40293(null));
});

cljs_async_patterns.core_test._GT_1_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"test/cljs_async_patterns/core_test.cljs",17,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT_2_test = (function cljs_async_patterns$core_test$_GT_2_test(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT_2_test.cljs$lang$var);
});
cljs_async_patterns.core_test._GT_2_test.cljs$lang$test = (function (){
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679 = (function (meta40680){
this.meta40680 = meta40680;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40681,meta40680__$1){
var self__ = this;
var _40681__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679(meta40680__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40681){
var self__ = this;
var _40681__$1 = this;
return self__.meta40680;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_40890){
var state_val_40891 = (state_40890[(1)]);
if((state_val_40891 === (7))){
var inst_40711 = (state_40890[(7)]);
var inst_40721 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40722 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40723 = cljs.core.List.EMPTY;
var inst_40724 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40725 = cljs.core.cons.call(null,inst_40724,inst_40711);
var inst_40726 = cljs.core._conj.call(null,inst_40723,inst_40725);
var inst_40727 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40728 = cljs.core._conj.call(null,inst_40726,inst_40727);
var inst_40729 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40722,inst_40728,null];
var inst_40730 = cljs.core.PersistentHashMap.fromArrays(inst_40721,inst_40729);
var inst_40731 = cljs.test.do_report.call(null,inst_40730);
var state_40890__$1 = state_40890;
var statearr_40892_41227 = state_40890__$1;
(statearr_40892_41227[(2)] = inst_40731);

(statearr_40892_41227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (20))){
var inst_40787 = (state_40890[(8)]);
var inst_40790 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40791 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40792 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40787);
var inst_40793 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40791,inst_40792,null];
var inst_40794 = cljs.core.PersistentHashMap.fromArrays(inst_40790,inst_40793);
var inst_40795 = cljs.test.do_report.call(null,inst_40794);
var state_40890__$1 = state_40890;
var statearr_40893_41228 = state_40890__$1;
(statearr_40893_41228[(2)] = inst_40795);

(statearr_40893_41228[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (27))){
var inst_40825 = (state_40890[(9)]);
var inst_40828 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40829 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_40830 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40825);
var inst_40831 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40829,inst_40830,null];
var inst_40832 = cljs.core.PersistentHashMap.fromArrays(inst_40828,inst_40831);
var inst_40833 = cljs.test.do_report.call(null,inst_40832);
var state_40890__$1 = state_40890;
var statearr_40894_41229 = state_40890__$1;
(statearr_40894_41229[(2)] = inst_40833);

(statearr_40894_41229[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (1))){
var inst_40684 = (state_40890[(10)]);
var inst_40685 = (state_40890[(11)]);
var inst_40687 = (state_40890[(12)]);
var inst_40683 = (state_40890[(13)]);
var inst_40686 = (state_40890[(14)]);
var inst_40683__$1 = cljs.core.async.chan.call(null,(1));
var inst_40684__$1 = cljs.core.async.chan.call(null,(1));
var inst_40685__$1 = cljs.core.async.chan.call(null,(1));
var inst_40686__$1 = cljs.core.async.chan.call(null,(1));
var inst_40687__$1 = cljs.core.async.chan.call(null,(1));
var inst_40688 = cljs_async_patterns.core._GT_2.call(null,inst_40683__$1);
var inst_40689 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_40688);
var inst_40690 = cljs_async_patterns.core._GT_2.call(null,inst_40684__$1);
var inst_40691 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_40690);
var inst_40692 = cljs_async_patterns.core._GT_2.call(null,inst_40685__$1,"ERROR:");
var inst_40693 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_40692);
var inst_40694 = cljs_async_patterns.core._GT_2.call(null,inst_40686__$1);
var inst_40695 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_40694);
var inst_40696 = cljs_async_patterns.core._GT_2.call(null,inst_40687__$1,"ERROR:");
var inst_40697 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_40696);
var state_40890__$1 = (function (){var statearr_40895 = state_40890;
(statearr_40895[(15)] = inst_40689);

(statearr_40895[(16)] = inst_40693);

(statearr_40895[(10)] = inst_40684__$1);

(statearr_40895[(17)] = inst_40697);

(statearr_40895[(11)] = inst_40685__$1);

(statearr_40895[(18)] = inst_40691);

(statearr_40895[(19)] = inst_40695);

(statearr_40895[(12)] = inst_40687__$1);

(statearr_40895[(13)] = inst_40683__$1);

(statearr_40895[(14)] = inst_40686__$1);

return statearr_40895;
})();
var statearr_40896_41230 = state_40890__$1;
(statearr_40896_41230[(2)] = null);

(statearr_40896_41230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (24))){
var inst_40812 = (state_40890[(2)]);
var inst_40813 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40814 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_40815 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40814,inst_40812,null];
var inst_40816 = cljs.core.PersistentHashMap.fromArrays(inst_40813,inst_40815);
var inst_40817 = cljs.test.do_report.call(null,inst_40816);
var state_40890__$1 = state_40890;
var statearr_40897_41231 = state_40890__$1;
(statearr_40897_41231[(2)] = inst_40817);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (4))){
var inst_40683 = (state_40890[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40890,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_40707 = cljs.core.List.EMPTY;
var inst_40708 = cljs.core._conj.call(null,inst_40707,"suc");
var state_40890__$1 = (function (){var statearr_40898 = state_40890;
(statearr_40898[(20)] = inst_40708);

return statearr_40898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40890__$1,(5),inst_40683);
} else {
if((state_val_40891 === (15))){
var inst_40750 = (state_40890[(21)]);
var inst_40771 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40899 = state_40890;
(statearr_40899[(22)] = inst_40771);

return statearr_40899;
})();
var statearr_40900_41232 = state_40890__$1;
(statearr_40900_41232[(2)] = inst_40750);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (21))){
var inst_40787 = (state_40890[(8)]);
var inst_40797 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40798 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40799 = cljs.core.List.EMPTY;
var inst_40800 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40801 = cljs.core.cons.call(null,inst_40800,inst_40787);
var inst_40802 = cljs.core._conj.call(null,inst_40799,inst_40801);
var inst_40803 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40804 = cljs.core._conj.call(null,inst_40802,inst_40803);
var inst_40805 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40798,inst_40804,null];
var inst_40806 = cljs.core.PersistentHashMap.fromArrays(inst_40797,inst_40805);
var inst_40807 = cljs.test.do_report.call(null,inst_40806);
var state_40890__$1 = state_40890;
var statearr_40901_41233 = state_40890__$1;
(statearr_40901_41233[(2)] = inst_40807);

(statearr_40901_41233[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (31))){
var inst_40850 = (state_40890[(2)]);
var inst_40851 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40852 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_40853 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40852,inst_40850,null];
var inst_40854 = cljs.core.PersistentHashMap.fromArrays(inst_40851,inst_40853);
var inst_40855 = cljs.test.do_report.call(null,inst_40854);
var state_40890__$1 = state_40890;
var statearr_40902_41234 = state_40890__$1;
(statearr_40902_41234[(2)] = inst_40855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (32))){
var inst_40687 = (state_40890[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40890,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_40859 = cljs.core.List.EMPTY;
var inst_40860 = cljs.core._conj.call(null,inst_40859,"suc");
var state_40890__$1 = (function (){var statearr_40903 = state_40890;
(statearr_40903[(23)] = inst_40860);

return statearr_40903;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40890__$1,(33),inst_40687);
} else {
if((state_val_40891 === (33))){
var inst_40864 = (state_40890[(24)]);
var inst_40860 = (state_40890[(23)]);
var inst_40863 = (state_40890[(25)]);
var inst_40862 = (state_40890[(2)]);
var inst_40863__$1 = cljs.core._conj.call(null,inst_40860,inst_40862);
var inst_40864__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40863__$1);
var state_40890__$1 = (function (){var statearr_40904 = state_40890;
(statearr_40904[(24)] = inst_40864__$1);

(statearr_40904[(25)] = inst_40863__$1);

return statearr_40904;
})();
if(cljs.core.truth_(inst_40864__$1)){
var statearr_40905_41235 = state_40890__$1;
(statearr_40905_41235[(1)] = (34));

} else {
var statearr_40906_41236 = state_40890__$1;
(statearr_40906_41236[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (13))){
var inst_40749 = (state_40890[(26)]);
var inst_40752 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40753 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_40754 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40749);
var inst_40755 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40753,inst_40754,null];
var inst_40756 = cljs.core.PersistentHashMap.fromArrays(inst_40752,inst_40755);
var inst_40757 = cljs.test.do_report.call(null,inst_40756);
var state_40890__$1 = state_40890;
var statearr_40907_41237 = state_40890__$1;
(statearr_40907_41237[(2)] = inst_40757);

(statearr_40907_41237[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (22))){
var inst_40788 = (state_40890[(27)]);
var inst_40809 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40908 = state_40890;
(statearr_40908[(28)] = inst_40809);

return statearr_40908;
})();
var statearr_40909_41238 = state_40890__$1;
(statearr_40909_41238[(2)] = inst_40788);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (36))){
var inst_40864 = (state_40890[(24)]);
var inst_40885 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40910 = state_40890;
(statearr_40910[(29)] = inst_40885);

return statearr_40910;
})();
var statearr_40911_41239 = state_40890__$1;
(statearr_40911_41239[(2)] = inst_40864);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (29))){
var inst_40826 = (state_40890[(30)]);
var inst_40847 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40912 = state_40890;
(statearr_40912[(31)] = inst_40847);

return statearr_40912;
})();
var statearr_40913_41240 = state_40890__$1;
(statearr_40913_41240[(2)] = inst_40826);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (6))){
var inst_40711 = (state_40890[(7)]);
var inst_40714 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40715 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40716 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40711);
var inst_40717 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40715,inst_40716,null];
var inst_40718 = cljs.core.PersistentHashMap.fromArrays(inst_40714,inst_40717);
var inst_40719 = cljs.test.do_report.call(null,inst_40718);
var state_40890__$1 = state_40890;
var statearr_40914_41241 = state_40890__$1;
(statearr_40914_41241[(2)] = inst_40719);

(statearr_40914_41241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (28))){
var inst_40825 = (state_40890[(9)]);
var inst_40835 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40836 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_40837 = cljs.core.List.EMPTY;
var inst_40838 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40839 = cljs.core.cons.call(null,inst_40838,inst_40825);
var inst_40840 = cljs.core._conj.call(null,inst_40837,inst_40839);
var inst_40841 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40842 = cljs.core._conj.call(null,inst_40840,inst_40841);
var inst_40843 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40836,inst_40842,null];
var inst_40844 = cljs.core.PersistentHashMap.fromArrays(inst_40835,inst_40843);
var inst_40845 = cljs.test.do_report.call(null,inst_40844);
var state_40890__$1 = state_40890;
var statearr_40915_41242 = state_40890__$1;
(statearr_40915_41242[(2)] = inst_40845);

(statearr_40915_41242[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (25))){
var inst_40686 = (state_40890[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40890,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_40821 = cljs.core.List.EMPTY;
var inst_40822 = cljs.core._conj.call(null,inst_40821,"suc");
var state_40890__$1 = (function (){var statearr_40916 = state_40890;
(statearr_40916[(32)] = inst_40822);

return statearr_40916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40890__$1,(26),inst_40686);
} else {
if((state_val_40891 === (34))){
var inst_40863 = (state_40890[(25)]);
var inst_40866 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40867 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_40868 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40863);
var inst_40869 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40867,inst_40868,null];
var inst_40870 = cljs.core.PersistentHashMap.fromArrays(inst_40866,inst_40869);
var inst_40871 = cljs.test.do_report.call(null,inst_40870);
var state_40890__$1 = state_40890;
var statearr_40917_41243 = state_40890__$1;
(statearr_40917_41243[(2)] = inst_40871);

(statearr_40917_41243[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (17))){
var inst_40774 = (state_40890[(2)]);
var inst_40775 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40776 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_40777 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40776,inst_40774,null];
var inst_40778 = cljs.core.PersistentHashMap.fromArrays(inst_40775,inst_40777);
var inst_40779 = cljs.test.do_report.call(null,inst_40778);
var state_40890__$1 = state_40890;
var statearr_40918_41244 = state_40890__$1;
(statearr_40918_41244[(2)] = inst_40779);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (3))){
var inst_40698 = (state_40890[(2)]);
var inst_40699 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40700 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40701 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40700,inst_40698,null];
var inst_40702 = cljs.core.PersistentHashMap.fromArrays(inst_40699,inst_40701);
var inst_40703 = cljs.test.do_report.call(null,inst_40702);
var state_40890__$1 = state_40890;
var statearr_40919_41245 = state_40890__$1;
(statearr_40919_41245[(2)] = inst_40703);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (12))){
var inst_40749 = (state_40890[(26)]);
var inst_40750 = (state_40890[(21)]);
var inst_40746 = (state_40890[(33)]);
var inst_40748 = (state_40890[(2)]);
var inst_40749__$1 = cljs.core._conj.call(null,inst_40746,inst_40748);
var inst_40750__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40749__$1);
var state_40890__$1 = (function (){var statearr_40920 = state_40890;
(statearr_40920[(26)] = inst_40749__$1);

(statearr_40920[(21)] = inst_40750__$1);

return statearr_40920;
})();
if(cljs.core.truth_(inst_40750__$1)){
var statearr_40921_41246 = state_40890__$1;
(statearr_40921_41246[(1)] = (13));

} else {
var statearr_40922_41247 = state_40890__$1;
(statearr_40922_41247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (2))){
var inst_40735 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40923 = state_40890;
(statearr_40923[(34)] = inst_40735);

return statearr_40923;
})();
var statearr_40924_41248 = state_40890__$1;
(statearr_40924_41248[(2)] = null);

(statearr_40924_41248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (23))){
var inst_40849 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40925 = state_40890;
(statearr_40925[(35)] = inst_40849);

return statearr_40925;
})();
var statearr_40926_41249 = state_40890__$1;
(statearr_40926_41249[(2)] = null);

(statearr_40926_41249[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (35))){
var inst_40863 = (state_40890[(25)]);
var inst_40873 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40874 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_40875 = cljs.core.List.EMPTY;
var inst_40876 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40877 = cljs.core.cons.call(null,inst_40876,inst_40863);
var inst_40878 = cljs.core._conj.call(null,inst_40875,inst_40877);
var inst_40879 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40880 = cljs.core._conj.call(null,inst_40878,inst_40879);
var inst_40881 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40874,inst_40880,null];
var inst_40882 = cljs.core.PersistentHashMap.fromArrays(inst_40873,inst_40881);
var inst_40883 = cljs.test.do_report.call(null,inst_40882);
var state_40890__$1 = state_40890;
var statearr_40927_41250 = state_40890__$1;
(statearr_40927_41250[(2)] = inst_40883);

(statearr_40927_41250[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (19))){
var inst_40788 = (state_40890[(27)]);
var inst_40787 = (state_40890[(8)]);
var inst_40784 = (state_40890[(36)]);
var inst_40786 = (state_40890[(2)]);
var inst_40787__$1 = cljs.core._conj.call(null,inst_40784,inst_40786);
var inst_40788__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40787__$1);
var state_40890__$1 = (function (){var statearr_40928 = state_40890;
(statearr_40928[(27)] = inst_40788__$1);

(statearr_40928[(8)] = inst_40787__$1);

return statearr_40928;
})();
if(cljs.core.truth_(inst_40788__$1)){
var statearr_40929_41251 = state_40890__$1;
(statearr_40929_41251[(1)] = (20));

} else {
var statearr_40930_41252 = state_40890__$1;
(statearr_40930_41252[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (11))){
var inst_40684 = (state_40890[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40890,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_40745 = cljs.core.List.EMPTY;
var inst_40746 = cljs.core._conj.call(null,inst_40745,"err");
var state_40890__$1 = (function (){var statearr_40931 = state_40890;
(statearr_40931[(33)] = inst_40746);

return statearr_40931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40890__$1,(12),inst_40684);
} else {
if((state_val_40891 === (9))){
var inst_40773 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40932 = state_40890;
(statearr_40932[(37)] = inst_40773);

return statearr_40932;
})();
var statearr_40933_41253 = state_40890__$1;
(statearr_40933_41253[(2)] = null);

(statearr_40933_41253[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (5))){
var inst_40711 = (state_40890[(7)]);
var inst_40708 = (state_40890[(20)]);
var inst_40712 = (state_40890[(38)]);
var inst_40710 = (state_40890[(2)]);
var inst_40711__$1 = cljs.core._conj.call(null,inst_40708,inst_40710);
var inst_40712__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40711__$1);
var state_40890__$1 = (function (){var statearr_40934 = state_40890;
(statearr_40934[(7)] = inst_40711__$1);

(statearr_40934[(38)] = inst_40712__$1);

return statearr_40934;
})();
if(cljs.core.truth_(inst_40712__$1)){
var statearr_40935_41254 = state_40890__$1;
(statearr_40935_41254[(1)] = (6));

} else {
var statearr_40936_41255 = state_40890__$1;
(statearr_40936_41255[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (14))){
var inst_40749 = (state_40890[(26)]);
var inst_40759 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40760 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_40761 = cljs.core.List.EMPTY;
var inst_40762 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40763 = cljs.core.cons.call(null,inst_40762,inst_40749);
var inst_40764 = cljs.core._conj.call(null,inst_40761,inst_40763);
var inst_40765 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_40766 = cljs.core._conj.call(null,inst_40764,inst_40765);
var inst_40767 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40760,inst_40766,null];
var inst_40768 = cljs.core.PersistentHashMap.fromArrays(inst_40759,inst_40767);
var inst_40769 = cljs.test.do_report.call(null,inst_40768);
var state_40890__$1 = state_40890;
var statearr_40937_41256 = state_40890__$1;
(statearr_40937_41256[(2)] = inst_40769);

(statearr_40937_41256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (26))){
var inst_40826 = (state_40890[(30)]);
var inst_40822 = (state_40890[(32)]);
var inst_40825 = (state_40890[(9)]);
var inst_40824 = (state_40890[(2)]);
var inst_40825__$1 = cljs.core._conj.call(null,inst_40822,inst_40824);
var inst_40826__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40825__$1);
var state_40890__$1 = (function (){var statearr_40938 = state_40890;
(statearr_40938[(30)] = inst_40826__$1);

(statearr_40938[(9)] = inst_40825__$1);

return statearr_40938;
})();
if(cljs.core.truth_(inst_40826__$1)){
var statearr_40939_41257 = state_40890__$1;
(statearr_40939_41257[(1)] = (27));

} else {
var statearr_40940_41258 = state_40890__$1;
(statearr_40940_41258[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (16))){
var inst_40811 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40941 = state_40890;
(statearr_40941[(39)] = inst_40811);

return statearr_40941;
})();
var statearr_40942_41259 = state_40890__$1;
(statearr_40942_41259[(2)] = null);

(statearr_40942_41259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (30))){
var inst_40887 = (state_40890[(2)]);
var inst_40888 = done.call(null);
var state_40890__$1 = (function (){var statearr_40943 = state_40890;
(statearr_40943[(40)] = inst_40887);

return statearr_40943;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40890__$1,inst_40888);
} else {
if((state_val_40891 === (10))){
var inst_40736 = (state_40890[(2)]);
var inst_40737 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40738 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_40739 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40738,inst_40736,null];
var inst_40740 = cljs.core.PersistentHashMap.fromArrays(inst_40737,inst_40739);
var inst_40741 = cljs.test.do_report.call(null,inst_40740);
var state_40890__$1 = state_40890;
var statearr_40944_41260 = state_40890__$1;
(statearr_40944_41260[(2)] = inst_40741);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40891 === (18))){
var inst_40685 = (state_40890[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40890,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_40783 = cljs.core.List.EMPTY;
var inst_40784 = cljs.core._conj.call(null,inst_40783,"ERROR:");
var state_40890__$1 = (function (){var statearr_40945 = state_40890;
(statearr_40945[(36)] = inst_40784);

return statearr_40945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40890__$1,(19),inst_40685);
} else {
if((state_val_40891 === (8))){
var inst_40712 = (state_40890[(38)]);
var inst_40733 = (state_40890[(2)]);
var state_40890__$1 = (function (){var statearr_40946 = state_40890;
(statearr_40946[(41)] = inst_40733);

return statearr_40946;
})();
var statearr_40947_41261 = state_40890__$1;
(statearr_40947_41261[(2)] = inst_40712);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890__$1);

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
var statearr_40951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40951[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_40951[(1)] = (1));

return statearr_40951;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_40890){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40952){if((e40952 instanceof Object)){
var ex__9301__auto__ = e40952;
var statearr_40953_41262 = state_40890;
(statearr_40953_41262[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41263 = state_40890;
state_40890 = G__41263;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_40890){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_40890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_40954 = f__9319__auto__.call(null);
(statearr_40954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.prototype.apply = (function (self__,args40682){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args40682)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_41162){
var state_val_41163 = (state_41162[(1)]);
if((state_val_41163 === (7))){
var inst_40983 = (state_41162[(7)]);
var inst_40993 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40994 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40995 = cljs.core.List.EMPTY;
var inst_40996 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_40997 = cljs.core.cons.call(null,inst_40996,inst_40983);
var inst_40998 = cljs.core._conj.call(null,inst_40995,inst_40997);
var inst_40999 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41000 = cljs.core._conj.call(null,inst_40998,inst_40999);
var inst_41001 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_40994,inst_41000,null];
var inst_41002 = cljs.core.PersistentHashMap.fromArrays(inst_40993,inst_41001);
var inst_41003 = cljs.test.do_report.call(null,inst_41002);
var state_41162__$1 = state_41162;
var statearr_41164_41264 = state_41162__$1;
(statearr_41164_41264[(2)] = inst_41003);

(statearr_41164_41264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (20))){
var inst_41059 = (state_41162[(8)]);
var inst_41062 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41063 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_41064 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41059);
var inst_41065 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41063,inst_41064,null];
var inst_41066 = cljs.core.PersistentHashMap.fromArrays(inst_41062,inst_41065);
var inst_41067 = cljs.test.do_report.call(null,inst_41066);
var state_41162__$1 = state_41162;
var statearr_41165_41265 = state_41162__$1;
(statearr_41165_41265[(2)] = inst_41067);

(statearr_41165_41265[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (27))){
var inst_41097 = (state_41162[(9)]);
var inst_41100 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41101 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_41102 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41097);
var inst_41103 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41101,inst_41102,null];
var inst_41104 = cljs.core.PersistentHashMap.fromArrays(inst_41100,inst_41103);
var inst_41105 = cljs.test.do_report.call(null,inst_41104);
var state_41162__$1 = state_41162;
var statearr_41166_41266 = state_41162__$1;
(statearr_41166_41266[(2)] = inst_41105);

(statearr_41166_41266[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (1))){
var inst_40955 = (state_41162[(10)]);
var inst_40957 = (state_41162[(11)]);
var inst_40958 = (state_41162[(12)]);
var inst_40959 = (state_41162[(13)]);
var inst_40956 = (state_41162[(14)]);
var inst_40955__$1 = cljs.core.async.chan.call(null,(1));
var inst_40956__$1 = cljs.core.async.chan.call(null,(1));
var inst_40957__$1 = cljs.core.async.chan.call(null,(1));
var inst_40958__$1 = cljs.core.async.chan.call(null,(1));
var inst_40959__$1 = cljs.core.async.chan.call(null,(1));
var inst_40960 = cljs_async_patterns.core._GT_2.call(null,inst_40955__$1);
var inst_40961 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_40960);
var inst_40962 = cljs_async_patterns.core._GT_2.call(null,inst_40956__$1);
var inst_40963 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_40962);
var inst_40964 = cljs_async_patterns.core._GT_2.call(null,inst_40957__$1,"ERROR:");
var inst_40965 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_40964);
var inst_40966 = cljs_async_patterns.core._GT_2.call(null,inst_40958__$1);
var inst_40967 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_40966);
var inst_40968 = cljs_async_patterns.core._GT_2.call(null,inst_40959__$1,"ERROR:");
var inst_40969 = cljs_async_patterns.core_test.async_2_saturated.call(null,"sat",inst_40968);
var state_41162__$1 = (function (){var statearr_41167 = state_41162;
(statearr_41167[(10)] = inst_40955__$1);

(statearr_41167[(15)] = inst_40965);

(statearr_41167[(11)] = inst_40957__$1);

(statearr_41167[(12)] = inst_40958__$1);

(statearr_41167[(16)] = inst_40961);

(statearr_41167[(17)] = inst_40969);

(statearr_41167[(18)] = inst_40967);

(statearr_41167[(13)] = inst_40959__$1);

(statearr_41167[(14)] = inst_40956__$1);

(statearr_41167[(19)] = inst_40963);

return statearr_41167;
})();
var statearr_41168_41267 = state_41162__$1;
(statearr_41168_41267[(2)] = null);

(statearr_41168_41267[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (24))){
var inst_41084 = (state_41162[(2)]);
var inst_41085 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41086 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_41087 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41086,inst_41084,null];
var inst_41088 = cljs.core.PersistentHashMap.fromArrays(inst_41085,inst_41087);
var inst_41089 = cljs.test.do_report.call(null,inst_41088);
var state_41162__$1 = state_41162;
var statearr_41169_41268 = state_41162__$1;
(statearr_41169_41268[(2)] = inst_41089);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (4))){
var inst_40955 = (state_41162[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41162,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_40979 = cljs.core.List.EMPTY;
var inst_40980 = cljs.core._conj.call(null,inst_40979,"suc");
var state_41162__$1 = (function (){var statearr_41170 = state_41162;
(statearr_41170[(20)] = inst_40980);

return statearr_41170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41162__$1,(5),inst_40955);
} else {
if((state_val_41163 === (15))){
var inst_41022 = (state_41162[(21)]);
var inst_41043 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41171 = state_41162;
(statearr_41171[(22)] = inst_41043);

return statearr_41171;
})();
var statearr_41172_41269 = state_41162__$1;
(statearr_41172_41269[(2)] = inst_41022);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (21))){
var inst_41059 = (state_41162[(8)]);
var inst_41069 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41070 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_41071 = cljs.core.List.EMPTY;
var inst_41072 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41073 = cljs.core.cons.call(null,inst_41072,inst_41059);
var inst_41074 = cljs.core._conj.call(null,inst_41071,inst_41073);
var inst_41075 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41076 = cljs.core._conj.call(null,inst_41074,inst_41075);
var inst_41077 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41070,inst_41076,null];
var inst_41078 = cljs.core.PersistentHashMap.fromArrays(inst_41069,inst_41077);
var inst_41079 = cljs.test.do_report.call(null,inst_41078);
var state_41162__$1 = state_41162;
var statearr_41173_41270 = state_41162__$1;
(statearr_41173_41270[(2)] = inst_41079);

(statearr_41173_41270[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (31))){
var inst_41122 = (state_41162[(2)]);
var inst_41123 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41124 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_41125 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41124,inst_41122,null];
var inst_41126 = cljs.core.PersistentHashMap.fromArrays(inst_41123,inst_41125);
var inst_41127 = cljs.test.do_report.call(null,inst_41126);
var state_41162__$1 = state_41162;
var statearr_41174_41271 = state_41162__$1;
(statearr_41174_41271[(2)] = inst_41127);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (32))){
var inst_40959 = (state_41162[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41162,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_41131 = cljs.core.List.EMPTY;
var inst_41132 = cljs.core._conj.call(null,inst_41131,"suc");
var state_41162__$1 = (function (){var statearr_41175 = state_41162;
(statearr_41175[(23)] = inst_41132);

return statearr_41175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41162__$1,(33),inst_40959);
} else {
if((state_val_41163 === (33))){
var inst_41132 = (state_41162[(23)]);
var inst_41136 = (state_41162[(24)]);
var inst_41135 = (state_41162[(25)]);
var inst_41134 = (state_41162[(2)]);
var inst_41135__$1 = cljs.core._conj.call(null,inst_41132,inst_41134);
var inst_41136__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41135__$1);
var state_41162__$1 = (function (){var statearr_41176 = state_41162;
(statearr_41176[(24)] = inst_41136__$1);

(statearr_41176[(25)] = inst_41135__$1);

return statearr_41176;
})();
if(cljs.core.truth_(inst_41136__$1)){
var statearr_41177_41272 = state_41162__$1;
(statearr_41177_41272[(1)] = (34));

} else {
var statearr_41178_41273 = state_41162__$1;
(statearr_41178_41273[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (13))){
var inst_41021 = (state_41162[(26)]);
var inst_41024 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41025 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_41026 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41021);
var inst_41027 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41025,inst_41026,null];
var inst_41028 = cljs.core.PersistentHashMap.fromArrays(inst_41024,inst_41027);
var inst_41029 = cljs.test.do_report.call(null,inst_41028);
var state_41162__$1 = state_41162;
var statearr_41179_41274 = state_41162__$1;
(statearr_41179_41274[(2)] = inst_41029);

(statearr_41179_41274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (22))){
var inst_41060 = (state_41162[(27)]);
var inst_41081 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41180 = state_41162;
(statearr_41180[(28)] = inst_41081);

return statearr_41180;
})();
var statearr_41181_41275 = state_41162__$1;
(statearr_41181_41275[(2)] = inst_41060);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (36))){
var inst_41136 = (state_41162[(24)]);
var inst_41157 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41182 = state_41162;
(statearr_41182[(29)] = inst_41157);

return statearr_41182;
})();
var statearr_41183_41276 = state_41162__$1;
(statearr_41183_41276[(2)] = inst_41136);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (29))){
var inst_41098 = (state_41162[(30)]);
var inst_41119 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41184 = state_41162;
(statearr_41184[(31)] = inst_41119);

return statearr_41184;
})();
var statearr_41185_41277 = state_41162__$1;
(statearr_41185_41277[(2)] = inst_41098);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (6))){
var inst_40983 = (state_41162[(7)]);
var inst_40986 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40987 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40988 = cljs.core.cons.call(null,cljs.core._EQ_,inst_40983);
var inst_40989 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_40987,inst_40988,null];
var inst_40990 = cljs.core.PersistentHashMap.fromArrays(inst_40986,inst_40989);
var inst_40991 = cljs.test.do_report.call(null,inst_40990);
var state_41162__$1 = state_41162;
var statearr_41186_41278 = state_41162__$1;
(statearr_41186_41278[(2)] = inst_40991);

(statearr_41186_41278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (28))){
var inst_41097 = (state_41162[(9)]);
var inst_41107 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41108 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"suc");
var inst_41109 = cljs.core.List.EMPTY;
var inst_41110 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41111 = cljs.core.cons.call(null,inst_41110,inst_41097);
var inst_41112 = cljs.core._conj.call(null,inst_41109,inst_41111);
var inst_41113 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41114 = cljs.core._conj.call(null,inst_41112,inst_41113);
var inst_41115 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41108,inst_41114,null];
var inst_41116 = cljs.core.PersistentHashMap.fromArrays(inst_41107,inst_41115);
var inst_41117 = cljs.test.do_report.call(null,inst_41116);
var state_41162__$1 = state_41162;
var statearr_41187_41279 = state_41162__$1;
(statearr_41187_41279[(2)] = inst_41117);

(statearr_41187_41279[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (25))){
var inst_40958 = (state_41162[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41162,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_41093 = cljs.core.List.EMPTY;
var inst_41094 = cljs.core._conj.call(null,inst_41093,"suc");
var state_41162__$1 = (function (){var statearr_41188 = state_41162;
(statearr_41188[(32)] = inst_41094);

return statearr_41188;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41162__$1,(26),inst_40958);
} else {
if((state_val_41163 === (34))){
var inst_41135 = (state_41162[(25)]);
var inst_41138 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41139 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_41140 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41135);
var inst_41141 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41139,inst_41140,null];
var inst_41142 = cljs.core.PersistentHashMap.fromArrays(inst_41138,inst_41141);
var inst_41143 = cljs.test.do_report.call(null,inst_41142);
var state_41162__$1 = state_41162;
var statearr_41189_41280 = state_41162__$1;
(statearr_41189_41280[(2)] = inst_41143);

(statearr_41189_41280[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (17))){
var inst_41046 = (state_41162[(2)]);
var inst_41047 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41048 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_41049 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41048,inst_41046,null];
var inst_41050 = cljs.core.PersistentHashMap.fromArrays(inst_41047,inst_41049);
var inst_41051 = cljs.test.do_report.call(null,inst_41050);
var state_41162__$1 = state_41162;
var statearr_41190_41281 = state_41162__$1;
(statearr_41190_41281[(2)] = inst_41051);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (3))){
var inst_40970 = (state_41162[(2)]);
var inst_40971 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_40972 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_40973 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_40972,inst_40970,null];
var inst_40974 = cljs.core.PersistentHashMap.fromArrays(inst_40971,inst_40973);
var inst_40975 = cljs.test.do_report.call(null,inst_40974);
var state_41162__$1 = state_41162;
var statearr_41191_41282 = state_41162__$1;
(statearr_41191_41282[(2)] = inst_40975);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (12))){
var inst_41021 = (state_41162[(26)]);
var inst_41018 = (state_41162[(33)]);
var inst_41022 = (state_41162[(21)]);
var inst_41020 = (state_41162[(2)]);
var inst_41021__$1 = cljs.core._conj.call(null,inst_41018,inst_41020);
var inst_41022__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41021__$1);
var state_41162__$1 = (function (){var statearr_41192 = state_41162;
(statearr_41192[(26)] = inst_41021__$1);

(statearr_41192[(21)] = inst_41022__$1);

return statearr_41192;
})();
if(cljs.core.truth_(inst_41022__$1)){
var statearr_41193_41283 = state_41162__$1;
(statearr_41193_41283[(1)] = (13));

} else {
var statearr_41194_41284 = state_41162__$1;
(statearr_41194_41284[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (2))){
var inst_41007 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41195 = state_41162;
(statearr_41195[(34)] = inst_41007);

return statearr_41195;
})();
var statearr_41196_41285 = state_41162__$1;
(statearr_41196_41285[(2)] = null);

(statearr_41196_41285[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (23))){
var inst_41121 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41197 = state_41162;
(statearr_41197[(35)] = inst_41121);

return statearr_41197;
})();
var statearr_41198_41286 = state_41162__$1;
(statearr_41198_41286[(2)] = null);

(statearr_41198_41286[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (35))){
var inst_41135 = (state_41162[(25)]);
var inst_41145 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41146 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"suc");
var inst_41147 = cljs.core.List.EMPTY;
var inst_41148 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41149 = cljs.core.cons.call(null,inst_41148,inst_41135);
var inst_41150 = cljs.core._conj.call(null,inst_41147,inst_41149);
var inst_41151 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41152 = cljs.core._conj.call(null,inst_41150,inst_41151);
var inst_41153 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41146,inst_41152,null];
var inst_41154 = cljs.core.PersistentHashMap.fromArrays(inst_41145,inst_41153);
var inst_41155 = cljs.test.do_report.call(null,inst_41154);
var state_41162__$1 = state_41162;
var statearr_41199_41287 = state_41162__$1;
(statearr_41199_41287[(2)] = inst_41155);

(statearr_41199_41287[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (19))){
var inst_41056 = (state_41162[(36)]);
var inst_41060 = (state_41162[(27)]);
var inst_41059 = (state_41162[(8)]);
var inst_41058 = (state_41162[(2)]);
var inst_41059__$1 = cljs.core._conj.call(null,inst_41056,inst_41058);
var inst_41060__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41059__$1);
var state_41162__$1 = (function (){var statearr_41200 = state_41162;
(statearr_41200[(27)] = inst_41060__$1);

(statearr_41200[(8)] = inst_41059__$1);

return statearr_41200;
})();
if(cljs.core.truth_(inst_41060__$1)){
var statearr_41201_41288 = state_41162__$1;
(statearr_41201_41288[(1)] = (20));

} else {
var statearr_41202_41289 = state_41162__$1;
(statearr_41202_41289[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (11))){
var inst_40956 = (state_41162[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41162,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_41017 = cljs.core.List.EMPTY;
var inst_41018 = cljs.core._conj.call(null,inst_41017,"err");
var state_41162__$1 = (function (){var statearr_41203 = state_41162;
(statearr_41203[(33)] = inst_41018);

return statearr_41203;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41162__$1,(12),inst_40956);
} else {
if((state_val_41163 === (9))){
var inst_41045 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41204 = state_41162;
(statearr_41204[(37)] = inst_41045);

return statearr_41204;
})();
var statearr_41205_41290 = state_41162__$1;
(statearr_41205_41290[(2)] = null);

(statearr_41205_41290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (5))){
var inst_40983 = (state_41162[(7)]);
var inst_40984 = (state_41162[(38)]);
var inst_40980 = (state_41162[(20)]);
var inst_40982 = (state_41162[(2)]);
var inst_40983__$1 = cljs.core._conj.call(null,inst_40980,inst_40982);
var inst_40984__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_40983__$1);
var state_41162__$1 = (function (){var statearr_41206 = state_41162;
(statearr_41206[(7)] = inst_40983__$1);

(statearr_41206[(38)] = inst_40984__$1);

return statearr_41206;
})();
if(cljs.core.truth_(inst_40984__$1)){
var statearr_41207_41291 = state_41162__$1;
(statearr_41207_41291[(1)] = (6));

} else {
var statearr_41208_41292 = state_41162__$1;
(statearr_41208_41292[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (14))){
var inst_41021 = (state_41162[(26)]);
var inst_41031 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41032 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_41033 = cljs.core.List.EMPTY;
var inst_41034 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41035 = cljs.core.cons.call(null,inst_41034,inst_41021);
var inst_41036 = cljs.core._conj.call(null,inst_41033,inst_41035);
var inst_41037 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41038 = cljs.core._conj.call(null,inst_41036,inst_41037);
var inst_41039 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41032,inst_41038,null];
var inst_41040 = cljs.core.PersistentHashMap.fromArrays(inst_41031,inst_41039);
var inst_41041 = cljs.test.do_report.call(null,inst_41040);
var state_41162__$1 = state_41162;
var statearr_41209_41293 = state_41162__$1;
(statearr_41209_41293[(2)] = inst_41041);

(statearr_41209_41293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (26))){
var inst_41094 = (state_41162[(32)]);
var inst_41098 = (state_41162[(30)]);
var inst_41097 = (state_41162[(9)]);
var inst_41096 = (state_41162[(2)]);
var inst_41097__$1 = cljs.core._conj.call(null,inst_41094,inst_41096);
var inst_41098__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41097__$1);
var state_41162__$1 = (function (){var statearr_41210 = state_41162;
(statearr_41210[(30)] = inst_41098__$1);

(statearr_41210[(9)] = inst_41097__$1);

return statearr_41210;
})();
if(cljs.core.truth_(inst_41098__$1)){
var statearr_41211_41294 = state_41162__$1;
(statearr_41211_41294[(1)] = (27));

} else {
var statearr_41212_41295 = state_41162__$1;
(statearr_41212_41295[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (16))){
var inst_41083 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41213 = state_41162;
(statearr_41213[(39)] = inst_41083);

return statearr_41213;
})();
var statearr_41214_41296 = state_41162__$1;
(statearr_41214_41296[(2)] = null);

(statearr_41214_41296[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (30))){
var inst_41159 = (state_41162[(2)]);
var inst_41160 = done.call(null);
var state_41162__$1 = (function (){var statearr_41215 = state_41162;
(statearr_41215[(40)] = inst_41159);

return statearr_41215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41162__$1,inst_41160);
} else {
if((state_val_41163 === (10))){
var inst_41008 = (state_41162[(2)]);
var inst_41009 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41010 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_41011 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41010,inst_41008,null];
var inst_41012 = cljs.core.PersistentHashMap.fromArrays(inst_41009,inst_41011);
var inst_41013 = cljs.test.do_report.call(null,inst_41012);
var state_41162__$1 = state_41162;
var statearr_41216_41297 = state_41162__$1;
(statearr_41216_41297[(2)] = inst_41013);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41163 === (18))){
var inst_40957 = (state_41162[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41162,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_41055 = cljs.core.List.EMPTY;
var inst_41056 = cljs.core._conj.call(null,inst_41055,"ERROR:");
var state_41162__$1 = (function (){var statearr_41217 = state_41162;
(statearr_41217[(36)] = inst_41056);

return statearr_41217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41162__$1,(19),inst_40957);
} else {
if((state_val_41163 === (8))){
var inst_40984 = (state_41162[(38)]);
var inst_41005 = (state_41162[(2)]);
var state_41162__$1 = (function (){var statearr_41218 = state_41162;
(statearr_41218[(41)] = inst_41005);

return statearr_41218;
})();
var statearr_41219_41298 = state_41162__$1;
(statearr_41219_41298[(2)] = inst_40984);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162__$1);

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
var statearr_41223 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41223[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_41223[(1)] = (1));

return statearr_41223;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_41162){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41224){if((e41224 instanceof Object)){
var ex__9301__auto__ = e41224;
var statearr_41225_41299 = state_41162;
(statearr_41225_41299[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41300 = state_41162;
state_41162 = G__41300;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_41162){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_41162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_41226 = f__9319__auto__.call(null);
(statearr_41226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40680","meta40680",103220195,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test40679";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test40679");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test40679 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test40679(meta40680){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679(meta40680));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test40679(null));
});

cljs_async_patterns.core_test._GT_2_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_2_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">2-test","cljs-async-patterns.core-test/>2-test",-296840385,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">2-test",">2-test",418650270,null),"test/cljs_async_patterns/core_test.cljs",17,1,58,58,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_2_test)?cljs_async_patterns.core_test._GT_2_test.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT_3_test = (function cljs_async_patterns$core_test$_GT_3_test(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT_3_test.cljs$lang$var);
});
cljs_async_patterns.core_test._GT_3_test.cljs$lang$test = (function (){
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301 = (function (meta41302){
this.meta41302 = meta41302;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41303,meta41302__$1){
var self__ = this;
var _41303__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301(meta41302__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41303){
var self__ = this;
var _41303__$1 = this;
return self__.meta41302;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_41594){
var state_val_41595 = (state_41594[(1)]);
if((state_val_41595 === (7))){
var inst_41339 = (state_41594[(7)]);
var inst_41349 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41350 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_41351 = cljs.core.List.EMPTY;
var inst_41352 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41353 = cljs.core.cons.call(null,inst_41352,inst_41339);
var inst_41354 = cljs.core._conj.call(null,inst_41351,inst_41353);
var inst_41355 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41356 = cljs.core._conj.call(null,inst_41354,inst_41355);
var inst_41357 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41350,inst_41356,null];
var inst_41358 = cljs.core.PersistentHashMap.fromArrays(inst_41349,inst_41357);
var inst_41359 = cljs.test.do_report.call(null,inst_41358);
var state_41594__$1 = state_41594;
var statearr_41596_42057 = state_41594__$1;
(statearr_41596_42057[(2)] = inst_41359);

(statearr_41596_42057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (20))){
var inst_41415 = (state_41594[(8)]);
var inst_41418 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41419 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_41420 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41415);
var inst_41421 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41419,inst_41420,null];
var inst_41422 = cljs.core.PersistentHashMap.fromArrays(inst_41418,inst_41421);
var inst_41423 = cljs.test.do_report.call(null,inst_41422);
var state_41594__$1 = state_41594;
var statearr_41597_42058 = state_41594__$1;
(statearr_41597_42058[(2)] = inst_41423);

(statearr_41597_42058[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (27))){
var inst_41453 = (state_41594[(9)]);
var inst_41456 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41457 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_41458 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41453);
var inst_41459 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41457,inst_41458,null];
var inst_41460 = cljs.core.PersistentHashMap.fromArrays(inst_41456,inst_41459);
var inst_41461 = cljs.test.do_report.call(null,inst_41460);
var state_41594__$1 = state_41594;
var statearr_41598_42059 = state_41594__$1;
(statearr_41598_42059[(2)] = inst_41461);

(statearr_41598_42059[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (1))){
var inst_41305 = (state_41594[(10)]);
var inst_41308 = (state_41594[(11)]);
var inst_41310 = (state_41594[(12)]);
var inst_41311 = (state_41594[(13)]);
var inst_41307 = (state_41594[(14)]);
var inst_41306 = (state_41594[(15)]);
var inst_41309 = (state_41594[(16)]);
var inst_41305__$1 = cljs.core.async.chan.call(null,(1));
var inst_41306__$1 = cljs.core.async.chan.call(null,(1));
var inst_41307__$1 = cljs.core.async.chan.call(null,(1));
var inst_41308__$1 = cljs.core.async.chan.call(null,(1));
var inst_41309__$1 = cljs.core.async.chan.call(null,(1));
var inst_41310__$1 = cljs.core.async.chan.call(null,(1));
var inst_41311__$1 = cljs.core.async.chan.call(null,(1));
var inst_41312 = cljs_async_patterns.core._GT_3.call(null,inst_41305__$1);
var inst_41313 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_41312);
var inst_41314 = cljs_async_patterns.core._GT_3.call(null,inst_41306__$1);
var inst_41315 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_41314);
var inst_41316 = cljs_async_patterns.core._GT_3.call(null,inst_41307__$1);
var inst_41317 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_41316);
var inst_41318 = cljs_async_patterns.core._GT_3.call(null,inst_41308__$1,"ERROR:");
var inst_41319 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_41318);
var inst_41320 = cljs_async_patterns.core._GT_3.call(null,inst_41309__$1,"ERROR:");
var inst_41321 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_41320);
var inst_41322 = cljs_async_patterns.core._GT_3.call(null,inst_41310__$1);
var inst_41323 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_41322);
var inst_41324 = cljs_async_patterns.core._GT_3.call(null,inst_41311__$1,"ERROR:");
var inst_41325 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_41324);
var state_41594__$1 = (function (){var statearr_41599 = state_41594;
(statearr_41599[(17)] = inst_41315);

(statearr_41599[(18)] = inst_41317);

(statearr_41599[(19)] = inst_41321);

(statearr_41599[(10)] = inst_41305__$1);

(statearr_41599[(20)] = inst_41319);

(statearr_41599[(11)] = inst_41308__$1);

(statearr_41599[(12)] = inst_41310__$1);

(statearr_41599[(21)] = inst_41323);

(statearr_41599[(22)] = inst_41325);

(statearr_41599[(13)] = inst_41311__$1);

(statearr_41599[(14)] = inst_41307__$1);

(statearr_41599[(15)] = inst_41306__$1);

(statearr_41599[(23)] = inst_41313);

(statearr_41599[(16)] = inst_41309__$1);

return statearr_41599;
})();
var statearr_41600_42060 = state_41594__$1;
(statearr_41600_42060[(2)] = null);

(statearr_41600_42060[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (24))){
var inst_41440 = (state_41594[(2)]);
var inst_41441 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41442 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_41443 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41442,inst_41440,null];
var inst_41444 = cljs.core.PersistentHashMap.fromArrays(inst_41441,inst_41443);
var inst_41445 = cljs.test.do_report.call(null,inst_41444);
var state_41594__$1 = state_41594;
var statearr_41601_42061 = state_41594__$1;
(statearr_41601_42061[(2)] = inst_41445);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (39))){
var inst_41310 = (state_41594[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41594,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_41525 = cljs.core.List.EMPTY;
var inst_41526 = cljs.core._conj.call(null,inst_41525,"suc");
var state_41594__$1 = (function (){var statearr_41602 = state_41594;
(statearr_41602[(24)] = inst_41526);

return statearr_41602;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41594__$1,(40),inst_41310);
} else {
if((state_val_41595 === (46))){
var inst_41311 = (state_41594[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41594,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_41563 = cljs.core.List.EMPTY;
var inst_41564 = cljs.core._conj.call(null,inst_41563,"suc");
var state_41594__$1 = (function (){var statearr_41603 = state_41594;
(statearr_41603[(25)] = inst_41564);

return statearr_41603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41594__$1,(47),inst_41311);
} else {
if((state_val_41595 === (4))){
var inst_41305 = (state_41594[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41594,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_41335 = cljs.core.List.EMPTY;
var inst_41336 = cljs.core._conj.call(null,inst_41335,"suc");
var state_41594__$1 = (function (){var statearr_41604 = state_41594;
(statearr_41604[(26)] = inst_41336);

return statearr_41604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41594__$1,(5),inst_41305);
} else {
if((state_val_41595 === (15))){
var inst_41378 = (state_41594[(27)]);
var inst_41399 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41605 = state_41594;
(statearr_41605[(28)] = inst_41399);

return statearr_41605;
})();
var statearr_41606_42062 = state_41594__$1;
(statearr_41606_42062[(2)] = inst_41378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (48))){
var inst_41567 = (state_41594[(29)]);
var inst_41570 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41571 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_41572 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41567);
var inst_41573 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41571,inst_41572,null];
var inst_41574 = cljs.core.PersistentHashMap.fromArrays(inst_41570,inst_41573);
var inst_41575 = cljs.test.do_report.call(null,inst_41574);
var state_41594__$1 = state_41594;
var statearr_41607_42063 = state_41594__$1;
(statearr_41607_42063[(2)] = inst_41575);

(statearr_41607_42063[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (50))){
var inst_41568 = (state_41594[(30)]);
var inst_41589 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41608 = state_41594;
(statearr_41608[(31)] = inst_41589);

return statearr_41608;
})();
var statearr_41609_42064 = state_41594__$1;
(statearr_41609_42064[(2)] = inst_41568);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (21))){
var inst_41415 = (state_41594[(8)]);
var inst_41425 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41426 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_41427 = cljs.core.List.EMPTY;
var inst_41428 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41429 = cljs.core.cons.call(null,inst_41428,inst_41415);
var inst_41430 = cljs.core._conj.call(null,inst_41427,inst_41429);
var inst_41431 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41432 = cljs.core._conj.call(null,inst_41430,inst_41431);
var inst_41433 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41426,inst_41432,null];
var inst_41434 = cljs.core.PersistentHashMap.fromArrays(inst_41425,inst_41433);
var inst_41435 = cljs.test.do_report.call(null,inst_41434);
var state_41594__$1 = state_41594;
var statearr_41610_42065 = state_41594__$1;
(statearr_41610_42065[(2)] = inst_41435);

(statearr_41610_42065[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (31))){
var inst_41478 = (state_41594[(2)]);
var inst_41479 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41480 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_41481 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41480,inst_41478,null];
var inst_41482 = cljs.core.PersistentHashMap.fromArrays(inst_41479,inst_41481);
var inst_41483 = cljs.test.do_report.call(null,inst_41482);
var state_41594__$1 = state_41594;
var statearr_41611_42066 = state_41594__$1;
(statearr_41611_42066[(2)] = inst_41483);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (32))){
var inst_41309 = (state_41594[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41594,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_41487 = cljs.core.List.EMPTY;
var inst_41488 = cljs.core._conj.call(null,inst_41487,"ERROR:");
var state_41594__$1 = (function (){var statearr_41612 = state_41594;
(statearr_41612[(32)] = inst_41488);

return statearr_41612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41594__$1,(33),inst_41309);
} else {
if((state_val_41595 === (40))){
var inst_41529 = (state_41594[(33)]);
var inst_41526 = (state_41594[(24)]);
var inst_41530 = (state_41594[(34)]);
var inst_41528 = (state_41594[(2)]);
var inst_41529__$1 = cljs.core._conj.call(null,inst_41526,inst_41528);
var inst_41530__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41529__$1);
var state_41594__$1 = (function (){var statearr_41613 = state_41594;
(statearr_41613[(33)] = inst_41529__$1);

(statearr_41613[(34)] = inst_41530__$1);

return statearr_41613;
})();
if(cljs.core.truth_(inst_41530__$1)){
var statearr_41614_42067 = state_41594__$1;
(statearr_41614_42067[(1)] = (41));

} else {
var statearr_41615_42068 = state_41594__$1;
(statearr_41615_42068[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (33))){
var inst_41488 = (state_41594[(32)]);
var inst_41491 = (state_41594[(35)]);
var inst_41492 = (state_41594[(36)]);
var inst_41490 = (state_41594[(2)]);
var inst_41491__$1 = cljs.core._conj.call(null,inst_41488,inst_41490);
var inst_41492__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41491__$1);
var state_41594__$1 = (function (){var statearr_41616 = state_41594;
(statearr_41616[(35)] = inst_41491__$1);

(statearr_41616[(36)] = inst_41492__$1);

return statearr_41616;
})();
if(cljs.core.truth_(inst_41492__$1)){
var statearr_41617_42069 = state_41594__$1;
(statearr_41617_42069[(1)] = (34));

} else {
var statearr_41618_42070 = state_41594__$1;
(statearr_41618_42070[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (13))){
var inst_41377 = (state_41594[(37)]);
var inst_41380 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41381 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_41382 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41377);
var inst_41383 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41381,inst_41382,null];
var inst_41384 = cljs.core.PersistentHashMap.fromArrays(inst_41380,inst_41383);
var inst_41385 = cljs.test.do_report.call(null,inst_41384);
var state_41594__$1 = state_41594;
var statearr_41619_42071 = state_41594__$1;
(statearr_41619_42071[(2)] = inst_41385);

(statearr_41619_42071[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (22))){
var inst_41416 = (state_41594[(38)]);
var inst_41437 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41620 = state_41594;
(statearr_41620[(39)] = inst_41437);

return statearr_41620;
})();
var statearr_41621_42072 = state_41594__$1;
(statearr_41621_42072[(2)] = inst_41416);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (36))){
var inst_41492 = (state_41594[(36)]);
var inst_41513 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41622 = state_41594;
(statearr_41622[(40)] = inst_41513);

return statearr_41622;
})();
var statearr_41623_42073 = state_41594__$1;
(statearr_41623_42073[(2)] = inst_41492);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (41))){
var inst_41529 = (state_41594[(33)]);
var inst_41532 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41533 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_41534 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41529);
var inst_41535 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41533,inst_41534,null];
var inst_41536 = cljs.core.PersistentHashMap.fromArrays(inst_41532,inst_41535);
var inst_41537 = cljs.test.do_report.call(null,inst_41536);
var state_41594__$1 = state_41594;
var statearr_41624_42074 = state_41594__$1;
(statearr_41624_42074[(2)] = inst_41537);

(statearr_41624_42074[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (43))){
var inst_41530 = (state_41594[(34)]);
var inst_41551 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41625 = state_41594;
(statearr_41625[(41)] = inst_41551);

return statearr_41625;
})();
var statearr_41626_42075 = state_41594__$1;
(statearr_41626_42075[(2)] = inst_41530);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (29))){
var inst_41454 = (state_41594[(42)]);
var inst_41475 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41627 = state_41594;
(statearr_41627[(43)] = inst_41475);

return statearr_41627;
})();
var statearr_41628_42076 = state_41594__$1;
(statearr_41628_42076[(2)] = inst_41454);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (44))){
var inst_41591 = (state_41594[(2)]);
var inst_41592 = done.call(null);
var state_41594__$1 = (function (){var statearr_41629 = state_41594;
(statearr_41629[(44)] = inst_41591);

return statearr_41629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41594__$1,inst_41592);
} else {
if((state_val_41595 === (6))){
var inst_41339 = (state_41594[(7)]);
var inst_41342 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41343 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_41344 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41339);
var inst_41345 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41343,inst_41344,null];
var inst_41346 = cljs.core.PersistentHashMap.fromArrays(inst_41342,inst_41345);
var inst_41347 = cljs.test.do_report.call(null,inst_41346);
var state_41594__$1 = state_41594;
var statearr_41630_42077 = state_41594__$1;
(statearr_41630_42077[(2)] = inst_41347);

(statearr_41630_42077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (28))){
var inst_41453 = (state_41594[(9)]);
var inst_41463 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41464 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_41465 = cljs.core.List.EMPTY;
var inst_41466 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41467 = cljs.core.cons.call(null,inst_41466,inst_41453);
var inst_41468 = cljs.core._conj.call(null,inst_41465,inst_41467);
var inst_41469 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41470 = cljs.core._conj.call(null,inst_41468,inst_41469);
var inst_41471 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41464,inst_41470,null];
var inst_41472 = cljs.core.PersistentHashMap.fromArrays(inst_41463,inst_41471);
var inst_41473 = cljs.test.do_report.call(null,inst_41472);
var state_41594__$1 = state_41594;
var statearr_41631_42078 = state_41594__$1;
(statearr_41631_42078[(2)] = inst_41473);

(statearr_41631_42078[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (25))){
var inst_41308 = (state_41594[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41594,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_41449 = cljs.core.List.EMPTY;
var inst_41450 = cljs.core._conj.call(null,inst_41449,"ERROR:");
var state_41594__$1 = (function (){var statearr_41632 = state_41594;
(statearr_41632[(45)] = inst_41450);

return statearr_41632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41594__$1,(26),inst_41308);
} else {
if((state_val_41595 === (34))){
var inst_41491 = (state_41594[(35)]);
var inst_41494 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41495 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_41496 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41491);
var inst_41497 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41495,inst_41496,null];
var inst_41498 = cljs.core.PersistentHashMap.fromArrays(inst_41494,inst_41497);
var inst_41499 = cljs.test.do_report.call(null,inst_41498);
var state_41594__$1 = state_41594;
var statearr_41633_42079 = state_41594__$1;
(statearr_41633_42079[(2)] = inst_41499);

(statearr_41633_42079[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (17))){
var inst_41402 = (state_41594[(2)]);
var inst_41403 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41404 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_41405 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41404,inst_41402,null];
var inst_41406 = cljs.core.PersistentHashMap.fromArrays(inst_41403,inst_41405);
var inst_41407 = cljs.test.do_report.call(null,inst_41406);
var state_41594__$1 = state_41594;
var statearr_41634_42080 = state_41594__$1;
(statearr_41634_42080[(2)] = inst_41407);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (3))){
var inst_41326 = (state_41594[(2)]);
var inst_41327 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41328 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_41329 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41328,inst_41326,null];
var inst_41330 = cljs.core.PersistentHashMap.fromArrays(inst_41327,inst_41329);
var inst_41331 = cljs.test.do_report.call(null,inst_41330);
var state_41594__$1 = state_41594;
var statearr_41635_42081 = state_41594__$1;
(statearr_41635_42081[(2)] = inst_41331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (12))){
var inst_41378 = (state_41594[(27)]);
var inst_41374 = (state_41594[(46)]);
var inst_41377 = (state_41594[(37)]);
var inst_41376 = (state_41594[(2)]);
var inst_41377__$1 = cljs.core._conj.call(null,inst_41374,inst_41376);
var inst_41378__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41377__$1);
var state_41594__$1 = (function (){var statearr_41636 = state_41594;
(statearr_41636[(27)] = inst_41378__$1);

(statearr_41636[(37)] = inst_41377__$1);

return statearr_41636;
})();
if(cljs.core.truth_(inst_41378__$1)){
var statearr_41637_42082 = state_41594__$1;
(statearr_41637_42082[(1)] = (13));

} else {
var statearr_41638_42083 = state_41594__$1;
(statearr_41638_42083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (2))){
var inst_41363 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41639 = state_41594;
(statearr_41639[(47)] = inst_41363);

return statearr_41639;
})();
var statearr_41640_42084 = state_41594__$1;
(statearr_41640_42084[(2)] = null);

(statearr_41640_42084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (23))){
var inst_41477 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41641 = state_41594;
(statearr_41641[(48)] = inst_41477);

return statearr_41641;
})();
var statearr_41642_42085 = state_41594__$1;
(statearr_41642_42085[(2)] = null);

(statearr_41642_42085[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (47))){
var inst_41568 = (state_41594[(30)]);
var inst_41564 = (state_41594[(25)]);
var inst_41567 = (state_41594[(29)]);
var inst_41566 = (state_41594[(2)]);
var inst_41567__$1 = cljs.core._conj.call(null,inst_41564,inst_41566);
var inst_41568__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41567__$1);
var state_41594__$1 = (function (){var statearr_41643 = state_41594;
(statearr_41643[(30)] = inst_41568__$1);

(statearr_41643[(29)] = inst_41567__$1);

return statearr_41643;
})();
if(cljs.core.truth_(inst_41568__$1)){
var statearr_41644_42086 = state_41594__$1;
(statearr_41644_42086[(1)] = (48));

} else {
var statearr_41645_42087 = state_41594__$1;
(statearr_41645_42087[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (35))){
var inst_41491 = (state_41594[(35)]);
var inst_41501 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41502 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_41503 = cljs.core.List.EMPTY;
var inst_41504 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41505 = cljs.core.cons.call(null,inst_41504,inst_41491);
var inst_41506 = cljs.core._conj.call(null,inst_41503,inst_41505);
var inst_41507 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41508 = cljs.core._conj.call(null,inst_41506,inst_41507);
var inst_41509 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41502,inst_41508,null];
var inst_41510 = cljs.core.PersistentHashMap.fromArrays(inst_41501,inst_41509);
var inst_41511 = cljs.test.do_report.call(null,inst_41510);
var state_41594__$1 = state_41594;
var statearr_41646_42088 = state_41594__$1;
(statearr_41646_42088[(2)] = inst_41511);

(statearr_41646_42088[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (19))){
var inst_41415 = (state_41594[(8)]);
var inst_41412 = (state_41594[(49)]);
var inst_41416 = (state_41594[(38)]);
var inst_41414 = (state_41594[(2)]);
var inst_41415__$1 = cljs.core._conj.call(null,inst_41412,inst_41414);
var inst_41416__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41415__$1);
var state_41594__$1 = (function (){var statearr_41647 = state_41594;
(statearr_41647[(8)] = inst_41415__$1);

(statearr_41647[(38)] = inst_41416__$1);

return statearr_41647;
})();
if(cljs.core.truth_(inst_41416__$1)){
var statearr_41648_42089 = state_41594__$1;
(statearr_41648_42089[(1)] = (20));

} else {
var statearr_41649_42090 = state_41594__$1;
(statearr_41649_42090[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (11))){
var inst_41306 = (state_41594[(15)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41594,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_41373 = cljs.core.List.EMPTY;
var inst_41374 = cljs.core._conj.call(null,inst_41373,"err1");
var state_41594__$1 = (function (){var statearr_41650 = state_41594;
(statearr_41650[(46)] = inst_41374);

return statearr_41650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41594__$1,(12),inst_41306);
} else {
if((state_val_41595 === (9))){
var inst_41401 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41651 = state_41594;
(statearr_41651[(50)] = inst_41401);

return statearr_41651;
})();
var statearr_41652_42091 = state_41594__$1;
(statearr_41652_42091[(2)] = null);

(statearr_41652_42091[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (5))){
var inst_41336 = (state_41594[(26)]);
var inst_41339 = (state_41594[(7)]);
var inst_41340 = (state_41594[(51)]);
var inst_41338 = (state_41594[(2)]);
var inst_41339__$1 = cljs.core._conj.call(null,inst_41336,inst_41338);
var inst_41340__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41339__$1);
var state_41594__$1 = (function (){var statearr_41653 = state_41594;
(statearr_41653[(7)] = inst_41339__$1);

(statearr_41653[(51)] = inst_41340__$1);

return statearr_41653;
})();
if(cljs.core.truth_(inst_41340__$1)){
var statearr_41654_42092 = state_41594__$1;
(statearr_41654_42092[(1)] = (6));

} else {
var statearr_41655_42093 = state_41594__$1;
(statearr_41655_42093[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (14))){
var inst_41377 = (state_41594[(37)]);
var inst_41387 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41388 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_41389 = cljs.core.List.EMPTY;
var inst_41390 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41391 = cljs.core.cons.call(null,inst_41390,inst_41377);
var inst_41392 = cljs.core._conj.call(null,inst_41389,inst_41391);
var inst_41393 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41394 = cljs.core._conj.call(null,inst_41392,inst_41393);
var inst_41395 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41388,inst_41394,null];
var inst_41396 = cljs.core.PersistentHashMap.fromArrays(inst_41387,inst_41395);
var inst_41397 = cljs.test.do_report.call(null,inst_41396);
var state_41594__$1 = state_41594;
var statearr_41656_42094 = state_41594__$1;
(statearr_41656_42094[(2)] = inst_41397);

(statearr_41656_42094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (45))){
var inst_41554 = (state_41594[(2)]);
var inst_41555 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41556 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_41557 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41556,inst_41554,null];
var inst_41558 = cljs.core.PersistentHashMap.fromArrays(inst_41555,inst_41557);
var inst_41559 = cljs.test.do_report.call(null,inst_41558);
var state_41594__$1 = state_41594;
var statearr_41657_42095 = state_41594__$1;
(statearr_41657_42095[(2)] = inst_41559);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (26))){
var inst_41450 = (state_41594[(45)]);
var inst_41454 = (state_41594[(42)]);
var inst_41453 = (state_41594[(9)]);
var inst_41452 = (state_41594[(2)]);
var inst_41453__$1 = cljs.core._conj.call(null,inst_41450,inst_41452);
var inst_41454__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41453__$1);
var state_41594__$1 = (function (){var statearr_41658 = state_41594;
(statearr_41658[(42)] = inst_41454__$1);

(statearr_41658[(9)] = inst_41453__$1);

return statearr_41658;
})();
if(cljs.core.truth_(inst_41454__$1)){
var statearr_41659_42096 = state_41594__$1;
(statearr_41659_42096[(1)] = (27));

} else {
var statearr_41660_42097 = state_41594__$1;
(statearr_41660_42097[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (16))){
var inst_41439 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41661 = state_41594;
(statearr_41661[(52)] = inst_41439);

return statearr_41661;
})();
var statearr_41662_42098 = state_41594__$1;
(statearr_41662_42098[(2)] = null);

(statearr_41662_42098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (38))){
var inst_41516 = (state_41594[(2)]);
var inst_41517 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41518 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_41519 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41518,inst_41516,null];
var inst_41520 = cljs.core.PersistentHashMap.fromArrays(inst_41517,inst_41519);
var inst_41521 = cljs.test.do_report.call(null,inst_41520);
var state_41594__$1 = state_41594;
var statearr_41663_42099 = state_41594__$1;
(statearr_41663_42099[(2)] = inst_41521);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (30))){
var inst_41515 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41664 = state_41594;
(statearr_41664[(53)] = inst_41515);

return statearr_41664;
})();
var statearr_41665_42100 = state_41594__$1;
(statearr_41665_42100[(2)] = null);

(statearr_41665_42100[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (10))){
var inst_41364 = (state_41594[(2)]);
var inst_41365 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41366 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_41367 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41366,inst_41364,null];
var inst_41368 = cljs.core.PersistentHashMap.fromArrays(inst_41365,inst_41367);
var inst_41369 = cljs.test.do_report.call(null,inst_41368);
var state_41594__$1 = state_41594;
var statearr_41666_42101 = state_41594__$1;
(statearr_41666_42101[(2)] = inst_41369);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (18))){
var inst_41307 = (state_41594[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41594,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_41411 = cljs.core.List.EMPTY;
var inst_41412 = cljs.core._conj.call(null,inst_41411,"err2");
var state_41594__$1 = (function (){var statearr_41667 = state_41594;
(statearr_41667[(49)] = inst_41412);

return statearr_41667;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41594__$1,(19),inst_41307);
} else {
if((state_val_41595 === (42))){
var inst_41529 = (state_41594[(33)]);
var inst_41539 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41540 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_41541 = cljs.core.List.EMPTY;
var inst_41542 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41543 = cljs.core.cons.call(null,inst_41542,inst_41529);
var inst_41544 = cljs.core._conj.call(null,inst_41541,inst_41543);
var inst_41545 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41546 = cljs.core._conj.call(null,inst_41544,inst_41545);
var inst_41547 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41540,inst_41546,null];
var inst_41548 = cljs.core.PersistentHashMap.fromArrays(inst_41539,inst_41547);
var inst_41549 = cljs.test.do_report.call(null,inst_41548);
var state_41594__$1 = state_41594;
var statearr_41668_42102 = state_41594__$1;
(statearr_41668_42102[(2)] = inst_41549);

(statearr_41668_42102[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (37))){
var inst_41553 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41669 = state_41594;
(statearr_41669[(54)] = inst_41553);

return statearr_41669;
})();
var statearr_41670_42103 = state_41594__$1;
(statearr_41670_42103[(2)] = null);

(statearr_41670_42103[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (8))){
var inst_41340 = (state_41594[(51)]);
var inst_41361 = (state_41594[(2)]);
var state_41594__$1 = (function (){var statearr_41671 = state_41594;
(statearr_41671[(55)] = inst_41361);

return statearr_41671;
})();
var statearr_41672_42104 = state_41594__$1;
(statearr_41672_42104[(2)] = inst_41340);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41595 === (49))){
var inst_41567 = (state_41594[(29)]);
var inst_41577 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41578 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_41579 = cljs.core.List.EMPTY;
var inst_41580 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41581 = cljs.core.cons.call(null,inst_41580,inst_41567);
var inst_41582 = cljs.core._conj.call(null,inst_41579,inst_41581);
var inst_41583 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41584 = cljs.core._conj.call(null,inst_41582,inst_41583);
var inst_41585 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41578,inst_41584,null];
var inst_41586 = cljs.core.PersistentHashMap.fromArrays(inst_41577,inst_41585);
var inst_41587 = cljs.test.do_report.call(null,inst_41586);
var state_41594__$1 = state_41594;
var statearr_41673_42105 = state_41594__$1;
(statearr_41673_42105[(2)] = inst_41587);

(statearr_41673_42105[(1)] = (50));


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
var statearr_41677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41677[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_41677[(1)] = (1));

return statearr_41677;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_41594){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e41678){if((e41678 instanceof Object)){
var ex__9301__auto__ = e41678;
var statearr_41679_42106 = state_41594;
(statearr_41679_42106[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42107 = state_41594;
state_41594 = G__42107;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_41594){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_41594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_41680 = f__9319__auto__.call(null);
(statearr_41680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_41680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.prototype.apply = (function (self__,args41304){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args41304)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_41970){
var state_val_41971 = (state_41970[(1)]);
if((state_val_41971 === (7))){
var inst_41715 = (state_41970[(7)]);
var inst_41725 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41726 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_41727 = cljs.core.List.EMPTY;
var inst_41728 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41729 = cljs.core.cons.call(null,inst_41728,inst_41715);
var inst_41730 = cljs.core._conj.call(null,inst_41727,inst_41729);
var inst_41731 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41732 = cljs.core._conj.call(null,inst_41730,inst_41731);
var inst_41733 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41726,inst_41732,null];
var inst_41734 = cljs.core.PersistentHashMap.fromArrays(inst_41725,inst_41733);
var inst_41735 = cljs.test.do_report.call(null,inst_41734);
var state_41970__$1 = state_41970;
var statearr_41972_42108 = state_41970__$1;
(statearr_41972_42108[(2)] = inst_41735);

(statearr_41972_42108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (20))){
var inst_41791 = (state_41970[(8)]);
var inst_41794 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41795 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_41796 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41791);
var inst_41797 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41795,inst_41796,null];
var inst_41798 = cljs.core.PersistentHashMap.fromArrays(inst_41794,inst_41797);
var inst_41799 = cljs.test.do_report.call(null,inst_41798);
var state_41970__$1 = state_41970;
var statearr_41973_42109 = state_41970__$1;
(statearr_41973_42109[(2)] = inst_41799);

(statearr_41973_42109[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (27))){
var inst_41829 = (state_41970[(9)]);
var inst_41832 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41833 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_41834 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41829);
var inst_41835 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41833,inst_41834,null];
var inst_41836 = cljs.core.PersistentHashMap.fromArrays(inst_41832,inst_41835);
var inst_41837 = cljs.test.do_report.call(null,inst_41836);
var state_41970__$1 = state_41970;
var statearr_41974_42110 = state_41970__$1;
(statearr_41974_42110[(2)] = inst_41837);

(statearr_41974_42110[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (1))){
var inst_41684 = (state_41970[(10)]);
var inst_41683 = (state_41970[(11)]);
var inst_41682 = (state_41970[(12)]);
var inst_41687 = (state_41970[(13)]);
var inst_41685 = (state_41970[(14)]);
var inst_41681 = (state_41970[(15)]);
var inst_41686 = (state_41970[(16)]);
var inst_41681__$1 = cljs.core.async.chan.call(null,(1));
var inst_41682__$1 = cljs.core.async.chan.call(null,(1));
var inst_41683__$1 = cljs.core.async.chan.call(null,(1));
var inst_41684__$1 = cljs.core.async.chan.call(null,(1));
var inst_41685__$1 = cljs.core.async.chan.call(null,(1));
var inst_41686__$1 = cljs.core.async.chan.call(null,(1));
var inst_41687__$1 = cljs.core.async.chan.call(null,(1));
var inst_41688 = cljs_async_patterns.core._GT_3.call(null,inst_41681__$1);
var inst_41689 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_41688);
var inst_41690 = cljs_async_patterns.core._GT_3.call(null,inst_41682__$1);
var inst_41691 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_41690);
var inst_41692 = cljs_async_patterns.core._GT_3.call(null,inst_41683__$1);
var inst_41693 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_41692);
var inst_41694 = cljs_async_patterns.core._GT_3.call(null,inst_41684__$1,"ERROR:");
var inst_41695 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_41694);
var inst_41696 = cljs_async_patterns.core._GT_3.call(null,inst_41685__$1,"ERROR:");
var inst_41697 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_41696);
var inst_41698 = cljs_async_patterns.core._GT_3.call(null,inst_41686__$1);
var inst_41699 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_41698);
var inst_41700 = cljs_async_patterns.core._GT_3.call(null,inst_41687__$1,"ERROR:");
var inst_41701 = cljs_async_patterns.core_test.async_3_saturated.call(null,"sat",inst_41700);
var state_41970__$1 = (function (){var statearr_41975 = state_41970;
(statearr_41975[(17)] = inst_41699);

(statearr_41975[(10)] = inst_41684__$1);

(statearr_41975[(18)] = inst_41691);

(statearr_41975[(11)] = inst_41683__$1);

(statearr_41975[(19)] = inst_41695);

(statearr_41975[(20)] = inst_41697);

(statearr_41975[(12)] = inst_41682__$1);

(statearr_41975[(21)] = inst_41701);

(statearr_41975[(22)] = inst_41693);

(statearr_41975[(23)] = inst_41689);

(statearr_41975[(13)] = inst_41687__$1);

(statearr_41975[(14)] = inst_41685__$1);

(statearr_41975[(15)] = inst_41681__$1);

(statearr_41975[(16)] = inst_41686__$1);

return statearr_41975;
})();
var statearr_41976_42111 = state_41970__$1;
(statearr_41976_42111[(2)] = null);

(statearr_41976_42111[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (24))){
var inst_41816 = (state_41970[(2)]);
var inst_41817 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41818 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_41819 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41818,inst_41816,null];
var inst_41820 = cljs.core.PersistentHashMap.fromArrays(inst_41817,inst_41819);
var inst_41821 = cljs.test.do_report.call(null,inst_41820);
var state_41970__$1 = state_41970;
var statearr_41977_42112 = state_41970__$1;
(statearr_41977_42112[(2)] = inst_41821);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (39))){
var inst_41686 = (state_41970[(16)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41970,(38),new cljs.core.Keyword(null,"default","default",-1987822328),null,(37));
var inst_41901 = cljs.core.List.EMPTY;
var inst_41902 = cljs.core._conj.call(null,inst_41901,"suc");
var state_41970__$1 = (function (){var statearr_41978 = state_41970;
(statearr_41978[(24)] = inst_41902);

return statearr_41978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41970__$1,(40),inst_41686);
} else {
if((state_val_41971 === (46))){
var inst_41687 = (state_41970[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41970,(45),new cljs.core.Keyword(null,"default","default",-1987822328),null,(44));
var inst_41939 = cljs.core.List.EMPTY;
var inst_41940 = cljs.core._conj.call(null,inst_41939,"suc");
var state_41970__$1 = (function (){var statearr_41979 = state_41970;
(statearr_41979[(25)] = inst_41940);

return statearr_41979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41970__$1,(47),inst_41687);
} else {
if((state_val_41971 === (4))){
var inst_41681 = (state_41970[(15)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41970,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_41711 = cljs.core.List.EMPTY;
var inst_41712 = cljs.core._conj.call(null,inst_41711,"suc");
var state_41970__$1 = (function (){var statearr_41980 = state_41970;
(statearr_41980[(26)] = inst_41712);

return statearr_41980;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41970__$1,(5),inst_41681);
} else {
if((state_val_41971 === (15))){
var inst_41754 = (state_41970[(27)]);
var inst_41775 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_41981 = state_41970;
(statearr_41981[(28)] = inst_41775);

return statearr_41981;
})();
var statearr_41982_42113 = state_41970__$1;
(statearr_41982_42113[(2)] = inst_41754);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (48))){
var inst_41943 = (state_41970[(29)]);
var inst_41946 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41947 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_41948 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41943);
var inst_41949 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41947,inst_41948,null];
var inst_41950 = cljs.core.PersistentHashMap.fromArrays(inst_41946,inst_41949);
var inst_41951 = cljs.test.do_report.call(null,inst_41950);
var state_41970__$1 = state_41970;
var statearr_41983_42114 = state_41970__$1;
(statearr_41983_42114[(2)] = inst_41951);

(statearr_41983_42114[(1)] = (50));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (50))){
var inst_41944 = (state_41970[(30)]);
var inst_41965 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_41984 = state_41970;
(statearr_41984[(31)] = inst_41965);

return statearr_41984;
})();
var statearr_41985_42115 = state_41970__$1;
(statearr_41985_42115[(2)] = inst_41944);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (21))){
var inst_41791 = (state_41970[(8)]);
var inst_41801 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41802 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_41803 = cljs.core.List.EMPTY;
var inst_41804 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41805 = cljs.core.cons.call(null,inst_41804,inst_41791);
var inst_41806 = cljs.core._conj.call(null,inst_41803,inst_41805);
var inst_41807 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41808 = cljs.core._conj.call(null,inst_41806,inst_41807);
var inst_41809 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41802,inst_41808,null];
var inst_41810 = cljs.core.PersistentHashMap.fromArrays(inst_41801,inst_41809);
var inst_41811 = cljs.test.do_report.call(null,inst_41810);
var state_41970__$1 = state_41970;
var statearr_41986_42116 = state_41970__$1;
(statearr_41986_42116[(2)] = inst_41811);

(statearr_41986_42116[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (31))){
var inst_41854 = (state_41970[(2)]);
var inst_41855 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41856 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_41857 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41856,inst_41854,null];
var inst_41858 = cljs.core.PersistentHashMap.fromArrays(inst_41855,inst_41857);
var inst_41859 = cljs.test.do_report.call(null,inst_41858);
var state_41970__$1 = state_41970;
var statearr_41987_42117 = state_41970__$1;
(statearr_41987_42117[(2)] = inst_41859);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (32))){
var inst_41685 = (state_41970[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41970,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_41863 = cljs.core.List.EMPTY;
var inst_41864 = cljs.core._conj.call(null,inst_41863,"ERROR:");
var state_41970__$1 = (function (){var statearr_41988 = state_41970;
(statearr_41988[(32)] = inst_41864);

return statearr_41988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41970__$1,(33),inst_41685);
} else {
if((state_val_41971 === (40))){
var inst_41906 = (state_41970[(33)]);
var inst_41902 = (state_41970[(24)]);
var inst_41905 = (state_41970[(34)]);
var inst_41904 = (state_41970[(2)]);
var inst_41905__$1 = cljs.core._conj.call(null,inst_41902,inst_41904);
var inst_41906__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41905__$1);
var state_41970__$1 = (function (){var statearr_41989 = state_41970;
(statearr_41989[(33)] = inst_41906__$1);

(statearr_41989[(34)] = inst_41905__$1);

return statearr_41989;
})();
if(cljs.core.truth_(inst_41906__$1)){
var statearr_41990_42118 = state_41970__$1;
(statearr_41990_42118[(1)] = (41));

} else {
var statearr_41991_42119 = state_41970__$1;
(statearr_41991_42119[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (33))){
var inst_41867 = (state_41970[(35)]);
var inst_41864 = (state_41970[(32)]);
var inst_41868 = (state_41970[(36)]);
var inst_41866 = (state_41970[(2)]);
var inst_41867__$1 = cljs.core._conj.call(null,inst_41864,inst_41866);
var inst_41868__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41867__$1);
var state_41970__$1 = (function (){var statearr_41992 = state_41970;
(statearr_41992[(35)] = inst_41867__$1);

(statearr_41992[(36)] = inst_41868__$1);

return statearr_41992;
})();
if(cljs.core.truth_(inst_41868__$1)){
var statearr_41993_42120 = state_41970__$1;
(statearr_41993_42120[(1)] = (34));

} else {
var statearr_41994_42121 = state_41970__$1;
(statearr_41994_42121[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (13))){
var inst_41753 = (state_41970[(37)]);
var inst_41756 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41757 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_41758 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41753);
var inst_41759 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41757,inst_41758,null];
var inst_41760 = cljs.core.PersistentHashMap.fromArrays(inst_41756,inst_41759);
var inst_41761 = cljs.test.do_report.call(null,inst_41760);
var state_41970__$1 = state_41970;
var statearr_41995_42122 = state_41970__$1;
(statearr_41995_42122[(2)] = inst_41761);

(statearr_41995_42122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (22))){
var inst_41792 = (state_41970[(38)]);
var inst_41813 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_41996 = state_41970;
(statearr_41996[(39)] = inst_41813);

return statearr_41996;
})();
var statearr_41997_42123 = state_41970__$1;
(statearr_41997_42123[(2)] = inst_41792);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (36))){
var inst_41868 = (state_41970[(36)]);
var inst_41889 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_41998 = state_41970;
(statearr_41998[(40)] = inst_41889);

return statearr_41998;
})();
var statearr_41999_42124 = state_41970__$1;
(statearr_41999_42124[(2)] = inst_41868);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (41))){
var inst_41905 = (state_41970[(34)]);
var inst_41908 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41909 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_41910 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41905);
var inst_41911 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41909,inst_41910,null];
var inst_41912 = cljs.core.PersistentHashMap.fromArrays(inst_41908,inst_41911);
var inst_41913 = cljs.test.do_report.call(null,inst_41912);
var state_41970__$1 = state_41970;
var statearr_42000_42125 = state_41970__$1;
(statearr_42000_42125[(2)] = inst_41913);

(statearr_42000_42125[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (43))){
var inst_41906 = (state_41970[(33)]);
var inst_41927 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42001 = state_41970;
(statearr_42001[(41)] = inst_41927);

return statearr_42001;
})();
var statearr_42002_42126 = state_41970__$1;
(statearr_42002_42126[(2)] = inst_41906);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (29))){
var inst_41830 = (state_41970[(42)]);
var inst_41851 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42003 = state_41970;
(statearr_42003[(43)] = inst_41851);

return statearr_42003;
})();
var statearr_42004_42127 = state_41970__$1;
(statearr_42004_42127[(2)] = inst_41830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (44))){
var inst_41967 = (state_41970[(2)]);
var inst_41968 = done.call(null);
var state_41970__$1 = (function (){var statearr_42005 = state_41970;
(statearr_42005[(44)] = inst_41967);

return statearr_42005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41970__$1,inst_41968);
} else {
if((state_val_41971 === (6))){
var inst_41715 = (state_41970[(7)]);
var inst_41718 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41719 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_41720 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41715);
var inst_41721 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41719,inst_41720,null];
var inst_41722 = cljs.core.PersistentHashMap.fromArrays(inst_41718,inst_41721);
var inst_41723 = cljs.test.do_report.call(null,inst_41722);
var state_41970__$1 = state_41970;
var statearr_42006_42128 = state_41970__$1;
(statearr_42006_42128[(2)] = inst_41723);

(statearr_42006_42128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (28))){
var inst_41829 = (state_41970[(9)]);
var inst_41839 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41840 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_41841 = cljs.core.List.EMPTY;
var inst_41842 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41843 = cljs.core.cons.call(null,inst_41842,inst_41829);
var inst_41844 = cljs.core._conj.call(null,inst_41841,inst_41843);
var inst_41845 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41846 = cljs.core._conj.call(null,inst_41844,inst_41845);
var inst_41847 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41840,inst_41846,null];
var inst_41848 = cljs.core.PersistentHashMap.fromArrays(inst_41839,inst_41847);
var inst_41849 = cljs.test.do_report.call(null,inst_41848);
var state_41970__$1 = state_41970;
var statearr_42007_42129 = state_41970__$1;
(statearr_42007_42129[(2)] = inst_41849);

(statearr_42007_42129[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (25))){
var inst_41684 = (state_41970[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41970,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_41825 = cljs.core.List.EMPTY;
var inst_41826 = cljs.core._conj.call(null,inst_41825,"ERROR:");
var state_41970__$1 = (function (){var statearr_42008 = state_41970;
(statearr_42008[(45)] = inst_41826);

return statearr_42008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41970__$1,(26),inst_41684);
} else {
if((state_val_41971 === (34))){
var inst_41867 = (state_41970[(35)]);
var inst_41870 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41871 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_41872 = cljs.core.cons.call(null,cljs.core._EQ_,inst_41867);
var inst_41873 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_41871,inst_41872,null];
var inst_41874 = cljs.core.PersistentHashMap.fromArrays(inst_41870,inst_41873);
var inst_41875 = cljs.test.do_report.call(null,inst_41874);
var state_41970__$1 = state_41970;
var statearr_42009_42130 = state_41970__$1;
(statearr_42009_42130[(2)] = inst_41875);

(statearr_42009_42130[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (17))){
var inst_41778 = (state_41970[(2)]);
var inst_41779 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41780 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_41781 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41780,inst_41778,null];
var inst_41782 = cljs.core.PersistentHashMap.fromArrays(inst_41779,inst_41781);
var inst_41783 = cljs.test.do_report.call(null,inst_41782);
var state_41970__$1 = state_41970;
var statearr_42010_42131 = state_41970__$1;
(statearr_42010_42131[(2)] = inst_41783);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (3))){
var inst_41702 = (state_41970[(2)]);
var inst_41703 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41704 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_41705 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41704,inst_41702,null];
var inst_41706 = cljs.core.PersistentHashMap.fromArrays(inst_41703,inst_41705);
var inst_41707 = cljs.test.do_report.call(null,inst_41706);
var state_41970__$1 = state_41970;
var statearr_42011_42132 = state_41970__$1;
(statearr_42011_42132[(2)] = inst_41707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (12))){
var inst_41750 = (state_41970[(46)]);
var inst_41754 = (state_41970[(27)]);
var inst_41753 = (state_41970[(37)]);
var inst_41752 = (state_41970[(2)]);
var inst_41753__$1 = cljs.core._conj.call(null,inst_41750,inst_41752);
var inst_41754__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41753__$1);
var state_41970__$1 = (function (){var statearr_42012 = state_41970;
(statearr_42012[(27)] = inst_41754__$1);

(statearr_42012[(37)] = inst_41753__$1);

return statearr_42012;
})();
if(cljs.core.truth_(inst_41754__$1)){
var statearr_42013_42133 = state_41970__$1;
(statearr_42013_42133[(1)] = (13));

} else {
var statearr_42014_42134 = state_41970__$1;
(statearr_42014_42134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (2))){
var inst_41739 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42015 = state_41970;
(statearr_42015[(47)] = inst_41739);

return statearr_42015;
})();
var statearr_42016_42135 = state_41970__$1;
(statearr_42016_42135[(2)] = null);

(statearr_42016_42135[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (23))){
var inst_41853 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42017 = state_41970;
(statearr_42017[(48)] = inst_41853);

return statearr_42017;
})();
var statearr_42018_42136 = state_41970__$1;
(statearr_42018_42136[(2)] = null);

(statearr_42018_42136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (47))){
var inst_41943 = (state_41970[(29)]);
var inst_41940 = (state_41970[(25)]);
var inst_41944 = (state_41970[(30)]);
var inst_41942 = (state_41970[(2)]);
var inst_41943__$1 = cljs.core._conj.call(null,inst_41940,inst_41942);
var inst_41944__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41943__$1);
var state_41970__$1 = (function (){var statearr_42019 = state_41970;
(statearr_42019[(29)] = inst_41943__$1);

(statearr_42019[(30)] = inst_41944__$1);

return statearr_42019;
})();
if(cljs.core.truth_(inst_41944__$1)){
var statearr_42020_42137 = state_41970__$1;
(statearr_42020_42137[(1)] = (48));

} else {
var statearr_42021_42138 = state_41970__$1;
(statearr_42021_42138[(1)] = (49));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (35))){
var inst_41867 = (state_41970[(35)]);
var inst_41877 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41878 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_41879 = cljs.core.List.EMPTY;
var inst_41880 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41881 = cljs.core.cons.call(null,inst_41880,inst_41867);
var inst_41882 = cljs.core._conj.call(null,inst_41879,inst_41881);
var inst_41883 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41884 = cljs.core._conj.call(null,inst_41882,inst_41883);
var inst_41885 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41878,inst_41884,null];
var inst_41886 = cljs.core.PersistentHashMap.fromArrays(inst_41877,inst_41885);
var inst_41887 = cljs.test.do_report.call(null,inst_41886);
var state_41970__$1 = state_41970;
var statearr_42022_42139 = state_41970__$1;
(statearr_42022_42139[(2)] = inst_41887);

(statearr_42022_42139[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (19))){
var inst_41791 = (state_41970[(8)]);
var inst_41788 = (state_41970[(49)]);
var inst_41792 = (state_41970[(38)]);
var inst_41790 = (state_41970[(2)]);
var inst_41791__$1 = cljs.core._conj.call(null,inst_41788,inst_41790);
var inst_41792__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41791__$1);
var state_41970__$1 = (function (){var statearr_42023 = state_41970;
(statearr_42023[(8)] = inst_41791__$1);

(statearr_42023[(38)] = inst_41792__$1);

return statearr_42023;
})();
if(cljs.core.truth_(inst_41792__$1)){
var statearr_42024_42140 = state_41970__$1;
(statearr_42024_42140[(1)] = (20));

} else {
var statearr_42025_42141 = state_41970__$1;
(statearr_42025_42141[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (11))){
var inst_41682 = (state_41970[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41970,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_41749 = cljs.core.List.EMPTY;
var inst_41750 = cljs.core._conj.call(null,inst_41749,"err1");
var state_41970__$1 = (function (){var statearr_42026 = state_41970;
(statearr_42026[(46)] = inst_41750);

return statearr_42026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41970__$1,(12),inst_41682);
} else {
if((state_val_41971 === (9))){
var inst_41777 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42027 = state_41970;
(statearr_42027[(50)] = inst_41777);

return statearr_42027;
})();
var statearr_42028_42142 = state_41970__$1;
(statearr_42028_42142[(2)] = null);

(statearr_42028_42142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (5))){
var inst_41712 = (state_41970[(26)]);
var inst_41715 = (state_41970[(7)]);
var inst_41716 = (state_41970[(51)]);
var inst_41714 = (state_41970[(2)]);
var inst_41715__$1 = cljs.core._conj.call(null,inst_41712,inst_41714);
var inst_41716__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41715__$1);
var state_41970__$1 = (function (){var statearr_42029 = state_41970;
(statearr_42029[(7)] = inst_41715__$1);

(statearr_42029[(51)] = inst_41716__$1);

return statearr_42029;
})();
if(cljs.core.truth_(inst_41716__$1)){
var statearr_42030_42143 = state_41970__$1;
(statearr_42030_42143[(1)] = (6));

} else {
var statearr_42031_42144 = state_41970__$1;
(statearr_42031_42144[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (14))){
var inst_41753 = (state_41970[(37)]);
var inst_41763 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41764 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_41765 = cljs.core.List.EMPTY;
var inst_41766 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41767 = cljs.core.cons.call(null,inst_41766,inst_41753);
var inst_41768 = cljs.core._conj.call(null,inst_41765,inst_41767);
var inst_41769 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41770 = cljs.core._conj.call(null,inst_41768,inst_41769);
var inst_41771 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41764,inst_41770,null];
var inst_41772 = cljs.core.PersistentHashMap.fromArrays(inst_41763,inst_41771);
var inst_41773 = cljs.test.do_report.call(null,inst_41772);
var state_41970__$1 = state_41970;
var statearr_42032_42145 = state_41970__$1;
(statearr_42032_42145[(2)] = inst_41773);

(statearr_42032_42145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (45))){
var inst_41930 = (state_41970[(2)]);
var inst_41931 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41932 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_41933 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41932,inst_41930,null];
var inst_41934 = cljs.core.PersistentHashMap.fromArrays(inst_41931,inst_41933);
var inst_41935 = cljs.test.do_report.call(null,inst_41934);
var state_41970__$1 = state_41970;
var statearr_42033_42146 = state_41970__$1;
(statearr_42033_42146[(2)] = inst_41935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (26))){
var inst_41830 = (state_41970[(42)]);
var inst_41829 = (state_41970[(9)]);
var inst_41826 = (state_41970[(45)]);
var inst_41828 = (state_41970[(2)]);
var inst_41829__$1 = cljs.core._conj.call(null,inst_41826,inst_41828);
var inst_41830__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_41829__$1);
var state_41970__$1 = (function (){var statearr_42034 = state_41970;
(statearr_42034[(42)] = inst_41830__$1);

(statearr_42034[(9)] = inst_41829__$1);

return statearr_42034;
})();
if(cljs.core.truth_(inst_41830__$1)){
var statearr_42035_42147 = state_41970__$1;
(statearr_42035_42147[(1)] = (27));

} else {
var statearr_42036_42148 = state_41970__$1;
(statearr_42036_42148[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (16))){
var inst_41815 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42037 = state_41970;
(statearr_42037[(52)] = inst_41815);

return statearr_42037;
})();
var statearr_42038_42149 = state_41970__$1;
(statearr_42038_42149[(2)] = null);

(statearr_42038_42149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (38))){
var inst_41892 = (state_41970[(2)]);
var inst_41893 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41894 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_41895 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41894,inst_41892,null];
var inst_41896 = cljs.core.PersistentHashMap.fromArrays(inst_41893,inst_41895);
var inst_41897 = cljs.test.do_report.call(null,inst_41896);
var state_41970__$1 = state_41970;
var statearr_42039_42150 = state_41970__$1;
(statearr_42039_42150[(2)] = inst_41897);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (30))){
var inst_41891 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42040 = state_41970;
(statearr_42040[(53)] = inst_41891);

return statearr_42040;
})();
var statearr_42041_42151 = state_41970__$1;
(statearr_42041_42151[(2)] = null);

(statearr_42041_42151[(1)] = (39));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (10))){
var inst_41740 = (state_41970[(2)]);
var inst_41741 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41742 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_41743 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_41742,inst_41740,null];
var inst_41744 = cljs.core.PersistentHashMap.fromArrays(inst_41741,inst_41743);
var inst_41745 = cljs.test.do_report.call(null,inst_41744);
var state_41970__$1 = state_41970;
var statearr_42042_42152 = state_41970__$1;
(statearr_42042_42152[(2)] = inst_41745);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (18))){
var inst_41683 = (state_41970[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41970,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_41787 = cljs.core.List.EMPTY;
var inst_41788 = cljs.core._conj.call(null,inst_41787,"err2");
var state_41970__$1 = (function (){var statearr_42043 = state_41970;
(statearr_42043[(49)] = inst_41788);

return statearr_42043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41970__$1,(19),inst_41683);
} else {
if((state_val_41971 === (42))){
var inst_41905 = (state_41970[(34)]);
var inst_41915 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41916 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c6","c6",-1953726545,null)),"suc");
var inst_41917 = cljs.core.List.EMPTY;
var inst_41918 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41919 = cljs.core.cons.call(null,inst_41918,inst_41905);
var inst_41920 = cljs.core._conj.call(null,inst_41917,inst_41919);
var inst_41921 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41922 = cljs.core._conj.call(null,inst_41920,inst_41921);
var inst_41923 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41916,inst_41922,null];
var inst_41924 = cljs.core.PersistentHashMap.fromArrays(inst_41915,inst_41923);
var inst_41925 = cljs.test.do_report.call(null,inst_41924);
var state_41970__$1 = state_41970;
var statearr_42044_42153 = state_41970__$1;
(statearr_42044_42153[(2)] = inst_41925);

(statearr_42044_42153[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (37))){
var inst_41929 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42045 = state_41970;
(statearr_42045[(54)] = inst_41929);

return statearr_42045;
})();
var statearr_42046_42154 = state_41970__$1;
(statearr_42046_42154[(2)] = null);

(statearr_42046_42154[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (8))){
var inst_41716 = (state_41970[(51)]);
var inst_41737 = (state_41970[(2)]);
var state_41970__$1 = (function (){var statearr_42047 = state_41970;
(statearr_42047[(55)] = inst_41737);

return statearr_42047;
})();
var statearr_42048_42155 = state_41970__$1;
(statearr_42048_42155[(2)] = inst_41716);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41971 === (49))){
var inst_41943 = (state_41970[(29)]);
var inst_41953 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_41954 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c7","c7",2062763331,null)),"suc");
var inst_41955 = cljs.core.List.EMPTY;
var inst_41956 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_41957 = cljs.core.cons.call(null,inst_41956,inst_41943);
var inst_41958 = cljs.core._conj.call(null,inst_41955,inst_41957);
var inst_41959 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_41960 = cljs.core._conj.call(null,inst_41958,inst_41959);
var inst_41961 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_41954,inst_41960,null];
var inst_41962 = cljs.core.PersistentHashMap.fromArrays(inst_41953,inst_41961);
var inst_41963 = cljs.test.do_report.call(null,inst_41962);
var state_41970__$1 = state_41970;
var statearr_42049_42156 = state_41970__$1;
(statearr_42049_42156[(2)] = inst_41963);

(statearr_42049_42156[(1)] = (50));


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
var statearr_42053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42053[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_42053[(1)] = (1));

return statearr_42053;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_41970){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_41970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42054){if((e42054 instanceof Object)){
var ex__9301__auto__ = e42054;
var statearr_42055_42157 = state_41970;
(statearr_42055_42157[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42158 = state_41970;
state_41970 = G__42158;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_41970){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_41970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42056 = f__9319__auto__.call(null);
(statearr_42056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta41302","meta41302",-725481386,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test41301";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test41301");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test41301 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test41301(meta41302){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301(meta41302));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test41301(null));
});

cljs_async_patterns.core_test._GT_3_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_3_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">3-test","cljs-async-patterns.core-test/>3-test",1820323724,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">3-test",">3-test",-1651940881,null),"test/cljs_async_patterns/core_test.cljs",17,1,74,74,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_3_test)?cljs_async_patterns.core_test._GT_3_test.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT__QMARK__one = (function cljs_async_patterns$core_test$_GT__QMARK__one(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT__QMARK__one.cljs$lang$var);
});
cljs_async_patterns.core_test._GT__QMARK__one.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Mirror of the >1 tests.");

try{if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159 = (function (meta42160){
this.meta42160 = meta42160;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42161,meta42160__$1){
var self__ = this;
var _42161__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159(meta42160__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42161){
var self__ = this;
var _42161__$1 = this;
return self__.meta42160;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_42288){
var state_val_42289 = (state_42288[(1)]);
if((state_val_42289 === (7))){
var inst_42185 = (state_42288[(7)]);
var inst_42195 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42196 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42197 = cljs.core.List.EMPTY;
var inst_42198 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42199 = cljs.core.cons.call(null,inst_42198,inst_42185);
var inst_42200 = cljs.core._conj.call(null,inst_42197,inst_42199);
var inst_42201 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42202 = cljs.core._conj.call(null,inst_42200,inst_42201);
var inst_42203 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42196,inst_42202,null];
var inst_42204 = cljs.core.PersistentHashMap.fromArrays(inst_42195,inst_42203);
var inst_42205 = cljs.test.do_report.call(null,inst_42204);
var state_42288__$1 = state_42288;
var statearr_42290_42499 = state_42288__$1;
(statearr_42290_42499[(2)] = inst_42205);

(statearr_42290_42499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (20))){
var inst_42261 = (state_42288[(8)]);
var inst_42264 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42265 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42266 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42261);
var inst_42267 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42265,inst_42266,null];
var inst_42268 = cljs.core.PersistentHashMap.fromArrays(inst_42264,inst_42267);
var inst_42269 = cljs.test.do_report.call(null,inst_42268);
var state_42288__$1 = state_42288;
var statearr_42291_42500 = state_42288__$1;
(statearr_42291_42500[(2)] = inst_42269);

(statearr_42291_42500[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (1))){
var inst_42165 = (state_42288[(9)]);
var inst_42163 = (state_42288[(10)]);
var inst_42164 = (state_42288[(11)]);
var inst_42163__$1 = cljs.core.async.chan.call(null,(1));
var inst_42164__$1 = cljs.core.async.chan.call(null,(1));
var inst_42165__$1 = cljs.core.async.chan.call(null,(1));
var inst_42166 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42163__$1);
var inst_42167 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_42166);
var inst_42168 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42164__$1);
var inst_42169 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_42168);
var inst_42170 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42165__$1,"ERROR:");
var inst_42171 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_42170);
var state_42288__$1 = (function (){var statearr_42292 = state_42288;
(statearr_42292[(12)] = inst_42171);

(statearr_42292[(9)] = inst_42165__$1);

(statearr_42292[(13)] = inst_42167);

(statearr_42292[(14)] = inst_42169);

(statearr_42292[(10)] = inst_42163__$1);

(statearr_42292[(11)] = inst_42164__$1);

return statearr_42292;
})();
var statearr_42293_42501 = state_42288__$1;
(statearr_42293_42501[(2)] = null);

(statearr_42293_42501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (4))){
var inst_42163 = (state_42288[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42288,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42181 = cljs.core.List.EMPTY;
var inst_42182 = cljs.core._conj.call(null,inst_42181,"suc");
var state_42288__$1 = (function (){var statearr_42294 = state_42288;
(statearr_42294[(15)] = inst_42182);

return statearr_42294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42288__$1,(5),inst_42163);
} else {
if((state_val_42289 === (15))){
var inst_42224 = (state_42288[(16)]);
var inst_42245 = (state_42288[(2)]);
var state_42288__$1 = (function (){var statearr_42295 = state_42288;
(statearr_42295[(17)] = inst_42245);

return statearr_42295;
})();
var statearr_42296_42502 = state_42288__$1;
(statearr_42296_42502[(2)] = inst_42224);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (21))){
var inst_42261 = (state_42288[(8)]);
var inst_42271 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42272 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42273 = cljs.core.List.EMPTY;
var inst_42274 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42275 = cljs.core.cons.call(null,inst_42274,inst_42261);
var inst_42276 = cljs.core._conj.call(null,inst_42273,inst_42275);
var inst_42277 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42278 = cljs.core._conj.call(null,inst_42276,inst_42277);
var inst_42279 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42272,inst_42278,null];
var inst_42280 = cljs.core.PersistentHashMap.fromArrays(inst_42271,inst_42279);
var inst_42281 = cljs.test.do_report.call(null,inst_42280);
var state_42288__$1 = state_42288;
var statearr_42297_42503 = state_42288__$1;
(statearr_42297_42503[(2)] = inst_42281);

(statearr_42297_42503[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (13))){
var inst_42223 = (state_42288[(18)]);
var inst_42226 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42227 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_42228 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42223);
var inst_42229 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42227,inst_42228,null];
var inst_42230 = cljs.core.PersistentHashMap.fromArrays(inst_42226,inst_42229);
var inst_42231 = cljs.test.do_report.call(null,inst_42230);
var state_42288__$1 = state_42288;
var statearr_42298_42504 = state_42288__$1;
(statearr_42298_42504[(2)] = inst_42231);

(statearr_42298_42504[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (22))){
var inst_42262 = (state_42288[(19)]);
var inst_42283 = (state_42288[(2)]);
var state_42288__$1 = (function (){var statearr_42299 = state_42288;
(statearr_42299[(20)] = inst_42283);

return statearr_42299;
})();
var statearr_42300_42505 = state_42288__$1;
(statearr_42300_42505[(2)] = inst_42262);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (6))){
var inst_42185 = (state_42288[(7)]);
var inst_42188 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42189 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42190 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42185);
var inst_42191 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42189,inst_42190,null];
var inst_42192 = cljs.core.PersistentHashMap.fromArrays(inst_42188,inst_42191);
var inst_42193 = cljs.test.do_report.call(null,inst_42192);
var state_42288__$1 = state_42288;
var statearr_42301_42506 = state_42288__$1;
(statearr_42301_42506[(2)] = inst_42193);

(statearr_42301_42506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (17))){
var inst_42248 = (state_42288[(2)]);
var inst_42249 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42250 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42251 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42250,inst_42248,null];
var inst_42252 = cljs.core.PersistentHashMap.fromArrays(inst_42249,inst_42251);
var inst_42253 = cljs.test.do_report.call(null,inst_42252);
var state_42288__$1 = state_42288;
var statearr_42302_42507 = state_42288__$1;
(statearr_42302_42507[(2)] = inst_42253);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (3))){
var inst_42172 = (state_42288[(2)]);
var inst_42173 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42174 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42175 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42174,inst_42172,null];
var inst_42176 = cljs.core.PersistentHashMap.fromArrays(inst_42173,inst_42175);
var inst_42177 = cljs.test.do_report.call(null,inst_42176);
var state_42288__$1 = state_42288;
var statearr_42303_42508 = state_42288__$1;
(statearr_42303_42508[(2)] = inst_42177);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (12))){
var inst_42220 = (state_42288[(21)]);
var inst_42224 = (state_42288[(16)]);
var inst_42223 = (state_42288[(18)]);
var inst_42222 = (state_42288[(2)]);
var inst_42223__$1 = cljs.core._conj.call(null,inst_42220,inst_42222);
var inst_42224__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42223__$1);
var state_42288__$1 = (function (){var statearr_42304 = state_42288;
(statearr_42304[(16)] = inst_42224__$1);

(statearr_42304[(18)] = inst_42223__$1);

return statearr_42304;
})();
if(cljs.core.truth_(inst_42224__$1)){
var statearr_42305_42509 = state_42288__$1;
(statearr_42305_42509[(1)] = (13));

} else {
var statearr_42306_42510 = state_42288__$1;
(statearr_42306_42510[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (2))){
var inst_42209 = (state_42288[(2)]);
var state_42288__$1 = (function (){var statearr_42307 = state_42288;
(statearr_42307[(22)] = inst_42209);

return statearr_42307;
})();
var statearr_42308_42511 = state_42288__$1;
(statearr_42308_42511[(2)] = null);

(statearr_42308_42511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (19))){
var inst_42261 = (state_42288[(8)]);
var inst_42258 = (state_42288[(23)]);
var inst_42262 = (state_42288[(19)]);
var inst_42260 = (state_42288[(2)]);
var inst_42261__$1 = cljs.core._conj.call(null,inst_42258,inst_42260);
var inst_42262__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42261__$1);
var state_42288__$1 = (function (){var statearr_42309 = state_42288;
(statearr_42309[(8)] = inst_42261__$1);

(statearr_42309[(19)] = inst_42262__$1);

return statearr_42309;
})();
if(cljs.core.truth_(inst_42262__$1)){
var statearr_42310_42512 = state_42288__$1;
(statearr_42310_42512[(1)] = (20));

} else {
var statearr_42311_42513 = state_42288__$1;
(statearr_42311_42513[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (11))){
var inst_42164 = (state_42288[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42288,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_42219 = cljs.core.List.EMPTY;
var inst_42220 = cljs.core._conj.call(null,inst_42219,false);
var state_42288__$1 = (function (){var statearr_42312 = state_42288;
(statearr_42312[(21)] = inst_42220);

return statearr_42312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42288__$1,(12),inst_42164);
} else {
if((state_val_42289 === (9))){
var inst_42247 = (state_42288[(2)]);
var state_42288__$1 = (function (){var statearr_42313 = state_42288;
(statearr_42313[(24)] = inst_42247);

return statearr_42313;
})();
var statearr_42314_42514 = state_42288__$1;
(statearr_42314_42514[(2)] = null);

(statearr_42314_42514[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (5))){
var inst_42182 = (state_42288[(15)]);
var inst_42185 = (state_42288[(7)]);
var inst_42186 = (state_42288[(25)]);
var inst_42184 = (state_42288[(2)]);
var inst_42185__$1 = cljs.core._conj.call(null,inst_42182,inst_42184);
var inst_42186__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42185__$1);
var state_42288__$1 = (function (){var statearr_42315 = state_42288;
(statearr_42315[(7)] = inst_42185__$1);

(statearr_42315[(25)] = inst_42186__$1);

return statearr_42315;
})();
if(cljs.core.truth_(inst_42186__$1)){
var statearr_42316_42515 = state_42288__$1;
(statearr_42316_42515[(1)] = (6));

} else {
var statearr_42317_42516 = state_42288__$1;
(statearr_42317_42516[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (14))){
var inst_42223 = (state_42288[(18)]);
var inst_42233 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42234 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_42235 = cljs.core.List.EMPTY;
var inst_42236 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42237 = cljs.core.cons.call(null,inst_42236,inst_42223);
var inst_42238 = cljs.core._conj.call(null,inst_42235,inst_42237);
var inst_42239 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42240 = cljs.core._conj.call(null,inst_42238,inst_42239);
var inst_42241 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42234,inst_42240,null];
var inst_42242 = cljs.core.PersistentHashMap.fromArrays(inst_42233,inst_42241);
var inst_42243 = cljs.test.do_report.call(null,inst_42242);
var state_42288__$1 = state_42288;
var statearr_42318_42517 = state_42288__$1;
(statearr_42318_42517[(2)] = inst_42243);

(statearr_42318_42517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (16))){
var inst_42285 = (state_42288[(2)]);
var inst_42286 = done.call(null);
var state_42288__$1 = (function (){var statearr_42319 = state_42288;
(statearr_42319[(26)] = inst_42285);

return statearr_42319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42288__$1,inst_42286);
} else {
if((state_val_42289 === (10))){
var inst_42210 = (state_42288[(2)]);
var inst_42211 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42212 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_42213 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42212,inst_42210,null];
var inst_42214 = cljs.core.PersistentHashMap.fromArrays(inst_42211,inst_42213);
var inst_42215 = cljs.test.do_report.call(null,inst_42214);
var state_42288__$1 = state_42288;
var statearr_42320_42518 = state_42288__$1;
(statearr_42320_42518[(2)] = inst_42215);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (18))){
var inst_42165 = (state_42288[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42288,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_42257 = cljs.core.List.EMPTY;
var inst_42258 = cljs.core._conj.call(null,inst_42257,"ERROR:");
var state_42288__$1 = (function (){var statearr_42321 = state_42288;
(statearr_42321[(23)] = inst_42258);

return statearr_42321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42288__$1,(19),inst_42165);
} else {
if((state_val_42289 === (8))){
var inst_42186 = (state_42288[(25)]);
var inst_42207 = (state_42288[(2)]);
var state_42288__$1 = (function (){var statearr_42322 = state_42288;
(statearr_42322[(27)] = inst_42207);

return statearr_42322;
})();
var statearr_42323_42519 = state_42288__$1;
(statearr_42323_42519[(2)] = inst_42186);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288__$1);

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
var statearr_42327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42327[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_42327[(1)] = (1));

return statearr_42327;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_42288){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42328){if((e42328 instanceof Object)){
var ex__9301__auto__ = e42328;
var statearr_42329_42520 = state_42288;
(statearr_42329_42520[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42521 = state_42288;
state_42288 = G__42521;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_42288){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_42288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_42330 = f__9319__auto__.call(null);
(statearr_42330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.prototype.apply = (function (self__,args42162){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42162)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_42456){
var state_val_42457 = (state_42456[(1)]);
if((state_val_42457 === (7))){
var inst_42353 = (state_42456[(7)]);
var inst_42363 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42364 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42365 = cljs.core.List.EMPTY;
var inst_42366 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42367 = cljs.core.cons.call(null,inst_42366,inst_42353);
var inst_42368 = cljs.core._conj.call(null,inst_42365,inst_42367);
var inst_42369 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42370 = cljs.core._conj.call(null,inst_42368,inst_42369);
var inst_42371 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42364,inst_42370,null];
var inst_42372 = cljs.core.PersistentHashMap.fromArrays(inst_42363,inst_42371);
var inst_42373 = cljs.test.do_report.call(null,inst_42372);
var state_42456__$1 = state_42456;
var statearr_42458_42522 = state_42456__$1;
(statearr_42458_42522[(2)] = inst_42373);

(statearr_42458_42522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (20))){
var inst_42429 = (state_42456[(8)]);
var inst_42432 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42433 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42434 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42429);
var inst_42435 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42433,inst_42434,null];
var inst_42436 = cljs.core.PersistentHashMap.fromArrays(inst_42432,inst_42435);
var inst_42437 = cljs.test.do_report.call(null,inst_42436);
var state_42456__$1 = state_42456;
var statearr_42459_42523 = state_42456__$1;
(statearr_42459_42523[(2)] = inst_42437);

(statearr_42459_42523[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (1))){
var inst_42331 = (state_42456[(9)]);
var inst_42332 = (state_42456[(10)]);
var inst_42333 = (state_42456[(11)]);
var inst_42331__$1 = cljs.core.async.chan.call(null,(1));
var inst_42332__$1 = cljs.core.async.chan.call(null,(1));
var inst_42333__$1 = cljs.core.async.chan.call(null,(1));
var inst_42334 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42331__$1);
var inst_42335 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_42334);
var inst_42336 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42332__$1);
var inst_42337 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_42336);
var inst_42338 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42333__$1,"ERROR:");
var inst_42339 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_42338);
var state_42456__$1 = (function (){var statearr_42460 = state_42456;
(statearr_42460[(9)] = inst_42331__$1);

(statearr_42460[(10)] = inst_42332__$1);

(statearr_42460[(11)] = inst_42333__$1);

(statearr_42460[(12)] = inst_42337);

(statearr_42460[(13)] = inst_42339);

(statearr_42460[(14)] = inst_42335);

return statearr_42460;
})();
var statearr_42461_42524 = state_42456__$1;
(statearr_42461_42524[(2)] = null);

(statearr_42461_42524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (4))){
var inst_42331 = (state_42456[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42456,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42349 = cljs.core.List.EMPTY;
var inst_42350 = cljs.core._conj.call(null,inst_42349,"suc");
var state_42456__$1 = (function (){var statearr_42462 = state_42456;
(statearr_42462[(15)] = inst_42350);

return statearr_42462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42456__$1,(5),inst_42331);
} else {
if((state_val_42457 === (15))){
var inst_42392 = (state_42456[(16)]);
var inst_42413 = (state_42456[(2)]);
var state_42456__$1 = (function (){var statearr_42463 = state_42456;
(statearr_42463[(17)] = inst_42413);

return statearr_42463;
})();
var statearr_42464_42525 = state_42456__$1;
(statearr_42464_42525[(2)] = inst_42392);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (21))){
var inst_42429 = (state_42456[(8)]);
var inst_42439 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42440 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42441 = cljs.core.List.EMPTY;
var inst_42442 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42443 = cljs.core.cons.call(null,inst_42442,inst_42429);
var inst_42444 = cljs.core._conj.call(null,inst_42441,inst_42443);
var inst_42445 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42446 = cljs.core._conj.call(null,inst_42444,inst_42445);
var inst_42447 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42440,inst_42446,null];
var inst_42448 = cljs.core.PersistentHashMap.fromArrays(inst_42439,inst_42447);
var inst_42449 = cljs.test.do_report.call(null,inst_42448);
var state_42456__$1 = state_42456;
var statearr_42465_42526 = state_42456__$1;
(statearr_42465_42526[(2)] = inst_42449);

(statearr_42465_42526[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (13))){
var inst_42391 = (state_42456[(18)]);
var inst_42394 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42395 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_42396 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42391);
var inst_42397 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42395,inst_42396,null];
var inst_42398 = cljs.core.PersistentHashMap.fromArrays(inst_42394,inst_42397);
var inst_42399 = cljs.test.do_report.call(null,inst_42398);
var state_42456__$1 = state_42456;
var statearr_42466_42527 = state_42456__$1;
(statearr_42466_42527[(2)] = inst_42399);

(statearr_42466_42527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (22))){
var inst_42430 = (state_42456[(19)]);
var inst_42451 = (state_42456[(2)]);
var state_42456__$1 = (function (){var statearr_42467 = state_42456;
(statearr_42467[(20)] = inst_42451);

return statearr_42467;
})();
var statearr_42468_42528 = state_42456__$1;
(statearr_42468_42528[(2)] = inst_42430);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (6))){
var inst_42353 = (state_42456[(7)]);
var inst_42356 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42357 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42358 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42353);
var inst_42359 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42357,inst_42358,null];
var inst_42360 = cljs.core.PersistentHashMap.fromArrays(inst_42356,inst_42359);
var inst_42361 = cljs.test.do_report.call(null,inst_42360);
var state_42456__$1 = state_42456;
var statearr_42469_42529 = state_42456__$1;
(statearr_42469_42529[(2)] = inst_42361);

(statearr_42469_42529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (17))){
var inst_42416 = (state_42456[(2)]);
var inst_42417 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42418 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42419 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42418,inst_42416,null];
var inst_42420 = cljs.core.PersistentHashMap.fromArrays(inst_42417,inst_42419);
var inst_42421 = cljs.test.do_report.call(null,inst_42420);
var state_42456__$1 = state_42456;
var statearr_42470_42530 = state_42456__$1;
(statearr_42470_42530[(2)] = inst_42421);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (3))){
var inst_42340 = (state_42456[(2)]);
var inst_42341 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42342 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42343 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42342,inst_42340,null];
var inst_42344 = cljs.core.PersistentHashMap.fromArrays(inst_42341,inst_42343);
var inst_42345 = cljs.test.do_report.call(null,inst_42344);
var state_42456__$1 = state_42456;
var statearr_42471_42531 = state_42456__$1;
(statearr_42471_42531[(2)] = inst_42345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (12))){
var inst_42391 = (state_42456[(18)]);
var inst_42392 = (state_42456[(16)]);
var inst_42388 = (state_42456[(21)]);
var inst_42390 = (state_42456[(2)]);
var inst_42391__$1 = cljs.core._conj.call(null,inst_42388,inst_42390);
var inst_42392__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42391__$1);
var state_42456__$1 = (function (){var statearr_42472 = state_42456;
(statearr_42472[(18)] = inst_42391__$1);

(statearr_42472[(16)] = inst_42392__$1);

return statearr_42472;
})();
if(cljs.core.truth_(inst_42392__$1)){
var statearr_42473_42532 = state_42456__$1;
(statearr_42473_42532[(1)] = (13));

} else {
var statearr_42474_42533 = state_42456__$1;
(statearr_42474_42533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (2))){
var inst_42377 = (state_42456[(2)]);
var state_42456__$1 = (function (){var statearr_42475 = state_42456;
(statearr_42475[(22)] = inst_42377);

return statearr_42475;
})();
var statearr_42476_42534 = state_42456__$1;
(statearr_42476_42534[(2)] = null);

(statearr_42476_42534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (19))){
var inst_42426 = (state_42456[(23)]);
var inst_42429 = (state_42456[(8)]);
var inst_42430 = (state_42456[(19)]);
var inst_42428 = (state_42456[(2)]);
var inst_42429__$1 = cljs.core._conj.call(null,inst_42426,inst_42428);
var inst_42430__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42429__$1);
var state_42456__$1 = (function (){var statearr_42477 = state_42456;
(statearr_42477[(8)] = inst_42429__$1);

(statearr_42477[(19)] = inst_42430__$1);

return statearr_42477;
})();
if(cljs.core.truth_(inst_42430__$1)){
var statearr_42478_42535 = state_42456__$1;
(statearr_42478_42535[(1)] = (20));

} else {
var statearr_42479_42536 = state_42456__$1;
(statearr_42479_42536[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (11))){
var inst_42332 = (state_42456[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42456,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_42387 = cljs.core.List.EMPTY;
var inst_42388 = cljs.core._conj.call(null,inst_42387,false);
var state_42456__$1 = (function (){var statearr_42480 = state_42456;
(statearr_42480[(21)] = inst_42388);

return statearr_42480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42456__$1,(12),inst_42332);
} else {
if((state_val_42457 === (9))){
var inst_42415 = (state_42456[(2)]);
var state_42456__$1 = (function (){var statearr_42481 = state_42456;
(statearr_42481[(24)] = inst_42415);

return statearr_42481;
})();
var statearr_42482_42537 = state_42456__$1;
(statearr_42482_42537[(2)] = null);

(statearr_42482_42537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (5))){
var inst_42350 = (state_42456[(15)]);
var inst_42354 = (state_42456[(25)]);
var inst_42353 = (state_42456[(7)]);
var inst_42352 = (state_42456[(2)]);
var inst_42353__$1 = cljs.core._conj.call(null,inst_42350,inst_42352);
var inst_42354__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42353__$1);
var state_42456__$1 = (function (){var statearr_42483 = state_42456;
(statearr_42483[(25)] = inst_42354__$1);

(statearr_42483[(7)] = inst_42353__$1);

return statearr_42483;
})();
if(cljs.core.truth_(inst_42354__$1)){
var statearr_42484_42538 = state_42456__$1;
(statearr_42484_42538[(1)] = (6));

} else {
var statearr_42485_42539 = state_42456__$1;
(statearr_42485_42539[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (14))){
var inst_42391 = (state_42456[(18)]);
var inst_42401 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42402 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_42403 = cljs.core.List.EMPTY;
var inst_42404 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42405 = cljs.core.cons.call(null,inst_42404,inst_42391);
var inst_42406 = cljs.core._conj.call(null,inst_42403,inst_42405);
var inst_42407 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42408 = cljs.core._conj.call(null,inst_42406,inst_42407);
var inst_42409 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42402,inst_42408,null];
var inst_42410 = cljs.core.PersistentHashMap.fromArrays(inst_42401,inst_42409);
var inst_42411 = cljs.test.do_report.call(null,inst_42410);
var state_42456__$1 = state_42456;
var statearr_42486_42540 = state_42456__$1;
(statearr_42486_42540[(2)] = inst_42411);

(statearr_42486_42540[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (16))){
var inst_42453 = (state_42456[(2)]);
var inst_42454 = done.call(null);
var state_42456__$1 = (function (){var statearr_42487 = state_42456;
(statearr_42487[(26)] = inst_42453);

return statearr_42487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42456__$1,inst_42454);
} else {
if((state_val_42457 === (10))){
var inst_42378 = (state_42456[(2)]);
var inst_42379 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42380 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_42381 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42380,inst_42378,null];
var inst_42382 = cljs.core.PersistentHashMap.fromArrays(inst_42379,inst_42381);
var inst_42383 = cljs.test.do_report.call(null,inst_42382);
var state_42456__$1 = state_42456;
var statearr_42488_42541 = state_42456__$1;
(statearr_42488_42541[(2)] = inst_42383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42456__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (18))){
var inst_42333 = (state_42456[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42456,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_42425 = cljs.core.List.EMPTY;
var inst_42426 = cljs.core._conj.call(null,inst_42425,"ERROR:");
var state_42456__$1 = (function (){var statearr_42489 = state_42456;
(statearr_42489[(23)] = inst_42426);

return statearr_42489;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42456__$1,(19),inst_42333);
} else {
if((state_val_42457 === (8))){
var inst_42354 = (state_42456[(25)]);
var inst_42375 = (state_42456[(2)]);
var state_42456__$1 = (function (){var statearr_42490 = state_42456;
(statearr_42490[(27)] = inst_42375);

return statearr_42490;
})();
var statearr_42491_42542 = state_42456__$1;
(statearr_42491_42542[(2)] = inst_42354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42456__$1);

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
var statearr_42495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42495[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_42495[(1)] = (1));

return statearr_42495;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_42456){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42496){if((e42496 instanceof Object)){
var ex__9301__auto__ = e42496;
var statearr_42497_42543 = state_42456;
(statearr_42497_42543[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42544 = state_42456;
state_42456 = G__42544;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_42456){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_42456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42498 = f__9319__auto__.call(null);
(statearr_42498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42160","meta42160",665223342,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test42159";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test42159");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test42159 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test42159(meta42160){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159(meta42160));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42159(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

cljs_async_patterns.core_test._GT__QMARK__one.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT__QMARK__one;},new cljs.core.Symbol("cljs-async-patterns.core-test",">?-one","cljs-async-patterns.core-test/>?-one",1504447598,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">?-one",">?-one",-398293297,null),"test/cljs_async_patterns/core_test.cljs",16,1,94,94,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT__QMARK__one)?cljs_async_patterns.core_test._GT__QMARK__one.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT__QMARK__two = (function cljs_async_patterns$core_test$_GT__QMARK__two(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT__QMARK__two.cljs$lang$var);
});
cljs_async_patterns.core_test._GT__QMARK__two.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Mirror of the >2 tests.");

try{if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545 = (function (meta42546){
this.meta42546 = meta42546;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42547,meta42546__$1){
var self__ = this;
var _42547__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545(meta42546__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42547){
var self__ = this;
var _42547__$1 = this;
return self__.meta42546;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_42676){
var state_val_42677 = (state_42676[(1)]);
if((state_val_42677 === (7))){
var inst_42573 = (state_42676[(7)]);
var inst_42583 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42584 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42585 = cljs.core.List.EMPTY;
var inst_42586 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42587 = cljs.core.cons.call(null,inst_42586,inst_42573);
var inst_42588 = cljs.core._conj.call(null,inst_42585,inst_42587);
var inst_42589 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42590 = cljs.core._conj.call(null,inst_42588,inst_42589);
var inst_42591 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42584,inst_42590,null];
var inst_42592 = cljs.core.PersistentHashMap.fromArrays(inst_42583,inst_42591);
var inst_42593 = cljs.test.do_report.call(null,inst_42592);
var state_42676__$1 = state_42676;
var statearr_42678_42889 = state_42676__$1;
(statearr_42678_42889[(2)] = inst_42593);

(statearr_42678_42889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (20))){
var inst_42649 = (state_42676[(8)]);
var inst_42652 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42653 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42654 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42649);
var inst_42655 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42653,inst_42654,null];
var inst_42656 = cljs.core.PersistentHashMap.fromArrays(inst_42652,inst_42655);
var inst_42657 = cljs.test.do_report.call(null,inst_42656);
var state_42676__$1 = state_42676;
var statearr_42679_42890 = state_42676__$1;
(statearr_42679_42890[(2)] = inst_42657);

(statearr_42679_42890[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (1))){
var inst_42551 = (state_42676[(9)]);
var inst_42550 = (state_42676[(10)]);
var inst_42549 = (state_42676[(11)]);
var inst_42549__$1 = cljs.core.async.chan.call(null,(1));
var inst_42550__$1 = cljs.core.async.chan.call(null,(1));
var inst_42551__$1 = cljs.core.async.chan.call(null,(1));
var inst_42552 = cljs.core.async.chan.call(null,(1));
var inst_42553 = cljs.core.async.chan.call(null,(1));
var inst_42554 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42549__$1);
var inst_42555 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_42554);
var inst_42556 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42550__$1);
var inst_42557 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_42556);
var inst_42558 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42551__$1,"ERROR:");
var inst_42559 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_42558);
var state_42676__$1 = (function (){var statearr_42680 = state_42676;
(statearr_42680[(9)] = inst_42551__$1);

(statearr_42680[(12)] = inst_42559);

(statearr_42680[(13)] = inst_42553);

(statearr_42680[(14)] = inst_42555);

(statearr_42680[(10)] = inst_42550__$1);

(statearr_42680[(11)] = inst_42549__$1);

(statearr_42680[(15)] = inst_42557);

(statearr_42680[(16)] = inst_42552);

return statearr_42680;
})();
var statearr_42681_42891 = state_42676__$1;
(statearr_42681_42891[(2)] = null);

(statearr_42681_42891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (4))){
var inst_42549 = (state_42676[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42676,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42569 = cljs.core.List.EMPTY;
var inst_42570 = cljs.core._conj.call(null,inst_42569,"suc");
var state_42676__$1 = (function (){var statearr_42682 = state_42676;
(statearr_42682[(17)] = inst_42570);

return statearr_42682;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(5),inst_42549);
} else {
if((state_val_42677 === (15))){
var inst_42612 = (state_42676[(18)]);
var inst_42633 = (state_42676[(2)]);
var state_42676__$1 = (function (){var statearr_42683 = state_42676;
(statearr_42683[(19)] = inst_42633);

return statearr_42683;
})();
var statearr_42684_42892 = state_42676__$1;
(statearr_42684_42892[(2)] = inst_42612);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (21))){
var inst_42649 = (state_42676[(8)]);
var inst_42659 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42660 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42661 = cljs.core.List.EMPTY;
var inst_42662 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42663 = cljs.core.cons.call(null,inst_42662,inst_42649);
var inst_42664 = cljs.core._conj.call(null,inst_42661,inst_42663);
var inst_42665 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42666 = cljs.core._conj.call(null,inst_42664,inst_42665);
var inst_42667 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42660,inst_42666,null];
var inst_42668 = cljs.core.PersistentHashMap.fromArrays(inst_42659,inst_42667);
var inst_42669 = cljs.test.do_report.call(null,inst_42668);
var state_42676__$1 = state_42676;
var statearr_42685_42893 = state_42676__$1;
(statearr_42685_42893[(2)] = inst_42669);

(statearr_42685_42893[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (13))){
var inst_42611 = (state_42676[(20)]);
var inst_42614 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42615 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_42616 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42611);
var inst_42617 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42615,inst_42616,null];
var inst_42618 = cljs.core.PersistentHashMap.fromArrays(inst_42614,inst_42617);
var inst_42619 = cljs.test.do_report.call(null,inst_42618);
var state_42676__$1 = state_42676;
var statearr_42686_42894 = state_42676__$1;
(statearr_42686_42894[(2)] = inst_42619);

(statearr_42686_42894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (22))){
var inst_42650 = (state_42676[(21)]);
var inst_42671 = (state_42676[(2)]);
var state_42676__$1 = (function (){var statearr_42687 = state_42676;
(statearr_42687[(22)] = inst_42671);

return statearr_42687;
})();
var statearr_42688_42895 = state_42676__$1;
(statearr_42688_42895[(2)] = inst_42650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (6))){
var inst_42573 = (state_42676[(7)]);
var inst_42576 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42577 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42578 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42573);
var inst_42579 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42577,inst_42578,null];
var inst_42580 = cljs.core.PersistentHashMap.fromArrays(inst_42576,inst_42579);
var inst_42581 = cljs.test.do_report.call(null,inst_42580);
var state_42676__$1 = state_42676;
var statearr_42689_42896 = state_42676__$1;
(statearr_42689_42896[(2)] = inst_42581);

(statearr_42689_42896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (17))){
var inst_42636 = (state_42676[(2)]);
var inst_42637 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42638 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42639 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42638,inst_42636,null];
var inst_42640 = cljs.core.PersistentHashMap.fromArrays(inst_42637,inst_42639);
var inst_42641 = cljs.test.do_report.call(null,inst_42640);
var state_42676__$1 = state_42676;
var statearr_42690_42897 = state_42676__$1;
(statearr_42690_42897[(2)] = inst_42641);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (3))){
var inst_42560 = (state_42676[(2)]);
var inst_42561 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42562 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42563 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42562,inst_42560,null];
var inst_42564 = cljs.core.PersistentHashMap.fromArrays(inst_42561,inst_42563);
var inst_42565 = cljs.test.do_report.call(null,inst_42564);
var state_42676__$1 = state_42676;
var statearr_42691_42898 = state_42676__$1;
(statearr_42691_42898[(2)] = inst_42565);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (12))){
var inst_42612 = (state_42676[(18)]);
var inst_42608 = (state_42676[(23)]);
var inst_42611 = (state_42676[(20)]);
var inst_42610 = (state_42676[(2)]);
var inst_42611__$1 = cljs.core._conj.call(null,inst_42608,inst_42610);
var inst_42612__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42611__$1);
var state_42676__$1 = (function (){var statearr_42692 = state_42676;
(statearr_42692[(18)] = inst_42612__$1);

(statearr_42692[(20)] = inst_42611__$1);

return statearr_42692;
})();
if(cljs.core.truth_(inst_42612__$1)){
var statearr_42693_42899 = state_42676__$1;
(statearr_42693_42899[(1)] = (13));

} else {
var statearr_42694_42900 = state_42676__$1;
(statearr_42694_42900[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (2))){
var inst_42597 = (state_42676[(2)]);
var state_42676__$1 = (function (){var statearr_42695 = state_42676;
(statearr_42695[(24)] = inst_42597);

return statearr_42695;
})();
var statearr_42696_42901 = state_42676__$1;
(statearr_42696_42901[(2)] = null);

(statearr_42696_42901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (19))){
var inst_42650 = (state_42676[(21)]);
var inst_42646 = (state_42676[(25)]);
var inst_42649 = (state_42676[(8)]);
var inst_42648 = (state_42676[(2)]);
var inst_42649__$1 = cljs.core._conj.call(null,inst_42646,inst_42648);
var inst_42650__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42649__$1);
var state_42676__$1 = (function (){var statearr_42697 = state_42676;
(statearr_42697[(21)] = inst_42650__$1);

(statearr_42697[(8)] = inst_42649__$1);

return statearr_42697;
})();
if(cljs.core.truth_(inst_42650__$1)){
var statearr_42698_42902 = state_42676__$1;
(statearr_42698_42902[(1)] = (20));

} else {
var statearr_42699_42903 = state_42676__$1;
(statearr_42699_42903[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (11))){
var inst_42550 = (state_42676[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42676,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_42607 = cljs.core.List.EMPTY;
var inst_42608 = cljs.core._conj.call(null,inst_42607,"err");
var state_42676__$1 = (function (){var statearr_42700 = state_42676;
(statearr_42700[(23)] = inst_42608);

return statearr_42700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(12),inst_42550);
} else {
if((state_val_42677 === (9))){
var inst_42635 = (state_42676[(2)]);
var state_42676__$1 = (function (){var statearr_42701 = state_42676;
(statearr_42701[(26)] = inst_42635);

return statearr_42701;
})();
var statearr_42702_42904 = state_42676__$1;
(statearr_42702_42904[(2)] = null);

(statearr_42702_42904[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (5))){
var inst_42570 = (state_42676[(17)]);
var inst_42574 = (state_42676[(27)]);
var inst_42573 = (state_42676[(7)]);
var inst_42572 = (state_42676[(2)]);
var inst_42573__$1 = cljs.core._conj.call(null,inst_42570,inst_42572);
var inst_42574__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42573__$1);
var state_42676__$1 = (function (){var statearr_42703 = state_42676;
(statearr_42703[(27)] = inst_42574__$1);

(statearr_42703[(7)] = inst_42573__$1);

return statearr_42703;
})();
if(cljs.core.truth_(inst_42574__$1)){
var statearr_42704_42905 = state_42676__$1;
(statearr_42704_42905[(1)] = (6));

} else {
var statearr_42705_42906 = state_42676__$1;
(statearr_42705_42906[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (14))){
var inst_42611 = (state_42676[(20)]);
var inst_42621 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42622 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_42623 = cljs.core.List.EMPTY;
var inst_42624 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42625 = cljs.core.cons.call(null,inst_42624,inst_42611);
var inst_42626 = cljs.core._conj.call(null,inst_42623,inst_42625);
var inst_42627 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42628 = cljs.core._conj.call(null,inst_42626,inst_42627);
var inst_42629 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42622,inst_42628,null];
var inst_42630 = cljs.core.PersistentHashMap.fromArrays(inst_42621,inst_42629);
var inst_42631 = cljs.test.do_report.call(null,inst_42630);
var state_42676__$1 = state_42676;
var statearr_42706_42907 = state_42676__$1;
(statearr_42706_42907[(2)] = inst_42631);

(statearr_42706_42907[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (16))){
var inst_42673 = (state_42676[(2)]);
var inst_42674 = done.call(null);
var state_42676__$1 = (function (){var statearr_42707 = state_42676;
(statearr_42707[(28)] = inst_42673);

return statearr_42707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42676__$1,inst_42674);
} else {
if((state_val_42677 === (10))){
var inst_42598 = (state_42676[(2)]);
var inst_42599 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42600 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_42601 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42600,inst_42598,null];
var inst_42602 = cljs.core.PersistentHashMap.fromArrays(inst_42599,inst_42601);
var inst_42603 = cljs.test.do_report.call(null,inst_42602);
var state_42676__$1 = state_42676;
var statearr_42708_42908 = state_42676__$1;
(statearr_42708_42908[(2)] = inst_42603);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (18))){
var inst_42551 = (state_42676[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42676,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_42645 = cljs.core.List.EMPTY;
var inst_42646 = cljs.core._conj.call(null,inst_42645,"ERROR:");
var state_42676__$1 = (function (){var statearr_42709 = state_42676;
(statearr_42709[(25)] = inst_42646);

return statearr_42709;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(19),inst_42551);
} else {
if((state_val_42677 === (8))){
var inst_42574 = (state_42676[(27)]);
var inst_42595 = (state_42676[(2)]);
var state_42676__$1 = (function (){var statearr_42710 = state_42676;
(statearr_42710[(29)] = inst_42595);

return statearr_42710;
})();
var statearr_42711_42909 = state_42676__$1;
(statearr_42711_42909[(2)] = inst_42574);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676__$1);

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
var statearr_42715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42715[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_42715[(1)] = (1));

return statearr_42715;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_42676){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42716){if((e42716 instanceof Object)){
var ex__9301__auto__ = e42716;
var statearr_42717_42910 = state_42676;
(statearr_42717_42910[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42911 = state_42676;
state_42676 = G__42911;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_42676){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_42676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_42718 = f__9319__auto__.call(null);
(statearr_42718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.prototype.apply = (function (self__,args42548){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42548)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_42846){
var state_val_42847 = (state_42846[(1)]);
if((state_val_42847 === (7))){
var inst_42743 = (state_42846[(7)]);
var inst_42753 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42754 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42755 = cljs.core.List.EMPTY;
var inst_42756 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42757 = cljs.core.cons.call(null,inst_42756,inst_42743);
var inst_42758 = cljs.core._conj.call(null,inst_42755,inst_42757);
var inst_42759 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42760 = cljs.core._conj.call(null,inst_42758,inst_42759);
var inst_42761 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42754,inst_42760,null];
var inst_42762 = cljs.core.PersistentHashMap.fromArrays(inst_42753,inst_42761);
var inst_42763 = cljs.test.do_report.call(null,inst_42762);
var state_42846__$1 = state_42846;
var statearr_42848_42912 = state_42846__$1;
(statearr_42848_42912[(2)] = inst_42763);

(statearr_42848_42912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (20))){
var inst_42819 = (state_42846[(8)]);
var inst_42822 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42823 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42824 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42819);
var inst_42825 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42823,inst_42824,null];
var inst_42826 = cljs.core.PersistentHashMap.fromArrays(inst_42822,inst_42825);
var inst_42827 = cljs.test.do_report.call(null,inst_42826);
var state_42846__$1 = state_42846;
var statearr_42849_42913 = state_42846__$1;
(statearr_42849_42913[(2)] = inst_42827);

(statearr_42849_42913[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (1))){
var inst_42720 = (state_42846[(9)]);
var inst_42719 = (state_42846[(10)]);
var inst_42721 = (state_42846[(11)]);
var inst_42719__$1 = cljs.core.async.chan.call(null,(1));
var inst_42720__$1 = cljs.core.async.chan.call(null,(1));
var inst_42721__$1 = cljs.core.async.chan.call(null,(1));
var inst_42722 = cljs.core.async.chan.call(null,(1));
var inst_42723 = cljs.core.async.chan.call(null,(1));
var inst_42724 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42719__$1);
var inst_42725 = cljs_async_patterns.core_test.async_2.call(null,"suc",inst_42724);
var inst_42726 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42720__$1);
var inst_42727 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_42726);
var inst_42728 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42721__$1,"ERROR:");
var inst_42729 = cljs_async_patterns.core_test.async_2.call(null,"err",inst_42728);
var state_42846__$1 = (function (){var statearr_42850 = state_42846;
(statearr_42850[(12)] = inst_42725);

(statearr_42850[(9)] = inst_42720__$1);

(statearr_42850[(13)] = inst_42723);

(statearr_42850[(14)] = inst_42722);

(statearr_42850[(10)] = inst_42719__$1);

(statearr_42850[(15)] = inst_42729);

(statearr_42850[(11)] = inst_42721__$1);

(statearr_42850[(16)] = inst_42727);

return statearr_42850;
})();
var statearr_42851_42914 = state_42846__$1;
(statearr_42851_42914[(2)] = null);

(statearr_42851_42914[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (4))){
var inst_42719 = (state_42846[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42846,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42739 = cljs.core.List.EMPTY;
var inst_42740 = cljs.core._conj.call(null,inst_42739,"suc");
var state_42846__$1 = (function (){var statearr_42852 = state_42846;
(statearr_42852[(17)] = inst_42740);

return statearr_42852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42846__$1,(5),inst_42719);
} else {
if((state_val_42847 === (15))){
var inst_42782 = (state_42846[(18)]);
var inst_42803 = (state_42846[(2)]);
var state_42846__$1 = (function (){var statearr_42853 = state_42846;
(statearr_42853[(19)] = inst_42803);

return statearr_42853;
})();
var statearr_42854_42915 = state_42846__$1;
(statearr_42854_42915[(2)] = inst_42782);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (21))){
var inst_42819 = (state_42846[(8)]);
var inst_42829 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42830 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42831 = cljs.core.List.EMPTY;
var inst_42832 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42833 = cljs.core.cons.call(null,inst_42832,inst_42819);
var inst_42834 = cljs.core._conj.call(null,inst_42831,inst_42833);
var inst_42835 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42836 = cljs.core._conj.call(null,inst_42834,inst_42835);
var inst_42837 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42830,inst_42836,null];
var inst_42838 = cljs.core.PersistentHashMap.fromArrays(inst_42829,inst_42837);
var inst_42839 = cljs.test.do_report.call(null,inst_42838);
var state_42846__$1 = state_42846;
var statearr_42855_42916 = state_42846__$1;
(statearr_42855_42916[(2)] = inst_42839);

(statearr_42855_42916[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (13))){
var inst_42781 = (state_42846[(20)]);
var inst_42784 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42785 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_42786 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42781);
var inst_42787 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42785,inst_42786,null];
var inst_42788 = cljs.core.PersistentHashMap.fromArrays(inst_42784,inst_42787);
var inst_42789 = cljs.test.do_report.call(null,inst_42788);
var state_42846__$1 = state_42846;
var statearr_42856_42917 = state_42846__$1;
(statearr_42856_42917[(2)] = inst_42789);

(statearr_42856_42917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (22))){
var inst_42820 = (state_42846[(21)]);
var inst_42841 = (state_42846[(2)]);
var state_42846__$1 = (function (){var statearr_42857 = state_42846;
(statearr_42857[(22)] = inst_42841);

return statearr_42857;
})();
var statearr_42858_42918 = state_42846__$1;
(statearr_42858_42918[(2)] = inst_42820);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (6))){
var inst_42743 = (state_42846[(7)]);
var inst_42746 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42747 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42748 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42743);
var inst_42749 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42747,inst_42748,null];
var inst_42750 = cljs.core.PersistentHashMap.fromArrays(inst_42746,inst_42749);
var inst_42751 = cljs.test.do_report.call(null,inst_42750);
var state_42846__$1 = state_42846;
var statearr_42859_42919 = state_42846__$1;
(statearr_42859_42919[(2)] = inst_42751);

(statearr_42859_42919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (17))){
var inst_42806 = (state_42846[(2)]);
var inst_42807 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42808 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_42809 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42808,inst_42806,null];
var inst_42810 = cljs.core.PersistentHashMap.fromArrays(inst_42807,inst_42809);
var inst_42811 = cljs.test.do_report.call(null,inst_42810);
var state_42846__$1 = state_42846;
var statearr_42860_42920 = state_42846__$1;
(statearr_42860_42920[(2)] = inst_42811);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (3))){
var inst_42730 = (state_42846[(2)]);
var inst_42731 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42732 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42733 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42732,inst_42730,null];
var inst_42734 = cljs.core.PersistentHashMap.fromArrays(inst_42731,inst_42733);
var inst_42735 = cljs.test.do_report.call(null,inst_42734);
var state_42846__$1 = state_42846;
var statearr_42861_42921 = state_42846__$1;
(statearr_42861_42921[(2)] = inst_42735);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (12))){
var inst_42782 = (state_42846[(18)]);
var inst_42781 = (state_42846[(20)]);
var inst_42778 = (state_42846[(23)]);
var inst_42780 = (state_42846[(2)]);
var inst_42781__$1 = cljs.core._conj.call(null,inst_42778,inst_42780);
var inst_42782__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42781__$1);
var state_42846__$1 = (function (){var statearr_42862 = state_42846;
(statearr_42862[(18)] = inst_42782__$1);

(statearr_42862[(20)] = inst_42781__$1);

return statearr_42862;
})();
if(cljs.core.truth_(inst_42782__$1)){
var statearr_42863_42922 = state_42846__$1;
(statearr_42863_42922[(1)] = (13));

} else {
var statearr_42864_42923 = state_42846__$1;
(statearr_42864_42923[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (2))){
var inst_42767 = (state_42846[(2)]);
var state_42846__$1 = (function (){var statearr_42865 = state_42846;
(statearr_42865[(24)] = inst_42767);

return statearr_42865;
})();
var statearr_42866_42924 = state_42846__$1;
(statearr_42866_42924[(2)] = null);

(statearr_42866_42924[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (19))){
var inst_42816 = (state_42846[(25)]);
var inst_42820 = (state_42846[(21)]);
var inst_42819 = (state_42846[(8)]);
var inst_42818 = (state_42846[(2)]);
var inst_42819__$1 = cljs.core._conj.call(null,inst_42816,inst_42818);
var inst_42820__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42819__$1);
var state_42846__$1 = (function (){var statearr_42867 = state_42846;
(statearr_42867[(21)] = inst_42820__$1);

(statearr_42867[(8)] = inst_42819__$1);

return statearr_42867;
})();
if(cljs.core.truth_(inst_42820__$1)){
var statearr_42868_42925 = state_42846__$1;
(statearr_42868_42925[(1)] = (20));

} else {
var statearr_42869_42926 = state_42846__$1;
(statearr_42869_42926[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (11))){
var inst_42720 = (state_42846[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42846,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_42777 = cljs.core.List.EMPTY;
var inst_42778 = cljs.core._conj.call(null,inst_42777,"err");
var state_42846__$1 = (function (){var statearr_42870 = state_42846;
(statearr_42870[(23)] = inst_42778);

return statearr_42870;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42846__$1,(12),inst_42720);
} else {
if((state_val_42847 === (9))){
var inst_42805 = (state_42846[(2)]);
var state_42846__$1 = (function (){var statearr_42871 = state_42846;
(statearr_42871[(26)] = inst_42805);

return statearr_42871;
})();
var statearr_42872_42927 = state_42846__$1;
(statearr_42872_42927[(2)] = null);

(statearr_42872_42927[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (5))){
var inst_42743 = (state_42846[(7)]);
var inst_42740 = (state_42846[(17)]);
var inst_42744 = (state_42846[(27)]);
var inst_42742 = (state_42846[(2)]);
var inst_42743__$1 = cljs.core._conj.call(null,inst_42740,inst_42742);
var inst_42744__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42743__$1);
var state_42846__$1 = (function (){var statearr_42873 = state_42846;
(statearr_42873[(7)] = inst_42743__$1);

(statearr_42873[(27)] = inst_42744__$1);

return statearr_42873;
})();
if(cljs.core.truth_(inst_42744__$1)){
var statearr_42874_42928 = state_42846__$1;
(statearr_42874_42928[(1)] = (6));

} else {
var statearr_42875_42929 = state_42846__$1;
(statearr_42875_42929[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (14))){
var inst_42781 = (state_42846[(20)]);
var inst_42791 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42792 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_42793 = cljs.core.List.EMPTY;
var inst_42794 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42795 = cljs.core.cons.call(null,inst_42794,inst_42781);
var inst_42796 = cljs.core._conj.call(null,inst_42793,inst_42795);
var inst_42797 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42798 = cljs.core._conj.call(null,inst_42796,inst_42797);
var inst_42799 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42792,inst_42798,null];
var inst_42800 = cljs.core.PersistentHashMap.fromArrays(inst_42791,inst_42799);
var inst_42801 = cljs.test.do_report.call(null,inst_42800);
var state_42846__$1 = state_42846;
var statearr_42876_42930 = state_42846__$1;
(statearr_42876_42930[(2)] = inst_42801);

(statearr_42876_42930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (16))){
var inst_42843 = (state_42846[(2)]);
var inst_42844 = done.call(null);
var state_42846__$1 = (function (){var statearr_42877 = state_42846;
(statearr_42877[(28)] = inst_42843);

return statearr_42877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42846__$1,inst_42844);
} else {
if((state_val_42847 === (10))){
var inst_42768 = (state_42846[(2)]);
var inst_42769 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42770 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err");
var inst_42771 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42770,inst_42768,null];
var inst_42772 = cljs.core.PersistentHashMap.fromArrays(inst_42769,inst_42771);
var inst_42773 = cljs.test.do_report.call(null,inst_42772);
var state_42846__$1 = state_42846;
var statearr_42878_42931 = state_42846__$1;
(statearr_42878_42931[(2)] = inst_42773);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (18))){
var inst_42721 = (state_42846[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42846,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_42815 = cljs.core.List.EMPTY;
var inst_42816 = cljs.core._conj.call(null,inst_42815,"ERROR:");
var state_42846__$1 = (function (){var statearr_42879 = state_42846;
(statearr_42879[(25)] = inst_42816);

return statearr_42879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42846__$1,(19),inst_42721);
} else {
if((state_val_42847 === (8))){
var inst_42744 = (state_42846[(27)]);
var inst_42765 = (state_42846[(2)]);
var state_42846__$1 = (function (){var statearr_42880 = state_42846;
(statearr_42880[(29)] = inst_42765);

return statearr_42880;
})();
var statearr_42881_42932 = state_42846__$1;
(statearr_42881_42932[(2)] = inst_42744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846__$1);

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
var statearr_42885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42885[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_42885[(1)] = (1));

return statearr_42885;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_42846){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_42846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e42886){if((e42886 instanceof Object)){
var ex__9301__auto__ = e42886;
var statearr_42887_42933 = state_42846;
(statearr_42887_42933[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42934 = state_42846;
state_42846 = G__42934;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_42846){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_42846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_42888 = f__9319__auto__.call(null);
(statearr_42888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_42888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42546","meta42546",817907770,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test42545";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test42545");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test42545 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test42545(meta42546){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545(meta42546));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42545(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

cljs_async_patterns.core_test._GT__QMARK__two.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT__QMARK__two;},new cljs.core.Symbol("cljs-async-patterns.core-test",">?-two","cljs-async-patterns.core-test/>?-two",743750973,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">?-two",">?-two",-1155451236,null),"test/cljs_async_patterns/core_test.cljs",16,1,107,107,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT__QMARK__two)?cljs_async_patterns.core_test._GT__QMARK__two.cljs$lang$test:null)]));
cljs_async_patterns.core_test._GT__QMARK__three = (function cljs_async_patterns$core_test$_GT__QMARK__three(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT__QMARK__three.cljs$lang$var);
});
cljs_async_patterns.core_test._GT__QMARK__three.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"Mirror of the >3 tests.");

try{if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935 = (function (meta42936){
this.meta42936 = meta42936;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42937,meta42936__$1){
var self__ = this;
var _42937__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935(meta42936__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42937){
var self__ = this;
var _42937__$1 = this;
return self__.meta42936;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10117__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__,self____$1){
return (function (state_43146){
var state_val_43147 = (state_43146[(1)]);
if((state_val_43147 === (7))){
var inst_42967 = (state_43146[(7)]);
var inst_42977 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42978 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42979 = cljs.core.List.EMPTY;
var inst_42980 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_42981 = cljs.core.cons.call(null,inst_42980,inst_42967);
var inst_42982 = cljs.core._conj.call(null,inst_42979,inst_42981);
var inst_42983 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_42984 = cljs.core._conj.call(null,inst_42982,inst_42983);
var inst_42985 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_42978,inst_42984,null];
var inst_42986 = cljs.core.PersistentHashMap.fromArrays(inst_42977,inst_42985);
var inst_42987 = cljs.test.do_report.call(null,inst_42986);
var state_43146__$1 = state_43146;
var statearr_43148_43483 = state_43146__$1;
(statearr_43148_43483[(2)] = inst_42987);

(statearr_43148_43483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (20))){
var inst_43043 = (state_43146[(8)]);
var inst_43046 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43047 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_43048 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43043);
var inst_43049 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43047,inst_43048,null];
var inst_43050 = cljs.core.PersistentHashMap.fromArrays(inst_43046,inst_43049);
var inst_43051 = cljs.test.do_report.call(null,inst_43050);
var state_43146__$1 = state_43146;
var statearr_43149_43484 = state_43146__$1;
(statearr_43149_43484[(2)] = inst_43051);

(statearr_43149_43484[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (27))){
var inst_43081 = (state_43146[(9)]);
var inst_43084 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43085 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_43086 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43081);
var inst_43087 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43085,inst_43086,null];
var inst_43088 = cljs.core.PersistentHashMap.fromArrays(inst_43084,inst_43087);
var inst_43089 = cljs.test.do_report.call(null,inst_43088);
var state_43146__$1 = state_43146;
var statearr_43150_43485 = state_43146__$1;
(statearr_43150_43485[(2)] = inst_43089);

(statearr_43150_43485[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (1))){
var inst_42943 = (state_43146[(10)]);
var inst_42942 = (state_43146[(11)]);
var inst_42939 = (state_43146[(12)]);
var inst_42941 = (state_43146[(13)]);
var inst_42940 = (state_43146[(14)]);
var inst_42939__$1 = cljs.core.async.chan.call(null,(1));
var inst_42940__$1 = cljs.core.async.chan.call(null,(1));
var inst_42941__$1 = cljs.core.async.chan.call(null,(1));
var inst_42942__$1 = cljs.core.async.chan.call(null,(1));
var inst_42943__$1 = cljs.core.async.chan.call(null,(1));
var inst_42944 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42939__$1);
var inst_42945 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_42944);
var inst_42946 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42940__$1);
var inst_42947 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_42946);
var inst_42948 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42941__$1);
var inst_42949 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_42948);
var inst_42950 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42942__$1,"ERROR:");
var inst_42951 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_42950);
var inst_42952 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_42943__$1,"ERROR:");
var inst_42953 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_42952);
var state_43146__$1 = (function (){var statearr_43151 = state_43146;
(statearr_43151[(15)] = inst_42949);

(statearr_43151[(16)] = inst_42953);

(statearr_43151[(17)] = inst_42947);

(statearr_43151[(10)] = inst_42943__$1);

(statearr_43151[(11)] = inst_42942__$1);

(statearr_43151[(18)] = inst_42951);

(statearr_43151[(12)] = inst_42939__$1);

(statearr_43151[(13)] = inst_42941__$1);

(statearr_43151[(14)] = inst_42940__$1);

(statearr_43151[(19)] = inst_42945);

return statearr_43151;
})();
var statearr_43152_43486 = state_43146__$1;
(statearr_43152_43486[(2)] = null);

(statearr_43152_43486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (24))){
var inst_43068 = (state_43146[(2)]);
var inst_43069 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43070 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_43071 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43070,inst_43068,null];
var inst_43072 = cljs.core.PersistentHashMap.fromArrays(inst_43069,inst_43071);
var inst_43073 = cljs.test.do_report.call(null,inst_43072);
var state_43146__$1 = state_43146;
var statearr_43153_43487 = state_43146__$1;
(statearr_43153_43487[(2)] = inst_43073);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (4))){
var inst_42939 = (state_43146[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43146,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_42963 = cljs.core.List.EMPTY;
var inst_42964 = cljs.core._conj.call(null,inst_42963,"suc");
var state_43146__$1 = (function (){var statearr_43154 = state_43146;
(statearr_43154[(20)] = inst_42964);

return statearr_43154;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43146__$1,(5),inst_42939);
} else {
if((state_val_43147 === (15))){
var inst_43006 = (state_43146[(21)]);
var inst_43027 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43155 = state_43146;
(statearr_43155[(22)] = inst_43027);

return statearr_43155;
})();
var statearr_43156_43488 = state_43146__$1;
(statearr_43156_43488[(2)] = inst_43006);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (21))){
var inst_43043 = (state_43146[(8)]);
var inst_43053 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43054 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_43055 = cljs.core.List.EMPTY;
var inst_43056 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43057 = cljs.core.cons.call(null,inst_43056,inst_43043);
var inst_43058 = cljs.core._conj.call(null,inst_43055,inst_43057);
var inst_43059 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43060 = cljs.core._conj.call(null,inst_43058,inst_43059);
var inst_43061 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43054,inst_43060,null];
var inst_43062 = cljs.core.PersistentHashMap.fromArrays(inst_43053,inst_43061);
var inst_43063 = cljs.test.do_report.call(null,inst_43062);
var state_43146__$1 = state_43146;
var statearr_43157_43489 = state_43146__$1;
(statearr_43157_43489[(2)] = inst_43063);

(statearr_43157_43489[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (31))){
var inst_43106 = (state_43146[(2)]);
var inst_43107 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43108 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_43109 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43108,inst_43106,null];
var inst_43110 = cljs.core.PersistentHashMap.fromArrays(inst_43107,inst_43109);
var inst_43111 = cljs.test.do_report.call(null,inst_43110);
var state_43146__$1 = state_43146;
var statearr_43158_43490 = state_43146__$1;
(statearr_43158_43490[(2)] = inst_43111);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (32))){
var inst_42943 = (state_43146[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43146,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_43115 = cljs.core.List.EMPTY;
var inst_43116 = cljs.core._conj.call(null,inst_43115,"ERROR:");
var state_43146__$1 = (function (){var statearr_43159 = state_43146;
(statearr_43159[(23)] = inst_43116);

return statearr_43159;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43146__$1,(33),inst_42943);
} else {
if((state_val_43147 === (33))){
var inst_43120 = (state_43146[(24)]);
var inst_43119 = (state_43146[(25)]);
var inst_43116 = (state_43146[(23)]);
var inst_43118 = (state_43146[(2)]);
var inst_43119__$1 = cljs.core._conj.call(null,inst_43116,inst_43118);
var inst_43120__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43119__$1);
var state_43146__$1 = (function (){var statearr_43160 = state_43146;
(statearr_43160[(24)] = inst_43120__$1);

(statearr_43160[(25)] = inst_43119__$1);

return statearr_43160;
})();
if(cljs.core.truth_(inst_43120__$1)){
var statearr_43161_43491 = state_43146__$1;
(statearr_43161_43491[(1)] = (34));

} else {
var statearr_43162_43492 = state_43146__$1;
(statearr_43162_43492[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (13))){
var inst_43005 = (state_43146[(26)]);
var inst_43008 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43009 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_43010 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43005);
var inst_43011 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43009,inst_43010,null];
var inst_43012 = cljs.core.PersistentHashMap.fromArrays(inst_43008,inst_43011);
var inst_43013 = cljs.test.do_report.call(null,inst_43012);
var state_43146__$1 = state_43146;
var statearr_43163_43493 = state_43146__$1;
(statearr_43163_43493[(2)] = inst_43013);

(statearr_43163_43493[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (22))){
var inst_43044 = (state_43146[(27)]);
var inst_43065 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43164 = state_43146;
(statearr_43164[(28)] = inst_43065);

return statearr_43164;
})();
var statearr_43165_43494 = state_43146__$1;
(statearr_43165_43494[(2)] = inst_43044);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (36))){
var inst_43120 = (state_43146[(24)]);
var inst_43141 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43166 = state_43146;
(statearr_43166[(29)] = inst_43141);

return statearr_43166;
})();
var statearr_43167_43495 = state_43146__$1;
(statearr_43167_43495[(2)] = inst_43120);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (29))){
var inst_43082 = (state_43146[(30)]);
var inst_43103 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43168 = state_43146;
(statearr_43168[(31)] = inst_43103);

return statearr_43168;
})();
var statearr_43169_43496 = state_43146__$1;
(statearr_43169_43496[(2)] = inst_43082);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (6))){
var inst_42967 = (state_43146[(7)]);
var inst_42970 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42971 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42972 = cljs.core.cons.call(null,cljs.core._EQ_,inst_42967);
var inst_42973 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_42971,inst_42972,null];
var inst_42974 = cljs.core.PersistentHashMap.fromArrays(inst_42970,inst_42973);
var inst_42975 = cljs.test.do_report.call(null,inst_42974);
var state_43146__$1 = state_43146;
var statearr_43170_43497 = state_43146__$1;
(statearr_43170_43497[(2)] = inst_42975);

(statearr_43170_43497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (28))){
var inst_43081 = (state_43146[(9)]);
var inst_43091 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43092 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_43093 = cljs.core.List.EMPTY;
var inst_43094 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43095 = cljs.core.cons.call(null,inst_43094,inst_43081);
var inst_43096 = cljs.core._conj.call(null,inst_43093,inst_43095);
var inst_43097 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43098 = cljs.core._conj.call(null,inst_43096,inst_43097);
var inst_43099 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43092,inst_43098,null];
var inst_43100 = cljs.core.PersistentHashMap.fromArrays(inst_43091,inst_43099);
var inst_43101 = cljs.test.do_report.call(null,inst_43100);
var state_43146__$1 = state_43146;
var statearr_43171_43498 = state_43146__$1;
(statearr_43171_43498[(2)] = inst_43101);

(statearr_43171_43498[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (25))){
var inst_42942 = (state_43146[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43146,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_43077 = cljs.core.List.EMPTY;
var inst_43078 = cljs.core._conj.call(null,inst_43077,"ERROR:");
var state_43146__$1 = (function (){var statearr_43172 = state_43146;
(statearr_43172[(32)] = inst_43078);

return statearr_43172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43146__$1,(26),inst_42942);
} else {
if((state_val_43147 === (34))){
var inst_43119 = (state_43146[(25)]);
var inst_43122 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43123 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_43124 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43119);
var inst_43125 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43123,inst_43124,null];
var inst_43126 = cljs.core.PersistentHashMap.fromArrays(inst_43122,inst_43125);
var inst_43127 = cljs.test.do_report.call(null,inst_43126);
var state_43146__$1 = state_43146;
var statearr_43173_43499 = state_43146__$1;
(statearr_43173_43499[(2)] = inst_43127);

(statearr_43173_43499[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (17))){
var inst_43030 = (state_43146[(2)]);
var inst_43031 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43032 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_43033 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43032,inst_43030,null];
var inst_43034 = cljs.core.PersistentHashMap.fromArrays(inst_43031,inst_43033);
var inst_43035 = cljs.test.do_report.call(null,inst_43034);
var state_43146__$1 = state_43146;
var statearr_43174_43500 = state_43146__$1;
(statearr_43174_43500[(2)] = inst_43035);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (3))){
var inst_42954 = (state_43146[(2)]);
var inst_42955 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42956 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_42957 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42956,inst_42954,null];
var inst_42958 = cljs.core.PersistentHashMap.fromArrays(inst_42955,inst_42957);
var inst_42959 = cljs.test.do_report.call(null,inst_42958);
var state_43146__$1 = state_43146;
var statearr_43175_43501 = state_43146__$1;
(statearr_43175_43501[(2)] = inst_42959);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (12))){
var inst_43002 = (state_43146[(33)]);
var inst_43006 = (state_43146[(21)]);
var inst_43005 = (state_43146[(26)]);
var inst_43004 = (state_43146[(2)]);
var inst_43005__$1 = cljs.core._conj.call(null,inst_43002,inst_43004);
var inst_43006__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43005__$1);
var state_43146__$1 = (function (){var statearr_43176 = state_43146;
(statearr_43176[(21)] = inst_43006__$1);

(statearr_43176[(26)] = inst_43005__$1);

return statearr_43176;
})();
if(cljs.core.truth_(inst_43006__$1)){
var statearr_43177_43502 = state_43146__$1;
(statearr_43177_43502[(1)] = (13));

} else {
var statearr_43178_43503 = state_43146__$1;
(statearr_43178_43503[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (2))){
var inst_42991 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43179 = state_43146;
(statearr_43179[(34)] = inst_42991);

return statearr_43179;
})();
var statearr_43180_43504 = state_43146__$1;
(statearr_43180_43504[(2)] = null);

(statearr_43180_43504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (23))){
var inst_43105 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43181 = state_43146;
(statearr_43181[(35)] = inst_43105);

return statearr_43181;
})();
var statearr_43182_43505 = state_43146__$1;
(statearr_43182_43505[(2)] = null);

(statearr_43182_43505[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (35))){
var inst_43119 = (state_43146[(25)]);
var inst_43129 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43130 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_43131 = cljs.core.List.EMPTY;
var inst_43132 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43133 = cljs.core.cons.call(null,inst_43132,inst_43119);
var inst_43134 = cljs.core._conj.call(null,inst_43131,inst_43133);
var inst_43135 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43136 = cljs.core._conj.call(null,inst_43134,inst_43135);
var inst_43137 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43130,inst_43136,null];
var inst_43138 = cljs.core.PersistentHashMap.fromArrays(inst_43129,inst_43137);
var inst_43139 = cljs.test.do_report.call(null,inst_43138);
var state_43146__$1 = state_43146;
var statearr_43183_43506 = state_43146__$1;
(statearr_43183_43506[(2)] = inst_43139);

(statearr_43183_43506[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (19))){
var inst_43044 = (state_43146[(27)]);
var inst_43040 = (state_43146[(36)]);
var inst_43043 = (state_43146[(8)]);
var inst_43042 = (state_43146[(2)]);
var inst_43043__$1 = cljs.core._conj.call(null,inst_43040,inst_43042);
var inst_43044__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43043__$1);
var state_43146__$1 = (function (){var statearr_43184 = state_43146;
(statearr_43184[(27)] = inst_43044__$1);

(statearr_43184[(8)] = inst_43043__$1);

return statearr_43184;
})();
if(cljs.core.truth_(inst_43044__$1)){
var statearr_43185_43507 = state_43146__$1;
(statearr_43185_43507[(1)] = (20));

} else {
var statearr_43186_43508 = state_43146__$1;
(statearr_43186_43508[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (11))){
var inst_42940 = (state_43146[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43146,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_43001 = cljs.core.List.EMPTY;
var inst_43002 = cljs.core._conj.call(null,inst_43001,"err1");
var state_43146__$1 = (function (){var statearr_43187 = state_43146;
(statearr_43187[(33)] = inst_43002);

return statearr_43187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43146__$1,(12),inst_42940);
} else {
if((state_val_43147 === (9))){
var inst_43029 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43188 = state_43146;
(statearr_43188[(37)] = inst_43029);

return statearr_43188;
})();
var statearr_43189_43509 = state_43146__$1;
(statearr_43189_43509[(2)] = null);

(statearr_43189_43509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (5))){
var inst_42964 = (state_43146[(20)]);
var inst_42967 = (state_43146[(7)]);
var inst_42968 = (state_43146[(38)]);
var inst_42966 = (state_43146[(2)]);
var inst_42967__$1 = cljs.core._conj.call(null,inst_42964,inst_42966);
var inst_42968__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_42967__$1);
var state_43146__$1 = (function (){var statearr_43190 = state_43146;
(statearr_43190[(7)] = inst_42967__$1);

(statearr_43190[(38)] = inst_42968__$1);

return statearr_43190;
})();
if(cljs.core.truth_(inst_42968__$1)){
var statearr_43191_43510 = state_43146__$1;
(statearr_43191_43510[(1)] = (6));

} else {
var statearr_43192_43511 = state_43146__$1;
(statearr_43192_43511[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (14))){
var inst_43005 = (state_43146[(26)]);
var inst_43015 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43016 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_43017 = cljs.core.List.EMPTY;
var inst_43018 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43019 = cljs.core.cons.call(null,inst_43018,inst_43005);
var inst_43020 = cljs.core._conj.call(null,inst_43017,inst_43019);
var inst_43021 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43022 = cljs.core._conj.call(null,inst_43020,inst_43021);
var inst_43023 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43016,inst_43022,null];
var inst_43024 = cljs.core.PersistentHashMap.fromArrays(inst_43015,inst_43023);
var inst_43025 = cljs.test.do_report.call(null,inst_43024);
var state_43146__$1 = state_43146;
var statearr_43193_43512 = state_43146__$1;
(statearr_43193_43512[(2)] = inst_43025);

(statearr_43193_43512[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (26))){
var inst_43081 = (state_43146[(9)]);
var inst_43078 = (state_43146[(32)]);
var inst_43082 = (state_43146[(30)]);
var inst_43080 = (state_43146[(2)]);
var inst_43081__$1 = cljs.core._conj.call(null,inst_43078,inst_43080);
var inst_43082__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43081__$1);
var state_43146__$1 = (function (){var statearr_43194 = state_43146;
(statearr_43194[(9)] = inst_43081__$1);

(statearr_43194[(30)] = inst_43082__$1);

return statearr_43194;
})();
if(cljs.core.truth_(inst_43082__$1)){
var statearr_43195_43513 = state_43146__$1;
(statearr_43195_43513[(1)] = (27));

} else {
var statearr_43196_43514 = state_43146__$1;
(statearr_43196_43514[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (16))){
var inst_43067 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43197 = state_43146;
(statearr_43197[(39)] = inst_43067);

return statearr_43197;
})();
var statearr_43198_43515 = state_43146__$1;
(statearr_43198_43515[(2)] = null);

(statearr_43198_43515[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (30))){
var inst_43143 = (state_43146[(2)]);
var inst_43144 = done.call(null);
var state_43146__$1 = (function (){var statearr_43199 = state_43146;
(statearr_43199[(40)] = inst_43143);

return statearr_43199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43146__$1,inst_43144);
} else {
if((state_val_43147 === (10))){
var inst_42992 = (state_43146[(2)]);
var inst_42993 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_42994 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_42995 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_42994,inst_42992,null];
var inst_42996 = cljs.core.PersistentHashMap.fromArrays(inst_42993,inst_42995);
var inst_42997 = cljs.test.do_report.call(null,inst_42996);
var state_43146__$1 = state_43146;
var statearr_43200_43516 = state_43146__$1;
(statearr_43200_43516[(2)] = inst_42997);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (18))){
var inst_42941 = (state_43146[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43146,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_43039 = cljs.core.List.EMPTY;
var inst_43040 = cljs.core._conj.call(null,inst_43039,"err2");
var state_43146__$1 = (function (){var statearr_43201 = state_43146;
(statearr_43201[(36)] = inst_43040);

return statearr_43201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43146__$1,(19),inst_42941);
} else {
if((state_val_43147 === (8))){
var inst_42968 = (state_43146[(38)]);
var inst_42989 = (state_43146[(2)]);
var state_43146__$1 = (function (){var statearr_43202 = state_43146;
(statearr_43202[(41)] = inst_42989);

return statearr_43202;
})();
var statearr_43203_43517 = state_43146__$1;
(statearr_43203_43517[(2)] = inst_42968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146__$1);

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
var statearr_43207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43207[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_43207[(1)] = (1));

return statearr_43207;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_43146){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_43146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e43208){if((e43208 instanceof Object)){
var ex__9301__auto__ = e43208;
var statearr_43209_43518 = state_43146;
(statearr_43209_43518[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43519 = state_43146;
state_43146 = G__43519;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_43146){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_43146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_43210 = f__9319__auto__.call(null);
(statearr_43210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_43210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.prototype.apply = (function (self__,args42938){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args42938)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10117__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10117__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10117__auto__){
return (function (state_43418){
var state_val_43419 = (state_43418[(1)]);
if((state_val_43419 === (7))){
var inst_43239 = (state_43418[(7)]);
var inst_43249 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43250 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_43251 = cljs.core.List.EMPTY;
var inst_43252 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43253 = cljs.core.cons.call(null,inst_43252,inst_43239);
var inst_43254 = cljs.core._conj.call(null,inst_43251,inst_43253);
var inst_43255 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43256 = cljs.core._conj.call(null,inst_43254,inst_43255);
var inst_43257 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43250,inst_43256,null];
var inst_43258 = cljs.core.PersistentHashMap.fromArrays(inst_43249,inst_43257);
var inst_43259 = cljs.test.do_report.call(null,inst_43258);
var state_43418__$1 = state_43418;
var statearr_43420_43520 = state_43418__$1;
(statearr_43420_43520[(2)] = inst_43259);

(statearr_43420_43520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (20))){
var inst_43315 = (state_43418[(8)]);
var inst_43318 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43319 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_43320 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43315);
var inst_43321 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43319,inst_43320,null];
var inst_43322 = cljs.core.PersistentHashMap.fromArrays(inst_43318,inst_43321);
var inst_43323 = cljs.test.do_report.call(null,inst_43322);
var state_43418__$1 = state_43418;
var statearr_43421_43521 = state_43418__$1;
(statearr_43421_43521[(2)] = inst_43323);

(statearr_43421_43521[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (27))){
var inst_43353 = (state_43418[(9)]);
var inst_43356 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43357 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_43358 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43353);
var inst_43359 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43357,inst_43358,null];
var inst_43360 = cljs.core.PersistentHashMap.fromArrays(inst_43356,inst_43359);
var inst_43361 = cljs.test.do_report.call(null,inst_43360);
var state_43418__$1 = state_43418;
var statearr_43422_43522 = state_43418__$1;
(statearr_43422_43522[(2)] = inst_43361);

(statearr_43422_43522[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (1))){
var inst_43213 = (state_43418[(10)]);
var inst_43215 = (state_43418[(11)]);
var inst_43211 = (state_43418[(12)]);
var inst_43212 = (state_43418[(13)]);
var inst_43214 = (state_43418[(14)]);
var inst_43211__$1 = cljs.core.async.chan.call(null,(1));
var inst_43212__$1 = cljs.core.async.chan.call(null,(1));
var inst_43213__$1 = cljs.core.async.chan.call(null,(1));
var inst_43214__$1 = cljs.core.async.chan.call(null,(1));
var inst_43215__$1 = cljs.core.async.chan.call(null,(1));
var inst_43216 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_43211__$1);
var inst_43217 = cljs_async_patterns.core_test.async_3.call(null,"suc",inst_43216);
var inst_43218 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_43212__$1);
var inst_43219 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_43218);
var inst_43220 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_43213__$1);
var inst_43221 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_43220);
var inst_43222 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_43214__$1,"ERROR:");
var inst_43223 = cljs_async_patterns.core_test.async_3.call(null,"err1",inst_43222);
var inst_43224 = cljs_async_patterns.core._GT__QMARK_.call(null,inst_43215__$1,"ERROR:");
var inst_43225 = cljs_async_patterns.core_test.async_3.call(null,"err2",inst_43224);
var state_43418__$1 = (function (){var statearr_43423 = state_43418;
(statearr_43423[(10)] = inst_43213__$1);

(statearr_43423[(15)] = inst_43217);

(statearr_43423[(11)] = inst_43215__$1);

(statearr_43423[(12)] = inst_43211__$1);

(statearr_43423[(13)] = inst_43212__$1);

(statearr_43423[(16)] = inst_43219);

(statearr_43423[(14)] = inst_43214__$1);

(statearr_43423[(17)] = inst_43223);

(statearr_43423[(18)] = inst_43221);

(statearr_43423[(19)] = inst_43225);

return statearr_43423;
})();
var statearr_43424_43523 = state_43418__$1;
(statearr_43424_43523[(2)] = null);

(statearr_43424_43523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (24))){
var inst_43340 = (state_43418[(2)]);
var inst_43341 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43342 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_43343 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43342,inst_43340,null];
var inst_43344 = cljs.core.PersistentHashMap.fromArrays(inst_43341,inst_43343);
var inst_43345 = cljs.test.do_report.call(null,inst_43344);
var state_43418__$1 = state_43418;
var statearr_43425_43524 = state_43418__$1;
(statearr_43425_43524[(2)] = inst_43345);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (4))){
var inst_43211 = (state_43418[(12)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43418,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_43235 = cljs.core.List.EMPTY;
var inst_43236 = cljs.core._conj.call(null,inst_43235,"suc");
var state_43418__$1 = (function (){var statearr_43426 = state_43418;
(statearr_43426[(20)] = inst_43236);

return statearr_43426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43418__$1,(5),inst_43211);
} else {
if((state_val_43419 === (15))){
var inst_43278 = (state_43418[(21)]);
var inst_43299 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43427 = state_43418;
(statearr_43427[(22)] = inst_43299);

return statearr_43427;
})();
var statearr_43428_43525 = state_43418__$1;
(statearr_43428_43525[(2)] = inst_43278);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (21))){
var inst_43315 = (state_43418[(8)]);
var inst_43325 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43326 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_43327 = cljs.core.List.EMPTY;
var inst_43328 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43329 = cljs.core.cons.call(null,inst_43328,inst_43315);
var inst_43330 = cljs.core._conj.call(null,inst_43327,inst_43329);
var inst_43331 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43332 = cljs.core._conj.call(null,inst_43330,inst_43331);
var inst_43333 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43326,inst_43332,null];
var inst_43334 = cljs.core.PersistentHashMap.fromArrays(inst_43325,inst_43333);
var inst_43335 = cljs.test.do_report.call(null,inst_43334);
var state_43418__$1 = state_43418;
var statearr_43429_43526 = state_43418__$1;
(statearr_43429_43526[(2)] = inst_43335);

(statearr_43429_43526[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (31))){
var inst_43378 = (state_43418[(2)]);
var inst_43379 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43380 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_43381 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43380,inst_43378,null];
var inst_43382 = cljs.core.PersistentHashMap.fromArrays(inst_43379,inst_43381);
var inst_43383 = cljs.test.do_report.call(null,inst_43382);
var state_43418__$1 = state_43418;
var statearr_43430_43527 = state_43418__$1;
(statearr_43430_43527[(2)] = inst_43383);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (32))){
var inst_43215 = (state_43418[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43418,(31),new cljs.core.Keyword(null,"default","default",-1987822328),null,(30));
var inst_43387 = cljs.core.List.EMPTY;
var inst_43388 = cljs.core._conj.call(null,inst_43387,"ERROR:");
var state_43418__$1 = (function (){var statearr_43431 = state_43418;
(statearr_43431[(23)] = inst_43388);

return statearr_43431;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43418__$1,(33),inst_43215);
} else {
if((state_val_43419 === (33))){
var inst_43388 = (state_43418[(23)]);
var inst_43391 = (state_43418[(24)]);
var inst_43392 = (state_43418[(25)]);
var inst_43390 = (state_43418[(2)]);
var inst_43391__$1 = cljs.core._conj.call(null,inst_43388,inst_43390);
var inst_43392__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43391__$1);
var state_43418__$1 = (function (){var statearr_43432 = state_43418;
(statearr_43432[(24)] = inst_43391__$1);

(statearr_43432[(25)] = inst_43392__$1);

return statearr_43432;
})();
if(cljs.core.truth_(inst_43392__$1)){
var statearr_43433_43528 = state_43418__$1;
(statearr_43433_43528[(1)] = (34));

} else {
var statearr_43434_43529 = state_43418__$1;
(statearr_43434_43529[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (13))){
var inst_43277 = (state_43418[(26)]);
var inst_43280 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43281 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_43282 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43277);
var inst_43283 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43281,inst_43282,null];
var inst_43284 = cljs.core.PersistentHashMap.fromArrays(inst_43280,inst_43283);
var inst_43285 = cljs.test.do_report.call(null,inst_43284);
var state_43418__$1 = state_43418;
var statearr_43435_43530 = state_43418__$1;
(statearr_43435_43530[(2)] = inst_43285);

(statearr_43435_43530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (22))){
var inst_43316 = (state_43418[(27)]);
var inst_43337 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43436 = state_43418;
(statearr_43436[(28)] = inst_43337);

return statearr_43436;
})();
var statearr_43437_43531 = state_43418__$1;
(statearr_43437_43531[(2)] = inst_43316);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (36))){
var inst_43392 = (state_43418[(25)]);
var inst_43413 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43438 = state_43418;
(statearr_43438[(29)] = inst_43413);

return statearr_43438;
})();
var statearr_43439_43532 = state_43418__$1;
(statearr_43439_43532[(2)] = inst_43392);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (29))){
var inst_43354 = (state_43418[(30)]);
var inst_43375 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43440 = state_43418;
(statearr_43440[(31)] = inst_43375);

return statearr_43440;
})();
var statearr_43441_43533 = state_43418__$1;
(statearr_43441_43533[(2)] = inst_43354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (6))){
var inst_43239 = (state_43418[(7)]);
var inst_43242 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43243 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_43244 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43239);
var inst_43245 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43243,inst_43244,null];
var inst_43246 = cljs.core.PersistentHashMap.fromArrays(inst_43242,inst_43245);
var inst_43247 = cljs.test.do_report.call(null,inst_43246);
var state_43418__$1 = state_43418;
var statearr_43442_43534 = state_43418__$1;
(statearr_43442_43534[(2)] = inst_43247);

(statearr_43442_43534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (28))){
var inst_43353 = (state_43418[(9)]);
var inst_43363 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43364 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c4","c4",-1626390159,null)),"ERROR:");
var inst_43365 = cljs.core.List.EMPTY;
var inst_43366 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43367 = cljs.core.cons.call(null,inst_43366,inst_43353);
var inst_43368 = cljs.core._conj.call(null,inst_43365,inst_43367);
var inst_43369 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43370 = cljs.core._conj.call(null,inst_43368,inst_43369);
var inst_43371 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43364,inst_43370,null];
var inst_43372 = cljs.core.PersistentHashMap.fromArrays(inst_43363,inst_43371);
var inst_43373 = cljs.test.do_report.call(null,inst_43372);
var state_43418__$1 = state_43418;
var statearr_43443_43535 = state_43418__$1;
(statearr_43443_43535[(2)] = inst_43373);

(statearr_43443_43535[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (25))){
var inst_43214 = (state_43418[(14)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43418,(24),new cljs.core.Keyword(null,"default","default",-1987822328),null,(23));
var inst_43349 = cljs.core.List.EMPTY;
var inst_43350 = cljs.core._conj.call(null,inst_43349,"ERROR:");
var state_43418__$1 = (function (){var statearr_43444 = state_43418;
(statearr_43444[(32)] = inst_43350);

return statearr_43444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43418__$1,(26),inst_43214);
} else {
if((state_val_43419 === (34))){
var inst_43391 = (state_43418[(24)]);
var inst_43394 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43395 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_43396 = cljs.core.cons.call(null,cljs.core._EQ_,inst_43391);
var inst_43397 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_43395,inst_43396,null];
var inst_43398 = cljs.core.PersistentHashMap.fromArrays(inst_43394,inst_43397);
var inst_43399 = cljs.test.do_report.call(null,inst_43398);
var state_43418__$1 = state_43418;
var statearr_43445_43536 = state_43418__$1;
(statearr_43445_43536[(2)] = inst_43399);

(statearr_43445_43536[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (17))){
var inst_43302 = (state_43418[(2)]);
var inst_43303 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43304 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"err2");
var inst_43305 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43304,inst_43302,null];
var inst_43306 = cljs.core.PersistentHashMap.fromArrays(inst_43303,inst_43305);
var inst_43307 = cljs.test.do_report.call(null,inst_43306);
var state_43418__$1 = state_43418;
var statearr_43446_43537 = state_43418__$1;
(statearr_43446_43537[(2)] = inst_43307);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (3))){
var inst_43226 = (state_43418[(2)]);
var inst_43227 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43228 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_43229 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43228,inst_43226,null];
var inst_43230 = cljs.core.PersistentHashMap.fromArrays(inst_43227,inst_43229);
var inst_43231 = cljs.test.do_report.call(null,inst_43230);
var state_43418__$1 = state_43418;
var statearr_43447_43538 = state_43418__$1;
(statearr_43447_43538[(2)] = inst_43231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (12))){
var inst_43274 = (state_43418[(33)]);
var inst_43277 = (state_43418[(26)]);
var inst_43278 = (state_43418[(21)]);
var inst_43276 = (state_43418[(2)]);
var inst_43277__$1 = cljs.core._conj.call(null,inst_43274,inst_43276);
var inst_43278__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43277__$1);
var state_43418__$1 = (function (){var statearr_43448 = state_43418;
(statearr_43448[(26)] = inst_43277__$1);

(statearr_43448[(21)] = inst_43278__$1);

return statearr_43448;
})();
if(cljs.core.truth_(inst_43278__$1)){
var statearr_43449_43539 = state_43418__$1;
(statearr_43449_43539[(1)] = (13));

} else {
var statearr_43450_43540 = state_43418__$1;
(statearr_43450_43540[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (2))){
var inst_43263 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43451 = state_43418;
(statearr_43451[(34)] = inst_43263);

return statearr_43451;
})();
var statearr_43452_43541 = state_43418__$1;
(statearr_43452_43541[(2)] = null);

(statearr_43452_43541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (23))){
var inst_43377 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43453 = state_43418;
(statearr_43453[(35)] = inst_43377);

return statearr_43453;
})();
var statearr_43454_43542 = state_43418__$1;
(statearr_43454_43542[(2)] = null);

(statearr_43454_43542[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (35))){
var inst_43391 = (state_43418[(24)]);
var inst_43401 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43402 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c5","c5",1025457982,null)),"ERROR:");
var inst_43403 = cljs.core.List.EMPTY;
var inst_43404 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43405 = cljs.core.cons.call(null,inst_43404,inst_43391);
var inst_43406 = cljs.core._conj.call(null,inst_43403,inst_43405);
var inst_43407 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43408 = cljs.core._conj.call(null,inst_43406,inst_43407);
var inst_43409 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43402,inst_43408,null];
var inst_43410 = cljs.core.PersistentHashMap.fromArrays(inst_43401,inst_43409);
var inst_43411 = cljs.test.do_report.call(null,inst_43410);
var state_43418__$1 = state_43418;
var statearr_43455_43543 = state_43418__$1;
(statearr_43455_43543[(2)] = inst_43411);

(statearr_43455_43543[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (19))){
var inst_43312 = (state_43418[(36)]);
var inst_43316 = (state_43418[(27)]);
var inst_43315 = (state_43418[(8)]);
var inst_43314 = (state_43418[(2)]);
var inst_43315__$1 = cljs.core._conj.call(null,inst_43312,inst_43314);
var inst_43316__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43315__$1);
var state_43418__$1 = (function (){var statearr_43456 = state_43418;
(statearr_43456[(27)] = inst_43316__$1);

(statearr_43456[(8)] = inst_43315__$1);

return statearr_43456;
})();
if(cljs.core.truth_(inst_43316__$1)){
var statearr_43457_43544 = state_43418__$1;
(statearr_43457_43544[(1)] = (20));

} else {
var statearr_43458_43545 = state_43418__$1;
(statearr_43458_43545[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (11))){
var inst_43212 = (state_43418[(13)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43418,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_43273 = cljs.core.List.EMPTY;
var inst_43274 = cljs.core._conj.call(null,inst_43273,"err1");
var state_43418__$1 = (function (){var statearr_43459 = state_43418;
(statearr_43459[(33)] = inst_43274);

return statearr_43459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43418__$1,(12),inst_43212);
} else {
if((state_val_43419 === (9))){
var inst_43301 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43460 = state_43418;
(statearr_43460[(37)] = inst_43301);

return statearr_43460;
})();
var statearr_43461_43546 = state_43418__$1;
(statearr_43461_43546[(2)] = null);

(statearr_43461_43546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (5))){
var inst_43236 = (state_43418[(20)]);
var inst_43239 = (state_43418[(7)]);
var inst_43240 = (state_43418[(38)]);
var inst_43238 = (state_43418[(2)]);
var inst_43239__$1 = cljs.core._conj.call(null,inst_43236,inst_43238);
var inst_43240__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43239__$1);
var state_43418__$1 = (function (){var statearr_43462 = state_43418;
(statearr_43462[(7)] = inst_43239__$1);

(statearr_43462[(38)] = inst_43240__$1);

return statearr_43462;
})();
if(cljs.core.truth_(inst_43240__$1)){
var statearr_43463_43547 = state_43418__$1;
(statearr_43463_43547[(1)] = (6));

} else {
var statearr_43464_43548 = state_43418__$1;
(statearr_43464_43548[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (14))){
var inst_43277 = (state_43418[(26)]);
var inst_43287 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43288 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_43289 = cljs.core.List.EMPTY;
var inst_43290 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_43291 = cljs.core.cons.call(null,inst_43290,inst_43277);
var inst_43292 = cljs.core._conj.call(null,inst_43289,inst_43291);
var inst_43293 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_43294 = cljs.core._conj.call(null,inst_43292,inst_43293);
var inst_43295 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_43288,inst_43294,null];
var inst_43296 = cljs.core.PersistentHashMap.fromArrays(inst_43287,inst_43295);
var inst_43297 = cljs.test.do_report.call(null,inst_43296);
var state_43418__$1 = state_43418;
var statearr_43465_43549 = state_43418__$1;
(statearr_43465_43549[(2)] = inst_43297);

(statearr_43465_43549[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (26))){
var inst_43354 = (state_43418[(30)]);
var inst_43350 = (state_43418[(32)]);
var inst_43353 = (state_43418[(9)]);
var inst_43352 = (state_43418[(2)]);
var inst_43353__$1 = cljs.core._conj.call(null,inst_43350,inst_43352);
var inst_43354__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_43353__$1);
var state_43418__$1 = (function (){var statearr_43466 = state_43418;
(statearr_43466[(30)] = inst_43354__$1);

(statearr_43466[(9)] = inst_43353__$1);

return statearr_43466;
})();
if(cljs.core.truth_(inst_43354__$1)){
var statearr_43467_43550 = state_43418__$1;
(statearr_43467_43550[(1)] = (27));

} else {
var statearr_43468_43551 = state_43418__$1;
(statearr_43468_43551[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (16))){
var inst_43339 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43469 = state_43418;
(statearr_43469[(39)] = inst_43339);

return statearr_43469;
})();
var statearr_43470_43552 = state_43418__$1;
(statearr_43470_43552[(2)] = null);

(statearr_43470_43552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (30))){
var inst_43415 = (state_43418[(2)]);
var inst_43416 = done.call(null);
var state_43418__$1 = (function (){var statearr_43471 = state_43418;
(statearr_43471[(40)] = inst_43415);

return statearr_43471;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43418__$1,inst_43416);
} else {
if((state_val_43419 === (10))){
var inst_43264 = (state_43418[(2)]);
var inst_43265 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43266 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),"err1");
var inst_43267 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_43266,inst_43264,null];
var inst_43268 = cljs.core.PersistentHashMap.fromArrays(inst_43265,inst_43267);
var inst_43269 = cljs.test.do_report.call(null,inst_43268);
var state_43418__$1 = state_43418;
var statearr_43472_43553 = state_43418__$1;
(statearr_43472_43553[(2)] = inst_43269);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43419 === (18))){
var inst_43213 = (state_43418[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43418,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_43311 = cljs.core.List.EMPTY;
var inst_43312 = cljs.core._conj.call(null,inst_43311,"err2");
var state_43418__$1 = (function (){var statearr_43473 = state_43418;
(statearr_43473[(36)] = inst_43312);

return statearr_43473;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43418__$1,(19),inst_43213);
} else {
if((state_val_43419 === (8))){
var inst_43240 = (state_43418[(38)]);
var inst_43261 = (state_43418[(2)]);
var state_43418__$1 = (function (){var statearr_43474 = state_43418;
(statearr_43474[(41)] = inst_43261);

return statearr_43474;
})();
var statearr_43475_43554 = state_43418__$1;
(statearr_43475_43554[(2)] = inst_43240);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418__$1);

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
var statearr_43479 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43479[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_43479[(1)] = (1));

return statearr_43479;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_43418){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_43418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e43480){if((e43480 instanceof Object)){
var ex__9301__auto__ = e43480;
var statearr_43481_43555 = state_43418;
(statearr_43481_43555[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43556 = state_43418;
state_43418 = G__43556;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_43418){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_43418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10117__auto__))
})();
var state__9320__auto__ = (function (){var statearr_43482 = f__9319__auto__.call(null);
(statearr_43482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_43482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10117__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42936","meta42936",-1448163087,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test42935";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test42935");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test42935 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test42935(meta42936){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935(meta42936));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test42935(null));
}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

cljs_async_patterns.core_test._GT__QMARK__three.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT__QMARK__three;},new cljs.core.Symbol("cljs-async-patterns.core-test",">?-three","cljs-async-patterns.core-test/>?-three",-1631860590,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">?-three",">?-three",1867805489,null),"test/cljs_async_patterns/core_test.cljs",18,1,120,120,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT__QMARK__three)?cljs_async_patterns.core_test._GT__QMARK__three.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map