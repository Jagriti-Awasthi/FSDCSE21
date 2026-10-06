// //create one promises that will display user name and password
// //using resolve and if data will be rejected its display error message 
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     let err=true;
//     if(!err){
//         resolve("user:CSE21,pass:123");
//     }
//     else{
//         reject("ERRORR.....:data fail");
//     }
//     },2000)
// }).then((result)=>{
//     console.log(result);

// }).catch((error)=>{
//     console.log(error);
// })
//
//async/await
// console.log("this is async and await");
// async function test(){
//  console.log("1");
//  await console.log("2");
//  console.log("3");
//  console.log("4");
// }
// test();
// console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("process.nextTick");
});

console.log("End");