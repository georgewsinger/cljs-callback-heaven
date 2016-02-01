// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15671__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15672__i = 0, G__15672__a = new Array(arguments.length -  0);
while (G__15672__i < G__15672__a.length) {G__15672__a[G__15672__i] = arguments[G__15672__i + 0]; ++G__15672__i;}
  args = new cljs.core.IndexedSeq(G__15672__a,0);
} 
return G__15671__delegate.call(this,args);};
G__15671.cljs$lang$maxFixedArity = 0;
G__15671.cljs$lang$applyTo = (function (arglist__15673){
var args = cljs.core.seq(arglist__15673);
return G__15671__delegate(args);
});
G__15671.cljs$core$IFn$_invoke$arity$variadic = G__15671__delegate;
return G__15671;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15674__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15674 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15675__i = 0, G__15675__a = new Array(arguments.length -  0);
while (G__15675__i < G__15675__a.length) {G__15675__a[G__15675__i] = arguments[G__15675__i + 0]; ++G__15675__i;}
  args = new cljs.core.IndexedSeq(G__15675__a,0);
} 
return G__15674__delegate.call(this,args);};
G__15674.cljs$lang$maxFixedArity = 0;
G__15674.cljs$lang$applyTo = (function (arglist__15676){
var args = cljs.core.seq(arglist__15676);
return G__15674__delegate(args);
});
G__15674.cljs$core$IFn$_invoke$arity$variadic = G__15674__delegate;
return G__15674;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map