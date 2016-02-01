// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11443__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11443 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11444__i = 0, G__11444__a = new Array(arguments.length -  0);
while (G__11444__i < G__11444__a.length) {G__11444__a[G__11444__i] = arguments[G__11444__i + 0]; ++G__11444__i;}
  args = new cljs.core.IndexedSeq(G__11444__a,0);
} 
return G__11443__delegate.call(this,args);};
G__11443.cljs$lang$maxFixedArity = 0;
G__11443.cljs$lang$applyTo = (function (arglist__11445){
var args = cljs.core.seq(arglist__11445);
return G__11443__delegate(args);
});
G__11443.cljs$core$IFn$_invoke$arity$variadic = G__11443__delegate;
return G__11443;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11446__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11447__i = 0, G__11447__a = new Array(arguments.length -  0);
while (G__11447__i < G__11447__a.length) {G__11447__a[G__11447__i] = arguments[G__11447__i + 0]; ++G__11447__i;}
  args = new cljs.core.IndexedSeq(G__11447__a,0);
} 
return G__11446__delegate.call(this,args);};
G__11446.cljs$lang$maxFixedArity = 0;
G__11446.cljs$lang$applyTo = (function (arglist__11448){
var args = cljs.core.seq(arglist__11448);
return G__11446__delegate(args);
});
G__11446.cljs$core$IFn$_invoke$arity$variadic = G__11446__delegate;
return G__11446;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map