goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23785__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23786__i = 0, G__23786__a = new Array(arguments.length -  0);
while (G__23786__i < G__23786__a.length) {G__23786__a[G__23786__i] = arguments[G__23786__i + 0]; ++G__23786__i;}
  args = new cljs.core.IndexedSeq(G__23786__a,0);
} 
return G__23785__delegate.call(this,args);};
G__23785.cljs$lang$maxFixedArity = 0;
G__23785.cljs$lang$applyTo = (function (arglist__23787){
var args = cljs.core.seq(arglist__23787);
return G__23785__delegate(args);
});
G__23785.cljs$core$IFn$_invoke$arity$variadic = G__23785__delegate;
return G__23785;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23788__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23789__i = 0, G__23789__a = new Array(arguments.length -  0);
while (G__23789__i < G__23789__a.length) {G__23789__a[G__23789__i] = arguments[G__23789__i + 0]; ++G__23789__i;}
  args = new cljs.core.IndexedSeq(G__23789__a,0);
} 
return G__23788__delegate.call(this,args);};
G__23788.cljs$lang$maxFixedArity = 0;
G__23788.cljs$lang$applyTo = (function (arglist__23790){
var args = cljs.core.seq(arglist__23790);
return G__23788__delegate(args);
});
G__23788.cljs$core$IFn$_invoke$arity$variadic = G__23788__delegate;
return G__23788;
})()
;

return null;
});
