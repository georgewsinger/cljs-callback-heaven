goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26355__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26356__i = 0, G__26356__a = new Array(arguments.length -  0);
while (G__26356__i < G__26356__a.length) {G__26356__a[G__26356__i] = arguments[G__26356__i + 0]; ++G__26356__i;}
  args = new cljs.core.IndexedSeq(G__26356__a,0);
} 
return G__26355__delegate.call(this,args);};
G__26355.cljs$lang$maxFixedArity = 0;
G__26355.cljs$lang$applyTo = (function (arglist__26357){
var args = cljs.core.seq(arglist__26357);
return G__26355__delegate(args);
});
G__26355.cljs$core$IFn$_invoke$arity$variadic = G__26355__delegate;
return G__26355;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26358__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26359__i = 0, G__26359__a = new Array(arguments.length -  0);
while (G__26359__i < G__26359__a.length) {G__26359__a[G__26359__i] = arguments[G__26359__i + 0]; ++G__26359__i;}
  args = new cljs.core.IndexedSeq(G__26359__a,0);
} 
return G__26358__delegate.call(this,args);};
G__26358.cljs$lang$maxFixedArity = 0;
G__26358.cljs$lang$applyTo = (function (arglist__26360){
var args = cljs.core.seq(arglist__26360);
return G__26358__delegate(args);
});
G__26358.cljs$core$IFn$_invoke$arity$variadic = G__26358__delegate;
return G__26358;
})()
;

return null;
});
