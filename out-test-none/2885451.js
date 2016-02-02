goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39022__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39023__i = 0, G__39023__a = new Array(arguments.length -  0);
while (G__39023__i < G__39023__a.length) {G__39023__a[G__39023__i] = arguments[G__39023__i + 0]; ++G__39023__i;}
  args = new cljs.core.IndexedSeq(G__39023__a,0);
} 
return G__39022__delegate.call(this,args);};
G__39022.cljs$lang$maxFixedArity = 0;
G__39022.cljs$lang$applyTo = (function (arglist__39024){
var args = cljs.core.seq(arglist__39024);
return G__39022__delegate(args);
});
G__39022.cljs$core$IFn$_invoke$arity$variadic = G__39022__delegate;
return G__39022;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39025__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39026__i = 0, G__39026__a = new Array(arguments.length -  0);
while (G__39026__i < G__39026__a.length) {G__39026__a[G__39026__i] = arguments[G__39026__i + 0]; ++G__39026__i;}
  args = new cljs.core.IndexedSeq(G__39026__a,0);
} 
return G__39025__delegate.call(this,args);};
G__39025.cljs$lang$maxFixedArity = 0;
G__39025.cljs$lang$applyTo = (function (arglist__39027){
var args = cljs.core.seq(arglist__39027);
return G__39025__delegate(args);
});
G__39025.cljs$core$IFn$_invoke$arity$variadic = G__39025__delegate;
return G__39025;
})()
;

return null;
});
