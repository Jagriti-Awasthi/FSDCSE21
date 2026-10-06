//Synchronous and asynchronous programmaning
//synchronous programming:code is executed line by line
// console.log("java script");
// function hello()
// {
//     console.log("hello world");
// }
// hello();
// console.log("This is synchronous programming");
// //Asynchronous programming:code is executed  line by line
// const hello1=()=>{
//    setTimeout(()=>{
//         console.log("Hello world");
//   },2000);
// }
// hello1();
// console.log("this is asnyc");
// //callback,promises,async/await
// function add(n1,n2,callback)
// {
//     console.log(n1+n2);
//     callback();
// }
// let a=10;
// let b=20;
// add(a,b,sayHi);
// add(a,b,hello);
// function sayHi(){
//     console.log("this is callback function");
// }
// function hello()
// {
//     console.log("hello world");
// }
//create a function display(callback) that print "welcome to abes"and then callback which print "FSD in cse21"
function display(callback)
{
    console.log("welcome to abes");
    callback();
}
display(print);
function print()
{
    console.log("FSD in cse21")
}