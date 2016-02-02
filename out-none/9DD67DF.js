goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59216__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59217__i = 0, G__59217__a = new Array(arguments.length -  0);
while (G__59217__i < G__59217__a.length) {G__59217__a[G__59217__i] = arguments[G__59217__i + 0]; ++G__59217__i;}
  args = new cljs.core.IndexedSeq(G__59217__a,0);
} 
return G__59216__delegate.call(this,args);};
G__59216.cljs$lang$maxFixedArity = 0;
G__59216.cljs$lang$applyTo = (function (arglist__59218){
var args = cljs.core.seq(arglist__59218);
return G__59216__delegate(args);
});
G__59216.cljs$core$IFn$_invoke$arity$variadic = G__59216__delegate;
return G__59216;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59219__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59219 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59220__i = 0, G__59220__a = new Array(arguments.length -  0);
while (G__59220__i < G__59220__a.length) {G__59220__a[G__59220__i] = arguments[G__59220__i + 0]; ++G__59220__i;}
  args = new cljs.core.IndexedSeq(G__59220__a,0);
} 
return G__59219__delegate.call(this,args);};
G__59219.cljs$lang$maxFixedArity = 0;
G__59219.cljs$lang$applyTo = (function (arglist__59221){
var args = cljs.core.seq(arglist__59221);
return G__59219__delegate(args);
});
G__59219.cljs$core$IFn$_invoke$arity$variadic = G__59219__delegate;
return G__59219;
})()
;

return null;
});
