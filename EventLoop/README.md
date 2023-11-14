<img width="1666" alt="Screenshot 2023-10-30 at 8 17 19 PM" src="https://github.com/pragnakanchana/NodeJs/assets/50200489/bc6aa86c-5dfe-4f43-b83a-adf2b3dc6a75">**V8 Engine Overview:**
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

