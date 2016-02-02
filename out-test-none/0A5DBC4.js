goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__257647__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__257647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257648__i = 0, G__257648__a = new Array(arguments.length -  0);
while (G__257648__i < G__257648__a.length) {G__257648__a[G__257648__i] = arguments[G__257648__i + 0]; ++G__257648__i;}
  args = new cljs.core.IndexedSeq(G__257648__a,0);
} 
return G__257647__delegate.call(this,args);};
G__257647.cljs$lang$maxFixedArity = 0;
G__257647.cljs$lang$applyTo = (function (arglist__257649){
var args = cljs.core.seq(arglist__257649);
return G__257647__delegate(args);
});
G__257647.cljs$core$IFn$_invoke$arity$variadic = G__257647__delegate;
return G__257647;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__257650__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__257650 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__257651__i = 0, G__257651__a = new Array(arguments.length -  0);
while (G__257651__i < G__257651__a.length) {G__257651__a[G__257651__i] = arguments[G__257651__i + 0]; ++G__257651__i;}
  args = new cljs.core.IndexedSeq(G__257651__a,0);
} 
return G__257650__delegate.call(this,args);};
G__257650.cljs$lang$maxFixedArity = 0;
G__257650.cljs$lang$applyTo = (function (arglist__257652){
var args = cljs.core.seq(arglist__257652);
return G__257650__delegate(args);
});
G__257650.cljs$core$IFn$_invoke$arity$variadic = G__257650__delegate;
return G__257650;
})()
;

return null;
});
