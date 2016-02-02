goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41235__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__41235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41236__i = 0, G__41236__a = new Array(arguments.length -  0);
while (G__41236__i < G__41236__a.length) {G__41236__a[G__41236__i] = arguments[G__41236__i + 0]; ++G__41236__i;}
  args = new cljs.core.IndexedSeq(G__41236__a,0);
} 
return G__41235__delegate.call(this,args);};
G__41235.cljs$lang$maxFixedArity = 0;
G__41235.cljs$lang$applyTo = (function (arglist__41237){
var args = cljs.core.seq(arglist__41237);
return G__41235__delegate(args);
});
G__41235.cljs$core$IFn$_invoke$arity$variadic = G__41235__delegate;
return G__41235;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__41238__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__41238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41239__i = 0, G__41239__a = new Array(arguments.length -  0);
while (G__41239__i < G__41239__a.length) {G__41239__a[G__41239__i] = arguments[G__41239__i + 0]; ++G__41239__i;}
  args = new cljs.core.IndexedSeq(G__41239__a,0);
} 
return G__41238__delegate.call(this,args);};
G__41238.cljs$lang$maxFixedArity = 0;
G__41238.cljs$lang$applyTo = (function (arglist__41240){
var args = cljs.core.seq(arglist__41240);
return G__41238__delegate(args);
});
G__41238.cljs$core$IFn$_invoke$arity$variadic = G__41238__delegate;
return G__41238;
})()
;

return null;
});