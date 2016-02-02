goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__340035__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__340035 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340036__i = 0, G__340036__a = new Array(arguments.length -  0);
while (G__340036__i < G__340036__a.length) {G__340036__a[G__340036__i] = arguments[G__340036__i + 0]; ++G__340036__i;}
  args = new cljs.core.IndexedSeq(G__340036__a,0);
} 
return G__340035__delegate.call(this,args);};
G__340035.cljs$lang$maxFixedArity = 0;
G__340035.cljs$lang$applyTo = (function (arglist__340037){
var args = cljs.core.seq(arglist__340037);
return G__340035__delegate(args);
});
G__340035.cljs$core$IFn$_invoke$arity$variadic = G__340035__delegate;
return G__340035;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__340038__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__340038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340039__i = 0, G__340039__a = new Array(arguments.length -  0);
while (G__340039__i < G__340039__a.length) {G__340039__a[G__340039__i] = arguments[G__340039__i + 0]; ++G__340039__i;}
  args = new cljs.core.IndexedSeq(G__340039__a,0);
} 
return G__340038__delegate.call(this,args);};
G__340038.cljs$lang$maxFixedArity = 0;
G__340038.cljs$lang$applyTo = (function (arglist__340040){
var args = cljs.core.seq(arglist__340040);
return G__340038__delegate(args);
});
G__340038.cljs$core$IFn$_invoke$arity$variadic = G__340038__delegate;
return G__340038;
})()
;

return null;
});
