goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11979__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11980__i = 0, G__11980__a = new Array(arguments.length -  0);
while (G__11980__i < G__11980__a.length) {G__11980__a[G__11980__i] = arguments[G__11980__i + 0]; ++G__11980__i;}
  args = new cljs.core.IndexedSeq(G__11980__a,0);
} 
return G__11979__delegate.call(this,args);};
G__11979.cljs$lang$maxFixedArity = 0;
G__11979.cljs$lang$applyTo = (function (arglist__11981){
var args = cljs.core.seq(arglist__11981);
return G__11979__delegate(args);
});
G__11979.cljs$core$IFn$_invoke$arity$variadic = G__11979__delegate;
return G__11979;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11982__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11983__i = 0, G__11983__a = new Array(arguments.length -  0);
while (G__11983__i < G__11983__a.length) {G__11983__a[G__11983__i] = arguments[G__11983__i + 0]; ++G__11983__i;}
  args = new cljs.core.IndexedSeq(G__11983__a,0);
} 
return G__11982__delegate.call(this,args);};
G__11982.cljs$lang$maxFixedArity = 0;
G__11982.cljs$lang$applyTo = (function (arglist__11984){
var args = cljs.core.seq(arglist__11984);
return G__11982__delegate(args);
});
G__11982.cljs$core$IFn$_invoke$arity$variadic = G__11982__delegate;
return G__11982;
})()
;

return null;
});
