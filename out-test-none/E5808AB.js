goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15211__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15212__i = 0, G__15212__a = new Array(arguments.length -  0);
while (G__15212__i < G__15212__a.length) {G__15212__a[G__15212__i] = arguments[G__15212__i + 0]; ++G__15212__i;}
  args = new cljs.core.IndexedSeq(G__15212__a,0);
} 
return G__15211__delegate.call(this,args);};
G__15211.cljs$lang$maxFixedArity = 0;
G__15211.cljs$lang$applyTo = (function (arglist__15213){
var args = cljs.core.seq(arglist__15213);
return G__15211__delegate(args);
});
G__15211.cljs$core$IFn$_invoke$arity$variadic = G__15211__delegate;
return G__15211;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15214__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15215__i = 0, G__15215__a = new Array(arguments.length -  0);
while (G__15215__i < G__15215__a.length) {G__15215__a[G__15215__i] = arguments[G__15215__i + 0]; ++G__15215__i;}
  args = new cljs.core.IndexedSeq(G__15215__a,0);
} 
return G__15214__delegate.call(this,args);};
G__15214.cljs$lang$maxFixedArity = 0;
G__15214.cljs$lang$applyTo = (function (arglist__15216){
var args = cljs.core.seq(arglist__15216);
return G__15214__delegate(args);
});
G__15214.cljs$core$IFn$_invoke$arity$variadic = G__15214__delegate;
return G__15214;
})()
;

return null;
});
