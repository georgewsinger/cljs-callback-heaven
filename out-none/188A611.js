goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10219__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10220__i = 0, G__10220__a = new Array(arguments.length -  0);
while (G__10220__i < G__10220__a.length) {G__10220__a[G__10220__i] = arguments[G__10220__i + 0]; ++G__10220__i;}
  args = new cljs.core.IndexedSeq(G__10220__a,0);
} 
return G__10219__delegate.call(this,args);};
G__10219.cljs$lang$maxFixedArity = 0;
G__10219.cljs$lang$applyTo = (function (arglist__10221){
var args = cljs.core.seq(arglist__10221);
return G__10219__delegate(args);
});
G__10219.cljs$core$IFn$_invoke$arity$variadic = G__10219__delegate;
return G__10219;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10222__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10223__i = 0, G__10223__a = new Array(arguments.length -  0);
while (G__10223__i < G__10223__a.length) {G__10223__a[G__10223__i] = arguments[G__10223__i + 0]; ++G__10223__i;}
  args = new cljs.core.IndexedSeq(G__10223__a,0);
} 
return G__10222__delegate.call(this,args);};
G__10222.cljs$lang$maxFixedArity = 0;
G__10222.cljs$lang$applyTo = (function (arglist__10224){
var args = cljs.core.seq(arglist__10224);
return G__10222__delegate(args);
});
G__10222.cljs$core$IFn$_invoke$arity$variadic = G__10222__delegate;
return G__10222;
})()
;

return null;
});
