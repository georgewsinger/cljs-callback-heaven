goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31942__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31943__i = 0, G__31943__a = new Array(arguments.length -  0);
while (G__31943__i < G__31943__a.length) {G__31943__a[G__31943__i] = arguments[G__31943__i + 0]; ++G__31943__i;}
  args = new cljs.core.IndexedSeq(G__31943__a,0);
} 
return G__31942__delegate.call(this,args);};
G__31942.cljs$lang$maxFixedArity = 0;
G__31942.cljs$lang$applyTo = (function (arglist__31944){
var args = cljs.core.seq(arglist__31944);
return G__31942__delegate(args);
});
G__31942.cljs$core$IFn$_invoke$arity$variadic = G__31942__delegate;
return G__31942;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31945__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31946__i = 0, G__31946__a = new Array(arguments.length -  0);
while (G__31946__i < G__31946__a.length) {G__31946__a[G__31946__i] = arguments[G__31946__i + 0]; ++G__31946__i;}
  args = new cljs.core.IndexedSeq(G__31946__a,0);
} 
return G__31945__delegate.call(this,args);};
G__31945.cljs$lang$maxFixedArity = 0;
G__31945.cljs$lang$applyTo = (function (arglist__31947){
var args = cljs.core.seq(arglist__31947);
return G__31945__delegate(args);
});
G__31945.cljs$core$IFn$_invoke$arity$variadic = G__31945__delegate;
return G__31945;
})()
;

return null;
});
