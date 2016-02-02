goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25489__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25489 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25490__i = 0, G__25490__a = new Array(arguments.length -  0);
while (G__25490__i < G__25490__a.length) {G__25490__a[G__25490__i] = arguments[G__25490__i + 0]; ++G__25490__i;}
  args = new cljs.core.IndexedSeq(G__25490__a,0);
} 
return G__25489__delegate.call(this,args);};
G__25489.cljs$lang$maxFixedArity = 0;
G__25489.cljs$lang$applyTo = (function (arglist__25491){
var args = cljs.core.seq(arglist__25491);
return G__25489__delegate(args);
});
G__25489.cljs$core$IFn$_invoke$arity$variadic = G__25489__delegate;
return G__25489;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25492__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25493__i = 0, G__25493__a = new Array(arguments.length -  0);
while (G__25493__i < G__25493__a.length) {G__25493__a[G__25493__i] = arguments[G__25493__i + 0]; ++G__25493__i;}
  args = new cljs.core.IndexedSeq(G__25493__a,0);
} 
return G__25492__delegate.call(this,args);};
G__25492.cljs$lang$maxFixedArity = 0;
G__25492.cljs$lang$applyTo = (function (arglist__25494){
var args = cljs.core.seq(arglist__25494);
return G__25492__delegate(args);
});
G__25492.cljs$core$IFn$_invoke$arity$variadic = G__25492__delegate;
return G__25492;
})()
;

return null;
});
