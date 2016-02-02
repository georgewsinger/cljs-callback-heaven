goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63664__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63665__i = 0, G__63665__a = new Array(arguments.length -  0);
while (G__63665__i < G__63665__a.length) {G__63665__a[G__63665__i] = arguments[G__63665__i + 0]; ++G__63665__i;}
  args = new cljs.core.IndexedSeq(G__63665__a,0);
} 
return G__63664__delegate.call(this,args);};
G__63664.cljs$lang$maxFixedArity = 0;
G__63664.cljs$lang$applyTo = (function (arglist__63666){
var args = cljs.core.seq(arglist__63666);
return G__63664__delegate(args);
});
G__63664.cljs$core$IFn$_invoke$arity$variadic = G__63664__delegate;
return G__63664;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63667__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63667 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63668__i = 0, G__63668__a = new Array(arguments.length -  0);
while (G__63668__i < G__63668__a.length) {G__63668__a[G__63668__i] = arguments[G__63668__i + 0]; ++G__63668__i;}
  args = new cljs.core.IndexedSeq(G__63668__a,0);
} 
return G__63667__delegate.call(this,args);};
G__63667.cljs$lang$maxFixedArity = 0;
G__63667.cljs$lang$applyTo = (function (arglist__63669){
var args = cljs.core.seq(arglist__63669);
return G__63667__delegate(args);
});
G__63667.cljs$core$IFn$_invoke$arity$variadic = G__63667__delegate;
return G__63667;
})()
;

return null;
});
