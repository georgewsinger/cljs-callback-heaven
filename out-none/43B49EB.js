goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17455__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17456__i = 0, G__17456__a = new Array(arguments.length -  0);
while (G__17456__i < G__17456__a.length) {G__17456__a[G__17456__i] = arguments[G__17456__i + 0]; ++G__17456__i;}
  args = new cljs.core.IndexedSeq(G__17456__a,0);
} 
return G__17455__delegate.call(this,args);};
G__17455.cljs$lang$maxFixedArity = 0;
G__17455.cljs$lang$applyTo = (function (arglist__17457){
var args = cljs.core.seq(arglist__17457);
return G__17455__delegate(args);
});
G__17455.cljs$core$IFn$_invoke$arity$variadic = G__17455__delegate;
return G__17455;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17458__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17459__i = 0, G__17459__a = new Array(arguments.length -  0);
while (G__17459__i < G__17459__a.length) {G__17459__a[G__17459__i] = arguments[G__17459__i + 0]; ++G__17459__i;}
  args = new cljs.core.IndexedSeq(G__17459__a,0);
} 
return G__17458__delegate.call(this,args);};
G__17458.cljs$lang$maxFixedArity = 0;
G__17458.cljs$lang$applyTo = (function (arglist__17460){
var args = cljs.core.seq(arglist__17460);
return G__17458__delegate(args);
});
G__17458.cljs$core$IFn$_invoke$arity$variadic = G__17458__delegate;
return G__17458;
})()
;

return null;
});
