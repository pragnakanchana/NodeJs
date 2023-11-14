// Micro task Queue CBs and CBs in timer queues before I/O queues.
// When running a Timeout of 0ms and I/O async method, order of execution is unpredictable.
/*
why ??
- https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp#93
- It depends on how minimum timeout is set, here it is 1ms.
-  if I/O takes 0.5ms, then I/O takes priority over setTimeout(0ms), if I/O takes 1ms, then setTimeout(0ms) takes priority over I/O.
*/

const fs = require("fs");

fs.readFile("EventLoop/ReadFiles/read1.txt", "utf8", (err, data) => {
    console.log("file data 1", data);
});

fs.readFile("xyz.txt", "utf8", (err, data) => {
    console.log("file data 2", data);
});

setTimeout(()=>{
    console.log("log timer 1")
},0)

setTimeout(()=>{
    console.log("log timer 1")
},50)