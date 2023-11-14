**V8 Engine Overview:**
  * The V8 engine is broadly divided into two sections: Memory Heap and Call Stack.

**Memory Heap:**
  * This is where memory for all variables, functions, and objects is allocated.

**Call Stack:**
  * Functions and their logic are executed in the call stack.
  * When a function returns, it is popped out of the call stack.

**Async Operations:**
  * When the call stack encounters an asynchronous operation, it offloads it to libuv.
  * Libuv executes the asynchronous operation in the thread pool.

**Callback Execution:**
  * Once the call stack is empty, the associated callback of the asynchronous operation is pushed to the call stack.
  * The contents of the callback are then executed on the call stack.

<img width="1666" alt="Screenshot 2023-10-30 at 8 17 19 PM" src="https://github.com/pragnakanchana/NodeJs/assets/50200489/ee84c089-3b15-47a2-8ad7-6330d47aed28">

* **Event Loop:**
  * [Event Loop Playlist](https://youtube.com/playlist?list=PLC3y8-rFHvwj1_l8acs_lBi3a0HNb3bAN&si=B41RX7HJ29f_0mZc)
  * Event Loop is the core part of libuv.
  * Simple a C program.
  * A Design Pattern that Orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js
<img width="1306" alt="Screenshot 2023-10-30 at 9 09 18 PM" src="https://github.com/pragnakanchana/NodeJs/assets/50200489/18b2747f-07fc-4313-a8ad-c07f3f946344">

* **Microtask Queue:**
  * Microtask queue is of two parts again - nextTick queue and promise queue.
  * nextTick has the CBs that are associated with process.nextTick.
  * promise callbacks have the CBs that are associated with Promises.

* **Queues in libuv:**
  * Timer queue, I/O queue, check queue, close queue are a part of libuv.
  * Microtask queue is not a part of libuv.

* **Execution Order:**
  * All user-written synchronous code takes priority over Async code.
  * Only when the call stack is empty, the event loop comes into the picture.
  * Order of Execution of Callbacks (priority order of queues):
    1. Microtask queues are given top priority, in which next tick queues --> promise queues.
    2. CBs in Timer Queues are executed one by one.
    3. CBs in Microtask queues are executed after the execution of every callback in Timer Queues. Again next tick queues --> promise queues.
    4. CBs in I/O queue are executed.
    5. CBs in Microtask queues are executed after the execution of callbacks in I/O Queues. Again next tick queues --> promise queues.
    6. CBs in Check Queue are executed.
    7. CBs in Microtask queues are executed after the execution of every callback in Check Queues. Again next tick queues --> promise queues.
    8. CBs in Close Queue are executed.
    9. CBs in Microtask queues are executed after the execution of callbacks in Close Queues. Again next tick queues --> promise queues.
    10. If more CBs are left over, then these 9 steps go on loop.

* **Timer Queue:**
  * Timer Queue is not exactly a queue, but it's a min heap data structure.
  * SetTimeOut:
    * `setTimeout` is used to execute a function once after a specified delay (in milliseconds).
    * It takes two arguments: a function or code to execute and a delay (in milliseconds).
    * The code or function will be executed only once after the specified delay.
  * SetInterval:
    * `setInterval` is used to repeatedly execute a function at a specified interval.
    * It also takes two arguments: a function or code to execute and an interval (in milliseconds).
    * The code or function will be executed repeatedly, with each execution occurring at the specified interval until explicitly cleared.

* **Timeout and I/O Async Method Execution Order:**
  * When running a Timeout of 0ms and I/O async method, the order of execution is unpredictable. Why?
    * [Source Reference](https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp#93)
    * It depends on how the minimum timeout is set, here it is 1ms.
    * If I/O takes 0.5ms, then I/O takes priority over `setTimeout(0ms)`. If I/O takes 1ms, then `setTimeout(0ms)` takes priority over I/O.

* **Reference:**
  * [Node.js Event Loop, Timers, and nextTick](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick)


