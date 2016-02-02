goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41076__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41077__i = 0, G__41077__a = new Array(arguments.length -  0);
while (G__41077__i < G__41077__a.length) {G__41077__a[G__41077__i] = arguments[G__41077__i + 0]; ++G__41077__i;}
  args = new cljs.core.IndexedSeq(G__41077__a,0);
} 
return G__41076__delegate.call(this,args);};
G__41076.cljs$lang$maxFixedArity = 0;
G__41076.cljs$lang$applyTo = (function (arglist__41078){
var args = cljs.core.seq(arglist__41078);
return G__41076__delegate(args);
});
G__41076.cljs$core$IFn$_invoke$arity$variadic = G__41076__delegate;
return G__41076;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41079__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41080__i = 0, G__41080__a = new Array(arguments.length -  0);
while (G__41080__i < G__41080__a.length) {G__41080__a[G__41080__i] = arguments[G__41080__i + 0]; ++G__41080__i;}
  args = new cljs.core.IndexedSeq(G__41080__a,0);
} 
return G__41079__delegate.call(this,args);};
G__41079.cljs$lang$maxFixedArity = 0;
G__41079.cljs$lang$applyTo = (function (arglist__41081){
var args = cljs.core.seq(arglist__41081);
return G__41079__delegate(args);
});
G__41079.cljs$core$IFn$_invoke$arity$variadic = G__41079__delegate;
return G__41079;
})()
;

return null;
});
