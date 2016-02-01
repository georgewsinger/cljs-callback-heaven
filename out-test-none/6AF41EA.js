goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15906__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15906 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15907__i = 0, G__15907__a = new Array(arguments.length -  0);
while (G__15907__i < G__15907__a.length) {G__15907__a[G__15907__i] = arguments[G__15907__i + 0]; ++G__15907__i;}
  args = new cljs.core.IndexedSeq(G__15907__a,0);
} 
return G__15906__delegate.call(this,args);};
G__15906.cljs$lang$maxFixedArity = 0;
G__15906.cljs$lang$applyTo = (function (arglist__15908){
var args = cljs.core.seq(arglist__15908);
return G__15906__delegate(args);
});
G__15906.cljs$core$IFn$_invoke$arity$variadic = G__15906__delegate;
return G__15906;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15909__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15910__i = 0, G__15910__a = new Array(arguments.length -  0);
while (G__15910__i < G__15910__a.length) {G__15910__a[G__15910__i] = arguments[G__15910__i + 0]; ++G__15910__i;}
  args = new cljs.core.IndexedSeq(G__15910__a,0);
} 
return G__15909__delegate.call(this,args);};
G__15909.cljs$lang$maxFixedArity = 0;
G__15909.cljs$lang$applyTo = (function (arglist__15911){
var args = cljs.core.seq(arglist__15911);
return G__15909__delegate(args);
});
G__15909.cljs$core$IFn$_invoke$arity$variadic = G__15909__delegate;
return G__15909;
})()
;

return null;
});
