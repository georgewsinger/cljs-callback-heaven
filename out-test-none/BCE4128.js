goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__325036__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__325036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325037__i = 0, G__325037__a = new Array(arguments.length -  0);
while (G__325037__i < G__325037__a.length) {G__325037__a[G__325037__i] = arguments[G__325037__i + 0]; ++G__325037__i;}
  args = new cljs.core.IndexedSeq(G__325037__a,0);
} 
return G__325036__delegate.call(this,args);};
G__325036.cljs$lang$maxFixedArity = 0;
G__325036.cljs$lang$applyTo = (function (arglist__325038){
var args = cljs.core.seq(arglist__325038);
return G__325036__delegate(args);
});
G__325036.cljs$core$IFn$_invoke$arity$variadic = G__325036__delegate;
return G__325036;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__325039__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__325039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__325040__i = 0, G__325040__a = new Array(arguments.length -  0);
while (G__325040__i < G__325040__a.length) {G__325040__a[G__325040__i] = arguments[G__325040__i + 0]; ++G__325040__i;}
  args = new cljs.core.IndexedSeq(G__325040__a,0);
} 
return G__325039__delegate.call(this,args);};
G__325039.cljs$lang$maxFixedArity = 0;
G__325039.cljs$lang$applyTo = (function (arglist__325041){
var args = cljs.core.seq(arglist__325041);
return G__325039__delegate(args);
});
G__325039.cljs$core$IFn$_invoke$arity$variadic = G__325039__delegate;
return G__325039;
})()
;

return null;
});
