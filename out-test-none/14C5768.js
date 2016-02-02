goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53291__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53292__i = 0, G__53292__a = new Array(arguments.length -  0);
while (G__53292__i < G__53292__a.length) {G__53292__a[G__53292__i] = arguments[G__53292__i + 0]; ++G__53292__i;}
  args = new cljs.core.IndexedSeq(G__53292__a,0);
} 
return G__53291__delegate.call(this,args);};
G__53291.cljs$lang$maxFixedArity = 0;
G__53291.cljs$lang$applyTo = (function (arglist__53293){
var args = cljs.core.seq(arglist__53293);
return G__53291__delegate(args);
});
G__53291.cljs$core$IFn$_invoke$arity$variadic = G__53291__delegate;
return G__53291;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53294__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53295__i = 0, G__53295__a = new Array(arguments.length -  0);
while (G__53295__i < G__53295__a.length) {G__53295__a[G__53295__i] = arguments[G__53295__i + 0]; ++G__53295__i;}
  args = new cljs.core.IndexedSeq(G__53295__a,0);
} 
return G__53294__delegate.call(this,args);};
G__53294.cljs$lang$maxFixedArity = 0;
G__53294.cljs$lang$applyTo = (function (arglist__53296){
var args = cljs.core.seq(arglist__53296);
return G__53294__delegate(args);
});
G__53294.cljs$core$IFn$_invoke$arity$variadic = G__53294__delegate;
return G__53294;
})()
;

return null;
});
