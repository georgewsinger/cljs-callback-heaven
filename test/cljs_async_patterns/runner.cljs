(ns cljs-async-patterns.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [cljs-async-patterns.core-test]))

(doo-tests 'cljs-async-patterns.core-test)
