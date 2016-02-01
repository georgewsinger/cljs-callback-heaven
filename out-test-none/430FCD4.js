goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15887__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15887 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15888__i = 0, G__15888__a = new Array(arguments.length -  0);
while (G__15888__i < G__15888__a.length) {G__15888__a[G__15888__i] = arguments[G__15888__i + 0]; ++G__15888__i;}
  args = new cljs.core.IndexedSeq(G__15888__a,0);
} 
return G__15887__delegate.call(this,args);};
G__15887.cljs$lang$maxFixedArity = 0;
G__15887.cljs$lang$applyTo = (function (arglist__15889){
var args = cljs.core.seq(arglist__15889);
return G__15887__delegate(args);
});
G__15887.cljs$core$IFn$_invoke$arity$variadic = G__15887__delegate;
return G__15887;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15890__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15890 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15891__i = 0, G__15891__a = new Array(arguments.length -  0);
while (G__15891__i < G__15891__a.length) {G__15891__a[G__15891__i] = arguments[G__15891__i + 0]; ++G__15891__i;}
  args = new cljs.core.IndexedSeq(G__15891__a,0);
} 
return G__15890__delegate.call(this,args);};
G__15890.cljs$lang$maxFixedArity = 0;
G__15890.cljs$lang$applyTo = (function (arglist__15892){
var args = cljs.core.seq(arglist__15892);
return G__15890__delegate(args);
});
G__15890.cljs$core$IFn$_invoke$arity$variadic = G__15890__delegate;
return G__15890;
})()
;

return null;
});
