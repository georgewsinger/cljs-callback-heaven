goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27187__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27188__i = 0, G__27188__a = new Array(arguments.length -  0);
while (G__27188__i < G__27188__a.length) {G__27188__a[G__27188__i] = arguments[G__27188__i + 0]; ++G__27188__i;}
  args = new cljs.core.IndexedSeq(G__27188__a,0);
} 
return G__27187__delegate.call(this,args);};
G__27187.cljs$lang$maxFixedArity = 0;
G__27187.cljs$lang$applyTo = (function (arglist__27189){
var args = cljs.core.seq(arglist__27189);
return G__27187__delegate(args);
});
G__27187.cljs$core$IFn$_invoke$arity$variadic = G__27187__delegate;
return G__27187;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27190__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27191__i = 0, G__27191__a = new Array(arguments.length -  0);
while (G__27191__i < G__27191__a.length) {G__27191__a[G__27191__i] = arguments[G__27191__i + 0]; ++G__27191__i;}
  args = new cljs.core.IndexedSeq(G__27191__a,0);
} 
return G__27190__delegate.call(this,args);};
G__27190.cljs$lang$maxFixedArity = 0;
G__27190.cljs$lang$applyTo = (function (arglist__27192){
var args = cljs.core.seq(arglist__27192);
return G__27190__delegate(args);
});
G__27190.cljs$core$IFn$_invoke$arity$variadic = G__27190__delegate;
return G__27190;
})()
;

return null;
});
