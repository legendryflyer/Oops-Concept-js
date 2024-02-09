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

