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
return (function (state_26943){
var state_val_26944 = (state_26943[(1)]);
if((state_val_26944 === (1))){
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26943__$1,(2),c);
} else {
if((state_val_26944 === (2))){
var inst_26940 = (state_26943[(2)]);
var inst_26941 = cljs.core.println.call(null,inst_26940);
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26943__$1,inst_26941);
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
var statearr_26948 = [null,null,null,null,null,null,null];
(statearr_26948[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__);

(statearr_26948[(1)] = (1));

return statearr_26948;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____1 = (function (state_26943){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_26943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e26949){if((e26949 instanceof Object)){
var ex__8291__auto__ = e26949;
var statearr_26950_26952 = state_26943;
(statearr_26950_26952[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26953 = state_26943;
state_26943 = G__26953;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__ = function(state_26943){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____1.call(this,state_26943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_26951 = f__8309__auto__.call(null);
(statearr_26951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_26951;
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
var args26954 = [];
var len__7018__auto___26993 = arguments.length;
var i__7019__auto___26994 = (0);
while(true){
if((i__7019__auto___26994 < len__7018__auto___26993)){
args26954.push((arguments[i__7019__auto___26994]));

var G__26995 = (i__7019__auto___26994 + (1));
i__7019__auto___26994 = G__26995;
continue;
} else {
}
break;
}

var G__26956 = args26954.length;
switch (G__26956) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26954.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_26961){
var state_val_26962 = (state_26961[(1)]);
if((state_val_26962 === (1))){
var inst_26957 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26961__$1,(2),c,inst_26957);
} else {
if((state_val_26962 === (2))){
var inst_26959 = (state_26961[(2)]);
var state_26961__$1 = state_26961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26961__$1,inst_26959);
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
var statearr_26966 = [null,null,null,null,null,null,null];
(statearr_26966[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_26966[(1)] = (1));

return statearr_26966;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_26961){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_26961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e26967){if((e26967 instanceof Object)){
var ex__8291__auto__ = e26967;
var statearr_26968_26997 = state_26961;
(statearr_26968_26997[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26998 = state_26961;
state_26961 = G__26998;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_26961){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_26961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_26969 = f__8309__auto__.call(null);
(statearr_26969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_26969;
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
return (function (state_26980){
var state_val_26981 = (state_26980[(1)]);
if((state_val_26981 === (1))){
var state_26980__$1 = state_26980;
if(cljs.core.truth_(arg1)){
var statearr_26982_26999 = state_26980__$1;
(statearr_26982_26999[(1)] = (2));

} else {
var statearr_26983_27000 = state_26980__$1;
(statearr_26983_27000[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (2))){
var inst_26971 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26980__$1,(5),c,inst_26971);
} else {
if((state_val_26981 === (3))){
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26980__$1,(6),c,E_msg);
} else {
if((state_val_26981 === (4))){
var inst_26978 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26980__$1,inst_26978);
} else {
if((state_val_26981 === (5))){
var inst_26973 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26984_27001 = state_26980__$1;
(statearr_26984_27001[(2)] = inst_26973);

(statearr_26984_27001[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26981 === (6))){
var inst_26976 = (state_26980[(2)]);
var state_26980__$1 = state_26980;
var statearr_26985_27002 = state_26980__$1;
(statearr_26985_27002[(2)] = inst_26976);

(statearr_26985_27002[(1)] = (4));


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
var statearr_26989 = [null,null,null,null,null,null,null];
(statearr_26989[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_26989[(1)] = (1));

return statearr_26989;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_26980){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_26980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e26990){if((e26990 instanceof Object)){
var ex__8291__auto__ = e26990;
var statearr_26991_27003 = state_26980;
(statearr_26991_27003[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27004 = state_26980;
state_26980 = G__27004;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_26980){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_26980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_26992 = f__8309__auto__.call(null);
(statearr_26992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_26992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args27005 = [];
var len__7018__auto___27072 = arguments.length;
var i__7019__auto___27073 = (0);
while(true){
if((i__7019__auto___27073 < len__7018__auto___27072)){
args27005.push((arguments[i__7019__auto___27073]));

var G__27074 = (i__7019__auto___27073 + (1));
i__7019__auto___27073 = G__27074;
continue;
} else {
}
break;
}

var G__27007 = args27005.length;
switch (G__27007) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27005.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_27023){
var state_val_27024 = (state_27023[(1)]);
if((state_val_27024 === (1))){
var state_27023__$1 = state_27023;
if(cljs.core.truth_(err)){
var statearr_27025_27076 = state_27023__$1;
(statearr_27025_27076[(1)] = (2));

} else {
var statearr_27026_27077 = state_27023__$1;
(statearr_27026_27077[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (2))){
var inst_27009 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(5),c,inst_27009);
} else {
if((state_val_27024 === (3))){
var state_27023__$1 = state_27023;
var statearr_27027_27078 = state_27023__$1;
(statearr_27027_27078[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (4))){
var inst_27021 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27023__$1,inst_27021);
} else {
if((state_val_27024 === (5))){
var inst_27011 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27029_27079 = state_27023__$1;
(statearr_27029_27079[(2)] = inst_27011);

(statearr_27029_27079[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (6))){
var inst_27014 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_27023__$1 = state_27023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27023__$1,(9),c,inst_27014);
} else {
if((state_val_27024 === (7))){
var state_27023__$1 = state_27023;
var statearr_27030_27080 = state_27023__$1;
(statearr_27030_27080[(2)] = null);

(statearr_27030_27080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (8))){
var inst_27019 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27031_27081 = state_27023__$1;
(statearr_27031_27081[(2)] = inst_27019);

(statearr_27031_27081[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27024 === (9))){
var inst_27016 = (state_27023[(2)]);
var state_27023__$1 = state_27023;
var statearr_27032_27082 = state_27023__$1;
(statearr_27032_27082[(2)] = inst_27016);

(statearr_27032_27082[(1)] = (8));


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
var statearr_27036 = [null,null,null,null,null,null,null];
(statearr_27036[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_27036[(1)] = (1));

return statearr_27036;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_27023){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_27023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e27037){if((e27037 instanceof Object)){
var ex__8291__auto__ = e27037;
var statearr_27038_27083 = state_27023;
(statearr_27038_27083[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27084 = state_27023;
state_27023 = G__27084;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_27023){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_27023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_27039 = f__8309__auto__.call(null);
(statearr_27039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_27039;
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
return (function (state_27055){
var state_val_27056 = (state_27055[(1)]);
if((state_val_27056 === (1))){
var state_27055__$1 = state_27055;
if(cljs.core.truth_(err)){
var statearr_27057_27085 = state_27055__$1;
(statearr_27057_27085[(1)] = (2));

} else {
var statearr_27058_27086 = state_27055__$1;
(statearr_27058_27086[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (2))){
var inst_27041 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27055__$1,(5),c,inst_27041);
} else {
if((state_val_27056 === (3))){
var state_27055__$1 = state_27055;
var statearr_27059_27087 = state_27055__$1;
(statearr_27059_27087[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (4))){
var inst_27053 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27055__$1,inst_27053);
} else {
if((state_val_27056 === (5))){
var inst_27043 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
var statearr_27061_27088 = state_27055__$1;
(statearr_27061_27088[(2)] = inst_27043);

(statearr_27061_27088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (6))){
var inst_27046 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_27055__$1 = state_27055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27055__$1,(9),c,inst_27046);
} else {
if((state_val_27056 === (7))){
var state_27055__$1 = state_27055;
var statearr_27062_27089 = state_27055__$1;
(statearr_27062_27089[(2)] = null);

(statearr_27062_27089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (8))){
var inst_27051 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
var statearr_27063_27090 = state_27055__$1;
(statearr_27063_27090[(2)] = inst_27051);

(statearr_27063_27090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27056 === (9))){
var inst_27048 = (state_27055[(2)]);
var state_27055__$1 = state_27055;
var statearr_27064_27091 = state_27055__$1;
(statearr_27064_27091[(2)] = inst_27048);

(statearr_27064_27091[(1)] = (8));


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
var statearr_27068 = [null,null,null,null,null,null,null];
(statearr_27068[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_27068[(1)] = (1));

return statearr_27068;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_27055){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_27055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e27069){if((e27069 instanceof Object)){
var ex__8291__auto__ = e27069;
var statearr_27070_27092 = state_27055;
(statearr_27070_27092[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27093 = state_27055;
state_27055 = G__27093;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_27055){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_27055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_27071 = f__8309__auto__.call(null);
(statearr_27071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_27071;
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
return (function (state_27245){
var state_val_27246 = (state_27245[(1)]);
if((state_val_27246 === (7))){
var state_27245__$1 = state_27245;
var statearr_27247_27266 = state_27245__$1;
(statearr_27247_27266[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (1))){
var state_27245__$1 = state_27245;
if(cljs.core.truth_(err1)){
var statearr_27249_27267 = state_27245__$1;
(statearr_27249_27267[(1)] = (2));

} else {
var statearr_27250_27268 = state_27245__$1;
(statearr_27250_27268[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (4))){
var inst_27243 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27245__$1,inst_27243);
} else {
if((state_val_27246 === (13))){
var inst_27236 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27251_27269 = state_27245__$1;
(statearr_27251_27269[(2)] = inst_27236);

(statearr_27251_27269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (6))){
var inst_27229 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27245__$1,(9),c,inst_27229);
} else {
if((state_val_27246 === (3))){
var state_27245__$1 = state_27245;
if(cljs.core.truth_(err2)){
var statearr_27252_27270 = state_27245__$1;
(statearr_27252_27270[(1)] = (6));

} else {
var statearr_27253_27271 = state_27245__$1;
(statearr_27253_27271[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (12))){
var inst_27239 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27254_27272 = state_27245__$1;
(statearr_27254_27272[(2)] = inst_27239);

(statearr_27254_27272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (2))){
var inst_27224 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27245__$1,(5),c,inst_27224);
} else {
if((state_val_27246 === (11))){
var state_27245__$1 = state_27245;
var statearr_27255_27273 = state_27245__$1;
(statearr_27255_27273[(2)] = null);

(statearr_27255_27273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (9))){
var inst_27231 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27256_27274 = state_27245__$1;
(statearr_27256_27274[(2)] = inst_27231);

(statearr_27256_27274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (5))){
var inst_27226 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27257_27275 = state_27245__$1;
(statearr_27257_27275[(2)] = inst_27226);

(statearr_27257_27275[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27246 === (10))){
var inst_27234 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_27245__$1 = state_27245;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27245__$1,(13),c,inst_27234);
} else {
if((state_val_27246 === (8))){
var inst_27241 = (state_27245[(2)]);
var state_27245__$1 = state_27245;
var statearr_27258_27276 = state_27245__$1;
(statearr_27258_27276[(2)] = inst_27241);

(statearr_27258_27276[(1)] = (4));


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
var statearr_27262 = [null,null,null,null,null,null,null];
(statearr_27262[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__);

(statearr_27262[(1)] = (1));

return statearr_27262;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____1 = (function (state_27245){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_27245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e27263){if((e27263 instanceof Object)){
var ex__8291__auto__ = e27263;
var statearr_27264_27277 = state_27245;
(statearr_27264_27277[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27278 = state_27245;
state_27245 = G__27278;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__ = function(state_27245){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____1.call(this,state_27245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_27265 = f__8309__auto__.call(null);
(statearr_27265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_27265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
}));
});
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args27279 = [];
var len__7018__auto___27384 = arguments.length;
var i__7019__auto___27385 = (0);
while(true){
if((i__7019__auto___27385 < len__7018__auto___27384)){
args27279.push((arguments[i__7019__auto___27385]));

var G__27386 = (i__7019__auto___27385 + (1));
i__7019__auto___27385 = G__27386;
continue;
} else {
}
break;
}

var G__27281 = args27279.length;
switch (G__27281) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27279.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__27388__delegate = function (args){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_27306){
var state_val_27307 = (state_27306[(1)]);
if((state_val_27307 === (7))){
var inst_27288 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27308_27389 = state_27306__$1;
(statearr_27308_27389[(2)] = inst_27288);

(statearr_27308_27389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (1))){
var inst_27282 = args;
var state_27306__$1 = (function (){var statearr_27309 = state_27306;
(statearr_27309[(7)] = inst_27282);

return statearr_27309;
})();
var statearr_27310_27390 = state_27306__$1;
(statearr_27310_27390[(2)] = null);

(statearr_27310_27390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (4))){
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27306__$1,(7),c,false);
} else {
if((state_val_27307 === (6))){
var inst_27302 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27311_27391 = state_27306__$1;
(statearr_27311_27391[(2)] = inst_27302);

(statearr_27311_27391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (3))){
var inst_27304 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27306__$1,inst_27304);
} else {
if((state_val_27307 === (2))){
var inst_27282 = (state_27306[(7)]);
var inst_27284 = cljs.core.count.call(null,inst_27282);
var inst_27285 = cljs.core._EQ_.call(null,(0),inst_27284);
var state_27306__$1 = state_27306;
if(inst_27285){
var statearr_27312_27392 = state_27306__$1;
(statearr_27312_27392[(1)] = (4));

} else {
var statearr_27313_27393 = state_27306__$1;
(statearr_27313_27393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (11))){
var inst_27295 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27314_27394 = state_27306__$1;
(statearr_27314_27394[(2)] = inst_27295);

(statearr_27314_27394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (9))){
var inst_27282 = (state_27306[(7)]);
var inst_27297 = cljs.core.rest.call(null,inst_27282);
var inst_27282__$1 = inst_27297;
var state_27306__$1 = (function (){var statearr_27315 = state_27306;
(statearr_27315[(7)] = inst_27282__$1);

return statearr_27315;
})();
var statearr_27316_27395 = state_27306__$1;
(statearr_27316_27395[(2)] = null);

(statearr_27316_27395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (5))){
var inst_27282 = (state_27306[(7)]);
var inst_27290 = cljs.core.first.call(null,inst_27282);
var state_27306__$1 = state_27306;
if(cljs.core.truth_(inst_27290)){
var statearr_27317_27396 = state_27306__$1;
(statearr_27317_27396[(1)] = (8));

} else {
var statearr_27318_27397 = state_27306__$1;
(statearr_27318_27397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (10))){
var inst_27300 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27319_27398 = state_27306__$1;
(statearr_27319_27398[(2)] = inst_27300);

(statearr_27319_27398[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (8))){
var inst_27282 = (state_27306[(7)]);
var inst_27292 = cljs_async_patterns.core.chan_sanitized.call(null,inst_27282);
var inst_27293 = cljs.core.first.call(null,inst_27292);
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27306__$1,(11),c,inst_27293);
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
var statearr_27323 = [null,null,null,null,null,null,null,null];
(statearr_27323[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_27323[(1)] = (1));

return statearr_27323;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_27306){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_27306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e27324){if((e27324 instanceof Object)){
var ex__8291__auto__ = e27324;
var statearr_27325_27399 = state_27306;
(statearr_27325_27399[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27400 = state_27306;
state_27306 = G__27400;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_27306){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_27306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_27326 = f__8309__auto__.call(null);
(statearr_27326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_27326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
};
var G__27388 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27401__i = 0, G__27401__a = new Array(arguments.length -  0);
while (G__27401__i < G__27401__a.length) {G__27401__a[G__27401__i] = arguments[G__27401__i + 0]; ++G__27401__i;}
  args = new cljs.core.IndexedSeq(G__27401__a,0);
} 
return G__27388__delegate.call(this,args);};
G__27388.cljs$lang$maxFixedArity = 0;
G__27388.cljs$lang$applyTo = (function (arglist__27402){
var args = cljs.core.seq(arglist__27402);
return G__27388__delegate(args);
});
G__27388.cljs$core$IFn$_invoke$arity$variadic = G__27388__delegate;
return G__27388;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__27403__delegate = function (args){
var c__8308__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8308__auto__){
return (function (){
var f__8309__auto__ = (function (){var switch__8287__auto__ = ((function (c__8308__auto__){
return (function (state_27359){
var state_val_27360 = (state_27359[(1)]);
if((state_val_27360 === (7))){
var inst_27333 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27361_27404 = state_27359__$1;
(statearr_27361_27404[(2)] = inst_27333);

(statearr_27361_27404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (1))){
var inst_27327 = args;
var state_27359__$1 = (function (){var statearr_27362 = state_27359;
(statearr_27362[(7)] = inst_27327);

return statearr_27362;
})();
var statearr_27363_27405 = state_27359__$1;
(statearr_27363_27405[(2)] = null);

(statearr_27363_27405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (4))){
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27359__$1,(7),c,E_msg);
} else {
if((state_val_27360 === (15))){
var inst_27346 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27364_27406 = state_27359__$1;
(statearr_27364_27406[(2)] = inst_27346);

(statearr_27364_27406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (13))){
var inst_27348 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27365_27407 = state_27359__$1;
(statearr_27365_27407[(2)] = inst_27348);

(statearr_27365_27407[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (6))){
var inst_27355 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27366_27408 = state_27359__$1;
(statearr_27366_27408[(2)] = inst_27355);

(statearr_27366_27408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (3))){
var inst_27357 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27359__$1,inst_27357);
} else {
if((state_val_27360 === (12))){
var inst_27327 = (state_27359[(7)]);
var inst_27343 = cljs_async_patterns.core.chan_sanitized.call(null,inst_27327);
var inst_27344 = cljs.core.first.call(null,inst_27343);
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27359__$1,(15),c,inst_27344);
} else {
if((state_val_27360 === (2))){
var inst_27327 = (state_27359[(7)]);
var inst_27329 = cljs.core.count.call(null,inst_27327);
var inst_27330 = cljs.core._EQ_.call(null,(0),inst_27329);
var state_27359__$1 = state_27359;
if(inst_27330){
var statearr_27367_27409 = state_27359__$1;
(statearr_27367_27409[(1)] = (4));

} else {
var statearr_27368_27410 = state_27359__$1;
(statearr_27368_27410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (11))){
var state_27359__$1 = state_27359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27359__$1,(14),c,E_msg);
} else {
if((state_val_27360 === (9))){
var inst_27327 = (state_27359[(7)]);
var inst_27350 = cljs.core.rest.call(null,inst_27327);
var inst_27327__$1 = inst_27350;
var state_27359__$1 = (function (){var statearr_27369 = state_27359;
(statearr_27369[(7)] = inst_27327__$1);

return statearr_27369;
})();
var statearr_27370_27411 = state_27359__$1;
(statearr_27370_27411[(2)] = null);

(statearr_27370_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (5))){
var inst_27327 = (state_27359[(7)]);
var inst_27335 = cljs.core.first.call(null,inst_27327);
var state_27359__$1 = state_27359;
if(cljs.core.truth_(inst_27335)){
var statearr_27371_27412 = state_27359__$1;
(statearr_27371_27412[(1)] = (8));

} else {
var statearr_27372_27413 = state_27359__$1;
(statearr_27372_27413[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (14))){
var inst_27341 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27373_27414 = state_27359__$1;
(statearr_27373_27414[(2)] = inst_27341);

(statearr_27373_27414[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (10))){
var inst_27353 = (state_27359[(2)]);
var state_27359__$1 = state_27359;
var statearr_27374_27415 = state_27359__$1;
(statearr_27374_27415[(2)] = inst_27353);

(statearr_27374_27415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27360 === (8))){
var inst_27327 = (state_27359[(7)]);
var inst_27337 = cljs.core.count.call(null,inst_27327);
var inst_27338 = (inst_27337 > (1));
var state_27359__$1 = state_27359;
if(cljs.core.truth_(inst_27338)){
var statearr_27375_27416 = state_27359__$1;
(statearr_27375_27416[(1)] = (11));

} else {
var statearr_27376_27417 = state_27359__$1;
(statearr_27376_27417[(1)] = (12));

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
var statearr_27380 = [null,null,null,null,null,null,null,null];
(statearr_27380[(0)] = cljs_async_patterns$core$state_machine__8288__auto__);

(statearr_27380[(1)] = (1));

return statearr_27380;
});
var cljs_async_patterns$core$state_machine__8288__auto____1 = (function (state_27359){
while(true){
var ret_value__8289__auto__ = (function (){try{while(true){
var result__8290__auto__ = switch__8287__auto__.call(null,state_27359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8290__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8290__auto__;
}
break;
}
}catch (e27381){if((e27381 instanceof Object)){
var ex__8291__auto__ = e27381;
var statearr_27382_27418 = state_27359;
(statearr_27382_27418[(5)] = ex__8291__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8289__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27419 = state_27359;
state_27359 = G__27419;
continue;
} else {
return ret_value__8289__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8288__auto__ = function(state_27359){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8288__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8288__auto____1.call(this,state_27359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8288__auto____0;
cljs_async_patterns$core$state_machine__8288__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8288__auto____1;
return cljs_async_patterns$core$state_machine__8288__auto__;
})()
;})(switch__8287__auto__,c__8308__auto__))
})();
var state__8310__auto__ = (function (){var statearr_27383 = f__8309__auto__.call(null);
(statearr_27383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8308__auto__);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8310__auto__);
});})(c__8308__auto__))
);

return c__8308__auto__;
};
var G__27403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27420__i = 0, G__27420__a = new Array(arguments.length -  0);
while (G__27420__i < G__27420__a.length) {G__27420__a[G__27420__i] = arguments[G__27420__i + 0]; ++G__27420__i;}
  args = new cljs.core.IndexedSeq(G__27420__a,0);
} 
return G__27403__delegate.call(this,args);};
G__27403.cljs$lang$maxFixedArity = 0;
G__27403.cljs$lang$applyTo = (function (arglist__27421){
var args = cljs.core.seq(arglist__27421);
return G__27403__delegate(args);
});
G__27403.cljs$core$IFn$_invoke$arity$variadic = G__27403__delegate;
return G__27403;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._LT__QMARK_ = (function cljs_async_patterns$core$_LT__QMARK_(_AMPERSAND_form,_AMPERSAND_env,func,E_msg){
var c = cljs.core.async.chan.call(null,(1));
var cb = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs-async-patterns.core",">?","cljs-async-patterns.core/>?",-1829810227,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs-async-patterns.core","c","cljs-async-patterns.core/c",-1201987946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,E_msg))));
return null;
});

cljs_async_patterns.core._LT__QMARK_.cljs$lang$macro = true;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___27423 = arguments.length;
var i__7019__auto___27424 = (0);
while(true){
if((i__7019__auto___27424 < len__7018__auto___27423)){
args__7025__auto__.push((arguments[i__7019__auto___27424]));

var G__27425 = (i__7019__auto___27424 + (1));
i__7019__auto___27424 = G__27425;
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

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq27422){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27422));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map