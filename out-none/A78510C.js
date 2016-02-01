goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9087__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9088__i = 0, G__9088__a = new Array(arguments.length -  0);
while (G__9088__i < G__9088__a.length) {G__9088__a[G__9088__i] = arguments[G__9088__i + 0]; ++G__9088__i;}
  args = new cljs.core.IndexedSeq(G__9088__a,0);
} 
return G__9087__delegate.call(this,args);};
G__9087.cljs$lang$maxFixedArity = 0;
G__9087.cljs$lang$applyTo = (function (arglist__9089){
var args = cljs.core.seq(arglist__9089);
return G__9087__delegate(args);
});
G__9087.cljs$core$IFn$_invoke$arity$variadic = G__9087__delegate;
return G__9087;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9090__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9091__i = 0, G__9091__a = new Array(arguments.length -  0);
while (G__9091__i < G__9091__a.length) {G__9091__a[G__9091__i] = arguments[G__9091__i + 0]; ++G__9091__i;}
  args = new cljs.core.IndexedSeq(G__9091__a,0);
} 
return G__9090__delegate.call(this,args);};
G__9090.cljs$lang$maxFixedArity = 0;
G__9090.cljs$lang$applyTo = (function (arglist__9092){
var args = cljs.core.seq(arglist__9092);
return G__9090__delegate(args);
});
G__9090.cljs$core$IFn$_invoke$arity$variadic = G__9090__delegate;
return G__9090;
})()
;

return null;
});
