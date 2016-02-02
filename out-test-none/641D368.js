goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16969__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16970__i = 0, G__16970__a = new Array(arguments.length -  0);
while (G__16970__i < G__16970__a.length) {G__16970__a[G__16970__i] = arguments[G__16970__i + 0]; ++G__16970__i;}
  args = new cljs.core.IndexedSeq(G__16970__a,0);
} 
return G__16969__delegate.call(this,args);};
G__16969.cljs$lang$maxFixedArity = 0;
G__16969.cljs$lang$applyTo = (function (arglist__16971){
var args = cljs.core.seq(arglist__16971);
return G__16969__delegate(args);
});
G__16969.cljs$core$IFn$_invoke$arity$variadic = G__16969__delegate;
return G__16969;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16972__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16973__i = 0, G__16973__a = new Array(arguments.length -  0);
while (G__16973__i < G__16973__a.length) {G__16973__a[G__16973__i] = arguments[G__16973__i + 0]; ++G__16973__i;}
  args = new cljs.core.IndexedSeq(G__16973__a,0);
} 
return G__16972__delegate.call(this,args);};
G__16972.cljs$lang$maxFixedArity = 0;
G__16972.cljs$lang$applyTo = (function (arglist__16974){
var args = cljs.core.seq(arglist__16974);
return G__16972__delegate(args);
});
G__16972.cljs$core$IFn$_invoke$arity$variadic = G__16972__delegate;
return G__16972;
})()
;

return null;
});
