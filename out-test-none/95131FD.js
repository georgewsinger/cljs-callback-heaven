goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31111__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31112__i = 0, G__31112__a = new Array(arguments.length -  0);
while (G__31112__i < G__31112__a.length) {G__31112__a[G__31112__i] = arguments[G__31112__i + 0]; ++G__31112__i;}
  args = new cljs.core.IndexedSeq(G__31112__a,0);
} 
return G__31111__delegate.call(this,args);};
G__31111.cljs$lang$maxFixedArity = 0;
G__31111.cljs$lang$applyTo = (function (arglist__31113){
var args = cljs.core.seq(arglist__31113);
return G__31111__delegate(args);
});
G__31111.cljs$core$IFn$_invoke$arity$variadic = G__31111__delegate;
return G__31111;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31114__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31115__i = 0, G__31115__a = new Array(arguments.length -  0);
while (G__31115__i < G__31115__a.length) {G__31115__a[G__31115__i] = arguments[G__31115__i + 0]; ++G__31115__i;}
  args = new cljs.core.IndexedSeq(G__31115__a,0);
} 
return G__31114__delegate.call(this,args);};
G__31114.cljs$lang$maxFixedArity = 0;
G__31114.cljs$lang$applyTo = (function (arglist__31116){
var args = cljs.core.seq(arglist__31116);
return G__31114__delegate(args);
});
G__31114.cljs$core$IFn$_invoke$arity$variadic = G__31114__delegate;
return G__31114;
})()
;

return null;
});
