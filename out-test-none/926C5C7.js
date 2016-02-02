goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__22000__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__22000 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22001__i = 0, G__22001__a = new Array(arguments.length -  0);
while (G__22001__i < G__22001__a.length) {G__22001__a[G__22001__i] = arguments[G__22001__i + 0]; ++G__22001__i;}
  args = new cljs.core.IndexedSeq(G__22001__a,0);
} 
return G__22000__delegate.call(this,args);};
G__22000.cljs$lang$maxFixedArity = 0;
G__22000.cljs$lang$applyTo = (function (arglist__22002){
var args = cljs.core.seq(arglist__22002);
return G__22000__delegate(args);
});
G__22000.cljs$core$IFn$_invoke$arity$variadic = G__22000__delegate;
return G__22000;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__22003__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__22003 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22004__i = 0, G__22004__a = new Array(arguments.length -  0);
while (G__22004__i < G__22004__a.length) {G__22004__a[G__22004__i] = arguments[G__22004__i + 0]; ++G__22004__i;}
  args = new cljs.core.IndexedSeq(G__22004__a,0);
} 
return G__22003__delegate.call(this,args);};
G__22003.cljs$lang$maxFixedArity = 0;
G__22003.cljs$lang$applyTo = (function (arglist__22005){
var args = cljs.core.seq(arglist__22005);
return G__22003__delegate(args);
});
G__22003.cljs$core$IFn$_invoke$arity$variadic = G__22003__delegate;
return G__22003;
})()
;

return null;
});
