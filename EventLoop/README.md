# Node.js Event Loop Understanding

## V8 Engine Overview
- The V8 engine is broadly divided into two sections: Memory Heap and Call Stack.

### Memory Heap
- This is where memory for all variables, functions, and objects is allocated.

### Call Stack
- Functions and their logic are executed in the call stack.
- When a function returns, it is popped out of the call stack.

### Async Operations
- When the call stack encounters an asynchronous operation, it offloads it to libuv.
- Libuv executes the asynchronous operation in the thread pool.

### Callback Execution
- Once the call stack is empty, the associated callback of the asynchronous operation is pushed to the call stack.
- The contents of the callback are then executed on the call stack.

![V8 Engine Overview Image](https://github.com/pragnakanchana/NodeJs/assets/50200489/ee84c089-3b15-47a2-8ad7-6330d47aed28)

## Event Loop
- [Event Loop Playlist](https://youtube.com/playlist?list=PLC3y8-rFHvwj1_l8acs_lBi3a0HNb3bAN&si=B41RX7HJ29f_0mZc)
- Event Loop is the core part of libuv.
- Simple a C program.
- A Design Pattern that Orchestrates or co-ordinates the execution of synchronous and asynchronous code in Node.js
![Event Loop Image](https://github.com/pragnakanchana/NodeJs/assets/50200489/18b2747f-07fc-4313-a8ad-c07f3f946344)

## Microtask Queue
- Microtask queue is of two parts again - nextTick queue and promise queue.
- `nextTick` has the CBs that are associated with the process.nextTick.
- Promise callbacks have the CBs that are associated with Promises.

## Queues in libuv
- Timer queue, I/O queue, check queue, and close queue are a part of libuv.
- Microtask queue is not a part of libuv.

## Execution Order
- All user-written synchronous code takes priority over Async code.
- Only when the call stack is empty, the event loop comes into the picture.
- Order of Execution of Callbacks (priority order of queues):
  1. Microtask queues are given top priority, in which next tick queues --> promise queues.
  2. CBs in Timer
