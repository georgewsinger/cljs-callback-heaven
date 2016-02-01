// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_async_patterns.core._LT_println = (function cljs_async_patterns$core$_LT_println(c){
var c__8450__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8450__auto__){
return (function (){
var f__8451__auto__ = (function (){var switch__8338__auto__ = ((function (c__8450__auto__){
return (function (state_15147){
var state_val_15148 = (state_15147[(1)]);
if((state_val_15148 === (1))){
var state_15147__$1 = state_15147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15147__$1,(2),c);
} else {
if((state_val_15148 === (2))){
var inst_15144 = (state_15147[(2)]);
var inst_15145 = cljs.core.println.call(null,inst_15144);
var state_15147__$1 = state_15147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15147__$1,inst_15145);
} else {
return null;
}
}
});})(c__8450__auto__))
;
return ((function (switch__8338__auto__,c__8450__auto__){
return (function() {
var cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto__ = null;
var cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto____0 = (function (){
var statearr_15152 = [null,null,null,null,null,null,null];
(statearr_15152[(0)] = cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto__);

(statearr_15152[(1)] = (1));

return statearr_15152;
});
var cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto____1 = (function (state_15147){
while(true){
var ret_value__8340__auto__ = (function (){try{while(true){
var result__8341__auto__ = switch__8338__auto__.call(null,state_15147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8341__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8341__auto__;
}
break;
}
}catch (e15153){if((e15153 instanceof Object)){
var ex__8342__auto__ = e15153;
var statearr_15154_15156 = state_15147;
(statearr_15154_15156[(5)] = ex__8342__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15157 = state_15147;
state_15147 = G__15157;
continue;
} else {
return ret_value__8340__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto__ = function(state_15147){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto____1.call(this,state_15147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto____0;
cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto____1;
return cljs_async_patterns$core$_LT_println_$_state_machine__8339__auto__;
})()
;})(switch__8338__auto__,c__8450__auto__))
})();
var state__8452__auto__ = (function (){var statearr_15155 = f__8451__auto__.call(null);
(statearr_15155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8450__auto__);

return statearr_15155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8452__auto__);
});})(c__8450__auto__))
);

return c__8450__auto__;
});
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___15159 = arguments.length;
var i__7019__auto___15160 = (0);
while(true){
if((i__7019__auto___15160 < len__7018__auto___15159)){
args__7025__auto__.push((arguments[i__7019__auto___15160]));

var G__15161 = (i__7019__auto___15160 + (1));
i__7019__auto___15160 = G__15161;
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

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq15158){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15158));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map