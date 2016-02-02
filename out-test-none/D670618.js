goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__36982__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__36982 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36983__i = 0, G__36983__a = new Array(arguments.length -  0);
while (G__36983__i < G__36983__a.length) {G__36983__a[G__36983__i] = arguments[G__36983__i + 0]; ++G__36983__i;}
  args = new cljs.core.IndexedSeq(G__36983__a,0);
} 
return G__36982__delegate.call(this,args);};
G__36982.cljs$lang$maxFixedArity = 0;
G__36982.cljs$lang$applyTo = (function (arglist__36984){
var args = cljs.core.seq(arglist__36984);
return G__36982__delegate(args);
});
G__36982.cljs$core$IFn$_invoke$arity$variadic = G__36982__delegate;
return G__36982;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__36985__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__36985 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36986__i = 0, G__36986__a = new Array(arguments.length -  0);
while (G__36986__i < G__36986__a.length) {G__36986__a[G__36986__i] = arguments[G__36986__i + 0]; ++G__36986__i;}
  args = new cljs.core.IndexedSeq(G__36986__a,0);
} 
return G__36985__delegate.call(this,args);};
G__36985.cljs$lang$maxFixedArity = 0;
G__36985.cljs$lang$applyTo = (function (arglist__36987){
var args = cljs.core.seq(arglist__36987);
return G__36985__delegate(args);
});
G__36985.cljs$core$IFn$_invoke$arity$variadic = G__36985__delegate;
return G__36985;
})()
;

return null;
});
