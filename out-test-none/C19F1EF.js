goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__112236__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__112236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112237__i = 0, G__112237__a = new Array(arguments.length -  0);
while (G__112237__i < G__112237__a.length) {G__112237__a[G__112237__i] = arguments[G__112237__i + 0]; ++G__112237__i;}
  args = new cljs.core.IndexedSeq(G__112237__a,0);
} 
return G__112236__delegate.call(this,args);};
G__112236.cljs$lang$maxFixedArity = 0;
G__112236.cljs$lang$applyTo = (function (arglist__112238){
var args = cljs.core.seq(arglist__112238);
return G__112236__delegate(args);
});
G__112236.cljs$core$IFn$_invoke$arity$variadic = G__112236__delegate;
return G__112236;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__112239__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__112239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__112240__i = 0, G__112240__a = new Array(arguments.length -  0);
while (G__112240__i < G__112240__a.length) {G__112240__a[G__112240__i] = arguments[G__112240__i + 0]; ++G__112240__i;}
  args = new cljs.core.IndexedSeq(G__112240__a,0);
} 
return G__112239__delegate.call(this,args);};
G__112239.cljs$lang$maxFixedArity = 0;
G__112239.cljs$lang$applyTo = (function (arglist__112241){
var args = cljs.core.seq(arglist__112241);
return G__112239__delegate(args);
});
G__112239.cljs$core$IFn$_invoke$arity$variadic = G__112239__delegate;
return G__112239;
})()
;

return null;
});
