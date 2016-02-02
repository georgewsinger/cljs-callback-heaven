goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34918__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34919__i = 0, G__34919__a = new Array(arguments.length -  0);
while (G__34919__i < G__34919__a.length) {G__34919__a[G__34919__i] = arguments[G__34919__i + 0]; ++G__34919__i;}
  args = new cljs.core.IndexedSeq(G__34919__a,0);
} 
return G__34918__delegate.call(this,args);};
G__34918.cljs$lang$maxFixedArity = 0;
G__34918.cljs$lang$applyTo = (function (arglist__34920){
var args = cljs.core.seq(arglist__34920);
return G__34918__delegate(args);
});
G__34918.cljs$core$IFn$_invoke$arity$variadic = G__34918__delegate;
return G__34918;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34921__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34921 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34922__i = 0, G__34922__a = new Array(arguments.length -  0);
while (G__34922__i < G__34922__a.length) {G__34922__a[G__34922__i] = arguments[G__34922__i + 0]; ++G__34922__i;}
  args = new cljs.core.IndexedSeq(G__34922__a,0);
} 
return G__34921__delegate.call(this,args);};
G__34921.cljs$lang$maxFixedArity = 0;
G__34921.cljs$lang$applyTo = (function (arglist__34923){
var args = cljs.core.seq(arglist__34923);
return G__34921__delegate(args);
});
G__34921.cljs$core$IFn$_invoke$arity$variadic = G__34921__delegate;
return G__34921;
})()
;

return null;
});
