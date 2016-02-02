goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__17108__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__17108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17109__i = 0, G__17109__a = new Array(arguments.length -  0);
while (G__17109__i < G__17109__a.length) {G__17109__a[G__17109__i] = arguments[G__17109__i + 0]; ++G__17109__i;}
  args = new cljs.core.IndexedSeq(G__17109__a,0);
} 
return G__17108__delegate.call(this,args);};
G__17108.cljs$lang$maxFixedArity = 0;
G__17108.cljs$lang$applyTo = (function (arglist__17110){
var args = cljs.core.seq(arglist__17110);
return G__17108__delegate(args);
});
G__17108.cljs$core$IFn$_invoke$arity$variadic = G__17108__delegate;
return G__17108;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__17111__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__17111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17112__i = 0, G__17112__a = new Array(arguments.length -  0);
while (G__17112__i < G__17112__a.length) {G__17112__a[G__17112__i] = arguments[G__17112__i + 0]; ++G__17112__i;}
  args = new cljs.core.IndexedSeq(G__17112__a,0);
} 
return G__17111__delegate.call(this,args);};
G__17111.cljs$lang$maxFixedArity = 0;
G__17111.cljs$lang$applyTo = (function (arglist__17113){
var args = cljs.core.seq(arglist__17113);
return G__17111__delegate(args);
});
G__17111.cljs$core$IFn$_invoke$arity$variadic = G__17111__delegate;
return G__17111;
})()
;

return null;
});
