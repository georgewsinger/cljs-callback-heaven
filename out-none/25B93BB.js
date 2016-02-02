goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51487__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51488__i = 0, G__51488__a = new Array(arguments.length -  0);
while (G__51488__i < G__51488__a.length) {G__51488__a[G__51488__i] = arguments[G__51488__i + 0]; ++G__51488__i;}
  args = new cljs.core.IndexedSeq(G__51488__a,0);
} 
return G__51487__delegate.call(this,args);};
G__51487.cljs$lang$maxFixedArity = 0;
G__51487.cljs$lang$applyTo = (function (arglist__51489){
var args = cljs.core.seq(arglist__51489);
return G__51487__delegate(args);
});
G__51487.cljs$core$IFn$_invoke$arity$variadic = G__51487__delegate;
return G__51487;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51490__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51491__i = 0, G__51491__a = new Array(arguments.length -  0);
while (G__51491__i < G__51491__a.length) {G__51491__a[G__51491__i] = arguments[G__51491__i + 0]; ++G__51491__i;}
  args = new cljs.core.IndexedSeq(G__51491__a,0);
} 
return G__51490__delegate.call(this,args);};
G__51490.cljs$lang$maxFixedArity = 0;
G__51490.cljs$lang$applyTo = (function (arglist__51492){
var args = cljs.core.seq(arglist__51492);
return G__51490__delegate(args);
});
G__51490.cljs$core$IFn$_invoke$arity$variadic = G__51490__delegate;
return G__51490;
})()
;

return null;
});
