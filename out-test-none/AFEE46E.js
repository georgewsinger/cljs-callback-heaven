goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16446__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16447__i = 0, G__16447__a = new Array(arguments.length -  0);
while (G__16447__i < G__16447__a.length) {G__16447__a[G__16447__i] = arguments[G__16447__i + 0]; ++G__16447__i;}
  args = new cljs.core.IndexedSeq(G__16447__a,0);
} 
return G__16446__delegate.call(this,args);};
G__16446.cljs$lang$maxFixedArity = 0;
G__16446.cljs$lang$applyTo = (function (arglist__16448){
var args = cljs.core.seq(arglist__16448);
return G__16446__delegate(args);
});
G__16446.cljs$core$IFn$_invoke$arity$variadic = G__16446__delegate;
return G__16446;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16449__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16450__i = 0, G__16450__a = new Array(arguments.length -  0);
while (G__16450__i < G__16450__a.length) {G__16450__a[G__16450__i] = arguments[G__16450__i + 0]; ++G__16450__i;}
  args = new cljs.core.IndexedSeq(G__16450__a,0);
} 
return G__16449__delegate.call(this,args);};
G__16449.cljs$lang$maxFixedArity = 0;
G__16449.cljs$lang$applyTo = (function (arglist__16451){
var args = cljs.core.seq(arglist__16451);
return G__16449__delegate(args);
});
G__16449.cljs$core$IFn$_invoke$arity$variadic = G__16449__delegate;
return G__16449;
})()
;

return null;
});
