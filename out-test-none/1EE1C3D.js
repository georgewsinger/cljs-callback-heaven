goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28322__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28322 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28323__i = 0, G__28323__a = new Array(arguments.length -  0);
while (G__28323__i < G__28323__a.length) {G__28323__a[G__28323__i] = arguments[G__28323__i + 0]; ++G__28323__i;}
  args = new cljs.core.IndexedSeq(G__28323__a,0);
} 
return G__28322__delegate.call(this,args);};
G__28322.cljs$lang$maxFixedArity = 0;
G__28322.cljs$lang$applyTo = (function (arglist__28324){
var args = cljs.core.seq(arglist__28324);
return G__28322__delegate(args);
});
G__28322.cljs$core$IFn$_invoke$arity$variadic = G__28322__delegate;
return G__28322;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28325__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28326__i = 0, G__28326__a = new Array(arguments.length -  0);
while (G__28326__i < G__28326__a.length) {G__28326__a[G__28326__i] = arguments[G__28326__i + 0]; ++G__28326__i;}
  args = new cljs.core.IndexedSeq(G__28326__a,0);
} 
return G__28325__delegate.call(this,args);};
G__28325.cljs$lang$maxFixedArity = 0;
G__28325.cljs$lang$applyTo = (function (arglist__28327){
var args = cljs.core.seq(arglist__28327);
return G__28325__delegate(args);
});
G__28325.cljs$core$IFn$_invoke$arity$variadic = G__28325__delegate;
return G__28325;
})()
;

return null;
});
