// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_async_patterns.core._LT_print = (function cljs_async_patterns$core$_LT_print(c){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9418){
var state_val_9419 = (state_9418[(1)]);
if((state_val_9419 === (1))){
var state_9418__$1 = state_9418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9418__$1,(2),c);
} else {
if((state_val_9419 === (2))){
var inst_9415 = (state_9418[(2)]);
var inst_9416 = cljs.core.println.call(null,inst_9415);
var state_9418__$1 = state_9418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9418__$1,inst_9416);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__ = null;
var cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0 = (function (){
var statearr_9423 = [null,null,null,null,null,null,null];
(statearr_9423[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__);

(statearr_9423[(1)] = (1));

return statearr_9423;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1 = (function (state_9418){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9424){if((e9424 instanceof Object)){
var ex__9301__auto__ = e9424;
var statearr_9425_9427 = state_9418;
(statearr_9425_9427[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9428 = state_9418;
state_9418 = G__9428;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__ = function(state_9418){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1.call(this,state_9418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9426 = f__9319__auto__.call(null);
(statearr_9426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
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
var args9429 = [];
var len__7018__auto___9468 = arguments.length;
var i__7019__auto___9469 = (0);
while(true){
if((i__7019__auto___9469 < len__7018__auto___9468)){
args9429.push((arguments[i__7019__auto___9469]));

var G__9470 = (i__7019__auto___9469 + (1));
i__7019__auto___9469 = G__9470;
continue;
} else {
}
break;
}

var G__9431 = args9429.length;
switch (G__9431) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9429.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9436){
var state_val_9437 = (state_9436[(1)]);
if((state_val_9437 === (1))){
var inst_9432 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_9436__$1 = state_9436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9436__$1,(2),c,inst_9432);
} else {
if((state_val_9437 === (2))){
var inst_9434 = (state_9436[(2)]);
var state_9436__$1 = state_9436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9436__$1,inst_9434);
} else {
return null;
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_9441 = [null,null,null,null,null,null,null];
(statearr_9441[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_9441[(1)] = (1));

return statearr_9441;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_9436){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9442){if((e9442 instanceof Object)){
var ex__9301__auto__ = e9442;
var statearr_9443_9472 = state_9436;
(statearr_9443_9472[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9473 = state_9436;
state_9436 = G__9473;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_9436){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_9436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9444 = f__9319__auto__.call(null);
(statearr_9444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (arg1){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9455){
var state_val_9456 = (state_9455[(1)]);
if((state_val_9456 === (1))){
var state_9455__$1 = state_9455;
if(cljs.core.truth_(arg1)){
var statearr_9457_9474 = state_9455__$1;
(statearr_9457_9474[(1)] = (2));

} else {
var statearr_9458_9475 = state_9455__$1;
(statearr_9458_9475[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9456 === (2))){
var inst_9446 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_9455__$1 = state_9455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9455__$1,(5),c,inst_9446);
} else {
if((state_val_9456 === (3))){
var state_9455__$1 = state_9455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9455__$1,(6),c,E_msg);
} else {
if((state_val_9456 === (4))){
var inst_9453 = (state_9455[(2)]);
var state_9455__$1 = state_9455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9455__$1,inst_9453);
} else {
if((state_val_9456 === (5))){
var inst_9448 = (state_9455[(2)]);
var state_9455__$1 = state_9455;
var statearr_9459_9476 = state_9455__$1;
(statearr_9459_9476[(2)] = inst_9448);

(statearr_9459_9476[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9456 === (6))){
var inst_9451 = (state_9455[(2)]);
var state_9455__$1 = state_9455;
var statearr_9460_9477 = state_9455__$1;
(statearr_9460_9477[(2)] = inst_9451);

(statearr_9460_9477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_9464 = [null,null,null,null,null,null,null];
(statearr_9464[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_9464[(1)] = (1));

return statearr_9464;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_9455){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9465){if((e9465 instanceof Object)){
var ex__9301__auto__ = e9465;
var statearr_9466_9478 = state_9455;
(statearr_9466_9478[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9479 = state_9455;
state_9455 = G__9479;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_9455){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_9455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9467 = f__9319__auto__.call(null);
(statearr_9467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 2nd callback argument into the input channel.
 */
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args9480 = [];
var len__7018__auto___9547 = arguments.length;
var i__7019__auto___9548 = (0);
while(true){
if((i__7019__auto___9548 < len__7018__auto___9547)){
args9480.push((arguments[i__7019__auto___9548]));

var G__9549 = (i__7019__auto___9548 + (1));
i__7019__auto___9548 = G__9549;
continue;
} else {
}
break;
}

var G__9482 = args9480.length;
switch (G__9482) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9480.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9498){
var state_val_9499 = (state_9498[(1)]);
if((state_val_9499 === (1))){
var state_9498__$1 = state_9498;
if(cljs.core.truth_(res)){
var statearr_9500_9551 = state_9498__$1;
(statearr_9500_9551[(1)] = (2));

} else {
var statearr_9501_9552 = state_9498__$1;
(statearr_9501_9552[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9499 === (2))){
var inst_9484 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_9498__$1 = state_9498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9498__$1,(5),c,inst_9484);
} else {
if((state_val_9499 === (3))){
var state_9498__$1 = state_9498;
var statearr_9502_9553 = state_9498__$1;
(statearr_9502_9553[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9499 === (4))){
var inst_9496 = (state_9498[(2)]);
var state_9498__$1 = state_9498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9498__$1,inst_9496);
} else {
if((state_val_9499 === (5))){
var inst_9486 = (state_9498[(2)]);
var state_9498__$1 = state_9498;
var statearr_9504_9554 = state_9498__$1;
(statearr_9504_9554[(2)] = inst_9486);

(statearr_9504_9554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9499 === (6))){
var inst_9489 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_9498__$1 = state_9498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9498__$1,(9),c,inst_9489);
} else {
if((state_val_9499 === (7))){
var state_9498__$1 = state_9498;
var statearr_9505_9555 = state_9498__$1;
(statearr_9505_9555[(2)] = null);

(statearr_9505_9555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9499 === (8))){
var inst_9494 = (state_9498[(2)]);
var state_9498__$1 = state_9498;
var statearr_9506_9556 = state_9498__$1;
(statearr_9506_9556[(2)] = inst_9494);

(statearr_9506_9556[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9499 === (9))){
var inst_9491 = (state_9498[(2)]);
var state_9498__$1 = state_9498;
var statearr_9507_9557 = state_9498__$1;
(statearr_9507_9557[(2)] = inst_9491);

(statearr_9507_9557[(1)] = (8));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_9511 = [null,null,null,null,null,null,null];
(statearr_9511[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_9511[(1)] = (1));

return statearr_9511;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_9498){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9512){if((e9512 instanceof Object)){
var ex__9301__auto__ = e9512;
var statearr_9513_9558 = state_9498;
(statearr_9513_9558[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9559 = state_9498;
state_9498 = G__9559;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_9498){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_9498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9514 = f__9319__auto__.call(null);
(statearr_9514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9530){
var state_val_9531 = (state_9530[(1)]);
if((state_val_9531 === (1))){
var state_9530__$1 = state_9530;
if(cljs.core.truth_(res)){
var statearr_9532_9560 = state_9530__$1;
(statearr_9532_9560[(1)] = (2));

} else {
var statearr_9533_9561 = state_9530__$1;
(statearr_9533_9561[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9531 === (2))){
var inst_9516 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_9530__$1 = state_9530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9530__$1,(5),c,inst_9516);
} else {
if((state_val_9531 === (3))){
var state_9530__$1 = state_9530;
var statearr_9534_9562 = state_9530__$1;
(statearr_9534_9562[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9531 === (4))){
var inst_9528 = (state_9530[(2)]);
var state_9530__$1 = state_9530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9530__$1,inst_9528);
} else {
if((state_val_9531 === (5))){
var inst_9518 = (state_9530[(2)]);
var state_9530__$1 = state_9530;
var statearr_9536_9563 = state_9530__$1;
(statearr_9536_9563[(2)] = inst_9518);

(statearr_9536_9563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9531 === (6))){
var inst_9521 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_9530__$1 = state_9530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9530__$1,(9),c,inst_9521);
} else {
if((state_val_9531 === (7))){
var state_9530__$1 = state_9530;
var statearr_9537_9564 = state_9530__$1;
(statearr_9537_9564[(2)] = null);

(statearr_9537_9564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9531 === (8))){
var inst_9526 = (state_9530[(2)]);
var state_9530__$1 = state_9530;
var statearr_9538_9565 = state_9530__$1;
(statearr_9538_9565[(2)] = inst_9526);

(statearr_9538_9565[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9531 === (9))){
var inst_9523 = (state_9530[(2)]);
var state_9530__$1 = state_9530;
var statearr_9539_9566 = state_9530__$1;
(statearr_9539_9566[(2)] = inst_9523);

(statearr_9539_9566[(1)] = (8));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_9543 = [null,null,null,null,null,null,null];
(statearr_9543[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_9543[(1)] = (1));

return statearr_9543;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_9530){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9544){if((e9544 instanceof Object)){
var ex__9301__auto__ = e9544;
var statearr_9545_9567 = state_9530;
(statearr_9545_9567[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9568 = state_9530;
state_9530 = G__9568;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_9530){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_9530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9546 = f__9319__auto__.call(null);
(statearr_9546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$lang$maxFixedArity = 2;
/**
 * If at all possible, jams the 3rd callback argument into the input channel.
 */
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(c){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs_async_patterns.core.E_msg], null).call(null,(function (err1,err2,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9720){
var state_val_9721 = (state_9720[(1)]);
if((state_val_9721 === (7))){
var state_9720__$1 = state_9720;
var statearr_9722_9741 = state_9720__$1;
(statearr_9722_9741[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (1))){
var state_9720__$1 = state_9720;
if(cljs.core.truth_(res)){
var statearr_9724_9742 = state_9720__$1;
(statearr_9724_9742[(1)] = (2));

} else {
var statearr_9725_9743 = state_9720__$1;
(statearr_9725_9743[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (4))){
var inst_9718 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9720__$1,inst_9718);
} else {
if((state_val_9721 === (13))){
var inst_9711 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
var statearr_9726_9744 = state_9720__$1;
(statearr_9726_9744[(2)] = inst_9711);

(statearr_9726_9744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (6))){
var inst_9704 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_9720__$1 = state_9720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9720__$1,(9),c,inst_9704);
} else {
if((state_val_9721 === (3))){
var state_9720__$1 = state_9720;
if(cljs.core.truth_(err1)){
var statearr_9727_9745 = state_9720__$1;
(statearr_9727_9745[(1)] = (6));

} else {
var statearr_9728_9746 = state_9720__$1;
(statearr_9728_9746[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (12))){
var inst_9714 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
var statearr_9729_9747 = state_9720__$1;
(statearr_9729_9747[(2)] = inst_9714);

(statearr_9729_9747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (2))){
var inst_9699 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_9720__$1 = state_9720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9720__$1,(5),c,inst_9699);
} else {
if((state_val_9721 === (11))){
var state_9720__$1 = state_9720;
var statearr_9730_9748 = state_9720__$1;
(statearr_9730_9748[(2)] = null);

(statearr_9730_9748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (9))){
var inst_9706 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
var statearr_9731_9749 = state_9720__$1;
(statearr_9731_9749[(2)] = inst_9706);

(statearr_9731_9749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (5))){
var inst_9701 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
var statearr_9732_9750 = state_9720__$1;
(statearr_9732_9750[(2)] = inst_9701);

(statearr_9732_9750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9721 === (10))){
var inst_9709 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_9720__$1 = state_9720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9720__$1,(13),c,inst_9709);
} else {
if((state_val_9721 === (8))){
var inst_9716 = (state_9720[(2)]);
var state_9720__$1 = state_9720;
var statearr_9733_9751 = state_9720__$1;
(statearr_9733_9751[(2)] = inst_9716);

(statearr_9733_9751[(1)] = (4));


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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__ = null;
var cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____0 = (function (){
var statearr_9737 = [null,null,null,null,null,null,null];
(statearr_9737[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__);

(statearr_9737[(1)] = (1));

return statearr_9737;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____1 = (function (state_9720){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9738){if((e9738 instanceof Object)){
var ex__9301__auto__ = e9738;
var statearr_9739_9752 = state_9720;
(statearr_9739_9752[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9753 = state_9720;
state_9720 = G__9753;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__ = function(state_9720){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____1.call(this,state_9720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9740 = f__9319__auto__.call(null);
(statearr_9740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
}));
});
/**
 * Jams the first truthy argument of a callback function into the input channel.
 */
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args9754 = [];
var len__7018__auto___9859 = arguments.length;
var i__7019__auto___9860 = (0);
while(true){
if((i__7019__auto___9860 < len__7018__auto___9859)){
args9754.push((arguments[i__7019__auto___9860]));

var G__9861 = (i__7019__auto___9860 + (1));
i__7019__auto___9860 = G__9861;
continue;
} else {
}
break;
}

var G__9756 = args9754.length;
switch (G__9756) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9754.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__9863__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9781){
var state_val_9782 = (state_9781[(1)]);
if((state_val_9782 === (7))){
var inst_9763 = (state_9781[(2)]);
var state_9781__$1 = state_9781;
var statearr_9783_9864 = state_9781__$1;
(statearr_9783_9864[(2)] = inst_9763);

(statearr_9783_9864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (1))){
var inst_9757 = args;
var state_9781__$1 = (function (){var statearr_9784 = state_9781;
(statearr_9784[(7)] = inst_9757);

return statearr_9784;
})();
var statearr_9785_9865 = state_9781__$1;
(statearr_9785_9865[(2)] = null);

(statearr_9785_9865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (4))){
var state_9781__$1 = state_9781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9781__$1,(7),c,false);
} else {
if((state_val_9782 === (6))){
var inst_9777 = (state_9781[(2)]);
var state_9781__$1 = state_9781;
var statearr_9786_9866 = state_9781__$1;
(statearr_9786_9866[(2)] = inst_9777);

(statearr_9786_9866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (3))){
var inst_9779 = (state_9781[(2)]);
var state_9781__$1 = state_9781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9781__$1,inst_9779);
} else {
if((state_val_9782 === (2))){
var inst_9757 = (state_9781[(7)]);
var inst_9759 = cljs.core.count.call(null,inst_9757);
var inst_9760 = cljs.core._EQ_.call(null,(0),inst_9759);
var state_9781__$1 = state_9781;
if(inst_9760){
var statearr_9787_9867 = state_9781__$1;
(statearr_9787_9867[(1)] = (4));

} else {
var statearr_9788_9868 = state_9781__$1;
(statearr_9788_9868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (11))){
var inst_9770 = (state_9781[(2)]);
var state_9781__$1 = state_9781;
var statearr_9789_9869 = state_9781__$1;
(statearr_9789_9869[(2)] = inst_9770);

(statearr_9789_9869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (9))){
var inst_9757 = (state_9781[(7)]);
var inst_9772 = cljs.core.rest.call(null,inst_9757);
var inst_9757__$1 = inst_9772;
var state_9781__$1 = (function (){var statearr_9790 = state_9781;
(statearr_9790[(7)] = inst_9757__$1);

return statearr_9790;
})();
var statearr_9791_9870 = state_9781__$1;
(statearr_9791_9870[(2)] = null);

(statearr_9791_9870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (5))){
var inst_9757 = (state_9781[(7)]);
var inst_9765 = cljs.core.first.call(null,inst_9757);
var state_9781__$1 = state_9781;
if(cljs.core.truth_(inst_9765)){
var statearr_9792_9871 = state_9781__$1;
(statearr_9792_9871[(1)] = (8));

} else {
var statearr_9793_9872 = state_9781__$1;
(statearr_9793_9872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (10))){
var inst_9775 = (state_9781[(2)]);
var state_9781__$1 = state_9781;
var statearr_9794_9873 = state_9781__$1;
(statearr_9794_9873[(2)] = inst_9775);

(statearr_9794_9873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9782 === (8))){
var inst_9757 = (state_9781[(7)]);
var inst_9767 = cljs_async_patterns.core.chan_sanitized.call(null,inst_9757);
var inst_9768 = cljs.core.first.call(null,inst_9767);
var state_9781__$1 = state_9781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9781__$1,(11),c,inst_9768);
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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_9798 = [null,null,null,null,null,null,null,null];
(statearr_9798[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_9798[(1)] = (1));

return statearr_9798;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_9781){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9799){if((e9799 instanceof Object)){
var ex__9301__auto__ = e9799;
var statearr_9800_9874 = state_9781;
(statearr_9800_9874[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9875 = state_9781;
state_9781 = G__9875;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_9781){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_9781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9801 = f__9319__auto__.call(null);
(statearr_9801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__9863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9876__i = 0, G__9876__a = new Array(arguments.length -  0);
while (G__9876__i < G__9876__a.length) {G__9876__a[G__9876__i] = arguments[G__9876__i + 0]; ++G__9876__i;}
  args = new cljs.core.IndexedSeq(G__9876__a,0);
} 
return G__9863__delegate.call(this,args);};
G__9863.cljs$lang$maxFixedArity = 0;
G__9863.cljs$lang$applyTo = (function (arglist__9877){
var args = cljs.core.seq(arglist__9877);
return G__9863__delegate(args);
});
G__9863.cljs$core$IFn$_invoke$arity$variadic = G__9863__delegate;
return G__9863;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__9878__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_9834){
var state_val_9835 = (state_9834[(1)]);
if((state_val_9835 === (7))){
var inst_9808 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9836_9879 = state_9834__$1;
(statearr_9836_9879[(2)] = inst_9808);

(statearr_9836_9879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (1))){
var inst_9802 = args;
var state_9834__$1 = (function (){var statearr_9837 = state_9834;
(statearr_9837[(7)] = inst_9802);

return statearr_9837;
})();
var statearr_9838_9880 = state_9834__$1;
(statearr_9838_9880[(2)] = null);

(statearr_9838_9880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (4))){
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9834__$1,(7),c,E_msg);
} else {
if((state_val_9835 === (15))){
var inst_9821 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9839_9881 = state_9834__$1;
(statearr_9839_9881[(2)] = inst_9821);

(statearr_9839_9881[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (13))){
var inst_9823 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9840_9882 = state_9834__$1;
(statearr_9840_9882[(2)] = inst_9823);

(statearr_9840_9882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (6))){
var inst_9830 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9841_9883 = state_9834__$1;
(statearr_9841_9883[(2)] = inst_9830);

(statearr_9841_9883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (3))){
var inst_9832 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9834__$1,inst_9832);
} else {
if((state_val_9835 === (12))){
var inst_9802 = (state_9834[(7)]);
var inst_9818 = cljs_async_patterns.core.chan_sanitized.call(null,inst_9802);
var inst_9819 = cljs.core.first.call(null,inst_9818);
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9834__$1,(15),c,inst_9819);
} else {
if((state_val_9835 === (2))){
var inst_9802 = (state_9834[(7)]);
var inst_9804 = cljs.core.count.call(null,inst_9802);
var inst_9805 = cljs.core._EQ_.call(null,(0),inst_9804);
var state_9834__$1 = state_9834;
if(inst_9805){
var statearr_9842_9884 = state_9834__$1;
(statearr_9842_9884[(1)] = (4));

} else {
var statearr_9843_9885 = state_9834__$1;
(statearr_9843_9885[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (11))){
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9834__$1,(14),c,E_msg);
} else {
if((state_val_9835 === (9))){
var inst_9802 = (state_9834[(7)]);
var inst_9825 = cljs.core.rest.call(null,inst_9802);
var inst_9802__$1 = inst_9825;
var state_9834__$1 = (function (){var statearr_9844 = state_9834;
(statearr_9844[(7)] = inst_9802__$1);

return statearr_9844;
})();
var statearr_9845_9886 = state_9834__$1;
(statearr_9845_9886[(2)] = null);

(statearr_9845_9886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (5))){
var inst_9802 = (state_9834[(7)]);
var inst_9810 = cljs.core.first.call(null,inst_9802);
var state_9834__$1 = state_9834;
if(cljs.core.truth_(inst_9810)){
var statearr_9846_9887 = state_9834__$1;
(statearr_9846_9887[(1)] = (8));

} else {
var statearr_9847_9888 = state_9834__$1;
(statearr_9847_9888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (14))){
var inst_9816 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9848_9889 = state_9834__$1;
(statearr_9848_9889[(2)] = inst_9816);

(statearr_9848_9889[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (10))){
var inst_9828 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9849_9890 = state_9834__$1;
(statearr_9849_9890[(2)] = inst_9828);

(statearr_9849_9890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (8))){
var inst_9802 = (state_9834[(7)]);
var inst_9812 = cljs.core.count.call(null,inst_9802);
var inst_9813 = (inst_9812 > (1));
var state_9834__$1 = state_9834;
if(cljs.core.truth_(inst_9813)){
var statearr_9850_9891 = state_9834__$1;
(statearr_9850_9891[(1)] = (11));

} else {
var statearr_9851_9892 = state_9834__$1;
(statearr_9851_9892[(1)] = (12));

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
});})(c__9318__auto__))
;
return ((function (switch__9297__auto__,c__9318__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_9855 = [null,null,null,null,null,null,null,null];
(statearr_9855[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_9855[(1)] = (1));

return statearr_9855;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_9834){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_9834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e9856){if((e9856 instanceof Object)){
var ex__9301__auto__ = e9856;
var statearr_9857_9893 = state_9834;
(statearr_9857_9893[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9894 = state_9834;
state_9834 = G__9894;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_9834){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_9834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_9858 = f__9319__auto__.call(null);
(statearr_9858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_9858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__9878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9895__i = 0, G__9895__a = new Array(arguments.length -  0);
while (G__9895__i < G__9895__a.length) {G__9895__a[G__9895__i] = arguments[G__9895__i + 0]; ++G__9895__i;}
  args = new cljs.core.IndexedSeq(G__9895__a,0);
} 
return G__9878__delegate.call(this,args);};
G__9878.cljs$lang$maxFixedArity = 0;
G__9878.cljs$lang$applyTo = (function (arglist__9896){
var args = cljs.core.seq(arglist__9896);
return G__9878__delegate(args);
});
G__9878.cljs$core$IFn$_invoke$arity$variadic = G__9878__delegate;
return G__9878;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___9898 = arguments.length;
var i__7019__auto___9899 = (0);
while(true){
if((i__7019__auto___9899 < len__7018__auto___9898)){
args__7025__auto__.push((arguments[i__7019__auto___9899]));

var G__9900 = (i__7019__auto___9899 + (1));
i__7019__auto___9899 = G__9900;
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

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq9897){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9897));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map