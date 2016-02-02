goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38167__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38167 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38168__i = 0, G__38168__a = new Array(arguments.length -  0);
while (G__38168__i < G__38168__a.length) {G__38168__a[G__38168__i] = arguments[G__38168__i + 0]; ++G__38168__i;}
  args = new cljs.core.IndexedSeq(G__38168__a,0);
} 
return G__38167__delegate.call(this,args);};
G__38167.cljs$lang$maxFixedArity = 0;
G__38167.cljs$lang$applyTo = (function (arglist__38169){
var args = cljs.core.seq(arglist__38169);
return G__38167__delegate(args);
});
G__38167.cljs$core$IFn$_invoke$arity$variadic = G__38167__delegate;
return G__38167;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38170__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38171__i = 0, G__38171__a = new Array(arguments.length -  0);
while (G__38171__i < G__38171__a.length) {G__38171__a[G__38171__i] = arguments[G__38171__i + 0]; ++G__38171__i;}
  args = new cljs.core.IndexedSeq(G__38171__a,0);
} 
return G__38170__delegate.call(this,args);};
G__38170.cljs$lang$maxFixedArity = 0;
G__38170.cljs$lang$applyTo = (function (arglist__38172){
var args = cljs.core.seq(arglist__38172);
return G__38170__delegate(args);
});
G__38170.cljs$core$IFn$_invoke$arity$variadic = G__38170__delegate;
return G__38170;
})()
;

return null;
});
