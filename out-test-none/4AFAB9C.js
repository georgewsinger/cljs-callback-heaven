goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26179__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26180__i = 0, G__26180__a = new Array(arguments.length -  0);
while (G__26180__i < G__26180__a.length) {G__26180__a[G__26180__i] = arguments[G__26180__i + 0]; ++G__26180__i;}
  args = new cljs.core.IndexedSeq(G__26180__a,0);
} 
return G__26179__delegate.call(this,args);};
G__26179.cljs$lang$maxFixedArity = 0;
G__26179.cljs$lang$applyTo = (function (arglist__26181){
var args = cljs.core.seq(arglist__26181);
return G__26179__delegate(args);
});
G__26179.cljs$core$IFn$_invoke$arity$variadic = G__26179__delegate;
return G__26179;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26182__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26182 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26183__i = 0, G__26183__a = new Array(arguments.length -  0);
while (G__26183__i < G__26183__a.length) {G__26183__a[G__26183__i] = arguments[G__26183__i + 0]; ++G__26183__i;}
  args = new cljs.core.IndexedSeq(G__26183__a,0);
} 
return G__26182__delegate.call(this,args);};
G__26182.cljs$lang$maxFixedArity = 0;
G__26182.cljs$lang$applyTo = (function (arglist__26184){
var args = cljs.core.seq(arglist__26184);
return G__26182__delegate(args);
});
G__26182.cljs$core$IFn$_invoke$arity$variadic = G__26182__delegate;
return G__26182;
})()
;

return null;
});
