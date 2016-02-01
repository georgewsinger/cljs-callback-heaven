// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_async_patterns.core._LT__LT__LT_ = (function cljs_async_patterns$core$_LT__LT__LT_(var_args){
var args__9184__auto__ = [];
var len__9177__auto___15727 = arguments.length;
var i__9178__auto___15728 = (0);
while(true){
if((i__9178__auto___15728 < len__9177__auto___15727)){
args__9184__auto__.push((arguments[i__9178__auto___15728]));

var G__15729 = (i__9178__auto___15728 + (1));
i__9178__auto___15728 = G__15729;
continue;
} else {
}
break;
}

var argseq__9185__auto__ = ((((1) < args__9184__auto__.length))?(new cljs.core.IndexedSeq(args__9184__auto__.slice((1)),(0))):null);
return cljs_async_patterns.core._LT__LT__LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9185__auto__);
});

cljs_async_patterns.core._LT__LT__LT_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var c = cljs.core.async.chan.call(null);
cljs.core.apply.call(null,f,cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (c){
return (function (x){
if(((x == null)) || ((void 0 === x))){
return cljs.core.async.close_BANG_.call(null,c);
} else {
return cljs.core.async.put_BANG_.call(null,c,x);
}
});})(c))
], null)));

return c;
});

cljs_async_patterns.core._LT__LT__LT_.cljs$lang$maxFixedArity = (1);

cljs_async_patterns.core._LT__LT__LT_.cljs$lang$applyTo = (function (seq15725){
var G__15726 = cljs.core.first.call(null,seq15725);
var seq15725__$1 = cljs.core.next.call(null,seq15725);
return cljs_async_patterns.core._LT__LT__LT_.cljs$core$IFn$_invoke$arity$variadic(G__15726,seq15725__$1);
});
cljs_async_patterns.core.fs = cljs.nodejs.require.call(null,"fs");
cljs_async_patterns.core._LT__LT__LT_.call(null,.readFile,cljs_async_patterns.core.fs,"/home/george/12345","utf8");
cljs_async_patterns.core._main = (function cljs_async_patterns$core$_main(var_args){
var args__9184__auto__ = [];
var len__9177__auto___15731 = arguments.length;
var i__9178__auto___15732 = (0);
while(true){
if((i__9178__auto___15732 < len__9177__auto___15731)){
args__9184__auto__.push((arguments[i__9178__auto___15732]));

var G__15733 = (i__9178__auto___15732 + (1));
i__9178__auto___15732 = G__15733;
continue;
} else {
}
break;
}

var argseq__9185__auto__ = ((((0) < args__9184__auto__.length))?(new cljs.core.IndexedSeq(args__9184__auto__.slice((0)),(0))):null);
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__9185__auto__);
});

cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var minimist = cljs.nodejs.require.call(null,"minimist");
var argv = minimist.call(null,cljs.core.clj__GT_js.call(null,cljs.core.vec.call(null,args)));
var e = (function (){var or__8119__auto__ = argv.e;
if(cljs.core.truth_(or__8119__auto__)){
return or__8119__auto__;
} else {
return "e option";
}
})();
var arg = (function (){var or__8119__auto__ = ((argv["_"])[(0)]);
if(cljs.core.truth_(or__8119__auto__)){
return or__8119__auto__;
} else {
return "default_arg";
}
})();
return cljs.core.println.call(null,argv);
});

cljs_async_patterns.core._main.cljs$lang$maxFixedArity = (0);

cljs_async_patterns.core._main.cljs$lang$applyTo = (function (seq15730){
return cljs_async_patterns.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15730));
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_async_patterns.core._main;

//# sourceMappingURL=core.js.map