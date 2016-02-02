goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28235__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28236__i = 0, G__28236__a = new Array(arguments.length -  0);
while (G__28236__i < G__28236__a.length) {G__28236__a[G__28236__i] = arguments[G__28236__i + 0]; ++G__28236__i;}
  args = new cljs.core.IndexedSeq(G__28236__a,0);
} 
return G__28235__delegate.call(this,args);};
G__28235.cljs$lang$maxFixedArity = 0;
G__28235.cljs$lang$applyTo = (function (arglist__28237){
var args = cljs.core.seq(arglist__28237);
return G__28235__delegate(args);
});
G__28235.cljs$core$IFn$_invoke$arity$variadic = G__28235__delegate;
return G__28235;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28238__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28239__i = 0, G__28239__a = new Array(arguments.length -  0);
while (G__28239__i < G__28239__a.length) {G__28239__a[G__28239__i] = arguments[G__28239__i + 0]; ++G__28239__i;}
  args = new cljs.core.IndexedSeq(G__28239__a,0);
} 
return G__28238__delegate.call(this,args);};
G__28238.cljs$lang$maxFixedArity = 0;
G__28238.cljs$lang$applyTo = (function (arglist__28240){
var args = cljs.core.seq(arglist__28240);
return G__28238__delegate(args);
});
G__28238.cljs$core$IFn$_invoke$arity$variadic = G__28238__delegate;
return G__28238;
})()
;

return null;
});
