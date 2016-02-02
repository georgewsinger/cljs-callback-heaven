goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51043__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51043 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51044__i = 0, G__51044__a = new Array(arguments.length -  0);
while (G__51044__i < G__51044__a.length) {G__51044__a[G__51044__i] = arguments[G__51044__i + 0]; ++G__51044__i;}
  args = new cljs.core.IndexedSeq(G__51044__a,0);
} 
return G__51043__delegate.call(this,args);};
G__51043.cljs$lang$maxFixedArity = 0;
G__51043.cljs$lang$applyTo = (function (arglist__51045){
var args = cljs.core.seq(arglist__51045);
return G__51043__delegate(args);
});
G__51043.cljs$core$IFn$_invoke$arity$variadic = G__51043__delegate;
return G__51043;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51046__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51046 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51047__i = 0, G__51047__a = new Array(arguments.length -  0);
while (G__51047__i < G__51047__a.length) {G__51047__a[G__51047__i] = arguments[G__51047__i + 0]; ++G__51047__i;}
  args = new cljs.core.IndexedSeq(G__51047__a,0);
} 
return G__51046__delegate.call(this,args);};
G__51046.cljs$lang$maxFixedArity = 0;
G__51046.cljs$lang$applyTo = (function (arglist__51048){
var args = cljs.core.seq(arglist__51048);
return G__51046__delegate(args);
});
G__51046.cljs$core$IFn$_invoke$arity$variadic = G__51046__delegate;
return G__51046;
})()
;

return null;
});
