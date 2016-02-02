goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__46273__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__46273 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46274__i = 0, G__46274__a = new Array(arguments.length -  0);
while (G__46274__i < G__46274__a.length) {G__46274__a[G__46274__i] = arguments[G__46274__i + 0]; ++G__46274__i;}
  args = new cljs.core.IndexedSeq(G__46274__a,0);
} 
return G__46273__delegate.call(this,args);};
G__46273.cljs$lang$maxFixedArity = 0;
G__46273.cljs$lang$applyTo = (function (arglist__46275){
var args = cljs.core.seq(arglist__46275);
return G__46273__delegate(args);
});
G__46273.cljs$core$IFn$_invoke$arity$variadic = G__46273__delegate;
return G__46273;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__46276__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__46276 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46277__i = 0, G__46277__a = new Array(arguments.length -  0);
while (G__46277__i < G__46277__a.length) {G__46277__a[G__46277__i] = arguments[G__46277__i + 0]; ++G__46277__i;}
  args = new cljs.core.IndexedSeq(G__46277__a,0);
} 
return G__46276__delegate.call(this,args);};
G__46276.cljs$lang$maxFixedArity = 0;
G__46276.cljs$lang$applyTo = (function (arglist__46278){
var args = cljs.core.seq(arglist__46278);
return G__46276__delegate(args);
});
G__46276.cljs$core$IFn$_invoke$arity$variadic = G__46276__delegate;
return G__46276;
})()
;

return null;
});
