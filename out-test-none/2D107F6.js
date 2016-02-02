goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13744__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13745__i = 0, G__13745__a = new Array(arguments.length -  0);
while (G__13745__i < G__13745__a.length) {G__13745__a[G__13745__i] = arguments[G__13745__i + 0]; ++G__13745__i;}
  args = new cljs.core.IndexedSeq(G__13745__a,0);
} 
return G__13744__delegate.call(this,args);};
G__13744.cljs$lang$maxFixedArity = 0;
G__13744.cljs$lang$applyTo = (function (arglist__13746){
var args = cljs.core.seq(arglist__13746);
return G__13744__delegate(args);
});
G__13744.cljs$core$IFn$_invoke$arity$variadic = G__13744__delegate;
return G__13744;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13747__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13747 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13748__i = 0, G__13748__a = new Array(arguments.length -  0);
while (G__13748__i < G__13748__a.length) {G__13748__a[G__13748__i] = arguments[G__13748__i + 0]; ++G__13748__i;}
  args = new cljs.core.IndexedSeq(G__13748__a,0);
} 
return G__13747__delegate.call(this,args);};
G__13747.cljs$lang$maxFixedArity = 0;
G__13747.cljs$lang$applyTo = (function (arglist__13749){
var args = cljs.core.seq(arglist__13749);
return G__13747__delegate(args);
});
G__13747.cljs$core$IFn$_invoke$arity$variadic = G__13747__delegate;
return G__13747;
})()
;

return null;
});
