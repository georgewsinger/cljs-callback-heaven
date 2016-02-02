goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52038__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52039__i = 0, G__52039__a = new Array(arguments.length -  0);
while (G__52039__i < G__52039__a.length) {G__52039__a[G__52039__i] = arguments[G__52039__i + 0]; ++G__52039__i;}
  args = new cljs.core.IndexedSeq(G__52039__a,0);
} 
return G__52038__delegate.call(this,args);};
G__52038.cljs$lang$maxFixedArity = 0;
G__52038.cljs$lang$applyTo = (function (arglist__52040){
var args = cljs.core.seq(arglist__52040);
return G__52038__delegate(args);
});
G__52038.cljs$core$IFn$_invoke$arity$variadic = G__52038__delegate;
return G__52038;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52041__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52042__i = 0, G__52042__a = new Array(arguments.length -  0);
while (G__52042__i < G__52042__a.length) {G__52042__a[G__52042__i] = arguments[G__52042__i + 0]; ++G__52042__i;}
  args = new cljs.core.IndexedSeq(G__52042__a,0);
} 
return G__52041__delegate.call(this,args);};
G__52041.cljs$lang$maxFixedArity = 0;
G__52041.cljs$lang$applyTo = (function (arglist__52043){
var args = cljs.core.seq(arglist__52043);
return G__52041__delegate(args);
});
G__52041.cljs$core$IFn$_invoke$arity$variadic = G__52041__delegate;
return G__52041;
})()
;

return null;
});
