goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21616__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21616 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21617__i = 0, G__21617__a = new Array(arguments.length -  0);
while (G__21617__i < G__21617__a.length) {G__21617__a[G__21617__i] = arguments[G__21617__i + 0]; ++G__21617__i;}
  args = new cljs.core.IndexedSeq(G__21617__a,0);
} 
return G__21616__delegate.call(this,args);};
G__21616.cljs$lang$maxFixedArity = 0;
G__21616.cljs$lang$applyTo = (function (arglist__21618){
var args = cljs.core.seq(arglist__21618);
return G__21616__delegate(args);
});
G__21616.cljs$core$IFn$_invoke$arity$variadic = G__21616__delegate;
return G__21616;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21619__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21620__i = 0, G__21620__a = new Array(arguments.length -  0);
while (G__21620__i < G__21620__a.length) {G__21620__a[G__21620__i] = arguments[G__21620__i + 0]; ++G__21620__i;}
  args = new cljs.core.IndexedSeq(G__21620__a,0);
} 
return G__21619__delegate.call(this,args);};
G__21619.cljs$lang$maxFixedArity = 0;
G__21619.cljs$lang$applyTo = (function (arglist__21621){
var args = cljs.core.seq(arglist__21621);
return G__21619__delegate(args);
});
G__21619.cljs$core$IFn$_invoke$arity$variadic = G__21619__delegate;
return G__21619;
})()
;

return null;
});
