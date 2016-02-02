goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26150__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26150 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26151__i = 0, G__26151__a = new Array(arguments.length -  0);
while (G__26151__i < G__26151__a.length) {G__26151__a[G__26151__i] = arguments[G__26151__i + 0]; ++G__26151__i;}
  args = new cljs.core.IndexedSeq(G__26151__a,0);
} 
return G__26150__delegate.call(this,args);};
G__26150.cljs$lang$maxFixedArity = 0;
G__26150.cljs$lang$applyTo = (function (arglist__26152){
var args = cljs.core.seq(arglist__26152);
return G__26150__delegate(args);
});
G__26150.cljs$core$IFn$_invoke$arity$variadic = G__26150__delegate;
return G__26150;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26153__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26153 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26154__i = 0, G__26154__a = new Array(arguments.length -  0);
while (G__26154__i < G__26154__a.length) {G__26154__a[G__26154__i] = arguments[G__26154__i + 0]; ++G__26154__i;}
  args = new cljs.core.IndexedSeq(G__26154__a,0);
} 
return G__26153__delegate.call(this,args);};
G__26153.cljs$lang$maxFixedArity = 0;
G__26153.cljs$lang$applyTo = (function (arglist__26155){
var args = cljs.core.seq(arglist__26155);
return G__26153__delegate(args);
});
G__26153.cljs$core$IFn$_invoke$arity$variadic = G__26153__delegate;
return G__26153;
})()
;

return null;
});
