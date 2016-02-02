goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__21108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__21108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21109__i = 0, G__21109__a = new Array(arguments.length -  0);
while (G__21109__i < G__21109__a.length) {G__21109__a[G__21109__i] = arguments[G__21109__i + 0]; ++G__21109__i;}
  args = new cljs.core.IndexedSeq(G__21109__a,0);
} 
return G__21108__delegate.call(this,args);};
G__21108.cljs$lang$maxFixedArity = 0;
G__21108.cljs$lang$applyTo = (function (arglist__21110){
var args = cljs.core.seq(arglist__21110);
return G__21108__delegate(args);
});
G__21108.cljs$core$IFn$_invoke$arity$variadic = G__21108__delegate;
return G__21108;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__21111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__21111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21112__i = 0, G__21112__a = new Array(arguments.length -  0);
while (G__21112__i < G__21112__a.length) {G__21112__a[G__21112__i] = arguments[G__21112__i + 0]; ++G__21112__i;}
  args = new cljs.core.IndexedSeq(G__21112__a,0);
} 
return G__21111__delegate.call(this,args);};
G__21111.cljs$lang$maxFixedArity = 0;
G__21111.cljs$lang$applyTo = (function (arglist__21113){
var args = cljs.core.seq(arglist__21113);
return G__21111__delegate(args);
});
G__21111.cljs$core$IFn$_invoke$arity$variadic = G__21111__delegate;
return G__21111;
})()
;

return null;
});
