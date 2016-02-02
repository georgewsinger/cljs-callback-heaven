goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13189__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13190__i = 0, G__13190__a = new Array(arguments.length -  0);
while (G__13190__i < G__13190__a.length) {G__13190__a[G__13190__i] = arguments[G__13190__i + 0]; ++G__13190__i;}
  args = new cljs.core.IndexedSeq(G__13190__a,0);
} 
return G__13189__delegate.call(this,args);};
G__13189.cljs$lang$maxFixedArity = 0;
G__13189.cljs$lang$applyTo = (function (arglist__13191){
var args = cljs.core.seq(arglist__13191);
return G__13189__delegate(args);
});
G__13189.cljs$core$IFn$_invoke$arity$variadic = G__13189__delegate;
return G__13189;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13192__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13193__i = 0, G__13193__a = new Array(arguments.length -  0);
while (G__13193__i < G__13193__a.length) {G__13193__a[G__13193__i] = arguments[G__13193__i + 0]; ++G__13193__i;}
  args = new cljs.core.IndexedSeq(G__13193__a,0);
} 
return G__13192__delegate.call(this,args);};
G__13192.cljs$lang$maxFixedArity = 0;
G__13192.cljs$lang$applyTo = (function (arglist__13194){
var args = cljs.core.seq(arglist__13194);
return G__13192__delegate(args);
});
G__13192.cljs$core$IFn$_invoke$arity$variadic = G__13192__delegate;
return G__13192;
})()
;

return null;
});
