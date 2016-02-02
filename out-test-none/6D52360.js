goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10756__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10757__i = 0, G__10757__a = new Array(arguments.length -  0);
while (G__10757__i < G__10757__a.length) {G__10757__a[G__10757__i] = arguments[G__10757__i + 0]; ++G__10757__i;}
  args = new cljs.core.IndexedSeq(G__10757__a,0);
} 
return G__10756__delegate.call(this,args);};
G__10756.cljs$lang$maxFixedArity = 0;
G__10756.cljs$lang$applyTo = (function (arglist__10758){
var args = cljs.core.seq(arglist__10758);
return G__10756__delegate(args);
});
G__10756.cljs$core$IFn$_invoke$arity$variadic = G__10756__delegate;
return G__10756;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10759__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10759 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10760__i = 0, G__10760__a = new Array(arguments.length -  0);
while (G__10760__i < G__10760__a.length) {G__10760__a[G__10760__i] = arguments[G__10760__i + 0]; ++G__10760__i;}
  args = new cljs.core.IndexedSeq(G__10760__a,0);
} 
return G__10759__delegate.call(this,args);};
G__10759.cljs$lang$maxFixedArity = 0;
G__10759.cljs$lang$applyTo = (function (arglist__10761){
var args = cljs.core.seq(arglist__10761);
return G__10759__delegate(args);
});
G__10759.cljs$core$IFn$_invoke$arity$variadic = G__10759__delegate;
return G__10759;
})()
;

return null;
});
