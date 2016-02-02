goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43278__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43279__i = 0, G__43279__a = new Array(arguments.length -  0);
while (G__43279__i < G__43279__a.length) {G__43279__a[G__43279__i] = arguments[G__43279__i + 0]; ++G__43279__i;}
  args = new cljs.core.IndexedSeq(G__43279__a,0);
} 
return G__43278__delegate.call(this,args);};
G__43278.cljs$lang$maxFixedArity = 0;
G__43278.cljs$lang$applyTo = (function (arglist__43280){
var args = cljs.core.seq(arglist__43280);
return G__43278__delegate(args);
});
G__43278.cljs$core$IFn$_invoke$arity$variadic = G__43278__delegate;
return G__43278;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43281__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43282__i = 0, G__43282__a = new Array(arguments.length -  0);
while (G__43282__i < G__43282__a.length) {G__43282__a[G__43282__i] = arguments[G__43282__i + 0]; ++G__43282__i;}
  args = new cljs.core.IndexedSeq(G__43282__a,0);
} 
return G__43281__delegate.call(this,args);};
G__43281.cljs$lang$maxFixedArity = 0;
G__43281.cljs$lang$applyTo = (function (arglist__43283){
var args = cljs.core.seq(arglist__43283);
return G__43281__delegate(args);
});
G__43281.cljs$core$IFn$_invoke$arity$variadic = G__43281__delegate;
return G__43281;
})()
;

return null;
});
