goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__238591__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__238591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238592__i = 0, G__238592__a = new Array(arguments.length -  0);
while (G__238592__i < G__238592__a.length) {G__238592__a[G__238592__i] = arguments[G__238592__i + 0]; ++G__238592__i;}
  args = new cljs.core.IndexedSeq(G__238592__a,0);
} 
return G__238591__delegate.call(this,args);};
G__238591.cljs$lang$maxFixedArity = 0;
G__238591.cljs$lang$applyTo = (function (arglist__238593){
var args = cljs.core.seq(arglist__238593);
return G__238591__delegate(args);
});
G__238591.cljs$core$IFn$_invoke$arity$variadic = G__238591__delegate;
return G__238591;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__238594__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__238594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__238595__i = 0, G__238595__a = new Array(arguments.length -  0);
while (G__238595__i < G__238595__a.length) {G__238595__a[G__238595__i] = arguments[G__238595__i + 0]; ++G__238595__i;}
  args = new cljs.core.IndexedSeq(G__238595__a,0);
} 
return G__238594__delegate.call(this,args);};
G__238594.cljs$lang$maxFixedArity = 0;
G__238594.cljs$lang$applyTo = (function (arglist__238596){
var args = cljs.core.seq(arglist__238596);
return G__238594__delegate(args);
});
G__238594.cljs$core$IFn$_invoke$arity$variadic = G__238594__delegate;
return G__238594;
})()
;

return null;
});
