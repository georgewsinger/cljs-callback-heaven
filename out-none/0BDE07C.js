goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15345__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15346__i = 0, G__15346__a = new Array(arguments.length -  0);
while (G__15346__i < G__15346__a.length) {G__15346__a[G__15346__i] = arguments[G__15346__i + 0]; ++G__15346__i;}
  args = new cljs.core.IndexedSeq(G__15346__a,0);
} 
return G__15345__delegate.call(this,args);};
G__15345.cljs$lang$maxFixedArity = 0;
G__15345.cljs$lang$applyTo = (function (arglist__15347){
var args = cljs.core.seq(arglist__15347);
return G__15345__delegate(args);
});
G__15345.cljs$core$IFn$_invoke$arity$variadic = G__15345__delegate;
return G__15345;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15348__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15349__i = 0, G__15349__a = new Array(arguments.length -  0);
while (G__15349__i < G__15349__a.length) {G__15349__a[G__15349__i] = arguments[G__15349__i + 0]; ++G__15349__i;}
  args = new cljs.core.IndexedSeq(G__15349__a,0);
} 
return G__15348__delegate.call(this,args);};
G__15348.cljs$lang$maxFixedArity = 0;
G__15348.cljs$lang$applyTo = (function (arglist__15350){
var args = cljs.core.seq(arglist__15350);
return G__15348__delegate(args);
});
G__15348.cljs$core$IFn$_invoke$arity$variadic = G__15348__delegate;
return G__15348;
})()
;

return null;
});
