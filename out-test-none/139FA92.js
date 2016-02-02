goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26505__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26505 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26506__i = 0, G__26506__a = new Array(arguments.length -  0);
while (G__26506__i < G__26506__a.length) {G__26506__a[G__26506__i] = arguments[G__26506__i + 0]; ++G__26506__i;}
  args = new cljs.core.IndexedSeq(G__26506__a,0);
} 
return G__26505__delegate.call(this,args);};
G__26505.cljs$lang$maxFixedArity = 0;
G__26505.cljs$lang$applyTo = (function (arglist__26507){
var args = cljs.core.seq(arglist__26507);
return G__26505__delegate(args);
});
G__26505.cljs$core$IFn$_invoke$arity$variadic = G__26505__delegate;
return G__26505;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26508__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26508 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26509__i = 0, G__26509__a = new Array(arguments.length -  0);
while (G__26509__i < G__26509__a.length) {G__26509__a[G__26509__i] = arguments[G__26509__i + 0]; ++G__26509__i;}
  args = new cljs.core.IndexedSeq(G__26509__a,0);
} 
return G__26508__delegate.call(this,args);};
G__26508.cljs$lang$maxFixedArity = 0;
G__26508.cljs$lang$applyTo = (function (arglist__26510){
var args = cljs.core.seq(arglist__26510);
return G__26508__delegate(args);
});
G__26508.cljs$core$IFn$_invoke$arity$variadic = G__26508__delegate;
return G__26508;
})()
;

return null;
});
