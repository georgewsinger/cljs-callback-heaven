goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20204__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20205__i = 0, G__20205__a = new Array(arguments.length -  0);
while (G__20205__i < G__20205__a.length) {G__20205__a[G__20205__i] = arguments[G__20205__i + 0]; ++G__20205__i;}
  args = new cljs.core.IndexedSeq(G__20205__a,0);
} 
return G__20204__delegate.call(this,args);};
G__20204.cljs$lang$maxFixedArity = 0;
G__20204.cljs$lang$applyTo = (function (arglist__20206){
var args = cljs.core.seq(arglist__20206);
return G__20204__delegate(args);
});
G__20204.cljs$core$IFn$_invoke$arity$variadic = G__20204__delegate;
return G__20204;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20207__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20208__i = 0, G__20208__a = new Array(arguments.length -  0);
while (G__20208__i < G__20208__a.length) {G__20208__a[G__20208__i] = arguments[G__20208__i + 0]; ++G__20208__i;}
  args = new cljs.core.IndexedSeq(G__20208__a,0);
} 
return G__20207__delegate.call(this,args);};
G__20207.cljs$lang$maxFixedArity = 0;
G__20207.cljs$lang$applyTo = (function (arglist__20209){
var args = cljs.core.seq(arglist__20209);
return G__20207__delegate(args);
});
G__20207.cljs$core$IFn$_invoke$arity$variadic = G__20207__delegate;
return G__20207;
})()
;

return null;
});
