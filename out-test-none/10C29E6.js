goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__37591__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__37591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37592__i = 0, G__37592__a = new Array(arguments.length -  0);
while (G__37592__i < G__37592__a.length) {G__37592__a[G__37592__i] = arguments[G__37592__i + 0]; ++G__37592__i;}
  args = new cljs.core.IndexedSeq(G__37592__a,0);
} 
return G__37591__delegate.call(this,args);};
G__37591.cljs$lang$maxFixedArity = 0;
G__37591.cljs$lang$applyTo = (function (arglist__37593){
var args = cljs.core.seq(arglist__37593);
return G__37591__delegate(args);
});
G__37591.cljs$core$IFn$_invoke$arity$variadic = G__37591__delegate;
return G__37591;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__37594__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__37594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37595__i = 0, G__37595__a = new Array(arguments.length -  0);
while (G__37595__i < G__37595__a.length) {G__37595__a[G__37595__i] = arguments[G__37595__i + 0]; ++G__37595__i;}
  args = new cljs.core.IndexedSeq(G__37595__a,0);
} 
return G__37594__delegate.call(this,args);};
G__37594.cljs$lang$maxFixedArity = 0;
G__37594.cljs$lang$applyTo = (function (arglist__37596){
var args = cljs.core.seq(arglist__37596);
return G__37594__delegate(args);
});
G__37594.cljs$core$IFn$_invoke$arity$variadic = G__37594__delegate;
return G__37594;
})()
;

return null;
});
