goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13668__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13668 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13669__i = 0, G__13669__a = new Array(arguments.length -  0);
while (G__13669__i < G__13669__a.length) {G__13669__a[G__13669__i] = arguments[G__13669__i + 0]; ++G__13669__i;}
  args = new cljs.core.IndexedSeq(G__13669__a,0);
} 
return G__13668__delegate.call(this,args);};
G__13668.cljs$lang$maxFixedArity = 0;
G__13668.cljs$lang$applyTo = (function (arglist__13670){
var args = cljs.core.seq(arglist__13670);
return G__13668__delegate(args);
});
G__13668.cljs$core$IFn$_invoke$arity$variadic = G__13668__delegate;
return G__13668;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13671__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13671 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13672__i = 0, G__13672__a = new Array(arguments.length -  0);
while (G__13672__i < G__13672__a.length) {G__13672__a[G__13672__i] = arguments[G__13672__i + 0]; ++G__13672__i;}
  args = new cljs.core.IndexedSeq(G__13672__a,0);
} 
return G__13671__delegate.call(this,args);};
G__13671.cljs$lang$maxFixedArity = 0;
G__13671.cljs$lang$applyTo = (function (arglist__13673){
var args = cljs.core.seq(arglist__13673);
return G__13671__delegate(args);
});
G__13671.cljs$core$IFn$_invoke$arity$variadic = G__13671__delegate;
return G__13671;
})()
;

return null;
});
