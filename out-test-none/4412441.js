goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__42862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__42862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42863__i = 0, G__42863__a = new Array(arguments.length -  0);
while (G__42863__i < G__42863__a.length) {G__42863__a[G__42863__i] = arguments[G__42863__i + 0]; ++G__42863__i;}
  args = new cljs.core.IndexedSeq(G__42863__a,0);
} 
return G__42862__delegate.call(this,args);};
G__42862.cljs$lang$maxFixedArity = 0;
G__42862.cljs$lang$applyTo = (function (arglist__42864){
var args = cljs.core.seq(arglist__42864);
return G__42862__delegate(args);
});
G__42862.cljs$core$IFn$_invoke$arity$variadic = G__42862__delegate;
return G__42862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__42865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__42865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42866__i = 0, G__42866__a = new Array(arguments.length -  0);
while (G__42866__i < G__42866__a.length) {G__42866__a[G__42866__i] = arguments[G__42866__i + 0]; ++G__42866__i;}
  args = new cljs.core.IndexedSeq(G__42866__a,0);
} 
return G__42865__delegate.call(this,args);};
G__42865.cljs$lang$maxFixedArity = 0;
G__42865.cljs$lang$applyTo = (function (arglist__42867){
var args = cljs.core.seq(arglist__42867);
return G__42865__delegate(args);
});
G__42865.cljs$core$IFn$_invoke$arity$variadic = G__42865__delegate;
return G__42865;
})()
;

return null;
});
