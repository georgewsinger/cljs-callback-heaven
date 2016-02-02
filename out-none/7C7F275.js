goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24644__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24645__i = 0, G__24645__a = new Array(arguments.length -  0);
while (G__24645__i < G__24645__a.length) {G__24645__a[G__24645__i] = arguments[G__24645__i + 0]; ++G__24645__i;}
  args = new cljs.core.IndexedSeq(G__24645__a,0);
} 
return G__24644__delegate.call(this,args);};
G__24644.cljs$lang$maxFixedArity = 0;
G__24644.cljs$lang$applyTo = (function (arglist__24646){
var args = cljs.core.seq(arglist__24646);
return G__24644__delegate(args);
});
G__24644.cljs$core$IFn$_invoke$arity$variadic = G__24644__delegate;
return G__24644;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24647__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24648__i = 0, G__24648__a = new Array(arguments.length -  0);
while (G__24648__i < G__24648__a.length) {G__24648__a[G__24648__i] = arguments[G__24648__i + 0]; ++G__24648__i;}
  args = new cljs.core.IndexedSeq(G__24648__a,0);
} 
return G__24647__delegate.call(this,args);};
G__24647.cljs$lang$maxFixedArity = 0;
G__24647.cljs$lang$applyTo = (function (arglist__24649){
var args = cljs.core.seq(arglist__24649);
return G__24647__delegate(args);
});
G__24647.cljs$core$IFn$_invoke$arity$variadic = G__24647__delegate;
return G__24647;
})()
;

return null;
});
