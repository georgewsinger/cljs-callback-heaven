goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42153__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42154__i = 0, G__42154__a = new Array(arguments.length -  0);
while (G__42154__i < G__42154__a.length) {G__42154__a[G__42154__i] = arguments[G__42154__i + 0]; ++G__42154__i;}
  args = new cljs.core.IndexedSeq(G__42154__a,0);
} 
return G__42153__delegate.call(this,args);};
G__42153.cljs$lang$maxFixedArity = 0;
G__42153.cljs$lang$applyTo = (function (arglist__42155){
var args = cljs.core.seq(arglist__42155);
return G__42153__delegate(args);
});
G__42153.cljs$core$IFn$_invoke$arity$variadic = G__42153__delegate;
return G__42153;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42156__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42157__i = 0, G__42157__a = new Array(arguments.length -  0);
while (G__42157__i < G__42157__a.length) {G__42157__a[G__42157__i] = arguments[G__42157__i + 0]; ++G__42157__i;}
  args = new cljs.core.IndexedSeq(G__42157__a,0);
} 
return G__42156__delegate.call(this,args);};
G__42156.cljs$lang$maxFixedArity = 0;
G__42156.cljs$lang$applyTo = (function (arglist__42158){
var args = cljs.core.seq(arglist__42158);
return G__42156__delegate(args);
});
G__42156.cljs$core$IFn$_invoke$arity$variadic = G__42156__delegate;
return G__42156;
})()
;

return null;
});
