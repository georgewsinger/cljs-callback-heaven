goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__354104__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__354104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354105__i = 0, G__354105__a = new Array(arguments.length -  0);
while (G__354105__i < G__354105__a.length) {G__354105__a[G__354105__i] = arguments[G__354105__i + 0]; ++G__354105__i;}
  args = new cljs.core.IndexedSeq(G__354105__a,0);
} 
return G__354104__delegate.call(this,args);};
G__354104.cljs$lang$maxFixedArity = 0;
G__354104.cljs$lang$applyTo = (function (arglist__354106){
var args = cljs.core.seq(arglist__354106);
return G__354104__delegate(args);
});
G__354104.cljs$core$IFn$_invoke$arity$variadic = G__354104__delegate;
return G__354104;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__354107__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__354107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__354108__i = 0, G__354108__a = new Array(arguments.length -  0);
while (G__354108__i < G__354108__a.length) {G__354108__a[G__354108__i] = arguments[G__354108__i + 0]; ++G__354108__i;}
  args = new cljs.core.IndexedSeq(G__354108__a,0);
} 
return G__354107__delegate.call(this,args);};
G__354107.cljs$lang$maxFixedArity = 0;
G__354107.cljs$lang$applyTo = (function (arglist__354109){
var args = cljs.core.seq(arglist__354109);
return G__354107__delegate(args);
});
G__354107.cljs$core$IFn$_invoke$arity$variadic = G__354107__delegate;
return G__354107;
})()
;

return null;
});
