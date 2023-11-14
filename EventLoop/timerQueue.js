// CBs in microtask queues are executed before timer Queues
// console.log("log 1")
// Promise.resolve().then(()=>{
//     console.log("log promise 1")
// })

// setTimeout(()=>{
//     console.log("log timer 1")
// },0)

// setTimeout(()=>{
//     console.log("log timer 2")
// },0)

/*
log 1
log promise 1
log timer queue 0 wala
log timer queue 100 wala
*/

// ----------------------------------------------------------------------------------
// CBs in Micro task queues are executed after execution of every call back in Timer Queues. Again next tick queues --> promise queues.
// Timer Queue is not exactly a queue, but it's a min heap data structure.

console.log("log 1")
Promise.resolve().then(()=>{
    console.log("log promise 1")
})

setTimeout(()=>{
    console.log("log timer 1")
    process.nextTick(()=>{
        console.log("log nextTick inside timer 1")
    })
},50)

setTimeout(()=>{
    console.log("log timer 2")
    process.nextTick(()=>{
        console.log("log nextTick inside timer 2")
    })
    Promise.resolve().then(()=>{
        console.log("log promise inside timer 2")
    })
},10)

setTimeout(()=>{
    console.log("log timer 2")
    process.nextTick(()=>{
        console.log("log nextTick inside timer 2")
    })
    Promise.resolve().then(()=>{
        console.log("log promise inside timer 2")
    })
},100)

setTimeout(()=>{
    console.log("log timer 3")
    process.nextTick(()=>{
        console.log("log nextTick inside timer 3")
    })
},0)

/*
Output:
log 1
log promise 1
log timer 1
log nextTick inside timer 1
log timer 2
log nextTick inside timer 2
log promise inside timer 2
log timer 3
*/