// lexical scope 

function add(){
    let a=10
    let b=20

    function addB(){
        let d=30
        let  c = a+b
        console.log( c+d)

        function addC(){
            let  e=50
            console.log(c + e)
        }
        addC()
    }
    addB()
}
add()



// closures


function displayName(){
    return function(){
        return "hello"
    }
}
let q1 = displayName()
console.log(q1())

function displayName2(){
    console.log("hello")
    return "bye"
    console.log("hello good bye") //  this will not be executed because the execution context is already moved to the next line | return statement si always a last statement
}
let q2 = displayName2()
console.log(q2)



function additionE(){
    let x = 100
    let y = 50 

    return function(){
        console.log(x+y)
    }
}

let q = additionE()

// let q = function(){
//     console.log(x+y)
// }

q()



//function declaration 
function addition(x,y){
    return x + y
}
let w1 = addition(12,4)
console.log(w1)



// function expression
let additionB = function(x,y){
    return x + y
}
let w2 = additionB(12,4)
console.log(w2) 


// arrow function

let additionC = (x,y)=>{
    return x + y
}
let w3 = additionC(12,4)
console.log(w3)
