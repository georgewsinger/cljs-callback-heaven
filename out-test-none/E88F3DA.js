goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__8069__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__8069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8070__i = 0, G__8070__a = new Array(arguments.length -  0);
while (G__8070__i < G__8070__a.length) {G__8070__a[G__8070__i] = arguments[G__8070__i + 0]; ++G__8070__i;}
  args = new cljs.core.IndexedSeq(G__8070__a,0);
} 
return G__8069__delegate.call(this,args);};
G__8069.cljs$lang$maxFixedArity = 0;
G__8069.cljs$lang$applyTo = (function (arglist__8071){
var args = cljs.core.seq(arglist__8071);
return G__8069__delegate(args);
});
G__8069.cljs$core$IFn$_invoke$arity$variadic = G__8069__delegate;
return G__8069;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__8072__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__8072 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8073__i = 0, G__8073__a = new Array(arguments.length -  0);
while (G__8073__i < G__8073__a.length) {G__8073__a[G__8073__i] = arguments[G__8073__i + 0]; ++G__8073__i;}
  args = new cljs.core.IndexedSeq(G__8073__a,0);
} 
return G__8072__delegate.call(this,args);};
G__8072.cljs$lang$maxFixedArity = 0;
G__8072.cljs$lang$applyTo = (function (arglist__8074){
var args = cljs.core.seq(arglist__8074);
return G__8072__delegate(args);
});
G__8072.cljs$core$IFn$_invoke$arity$variadic = G__8072__delegate;
return G__8072;
})()
;

return null;
});
