// after every setImmediate CB, it checks MicroTaskQueue.
setImmediate(()=>{
    console.log("log setImmediate 1")
})

setImmediate(()=>{
    console.log("log setImmediate 2")
    Promise.resolve().then(()=>{
        console.log("promise inside setImmediate2")
    })
})

setImmediate(()=>{
    console.log("log setImmediate 3")
})