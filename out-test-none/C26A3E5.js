goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__336289__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__336289 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336290__i = 0, G__336290__a = new Array(arguments.length -  0);
while (G__336290__i < G__336290__a.length) {G__336290__a[G__336290__i] = arguments[G__336290__i + 0]; ++G__336290__i;}
  args = new cljs.core.IndexedSeq(G__336290__a,0);
} 
return G__336289__delegate.call(this,args);};
G__336289.cljs$lang$maxFixedArity = 0;
G__336289.cljs$lang$applyTo = (function (arglist__336291){
var args = cljs.core.seq(arglist__336291);
return G__336289__delegate(args);
});
G__336289.cljs$core$IFn$_invoke$arity$variadic = G__336289__delegate;
return G__336289;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__336292__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__336292 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__336293__i = 0, G__336293__a = new Array(arguments.length -  0);
while (G__336293__i < G__336293__a.length) {G__336293__a[G__336293__i] = arguments[G__336293__i + 0]; ++G__336293__i;}
  args = new cljs.core.IndexedSeq(G__336293__a,0);
} 
return G__336292__delegate.call(this,args);};
G__336292.cljs$lang$maxFixedArity = 0;
G__336292.cljs$lang$applyTo = (function (arglist__336294){
var args = cljs.core.seq(arglist__336294);
return G__336292__delegate(args);
});
G__336292.cljs$core$IFn$_invoke$arity$variadic = G__336292__delegate;
return G__336292;
})()
;

return null;
});
