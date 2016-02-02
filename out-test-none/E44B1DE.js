goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28490__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28491__i = 0, G__28491__a = new Array(arguments.length -  0);
while (G__28491__i < G__28491__a.length) {G__28491__a[G__28491__i] = arguments[G__28491__i + 0]; ++G__28491__i;}
  args = new cljs.core.IndexedSeq(G__28491__a,0);
} 
return G__28490__delegate.call(this,args);};
G__28490.cljs$lang$maxFixedArity = 0;
G__28490.cljs$lang$applyTo = (function (arglist__28492){
var args = cljs.core.seq(arglist__28492);
return G__28490__delegate(args);
});
G__28490.cljs$core$IFn$_invoke$arity$variadic = G__28490__delegate;
return G__28490;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28493__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28493 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28494__i = 0, G__28494__a = new Array(arguments.length -  0);
while (G__28494__i < G__28494__a.length) {G__28494__a[G__28494__i] = arguments[G__28494__i + 0]; ++G__28494__i;}
  args = new cljs.core.IndexedSeq(G__28494__a,0);
} 
return G__28493__delegate.call(this,args);};
G__28493.cljs$lang$maxFixedArity = 0;
G__28493.cljs$lang$applyTo = (function (arglist__28495){
var args = cljs.core.seq(arglist__28495);
return G__28493__delegate(args);
});
G__28493.cljs$core$IFn$_invoke$arity$variadic = G__28493__delegate;
return G__28493;
})()
;

return null;
});
