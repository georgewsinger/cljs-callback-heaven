goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13811__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13812__i = 0, G__13812__a = new Array(arguments.length -  0);
while (G__13812__i < G__13812__a.length) {G__13812__a[G__13812__i] = arguments[G__13812__i + 0]; ++G__13812__i;}
  args = new cljs.core.IndexedSeq(G__13812__a,0);
} 
return G__13811__delegate.call(this,args);};
G__13811.cljs$lang$maxFixedArity = 0;
G__13811.cljs$lang$applyTo = (function (arglist__13813){
var args = cljs.core.seq(arglist__13813);
return G__13811__delegate(args);
});
G__13811.cljs$core$IFn$_invoke$arity$variadic = G__13811__delegate;
return G__13811;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13814__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13815__i = 0, G__13815__a = new Array(arguments.length -  0);
while (G__13815__i < G__13815__a.length) {G__13815__a[G__13815__i] = arguments[G__13815__i + 0]; ++G__13815__i;}
  args = new cljs.core.IndexedSeq(G__13815__a,0);
} 
return G__13814__delegate.call(this,args);};
G__13814.cljs$lang$maxFixedArity = 0;
G__13814.cljs$lang$applyTo = (function (arglist__13816){
var args = cljs.core.seq(arglist__13816);
return G__13814__delegate(args);
});
G__13814.cljs$core$IFn$_invoke$arity$variadic = G__13814__delegate;
return G__13814;
})()
;

return null;
});
