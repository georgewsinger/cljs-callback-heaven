goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31313__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31313 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31314__i = 0, G__31314__a = new Array(arguments.length -  0);
while (G__31314__i < G__31314__a.length) {G__31314__a[G__31314__i] = arguments[G__31314__i + 0]; ++G__31314__i;}
  args = new cljs.core.IndexedSeq(G__31314__a,0);
} 
return G__31313__delegate.call(this,args);};
G__31313.cljs$lang$maxFixedArity = 0;
G__31313.cljs$lang$applyTo = (function (arglist__31315){
var args = cljs.core.seq(arglist__31315);
return G__31313__delegate(args);
});
G__31313.cljs$core$IFn$_invoke$arity$variadic = G__31313__delegate;
return G__31313;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31316__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31316 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31317__i = 0, G__31317__a = new Array(arguments.length -  0);
while (G__31317__i < G__31317__a.length) {G__31317__a[G__31317__i] = arguments[G__31317__i + 0]; ++G__31317__i;}
  args = new cljs.core.IndexedSeq(G__31317__a,0);
} 
return G__31316__delegate.call(this,args);};
G__31316.cljs$lang$maxFixedArity = 0;
G__31316.cljs$lang$applyTo = (function (arglist__31318){
var args = cljs.core.seq(arglist__31318);
return G__31316__delegate(args);
});
G__31316.cljs$core$IFn$_invoke$arity$variadic = G__31316__delegate;
return G__31316;
})()
;

return null;
});
