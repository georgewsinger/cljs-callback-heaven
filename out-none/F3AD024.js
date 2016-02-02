goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__75896__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__75896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75897__i = 0, G__75897__a = new Array(arguments.length -  0);
while (G__75897__i < G__75897__a.length) {G__75897__a[G__75897__i] = arguments[G__75897__i + 0]; ++G__75897__i;}
  args = new cljs.core.IndexedSeq(G__75897__a,0);
} 
return G__75896__delegate.call(this,args);};
G__75896.cljs$lang$maxFixedArity = 0;
G__75896.cljs$lang$applyTo = (function (arglist__75898){
var args = cljs.core.seq(arglist__75898);
return G__75896__delegate(args);
});
G__75896.cljs$core$IFn$_invoke$arity$variadic = G__75896__delegate;
return G__75896;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__75899__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__75899 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75900__i = 0, G__75900__a = new Array(arguments.length -  0);
while (G__75900__i < G__75900__a.length) {G__75900__a[G__75900__i] = arguments[G__75900__i + 0]; ++G__75900__i;}
  args = new cljs.core.IndexedSeq(G__75900__a,0);
} 
return G__75899__delegate.call(this,args);};
G__75899.cljs$lang$maxFixedArity = 0;
G__75899.cljs$lang$applyTo = (function (arglist__75901){
var args = cljs.core.seq(arglist__75901);
return G__75899__delegate(args);
});
G__75899.cljs$core$IFn$_invoke$arity$variadic = G__75899__delegate;
return G__75899;
})()
;

return null;
});
