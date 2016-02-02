goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__39011__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__39011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39012__i = 0, G__39012__a = new Array(arguments.length -  0);
while (G__39012__i < G__39012__a.length) {G__39012__a[G__39012__i] = arguments[G__39012__i + 0]; ++G__39012__i;}
  args = new cljs.core.IndexedSeq(G__39012__a,0);
} 
return G__39011__delegate.call(this,args);};
G__39011.cljs$lang$maxFixedArity = 0;
G__39011.cljs$lang$applyTo = (function (arglist__39013){
var args = cljs.core.seq(arglist__39013);
return G__39011__delegate(args);
});
G__39011.cljs$core$IFn$_invoke$arity$variadic = G__39011__delegate;
return G__39011;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__39014__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__39014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39015__i = 0, G__39015__a = new Array(arguments.length -  0);
while (G__39015__i < G__39015__a.length) {G__39015__a[G__39015__i] = arguments[G__39015__i + 0]; ++G__39015__i;}
  args = new cljs.core.IndexedSeq(G__39015__a,0);
} 
return G__39014__delegate.call(this,args);};
G__39014.cljs$lang$maxFixedArity = 0;
G__39014.cljs$lang$applyTo = (function (arglist__39016){
var args = cljs.core.seq(arglist__39016);
return G__39014__delegate(args);
});
G__39014.cljs$core$IFn$_invoke$arity$variadic = G__39014__delegate;
return G__39014;
})()
;

return null;
});
