goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46548__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46548 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46549__i = 0, G__46549__a = new Array(arguments.length -  0);
while (G__46549__i < G__46549__a.length) {G__46549__a[G__46549__i] = arguments[G__46549__i + 0]; ++G__46549__i;}
  args = new cljs.core.IndexedSeq(G__46549__a,0);
} 
return G__46548__delegate.call(this,args);};
G__46548.cljs$lang$maxFixedArity = 0;
G__46548.cljs$lang$applyTo = (function (arglist__46550){
var args = cljs.core.seq(arglist__46550);
return G__46548__delegate(args);
});
G__46548.cljs$core$IFn$_invoke$arity$variadic = G__46548__delegate;
return G__46548;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46551__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46552__i = 0, G__46552__a = new Array(arguments.length -  0);
while (G__46552__i < G__46552__a.length) {G__46552__a[G__46552__i] = arguments[G__46552__i + 0]; ++G__46552__i;}
  args = new cljs.core.IndexedSeq(G__46552__a,0);
} 
return G__46551__delegate.call(this,args);};
G__46551.cljs$lang$maxFixedArity = 0;
G__46551.cljs$lang$applyTo = (function (arglist__46553){
var args = cljs.core.seq(arglist__46553);
return G__46551__delegate(args);
});
G__46551.cljs$core$IFn$_invoke$arity$variadic = G__46551__delegate;
return G__46551;
})()
;

return null;
});
