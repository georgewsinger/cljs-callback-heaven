// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs_async_patterns.core_test');
goog.require('cljs.core');
goog.require('cljs_async_patterns.core');
goog.require('cljs.test');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
goog.require('clojure.string');
/**
 * Executes a 1-argument callback.
 */
cljs_async_patterns.core_test.async_1 = (function cljs_async_patterns$core_test$async_1(arg,cb){
if(cljs.core._EQ_.call(null,arg,"err")){
return cb.call(null,null);
} else {
return cb.call(null,"success");

}
});
/**
 * Executes a 2-argument callback.
 */
cljs_async_patterns.core_test.async_2 = (function cljs_async_patterns$core_test$async_2(arg,cb){
if(cljs.core._EQ_.call(null,arg,"err")){
return cb.call(null,"err",null);
} else {
return cb.call(null,null,"success");

}
});
/**
 * Executes a 3-argument callback.
 */
cljs_async_patterns.core_test.async_3 = (function cljs_async_patterns$core_test$async_3(arg,cb){
if(cljs.core._EQ_.call(null,arg,"err1")){
return cb.call(null,"err1",null,null);
} else {
if(cljs.core._EQ_.call(null,arg,"err2")){
return cb.call(null,null,"err2",null);
} else {
return cb.call(null,null,null,"success");

}
}
});
cljs_async_patterns.core_test.prnt_cb_1 = (function cljs_async_patterns$core_test$prnt_cb_1(res){
return cljs.core.println.call(null,"res: ",res);
});
cljs_async_patterns.core_test.prnt_cb_2 = (function cljs_async_patterns$core_test$prnt_cb_2(err,res){
cljs.core.println.call(null,"err: ",err);

return cljs.core.println.call(null,"res: ",res);
});
cljs_async_patterns.core_test.prnt_cb_3 = (function cljs_async_patterns$core_test$prnt_cb_3(arg1,arg2,arg3){
cljs.core.println.call(null,"arg1: ",arg1);

cljs.core.println.call(null,"arg2: ",arg2);

return cljs.core.println.call(null,"arg3: ",arg3);
});

//# sourceMappingURL=core_test.js.map