goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16457__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16458__i = 0, G__16458__a = new Array(arguments.length -  0);
while (G__16458__i < G__16458__a.length) {G__16458__a[G__16458__i] = arguments[G__16458__i + 0]; ++G__16458__i;}
  args = new cljs.core.IndexedSeq(G__16458__a,0);
} 
return G__16457__delegate.call(this,args);};
G__16457.cljs$lang$maxFixedArity = 0;
G__16457.cljs$lang$applyTo = (function (arglist__16459){
var args = cljs.core.seq(arglist__16459);
return G__16457__delegate(args);
});
G__16457.cljs$core$IFn$_invoke$arity$variadic = G__16457__delegate;
return G__16457;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16460__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16461__i = 0, G__16461__a = new Array(arguments.length -  0);
while (G__16461__i < G__16461__a.length) {G__16461__a[G__16461__i] = arguments[G__16461__i + 0]; ++G__16461__i;}
  args = new cljs.core.IndexedSeq(G__16461__a,0);
} 
return G__16460__delegate.call(this,args);};
G__16460.cljs$lang$maxFixedArity = 0;
G__16460.cljs$lang$applyTo = (function (arglist__16462){
var args = cljs.core.seq(arglist__16462);
return G__16460__delegate(args);
});
G__16460.cljs$core$IFn$_invoke$arity$variadic = G__16460__delegate;
return G__16460;
})()
;

return null;
});
