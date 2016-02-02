goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__44409__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__44409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44410__i = 0, G__44410__a = new Array(arguments.length -  0);
while (G__44410__i < G__44410__a.length) {G__44410__a[G__44410__i] = arguments[G__44410__i + 0]; ++G__44410__i;}
  args = new cljs.core.IndexedSeq(G__44410__a,0);
} 
return G__44409__delegate.call(this,args);};
G__44409.cljs$lang$maxFixedArity = 0;
G__44409.cljs$lang$applyTo = (function (arglist__44411){
var args = cljs.core.seq(arglist__44411);
return G__44409__delegate(args);
});
G__44409.cljs$core$IFn$_invoke$arity$variadic = G__44409__delegate;
return G__44409;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__44412__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__44412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44413__i = 0, G__44413__a = new Array(arguments.length -  0);
while (G__44413__i < G__44413__a.length) {G__44413__a[G__44413__i] = arguments[G__44413__i + 0]; ++G__44413__i;}
  args = new cljs.core.IndexedSeq(G__44413__a,0);
} 
return G__44412__delegate.call(this,args);};
G__44412.cljs$lang$maxFixedArity = 0;
G__44412.cljs$lang$applyTo = (function (arglist__44414){
var args = cljs.core.seq(arglist__44414);
return G__44412__delegate(args);
});
G__44412.cljs$core$IFn$_invoke$arity$variadic = G__44412__delegate;
return G__44412;
})()
;

return null;
});
