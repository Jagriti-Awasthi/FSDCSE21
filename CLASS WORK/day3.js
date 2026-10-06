//PROMISES:object
//promise way 1
const promiseOne=new Promise((resolve,reject)=>{
console.log("prmoise done");
resolve("operation successful")
})
promiseOne.then((result)=>{
console.log (result); 
}).catch((error)=>{
console.log (error);
})