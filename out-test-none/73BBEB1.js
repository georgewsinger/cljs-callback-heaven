goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59394__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59394 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59395__i = 0, G__59395__a = new Array(arguments.length -  0);
while (G__59395__i < G__59395__a.length) {G__59395__a[G__59395__i] = arguments[G__59395__i + 0]; ++G__59395__i;}
  args = new cljs.core.IndexedSeq(G__59395__a,0);
} 
return G__59394__delegate.call(this,args);};
G__59394.cljs$lang$maxFixedArity = 0;
G__59394.cljs$lang$applyTo = (function (arglist__59396){
var args = cljs.core.seq(arglist__59396);
return G__59394__delegate(args);
});
G__59394.cljs$core$IFn$_invoke$arity$variadic = G__59394__delegate;
return G__59394;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59397__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59397 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59398__i = 0, G__59398__a = new Array(arguments.length -  0);
while (G__59398__i < G__59398__a.length) {G__59398__a[G__59398__i] = arguments[G__59398__i + 0]; ++G__59398__i;}
  args = new cljs.core.IndexedSeq(G__59398__a,0);
} 
return G__59397__delegate.call(this,args);};
G__59397.cljs$lang$maxFixedArity = 0;
G__59397.cljs$lang$applyTo = (function (arglist__59399){
var args = cljs.core.seq(arglist__59399);
return G__59397__delegate(args);
});
G__59397.cljs$core$IFn$_invoke$arity$variadic = G__59397__delegate;
return G__59397;
})()
;

return null;
});
