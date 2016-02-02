goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9581__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9582__i = 0, G__9582__a = new Array(arguments.length -  0);
while (G__9582__i < G__9582__a.length) {G__9582__a[G__9582__i] = arguments[G__9582__i + 0]; ++G__9582__i;}
  args = new cljs.core.IndexedSeq(G__9582__a,0);
} 
return G__9581__delegate.call(this,args);};
G__9581.cljs$lang$maxFixedArity = 0;
G__9581.cljs$lang$applyTo = (function (arglist__9583){
var args = cljs.core.seq(arglist__9583);
return G__9581__delegate(args);
});
G__9581.cljs$core$IFn$_invoke$arity$variadic = G__9581__delegate;
return G__9581;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9584__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9585__i = 0, G__9585__a = new Array(arguments.length -  0);
while (G__9585__i < G__9585__a.length) {G__9585__a[G__9585__i] = arguments[G__9585__i + 0]; ++G__9585__i;}
  args = new cljs.core.IndexedSeq(G__9585__a,0);
} 
return G__9584__delegate.call(this,args);};
G__9584.cljs$lang$maxFixedArity = 0;
G__9584.cljs$lang$applyTo = (function (arglist__9586){
var args = cljs.core.seq(arglist__9586);
return G__9584__delegate(args);
});
G__9584.cljs$core$IFn$_invoke$arity$variadic = G__9584__delegate;
return G__9584;
})()
;

return null;
});
