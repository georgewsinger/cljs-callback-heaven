goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30132__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30132 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30133__i = 0, G__30133__a = new Array(arguments.length -  0);
while (G__30133__i < G__30133__a.length) {G__30133__a[G__30133__i] = arguments[G__30133__i + 0]; ++G__30133__i;}
  args = new cljs.core.IndexedSeq(G__30133__a,0);
} 
return G__30132__delegate.call(this,args);};
G__30132.cljs$lang$maxFixedArity = 0;
G__30132.cljs$lang$applyTo = (function (arglist__30134){
var args = cljs.core.seq(arglist__30134);
return G__30132__delegate(args);
});
G__30132.cljs$core$IFn$_invoke$arity$variadic = G__30132__delegate;
return G__30132;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30135__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30136__i = 0, G__30136__a = new Array(arguments.length -  0);
while (G__30136__i < G__30136__a.length) {G__30136__a[G__30136__i] = arguments[G__30136__i + 0]; ++G__30136__i;}
  args = new cljs.core.IndexedSeq(G__30136__a,0);
} 
return G__30135__delegate.call(this,args);};
G__30135.cljs$lang$maxFixedArity = 0;
G__30135.cljs$lang$applyTo = (function (arglist__30137){
var args = cljs.core.seq(arglist__30137);
return G__30135__delegate(args);
});
G__30135.cljs$core$IFn$_invoke$arity$variadic = G__30135__delegate;
return G__30135;
})()
;

return null;
});
