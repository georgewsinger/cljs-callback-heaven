goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18753__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18754__i = 0, G__18754__a = new Array(arguments.length -  0);
while (G__18754__i < G__18754__a.length) {G__18754__a[G__18754__i] = arguments[G__18754__i + 0]; ++G__18754__i;}
  args = new cljs.core.IndexedSeq(G__18754__a,0);
} 
return G__18753__delegate.call(this,args);};
G__18753.cljs$lang$maxFixedArity = 0;
G__18753.cljs$lang$applyTo = (function (arglist__18755){
var args = cljs.core.seq(arglist__18755);
return G__18753__delegate(args);
});
G__18753.cljs$core$IFn$_invoke$arity$variadic = G__18753__delegate;
return G__18753;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18756__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18757__i = 0, G__18757__a = new Array(arguments.length -  0);
while (G__18757__i < G__18757__a.length) {G__18757__a[G__18757__i] = arguments[G__18757__i + 0]; ++G__18757__i;}
  args = new cljs.core.IndexedSeq(G__18757__a,0);
} 
return G__18756__delegate.call(this,args);};
G__18756.cljs$lang$maxFixedArity = 0;
G__18756.cljs$lang$applyTo = (function (arglist__18758){
var args = cljs.core.seq(arglist__18758);
return G__18756__delegate(args);
});
G__18756.cljs$core$IFn$_invoke$arity$variadic = G__18756__delegate;
return G__18756;
})()
;

return null;
});
