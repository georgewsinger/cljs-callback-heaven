goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__117888__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__117888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117889__i = 0, G__117889__a = new Array(arguments.length -  0);
while (G__117889__i < G__117889__a.length) {G__117889__a[G__117889__i] = arguments[G__117889__i + 0]; ++G__117889__i;}
  args = new cljs.core.IndexedSeq(G__117889__a,0);
} 
return G__117888__delegate.call(this,args);};
G__117888.cljs$lang$maxFixedArity = 0;
G__117888.cljs$lang$applyTo = (function (arglist__117890){
var args = cljs.core.seq(arglist__117890);
return G__117888__delegate(args);
});
G__117888.cljs$core$IFn$_invoke$arity$variadic = G__117888__delegate;
return G__117888;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__117891__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__117891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__117892__i = 0, G__117892__a = new Array(arguments.length -  0);
while (G__117892__i < G__117892__a.length) {G__117892__a[G__117892__i] = arguments[G__117892__i + 0]; ++G__117892__i;}
  args = new cljs.core.IndexedSeq(G__117892__a,0);
} 
return G__117891__delegate.call(this,args);};
G__117891.cljs$lang$maxFixedArity = 0;
G__117891.cljs$lang$applyTo = (function (arglist__117893){
var args = cljs.core.seq(arglist__117893);
return G__117891__delegate(args);
});
G__117891.cljs$core$IFn$_invoke$arity$variadic = G__117891__delegate;
return G__117891;
})()
;

return null;
});
