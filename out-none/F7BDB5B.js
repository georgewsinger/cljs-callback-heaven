goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19139__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19140__i = 0, G__19140__a = new Array(arguments.length -  0);
while (G__19140__i < G__19140__a.length) {G__19140__a[G__19140__i] = arguments[G__19140__i + 0]; ++G__19140__i;}
  args = new cljs.core.IndexedSeq(G__19140__a,0);
} 
return G__19139__delegate.call(this,args);};
G__19139.cljs$lang$maxFixedArity = 0;
G__19139.cljs$lang$applyTo = (function (arglist__19141){
var args = cljs.core.seq(arglist__19141);
return G__19139__delegate(args);
});
G__19139.cljs$core$IFn$_invoke$arity$variadic = G__19139__delegate;
return G__19139;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19142__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19142 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19143__i = 0, G__19143__a = new Array(arguments.length -  0);
while (G__19143__i < G__19143__a.length) {G__19143__a[G__19143__i] = arguments[G__19143__i + 0]; ++G__19143__i;}
  args = new cljs.core.IndexedSeq(G__19143__a,0);
} 
return G__19142__delegate.call(this,args);};
G__19142.cljs$lang$maxFixedArity = 0;
G__19142.cljs$lang$applyTo = (function (arglist__19144){
var args = cljs.core.seq(arglist__19144);
return G__19142__delegate(args);
});
G__19142.cljs$core$IFn$_invoke$arity$variadic = G__19142__delegate;
return G__19142;
})()
;

return null;
});
