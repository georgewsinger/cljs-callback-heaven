// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_async_patterns.core._LT_println = (function cljs_async_patterns$core$_LT_println(c){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_15225){
var state_val_15226 = (state_15225[(1)]);
if((state_val_15226 === (1))){
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15225__$1,(2),c);
} else {
if((state_val_15226 === (2))){
var inst_15222 = (state_15225[(2)]);
var inst_15223 = cljs.core.println.call(null,inst_15222);
var state_15225__$1 = state_15225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15225__$1,inst_15223);
} else {
return null;
}
}
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto__ = null;
var cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto____0 = (function (){
var statearr_15230 = [null,null,null,null,null,null,null];
(statearr_15230[(0)] = cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto__);

(statearr_15230[(1)] = (1));

return statearr_15230;
});
var cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto____1 = (function (state_15225){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_15225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e15231){if((e15231 instanceof Object)){
var ex__8487__auto__ = e15231;
var statearr_15232_15234 = state_15225;
(statearr_15232_15234[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15235 = state_15225;
state_15225 = G__15235;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto__ = function(state_15225){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto____1.call(this,state_15225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto____0;
cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto____1;
return cljs_async_patterns$core$_LT_println_$_state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_15233 = f__8505__auto__.call(null);
(statearr_15233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_15233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___15237 = arguments.length;
var i__7215__auto___15238 = (0);
while(true){
if((i__7215__auto___15238 < len__7214__auto___15237)){
args__7221__auto__.push((arguments[i__7215__auto___15238]));

var G__15239 = (i__7215__auto___15238 + (1));
i__7215__auto___15238 = G__15239;
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

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq15236){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15236));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map