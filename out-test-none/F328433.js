goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24220__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24221__i = 0, G__24221__a = new Array(arguments.length -  0);
while (G__24221__i < G__24221__a.length) {G__24221__a[G__24221__i] = arguments[G__24221__i + 0]; ++G__24221__i;}
  args = new cljs.core.IndexedSeq(G__24221__a,0);
} 
return G__24220__delegate.call(this,args);};
G__24220.cljs$lang$maxFixedArity = 0;
G__24220.cljs$lang$applyTo = (function (arglist__24222){
var args = cljs.core.seq(arglist__24222);
return G__24220__delegate(args);
});
G__24220.cljs$core$IFn$_invoke$arity$variadic = G__24220__delegate;
return G__24220;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24223__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24224__i = 0, G__24224__a = new Array(arguments.length -  0);
while (G__24224__i < G__24224__a.length) {G__24224__a[G__24224__i] = arguments[G__24224__i + 0]; ++G__24224__i;}
  args = new cljs.core.IndexedSeq(G__24224__a,0);
} 
return G__24223__delegate.call(this,args);};
G__24223.cljs$lang$maxFixedArity = 0;
G__24223.cljs$lang$applyTo = (function (arglist__24225){
var args = cljs.core.seq(arglist__24225);
return G__24223__delegate(args);
});
G__24223.cljs$core$IFn$_invoke$arity$variadic = G__24223__delegate;
return G__24223;
})()
;

return null;
});
