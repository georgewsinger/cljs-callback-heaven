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
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428 = (function (meta27429){
this.meta27429 = meta27429;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27430,meta27429__$1){
var self__ = this;
var _27430__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428(meta27429__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27430){
var self__ = this;
var _27430__$1 = this;
return self__.meta27429;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___8994__auto__ = self____$1;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___8994__auto__,self____$1){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___8994__auto__,self____$1){
return (function (state_27557){
var state_val_27558 = (state_27557[(1)]);
if((state_val_27558 === (7))){
var inst_27454 = (state_27557[(7)]);
var inst_27464 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27465 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_27466 = cljs.core.List.EMPTY;
var inst_27467 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27468 = cljs.core.cons.call(null,inst_27467,inst_27454);
var inst_27469 = cljs.core._conj.call(null,inst_27466,inst_27468);
var inst_27470 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27471 = cljs.core._conj.call(null,inst_27469,inst_27470);
var inst_27472 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27465,inst_27471,null];
var inst_27473 = cljs.core.PersistentHashMap.fromArrays(inst_27464,inst_27472);
var inst_27474 = cljs.test.do_report.call(null,inst_27473);
var state_27557__$1 = state_27557;
var statearr_27559_27768 = state_27557__$1;
(statearr_27559_27768[(2)] = inst_27474);

(statearr_27559_27768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (20))){
var inst_27530 = (state_27557[(8)]);
var inst_27533 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27534 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_27535 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27530);
var inst_27536 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27534,inst_27535,null];
var inst_27537 = cljs.core.PersistentHashMap.fromArrays(inst_27533,inst_27536);
var inst_27538 = cljs.test.do_report.call(null,inst_27537);
var state_27557__$1 = state_27557;
var statearr_27560_27769 = state_27557__$1;
(statearr_27560_27769[(2)] = inst_27538);

(statearr_27560_27769[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (1))){
var inst_27433 = (state_27557[(9)]);
var inst_27432 = (state_27557[(10)]);
var inst_27434 = (state_27557[(11)]);
var inst_27432__$1 = cljs.core.async.chan.call(null,(1));
var inst_27433__$1 = cljs.core.async.chan.call(null,(1));
var inst_27434__$1 = cljs.core.async.chan.call(null,(1));
var inst_27435 = cljs_async_patterns.core._GT_1.call(null,inst_27432__$1);
var inst_27436 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_27435);
var inst_27437 = cljs_async_patterns.core._GT_1.call(null,inst_27433__$1);
var inst_27438 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_27437);
var inst_27439 = cljs_async_patterns.core._GT_1.call(null,inst_27434__$1,"ERROR:");
var inst_27440 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_27439);
var state_27557__$1 = (function (){var statearr_27561 = state_27557;
(statearr_27561[(12)] = inst_27440);

(statearr_27561[(13)] = inst_27436);

(statearr_27561[(14)] = inst_27438);

(statearr_27561[(9)] = inst_27433__$1);

(statearr_27561[(10)] = inst_27432__$1);

(statearr_27561[(11)] = inst_27434__$1);

return statearr_27561;
})();
var statearr_27562_27770 = state_27557__$1;
(statearr_27562_27770[(2)] = null);

(statearr_27562_27770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (4))){
var inst_27432 = (state_27557[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27557,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_27450 = cljs.core.List.EMPTY;
var inst_27451 = cljs.core._conj.call(null,inst_27450,"suc");
var state_27557__$1 = (function (){var statearr_27563 = state_27557;
(statearr_27563[(15)] = inst_27451);

return statearr_27563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(5),inst_27432);
} else {
if((state_val_27558 === (15))){
var inst_27493 = (state_27557[(16)]);
var inst_27514 = (state_27557[(2)]);
var state_27557__$1 = (function (){var statearr_27564 = state_27557;
(statearr_27564[(17)] = inst_27514);

return statearr_27564;
})();
var statearr_27565_27771 = state_27557__$1;
(statearr_27565_27771[(2)] = inst_27493);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (21))){
var inst_27530 = (state_27557[(8)]);
var inst_27540 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27541 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_27542 = cljs.core.List.EMPTY;
var inst_27543 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27544 = cljs.core.cons.call(null,inst_27543,inst_27530);
var inst_27545 = cljs.core._conj.call(null,inst_27542,inst_27544);
var inst_27546 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27547 = cljs.core._conj.call(null,inst_27545,inst_27546);
var inst_27548 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27541,inst_27547,null];
var inst_27549 = cljs.core.PersistentHashMap.fromArrays(inst_27540,inst_27548);
var inst_27550 = cljs.test.do_report.call(null,inst_27549);
var state_27557__$1 = state_27557;
var statearr_27566_27772 = state_27557__$1;
(statearr_27566_27772[(2)] = inst_27550);

(statearr_27566_27772[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (13))){
var inst_27492 = (state_27557[(18)]);
var inst_27495 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27496 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_27497 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27492);
var inst_27498 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27496,inst_27497,null];
var inst_27499 = cljs.core.PersistentHashMap.fromArrays(inst_27495,inst_27498);
var inst_27500 = cljs.test.do_report.call(null,inst_27499);
var state_27557__$1 = state_27557;
var statearr_27567_27773 = state_27557__$1;
(statearr_27567_27773[(2)] = inst_27500);

(statearr_27567_27773[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (22))){
var inst_27531 = (state_27557[(19)]);
var inst_27552 = (state_27557[(2)]);
var state_27557__$1 = (function (){var statearr_27568 = state_27557;
(statearr_27568[(20)] = inst_27552);

return statearr_27568;
})();
var statearr_27569_27774 = state_27557__$1;
(statearr_27569_27774[(2)] = inst_27531);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (6))){
var inst_27454 = (state_27557[(7)]);
var inst_27457 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27458 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_27459 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27454);
var inst_27460 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27458,inst_27459,null];
var inst_27461 = cljs.core.PersistentHashMap.fromArrays(inst_27457,inst_27460);
var inst_27462 = cljs.test.do_report.call(null,inst_27461);
var state_27557__$1 = state_27557;
var statearr_27570_27775 = state_27557__$1;
(statearr_27570_27775[(2)] = inst_27462);

