goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26267__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26268__i = 0, G__26268__a = new Array(arguments.length -  0);
while (G__26268__i < G__26268__a.length) {G__26268__a[G__26268__i] = arguments[G__26268__i + 0]; ++G__26268__i;}
  args = new cljs.core.IndexedSeq(G__26268__a,0);
} 
return G__26267__delegate.call(this,args);};
G__26267.cljs$lang$maxFixedArity = 0;
G__26267.cljs$lang$applyTo = (function (arglist__26269){
var args = cljs.core.seq(arglist__26269);
return G__26267__delegate(args);
});
G__26267.cljs$core$IFn$_invoke$arity$variadic = G__26267__delegate;
return G__26267;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26270__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26270 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26271__i = 0, G__26271__a = new Array(arguments.length -  0);
while (G__26271__i < G__26271__a.length) {G__26271__a[G__26271__i] = arguments[G__26271__i + 0]; ++G__26271__i;}
  args = new cljs.core.IndexedSeq(G__26271__a,0);
} 
return G__26270__delegate.call(this,args);};
G__26270.cljs$lang$maxFixedArity = 0;
G__26270.cljs$lang$applyTo = (function (arglist__26272){
var args = cljs.core.seq(arglist__26272);
return G__26270__delegate(args);
});
G__26270.cljs$core$IFn$_invoke$arity$variadic = G__26270__delegate;
return G__26270;
})()
;

return null;
});
