goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38704__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38705__i = 0, G__38705__a = new Array(arguments.length -  0);
while (G__38705__i < G__38705__a.length) {G__38705__a[G__38705__i] = arguments[G__38705__i + 0]; ++G__38705__i;}
  args = new cljs.core.IndexedSeq(G__38705__a,0);
} 
return G__38704__delegate.call(this,args);};
G__38704.cljs$lang$maxFixedArity = 0;
G__38704.cljs$lang$applyTo = (function (arglist__38706){
var args = cljs.core.seq(arglist__38706);
return G__38704__delegate(args);
});
G__38704.cljs$core$IFn$_invoke$arity$variadic = G__38704__delegate;
return G__38704;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38707__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38708__i = 0, G__38708__a = new Array(arguments.length -  0);
while (G__38708__i < G__38708__a.length) {G__38708__a[G__38708__i] = arguments[G__38708__i + 0]; ++G__38708__i;}
  args = new cljs.core.IndexedSeq(G__38708__a,0);
} 
return G__38707__delegate.call(this,args);};
G__38707.cljs$lang$maxFixedArity = 0;
G__38707.cljs$lang$applyTo = (function (arglist__38709){
var args = cljs.core.seq(arglist__38709);
return G__38707__delegate(args);
});
G__38707.cljs$core$IFn$_invoke$arity$variadic = G__38707__delegate;
return G__38707;
})()
;

return null;
});
