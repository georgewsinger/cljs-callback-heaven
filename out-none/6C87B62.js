goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12183__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12184__i = 0, G__12184__a = new Array(arguments.length -  0);
while (G__12184__i < G__12184__a.length) {G__12184__a[G__12184__i] = arguments[G__12184__i + 0]; ++G__12184__i;}
  args = new cljs.core.IndexedSeq(G__12184__a,0);
} 
return G__12183__delegate.call(this,args);};
G__12183.cljs$lang$maxFixedArity = 0;
G__12183.cljs$lang$applyTo = (function (arglist__12185){
var args = cljs.core.seq(arglist__12185);
return G__12183__delegate(args);
});
G__12183.cljs$core$IFn$_invoke$arity$variadic = G__12183__delegate;
return G__12183;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12186__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12187__i = 0, G__12187__a = new Array(arguments.length -  0);
while (G__12187__i < G__12187__a.length) {G__12187__a[G__12187__i] = arguments[G__12187__i + 0]; ++G__12187__i;}
  args = new cljs.core.IndexedSeq(G__12187__a,0);
} 
return G__12186__delegate.call(this,args);};
G__12186.cljs$lang$maxFixedArity = 0;
G__12186.cljs$lang$applyTo = (function (arglist__12188){
var args = cljs.core.seq(arglist__12188);
return G__12186__delegate(args);
});
G__12186.cljs$core$IFn$_invoke$arity$variadic = G__12186__delegate;
return G__12186;
})()
;

return null;
});
