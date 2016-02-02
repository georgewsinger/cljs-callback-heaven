goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26516__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26516 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26517__i = 0, G__26517__a = new Array(arguments.length -  0);
while (G__26517__i < G__26517__a.length) {G__26517__a[G__26517__i] = arguments[G__26517__i + 0]; ++G__26517__i;}
  args = new cljs.core.IndexedSeq(G__26517__a,0);
} 
return G__26516__delegate.call(this,args);};
G__26516.cljs$lang$maxFixedArity = 0;
G__26516.cljs$lang$applyTo = (function (arglist__26518){
var args = cljs.core.seq(arglist__26518);
return G__26516__delegate(args);
});
G__26516.cljs$core$IFn$_invoke$arity$variadic = G__26516__delegate;
return G__26516;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26519__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26519 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26520__i = 0, G__26520__a = new Array(arguments.length -  0);
while (G__26520__i < G__26520__a.length) {G__26520__a[G__26520__i] = arguments[G__26520__i + 0]; ++G__26520__i;}
  args = new cljs.core.IndexedSeq(G__26520__a,0);
} 
return G__26519__delegate.call(this,args);};
G__26519.cljs$lang$maxFixedArity = 0;
G__26519.cljs$lang$applyTo = (function (arglist__26521){
var args = cljs.core.seq(arglist__26521);
return G__26519__delegate(args);
});
G__26519.cljs$core$IFn$_invoke$arity$variadic = G__26519__delegate;
return G__26519;
})()
;

return null;
});
