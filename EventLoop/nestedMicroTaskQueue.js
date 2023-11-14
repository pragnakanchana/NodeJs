Promise.resolve().then(()=>{
    console.log("log promise 1") //1
    Promise.resolve().then(()=>{
        console.log("log inside promise 1") //2
    })
})

process.nextTick(()=>{
    console.log("log  nextTick 1") //3
    process.nextTick(()=>{
        console.log("log inside  nextTick 1") //4
    })
})

Promise.resolve().then(()=>{
    console.log("log promise 2") //5
    process.nextTick(()=>{
        console.log("log of nextTick inside promise 2 ") // 6
    })
})

process.nextTick(()=>{
    console.log("log nextTick 2") // 7
    Promise.resolve().then(()=>{
        console.log("log of promise inside nextTick 2") // 8
    })
})

// 3, 7, 4, 6
// 1, 5, 8, 2, 

/*
Iteration 1:
NTQ: 3,7,4 
PQ: 1,5, 8, 2

Iteration 2:
NTQ: 6

Output: 
log  nextTick 1
log nextTick 2
log inside  nextTick 1
log promise 1
log promise 2
log of promise inside nextTick 2
log inside promise 1
log of nextTick inside promise 2 
*/
