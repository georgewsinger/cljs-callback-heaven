goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16856__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16857__i = 0, G__16857__a = new Array(arguments.length -  0);
while (G__16857__i < G__16857__a.length) {G__16857__a[G__16857__i] = arguments[G__16857__i + 0]; ++G__16857__i;}
  args = new cljs.core.IndexedSeq(G__16857__a,0);
} 
return G__16856__delegate.call(this,args);};
G__16856.cljs$lang$maxFixedArity = 0;
G__16856.cljs$lang$applyTo = (function (arglist__16858){
var args = cljs.core.seq(arglist__16858);
return G__16856__delegate(args);
});
G__16856.cljs$core$IFn$_invoke$arity$variadic = G__16856__delegate;
return G__16856;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16859__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16860__i = 0, G__16860__a = new Array(arguments.length -  0);
while (G__16860__i < G__16860__a.length) {G__16860__a[G__16860__i] = arguments[G__16860__i + 0]; ++G__16860__i;}
  args = new cljs.core.IndexedSeq(G__16860__a,0);
} 
return G__16859__delegate.call(this,args);};
G__16859.cljs$lang$maxFixedArity = 0;
G__16859.cljs$lang$applyTo = (function (arglist__16861){
var args = cljs.core.seq(arglist__16861);
return G__16859__delegate(args);
});
G__16859.cljs$core$IFn$_invoke$arity$variadic = G__16859__delegate;
return G__16859;
})()
;

return null;
});
