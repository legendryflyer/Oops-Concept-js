// program 1 
class Student {
        constructor(firstName, lastName) {
            this.firstName = firstName
            this.lastName = lastName
        }
        displayName() {
            return (this.firstName + this.lastName)
        }
}
    

class teacher extends Student{
        salary=20000
        displaysalary(){
            return this.salary
        }
}


let tavish=new student("tavish","arora")
console.log(tavish.displayName())
let saurabh= new teacher("Saurabh","Kumar")
console.log(saurabh.displaysalary())

// class Student {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     constructor(firstName, lastName, salary) {
//         super(firstName, lastName)
//         this.salary = salary
//     }
//     displaySalary() {
//         console.log(this.salary)
//     }
// }

// let swapnil = new Teacher("swapnil", "rao", 30000)
// swapnil.displayName()

//Program 3
class GrandFather{
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }
    displayGName(){
        console.log(this.firstName+this.lastName)
    }
}
class Father extends GrandFather{
    constructor(fn,ln,ffn) {
     super(fn,ln)
     this.fFirstName=ffn
    }
    displayFName(){
     console.log(this.fFirstName+this.lastName)
    }
 }
 
 class Son extends Father{
     //3 property
     //2 method
     constructor(fn,ln,ffn,sfn){
       super(fn,ln,ffn) 
       this.sFirstName=sfn 
     }
     displaySName(){
         console.log(this.sFirstName+this.lastName)
     }
 }
 
 let ram=new Son("RamRaja","kumar","mahendra","vaibhav")
 ram.displayGName()
 ram.displayFName()
 ram.displaySName()
 
 
 //1 parent
 //multiple child

