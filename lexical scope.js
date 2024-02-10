//  lexical scope

// class student{
//     constructor(fn,ln){
//         this.firstname=fn,
//         this.lastname=ln
//     }
//     displayname(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }
// let q= new student("tavish","anade")
// console.log(q.displayname)


//  lexical scope
// parent functions are accisible to child 
// child functions are not accisible to parents

let w= 4

function addition(x,y){
    // return x+y
    console.log(x+y)
    function addition(x,y,z){
        // return x+y+z
        console.log(x+y+z)
        function addition(x,y,z,w){
            console.log(x+y+z+w)
        }
        addition()
    }
    addition(1,2,3)

}
addition(1,2)


let e = 10
let f = 20

function display() {
    let a = 5
    let b = 2
    console.log(a + b)
    console.log(e + f)

    function display1() {
        let c = 30
        let d = 20
        console.log(e + f + a + b)
        console.log(a + b + d)

        function display2() {       
            console.log(c)
            console.log(e + f)//150
        }
       display2()
    }
    display1()
}
display()