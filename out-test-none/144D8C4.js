goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__271963__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__271963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__271964__i = 0, G__271964__a = new Array(arguments.length -  0);
while (G__271964__i < G__271964__a.length) {G__271964__a[G__271964__i] = arguments[G__271964__i + 0]; ++G__271964__i;}
  args = new cljs.core.IndexedSeq(G__271964__a,0);
} 
return G__271963__delegate.call(this,args);};
G__271963.cljs$lang$maxFixedArity = 0;
G__271963.cljs$lang$applyTo = (function (arglist__271965){
var args = cljs.core.seq(arglist__271965);
return G__271963__delegate(args);
});
G__271963.cljs$core$IFn$_invoke$arity$variadic = G__271963__delegate;
return G__271963;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__271966__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__271966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__271967__i = 0, G__271967__a = new Array(arguments.length -  0);
while (G__271967__i < G__271967__a.length) {G__271967__a[G__271967__i] = arguments[G__271967__i + 0]; ++G__271967__i;}
  args = new cljs.core.IndexedSeq(G__271967__a,0);
} 
return G__271966__delegate.call(this,args);};
G__271966.cljs$lang$maxFixedArity = 0;
G__271966.cljs$lang$applyTo = (function (arglist__271968){
var args = cljs.core.seq(arglist__271968);
return G__271966__delegate(args);
});
G__271966.cljs$core$IFn$_invoke$arity$variadic = G__271966__delegate;
return G__271966;
})()
;

return null;
});
