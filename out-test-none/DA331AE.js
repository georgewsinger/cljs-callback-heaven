goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63022__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63023__i = 0, G__63023__a = new Array(arguments.length -  0);
while (G__63023__i < G__63023__a.length) {G__63023__a[G__63023__i] = arguments[G__63023__i + 0]; ++G__63023__i;}
  args = new cljs.core.IndexedSeq(G__63023__a,0);
} 
return G__63022__delegate.call(this,args);};
G__63022.cljs$lang$maxFixedArity = 0;
G__63022.cljs$lang$applyTo = (function (arglist__63024){
var args = cljs.core.seq(arglist__63024);
return G__63022__delegate(args);
});
G__63022.cljs$core$IFn$_invoke$arity$variadic = G__63022__delegate;
return G__63022;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63025__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63026__i = 0, G__63026__a = new Array(arguments.length -  0);
while (G__63026__i < G__63026__a.length) {G__63026__a[G__63026__i] = arguments[G__63026__i + 0]; ++G__63026__i;}
  args = new cljs.core.IndexedSeq(G__63026__a,0);
} 
return G__63025__delegate.call(this,args);};
G__63025.cljs$lang$maxFixedArity = 0;
G__63025.cljs$lang$applyTo = (function (arglist__63027){
var args = cljs.core.seq(arglist__63027);
return G__63025__delegate(args);
});
G__63025.cljs$core$IFn$_invoke$arity$variadic = G__63025__delegate;
return G__63025;
})()
;

return null;
});
