# cljs-callback-heaven

![cb heaven](http://www.businesscomputingworld.co.uk/wp-content/uploads/2012/09/Cloud-Heaven.jpg)

`cljs-callback-heaven` is a small library that helps you escape callback hell when interoping with javascript and [core.async](https://clojure.github.io/core.async/).

# 1 The Problem

First there was JavaScript, giving rise to callback hell.  Then came ClojureScript, giving us core.async and the ability to jam values into channels asyncronously.  While this latter step is a significant improvement over pure JS, the problem is that **every time you interop with JavaScript within ClojureScript, you still must deal with callbacks.**

For example, consider a simple asyncronous call to node's `readFile`:

    (.readFile (nodejs/require "fs") "path/to/file" "utf8" _)

Here, in place of the `_`, **you must insert a callback**.

# 2 The Core.Async Solution

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
After a while, this becomes tiresome.

# 3 The CLJS-Callback-Heaven Solution
## 3.1 A Shorter Notation for Jamming Error First Callbacks into Channels

A better way to go about javascript interop is to break the code above into tinier functions and introduce some new macros.  First, we introduce the `(>? ..)` function to create a callback of arbitrary length, which then jams its first non-nil value into a channel. For example, if `c` is a channel, then `(>! c)` outputs the following callback function:

    (fn [& args] 
        (go-loop [a args]
          (if (= 0 (count a)) (>! c false)
                              (if (first a) 
                                  (>! c (first (chan-sanitized a))) 
                                  (recur (rest a))))))

Notice that this callback function doesn't specify how many arguments it can take.  This means, in particular, that we can use it as an all-purpose callback for many javascript async functions (given that javascript tends to abide by the [error-first callback pattern](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)). For example:

    (.readFile (nodejs/require "fs") "path/to/file" "utf8" (>? c))

And, in case we want a custom error message to placed into our channel, `>?` is capable of taking an optional third argument:

    (.readFile (nodejs/require "fs") "path/to/file" "utf8" (>? c "ERROR: This is a custom error which will be jammed into c in case readFile fails."))

## 3.2 Forcing the nth Argument of a Callback into a Channel

Sometimes it can be useful to force the *nth* member of a callback argument into a channel, regardless of whether the other callback arguments contain error values or not. In these cases, you can use `>1`, `>2`, and `>3` to target the first, second, and third callback arguments. In the case of node's `.readFile`, we can use `>2`:
  
    (.readFile (nodejs/require "fs") "path/to/file" "utf8" (>2 c)) ;;this will jam the second argument of the generated callback into c, regardless of whether the first argument is truthy

## 3.3 Jam an Asynchronous JS Function's Callback Value into a Channell in a One Line

Recall above how we went about jamming the callback value of an async function into a channel:

    (go
     (let [c (chan 1)]
       (.readFile (nodejs/require "fs") "path/to/file" "utf8" (fn [err, res] (go (>! c res))) (<! c)))

With the `(<? ..)` macro available in this repo, we can reduce this to a one liner:

     (<? (.readFile (nodejs/require "fs") "path/to/file" "utf8" _))

Behind the scenes, this macro is replacing the `_` character with the `>?` callback discussed above, and wrapping the code in a go block. It can also handle custom error messages:

     (<? (.readFile (nodejs/require "fs") "path/to/file" "utf8" _) "ERROR: Custom err message")

**NOTE:** You can also use `<1`, `<2`, and `<3` to use `>1`, `>2`, or `>3` in place of `>?`, respectively.

## 3.4 Printing from Channels

Printing from channels is frequently useful. The cumbersome way to do this is as follows:
 
     (go (println (<! channel))) 

So this library provides the `(<print ..)` function to shorten this

    (<print channel)

# 4 NOTE

While all of the code in this repo is working, it is generally out of date with the code [found in this template](https://github.com/georgewsinger/lein-node-cli-template).
