goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64220__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64221__i = 0, G__64221__a = new Array(arguments.length -  0);
while (G__64221__i < G__64221__a.length) {G__64221__a[G__64221__i] = arguments[G__64221__i + 0]; ++G__64221__i;}
  args = new cljs.core.IndexedSeq(G__64221__a,0);
} 
return G__64220__delegate.call(this,args);};
G__64220.cljs$lang$maxFixedArity = 0;
G__64220.cljs$lang$applyTo = (function (arglist__64222){
var args = cljs.core.seq(arglist__64222);
return G__64220__delegate(args);
});
G__64220.cljs$core$IFn$_invoke$arity$variadic = G__64220__delegate;
return G__64220;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64223__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64224__i = 0, G__64224__a = new Array(arguments.length -  0);
while (G__64224__i < G__64224__a.length) {G__64224__a[G__64224__i] = arguments[G__64224__i + 0]; ++G__64224__i;}
  args = new cljs.core.IndexedSeq(G__64224__a,0);
} 
return G__64223__delegate.call(this,args);};
G__64223.cljs$lang$maxFixedArity = 0;
G__64223.cljs$lang$applyTo = (function (arglist__64225){
var args = cljs.core.seq(arglist__64225);
return G__64223__delegate(args);
});
G__64223.cljs$core$IFn$_invoke$arity$variadic = G__64223__delegate;
return G__64223;
})()
;

return null;
});
