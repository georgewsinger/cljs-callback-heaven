goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73672__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73673__i = 0, G__73673__a = new Array(arguments.length -  0);
while (G__73673__i < G__73673__a.length) {G__73673__a[G__73673__i] = arguments[G__73673__i + 0]; ++G__73673__i;}
  args = new cljs.core.IndexedSeq(G__73673__a,0);
} 
return G__73672__delegate.call(this,args);};
G__73672.cljs$lang$maxFixedArity = 0;
G__73672.cljs$lang$applyTo = (function (arglist__73674){
var args = cljs.core.seq(arglist__73674);
return G__73672__delegate(args);
});
G__73672.cljs$core$IFn$_invoke$arity$variadic = G__73672__delegate;
return G__73672;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73675__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73676__i = 0, G__73676__a = new Array(arguments.length -  0);
while (G__73676__i < G__73676__a.length) {G__73676__a[G__73676__i] = arguments[G__73676__i + 0]; ++G__73676__i;}
  args = new cljs.core.IndexedSeq(G__73676__a,0);
} 
return G__73675__delegate.call(this,args);};
G__73675.cljs$lang$maxFixedArity = 0;
G__73675.cljs$lang$applyTo = (function (arglist__73677){
var args = cljs.core.seq(arglist__73677);
return G__73675__delegate(args);
});
G__73675.cljs$core$IFn$_invoke$arity$variadic = G__73675__delegate;
return G__73675;
})()
;

return null;
});
