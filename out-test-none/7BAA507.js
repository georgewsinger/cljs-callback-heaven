goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26168__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__26168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26169__i = 0, G__26169__a = new Array(arguments.length -  0);
while (G__26169__i < G__26169__a.length) {G__26169__a[G__26169__i] = arguments[G__26169__i + 0]; ++G__26169__i;}
  args = new cljs.core.IndexedSeq(G__26169__a,0);
} 
return G__26168__delegate.call(this,args);};
G__26168.cljs$lang$maxFixedArity = 0;
G__26168.cljs$lang$applyTo = (function (arglist__26170){
var args = cljs.core.seq(arglist__26170);
return G__26168__delegate(args);
});
G__26168.cljs$core$IFn$_invoke$arity$variadic = G__26168__delegate;
return G__26168;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__26171__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__26171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26172__i = 0, G__26172__a = new Array(arguments.length -  0);
while (G__26172__i < G__26172__a.length) {G__26172__a[G__26172__i] = arguments[G__26172__i + 0]; ++G__26172__i;}
  args = new cljs.core.IndexedSeq(G__26172__a,0);
} 
return G__26171__delegate.call(this,args);};
G__26171.cljs$lang$maxFixedArity = 0;
G__26171.cljs$lang$applyTo = (function (arglist__26173){
var args = cljs.core.seq(arglist__26173);
return G__26171__delegate(args);
});
G__26171.cljs$core$IFn$_invoke$arity$variadic = G__26171__delegate;
return G__26171;
})()
;

return null;
});
