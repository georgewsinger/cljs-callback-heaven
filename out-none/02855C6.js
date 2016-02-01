goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15180__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15181__i = 0, G__15181__a = new Array(arguments.length -  0);
while (G__15181__i < G__15181__a.length) {G__15181__a[G__15181__i] = arguments[G__15181__i + 0]; ++G__15181__i;}
  args = new cljs.core.IndexedSeq(G__15181__a,0);
} 
return G__15180__delegate.call(this,args);};
G__15180.cljs$lang$maxFixedArity = 0;
G__15180.cljs$lang$applyTo = (function (arglist__15182){
var args = cljs.core.seq(arglist__15182);
return G__15180__delegate(args);
});
G__15180.cljs$core$IFn$_invoke$arity$variadic = G__15180__delegate;
return G__15180;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15183__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15184__i = 0, G__15184__a = new Array(arguments.length -  0);
while (G__15184__i < G__15184__a.length) {G__15184__a[G__15184__i] = arguments[G__15184__i + 0]; ++G__15184__i;}
  args = new cljs.core.IndexedSeq(G__15184__a,0);
} 
return G__15183__delegate.call(this,args);};
G__15183.cljs$lang$maxFixedArity = 0;
G__15183.cljs$lang$applyTo = (function (arglist__15185){
var args = cljs.core.seq(arglist__15185);
return G__15183__delegate(args);
});
G__15183.cljs$core$IFn$_invoke$arity$variadic = G__15183__delegate;
return G__15183;
})()
;

return null;
});
