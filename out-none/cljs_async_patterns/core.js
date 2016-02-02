// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_async_patterns.core._LT_print = (function cljs_async_patterns$core$_LT_print(c){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33431){
var state_val_33432 = (state_33431[(1)]);
if((state_val_33432 === (1))){
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33431__$1,(2),c);
} else {
if((state_val_33432 === (2))){
var inst_33428 = (state_33431[(2)]);
var inst_33429 = cljs.core.println.call(null,inst_33428);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33431__$1,inst_33429);
} else {
return null;
}
}
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__ = null;
var cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0 = (function (){
var statearr_33436 = [null,null,null,null,null,null,null];
(statearr_33436[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__);

(statearr_33436[(1)] = (1));

return statearr_33436;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1 = (function (state_33431){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33437){if((e33437 instanceof Object)){
var ex__8535__auto__ = e33437;
var statearr_33438_33440 = state_33431;
(statearr_33438_33440[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33441 = state_33431;
state_33431 = G__33441;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33439 = f__8553__auto__.call(null);
(statearr_33439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
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
/**
 * If at all possible, jams the 1st callback argument into the input channel.
 */
cljs_async_patterns.core._GT_1 = (function cljs_async_patterns$core$_GT_1(var_args){
var args33442 = [];
var len__7214__auto___33481 = arguments.length;
var i__7215__auto___33482 = (0);
while(true){
if((i__7215__auto___33482 < len__7214__auto___33481)){
args33442.push((arguments[i__7215__auto___33482]));

var G__33483 = (i__7215__auto___33482 + (1));
i__7215__auto___33482 = G__33483;
continue;
} else {
}
break;
}

var G__33444 = args33442.length;
switch (G__33444) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33442.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33449){
var state_val_33450 = (state_33449[(1)]);
if((state_val_33450 === (1))){
var inst_33445 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33449__$1,(2),c,inst_33445);
} else {
if((state_val_33450 === (2))){
var inst_33447 = (state_33449[(2)]);
var state_33449__$1 = state_33449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33449__$1,inst_33447);
} else {
return null;
}
}
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_33454 = [null,null,null,null,null,null,null];
(statearr_33454[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_33454[(1)] = (1));

return statearr_33454;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_33449){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33455){if((e33455 instanceof Object)){
var ex__8535__auto__ = e33455;
var statearr_33456_33485 = state_33449;
(statearr_33456_33485[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33486 = state_33449;
state_33449 = G__33486;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_33449){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_33449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33457 = f__8553__auto__.call(null);
(statearr_33457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (arg1){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33468){
var state_val_33469 = (state_33468[(1)]);
if((state_val_33469 === (1))){
var state_33468__$1 = state_33468;
if(cljs.core.truth_(arg1)){
var statearr_33470_33487 = state_33468__$1;
(statearr_33470_33487[(1)] = (2));

} else {
var statearr_33471_33488 = state_33468__$1;
(statearr_33471_33488[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (2))){
var inst_33459 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_33468__$1 = state_33468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33468__$1,(5),c,inst_33459);
} else {
if((state_val_33469 === (3))){
var state_33468__$1 = state_33468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33468__$1,(6),c,E_msg);
} else {
if((state_val_33469 === (4))){
var inst_33466 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33468__$1,inst_33466);
} else {
if((state_val_33469 === (5))){
var inst_33461 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
var statearr_33472_33489 = state_33468__$1;
(statearr_33472_33489[(2)] = inst_33461);

(statearr_33472_33489[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33469 === (6))){
var inst_33464 = (state_33468[(2)]);
var state_33468__$1 = state_33468;
var statearr_33473_33490 = state_33468__$1;
(statearr_33473_33490[(2)] = inst_33464);

(statearr_33473_33490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_33477 = [null,null,null,null,null,null,null];
(statearr_33477[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_33477[(1)] = (1));

return statearr_33477;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_33468){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33478){if((e33478 instanceof Object)){
var ex__8535__auto__ = e33478;
var statearr_33479_33491 = state_33468;
(statearr_33479_33491[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33492 = state_33468;
state_33468 = G__33492;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_33468){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_33468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33480 = f__8553__auto__.call(null);
(statearr_33480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 2nd callback argument into the input channel.
 */
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args33493 = [];
var len__7214__auto___33560 = arguments.length;
var i__7215__auto___33561 = (0);
while(true){
if((i__7215__auto___33561 < len__7214__auto___33560)){
args33493.push((arguments[i__7215__auto___33561]));

var G__33562 = (i__7215__auto___33561 + (1));
i__7215__auto___33561 = G__33562;
continue;
} else {
}
break;
}

var G__33495 = args33493.length;
switch (G__33495) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33493.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33511){
var state_val_33512 = (state_33511[(1)]);
if((state_val_33512 === (1))){
var state_33511__$1 = state_33511;
if(cljs.core.truth_(res)){
var statearr_33513_33564 = state_33511__$1;
(statearr_33513_33564[(1)] = (2));

} else {
var statearr_33514_33565 = state_33511__$1;
(statearr_33514_33565[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (2))){
var inst_33497 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_33511__$1 = state_33511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33511__$1,(5),c,inst_33497);
} else {
if((state_val_33512 === (3))){
var state_33511__$1 = state_33511;
var statearr_33515_33566 = state_33511__$1;
(statearr_33515_33566[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (4))){
var inst_33509 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33511__$1,inst_33509);
} else {
if((state_val_33512 === (5))){
var inst_33499 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
var statearr_33517_33567 = state_33511__$1;
(statearr_33517_33567[(2)] = inst_33499);

(statearr_33517_33567[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (6))){
var inst_33502 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_33511__$1 = state_33511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33511__$1,(9),c,inst_33502);
} else {
if((state_val_33512 === (7))){
var state_33511__$1 = state_33511;
var statearr_33518_33568 = state_33511__$1;
(statearr_33518_33568[(2)] = null);

(statearr_33518_33568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (8))){
var inst_33507 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
var statearr_33519_33569 = state_33511__$1;
(statearr_33519_33569[(2)] = inst_33507);

(statearr_33519_33569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33512 === (9))){
var inst_33504 = (state_33511[(2)]);
var state_33511__$1 = state_33511;
var statearr_33520_33570 = state_33511__$1;
(statearr_33520_33570[(2)] = inst_33504);

(statearr_33520_33570[(1)] = (8));


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
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_33524 = [null,null,null,null,null,null,null];
(statearr_33524[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_33524[(1)] = (1));

return statearr_33524;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_33511){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33525){if((e33525 instanceof Object)){
var ex__8535__auto__ = e33525;
var statearr_33526_33571 = state_33511;
(statearr_33526_33571[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33572 = state_33511;
state_33511 = G__33572;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_33511){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_33511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33527 = f__8553__auto__.call(null);
(statearr_33527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33543){
var state_val_33544 = (state_33543[(1)]);
if((state_val_33544 === (1))){
var state_33543__$1 = state_33543;
if(cljs.core.truth_(res)){
var statearr_33545_33573 = state_33543__$1;
(statearr_33545_33573[(1)] = (2));

} else {
var statearr_33546_33574 = state_33543__$1;
(statearr_33546_33574[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (2))){
var inst_33529 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33543__$1,(5),c,inst_33529);
} else {
if((state_val_33544 === (3))){
var state_33543__$1 = state_33543;
var statearr_33547_33575 = state_33543__$1;
(statearr_33547_33575[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (4))){
var inst_33541 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33543__$1,inst_33541);
} else {
if((state_val_33544 === (5))){
var inst_33531 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33549_33576 = state_33543__$1;
(statearr_33549_33576[(2)] = inst_33531);

(statearr_33549_33576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (6))){
var inst_33534 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33543__$1,(9),c,inst_33534);
} else {
if((state_val_33544 === (7))){
var state_33543__$1 = state_33543;
var statearr_33550_33577 = state_33543__$1;
(statearr_33550_33577[(2)] = null);

(statearr_33550_33577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (8))){
var inst_33539 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33551_33578 = state_33543__$1;
(statearr_33551_33578[(2)] = inst_33539);

(statearr_33551_33578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (9))){
var inst_33536 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33552_33579 = state_33543__$1;
(statearr_33552_33579[(2)] = inst_33536);

(statearr_33552_33579[(1)] = (8));


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
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_33556 = [null,null,null,null,null,null,null];
(statearr_33556[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_33556[(1)] = (1));

return statearr_33556;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_33543){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33557){if((e33557 instanceof Object)){
var ex__8535__auto__ = e33557;
var statearr_33558_33580 = state_33543;
(statearr_33558_33580[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33581 = state_33543;
state_33543 = G__33581;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_33543){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_33543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33559 = f__8553__auto__.call(null);
(statearr_33559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 3rd callback argument into the input channel.
 */
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(c){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs_async_patterns.core.E_msg], null).call(null,(function (err1,err2,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33733){
var state_val_33734 = (state_33733[(1)]);
if((state_val_33734 === (7))){
var state_33733__$1 = state_33733;
var statearr_33735_33754 = state_33733__$1;
(statearr_33735_33754[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (1))){
var state_33733__$1 = state_33733;
if(cljs.core.truth_(res)){
var statearr_33737_33755 = state_33733__$1;
(statearr_33737_33755[(1)] = (2));

} else {
var statearr_33738_33756 = state_33733__$1;
(statearr_33738_33756[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (4))){
var inst_33731 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33733__$1,inst_33731);
} else {
if((state_val_33734 === (13))){
var inst_33724 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33739_33757 = state_33733__$1;
(statearr_33739_33757[(2)] = inst_33724);

(statearr_33739_33757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (6))){
var inst_33717 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33733__$1,(9),c,inst_33717);
} else {
if((state_val_33734 === (3))){
var state_33733__$1 = state_33733;
if(cljs.core.truth_(err1)){
var statearr_33740_33758 = state_33733__$1;
(statearr_33740_33758[(1)] = (6));

} else {
var statearr_33741_33759 = state_33733__$1;
(statearr_33741_33759[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (12))){
var inst_33727 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33742_33760 = state_33733__$1;
(statearr_33742_33760[(2)] = inst_33727);

(statearr_33742_33760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (2))){
var inst_33712 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33733__$1,(5),c,inst_33712);
} else {
if((state_val_33734 === (11))){
var state_33733__$1 = state_33733;
var statearr_33743_33761 = state_33733__$1;
(statearr_33743_33761[(2)] = null);

(statearr_33743_33761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (9))){
var inst_33719 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33744_33762 = state_33733__$1;
(statearr_33744_33762[(2)] = inst_33719);

(statearr_33744_33762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (5))){
var inst_33714 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33745_33763 = state_33733__$1;
(statearr_33745_33763[(2)] = inst_33714);

(statearr_33745_33763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (10))){
var inst_33722 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33733__$1,(13),c,inst_33722);
} else {
if((state_val_33734 === (8))){
var inst_33729 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33746_33764 = state_33733__$1;
(statearr_33746_33764[(2)] = inst_33729);

(statearr_33746_33764[(1)] = (4));


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
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__ = null;
var cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____0 = (function (){
var statearr_33750 = [null,null,null,null,null,null,null];
(statearr_33750[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__);

(statearr_33750[(1)] = (1));

return statearr_33750;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____1 = (function (state_33733){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33751){if((e33751 instanceof Object)){
var ex__8535__auto__ = e33751;
var statearr_33752_33765 = state_33733;
(statearr_33752_33765[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33766 = state_33733;
state_33733 = G__33766;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__ = function(state_33733){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____1.call(this,state_33733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33753 = f__8553__auto__.call(null);
(statearr_33753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
}));
});
/**
 * Jams the first truthy argument of a callback function into the input channel.
 */
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args33767 = [];
var len__7214__auto___33872 = arguments.length;
var i__7215__auto___33873 = (0);
while(true){
if((i__7215__auto___33873 < len__7214__auto___33872)){
args33767.push((arguments[i__7215__auto___33873]));

var G__33874 = (i__7215__auto___33873 + (1));
i__7215__auto___33873 = G__33874;
continue;
} else {
}
break;
}

var G__33769 = args33767.length;
switch (G__33769) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33767.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__33876__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33794){
var state_val_33795 = (state_33794[(1)]);
if((state_val_33795 === (7))){
var inst_33776 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33796_33877 = state_33794__$1;
(statearr_33796_33877[(2)] = inst_33776);

(statearr_33796_33877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (1))){
var inst_33770 = args;
var state_33794__$1 = (function (){var statearr_33797 = state_33794;
(statearr_33797[(7)] = inst_33770);

return statearr_33797;
})();
var statearr_33798_33878 = state_33794__$1;
(statearr_33798_33878[(2)] = null);

(statearr_33798_33878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (4))){
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33794__$1,(7),c,false);
} else {
if((state_val_33795 === (6))){
var inst_33790 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33799_33879 = state_33794__$1;
(statearr_33799_33879[(2)] = inst_33790);

(statearr_33799_33879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (3))){
var inst_33792 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33794__$1,inst_33792);
} else {
if((state_val_33795 === (2))){
var inst_33770 = (state_33794[(7)]);
var inst_33772 = cljs.core.count.call(null,inst_33770);
var inst_33773 = cljs.core._EQ_.call(null,(0),inst_33772);
var state_33794__$1 = state_33794;
if(inst_33773){
var statearr_33800_33880 = state_33794__$1;
(statearr_33800_33880[(1)] = (4));

} else {
var statearr_33801_33881 = state_33794__$1;
(statearr_33801_33881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (11))){
var inst_33783 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33802_33882 = state_33794__$1;
(statearr_33802_33882[(2)] = inst_33783);

(statearr_33802_33882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (9))){
var inst_33770 = (state_33794[(7)]);
var inst_33785 = cljs.core.rest.call(null,inst_33770);
var inst_33770__$1 = inst_33785;
var state_33794__$1 = (function (){var statearr_33803 = state_33794;
(statearr_33803[(7)] = inst_33770__$1);

return statearr_33803;
})();
var statearr_33804_33883 = state_33794__$1;
(statearr_33804_33883[(2)] = null);

(statearr_33804_33883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (5))){
var inst_33770 = (state_33794[(7)]);
var inst_33778 = cljs.core.first.call(null,inst_33770);
var state_33794__$1 = state_33794;
if(cljs.core.truth_(inst_33778)){
var statearr_33805_33884 = state_33794__$1;
(statearr_33805_33884[(1)] = (8));

} else {
var statearr_33806_33885 = state_33794__$1;
(statearr_33806_33885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (10))){
var inst_33788 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33807_33886 = state_33794__$1;
(statearr_33807_33886[(2)] = inst_33788);

(statearr_33807_33886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (8))){
var inst_33770 = (state_33794[(7)]);
var inst_33780 = cljs_async_patterns.core.chan_sanitized.call(null,inst_33770);
var inst_33781 = cljs.core.first.call(null,inst_33780);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33794__$1,(11),c,inst_33781);
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
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_33811 = [null,null,null,null,null,null,null,null];
(statearr_33811[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_33811[(1)] = (1));

return statearr_33811;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_33794){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33812){if((e33812 instanceof Object)){
var ex__8535__auto__ = e33812;
var statearr_33813_33887 = state_33794;
(statearr_33813_33887[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33888 = state_33794;
state_33794 = G__33888;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33814 = f__8553__auto__.call(null);
(statearr_33814[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__33876 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33889__i = 0, G__33889__a = new Array(arguments.length -  0);
while (G__33889__i < G__33889__a.length) {G__33889__a[G__33889__i] = arguments[G__33889__i + 0]; ++G__33889__i;}
  args = new cljs.core.IndexedSeq(G__33889__a,0);
} 
return G__33876__delegate.call(this,args);};
G__33876.cljs$lang$maxFixedArity = 0;
G__33876.cljs$lang$applyTo = (function (arglist__33890){
var args = cljs.core.seq(arglist__33890);
return G__33876__delegate(args);
});
G__33876.cljs$core$IFn$_invoke$arity$variadic = G__33876__delegate;
return G__33876;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__33891__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_33847){
var state_val_33848 = (state_33847[(1)]);
if((state_val_33848 === (7))){
var inst_33821 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33849_33892 = state_33847__$1;
(statearr_33849_33892[(2)] = inst_33821);

(statearr_33849_33892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (1))){
var inst_33815 = args;
var state_33847__$1 = (function (){var statearr_33850 = state_33847;
(statearr_33850[(7)] = inst_33815);

return statearr_33850;
})();
var statearr_33851_33893 = state_33847__$1;
(statearr_33851_33893[(2)] = null);

(statearr_33851_33893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (4))){
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33847__$1,(7),c,E_msg);
} else {
if((state_val_33848 === (15))){
var inst_33834 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33852_33894 = state_33847__$1;
(statearr_33852_33894[(2)] = inst_33834);

(statearr_33852_33894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (13))){
var inst_33836 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33853_33895 = state_33847__$1;
(statearr_33853_33895[(2)] = inst_33836);

(statearr_33853_33895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (6))){
var inst_33843 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33854_33896 = state_33847__$1;
(statearr_33854_33896[(2)] = inst_33843);

(statearr_33854_33896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (3))){
var inst_33845 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33847__$1,inst_33845);
} else {
if((state_val_33848 === (12))){
var inst_33815 = (state_33847[(7)]);
var inst_33831 = cljs_async_patterns.core.chan_sanitized.call(null,inst_33815);
var inst_33832 = cljs.core.first.call(null,inst_33831);
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33847__$1,(15),c,inst_33832);
} else {
if((state_val_33848 === (2))){
var inst_33815 = (state_33847[(7)]);
var inst_33817 = cljs.core.count.call(null,inst_33815);
var inst_33818 = cljs.core._EQ_.call(null,(0),inst_33817);
var state_33847__$1 = state_33847;
if(inst_33818){
var statearr_33855_33897 = state_33847__$1;
(statearr_33855_33897[(1)] = (4));

} else {
var statearr_33856_33898 = state_33847__$1;
(statearr_33856_33898[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (11))){
var state_33847__$1 = state_33847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33847__$1,(14),c,E_msg);
} else {
if((state_val_33848 === (9))){
var inst_33815 = (state_33847[(7)]);
var inst_33838 = cljs.core.rest.call(null,inst_33815);
var inst_33815__$1 = inst_33838;
var state_33847__$1 = (function (){var statearr_33857 = state_33847;
(statearr_33857[(7)] = inst_33815__$1);

return statearr_33857;
})();
var statearr_33858_33899 = state_33847__$1;
(statearr_33858_33899[(2)] = null);

(statearr_33858_33899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (5))){
var inst_33815 = (state_33847[(7)]);
var inst_33823 = cljs.core.first.call(null,inst_33815);
var state_33847__$1 = state_33847;
if(cljs.core.truth_(inst_33823)){
var statearr_33859_33900 = state_33847__$1;
(statearr_33859_33900[(1)] = (8));

} else {
var statearr_33860_33901 = state_33847__$1;
(statearr_33860_33901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (14))){
var inst_33829 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33861_33902 = state_33847__$1;
(statearr_33861_33902[(2)] = inst_33829);

(statearr_33861_33902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (10))){
var inst_33841 = (state_33847[(2)]);
var state_33847__$1 = state_33847;
var statearr_33862_33903 = state_33847__$1;
(statearr_33862_33903[(2)] = inst_33841);

(statearr_33862_33903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33848 === (8))){
var inst_33815 = (state_33847[(7)]);
var inst_33825 = cljs.core.count.call(null,inst_33815);
var inst_33826 = (inst_33825 > (1));
var state_33847__$1 = state_33847;
if(cljs.core.truth_(inst_33826)){
var statearr_33863_33904 = state_33847__$1;
(statearr_33863_33904[(1)] = (11));

} else {
var statearr_33864_33905 = state_33847__$1;
(statearr_33864_33905[(1)] = (12));

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
});})(c__8552__auto__))
;
return ((function (switch__8531__auto__,c__8552__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_33868 = [null,null,null,null,null,null,null,null];
(statearr_33868[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_33868[(1)] = (1));

return statearr_33868;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_33847){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_33847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e33869){if((e33869 instanceof Object)){
var ex__8535__auto__ = e33869;
var statearr_33870_33906 = state_33847;
(statearr_33870_33906[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33907 = state_33847;
state_33847 = G__33907;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_33847){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_33847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_33871 = f__8553__auto__.call(null);
(statearr_33871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_33871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__33891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33908__i = 0, G__33908__a = new Array(arguments.length -  0);
while (G__33908__i < G__33908__a.length) {G__33908__a[G__33908__i] = arguments[G__33908__i + 0]; ++G__33908__i;}
  args = new cljs.core.IndexedSeq(G__33908__a,0);
} 
return G__33891__delegate.call(this,args);};
G__33891.cljs$lang$maxFixedArity = 0;
G__33891.cljs$lang$applyTo = (function (arglist__33909){
var args = cljs.core.seq(arglist__33909);
return G__33891__delegate(args);
});
G__33891.cljs$core$IFn$_invoke$arity$variadic = G__33891__delegate;
return G__33891;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___33911 = arguments.length;
var i__7215__auto___33912 = (0);
while(true){
if((i__7215__auto___33912 < len__7214__auto___33911)){
args__7221__auto__.push((arguments[i__7215__auto___33912]));

var G__33913 = (i__7215__auto___33912 + (1));
i__7215__auto___33912 = G__33913;
continue;
} else {
}
break;
}

var argseq__7222__auto__ = ((((0) < args__7221__auto__.length))?(new cljs.core.IndexedSeq(args__7221__auto__.slice((0)),(0))):null);
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__7222__auto__);
});

cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__6156__auto__ = argv.e;
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__6156__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__6156__auto__)){
return or__6156__auto__;
} else {
return "default_arg";
}
})();
return cljs.core.println.call(null,argv);
});

cljs_async_patterns.core._main.cljs$lang$maxFixedArity = (0);

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq33910){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33910));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map