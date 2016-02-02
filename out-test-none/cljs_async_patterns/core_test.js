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
cljs_async_patterns.core_test._GT_1_test = (function cljs_async_patterns$core_test$_GT_1_test(){
return cljs.test.test_var.call(null,cljs_async_patterns$core_test$_GT_1_test.cljs$lang$var);
});
cljs_async_patterns.core_test._GT_1_test.cljs$lang$test = (function (){
if(typeof cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.test.IAsyncTest}
 * @implements {cljs.core.IWithMeta}
*/
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216 = (function (meta10217){
this.meta10217 = meta10217;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10218,meta10217__$1){
var self__ = this;
var _10218__$1 = this;
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216(meta10217__$1));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10218){
var self__ = this;
var _10218__$1 = this;
return self__.meta10217;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.prototype.cljs$test$IAsyncTest$ = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.prototype.call = (function (self__,done){
var self__ = this;
var self____$1 = this;
var ___10128__auto__ = self____$1;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10128__auto__,self____$1){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10128__auto__,self____$1){
return (function (state_10345){
var state_val_10346 = (state_10345[(1)]);
if((state_val_10346 === (7))){
var inst_10242 = (state_10345[(7)]);
var inst_10252 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10253 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10254 = cljs.core.List.EMPTY;
var inst_10255 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10256 = cljs.core.cons.call(null,inst_10255,inst_10242);
var inst_10257 = cljs.core._conj.call(null,inst_10254,inst_10256);
var inst_10258 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10259 = cljs.core._conj.call(null,inst_10257,inst_10258);
var inst_10260 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10253,inst_10259,null];
var inst_10261 = cljs.core.PersistentHashMap.fromArrays(inst_10252,inst_10260);
var inst_10262 = cljs.test.do_report.call(null,inst_10261);
var state_10345__$1 = state_10345;
var statearr_10347_10556 = state_10345__$1;
(statearr_10347_10556[(2)] = inst_10262);

(statearr_10347_10556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (20))){
var inst_10318 = (state_10345[(8)]);
var inst_10321 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10322 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10323 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10318);
var inst_10324 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10322,inst_10323,null];
var inst_10325 = cljs.core.PersistentHashMap.fromArrays(inst_10321,inst_10324);
var inst_10326 = cljs.test.do_report.call(null,inst_10325);
var state_10345__$1 = state_10345;
var statearr_10348_10557 = state_10345__$1;
(statearr_10348_10557[(2)] = inst_10326);

(statearr_10348_10557[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (1))){
var inst_10221 = (state_10345[(9)]);
var inst_10222 = (state_10345[(10)]);
var inst_10220 = (state_10345[(11)]);
var inst_10220__$1 = cljs.core.async.chan.call(null,(1));
var inst_10221__$1 = cljs.core.async.chan.call(null,(1));
var inst_10222__$1 = cljs.core.async.chan.call(null,(1));
var inst_10223 = cljs_async_patterns.core._GT_1.call(null,inst_10220__$1);
var inst_10224 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_10223);
var inst_10225 = cljs_async_patterns.core._GT_1.call(null,inst_10221__$1);
var inst_10226 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10225);
var inst_10227 = cljs_async_patterns.core._GT_1.call(null,inst_10222__$1,"ERROR:");
var inst_10228 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10227);
var state_10345__$1 = (function (){var statearr_10349 = state_10345;
(statearr_10349[(9)] = inst_10221__$1);

(statearr_10349[(10)] = inst_10222__$1);

(statearr_10349[(12)] = inst_10228);

(statearr_10349[(13)] = inst_10224);

(statearr_10349[(11)] = inst_10220__$1);

(statearr_10349[(14)] = inst_10226);

return statearr_10349;
})();
var statearr_10350_10558 = state_10345__$1;
(statearr_10350_10558[(2)] = null);

(statearr_10350_10558[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (4))){
var inst_10220 = (state_10345[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10345,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_10238 = cljs.core.List.EMPTY;
var inst_10239 = cljs.core._conj.call(null,inst_10238,"suc");
var state_10345__$1 = (function (){var statearr_10351 = state_10345;
(statearr_10351[(15)] = inst_10239);

return statearr_10351;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10345__$1,(5),inst_10220);
} else {
if((state_val_10346 === (15))){
var inst_10281 = (state_10345[(16)]);
var inst_10302 = (state_10345[(2)]);
var state_10345__$1 = (function (){var statearr_10352 = state_10345;
(statearr_10352[(17)] = inst_10302);

return statearr_10352;
})();
var statearr_10353_10559 = state_10345__$1;
(statearr_10353_10559[(2)] = inst_10281);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (21))){
var inst_10318 = (state_10345[(8)]);
var inst_10328 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10329 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10330 = cljs.core.List.EMPTY;
var inst_10331 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10332 = cljs.core.cons.call(null,inst_10331,inst_10318);
var inst_10333 = cljs.core._conj.call(null,inst_10330,inst_10332);
var inst_10334 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10335 = cljs.core._conj.call(null,inst_10333,inst_10334);
var inst_10336 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10329,inst_10335,null];
var inst_10337 = cljs.core.PersistentHashMap.fromArrays(inst_10328,inst_10336);
var inst_10338 = cljs.test.do_report.call(null,inst_10337);
var state_10345__$1 = state_10345;
var statearr_10354_10560 = state_10345__$1;
(statearr_10354_10560[(2)] = inst_10338);

(statearr_10354_10560[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (13))){
var inst_10280 = (state_10345[(18)]);
var inst_10283 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10284 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10285 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10280);
var inst_10286 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10284,inst_10285,null];
var inst_10287 = cljs.core.PersistentHashMap.fromArrays(inst_10283,inst_10286);
var inst_10288 = cljs.test.do_report.call(null,inst_10287);
var state_10345__$1 = state_10345;
var statearr_10355_10561 = state_10345__$1;
(statearr_10355_10561[(2)] = inst_10288);

(statearr_10355_10561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (22))){
var inst_10319 = (state_10345[(19)]);
var inst_10340 = (state_10345[(2)]);
var state_10345__$1 = (function (){var statearr_10356 = state_10345;
(statearr_10356[(20)] = inst_10340);

return statearr_10356;
})();
var statearr_10357_10562 = state_10345__$1;
(statearr_10357_10562[(2)] = inst_10319);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (6))){
var inst_10242 = (state_10345[(7)]);
var inst_10245 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10246 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10247 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10242);
var inst_10248 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10246,inst_10247,null];
var inst_10249 = cljs.core.PersistentHashMap.fromArrays(inst_10245,inst_10248);
var inst_10250 = cljs.test.do_report.call(null,inst_10249);
var state_10345__$1 = state_10345;
var statearr_10358_10563 = state_10345__$1;
(statearr_10358_10563[(2)] = inst_10250);

(statearr_10358_10563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (17))){
var inst_10305 = (state_10345[(2)]);
var inst_10306 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10307 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10308 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10307,inst_10305,null];
var inst_10309 = cljs.core.PersistentHashMap.fromArrays(inst_10306,inst_10308);
var inst_10310 = cljs.test.do_report.call(null,inst_10309);
var state_10345__$1 = state_10345;
var statearr_10359_10564 = state_10345__$1;
(statearr_10359_10564[(2)] = inst_10310);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (3))){
var inst_10229 = (state_10345[(2)]);
var inst_10230 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10231 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10232 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10231,inst_10229,null];
var inst_10233 = cljs.core.PersistentHashMap.fromArrays(inst_10230,inst_10232);
var inst_10234 = cljs.test.do_report.call(null,inst_10233);
var state_10345__$1 = state_10345;
var statearr_10360_10565 = state_10345__$1;
(statearr_10360_10565[(2)] = inst_10234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (12))){
var inst_10281 = (state_10345[(16)]);
var inst_10280 = (state_10345[(18)]);
var inst_10277 = (state_10345[(21)]);
var inst_10279 = (state_10345[(2)]);
var inst_10280__$1 = cljs.core._conj.call(null,inst_10277,inst_10279);
var inst_10281__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10280__$1);
var state_10345__$1 = (function (){var statearr_10361 = state_10345;
(statearr_10361[(16)] = inst_10281__$1);

(statearr_10361[(18)] = inst_10280__$1);

return statearr_10361;
})();
if(cljs.core.truth_(inst_10281__$1)){
var statearr_10362_10566 = state_10345__$1;
(statearr_10362_10566[(1)] = (13));

} else {
var statearr_10363_10567 = state_10345__$1;
(statearr_10363_10567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (2))){
var inst_10266 = (state_10345[(2)]);
var state_10345__$1 = (function (){var statearr_10364 = state_10345;
(statearr_10364[(22)] = inst_10266);

return statearr_10364;
})();
var statearr_10365_10568 = state_10345__$1;
(statearr_10365_10568[(2)] = null);

(statearr_10365_10568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (19))){
var inst_10318 = (state_10345[(8)]);
var inst_10319 = (state_10345[(19)]);
var inst_10315 = (state_10345[(23)]);
var inst_10317 = (state_10345[(2)]);
var inst_10318__$1 = cljs.core._conj.call(null,inst_10315,inst_10317);
var inst_10319__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10318__$1);
var state_10345__$1 = (function (){var statearr_10366 = state_10345;
(statearr_10366[(8)] = inst_10318__$1);

(statearr_10366[(19)] = inst_10319__$1);

return statearr_10366;
})();
if(cljs.core.truth_(inst_10319__$1)){
var statearr_10367_10569 = state_10345__$1;
(statearr_10367_10569[(1)] = (20));

} else {
var statearr_10368_10570 = state_10345__$1;
(statearr_10368_10570[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (11))){
var inst_10221 = (state_10345[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10345,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_10276 = cljs.core.List.EMPTY;
var inst_10277 = cljs.core._conj.call(null,inst_10276,false);
var state_10345__$1 = (function (){var statearr_10369 = state_10345;
(statearr_10369[(21)] = inst_10277);

return statearr_10369;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10345__$1,(12),inst_10221);
} else {
if((state_val_10346 === (9))){
var inst_10304 = (state_10345[(2)]);
var state_10345__$1 = (function (){var statearr_10370 = state_10345;
(statearr_10370[(24)] = inst_10304);

return statearr_10370;
})();
var statearr_10371_10571 = state_10345__$1;
(statearr_10371_10571[(2)] = null);

(statearr_10371_10571[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (5))){
var inst_10243 = (state_10345[(25)]);
var inst_10239 = (state_10345[(15)]);
var inst_10242 = (state_10345[(7)]);
var inst_10241 = (state_10345[(2)]);
var inst_10242__$1 = cljs.core._conj.call(null,inst_10239,inst_10241);
var inst_10243__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10242__$1);
var state_10345__$1 = (function (){var statearr_10372 = state_10345;
(statearr_10372[(25)] = inst_10243__$1);

(statearr_10372[(7)] = inst_10242__$1);

return statearr_10372;
})();
if(cljs.core.truth_(inst_10243__$1)){
var statearr_10373_10572 = state_10345__$1;
(statearr_10373_10572[(1)] = (6));

} else {
var statearr_10374_10573 = state_10345__$1;
(statearr_10374_10573[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (14))){
var inst_10280 = (state_10345[(18)]);
var inst_10290 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10291 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10292 = cljs.core.List.EMPTY;
var inst_10293 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10294 = cljs.core.cons.call(null,inst_10293,inst_10280);
var inst_10295 = cljs.core._conj.call(null,inst_10292,inst_10294);
var inst_10296 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10297 = cljs.core._conj.call(null,inst_10295,inst_10296);
var inst_10298 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10291,inst_10297,null];
var inst_10299 = cljs.core.PersistentHashMap.fromArrays(inst_10290,inst_10298);
var inst_10300 = cljs.test.do_report.call(null,inst_10299);
var state_10345__$1 = state_10345;
var statearr_10375_10574 = state_10345__$1;
(statearr_10375_10574[(2)] = inst_10300);

(statearr_10375_10574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (16))){
var inst_10342 = (state_10345[(2)]);
var inst_10343 = done.call(null);
var state_10345__$1 = (function (){var statearr_10376 = state_10345;
(statearr_10376[(26)] = inst_10342);

return statearr_10376;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10345__$1,inst_10343);
} else {
if((state_val_10346 === (10))){
var inst_10267 = (state_10345[(2)]);
var inst_10268 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10269 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10270 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10269,inst_10267,null];
var inst_10271 = cljs.core.PersistentHashMap.fromArrays(inst_10268,inst_10270);
var inst_10272 = cljs.test.do_report.call(null,inst_10271);
var state_10345__$1 = state_10345;
var statearr_10377_10575 = state_10345__$1;
(statearr_10377_10575[(2)] = inst_10272);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10345__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10346 === (18))){
var inst_10222 = (state_10345[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10345,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_10314 = cljs.core.List.EMPTY;
var inst_10315 = cljs.core._conj.call(null,inst_10314,"ERROR:");
var state_10345__$1 = (function (){var statearr_10378 = state_10345;
(statearr_10378[(23)] = inst_10315);

return statearr_10378;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10345__$1,(19),inst_10222);
} else {
if((state_val_10346 === (8))){
var inst_10243 = (state_10345[(25)]);
var inst_10264 = (state_10345[(2)]);
var state_10345__$1 = (function (){var statearr_10379 = state_10345;
(statearr_10379[(27)] = inst_10264);

return statearr_10379;
})();
var statearr_10380_10576 = state_10345__$1;
(statearr_10380_10576[(2)] = inst_10243);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10345__$1);

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
});})(c__9318__auto__,___10128__auto__,self____$1))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10128__auto__,self____$1){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_10384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10384[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_10384[(1)] = (1));

return statearr_10384;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_10345){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_10345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e10385){if((e10385 instanceof Object)){
var ex__9301__auto__ = e10385;
var statearr_10386_10577 = state_10345;
(statearr_10386_10577[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10578 = state_10345;
state_10345 = G__10578;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_10345){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_10345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10128__auto__,self____$1))
})();
var state__9320__auto__ = (function (){var statearr_10387 = f__9319__auto__.call(null);
(statearr_10387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_10387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10128__auto__,self____$1))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.prototype.apply = (function (self__,args10219){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10219)));
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.prototype.cljs$core$IFn$_invoke$arity$1 = (function (done){
var self__ = this;
var ___10128__auto__ = this;
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,___10128__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,___10128__auto__){
return (function (state_10513){
var state_val_10514 = (state_10513[(1)]);
if((state_val_10514 === (7))){
var inst_10410 = (state_10513[(7)]);
var inst_10420 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10421 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10422 = cljs.core.List.EMPTY;
var inst_10423 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10424 = cljs.core.cons.call(null,inst_10423,inst_10410);
var inst_10425 = cljs.core._conj.call(null,inst_10422,inst_10424);
var inst_10426 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10427 = cljs.core._conj.call(null,inst_10425,inst_10426);
var inst_10428 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10421,inst_10427,null];
var inst_10429 = cljs.core.PersistentHashMap.fromArrays(inst_10420,inst_10428);
var inst_10430 = cljs.test.do_report.call(null,inst_10429);
var state_10513__$1 = state_10513;
var statearr_10515_10579 = state_10513__$1;
(statearr_10515_10579[(2)] = inst_10430);

(statearr_10515_10579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (20))){
var inst_10486 = (state_10513[(8)]);
var inst_10489 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10490 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10491 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10486);
var inst_10492 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10490,inst_10491,null];
var inst_10493 = cljs.core.PersistentHashMap.fromArrays(inst_10489,inst_10492);
var inst_10494 = cljs.test.do_report.call(null,inst_10493);
var state_10513__$1 = state_10513;
var statearr_10516_10580 = state_10513__$1;
(statearr_10516_10580[(2)] = inst_10494);

(statearr_10516_10580[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (1))){
var inst_10388 = (state_10513[(9)]);
var inst_10390 = (state_10513[(10)]);
var inst_10389 = (state_10513[(11)]);
var inst_10388__$1 = cljs.core.async.chan.call(null,(1));
var inst_10389__$1 = cljs.core.async.chan.call(null,(1));
var inst_10390__$1 = cljs.core.async.chan.call(null,(1));
var inst_10391 = cljs_async_patterns.core._GT_1.call(null,inst_10388__$1);
var inst_10392 = cljs_async_patterns.core_test.async_1.call(null,"suc",inst_10391);
var inst_10393 = cljs_async_patterns.core._GT_1.call(null,inst_10389__$1);
var inst_10394 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10393);
var inst_10395 = cljs_async_patterns.core._GT_1.call(null,inst_10390__$1,"ERROR:");
var inst_10396 = cljs_async_patterns.core_test.async_1.call(null,"err",inst_10395);
var state_10513__$1 = (function (){var statearr_10517 = state_10513;
(statearr_10517[(12)] = inst_10392);

(statearr_10517[(9)] = inst_10388__$1);

(statearr_10517[(10)] = inst_10390__$1);

(statearr_10517[(13)] = inst_10394);

(statearr_10517[(11)] = inst_10389__$1);

(statearr_10517[(14)] = inst_10396);

return statearr_10517;
})();
var statearr_10518_10581 = state_10513__$1;
(statearr_10518_10581[(2)] = null);

(statearr_10518_10581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (4))){
var inst_10388 = (state_10513[(9)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10513,(3),new cljs.core.Keyword(null,"default","default",-1987822328),null,(2));
var inst_10406 = cljs.core.List.EMPTY;
var inst_10407 = cljs.core._conj.call(null,inst_10406,"suc");
var state_10513__$1 = (function (){var statearr_10519 = state_10513;
(statearr_10519[(15)] = inst_10407);

return statearr_10519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10513__$1,(5),inst_10388);
} else {
if((state_val_10514 === (15))){
var inst_10449 = (state_10513[(16)]);
var inst_10470 = (state_10513[(2)]);
var state_10513__$1 = (function (){var statearr_10520 = state_10513;
(statearr_10520[(17)] = inst_10470);

return statearr_10520;
})();
var statearr_10521_10582 = state_10513__$1;
(statearr_10521_10582[(2)] = inst_10449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (21))){
var inst_10486 = (state_10513[(8)]);
var inst_10496 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10497 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10498 = cljs.core.List.EMPTY;
var inst_10499 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10500 = cljs.core.cons.call(null,inst_10499,inst_10486);
var inst_10501 = cljs.core._conj.call(null,inst_10498,inst_10500);
var inst_10502 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10503 = cljs.core._conj.call(null,inst_10501,inst_10502);
var inst_10504 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10497,inst_10503,null];
var inst_10505 = cljs.core.PersistentHashMap.fromArrays(inst_10496,inst_10504);
var inst_10506 = cljs.test.do_report.call(null,inst_10505);
var state_10513__$1 = state_10513;
var statearr_10522_10583 = state_10513__$1;
(statearr_10522_10583[(2)] = inst_10506);

(statearr_10522_10583[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (13))){
var inst_10448 = (state_10513[(18)]);
var inst_10451 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10452 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10453 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10448);
var inst_10454 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10452,inst_10453,null];
var inst_10455 = cljs.core.PersistentHashMap.fromArrays(inst_10451,inst_10454);
var inst_10456 = cljs.test.do_report.call(null,inst_10455);
var state_10513__$1 = state_10513;
var statearr_10523_10584 = state_10513__$1;
(statearr_10523_10584[(2)] = inst_10456);

(statearr_10523_10584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (22))){
var inst_10487 = (state_10513[(19)]);
var inst_10508 = (state_10513[(2)]);
var state_10513__$1 = (function (){var statearr_10524 = state_10513;
(statearr_10524[(20)] = inst_10508);

return statearr_10524;
})();
var statearr_10525_10585 = state_10513__$1;
(statearr_10525_10585[(2)] = inst_10487);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (6))){
var inst_10410 = (state_10513[(7)]);
var inst_10413 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10414 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10415 = cljs.core.cons.call(null,cljs.core._EQ_,inst_10410);
var inst_10416 = [new cljs.core.Keyword(null,"pass","pass",1574159993),inst_10414,inst_10415,null];
var inst_10417 = cljs.core.PersistentHashMap.fromArrays(inst_10413,inst_10416);
var inst_10418 = cljs.test.do_report.call(null,inst_10417);
var state_10513__$1 = state_10513;
var statearr_10526_10586 = state_10513__$1;
(statearr_10526_10586[(2)] = inst_10418);

(statearr_10526_10586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (17))){
var inst_10473 = (state_10513[(2)]);
var inst_10474 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10475 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c3","c3",468715789,null)),"ERROR:");
var inst_10476 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10475,inst_10473,null];
var inst_10477 = cljs.core.PersistentHashMap.fromArrays(inst_10474,inst_10476);
var inst_10478 = cljs.test.do_report.call(null,inst_10477);
var state_10513__$1 = state_10513;
var statearr_10527_10587 = state_10513__$1;
(statearr_10527_10587[(2)] = inst_10478);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (3))){
var inst_10397 = (state_10513[(2)]);
var inst_10398 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10399 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c1","c1",-1521904966,null)),"suc");
var inst_10400 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10399,inst_10397,null];
var inst_10401 = cljs.core.PersistentHashMap.fromArrays(inst_10398,inst_10400);
var inst_10402 = cljs.test.do_report.call(null,inst_10401);
var state_10513__$1 = state_10513;
var statearr_10528_10588 = state_10513__$1;
(statearr_10528_10588[(2)] = inst_10402);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (12))){
var inst_10445 = (state_10513[(21)]);
var inst_10448 = (state_10513[(18)]);
var inst_10449 = (state_10513[(16)]);
var inst_10447 = (state_10513[(2)]);
var inst_10448__$1 = cljs.core._conj.call(null,inst_10445,inst_10447);
var inst_10449__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10448__$1);
var state_10513__$1 = (function (){var statearr_10529 = state_10513;
(statearr_10529[(18)] = inst_10448__$1);

(statearr_10529[(16)] = inst_10449__$1);

return statearr_10529;
})();
if(cljs.core.truth_(inst_10449__$1)){
var statearr_10530_10589 = state_10513__$1;
(statearr_10530_10589[(1)] = (13));

} else {
var statearr_10531_10590 = state_10513__$1;
(statearr_10531_10590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (2))){
var inst_10434 = (state_10513[(2)]);
var state_10513__$1 = (function (){var statearr_10532 = state_10513;
(statearr_10532[(22)] = inst_10434);

return statearr_10532;
})();
var statearr_10533_10591 = state_10513__$1;
(statearr_10533_10591[(2)] = null);

(statearr_10533_10591[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (19))){
var inst_10487 = (state_10513[(19)]);
var inst_10483 = (state_10513[(23)]);
var inst_10486 = (state_10513[(8)]);
var inst_10485 = (state_10513[(2)]);
var inst_10486__$1 = cljs.core._conj.call(null,inst_10483,inst_10485);
var inst_10487__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10486__$1);
var state_10513__$1 = (function (){var statearr_10534 = state_10513;
(statearr_10534[(19)] = inst_10487__$1);

(statearr_10534[(8)] = inst_10486__$1);

return statearr_10534;
})();
if(cljs.core.truth_(inst_10487__$1)){
var statearr_10535_10592 = state_10513__$1;
(statearr_10535_10592[(1)] = (20));

} else {
var statearr_10536_10593 = state_10513__$1;
(statearr_10536_10593[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (11))){
var inst_10389 = (state_10513[(11)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10513,(10),new cljs.core.Keyword(null,"default","default",-1987822328),null,(9));
var inst_10444 = cljs.core.List.EMPTY;
var inst_10445 = cljs.core._conj.call(null,inst_10444,false);
var state_10513__$1 = (function (){var statearr_10537 = state_10513;
(statearr_10537[(21)] = inst_10445);

return statearr_10537;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10513__$1,(12),inst_10389);
} else {
if((state_val_10514 === (9))){
var inst_10472 = (state_10513[(2)]);
var state_10513__$1 = (function (){var statearr_10538 = state_10513;
(statearr_10538[(24)] = inst_10472);

return statearr_10538;
})();
var statearr_10539_10594 = state_10513__$1;
(statearr_10539_10594[(2)] = null);

(statearr_10539_10594[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (5))){
var inst_10411 = (state_10513[(25)]);
var inst_10407 = (state_10513[(15)]);
var inst_10410 = (state_10513[(7)]);
var inst_10409 = (state_10513[(2)]);
var inst_10410__$1 = cljs.core._conj.call(null,inst_10407,inst_10409);
var inst_10411__$1 = cljs.core.apply.call(null,cljs.core._EQ_,inst_10410__$1);
var state_10513__$1 = (function (){var statearr_10540 = state_10513;
(statearr_10540[(25)] = inst_10411__$1);

(statearr_10540[(7)] = inst_10410__$1);

return statearr_10540;
})();
if(cljs.core.truth_(inst_10411__$1)){
var statearr_10541_10595 = state_10513__$1;
(statearr_10541_10595[(1)] = (6));

} else {
var statearr_10542_10596 = state_10513__$1;
(statearr_10542_10596[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (14))){
var inst_10448 = (state_10513[(18)]);
var inst_10458 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10459 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10460 = cljs.core.List.EMPTY;
var inst_10461 = new cljs.core.Symbol(null,"=","=",-1501502141,null);
var inst_10462 = cljs.core.cons.call(null,inst_10461,inst_10448);
var inst_10463 = cljs.core._conj.call(null,inst_10460,inst_10462);
var inst_10464 = new cljs.core.Symbol(null,"not","not",1044554643,null);
var inst_10465 = cljs.core._conj.call(null,inst_10463,inst_10464);
var inst_10466 = [new cljs.core.Keyword(null,"fail","fail",1706214930),inst_10459,inst_10465,null];
var inst_10467 = cljs.core.PersistentHashMap.fromArrays(inst_10458,inst_10466);
var inst_10468 = cljs.test.do_report.call(null,inst_10467);
var state_10513__$1 = state_10513;
var statearr_10543_10597 = state_10513__$1;
(statearr_10543_10597[(2)] = inst_10468);

(statearr_10543_10597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (16))){
var inst_10510 = (state_10513[(2)]);
var inst_10511 = done.call(null);
var state_10513__$1 = (function (){var statearr_10544 = state_10513;
(statearr_10544[(26)] = inst_10510);

return statearr_10544;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10513__$1,inst_10511);
} else {
if((state_val_10514 === (10))){
var inst_10435 = (state_10513[(2)]);
var inst_10436 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"expected","expected",1583670997),new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_10437 = cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"<!","<!",-1961915773,null),new cljs.core.Symbol(null,"c2","c2",78651156,null)),false);
var inst_10438 = [new cljs.core.Keyword(null,"error","error",-978969032),inst_10437,inst_10435,null];
var inst_10439 = cljs.core.PersistentHashMap.fromArrays(inst_10436,inst_10438);
var inst_10440 = cljs.test.do_report.call(null,inst_10439);
var state_10513__$1 = state_10513;
var statearr_10545_10598 = state_10513__$1;
(statearr_10545_10598[(2)] = inst_10440);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10514 === (18))){
var inst_10390 = (state_10513[(10)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10513,(17),new cljs.core.Keyword(null,"default","default",-1987822328),null,(16));
var inst_10482 = cljs.core.List.EMPTY;
var inst_10483 = cljs.core._conj.call(null,inst_10482,"ERROR:");
var state_10513__$1 = (function (){var statearr_10546 = state_10513;
(statearr_10546[(23)] = inst_10483);

return statearr_10546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10513__$1,(19),inst_10390);
} else {
if((state_val_10514 === (8))){
var inst_10411 = (state_10513[(25)]);
var inst_10432 = (state_10513[(2)]);
var state_10513__$1 = (function (){var statearr_10547 = state_10513;
(statearr_10547[(27)] = inst_10432);

return statearr_10547;
})();
var statearr_10548_10599 = state_10513__$1;
(statearr_10548_10599[(2)] = inst_10411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513__$1);

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
});})(c__9318__auto__,___10128__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__,___10128__auto__){
return (function() {
var cljs_async_patterns$core_test$state_machine__9298__auto__ = null;
var cljs_async_patterns$core_test$state_machine__9298__auto____0 = (function (){
var statearr_10552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10552[(0)] = cljs_async_patterns$core_test$state_machine__9298__auto__);

(statearr_10552[(1)] = (1));

return statearr_10552;
});
var cljs_async_patterns$core_test$state_machine__9298__auto____1 = (function (state_10513){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_10513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e10553){if((e10553 instanceof Object)){
var ex__9301__auto__ = e10553;
var statearr_10554_10600 = state_10513;
(statearr_10554_10600[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10601 = state_10513;
state_10513 = G__10601;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core_test$state_machine__9298__auto__ = function(state_10513){
switch(arguments.length){
case 0:
return cljs_async_patterns$core_test$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core_test$state_machine__9298__auto____1.call(this,state_10513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core_test$state_machine__9298__auto____0;
cljs_async_patterns$core_test$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core_test$state_machine__9298__auto____1;
return cljs_async_patterns$core_test$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,___10128__auto__))
})();
var state__9320__auto__ = (function (){var statearr_10555 = f__9319__auto__.call(null);
(statearr_10555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_10555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,___10128__auto__))
);

return c__9318__auto__;
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10217","meta10217",1814295631,null)], null);
});

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.cljs$lang$type = true;

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.cljs$lang$ctorStr = "cljs-async-patterns.core-test/t_cljs_async_patterns$core_test10216";

cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216.cljs$lang$ctorPrWriter = (function (this__6558__auto__,writer__6559__auto__,opt__6560__auto__){
return cljs.core._write.call(null,writer__6559__auto__,"cljs-async-patterns.core-test/t_cljs_async_patterns$core_test10216");
});

cljs_async_patterns.core_test.__GT_t_cljs_async_patterns$core_test10216 = (function cljs_async_patterns$core_test$__GT_t_cljs_async_patterns$core_test10216(meta10217){
return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216(meta10217));
});

}

return (new cljs_async_patterns.core_test.t_cljs_async_patterns$core_test10216(null));
});

cljs_async_patterns.core_test._GT_1_test.cljs$lang$var = new cljs.core.Var(function(){return cljs_async_patterns.core_test._GT_1_test;},new cljs.core.Symbol("cljs-async-patterns.core-test",">1-test","cljs-async-patterns.core-test/>1-test",1499368866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-async-patterns.core-test","cljs-async-patterns.core-test",1182412198,null),new cljs.core.Symbol(null,">1-test",">1-test",-961481907,null),"test/cljs_async_patterns/core_test.cljs",17,1,40,40,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_async_patterns.core_test._GT_1_test)?cljs_async_patterns.core_test._GT_1_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map