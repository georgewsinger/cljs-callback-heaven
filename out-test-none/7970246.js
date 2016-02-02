goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10865__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10866__i = 0, G__10866__a = new Array(arguments.length -  0);
while (G__10866__i < G__10866__a.length) {G__10866__a[G__10866__i] = arguments[G__10866__i + 0]; ++G__10866__i;}
  args = new cljs.core.IndexedSeq(G__10866__a,0);
} 
return G__10865__delegate.call(this,args);};
G__10865.cljs$lang$maxFixedArity = 0;
G__10865.cljs$lang$applyTo = (function (arglist__10867){
var args = cljs.core.seq(arglist__10867);
return G__10865__delegate(args);
});
G__10865.cljs$core$IFn$_invoke$arity$variadic = G__10865__delegate;
return G__10865;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10868__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10869__i = 0, G__10869__a = new Array(arguments.length -  0);
while (G__10869__i < G__10869__a.length) {G__10869__a[G__10869__i] = arguments[G__10869__i + 0]; ++G__10869__i;}
  args = new cljs.core.IndexedSeq(G__10869__a,0);
} 
return G__10868__delegate.call(this,args);};
G__10868.cljs$lang$maxFixedArity = 0;
G__10868.cljs$lang$applyTo = (function (arglist__10870){
var args = cljs.core.seq(arglist__10870);
return G__10868__delegate(args);
});
G__10868.cljs$core$IFn$_invoke$arity$variadic = G__10868__delegate;
return G__10868;
})()
;

return null;
});
