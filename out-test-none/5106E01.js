goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63011__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63012__i = 0, G__63012__a = new Array(arguments.length -  0);
while (G__63012__i < G__63012__a.length) {G__63012__a[G__63012__i] = arguments[G__63012__i + 0]; ++G__63012__i;}
  args = new cljs.core.IndexedSeq(G__63012__a,0);
} 
return G__63011__delegate.call(this,args);};
G__63011.cljs$lang$maxFixedArity = 0;
G__63011.cljs$lang$applyTo = (function (arglist__63013){
var args = cljs.core.seq(arglist__63013);
return G__63011__delegate(args);
});
G__63011.cljs$core$IFn$_invoke$arity$variadic = G__63011__delegate;
return G__63011;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63014__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63015__i = 0, G__63015__a = new Array(arguments.length -  0);
while (G__63015__i < G__63015__a.length) {G__63015__a[G__63015__i] = arguments[G__63015__i + 0]; ++G__63015__i;}
  args = new cljs.core.IndexedSeq(G__63015__a,0);
} 
return G__63014__delegate.call(this,args);};
G__63014.cljs$lang$maxFixedArity = 0;
G__63014.cljs$lang$applyTo = (function (arglist__63016){
var args = cljs.core.seq(arglist__63016);
return G__63014__delegate(args);
});
G__63014.cljs$core$IFn$_invoke$arity$variadic = G__63014__delegate;
return G__63014;
})()
;

return null;
});
