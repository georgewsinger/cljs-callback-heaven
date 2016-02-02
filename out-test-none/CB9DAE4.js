goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__52057__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__52057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52058__i = 0, G__52058__a = new Array(arguments.length -  0);
while (G__52058__i < G__52058__a.length) {G__52058__a[G__52058__i] = arguments[G__52058__i + 0]; ++G__52058__i;}
  args = new cljs.core.IndexedSeq(G__52058__a,0);
} 
return G__52057__delegate.call(this,args);};
G__52057.cljs$lang$maxFixedArity = 0;
G__52057.cljs$lang$applyTo = (function (arglist__52059){
var args = cljs.core.seq(arglist__52059);
return G__52057__delegate(args);
});
G__52057.cljs$core$IFn$_invoke$arity$variadic = G__52057__delegate;
return G__52057;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__52060__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__52060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52061__i = 0, G__52061__a = new Array(arguments.length -  0);
while (G__52061__i < G__52061__a.length) {G__52061__a[G__52061__i] = arguments[G__52061__i + 0]; ++G__52061__i;}
  args = new cljs.core.IndexedSeq(G__52061__a,0);
} 
return G__52060__delegate.call(this,args);};
G__52060.cljs$lang$maxFixedArity = 0;
G__52060.cljs$lang$applyTo = (function (arglist__52062){
var args = cljs.core.seq(arglist__52062);
return G__52060__delegate(args);
});
G__52060.cljs$core$IFn$_invoke$arity$variadic = G__52060__delegate;
return G__52060;
})()
;

return null;
});
