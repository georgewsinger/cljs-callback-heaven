goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12025__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12026__i = 0, G__12026__a = new Array(arguments.length -  0);
while (G__12026__i < G__12026__a.length) {G__12026__a[G__12026__i] = arguments[G__12026__i + 0]; ++G__12026__i;}
  args = new cljs.core.IndexedSeq(G__12026__a,0);
} 
return G__12025__delegate.call(this,args);};
G__12025.cljs$lang$maxFixedArity = 0;
G__12025.cljs$lang$applyTo = (function (arglist__12027){
var args = cljs.core.seq(arglist__12027);
return G__12025__delegate(args);
});
G__12025.cljs$core$IFn$_invoke$arity$variadic = G__12025__delegate;
return G__12025;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12028__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12029__i = 0, G__12029__a = new Array(arguments.length -  0);
while (G__12029__i < G__12029__a.length) {G__12029__a[G__12029__i] = arguments[G__12029__i + 0]; ++G__12029__i;}
  args = new cljs.core.IndexedSeq(G__12029__a,0);
} 
return G__12028__delegate.call(this,args);};
G__12028.cljs$lang$maxFixedArity = 0;
G__12028.cljs$lang$applyTo = (function (arglist__12030){
var args = cljs.core.seq(arglist__12030);
return G__12028__delegate(args);
});
G__12028.cljs$core$IFn$_invoke$arity$variadic = G__12028__delegate;
return G__12028;
})()
;

return null;
});
