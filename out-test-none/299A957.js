goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16217__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16218__i = 0, G__16218__a = new Array(arguments.length -  0);
while (G__16218__i < G__16218__a.length) {G__16218__a[G__16218__i] = arguments[G__16218__i + 0]; ++G__16218__i;}
  args = new cljs.core.IndexedSeq(G__16218__a,0);
} 
return G__16217__delegate.call(this,args);};
G__16217.cljs$lang$maxFixedArity = 0;
G__16217.cljs$lang$applyTo = (function (arglist__16219){
var args = cljs.core.seq(arglist__16219);
return G__16217__delegate(args);
});
G__16217.cljs$core$IFn$_invoke$arity$variadic = G__16217__delegate;
return G__16217;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16220__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16221__i = 0, G__16221__a = new Array(arguments.length -  0);
while (G__16221__i < G__16221__a.length) {G__16221__a[G__16221__i] = arguments[G__16221__i + 0]; ++G__16221__i;}
  args = new cljs.core.IndexedSeq(G__16221__a,0);
} 
return G__16220__delegate.call(this,args);};
G__16220.cljs$lang$maxFixedArity = 0;
G__16220.cljs$lang$applyTo = (function (arglist__16222){
var args = cljs.core.seq(arglist__16222);
return G__16220__delegate(args);
});
G__16220.cljs$core$IFn$_invoke$arity$variadic = G__16220__delegate;
return G__16220;
})()
;

return null;
});
