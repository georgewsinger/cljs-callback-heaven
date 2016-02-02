goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__336278__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__336278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336279__i = 0, G__336279__a = new Array(arguments.length -  0);
while (G__336279__i < G__336279__a.length) {G__336279__a[G__336279__i] = arguments[G__336279__i + 0]; ++G__336279__i;}
  args = new cljs.core.IndexedSeq(G__336279__a,0);
} 
return G__336278__delegate.call(this,args);};
G__336278.cljs$lang$maxFixedArity = 0;
G__336278.cljs$lang$applyTo = (function (arglist__336280){
var args = cljs.core.seq(arglist__336280);
return G__336278__delegate(args);
});
G__336278.cljs$core$IFn$_invoke$arity$variadic = G__336278__delegate;
return G__336278;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__336281__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__336281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336282__i = 0, G__336282__a = new Array(arguments.length -  0);
while (G__336282__i < G__336282__a.length) {G__336282__a[G__336282__i] = arguments[G__336282__i + 0]; ++G__336282__i;}
  args = new cljs.core.IndexedSeq(G__336282__a,0);
} 
return G__336281__delegate.call(this,args);};
G__336281.cljs$lang$maxFixedArity = 0;
G__336281.cljs$lang$applyTo = (function (arglist__336283){
var args = cljs.core.seq(arglist__336283);
return G__336281__delegate(args);
});
G__336281.cljs$core$IFn$_invoke$arity$variadic = G__336281__delegate;
return G__336281;
})()
;

return null;
});
