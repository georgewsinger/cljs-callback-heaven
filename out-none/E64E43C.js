goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12017__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12017 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12018__i = 0, G__12018__a = new Array(arguments.length -  0);
while (G__12018__i < G__12018__a.length) {G__12018__a[G__12018__i] = arguments[G__12018__i + 0]; ++G__12018__i;}
  args = new cljs.core.IndexedSeq(G__12018__a,0);
} 
return G__12017__delegate.call(this,args);};
G__12017.cljs$lang$maxFixedArity = 0;
G__12017.cljs$lang$applyTo = (function (arglist__12019){
var args = cljs.core.seq(arglist__12019);
return G__12017__delegate(args);
});
G__12017.cljs$core$IFn$_invoke$arity$variadic = G__12017__delegate;
return G__12017;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12020__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12020 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12021__i = 0, G__12021__a = new Array(arguments.length -  0);
while (G__12021__i < G__12021__a.length) {G__12021__a[G__12021__i] = arguments[G__12021__i + 0]; ++G__12021__i;}
  args = new cljs.core.IndexedSeq(G__12021__a,0);
} 
return G__12020__delegate.call(this,args);};
G__12020.cljs$lang$maxFixedArity = 0;
G__12020.cljs$lang$applyTo = (function (arglist__12022){
var args = cljs.core.seq(arglist__12022);
return G__12020__delegate(args);
});
G__12020.cljs$core$IFn$_invoke$arity$variadic = G__12020__delegate;
return G__12020;
})()
;

return null;
});
