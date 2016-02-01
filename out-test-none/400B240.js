goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15846__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15846 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15847__i = 0, G__15847__a = new Array(arguments.length -  0);
while (G__15847__i < G__15847__a.length) {G__15847__a[G__15847__i] = arguments[G__15847__i + 0]; ++G__15847__i;}
  args = new cljs.core.IndexedSeq(G__15847__a,0);
} 
return G__15846__delegate.call(this,args);};
G__15846.cljs$lang$maxFixedArity = 0;
G__15846.cljs$lang$applyTo = (function (arglist__15848){
var args = cljs.core.seq(arglist__15848);
return G__15846__delegate(args);
});
G__15846.cljs$core$IFn$_invoke$arity$variadic = G__15846__delegate;
return G__15846;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15849__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15850__i = 0, G__15850__a = new Array(arguments.length -  0);
while (G__15850__i < G__15850__a.length) {G__15850__a[G__15850__i] = arguments[G__15850__i + 0]; ++G__15850__i;}
  args = new cljs.core.IndexedSeq(G__15850__a,0);
} 
return G__15849__delegate.call(this,args);};
G__15849.cljs$lang$maxFixedArity = 0;
G__15849.cljs$lang$applyTo = (function (arglist__15851){
var args = cljs.core.seq(arglist__15851);
return G__15849__delegate(args);
});
G__15849.cljs$core$IFn$_invoke$arity$variadic = G__15849__delegate;
return G__15849;
})()
;

return null;
});
