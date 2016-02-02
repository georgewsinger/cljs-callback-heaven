goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12784__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12785__i = 0, G__12785__a = new Array(arguments.length -  0);
while (G__12785__i < G__12785__a.length) {G__12785__a[G__12785__i] = arguments[G__12785__i + 0]; ++G__12785__i;}
  args = new cljs.core.IndexedSeq(G__12785__a,0);
} 
return G__12784__delegate.call(this,args);};
G__12784.cljs$lang$maxFixedArity = 0;
G__12784.cljs$lang$applyTo = (function (arglist__12786){
var args = cljs.core.seq(arglist__12786);
return G__12784__delegate(args);
});
G__12784.cljs$core$IFn$_invoke$arity$variadic = G__12784__delegate;
return G__12784;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12787__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12788__i = 0, G__12788__a = new Array(arguments.length -  0);
while (G__12788__i < G__12788__a.length) {G__12788__a[G__12788__i] = arguments[G__12788__i + 0]; ++G__12788__i;}
  args = new cljs.core.IndexedSeq(G__12788__a,0);
} 
return G__12787__delegate.call(this,args);};
G__12787.cljs$lang$maxFixedArity = 0;
G__12787.cljs$lang$applyTo = (function (arglist__12789){
var args = cljs.core.seq(arglist__12789);
return G__12787__delegate(args);
});
G__12787.cljs$core$IFn$_invoke$arity$variadic = G__12787__delegate;
return G__12787;
})()
;

return null;
});
