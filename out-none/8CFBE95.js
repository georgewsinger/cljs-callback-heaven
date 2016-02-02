goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28844__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28845__i = 0, G__28845__a = new Array(arguments.length -  0);
while (G__28845__i < G__28845__a.length) {G__28845__a[G__28845__i] = arguments[G__28845__i + 0]; ++G__28845__i;}
  args = new cljs.core.IndexedSeq(G__28845__a,0);
} 
return G__28844__delegate.call(this,args);};
G__28844.cljs$lang$maxFixedArity = 0;
G__28844.cljs$lang$applyTo = (function (arglist__28846){
var args = cljs.core.seq(arglist__28846);
return G__28844__delegate(args);
});
G__28844.cljs$core$IFn$_invoke$arity$variadic = G__28844__delegate;
return G__28844;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28847__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28847 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28848__i = 0, G__28848__a = new Array(arguments.length -  0);
while (G__28848__i < G__28848__a.length) {G__28848__a[G__28848__i] = arguments[G__28848__i + 0]; ++G__28848__i;}
  args = new cljs.core.IndexedSeq(G__28848__a,0);
} 
return G__28847__delegate.call(this,args);};
G__28847.cljs$lang$maxFixedArity = 0;
G__28847.cljs$lang$applyTo = (function (arglist__28849){
var args = cljs.core.seq(arglist__28849);
return G__28847__delegate(args);
});
G__28847.cljs$core$IFn$_invoke$arity$variadic = G__28847__delegate;
return G__28847;
})()
;

return null;
});
