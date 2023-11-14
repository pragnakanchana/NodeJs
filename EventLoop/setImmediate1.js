const fs = require("fs");

fs.readFile("EventLoop/ReadFiles/read1.txt", "utf8", (err, data) => {
    console.log("file data 2");
});

setTimeout(()=>{
    console.log("log timer 1")
},0)

setImmediate(()=>{
    console.log("log set Immediate")
})



/*
Output:
log set Immediate
log timer 1
file data 2


why set Immediate is executed before file read ?
this is because of I/O polling, event loops polls to I/O to check the completed operations 
and queues up only completed operations

timer after setImmediate - is because of https://chromium.googlesource.com/chromium/blink/+/master/Source/core/frame/DOMTimer.cpp#93
*/

// -----------------------------------------------------------------------------------------
// check queue CBs are executed after MicroTask CBs, TimerCBs, I/O CBs
const fs = require("fs");

fs.readFile("EventLoop/ReadFiles/read1.txt", "utf8", (err, data) => {
    console.log("file data 2");
});

setTimeout(()=>{
    console.log("log timer 1")
},0)

setImmediate(()=>{
    console.log("log set Immediate")
})
for (i = 0 ; i < 2000000; i++){}

/*
log timer 1
log set Immediate
file data 2
*/