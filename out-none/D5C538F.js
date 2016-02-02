goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13136__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13136 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13137__i = 0, G__13137__a = new Array(arguments.length -  0);
while (G__13137__i < G__13137__a.length) {G__13137__a[G__13137__i] = arguments[G__13137__i + 0]; ++G__13137__i;}
  args = new cljs.core.IndexedSeq(G__13137__a,0);
} 
return G__13136__delegate.call(this,args);};
G__13136.cljs$lang$maxFixedArity = 0;
G__13136.cljs$lang$applyTo = (function (arglist__13138){
var args = cljs.core.seq(arglist__13138);
return G__13136__delegate(args);
});
G__13136.cljs$core$IFn$_invoke$arity$variadic = G__13136__delegate;
return G__13136;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13139__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13139 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13140__i = 0, G__13140__a = new Array(arguments.length -  0);
while (G__13140__i < G__13140__a.length) {G__13140__a[G__13140__i] = arguments[G__13140__i + 0]; ++G__13140__i;}
  args = new cljs.core.IndexedSeq(G__13140__a,0);
} 
return G__13139__delegate.call(this,args);};
G__13139.cljs$lang$maxFixedArity = 0;
G__13139.cljs$lang$applyTo = (function (arglist__13141){
var args = cljs.core.seq(arglist__13141);
return G__13139__delegate(args);
});
G__13139.cljs$core$IFn$_invoke$arity$variadic = G__13139__delegate;
return G__13139;
})()
;

return null;
});
