goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15756__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15757__i = 0, G__15757__a = new Array(arguments.length -  0);
while (G__15757__i < G__15757__a.length) {G__15757__a[G__15757__i] = arguments[G__15757__i + 0]; ++G__15757__i;}
  args = new cljs.core.IndexedSeq(G__15757__a,0);
} 
return G__15756__delegate.call(this,args);};
G__15756.cljs$lang$maxFixedArity = 0;
G__15756.cljs$lang$applyTo = (function (arglist__15758){
var args = cljs.core.seq(arglist__15758);
return G__15756__delegate(args);
});
G__15756.cljs$core$IFn$_invoke$arity$variadic = G__15756__delegate;
return G__15756;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15759__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15760__i = 0, G__15760__a = new Array(arguments.length -  0);
while (G__15760__i < G__15760__a.length) {G__15760__a[G__15760__i] = arguments[G__15760__i + 0]; ++G__15760__i;}
  args = new cljs.core.IndexedSeq(G__15760__a,0);
} 
return G__15759__delegate.call(this,args);};
G__15759.cljs$lang$maxFixedArity = 0;
G__15759.cljs$lang$applyTo = (function (arglist__15761){
var args = cljs.core.seq(arglist__15761);
return G__15759__delegate(args);
});
G__15759.cljs$core$IFn$_invoke$arity$variadic = G__15759__delegate;
return G__15759;
})()
;

return null;
});
