goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10022__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10023__i = 0, G__10023__a = new Array(arguments.length -  0);
while (G__10023__i < G__10023__a.length) {G__10023__a[G__10023__i] = arguments[G__10023__i + 0]; ++G__10023__i;}
  args = new cljs.core.IndexedSeq(G__10023__a,0);
} 
return G__10022__delegate.call(this,args);};
G__10022.cljs$lang$maxFixedArity = 0;
G__10022.cljs$lang$applyTo = (function (arglist__10024){
var args = cljs.core.seq(arglist__10024);
return G__10022__delegate(args);
});
G__10022.cljs$core$IFn$_invoke$arity$variadic = G__10022__delegate;
return G__10022;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10025__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10026__i = 0, G__10026__a = new Array(arguments.length -  0);
while (G__10026__i < G__10026__a.length) {G__10026__a[G__10026__i] = arguments[G__10026__i + 0]; ++G__10026__i;}
  args = new cljs.core.IndexedSeq(G__10026__a,0);
} 
return G__10025__delegate.call(this,args);};
G__10025.cljs$lang$maxFixedArity = 0;
G__10025.cljs$lang$applyTo = (function (arglist__10027){
var args = cljs.core.seq(arglist__10027);
return G__10025__delegate(args);
});
G__10025.cljs$core$IFn$_invoke$arity$variadic = G__10025__delegate;
return G__10025;
})()
;

return null;
});
