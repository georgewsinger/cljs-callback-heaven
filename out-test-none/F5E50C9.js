goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51328__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51329__i = 0, G__51329__a = new Array(arguments.length -  0);
while (G__51329__i < G__51329__a.length) {G__51329__a[G__51329__i] = arguments[G__51329__i + 0]; ++G__51329__i;}
  args = new cljs.core.IndexedSeq(G__51329__a,0);
} 
return G__51328__delegate.call(this,args);};
G__51328.cljs$lang$maxFixedArity = 0;
G__51328.cljs$lang$applyTo = (function (arglist__51330){
var args = cljs.core.seq(arglist__51330);
return G__51328__delegate(args);
});
G__51328.cljs$core$IFn$_invoke$arity$variadic = G__51328__delegate;
return G__51328;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51331__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51332__i = 0, G__51332__a = new Array(arguments.length -  0);
while (G__51332__i < G__51332__a.length) {G__51332__a[G__51332__i] = arguments[G__51332__i + 0]; ++G__51332__i;}
  args = new cljs.core.IndexedSeq(G__51332__a,0);
} 
return G__51331__delegate.call(this,args);};
G__51331.cljs$lang$maxFixedArity = 0;
G__51331.cljs$lang$applyTo = (function (arglist__51333){
var args = cljs.core.seq(arglist__51333);
return G__51331__delegate(args);
});
G__51331.cljs$core$IFn$_invoke$arity$variadic = G__51331__delegate;
return G__51331;
})()
;

return null;
});
