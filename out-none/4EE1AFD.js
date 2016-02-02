goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__79788__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__79788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79789__i = 0, G__79789__a = new Array(arguments.length -  0);
while (G__79789__i < G__79789__a.length) {G__79789__a[G__79789__i] = arguments[G__79789__i + 0]; ++G__79789__i;}
  args = new cljs.core.IndexedSeq(G__79789__a,0);
} 
return G__79788__delegate.call(this,args);};
G__79788.cljs$lang$maxFixedArity = 0;
G__79788.cljs$lang$applyTo = (function (arglist__79790){
var args = cljs.core.seq(arglist__79790);
return G__79788__delegate(args);
});
G__79788.cljs$core$IFn$_invoke$arity$variadic = G__79788__delegate;
return G__79788;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__79791__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__79791 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__79792__i = 0, G__79792__a = new Array(arguments.length -  0);
while (G__79792__i < G__79792__a.length) {G__79792__a[G__79792__i] = arguments[G__79792__i + 0]; ++G__79792__i;}
  args = new cljs.core.IndexedSeq(G__79792__a,0);
} 
return G__79791__delegate.call(this,args);};
G__79791.cljs$lang$maxFixedArity = 0;
G__79791.cljs$lang$applyTo = (function (arglist__79793){
var args = cljs.core.seq(arglist__79793);
return G__79791__delegate(args);
});
G__79791.cljs$core$IFn$_invoke$arity$variadic = G__79791__delegate;
return G__79791;
})()
;

return null;
});
