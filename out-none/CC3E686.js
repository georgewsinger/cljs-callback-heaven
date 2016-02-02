goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__67000__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__67000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67001__i = 0, G__67001__a = new Array(arguments.length -  0);
while (G__67001__i < G__67001__a.length) {G__67001__a[G__67001__i] = arguments[G__67001__i + 0]; ++G__67001__i;}
  args = new cljs.core.IndexedSeq(G__67001__a,0);
} 
return G__67000__delegate.call(this,args);};
G__67000.cljs$lang$maxFixedArity = 0;
G__67000.cljs$lang$applyTo = (function (arglist__67002){
var args = cljs.core.seq(arglist__67002);
return G__67000__delegate(args);
});
G__67000.cljs$core$IFn$_invoke$arity$variadic = G__67000__delegate;
return G__67000;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__67003__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__67003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67004__i = 0, G__67004__a = new Array(arguments.length -  0);
while (G__67004__i < G__67004__a.length) {G__67004__a[G__67004__i] = arguments[G__67004__i + 0]; ++G__67004__i;}
  args = new cljs.core.IndexedSeq(G__67004__a,0);
} 
return G__67003__delegate.call(this,args);};
G__67003.cljs$lang$maxFixedArity = 0;
G__67003.cljs$lang$applyTo = (function (arglist__67005){
var args = cljs.core.seq(arglist__67005);
return G__67003__delegate(args);
});
G__67003.cljs$core$IFn$_invoke$arity$variadic = G__67003__delegate;
return G__67003;
})()
;

return null;
});
