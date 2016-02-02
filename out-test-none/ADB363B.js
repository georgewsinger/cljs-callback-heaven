goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28617__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__28617 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28618__i = 0, G__28618__a = new Array(arguments.length -  0);
while (G__28618__i < G__28618__a.length) {G__28618__a[G__28618__i] = arguments[G__28618__i + 0]; ++G__28618__i;}
  args = new cljs.core.IndexedSeq(G__28618__a,0);
} 
return G__28617__delegate.call(this,args);};
G__28617.cljs$lang$maxFixedArity = 0;
G__28617.cljs$lang$applyTo = (function (arglist__28619){
var args = cljs.core.seq(arglist__28619);
return G__28617__delegate(args);
});
G__28617.cljs$core$IFn$_invoke$arity$variadic = G__28617__delegate;
return G__28617;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__28620__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__28620 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28621__i = 0, G__28621__a = new Array(arguments.length -  0);
while (G__28621__i < G__28621__a.length) {G__28621__a[G__28621__i] = arguments[G__28621__i + 0]; ++G__28621__i;}
  args = new cljs.core.IndexedSeq(G__28621__a,0);
} 
return G__28620__delegate.call(this,args);};
G__28620.cljs$lang$maxFixedArity = 0;
G__28620.cljs$lang$applyTo = (function (arglist__28622){
var args = cljs.core.seq(arglist__28622);
return G__28620__delegate(args);
});
G__28620.cljs$core$IFn$_invoke$arity$variadic = G__28620__delegate;
return G__28620;
})()
;

return null;
});
