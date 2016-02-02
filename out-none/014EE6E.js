goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22079__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22079 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22080__i = 0, G__22080__a = new Array(arguments.length -  0);
while (G__22080__i < G__22080__a.length) {G__22080__a[G__22080__i] = arguments[G__22080__i + 0]; ++G__22080__i;}
  args = new cljs.core.IndexedSeq(G__22080__a,0);
} 
return G__22079__delegate.call(this,args);};
G__22079.cljs$lang$maxFixedArity = 0;
G__22079.cljs$lang$applyTo = (function (arglist__22081){
var args = cljs.core.seq(arglist__22081);
return G__22079__delegate(args);
});
G__22079.cljs$core$IFn$_invoke$arity$variadic = G__22079__delegate;
return G__22079;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22082__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22083__i = 0, G__22083__a = new Array(arguments.length -  0);
while (G__22083__i < G__22083__a.length) {G__22083__a[G__22083__i] = arguments[G__22083__i + 0]; ++G__22083__i;}
  args = new cljs.core.IndexedSeq(G__22083__a,0);
} 
return G__22082__delegate.call(this,args);};
G__22082.cljs$lang$maxFixedArity = 0;
G__22082.cljs$lang$applyTo = (function (arglist__22084){
var args = cljs.core.seq(arglist__22084);
return G__22082__delegate(args);
});
G__22082.cljs$core$IFn$_invoke$arity$variadic = G__22082__delegate;
return G__22082;
})()
;

return null;
});
