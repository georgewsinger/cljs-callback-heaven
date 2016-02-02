goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11075__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11075 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11076__i = 0, G__11076__a = new Array(arguments.length -  0);
while (G__11076__i < G__11076__a.length) {G__11076__a[G__11076__i] = arguments[G__11076__i + 0]; ++G__11076__i;}
  args = new cljs.core.IndexedSeq(G__11076__a,0);
} 
return G__11075__delegate.call(this,args);};
G__11075.cljs$lang$maxFixedArity = 0;
G__11075.cljs$lang$applyTo = (function (arglist__11077){
var args = cljs.core.seq(arglist__11077);
return G__11075__delegate(args);
});
G__11075.cljs$core$IFn$_invoke$arity$variadic = G__11075__delegate;
return G__11075;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11078__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11078 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11079__i = 0, G__11079__a = new Array(arguments.length -  0);
while (G__11079__i < G__11079__a.length) {G__11079__a[G__11079__i] = arguments[G__11079__i + 0]; ++G__11079__i;}
  args = new cljs.core.IndexedSeq(G__11079__a,0);
} 
return G__11078__delegate.call(this,args);};
G__11078.cljs$lang$maxFixedArity = 0;
G__11078.cljs$lang$applyTo = (function (arglist__11080){
var args = cljs.core.seq(arglist__11080);
return G__11078__delegate(args);
});
G__11078.cljs$core$IFn$_invoke$arity$variadic = G__11078__delegate;
return G__11078;
})()
;

return null;
});
