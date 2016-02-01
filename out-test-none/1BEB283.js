goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15786__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15787__i = 0, G__15787__a = new Array(arguments.length -  0);
while (G__15787__i < G__15787__a.length) {G__15787__a[G__15787__i] = arguments[G__15787__i + 0]; ++G__15787__i;}
  args = new cljs.core.IndexedSeq(G__15787__a,0);
} 
return G__15786__delegate.call(this,args);};
G__15786.cljs$lang$maxFixedArity = 0;
G__15786.cljs$lang$applyTo = (function (arglist__15788){
var args = cljs.core.seq(arglist__15788);
return G__15786__delegate(args);
});
G__15786.cljs$core$IFn$_invoke$arity$variadic = G__15786__delegate;
return G__15786;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15789__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15789 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15790__i = 0, G__15790__a = new Array(arguments.length -  0);
while (G__15790__i < G__15790__a.length) {G__15790__a[G__15790__i] = arguments[G__15790__i + 0]; ++G__15790__i;}
  args = new cljs.core.IndexedSeq(G__15790__a,0);
} 
return G__15789__delegate.call(this,args);};
G__15789.cljs$lang$maxFixedArity = 0;
G__15789.cljs$lang$applyTo = (function (arglist__15791){
var args = cljs.core.seq(arglist__15791);
return G__15789__delegate(args);
});
G__15789.cljs$core$IFn$_invoke$arity$variadic = G__15789__delegate;
return G__15789;
})()
;

return null;
});
