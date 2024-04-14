// exporting more than 1 module

// approach - 1
// const add = (a,b)=>{
//     return a+b
// }

// const subtract = (a,b)=>{
//     return a-b
// }
// module.exports = {
//     add: add,
//     subtract:subtract
// }

// Approach 2 
exports.add = (a,b)=>{
    return a+b
}

exports.subtract = (a,b)=>{
    return a-b
}

// exports here is the paramter that we get while importing a module as a part of IIFE