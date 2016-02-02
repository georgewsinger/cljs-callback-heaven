(ns cljs-callback-heaven.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [cljs-callback-heaven.core-test]))

(doo-tests 'cljs-callback-heaven.core-test)
