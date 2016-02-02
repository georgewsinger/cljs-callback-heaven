goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__47569__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__47569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47570__i = 0, G__47570__a = new Array(arguments.length -  0);
while (G__47570__i < G__47570__a.length) {G__47570__a[G__47570__i] = arguments[G__47570__i + 0]; ++G__47570__i;}
  args = new cljs.core.IndexedSeq(G__47570__a,0);
} 
return G__47569__delegate.call(this,args);};
G__47569.cljs$lang$maxFixedArity = 0;
G__47569.cljs$lang$applyTo = (function (arglist__47571){
var args = cljs.core.seq(arglist__47571);
return G__47569__delegate(args);
});
G__47569.cljs$core$IFn$_invoke$arity$variadic = G__47569__delegate;
return G__47569;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__47572__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__47572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47573__i = 0, G__47573__a = new Array(arguments.length -  0);
while (G__47573__i < G__47573__a.length) {G__47573__a[G__47573__i] = arguments[G__47573__i + 0]; ++G__47573__i;}
  args = new cljs.core.IndexedSeq(G__47573__a,0);
} 
return G__47572__delegate.call(this,args);};
G__47572.cljs$lang$maxFixedArity = 0;
G__47572.cljs$lang$applyTo = (function (arglist__47574){
var args = cljs.core.seq(arglist__47574);
return G__47572__delegate(args);
});
G__47572.cljs$core$IFn$_invoke$arity$variadic = G__47572__delegate;
return G__47572;
})()
;

return null;
});
