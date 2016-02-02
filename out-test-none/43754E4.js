goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24934__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24935__i = 0, G__24935__a = new Array(arguments.length -  0);
while (G__24935__i < G__24935__a.length) {G__24935__a[G__24935__i] = arguments[G__24935__i + 0]; ++G__24935__i;}
  args = new cljs.core.IndexedSeq(G__24935__a,0);
} 
return G__24934__delegate.call(this,args);};
G__24934.cljs$lang$maxFixedArity = 0;
G__24934.cljs$lang$applyTo = (function (arglist__24936){
var args = cljs.core.seq(arglist__24936);
return G__24934__delegate(args);
});
G__24934.cljs$core$IFn$_invoke$arity$variadic = G__24934__delegate;
return G__24934;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24937__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24938__i = 0, G__24938__a = new Array(arguments.length -  0);
while (G__24938__i < G__24938__a.length) {G__24938__a[G__24938__i] = arguments[G__24938__i + 0]; ++G__24938__i;}
  args = new cljs.core.IndexedSeq(G__24938__a,0);
} 
return G__24937__delegate.call(this,args);};
G__24937.cljs$lang$maxFixedArity = 0;
G__24937.cljs$lang$applyTo = (function (arglist__24939){
var args = cljs.core.seq(arglist__24939);
return G__24937__delegate(args);
});
G__24937.cljs$core$IFn$_invoke$arity$variadic = G__24937__delegate;
return G__24937;
})()
;

return null;
});
