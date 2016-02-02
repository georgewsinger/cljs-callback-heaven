goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59178__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59179__i = 0, G__59179__a = new Array(arguments.length -  0);
while (G__59179__i < G__59179__a.length) {G__59179__a[G__59179__i] = arguments[G__59179__i + 0]; ++G__59179__i;}
  args = new cljs.core.IndexedSeq(G__59179__a,0);
} 
return G__59178__delegate.call(this,args);};
G__59178.cljs$lang$maxFixedArity = 0;
G__59178.cljs$lang$applyTo = (function (arglist__59180){
var args = cljs.core.seq(arglist__59180);
return G__59178__delegate(args);
});
G__59178.cljs$core$IFn$_invoke$arity$variadic = G__59178__delegate;
return G__59178;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59181__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59182__i = 0, G__59182__a = new Array(arguments.length -  0);
while (G__59182__i < G__59182__a.length) {G__59182__a[G__59182__i] = arguments[G__59182__i + 0]; ++G__59182__i;}
  args = new cljs.core.IndexedSeq(G__59182__a,0);
} 
return G__59181__delegate.call(this,args);};
G__59181.cljs$lang$maxFixedArity = 0;
G__59181.cljs$lang$applyTo = (function (arglist__59183){
var args = cljs.core.seq(arglist__59183);
return G__59181__delegate(args);
});
G__59181.cljs$core$IFn$_invoke$arity$variadic = G__59181__delegate;
return G__59181;
})()
;

return null;
});
