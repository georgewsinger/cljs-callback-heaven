goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77008__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77008 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77009__i = 0, G__77009__a = new Array(arguments.length -  0);
while (G__77009__i < G__77009__a.length) {G__77009__a[G__77009__i] = arguments[G__77009__i + 0]; ++G__77009__i;}
  args = new cljs.core.IndexedSeq(G__77009__a,0);
} 
return G__77008__delegate.call(this,args);};
G__77008.cljs$lang$maxFixedArity = 0;
G__77008.cljs$lang$applyTo = (function (arglist__77010){
var args = cljs.core.seq(arglist__77010);
return G__77008__delegate(args);
});
G__77008.cljs$core$IFn$_invoke$arity$variadic = G__77008__delegate;
return G__77008;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77011__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77012__i = 0, G__77012__a = new Array(arguments.length -  0);
while (G__77012__i < G__77012__a.length) {G__77012__a[G__77012__i] = arguments[G__77012__i + 0]; ++G__77012__i;}
  args = new cljs.core.IndexedSeq(G__77012__a,0);
} 
return G__77011__delegate.call(this,args);};
G__77011.cljs$lang$maxFixedArity = 0;
G__77011.cljs$lang$applyTo = (function (arglist__77013){
var args = cljs.core.seq(arglist__77013);
return G__77011__delegate(args);
});
G__77011.cljs$core$IFn$_invoke$arity$variadic = G__77011__delegate;
return G__77011;
})()
;

return null;
});
