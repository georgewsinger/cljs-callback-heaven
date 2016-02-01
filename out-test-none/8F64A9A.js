goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15606__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15607__i = 0, G__15607__a = new Array(arguments.length -  0);
while (G__15607__i < G__15607__a.length) {G__15607__a[G__15607__i] = arguments[G__15607__i + 0]; ++G__15607__i;}
  args = new cljs.core.IndexedSeq(G__15607__a,0);
} 
return G__15606__delegate.call(this,args);};
G__15606.cljs$lang$maxFixedArity = 0;
G__15606.cljs$lang$applyTo = (function (arglist__15608){
var args = cljs.core.seq(arglist__15608);
return G__15606__delegate(args);
});
G__15606.cljs$core$IFn$_invoke$arity$variadic = G__15606__delegate;
return G__15606;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15609__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15610__i = 0, G__15610__a = new Array(arguments.length -  0);
while (G__15610__i < G__15610__a.length) {G__15610__a[G__15610__i] = arguments[G__15610__i + 0]; ++G__15610__i;}
  args = new cljs.core.IndexedSeq(G__15610__a,0);
} 
return G__15609__delegate.call(this,args);};
G__15609.cljs$lang$maxFixedArity = 0;
G__15609.cljs$lang$applyTo = (function (arglist__15611){
var args = cljs.core.seq(arglist__15611);
return G__15609__delegate(args);
});
G__15609.cljs$core$IFn$_invoke$arity$variadic = G__15609__delegate;
return G__15609;
})()
;

return null;
});
