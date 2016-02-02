goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__96176__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__96176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96177__i = 0, G__96177__a = new Array(arguments.length -  0);
while (G__96177__i < G__96177__a.length) {G__96177__a[G__96177__i] = arguments[G__96177__i + 0]; ++G__96177__i;}
  args = new cljs.core.IndexedSeq(G__96177__a,0);
} 
return G__96176__delegate.call(this,args);};
G__96176.cljs$lang$maxFixedArity = 0;
G__96176.cljs$lang$applyTo = (function (arglist__96178){
var args = cljs.core.seq(arglist__96178);
return G__96176__delegate(args);
});
G__96176.cljs$core$IFn$_invoke$arity$variadic = G__96176__delegate;
return G__96176;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__96179__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__96179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__96180__i = 0, G__96180__a = new Array(arguments.length -  0);
while (G__96180__i < G__96180__a.length) {G__96180__a[G__96180__i] = arguments[G__96180__i + 0]; ++G__96180__i;}
  args = new cljs.core.IndexedSeq(G__96180__a,0);
} 
return G__96179__delegate.call(this,args);};
G__96179.cljs$lang$maxFixedArity = 0;
G__96179.cljs$lang$applyTo = (function (arglist__96181){
var args = cljs.core.seq(arglist__96181);
return G__96179__delegate(args);
});
G__96179.cljs$core$IFn$_invoke$arity$variadic = G__96179__delegate;
return G__96179;
})()
;

return null;
});
