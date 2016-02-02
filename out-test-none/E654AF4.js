goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__57569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__57569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57570__i = 0, G__57570__a = new Array(arguments.length -  0);
while (G__57570__i < G__57570__a.length) {G__57570__a[G__57570__i] = arguments[G__57570__i + 0]; ++G__57570__i;}
  args = new cljs.core.IndexedSeq(G__57570__a,0);
} 
return G__57569__delegate.call(this,args);};
G__57569.cljs$lang$maxFixedArity = 0;
G__57569.cljs$lang$applyTo = (function (arglist__57571){
var args = cljs.core.seq(arglist__57571);
return G__57569__delegate(args);
});
G__57569.cljs$core$IFn$_invoke$arity$variadic = G__57569__delegate;
return G__57569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__57572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__57572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__57573__i = 0, G__57573__a = new Array(arguments.length -  0);
while (G__57573__i < G__57573__a.length) {G__57573__a[G__57573__i] = arguments[G__57573__i + 0]; ++G__57573__i;}
  args = new cljs.core.IndexedSeq(G__57573__a,0);
} 
return G__57572__delegate.call(this,args);};
G__57572.cljs$lang$maxFixedArity = 0;
G__57572.cljs$lang$applyTo = (function (arglist__57574){
var args = cljs.core.seq(arglist__57574);
return G__57572__delegate(args);
});
G__57572.cljs$core$IFn$_invoke$arity$variadic = G__57572__delegate;
return G__57572;
})()
;

return null;
});
