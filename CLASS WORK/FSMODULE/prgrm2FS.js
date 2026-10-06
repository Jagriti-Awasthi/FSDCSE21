 const fs=require("fs");
fs.writeFile("student.txt","Name: Jagriti\nRoll No: 101",(res)=>{
    if(res){
        console.log()
    }
});
console.log("File created successfully");
let data=fs.readFile("student.txt","utf8",cb);
console.log("\nFile Content:");