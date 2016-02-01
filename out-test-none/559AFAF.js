goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15696__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15697__i = 0, G__15697__a = new Array(arguments.length -  0);
while (G__15697__i < G__15697__a.length) {G__15697__a[G__15697__i] = arguments[G__15697__i + 0]; ++G__15697__i;}
  args = new cljs.core.IndexedSeq(G__15697__a,0);
} 
return G__15696__delegate.call(this,args);};
G__15696.cljs$lang$maxFixedArity = 0;
G__15696.cljs$lang$applyTo = (function (arglist__15698){
var args = cljs.core.seq(arglist__15698);
return G__15696__delegate(args);
});
G__15696.cljs$core$IFn$_invoke$arity$variadic = G__15696__delegate;
return G__15696;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15699__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15700__i = 0, G__15700__a = new Array(arguments.length -  0);
while (G__15700__i < G__15700__a.length) {G__15700__a[G__15700__i] = arguments[G__15700__i + 0]; ++G__15700__i;}
  args = new cljs.core.IndexedSeq(G__15700__a,0);
} 
return G__15699__delegate.call(this,args);};
G__15699.cljs$lang$maxFixedArity = 0;
G__15699.cljs$lang$applyTo = (function (arglist__15701){
var args = cljs.core.seq(arglist__15701);
return G__15699__delegate(args);
});
G__15699.cljs$core$IFn$_invoke$arity$variadic = G__15699__delegate;
return G__15699;
})()
;

return null;
});
