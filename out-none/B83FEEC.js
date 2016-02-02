goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26697__i = 0, G__26697__a = new Array(arguments.length -  0);
while (G__26697__i < G__26697__a.length) {G__26697__a[G__26697__i] = arguments[G__26697__i + 0]; ++G__26697__i;}
  args = new cljs.core.IndexedSeq(G__26697__a,0);
} 
return G__26696__delegate.call(this,args);};
G__26696.cljs$lang$maxFixedArity = 0;
G__26696.cljs$lang$applyTo = (function (arglist__26698){
var args = cljs.core.seq(arglist__26698);
return G__26696__delegate(args);
});
G__26696.cljs$core$IFn$_invoke$arity$variadic = G__26696__delegate;
return G__26696;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26700__i = 0, G__26700__a = new Array(arguments.length -  0);
while (G__26700__i < G__26700__a.length) {G__26700__a[G__26700__i] = arguments[G__26700__i + 0]; ++G__26700__i;}
  args = new cljs.core.IndexedSeq(G__26700__a,0);
} 
return G__26699__delegate.call(this,args);};
G__26699.cljs$lang$maxFixedArity = 0;
G__26699.cljs$lang$applyTo = (function (arglist__26701){
var args = cljs.core.seq(arglist__26701);
return G__26699__delegate(args);
});
G__26699.cljs$core$IFn$_invoke$arity$variadic = G__26699__delegate;
return G__26699;
})()
;

return null;
});
