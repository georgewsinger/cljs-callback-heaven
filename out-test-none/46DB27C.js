goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18021__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18022__i = 0, G__18022__a = new Array(arguments.length -  0);
while (G__18022__i < G__18022__a.length) {G__18022__a[G__18022__i] = arguments[G__18022__i + 0]; ++G__18022__i;}
  args = new cljs.core.IndexedSeq(G__18022__a,0);
} 
return G__18021__delegate.call(this,args);};
G__18021.cljs$lang$maxFixedArity = 0;
G__18021.cljs$lang$applyTo = (function (arglist__18023){
var args = cljs.core.seq(arglist__18023);
return G__18021__delegate(args);
});
G__18021.cljs$core$IFn$_invoke$arity$variadic = G__18021__delegate;
return G__18021;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18024__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18025__i = 0, G__18025__a = new Array(arguments.length -  0);
while (G__18025__i < G__18025__a.length) {G__18025__a[G__18025__i] = arguments[G__18025__i + 0]; ++G__18025__i;}
  args = new cljs.core.IndexedSeq(G__18025__a,0);
} 
return G__18024__delegate.call(this,args);};
G__18024.cljs$lang$maxFixedArity = 0;
G__18024.cljs$lang$applyTo = (function (arglist__18026){
var args = cljs.core.seq(arglist__18026);
return G__18024__delegate(args);
});
G__18024.cljs$core$IFn$_invoke$arity$variadic = G__18024__delegate;
return G__18024;
})()
;

return null;
});
