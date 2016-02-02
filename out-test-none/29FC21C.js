goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25090__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__25090 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25091__i = 0, G__25091__a = new Array(arguments.length -  0);
while (G__25091__i < G__25091__a.length) {G__25091__a[G__25091__i] = arguments[G__25091__i + 0]; ++G__25091__i;}
  args = new cljs.core.IndexedSeq(G__25091__a,0);
} 
return G__25090__delegate.call(this,args);};
G__25090.cljs$lang$maxFixedArity = 0;
G__25090.cljs$lang$applyTo = (function (arglist__25092){
var args = cljs.core.seq(arglist__25092);
return G__25090__delegate(args);
});
G__25090.cljs$core$IFn$_invoke$arity$variadic = G__25090__delegate;
return G__25090;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__25093__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__25093 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25094__i = 0, G__25094__a = new Array(arguments.length -  0);
while (G__25094__i < G__25094__a.length) {G__25094__a[G__25094__i] = arguments[G__25094__i + 0]; ++G__25094__i;}
  args = new cljs.core.IndexedSeq(G__25094__a,0);
} 
return G__25093__delegate.call(this,args);};
G__25093.cljs$lang$maxFixedArity = 0;
G__25093.cljs$lang$applyTo = (function (arglist__25095){
var args = cljs.core.seq(arglist__25095);
return G__25093__delegate(args);
});
G__25093.cljs$core$IFn$_invoke$arity$variadic = G__25093__delegate;
return G__25093;
})()
;

return null;
});
