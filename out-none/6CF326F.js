goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23618__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23618 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23619__i = 0, G__23619__a = new Array(arguments.length -  0);
while (G__23619__i < G__23619__a.length) {G__23619__a[G__23619__i] = arguments[G__23619__i + 0]; ++G__23619__i;}
  args = new cljs.core.IndexedSeq(G__23619__a,0);
} 
return G__23618__delegate.call(this,args);};
G__23618.cljs$lang$maxFixedArity = 0;
G__23618.cljs$lang$applyTo = (function (arglist__23620){
var args = cljs.core.seq(arglist__23620);
return G__23618__delegate(args);
});
G__23618.cljs$core$IFn$_invoke$arity$variadic = G__23618__delegate;
return G__23618;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23621__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23621 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23622__i = 0, G__23622__a = new Array(arguments.length -  0);
while (G__23622__i < G__23622__a.length) {G__23622__a[G__23622__i] = arguments[G__23622__i + 0]; ++G__23622__i;}
  args = new cljs.core.IndexedSeq(G__23622__a,0);
} 
return G__23621__delegate.call(this,args);};
G__23621.cljs$lang$maxFixedArity = 0;
G__23621.cljs$lang$applyTo = (function (arglist__23623){
var args = cljs.core.seq(arglist__23623);
return G__23621__delegate(args);
});
G__23621.cljs$core$IFn$_invoke$arity$variadic = G__23621__delegate;
return G__23621;
})()
;

return null;
});
