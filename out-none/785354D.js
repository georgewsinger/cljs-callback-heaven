goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60884__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60884 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60885__i = 0, G__60885__a = new Array(arguments.length -  0);
while (G__60885__i < G__60885__a.length) {G__60885__a[G__60885__i] = arguments[G__60885__i + 0]; ++G__60885__i;}
  args = new cljs.core.IndexedSeq(G__60885__a,0);
} 
return G__60884__delegate.call(this,args);};
G__60884.cljs$lang$maxFixedArity = 0;
G__60884.cljs$lang$applyTo = (function (arglist__60886){
var args = cljs.core.seq(arglist__60886);
return G__60884__delegate(args);
});
G__60884.cljs$core$IFn$_invoke$arity$variadic = G__60884__delegate;
return G__60884;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60887__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60888__i = 0, G__60888__a = new Array(arguments.length -  0);
while (G__60888__i < G__60888__a.length) {G__60888__a[G__60888__i] = arguments[G__60888__i + 0]; ++G__60888__i;}
  args = new cljs.core.IndexedSeq(G__60888__a,0);
} 
return G__60887__delegate.call(this,args);};
G__60887.cljs$lang$maxFixedArity = 0;
G__60887.cljs$lang$applyTo = (function (arglist__60889){
var args = cljs.core.seq(arglist__60889);
return G__60887__delegate(args);
});
G__60887.cljs$core$IFn$_invoke$arity$variadic = G__60887__delegate;
return G__60887;
})()
;

return null;
});
