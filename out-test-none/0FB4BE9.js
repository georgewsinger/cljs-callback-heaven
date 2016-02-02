goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14717__i = 0, G__14717__a = new Array(arguments.length -  0);
while (G__14717__i < G__14717__a.length) {G__14717__a[G__14717__i] = arguments[G__14717__i + 0]; ++G__14717__i;}
  args = new cljs.core.IndexedSeq(G__14717__a,0);
} 
return G__14716__delegate.call(this,args);};
G__14716.cljs$lang$maxFixedArity = 0;
G__14716.cljs$lang$applyTo = (function (arglist__14718){
var args = cljs.core.seq(arglist__14718);
return G__14716__delegate(args);
});
G__14716.cljs$core$IFn$_invoke$arity$variadic = G__14716__delegate;
return G__14716;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14720__i = 0, G__14720__a = new Array(arguments.length -  0);
while (G__14720__i < G__14720__a.length) {G__14720__a[G__14720__i] = arguments[G__14720__i + 0]; ++G__14720__i;}
  args = new cljs.core.IndexedSeq(G__14720__a,0);
} 
return G__14719__delegate.call(this,args);};
G__14719.cljs$lang$maxFixedArity = 0;
G__14719.cljs$lang$applyTo = (function (arglist__14721){
var args = cljs.core.seq(arglist__14721);
return G__14719__delegate(args);
});
G__14719.cljs$core$IFn$_invoke$arity$variadic = G__14719__delegate;
return G__14719;
})()
;

return null;
});