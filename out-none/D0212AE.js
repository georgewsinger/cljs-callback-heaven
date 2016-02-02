goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__64776__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__64776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64777__i = 0, G__64777__a = new Array(arguments.length -  0);
while (G__64777__i < G__64777__a.length) {G__64777__a[G__64777__i] = arguments[G__64777__i + 0]; ++G__64777__i;}
  args = new cljs.core.IndexedSeq(G__64777__a,0);
} 
return G__64776__delegate.call(this,args);};
G__64776.cljs$lang$maxFixedArity = 0;
G__64776.cljs$lang$applyTo = (function (arglist__64778){
var args = cljs.core.seq(arglist__64778);
return G__64776__delegate(args);
});
G__64776.cljs$core$IFn$_invoke$arity$variadic = G__64776__delegate;
return G__64776;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64779__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__64779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64780__i = 0, G__64780__a = new Array(arguments.length -  0);
while (G__64780__i < G__64780__a.length) {G__64780__a[G__64780__i] = arguments[G__64780__i + 0]; ++G__64780__i;}
  args = new cljs.core.IndexedSeq(G__64780__a,0);
} 
return G__64779__delegate.call(this,args);};
G__64779.cljs$lang$maxFixedArity = 0;
G__64779.cljs$lang$applyTo = (function (arglist__64781){
var args = cljs.core.seq(arglist__64781);
return G__64779__delegate(args);
});
G__64779.cljs$core$IFn$_invoke$arity$variadic = G__64779__delegate;
return G__64779;
})()
;

return null;
});
