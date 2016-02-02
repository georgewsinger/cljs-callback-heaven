goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39360__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39360 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39361__i = 0, G__39361__a = new Array(arguments.length -  0);
while (G__39361__i < G__39361__a.length) {G__39361__a[G__39361__i] = arguments[G__39361__i + 0]; ++G__39361__i;}
  args = new cljs.core.IndexedSeq(G__39361__a,0);
} 
return G__39360__delegate.call(this,args);};
G__39360.cljs$lang$maxFixedArity = 0;
G__39360.cljs$lang$applyTo = (function (arglist__39362){
var args = cljs.core.seq(arglist__39362);
return G__39360__delegate(args);
});
G__39360.cljs$core$IFn$_invoke$arity$variadic = G__39360__delegate;
return G__39360;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39363__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39363 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39364__i = 0, G__39364__a = new Array(arguments.length -  0);
while (G__39364__i < G__39364__a.length) {G__39364__a[G__39364__i] = arguments[G__39364__i + 0]; ++G__39364__i;}
  args = new cljs.core.IndexedSeq(G__39364__a,0);
} 
return G__39363__delegate.call(this,args);};
G__39363.cljs$lang$maxFixedArity = 0;
G__39363.cljs$lang$applyTo = (function (arglist__39365){
var args = cljs.core.seq(arglist__39365);
return G__39363__delegate(args);
});
G__39363.cljs$core$IFn$_invoke$arity$variadic = G__39363__delegate;
return G__39363;
})()
;

return null;
});
