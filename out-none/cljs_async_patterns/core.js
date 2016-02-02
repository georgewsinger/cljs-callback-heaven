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
return (function (state_58719){
var state_val_58720 = (state_58719[(1)]);
if((state_val_58720 === (1))){
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58719__$1,(2),c);
} else {
if((state_val_58720 === (2))){
var inst_58716 = (state_58719[(2)]);
var inst_58717 = cljs.core.println.call(null,inst_58716);
var state_58719__$1 = state_58719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58719__$1,inst_58717);
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
var statearr_58724 = [null,null,null,null,null,null,null];
(statearr_58724[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__);

(statearr_58724[(1)] = (1));

return statearr_58724;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1 = (function (state_58719){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_58719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e58725){if((e58725 instanceof Object)){
var ex__8535__auto__ = e58725;
var statearr_58726_58728 = state_58719;
(statearr_58726_58728[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58729 = state_58719;
state_58719 = G__58729;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__ = function(state_58719){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1.call(this,state_58719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_58727 = f__8553__auto__.call(null);
(statearr_58727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_58727;
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
var args58730 = [];
var len__7214__auto___58769 = arguments.length;
var i__7215__auto___58770 = (0);
while(true){
if((i__7215__auto___58770 < len__7214__auto___58769)){
args58730.push((arguments[i__7215__auto___58770]));

var G__58771 = (i__7215__auto___58770 + (1));
i__7215__auto___58770 = G__58771;
continue;
} else {
}
break;
}

var G__58732 = args58730.length;
switch (G__58732) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58730.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_58737){
var state_val_58738 = (state_58737[(1)]);
if((state_val_58738 === (1))){
var inst_58733 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_58737__$1 = state_58737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58737__$1,(2),c,inst_58733);
} else {
if((state_val_58738 === (2))){
var inst_58735 = (state_58737[(2)]);
var state_58737__$1 = state_58737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58737__$1,inst_58735);
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
var statearr_58742 = [null,null,null,null,null,null,null];
(statearr_58742[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_58742[(1)] = (1));

return statearr_58742;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_58737){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_58737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e58743){if((e58743 instanceof Object)){
var ex__8535__auto__ = e58743;
var statearr_58744_58773 = state_58737;
(statearr_58744_58773[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58774 = state_58737;
state_58737 = G__58774;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_58737){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_58737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_58745 = f__8553__auto__.call(null);
(statearr_58745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_58745;
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
return (function (state_58756){
var state_val_58757 = (state_58756[(1)]);
if((state_val_58757 === (1))){
var state_58756__$1 = state_58756;
if(cljs.core.truth_(arg1)){
var statearr_58758_58775 = state_58756__$1;
(statearr_58758_58775[(1)] = (2));

} else {
var statearr_58759_58776 = state_58756__$1;
(statearr_58759_58776[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58757 === (2))){
var inst_58747 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_58756__$1 = state_58756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58756__$1,(5),c,inst_58747);
} else {
if((state_val_58757 === (3))){
var state_58756__$1 = state_58756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58756__$1,(6),c,E_msg);
} else {
if((state_val_58757 === (4))){
var inst_58754 = (state_58756[(2)]);
var state_58756__$1 = state_58756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58756__$1,inst_58754);
} else {
if((state_val_58757 === (5))){
var inst_58749 = (state_58756[(2)]);
var state_58756__$1 = state_58756;
var statearr_58760_58777 = state_58756__$1;
(statearr_58760_58777[(2)] = inst_58749);

(statearr_58760_58777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58757 === (6))){
var inst_58752 = (state_58756[(2)]);
var state_58756__$1 = state_58756;
var statearr_58761_58778 = state_58756__$1;
(statearr_58761_58778[(2)] = inst_58752);

(statearr_58761_58778[(1)] = (4));


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
var statearr_58765 = [null,null,null,null,null,null,null];
(statearr_58765[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_58765[(1)] = (1));

return statearr_58765;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_58756){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_58756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e58766){if((e58766 instanceof Object)){
var ex__8535__auto__ = e58766;
var statearr_58767_58779 = state_58756;
(statearr_58767_58779[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58780 = state_58756;
state_58756 = G__58780;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_58756){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_58756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_58768 = f__8553__auto__.call(null);
(statearr_58768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_58768;
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
var args58781 = [];
var len__7214__auto___58848 = arguments.length;
var i__7215__auto___58849 = (0);
while(true){
if((i__7215__auto___58849 < len__7214__auto___58848)){
args58781.push((arguments[i__7215__auto___58849]));

var G__58850 = (i__7215__auto___58849 + (1));
i__7215__auto___58849 = G__58850;
continue;
} else {
}
break;
}

var G__58783 = args58781.length;
switch (G__58783) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58781.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_58799){
var state_val_58800 = (state_58799[(1)]);
if((state_val_58800 === (1))){
var state_58799__$1 = state_58799;
if(cljs.core.truth_(res)){
var statearr_58801_58852 = state_58799__$1;
(statearr_58801_58852[(1)] = (2));

} else {
var statearr_58802_58853 = state_58799__$1;
(statearr_58802_58853[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58800 === (2))){
var inst_58785 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_58799__$1 = state_58799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58799__$1,(5),c,inst_58785);
} else {
if((state_val_58800 === (3))){
var state_58799__$1 = state_58799;
var statearr_58803_58854 = state_58799__$1;
(statearr_58803_58854[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58800 === (4))){
var inst_58797 = (state_58799[(2)]);
var state_58799__$1 = state_58799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58799__$1,inst_58797);
} else {
if((state_val_58800 === (5))){
var inst_58787 = (state_58799[(2)]);
var state_58799__$1 = state_58799;
var statearr_58805_58855 = state_58799__$1;
(statearr_58805_58855[(2)] = inst_58787);

(statearr_58805_58855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58800 === (6))){
var inst_58790 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_58799__$1 = state_58799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58799__$1,(9),c,inst_58790);
} else {
if((state_val_58800 === (7))){
var state_58799__$1 = state_58799;
var statearr_58806_58856 = state_58799__$1;
(statearr_58806_58856[(2)] = null);

(statearr_58806_58856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58800 === (8))){
var inst_58795 = (state_58799[(2)]);
var state_58799__$1 = state_58799;
var statearr_58807_58857 = state_58799__$1;
(statearr_58807_58857[(2)] = inst_58795);

(statearr_58807_58857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58800 === (9))){
var inst_58792 = (state_58799[(2)]);
var state_58799__$1 = state_58799;
var statearr_58808_58858 = state_58799__$1;
(statearr_58808_58858[(2)] = inst_58792);

(statearr_58808_58858[(1)] = (8));


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
var statearr_58812 = [null,null,null,null,null,null,null];
(statearr_58812[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_58812[(1)] = (1));

return statearr_58812;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_58799){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_58799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e58813){if((e58813 instanceof Object)){
var ex__8535__auto__ = e58813;
var statearr_58814_58859 = state_58799;
(statearr_58814_58859[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58860 = state_58799;
state_58799 = G__58860;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_58799){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_58799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_58815 = f__8553__auto__.call(null);
(statearr_58815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_58815;
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
return (function (state_58831){
var state_val_58832 = (state_58831[(1)]);
if((state_val_58832 === (1))){
var state_58831__$1 = state_58831;
if(cljs.core.truth_(res)){
var statearr_58833_58861 = state_58831__$1;
(statearr_58833_58861[(1)] = (2));

} else {
var statearr_58834_58862 = state_58831__$1;
(statearr_58834_58862[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58832 === (2))){
var inst_58817 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_58831__$1 = state_58831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58831__$1,(5),c,inst_58817);
} else {
if((state_val_58832 === (3))){
var state_58831__$1 = state_58831;
var statearr_58835_58863 = state_58831__$1;
(statearr_58835_58863[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58832 === (4))){
var inst_58829 = (state_58831[(2)]);
var state_58831__$1 = state_58831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58831__$1,inst_58829);
} else {
if((state_val_58832 === (5))){
var inst_58819 = (state_58831[(2)]);
var state_58831__$1 = state_58831;
var statearr_58837_58864 = state_58831__$1;
(statearr_58837_58864[(2)] = inst_58819);

(statearr_58837_58864[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58832 === (6))){
var inst_58822 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_58831__$1 = state_58831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58831__$1,(9),c,inst_58822);
} else {
if((state_val_58832 === (7))){
var state_58831__$1 = state_58831;
var statearr_58838_58865 = state_58831__$1;
(statearr_58838_58865[(2)] = null);

(statearr_58838_58865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58832 === (8))){
var inst_58827 = (state_58831[(2)]);
var state_58831__$1 = state_58831;
var statearr_58839_58866 = state_58831__$1;
(statearr_58839_58866[(2)] = inst_58827);

(statearr_58839_58866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58832 === (9))){
var inst_58824 = (state_58831[(2)]);
var state_58831__$1 = state_58831;
var statearr_58840_58867 = state_58831__$1;
(statearr_58840_58867[(2)] = inst_58824);

(statearr_58840_58867[(1)] = (8));


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
var statearr_58844 = [null,null,null,null,null,null,null];
(statearr_58844[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_58844[(1)] = (1));

return statearr_58844;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_58831){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_58831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e58845){if((e58845 instanceof Object)){
var ex__8535__auto__ = e58845;
var statearr_58846_58868 = state_58831;
(statearr_58846_58868[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58869 = state_58831;
state_58831 = G__58869;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_58831){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_58831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_58847 = f__8553__auto__.call(null);
(statearr_58847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_58847;
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
var args58870 = [];
var len__7214__auto___58959 = arguments.length;
var i__7215__auto___58960 = (0);
while(true){
if((i__7215__auto___58960 < len__7214__auto___58959)){
args58870.push((arguments[i__7215__auto___58960]));

var G__58961 = (i__7215__auto___58960 + (1));
i__7215__auto___58960 = G__58961;
continue;
} else {
}
break;
}

var G__58872 = args58870.length;
switch (G__58872) {
case 1:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58870.length)].join('')));

}
});

cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err1,err2,res){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_58895){
var state_val_58896 = (state_58895[(1)]);
if((state_val_58896 === (7))){
var state_58895__$1 = state_58895;
var statearr_58897_58963 = state_58895__$1;
(statearr_58897_58963[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (1))){
var state_58895__$1 = state_58895;
if(cljs.core.truth_(res)){
var statearr_58899_58964 = state_58895__$1;
(statearr_58899_58964[(1)] = (2));

} else {
var statearr_58900_58965 = state_58895__$1;
(statearr_58900_58965[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (4))){
var inst_58893 = (state_58895[(2)]);
var state_58895__$1 = state_58895;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58895__$1,inst_58893);
} else {
if((state_val_58896 === (13))){
var inst_58886 = (state_58895[(2)]);
var state_58895__$1 = state_58895;
var statearr_58901_58966 = state_58895__$1;
(statearr_58901_58966[(2)] = inst_58886);

(statearr_58901_58966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (6))){
var inst_58879 = cljs_async_patterns.core.chan_sanitized.call(null,err1);
var state_58895__$1 = state_58895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58895__$1,(9),c,inst_58879);
} else {
if((state_val_58896 === (3))){
var state_58895__$1 = state_58895;
if(cljs.core.truth_(err1)){
var statearr_58902_58967 = state_58895__$1;
(statearr_58902_58967[(1)] = (6));

} else {
var statearr_58903_58968 = state_58895__$1;
(statearr_58903_58968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (12))){
var inst_58889 = (state_58895[(2)]);
var state_58895__$1 = state_58895;
var statearr_58904_58969 = state_58895__$1;
(statearr_58904_58969[(2)] = inst_58889);

(statearr_58904_58969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (2))){
var inst_58874 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_58895__$1 = state_58895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58895__$1,(5),c,inst_58874);
} else {
if((state_val_58896 === (11))){
var state_58895__$1 = state_58895;
var statearr_58905_58970 = state_58895__$1;
(statearr_58905_58970[(2)] = null);

(statearr_58905_58970[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (9))){
var inst_58881 = (state_58895[(2)]);
var state_58895__$1 = state_58895;
var statearr_58906_58971 = state_58895__$1;
(statearr_58906_58971[(2)] = inst_58881);

(statearr_58906_58971[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (5))){
var inst_58876 = (state_58895[(2)]);
var state_58895__$1 = state_58895;
var statearr_58907_58972 = state_58895__$1;
(statearr_58907_58972[(2)] = inst_58876);

(statearr_58907_58972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58896 === (10))){
var inst_58884 = cljs_async_patterns.core.chan_sanitized.call(null,err2);
var state_58895__$1 = state_58895;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58895__$1,(13),c,inst_58884);
} else {
if((state_val_58896 === (8))){
var inst_58891 = (state_58895[(2)]);
var state_58895__$1 = state_58895;
var statearr_58908_58973 = state_58895__$1;
(statearr_58908_58973[(2)] = inst_58891);

(statearr_58908_58973[(1)] = (4));


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
var statearr_58912 = [null,null,null,null,null,null,null];
(statearr_58912[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_58912[(1)] = (1));

return statearr_58912;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_58895){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_58895);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e58913){if((e58913 instanceof Object)){
var ex__8535__auto__ = e58913;
var statearr_58914_58974 = state_58895;
(statearr_58914_58974[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58895);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58975 = state_58895;
state_58895 = G__58975;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_58895){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_58895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_58915 = f__8553__auto__.call(null);
(statearr_58915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_58915;
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
return (function (state_58938){
var state_val_58939 = (state_58938[(1)]);
if((state_val_58939 === (7))){
var state_58938__$1 = state_58938;
var statearr_58940_58976 = state_58938__$1;
(statearr_58940_58976[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (1))){
var state_58938__$1 = state_58938;
if(cljs.core.truth_(res)){
var statearr_58942_58977 = state_58938__$1;
(statearr_58942_58977[(1)] = (2));

} else {
var statearr_58943_58978 = state_58938__$1;
(statearr_58943_58978[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (4))){
var inst_58936 = (state_58938[(2)]);
var state_58938__$1 = state_58938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58938__$1,inst_58936);
} else {
if((state_val_58939 === (13))){
var inst_58929 = (state_58938[(2)]);
var state_58938__$1 = state_58938;
var statearr_58944_58979 = state_58938__$1;
(statearr_58944_58979[(2)] = inst_58929);

(statearr_58944_58979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (6))){
var inst_58922 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_58938__$1 = state_58938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58938__$1,(9),c,inst_58922);
} else {
if((state_val_58939 === (3))){
var state_58938__$1 = state_58938;
if(cljs.core.truth_(err1)){
var statearr_58945_58980 = state_58938__$1;
(statearr_58945_58980[(1)] = (6));

} else {
var statearr_58946_58981 = state_58938__$1;
(statearr_58946_58981[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (12))){
var inst_58932 = (state_58938[(2)]);
var state_58938__$1 = state_58938;
var statearr_58947_58982 = state_58938__$1;
(statearr_58947_58982[(2)] = inst_58932);

(statearr_58947_58982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (2))){
var inst_58917 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_58938__$1 = state_58938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58938__$1,(5),c,inst_58917);
} else {
if((state_val_58939 === (11))){
var state_58938__$1 = state_58938;
var statearr_58948_58983 = state_58938__$1;
(statearr_58948_58983[(2)] = null);

(statearr_58948_58983[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (9))){
var inst_58924 = (state_58938[(2)]);
var state_58938__$1 = state_58938;
var statearr_58949_58984 = state_58938__$1;
(statearr_58949_58984[(2)] = inst_58924);

(statearr_58949_58984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (5))){
var inst_58919 = (state_58938[(2)]);
var state_58938__$1 = state_58938;
var statearr_58950_58985 = state_58938__$1;
(statearr_58950_58985[(2)] = inst_58919);

(statearr_58950_58985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58939 === (10))){
var inst_58927 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_58938__$1 = state_58938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58938__$1,(13),c,inst_58927);
} else {
if((state_val_58939 === (8))){
var inst_58934 = (state_58938[(2)]);
var state_58938__$1 = state_58938;
var statearr_58951_58986 = state_58938__$1;
(statearr_58951_58986[(2)] = inst_58934);

(statearr_58951_58986[(1)] = (4));


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
var statearr_58955 = [null,null,null,null,null,null,null];
(statearr_58955[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_58955[(1)] = (1));

return statearr_58955;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_58938){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_58938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e58956){if((e58956 instanceof Object)){
var ex__8535__auto__ = e58956;
var statearr_58957_58987 = state_58938;
(statearr_58957_58987[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58988 = state_58938;
state_58938 = G__58988;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_58938){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_58938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_58958 = f__8553__auto__.call(null);
(statearr_58958[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_58958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
});
});

cljs_async_patterns.core._GT_3.cljs$lang$maxFixedArity = 2;
/**
 * Jams the first truthy argument of a callback function into its input channel.
 */
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args58989 = [];
var len__7214__auto___59094 = arguments.length;
var i__7215__auto___59095 = (0);
while(true){
if((i__7215__auto___59095 < len__7214__auto___59094)){
args58989.push((arguments[i__7215__auto___59095]));

var G__59096 = (i__7215__auto___59095 + (1));
i__7215__auto___59095 = G__59096;
continue;
} else {
}
break;
}

var G__58991 = args58989.length;
switch (G__58991) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58989.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__59098__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_59016){
var state_val_59017 = (state_59016[(1)]);
if((state_val_59017 === (7))){
var inst_58998 = (state_59016[(2)]);
var state_59016__$1 = state_59016;
var statearr_59018_59099 = state_59016__$1;
(statearr_59018_59099[(2)] = inst_58998);

(statearr_59018_59099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (1))){
var inst_58992 = args;
var state_59016__$1 = (function (){var statearr_59019 = state_59016;
(statearr_59019[(7)] = inst_58992);

return statearr_59019;
})();
var statearr_59020_59100 = state_59016__$1;
(statearr_59020_59100[(2)] = null);

(statearr_59020_59100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (4))){
var state_59016__$1 = state_59016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59016__$1,(7),c,false);
} else {
if((state_val_59017 === (6))){
var inst_59012 = (state_59016[(2)]);
var state_59016__$1 = state_59016;
var statearr_59021_59101 = state_59016__$1;
(statearr_59021_59101[(2)] = inst_59012);

(statearr_59021_59101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (3))){
var inst_59014 = (state_59016[(2)]);
var state_59016__$1 = state_59016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59016__$1,inst_59014);
} else {
if((state_val_59017 === (2))){
var inst_58992 = (state_59016[(7)]);
var inst_58994 = cljs.core.count.call(null,inst_58992);
var inst_58995 = cljs.core._EQ_.call(null,(0),inst_58994);
var state_59016__$1 = state_59016;
if(inst_58995){
var statearr_59022_59102 = state_59016__$1;
(statearr_59022_59102[(1)] = (4));

} else {
var statearr_59023_59103 = state_59016__$1;
(statearr_59023_59103[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (11))){
var inst_59005 = (state_59016[(2)]);
var state_59016__$1 = state_59016;
var statearr_59024_59104 = state_59016__$1;
(statearr_59024_59104[(2)] = inst_59005);

(statearr_59024_59104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (9))){
var inst_58992 = (state_59016[(7)]);
var inst_59007 = cljs.core.rest.call(null,inst_58992);
var inst_58992__$1 = inst_59007;
var state_59016__$1 = (function (){var statearr_59025 = state_59016;
(statearr_59025[(7)] = inst_58992__$1);

return statearr_59025;
})();
var statearr_59026_59105 = state_59016__$1;
(statearr_59026_59105[(2)] = null);

(statearr_59026_59105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (5))){
var inst_58992 = (state_59016[(7)]);
var inst_59000 = cljs.core.first.call(null,inst_58992);
var state_59016__$1 = state_59016;
if(cljs.core.truth_(inst_59000)){
var statearr_59027_59106 = state_59016__$1;
(statearr_59027_59106[(1)] = (8));

} else {
var statearr_59028_59107 = state_59016__$1;
(statearr_59028_59107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (10))){
var inst_59010 = (state_59016[(2)]);
var state_59016__$1 = state_59016;
var statearr_59029_59108 = state_59016__$1;
(statearr_59029_59108[(2)] = inst_59010);

(statearr_59029_59108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59017 === (8))){
var inst_58992 = (state_59016[(7)]);
var inst_59002 = cljs_async_patterns.core.chan_sanitized.call(null,inst_58992);
var inst_59003 = cljs.core.first.call(null,inst_59002);
var state_59016__$1 = state_59016;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59016__$1,(11),c,inst_59003);
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
var statearr_59033 = [null,null,null,null,null,null,null,null];
(statearr_59033[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_59033[(1)] = (1));

return statearr_59033;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_59016){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_59016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e59034){if((e59034 instanceof Object)){
var ex__8535__auto__ = e59034;
var statearr_59035_59109 = state_59016;
(statearr_59035_59109[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59110 = state_59016;
state_59016 = G__59110;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_59016){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_59016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_59036 = f__8553__auto__.call(null);
(statearr_59036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_59036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__59098 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59111__i = 0, G__59111__a = new Array(arguments.length -  0);
while (G__59111__i < G__59111__a.length) {G__59111__a[G__59111__i] = arguments[G__59111__i + 0]; ++G__59111__i;}
  args = new cljs.core.IndexedSeq(G__59111__a,0);
} 
return G__59098__delegate.call(this,args);};
G__59098.cljs$lang$maxFixedArity = 0;
G__59098.cljs$lang$applyTo = (function (arglist__59112){
var args = cljs.core.seq(arglist__59112);
return G__59098__delegate(args);
});
G__59098.cljs$core$IFn$_invoke$arity$variadic = G__59098__delegate;
return G__59098;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__59113__delegate = function (args){
var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__){
return (function (state_59069){
var state_val_59070 = (state_59069[(1)]);
if((state_val_59070 === (7))){
var inst_59043 = (state_59069[(2)]);
var state_59069__$1 = state_59069;
var statearr_59071_59114 = state_59069__$1;
(statearr_59071_59114[(2)] = inst_59043);

(statearr_59071_59114[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (1))){
var inst_59037 = args;
var state_59069__$1 = (function (){var statearr_59072 = state_59069;
(statearr_59072[(7)] = inst_59037);

return statearr_59072;
})();
var statearr_59073_59115 = state_59069__$1;
(statearr_59073_59115[(2)] = null);

(statearr_59073_59115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (4))){
var state_59069__$1 = state_59069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59069__$1,(7),c,E_msg);
} else {
if((state_val_59070 === (15))){
var inst_59056 = (state_59069[(2)]);
var state_59069__$1 = state_59069;
var statearr_59074_59116 = state_59069__$1;
(statearr_59074_59116[(2)] = inst_59056);

(statearr_59074_59116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (13))){
var inst_59058 = (state_59069[(2)]);
var state_59069__$1 = state_59069;
var statearr_59075_59117 = state_59069__$1;
(statearr_59075_59117[(2)] = inst_59058);

(statearr_59075_59117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (6))){
var inst_59065 = (state_59069[(2)]);
var state_59069__$1 = state_59069;
var statearr_59076_59118 = state_59069__$1;
(statearr_59076_59118[(2)] = inst_59065);

(statearr_59076_59118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (3))){
var inst_59067 = (state_59069[(2)]);
var state_59069__$1 = state_59069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59069__$1,inst_59067);
} else {
if((state_val_59070 === (12))){
var inst_59037 = (state_59069[(7)]);
var inst_59053 = cljs_async_patterns.core.chan_sanitized.call(null,inst_59037);
var inst_59054 = cljs.core.first.call(null,inst_59053);
var state_59069__$1 = state_59069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59069__$1,(15),c,inst_59054);
} else {
if((state_val_59070 === (2))){
var inst_59037 = (state_59069[(7)]);
var inst_59039 = cljs.core.count.call(null,inst_59037);
var inst_59040 = cljs.core._EQ_.call(null,(0),inst_59039);
var state_59069__$1 = state_59069;
if(inst_59040){
var statearr_59077_59119 = state_59069__$1;
(statearr_59077_59119[(1)] = (4));

} else {
var statearr_59078_59120 = state_59069__$1;
(statearr_59078_59120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (11))){
var state_59069__$1 = state_59069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_59069__$1,(14),c,E_msg);
} else {
if((state_val_59070 === (9))){
var inst_59037 = (state_59069[(7)]);
var inst_59060 = cljs.core.rest.call(null,inst_59037);
var inst_59037__$1 = inst_59060;
var state_59069__$1 = (function (){var statearr_59079 = state_59069;
(statearr_59079[(7)] = inst_59037__$1);

return statearr_59079;
})();
var statearr_59080_59121 = state_59069__$1;
(statearr_59080_59121[(2)] = null);

(statearr_59080_59121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (5))){
var inst_59037 = (state_59069[(7)]);
var inst_59045 = cljs.core.first.call(null,inst_59037);
var state_59069__$1 = state_59069;
if(cljs.core.truth_(inst_59045)){
var statearr_59081_59122 = state_59069__$1;
(statearr_59081_59122[(1)] = (8));

} else {
var statearr_59082_59123 = state_59069__$1;
(statearr_59082_59123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (14))){
var inst_59051 = (state_59069[(2)]);
var state_59069__$1 = state_59069;
var statearr_59083_59124 = state_59069__$1;
(statearr_59083_59124[(2)] = inst_59051);

(statearr_59083_59124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (10))){
var inst_59063 = (state_59069[(2)]);
var state_59069__$1 = state_59069;
var statearr_59084_59125 = state_59069__$1;
(statearr_59084_59125[(2)] = inst_59063);

(statearr_59084_59125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59070 === (8))){
var inst_59037 = (state_59069[(7)]);
var inst_59047 = cljs.core.count.call(null,inst_59037);
var inst_59048 = (inst_59047 > (1));
var state_59069__$1 = state_59069;
if(cljs.core.truth_(inst_59048)){
var statearr_59085_59126 = state_59069__$1;
(statearr_59085_59126[(1)] = (11));

} else {
var statearr_59086_59127 = state_59069__$1;
(statearr_59086_59127[(1)] = (12));

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
var statearr_59090 = [null,null,null,null,null,null,null,null];
(statearr_59090[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_59090[(1)] = (1));

return statearr_59090;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_59069){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_59069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e59091){if((e59091 instanceof Object)){
var ex__8535__auto__ = e59091;
var statearr_59092_59128 = state_59069;
(statearr_59092_59128[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59129 = state_59069;
state_59069 = G__59129;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_59069){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_59069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__))
})();
var state__8554__auto__ = (function (){var statearr_59093 = f__8553__auto__.call(null);
(statearr_59093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_59093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__))
);

return c__8552__auto__;
};
var G__59113 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59130__i = 0, G__59130__a = new Array(arguments.length -  0);
while (G__59130__i < G__59130__a.length) {G__59130__a[G__59130__i] = arguments[G__59130__i + 0]; ++G__59130__i;}
  args = new cljs.core.IndexedSeq(G__59130__a,0);
} 
return G__59113__delegate.call(this,args);};
G__59113.cljs$lang$maxFixedArity = 0;
G__59113.cljs$lang$applyTo = (function (arglist__59131){
var args = cljs.core.seq(arglist__59131);
return G__59113__delegate(args);
});
G__59113.cljs$core$IFn$_invoke$arity$variadic = G__59113__delegate;
return G__59113;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7221__auto__ = [];
var len__7214__auto___59169 = arguments.length;
var i__7215__auto___59170 = (0);
while(true){
if((i__7215__auto___59170 < len__7214__auto___59169)){
args__7221__auto__.push((arguments[i__7215__auto___59170]));

var G__59171 = (i__7215__auto___59170 + (1));
i__7215__auto___59170 = G__59171;
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
cljs_async_patterns.core._LT_print.call(null,(function (){var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__,minimist,argv,e,arg){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__,minimist,argv,e,arg){
return (function (state_59141){
var state_val_59142 = (state_59141[(1)]);
if((state_val_59142 === (1))){
var inst_59134 = cljs.core.async.chan.call(null,(1));
var inst_59135 = cljs.nodejs.require.call(null,"fs");
var inst_59136 = cljs_async_patterns.core._GT_2.call(null,inst_59134);
var inst_59137 = inst_59135.readFile("/home/george/12","utf8",inst_59136);
var state_59141__$1 = (function (){var statearr_59143 = state_59141;
(statearr_59143[(7)] = inst_59137);

return statearr_59143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59141__$1,(2),inst_59134);
} else {
if((state_val_59142 === (2))){
var inst_59139 = (state_59141[(2)]);
var state_59141__$1 = state_59141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59141__$1,inst_59139);
} else {
return null;
}
}
});})(c__8552__auto__,minimist,argv,e,arg))
;
return ((function (switch__8531__auto__,c__8552__auto__,minimist,argv,e,arg){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_59147 = [null,null,null,null,null,null,null,null];
(statearr_59147[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_59147[(1)] = (1));

return statearr_59147;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_59141){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_59141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e59148){if((e59148 instanceof Object)){
var ex__8535__auto__ = e59148;
var statearr_59149_59172 = state_59141;
(statearr_59149_59172[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59173 = state_59141;
state_59141 = G__59173;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_59141){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_59141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__,minimist,argv,e,arg))
})();
var state__8554__auto__ = (function (){var statearr_59150 = f__8553__auto__.call(null);
(statearr_59150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_59150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__,minimist,argv,e,arg))
);

return c__8552__auto__;
})());

cljs_async_patterns.core._LT_print.call(null,(function (){var c__8552__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8552__auto__,minimist,argv,e,arg){
return (function (){
var f__8553__auto__ = (function (){var switch__8531__auto__ = ((function (c__8552__auto__,minimist,argv,e,arg){
return (function (state_59159){
var state_val_59160 = (state_59159[(1)]);
if((state_val_59160 === (1))){
var inst_59152 = cljs.core.async.chan.call(null,(1));
var inst_59153 = cljs.nodejs.require.call(null,"fs");
var inst_59154 = cljs_async_patterns.core._GT_2.call(null,inst_59152,"ERROR: SE, mathize, visions.");
var inst_59155 = inst_59153.readFile("/home/george/12","utf8",inst_59154);
var state_59159__$1 = (function (){var statearr_59161 = state_59159;
(statearr_59161[(7)] = inst_59155);

return statearr_59161;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59159__$1,(2),inst_59152);
} else {
if((state_val_59160 === (2))){
var inst_59157 = (state_59159[(2)]);
var state_59159__$1 = state_59159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59159__$1,inst_59157);
} else {
return null;
}
}
});})(c__8552__auto__,minimist,argv,e,arg))
;
return ((function (switch__8531__auto__,c__8552__auto__,minimist,argv,e,arg){
return (function() {
var cljs_async_patterns$core$state_machine__8532__auto__ = null;
var cljs_async_patterns$core$state_machine__8532__auto____0 = (function (){
var statearr_59165 = [null,null,null,null,null,null,null,null];
(statearr_59165[(0)] = cljs_async_patterns$core$state_machine__8532__auto__);

(statearr_59165[(1)] = (1));

return statearr_59165;
});
var cljs_async_patterns$core$state_machine__8532__auto____1 = (function (state_59159){
while(true){
var ret_value__8533__auto__ = (function (){try{while(true){
var result__8534__auto__ = switch__8531__auto__.call(null,state_59159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8534__auto__;
}
break;
}
}catch (e59166){if((e59166 instanceof Object)){
var ex__8535__auto__ = e59166;
var statearr_59167_59174 = state_59159;
(statearr_59167_59174[(5)] = ex__8535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59175 = state_59159;
state_59159 = G__59175;
continue;
} else {
return ret_value__8533__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__8532__auto__ = function(state_59159){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__8532__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__8532__auto____1.call(this,state_59159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__8532__auto____0;
cljs_async_patterns$core$state_machine__8532__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__8532__auto____1;
return cljs_async_patterns$core$state_machine__8532__auto__;
})()
;})(switch__8531__auto__,c__8552__auto__,minimist,argv,e,arg))
})();
var state__8554__auto__ = (function (){var statearr_59168 = f__8553__auto__.call(null);
(statearr_59168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8552__auto__);

return statearr_59168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8554__auto__);
});})(c__8552__auto__,minimist,argv,e,arg))
);

return c__8552__auto__;
})());

return cljs.core.println.call(null,argv);
});

cljs_async_patterns.core._main.cljs$lang$maxFixedArity = (0);

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq59132){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59132));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map