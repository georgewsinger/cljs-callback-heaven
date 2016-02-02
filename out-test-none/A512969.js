goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31845__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31845 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31846__i = 0, G__31846__a = new Array(arguments.length -  0);
while (G__31846__i < G__31846__a.length) {G__31846__a[G__31846__i] = arguments[G__31846__i + 0]; ++G__31846__i;}
  args = new cljs.core.IndexedSeq(G__31846__a,0);
} 
return G__31845__delegate.call(this,args);};
G__31845.cljs$lang$maxFixedArity = 0;
G__31845.cljs$lang$applyTo = (function (arglist__31847){
var args = cljs.core.seq(arglist__31847);
return G__31845__delegate(args);
});
G__31845.cljs$core$IFn$_invoke$arity$variadic = G__31845__delegate;
return G__31845;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31848__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31849__i = 0, G__31849__a = new Array(arguments.length -  0);
while (G__31849__i < G__31849__a.length) {G__31849__a[G__31849__i] = arguments[G__31849__i + 0]; ++G__31849__i;}
  args = new cljs.core.IndexedSeq(G__31849__a,0);
} 
return G__31848__delegate.call(this,args);};
G__31848.cljs$lang$maxFixedArity = 0;
G__31848.cljs$lang$applyTo = (function (arglist__31850){
var args = cljs.core.seq(arglist__31850);
return G__31848__delegate(args);
});
G__31848.cljs$core$IFn$_invoke$arity$variadic = G__31848__delegate;
return G__31848;
})()
;

return null;
});
