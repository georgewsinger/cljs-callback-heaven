goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11808__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11809__i = 0, G__11809__a = new Array(arguments.length -  0);
while (G__11809__i < G__11809__a.length) {G__11809__a[G__11809__i] = arguments[G__11809__i + 0]; ++G__11809__i;}
  args = new cljs.core.IndexedSeq(G__11809__a,0);
} 
return G__11808__delegate.call(this,args);};
G__11808.cljs$lang$maxFixedArity = 0;
G__11808.cljs$lang$applyTo = (function (arglist__11810){
var args = cljs.core.seq(arglist__11810);
return G__11808__delegate(args);
});
G__11808.cljs$core$IFn$_invoke$arity$variadic = G__11808__delegate;
return G__11808;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11811__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11812__i = 0, G__11812__a = new Array(arguments.length -  0);
while (G__11812__i < G__11812__a.length) {G__11812__a[G__11812__i] = arguments[G__11812__i + 0]; ++G__11812__i;}
  args = new cljs.core.IndexedSeq(G__11812__a,0);
} 
return G__11811__delegate.call(this,args);};
G__11811.cljs$lang$maxFixedArity = 0;
G__11811.cljs$lang$applyTo = (function (arglist__11813){
var args = cljs.core.seq(arglist__11813);
return G__11811__delegate(args);
});
G__11811.cljs$core$IFn$_invoke$arity$variadic = G__11811__delegate;
return G__11811;
})()
;

return null;
});
