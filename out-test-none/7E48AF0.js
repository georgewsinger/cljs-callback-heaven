goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__197511__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__197511 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__197512__i = 0, G__197512__a = new Array(arguments.length -  0);
while (G__197512__i < G__197512__a.length) {G__197512__a[G__197512__i] = arguments[G__197512__i + 0]; ++G__197512__i;}
  args = new cljs.core.IndexedSeq(G__197512__a,0);
} 
return G__197511__delegate.call(this,args);};
G__197511.cljs$lang$maxFixedArity = 0;
G__197511.cljs$lang$applyTo = (function (arglist__197513){
var args = cljs.core.seq(arglist__197513);
return G__197511__delegate(args);
});
G__197511.cljs$core$IFn$_invoke$arity$variadic = G__197511__delegate;
return G__197511;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__197514__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__197514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__197515__i = 0, G__197515__a = new Array(arguments.length -  0);
while (G__197515__i < G__197515__a.length) {G__197515__a[G__197515__i] = arguments[G__197515__i + 0]; ++G__197515__i;}
  args = new cljs.core.IndexedSeq(G__197515__a,0);
} 
return G__197514__delegate.call(this,args);};
G__197514.cljs$lang$maxFixedArity = 0;
G__197514.cljs$lang$applyTo = (function (arglist__197516){
var args = cljs.core.seq(arglist__197516);
return G__197514__delegate(args);
});
G__197514.cljs$core$IFn$_invoke$arity$variadic = G__197514__delegate;
return G__197514;
})()
;

return null;
});
