goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10584__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10585__i = 0, G__10585__a = new Array(arguments.length -  0);
while (G__10585__i < G__10585__a.length) {G__10585__a[G__10585__i] = arguments[G__10585__i + 0]; ++G__10585__i;}
  args = new cljs.core.IndexedSeq(G__10585__a,0);
} 
return G__10584__delegate.call(this,args);};
G__10584.cljs$lang$maxFixedArity = 0;
G__10584.cljs$lang$applyTo = (function (arglist__10586){
var args = cljs.core.seq(arglist__10586);
return G__10584__delegate(args);
});
G__10584.cljs$core$IFn$_invoke$arity$variadic = G__10584__delegate;
return G__10584;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10587__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10588__i = 0, G__10588__a = new Array(arguments.length -  0);
while (G__10588__i < G__10588__a.length) {G__10588__a[G__10588__i] = arguments[G__10588__i + 0]; ++G__10588__i;}
  args = new cljs.core.IndexedSeq(G__10588__a,0);
} 
return G__10587__delegate.call(this,args);};
G__10587.cljs$lang$maxFixedArity = 0;
G__10587.cljs$lang$applyTo = (function (arglist__10589){
var args = cljs.core.seq(arglist__10589);
return G__10587__delegate(args);
});
G__10587.cljs$core$IFn$_invoke$arity$variadic = G__10587__delegate;
return G__10587;
})()
;

return null;
});
