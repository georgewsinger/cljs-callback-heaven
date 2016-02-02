goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31283__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31283 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31284__i = 0, G__31284__a = new Array(arguments.length -  0);
while (G__31284__i < G__31284__a.length) {G__31284__a[G__31284__i] = arguments[G__31284__i + 0]; ++G__31284__i;}
  args = new cljs.core.IndexedSeq(G__31284__a,0);
} 
return G__31283__delegate.call(this,args);};
G__31283.cljs$lang$maxFixedArity = 0;
G__31283.cljs$lang$applyTo = (function (arglist__31285){
var args = cljs.core.seq(arglist__31285);
return G__31283__delegate(args);
});
G__31283.cljs$core$IFn$_invoke$arity$variadic = G__31283__delegate;
return G__31283;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31286__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31286 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31287__i = 0, G__31287__a = new Array(arguments.length -  0);
while (G__31287__i < G__31287__a.length) {G__31287__a[G__31287__i] = arguments[G__31287__i + 0]; ++G__31287__i;}
  args = new cljs.core.IndexedSeq(G__31287__a,0);
} 
return G__31286__delegate.call(this,args);};
G__31286.cljs$lang$maxFixedArity = 0;
G__31286.cljs$lang$applyTo = (function (arglist__31288){
var args = cljs.core.seq(arglist__31288);
return G__31286__delegate(args);
});
G__31286.cljs$core$IFn$_invoke$arity$variadic = G__31286__delegate;
return G__31286;
})()
;

return null;
});
