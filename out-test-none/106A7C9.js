goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18163__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18164__i = 0, G__18164__a = new Array(arguments.length -  0);
while (G__18164__i < G__18164__a.length) {G__18164__a[G__18164__i] = arguments[G__18164__i + 0]; ++G__18164__i;}
  args = new cljs.core.IndexedSeq(G__18164__a,0);
} 
return G__18163__delegate.call(this,args);};
G__18163.cljs$lang$maxFixedArity = 0;
G__18163.cljs$lang$applyTo = (function (arglist__18165){
var args = cljs.core.seq(arglist__18165);
return G__18163__delegate(args);
});
G__18163.cljs$core$IFn$_invoke$arity$variadic = G__18163__delegate;
return G__18163;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18166__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18167__i = 0, G__18167__a = new Array(arguments.length -  0);
while (G__18167__i < G__18167__a.length) {G__18167__a[G__18167__i] = arguments[G__18167__i + 0]; ++G__18167__i;}
  args = new cljs.core.IndexedSeq(G__18167__a,0);
} 
return G__18166__delegate.call(this,args);};
G__18166.cljs$lang$maxFixedArity = 0;
G__18166.cljs$lang$applyTo = (function (arglist__18168){
var args = cljs.core.seq(arglist__18168);
return G__18166__delegate(args);
});
G__18166.cljs$core$IFn$_invoke$arity$variadic = G__18166__delegate;
return G__18166;
})()
;

return null;
});
