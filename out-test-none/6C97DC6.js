goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13856__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13857__i = 0, G__13857__a = new Array(arguments.length -  0);
while (G__13857__i < G__13857__a.length) {G__13857__a[G__13857__i] = arguments[G__13857__i + 0]; ++G__13857__i;}
  args = new cljs.core.IndexedSeq(G__13857__a,0);
} 
return G__13856__delegate.call(this,args);};
G__13856.cljs$lang$maxFixedArity = 0;
G__13856.cljs$lang$applyTo = (function (arglist__13858){
var args = cljs.core.seq(arglist__13858);
return G__13856__delegate(args);
});
G__13856.cljs$core$IFn$_invoke$arity$variadic = G__13856__delegate;
return G__13856;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13859__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13860__i = 0, G__13860__a = new Array(arguments.length -  0);
while (G__13860__i < G__13860__a.length) {G__13860__a[G__13860__i] = arguments[G__13860__i + 0]; ++G__13860__i;}
  args = new cljs.core.IndexedSeq(G__13860__a,0);
} 
return G__13859__delegate.call(this,args);};
G__13859.cljs$lang$maxFixedArity = 0;
G__13859.cljs$lang$applyTo = (function (arglist__13861){
var args = cljs.core.seq(arglist__13861);
return G__13859__delegate(args);
});
G__13859.cljs$core$IFn$_invoke$arity$variadic = G__13859__delegate;
return G__13859;
})()
;

return null;
});
