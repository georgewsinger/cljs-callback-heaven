goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18533__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18533 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18534__i = 0, G__18534__a = new Array(arguments.length -  0);
while (G__18534__i < G__18534__a.length) {G__18534__a[G__18534__i] = arguments[G__18534__i + 0]; ++G__18534__i;}
  args = new cljs.core.IndexedSeq(G__18534__a,0);
} 
return G__18533__delegate.call(this,args);};
G__18533.cljs$lang$maxFixedArity = 0;
G__18533.cljs$lang$applyTo = (function (arglist__18535){
var args = cljs.core.seq(arglist__18535);
return G__18533__delegate(args);
});
G__18533.cljs$core$IFn$_invoke$arity$variadic = G__18533__delegate;
return G__18533;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18536__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18537__i = 0, G__18537__a = new Array(arguments.length -  0);
while (G__18537__i < G__18537__a.length) {G__18537__a[G__18537__i] = arguments[G__18537__i + 0]; ++G__18537__i;}
  args = new cljs.core.IndexedSeq(G__18537__a,0);
} 
return G__18536__delegate.call(this,args);};
G__18536.cljs$lang$maxFixedArity = 0;
G__18536.cljs$lang$applyTo = (function (arglist__18538){
var args = cljs.core.seq(arglist__18538);
return G__18536__delegate(args);
});
G__18536.cljs$core$IFn$_invoke$arity$variadic = G__18536__delegate;
return G__18536;
})()
;

return null;
});
