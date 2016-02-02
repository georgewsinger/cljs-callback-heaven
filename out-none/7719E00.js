goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58204__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58204 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58205__i = 0, G__58205__a = new Array(arguments.length -  0);
while (G__58205__i < G__58205__a.length) {G__58205__a[G__58205__i] = arguments[G__58205__i + 0]; ++G__58205__i;}
  args = new cljs.core.IndexedSeq(G__58205__a,0);
} 
return G__58204__delegate.call(this,args);};
G__58204.cljs$lang$maxFixedArity = 0;
G__58204.cljs$lang$applyTo = (function (arglist__58206){
var args = cljs.core.seq(arglist__58206);
return G__58204__delegate(args);
});
G__58204.cljs$core$IFn$_invoke$arity$variadic = G__58204__delegate;
return G__58204;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58207__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58208__i = 0, G__58208__a = new Array(arguments.length -  0);
while (G__58208__i < G__58208__a.length) {G__58208__a[G__58208__i] = arguments[G__58208__i + 0]; ++G__58208__i;}
  args = new cljs.core.IndexedSeq(G__58208__a,0);
} 
return G__58207__delegate.call(this,args);};
G__58207.cljs$lang$maxFixedArity = 0;
G__58207.cljs$lang$applyTo = (function (arglist__58209){
var args = cljs.core.seq(arglist__58209);
return G__58207__delegate(args);
});
G__58207.cljs$core$IFn$_invoke$arity$variadic = G__58207__delegate;
return G__58207;
})()
;

return null;
});
