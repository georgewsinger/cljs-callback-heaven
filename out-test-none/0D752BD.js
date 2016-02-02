goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35779__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35780__i = 0, G__35780__a = new Array(arguments.length -  0);
while (G__35780__i < G__35780__a.length) {G__35780__a[G__35780__i] = arguments[G__35780__i + 0]; ++G__35780__i;}
  args = new cljs.core.IndexedSeq(G__35780__a,0);
} 
return G__35779__delegate.call(this,args);};
G__35779.cljs$lang$maxFixedArity = 0;
G__35779.cljs$lang$applyTo = (function (arglist__35781){
var args = cljs.core.seq(arglist__35781);
return G__35779__delegate(args);
});
G__35779.cljs$core$IFn$_invoke$arity$variadic = G__35779__delegate;
return G__35779;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35782__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35783__i = 0, G__35783__a = new Array(arguments.length -  0);
while (G__35783__i < G__35783__a.length) {G__35783__a[G__35783__i] = arguments[G__35783__i + 0]; ++G__35783__i;}
  args = new cljs.core.IndexedSeq(G__35783__a,0);
} 
return G__35782__delegate.call(this,args);};
G__35782.cljs$lang$maxFixedArity = 0;
G__35782.cljs$lang$applyTo = (function (arglist__35784){
var args = cljs.core.seq(arglist__35784);
return G__35782__delegate(args);
});
G__35782.cljs$core$IFn$_invoke$arity$variadic = G__35782__delegate;
return G__35782;
})()
;

return null;
});
