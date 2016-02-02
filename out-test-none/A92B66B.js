goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32387__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32388__i = 0, G__32388__a = new Array(arguments.length -  0);
while (G__32388__i < G__32388__a.length) {G__32388__a[G__32388__i] = arguments[G__32388__i + 0]; ++G__32388__i;}
  args = new cljs.core.IndexedSeq(G__32388__a,0);
} 
return G__32387__delegate.call(this,args);};
G__32387.cljs$lang$maxFixedArity = 0;
G__32387.cljs$lang$applyTo = (function (arglist__32389){
var args = cljs.core.seq(arglist__32389);
return G__32387__delegate(args);
});
G__32387.cljs$core$IFn$_invoke$arity$variadic = G__32387__delegate;
return G__32387;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32390__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32391__i = 0, G__32391__a = new Array(arguments.length -  0);
while (G__32391__i < G__32391__a.length) {G__32391__a[G__32391__i] = arguments[G__32391__i + 0]; ++G__32391__i;}
  args = new cljs.core.IndexedSeq(G__32391__a,0);
} 
return G__32390__delegate.call(this,args);};
G__32390.cljs$lang$maxFixedArity = 0;
G__32390.cljs$lang$applyTo = (function (arglist__32392){
var args = cljs.core.seq(arglist__32392);
return G__32390__delegate(args);
});
G__32390.cljs$core$IFn$_invoke$arity$variadic = G__32390__delegate;
return G__32390;
})()
;

return null;
});
