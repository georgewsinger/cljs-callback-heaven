goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__60328__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__60328 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60329__i = 0, G__60329__a = new Array(arguments.length -  0);
while (G__60329__i < G__60329__a.length) {G__60329__a[G__60329__i] = arguments[G__60329__i + 0]; ++G__60329__i;}
  args = new cljs.core.IndexedSeq(G__60329__a,0);
} 
return G__60328__delegate.call(this,args);};
G__60328.cljs$lang$maxFixedArity = 0;
G__60328.cljs$lang$applyTo = (function (arglist__60330){
var args = cljs.core.seq(arglist__60330);
return G__60328__delegate(args);
});
G__60328.cljs$core$IFn$_invoke$arity$variadic = G__60328__delegate;
return G__60328;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__60331__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__60331 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60332__i = 0, G__60332__a = new Array(arguments.length -  0);
while (G__60332__i < G__60332__a.length) {G__60332__a[G__60332__i] = arguments[G__60332__i + 0]; ++G__60332__i;}
  args = new cljs.core.IndexedSeq(G__60332__a,0);
} 
return G__60331__delegate.call(this,args);};
G__60331.cljs$lang$maxFixedArity = 0;
G__60331.cljs$lang$applyTo = (function (arglist__60333){
var args = cljs.core.seq(arglist__60333);
return G__60331__delegate(args);
});
G__60331.cljs$core$IFn$_invoke$arity$variadic = G__60331__delegate;
return G__60331;
})()
;

return null;
});
