goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24923__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24923 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24924__i = 0, G__24924__a = new Array(arguments.length -  0);
while (G__24924__i < G__24924__a.length) {G__24924__a[G__24924__i] = arguments[G__24924__i + 0]; ++G__24924__i;}
  args = new cljs.core.IndexedSeq(G__24924__a,0);
} 
return G__24923__delegate.call(this,args);};
G__24923.cljs$lang$maxFixedArity = 0;
G__24923.cljs$lang$applyTo = (function (arglist__24925){
var args = cljs.core.seq(arglist__24925);
return G__24923__delegate(args);
});
G__24923.cljs$core$IFn$_invoke$arity$variadic = G__24923__delegate;
return G__24923;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24926__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24926 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24927__i = 0, G__24927__a = new Array(arguments.length -  0);
while (G__24927__i < G__24927__a.length) {G__24927__a[G__24927__i] = arguments[G__24927__i + 0]; ++G__24927__i;}
  args = new cljs.core.IndexedSeq(G__24927__a,0);
} 
return G__24926__delegate.call(this,args);};
G__24926.cljs$lang$maxFixedArity = 0;
G__24926.cljs$lang$applyTo = (function (arglist__24928){
var args = cljs.core.seq(arglist__24928);
return G__24926__delegate(args);
});
G__24926.cljs$core$IFn$_invoke$arity$variadic = G__24926__delegate;
return G__24926;
})()
;

return null;
});
