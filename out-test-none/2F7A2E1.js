goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30732__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__30732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30733__i = 0, G__30733__a = new Array(arguments.length -  0);
while (G__30733__i < G__30733__a.length) {G__30733__a[G__30733__i] = arguments[G__30733__i + 0]; ++G__30733__i;}
  args = new cljs.core.IndexedSeq(G__30733__a,0);
} 
return G__30732__delegate.call(this,args);};
G__30732.cljs$lang$maxFixedArity = 0;
G__30732.cljs$lang$applyTo = (function (arglist__30734){
var args = cljs.core.seq(arglist__30734);
return G__30732__delegate(args);
});
G__30732.cljs$core$IFn$_invoke$arity$variadic = G__30732__delegate;
return G__30732;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__30735__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__30735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30736__i = 0, G__30736__a = new Array(arguments.length -  0);
while (G__30736__i < G__30736__a.length) {G__30736__a[G__30736__i] = arguments[G__30736__i + 0]; ++G__30736__i;}
  args = new cljs.core.IndexedSeq(G__30736__a,0);
} 
return G__30735__delegate.call(this,args);};
G__30735.cljs$lang$maxFixedArity = 0;
G__30735.cljs$lang$applyTo = (function (arglist__30737){
var args = cljs.core.seq(arglist__30737);
return G__30735__delegate(args);
});
G__30735.cljs$core$IFn$_invoke$arity$variadic = G__30735__delegate;
return G__30735;
})()
;

return null;
});
