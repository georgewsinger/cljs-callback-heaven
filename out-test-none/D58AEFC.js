goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15996__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15997__i = 0, G__15997__a = new Array(arguments.length -  0);
while (G__15997__i < G__15997__a.length) {G__15997__a[G__15997__i] = arguments[G__15997__i + 0]; ++G__15997__i;}
  args = new cljs.core.IndexedSeq(G__15997__a,0);
} 
return G__15996__delegate.call(this,args);};
G__15996.cljs$lang$maxFixedArity = 0;
G__15996.cljs$lang$applyTo = (function (arglist__15998){
var args = cljs.core.seq(arglist__15998);
return G__15996__delegate(args);
});
G__15996.cljs$core$IFn$_invoke$arity$variadic = G__15996__delegate;
return G__15996;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15999__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16000__i = 0, G__16000__a = new Array(arguments.length -  0);
while (G__16000__i < G__16000__a.length) {G__16000__a[G__16000__i] = arguments[G__16000__i + 0]; ++G__16000__i;}
  args = new cljs.core.IndexedSeq(G__16000__a,0);
} 
return G__15999__delegate.call(this,args);};
G__15999.cljs$lang$maxFixedArity = 0;
G__15999.cljs$lang$applyTo = (function (arglist__16001){
var args = cljs.core.seq(arglist__16001);
return G__15999__delegate(args);
});
G__15999.cljs$core$IFn$_invoke$arity$variadic = G__15999__delegate;
return G__15999;
})()
;

return null;
});
