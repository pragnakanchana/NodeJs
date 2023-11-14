* **V8 Engine Overview:**
  * The V8 engine is broadly divided into two sections: Memory Heap and Call Stack.

* **Memory Heap:**
  * This is where memory for all variables, functions, and objects is allocated.

* **Call Stack:**
  * Functions and their logic are executed in the call stack.
  * When a function returns, it is popped out of the call stack.

* **Async Operations:**
  * When the call stack encounters an asynchronous operation, it offloads it to libuv.
  * Libuv executes the asynchronous operation in the thread pool.

* **Callback Execution:**
  * Once the call stack is empty, the associated callback of the asynchronous operation is pushed to the call stack.
  * The contents of the callback are then executed on the call stack.
