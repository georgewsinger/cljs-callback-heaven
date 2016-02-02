goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12036__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12037__i = 0, G__12037__a = new Array(arguments.length -  0);
while (G__12037__i < G__12037__a.length) {G__12037__a[G__12037__i] = arguments[G__12037__i + 0]; ++G__12037__i;}
  args = new cljs.core.IndexedSeq(G__12037__a,0);
} 
return G__12036__delegate.call(this,args);};
G__12036.cljs$lang$maxFixedArity = 0;
G__12036.cljs$lang$applyTo = (function (arglist__12038){
var args = cljs.core.seq(arglist__12038);
return G__12036__delegate(args);
});
G__12036.cljs$core$IFn$_invoke$arity$variadic = G__12036__delegate;
return G__12036;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12039__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12039 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12040__i = 0, G__12040__a = new Array(arguments.length -  0);
while (G__12040__i < G__12040__a.length) {G__12040__a[G__12040__i] = arguments[G__12040__i + 0]; ++G__12040__i;}
  args = new cljs.core.IndexedSeq(G__12040__a,0);
} 
return G__12039__delegate.call(this,args);};
G__12039.cljs$lang$maxFixedArity = 0;
G__12039.cljs$lang$applyTo = (function (arglist__12041){
var args = cljs.core.seq(arglist__12041);
return G__12039__delegate(args);
});
G__12039.cljs$core$IFn$_invoke$arity$variadic = G__12039__delegate;
return G__12039;
})()
;

return null;
});
