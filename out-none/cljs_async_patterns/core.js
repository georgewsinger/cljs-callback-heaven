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
return (function (state_14294){
var state_val_14295 = (state_14294[(1)]);
if((state_val_14295 === (1))){
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14294__$1,(2),c);
} else {
if((state_val_14295 === (2))){
var inst_14291 = (state_14294[(2)]);
var inst_14292 = cljs.core.println.call(null,inst_14291);
var state_14294__$1 = state_14294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14294__$1,inst_14292);
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
var statearr_14299 = [null,null,null,null,null,null,null];
(statearr_14299[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__);

(statearr_14299[(1)] = (1));

return statearr_14299;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1 = (function (state_14294){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14300){if((e14300 instanceof Object)){
var ex__8535__auto__ = e14300;
var statearr_14301_14303 = state_14294;
(statearr_14301_14303[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14304 = state_14294;
state_14294 = G__14304;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__ = function(state_14294){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1.call(this,state_14294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14302 = f__8553__auto__.call(null);
(statearr_14302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14302;
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
cljs_async_patterns.core._GT_1 = (function cljs_async_patterns$core$_GT_1(var_args){
var args14305 = [];
var len__7214__auto___14344 = arguments.length;
var i__7215__auto___14345 = (0);
while(true){
if((i__7215__auto___14345 < len__7214__auto___14344)){
args14305.push((arguments[i__7215__auto___14345]));

var G__14346 = (i__7215__auto___14345 + (1));
i__7215__auto___14345 = G__14346;
continue;
} else {
}
break;
}

var G__14307 = args14305.length;
switch (G__14307) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14305.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_14312){
var state_val_14313 = (state_14312[(1)]);
if((state_val_14313 === (1))){
var inst_14308 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_14312__$1 = state_14312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14312__$1,(2),c,inst_14308);
} else {
if((state_val_14313 === (2))){
var inst_14310 = (state_14312[(2)]);
var state_14312__$1 = state_14312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14312__$1,inst_14310);
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
var statearr_14317 = [null,null,null,null,null,null,null];
(statearr_14317[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_14317[(1)] = (1));

return statearr_14317;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_14312){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14318){if((e14318 instanceof Object)){
var ex__8535__auto__ = e14318;
var statearr_14319_14348 = state_14312;
(statearr_14319_14348[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14349 = state_14312;
state_14312 = G__14349;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_14312){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_14312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14320 = f__8553__auto__.call(null);
(statearr_14320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14320;
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
return (function (state_14331){
var state_val_14332 = (state_14331[(1)]);
if((state_val_14332 === (1))){
var state_14331__$1 = state_14331;
if(cljs.core.truth_(arg1)){
var statearr_14333_14350 = state_14331__$1;
(statearr_14333_14350[(1)] = (2));

} else {
var statearr_14334_14351 = state_14331__$1;
(statearr_14334_14351[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (2))){
var inst_14322 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14331__$1,(5),c,inst_14322);
} else {
if((state_val_14332 === (3))){
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14331__$1,(6),c,E_msg);
} else {
if((state_val_14332 === (4))){
var inst_14329 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14331__$1,inst_14329);
} else {
if((state_val_14332 === (5))){
var inst_14324 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14335_14352 = state_14331__$1;
(statearr_14335_14352[(2)] = inst_14324);

(statearr_14335_14352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14332 === (6))){
var inst_14327 = (state_14331[(2)]);
var state_14331__$1 = state_14331;
var statearr_14336_14353 = state_14331__$1;
(statearr_14336_14353[(2)] = inst_14327);

(statearr_14336_14353[(1)] = (4));


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
var statearr_14340 = [null,null,null,null,null,null,null];
(statearr_14340[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_14340[(1)] = (1));

return statearr_14340;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_14331){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14341){if((e14341 instanceof Object)){
var ex__8535__auto__ = e14341;
var statearr_14342_14354 = state_14331;
(statearr_14342_14354[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14355 = state_14331;
state_14331 = G__14355;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_14331){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_14331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14343 = f__8553__auto__.call(null);
(statearr_14343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args14356 = [];
var len__7214__auto___14423 = arguments.length;
var i__7215__auto___14424 = (0);
while(true){
if((i__7215__auto___14424 < len__7214__auto___14423)){
args14356.push((arguments[i__7215__auto___14424]));

var G__14425 = (i__7215__auto___14424 + (1));
i__7215__auto___14424 = G__14425;
continue;
} else {
}
break;
}

var G__14358 = args14356.length;
switch (G__14358) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14356.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_14374){
var state_val_14375 = (state_14374[(1)]);
if((state_val_14375 === (1))){
var state_14374__$1 = state_14374;
if(cljs.core.truth_(err)){
var statearr_14376_14427 = state_14374__$1;
(statearr_14376_14427[(1)] = (2));

} else {
var statearr_14377_14428 = state_14374__$1;
(statearr_14377_14428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (2))){
var inst_14360 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_14374__$1 = state_14374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14374__$1,(5),c,inst_14360);
} else {
if((state_val_14375 === (3))){
var state_14374__$1 = state_14374;
var statearr_14378_14429 = state_14374__$1;
(statearr_14378_14429[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (4))){
var inst_14372 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14374__$1,inst_14372);
} else {
if((state_val_14375 === (5))){
var inst_14362 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
var statearr_14380_14430 = state_14374__$1;
(statearr_14380_14430[(2)] = inst_14362);

(statearr_14380_14430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (6))){
var inst_14365 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_14374__$1 = state_14374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14374__$1,(9),c,inst_14365);
} else {
if((state_val_14375 === (7))){
var state_14374__$1 = state_14374;
var statearr_14381_14431 = state_14374__$1;
(statearr_14381_14431[(2)] = null);

(statearr_14381_14431[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (8))){
var inst_14370 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
var statearr_14382_14432 = state_14374__$1;
(statearr_14382_14432[(2)] = inst_14370);

(statearr_14382_14432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14375 === (9))){
var inst_14367 = (state_14374[(2)]);
var state_14374__$1 = state_14374;
var statearr_14383_14433 = state_14374__$1;
(statearr_14383_14433[(2)] = inst_14367);

(statearr_14383_14433[(1)] = (8));


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
var statearr_14387 = [null,null,null,null,null,null,null];
(statearr_14387[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_14387[(1)] = (1));

return statearr_14387;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_14374){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14388){if((e14388 instanceof Object)){
var ex__8535__auto__ = e14388;
var statearr_14389_14434 = state_14374;
(statearr_14389_14434[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14435 = state_14374;
state_14374 = G__14435;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_14374){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_14374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14390 = f__8553__auto__.call(null);
(statearr_14390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14390;
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
return (function (state_14406){
var state_val_14407 = (state_14406[(1)]);
if((state_val_14407 === (1))){
var state_14406__$1 = state_14406;
if(cljs.core.truth_(err)){
var statearr_14408_14436 = state_14406__$1;
(statearr_14408_14436[(1)] = (2));

} else {
var statearr_14409_14437 = state_14406__$1;
(statearr_14409_14437[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14407 === (2))){
var inst_14392 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_14406__$1 = state_14406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14406__$1,(5),c,inst_14392);
} else {
if((state_val_14407 === (3))){
var state_14406__$1 = state_14406;
var statearr_14410_14438 = state_14406__$1;
(statearr_14410_14438[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14407 === (4))){
var inst_14404 = (state_14406[(2)]);
var state_14406__$1 = state_14406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14406__$1,inst_14404);
} else {
if((state_val_14407 === (5))){
var inst_14394 = (state_14406[(2)]);
var state_14406__$1 = state_14406;
var statearr_14412_14439 = state_14406__$1;
(statearr_14412_14439[(2)] = inst_14394);

(statearr_14412_14439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14407 === (6))){
var inst_14397 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_14406__$1 = state_14406;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14406__$1,(9),c,inst_14397);
} else {
if((state_val_14407 === (7))){
var state_14406__$1 = state_14406;
var statearr_14413_14440 = state_14406__$1;
(statearr_14413_14440[(2)] = null);

(statearr_14413_14440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14407 === (8))){
var inst_14402 = (state_14406[(2)]);
var state_14406__$1 = state_14406;
var statearr_14414_14441 = state_14406__$1;
(statearr_14414_14441[(2)] = inst_14402);

(statearr_14414_14441[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14407 === (9))){
var inst_14399 = (state_14406[(2)]);
var state_14406__$1 = state_14406;
var statearr_14415_14442 = state_14406__$1;
(statearr_14415_14442[(2)] = inst_14399);

(statearr_14415_14442[(1)] = (8));


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
var statearr_14419 = [null,null,null,null,null,null,null];
(statearr_14419[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_14419[(1)] = (1));

return statearr_14419;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_14406){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14420){if((e14420 instanceof Object)){
var ex__8535__auto__ = e14420;
var statearr_14421_14443 = state_14406;
(statearr_14421_14443[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14444 = state_14406;
state_14406 = G__14444;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_14406){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_14406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14422 = f__8553__auto__.call(null);
(statearr_14422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(c){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs_async_patterns.core.E_msg], null).call(null,(function (err1,err2,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_14596){
var state_val_14597 = (state_14596[(1)]);
if((state_val_14597 === (7))){
var state_14596__$1 = state_14596;
var statearr_14598_14617 = state_14596__$1;
(statearr_14598_14617[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (1))){
var state_14596__$1 = state_14596;
if(cljs.core.truth_(err1)){
var statearr_14600_14618 = state_14596__$1;
(statearr_14600_14618[(1)] = (2));

} else {
var statearr_14601_14619 = state_14596__$1;
(statearr_14601_14619[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (4))){
var inst_14594 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14596__$1,inst_14594);
} else {
if((state_val_14597 === (13))){
var inst_14587 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
var statearr_14602_14620 = state_14596__$1;
(statearr_14602_14620[(2)] = inst_14587);

(statearr_14602_14620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (6))){
var inst_14580 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14596__$1,(9),c,inst_14580);
} else {
if((state_val_14597 === (3))){
var state_14596__$1 = state_14596;
if(cljs.core.truth_(err2)){
var statearr_14603_14621 = state_14596__$1;
(statearr_14603_14621[(1)] = (6));

} else {
var statearr_14604_14622 = state_14596__$1;
(statearr_14604_14622[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (12))){
var inst_14590 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
var statearr_14605_14623 = state_14596__$1;
(statearr_14605_14623[(2)] = inst_14590);

(statearr_14605_14623[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (2))){
var inst_14575 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14596__$1,(5),c,inst_14575);
} else {
if((state_val_14597 === (11))){
var state_14596__$1 = state_14596;
var statearr_14606_14624 = state_14596__$1;
(statearr_14606_14624[(2)] = null);

(statearr_14606_14624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (9))){
var inst_14582 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
var statearr_14607_14625 = state_14596__$1;
(statearr_14607_14625[(2)] = inst_14582);

(statearr_14607_14625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (5))){
var inst_14577 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
var statearr_14608_14626 = state_14596__$1;
(statearr_14608_14626[(2)] = inst_14577);

(statearr_14608_14626[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14597 === (10))){
var inst_14585 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_14596__$1 = state_14596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14596__$1,(13),c,inst_14585);
} else {
if((state_val_14597 === (8))){
var inst_14592 = (state_14596[(2)]);
var state_14596__$1 = state_14596;
var statearr_14609_14627 = state_14596__$1;
(statearr_14609_14627[(2)] = inst_14592);

(statearr_14609_14627[(1)] = (4));


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
var statearr_14613 = [null,null,null,null,null,null,null];
(statearr_14613[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__);

(statearr_14613[(1)] = (1));

return statearr_14613;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____1 = (function (state_14596){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14614){if((e14614 instanceof Object)){
var ex__8535__auto__ = e14614;
var statearr_14615_14628 = state_14596;
(statearr_14615_14628[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14629 = state_14596;
state_14596 = G__14629;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__ = function(state_14596){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____1.call(this,state_14596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14616 = f__8553__auto__.call(null);
(statearr_14616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
}));
});
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args14630 = [];
var len__7214__auto___14735 = arguments.length;
var i__7215__auto___14736 = (0);
while(true){
if((i__7215__auto___14736 < len__7214__auto___14735)){
args14630.push((arguments[i__7215__auto___14736]));

var G__14737 = (i__7215__auto___14736 + (1));
i__7215__auto___14736 = G__14737;
continue;
} else {
}
break;
}

var G__14632 = args14630.length;
switch (G__14632) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14630.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__14739__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_14657){
var state_val_14658 = (state_14657[(1)]);
if((state_val_14658 === (7))){
var inst_14639 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
var statearr_14659_14740 = state_14657__$1;
(statearr_14659_14740[(2)] = inst_14639);

(statearr_14659_14740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (1))){
var inst_14633 = args;
var state_14657__$1 = (function (){var statearr_14660 = state_14657;
(statearr_14660[(7)] = inst_14633);

return statearr_14660;
})();
var statearr_14661_14741 = state_14657__$1;
(statearr_14661_14741[(2)] = null);

(statearr_14661_14741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (4))){
var state_14657__$1 = state_14657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14657__$1,(7),c,false);
} else {
if((state_val_14658 === (6))){
var inst_14653 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
var statearr_14662_14742 = state_14657__$1;
(statearr_14662_14742[(2)] = inst_14653);

(statearr_14662_14742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (3))){
var inst_14655 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14657__$1,inst_14655);
} else {
if((state_val_14658 === (2))){
var inst_14633 = (state_14657[(7)]);
var inst_14635 = cljs.core.count.call(null,inst_14633);
var inst_14636 = cljs.core._EQ_.call(null,(0),inst_14635);
var state_14657__$1 = state_14657;
if(inst_14636){
var statearr_14663_14743 = state_14657__$1;
(statearr_14663_14743[(1)] = (4));

} else {
var statearr_14664_14744 = state_14657__$1;
(statearr_14664_14744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (11))){
var inst_14646 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
var statearr_14665_14745 = state_14657__$1;
(statearr_14665_14745[(2)] = inst_14646);

(statearr_14665_14745[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (9))){
var inst_14633 = (state_14657[(7)]);
var inst_14648 = cljs.core.rest.call(null,inst_14633);
var inst_14633__$1 = inst_14648;
var state_14657__$1 = (function (){var statearr_14666 = state_14657;
(statearr_14666[(7)] = inst_14633__$1);

return statearr_14666;
})();
var statearr_14667_14746 = state_14657__$1;
(statearr_14667_14746[(2)] = null);

(statearr_14667_14746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (5))){
var inst_14633 = (state_14657[(7)]);
var inst_14641 = cljs.core.first.call(null,inst_14633);
var state_14657__$1 = state_14657;
if(cljs.core.truth_(inst_14641)){
var statearr_14668_14747 = state_14657__$1;
(statearr_14668_14747[(1)] = (8));

} else {
var statearr_14669_14748 = state_14657__$1;
(statearr_14669_14748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (10))){
var inst_14651 = (state_14657[(2)]);
var state_14657__$1 = state_14657;
var statearr_14670_14749 = state_14657__$1;
(statearr_14670_14749[(2)] = inst_14651);

(statearr_14670_14749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14658 === (8))){
var inst_14633 = (state_14657[(7)]);
var inst_14643 = cljs_async_patterns.core.chan_sanitized.call(null,inst_14633);
var inst_14644 = cljs.core.first.call(null,inst_14643);
var state_14657__$1 = state_14657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14657__$1,(11),c,inst_14644);
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
var statearr_14674 = [null,null,null,null,null,null,null,null];
(statearr_14674[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_14674[(1)] = (1));

return statearr_14674;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_14657){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14675){if((e14675 instanceof Object)){
var ex__8535__auto__ = e14675;
var statearr_14676_14750 = state_14657;
(statearr_14676_14750[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14675;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14751 = state_14657;
state_14657 = G__14751;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_14657){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_14657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14677 = f__8553__auto__.call(null);
(statearr_14677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__14739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14752__i = 0, G__14752__a = new Array(arguments.length -  0);
while (G__14752__i < G__14752__a.length) {G__14752__a[G__14752__i] = arguments[G__14752__i + 0]; ++G__14752__i;}
  args = new cljs.core.IndexedSeq(G__14752__a,0);
} 
return G__14739__delegate.call(this,args);};
G__14739.cljs$lang$maxFixedArity = 0;
G__14739.cljs$lang$applyTo = (function (arglist__14753){
var args = cljs.core.seq(arglist__14753);
return G__14739__delegate(args);
});
G__14739.cljs$core$IFn$_invoke$arity$variadic = G__14739__delegate;
return G__14739;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__14754__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_14710){
var state_val_14711 = (state_14710[(1)]);
if((state_val_14711 === (7))){
var inst_14684 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14712_14755 = state_14710__$1;
(statearr_14712_14755[(2)] = inst_14684);

(statearr_14712_14755[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (1))){
var inst_14678 = args;
var state_14710__$1 = (function (){var statearr_14713 = state_14710;
(statearr_14713[(7)] = inst_14678);

return statearr_14713;
})();
var statearr_14714_14756 = state_14710__$1;
(statearr_14714_14756[(2)] = null);

(statearr_14714_14756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (4))){
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14710__$1,(7),c,E_msg);
} else {
if((state_val_14711 === (15))){
var inst_14697 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14715_14757 = state_14710__$1;
(statearr_14715_14757[(2)] = inst_14697);

(statearr_14715_14757[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (13))){
var inst_14699 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14716_14758 = state_14710__$1;
(statearr_14716_14758[(2)] = inst_14699);

(statearr_14716_14758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (6))){
var inst_14706 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14717_14759 = state_14710__$1;
(statearr_14717_14759[(2)] = inst_14706);

(statearr_14717_14759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (3))){
var inst_14708 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14710__$1,inst_14708);
} else {
if((state_val_14711 === (12))){
var inst_14678 = (state_14710[(7)]);
var inst_14694 = cljs_async_patterns.core.chan_sanitized.call(null,inst_14678);
var inst_14695 = cljs.core.first.call(null,inst_14694);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14710__$1,(15),c,inst_14695);
} else {
if((state_val_14711 === (2))){
var inst_14678 = (state_14710[(7)]);
var inst_14680 = cljs.core.count.call(null,inst_14678);
var inst_14681 = cljs.core._EQ_.call(null,(0),inst_14680);
var state_14710__$1 = state_14710;
if(inst_14681){
var statearr_14718_14760 = state_14710__$1;
(statearr_14718_14760[(1)] = (4));

} else {
var statearr_14719_14761 = state_14710__$1;
(statearr_14719_14761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (11))){
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14710__$1,(14),c,E_msg);
} else {
if((state_val_14711 === (9))){
var inst_14678 = (state_14710[(7)]);
var inst_14701 = cljs.core.rest.call(null,inst_14678);
var inst_14678__$1 = inst_14701;
var state_14710__$1 = (function (){var statearr_14720 = state_14710;
(statearr_14720[(7)] = inst_14678__$1);

return statearr_14720;
})();
var statearr_14721_14762 = state_14710__$1;
(statearr_14721_14762[(2)] = null);

(statearr_14721_14762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (5))){
var inst_14678 = (state_14710[(7)]);
var inst_14686 = cljs.core.first.call(null,inst_14678);
var state_14710__$1 = state_14710;
if(cljs.core.truth_(inst_14686)){
var statearr_14722_14763 = state_14710__$1;
(statearr_14722_14763[(1)] = (8));

} else {
var statearr_14723_14764 = state_14710__$1;
(statearr_14723_14764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (14))){
var inst_14692 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14724_14765 = state_14710__$1;
(statearr_14724_14765[(2)] = inst_14692);

(statearr_14724_14765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (10))){
var inst_14704 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14725_14766 = state_14710__$1;
(statearr_14725_14766[(2)] = inst_14704);

(statearr_14725_14766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (8))){
var inst_14678 = (state_14710[(7)]);
var inst_14688 = cljs.core.count.call(null,inst_14678);
var inst_14689 = (inst_14688 > (1));
var state_14710__$1 = state_14710;
if(cljs.core.truth_(inst_14689)){
var statearr_14726_14767 = state_14710__$1;
(statearr_14726_14767[(1)] = (11));

} else {
var statearr_14727_14768 = state_14710__$1;
(statearr_14727_14768[(1)] = (12));

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
var statearr_14731 = [null,null,null,null,null,null,null,null];
(statearr_14731[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_14731[(1)] = (1));

return statearr_14731;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_14710){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_14710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e14732){if((e14732 instanceof Object)){
var ex__8535__auto__ = e14732;
var statearr_14733_14769 = state_14710;
(statearr_14733_14769[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14770 = state_14710;
state_14710 = G__14770;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_14710){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_14710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_14734 = f__8553__auto__.call(null);
(statearr_14734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_14734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__14754 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14771__i = 0, G__14771__a = new Array(arguments.length -  0);
while (G__14771__i < G__14771__a.length) {G__14771__a[G__14771__i] = arguments[G__14771__i + 0]; ++G__14771__i;}
  args = new cljs.core.IndexedSeq(G__14771__a,0);
} 
return G__14754__delegate.call(this,args);};
G__14754.cljs$lang$maxFixedArity = 0;
G__14754.cljs$lang$applyTo = (function (arglist__14772){
var args = cljs.core.seq(arglist__14772);
return G__14754__delegate(args);
});
G__14754.cljs$core$IFn$_invoke$arity$variadic = G__14754__delegate;
return G__14754;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
