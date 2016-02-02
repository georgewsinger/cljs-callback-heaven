goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11937__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11938__i = 0, G__11938__a = new Array(arguments.length -  0);
while (G__11938__i < G__11938__a.length) {G__11938__a[G__11938__i] = arguments[G__11938__i + 0]; ++G__11938__i;}
  args = new cljs.core.IndexedSeq(G__11938__a,0);
} 
return G__11937__delegate.call(this,args);};
G__11937.cljs$lang$maxFixedArity = 0;
G__11937.cljs$lang$applyTo = (function (arglist__11939){
var args = cljs.core.seq(arglist__11939);
return G__11937__delegate(args);
});
G__11937.cljs$core$IFn$_invoke$arity$variadic = G__11937__delegate;
return G__11937;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11940__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11941__i = 0, G__11941__a = new Array(arguments.length -  0);
while (G__11941__i < G__11941__a.length) {G__11941__a[G__11941__i] = arguments[G__11941__i + 0]; ++G__11941__i;}
  args = new cljs.core.IndexedSeq(G__11941__a,0);
} 
return G__11940__delegate.call(this,args);};
G__11940.cljs$lang$maxFixedArity = 0;
G__11940.cljs$lang$applyTo = (function (arglist__11942){
var args = cljs.core.seq(arglist__11942);
return G__11940__delegate(args);
});
G__11940.cljs$core$IFn$_invoke$arity$variadic = G__11940__delegate;
return G__11940;
})()
;

return null;
});
