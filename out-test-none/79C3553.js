goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16236__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16236 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16237__i = 0, G__16237__a = new Array(arguments.length -  0);
while (G__16237__i < G__16237__a.length) {G__16237__a[G__16237__i] = arguments[G__16237__i + 0]; ++G__16237__i;}
  args = new cljs.core.IndexedSeq(G__16237__a,0);
} 
return G__16236__delegate.call(this,args);};
G__16236.cljs$lang$maxFixedArity = 0;
G__16236.cljs$lang$applyTo = (function (arglist__16238){
var args = cljs.core.seq(arglist__16238);
return G__16236__delegate(args);
});
G__16236.cljs$core$IFn$_invoke$arity$variadic = G__16236__delegate;
return G__16236;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16239__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16239 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16240__i = 0, G__16240__a = new Array(arguments.length -  0);
while (G__16240__i < G__16240__a.length) {G__16240__a[G__16240__i] = arguments[G__16240__i + 0]; ++G__16240__i;}
  args = new cljs.core.IndexedSeq(G__16240__a,0);
} 
return G__16239__delegate.call(this,args);};
G__16239.cljs$lang$maxFixedArity = 0;
G__16239.cljs$lang$applyTo = (function (arglist__16241){
var args = cljs.core.seq(arglist__16241);
return G__16239__delegate(args);
});
G__16239.cljs$core$IFn$_invoke$arity$variadic = G__16239__delegate;
return G__16239;
})()
;

return null;
});
