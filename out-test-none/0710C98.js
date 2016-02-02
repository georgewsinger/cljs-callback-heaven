goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__305705__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__305705 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305706__i = 0, G__305706__a = new Array(arguments.length -  0);
while (G__305706__i < G__305706__a.length) {G__305706__a[G__305706__i] = arguments[G__305706__i + 0]; ++G__305706__i;}
  args = new cljs.core.IndexedSeq(G__305706__a,0);
} 
return G__305705__delegate.call(this,args);};
G__305705.cljs$lang$maxFixedArity = 0;
G__305705.cljs$lang$applyTo = (function (arglist__305707){
var args = cljs.core.seq(arglist__305707);
return G__305705__delegate(args);
});
G__305705.cljs$core$IFn$_invoke$arity$variadic = G__305705__delegate;
return G__305705;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__305708__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__305708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__305709__i = 0, G__305709__a = new Array(arguments.length -  0);
while (G__305709__i < G__305709__a.length) {G__305709__a[G__305709__i] = arguments[G__305709__i + 0]; ++G__305709__i;}
  args = new cljs.core.IndexedSeq(G__305709__a,0);
} 
return G__305708__delegate.call(this,args);};
G__305708.cljs$lang$maxFixedArity = 0;
G__305708.cljs$lang$applyTo = (function (arglist__305710){
var args = cljs.core.seq(arglist__305710);
return G__305708__delegate(args);
});
G__305708.cljs$core$IFn$_invoke$arity$variadic = G__305708__delegate;
return G__305708;
})()
;

return null;
});
