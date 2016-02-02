goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13076__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13077__i = 0, G__13077__a = new Array(arguments.length -  0);
while (G__13077__i < G__13077__a.length) {G__13077__a[G__13077__i] = arguments[G__13077__i + 0]; ++G__13077__i;}
  args = new cljs.core.IndexedSeq(G__13077__a,0);
} 
return G__13076__delegate.call(this,args);};
G__13076.cljs$lang$maxFixedArity = 0;
G__13076.cljs$lang$applyTo = (function (arglist__13078){
var args = cljs.core.seq(arglist__13078);
return G__13076__delegate(args);
});
G__13076.cljs$core$IFn$_invoke$arity$variadic = G__13076__delegate;
return G__13076;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13079__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13080__i = 0, G__13080__a = new Array(arguments.length -  0);
while (G__13080__i < G__13080__a.length) {G__13080__a[G__13080__i] = arguments[G__13080__i + 0]; ++G__13080__i;}
  args = new cljs.core.IndexedSeq(G__13080__a,0);
} 
return G__13079__delegate.call(this,args);};
G__13079.cljs$lang$maxFixedArity = 0;
G__13079.cljs$lang$applyTo = (function (arglist__13081){
var args = cljs.core.seq(arglist__13081);
return G__13079__delegate(args);
});
G__13079.cljs$core$IFn$_invoke$arity$variadic = G__13079__delegate;
return G__13079;
})()
;

return null;
});
