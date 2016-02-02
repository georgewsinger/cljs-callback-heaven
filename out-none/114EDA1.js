goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78120__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78121__i = 0, G__78121__a = new Array(arguments.length -  0);
while (G__78121__i < G__78121__a.length) {G__78121__a[G__78121__i] = arguments[G__78121__i + 0]; ++G__78121__i;}
  args = new cljs.core.IndexedSeq(G__78121__a,0);
} 
return G__78120__delegate.call(this,args);};
G__78120.cljs$lang$maxFixedArity = 0;
G__78120.cljs$lang$applyTo = (function (arglist__78122){
var args = cljs.core.seq(arglist__78122);
return G__78120__delegate(args);
});
G__78120.cljs$core$IFn$_invoke$arity$variadic = G__78120__delegate;
return G__78120;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78123__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78124__i = 0, G__78124__a = new Array(arguments.length -  0);
while (G__78124__i < G__78124__a.length) {G__78124__a[G__78124__i] = arguments[G__78124__i + 0]; ++G__78124__i;}
  args = new cljs.core.IndexedSeq(G__78124__a,0);
} 
return G__78123__delegate.call(this,args);};
G__78123.cljs$lang$maxFixedArity = 0;
G__78123.cljs$lang$applyTo = (function (arglist__78125){
var args = cljs.core.seq(arglist__78125);
return G__78123__delegate(args);
});
G__78123.cljs$core$IFn$_invoke$arity$variadic = G__78123__delegate;
return G__78123;
})()
;

return null;
});
