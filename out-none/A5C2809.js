goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__83652__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__83652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83653__i = 0, G__83653__a = new Array(arguments.length -  0);
while (G__83653__i < G__83653__a.length) {G__83653__a[G__83653__i] = arguments[G__83653__i + 0]; ++G__83653__i;}
  args = new cljs.core.IndexedSeq(G__83653__a,0);
} 
return G__83652__delegate.call(this,args);};
G__83652.cljs$lang$maxFixedArity = 0;
G__83652.cljs$lang$applyTo = (function (arglist__83654){
var args = cljs.core.seq(arglist__83654);
return G__83652__delegate(args);
});
G__83652.cljs$core$IFn$_invoke$arity$variadic = G__83652__delegate;
return G__83652;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__83655__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__83655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83656__i = 0, G__83656__a = new Array(arguments.length -  0);
while (G__83656__i < G__83656__a.length) {G__83656__a[G__83656__i] = arguments[G__83656__i + 0]; ++G__83656__i;}
  args = new cljs.core.IndexedSeq(G__83656__a,0);
} 
return G__83655__delegate.call(this,args);};
G__83655.cljs$lang$maxFixedArity = 0;
G__83655.cljs$lang$applyTo = (function (arglist__83657){
var args = cljs.core.seq(arglist__83657);
return G__83655__delegate(args);
});
G__83655.cljs$core$IFn$_invoke$arity$variadic = G__83655__delegate;
return G__83655;
})()
;

return null;
});
