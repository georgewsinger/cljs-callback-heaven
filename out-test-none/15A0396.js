goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24738__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24739__i = 0, G__24739__a = new Array(arguments.length -  0);
while (G__24739__i < G__24739__a.length) {G__24739__a[G__24739__i] = arguments[G__24739__i + 0]; ++G__24739__i;}
  args = new cljs.core.IndexedSeq(G__24739__a,0);
} 
return G__24738__delegate.call(this,args);};
G__24738.cljs$lang$maxFixedArity = 0;
G__24738.cljs$lang$applyTo = (function (arglist__24740){
var args = cljs.core.seq(arglist__24740);
return G__24738__delegate(args);
});
G__24738.cljs$core$IFn$_invoke$arity$variadic = G__24738__delegate;
return G__24738;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24741__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24742__i = 0, G__24742__a = new Array(arguments.length -  0);
while (G__24742__i < G__24742__a.length) {G__24742__a[G__24742__i] = arguments[G__24742__i + 0]; ++G__24742__i;}
  args = new cljs.core.IndexedSeq(G__24742__a,0);
} 
return G__24741__delegate.call(this,args);};
G__24741.cljs$lang$maxFixedArity = 0;
G__24741.cljs$lang$applyTo = (function (arglist__24743){
var args = cljs.core.seq(arglist__24743);
return G__24741__delegate(args);
});
G__24741.cljs$core$IFn$_invoke$arity$variadic = G__24741__delegate;
return G__24741;
})()
;

return null;
});
