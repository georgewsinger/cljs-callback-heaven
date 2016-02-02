goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__215863__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__215863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__215864__i = 0, G__215864__a = new Array(arguments.length -  0);
while (G__215864__i < G__215864__a.length) {G__215864__a[G__215864__i] = arguments[G__215864__i + 0]; ++G__215864__i;}
  args = new cljs.core.IndexedSeq(G__215864__a,0);
} 
return G__215863__delegate.call(this,args);};
G__215863.cljs$lang$maxFixedArity = 0;
G__215863.cljs$lang$applyTo = (function (arglist__215865){
var args = cljs.core.seq(arglist__215865);
return G__215863__delegate(args);
});
G__215863.cljs$core$IFn$_invoke$arity$variadic = G__215863__delegate;
return G__215863;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__215866__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__215866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__215867__i = 0, G__215867__a = new Array(arguments.length -  0);
while (G__215867__i < G__215867__a.length) {G__215867__a[G__215867__i] = arguments[G__215867__i + 0]; ++G__215867__i;}
  args = new cljs.core.IndexedSeq(G__215867__a,0);
} 
return G__215866__delegate.call(this,args);};
G__215866.cljs$lang$maxFixedArity = 0;
G__215866.cljs$lang$applyTo = (function (arglist__215868){
var args = cljs.core.seq(arglist__215868);
return G__215866__delegate(args);
});
G__215866.cljs$core$IFn$_invoke$arity$variadic = G__215866__delegate;
return G__215866;
})()
;

return null;
});
