goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18619__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18619 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18620__i = 0, G__18620__a = new Array(arguments.length -  0);
while (G__18620__i < G__18620__a.length) {G__18620__a[G__18620__i] = arguments[G__18620__i + 0]; ++G__18620__i;}
  args = new cljs.core.IndexedSeq(G__18620__a,0);
} 
return G__18619__delegate.call(this,args);};
G__18619.cljs$lang$maxFixedArity = 0;
G__18619.cljs$lang$applyTo = (function (arglist__18621){
var args = cljs.core.seq(arglist__18621);
return G__18619__delegate(args);
});
G__18619.cljs$core$IFn$_invoke$arity$variadic = G__18619__delegate;
return G__18619;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18622__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18623__i = 0, G__18623__a = new Array(arguments.length -  0);
while (G__18623__i < G__18623__a.length) {G__18623__a[G__18623__i] = arguments[G__18623__i + 0]; ++G__18623__i;}
  args = new cljs.core.IndexedSeq(G__18623__a,0);
} 
return G__18622__delegate.call(this,args);};
G__18622.cljs$lang$maxFixedArity = 0;
G__18622.cljs$lang$applyTo = (function (arglist__18624){
var args = cljs.core.seq(arglist__18624);
return G__18622__delegate(args);
});
G__18622.cljs$core$IFn$_invoke$arity$variadic = G__18622__delegate;
return G__18622;
})()
;

return null;
});
