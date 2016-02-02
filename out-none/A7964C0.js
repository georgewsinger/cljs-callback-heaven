goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58104__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58105__i = 0, G__58105__a = new Array(arguments.length -  0);
while (G__58105__i < G__58105__a.length) {G__58105__a[G__58105__i] = arguments[G__58105__i + 0]; ++G__58105__i;}
  args = new cljs.core.IndexedSeq(G__58105__a,0);
} 
return G__58104__delegate.call(this,args);};
G__58104.cljs$lang$maxFixedArity = 0;
G__58104.cljs$lang$applyTo = (function (arglist__58106){
var args = cljs.core.seq(arglist__58106);
return G__58104__delegate(args);
});
G__58104.cljs$core$IFn$_invoke$arity$variadic = G__58104__delegate;
return G__58104;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58107__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58108__i = 0, G__58108__a = new Array(arguments.length -  0);
while (G__58108__i < G__58108__a.length) {G__58108__a[G__58108__i] = arguments[G__58108__i + 0]; ++G__58108__i;}
  args = new cljs.core.IndexedSeq(G__58108__a,0);
} 
return G__58107__delegate.call(this,args);};
G__58107.cljs$lang$maxFixedArity = 0;
G__58107.cljs$lang$applyTo = (function (arglist__58109){
var args = cljs.core.seq(arglist__58109);
return G__58107__delegate(args);
});
G__58107.cljs$core$IFn$_invoke$arity$variadic = G__58107__delegate;
return G__58107;
})()
;

return null;
});
