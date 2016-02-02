goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17259__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17260__i = 0, G__17260__a = new Array(arguments.length -  0);
while (G__17260__i < G__17260__a.length) {G__17260__a[G__17260__i] = arguments[G__17260__i + 0]; ++G__17260__i;}
  args = new cljs.core.IndexedSeq(G__17260__a,0);
} 
return G__17259__delegate.call(this,args);};
G__17259.cljs$lang$maxFixedArity = 0;
G__17259.cljs$lang$applyTo = (function (arglist__17261){
var args = cljs.core.seq(arglist__17261);
return G__17259__delegate(args);
});
G__17259.cljs$core$IFn$_invoke$arity$variadic = G__17259__delegate;
return G__17259;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17262__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17263__i = 0, G__17263__a = new Array(arguments.length -  0);
while (G__17263__i < G__17263__a.length) {G__17263__a[G__17263__i] = arguments[G__17263__i + 0]; ++G__17263__i;}
  args = new cljs.core.IndexedSeq(G__17263__a,0);
} 
return G__17262__delegate.call(this,args);};
G__17262.cljs$lang$maxFixedArity = 0;
G__17262.cljs$lang$applyTo = (function (arglist__17264){
var args = cljs.core.seq(arglist__17264);
return G__17262__delegate(args);
});
G__17262.cljs$core$IFn$_invoke$arity$variadic = G__17262__delegate;
return G__17262;
})()
;

return null;
});
