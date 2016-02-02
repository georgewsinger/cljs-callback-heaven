goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39981__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39982__i = 0, G__39982__a = new Array(arguments.length -  0);
while (G__39982__i < G__39982__a.length) {G__39982__a[G__39982__i] = arguments[G__39982__i + 0]; ++G__39982__i;}
  args = new cljs.core.IndexedSeq(G__39982__a,0);
} 
return G__39981__delegate.call(this,args);};
G__39981.cljs$lang$maxFixedArity = 0;
G__39981.cljs$lang$applyTo = (function (arglist__39983){
var args = cljs.core.seq(arglist__39983);
return G__39981__delegate(args);
});
G__39981.cljs$core$IFn$_invoke$arity$variadic = G__39981__delegate;
return G__39981;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39984__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39985__i = 0, G__39985__a = new Array(arguments.length -  0);
while (G__39985__i < G__39985__a.length) {G__39985__a[G__39985__i] = arguments[G__39985__i + 0]; ++G__39985__i;}
  args = new cljs.core.IndexedSeq(G__39985__a,0);
} 
return G__39984__delegate.call(this,args);};
G__39984.cljs$lang$maxFixedArity = 0;
G__39984.cljs$lang$applyTo = (function (arglist__39986){
var args = cljs.core.seq(arglist__39986);
return G__39984__delegate(args);
});
G__39984.cljs$core$IFn$_invoke$arity$variadic = G__39984__delegate;
return G__39984;
})()
;

return null;
});
