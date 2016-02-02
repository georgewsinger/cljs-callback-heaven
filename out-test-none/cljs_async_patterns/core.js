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
return (function (state_13772){
var state_val_13773 = (state_13772[(1)]);
if((state_val_13773 === (1))){
var state_13772__$1 = state_13772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13772__$1,(2),c);
} else {
if((state_val_13773 === (2))){
var inst_13769 = (state_13772[(2)]);
var inst_13770 = cljs.core.println.call(null,inst_13769);
var state_13772__$1 = state_13772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13772__$1,inst_13770);
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
var statearr_13777 = [null,null,null,null,null,null,null];
(statearr_13777[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__);

(statearr_13777[(1)] = (1));

return statearr_13777;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1 = (function (state_13772){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_13772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e13778){if((e13778 instanceof Object)){
var ex__9301__auto__ = e13778;
var statearr_13779_13781 = state_13772;
(statearr_13779_13781[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13782 = state_13772;
state_13772 = G__13782;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__ = function(state_13772){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1.call(this,state_13772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_13780 = f__9319__auto__.call(null);
(statearr_13780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_13780;
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
cljs_async_patterns.core._GT_1 = (function cljs_async_patterns$core$_GT_1(var_args){
var args13783 = [];
var len__7018__auto___13822 = arguments.length;
var i__7019__auto___13823 = (0);
while(true){
if((i__7019__auto___13823 < len__7018__auto___13822)){
args13783.push((arguments[i__7019__auto___13823]));

var G__13824 = (i__7019__auto___13823 + (1));
i__7019__auto___13823 = G__13824;
continue;
} else {
}
break;
}

var G__13785 = args13783.length;
switch (G__13785) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13783.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_13790){
var state_val_13791 = (state_13790[(1)]);
if((state_val_13791 === (1))){
var inst_13786 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_13790__$1 = state_13790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13790__$1,(2),c,inst_13786);
} else {
if((state_val_13791 === (2))){
var inst_13788 = (state_13790[(2)]);
var state_13790__$1 = state_13790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13790__$1,inst_13788);
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
var statearr_13795 = [null,null,null,null,null,null,null];
(statearr_13795[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_13795[(1)] = (1));

return statearr_13795;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_13790){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_13790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e13796){if((e13796 instanceof Object)){
var ex__9301__auto__ = e13796;
var statearr_13797_13826 = state_13790;
(statearr_13797_13826[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13827 = state_13790;
state_13790 = G__13827;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_13790){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_13790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_13798 = f__9319__auto__.call(null);
(statearr_13798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_13798;
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
return (function (state_13809){
var state_val_13810 = (state_13809[(1)]);
if((state_val_13810 === (1))){
var state_13809__$1 = state_13809;
if(cljs.core.truth_(arg1)){
var statearr_13811_13828 = state_13809__$1;
(statearr_13811_13828[(1)] = (2));

} else {
var statearr_13812_13829 = state_13809__$1;
(statearr_13812_13829[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (2))){
var inst_13800 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13809__$1,(5),c,inst_13800);
} else {
if((state_val_13810 === (3))){
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13809__$1,(6),c,E_msg);
} else {
if((state_val_13810 === (4))){
var inst_13807 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13809__$1,inst_13807);
} else {
if((state_val_13810 === (5))){
var inst_13802 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13813_13830 = state_13809__$1;
(statearr_13813_13830[(2)] = inst_13802);

(statearr_13813_13830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13810 === (6))){
var inst_13805 = (state_13809[(2)]);
var state_13809__$1 = state_13809;
var statearr_13814_13831 = state_13809__$1;
(statearr_13814_13831[(2)] = inst_13805);

(statearr_13814_13831[(1)] = (4));


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
var statearr_13818 = [null,null,null,null,null,null,null];
(statearr_13818[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_13818[(1)] = (1));

return statearr_13818;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_13809){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_13809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e13819){if((e13819 instanceof Object)){
var ex__9301__auto__ = e13819;
var statearr_13820_13832 = state_13809;
(statearr_13820_13832[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13833 = state_13809;
state_13809 = G__13833;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_13809){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_13809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_13821 = f__9319__auto__.call(null);
(statearr_13821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_13821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_1.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_2 = (function cljs_async_patterns$core$_GT_2(var_args){
var args13834 = [];
var len__7018__auto___13901 = arguments.length;
var i__7019__auto___13902 = (0);
while(true){
if((i__7019__auto___13902 < len__7018__auto___13901)){
args13834.push((arguments[i__7019__auto___13902]));

var G__13903 = (i__7019__auto___13902 + (1));
i__7019__auto___13902 = G__13903;
continue;
} else {
}
break;
}

var G__13836 = args13834.length;
switch (G__13836) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13834.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_13852){
var state_val_13853 = (state_13852[(1)]);
if((state_val_13853 === (1))){
var state_13852__$1 = state_13852;
if(cljs.core.truth_(err)){
var statearr_13854_13905 = state_13852__$1;
(statearr_13854_13905[(1)] = (2));

} else {
var statearr_13855_13906 = state_13852__$1;
(statearr_13855_13906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13853 === (2))){
var inst_13838 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_13852__$1 = state_13852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13852__$1,(5),c,inst_13838);
} else {
if((state_val_13853 === (3))){
var state_13852__$1 = state_13852;
var statearr_13856_13907 = state_13852__$1;
(statearr_13856_13907[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13853 === (4))){
var inst_13850 = (state_13852[(2)]);
var state_13852__$1 = state_13852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13852__$1,inst_13850);
} else {
if((state_val_13853 === (5))){
var inst_13840 = (state_13852[(2)]);
var state_13852__$1 = state_13852;
var statearr_13858_13908 = state_13852__$1;
(statearr_13858_13908[(2)] = inst_13840);

(statearr_13858_13908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13853 === (6))){
var inst_13843 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_13852__$1 = state_13852;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13852__$1,(9),c,inst_13843);
} else {
if((state_val_13853 === (7))){
var state_13852__$1 = state_13852;
var statearr_13859_13909 = state_13852__$1;
(statearr_13859_13909[(2)] = null);

(statearr_13859_13909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13853 === (8))){
var inst_13848 = (state_13852[(2)]);
var state_13852__$1 = state_13852;
var statearr_13860_13910 = state_13852__$1;
(statearr_13860_13910[(2)] = inst_13848);

(statearr_13860_13910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13853 === (9))){
var inst_13845 = (state_13852[(2)]);
var state_13852__$1 = state_13852;
var statearr_13861_13911 = state_13852__$1;
(statearr_13861_13911[(2)] = inst_13845);

(statearr_13861_13911[(1)] = (8));


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
var statearr_13865 = [null,null,null,null,null,null,null];
(statearr_13865[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_13865[(1)] = (1));

return statearr_13865;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_13852){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_13852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e13866){if((e13866 instanceof Object)){
var ex__9301__auto__ = e13866;
var statearr_13867_13912 = state_13852;
(statearr_13867_13912[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13913 = state_13852;
state_13852 = G__13913;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_13852){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_13852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_13868 = f__9319__auto__.call(null);
(statearr_13868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_13868;
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
return (function (state_13884){
var state_val_13885 = (state_13884[(1)]);
if((state_val_13885 === (1))){
var state_13884__$1 = state_13884;
if(cljs.core.truth_(err)){
var statearr_13886_13914 = state_13884__$1;
(statearr_13886_13914[(1)] = (2));

} else {
var statearr_13887_13915 = state_13884__$1;
(statearr_13887_13915[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (2))){
var inst_13870 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_13884__$1 = state_13884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13884__$1,(5),c,inst_13870);
} else {
if((state_val_13885 === (3))){
var state_13884__$1 = state_13884;
var statearr_13888_13916 = state_13884__$1;
(statearr_13888_13916[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (4))){
var inst_13882 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13884__$1,inst_13882);
} else {
if((state_val_13885 === (5))){
var inst_13872 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13890_13917 = state_13884__$1;
(statearr_13890_13917[(2)] = inst_13872);

(statearr_13890_13917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (6))){
var inst_13875 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_13884__$1 = state_13884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13884__$1,(9),c,inst_13875);
} else {
if((state_val_13885 === (7))){
var state_13884__$1 = state_13884;
var statearr_13891_13918 = state_13884__$1;
(statearr_13891_13918[(2)] = null);

(statearr_13891_13918[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (8))){
var inst_13880 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13892_13919 = state_13884__$1;
(statearr_13892_13919[(2)] = inst_13880);

(statearr_13892_13919[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13885 === (9))){
var inst_13877 = (state_13884[(2)]);
var state_13884__$1 = state_13884;
var statearr_13893_13920 = state_13884__$1;
(statearr_13893_13920[(2)] = inst_13877);

(statearr_13893_13920[(1)] = (8));


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
var statearr_13897 = [null,null,null,null,null,null,null];
(statearr_13897[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_13897[(1)] = (1));

return statearr_13897;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_13884){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_13884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e13898){if((e13898 instanceof Object)){
var ex__9301__auto__ = e13898;
var statearr_13899_13921 = state_13884;
(statearr_13899_13921[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13922 = state_13884;
state_13884 = G__13922;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_13884){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_13884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_13900 = f__9319__auto__.call(null);
(statearr_13900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_13900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_2.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._GT_3 = (function cljs_async_patterns$core$_GT_3(c){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs_async_patterns.core.E_msg], null).call(null,(function (err1,err2,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_14074){
var state_val_14075 = (state_14074[(1)]);
if((state_val_14075 === (7))){
var state_14074__$1 = state_14074;
var statearr_14076_14095 = state_14074__$1;
(statearr_14076_14095[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (1))){
var state_14074__$1 = state_14074;
if(cljs.core.truth_(err1)){
var statearr_14078_14096 = state_14074__$1;
(statearr_14078_14096[(1)] = (2));

} else {
var statearr_14079_14097 = state_14074__$1;
(statearr_14079_14097[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (4))){
var inst_14072 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14074__$1,inst_14072);
} else {
if((state_val_14075 === (13))){
var inst_14065 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14080_14098 = state_14074__$1;
(statearr_14080_14098[(2)] = inst_14065);

(statearr_14080_14098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (6))){
var inst_14058 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14074__$1,(9),c,inst_14058);
} else {
if((state_val_14075 === (3))){
var state_14074__$1 = state_14074;
if(cljs.core.truth_(err2)){
var statearr_14081_14099 = state_14074__$1;
(statearr_14081_14099[(1)] = (6));

} else {
var statearr_14082_14100 = state_14074__$1;
(statearr_14082_14100[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (12))){
var inst_14068 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14083_14101 = state_14074__$1;
(statearr_14083_14101[(2)] = inst_14068);

(statearr_14083_14101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (2))){
var inst_14053 = cljs_async_patterns.core.chan_sanitized.call(null,cljs_async_patterns.core.E_msg);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14074__$1,(5),c,inst_14053);
} else {
if((state_val_14075 === (11))){
var state_14074__$1 = state_14074;
var statearr_14084_14102 = state_14074__$1;
(statearr_14084_14102[(2)] = null);

(statearr_14084_14102[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (9))){
var inst_14060 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14085_14103 = state_14074__$1;
(statearr_14085_14103[(2)] = inst_14060);

(statearr_14085_14103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (5))){
var inst_14055 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14086_14104 = state_14074__$1;
(statearr_14086_14104[(2)] = inst_14055);

(statearr_14086_14104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14075 === (10))){
var inst_14063 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_14074__$1 = state_14074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14074__$1,(13),c,inst_14063);
} else {
if((state_val_14075 === (8))){
var inst_14070 = (state_14074[(2)]);
var state_14074__$1 = state_14074;
var statearr_14087_14105 = state_14074__$1;
(statearr_14087_14105[(2)] = inst_14070);

(statearr_14087_14105[(1)] = (4));


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
var statearr_14091 = [null,null,null,null,null,null,null];
(statearr_14091[(0)] = cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__);

(statearr_14091[(1)] = (1));

return statearr_14091;
});
var cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____1 = (function (state_14074){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14092){if((e14092 instanceof Object)){
var ex__9301__auto__ = e14092;
var statearr_14093_14106 = state_14074;
(statearr_14093_14106[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14107 = state_14074;
state_14074 = G__14107;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__ = function(state_14074){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____1.call(this,state_14074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____0;
cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto____1;
return cljs_async_patterns$core$_GT_3_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_14094 = f__9319__auto__.call(null);
(statearr_14094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
}));
});
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args14108 = [];
var len__7018__auto___14213 = arguments.length;
var i__7019__auto___14214 = (0);
while(true){
if((i__7019__auto___14214 < len__7018__auto___14213)){
args14108.push((arguments[i__7019__auto___14214]));

var G__14215 = (i__7019__auto___14214 + (1));
i__7019__auto___14214 = G__14215;
continue;
} else {
}
break;
}

var G__14110 = args14108.length;
switch (G__14110) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14108.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__14217__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_14135){
var state_val_14136 = (state_14135[(1)]);
if((state_val_14136 === (7))){
var inst_14117 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14137_14218 = state_14135__$1;
(statearr_14137_14218[(2)] = inst_14117);

(statearr_14137_14218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (1))){
var inst_14111 = args;
var state_14135__$1 = (function (){var statearr_14138 = state_14135;
(statearr_14138[(7)] = inst_14111);

return statearr_14138;
})();
var statearr_14139_14219 = state_14135__$1;
(statearr_14139_14219[(2)] = null);

(statearr_14139_14219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (4))){
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14135__$1,(7),c,false);
} else {
if((state_val_14136 === (6))){
var inst_14131 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14140_14220 = state_14135__$1;
(statearr_14140_14220[(2)] = inst_14131);

(statearr_14140_14220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (3))){
var inst_14133 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14135__$1,inst_14133);
} else {
if((state_val_14136 === (2))){
var inst_14111 = (state_14135[(7)]);
var inst_14113 = cljs.core.count.call(null,inst_14111);
var inst_14114 = cljs.core._EQ_.call(null,(0),inst_14113);
var state_14135__$1 = state_14135;
if(inst_14114){
var statearr_14141_14221 = state_14135__$1;
(statearr_14141_14221[(1)] = (4));

} else {
var statearr_14142_14222 = state_14135__$1;
(statearr_14142_14222[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (11))){
var inst_14124 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14143_14223 = state_14135__$1;
(statearr_14143_14223[(2)] = inst_14124);

(statearr_14143_14223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (9))){
var inst_14111 = (state_14135[(7)]);
var inst_14126 = cljs.core.rest.call(null,inst_14111);
var inst_14111__$1 = inst_14126;
var state_14135__$1 = (function (){var statearr_14144 = state_14135;
(statearr_14144[(7)] = inst_14111__$1);

return statearr_14144;
})();
var statearr_14145_14224 = state_14135__$1;
(statearr_14145_14224[(2)] = null);

(statearr_14145_14224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (5))){
var inst_14111 = (state_14135[(7)]);
var inst_14119 = cljs.core.first.call(null,inst_14111);
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14119)){
var statearr_14146_14225 = state_14135__$1;
(statearr_14146_14225[(1)] = (8));

} else {
var statearr_14147_14226 = state_14135__$1;
(statearr_14147_14226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (10))){
var inst_14129 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14148_14227 = state_14135__$1;
(statearr_14148_14227[(2)] = inst_14129);

(statearr_14148_14227[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (8))){
var inst_14111 = (state_14135[(7)]);
var inst_14121 = cljs_async_patterns.core.chan_sanitized.call(null,inst_14111);
var inst_14122 = cljs.core.first.call(null,inst_14121);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14135__$1,(11),c,inst_14122);
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
var statearr_14152 = [null,null,null,null,null,null,null,null];
(statearr_14152[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_14152[(1)] = (1));

return statearr_14152;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_14135){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14153){if((e14153 instanceof Object)){
var ex__9301__auto__ = e14153;
var statearr_14154_14228 = state_14135;
(statearr_14154_14228[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14229 = state_14135;
state_14135 = G__14229;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_14135){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_14135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_14155 = f__9319__auto__.call(null);
(statearr_14155[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__14217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14230__i = 0, G__14230__a = new Array(arguments.length -  0);
while (G__14230__i < G__14230__a.length) {G__14230__a[G__14230__i] = arguments[G__14230__i + 0]; ++G__14230__i;}
  args = new cljs.core.IndexedSeq(G__14230__a,0);
} 
return G__14217__delegate.call(this,args);};
G__14217.cljs$lang$maxFixedArity = 0;
G__14217.cljs$lang$applyTo = (function (arglist__14231){
var args = cljs.core.seq(arglist__14231);
return G__14217__delegate(args);
});
G__14217.cljs$core$IFn$_invoke$arity$variadic = G__14217__delegate;
return G__14217;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__14232__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_14188){
var state_val_14189 = (state_14188[(1)]);
if((state_val_14189 === (7))){
var inst_14162 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14190_14233 = state_14188__$1;
(statearr_14190_14233[(2)] = inst_14162);

(statearr_14190_14233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (1))){
var inst_14156 = args;
var state_14188__$1 = (function (){var statearr_14191 = state_14188;
(statearr_14191[(7)] = inst_14156);

return statearr_14191;
})();
var statearr_14192_14234 = state_14188__$1;
(statearr_14192_14234[(2)] = null);

(statearr_14192_14234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (4))){
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14188__$1,(7),c,E_msg);
} else {
if((state_val_14189 === (15))){
var inst_14175 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14193_14235 = state_14188__$1;
(statearr_14193_14235[(2)] = inst_14175);

(statearr_14193_14235[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (13))){
var inst_14177 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14194_14236 = state_14188__$1;
(statearr_14194_14236[(2)] = inst_14177);

(statearr_14194_14236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (6))){
var inst_14184 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14195_14237 = state_14188__$1;
(statearr_14195_14237[(2)] = inst_14184);

(statearr_14195_14237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (3))){
var inst_14186 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14188__$1,inst_14186);
} else {
if((state_val_14189 === (12))){
var inst_14156 = (state_14188[(7)]);
var inst_14172 = cljs_async_patterns.core.chan_sanitized.call(null,inst_14156);
var inst_14173 = cljs.core.first.call(null,inst_14172);
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14188__$1,(15),c,inst_14173);
} else {
if((state_val_14189 === (2))){
var inst_14156 = (state_14188[(7)]);
var inst_14158 = cljs.core.count.call(null,inst_14156);
var inst_14159 = cljs.core._EQ_.call(null,(0),inst_14158);
var state_14188__$1 = state_14188;
if(inst_14159){
var statearr_14196_14238 = state_14188__$1;
(statearr_14196_14238[(1)] = (4));

} else {
var statearr_14197_14239 = state_14188__$1;
(statearr_14197_14239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (11))){
var state_14188__$1 = state_14188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14188__$1,(14),c,E_msg);
} else {
if((state_val_14189 === (9))){
var inst_14156 = (state_14188[(7)]);
var inst_14179 = cljs.core.rest.call(null,inst_14156);
var inst_14156__$1 = inst_14179;
var state_14188__$1 = (function (){var statearr_14198 = state_14188;
(statearr_14198[(7)] = inst_14156__$1);

return statearr_14198;
})();
var statearr_14199_14240 = state_14188__$1;
(statearr_14199_14240[(2)] = null);

(statearr_14199_14240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (5))){
var inst_14156 = (state_14188[(7)]);
var inst_14164 = cljs.core.first.call(null,inst_14156);
var state_14188__$1 = state_14188;
if(cljs.core.truth_(inst_14164)){
var statearr_14200_14241 = state_14188__$1;
(statearr_14200_14241[(1)] = (8));

} else {
var statearr_14201_14242 = state_14188__$1;
(statearr_14201_14242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (14))){
var inst_14170 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14202_14243 = state_14188__$1;
(statearr_14202_14243[(2)] = inst_14170);

(statearr_14202_14243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (10))){
var inst_14182 = (state_14188[(2)]);
var state_14188__$1 = state_14188;
var statearr_14203_14244 = state_14188__$1;
(statearr_14203_14244[(2)] = inst_14182);

(statearr_14203_14244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14189 === (8))){
var inst_14156 = (state_14188[(7)]);
var inst_14166 = cljs.core.count.call(null,inst_14156);
var inst_14167 = (inst_14166 > (1));
var state_14188__$1 = state_14188;
if(cljs.core.truth_(inst_14167)){
var statearr_14204_14245 = state_14188__$1;
(statearr_14204_14245[(1)] = (11));

} else {
var statearr_14205_14246 = state_14188__$1;
(statearr_14205_14246[(1)] = (12));

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
var statearr_14209 = [null,null,null,null,null,null,null,null];
(statearr_14209[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_14209[(1)] = (1));

return statearr_14209;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_14188){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14210){if((e14210 instanceof Object)){
var ex__9301__auto__ = e14210;
var statearr_14211_14247 = state_14188;
(statearr_14211_14247[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14248 = state_14188;
state_14188 = G__14248;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_14212 = f__9319__auto__.call(null);
(statearr_14212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__14232 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14249__i = 0, G__14249__a = new Array(arguments.length -  0);
while (G__14249__i < G__14249__a.length) {G__14249__a[G__14249__i] = arguments[G__14249__i + 0]; ++G__14249__i;}
  args = new cljs.core.IndexedSeq(G__14249__a,0);
} 
return G__14232__delegate.call(this,args);};
G__14232.cljs$lang$maxFixedArity = 0;
G__14232.cljs$lang$applyTo = (function (arglist__14250){
var args = cljs.core.seq(arglist__14250);
return G__14232__delegate(args);
});
G__14232.cljs$core$IFn$_invoke$arity$variadic = G__14232__delegate;
return G__14232;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___14269 = arguments.length;
var i__7019__auto___14270 = (0);
while(true){
if((i__7019__auto___14270 < len__7018__auto___14269)){
args__7025__auto__.push((arguments[i__7019__auto___14270]));

var G__14271 = (i__7019__auto___14270 + (1));
i__7019__auto___14270 = G__14271;
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
cljs_async_patterns.core._LT_print.call(null,(function (){var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,minimist,argv,e,arg){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,minimist,argv,e,arg){
return (function (state_14259){
var state_val_14260 = (state_14259[(1)]);
if((state_val_14260 === (1))){
var inst_14252 = cljs.core.async.chan.call(null,(1));
var inst_14253 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.list(new cljs.core.Symbol("cljs-async-patterns.core",">?","cljs-async-patterns.core/>?",-1829810227,null),new cljs.core.Symbol(null,"c","c",-122660552,null),"ERROR:")], null);
var inst_14254 = cljs.core.list(new cljs.core.Symbol(null,".readFile",".readFile",263604991,null),cljs.core.list(new cljs.core.Symbol("node","require","node/require",1143936540,null),"fs"),"/home/george/1","utf8",new cljs.core.Symbol(null,"_","_",-1201019570,null));
var inst_14255 = cljs.core.replace.call(null,inst_14253,inst_14254);
var state_14259__$1 = (function (){var statearr_14261 = state_14259;
(statearr_14261[(7)] = inst_14255);

return statearr_14261;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14259__$1,(2),inst_14252);
} else {
if((state_val_14260 === (2))){
var inst_14257 = (state_14259[(2)]);
var state_14259__$1 = state_14259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14259__$1,inst_14257);
} else {
return null;
}
}
});})(c__9318__auto__,minimist,argv,e,arg))
;
return ((function (switch__9297__auto__,c__9318__auto__,minimist,argv,e,arg){
return (function() {
var cljs_async_patterns$core$state_machine__9298__auto__ = null;
var cljs_async_patterns$core$state_machine__9298__auto____0 = (function (){
var statearr_14265 = [null,null,null,null,null,null,null,null];
(statearr_14265[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_14265[(1)] = (1));

return statearr_14265;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_14259){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_14259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e14266){if((e14266 instanceof Object)){
var ex__9301__auto__ = e14266;
var statearr_14267_14272 = state_14259;
(statearr_14267_14272[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14273 = state_14259;
state_14259 = G__14273;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_14259){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_14259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,minimist,argv,e,arg))
})();
var state__9320__auto__ = (function (){var statearr_14268 = f__9319__auto__.call(null);
(statearr_14268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_14268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,minimist,argv,e,arg))
);

return c__9318__auto__;
})());

return cljs.core.println.call(null,argv);
});

cljs_async_patterns.core._main.cljs$lang$maxFixedArity = (0);

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq14251){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14251));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map