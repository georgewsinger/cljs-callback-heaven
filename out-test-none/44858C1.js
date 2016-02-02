goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32812__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__32812 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32813__i = 0, G__32813__a = new Array(arguments.length -  0);
while (G__32813__i < G__32813__a.length) {G__32813__a[G__32813__i] = arguments[G__32813__i + 0]; ++G__32813__i;}
  args = new cljs.core.IndexedSeq(G__32813__a,0);
} 
return G__32812__delegate.call(this,args);};
G__32812.cljs$lang$maxFixedArity = 0;
G__32812.cljs$lang$applyTo = (function (arglist__32814){
var args = cljs.core.seq(arglist__32814);
return G__32812__delegate(args);
});
G__32812.cljs$core$IFn$_invoke$arity$variadic = G__32812__delegate;
return G__32812;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__32815__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__32815 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32816__i = 0, G__32816__a = new Array(arguments.length -  0);
while (G__32816__i < G__32816__a.length) {G__32816__a[G__32816__i] = arguments[G__32816__i + 0]; ++G__32816__i;}
  args = new cljs.core.IndexedSeq(G__32816__a,0);
} 
return G__32815__delegate.call(this,args);};
G__32815.cljs$lang$maxFixedArity = 0;
G__32815.cljs$lang$applyTo = (function (arglist__32817){
var args = cljs.core.seq(arglist__32817);
return G__32815__delegate(args);
});
G__32815.cljs$core$IFn$_invoke$arity$variadic = G__32815__delegate;
return G__32815;
})()
;

return null;
});
