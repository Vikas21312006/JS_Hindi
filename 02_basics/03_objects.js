// singleton // jab ye constructor see banta hain
//Object.create
// object literals

const mySym = Symbol("key1")

const jsUser = {
name: "Vikas",
"full name": "Vikas Chaurasiya",
[mySym]: "mykey1",
age: 20,
location: "Greater Noida" ,
email: "Vikas@gmail.com"

}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]);

jsUser.email = "Vikas@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "Neelam@gmail.com"
console.log(jsUser)


jsUser.greeting = function(){
    console.log("HellO js User")

}

jsUser.greetingTwo = function(){
    console.log(`HellO js User, ${this.name}`);

}
 //console.log(jsUser.greeting());
  console.log(jsUser.greeting());
   console.log(jsUser.greetingTwo());