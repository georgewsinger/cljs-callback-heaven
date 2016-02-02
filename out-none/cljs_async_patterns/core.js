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
return (function (state_26808){
var state_val_26809 = (state_26808[(1)]);
if((state_val_26809 === (1))){
var state_26808__$1 = state_26808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26808__$1,(2),c);
} else {
if((state_val_26809 === (2))){
var inst_26805 = (state_26808[(2)]);
var inst_26806 = cljs.core.println.call(null,inst_26805);
var state_26808__$1 = state_26808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26808__$1,inst_26806);
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
var statearr_26813 = [null,null,null,null,null,null,null];
(statearr_26813[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__);

(statearr_26813[(1)] = (1));

return statearr_26813;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____1 = (function (state_26808){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_26808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e26814){if((e26814 instanceof Object)){
var ex__8487__auto__ = e26814;
var statearr_26815_26817 = state_26808;
(statearr_26815_26817[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26818 = state_26808;
state_26808 = G__26818;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__ = function(state_26808){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____1.call(this,state_26808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_26816 = f__8505__auto__.call(null);
(statearr_26816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_26816;
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
var args26819 = [];
var len__7214__auto___26858 = arguments.length;
var i__7215__auto___26859 = (0);
while(true){
if((i__7215__auto___26859 < len__7214__auto___26858)){
args26819.push((arguments[i__7215__auto___26859]));

var G__26860 = (i__7215__auto___26859 + (1));
i__7215__auto___26859 = G__26860;
continue;
} else {
}
break;
}

var G__26821 = args26819.length;
switch (G__26821) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26819.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_26826){
var state_val_26827 = (state_26826[(1)]);
if((state_val_26827 === (1))){
var inst_26822 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26826__$1,(2),c,inst_26822);
} else {
if((state_val_26827 === (2))){
var inst_26824 = (state_26826[(2)]);
var state_26826__$1 = state_26826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26826__$1,inst_26824);
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
var statearr_26831 = [null,null,null,null,null,null,null];
(statearr_26831[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_26831[(1)] = (1));

return statearr_26831;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_26826){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_26826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e26832){if((e26832 instanceof Object)){
var ex__8487__auto__ = e26832;
var statearr_26833_26862 = state_26826;
(statearr_26833_26862[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26863 = state_26826;
state_26826 = G__26863;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_26826){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_26826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_26834 = f__8505__auto__.call(null);
(statearr_26834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_26834;
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
return (function (state_26845){
var state_val_26846 = (state_26845[(1)]);
if((state_val_26846 === (1))){
var state_26845__$1 = state_26845;
if(cljs.core.truth_(arg1)){
var statearr_26847_26864 = state_26845__$1;
(statearr_26847_26864[(1)] = (2));

} else {
var statearr_26848_26865 = state_26845__$1;
(statearr_26848_26865[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (2))){
var inst_26836 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_26845__$1 = state_26845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26845__$1,(5),c,inst_26836);
} else {
if((state_val_26846 === (3))){
var state_26845__$1 = state_26845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26845__$1,(6),c,E_msg);
} else {
if((state_val_26846 === (4))){
var inst_26843 = (state_26845[(2)]);
var state_26845__$1 = state_26845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26845__$1,inst_26843);
} else {
if((state_val_26846 === (5))){
var inst_26838 = (state_26845[(2)]);
var state_26845__$1 = state_26845;
var statearr_26849_26866 = state_26845__$1;
(statearr_26849_26866[(2)] = inst_26838);

(statearr_26849_26866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26846 === (6))){
var inst_26841 = (state_26845[(2)]);
var state_26845__$1 = state_26845;
var statearr_26850_26867 = state_26845__$1;
(statearr_26850_26867[(2)] = inst_26841);

(statearr_26850_26867[(1)] = (4));


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
var statearr_26854 = [null,null,null,null,null,null,null];
(statearr_26854[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_26854[(1)] = (1));

return statearr_26854;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_26845){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_26845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e26855){if((e26855 instanceof Object)){
var ex__8487__auto__ = e26855;
var statearr_26856_26868 = state_26845;
(statearr_26856_26868[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26869 = state_26845;
state_26845 = G__26869;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_26845){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_26845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_26857 = f__8505__auto__.call(null);
(statearr_26857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_26857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args26870 = [];
var len__7214__auto___26937 = arguments.length;
var i__7215__auto___26938 = (0);
while(true){
if((i__7215__auto___26938 < len__7214__auto___26937)){
args26870.push((arguments[i__7215__auto___26938]));

var G__26939 = (i__7215__auto___26938 + (1));
i__7215__auto___26938 = G__26939;
continue;
} else {
}
break;
}

var G__26872 = args26870.length;
switch (G__26872) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26870.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_26888){
var state_val_26889 = (state_26888[(1)]);
if((state_val_26889 === (1))){
var state_26888__$1 = state_26888;
if(cljs.core.truth_(err)){
var statearr_26890_26941 = state_26888__$1;
(statearr_26890_26941[(1)] = (2));

} else {
var statearr_26891_26942 = state_26888__$1;
(statearr_26891_26942[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26889 === (2))){
var inst_26874 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_26888__$1 = state_26888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26888__$1,(5),c,inst_26874);
} else {
if((state_val_26889 === (3))){
var state_26888__$1 = state_26888;
var statearr_26892_26943 = state_26888__$1;
(statearr_26892_26943[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26889 === (4))){
var inst_26886 = (state_26888[(2)]);
var state_26888__$1 = state_26888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26888__$1,inst_26886);
} else {
if((state_val_26889 === (5))){
var inst_26876 = (state_26888[(2)]);
var state_26888__$1 = state_26888;
var statearr_26894_26944 = state_26888__$1;
(statearr_26894_26944[(2)] = inst_26876);

(statearr_26894_26944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26889 === (6))){
var inst_26879 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_26888__$1 = state_26888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26888__$1,(9),c,inst_26879);
} else {
if((state_val_26889 === (7))){
var state_26888__$1 = state_26888;
var statearr_26895_26945 = state_26888__$1;
(statearr_26895_26945[(2)] = null);

(statearr_26895_26945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26889 === (8))){
var inst_26884 = (state_26888[(2)]);
var state_26888__$1 = state_26888;
var statearr_26896_26946 = state_26888__$1;
(statearr_26896_26946[(2)] = inst_26884);

(statearr_26896_26946[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26889 === (9))){
var inst_26881 = (state_26888[(2)]);
var state_26888__$1 = state_26888;
var statearr_26897_26947 = state_26888__$1;
(statearr_26897_26947[(2)] = inst_26881);

(statearr_26897_26947[(1)] = (8));


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
var statearr_26901 = [null,null,null,null,null,null,null];
(statearr_26901[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_26901[(1)] = (1));

return statearr_26901;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_26888){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_26888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e26902){if((e26902 instanceof Object)){
var ex__8487__auto__ = e26902;
var statearr_26903_26948 = state_26888;
(statearr_26903_26948[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26949 = state_26888;
state_26888 = G__26949;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_26888){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_26888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_26904 = f__8505__auto__.call(null);
(statearr_26904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_26904;
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
return (function (state_26920){
var state_val_26921 = (state_26920[(1)]);
if((state_val_26921 === (1))){
var state_26920__$1 = state_26920;
if(cljs.core.truth_(err)){
var statearr_26922_26950 = state_26920__$1;
(statearr_26922_26950[(1)] = (2));

} else {
var statearr_26923_26951 = state_26920__$1;
(statearr_26923_26951[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (2))){
var inst_26906 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26920__$1,(5),c,inst_26906);
} else {
if((state_val_26921 === (3))){
var state_26920__$1 = state_26920;
var statearr_26924_26952 = state_26920__$1;
(statearr_26924_26952[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (4))){
var inst_26918 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26920__$1,inst_26918);
} else {
if((state_val_26921 === (5))){
var inst_26908 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26926_26953 = state_26920__$1;
(statearr_26926_26953[(2)] = inst_26908);

(statearr_26926_26953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (6))){
var inst_26911 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_26920__$1 = state_26920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26920__$1,(9),c,inst_26911);
} else {
if((state_val_26921 === (7))){
var state_26920__$1 = state_26920;
var statearr_26927_26954 = state_26920__$1;
(statearr_26927_26954[(2)] = null);

(statearr_26927_26954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (8))){
var inst_26916 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26928_26955 = state_26920__$1;
(statearr_26928_26955[(2)] = inst_26916);

(statearr_26928_26955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26921 === (9))){
var inst_26913 = (state_26920[(2)]);
var state_26920__$1 = state_26920;
var statearr_26929_26956 = state_26920__$1;
(statearr_26929_26956[(2)] = inst_26913);

(statearr_26929_26956[(1)] = (8));


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
var statearr_26933 = [null,null,null,null,null,null,null];
(statearr_26933[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_26933[(1)] = (1));

return statearr_26933;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_26920){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_26920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e26934){if((e26934 instanceof Object)){
var ex__8487__auto__ = e26934;
var statearr_26935_26957 = state_26920;
(statearr_26935_26957[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26958 = state_26920;
state_26920 = G__26958;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_26920){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_26920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_26936 = f__8505__auto__.call(null);
(statearr_26936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_26936;
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
return (function (state_27110){
var state_val_27111 = (state_27110[(1)]);
if((state_val_27111 === (7))){
var state_27110__$1 = state_27110;
var statearr_27112_27131 = state_27110__$1;
(statearr_27112_27131[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (1))){
var state_27110__$1 = state_27110;
if(cljs.core.truth_(err1)){
var statearr_27114_27132 = state_27110__$1;
(statearr_27114_27132[(1)] = (2));

} else {
var statearr_27115_27133 = state_27110__$1;
(statearr_27115_27133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (4))){
var inst_27108 = (state_27110[(2)]);
var state_27110__$1 = state_27110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27110__$1,inst_27108);
} else {
if((state_val_27111 === (13))){
var inst_27101 = (state_27110[(2)]);
var state_27110__$1 = state_27110;
var statearr_27116_27134 = state_27110__$1;
(statearr_27116_27134[(2)] = inst_27101);

(statearr_27116_27134[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (6))){
var inst_27094 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_27110__$1 = state_27110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27110__$1,(9),c,inst_27094);
} else {
if((state_val_27111 === (3))){
var state_27110__$1 = state_27110;
if(cljs.core.truth_(err2)){
var statearr_27117_27135 = state_27110__$1;
(statearr_27117_27135[(1)] = (6));

} else {
var statearr_27118_27136 = state_27110__$1;
(statearr_27118_27136[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (12))){
var inst_27104 = (state_27110[(2)]);
var state_27110__$1 = state_27110;
var statearr_27119_27137 = state_27110__$1;
(statearr_27119_27137[(2)] = inst_27104);

(statearr_27119_27137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (2))){
var inst_27089 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_27110__$1 = state_27110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27110__$1,(5),c,inst_27089);
} else {
if((state_val_27111 === (11))){
var state_27110__$1 = state_27110;
var statearr_27120_27138 = state_27110__$1;
(statearr_27120_27138[(2)] = null);

(statearr_27120_27138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (9))){
var inst_27096 = (state_27110[(2)]);
var state_27110__$1 = state_27110;
var statearr_27121_27139 = state_27110__$1;
(statearr_27121_27139[(2)] = inst_27096);

(statearr_27121_27139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (5))){
var inst_27091 = (state_27110[(2)]);
var state_27110__$1 = state_27110;
var statearr_27122_27140 = state_27110__$1;
(statearr_27122_27140[(2)] = inst_27091);

(statearr_27122_27140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27111 === (10))){
var inst_27099 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_27110__$1 = state_27110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27110__$1,(13),c,inst_27099);
} else {
if((state_val_27111 === (8))){
var inst_27106 = (state_27110[(2)]);
var state_27110__$1 = state_27110;
var statearr_27123_27141 = state_27110__$1;
(statearr_27123_27141[(2)] = inst_27106);

(statearr_27123_27141[(1)] = (4));


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
var statearr_27127 = [null,null,null,null,null,null,null];
(statearr_27127[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__);

(statearr_27127[(1)] = (1));

return statearr_27127;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____1 = (function (state_27110){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_27110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e27128){if((e27128 instanceof Object)){
var ex__8487__auto__ = e27128;
var statearr_27129_27142 = state_27110;
(statearr_27129_27142[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27143 = state_27110;
state_27110 = G__27143;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__ = function(state_27110){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____1.call(this,state_27110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_27130 = f__8505__auto__.call(null);
(statearr_27130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_27130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
}));
});
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args27144 = [];
var len__7214__auto___27249 = arguments.length;
var i__7215__auto___27250 = (0);
while(true){
if((i__7215__auto___27250 < len__7214__auto___27249)){
args27144.push((arguments[i__7215__auto___27250]));

var G__27251 = (i__7215__auto___27250 + (1));
i__7215__auto___27250 = G__27251;
continue;
} else {
}
break;
}

var G__27146 = args27144.length;
switch (G__27146) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27144.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__27253__delegate = function (args){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_27171){
var state_val_27172 = (state_27171[(1)]);
if((state_val_27172 === (7))){
var inst_27153 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27173_27254 = state_27171__$1;
(statearr_27173_27254[(2)] = inst_27153);

(statearr_27173_27254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (1))){
var inst_27147 = args;
var state_27171__$1 = (function (){var statearr_27174 = state_27171;
(statearr_27174[(7)] = inst_27147);

return statearr_27174;
})();
var statearr_27175_27255 = state_27171__$1;
(statearr_27175_27255[(2)] = null);

(statearr_27175_27255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (4))){
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27171__$1,(7),c,false);
} else {
if((state_val_27172 === (6))){
var inst_27167 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27176_27256 = state_27171__$1;
(statearr_27176_27256[(2)] = inst_27167);

(statearr_27176_27256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (3))){
var inst_27169 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27171__$1,inst_27169);
} else {
if((state_val_27172 === (2))){
var inst_27147 = (state_27171[(7)]);
var inst_27149 = cljs.core.count.call(null,inst_27147);
var inst_27150 = cljs.core._EQ_.call(null,(0),inst_27149);
var state_27171__$1 = state_27171;
if(inst_27150){
var statearr_27177_27257 = state_27171__$1;
(statearr_27177_27257[(1)] = (4));

} else {
var statearr_27178_27258 = state_27171__$1;
(statearr_27178_27258[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (11))){
var inst_27160 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27179_27259 = state_27171__$1;
(statearr_27179_27259[(2)] = inst_27160);

(statearr_27179_27259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (9))){
var inst_27147 = (state_27171[(7)]);
var inst_27162 = cljs.core.rest.call(null,inst_27147);
var inst_27147__$1 = inst_27162;
var state_27171__$1 = (function (){var statearr_27180 = state_27171;
(statearr_27180[(7)] = inst_27147__$1);

return statearr_27180;
})();
var statearr_27181_27260 = state_27171__$1;
(statearr_27181_27260[(2)] = null);

(statearr_27181_27260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (5))){
var inst_27147 = (state_27171[(7)]);
var inst_27155 = cljs.core.first.call(null,inst_27147);
var state_27171__$1 = state_27171;
if(cljs.core.truth_(inst_27155)){
var statearr_27182_27261 = state_27171__$1;
(statearr_27182_27261[(1)] = (8));

} else {
var statearr_27183_27262 = state_27171__$1;
(statearr_27183_27262[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (10))){
var inst_27165 = (state_27171[(2)]);
var state_27171__$1 = state_27171;
var statearr_27184_27263 = state_27171__$1;
(statearr_27184_27263[(2)] = inst_27165);

(statearr_27184_27263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27172 === (8))){
var inst_27147 = (state_27171[(7)]);
var inst_27157 = cljs_async_patterns.core.chan_sanitized.call(null,inst_27147);
var inst_27158 = cljs.core.first.call(null,inst_27157);
var state_27171__$1 = state_27171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27171__$1,(11),c,inst_27158);
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
var statearr_27188 = [null,null,null,null,null,null,null,null];
(statearr_27188[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_27188[(1)] = (1));

return statearr_27188;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_27171){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_27171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e27189){if((e27189 instanceof Object)){
var ex__8487__auto__ = e27189;
var statearr_27190_27264 = state_27171;
(statearr_27190_27264[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27265 = state_27171;
state_27171 = G__27265;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_27171){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_27171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_27191 = f__8505__auto__.call(null);
(statearr_27191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_27191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
};
var G__27253 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27266__i = 0, G__27266__a = new Array(arguments.length -  0);
while (G__27266__i < G__27266__a.length) {G__27266__a[G__27266__i] = arguments[G__27266__i + 0]; ++G__27266__i;}
  args = new cljs.core.IndexedSeq(G__27266__a,0);
} 
return G__27253__delegate.call(this,args);};
G__27253.cljs$lang$maxFixedArity = 0;
G__27253.cljs$lang$applyTo = (function (arglist__27267){
var args = cljs.core.seq(arglist__27267);
return G__27253__delegate(args);
});
G__27253.cljs$core$IFn$_invoke$arity$variadic = G__27253__delegate;
return G__27253;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__27268__delegate = function (args){
var c__8504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8504__auto__){
return (function (){
var f__8505__auto__ = (function (){var switch__8483__auto__ = ((function (c__8504__auto__){
return (function (state_27224){
var state_val_27225 = (state_27224[(1)]);
if((state_val_27225 === (7))){
var inst_27198 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27226_27269 = state_27224__$1;
(statearr_27226_27269[(2)] = inst_27198);

(statearr_27226_27269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (1))){
var inst_27192 = args;
var state_27224__$1 = (function (){var statearr_27227 = state_27224;
(statearr_27227[(7)] = inst_27192);

return statearr_27227;
})();
var statearr_27228_27270 = state_27224__$1;
(statearr_27228_27270[(2)] = null);

(statearr_27228_27270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (4))){
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(7),c,E_msg);
} else {
if((state_val_27225 === (15))){
var inst_27211 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27229_27271 = state_27224__$1;
(statearr_27229_27271[(2)] = inst_27211);

(statearr_27229_27271[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (13))){
var inst_27213 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27230_27272 = state_27224__$1;
(statearr_27230_27272[(2)] = inst_27213);

(statearr_27230_27272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (6))){
var inst_27220 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27231_27273 = state_27224__$1;
(statearr_27231_27273[(2)] = inst_27220);

(statearr_27231_27273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (3))){
var inst_27222 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27224__$1,inst_27222);
} else {
if((state_val_27225 === (12))){
var inst_27192 = (state_27224[(7)]);
var inst_27208 = cljs_async_patterns.core.chan_sanitized.call(null,inst_27192);
var inst_27209 = cljs.core.first.call(null,inst_27208);
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(15),c,inst_27209);
} else {
if((state_val_27225 === (2))){
var inst_27192 = (state_27224[(7)]);
var inst_27194 = cljs.core.count.call(null,inst_27192);
var inst_27195 = cljs.core._EQ_.call(null,(0),inst_27194);
var state_27224__$1 = state_27224;
if(inst_27195){
var statearr_27232_27274 = state_27224__$1;
(statearr_27232_27274[(1)] = (4));

} else {
var statearr_27233_27275 = state_27224__$1;
(statearr_27233_27275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (11))){
var state_27224__$1 = state_27224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27224__$1,(14),c,E_msg);
} else {
if((state_val_27225 === (9))){
var inst_27192 = (state_27224[(7)]);
var inst_27215 = cljs.core.rest.call(null,inst_27192);
var inst_27192__$1 = inst_27215;
var state_27224__$1 = (function (){var statearr_27234 = state_27224;
(statearr_27234[(7)] = inst_27192__$1);

return statearr_27234;
})();
var statearr_27235_27276 = state_27224__$1;
(statearr_27235_27276[(2)] = null);

(statearr_27235_27276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (5))){
var inst_27192 = (state_27224[(7)]);
var inst_27200 = cljs.core.first.call(null,inst_27192);
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27200)){
var statearr_27236_27277 = state_27224__$1;
(statearr_27236_27277[(1)] = (8));

} else {
var statearr_27237_27278 = state_27224__$1;
(statearr_27237_27278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (14))){
var inst_27206 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27238_27279 = state_27224__$1;
(statearr_27238_27279[(2)] = inst_27206);

(statearr_27238_27279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (10))){
var inst_27218 = (state_27224[(2)]);
var state_27224__$1 = state_27224;
var statearr_27239_27280 = state_27224__$1;
(statearr_27239_27280[(2)] = inst_27218);

(statearr_27239_27280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27225 === (8))){
var inst_27192 = (state_27224[(7)]);
var inst_27202 = cljs.core.count.call(null,inst_27192);
var inst_27203 = (inst_27202 > (1));
var state_27224__$1 = state_27224;
if(cljs.core.truth_(inst_27203)){
var statearr_27240_27281 = state_27224__$1;
(statearr_27240_27281[(1)] = (11));

} else {
var statearr_27241_27282 = state_27224__$1;
(statearr_27241_27282[(1)] = (12));

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
var statearr_27245 = [null,null,null,null,null,null,null,null];
(statearr_27245[(0)] = cljs_async_patterns$core$state_machine__8484__auto__);

(statearr_27245[(1)] = (1));

return statearr_27245;
});
var cljs_async_patterns$core$state_machine__8484__auto____1 = (function (state_27224){
while(true){
var ret_value__8485__auto__ = (function (){try{while(true){
var result__8486__auto__ = switch__8483__auto__.call(null,state_27224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8486__auto__;
}
break;
}
}catch (e27246){if((e27246 instanceof Object)){
var ex__8487__auto__ = e27246;
var statearr_27247_27283 = state_27224;
(statearr_27247_27283[(5)] = ex__8487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27284 = state_27224;
state_27224 = G__27284;
continue;
} else {
return ret_value__8485__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8484__auto__ = function(state_27224){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8484__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8484__auto____1.call(this,state_27224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8484__auto____0;
cljs_async_patterns$core$state_machine__8484__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8484__auto____1;
return cljs_async_patterns$core$state_machine__8484__auto__;
})()
;})(switch__8483__auto__,c__8504__auto__))
})();
var state__8506__auto__ = (function (){var statearr_27248 = f__8505__auto__.call(null);
(statearr_27248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8504__auto__);

return statearr_27248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8506__auto__);
});})(c__8504__auto__))
);

return c__8504__auto__;
};
var G__27268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27285__i = 0, G__27285__a = new Array(arguments.length -  0);
while (G__27285__i < G__27285__a.length) {G__27285__a[G__27285__i] = arguments[G__27285__i + 0]; ++G__27285__i;}
  args = new cljs.core.IndexedSeq(G__27285__a,0);
} 
return G__27268__delegate.call(this,args);};
G__27268.cljs$lang$maxFixedArity = 0;
G__27268.cljs$lang$applyTo = (function (arglist__27286){
var args = cljs.core.seq(arglist__27286);
return G__27268__delegate(args);
});
G__27268.cljs$core$IFn$_invoke$arity$variadic = G__27268__delegate;
return G__27268;
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
var args__7221__auto__ = [];
var len__7214__auto___27288 = arguments.length;
var i__7215__auto___27289 = (0);
while(true){
if((i__7215__auto___27289 < len__7214__auto___27288)){
args__7221__auto__.push((arguments[i__7215__auto___27289]));

var G__27290 = (i__7215__auto___27289 + (1));
i__7215__auto___27289 = G__27290;
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

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq27287){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27287));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map