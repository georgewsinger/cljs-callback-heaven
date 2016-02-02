goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30808__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30809__i = 0, G__30809__a = new Array(arguments.length -  0);
while (G__30809__i < G__30809__a.length) {G__30809__a[G__30809__i] = arguments[G__30809__i + 0]; ++G__30809__i;}
  args = new cljs.core.IndexedSeq(G__30809__a,0);
} 
return G__30808__delegate.call(this,args);};
G__30808.cljs$lang$maxFixedArity = 0;
G__30808.cljs$lang$applyTo = (function (arglist__30810){
var args = cljs.core.seq(arglist__30810);
return G__30808__delegate(args);
});
G__30808.cljs$core$IFn$_invoke$arity$variadic = G__30808__delegate;
return G__30808;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30811__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30812__i = 0, G__30812__a = new Array(arguments.length -  0);
while (G__30812__i < G__30812__a.length) {G__30812__a[G__30812__i] = arguments[G__30812__i + 0]; ++G__30812__i;}
  args = new cljs.core.IndexedSeq(G__30812__a,0);
} 
return G__30811__delegate.call(this,args);};
G__30811.cljs$lang$maxFixedArity = 0;
G__30811.cljs$lang$applyTo = (function (arglist__30813){
var args = cljs.core.seq(arglist__30813);
return G__30811__delegate(args);
});
G__30811.cljs$core$IFn$_invoke$arity$variadic = G__30811__delegate;
return G__30811;
})()
;

return null;
});
