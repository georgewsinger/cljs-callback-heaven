goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14807__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14807 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14808__i = 0, G__14808__a = new Array(arguments.length -  0);
while (G__14808__i < G__14808__a.length) {G__14808__a[G__14808__i] = arguments[G__14808__i + 0]; ++G__14808__i;}
  args = new cljs.core.IndexedSeq(G__14808__a,0);
} 
return G__14807__delegate.call(this,args);};
G__14807.cljs$lang$maxFixedArity = 0;
G__14807.cljs$lang$applyTo = (function (arglist__14809){
var args = cljs.core.seq(arglist__14809);
return G__14807__delegate(args);
});
G__14807.cljs$core$IFn$_invoke$arity$variadic = G__14807__delegate;
return G__14807;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14810__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14811__i = 0, G__14811__a = new Array(arguments.length -  0);
while (G__14811__i < G__14811__a.length) {G__14811__a[G__14811__i] = arguments[G__14811__i + 0]; ++G__14811__i;}
  args = new cljs.core.IndexedSeq(G__14811__a,0);
} 
return G__14810__delegate.call(this,args);};
G__14810.cljs$lang$maxFixedArity = 0;
G__14810.cljs$lang$applyTo = (function (arglist__14812){
var args = cljs.core.seq(arglist__14812);
return G__14810__delegate(args);
});
G__14810.cljs$core$IFn$_invoke$arity$variadic = G__14810__delegate;
return G__14810;
})()
;

return null;
});
