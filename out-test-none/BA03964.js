goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16243__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16244__i = 0, G__16244__a = new Array(arguments.length -  0);
while (G__16244__i < G__16244__a.length) {G__16244__a[G__16244__i] = arguments[G__16244__i + 0]; ++G__16244__i;}
  args = new cljs.core.IndexedSeq(G__16244__a,0);
} 
return G__16243__delegate.call(this,args);};
G__16243.cljs$lang$maxFixedArity = 0;
G__16243.cljs$lang$applyTo = (function (arglist__16245){
var args = cljs.core.seq(arglist__16245);
return G__16243__delegate(args);
});
G__16243.cljs$core$IFn$_invoke$arity$variadic = G__16243__delegate;
return G__16243;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16246__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16246 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16247__i = 0, G__16247__a = new Array(arguments.length -  0);
while (G__16247__i < G__16247__a.length) {G__16247__a[G__16247__i] = arguments[G__16247__i + 0]; ++G__16247__i;}
  args = new cljs.core.IndexedSeq(G__16247__a,0);
} 
return G__16246__delegate.call(this,args);};
G__16246.cljs$lang$maxFixedArity = 0;
G__16246.cljs$lang$applyTo = (function (arglist__16248){
var args = cljs.core.seq(arglist__16248);
return G__16246__delegate(args);
});
G__16246.cljs$core$IFn$_invoke$arity$variadic = G__16246__delegate;
return G__16246;
})()
;

return null;
});
