goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__145288__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__145288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__145289__i = 0, G__145289__a = new Array(arguments.length -  0);
while (G__145289__i < G__145289__a.length) {G__145289__a[G__145289__i] = arguments[G__145289__i + 0]; ++G__145289__i;}
  args = new cljs.core.IndexedSeq(G__145289__a,0);
} 
return G__145288__delegate.call(this,args);};
G__145288.cljs$lang$maxFixedArity = 0;
G__145288.cljs$lang$applyTo = (function (arglist__145290){
var args = cljs.core.seq(arglist__145290);
return G__145288__delegate(args);
});
G__145288.cljs$core$IFn$_invoke$arity$variadic = G__145288__delegate;
return G__145288;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__145291__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__145291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__145292__i = 0, G__145292__a = new Array(arguments.length -  0);
while (G__145292__i < G__145292__a.length) {G__145292__a[G__145292__i] = arguments[G__145292__i + 0]; ++G__145292__i;}
  args = new cljs.core.IndexedSeq(G__145292__a,0);
} 
return G__145291__delegate.call(this,args);};
G__145291.cljs$lang$maxFixedArity = 0;
G__145291.cljs$lang$applyTo = (function (arglist__145293){
var args = cljs.core.seq(arglist__145293);
return G__145291__delegate(args);
});
G__145291.cljs$core$IFn$_invoke$arity$variadic = G__145291__delegate;
return G__145291;
})()
;

return null;
});
