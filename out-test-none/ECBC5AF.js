goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23327__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23328__i = 0, G__23328__a = new Array(arguments.length -  0);
while (G__23328__i < G__23328__a.length) {G__23328__a[G__23328__i] = arguments[G__23328__i + 0]; ++G__23328__i;}
  args = new cljs.core.IndexedSeq(G__23328__a,0);
} 
return G__23327__delegate.call(this,args);};
G__23327.cljs$lang$maxFixedArity = 0;
G__23327.cljs$lang$applyTo = (function (arglist__23329){
var args = cljs.core.seq(arglist__23329);
return G__23327__delegate(args);
});
G__23327.cljs$core$IFn$_invoke$arity$variadic = G__23327__delegate;
return G__23327;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23330__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23331__i = 0, G__23331__a = new Array(arguments.length -  0);
while (G__23331__i < G__23331__a.length) {G__23331__a[G__23331__i] = arguments[G__23331__i + 0]; ++G__23331__i;}
  args = new cljs.core.IndexedSeq(G__23331__a,0);
} 
return G__23330__delegate.call(this,args);};
G__23330.cljs$lang$maxFixedArity = 0;
G__23330.cljs$lang$applyTo = (function (arglist__23332){
var args = cljs.core.seq(arglist__23332);
return G__23330__delegate(args);
});
G__23330.cljs$core$IFn$_invoke$arity$variadic = G__23330__delegate;
return G__23330;
})()
;

return null;
});
