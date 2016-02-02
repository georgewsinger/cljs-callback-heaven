goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36364__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36364 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36365__i = 0, G__36365__a = new Array(arguments.length -  0);
while (G__36365__i < G__36365__a.length) {G__36365__a[G__36365__i] = arguments[G__36365__i + 0]; ++G__36365__i;}
  args = new cljs.core.IndexedSeq(G__36365__a,0);
} 
return G__36364__delegate.call(this,args);};
G__36364.cljs$lang$maxFixedArity = 0;
G__36364.cljs$lang$applyTo = (function (arglist__36366){
var args = cljs.core.seq(arglist__36366);
return G__36364__delegate(args);
});
G__36364.cljs$core$IFn$_invoke$arity$variadic = G__36364__delegate;
return G__36364;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36367__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36368__i = 0, G__36368__a = new Array(arguments.length -  0);
while (G__36368__i < G__36368__a.length) {G__36368__a[G__36368__i] = arguments[G__36368__i + 0]; ++G__36368__i;}
  args = new cljs.core.IndexedSeq(G__36368__a,0);
} 
return G__36367__delegate.call(this,args);};
G__36367.cljs$lang$maxFixedArity = 0;
G__36367.cljs$lang$applyTo = (function (arglist__36369){
var args = cljs.core.seq(arglist__36369);
return G__36367__delegate(args);
});
G__36367.cljs$core$IFn$_invoke$arity$variadic = G__36367__delegate;
return G__36367;
})()
;

return null;
});
