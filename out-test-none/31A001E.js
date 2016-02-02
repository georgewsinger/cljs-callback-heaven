goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__264235__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__264235 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__264236__i = 0, G__264236__a = new Array(arguments.length -  0);
while (G__264236__i < G__264236__a.length) {G__264236__a[G__264236__i] = arguments[G__264236__i + 0]; ++G__264236__i;}
  args = new cljs.core.IndexedSeq(G__264236__a,0);
} 
return G__264235__delegate.call(this,args);};
G__264235.cljs$lang$maxFixedArity = 0;
G__264235.cljs$lang$applyTo = (function (arglist__264237){
var args = cljs.core.seq(arglist__264237);
return G__264235__delegate(args);
});
G__264235.cljs$core$IFn$_invoke$arity$variadic = G__264235__delegate;
return G__264235;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__264238__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__264238 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__264239__i = 0, G__264239__a = new Array(arguments.length -  0);
while (G__264239__i < G__264239__a.length) {G__264239__a[G__264239__i] = arguments[G__264239__i + 0]; ++G__264239__i;}
  args = new cljs.core.IndexedSeq(G__264239__a,0);
} 
return G__264238__delegate.call(this,args);};
G__264238.cljs$lang$maxFixedArity = 0;
G__264238.cljs$lang$applyTo = (function (arglist__264240){
var args = cljs.core.seq(arglist__264240);
return G__264238__delegate(args);
});
G__264238.cljs$core$IFn$_invoke$arity$variadic = G__264238__delegate;
return G__264238;
})()
;

return null;
});