(statearr_27570_27775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (17))){
var inst_27517 = (state_27557[(2)]);
var inst_27518 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27519 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_27520 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27519,inst_27517,null];
var inst_27521 = cljs.core.PersistentHashMap.fromArrays(inst_27518,inst_27520);
var inst_27522 = cljs.test.do_report.call(null,inst_27521);
var state_27557__$1 = state_27557;
var statearr_27571_27776 = state_27557__$1;
(statearr_27571_27776[(2)] = inst_27522);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (3))){
var inst_27441 = (state_27557[(2)]);
var inst_27442 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27443 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_27444 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27443,inst_27441,null];
var inst_27445 = cljs.core.PersistentHashMap.fromArrays(inst_27442,inst_27444);
var inst_27446 = cljs.test.do_report.call(null,inst_27445);
var state_27557__$1 = state_27557;
var statearr_27572_27777 = state_27557__$1;
(statearr_27572_27777[(2)] = inst_27446);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (12))){
var inst_27492 = (state_27557[(18)]);
var inst_27493 = (state_27557[(16)]);
var inst_27489 = (state_27557[(21)]);
var inst_27491 = (state_27557[(2)]);
var inst_27492__$1 = cljs.core._conj.call(null,inst_27489,inst_27491);
var inst_27493__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27492__$1);
var state_27557__$1 = (function (){var statearr_27573 = state_27557;
(statearr_27573[(18)] = inst_27492__$1);

(statearr_27573[(16)] = inst_27493__$1);

return statearr_27573;
})();
if(cljs.core.truth_(inst_27493__$1)){
var statearr_27574_27778 = state_27557__$1;
(statearr_27574_27778[(1)] = (13));

} else {
var statearr_27575_27779 = state_27557__$1;
(statearr_27575_27779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (2))){
var inst_27478 = (state_27557[(2)]);
var state_27557__$1 = (function (){var statearr_27576 = state_27557;
(statearr_27576[(22)] = inst_27478);

return statearr_27576;
})();
var statearr_27577_27780 = state_27557__$1;
(statearr_27577_27780[(2)] = null);

(statearr_27577_27780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (19))){
var inst_27530 = (state_27557[(8)]);
var inst_27527 = (state_27557[(23)]);
var inst_27531 = (state_27557[(19)]);
var inst_27529 = (state_27557[(2)]);
var inst_27530__$1 = cljs.core._conj.call(null,inst_27527,inst_27529);
var inst_27531__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27530__$1);
var state_27557__$1 = (function (){var statearr_27578 = state_27557;
(statearr_27578[(8)] = inst_27530__$1);

(statearr_27578[(19)] = inst_27531__$1);

return statearr_27578;
})();
if(cljs.core.truth_(inst_27531__$1)){
var statearr_27579_27781 = state_27557__$1;
(statearr_27579_27781[(1)] = (20));

} else {
var statearr_27580_27782 = state_27557__$1;
(statearr_27580_27782[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (11))){
var inst_27433 = (state_27557[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27557,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_27488 = cljs.core.List.EMPTY;
var inst_27489 = cljs.core._conj.call(null,inst_27488,false);
var state_27557__$1 = (function (){var statearr_27581 = state_27557;
(statearr_27581[(21)] = inst_27489);

return statearr_27581;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(12),inst_27433);
} else {
if((state_val_27558 === (9))){
var inst_27516 = (state_27557[(2)]);
var state_27557__$1 = (function (){var statearr_27582 = state_27557;
(statearr_27582[(24)] = inst_27516);

return statearr_27582;
})();
var statearr_27583_27783 = state_27557__$1;
(statearr_27583_27783[(2)] = null);

(statearr_27583_27783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (5))){
var inst_27455 = (state_27557[(25)]);
var inst_27451 = (state_27557[(15)]);
var inst_27454 = (state_27557[(7)]);
var inst_27453 = (state_27557[(2)]);
var inst_27454__$1 = cljs.core._conj.call(null,inst_27451,inst_27453);
var inst_27455__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27454__$1);
var state_27557__$1 = (function (){var statearr_27584 = state_27557;
(statearr_27584[(25)] = inst_27455__$1);

(statearr_27584[(7)] = inst_27454__$1);

return statearr_27584;
})();
if(cljs.core.truth_(inst_27455__$1)){
var statearr_27585_27784 = state_27557__$1;
(statearr_27585_27784[(1)] = (6));

} else {
var statearr_27586_27785 = state_27557__$1;
(statearr_27586_27785[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (14))){
var inst_27492 = (state_27557[(18)]);
var inst_27502 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27503 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_27504 = cljs.core.List.EMPTY;
var inst_27505 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27506 = cljs.core.cons.call(null,inst_27505,inst_27492);
var inst_27507 = cljs.core._conj.call(null,inst_27504,inst_27506);
var inst_27508 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27509 = cljs.core._conj.call(null,inst_27507,inst_27508);
var inst_27510 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27503,inst_27509,null];
var inst_27511 = cljs.core.PersistentHashMap.fromArrays(inst_27502,inst_27510);
var inst_27512 = cljs.test.do_report.call(null,inst_27511);
var state_27557__$1 = state_27557;
var statearr_27587_27786 = state_27557__$1;
(statearr_27587_27786[(2)] = inst_27512);

(statearr_27587_27786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (16))){
var inst_27554 = (state_27557[(2)]);
var inst_27555 = done.call(null);
var state_27557__$1 = (function (){var statearr_27588 = state_27557;
(statearr_27588[(26)] = inst_27554);

return statearr_27588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27557__$1,inst_27555);
} else {
if((state_val_27558 === (10))){
var inst_27479 = (state_27557[(2)]);
var inst_27480 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27481 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_27482 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27481,inst_27479,null];
var inst_27483 = cljs.core.PersistentHashMap.fromArrays(inst_27480,inst_27482);
var inst_27484 = cljs.test.do_report.call(null,inst_27483);
var state_27557__$1 = state_27557;
var statearr_27589_27787 = state_27557__$1;
(statearr_27589_27787[(2)] = inst_27484);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (18))){
var inst_27434 = (state_27557[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27557,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_27526 = cljs.core.List.EMPTY;
var inst_27527 = cljs.core._conj.call(null,inst_27526,"ERROR:");
var state_27557__$1 = (function (){var statearr_27590 = state_27557;
(statearr_27590[(23)] = inst_27527);

return statearr_27590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(19),inst_27434);
} else {
if((state_val_27558 === (8))){
var inst_27455 = (state_27557[(25)]);
var inst_27476 = (state_27557[(2)]);
var state_27557__$1 = (function (){var statearr_27591 = state_27557;
(statearr_27591[(27)] = inst_27476);

return statearr_27591;
})();
var statearr_27592_27788 = state_27557__$1;
(statearr_27592_27788[(2)] = inst_27455);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557__$1);

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
});})(c__8308__auto__,___8994__auto__,self____$1))
;
return ((function (switch__8287__auto__,c__8308__auto__,___8994__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__8288__auto__ = null;
var cljs_async_patterns$core_test$state_machine__8288__auto____0 = (function (){
var statearr_27596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27596[(0)] = cljs_async_patterns$core_test$state_machine__8288__auto__);

(statearr_27596[(1)] = (1));

return statearr_27596;
});
var cljs_async_patterns$core_test$state_machine__8288__auto____1 = (function (state_27557){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_27557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e27597){if((e27597 instanceof Object)){
var ex__8291__auto__ = e27597;
var statearr_27598_27789 = state_27557;
(statearr_27598_27789[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27790 = state_27557;
state_27557 = G__27790;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__8288__auto__ = function(state_27557){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__8288__auto____1.call(this,state_27557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__8288__auto____0;
cljs_async_patterns$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__8288__auto____1;
return cljs_async_patterns$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___8994__auto__,self____$1))
})();
var state__8310__auto__ = (function (){var statearr_27599 = f__8309__auto__.call(null);
(statearr_27599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_27599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___8994__auto__,self____$1))
);

return c__8308__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.prototype.apply = (function (self__,args27431){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args27431)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___8994__auto__ = this;
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__,___8994__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__,___8994__auto__){
return (function (state_27725){
var state_val_27726 = (state_27725[(1)]);
if((state_val_27726 === (7))){
var inst_27622 = (state_27725[(7)]);
var inst_27632 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27633 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_27634 = cljs.core.List.EMPTY;
var inst_27635 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27636 = cljs.core.cons.call(null,inst_27635,inst_27622);
var inst_27637 = cljs.core._conj.call(null,inst_27634,inst_27636);
var inst_27638 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27639 = cljs.core._conj.call(null,inst_27637,inst_27638);
var inst_27640 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27633,inst_27639,null];
var inst_27641 = cljs.core.PersistentHashMap.fromArrays(inst_27632,inst_27640);
var inst_27642 = cljs.test.do_report.call(null,inst_27641);
var state_27725__$1 = state_27725;
var statearr_27727_27791 = state_27725__$1;
(statearr_27727_27791[(2)] = inst_27642);

(statearr_27727_27791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (20))){
var inst_27698 = (state_27725[(8)]);
var inst_27701 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27702 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_27703 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27698);
var inst_27704 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27702,inst_27703,null];
var inst_27705 = cljs.core.PersistentHashMap.fromArrays(inst_27701,inst_27704);
var inst_27706 = cljs.test.do_report.call(null,inst_27705);
var state_27725__$1 = state_27725;
var statearr_27728_27792 = state_27725__$1;
(statearr_27728_27792[(2)] = inst_27706);

(statearr_27728_27792[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (1))){
var inst_27601 = (state_27725[(9)]);
var inst_27602 = (state_27725[(10)]);
var inst_27600 = (state_27725[(11)]);
var inst_27600__$1 = cljs.core.async.chan.call(null,(1));
var inst_27601__$1 = cljs.core.async.chan.call(null,(1));
var inst_27602__$1 = cljs.core.async.chan.call(null,(1));
var inst_27603 = cljs_async_patterns.core._GT_1.call(null,inst_27600__$1);
var inst_27604 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_27603);
var inst_27605 = cljs_async_patterns.core._GT_1.call(null,inst_27601__$1);
var inst_27606 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_27605);
var inst_27607 = cljs_async_patterns.core._GT_1.call(null,inst_27602__$1,"ERROR:");
var inst_27608 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_27607);
var state_27725__$1 = (function (){var statearr_27729 = state_27725;
(statearr_27729[(12)] = inst_27608);

(statearr_27729[(9)] = inst_27601__$1);

(statearr_27729[(13)] = inst_27604);

(statearr_27729[(14)] = inst_27606);

(statearr_27729[(10)] = inst_27602__$1);

(statearr_27729[(11)] = inst_27600__$1);

return statearr_27729;
})();
var statearr_27730_27793 = state_27725__$1;
(statearr_27730_27793[(2)] = null);

(statearr_27730_27793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (4))){
var inst_27600 = (state_27725[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27725,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_27618 = cljs.core.List.EMPTY;
var inst_27619 = cljs.core._conj.call(null,inst_27618,"suc");
var state_27725__$1 = (function (){var statearr_27731 = state_27725;
(statearr_27731[(15)] = inst_27619);

return statearr_27731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27725__$1,(5),inst_27600);
} else {
if((state_val_27726 === (15))){
var inst_27661 = (state_27725[(16)]);
var inst_27682 = (state_27725[(2)]);
var state_27725__$1 = (function (){var statearr_27732 = state_27725;
(statearr_27732[(17)] = inst_27682);

return statearr_27732;
})();
var statearr_27733_27794 = state_27725__$1;
(statearr_27733_27794[(2)] = inst_27661);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (21))){
var inst_27698 = (state_27725[(8)]);
var inst_27708 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27709 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_27710 = cljs.core.List.EMPTY;
var inst_27711 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27712 = cljs.core.cons.call(null,inst_27711,inst_27698);
var inst_27713 = cljs.core._conj.call(null,inst_27710,inst_27712);
var inst_27714 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27715 = cljs.core._conj.call(null,inst_27713,inst_27714);
var inst_27716 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27709,inst_27715,null];
var inst_27717 = cljs.core.PersistentHashMap.fromArrays(inst_27708,inst_27716);
var inst_27718 = cljs.test.do_report.call(null,inst_27717);
var state_27725__$1 = state_27725;
var statearr_27734_27795 = state_27725__$1;
(statearr_27734_27795[(2)] = inst_27718);

(statearr_27734_27795[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (13))){
var inst_27660 = (state_27725[(18)]);
var inst_27663 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27664 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_27665 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27660);
var inst_27666 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27664,inst_27665,null];
var inst_27667 = cljs.core.PersistentHashMap.fromArrays(inst_27663,inst_27666);
var inst_27668 = cljs.test.do_report.call(null,inst_27667);
var state_27725__$1 = state_27725;
var statearr_27735_27796 = state_27725__$1;
(statearr_27735_27796[(2)] = inst_27668);

(statearr_27735_27796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (22))){
var inst_27699 = (state_27725[(19)]);
var inst_27720 = (state_27725[(2)]);
var state_27725__$1 = (function (){var statearr_27736 = state_27725;
(statearr_27736[(20)] = inst_27720);

return statearr_27736;
})();
var statearr_27737_27797 = state_27725__$1;
(statearr_27737_27797[(2)] = inst_27699);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (6))){
var inst_27622 = (state_27725[(7)]);
var inst_27625 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27626 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_27627 = cljs.core.cons.call(null,cljs.core._EQ_,inst_27622);
var inst_27628 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_27626,inst_27627,null];
var inst_27629 = cljs.core.PersistentHashMap.fromArrays(inst_27625,inst_27628);
var inst_27630 = cljs.test.do_report.call(null,inst_27629);
var state_27725__$1 = state_27725;
var statearr_27738_27798 = state_27725__$1;
(statearr_27738_27798[(2)] = inst_27630);

(statearr_27738_27798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (17))){
var inst_27685 = (state_27725[(2)]);
var inst_27686 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27687 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_27688 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27687,inst_27685,null];
var inst_27689 = cljs.core.PersistentHashMap.fromArrays(inst_27686,inst_27688);
var inst_27690 = cljs.test.do_report.call(null,inst_27689);
var state_27725__$1 = state_27725;
var statearr_27739_27799 = state_27725__$1;
(statearr_27739_27799[(2)] = inst_27690);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (3))){
var inst_27609 = (state_27725[(2)]);
var inst_27610 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27611 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_27612 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27611,inst_27609,null];
var inst_27613 = cljs.core.PersistentHashMap.fromArrays(inst_27610,inst_27612);
var inst_27614 = cljs.test.do_report.call(null,inst_27613);
var state_27725__$1 = state_27725;
var statearr_27740_27800 = state_27725__$1;
(statearr_27740_27800[(2)] = inst_27614);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (12))){
var inst_27657 = (state_27725[(21)]);
var inst_27661 = (state_27725[(16)]);
var inst_27660 = (state_27725[(18)]);
var inst_27659 = (state_27725[(2)]);
var inst_27660__$1 = cljs.core._conj.call(null,inst_27657,inst_27659);
var inst_27661__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27660__$1);
var state_27725__$1 = (function (){var statearr_27741 = state_27725;
(statearr_27741[(16)] = inst_27661__$1);

(statearr_27741[(18)] = inst_27660__$1);

return statearr_27741;
})();
if(cljs.core.truth_(inst_27661__$1)){
var statearr_27742_27801 = state_27725__$1;
(statearr_27742_27801[(1)] = (13));

} else {
var statearr_27743_27802 = state_27725__$1;
(statearr_27743_27802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (2))){
var inst_27646 = (state_27725[(2)]);
var state_27725__$1 = (function (){var statearr_27744 = state_27725;
(statearr_27744[(22)] = inst_27646);

return statearr_27744;
})();
var statearr_27745_27803 = state_27725__$1;
(statearr_27745_27803[(2)] = null);

(statearr_27745_27803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (19))){
var inst_27699 = (state_27725[(19)]);
var inst_27698 = (state_27725[(8)]);
var inst_27695 = (state_27725[(23)]);
var inst_27697 = (state_27725[(2)]);
var inst_27698__$1 = cljs.core._conj.call(null,inst_27695,inst_27697);
var inst_27699__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27698__$1);
var state_27725__$1 = (function (){var statearr_27746 = state_27725;
(statearr_27746[(19)] = inst_27699__$1);

(statearr_27746[(8)] = inst_27698__$1);

return statearr_27746;
})();
if(cljs.core.truth_(inst_27699__$1)){
var statearr_27747_27804 = state_27725__$1;
(statearr_27747_27804[(1)] = (20));

} else {
var statearr_27748_27805 = state_27725__$1;
(statearr_27748_27805[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (11))){
var inst_27601 = (state_27725[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27725,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_27656 = cljs.core.List.EMPTY;
var inst_27657 = cljs.core._conj.call(null,inst_27656,false);
var state_27725__$1 = (function (){var statearr_27749 = state_27725;
(statearr_27749[(21)] = inst_27657);

return statearr_27749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27725__$1,(12),inst_27601);
} else {
if((state_val_27726 === (9))){
var inst_27684 = (state_27725[(2)]);
var state_27725__$1 = (function (){var statearr_27750 = state_27725;
(statearr_27750[(24)] = inst_27684);

return statearr_27750;
})();
var statearr_27751_27806 = state_27725__$1;
(statearr_27751_27806[(2)] = null);

(statearr_27751_27806[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (5))){
var inst_27622 = (state_27725[(7)]);
var inst_27623 = (state_27725[(25)]);
var inst_27619 = (state_27725[(15)]);
var inst_27621 = (state_27725[(2)]);
var inst_27622__$1 = cljs.core._conj.call(null,inst_27619,inst_27621);
var inst_27623__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_27622__$1);
var state_27725__$1 = (function (){var statearr_27752 = state_27725;
(statearr_27752[(7)] = inst_27622__$1);

(statearr_27752[(25)] = inst_27623__$1);

return statearr_27752;
})();
if(cljs.core.truth_(inst_27623__$1)){
var statearr_27753_27807 = state_27725__$1;
(statearr_27753_27807[(1)] = (6));

} else {
var statearr_27754_27808 = state_27725__$1;
(statearr_27754_27808[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (14))){
var inst_27660 = (state_27725[(18)]);
var inst_27670 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27671 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_27672 = cljs.core.List.EMPTY;
var inst_27673 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_27674 = cljs.core.cons.call(null,inst_27673,inst_27660);
var inst_27675 = cljs.core._conj.call(null,inst_27672,inst_27674);
var inst_27676 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_27677 = cljs.core._conj.call(null,inst_27675,inst_27676);
var inst_27678 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_27671,inst_27677,null];
var inst_27679 = cljs.core.PersistentHashMap.fromArrays(inst_27670,inst_27678);
var inst_27680 = cljs.test.do_report.call(null,inst_27679);
var state_27725__$1 = state_27725;
var statearr_27755_27809 = state_27725__$1;
(statearr_27755_27809[(2)] = inst_27680);

(statearr_27755_27809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (16))){
var inst_27722 = (state_27725[(2)]);
var inst_27723 = done.call(null);
var state_27725__$1 = (function (){var statearr_27756 = state_27725;
(statearr_27756[(26)] = inst_27722);

return statearr_27756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27725__$1,inst_27723);
} else {
if((state_val_27726 === (10))){
var inst_27647 = (state_27725[(2)]);
var inst_27648 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_27649 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_27650 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_27649,inst_27647,null];
var inst_27651 = cljs.core.PersistentHashMap.fromArrays(inst_27648,inst_27650);
var inst_27652 = cljs.test.do_report.call(null,inst_27651);
var state_27725__$1 = state_27725;
var statearr_27757_27810 = state_27725__$1;
(statearr_27757_27810[(2)] = inst_27652);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27726 === (18))){
var inst_27602 = (state_27725[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27725,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_27694 = cljs.core.List.EMPTY;
var inst_27695 = cljs.core._conj.call(null,inst_27694,"ERROR:");
var state_27725__$1 = (function (){var statearr_27758 = state_27725;
(statearr_27758[(23)] = inst_27695);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27725__$1,(19),inst_27602);
} else {
if((state_val_27726 === (8))){
var inst_27623 = (state_27725[(25)]);
var inst_27644 = (state_27725[(2)]);
var state_27725__$1 = (function (){var statearr_27759 = state_27725;
(statearr_27759[(27)] = inst_27644);

return statearr_27759;
})();
var statearr_27760_27811 = state_27725__$1;
(statearr_27760_27811[(2)] = inst_27623);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725__$1);

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
});})(c__8308__auto__,___8994__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__,___8994__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__8288__auto__ = null;
var cljs_async_patterns$core_test$state_machine__8288__auto____0 = (function (){
var statearr_27764 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27764[(0)] = cljs_async_patterns$core_test$state_machine__8288__auto__);

(statearr_27764[(1)] = (1));

return statearr_27764;
});
var cljs_async_patterns$core_test$state_machine__8288__auto____1 = (function (state_27725){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_27725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e27765){if((e27765 instanceof Object)){
var ex__8291__auto__ = e27765;
var statearr_27766_27812 = state_27725;
(statearr_27766_27812[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27813 = state_27725;
state_27725 = G__27813;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__8288__auto__ = function(state_27725){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__8288__auto____1.call(this,state_27725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__8288__auto____0;
cljs_async_patterns$core_test$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__8288__auto____1;
return cljs_async_patterns$core_test$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__,___8994__auto__))
})();
var state__8310__auto__ = (function (){var statearr_27767 = f__8309__auto__.call(null);
(statearr_27767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_27767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__,___8994__auto__))
);

return c__8308__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta27429","meta27429",54360341,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test27428";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test27428");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test27428 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test27428(meta27429){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428(meta27429));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test27428(null));
});

cljs_async_patterns.core_test._GT_1_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"/home/george/Dropbox/cljs-async-patterns/test/cljs_async_patterns/core_test.cljs",17,1,59,59,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map