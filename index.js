require('./out-none/goog/bootstrap/nodejs');
require('./target/cljs-async-patterns-none');
require('./out-none/cljs_async_patterns/core');
cljs_async_patterns.core._main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
