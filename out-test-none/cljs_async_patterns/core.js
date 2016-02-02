// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_async_patterns.core._LT_print = (function cljs_async_patterns$core$_LT_print(c){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29359){
var state_val_29360 = (state_29359[(1)]);
if((state_val_29360 === (1))){
var state_29359__$1 = state_29359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29359__$1,(2),c);
} else {
if((state_val_29360 === (2))){
var inst_29356 = (state_29359[(2)]);
var inst_29357 = cljs.core.println.call(null,inst_29356);
var state_29359__$1 = state_29359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29359__$1,inst_29357);
} else {
return null;
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__ = null;
var cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____0 = (function (){
var statearr_29364 = [null,null,null,null,null,null,null];
(statearr_29364[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__);

(statearr_29364[(1)] = (1));

return statearr_29364;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____1 = (function (state_29359){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29365){if((e29365 instanceof Object)){
var ex__8291__auto__ = e29365;
var statearr_29366_29368 = state_29359;
(statearr_29366_29368[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29369 = state_29359;
state_29359 = G__29369;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__ = function(state_29359){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____1.call(this,state_29359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29367 = f__8309__auto__.call(null);
(statearr_29367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
/**
 * Since channels cannot contain nil, this function converts nil values to false.
 */
cljs_async_patterns.core.chan_sanitized = (function cljs_async_patterns$core$chan_sanitized(val){
if(cljs.core._EQ_.call(null,val,null)){
return false;
} else {
return val;
}
});
cljs_async_patterns.core._GT_1 = (function cljs_async_patterns$core$_GT_1(var_args){
var args29370 = [];
var len__7018__auto___29409 = arguments.length;
var i__7019__auto___29410 = (0);
while(true){
if((i__7019__auto___29410 < len__7018__auto___29409)){
args29370.push((arguments[i__7019__auto___29410]));

var G__29411 = (i__7019__auto___29410 + (1));
i__7019__auto___29410 = G__29411;
continue;
} else {
}
break;
}

var G__29372 = args29370.length;
switch (G__29372) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29370.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29377){
var state_val_29378 = (state_29377[(1)]);
if((state_val_29378 === (1))){
var inst_29373 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_29377__$1 = state_29377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29377__$1,(2),c,inst_29373);
} else {
if((state_val_29378 === (2))){
var inst_29375 = (state_29377[(2)]);
var state_29377__$1 = state_29377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29377__$1,inst_29375);
} else {
return null;
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8288__auto__ = null;
var cljs_async_patterns$core$state_machine__8288__auto____0 = (function (){
var statearr_29382 = [null,null,null,null,null,null,null];
(statearr_29382[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_29382[(1)] = (1));

return statearr_29382;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_29377){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29383){if((e29383 instanceof Object)){
var ex__8291__auto__ = e29383;
var statearr_29384_29413 = state_29377;
(statearr_29384_29413[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29414 = state_29377;
state_29377 = G__29414;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_29377){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_29377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29385 = f__8309__auto__.call(null);
(statearr_29385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (arg1){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29396){
var state_val_29397 = (state_29396[(1)]);
if((state_val_29397 === (1))){
var state_29396__$1 = state_29396;
if(cljs.core.truth_(arg1)){
var statearr_29398_29415 = state_29396__$1;
(statearr_29398_29415[(1)] = (2));

} else {
var statearr_29399_29416 = state_29396__$1;
(statearr_29399_29416[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (2))){
var inst_29387 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29396__$1,(5),c,inst_29387);
} else {
if((state_val_29397 === (3))){
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29396__$1,(6),c,E_msg);
} else {
if((state_val_29397 === (4))){
var inst_29394 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29396__$1,inst_29394);
} else {
if((state_val_29397 === (5))){
var inst_29389 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
var statearr_29400_29417 = state_29396__$1;
(statearr_29400_29417[(2)] = inst_29389);

(statearr_29400_29417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29397 === (6))){
var inst_29392 = (state_29396[(2)]);
var state_29396__$1 = state_29396;
var statearr_29401_29418 = state_29396__$1;
(statearr_29401_29418[(2)] = inst_29392);

(statearr_29401_29418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8288__auto__ = null;
var cljs_async_patterns$core$state_machine__8288__auto____0 = (function (){
var statearr_29405 = [null,null,null,null,null,null,null];
(statearr_29405[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_29405[(1)] = (1));

return statearr_29405;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_29396){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29406){if((e29406 instanceof Object)){
var ex__8291__auto__ = e29406;
var statearr_29407_29419 = state_29396;
(statearr_29407_29419[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29420 = state_29396;
state_29396 = G__29420;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_29396){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_29396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29408 = f__8309__auto__.call(null);
(statearr_29408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args29421 = [];
var len__7018__auto___29488 = arguments.length;
var i__7019__auto___29489 = (0);
while(true){
if((i__7019__auto___29489 < len__7018__auto___29488)){
args29421.push((arguments[i__7019__auto___29489]));

var G__29490 = (i__7019__auto___29489 + (1));
i__7019__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var G__29423 = args29421.length;
switch (G__29423) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29421.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29439){
var state_val_29440 = (state_29439[(1)]);
if((state_val_29440 === (1))){
var state_29439__$1 = state_29439;
if(cljs.core.truth_(err)){
var statearr_29441_29492 = state_29439__$1;
(statearr_29441_29492[(1)] = (2));

} else {
var statearr_29442_29493 = state_29439__$1;
(statearr_29442_29493[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (2))){
var inst_29425 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(5),c,inst_29425);
} else {
if((state_val_29440 === (3))){
var state_29439__$1 = state_29439;
var statearr_29443_29494 = state_29439__$1;
(statearr_29443_29494[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (4))){
var inst_29437 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29439__$1,inst_29437);
} else {
if((state_val_29440 === (5))){
var inst_29427 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29445_29495 = state_29439__$1;
(statearr_29445_29495[(2)] = inst_29427);

(statearr_29445_29495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (6))){
var inst_29430 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_29439__$1 = state_29439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29439__$1,(9),c,inst_29430);
} else {
if((state_val_29440 === (7))){
var state_29439__$1 = state_29439;
var statearr_29446_29496 = state_29439__$1;
(statearr_29446_29496[(2)] = null);

(statearr_29446_29496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (8))){
var inst_29435 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29447_29497 = state_29439__$1;
(statearr_29447_29497[(2)] = inst_29435);

(statearr_29447_29497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29440 === (9))){
var inst_29432 = (state_29439[(2)]);
var state_29439__$1 = state_29439;
var statearr_29448_29498 = state_29439__$1;
(statearr_29448_29498[(2)] = inst_29432);

(statearr_29448_29498[(1)] = (8));


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
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8288__auto__ = null;
var cljs_async_patterns$core$state_machine__8288__auto____0 = (function (){
var statearr_29452 = [null,null,null,null,null,null,null];
(statearr_29452[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_29452[(1)] = (1));

return statearr_29452;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_29439){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29453){if((e29453 instanceof Object)){
var ex__8291__auto__ = e29453;
var statearr_29454_29499 = state_29439;
(statearr_29454_29499[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29500 = state_29439;
state_29439 = G__29500;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_29439){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_29439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29455 = f__8309__auto__.call(null);
(statearr_29455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err,res){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29471){
var state_val_29472 = (state_29471[(1)]);
if((state_val_29472 === (1))){
var state_29471__$1 = state_29471;
if(cljs.core.truth_(err)){
var statearr_29473_29501 = state_29471__$1;
(statearr_29473_29501[(1)] = (2));

} else {
var statearr_29474_29502 = state_29471__$1;
(statearr_29474_29502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (2))){
var inst_29457 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_29471__$1 = state_29471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29471__$1,(5),c,inst_29457);
} else {
if((state_val_29472 === (3))){
var state_29471__$1 = state_29471;
var statearr_29475_29503 = state_29471__$1;
(statearr_29475_29503[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (4))){
var inst_29469 = (state_29471[(2)]);
var state_29471__$1 = state_29471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29471__$1,inst_29469);
} else {
if((state_val_29472 === (5))){
var inst_29459 = (state_29471[(2)]);
var state_29471__$1 = state_29471;
var statearr_29477_29504 = state_29471__$1;
(statearr_29477_29504[(2)] = inst_29459);

(statearr_29477_29504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (6))){
var inst_29462 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_29471__$1 = state_29471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29471__$1,(9),c,inst_29462);
} else {
if((state_val_29472 === (7))){
var state_29471__$1 = state_29471;
var statearr_29478_29505 = state_29471__$1;
(statearr_29478_29505[(2)] = null);

(statearr_29478_29505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (8))){
var inst_29467 = (state_29471[(2)]);
var state_29471__$1 = state_29471;
var statearr_29479_29506 = state_29471__$1;
(statearr_29479_29506[(2)] = inst_29467);

(statearr_29479_29506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29472 === (9))){
var inst_29464 = (state_29471[(2)]);
var state_29471__$1 = state_29471;
var statearr_29480_29507 = state_29471__$1;
(statearr_29480_29507[(2)] = inst_29464);

(statearr_29480_29507[(1)] = (8));


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
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8288__auto__ = null;
var cljs_async_patterns$core$state_machine__8288__auto____0 = (function (){
var statearr_29484 = [null,null,null,null,null,null,null];
(statearr_29484[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_29484[(1)] = (1));

return statearr_29484;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_29471){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29485){if((e29485 instanceof Object)){
var ex__8291__auto__ = e29485;
var statearr_29486_29508 = state_29471;
(statearr_29486_29508[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29509 = state_29471;
state_29471 = G__29509;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_29471){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_29471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29487 = f__8309__auto__.call(null);
(statearr_29487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(c){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs_async_patterns.core.E_msg], null).call(null,(function (err1,err2,res){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29661){
var state_val_29662 = (state_29661[(1)]);
if((state_val_29662 === (7))){
var state_29661__$1 = state_29661;
var statearr_29663_29682 = state_29661__$1;
(statearr_29663_29682[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (1))){
var state_29661__$1 = state_29661;
if(cljs.core.truth_(err1)){
var statearr_29665_29683 = state_29661__$1;
(statearr_29665_29683[(1)] = (2));

} else {
var statearr_29666_29684 = state_29661__$1;
(statearr_29666_29684[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (4))){
var inst_29659 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29661__$1,inst_29659);
} else {
if((state_val_29662 === (13))){
var inst_29652 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29667_29685 = state_29661__$1;
(statearr_29667_29685[(2)] = inst_29652);

(statearr_29667_29685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (6))){
var inst_29645 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29661__$1,(9),c,inst_29645);
} else {
if((state_val_29662 === (3))){
var state_29661__$1 = state_29661;
if(cljs.core.truth_(err2)){
var statearr_29668_29686 = state_29661__$1;
(statearr_29668_29686[(1)] = (6));

} else {
var statearr_29669_29687 = state_29661__$1;
(statearr_29669_29687[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (12))){
var inst_29655 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29670_29688 = state_29661__$1;
(statearr_29670_29688[(2)] = inst_29655);

(statearr_29670_29688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (2))){
var inst_29640 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29661__$1,(5),c,inst_29640);
} else {
if((state_val_29662 === (11))){
var state_29661__$1 = state_29661;
var statearr_29671_29689 = state_29661__$1;
(statearr_29671_29689[(2)] = null);

(statearr_29671_29689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (9))){
var inst_29647 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29672_29690 = state_29661__$1;
(statearr_29672_29690[(2)] = inst_29647);

(statearr_29672_29690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (5))){
var inst_29642 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29673_29691 = state_29661__$1;
(statearr_29673_29691[(2)] = inst_29642);

(statearr_29673_29691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29662 === (10))){
var inst_29650 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_29661__$1 = state_29661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29661__$1,(13),c,inst_29650);
} else {
if((state_val_29662 === (8))){
var inst_29657 = (state_29661[(2)]);
var state_29661__$1 = state_29661;
var statearr_29674_29692 = state_29661__$1;
(statearr_29674_29692[(2)] = inst_29657);

(statearr_29674_29692[(1)] = (4));


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
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__ = null;
var cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____0 = (function (){
var statearr_29678 = [null,null,null,null,null,null,null];
(statearr_29678[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__);

(statearr_29678[(1)] = (1));

return statearr_29678;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____1 = (function (state_29661){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29679){if((e29679 instanceof Object)){
var ex__8291__auto__ = e29679;
var statearr_29680_29693 = state_29661;
(statearr_29680_29693[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29694 = state_29661;
state_29661 = G__29694;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__ = function(state_29661){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____1.call(this,state_29661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29681 = f__8309__auto__.call(null);
(statearr_29681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
}));
});
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args29695 = [];
var len__7018__auto___29800 = arguments.length;
var i__7019__auto___29801 = (0);
while(true){
if((i__7019__auto___29801 < len__7018__auto___29800)){
args29695.push((arguments[i__7019__auto___29801]));

var G__29802 = (i__7019__auto___29801 + (1));
i__7019__auto___29801 = G__29802;
continue;
} else {
}
break;
}

var G__29697 = args29695.length;
switch (G__29697) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29695.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__29804__delegate = function (args){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29722){
var state_val_29723 = (state_29722[(1)]);
if((state_val_29723 === (7))){
var inst_29704 = (state_29722[(2)]);
var state_29722__$1 = state_29722;
var statearr_29724_29805 = state_29722__$1;
(statearr_29724_29805[(2)] = inst_29704);

(statearr_29724_29805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (1))){
var inst_29698 = args;
var state_29722__$1 = (function (){var statearr_29725 = state_29722;
(statearr_29725[(7)] = inst_29698);

return statearr_29725;
})();
var statearr_29726_29806 = state_29722__$1;
(statearr_29726_29806[(2)] = null);

(statearr_29726_29806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (4))){
var state_29722__$1 = state_29722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29722__$1,(7),c,false);
} else {
if((state_val_29723 === (6))){
var inst_29718 = (state_29722[(2)]);
var state_29722__$1 = state_29722;
var statearr_29727_29807 = state_29722__$1;
(statearr_29727_29807[(2)] = inst_29718);

(statearr_29727_29807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (3))){
var inst_29720 = (state_29722[(2)]);
var state_29722__$1 = state_29722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29722__$1,inst_29720);
} else {
if((state_val_29723 === (2))){
var inst_29698 = (state_29722[(7)]);
var inst_29700 = cljs.core.count.call(null,inst_29698);
var inst_29701 = cljs.core._EQ_.call(null,(0),inst_29700);
var state_29722__$1 = state_29722;
if(inst_29701){
var statearr_29728_29808 = state_29722__$1;
(statearr_29728_29808[(1)] = (4));

} else {
var statearr_29729_29809 = state_29722__$1;
(statearr_29729_29809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (11))){
var inst_29711 = (state_29722[(2)]);
var state_29722__$1 = state_29722;
var statearr_29730_29810 = state_29722__$1;
(statearr_29730_29810[(2)] = inst_29711);

(statearr_29730_29810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (9))){
var inst_29698 = (state_29722[(7)]);
var inst_29713 = cljs.core.rest.call(null,inst_29698);
var inst_29698__$1 = inst_29713;
var state_29722__$1 = (function (){var statearr_29731 = state_29722;
(statearr_29731[(7)] = inst_29698__$1);

return statearr_29731;
})();
var statearr_29732_29811 = state_29722__$1;
(statearr_29732_29811[(2)] = null);

(statearr_29732_29811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (5))){
var inst_29698 = (state_29722[(7)]);
var inst_29706 = cljs.core.first.call(null,inst_29698);
var state_29722__$1 = state_29722;
if(cljs.core.truth_(inst_29706)){
var statearr_29733_29812 = state_29722__$1;
(statearr_29733_29812[(1)] = (8));

} else {
var statearr_29734_29813 = state_29722__$1;
(statearr_29734_29813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (10))){
var inst_29716 = (state_29722[(2)]);
var state_29722__$1 = state_29722;
var statearr_29735_29814 = state_29722__$1;
(statearr_29735_29814[(2)] = inst_29716);

(statearr_29735_29814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29723 === (8))){
var inst_29698 = (state_29722[(7)]);
var inst_29708 = cljs_async_patterns.core.chan_sanitized.call(null,inst_29698);
var inst_29709 = cljs.core.first.call(null,inst_29708);
var state_29722__$1 = state_29722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29722__$1,(11),c,inst_29709);
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
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8288__auto__ = null;
var cljs_async_patterns$core$state_machine__8288__auto____0 = (function (){
var statearr_29739 = [null,null,null,null,null,null,null,null];
(statearr_29739[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_29739[(1)] = (1));

return statearr_29739;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_29722){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29740){if((e29740 instanceof Object)){
var ex__8291__auto__ = e29740;
var statearr_29741_29815 = state_29722;
(statearr_29741_29815[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29816 = state_29722;
state_29722 = G__29816;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_29722){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_29722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29742 = f__8309__auto__.call(null);
(statearr_29742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
};
var G__29804 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29817__i = 0, G__29817__a = new Array(arguments.length -  0);
while (G__29817__i < G__29817__a.length) {G__29817__a[G__29817__i] = arguments[G__29817__i + 0]; ++G__29817__i;}
  args = new cljs.core.IndexedSeq(G__29817__a,0);
} 
return G__29804__delegate.call(this,args);};
G__29804.cljs$lang$maxFixedArity = 0;
G__29804.cljs$lang$applyTo = (function (arglist__29818){
var args = cljs.core.seq(arglist__29818);
return G__29804__delegate(args);
});
G__29804.cljs$core$IFn$_invoke$arity$variadic = G__29804__delegate;
return G__29804;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__29819__delegate = function (args){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_29775){
var state_val_29776 = (state_29775[(1)]);
if((state_val_29776 === (7))){
var inst_29749 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29777_29820 = state_29775__$1;
(statearr_29777_29820[(2)] = inst_29749);

(statearr_29777_29820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (1))){
var inst_29743 = args;
var state_29775__$1 = (function (){var statearr_29778 = state_29775;
(statearr_29778[(7)] = inst_29743);

return statearr_29778;
})();
var statearr_29779_29821 = state_29775__$1;
(statearr_29779_29821[(2)] = null);

(statearr_29779_29821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (4))){
var state_29775__$1 = state_29775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29775__$1,(7),c,E_msg);
} else {
if((state_val_29776 === (15))){
var inst_29762 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29780_29822 = state_29775__$1;
(statearr_29780_29822[(2)] = inst_29762);

(statearr_29780_29822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (13))){
var inst_29764 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29781_29823 = state_29775__$1;
(statearr_29781_29823[(2)] = inst_29764);

(statearr_29781_29823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (6))){
var inst_29771 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29782_29824 = state_29775__$1;
(statearr_29782_29824[(2)] = inst_29771);

(statearr_29782_29824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (3))){
var inst_29773 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29775__$1,inst_29773);
} else {
if((state_val_29776 === (12))){
var inst_29743 = (state_29775[(7)]);
var inst_29759 = cljs_async_patterns.core.chan_sanitized.call(null,inst_29743);
var inst_29760 = cljs.core.first.call(null,inst_29759);
var state_29775__$1 = state_29775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29775__$1,(15),c,inst_29760);
} else {
if((state_val_29776 === (2))){
var inst_29743 = (state_29775[(7)]);
var inst_29745 = cljs.core.count.call(null,inst_29743);
var inst_29746 = cljs.core._EQ_.call(null,(0),inst_29745);
var state_29775__$1 = state_29775;
if(inst_29746){
var statearr_29783_29825 = state_29775__$1;
(statearr_29783_29825[(1)] = (4));

} else {
var statearr_29784_29826 = state_29775__$1;
(statearr_29784_29826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (11))){
var state_29775__$1 = state_29775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29775__$1,(14),c,E_msg);
} else {
if((state_val_29776 === (9))){
var inst_29743 = (state_29775[(7)]);
var inst_29766 = cljs.core.rest.call(null,inst_29743);
var inst_29743__$1 = inst_29766;
var state_29775__$1 = (function (){var statearr_29785 = state_29775;
(statearr_29785[(7)] = inst_29743__$1);

return statearr_29785;
})();
var statearr_29786_29827 = state_29775__$1;
(statearr_29786_29827[(2)] = null);

(statearr_29786_29827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (5))){
var inst_29743 = (state_29775[(7)]);
var inst_29751 = cljs.core.first.call(null,inst_29743);
var state_29775__$1 = state_29775;
if(cljs.core.truth_(inst_29751)){
var statearr_29787_29828 = state_29775__$1;
(statearr_29787_29828[(1)] = (8));

} else {
var statearr_29788_29829 = state_29775__$1;
(statearr_29788_29829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (14))){
var inst_29757 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29789_29830 = state_29775__$1;
(statearr_29789_29830[(2)] = inst_29757);

(statearr_29789_29830[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (10))){
var inst_29769 = (state_29775[(2)]);
var state_29775__$1 = state_29775;
var statearr_29790_29831 = state_29775__$1;
(statearr_29790_29831[(2)] = inst_29769);

(statearr_29790_29831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29776 === (8))){
var inst_29743 = (state_29775[(7)]);
var inst_29753 = cljs.core.count.call(null,inst_29743);
var inst_29754 = (inst_29753 > (1));
var state_29775__$1 = state_29775;
if(cljs.core.truth_(inst_29754)){
var statearr_29791_29832 = state_29775__$1;
(statearr_29791_29832[(1)] = (11));

} else {
var statearr_29792_29833 = state_29775__$1;
(statearr_29792_29833[(1)] = (12));

}

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
});})(c__8308__auto__))
;
return ((function (switch__8287__auto__,c__8308__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8288__auto__ = null;
var cljs_async_patterns$core$state_machine__8288__auto____0 = (function (){
var statearr_29796 = [null,null,null,null,null,null,null,null];
(statearr_29796[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_29796[(1)] = (1));

return statearr_29796;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_29775){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_29775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e29797){if((e29797 instanceof Object)){
var ex__8291__auto__ = e29797;
var statearr_29798_29834 = state_29775;
(statearr_29798_29834[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29835 = state_29775;
state_29775 = G__29835;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_29775){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_29775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_29799 = f__8309__auto__.call(null);
(statearr_29799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_29799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
};
var G__29819 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29836__i = 0, G__29836__a = new Array(arguments.length -  0);
while (G__29836__i < G__29836__a.length) {G__29836__a[G__29836__i] = arguments[G__29836__i + 0]; ++G__29836__i;}
  args = new cljs.core.IndexedSeq(G__29836__a,0);
} 
return G__29819__delegate.call(this,args);};
G__29819.cljs$lang$maxFixedArity = 0;
G__29819.cljs$lang$applyTo = (function (arglist__29837){
var args = cljs.core.seq(arglist__29837);
return G__29819__delegate(args);
});
G__29819.cljs$core$IFn$_invoke$arity$variadic = G__29819__delegate;
return G__29819;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___29839 = arguments.length;
var i__7019__auto___29840 = (0);
while(true){
if((i__7019__auto___29840 < len__7018__auto___29839)){
args__7025__auto__.push((arguments[i__7019__auto___29840]));

var G__29841 = (i__7019__auto___29840 + (1));
i__7019__auto___29840 = G__29841;
continue;
} else {
}
break;
}

var argseq__7026__auto__ = ((((0) < args__7025__auto__.length))?(new cljs.core.IndexedSeq(args__7025__auto__.slice((0)),(0))):null);
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7026__auto__);
});

cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__5960__auto__ = argv.e;
if(cljs.core.truth_(or__5960__auto__)){
return or__5960__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__5960__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__5960__auto__)){
return or__5960__auto__;
} else {
return "default_arg";
}
})();
return cljs.core.println.call(null,argv);
});

cljs_async_patterns.core._main.cljs$lang$maxFixedArity = (0);

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq29838){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29838));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map