// function getUserDetails(username){
//     fetch(`https://api.github.com/users/${username}`).then((res=>res.json())).then((data)=>console.log(data));//fetch returns a fullfiled promise i.e resolved promise so res is data of the fetched promise and res.json() returns a fullfilled promise and its data is an object containing details of user. 
// }
// const btn=document.querySelector(".btn");
// const input=document.querySelector(".input");
// btn.addEventListener("click",async ()=>getUserDetails(input.value));

// async function getUserDetails(username){
//     const res= await fetch(`https://api.github.com/users/${username}`);
//     const data=await res.json();
//     return data;
// }
// const a=getUserDetails();

const promise=new Promise((resolve,reject)=>{
if (1==2)
resolve("muskan");
else reject("error");
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error));
console.log(promise);

// const promise=new Promise((resolve,reject)=>{
//     if (1==2)
//      resolve();
//     else reject();
//     });
//     console.log(promise);
//     promise.then(()=>console.log("hii"))
//     .catch(()=>console.log("error"));
//     console.log(promise);

