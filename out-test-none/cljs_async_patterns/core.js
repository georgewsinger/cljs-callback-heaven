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
return (function (state_39878){
var state_val_39879 = (state_39878[(1)]);
if((state_val_39879 === (1))){
var state_39878__$1 = state_39878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39878__$1,(2),c);
} else {
if((state_val_39879 === (2))){
var inst_39875 = (state_39878[(2)]);
var inst_39876 = cljs.core.println.call(null,inst_39875);
var state_39878__$1 = state_39878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39878__$1,inst_39876);
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
var statearr_39883 = [null,null,null,null,null,null,null];
(statearr_39883[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__);

(statearr_39883[(1)] = (1));

return statearr_39883;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1 = (function (state_39878){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_39878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e39884){if((e39884 instanceof Object)){
var ex__9301__auto__ = e39884;
var statearr_39885_39887 = state_39878;
(statearr_39885_39887[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39884;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39888 = state_39878;
state_39878 = G__39888;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__ = function(state_39878){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1.call(this,state_39878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_39886 = f__9319__auto__.call(null);
(statearr_39886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_39886;
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
var args39889 = [];
var len__7018__auto___39928 = arguments.length;
var i__7019__auto___39929 = (0);
while(true){
if((i__7019__auto___39929 < len__7018__auto___39928)){
args39889.push((arguments[i__7019__auto___39929]));

var G__39930 = (i__7019__auto___39929 + (1));
i__7019__auto___39929 = G__39930;
continue;
} else {
}
break;
}

var G__39891 = args39889.length;
switch (G__39891) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39889.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_39896){
var state_val_39897 = (state_39896[(1)]);
if((state_val_39897 === (1))){
var inst_39892 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_39896__$1 = state_39896;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39896__$1,(2),c,inst_39892);
} else {
if((state_val_39897 === (2))){
var inst_39894 = (state_39896[(2)]);
var state_39896__$1 = state_39896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39896__$1,inst_39894);
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
var statearr_39901 = [null,null,null,null,null,null,null];
(statearr_39901[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_39901[(1)] = (1));

return statearr_39901;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_39896){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_39896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e39902){if((e39902 instanceof Object)){
var ex__9301__auto__ = e39902;
var statearr_39903_39932 = state_39896;
(statearr_39903_39932[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39933 = state_39896;
state_39896 = G__39933;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_39896){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_39896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_39904 = f__9319__auto__.call(null);
(statearr_39904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_39904;
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
return (function (state_39915){
var state_val_39916 = (state_39915[(1)]);
if((state_val_39916 === (1))){
var state_39915__$1 = state_39915;
if(cljs.core.truth_(arg1)){
var statearr_39917_39934 = state_39915__$1;
(statearr_39917_39934[(1)] = (2));

} else {
var statearr_39918_39935 = state_39915__$1;
(statearr_39918_39935[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39916 === (2))){
var inst_39906 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_39915__$1 = state_39915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39915__$1,(5),c,inst_39906);
} else {
if((state_val_39916 === (3))){
var state_39915__$1 = state_39915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39915__$1,(6),c,E_msg);
} else {
if((state_val_39916 === (4))){
var inst_39913 = (state_39915[(2)]);
var state_39915__$1 = state_39915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39915__$1,inst_39913);
} else {
if((state_val_39916 === (5))){
var inst_39908 = (state_39915[(2)]);
var state_39915__$1 = state_39915;
var statearr_39919_39936 = state_39915__$1;
(statearr_39919_39936[(2)] = inst_39908);

(statearr_39919_39936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39916 === (6))){
var inst_39911 = (state_39915[(2)]);
var state_39915__$1 = state_39915;
var statearr_39920_39937 = state_39915__$1;
(statearr_39920_39937[(2)] = inst_39911);

(statearr_39920_39937[(1)] = (4));


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
var statearr_39924 = [null,null,null,null,null,null,null];
(statearr_39924[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_39924[(1)] = (1));

return statearr_39924;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_39915){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_39915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e39925){if((e39925 instanceof Object)){
var ex__9301__auto__ = e39925;
var statearr_39926_39938 = state_39915;
(statearr_39926_39938[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39939 = state_39915;
state_39915 = G__39939;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_39915){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_39915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_39927 = f__9319__auto__.call(null);
(statearr_39927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_39927;
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
var args39940 = [];
var len__7018__auto___40007 = arguments.length;
var i__7019__auto___40008 = (0);
while(true){
if((i__7019__auto___40008 < len__7018__auto___40007)){
args39940.push((arguments[i__7019__auto___40008]));

var G__40009 = (i__7019__auto___40008 + (1));
i__7019__auto___40008 = G__40009;
continue;
} else {
}
break;
}

var G__39942 = args39940.length;
switch (G__39942) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39940.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_39958){
var state_val_39959 = (state_39958[(1)]);
if((state_val_39959 === (1))){
var state_39958__$1 = state_39958;
if(cljs.core.truth_(res)){
var statearr_39960_40011 = state_39958__$1;
(statearr_39960_40011[(1)] = (2));

} else {
var statearr_39961_40012 = state_39958__$1;
(statearr_39961_40012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (2))){
var inst_39944 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39958__$1,(5),c,inst_39944);
} else {
if((state_val_39959 === (3))){
var state_39958__$1 = state_39958;
var statearr_39962_40013 = state_39958__$1;
(statearr_39962_40013[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (4))){
var inst_39956 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39958__$1,inst_39956);
} else {
if((state_val_39959 === (5))){
var inst_39946 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39964_40014 = state_39958__$1;
(statearr_39964_40014[(2)] = inst_39946);

(statearr_39964_40014[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (6))){
var inst_39949 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_39958__$1 = state_39958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39958__$1,(9),c,inst_39949);
} else {
if((state_val_39959 === (7))){
var state_39958__$1 = state_39958;
var statearr_39965_40015 = state_39958__$1;
(statearr_39965_40015[(2)] = null);

(statearr_39965_40015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (8))){
var inst_39954 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39966_40016 = state_39958__$1;
(statearr_39966_40016[(2)] = inst_39954);

(statearr_39966_40016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39959 === (9))){
var inst_39951 = (state_39958[(2)]);
var state_39958__$1 = state_39958;
var statearr_39967_40017 = state_39958__$1;
(statearr_39967_40017[(2)] = inst_39951);

(statearr_39967_40017[(1)] = (8));


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
var statearr_39971 = [null,null,null,null,null,null,null];
(statearr_39971[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_39971[(1)] = (1));

return statearr_39971;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_39958){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_39958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e39972){if((e39972 instanceof Object)){
var ex__9301__auto__ = e39972;
var statearr_39973_40018 = state_39958;
(statearr_39973_40018[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40019 = state_39958;
state_39958 = G__40019;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_39958){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_39958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_39974 = f__9319__auto__.call(null);
(statearr_39974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_39974;
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
return (function (state_39990){
var state_val_39991 = (state_39990[(1)]);
if((state_val_39991 === (1))){
var state_39990__$1 = state_39990;
if(cljs.core.truth_(res)){
var statearr_39992_40020 = state_39990__$1;
(statearr_39992_40020[(1)] = (2));

} else {
var statearr_39993_40021 = state_39990__$1;
(statearr_39993_40021[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (2))){
var inst_39976 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39990__$1,(5),c,inst_39976);
} else {
if((state_val_39991 === (3))){
var state_39990__$1 = state_39990;
var statearr_39994_40022 = state_39990__$1;
(statearr_39994_40022[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (4))){
var inst_39988 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39990__$1,inst_39988);
} else {
if((state_val_39991 === (5))){
var inst_39978 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_39996_40023 = state_39990__$1;
(statearr_39996_40023[(2)] = inst_39978);

(statearr_39996_40023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (6))){
var inst_39981 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_39990__$1 = state_39990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39990__$1,(9),c,inst_39981);
} else {
if((state_val_39991 === (7))){
var state_39990__$1 = state_39990;
var statearr_39997_40024 = state_39990__$1;
(statearr_39997_40024[(2)] = null);

(statearr_39997_40024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (8))){
var inst_39986 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_39998_40025 = state_39990__$1;
(statearr_39998_40025[(2)] = inst_39986);

(statearr_39998_40025[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39991 === (9))){
var inst_39983 = (state_39990[(2)]);
var state_39990__$1 = state_39990;
var statearr_39999_40026 = state_39990__$1;
(statearr_39999_40026[(2)] = inst_39983);

(statearr_39999_40026[(1)] = (8));


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
var statearr_40003 = [null,null,null,null,null,null,null];
(statearr_40003[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_40003[(1)] = (1));

return statearr_40003;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_39990){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_39990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40004){if((e40004 instanceof Object)){
var ex__9301__auto__ = e40004;
var statearr_40005_40027 = state_39990;
(statearr_40005_40027[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40028 = state_39990;
state_39990 = G__40028;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_39990){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_39990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40006 = f__9319__auto__.call(null);
(statearr_40006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40006;
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
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(var_args){
var args40029 = [];
var len__7018__auto___40118 = arguments.length;
var i__7019__auto___40119 = (0);
while(true){
if((i__7019__auto___40119 < len__7018__auto___40118)){
args40029.push((arguments[i__7019__auto___40119]));

var G__40120 = (i__7019__auto___40119 + (1));
i__7019__auto___40119 = G__40120;
continue;
} else {
}
break;
}

var G__40031 = args40029.length;
switch (G__40031) {
case 1:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40029.length)].join('')));

}
});

cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err1,err2,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40054){
var state_val_40055 = (state_40054[(1)]);
if((state_val_40055 === (7))){
var state_40054__$1 = state_40054;
var statearr_40056_40122 = state_40054__$1;
(statearr_40056_40122[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (1))){
var state_40054__$1 = state_40054;
if(cljs.core.truth_(res)){
var statearr_40058_40123 = state_40054__$1;
(statearr_40058_40123[(1)] = (2));

} else {
var statearr_40059_40124 = state_40054__$1;
(statearr_40059_40124[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (4))){
var inst_40052 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40054__$1,inst_40052);
} else {
if((state_val_40055 === (13))){
var inst_40045 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40060_40125 = state_40054__$1;
(statearr_40060_40125[(2)] = inst_40045);

(statearr_40060_40125[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (6))){
var inst_40038 = cljs_async_patterns.core.chan_sanitized.call(null,err1);
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40054__$1,(9),c,inst_40038);
} else {
if((state_val_40055 === (3))){
var state_40054__$1 = state_40054;
if(cljs.core.truth_(err1)){
var statearr_40061_40126 = state_40054__$1;
(statearr_40061_40126[(1)] = (6));

} else {
var statearr_40062_40127 = state_40054__$1;
(statearr_40062_40127[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (12))){
var inst_40048 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40063_40128 = state_40054__$1;
(statearr_40063_40128[(2)] = inst_40048);

(statearr_40063_40128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (2))){
var inst_40033 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40054__$1,(5),c,inst_40033);
} else {
if((state_val_40055 === (11))){
var state_40054__$1 = state_40054;
var statearr_40064_40129 = state_40054__$1;
(statearr_40064_40129[(2)] = null);

(statearr_40064_40129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (9))){
var inst_40040 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40065_40130 = state_40054__$1;
(statearr_40065_40130[(2)] = inst_40040);

(statearr_40065_40130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (5))){
var inst_40035 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40066_40131 = state_40054__$1;
(statearr_40066_40131[(2)] = inst_40035);

(statearr_40066_40131[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40055 === (10))){
var inst_40043 = cljs_async_patterns.core.chan_sanitized.call(null,err2);
var state_40054__$1 = state_40054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40054__$1,(13),c,inst_40043);
} else {
if((state_val_40055 === (8))){
var inst_40050 = (state_40054[(2)]);
var state_40054__$1 = state_40054;
var statearr_40067_40132 = state_40054__$1;
(statearr_40067_40132[(2)] = inst_40050);

(statearr_40067_40132[(1)] = (4));


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
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_40071 = [null,null,null,null,null,null,null];
(statearr_40071[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_40071[(1)] = (1));

return statearr_40071;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_40054){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40072){if((e40072 instanceof Object)){
var ex__9301__auto__ = e40072;
var statearr_40073_40133 = state_40054;
(statearr_40073_40133[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40134 = state_40054;
state_40054 = G__40134;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_40054){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_40054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40074 = f__9319__auto__.call(null);
(statearr_40074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function (err1,err2,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40097){
var state_val_40098 = (state_40097[(1)]);
if((state_val_40098 === (7))){
var state_40097__$1 = state_40097;
var statearr_40099_40135 = state_40097__$1;
(statearr_40099_40135[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (1))){
var state_40097__$1 = state_40097;
if(cljs.core.truth_(res)){
var statearr_40101_40136 = state_40097__$1;
(statearr_40101_40136[(1)] = (2));

} else {
var statearr_40102_40137 = state_40097__$1;
(statearr_40102_40137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (4))){
var inst_40095 = (state_40097[(2)]);
var state_40097__$1 = state_40097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40097__$1,inst_40095);
} else {
if((state_val_40098 === (13))){
var inst_40088 = (state_40097[(2)]);
var state_40097__$1 = state_40097;
var statearr_40103_40138 = state_40097__$1;
(statearr_40103_40138[(2)] = inst_40088);

(statearr_40103_40138[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (6))){
var inst_40081 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_40097__$1 = state_40097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40097__$1,(9),c,inst_40081);
} else {
if((state_val_40098 === (3))){
var state_40097__$1 = state_40097;
if(cljs.core.truth_(err1)){
var statearr_40104_40139 = state_40097__$1;
(statearr_40104_40139[(1)] = (6));

} else {
var statearr_40105_40140 = state_40097__$1;
(statearr_40105_40140[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (12))){
var inst_40091 = (state_40097[(2)]);
var state_40097__$1 = state_40097;
var statearr_40106_40141 = state_40097__$1;
(statearr_40106_40141[(2)] = inst_40091);

(statearr_40106_40141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (2))){
var inst_40076 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_40097__$1 = state_40097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40097__$1,(5),c,inst_40076);
} else {
if((state_val_40098 === (11))){
var state_40097__$1 = state_40097;
var statearr_40107_40142 = state_40097__$1;
(statearr_40107_40142[(2)] = null);

(statearr_40107_40142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (9))){
var inst_40083 = (state_40097[(2)]);
var state_40097__$1 = state_40097;
var statearr_40108_40143 = state_40097__$1;
(statearr_40108_40143[(2)] = inst_40083);

(statearr_40108_40143[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (5))){
var inst_40078 = (state_40097[(2)]);
var state_40097__$1 = state_40097;
var statearr_40109_40144 = state_40097__$1;
(statearr_40109_40144[(2)] = inst_40078);

(statearr_40109_40144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40098 === (10))){
var inst_40086 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_40097__$1 = state_40097;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40097__$1,(13),c,inst_40086);
} else {
if((state_val_40098 === (8))){
var inst_40093 = (state_40097[(2)]);
var state_40097__$1 = state_40097;
var statearr_40110_40145 = state_40097__$1;
(statearr_40110_40145[(2)] = inst_40093);

(statearr_40110_40145[(1)] = (4));


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
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_40114 = [null,null,null,null,null,null,null];
(statearr_40114[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_40114[(1)] = (1));

return statearr_40114;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_40097){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40115){if((e40115 instanceof Object)){
var ex__9301__auto__ = e40115;
var statearr_40116_40146 = state_40097;
(statearr_40116_40146[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40147 = state_40097;
state_40097 = G__40147;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_40097){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_40097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40117 = f__9319__auto__.call(null);
(statearr_40117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_3.cljs$lang$maxFixedArity = 2;
/**
 * Jams the first truthy argument of a callback function into a channel.
 */
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args40148 = [];
var len__7018__auto___40253 = arguments.length;
var i__7019__auto___40254 = (0);
while(true){
if((i__7019__auto___40254 < len__7018__auto___40253)){
args40148.push((arguments[i__7019__auto___40254]));

var G__40255 = (i__7019__auto___40254 + (1));
i__7019__auto___40254 = G__40255;
continue;
} else {
}
break;
}

var G__40150 = args40148.length;
switch (G__40150) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40148.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__40257__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40175){
var state_val_40176 = (state_40175[(1)]);
if((state_val_40176 === (7))){
var inst_40157 = (state_40175[(2)]);
var state_40175__$1 = state_40175;
var statearr_40177_40258 = state_40175__$1;
(statearr_40177_40258[(2)] = inst_40157);

(statearr_40177_40258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (1))){
var inst_40151 = args;
var state_40175__$1 = (function (){var statearr_40178 = state_40175;
(statearr_40178[(7)] = inst_40151);

return statearr_40178;
})();
var statearr_40179_40259 = state_40175__$1;
(statearr_40179_40259[(2)] = null);

(statearr_40179_40259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (4))){
var state_40175__$1 = state_40175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40175__$1,(7),c,false);
} else {
if((state_val_40176 === (6))){
var inst_40171 = (state_40175[(2)]);
var state_40175__$1 = state_40175;
var statearr_40180_40260 = state_40175__$1;
(statearr_40180_40260[(2)] = inst_40171);

(statearr_40180_40260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (3))){
var inst_40173 = (state_40175[(2)]);
var state_40175__$1 = state_40175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40175__$1,inst_40173);
} else {
if((state_val_40176 === (2))){
var inst_40151 = (state_40175[(7)]);
var inst_40153 = cljs.core.count.call(null,inst_40151);
var inst_40154 = cljs.core._EQ_.call(null,(0),inst_40153);
var state_40175__$1 = state_40175;
if(inst_40154){
var statearr_40181_40261 = state_40175__$1;
(statearr_40181_40261[(1)] = (4));

} else {
var statearr_40182_40262 = state_40175__$1;
(statearr_40182_40262[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (11))){
var inst_40164 = (state_40175[(2)]);
var state_40175__$1 = state_40175;
var statearr_40183_40263 = state_40175__$1;
(statearr_40183_40263[(2)] = inst_40164);

(statearr_40183_40263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (9))){
var inst_40151 = (state_40175[(7)]);
var inst_40166 = cljs.core.rest.call(null,inst_40151);
var inst_40151__$1 = inst_40166;
var state_40175__$1 = (function (){var statearr_40184 = state_40175;
(statearr_40184[(7)] = inst_40151__$1);

return statearr_40184;
})();
var statearr_40185_40264 = state_40175__$1;
(statearr_40185_40264[(2)] = null);

(statearr_40185_40264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (5))){
var inst_40151 = (state_40175[(7)]);
var inst_40159 = cljs.core.first.call(null,inst_40151);
var state_40175__$1 = state_40175;
if(cljs.core.truth_(inst_40159)){
var statearr_40186_40265 = state_40175__$1;
(statearr_40186_40265[(1)] = (8));

} else {
var statearr_40187_40266 = state_40175__$1;
(statearr_40187_40266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (10))){
var inst_40169 = (state_40175[(2)]);
var state_40175__$1 = state_40175;
var statearr_40188_40267 = state_40175__$1;
(statearr_40188_40267[(2)] = inst_40169);

(statearr_40188_40267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40176 === (8))){
var inst_40151 = (state_40175[(7)]);
var inst_40161 = cljs_async_patterns.core.chan_sanitized.call(null,inst_40151);
var inst_40162 = cljs.core.first.call(null,inst_40161);
var state_40175__$1 = state_40175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40175__$1,(11),c,inst_40162);
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
var statearr_40192 = [null,null,null,null,null,null,null,null];
(statearr_40192[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_40192[(1)] = (1));

return statearr_40192;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_40175){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40193){if((e40193 instanceof Object)){
var ex__9301__auto__ = e40193;
var statearr_40194_40268 = state_40175;
(statearr_40194_40268[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40269 = state_40175;
state_40175 = G__40269;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_40175){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_40175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40195 = f__9319__auto__.call(null);
(statearr_40195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__40257 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40270__i = 0, G__40270__a = new Array(arguments.length -  0);
while (G__40270__i < G__40270__a.length) {G__40270__a[G__40270__i] = arguments[G__40270__i + 0]; ++G__40270__i;}
  args = new cljs.core.IndexedSeq(G__40270__a,0);
} 
return G__40257__delegate.call(this,args);};
G__40257.cljs$lang$maxFixedArity = 0;
G__40257.cljs$lang$applyTo = (function (arglist__40271){
var args = cljs.core.seq(arglist__40271);
return G__40257__delegate(args);
});
G__40257.cljs$core$IFn$_invoke$arity$variadic = G__40257__delegate;
return G__40257;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__40272__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_40228){
var state_val_40229 = (state_40228[(1)]);
if((state_val_40229 === (7))){
var inst_40202 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40230_40273 = state_40228__$1;
(statearr_40230_40273[(2)] = inst_40202);

(statearr_40230_40273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (1))){
var inst_40196 = args;
var state_40228__$1 = (function (){var statearr_40231 = state_40228;
(statearr_40231[(7)] = inst_40196);

return statearr_40231;
})();
var statearr_40232_40274 = state_40228__$1;
(statearr_40232_40274[(2)] = null);

(statearr_40232_40274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (4))){
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40228__$1,(7),c,E_msg);
} else {
if((state_val_40229 === (15))){
var inst_40215 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40233_40275 = state_40228__$1;
(statearr_40233_40275[(2)] = inst_40215);

(statearr_40233_40275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (13))){
var inst_40217 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40234_40276 = state_40228__$1;
(statearr_40234_40276[(2)] = inst_40217);

(statearr_40234_40276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (6))){
var inst_40224 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40235_40277 = state_40228__$1;
(statearr_40235_40277[(2)] = inst_40224);

(statearr_40235_40277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (3))){
var inst_40226 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40228__$1,inst_40226);
} else {
if((state_val_40229 === (12))){
var inst_40196 = (state_40228[(7)]);
var inst_40212 = cljs_async_patterns.core.chan_sanitized.call(null,inst_40196);
var inst_40213 = cljs.core.first.call(null,inst_40212);
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40228__$1,(15),c,inst_40213);
} else {
if((state_val_40229 === (2))){
var inst_40196 = (state_40228[(7)]);
var inst_40198 = cljs.core.count.call(null,inst_40196);
var inst_40199 = cljs.core._EQ_.call(null,(0),inst_40198);
var state_40228__$1 = state_40228;
if(inst_40199){
var statearr_40236_40278 = state_40228__$1;
(statearr_40236_40278[(1)] = (4));

} else {
var statearr_40237_40279 = state_40228__$1;
(statearr_40237_40279[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (11))){
var state_40228__$1 = state_40228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40228__$1,(14),c,E_msg);
} else {
if((state_val_40229 === (9))){
var inst_40196 = (state_40228[(7)]);
var inst_40219 = cljs.core.rest.call(null,inst_40196);
var inst_40196__$1 = inst_40219;
var state_40228__$1 = (function (){var statearr_40238 = state_40228;
(statearr_40238[(7)] = inst_40196__$1);

return statearr_40238;
})();
var statearr_40239_40280 = state_40228__$1;
(statearr_40239_40280[(2)] = null);

(statearr_40239_40280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (5))){
var inst_40196 = (state_40228[(7)]);
var inst_40204 = cljs.core.first.call(null,inst_40196);
var state_40228__$1 = state_40228;
if(cljs.core.truth_(inst_40204)){
var statearr_40240_40281 = state_40228__$1;
(statearr_40240_40281[(1)] = (8));

} else {
var statearr_40241_40282 = state_40228__$1;
(statearr_40241_40282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (14))){
var inst_40210 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40242_40283 = state_40228__$1;
(statearr_40242_40283[(2)] = inst_40210);

(statearr_40242_40283[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (10))){
var inst_40222 = (state_40228[(2)]);
var state_40228__$1 = state_40228;
var statearr_40243_40284 = state_40228__$1;
(statearr_40243_40284[(2)] = inst_40222);

(statearr_40243_40284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40229 === (8))){
var inst_40196 = (state_40228[(7)]);
var inst_40206 = cljs.core.count.call(null,inst_40196);
var inst_40207 = (inst_40206 > (1));
var state_40228__$1 = state_40228;
if(cljs.core.truth_(inst_40207)){
var statearr_40244_40285 = state_40228__$1;
(statearr_40244_40285[(1)] = (11));

} else {
var statearr_40245_40286 = state_40228__$1;
(statearr_40245_40286[(1)] = (12));

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
var statearr_40249 = [null,null,null,null,null,null,null,null];
(statearr_40249[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_40249[(1)] = (1));

return statearr_40249;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_40228){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_40228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e40250){if((e40250 instanceof Object)){
var ex__9301__auto__ = e40250;
var statearr_40251_40287 = state_40228;
(statearr_40251_40287[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40288 = state_40228;
state_40228 = G__40288;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_40228){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_40228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_40252 = f__9319__auto__.call(null);
(statearr_40252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_40252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__40272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40289__i = 0, G__40289__a = new Array(arguments.length -  0);
while (G__40289__i < G__40289__a.length) {G__40289__a[G__40289__i] = arguments[G__40289__i + 0]; ++G__40289__i;}
  args = new cljs.core.IndexedSeq(G__40289__a,0);
} 
return G__40272__delegate.call(this,args);};
G__40272.cljs$lang$maxFixedArity = 0;
G__40272.cljs$lang$applyTo = (function (arglist__40290){
var args = cljs.core.seq(arglist__40290);
return G__40272__delegate(args);
});
G__40272.cljs$core$IFn$_invoke$arity$variadic = G__40272__delegate;
return G__40272;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map