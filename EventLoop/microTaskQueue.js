// in Micro Task Queues, next tick queues followed by promise queues.
Promise.resolve().then(()=>{
    console.log("log promise 1")
})
process.nextTick(()=>{
    console.log("log process nextTick 1")
})
Promise.resolve().then(()=>{
    console.log("log promise 2")
})
process.nextTick(()=>{
    console.log("log process nextTick 2")
})

/*
OutPut:
log process nextTick 1
log process nextTick 2
log promise 1
log promise 2
*/