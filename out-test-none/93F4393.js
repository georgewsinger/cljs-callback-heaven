goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13610__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13610 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13611__i = 0, G__13611__a = new Array(arguments.length -  0);
while (G__13611__i < G__13611__a.length) {G__13611__a[G__13611__i] = arguments[G__13611__i + 0]; ++G__13611__i;}
  args = new cljs.core.IndexedSeq(G__13611__a,0);
} 
return G__13610__delegate.call(this,args);};
G__13610.cljs$lang$maxFixedArity = 0;
G__13610.cljs$lang$applyTo = (function (arglist__13612){
var args = cljs.core.seq(arglist__13612);
return G__13610__delegate(args);
});
G__13610.cljs$core$IFn$_invoke$arity$variadic = G__13610__delegate;
return G__13610;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13613__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13614__i = 0, G__13614__a = new Array(arguments.length -  0);
while (G__13614__i < G__13614__a.length) {G__13614__a[G__13614__i] = arguments[G__13614__i + 0]; ++G__13614__i;}
  args = new cljs.core.IndexedSeq(G__13614__a,0);
} 
return G__13613__delegate.call(this,args);};
G__13613.cljs$lang$maxFixedArity = 0;
G__13613.cljs$lang$applyTo = (function (arglist__13615){
var args = cljs.core.seq(arglist__13615);
return G__13613__delegate(args);
});
G__13613.cljs$core$IFn$_invoke$arity$variadic = G__13613__delegate;
return G__13613;
})()
;

return null;
});
