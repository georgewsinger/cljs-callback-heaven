goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10000__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10001__i = 0, G__10001__a = new Array(arguments.length -  0);
while (G__10001__i < G__10001__a.length) {G__10001__a[G__10001__i] = arguments[G__10001__i + 0]; ++G__10001__i;}
  args = new cljs.core.IndexedSeq(G__10001__a,0);
} 
return G__10000__delegate.call(this,args);};
G__10000.cljs$lang$maxFixedArity = 0;
G__10000.cljs$lang$applyTo = (function (arglist__10002){
var args = cljs.core.seq(arglist__10002);
return G__10000__delegate(args);
});
G__10000.cljs$core$IFn$_invoke$arity$variadic = G__10000__delegate;
return G__10000;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10003__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10004__i = 0, G__10004__a = new Array(arguments.length -  0);
while (G__10004__i < G__10004__a.length) {G__10004__a[G__10004__i] = arguments[G__10004__i + 0]; ++G__10004__i;}
  args = new cljs.core.IndexedSeq(G__10004__a,0);
} 
return G__10003__delegate.call(this,args);};
G__10003.cljs$lang$maxFixedArity = 0;
G__10003.cljs$lang$applyTo = (function (arglist__10005){
var args = cljs.core.seq(arglist__10005);
return G__10003__delegate(args);
});
G__10003.cljs$core$IFn$_invoke$arity$variadic = G__10003__delegate;
return G__10003;
})()
;

return null;
});
