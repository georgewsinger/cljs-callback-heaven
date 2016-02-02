goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12515__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12516__i = 0, G__12516__a = new Array(arguments.length -  0);
while (G__12516__i < G__12516__a.length) {G__12516__a[G__12516__i] = arguments[G__12516__i + 0]; ++G__12516__i;}
  args = new cljs.core.IndexedSeq(G__12516__a,0);
} 
return G__12515__delegate.call(this,args);};
G__12515.cljs$lang$maxFixedArity = 0;
G__12515.cljs$lang$applyTo = (function (arglist__12517){
var args = cljs.core.seq(arglist__12517);
return G__12515__delegate(args);
});
G__12515.cljs$core$IFn$_invoke$arity$variadic = G__12515__delegate;
return G__12515;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12518__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12518 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12519__i = 0, G__12519__a = new Array(arguments.length -  0);
while (G__12519__i < G__12519__a.length) {G__12519__a[G__12519__i] = arguments[G__12519__i + 0]; ++G__12519__i;}
  args = new cljs.core.IndexedSeq(G__12519__a,0);
} 
return G__12518__delegate.call(this,args);};
G__12518.cljs$lang$maxFixedArity = 0;
G__12518.cljs$lang$applyTo = (function (arglist__12520){
var args = cljs.core.seq(arglist__12520);
return G__12518__delegate(args);
});
G__12518.cljs$core$IFn$_invoke$arity$variadic = G__12518__delegate;
return G__12518;
})()
;

return null;
});
