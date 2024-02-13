// number as a parameter and number as  a return type

function add(x,y){
    return x+y
}
let q=add(5,10)
console.log(q)

// string as a parameter and string as a rerturn type

function  sayHello(name){
    let greet="hello "+ name +" ! how are you today ? "
    return greet;
}
let n=sayHello("John")
console.log(n)


//  boolean as parameter and boolean as a rerturn type
function isGreater(a,b){
    if (a>b){
        return true
    }
    else{
        return false
    }    
}
let g=isGreater(4,3)
console.log(g)


//  array as a parameter and array as a return type
function doubleArray(arr){
    let newArr=[]
    for (i=0 ; i< arr.length ; i++){
        newArr[i]=arr[i]*2
    }
    return newArr
}
let d=doubleArray([1,2,3])
console.log(d)


//  object as a parameter and object as a return type

let info={
    firstname: "x" ,
    lastname: "y"
}
function add(obj){
    obj.lang="js"
    obj.years="5"
    obj.age="20"
    return obj
}
let o=add(info)
console.log(o)


// user defined class object as a parameter and as return type

class person{
    constructor(fn,ln){
        this.first_name=fn,
        this.last_name=ln
    }
}
let p =new person("ali","rezaei")
function showFullName(per){
    return per.first_name +" "+per.last_name

}
let a1=showFullName(p)
console.log(a1)

// arrow function
let additionE = (x,y)=>{
    return x + y
}
let q11 = additionE(12,4)
console.log(q11)

// program 1
let x = 10 
console.log(x)
x = 200
console.log(x)

let add = function(x,y){
    console.log(x+y)
}
add(12,4) // call 
console.log(add)

// program 2
add = function(x,y){
    return x + y
}
function additionA(fn,x,y){

    //let x = 10
    // let y = 20
    // let fn = function(x,y){
    //     return x + y
    // }
    let q1 = fn(x,y)
    return q1
}
let q22 = additionA(add,10,20)
console.log(q22)


let sub = function(x,y){
    return x - y
}

//console.log(sub)
function subtraction(fn,a,b){
    // let fn = function(x,y){
    //     return x - y
    // }
    //let a = 12
    // let b = 3 


    let q2 = fn(a,b)
    return q2
}
let q32 = subtraction(sub,12,3)
console.log(q32)

// program 4 -------------------
// function ads a return type
function greet(){
    return function(){
        console.log("hello")
    }
}
let a = greet()
console.log(a)

// let a = function(){
//     console.log("hello")
// }
a()

