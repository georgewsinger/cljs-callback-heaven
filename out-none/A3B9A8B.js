goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18225__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18226__i = 0, G__18226__a = new Array(arguments.length -  0);
while (G__18226__i < G__18226__a.length) {G__18226__a[G__18226__i] = arguments[G__18226__i + 0]; ++G__18226__i;}
  args = new cljs.core.IndexedSeq(G__18226__a,0);
} 
return G__18225__delegate.call(this,args);};
G__18225.cljs$lang$maxFixedArity = 0;
G__18225.cljs$lang$applyTo = (function (arglist__18227){
var args = cljs.core.seq(arglist__18227);
return G__18225__delegate(args);
});
G__18225.cljs$core$IFn$_invoke$arity$variadic = G__18225__delegate;
return G__18225;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18228__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18229__i = 0, G__18229__a = new Array(arguments.length -  0);
while (G__18229__i < G__18229__a.length) {G__18229__a[G__18229__i] = arguments[G__18229__i + 0]; ++G__18229__i;}
  args = new cljs.core.IndexedSeq(G__18229__a,0);
} 
return G__18228__delegate.call(this,args);};
G__18228.cljs$lang$maxFixedArity = 0;
G__18228.cljs$lang$applyTo = (function (arglist__18230){
var args = cljs.core.seq(arglist__18230);
return G__18228__delegate(args);
});
G__18228.cljs$core$IFn$_invoke$arity$variadic = G__18228__delegate;
return G__18228;
})()
;

return null;
});
