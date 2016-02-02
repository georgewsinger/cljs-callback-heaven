goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39264__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39265__i = 0, G__39265__a = new Array(arguments.length -  0);
while (G__39265__i < G__39265__a.length) {G__39265__a[G__39265__i] = arguments[G__39265__i + 0]; ++G__39265__i;}
  args = new cljs.core.IndexedSeq(G__39265__a,0);
} 
return G__39264__delegate.call(this,args);};
G__39264.cljs$lang$maxFixedArity = 0;
G__39264.cljs$lang$applyTo = (function (arglist__39266){
var args = cljs.core.seq(arglist__39266);
return G__39264__delegate(args);
});
G__39264.cljs$core$IFn$_invoke$arity$variadic = G__39264__delegate;
return G__39264;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39267__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39268__i = 0, G__39268__a = new Array(arguments.length -  0);
while (G__39268__i < G__39268__a.length) {G__39268__a[G__39268__i] = arguments[G__39268__i + 0]; ++G__39268__i;}
  args = new cljs.core.IndexedSeq(G__39268__a,0);
} 
return G__39267__delegate.call(this,args);};
G__39267.cljs$lang$maxFixedArity = 0;
G__39267.cljs$lang$applyTo = (function (arglist__39269){
var args = cljs.core.seq(arglist__39269);
return G__39267__delegate(args);
});
G__39267.cljs$core$IFn$_invoke$arity$variadic = G__39267__delegate;
return G__39267;
})()
;

return null;
});
