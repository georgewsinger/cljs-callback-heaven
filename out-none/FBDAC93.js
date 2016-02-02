goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__51507__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__51507 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51508__i = 0, G__51508__a = new Array(arguments.length -  0);
while (G__51508__i < G__51508__a.length) {G__51508__a[G__51508__i] = arguments[G__51508__i + 0]; ++G__51508__i;}
  args = new cljs.core.IndexedSeq(G__51508__a,0);
} 
return G__51507__delegate.call(this,args);};
G__51507.cljs$lang$maxFixedArity = 0;
G__51507.cljs$lang$applyTo = (function (arglist__51509){
var args = cljs.core.seq(arglist__51509);
return G__51507__delegate(args);
});
G__51507.cljs$core$IFn$_invoke$arity$variadic = G__51507__delegate;
return G__51507;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__51510__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__51510 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51511__i = 0, G__51511__a = new Array(arguments.length -  0);
while (G__51511__i < G__51511__a.length) {G__51511__a[G__51511__i] = arguments[G__51511__i + 0]; ++G__51511__i;}
  args = new cljs.core.IndexedSeq(G__51511__a,0);
} 
return G__51510__delegate.call(this,args);};
G__51510.cljs$lang$maxFixedArity = 0;
G__51510.cljs$lang$applyTo = (function (arglist__51512){
var args = cljs.core.seq(arglist__51512);
return G__51510__delegate(args);
});
G__51510.cljs$core$IFn$_invoke$arity$variadic = G__51510__delegate;
return G__51510;
})()
;

return null;
});
