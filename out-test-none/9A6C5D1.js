goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15109__i = 0, G__15109__a = new Array(arguments.length -  0);
while (G__15109__i < G__15109__a.length) {G__15109__a[G__15109__i] = arguments[G__15109__i + 0]; ++G__15109__i;}
  args = new cljs.core.IndexedSeq(G__15109__a,0);
} 
return G__15108__delegate.call(this,args);};
G__15108.cljs$lang$maxFixedArity = 0;
G__15108.cljs$lang$applyTo = (function (arglist__15110){
var args = cljs.core.seq(arglist__15110);
return G__15108__delegate(args);
});
G__15108.cljs$core$IFn$_invoke$arity$variadic = G__15108__delegate;
return G__15108;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15112__i = 0, G__15112__a = new Array(arguments.length -  0);
while (G__15112__i < G__15112__a.length) {G__15112__a[G__15112__i] = arguments[G__15112__i + 0]; ++G__15112__i;}
  args = new cljs.core.IndexedSeq(G__15112__a,0);
} 
return G__15111__delegate.call(this,args);};
G__15111.cljs$lang$maxFixedArity = 0;
G__15111.cljs$lang$applyTo = (function (arglist__15113){
var args = cljs.core.seq(arglist__15113);
return G__15111__delegate(args);
});
G__15111.cljs$core$IFn$_invoke$arity$variadic = G__15111__delegate;
return G__15111;
})()
;

return null;
});
