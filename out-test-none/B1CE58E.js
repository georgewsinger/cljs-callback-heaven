goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__123540__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__123540 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__123541__i = 0, G__123541__a = new Array(arguments.length -  0);
while (G__123541__i < G__123541__a.length) {G__123541__a[G__123541__i] = arguments[G__123541__i + 0]; ++G__123541__i;}
  args = new cljs.core.IndexedSeq(G__123541__a,0);
} 
return G__123540__delegate.call(this,args);};
G__123540.cljs$lang$maxFixedArity = 0;
G__123540.cljs$lang$applyTo = (function (arglist__123542){
var args = cljs.core.seq(arglist__123542);
return G__123540__delegate(args);
});
G__123540.cljs$core$IFn$_invoke$arity$variadic = G__123540__delegate;
return G__123540;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__123543__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__123543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__123544__i = 0, G__123544__a = new Array(arguments.length -  0);
while (G__123544__i < G__123544__a.length) {G__123544__a[G__123544__i] = arguments[G__123544__i + 0]; ++G__123544__i;}
  args = new cljs.core.IndexedSeq(G__123544__a,0);
} 
return G__123543__delegate.call(this,args);};
G__123543.cljs$lang$maxFixedArity = 0;
G__123543.cljs$lang$applyTo = (function (arglist__123545){
var args = cljs.core.seq(arglist__123545);
return G__123543__delegate(args);
});
G__123543.cljs$core$IFn$_invoke$arity$variadic = G__123543__delegate;
return G__123543;
})()
;

return null;
});
