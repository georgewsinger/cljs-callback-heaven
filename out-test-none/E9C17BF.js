goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15707__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15708__i = 0, G__15708__a = new Array(arguments.length -  0);
while (G__15708__i < G__15708__a.length) {G__15708__a[G__15708__i] = arguments[G__15708__i + 0]; ++G__15708__i;}
  args = new cljs.core.IndexedSeq(G__15708__a,0);
} 
return G__15707__delegate.call(this,args);};
G__15707.cljs$lang$maxFixedArity = 0;
G__15707.cljs$lang$applyTo = (function (arglist__15709){
var args = cljs.core.seq(arglist__15709);
return G__15707__delegate(args);
});
G__15707.cljs$core$IFn$_invoke$arity$variadic = G__15707__delegate;
return G__15707;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15710__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15710 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15711__i = 0, G__15711__a = new Array(arguments.length -  0);
while (G__15711__i < G__15711__a.length) {G__15711__a[G__15711__i] = arguments[G__15711__i + 0]; ++G__15711__i;}
  args = new cljs.core.IndexedSeq(G__15711__a,0);
} 
return G__15710__delegate.call(this,args);};
G__15710.cljs$lang$maxFixedArity = 0;
G__15710.cljs$lang$applyTo = (function (arglist__15712){
var args = cljs.core.seq(arglist__15712);
return G__15710__delegate(args);
});
G__15710.cljs$core$IFn$_invoke$arity$variadic = G__15710__delegate;
return G__15710;
})()
;

return null;
});
