goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27784__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__27784 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27785__i = 0, G__27785__a = new Array(arguments.length -  0);
while (G__27785__i < G__27785__a.length) {G__27785__a[G__27785__i] = arguments[G__27785__i + 0]; ++G__27785__i;}
  args = new cljs.core.IndexedSeq(G__27785__a,0);
} 
return G__27784__delegate.call(this,args);};
G__27784.cljs$lang$maxFixedArity = 0;
G__27784.cljs$lang$applyTo = (function (arglist__27786){
var args = cljs.core.seq(arglist__27786);
return G__27784__delegate(args);
});
G__27784.cljs$core$IFn$_invoke$arity$variadic = G__27784__delegate;
return G__27784;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__27787__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__27787 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27788__i = 0, G__27788__a = new Array(arguments.length -  0);
while (G__27788__i < G__27788__a.length) {G__27788__a[G__27788__i] = arguments[G__27788__i + 0]; ++G__27788__i;}
  args = new cljs.core.IndexedSeq(G__27788__a,0);
} 
return G__27787__delegate.call(this,args);};
G__27787.cljs$lang$maxFixedArity = 0;
G__27787.cljs$lang$applyTo = (function (arglist__27789){
var args = cljs.core.seq(arglist__27789);
return G__27787__delegate(args);
});
G__27787.cljs$core$IFn$_invoke$arity$variadic = G__27787__delegate;
return G__27787;
})()
;

return null;
});
