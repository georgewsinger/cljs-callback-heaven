goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31958__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31959__i = 0, G__31959__a = new Array(arguments.length -  0);
while (G__31959__i < G__31959__a.length) {G__31959__a[G__31959__i] = arguments[G__31959__i + 0]; ++G__31959__i;}
  args = new cljs.core.IndexedSeq(G__31959__a,0);
} 
return G__31958__delegate.call(this,args);};
G__31958.cljs$lang$maxFixedArity = 0;
G__31958.cljs$lang$applyTo = (function (arglist__31960){
var args = cljs.core.seq(arglist__31960);
return G__31958__delegate(args);
});
G__31958.cljs$core$IFn$_invoke$arity$variadic = G__31958__delegate;
return G__31958;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31961__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31962__i = 0, G__31962__a = new Array(arguments.length -  0);
while (G__31962__i < G__31962__a.length) {G__31962__a[G__31962__i] = arguments[G__31962__i + 0]; ++G__31962__i;}
  args = new cljs.core.IndexedSeq(G__31962__a,0);
} 
return G__31961__delegate.call(this,args);};
G__31961.cljs$lang$maxFixedArity = 0;
G__31961.cljs$lang$applyTo = (function (arglist__31963){
var args = cljs.core.seq(arglist__31963);
return G__31961__delegate(args);
});
G__31961.cljs$core$IFn$_invoke$arity$variadic = G__31961__delegate;
return G__31961;
})()
;

return null;
});
