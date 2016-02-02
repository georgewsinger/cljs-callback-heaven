goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17061__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17062__i = 0, G__17062__a = new Array(arguments.length -  0);
while (G__17062__i < G__17062__a.length) {G__17062__a[G__17062__i] = arguments[G__17062__i + 0]; ++G__17062__i;}
  args = new cljs.core.IndexedSeq(G__17062__a,0);
} 
return G__17061__delegate.call(this,args);};
G__17061.cljs$lang$maxFixedArity = 0;
G__17061.cljs$lang$applyTo = (function (arglist__17063){
var args = cljs.core.seq(arglist__17063);
return G__17061__delegate(args);
});
G__17061.cljs$core$IFn$_invoke$arity$variadic = G__17061__delegate;
return G__17061;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17064__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17065__i = 0, G__17065__a = new Array(arguments.length -  0);
while (G__17065__i < G__17065__a.length) {G__17065__a[G__17065__i] = arguments[G__17065__i + 0]; ++G__17065__i;}
  args = new cljs.core.IndexedSeq(G__17065__a,0);
} 
return G__17064__delegate.call(this,args);};
G__17064.cljs$lang$maxFixedArity = 0;
G__17064.cljs$lang$applyTo = (function (arglist__17066){
var args = cljs.core.seq(arglist__17066);
return G__17064__delegate(args);
});
G__17064.cljs$core$IFn$_invoke$arity$variadic = G__17064__delegate;
return G__17064;
})()
;

return null;
});
