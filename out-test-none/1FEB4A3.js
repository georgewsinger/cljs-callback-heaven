goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16893__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16894__i = 0, G__16894__a = new Array(arguments.length -  0);
while (G__16894__i < G__16894__a.length) {G__16894__a[G__16894__i] = arguments[G__16894__i + 0]; ++G__16894__i;}
  args = new cljs.core.IndexedSeq(G__16894__a,0);
} 
return G__16893__delegate.call(this,args);};
G__16893.cljs$lang$maxFixedArity = 0;
G__16893.cljs$lang$applyTo = (function (arglist__16895){
var args = cljs.core.seq(arglist__16895);
return G__16893__delegate(args);
});
G__16893.cljs$core$IFn$_invoke$arity$variadic = G__16893__delegate;
return G__16893;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16896__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16897__i = 0, G__16897__a = new Array(arguments.length -  0);
while (G__16897__i < G__16897__a.length) {G__16897__a[G__16897__i] = arguments[G__16897__i + 0]; ++G__16897__i;}
  args = new cljs.core.IndexedSeq(G__16897__a,0);
} 
return G__16896__delegate.call(this,args);};
G__16896.cljs$lang$maxFixedArity = 0;
G__16896.cljs$lang$applyTo = (function (arglist__16898){
var args = cljs.core.seq(arglist__16898);
return G__16896__delegate(args);
});
G__16896.cljs$core$IFn$_invoke$arity$variadic = G__16896__delegate;
return G__16896;
})()
;

return null;
});
