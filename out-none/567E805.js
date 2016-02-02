goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59621__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59622__i = 0, G__59622__a = new Array(arguments.length -  0);
while (G__59622__i < G__59622__a.length) {G__59622__a[G__59622__i] = arguments[G__59622__i + 0]; ++G__59622__i;}
  args = new cljs.core.IndexedSeq(G__59622__a,0);
} 
return G__59621__delegate.call(this,args);};
G__59621.cljs$lang$maxFixedArity = 0;
G__59621.cljs$lang$applyTo = (function (arglist__59623){
var args = cljs.core.seq(arglist__59623);
return G__59621__delegate(args);
});
G__59621.cljs$core$IFn$_invoke$arity$variadic = G__59621__delegate;
return G__59621;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59624__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59624 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59625__i = 0, G__59625__a = new Array(arguments.length -  0);
while (G__59625__i < G__59625__a.length) {G__59625__a[G__59625__i] = arguments[G__59625__i + 0]; ++G__59625__i;}
  args = new cljs.core.IndexedSeq(G__59625__a,0);
} 
return G__59624__delegate.call(this,args);};
G__59624.cljs$lang$maxFixedArity = 0;
G__59624.cljs$lang$applyTo = (function (arglist__59626){
var args = cljs.core.seq(arglist__59626);
return G__59624__delegate(args);
});
G__59624.cljs$core$IFn$_invoke$arity$variadic = G__59624__delegate;
return G__59624;
})()
;

return null;
});
