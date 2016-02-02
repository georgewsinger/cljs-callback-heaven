goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63109__i = 0, G__63109__a = new Array(arguments.length -  0);
while (G__63109__i < G__63109__a.length) {G__63109__a[G__63109__i] = arguments[G__63109__i + 0]; ++G__63109__i;}
  args = new cljs.core.IndexedSeq(G__63109__a,0);
} 
return G__63108__delegate.call(this,args);};
G__63108.cljs$lang$maxFixedArity = 0;
G__63108.cljs$lang$applyTo = (function (arglist__63110){
var args = cljs.core.seq(arglist__63110);
return G__63108__delegate(args);
});
G__63108.cljs$core$IFn$_invoke$arity$variadic = G__63108__delegate;
return G__63108;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63112__i = 0, G__63112__a = new Array(arguments.length -  0);
while (G__63112__i < G__63112__a.length) {G__63112__a[G__63112__i] = arguments[G__63112__i + 0]; ++G__63112__i;}
  args = new cljs.core.IndexedSeq(G__63112__a,0);
} 
return G__63111__delegate.call(this,args);};
G__63111.cljs$lang$maxFixedArity = 0;
G__63111.cljs$lang$applyTo = (function (arglist__63113){
var args = cljs.core.seq(arglist__63113);
return G__63111__delegate(args);
});
G__63111.cljs$core$IFn$_invoke$arity$variadic = G__63111__delegate;
return G__63111;
})()
;

return null;
});
