goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__184863__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__184863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184864__i = 0, G__184864__a = new Array(arguments.length -  0);
while (G__184864__i < G__184864__a.length) {G__184864__a[G__184864__i] = arguments[G__184864__i + 0]; ++G__184864__i;}
  args = new cljs.core.IndexedSeq(G__184864__a,0);
} 
return G__184863__delegate.call(this,args);};
G__184863.cljs$lang$maxFixedArity = 0;
G__184863.cljs$lang$applyTo = (function (arglist__184865){
var args = cljs.core.seq(arglist__184865);
return G__184863__delegate(args);
});
G__184863.cljs$core$IFn$_invoke$arity$variadic = G__184863__delegate;
return G__184863;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__184866__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__184866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__184867__i = 0, G__184867__a = new Array(arguments.length -  0);
while (G__184867__i < G__184867__a.length) {G__184867__a[G__184867__i] = arguments[G__184867__i + 0]; ++G__184867__i;}
  args = new cljs.core.IndexedSeq(G__184867__a,0);
} 
return G__184866__delegate.call(this,args);};
G__184866.cljs$lang$maxFixedArity = 0;
G__184866.cljs$lang$applyTo = (function (arglist__184868){
var args = cljs.core.seq(arglist__184868);
return G__184866__delegate(args);
});
G__184866.cljs$core$IFn$_invoke$arity$variadic = G__184866__delegate;
return G__184866;
})()
;

return null;
});
