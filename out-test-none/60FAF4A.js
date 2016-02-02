goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11410__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11410 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11411__i = 0, G__11411__a = new Array(arguments.length -  0);
while (G__11411__i < G__11411__a.length) {G__11411__a[G__11411__i] = arguments[G__11411__i + 0]; ++G__11411__i;}
  args = new cljs.core.IndexedSeq(G__11411__a,0);
} 
return G__11410__delegate.call(this,args);};
G__11410.cljs$lang$maxFixedArity = 0;
G__11410.cljs$lang$applyTo = (function (arglist__11412){
var args = cljs.core.seq(arglist__11412);
return G__11410__delegate(args);
});
G__11410.cljs$core$IFn$_invoke$arity$variadic = G__11410__delegate;
return G__11410;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11413__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11413 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11414__i = 0, G__11414__a = new Array(arguments.length -  0);
while (G__11414__i < G__11414__a.length) {G__11414__a[G__11414__i] = arguments[G__11414__i + 0]; ++G__11414__i;}
  args = new cljs.core.IndexedSeq(G__11414__a,0);
} 
return G__11413__delegate.call(this,args);};
G__11413.cljs$lang$maxFixedArity = 0;
G__11413.cljs$lang$applyTo = (function (arglist__11415){
var args = cljs.core.seq(arglist__11415);
return G__11413__delegate(args);
});
G__11413.cljs$core$IFn$_invoke$arity$variadic = G__11413__delegate;
return G__11413;
})()
;

return null;
});
