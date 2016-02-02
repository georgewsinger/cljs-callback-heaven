goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__313186__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__313186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313187__i = 0, G__313187__a = new Array(arguments.length -  0);
while (G__313187__i < G__313187__a.length) {G__313187__a[G__313187__i] = arguments[G__313187__i + 0]; ++G__313187__i;}
  args = new cljs.core.IndexedSeq(G__313187__a,0);
} 
return G__313186__delegate.call(this,args);};
G__313186.cljs$lang$maxFixedArity = 0;
G__313186.cljs$lang$applyTo = (function (arglist__313188){
var args = cljs.core.seq(arglist__313188);
return G__313186__delegate(args);
});
G__313186.cljs$core$IFn$_invoke$arity$variadic = G__313186__delegate;
return G__313186;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__313189__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__313189 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__313190__i = 0, G__313190__a = new Array(arguments.length -  0);
while (G__313190__i < G__313190__a.length) {G__313190__a[G__313190__i] = arguments[G__313190__i + 0]; ++G__313190__i;}
  args = new cljs.core.IndexedSeq(G__313190__a,0);
} 
return G__313189__delegate.call(this,args);};
G__313189.cljs$lang$maxFixedArity = 0;
G__313189.cljs$lang$applyTo = (function (arglist__313191){
var args = cljs.core.seq(arglist__313191);
return G__313189__delegate(args);
});
G__313189.cljs$core$IFn$_invoke$arity$variadic = G__313189__delegate;
return G__313189;
})()
;

return null;
});
