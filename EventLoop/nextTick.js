//  All user written synchronous code takes priority over Async code. - example
console.log("log 1 ")
process.nextTick(()=>{
    console.log("log process nextTick")
})
console.log("log 2")


/*
Output:
log 1 
log 2
log process nextTick
*/

