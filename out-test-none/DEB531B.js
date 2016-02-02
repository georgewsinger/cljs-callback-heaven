goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20181__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20182__i = 0, G__20182__a = new Array(arguments.length -  0);
while (G__20182__i < G__20182__a.length) {G__20182__a[G__20182__i] = arguments[G__20182__i + 0]; ++G__20182__i;}
  args = new cljs.core.IndexedSeq(G__20182__a,0);
} 
return G__20181__delegate.call(this,args);};
G__20181.cljs$lang$maxFixedArity = 0;
G__20181.cljs$lang$applyTo = (function (arglist__20183){
var args = cljs.core.seq(arglist__20183);
return G__20181__delegate(args);
});
G__20181.cljs$core$IFn$_invoke$arity$variadic = G__20181__delegate;
return G__20181;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20184__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20185__i = 0, G__20185__a = new Array(arguments.length -  0);
while (G__20185__i < G__20185__a.length) {G__20185__a[G__20185__i] = arguments[G__20185__i + 0]; ++G__20185__i;}
  args = new cljs.core.IndexedSeq(G__20185__a,0);
} 
return G__20184__delegate.call(this,args);};
G__20184.cljs$lang$maxFixedArity = 0;
G__20184.cljs$lang$applyTo = (function (arglist__20186){
var args = cljs.core.seq(arglist__20186);
return G__20184__delegate(args);
});
G__20184.cljs$core$IFn$_invoke$arity$variadic = G__20184__delegate;
return G__20184;
})()
;

return null;
});
