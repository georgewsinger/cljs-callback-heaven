goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12433__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12434__i = 0, G__12434__a = new Array(arguments.length -  0);
while (G__12434__i < G__12434__a.length) {G__12434__a[G__12434__i] = arguments[G__12434__i + 0]; ++G__12434__i;}
  args = new cljs.core.IndexedSeq(G__12434__a,0);
} 
return G__12433__delegate.call(this,args);};
G__12433.cljs$lang$maxFixedArity = 0;
G__12433.cljs$lang$applyTo = (function (arglist__12435){
var args = cljs.core.seq(arglist__12435);
return G__12433__delegate(args);
});
G__12433.cljs$core$IFn$_invoke$arity$variadic = G__12433__delegate;
return G__12433;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12436__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12437__i = 0, G__12437__a = new Array(arguments.length -  0);
while (G__12437__i < G__12437__a.length) {G__12437__a[G__12437__i] = arguments[G__12437__i + 0]; ++G__12437__i;}
  args = new cljs.core.IndexedSeq(G__12437__a,0);
} 
return G__12436__delegate.call(this,args);};
G__12436.cljs$lang$maxFixedArity = 0;
G__12436.cljs$lang$applyTo = (function (arglist__12438){
var args = cljs.core.seq(arglist__12438);
return G__12436__delegate(args);
});
G__12436.cljs$core$IFn$_invoke$arity$variadic = G__12436__delegate;
return G__12436;
})()
;

return null;
});
