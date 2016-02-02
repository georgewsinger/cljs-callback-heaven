require('./out-none/goog/bootstrap/nodejs');
require('./target/cljs-callback-heaven-none');
require('./out-none/cljs_callback_heaven/core');
cljs_callback_heaven.core._main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
