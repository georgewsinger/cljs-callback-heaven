goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25165__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25166__i = 0, G__25166__a = new Array(arguments.length -  0);
while (G__25166__i < G__25166__a.length) {G__25166__a[G__25166__i] = arguments[G__25166__i + 0]; ++G__25166__i;}
  args = new cljs.core.IndexedSeq(G__25166__a,0);
} 
return G__25165__delegate.call(this,args);};
G__25165.cljs$lang$maxFixedArity = 0;
G__25165.cljs$lang$applyTo = (function (arglist__25167){
var args = cljs.core.seq(arglist__25167);
return G__25165__delegate(args);
});
G__25165.cljs$core$IFn$_invoke$arity$variadic = G__25165__delegate;
return G__25165;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25168__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25169__i = 0, G__25169__a = new Array(arguments.length -  0);
while (G__25169__i < G__25169__a.length) {G__25169__a[G__25169__i] = arguments[G__25169__i + 0]; ++G__25169__i;}
  args = new cljs.core.IndexedSeq(G__25169__a,0);
} 
return G__25168__delegate.call(this,args);};
G__25168.cljs$lang$maxFixedArity = 0;
G__25168.cljs$lang$applyTo = (function (arglist__25170){
var args = cljs.core.seq(arglist__25170);
return G__25168__delegate(args);
});
G__25168.cljs$core$IFn$_invoke$arity$variadic = G__25168__delegate;
return G__25168;
})()
;

return null;
});
