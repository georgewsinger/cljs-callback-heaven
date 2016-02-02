goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__126366__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__126366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__126367__i = 0, G__126367__a = new Array(arguments.length -  0);
while (G__126367__i < G__126367__a.length) {G__126367__a[G__126367__i] = arguments[G__126367__i + 0]; ++G__126367__i;}
  args = new cljs.core.IndexedSeq(G__126367__a,0);
} 
return G__126366__delegate.call(this,args);};
G__126366.cljs$lang$maxFixedArity = 0;
G__126366.cljs$lang$applyTo = (function (arglist__126368){
var args = cljs.core.seq(arglist__126368);
return G__126366__delegate(args);
});
G__126366.cljs$core$IFn$_invoke$arity$variadic = G__126366__delegate;
return G__126366;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__126369__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__126369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__126370__i = 0, G__126370__a = new Array(arguments.length -  0);
while (G__126370__i < G__126370__a.length) {G__126370__a[G__126370__i] = arguments[G__126370__i + 0]; ++G__126370__i;}
  args = new cljs.core.IndexedSeq(G__126370__a,0);
} 
return G__126369__delegate.call(this,args);};
G__126369.cljs$lang$maxFixedArity = 0;
G__126369.cljs$lang$applyTo = (function (arglist__126371){
var args = cljs.core.seq(arglist__126371);
return G__126369__delegate(args);
});
G__126369.cljs$core$IFn$_invoke$arity$variadic = G__126369__delegate;
return G__126369;
})()
;

return null;
});
