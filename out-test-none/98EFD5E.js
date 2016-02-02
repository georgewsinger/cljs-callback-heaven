goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24514__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24514 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24515__i = 0, G__24515__a = new Array(arguments.length -  0);
while (G__24515__i < G__24515__a.length) {G__24515__a[G__24515__i] = arguments[G__24515__i + 0]; ++G__24515__i;}
  args = new cljs.core.IndexedSeq(G__24515__a,0);
} 
return G__24514__delegate.call(this,args);};
G__24514.cljs$lang$maxFixedArity = 0;
G__24514.cljs$lang$applyTo = (function (arglist__24516){
var args = cljs.core.seq(arglist__24516);
return G__24514__delegate(args);
});
G__24514.cljs$core$IFn$_invoke$arity$variadic = G__24514__delegate;
return G__24514;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24517__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24517 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24518__i = 0, G__24518__a = new Array(arguments.length -  0);
while (G__24518__i < G__24518__a.length) {G__24518__a[G__24518__i] = arguments[G__24518__i + 0]; ++G__24518__i;}
  args = new cljs.core.IndexedSeq(G__24518__a,0);
} 
return G__24517__delegate.call(this,args);};
G__24517.cljs$lang$maxFixedArity = 0;
G__24517.cljs$lang$applyTo = (function (arglist__24519){
var args = cljs.core.seq(arglist__24519);
return G__24517__delegate(args);
});
G__24517.cljs$core$IFn$_invoke$arity$variadic = G__24517__delegate;
return G__24517;
})()
;

return null;
});
