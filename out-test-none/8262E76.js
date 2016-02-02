goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9147__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9147 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9148__i = 0, G__9148__a = new Array(arguments.length -  0);
while (G__9148__i < G__9148__a.length) {G__9148__a[G__9148__i] = arguments[G__9148__i + 0]; ++G__9148__i;}
  args = new cljs.core.IndexedSeq(G__9148__a,0);
} 
return G__9147__delegate.call(this,args);};
G__9147.cljs$lang$maxFixedArity = 0;
G__9147.cljs$lang$applyTo = (function (arglist__9149){
var args = cljs.core.seq(arglist__9149);
return G__9147__delegate(args);
});
G__9147.cljs$core$IFn$_invoke$arity$variadic = G__9147__delegate;
return G__9147;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9150__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9151__i = 0, G__9151__a = new Array(arguments.length -  0);
while (G__9151__i < G__9151__a.length) {G__9151__a[G__9151__i] = arguments[G__9151__i + 0]; ++G__9151__i;}
  args = new cljs.core.IndexedSeq(G__9151__a,0);
} 
return G__9150__delegate.call(this,args);};
G__9150.cljs$lang$maxFixedArity = 0;
G__9150.cljs$lang$applyTo = (function (arglist__9152){
var args = cljs.core.seq(arglist__9152);
return G__9150__delegate(args);
});
G__9150.cljs$core$IFn$_invoke$arity$variadic = G__9150__delegate;
return G__9150;
})()
;

return null;
});
