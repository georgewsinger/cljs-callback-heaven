goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__48087__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__48087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48088__i = 0, G__48088__a = new Array(arguments.length -  0);
while (G__48088__i < G__48088__a.length) {G__48088__a[G__48088__i] = arguments[G__48088__i + 0]; ++G__48088__i;}
  args = new cljs.core.IndexedSeq(G__48088__a,0);
} 
return G__48087__delegate.call(this,args);};
G__48087.cljs$lang$maxFixedArity = 0;
G__48087.cljs$lang$applyTo = (function (arglist__48089){
var args = cljs.core.seq(arglist__48089);
return G__48087__delegate(args);
});
G__48087.cljs$core$IFn$_invoke$arity$variadic = G__48087__delegate;
return G__48087;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__48090__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__48090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48091__i = 0, G__48091__a = new Array(arguments.length -  0);
while (G__48091__i < G__48091__a.length) {G__48091__a[G__48091__i] = arguments[G__48091__i + 0]; ++G__48091__i;}
  args = new cljs.core.IndexedSeq(G__48091__a,0);
} 
return G__48090__delegate.call(this,args);};
G__48090.cljs$lang$maxFixedArity = 0;
G__48090.cljs$lang$applyTo = (function (arglist__48092){
var args = cljs.core.seq(arglist__48092);
return G__48090__delegate(args);
});
G__48090.cljs$core$IFn$_invoke$arity$variadic = G__48090__delegate;
return G__48090;
})()
;

return null;
});
