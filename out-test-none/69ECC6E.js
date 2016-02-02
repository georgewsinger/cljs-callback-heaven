goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25478__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25479__i = 0, G__25479__a = new Array(arguments.length -  0);
while (G__25479__i < G__25479__a.length) {G__25479__a[G__25479__i] = arguments[G__25479__i + 0]; ++G__25479__i;}
  args = new cljs.core.IndexedSeq(G__25479__a,0);
} 
return G__25478__delegate.call(this,args);};
G__25478.cljs$lang$maxFixedArity = 0;
G__25478.cljs$lang$applyTo = (function (arglist__25480){
var args = cljs.core.seq(arglist__25480);
return G__25478__delegate(args);
});
G__25478.cljs$core$IFn$_invoke$arity$variadic = G__25478__delegate;
return G__25478;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25481__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25482__i = 0, G__25482__a = new Array(arguments.length -  0);
while (G__25482__i < G__25482__a.length) {G__25482__a[G__25482__i] = arguments[G__25482__i + 0]; ++G__25482__i;}
  args = new cljs.core.IndexedSeq(G__25482__a,0);
} 
return G__25481__delegate.call(this,args);};
G__25481.cljs$lang$maxFixedArity = 0;
G__25481.cljs$lang$applyTo = (function (arglist__25483){
var args = cljs.core.seq(arglist__25483);
return G__25481__delegate(args);
});
G__25481.cljs$core$IFn$_invoke$arity$variadic = G__25481__delegate;
return G__25481;
})()
;

return null;
});
