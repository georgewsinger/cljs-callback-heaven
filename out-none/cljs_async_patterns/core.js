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
return (function (state_61084){
var state_val_61085 = (state_61084[(1)]);
if((state_val_61085 === (1))){
var state_61084__$1 = state_61084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61084__$1,(2),c);
} else {
if((state_val_61085 === (2))){
var inst_61081 = (state_61084[(2)]);
var inst_61082 = cljs.core.println.call(null,inst_61081);
var state_61084__$1 = state_61084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61084__$1,inst_61082);
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
var statearr_61089 = [null,null,null,null,null,null,null];
(statearr_61089[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__);

(statearr_61089[(1)] = (1));

return statearr_61089;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1 = (function (state_61084){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61090){if((e61090 instanceof Object)){
var ex__8535__auto__ = e61090;
var statearr_61091_61093 = state_61084;
(statearr_61091_61093[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61094 = state_61084;
state_61084 = G__61094;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__ = function(state_61084){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1.call(this,state_61084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61092 = f__8553__auto__.call(null);
(statearr_61092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61092;
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
var args61095 = [];
var len__7214__auto___61134 = arguments.length;
var i__7215__auto___61135 = (0);
while(true){
if((i__7215__auto___61135 < len__7214__auto___61134)){
args61095.push((arguments[i__7215__auto___61135]));

var G__61136 = (i__7215__auto___61135 + (1));
i__7215__auto___61135 = G__61136;
continue;
} else {
}
break;
}

var G__61097 = args61095.length;
switch (G__61097) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61095.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_61102){
var state_val_61103 = (state_61102[(1)]);
if((state_val_61103 === (1))){
var inst_61098 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_61102__$1 = state_61102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61102__$1,(2),c,inst_61098);
} else {
if((state_val_61103 === (2))){
var inst_61100 = (state_61102[(2)]);
var state_61102__$1 = state_61102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61102__$1,inst_61100);
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
var statearr_61107 = [null,null,null,null,null,null,null];
(statearr_61107[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61107[(1)] = (1));

return statearr_61107;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61102){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61108){if((e61108 instanceof Object)){
var ex__8535__auto__ = e61108;
var statearr_61109_61138 = state_61102;
(statearr_61109_61138[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61139 = state_61102;
state_61102 = G__61139;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61102){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61110 = f__8553__auto__.call(null);
(statearr_61110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61110;
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
return (function (state_61121){
var state_val_61122 = (state_61121[(1)]);
if((state_val_61122 === (1))){
var state_61121__$1 = state_61121;
if(cljs.core.truth_(arg1)){
var statearr_61123_61140 = state_61121__$1;
(statearr_61123_61140[(1)] = (2));

} else {
var statearr_61124_61141 = state_61121__$1;
(statearr_61124_61141[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (2))){
var inst_61112 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_61121__$1 = state_61121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61121__$1,(5),c,inst_61112);
} else {
if((state_val_61122 === (3))){
var state_61121__$1 = state_61121;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61121__$1,(6),c,E_msg);
} else {
if((state_val_61122 === (4))){
var inst_61119 = (state_61121[(2)]);
var state_61121__$1 = state_61121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61121__$1,inst_61119);
} else {
if((state_val_61122 === (5))){
var inst_61114 = (state_61121[(2)]);
var state_61121__$1 = state_61121;
var statearr_61125_61142 = state_61121__$1;
(statearr_61125_61142[(2)] = inst_61114);

(statearr_61125_61142[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61122 === (6))){
var inst_61117 = (state_61121[(2)]);
var state_61121__$1 = state_61121;
var statearr_61126_61143 = state_61121__$1;
(statearr_61126_61143[(2)] = inst_61117);

(statearr_61126_61143[(1)] = (4));


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
var statearr_61130 = [null,null,null,null,null,null,null];
(statearr_61130[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61130[(1)] = (1));

return statearr_61130;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61121){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61131){if((e61131 instanceof Object)){
var ex__8535__auto__ = e61131;
var statearr_61132_61144 = state_61121;
(statearr_61132_61144[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61145 = state_61121;
state_61121 = G__61145;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61121){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61133 = f__8553__auto__.call(null);
(statearr_61133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61133;
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
var args61146 = [];
var len__7214__auto___61213 = arguments.length;
var i__7215__auto___61214 = (0);
while(true){
if((i__7215__auto___61214 < len__7214__auto___61213)){
args61146.push((arguments[i__7215__auto___61214]));

var G__61215 = (i__7215__auto___61214 + (1));
i__7215__auto___61214 = G__61215;
continue;
} else {
}
break;
}

var G__61148 = args61146.length;
switch (G__61148) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61146.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_61164){
var state_val_61165 = (state_61164[(1)]);
if((state_val_61165 === (1))){
var state_61164__$1 = state_61164;
if(cljs.core.truth_(res)){
var statearr_61166_61217 = state_61164__$1;
(statearr_61166_61217[(1)] = (2));

} else {
var statearr_61167_61218 = state_61164__$1;
(statearr_61167_61218[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61165 === (2))){
var inst_61150 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_61164__$1 = state_61164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61164__$1,(5),c,inst_61150);
} else {
if((state_val_61165 === (3))){
var state_61164__$1 = state_61164;
var statearr_61168_61219 = state_61164__$1;
(statearr_61168_61219[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61165 === (4))){
var inst_61162 = (state_61164[(2)]);
var state_61164__$1 = state_61164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61164__$1,inst_61162);
} else {
if((state_val_61165 === (5))){
var inst_61152 = (state_61164[(2)]);
var state_61164__$1 = state_61164;
var statearr_61170_61220 = state_61164__$1;
(statearr_61170_61220[(2)] = inst_61152);

(statearr_61170_61220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61165 === (6))){
var inst_61155 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_61164__$1 = state_61164;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61164__$1,(9),c,inst_61155);
} else {
if((state_val_61165 === (7))){
var state_61164__$1 = state_61164;
var statearr_61171_61221 = state_61164__$1;
(statearr_61171_61221[(2)] = null);

(statearr_61171_61221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61165 === (8))){
var inst_61160 = (state_61164[(2)]);
var state_61164__$1 = state_61164;
var statearr_61172_61222 = state_61164__$1;
(statearr_61172_61222[(2)] = inst_61160);

(statearr_61172_61222[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61165 === (9))){
var inst_61157 = (state_61164[(2)]);
var state_61164__$1 = state_61164;
var statearr_61173_61223 = state_61164__$1;
(statearr_61173_61223[(2)] = inst_61157);

(statearr_61173_61223[(1)] = (8));


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
var statearr_61177 = [null,null,null,null,null,null,null];
(statearr_61177[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61177[(1)] = (1));

return statearr_61177;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61164){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61178){if((e61178 instanceof Object)){
var ex__8535__auto__ = e61178;
var statearr_61179_61224 = state_61164;
(statearr_61179_61224[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61225 = state_61164;
state_61164 = G__61225;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61164){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61180 = f__8553__auto__.call(null);
(statearr_61180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61180;
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
return (function (state_61196){
var state_val_61197 = (state_61196[(1)]);
if((state_val_61197 === (1))){
var state_61196__$1 = state_61196;
if(cljs.core.truth_(res)){
var statearr_61198_61226 = state_61196__$1;
(statearr_61198_61226[(1)] = (2));

} else {
var statearr_61199_61227 = state_61196__$1;
(statearr_61199_61227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61197 === (2))){
var inst_61182 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_61196__$1 = state_61196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61196__$1,(5),c,inst_61182);
} else {
if((state_val_61197 === (3))){
var state_61196__$1 = state_61196;
var statearr_61200_61228 = state_61196__$1;
(statearr_61200_61228[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61197 === (4))){
var inst_61194 = (state_61196[(2)]);
var state_61196__$1 = state_61196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61196__$1,inst_61194);
} else {
if((state_val_61197 === (5))){
var inst_61184 = (state_61196[(2)]);
var state_61196__$1 = state_61196;
var statearr_61202_61229 = state_61196__$1;
(statearr_61202_61229[(2)] = inst_61184);

(statearr_61202_61229[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61197 === (6))){
var inst_61187 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_61196__$1 = state_61196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61196__$1,(9),c,inst_61187);
} else {
if((state_val_61197 === (7))){
var state_61196__$1 = state_61196;
var statearr_61203_61230 = state_61196__$1;
(statearr_61203_61230[(2)] = null);

(statearr_61203_61230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61197 === (8))){
var inst_61192 = (state_61196[(2)]);
var state_61196__$1 = state_61196;
var statearr_61204_61231 = state_61196__$1;
(statearr_61204_61231[(2)] = inst_61192);

(statearr_61204_61231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61197 === (9))){
var inst_61189 = (state_61196[(2)]);
var state_61196__$1 = state_61196;
var statearr_61205_61232 = state_61196__$1;
(statearr_61205_61232[(2)] = inst_61189);

(statearr_61205_61232[(1)] = (8));


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
var statearr_61209 = [null,null,null,null,null,null,null];
(statearr_61209[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61209[(1)] = (1));

return statearr_61209;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61196){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61210){if((e61210 instanceof Object)){
var ex__8535__auto__ = e61210;
var statearr_61211_61233 = state_61196;
(statearr_61211_61233[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61234 = state_61196;
state_61196 = G__61234;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61196){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61212 = f__8553__auto__.call(null);
(statearr_61212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61212;
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
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(var_args){
var args61235 = [];
var len__7214__auto___61324 = arguments.length;
var i__7215__auto___61325 = (0);
while(true){
if((i__7215__auto___61325 < len__7214__auto___61324)){
args61235.push((arguments[i__7215__auto___61325]));

var G__61326 = (i__7215__auto___61325 + (1));
i__7215__auto___61325 = G__61326;
continue;
} else {
}
break;
}

var G__61237 = args61235.length;
switch (G__61237) {
case 1:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61235.length)].join('')));

}
});

cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err1,err2,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_61260){
var state_val_61261 = (state_61260[(1)]);
if((state_val_61261 === (7))){
var state_61260__$1 = state_61260;
var statearr_61262_61328 = state_61260__$1;
(statearr_61262_61328[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (1))){
var state_61260__$1 = state_61260;
if(cljs.core.truth_(res)){
var statearr_61264_61329 = state_61260__$1;
(statearr_61264_61329[(1)] = (2));

} else {
var statearr_61265_61330 = state_61260__$1;
(statearr_61265_61330[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (4))){
var inst_61258 = (state_61260[(2)]);
var state_61260__$1 = state_61260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61260__$1,inst_61258);
} else {
if((state_val_61261 === (13))){
var inst_61251 = (state_61260[(2)]);
var state_61260__$1 = state_61260;
var statearr_61266_61331 = state_61260__$1;
(statearr_61266_61331[(2)] = inst_61251);

(statearr_61266_61331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (6))){
var inst_61244 = cljs_async_patterns.core.chan_sanitized.call(null,err1);
var state_61260__$1 = state_61260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61260__$1,(9),c,inst_61244);
} else {
if((state_val_61261 === (3))){
var state_61260__$1 = state_61260;
if(cljs.core.truth_(err1)){
var statearr_61267_61332 = state_61260__$1;
(statearr_61267_61332[(1)] = (6));

} else {
var statearr_61268_61333 = state_61260__$1;
(statearr_61268_61333[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (12))){
var inst_61254 = (state_61260[(2)]);
var state_61260__$1 = state_61260;
var statearr_61269_61334 = state_61260__$1;
(statearr_61269_61334[(2)] = inst_61254);

(statearr_61269_61334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (2))){
var inst_61239 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_61260__$1 = state_61260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61260__$1,(5),c,inst_61239);
} else {
if((state_val_61261 === (11))){
var state_61260__$1 = state_61260;
var statearr_61270_61335 = state_61260__$1;
(statearr_61270_61335[(2)] = null);

(statearr_61270_61335[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (9))){
var inst_61246 = (state_61260[(2)]);
var state_61260__$1 = state_61260;
var statearr_61271_61336 = state_61260__$1;
(statearr_61271_61336[(2)] = inst_61246);

(statearr_61271_61336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (5))){
var inst_61241 = (state_61260[(2)]);
var state_61260__$1 = state_61260;
var statearr_61272_61337 = state_61260__$1;
(statearr_61272_61337[(2)] = inst_61241);

(statearr_61272_61337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61261 === (10))){
var inst_61249 = cljs_async_patterns.core.chan_sanitized.call(null,err2);
var state_61260__$1 = state_61260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61260__$1,(13),c,inst_61249);
} else {
if((state_val_61261 === (8))){
var inst_61256 = (state_61260[(2)]);
var state_61260__$1 = state_61260;
var statearr_61273_61338 = state_61260__$1;
(statearr_61273_61338[(2)] = inst_61256);

(statearr_61273_61338[(1)] = (4));


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
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_61277 = [null,null,null,null,null,null,null];
(statearr_61277[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61277[(1)] = (1));

return statearr_61277;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61260){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61278){if((e61278 instanceof Object)){
var ex__8535__auto__ = e61278;
var statearr_61279_61339 = state_61260;
(statearr_61279_61339[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61340 = state_61260;
state_61260 = G__61340;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61260){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61280 = f__8553__auto__.call(null);
(statearr_61280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err1,err2,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_61303){
var state_val_61304 = (state_61303[(1)]);
if((state_val_61304 === (7))){
var state_61303__$1 = state_61303;
var statearr_61305_61341 = state_61303__$1;
(statearr_61305_61341[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (1))){
var state_61303__$1 = state_61303;
if(cljs.core.truth_(res)){
var statearr_61307_61342 = state_61303__$1;
(statearr_61307_61342[(1)] = (2));

} else {
var statearr_61308_61343 = state_61303__$1;
(statearr_61308_61343[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (4))){
var inst_61301 = (state_61303[(2)]);
var state_61303__$1 = state_61303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61303__$1,inst_61301);
} else {
if((state_val_61304 === (13))){
var inst_61294 = (state_61303[(2)]);
var state_61303__$1 = state_61303;
var statearr_61309_61344 = state_61303__$1;
(statearr_61309_61344[(2)] = inst_61294);

(statearr_61309_61344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (6))){
var inst_61287 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_61303__$1 = state_61303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61303__$1,(9),c,inst_61287);
} else {
if((state_val_61304 === (3))){
var state_61303__$1 = state_61303;
if(cljs.core.truth_(err1)){
var statearr_61310_61345 = state_61303__$1;
(statearr_61310_61345[(1)] = (6));

} else {
var statearr_61311_61346 = state_61303__$1;
(statearr_61311_61346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (12))){
var inst_61297 = (state_61303[(2)]);
var state_61303__$1 = state_61303;
var statearr_61312_61347 = state_61303__$1;
(statearr_61312_61347[(2)] = inst_61297);

(statearr_61312_61347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (2))){
var inst_61282 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_61303__$1 = state_61303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61303__$1,(5),c,inst_61282);
} else {
if((state_val_61304 === (11))){
var state_61303__$1 = state_61303;
var statearr_61313_61348 = state_61303__$1;
(statearr_61313_61348[(2)] = null);

(statearr_61313_61348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (9))){
var inst_61289 = (state_61303[(2)]);
var state_61303__$1 = state_61303;
var statearr_61314_61349 = state_61303__$1;
(statearr_61314_61349[(2)] = inst_61289);

(statearr_61314_61349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (5))){
var inst_61284 = (state_61303[(2)]);
var state_61303__$1 = state_61303;
var statearr_61315_61350 = state_61303__$1;
(statearr_61315_61350[(2)] = inst_61284);

(statearr_61315_61350[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61304 === (10))){
var inst_61292 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_61303__$1 = state_61303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61303__$1,(13),c,inst_61292);
} else {
if((state_val_61304 === (8))){
var inst_61299 = (state_61303[(2)]);
var state_61303__$1 = state_61303;
var statearr_61316_61351 = state_61303__$1;
(statearr_61316_61351[(2)] = inst_61299);

(statearr_61316_61351[(1)] = (4));


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
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_61320 = [null,null,null,null,null,null,null];
(statearr_61320[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61320[(1)] = (1));

return statearr_61320;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61303){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61321){if((e61321 instanceof Object)){
var ex__8535__auto__ = e61321;
var statearr_61322_61352 = state_61303;
(statearr_61322_61352[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61353 = state_61303;
state_61303 = G__61353;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61303){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61323 = f__8553__auto__.call(null);
(statearr_61323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_3.cljs$lang$maxFixedArity = 2;
/**
 * Jams the first truthy argument of a callback function into a channel.
 */
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args61354 = [];
var len__7214__auto___61459 = arguments.length;
var i__7215__auto___61460 = (0);
while(true){
if((i__7215__auto___61460 < len__7214__auto___61459)){
args61354.push((arguments[i__7215__auto___61460]));

var G__61461 = (i__7215__auto___61460 + (1));
i__7215__auto___61460 = G__61461;
continue;
} else {
}
break;
}

var G__61356 = args61354.length;
switch (G__61356) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61354.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__61463__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_61381){
var state_val_61382 = (state_61381[(1)]);
if((state_val_61382 === (7))){
var inst_61363 = (state_61381[(2)]);
var state_61381__$1 = state_61381;
var statearr_61383_61464 = state_61381__$1;
(statearr_61383_61464[(2)] = inst_61363);

(statearr_61383_61464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (1))){
var inst_61357 = args;
var state_61381__$1 = (function (){var statearr_61384 = state_61381;
(statearr_61384[(7)] = inst_61357);

return statearr_61384;
})();
var statearr_61385_61465 = state_61381__$1;
(statearr_61385_61465[(2)] = null);

(statearr_61385_61465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (4))){
var state_61381__$1 = state_61381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61381__$1,(7),c,false);
} else {
if((state_val_61382 === (6))){
var inst_61377 = (state_61381[(2)]);
var state_61381__$1 = state_61381;
var statearr_61386_61466 = state_61381__$1;
(statearr_61386_61466[(2)] = inst_61377);

(statearr_61386_61466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (3))){
var inst_61379 = (state_61381[(2)]);
var state_61381__$1 = state_61381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61381__$1,inst_61379);
} else {
if((state_val_61382 === (2))){
var inst_61357 = (state_61381[(7)]);
var inst_61359 = cljs.core.count.call(null,inst_61357);
var inst_61360 = cljs.core._EQ_.call(null,(0),inst_61359);
var state_61381__$1 = state_61381;
if(inst_61360){
var statearr_61387_61467 = state_61381__$1;
(statearr_61387_61467[(1)] = (4));

} else {
var statearr_61388_61468 = state_61381__$1;
(statearr_61388_61468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (11))){
var inst_61370 = (state_61381[(2)]);
var state_61381__$1 = state_61381;
var statearr_61389_61469 = state_61381__$1;
(statearr_61389_61469[(2)] = inst_61370);

(statearr_61389_61469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (9))){
var inst_61357 = (state_61381[(7)]);
var inst_61372 = cljs.core.rest.call(null,inst_61357);
var inst_61357__$1 = inst_61372;
var state_61381__$1 = (function (){var statearr_61390 = state_61381;
(statearr_61390[(7)] = inst_61357__$1);

return statearr_61390;
})();
var statearr_61391_61470 = state_61381__$1;
(statearr_61391_61470[(2)] = null);

(statearr_61391_61470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (5))){
var inst_61357 = (state_61381[(7)]);
var inst_61365 = cljs.core.first.call(null,inst_61357);
var state_61381__$1 = state_61381;
if(cljs.core.truth_(inst_61365)){
var statearr_61392_61471 = state_61381__$1;
(statearr_61392_61471[(1)] = (8));

} else {
var statearr_61393_61472 = state_61381__$1;
(statearr_61393_61472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (10))){
var inst_61375 = (state_61381[(2)]);
var state_61381__$1 = state_61381;
var statearr_61394_61473 = state_61381__$1;
(statearr_61394_61473[(2)] = inst_61375);

(statearr_61394_61473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61382 === (8))){
var inst_61357 = (state_61381[(7)]);
var inst_61367 = cljs_async_patterns.core.chan_sanitized.call(null,inst_61357);
var inst_61368 = cljs.core.first.call(null,inst_61367);
var state_61381__$1 = state_61381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61381__$1,(11),c,inst_61368);
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
var statearr_61398 = [null,null,null,null,null,null,null,null];
(statearr_61398[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61398[(1)] = (1));

return statearr_61398;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61381){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61399){if((e61399 instanceof Object)){
var ex__8535__auto__ = e61399;
var statearr_61400_61474 = state_61381;
(statearr_61400_61474[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61475 = state_61381;
state_61381 = G__61475;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61381){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61401 = f__8553__auto__.call(null);
(statearr_61401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__61463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61476__i = 0, G__61476__a = new Array(arguments.length -  0);
while (G__61476__i < G__61476__a.length) {G__61476__a[G__61476__i] = arguments[G__61476__i + 0]; ++G__61476__i;}
  args = new cljs.core.IndexedSeq(G__61476__a,0);
} 
return G__61463__delegate.call(this,args);};
G__61463.cljs$lang$maxFixedArity = 0;
G__61463.cljs$lang$applyTo = (function (arglist__61477){
var args = cljs.core.seq(arglist__61477);
return G__61463__delegate(args);
});
G__61463.cljs$core$IFn$_invoke$arity$variadic = G__61463__delegate;
return G__61463;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__61478__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_61434){
var state_val_61435 = (state_61434[(1)]);
if((state_val_61435 === (7))){
var inst_61408 = (state_61434[(2)]);
var state_61434__$1 = state_61434;
var statearr_61436_61479 = state_61434__$1;
(statearr_61436_61479[(2)] = inst_61408);

(statearr_61436_61479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (1))){
var inst_61402 = args;
var state_61434__$1 = (function (){var statearr_61437 = state_61434;
(statearr_61437[(7)] = inst_61402);

return statearr_61437;
})();
var statearr_61438_61480 = state_61434__$1;
(statearr_61438_61480[(2)] = null);

(statearr_61438_61480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (4))){
var state_61434__$1 = state_61434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61434__$1,(7),c,E_msg);
} else {
if((state_val_61435 === (15))){
var inst_61421 = (state_61434[(2)]);
var state_61434__$1 = state_61434;
var statearr_61439_61481 = state_61434__$1;
(statearr_61439_61481[(2)] = inst_61421);

(statearr_61439_61481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (13))){
var inst_61423 = (state_61434[(2)]);
var state_61434__$1 = state_61434;
var statearr_61440_61482 = state_61434__$1;
(statearr_61440_61482[(2)] = inst_61423);

(statearr_61440_61482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (6))){
var inst_61430 = (state_61434[(2)]);
var state_61434__$1 = state_61434;
var statearr_61441_61483 = state_61434__$1;
(statearr_61441_61483[(2)] = inst_61430);

(statearr_61441_61483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (3))){
var inst_61432 = (state_61434[(2)]);
var state_61434__$1 = state_61434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61434__$1,inst_61432);
} else {
if((state_val_61435 === (12))){
var inst_61402 = (state_61434[(7)]);
var inst_61418 = cljs_async_patterns.core.chan_sanitized.call(null,inst_61402);
var inst_61419 = cljs.core.first.call(null,inst_61418);
var state_61434__$1 = state_61434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61434__$1,(15),c,inst_61419);
} else {
if((state_val_61435 === (2))){
var inst_61402 = (state_61434[(7)]);
var inst_61404 = cljs.core.count.call(null,inst_61402);
var inst_61405 = cljs.core._EQ_.call(null,(0),inst_61404);
var state_61434__$1 = state_61434;
if(inst_61405){
var statearr_61442_61484 = state_61434__$1;
(statearr_61442_61484[(1)] = (4));

} else {
var statearr_61443_61485 = state_61434__$1;
(statearr_61443_61485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (11))){
var state_61434__$1 = state_61434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61434__$1,(14),c,E_msg);
} else {
if((state_val_61435 === (9))){
var inst_61402 = (state_61434[(7)]);
var inst_61425 = cljs.core.rest.call(null,inst_61402);
var inst_61402__$1 = inst_61425;
var state_61434__$1 = (function (){var statearr_61444 = state_61434;
(statearr_61444[(7)] = inst_61402__$1);

return statearr_61444;
})();
var statearr_61445_61486 = state_61434__$1;
(statearr_61445_61486[(2)] = null);

(statearr_61445_61486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (5))){
var inst_61402 = (state_61434[(7)]);
var inst_61410 = cljs.core.first.call(null,inst_61402);
var state_61434__$1 = state_61434;
if(cljs.core.truth_(inst_61410)){
var statearr_61446_61487 = state_61434__$1;
(statearr_61446_61487[(1)] = (8));

} else {
var statearr_61447_61488 = state_61434__$1;
(statearr_61447_61488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (14))){
var inst_61416 = (state_61434[(2)]);
var state_61434__$1 = state_61434;
var statearr_61448_61489 = state_61434__$1;
(statearr_61448_61489[(2)] = inst_61416);

(statearr_61448_61489[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (10))){
var inst_61428 = (state_61434[(2)]);
var state_61434__$1 = state_61434;
var statearr_61449_61490 = state_61434__$1;
(statearr_61449_61490[(2)] = inst_61428);

(statearr_61449_61490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61435 === (8))){
var inst_61402 = (state_61434[(7)]);
var inst_61412 = cljs.core.count.call(null,inst_61402);
var inst_61413 = (inst_61412 > (1));
var state_61434__$1 = state_61434;
if(cljs.core.truth_(inst_61413)){
var statearr_61450_61491 = state_61434__$1;
(statearr_61450_61491[(1)] = (11));

} else {
var statearr_61451_61492 = state_61434__$1;
(statearr_61451_61492[(1)] = (12));

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
var statearr_61455 = [null,null,null,null,null,null,null,null];
(statearr_61455[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_61455[(1)] = (1));

return statearr_61455;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_61434){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_61434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e61456){if((e61456 instanceof Object)){
var ex__8535__auto__ = e61456;
var statearr_61457_61493 = state_61434;
(statearr_61457_61493[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61494 = state_61434;
state_61434 = G__61494;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_61434){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_61434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_61458 = f__8553__auto__.call(null);
(statearr_61458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_61458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__61478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61495__i = 0, G__61495__a = new Array(arguments.length -  0);
while (G__61495__i < G__61495__a.length) {G__61495__a[G__61495__i] = arguments[G__61495__i + 0]; ++G__61495__i;}
  args = new cljs.core.IndexedSeq(G__61495__a,0);
} 
return G__61478__delegate.call(this,args);};
G__61478.cljs$lang$maxFixedArity = 0;
G__61478.cljs$lang$applyTo = (function (arglist__61496){
var args = cljs.core.seq(arglist__61496);
return G__61478__delegate(args);
});
G__61478.cljs$core$IFn$_invoke$arity$variadic = G__61478__delegate;
return G__61478;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map