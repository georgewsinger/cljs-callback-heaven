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
return (function (state_28645){
var state_val_28646 = (state_28645[(1)]);
if((state_val_28646 === (1))){
var state_28645__$1 = state_28645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28645__$1,(2),c);
} else {
if((state_val_28646 === (2))){
var inst_28642 = (state_28645[(2)]);
var inst_28643 = cljs.core.println.call(null,inst_28642);
var state_28645__$1 = state_28645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28645__$1,inst_28643);
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
var statearr_28650 = [null,null,null,null,null,null,null];
(statearr_28650[(0)] = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__);

(statearr_28650[(1)] = (1));

return statearr_28650;
});
var cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1 = (function (state_28645){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28651){if((e28651 instanceof Object)){
var ex__9301__auto__ = e28651;
var statearr_28652_28654 = state_28645;
(statearr_28652_28654[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28655 = state_28645;
state_28645 = G__28655;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__ = function(state_28645){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1.call(this,state_28645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____0;
cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto____1;
return cljs_async_patterns$core$_LT_print_$_state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28653 = f__9319__auto__.call(null);
(statearr_28653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28653;
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
var args28656 = [];
var len__7018__auto___28695 = arguments.length;
var i__7019__auto___28696 = (0);
while(true){
if((i__7019__auto___28696 < len__7018__auto___28695)){
args28656.push((arguments[i__7019__auto___28696]));

var G__28697 = (i__7019__auto___28696 + (1));
i__7019__auto___28696 = G__28697;
continue;
} else {
}
break;
}

var G__28658 = args28656.length;
switch (G__28658) {
case 1:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28656.length)].join('')));

}
});

cljs_async_patterns.core._GT_1.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (arg1){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_28663){
var state_val_28664 = (state_28663[(1)]);
if((state_val_28664 === (1))){
var inst_28659 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_28663__$1 = state_28663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28663__$1,(2),c,inst_28659);
} else {
if((state_val_28664 === (2))){
var inst_28661 = (state_28663[(2)]);
var state_28663__$1 = state_28663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28663__$1,inst_28661);
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
var statearr_28668 = [null,null,null,null,null,null,null];
(statearr_28668[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_28668[(1)] = (1));

return statearr_28668;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28663){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28669){if((e28669 instanceof Object)){
var ex__9301__auto__ = e28669;
var statearr_28670_28699 = state_28663;
(statearr_28670_28699[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28700 = state_28663;
state_28663 = G__28700;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28663){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28671 = f__9319__auto__.call(null);
(statearr_28671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28671;
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
return (function (state_28682){
var state_val_28683 = (state_28682[(1)]);
if((state_val_28683 === (1))){
var state_28682__$1 = state_28682;
if(cljs.core.truth_(arg1)){
var statearr_28684_28701 = state_28682__$1;
(statearr_28684_28701[(1)] = (2));

} else {
var statearr_28685_28702 = state_28682__$1;
(statearr_28685_28702[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (2))){
var inst_28673 = cljs_async_patterns.core.chan_sanitized.call(null,arg1);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28682__$1,(5),c,inst_28673);
} else {
if((state_val_28683 === (3))){
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28682__$1,(6),c,E_msg);
} else {
if((state_val_28683 === (4))){
var inst_28680 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28682__$1,inst_28680);
} else {
if((state_val_28683 === (5))){
var inst_28675 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28686_28703 = state_28682__$1;
(statearr_28686_28703[(2)] = inst_28675);

(statearr_28686_28703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28683 === (6))){
var inst_28678 = (state_28682[(2)]);
var state_28682__$1 = state_28682;
var statearr_28687_28704 = state_28682__$1;
(statearr_28687_28704[(2)] = inst_28678);

(statearr_28687_28704[(1)] = (4));


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
var statearr_28691 = [null,null,null,null,null,null,null];
(statearr_28691[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_28691[(1)] = (1));

return statearr_28691;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28682){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28692){if((e28692 instanceof Object)){
var ex__9301__auto__ = e28692;
var statearr_28693_28705 = state_28682;
(statearr_28693_28705[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28706 = state_28682;
state_28682 = G__28706;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28682){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28694 = f__9319__auto__.call(null);
(statearr_28694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28694;
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
var args28707 = [];
var len__7018__auto___28774 = arguments.length;
var i__7019__auto___28775 = (0);
while(true){
if((i__7019__auto___28775 < len__7018__auto___28774)){
args28707.push((arguments[i__7019__auto___28775]));

var G__28776 = (i__7019__auto___28775 + (1));
i__7019__auto___28775 = G__28776;
continue;
} else {
}
break;
}

var G__28709 = args28707.length;
switch (G__28709) {
case 1:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28707.length)].join('')));

}
});

cljs_async_patterns.core._GT_2.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_28725){
var state_val_28726 = (state_28725[(1)]);
if((state_val_28726 === (1))){
var state_28725__$1 = state_28725;
if(cljs.core.truth_(res)){
var statearr_28727_28778 = state_28725__$1;
(statearr_28727_28778[(1)] = (2));

} else {
var statearr_28728_28779 = state_28725__$1;
(statearr_28728_28779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (2))){
var inst_28711 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28725__$1,(5),c,inst_28711);
} else {
if((state_val_28726 === (3))){
var state_28725__$1 = state_28725;
var statearr_28729_28780 = state_28725__$1;
(statearr_28729_28780[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (4))){
var inst_28723 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28725__$1,inst_28723);
} else {
if((state_val_28726 === (5))){
var inst_28713 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28731_28781 = state_28725__$1;
(statearr_28731_28781[(2)] = inst_28713);

(statearr_28731_28781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (6))){
var inst_28716 = cljs_async_patterns.core.chan_sanitized.call(null,err);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28725__$1,(9),c,inst_28716);
} else {
if((state_val_28726 === (7))){
var state_28725__$1 = state_28725;
var statearr_28732_28782 = state_28725__$1;
(statearr_28732_28782[(2)] = null);

(statearr_28732_28782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (8))){
var inst_28721 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28733_28783 = state_28725__$1;
(statearr_28733_28783[(2)] = inst_28721);

(statearr_28733_28783[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (9))){
var inst_28718 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28734_28784 = state_28725__$1;
(statearr_28734_28784[(2)] = inst_28718);

(statearr_28734_28784[(1)] = (8));


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
var statearr_28738 = [null,null,null,null,null,null,null];
(statearr_28738[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_28738[(1)] = (1));

return statearr_28738;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28725){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28739){if((e28739 instanceof Object)){
var ex__9301__auto__ = e28739;
var statearr_28740_28785 = state_28725;
(statearr_28740_28785[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28786 = state_28725;
state_28725 = G__28786;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28725){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28741 = f__9319__auto__.call(null);
(statearr_28741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28741;
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
return (function (state_28757){
var state_val_28758 = (state_28757[(1)]);
if((state_val_28758 === (1))){
var state_28757__$1 = state_28757;
if(cljs.core.truth_(res)){
var statearr_28759_28787 = state_28757__$1;
(statearr_28759_28787[(1)] = (2));

} else {
var statearr_28760_28788 = state_28757__$1;
(statearr_28760_28788[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (2))){
var inst_28743 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28757__$1,(5),c,inst_28743);
} else {
if((state_val_28758 === (3))){
var state_28757__$1 = state_28757;
var statearr_28761_28789 = state_28757__$1;
(statearr_28761_28789[(1)] = (6));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (4))){
var inst_28755 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28757__$1,inst_28755);
} else {
if((state_val_28758 === (5))){
var inst_28745 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
var statearr_28763_28790 = state_28757__$1;
(statearr_28763_28790[(2)] = inst_28745);

(statearr_28763_28790[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (6))){
var inst_28748 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_28757__$1 = state_28757;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28757__$1,(9),c,inst_28748);
} else {
if((state_val_28758 === (7))){
var state_28757__$1 = state_28757;
var statearr_28764_28791 = state_28757__$1;
(statearr_28764_28791[(2)] = null);

(statearr_28764_28791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (8))){
var inst_28753 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
var statearr_28765_28792 = state_28757__$1;
(statearr_28765_28792[(2)] = inst_28753);

(statearr_28765_28792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28758 === (9))){
var inst_28750 = (state_28757[(2)]);
var state_28757__$1 = state_28757;
var statearr_28766_28793 = state_28757__$1;
(statearr_28766_28793[(2)] = inst_28750);

(statearr_28766_28793[(1)] = (8));


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
var statearr_28770 = [null,null,null,null,null,null,null];
(statearr_28770[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_28770[(1)] = (1));

return statearr_28770;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28757){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28771){if((e28771 instanceof Object)){
var ex__9301__auto__ = e28771;
var statearr_28772_28794 = state_28757;
(statearr_28772_28794[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28795 = state_28757;
state_28757 = G__28795;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28757){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28773 = f__9319__auto__.call(null);
(statearr_28773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28773;
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
var args28796 = [];
var len__7018__auto___28885 = arguments.length;
var i__7019__auto___28886 = (0);
while(true){
if((i__7019__auto___28886 < len__7018__auto___28885)){
args28796.push((arguments[i__7019__auto___28886]));

var G__28887 = (i__7019__auto___28886 + (1));
i__7019__auto___28886 = G__28887;
continue;
} else {
}
break;
}

var G__28798 = args28796.length;
switch (G__28798) {
case 1:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28796.length)].join('')));

}
});

cljs_async_patterns.core._GT_3.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function (err1,err2,res){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_28821){
var state_val_28822 = (state_28821[(1)]);
if((state_val_28822 === (7))){
var state_28821__$1 = state_28821;
var statearr_28823_28889 = state_28821__$1;
(statearr_28823_28889[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (1))){
var state_28821__$1 = state_28821;
if(cljs.core.truth_(res)){
var statearr_28825_28890 = state_28821__$1;
(statearr_28825_28890[(1)] = (2));

} else {
var statearr_28826_28891 = state_28821__$1;
(statearr_28826_28891[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (4))){
var inst_28819 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28821__$1,inst_28819);
} else {
if((state_val_28822 === (13))){
var inst_28812 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28827_28892 = state_28821__$1;
(statearr_28827_28892[(2)] = inst_28812);

(statearr_28827_28892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (6))){
var inst_28805 = cljs_async_patterns.core.chan_sanitized.call(null,err1);
var state_28821__$1 = state_28821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28821__$1,(9),c,inst_28805);
} else {
if((state_val_28822 === (3))){
var state_28821__$1 = state_28821;
if(cljs.core.truth_(err1)){
var statearr_28828_28893 = state_28821__$1;
(statearr_28828_28893[(1)] = (6));

} else {
var statearr_28829_28894 = state_28821__$1;
(statearr_28829_28894[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (12))){
var inst_28815 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28830_28895 = state_28821__$1;
(statearr_28830_28895[(2)] = inst_28815);

(statearr_28830_28895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (2))){
var inst_28800 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_28821__$1 = state_28821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28821__$1,(5),c,inst_28800);
} else {
if((state_val_28822 === (11))){
var state_28821__$1 = state_28821;
var statearr_28831_28896 = state_28821__$1;
(statearr_28831_28896[(2)] = null);

(statearr_28831_28896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (9))){
var inst_28807 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28832_28897 = state_28821__$1;
(statearr_28832_28897[(2)] = inst_28807);

(statearr_28832_28897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (5))){
var inst_28802 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28833_28898 = state_28821__$1;
(statearr_28833_28898[(2)] = inst_28802);

(statearr_28833_28898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28822 === (10))){
var inst_28810 = cljs_async_patterns.core.chan_sanitized.call(null,err2);
var state_28821__$1 = state_28821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28821__$1,(13),c,inst_28810);
} else {
if((state_val_28822 === (8))){
var inst_28817 = (state_28821[(2)]);
var state_28821__$1 = state_28821;
var statearr_28834_28899 = state_28821__$1;
(statearr_28834_28899[(2)] = inst_28817);

(statearr_28834_28899[(1)] = (4));


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
var statearr_28838 = [null,null,null,null,null,null,null];
(statearr_28838[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_28838[(1)] = (1));

return statearr_28838;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28821){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28839){if((e28839 instanceof Object)){
var ex__9301__auto__ = e28839;
var statearr_28840_28900 = state_28821;
(statearr_28840_28900[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28901 = state_28821;
state_28821 = G__28901;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28821){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28841 = f__9319__auto__.call(null);
(statearr_28841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28841;
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
return (function (state_28864){
var state_val_28865 = (state_28864[(1)]);
if((state_val_28865 === (7))){
var state_28864__$1 = state_28864;
var statearr_28866_28902 = state_28864__$1;
(statearr_28866_28902[(1)] = (10));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (1))){
var state_28864__$1 = state_28864;
if(cljs.core.truth_(res)){
var statearr_28868_28903 = state_28864__$1;
(statearr_28868_28903[(1)] = (2));

} else {
var statearr_28869_28904 = state_28864__$1;
(statearr_28869_28904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (4))){
var inst_28862 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28864__$1,inst_28862);
} else {
if((state_val_28865 === (13))){
var inst_28855 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28870_28905 = state_28864__$1;
(statearr_28870_28905[(2)] = inst_28855);

(statearr_28870_28905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (6))){
var inst_28848 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(9),c,inst_28848);
} else {
if((state_val_28865 === (3))){
var state_28864__$1 = state_28864;
if(cljs.core.truth_(err1)){
var statearr_28871_28906 = state_28864__$1;
(statearr_28871_28906[(1)] = (6));

} else {
var statearr_28872_28907 = state_28864__$1;
(statearr_28872_28907[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (12))){
var inst_28858 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28873_28908 = state_28864__$1;
(statearr_28873_28908[(2)] = inst_28858);

(statearr_28873_28908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (2))){
var inst_28843 = cljs_async_patterns.core.chan_sanitized.call(null,res);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(5),c,inst_28843);
} else {
if((state_val_28865 === (11))){
var state_28864__$1 = state_28864;
var statearr_28874_28909 = state_28864__$1;
(statearr_28874_28909[(2)] = null);

(statearr_28874_28909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (9))){
var inst_28850 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28875_28910 = state_28864__$1;
(statearr_28875_28910[(2)] = inst_28850);

(statearr_28875_28910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (5))){
var inst_28845 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28876_28911 = state_28864__$1;
(statearr_28876_28911[(2)] = inst_28845);

(statearr_28876_28911[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (10))){
var inst_28853 = cljs_async_patterns.core.chan_sanitized.call(null,E_msg);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(13),c,inst_28853);
} else {
if((state_val_28865 === (8))){
var inst_28860 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28877_28912 = state_28864__$1;
(statearr_28877_28912[(2)] = inst_28860);

(statearr_28877_28912[(1)] = (4));


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
var statearr_28881 = [null,null,null,null,null,null,null];
(statearr_28881[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_28881[(1)] = (1));

return statearr_28881;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28864){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28882){if((e28882 instanceof Object)){
var ex__9301__auto__ = e28882;
var statearr_28883_28913 = state_28864;
(statearr_28883_28913[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28864;
state_28864 = G__28914;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28864){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28884 = f__9319__auto__.call(null);
(statearr_28884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
});
});

cljs_async_patterns.core._GT_3.cljs$lang$maxFixedArity = 2;
/**
 * Jams the first truthy argument of a callback function into its input channel.
 */
cljs_async_patterns.core._GT__QMARK_ = (function cljs_async_patterns$core$_GT__QMARK_(var_args){
var args28915 = [];
var len__7018__auto___29020 = arguments.length;
var i__7019__auto___29021 = (0);
while(true){
if((i__7019__auto___29021 < len__7018__auto___29020)){
args28915.push((arguments[i__7019__auto___29021]));

var G__29022 = (i__7019__auto___29021 + (1));
i__7019__auto___29021 = G__29022;
continue;
} else {
}
break;
}

var G__28917 = args28915.length;
switch (G__28917) {
case 1:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28915.length)].join('')));

}
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (c){
return (function() { 
var G__29024__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_28942){
var state_val_28943 = (state_28942[(1)]);
if((state_val_28943 === (7))){
var inst_28924 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28944_29025 = state_28942__$1;
(statearr_28944_29025[(2)] = inst_28924);

(statearr_28944_29025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (1))){
var inst_28918 = args;
var state_28942__$1 = (function (){var statearr_28945 = state_28942;
(statearr_28945[(7)] = inst_28918);

return statearr_28945;
})();
var statearr_28946_29026 = state_28942__$1;
(statearr_28946_29026[(2)] = null);

(statearr_28946_29026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (4))){
var state_28942__$1 = state_28942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28942__$1,(7),c,false);
} else {
if((state_val_28943 === (6))){
var inst_28938 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28947_29027 = state_28942__$1;
(statearr_28947_29027[(2)] = inst_28938);

(statearr_28947_29027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (3))){
var inst_28940 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28942__$1,inst_28940);
} else {
if((state_val_28943 === (2))){
var inst_28918 = (state_28942[(7)]);
var inst_28920 = cljs.core.count.call(null,inst_28918);
var inst_28921 = cljs.core._EQ_.call(null,(0),inst_28920);
var state_28942__$1 = state_28942;
if(inst_28921){
var statearr_28948_29028 = state_28942__$1;
(statearr_28948_29028[(1)] = (4));

} else {
var statearr_28949_29029 = state_28942__$1;
(statearr_28949_29029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (11))){
var inst_28931 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28950_29030 = state_28942__$1;
(statearr_28950_29030[(2)] = inst_28931);

(statearr_28950_29030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (9))){
var inst_28918 = (state_28942[(7)]);
var inst_28933 = cljs.core.rest.call(null,inst_28918);
var inst_28918__$1 = inst_28933;
var state_28942__$1 = (function (){var statearr_28951 = state_28942;
(statearr_28951[(7)] = inst_28918__$1);

return statearr_28951;
})();
var statearr_28952_29031 = state_28942__$1;
(statearr_28952_29031[(2)] = null);

(statearr_28952_29031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (5))){
var inst_28918 = (state_28942[(7)]);
var inst_28926 = cljs.core.first.call(null,inst_28918);
var state_28942__$1 = state_28942;
if(cljs.core.truth_(inst_28926)){
var statearr_28953_29032 = state_28942__$1;
(statearr_28953_29032[(1)] = (8));

} else {
var statearr_28954_29033 = state_28942__$1;
(statearr_28954_29033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (10))){
var inst_28936 = (state_28942[(2)]);
var state_28942__$1 = state_28942;
var statearr_28955_29034 = state_28942__$1;
(statearr_28955_29034[(2)] = inst_28936);

(statearr_28955_29034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28943 === (8))){
var inst_28918 = (state_28942[(7)]);
var inst_28928 = cljs_async_patterns.core.chan_sanitized.call(null,inst_28918);
var inst_28929 = cljs.core.first.call(null,inst_28928);
var state_28942__$1 = state_28942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28942__$1,(11),c,inst_28929);
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
var statearr_28959 = [null,null,null,null,null,null,null,null];
(statearr_28959[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_28959[(1)] = (1));

return statearr_28959;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28942){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e28960){if((e28960 instanceof Object)){
var ex__9301__auto__ = e28960;
var statearr_28961_29035 = state_28942;
(statearr_28961_29035[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29036 = state_28942;
state_28942 = G__29036;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28942){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_28962 = f__9319__auto__.call(null);
(statearr_28962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_28962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__29024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29037__i = 0, G__29037__a = new Array(arguments.length -  0);
while (G__29037__i < G__29037__a.length) {G__29037__a[G__29037__i] = arguments[G__29037__i + 0]; ++G__29037__i;}
  args = new cljs.core.IndexedSeq(G__29037__a,0);
} 
return G__29024__delegate.call(this,args);};
G__29024.cljs$lang$maxFixedArity = 0;
G__29024.cljs$lang$applyTo = (function (arglist__29038){
var args = cljs.core.seq(arglist__29038);
return G__29024__delegate(args);
});
G__29024.cljs$core$IFn$_invoke$arity$variadic = G__29024__delegate;
return G__29024;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,E_msg){
return (function() { 
var G__29039__delegate = function (args){
var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__){
return (function (state_28995){
var state_val_28996 = (state_28995[(1)]);
if((state_val_28996 === (7))){
var inst_28969 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_28997_29040 = state_28995__$1;
(statearr_28997_29040[(2)] = inst_28969);

(statearr_28997_29040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (1))){
var inst_28963 = args;
var state_28995__$1 = (function (){var statearr_28998 = state_28995;
(statearr_28998[(7)] = inst_28963);

return statearr_28998;
})();
var statearr_28999_29041 = state_28995__$1;
(statearr_28999_29041[(2)] = null);

(statearr_28999_29041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (4))){
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(7),c,E_msg);
} else {
if((state_val_28996 === (15))){
var inst_28982 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29000_29042 = state_28995__$1;
(statearr_29000_29042[(2)] = inst_28982);

(statearr_29000_29042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (13))){
var inst_28984 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29001_29043 = state_28995__$1;
(statearr_29001_29043[(2)] = inst_28984);

(statearr_29001_29043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (6))){
var inst_28991 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29002_29044 = state_28995__$1;
(statearr_29002_29044[(2)] = inst_28991);

(statearr_29002_29044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (3))){
var inst_28993 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28995__$1,inst_28993);
} else {
if((state_val_28996 === (12))){
var inst_28963 = (state_28995[(7)]);
var inst_28979 = cljs_async_patterns.core.chan_sanitized.call(null,inst_28963);
var inst_28980 = cljs.core.first.call(null,inst_28979);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(15),c,inst_28980);
} else {
if((state_val_28996 === (2))){
var inst_28963 = (state_28995[(7)]);
var inst_28965 = cljs.core.count.call(null,inst_28963);
var inst_28966 = cljs.core._EQ_.call(null,(0),inst_28965);
var state_28995__$1 = state_28995;
if(inst_28966){
var statearr_29003_29045 = state_28995__$1;
(statearr_29003_29045[(1)] = (4));

} else {
var statearr_29004_29046 = state_28995__$1;
(statearr_29004_29046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (11))){
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(14),c,E_msg);
} else {
if((state_val_28996 === (9))){
var inst_28963 = (state_28995[(7)]);
var inst_28986 = cljs.core.rest.call(null,inst_28963);
var inst_28963__$1 = inst_28986;
var state_28995__$1 = (function (){var statearr_29005 = state_28995;
(statearr_29005[(7)] = inst_28963__$1);

return statearr_29005;
})();
var statearr_29006_29047 = state_28995__$1;
(statearr_29006_29047[(2)] = null);

(statearr_29006_29047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (5))){
var inst_28963 = (state_28995[(7)]);
var inst_28971 = cljs.core.first.call(null,inst_28963);
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28971)){
var statearr_29007_29048 = state_28995__$1;
(statearr_29007_29048[(1)] = (8));

} else {
var statearr_29008_29049 = state_28995__$1;
(statearr_29008_29049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (14))){
var inst_28977 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29009_29050 = state_28995__$1;
(statearr_29009_29050[(2)] = inst_28977);

(statearr_29009_29050[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (10))){
var inst_28989 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
var statearr_29010_29051 = state_28995__$1;
(statearr_29010_29051[(2)] = inst_28989);

(statearr_29010_29051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28996 === (8))){
var inst_28963 = (state_28995[(7)]);
var inst_28973 = cljs.core.count.call(null,inst_28963);
var inst_28974 = (inst_28973 > (1));
var state_28995__$1 = state_28995;
if(cljs.core.truth_(inst_28974)){
var statearr_29011_29052 = state_28995__$1;
(statearr_29011_29052[(1)] = (11));

} else {
var statearr_29012_29053 = state_28995__$1;
(statearr_29012_29053[(1)] = (12));

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
var statearr_29016 = [null,null,null,null,null,null,null,null];
(statearr_29016[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_29016[(1)] = (1));

return statearr_29016;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_28995){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_28995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e29017){if((e29017 instanceof Object)){
var ex__9301__auto__ = e29017;
var statearr_29018_29054 = state_28995;
(statearr_29018_29054[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29017;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29055 = state_28995;
state_28995 = G__29055;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_28995){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_28995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__))
})();
var state__9320__auto__ = (function (){var statearr_29019 = f__9319__auto__.call(null);
(statearr_29019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_29019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__))
);

return c__9318__auto__;
};
var G__29039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29056__i = 0, G__29056__a = new Array(arguments.length -  0);
while (G__29056__i < G__29056__a.length) {G__29056__a[G__29056__i] = arguments[G__29056__i + 0]; ++G__29056__i;}
  args = new cljs.core.IndexedSeq(G__29056__a,0);
} 
return G__29039__delegate.call(this,args);};
G__29039.cljs$lang$maxFixedArity = 0;
G__29039.cljs$lang$applyTo = (function (arglist__29057){
var args = cljs.core.seq(arglist__29057);
return G__29039__delegate(args);
});
G__29039.cljs$core$IFn$_invoke$arity$variadic = G__29039__delegate;
return G__29039;
})()
;
});

cljs_async_patterns.core._GT__QMARK_.cljs$lang$maxFixedArity = 2;
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__7025__auto__ = [];
var len__7018__auto___29095 = arguments.length;
var i__7019__auto___29096 = (0);
while(true){
if((i__7019__auto___29096 < len__7018__auto___29095)){
args__7025__auto__.push((arguments[i__7019__auto___29096]));

var G__29097 = (i__7019__auto___29096 + (1));
i__7019__auto___29096 = G__29097;
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
return (function (state_29067){
var state_val_29068 = (state_29067[(1)]);
if((state_val_29068 === (1))){
var inst_29060 = cljs.core.async.chan.call(null,(1));
var inst_29061 = cljs.nodejs.require.call(null,"fs");
var inst_29062 = cljs_async_patterns.core._GT_2.call(null,inst_29060);
var inst_29063 = inst_29061.readFile("/home/george/12","utf8",inst_29062);
var state_29067__$1 = (function (){var statearr_29069 = state_29067;
(statearr_29069[(7)] = inst_29063);

return statearr_29069;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29067__$1,(2),inst_29060);
} else {
if((state_val_29068 === (2))){
var inst_29065 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29067__$1,inst_29065);
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
var statearr_29073 = [null,null,null,null,null,null,null,null];
(statearr_29073[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_29073[(1)] = (1));

return statearr_29073;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_29067){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_29067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e29074){if((e29074 instanceof Object)){
var ex__9301__auto__ = e29074;
var statearr_29075_29098 = state_29067;
(statearr_29075_29098[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29099 = state_29067;
state_29067 = G__29099;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_29067){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_29067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,minimist,argv,e,arg))
})();
var state__9320__auto__ = (function (){var statearr_29076 = f__9319__auto__.call(null);
(statearr_29076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_29076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,minimist,argv,e,arg))
);

return c__9318__auto__;
})());

cljs_async_patterns.core._LT_print.call(null,(function (){var c__9318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9318__auto__,minimist,argv,e,arg){
return (function (){
var f__9319__auto__ = (function (){var switch__9297__auto__ = ((function (c__9318__auto__,minimist,argv,e,arg){
return (function (state_29085){
var state_val_29086 = (state_29085[(1)]);
if((state_val_29086 === (1))){
var inst_29078 = cljs.core.async.chan.call(null,(1));
var inst_29079 = cljs.nodejs.require.call(null,"fs");
var inst_29080 = cljs_async_patterns.core._GT_2.call(null,inst_29078,"ERROR: SE, mathize, visions.");
var inst_29081 = inst_29079.readFile("/home/george/12","utf8",inst_29080);
var state_29085__$1 = (function (){var statearr_29087 = state_29085;
(statearr_29087[(7)] = inst_29081);

return statearr_29087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29085__$1,(2),inst_29078);
} else {
if((state_val_29086 === (2))){
var inst_29083 = (state_29085[(2)]);
var state_29085__$1 = state_29085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29085__$1,inst_29083);
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
var statearr_29091 = [null,null,null,null,null,null,null,null];
(statearr_29091[(0)] = cljs_async_patterns$core$state_machine__9298__auto__);

(statearr_29091[(1)] = (1));

return statearr_29091;
});
var cljs_async_patterns$core$state_machine__9298__auto____1 = (function (state_29085){
while(true){
var ret_value__9299__auto__ = (function (){try{while(true){
var result__9300__auto__ = switch__9297__auto__.call(null,state_29085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9300__auto__;
}
break;
}
}catch (e29092){if((e29092 instanceof Object)){
var ex__9301__auto__ = e29092;
var statearr_29093_29100 = state_29085;
(statearr_29093_29100[(5)] = ex__9301__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9299__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29101 = state_29085;
state_29085 = G__29101;
continue;
} else {
return ret_value__9299__auto__;
}
break;
}
});
cljs_async_patterns$core$state_machine__9298__auto__ = function(state_29085){
switch(arguments.length){
case 0:
return cljs_async_patterns$core$state_machine__9298__auto____0.call(this);
case 1:
return cljs_async_patterns$core$state_machine__9298__auto____1.call(this,state_29085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_async_patterns$core$state_machine__9298__auto____0;
cljs_async_patterns$core$state_machine__9298__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_async_patterns$core$state_machine__9298__auto____1;
return cljs_async_patterns$core$state_machine__9298__auto__;
})()
;})(switch__9297__auto__,c__9318__auto__,minimist,argv,e,arg))
})();
var state__9320__auto__ = (function (){var statearr_29094 = f__9319__auto__.call(null);
(statearr_29094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9318__auto__);

return statearr_29094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9320__auto__);
});})(c__9318__auto__,minimist,argv,e,arg))
);

return c__9318__auto__;
})());

return cljs.core.println.call(null,argv);
});

cljs_async_patterns.core._main.cljs$lang$maxFixedArity = (0);

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq29058){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29058));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map