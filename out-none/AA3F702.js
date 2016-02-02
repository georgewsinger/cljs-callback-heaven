goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32852__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32853__i = 0, G__32853__a = new Array(arguments.length -  0);
while (G__32853__i < G__32853__a.length) {G__32853__a[G__32853__i] = arguments[G__32853__i + 0]; ++G__32853__i;}
  args = new cljs.core.IndexedSeq(G__32853__a,0);
} 
return G__32852__delegate.call(this,args);};
G__32852.cljs$lang$maxFixedArity = 0;
G__32852.cljs$lang$applyTo = (function (arglist__32854){
var args = cljs.core.seq(arglist__32854);
return G__32852__delegate(args);
});
G__32852.cljs$core$IFn$_invoke$arity$variadic = G__32852__delegate;
return G__32852;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32855__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32855 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32856__i = 0, G__32856__a = new Array(arguments.length -  0);
while (G__32856__i < G__32856__a.length) {G__32856__a[G__32856__i] = arguments[G__32856__i + 0]; ++G__32856__i;}
  args = new cljs.core.IndexedSeq(G__32856__a,0);
} 
return G__32855__delegate.call(this,args);};
G__32855.cljs$lang$maxFixedArity = 0;
G__32855.cljs$lang$applyTo = (function (arglist__32857){
var args = cljs.core.seq(arglist__32857);
return G__32855__delegate(args);
});
G__32855.cljs$core$IFn$_invoke$arity$variadic = G__32855__delegate;
return G__32855;
})()
;

return null;
});
