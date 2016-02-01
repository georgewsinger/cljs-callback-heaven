goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13473__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13474__i = 0, G__13474__a = new Array(arguments.length -  0);
while (G__13474__i < G__13474__a.length) {G__13474__a[G__13474__i] = arguments[G__13474__i + 0]; ++G__13474__i;}
  args = new cljs.core.IndexedSeq(G__13474__a,0);
} 
return G__13473__delegate.call(this,args);};
G__13473.cljs$lang$maxFixedArity = 0;
G__13473.cljs$lang$applyTo = (function (arglist__13475){
var args = cljs.core.seq(arglist__13475);
return G__13473__delegate(args);
});
G__13473.cljs$core$IFn$_invoke$arity$variadic = G__13473__delegate;
return G__13473;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13476__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13477__i = 0, G__13477__a = new Array(arguments.length -  0);
while (G__13477__i < G__13477__a.length) {G__13477__a[G__13477__i] = arguments[G__13477__i + 0]; ++G__13477__i;}
  args = new cljs.core.IndexedSeq(G__13477__a,0);
} 
return G__13476__delegate.call(this,args);};
G__13476.cljs$lang$maxFixedArity = 0;
G__13476.cljs$lang$applyTo = (function (arglist__13478){
var args = cljs.core.seq(arglist__13478);
return G__13476__delegate(args);
});
G__13476.cljs$core$IFn$_invoke$arity$variadic = G__13476__delegate;
return G__13476;
})()
;

return null;
});
