goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__65888__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__65888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65889__i = 0, G__65889__a = new Array(arguments.length -  0);
while (G__65889__i < G__65889__a.length) {G__65889__a[G__65889__i] = arguments[G__65889__i + 0]; ++G__65889__i;}
  args = new cljs.core.IndexedSeq(G__65889__a,0);
} 
return G__65888__delegate.call(this,args);};
G__65888.cljs$lang$maxFixedArity = 0;
G__65888.cljs$lang$applyTo = (function (arglist__65890){
var args = cljs.core.seq(arglist__65890);
return G__65888__delegate(args);
});
G__65888.cljs$core$IFn$_invoke$arity$variadic = G__65888__delegate;
return G__65888;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__65891__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__65891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65892__i = 0, G__65892__a = new Array(arguments.length -  0);
while (G__65892__i < G__65892__a.length) {G__65892__a[G__65892__i] = arguments[G__65892__i + 0]; ++G__65892__i;}
  args = new cljs.core.IndexedSeq(G__65892__a,0);
} 
return G__65891__delegate.call(this,args);};
G__65891.cljs$lang$maxFixedArity = 0;
G__65891.cljs$lang$applyTo = (function (arglist__65893){
var args = cljs.core.seq(arglist__65893);
return G__65891__delegate(args);
});
G__65891.cljs$core$IFn$_invoke$arity$variadic = G__65891__delegate;
return G__65891;
})()
;

return null;
});
