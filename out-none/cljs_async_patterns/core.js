// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_async_patterns.core._LT_print = (function cljs_async_patterns$core$_LT_print(c){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_80971){
var state_val_80972 = (state_80971[(1)]);
if((state_val_80972 === (1))){
var state_80971__$1 = state_80971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_80971__$1,(2),c);
} else {
if((state_val_80972 === (2))){
var inst_80968 = (state_80971[(2)]);
var inst_80969 = cljs.core.println.call(null,inst_80968);
var state_80971__$1 = state_80971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80971__$1,inst_80969);
} else {
return null;
}
}
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__ = null;
var cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____0 = (function (){
var statearr_80976 = [null,null,null,null,null,null,null];
(statearr_80976[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__);

(statearr_80976[(1)] = (1));

return statearr_80976;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____1 = (function (state_80971){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_80971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e80977){if((e80977 instanceof Object)){
var ex__8487__auto__ = e80977;
var statearr_80978_80980 = state_80971;
(statearr_80978_80980[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80981 = state_80971;
state_80971 = G__80981;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__ = function(state_80971){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____1.call(this,state_80971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_80979 = f__8505__auto__.call(null);
(statearr_80979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_80979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
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
var args80982 = [];
var len__7214__auto___81021 = arguments.length;
var i__7215__auto___81022 = (0);
while(true){
if((i__7215__auto___81022 < len__7214__auto___81021)){
args80982.push((arguments[i__7215__auto___81022]));

var G__81023 = (i__7215__auto___81022 + (1));
i__7215__auto___81022 = G__81023;
continue;
} else {
}
break;
}

var G__80984 = args80982.length;
switch (G__80984) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args80982.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_80989){
var state_val_80990 = (state_80989[(1)]);
if((state_val_80990 === (1))){
var inst_80985 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_80989__$1 = state_80989;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_80989__$1,(2),c,inst_80985);
} else {
if((state_val_80990 === (2))){
var inst_80987 = (state_80989[(2)]);
var state_80989__$1 = state_80989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_80989__$1,inst_80987);
} else {
return null;
}
}
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8484__auto__ = null;
var cljs_async_patterns$core$state_machine__8484__auto____0 = (function (){
var statearr_80994 = [null,null,null,null,null,null,null];
(statearr_80994[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_80994[(1)] = (1));

return statearr_80994;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_80989){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_80989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e80995){if((e80995 instanceof Object)){
var ex__8487__auto__ = e80995;
var statearr_80996_81025 = state_80989;
(statearr_80996_81025[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_80989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81026 = state_80989;
state_80989 = G__81026;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_80989){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_80989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_80997 = f__8505__auto__.call(null);
(statearr_80997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_80997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (arg1){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_81008){
var state_val_81009 = (state_81008[(1)]);
if((state_val_81009 === (1))){
var state_81008__$1 = state_81008;
if(cljs.core.truth_(arg1)){
var statearr_81010_81027 = state_81008__$1;
(statearr_81010_81027[(1)] = (2));

} else {
var statearr_81011_81028 = state_81008__$1;
(statearr_81011_81028[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81009 === (2))){
var inst_80999 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_81008__$1 = state_81008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81008__$1,(5),c,inst_80999);
} else {
if((state_val_81009 === (3))){
var state_81008__$1 = state_81008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81008__$1,(6),c,E_msg);
} else {
if((state_val_81009 === (4))){
var inst_81006 = (state_81008[(2)]);
var state_81008__$1 = state_81008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81008__$1,inst_81006);
} else {
if((state_val_81009 === (5))){
var inst_81001 = (state_81008[(2)]);
var state_81008__$1 = state_81008;
var statearr_81012_81029 = state_81008__$1;
(statearr_81012_81029[(2)] = inst_81001);

(statearr_81012_81029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81009 === (6))){
var inst_81004 = (state_81008[(2)]);
var state_81008__$1 = state_81008;
var statearr_81013_81030 = state_81008__$1;
(statearr_81013_81030[(2)] = inst_81004);

(statearr_81013_81030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8484__auto__ = null;
var cljs_async_patterns$core$state_machine__8484__auto____0 = (function (){
var statearr_81017 = [null,null,null,null,null,null,null];
(statearr_81017[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_81017[(1)] = (1));

return statearr_81017;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_81008){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_81008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e81018){if((e81018 instanceof Object)){
var ex__8487__auto__ = e81018;
var statearr_81019_81031 = state_81008;
(statearr_81019_81031[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81032 = state_81008;
state_81008 = G__81032;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_81008){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_81008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_81020 = f__8505__auto__.call(null);
(statearr_81020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_81020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args81033 = [];
var len__7214__auto___81100 = arguments.length;
var i__7215__auto___81101 = (0);
while(true){
if((i__7215__auto___81101 < len__7214__auto___81100)){
args81033.push((arguments[i__7215__auto___81101]));

var G__81102 = (i__7215__auto___81101 + (1));
i__7215__auto___81101 = G__81102;
continue;
} else {
}
break;
}

var G__81035 = args81033.length;
switch (G__81035) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81033.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_81051){
var state_val_81052 = (state_81051[(1)]);
if((state_val_81052 === (1))){
var state_81051__$1 = state_81051;
if(cljs.core.truth_(err)){
var statearr_81053_81104 = state_81051__$1;
(statearr_81053_81104[(1)] = (2));

} else {
var statearr_81054_81105 = state_81051__$1;
(statearr_81054_81105[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81052 === (2))){
var inst_81037 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_81051__$1 = state_81051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81051__$1,(5),c,inst_81037);
} else {
if((state_val_81052 === (3))){
var state_81051__$1 = state_81051;
var statearr_81055_81106 = state_81051__$1;
(statearr_81055_81106[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81052 === (4))){
var inst_81049 = (state_81051[(2)]);
var state_81051__$1 = state_81051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81051__$1,inst_81049);
} else {
if((state_val_81052 === (5))){
var inst_81039 = (state_81051[(2)]);
var state_81051__$1 = state_81051;
var statearr_81057_81107 = state_81051__$1;
(statearr_81057_81107[(2)] = inst_81039);

(statearr_81057_81107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81052 === (6))){
var inst_81042 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_81051__$1 = state_81051;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81051__$1,(9),c,inst_81042);
} else {
if((state_val_81052 === (7))){
var state_81051__$1 = state_81051;
var statearr_81058_81108 = state_81051__$1;
(statearr_81058_81108[(2)] = null);

(statearr_81058_81108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81052 === (8))){
var inst_81047 = (state_81051[(2)]);
var state_81051__$1 = state_81051;
var statearr_81059_81109 = state_81051__$1;
(statearr_81059_81109[(2)] = inst_81047);

(statearr_81059_81109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81052 === (9))){
var inst_81044 = (state_81051[(2)]);
var state_81051__$1 = state_81051;
var statearr_81060_81110 = state_81051__$1;
(statearr_81060_81110[(2)] = inst_81044);

(statearr_81060_81110[(1)] = (8));


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
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8484__auto__ = null;
var cljs_async_patterns$core$state_machine__8484__auto____0 = (function (){
var statearr_81064 = [null,null,null,null,null,null,null];
(statearr_81064[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_81064[(1)] = (1));

return statearr_81064;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_81051){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_81051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e81065){if((e81065 instanceof Object)){
var ex__8487__auto__ = e81065;
var statearr_81066_81111 = state_81051;
(statearr_81066_81111[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81112 = state_81051;
state_81051 = G__81112;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_81051){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_81051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_81067 = f__8505__auto__.call(null);
(statearr_81067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_81067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err,res){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_81083){
var state_val_81084 = (state_81083[(1)]);
if((state_val_81084 === (1))){
var state_81083__$1 = state_81083;
if(cljs.core.truth_(err)){
var statearr_81085_81113 = state_81083__$1;
(statearr_81085_81113[(1)] = (2));

} else {
var statearr_81086_81114 = state_81083__$1;
(statearr_81086_81114[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81084 === (2))){
var inst_81069 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_81083__$1 = state_81083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81083__$1,(5),c,inst_81069);
} else {
if((state_val_81084 === (3))){
var state_81083__$1 = state_81083;
var statearr_81087_81115 = state_81083__$1;
(statearr_81087_81115[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81084 === (4))){
var inst_81081 = (state_81083[(2)]);
var state_81083__$1 = state_81083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81083__$1,inst_81081);
} else {
if((state_val_81084 === (5))){
var inst_81071 = (state_81083[(2)]);
var state_81083__$1 = state_81083;
var statearr_81089_81116 = state_81083__$1;
(statearr_81089_81116[(2)] = inst_81071);

(statearr_81089_81116[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81084 === (6))){
var inst_81074 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_81083__$1 = state_81083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81083__$1,(9),c,inst_81074);
} else {
if((state_val_81084 === (7))){
var state_81083__$1 = state_81083;
var statearr_81090_81117 = state_81083__$1;
(statearr_81090_81117[(2)] = null);

(statearr_81090_81117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81084 === (8))){
var inst_81079 = (state_81083[(2)]);
var state_81083__$1 = state_81083;
var statearr_81091_81118 = state_81083__$1;
(statearr_81091_81118[(2)] = inst_81079);

(statearr_81091_81118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81084 === (9))){
var inst_81076 = (state_81083[(2)]);
var state_81083__$1 = state_81083;
var statearr_81092_81119 = state_81083__$1;
(statearr_81092_81119[(2)] = inst_81076);

(statearr_81092_81119[(1)] = (8));


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
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8484__auto__ = null;
var cljs_async_patterns$core$state_machine__8484__auto____0 = (function (){
var statearr_81096 = [null,null,null,null,null,null,null];
(statearr_81096[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_81096[(1)] = (1));

return statearr_81096;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_81083){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_81083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e81097){if((e81097 instanceof Object)){
var ex__8487__auto__ = e81097;
var statearr_81098_81120 = state_81083;
(statearr_81098_81120[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81121 = state_81083;
state_81083 = G__81121;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_81083){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_81083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_81099 = f__8505__auto__.call(null);
(statearr_81099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_81099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(c){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs_async_patterns.core.E_msg], null).call(null,(function (err1,err2,res){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_81273){
var state_val_81274 = (state_81273[(1)]);
if((state_val_81274 === (7))){
var state_81273__$1 = state_81273;
var statearr_81275_81294 = state_81273__$1;
(statearr_81275_81294[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (1))){
var state_81273__$1 = state_81273;
if(cljs.core.truth_(err1)){
var statearr_81277_81295 = state_81273__$1;
(statearr_81277_81295[(1)] = (2));

} else {
var statearr_81278_81296 = state_81273__$1;
(statearr_81278_81296[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (4))){
var inst_81271 = (state_81273[(2)]);
var state_81273__$1 = state_81273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81273__$1,inst_81271);
} else {
if((state_val_81274 === (13))){
var inst_81264 = (state_81273[(2)]);
var state_81273__$1 = state_81273;
var statearr_81279_81297 = state_81273__$1;
(statearr_81279_81297[(2)] = inst_81264);

(statearr_81279_81297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (6))){
var inst_81257 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_81273__$1 = state_81273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81273__$1,(9),c,inst_81257);
} else {
if((state_val_81274 === (3))){
var state_81273__$1 = state_81273;
if(cljs.core.truth_(err2)){
var statearr_81280_81298 = state_81273__$1;
(statearr_81280_81298[(1)] = (6));

} else {
var statearr_81281_81299 = state_81273__$1;
(statearr_81281_81299[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (12))){
var inst_81267 = (state_81273[(2)]);
var state_81273__$1 = state_81273;
var statearr_81282_81300 = state_81273__$1;
(statearr_81282_81300[(2)] = inst_81267);

(statearr_81282_81300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (2))){
var inst_81252 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_81273__$1 = state_81273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81273__$1,(5),c,inst_81252);
} else {
if((state_val_81274 === (11))){
var state_81273__$1 = state_81273;
var statearr_81283_81301 = state_81273__$1;
(statearr_81283_81301[(2)] = null);

(statearr_81283_81301[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (9))){
var inst_81259 = (state_81273[(2)]);
var state_81273__$1 = state_81273;
var statearr_81284_81302 = state_81273__$1;
(statearr_81284_81302[(2)] = inst_81259);

(statearr_81284_81302[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (5))){
var inst_81254 = (state_81273[(2)]);
var state_81273__$1 = state_81273;
var statearr_81285_81303 = state_81273__$1;
(statearr_81285_81303[(2)] = inst_81254);

(statearr_81285_81303[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81274 === (10))){
var inst_81262 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_81273__$1 = state_81273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81273__$1,(13),c,inst_81262);
} else {
if((state_val_81274 === (8))){
var inst_81269 = (state_81273[(2)]);
var state_81273__$1 = state_81273;
var statearr_81286_81304 = state_81273__$1;
(statearr_81286_81304[(2)] = inst_81269);

(statearr_81286_81304[(1)] = (4));


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
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__ = null;
var cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____0 = (function (){
var statearr_81290 = [null,null,null,null,null,null,null];
(statearr_81290[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__);

(statearr_81290[(1)] = (1));

return statearr_81290;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____1 = (function (state_81273){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_81273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e81291){if((e81291 instanceof Object)){
var ex__8487__auto__ = e81291;
var statearr_81292_81305 = state_81273;
(statearr_81292_81305[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81306 = state_81273;
state_81273 = G__81306;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__ = function(state_81273){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____1.call(this,state_81273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_81293 = f__8505__auto__.call(null);
(statearr_81293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_81293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
}));
});
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args81307 = [];
var len__7214__auto___81412 = arguments.length;
var i__7215__auto___81413 = (0);
while(true){
if((i__7215__auto___81413 < len__7214__auto___81412)){
args81307.push((arguments[i__7215__auto___81413]));

var G__81414 = (i__7215__auto___81413 + (1));
i__7215__auto___81413 = G__81414;
continue;
} else {
}
break;
}

var G__81309 = args81307.length;
switch (G__81309) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args81307.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__81416__delegate = function (args){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_81334){
var state_val_81335 = (state_81334[(1)]);
if((state_val_81335 === (7))){
var inst_81316 = (state_81334[(2)]);
var state_81334__$1 = state_81334;
var statearr_81336_81417 = state_81334__$1;
(statearr_81336_81417[(2)] = inst_81316);

(statearr_81336_81417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (1))){
var inst_81310 = args;
var state_81334__$1 = (function (){var statearr_81337 = state_81334;
(statearr_81337[(7)] = inst_81310);

return statearr_81337;
})();
var statearr_81338_81418 = state_81334__$1;
(statearr_81338_81418[(2)] = null);

(statearr_81338_81418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (4))){
var state_81334__$1 = state_81334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81334__$1,(7),c,false);
} else {
if((state_val_81335 === (6))){
var inst_81330 = (state_81334[(2)]);
var state_81334__$1 = state_81334;
var statearr_81339_81419 = state_81334__$1;
(statearr_81339_81419[(2)] = inst_81330);

(statearr_81339_81419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (3))){
var inst_81332 = (state_81334[(2)]);
var state_81334__$1 = state_81334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81334__$1,inst_81332);
} else {
if((state_val_81335 === (2))){
var inst_81310 = (state_81334[(7)]);
var inst_81312 = cljs.core.count.call(null,inst_81310);
var inst_81313 = cljs.core._EQ_.call(null,(0),inst_81312);
var state_81334__$1 = state_81334;
if(inst_81313){
var statearr_81340_81420 = state_81334__$1;
(statearr_81340_81420[(1)] = (4));

} else {
var statearr_81341_81421 = state_81334__$1;
(statearr_81341_81421[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (11))){
var inst_81323 = (state_81334[(2)]);
var state_81334__$1 = state_81334;
var statearr_81342_81422 = state_81334__$1;
(statearr_81342_81422[(2)] = inst_81323);

(statearr_81342_81422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (9))){
var inst_81310 = (state_81334[(7)]);
var inst_81325 = cljs.core.rest.call(null,inst_81310);
var inst_81310__$1 = inst_81325;
var state_81334__$1 = (function (){var statearr_81343 = state_81334;
(statearr_81343[(7)] = inst_81310__$1);

return statearr_81343;
})();
var statearr_81344_81423 = state_81334__$1;
(statearr_81344_81423[(2)] = null);

(statearr_81344_81423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (5))){
var inst_81310 = (state_81334[(7)]);
var inst_81318 = cljs.core.first.call(null,inst_81310);
var state_81334__$1 = state_81334;
if(cljs.core.truth_(inst_81318)){
var statearr_81345_81424 = state_81334__$1;
(statearr_81345_81424[(1)] = (8));

} else {
var statearr_81346_81425 = state_81334__$1;
(statearr_81346_81425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (10))){
var inst_81328 = (state_81334[(2)]);
var state_81334__$1 = state_81334;
var statearr_81347_81426 = state_81334__$1;
(statearr_81347_81426[(2)] = inst_81328);

(statearr_81347_81426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81335 === (8))){
var inst_81310 = (state_81334[(7)]);
var inst_81320 = cljs_async_patterns.core.chan_sanitized.call(null,inst_81310);
var inst_81321 = cljs.core.first.call(null,inst_81320);
var state_81334__$1 = state_81334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81334__$1,(11),c,inst_81321);
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
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8484__auto__ = null;
var cljs_async_patterns$core$state_machine__8484__auto____0 = (function (){
var statearr_81351 = [null,null,null,null,null,null,null,null];
(statearr_81351[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_81351[(1)] = (1));

return statearr_81351;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_81334){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_81334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e81352){if((e81352 instanceof Object)){
var ex__8487__auto__ = e81352;
var statearr_81353_81427 = state_81334;
(statearr_81353_81427[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81428 = state_81334;
state_81334 = G__81428;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_81334){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_81334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_81354 = f__8505__auto__.call(null);
(statearr_81354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_81354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
};
var G__81416 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81429__i = 0, G__81429__a = new Array(arguments.length -  0);
while (G__81429__i < G__81429__a.length) {G__81429__a[G__81429__i] = arguments[G__81429__i + 0]; ++G__81429__i;}
  args = new cljs.core.IndexedSeq(G__81429__a,0);
} 
return G__81416__delegate.call(this,args);};
G__81416.cljs$lang$maxFixedArity = 0;
G__81416.cljs$lang$applyTo = (function (arglist__81430){
var args = cljs.core.seq(arglist__81430);
return G__81416__delegate(args);
});
G__81416.cljs$core$IFn$_invoke$arity$variadic = G__81416__delegate;
return G__81416;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__81431__delegate = function (args){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_81387){
var state_val_81388 = (state_81387[(1)]);
if((state_val_81388 === (7))){
var inst_81361 = (state_81387[(2)]);
var state_81387__$1 = state_81387;
var statearr_81389_81432 = state_81387__$1;
(statearr_81389_81432[(2)] = inst_81361);

(statearr_81389_81432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (1))){
var inst_81355 = args;
var state_81387__$1 = (function (){var statearr_81390 = state_81387;
(statearr_81390[(7)] = inst_81355);

return statearr_81390;
})();
var statearr_81391_81433 = state_81387__$1;
(statearr_81391_81433[(2)] = null);

(statearr_81391_81433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (4))){
var state_81387__$1 = state_81387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81387__$1,(7),c,E_msg);
} else {
if((state_val_81388 === (15))){
var inst_81374 = (state_81387[(2)]);
var state_81387__$1 = state_81387;
var statearr_81392_81434 = state_81387__$1;
(statearr_81392_81434[(2)] = inst_81374);

(statearr_81392_81434[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (13))){
var inst_81376 = (state_81387[(2)]);
var state_81387__$1 = state_81387;
var statearr_81393_81435 = state_81387__$1;
(statearr_81393_81435[(2)] = inst_81376);

(statearr_81393_81435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (6))){
var inst_81383 = (state_81387[(2)]);
var state_81387__$1 = state_81387;
var statearr_81394_81436 = state_81387__$1;
(statearr_81394_81436[(2)] = inst_81383);

(statearr_81394_81436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (3))){
var inst_81385 = (state_81387[(2)]);
var state_81387__$1 = state_81387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_81387__$1,inst_81385);
} else {
if((state_val_81388 === (12))){
var inst_81355 = (state_81387[(7)]);
var inst_81371 = cljs_async_patterns.core.chan_sanitized.call(null,inst_81355);
var inst_81372 = cljs.core.first.call(null,inst_81371);
var state_81387__$1 = state_81387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81387__$1,(15),c,inst_81372);
} else {
if((state_val_81388 === (2))){
var inst_81355 = (state_81387[(7)]);
var inst_81357 = cljs.core.count.call(null,inst_81355);
var inst_81358 = cljs.core._EQ_.call(null,(0),inst_81357);
var state_81387__$1 = state_81387;
if(inst_81358){
var statearr_81395_81437 = state_81387__$1;
(statearr_81395_81437[(1)] = (4));

} else {
var statearr_81396_81438 = state_81387__$1;
(statearr_81396_81438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (11))){
var state_81387__$1 = state_81387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_81387__$1,(14),c,E_msg);
} else {
if((state_val_81388 === (9))){
var inst_81355 = (state_81387[(7)]);
var inst_81378 = cljs.core.rest.call(null,inst_81355);
var inst_81355__$1 = inst_81378;
var state_81387__$1 = (function (){var statearr_81397 = state_81387;
(statearr_81397[(7)] = inst_81355__$1);

return statearr_81397;
})();
var statearr_81398_81439 = state_81387__$1;
(statearr_81398_81439[(2)] = null);

(statearr_81398_81439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (5))){
var inst_81355 = (state_81387[(7)]);
var inst_81363 = cljs.core.first.call(null,inst_81355);
var state_81387__$1 = state_81387;
if(cljs.core.truth_(inst_81363)){
var statearr_81399_81440 = state_81387__$1;
(statearr_81399_81440[(1)] = (8));

} else {
var statearr_81400_81441 = state_81387__$1;
(statearr_81400_81441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (14))){
var inst_81369 = (state_81387[(2)]);
var state_81387__$1 = state_81387;
var statearr_81401_81442 = state_81387__$1;
(statearr_81401_81442[(2)] = inst_81369);

(statearr_81401_81442[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (10))){
var inst_81381 = (state_81387[(2)]);
var state_81387__$1 = state_81387;
var statearr_81402_81443 = state_81387__$1;
(statearr_81402_81443[(2)] = inst_81381);

(statearr_81402_81443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_81388 === (8))){
var inst_81355 = (state_81387[(7)]);
var inst_81365 = cljs.core.count.call(null,inst_81355);
var inst_81366 = (inst_81365 > (1));
var state_81387__$1 = state_81387;
if(cljs.core.truth_(inst_81366)){
var statearr_81403_81444 = state_81387__$1;
(statearr_81403_81444[(1)] = (11));

} else {
var statearr_81404_81445 = state_81387__$1;
(statearr_81404_81445[(1)] = (12));

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
});})(c__8504__auto__))
;
return ((function (switch__8483__auto__,c__8504__auto__){
return (function() {
var cljs_async_patterns$core$state_machine__8484__auto__ = null;
var cljs_async_patterns$core$state_machine__8484__auto____0 = (function (){
var statearr_81408 = [null,null,null,null,null,null,null,null];
(statearr_81408[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_81408[(1)] = (1));

return statearr_81408;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_81387){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_81387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e81409){if((e81409 instanceof Object)){
var ex__8487__auto__ = e81409;
var statearr_81410_81446 = state_81387;
(statearr_81410_81446[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_81387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81447 = state_81387;
state_81387 = G__81447;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_81387){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_81387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_81411 = f__8505__auto__.call(null);
(statearr_81411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_81411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
};
var G__81431 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__81448__i = 0, G__81448__a = new Array(arguments.length -  0);
while (G__81448__i < G__81448__a.length) {G__81448__a[G__81448__i] = arguments[G__81448__i + 0]; ++G__81448__i;}
  args = new cljs.core.IndexedSeq(G__81448__a,0);
} 
return G__81431__delegate.call(this,args);};
G__81431.cljs$lang$maxFixedArity = 0;
G__81431.cljs$lang$applyTo = (function (arglist__81449){
var args = cljs.core.seq(arglist__81449);
return G__81431__delegate(args);
});
G__81431.cljs$core$IFn$_invoke$arity$variadic = G__81431__delegate;
return G__81431;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___81451 = arguments.length;
var i__7215__auto___81452 = (0);
while(true){
if((i__7215__auto___81452 < len__7214__auto___81451)){
args__7221__auto__.push((arguments[i__7215__auto___81452]));

var G__81453 = (i__7215__auto___81452 + (1));
i__7215__auto___81452 = G__81453;
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

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq81450){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq81450));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map