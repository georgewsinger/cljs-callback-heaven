goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31553__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31553 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31554__i = 0, G__31554__a = new Array(arguments.length -  0);
while (G__31554__i < G__31554__a.length) {G__31554__a[G__31554__i] = arguments[G__31554__i + 0]; ++G__31554__i;}
  args = new cljs.core.IndexedSeq(G__31554__a,0);
} 
return G__31553__delegate.call(this,args);};
G__31553.cljs$lang$maxFixedArity = 0;
G__31553.cljs$lang$applyTo = (function (arglist__31555){
var args = cljs.core.seq(arglist__31555);
return G__31553__delegate(args);
});
G__31553.cljs$core$IFn$_invoke$arity$variadic = G__31553__delegate;
return G__31553;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31556__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31556 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31557__i = 0, G__31557__a = new Array(arguments.length -  0);
while (G__31557__i < G__31557__a.length) {G__31557__a[G__31557__i] = arguments[G__31557__i + 0]; ++G__31557__i;}
  args = new cljs.core.IndexedSeq(G__31557__a,0);
} 
return G__31556__delegate.call(this,args);};
G__31556.cljs$lang$maxFixedArity = 0;
G__31556.cljs$lang$applyTo = (function (arglist__31558){
var args = cljs.core.seq(arglist__31558);
return G__31556__delegate(args);
});
G__31556.cljs$core$IFn$_invoke$arity$variadic = G__31556__delegate;
return G__31556;
})()
;

return null;
});
