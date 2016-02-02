goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13893__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13894__i = 0, G__13894__a = new Array(arguments.length -  0);
while (G__13894__i < G__13894__a.length) {G__13894__a[G__13894__i] = arguments[G__13894__i + 0]; ++G__13894__i;}
  args = new cljs.core.IndexedSeq(G__13894__a,0);
} 
return G__13893__delegate.call(this,args);};
G__13893.cljs$lang$maxFixedArity = 0;
G__13893.cljs$lang$applyTo = (function (arglist__13895){
var args = cljs.core.seq(arglist__13895);
return G__13893__delegate(args);
});
G__13893.cljs$core$IFn$_invoke$arity$variadic = G__13893__delegate;
return G__13893;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13896__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13897__i = 0, G__13897__a = new Array(arguments.length -  0);
while (G__13897__i < G__13897__a.length) {G__13897__a[G__13897__i] = arguments[G__13897__i + 0]; ++G__13897__i;}
  args = new cljs.core.IndexedSeq(G__13897__a,0);
} 
return G__13896__delegate.call(this,args);};
G__13896.cljs$lang$maxFixedArity = 0;
G__13896.cljs$lang$applyTo = (function (arglist__13898){
var args = cljs.core.seq(arglist__13898);
return G__13896__delegate(args);
});
G__13896.cljs$core$IFn$_invoke$arity$variadic = G__13896__delegate;
return G__13896;
})()
;

return null;
});
