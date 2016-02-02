goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60507__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60508__i = 0, G__60508__a = new Array(arguments.length -  0);
while (G__60508__i < G__60508__a.length) {G__60508__a[G__60508__i] = arguments[G__60508__i + 0]; ++G__60508__i;}
  args = new cljs.core.IndexedSeq(G__60508__a,0);
} 
return G__60507__delegate.call(this,args);};
G__60507.cljs$lang$maxFixedArity = 0;
G__60507.cljs$lang$applyTo = (function (arglist__60509){
var args = cljs.core.seq(arglist__60509);
return G__60507__delegate(args);
});
G__60507.cljs$core$IFn$_invoke$arity$variadic = G__60507__delegate;
return G__60507;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60510__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60511__i = 0, G__60511__a = new Array(arguments.length -  0);
while (G__60511__i < G__60511__a.length) {G__60511__a[G__60511__i] = arguments[G__60511__i + 0]; ++G__60511__i;}
  args = new cljs.core.IndexedSeq(G__60511__a,0);
} 
return G__60510__delegate.call(this,args);};
G__60510.cljs$lang$maxFixedArity = 0;
G__60510.cljs$lang$applyTo = (function (arglist__60512){
var args = cljs.core.seq(arglist__60512);
return G__60510__delegate(args);
});
G__60510.cljs$core$IFn$_invoke$arity$variadic = G__60510__delegate;
return G__60510;
})()
;

return null;
});
