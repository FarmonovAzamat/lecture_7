// synchronous
// const p = document.querySelector(".p")
// p.textContent  = "My name is Azamat!"
// alert("Text set!")
// p.style.color = "red"

// asynchronous
// const p = document.querySelector(".p")
// setTimeout(function (){
//     p.textContent  = "My name is Azamat!";
// }, 2000);
// p.style.color = "red"

// console.log("");
// console.log("One");
// console.log("Two");
// console.log("Three");

// console.log("");

// console.log("One");
// setTimeout(()=>
// console.log("Two"),0)
// console.log("Three");


// Assync with callback function
// function foo (callback){
//     setTimeout(function(){
//         callback("BismiLLah")
//     })
// }
// foo(function(value){
//     console.log(value);
// })

// Assync with promise function
// let promise = new Promise(function (resolve,reject){
//     console.log("Hello");
// })

// Assync with promise function
// function bar (){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve ("Hello world!");
//         },1000);
//     });
// }


// bar().then(function(value){
//     console.log(value);
// }).catch(function(error){
//     console.error(error);
// })

// async fnc
// async function name (parameter1,parameter2,...parameter1n){
//     //statement
// }


// let promise = new Promise (function(resolve, reject){
//     setTimeout(function(){
//         resolve ("Promise resolved")
//     },2000);
// });
// async function asyncFunc(){
//     let result = await promise;
//     console.log(result);
//     console.log("hello");
// }
// asyncFunc()

//Async await
// async function baz (){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             resolve("Hello world");

//         },1000);
//     })
// } 

// (async function(){
//     try{
//         const value = await baz();
//         console.log(value);
//     } catch (error){
//         console.error(error);
//     }
// })();


// //GET
// const getUsers = async () =>{
//     try{
//         const response = await fetch("");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error){
//         console.log(error);
//     }
// }

// Post
const postUser = async (user) =>{
    try{
        const response = await fetch("..",
        {
            method: "POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user),
        });
    } catch (error){
        console.log(error);
    }
}
// const p = document.querySelector(".p")
// setTimeout(function (){
//     p.textContent = "I am a student"
// }, 5000);


