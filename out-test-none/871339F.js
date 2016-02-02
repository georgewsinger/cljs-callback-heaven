goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36184__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36185__i = 0, G__36185__a = new Array(arguments.length -  0);
while (G__36185__i < G__36185__a.length) {G__36185__a[G__36185__i] = arguments[G__36185__i + 0]; ++G__36185__i;}
  args = new cljs.core.IndexedSeq(G__36185__a,0);
} 
return G__36184__delegate.call(this,args);};
G__36184.cljs$lang$maxFixedArity = 0;
G__36184.cljs$lang$applyTo = (function (arglist__36186){
var args = cljs.core.seq(arglist__36186);
return G__36184__delegate(args);
});
G__36184.cljs$core$IFn$_invoke$arity$variadic = G__36184__delegate;
return G__36184;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36187__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36188__i = 0, G__36188__a = new Array(arguments.length -  0);
while (G__36188__i < G__36188__a.length) {G__36188__a[G__36188__i] = arguments[G__36188__i + 0]; ++G__36188__i;}
  args = new cljs.core.IndexedSeq(G__36188__a,0);
} 
return G__36187__delegate.call(this,args);};
G__36187.cljs$lang$maxFixedArity = 0;
G__36187.cljs$lang$applyTo = (function (arglist__36189){
var args = cljs.core.seq(arglist__36189);
return G__36187__delegate(args);
});
G__36187.cljs$core$IFn$_invoke$arity$variadic = G__36187__delegate;
return G__36187;
})()
;

return null;
});
