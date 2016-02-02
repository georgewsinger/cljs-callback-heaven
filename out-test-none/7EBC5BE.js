goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__76893__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__76893 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76894__i = 0, G__76894__a = new Array(arguments.length -  0);
while (G__76894__i < G__76894__a.length) {G__76894__a[G__76894__i] = arguments[G__76894__i + 0]; ++G__76894__i;}
  args = new cljs.core.IndexedSeq(G__76894__a,0);
} 
return G__76893__delegate.call(this,args);};
G__76893.cljs$lang$maxFixedArity = 0;
G__76893.cljs$lang$applyTo = (function (arglist__76895){
var args = cljs.core.seq(arglist__76895);
return G__76893__delegate(args);
});
G__76893.cljs$core$IFn$_invoke$arity$variadic = G__76893__delegate;
return G__76893;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__76896__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__76896 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76897__i = 0, G__76897__a = new Array(arguments.length -  0);
while (G__76897__i < G__76897__a.length) {G__76897__a[G__76897__i] = arguments[G__76897__i + 0]; ++G__76897__i;}
  args = new cljs.core.IndexedSeq(G__76897__a,0);
} 
return G__76896__delegate.call(this,args);};
G__76896.cljs$lang$maxFixedArity = 0;
G__76896.cljs$lang$applyTo = (function (arglist__76898){
var args = cljs.core.seq(arglist__76898);
return G__76896__delegate(args);
});
G__76896.cljs$core$IFn$_invoke$arity$variadic = G__76896__delegate;
return G__76896;
})()
;

return null;
});
