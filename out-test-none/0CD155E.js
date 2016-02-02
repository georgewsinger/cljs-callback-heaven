goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26464__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26465__i = 0, G__26465__a = new Array(arguments.length -  0);
while (G__26465__i < G__26465__a.length) {G__26465__a[G__26465__i] = arguments[G__26465__i + 0]; ++G__26465__i;}
  args = new cljs.core.IndexedSeq(G__26465__a,0);
} 
return G__26464__delegate.call(this,args);};
G__26464.cljs$lang$maxFixedArity = 0;
G__26464.cljs$lang$applyTo = (function (arglist__26466){
var args = cljs.core.seq(arglist__26466);
return G__26464__delegate(args);
});
G__26464.cljs$core$IFn$_invoke$arity$variadic = G__26464__delegate;
return G__26464;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26467__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26468__i = 0, G__26468__a = new Array(arguments.length -  0);
while (G__26468__i < G__26468__a.length) {G__26468__a[G__26468__i] = arguments[G__26468__i + 0]; ++G__26468__i;}
  args = new cljs.core.IndexedSeq(G__26468__a,0);
} 
return G__26467__delegate.call(this,args);};
G__26467.cljs$lang$maxFixedArity = 0;
G__26467.cljs$lang$applyTo = (function (arglist__26469){
var args = cljs.core.seq(arglist__26469);
return G__26467__delegate(args);
});
G__26467.cljs$core$IFn$_invoke$arity$variadic = G__26467__delegate;
return G__26467;
})()
;

return null;
});
