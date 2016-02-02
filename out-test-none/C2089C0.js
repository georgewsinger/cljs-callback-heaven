goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__232808__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__232808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__232809__i = 0, G__232809__a = new Array(arguments.length -  0);
while (G__232809__i < G__232809__a.length) {G__232809__a[G__232809__i] = arguments[G__232809__i + 0]; ++G__232809__i;}
  args = new cljs.core.IndexedSeq(G__232809__a,0);
} 
return G__232808__delegate.call(this,args);};
G__232808.cljs$lang$maxFixedArity = 0;
G__232808.cljs$lang$applyTo = (function (arglist__232810){
var args = cljs.core.seq(arglist__232810);
return G__232808__delegate(args);
});
G__232808.cljs$core$IFn$_invoke$arity$variadic = G__232808__delegate;
return G__232808;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__232811__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__232811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__232812__i = 0, G__232812__a = new Array(arguments.length -  0);
while (G__232812__i < G__232812__a.length) {G__232812__a[G__232812__i] = arguments[G__232812__i + 0]; ++G__232812__i;}
  args = new cljs.core.IndexedSeq(G__232812__a,0);
} 
return G__232811__delegate.call(this,args);};
G__232811.cljs$lang$maxFixedArity = 0;
G__232811.cljs$lang$applyTo = (function (arglist__232813){
var args = cljs.core.seq(arglist__232813);
return G__232811__delegate(args);
});
G__232811.cljs$core$IFn$_invoke$arity$variadic = G__232811__delegate;
return G__232811;
})()
;

return null;
});
