# cljs-callback-heaven

`cljs-callback-heaven` is a small library that helps you escape callback hell when interoping with javascript and [core.async](https://clojure.github.io/core.async/).

## The Problem

First there was JavaScript, giving rise to callback hell.  Then came ClojureScript, giving us core.async and the ability to jam values into channels asyncronously.  While this latter step is a significant improvement over pure JS, the problem is that **every time you interop with JavaScript within ClojureScript, you still must deal with callbacks.**

For example, consider a simple asyncronous call to node.js's `readFile`:

    (.readFile (nodejs/require "fs") "path/to/file" "utf8" _)

Here, in place of the `_`, **you must insert a callback**.

## The Core.Async Solution

A solution frequently employed with core.async is to jam the value of a callback argument into a channel:

    (go
     (let [c (chan 1)]
       (.readFile (nodejs/require "fs") "path/to/file" "utf8" (fn [err, res] (go (>! c res))) (<! c)))

But this is very awkward. First, we must encapsulate everything within a go block. Then, we have to jam the value of the callback argument into a channel, only to take it back out again so we can re-use it as the return value of the go black. Things get even more complicated when we introduce channel error handling:

    (go
     (let [c (chan 1)]
       (.readFile (nodejs/require "fs") "path/to/file" "utf8" (fn [err, res] 
                                         (if err (go (>! c err) 
                                                 (go (>! c res)))))) (<! c)))

For that matter, what about *custom* errors?

    (go
     (let [c (chan 1) e "CUSTOM ERROR."]
       (.readFile (nodejs/require "fs") "path/to/file" "utf8" (fn [err, res] 
                                         (if err (go (>! c e) 
                                                 (go (>! c res))) (<! c)))

This is becoming tiresome.

# A Concise Solution
## A Shorter Notation for Jamming Error First Callbacks into Channels

A better way to go about javascript interop is break the code above into tinier functions, macros, and a more concise notation.  First, we can use the `(>? ..)` function to create a callback of arbitrary length, which then jams its first non-nil value into a channel. For example, if `c` is a channel, then `(>! c)` returns the following callback function:

    (fn [& args] 
        (go-loop [a args]
          (if (= 0 (count a)) (>! c false)
                              (if (first a) 
                                  (>! c (first (chan-sanitized a))) 
                                  (recur (rest a))))))

Notice that this callback function doesn't specify how many arguments it can take.  This means, in particular, that we can use it as a all-purpose callback for almost any javascript async function, given that javascript tends to abide by the [error-first callback pattern](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/). For example:

    (.readFile (nodejs/require "fs") "path/to/file" "utf8" (>? c))

And, in case we want a custom error message to be fit into our channel, `>?` is capable of handling these as well:

    (.readFile (nodejs/require "fs") "path/to/file" "utf8" (>? c "ERROR: This is a custom error."))

## Forcing the nth Argument of a Callback into a Channel

Every once in a while, you will want to target the *nth* member of a callback argument, regardless if the other arguments contain error values. In those cases you can use `>1`, `>2`, and `>3` to target the first, second, and third callback arguments:
  
    (.readFile (nodejs/require "fs") "path/to/file" "utf8" (>2 c)) ;;this will jam the second argument of the generated callback into c, regardless of what the first argument is

## Converting an Async JS Function into a Channel with Its Callback Value (In Progress)

Recall above how we went about jamming the callback value of an async function into a channel:

    (go
     (let [c (chan 1)]
       (.readFile (nodejs/require "fs") "path/to/file" "utf8" (fn [err, res] (go (>! c res))) (<! c)))

With the `(<? ..)` macro, we can reduce this to one line:

     (<? (.readFile (nodejs/require "fs") "path/to/file" "utf8" _))

Behind the scenes, this macro is replacing the `_` character with the `>?` callback discussed above, and wrapping the code block thing in a go block. It can also handle custom error messages:

     (<? (.readFile (nodejs/require "fs") "path/to/file" "utf8" _) "ERROR: Custom err message")

**NOTE:** You can also use `<1`, `<2`, and `<3` to use `>1`, `>2`, or `>3` in place of `>?`, respectively.

## Printing from Channels

Printing from channels is frequently useful. The long way to do this is as follows:
 
     (go (println (<! channel))) 

This library provides the `(<print ..)` function to shorten this

    (<print channel)
