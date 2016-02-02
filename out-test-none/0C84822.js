goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31542__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31542 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31543__i = 0, G__31543__a = new Array(arguments.length -  0);
while (G__31543__i < G__31543__a.length) {G__31543__a[G__31543__i] = arguments[G__31543__i + 0]; ++G__31543__i;}
  args = new cljs.core.IndexedSeq(G__31543__a,0);
} 
return G__31542__delegate.call(this,args);};
G__31542.cljs$lang$maxFixedArity = 0;
G__31542.cljs$lang$applyTo = (function (arglist__31544){
var args = cljs.core.seq(arglist__31544);
return G__31542__delegate(args);
});
G__31542.cljs$core$IFn$_invoke$arity$variadic = G__31542__delegate;
return G__31542;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31545__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31546__i = 0, G__31546__a = new Array(arguments.length -  0);
while (G__31546__i < G__31546__a.length) {G__31546__a[G__31546__i] = arguments[G__31546__i + 0]; ++G__31546__i;}
  args = new cljs.core.IndexedSeq(G__31546__a,0);
} 
return G__31545__delegate.call(this,args);};
G__31545.cljs$lang$maxFixedArity = 0;
G__31545.cljs$lang$applyTo = (function (arglist__31547){
var args = cljs.core.seq(arglist__31547);
return G__31545__delegate(args);
});
G__31545.cljs$core$IFn$_invoke$arity$variadic = G__31545__delegate;
return G__31545;
})()
;

return null;
});
