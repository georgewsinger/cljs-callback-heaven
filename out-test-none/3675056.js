goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9613__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9614__i = 0, G__9614__a = new Array(arguments.length -  0);
while (G__9614__i < G__9614__a.length) {G__9614__a[G__9614__i] = arguments[G__9614__i + 0]; ++G__9614__i;}
  args = new cljs.core.IndexedSeq(G__9614__a,0);
} 
return G__9613__delegate.call(this,args);};
G__9613.cljs$lang$maxFixedArity = 0;
G__9613.cljs$lang$applyTo = (function (arglist__9615){
var args = cljs.core.seq(arglist__9615);
return G__9613__delegate(args);
});
G__9613.cljs$core$IFn$_invoke$arity$variadic = G__9613__delegate;
return G__9613;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9616__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9617__i = 0, G__9617__a = new Array(arguments.length -  0);
while (G__9617__i < G__9617__a.length) {G__9617__a[G__9617__i] = arguments[G__9617__i + 0]; ++G__9617__i;}
  args = new cljs.core.IndexedSeq(G__9617__a,0);
} 
return G__9616__delegate.call(this,args);};
G__9616.cljs$lang$maxFixedArity = 0;
G__9616.cljs$lang$applyTo = (function (arglist__9618){
var args = cljs.core.seq(arglist__9618);
return G__9616__delegate(args);
});
G__9616.cljs$core$IFn$_invoke$arity$variadic = G__9616__delegate;
return G__9616;
})()
;

return null;
});
