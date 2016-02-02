goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20193__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20194__i = 0, G__20194__a = new Array(arguments.length -  0);
while (G__20194__i < G__20194__a.length) {G__20194__a[G__20194__i] = arguments[G__20194__i + 0]; ++G__20194__i;}
  args = new cljs.core.IndexedSeq(G__20194__a,0);
} 
return G__20193__delegate.call(this,args);};
G__20193.cljs$lang$maxFixedArity = 0;
G__20193.cljs$lang$applyTo = (function (arglist__20195){
var args = cljs.core.seq(arglist__20195);
return G__20193__delegate(args);
});
G__20193.cljs$core$IFn$_invoke$arity$variadic = G__20193__delegate;
return G__20193;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20196__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20197__i = 0, G__20197__a = new Array(arguments.length -  0);
while (G__20197__i < G__20197__a.length) {G__20197__a[G__20197__i] = arguments[G__20197__i + 0]; ++G__20197__i;}
  args = new cljs.core.IndexedSeq(G__20197__a,0);
} 
return G__20196__delegate.call(this,args);};
G__20196.cljs$lang$maxFixedArity = 0;
G__20196.cljs$lang$applyTo = (function (arglist__20198){
var args = cljs.core.seq(arglist__20198);
return G__20196__delegate(args);
});
G__20196.cljs$core$IFn$_invoke$arity$variadic = G__20196__delegate;
return G__20196;
})()
;

return null;
});
