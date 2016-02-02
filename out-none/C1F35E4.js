goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12604__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12604 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12605__i = 0, G__12605__a = new Array(arguments.length -  0);
while (G__12605__i < G__12605__a.length) {G__12605__a[G__12605__i] = arguments[G__12605__i + 0]; ++G__12605__i;}
  args = new cljs.core.IndexedSeq(G__12605__a,0);
} 
return G__12604__delegate.call(this,args);};
G__12604.cljs$lang$maxFixedArity = 0;
G__12604.cljs$lang$applyTo = (function (arglist__12606){
var args = cljs.core.seq(arglist__12606);
return G__12604__delegate(args);
});
G__12604.cljs$core$IFn$_invoke$arity$variadic = G__12604__delegate;
return G__12604;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12607__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12607 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12608__i = 0, G__12608__a = new Array(arguments.length -  0);
while (G__12608__i < G__12608__a.length) {G__12608__a[G__12608__i] = arguments[G__12608__i + 0]; ++G__12608__i;}
  args = new cljs.core.IndexedSeq(G__12608__a,0);
} 
return G__12607__delegate.call(this,args);};
G__12607.cljs$lang$maxFixedArity = 0;
G__12607.cljs$lang$applyTo = (function (arglist__12609){
var args = cljs.core.seq(arglist__12609);
return G__12607__delegate(args);
});
G__12607.cljs$core$IFn$_invoke$arity$variadic = G__12607__delegate;
return G__12607;
})()
;

return null;
});
