goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36466__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36467__i = 0, G__36467__a = new Array(arguments.length -  0);
while (G__36467__i < G__36467__a.length) {G__36467__a[G__36467__i] = arguments[G__36467__i + 0]; ++G__36467__i;}
  args = new cljs.core.IndexedSeq(G__36467__a,0);
} 
return G__36466__delegate.call(this,args);};
G__36466.cljs$lang$maxFixedArity = 0;
G__36466.cljs$lang$applyTo = (function (arglist__36468){
var args = cljs.core.seq(arglist__36468);
return G__36466__delegate(args);
});
G__36466.cljs$core$IFn$_invoke$arity$variadic = G__36466__delegate;
return G__36466;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36469__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36469 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36470__i = 0, G__36470__a = new Array(arguments.length -  0);
while (G__36470__i < G__36470__a.length) {G__36470__a[G__36470__i] = arguments[G__36470__i + 0]; ++G__36470__i;}
  args = new cljs.core.IndexedSeq(G__36470__a,0);
} 
return G__36469__delegate.call(this,args);};
G__36469.cljs$lang$maxFixedArity = 0;
G__36469.cljs$lang$applyTo = (function (arglist__36471){
var args = cljs.core.seq(arglist__36471);
return G__36469__delegate(args);
});
G__36469.cljs$core$IFn$_invoke$arity$variadic = G__36469__delegate;
return G__36469;
})()
;

return null;
});
