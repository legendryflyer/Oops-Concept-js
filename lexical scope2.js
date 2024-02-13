// lexical scope


// function add(){
//     let a=1
//     let b=2
//     console.log(a+b)
//     function add1(){
//         let c=3,d=4
//         console.log(c+d)
//         console.log(a+b+c+d)
//         function add3(){
//             let e=5,f=6
//             console.log(a+b+c+d+e+f)
//         }
//         add3()
//     }
//     add1()
// }
// add()


// closure

function sub(){
    let a=5,b=4
    return a-b //return is the last line of the function... code after return will not run inside  the function
    console.log(a-b)

}

let q1=sub()
console.log(q1)

// program 2

function multi(){
    let x=100,y=50
    return function(){
        console.log(x*y)
    }
}
let q2=function(){
    console.log(x*y)
}
q2()