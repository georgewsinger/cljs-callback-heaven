goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13488__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13489__i = 0, G__13489__a = new Array(arguments.length -  0);
while (G__13489__i < G__13489__a.length) {G__13489__a[G__13489__i] = arguments[G__13489__i + 0]; ++G__13489__i;}
  args = new cljs.core.IndexedSeq(G__13489__a,0);
} 
return G__13488__delegate.call(this,args);};
G__13488.cljs$lang$maxFixedArity = 0;
G__13488.cljs$lang$applyTo = (function (arglist__13490){
var args = cljs.core.seq(arglist__13490);
return G__13488__delegate(args);
});
G__13488.cljs$core$IFn$_invoke$arity$variadic = G__13488__delegate;
return G__13488;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13491__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13491 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13492__i = 0, G__13492__a = new Array(arguments.length -  0);
while (G__13492__i < G__13492__a.length) {G__13492__a[G__13492__i] = arguments[G__13492__i + 0]; ++G__13492__i;}
  args = new cljs.core.IndexedSeq(G__13492__a,0);
} 
return G__13491__delegate.call(this,args);};
G__13491.cljs$lang$maxFixedArity = 0;
G__13491.cljs$lang$applyTo = (function (arglist__13493){
var args = cljs.core.seq(arglist__13493);
return G__13491__delegate(args);
});
G__13491.cljs$core$IFn$_invoke$arity$variadic = G__13491__delegate;
return G__13491;
})()
;

return null;
});
