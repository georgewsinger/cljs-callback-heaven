goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34937__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__34937 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34938__i = 0, G__34938__a = new Array(arguments.length -  0);
while (G__34938__i < G__34938__a.length) {G__34938__a[G__34938__i] = arguments[G__34938__i + 0]; ++G__34938__i;}
  args = new cljs.core.IndexedSeq(G__34938__a,0);
} 
return G__34937__delegate.call(this,args);};
G__34937.cljs$lang$maxFixedArity = 0;
G__34937.cljs$lang$applyTo = (function (arglist__34939){
var args = cljs.core.seq(arglist__34939);
return G__34937__delegate(args);
});
G__34937.cljs$core$IFn$_invoke$arity$variadic = G__34937__delegate;
return G__34937;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__34940__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__34940 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34941__i = 0, G__34941__a = new Array(arguments.length -  0);
while (G__34941__i < G__34941__a.length) {G__34941__a[G__34941__i] = arguments[G__34941__i + 0]; ++G__34941__i;}
  args = new cljs.core.IndexedSeq(G__34941__a,0);
} 
return G__34940__delegate.call(this,args);};
G__34940.cljs$lang$maxFixedArity = 0;
G__34940.cljs$lang$applyTo = (function (arglist__34942){
var args = cljs.core.seq(arglist__34942);
return G__34940__delegate(args);
});
G__34940.cljs$core$IFn$_invoke$arity$variadic = G__34940__delegate;
return G__34940;
})()
;

return null;
});
