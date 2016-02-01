goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15857__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15857 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15858__i = 0, G__15858__a = new Array(arguments.length -  0);
while (G__15858__i < G__15858__a.length) {G__15858__a[G__15858__i] = arguments[G__15858__i + 0]; ++G__15858__i;}
  args = new cljs.core.IndexedSeq(G__15858__a,0);
} 
return G__15857__delegate.call(this,args);};
G__15857.cljs$lang$maxFixedArity = 0;
G__15857.cljs$lang$applyTo = (function (arglist__15859){
var args = cljs.core.seq(arglist__15859);
return G__15857__delegate(args);
});
G__15857.cljs$core$IFn$_invoke$arity$variadic = G__15857__delegate;
return G__15857;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15860__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15861__i = 0, G__15861__a = new Array(arguments.length -  0);
while (G__15861__i < G__15861__a.length) {G__15861__a[G__15861__i] = arguments[G__15861__i + 0]; ++G__15861__i;}
  args = new cljs.core.IndexedSeq(G__15861__a,0);
} 
return G__15860__delegate.call(this,args);};
G__15860.cljs$lang$maxFixedArity = 0;
G__15860.cljs$lang$applyTo = (function (arglist__15862){
var args = cljs.core.seq(arglist__15862);
return G__15860__delegate(args);
});
G__15860.cljs$core$IFn$_invoke$arity$variadic = G__15860__delegate;
return G__15860;
})()
;

return null;
});
