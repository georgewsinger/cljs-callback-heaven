goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__38291__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__38291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38292__i = 0, G__38292__a = new Array(arguments.length -  0);
while (G__38292__i < G__38292__a.length) {G__38292__a[G__38292__i] = arguments[G__38292__i + 0]; ++G__38292__i;}
  args = new cljs.core.IndexedSeq(G__38292__a,0);
} 
return G__38291__delegate.call(this,args);};
G__38291.cljs$lang$maxFixedArity = 0;
G__38291.cljs$lang$applyTo = (function (arglist__38293){
var args = cljs.core.seq(arglist__38293);
return G__38291__delegate(args);
});
G__38291.cljs$core$IFn$_invoke$arity$variadic = G__38291__delegate;
return G__38291;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__38294__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__38294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38295__i = 0, G__38295__a = new Array(arguments.length -  0);
while (G__38295__i < G__38295__a.length) {G__38295__a[G__38295__i] = arguments[G__38295__i + 0]; ++G__38295__i;}
  args = new cljs.core.IndexedSeq(G__38295__a,0);
} 
return G__38294__delegate.call(this,args);};
G__38294.cljs$lang$maxFixedArity = 0;
G__38294.cljs$lang$applyTo = (function (arglist__38296){
var args = cljs.core.seq(arglist__38296);
return G__38294__delegate(args);
});
G__38294.cljs$core$IFn$_invoke$arity$variadic = G__38294__delegate;
return G__38294;
})()
;

return null;
});
