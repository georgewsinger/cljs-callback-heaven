goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__89741__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__89741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89742__i = 0, G__89742__a = new Array(arguments.length -  0);
while (G__89742__i < G__89742__a.length) {G__89742__a[G__89742__i] = arguments[G__89742__i + 0]; ++G__89742__i;}
  args = new cljs.core.IndexedSeq(G__89742__a,0);
} 
return G__89741__delegate.call(this,args);};
G__89741.cljs$lang$maxFixedArity = 0;
G__89741.cljs$lang$applyTo = (function (arglist__89743){
var args = cljs.core.seq(arglist__89743);
return G__89741__delegate(args);
});
G__89741.cljs$core$IFn$_invoke$arity$variadic = G__89741__delegate;
return G__89741;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__89744__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__89744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__89745__i = 0, G__89745__a = new Array(arguments.length -  0);
while (G__89745__i < G__89745__a.length) {G__89745__a[G__89745__i] = arguments[G__89745__i + 0]; ++G__89745__i;}
  args = new cljs.core.IndexedSeq(G__89745__a,0);
} 
return G__89744__delegate.call(this,args);};
G__89744.cljs$lang$maxFixedArity = 0;
G__89744.cljs$lang$applyTo = (function (arglist__89746){
var args = cljs.core.seq(arglist__89746);
return G__89744__delegate(args);
});
G__89744.cljs$core$IFn$_invoke$arity$variadic = G__89744__delegate;
return G__89744;
})()
;

return null;
});
