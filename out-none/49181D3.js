goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15135__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15136__i = 0, G__15136__a = new Array(arguments.length -  0);
while (G__15136__i < G__15136__a.length) {G__15136__a[G__15136__i] = arguments[G__15136__i + 0]; ++G__15136__i;}
  args = new cljs.core.IndexedSeq(G__15136__a,0);
} 
return G__15135__delegate.call(this,args);};
G__15135.cljs$lang$maxFixedArity = 0;
G__15135.cljs$lang$applyTo = (function (arglist__15137){
var args = cljs.core.seq(arglist__15137);
return G__15135__delegate(args);
});
G__15135.cljs$core$IFn$_invoke$arity$variadic = G__15135__delegate;
return G__15135;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15138__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15139__i = 0, G__15139__a = new Array(arguments.length -  0);
while (G__15139__i < G__15139__a.length) {G__15139__a[G__15139__i] = arguments[G__15139__i + 0]; ++G__15139__i;}
  args = new cljs.core.IndexedSeq(G__15139__a,0);
} 
return G__15138__delegate.call(this,args);};
G__15138.cljs$lang$maxFixedArity = 0;
G__15138.cljs$lang$applyTo = (function (arglist__15140){
var args = cljs.core.seq(arglist__15140);
return G__15138__delegate(args);
});
G__15138.cljs$core$IFn$_invoke$arity$variadic = G__15138__delegate;
return G__15138;
})()
;

return null;
});
