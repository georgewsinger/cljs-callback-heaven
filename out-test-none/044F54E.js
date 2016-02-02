goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23663__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23663 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23664__i = 0, G__23664__a = new Array(arguments.length -  0);
while (G__23664__i < G__23664__a.length) {G__23664__a[G__23664__i] = arguments[G__23664__i + 0]; ++G__23664__i;}
  args = new cljs.core.IndexedSeq(G__23664__a,0);
} 
return G__23663__delegate.call(this,args);};
G__23663.cljs$lang$maxFixedArity = 0;
G__23663.cljs$lang$applyTo = (function (arglist__23665){
var args = cljs.core.seq(arglist__23665);
return G__23663__delegate(args);
});
G__23663.cljs$core$IFn$_invoke$arity$variadic = G__23663__delegate;
return G__23663;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23666__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23667__i = 0, G__23667__a = new Array(arguments.length -  0);
while (G__23667__i < G__23667__a.length) {G__23667__a[G__23667__i] = arguments[G__23667__i + 0]; ++G__23667__i;}
  args = new cljs.core.IndexedSeq(G__23667__a,0);
} 
return G__23666__delegate.call(this,args);};
G__23666.cljs$lang$maxFixedArity = 0;
G__23666.cljs$lang$applyTo = (function (arglist__23668){
var args = cljs.core.seq(arglist__23668);
return G__23666__delegate(args);
});
G__23666.cljs$core$IFn$_invoke$arity$variadic = G__23666__delegate;
return G__23666;
})()
;

return null;
});
