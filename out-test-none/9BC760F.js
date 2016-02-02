goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35103__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35104__i = 0, G__35104__a = new Array(arguments.length -  0);
while (G__35104__i < G__35104__a.length) {G__35104__a[G__35104__i] = arguments[G__35104__i + 0]; ++G__35104__i;}
  args = new cljs.core.IndexedSeq(G__35104__a,0);
} 
return G__35103__delegate.call(this,args);};
G__35103.cljs$lang$maxFixedArity = 0;
G__35103.cljs$lang$applyTo = (function (arglist__35105){
var args = cljs.core.seq(arglist__35105);
return G__35103__delegate(args);
});
G__35103.cljs$core$IFn$_invoke$arity$variadic = G__35103__delegate;
return G__35103;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35106__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35106 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35107__i = 0, G__35107__a = new Array(arguments.length -  0);
while (G__35107__i < G__35107__a.length) {G__35107__a[G__35107__i] = arguments[G__35107__i + 0]; ++G__35107__i;}
  args = new cljs.core.IndexedSeq(G__35107__a,0);
} 
return G__35106__delegate.call(this,args);};
G__35106.cljs$lang$maxFixedArity = 0;
G__35106.cljs$lang$applyTo = (function (arglist__35108){
var args = cljs.core.seq(arglist__35108);
return G__35106__delegate(args);
});
G__35106.cljs$core$IFn$_invoke$arity$variadic = G__35106__delegate;
return G__35106;
})()
;

return null;
});
