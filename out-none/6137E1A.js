goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53409__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53410__i = 0, G__53410__a = new Array(arguments.length -  0);
while (G__53410__i < G__53410__a.length) {G__53410__a[G__53410__i] = arguments[G__53410__i + 0]; ++G__53410__i;}
  args = new cljs.core.IndexedSeq(G__53410__a,0);
} 
return G__53409__delegate.call(this,args);};
G__53409.cljs$lang$maxFixedArity = 0;
G__53409.cljs$lang$applyTo = (function (arglist__53411){
var args = cljs.core.seq(arglist__53411);
return G__53409__delegate(args);
});
G__53409.cljs$core$IFn$_invoke$arity$variadic = G__53409__delegate;
return G__53409;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53412__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53413__i = 0, G__53413__a = new Array(arguments.length -  0);
while (G__53413__i < G__53413__a.length) {G__53413__a[G__53413__i] = arguments[G__53413__i + 0]; ++G__53413__i;}
  args = new cljs.core.IndexedSeq(G__53413__a,0);
} 
return G__53412__delegate.call(this,args);};
G__53412.cljs$lang$maxFixedArity = 0;
G__53412.cljs$lang$applyTo = (function (arglist__53414){
var args = cljs.core.seq(arglist__53414);
return G__53412__delegate(args);
});
G__53412.cljs$core$IFn$_invoke$arity$variadic = G__53412__delegate;
return G__53412;
})()
;

return null;
});
