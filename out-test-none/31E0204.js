goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10988__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10988 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10989__i = 0, G__10989__a = new Array(arguments.length -  0);
while (G__10989__i < G__10989__a.length) {G__10989__a[G__10989__i] = arguments[G__10989__i + 0]; ++G__10989__i;}
  args = new cljs.core.IndexedSeq(G__10989__a,0);
} 
return G__10988__delegate.call(this,args);};
G__10988.cljs$lang$maxFixedArity = 0;
G__10988.cljs$lang$applyTo = (function (arglist__10990){
var args = cljs.core.seq(arglist__10990);
return G__10988__delegate(args);
});
G__10988.cljs$core$IFn$_invoke$arity$variadic = G__10988__delegate;
return G__10988;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10991__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10991 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10992__i = 0, G__10992__a = new Array(arguments.length -  0);
while (G__10992__i < G__10992__a.length) {G__10992__a[G__10992__i] = arguments[G__10992__i + 0]; ++G__10992__i;}
  args = new cljs.core.IndexedSeq(G__10992__a,0);
} 
return G__10991__delegate.call(this,args);};
G__10991.cljs$lang$maxFixedArity = 0;
G__10991.cljs$lang$applyTo = (function (arglist__10993){
var args = cljs.core.seq(arglist__10993);
return G__10991__delegate(args);
});
G__10991.cljs$core$IFn$_invoke$arity$variadic = G__10991__delegate;
return G__10991;
})()
;

return null;
});
