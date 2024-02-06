// let tavish={
//     firstname:"tavish",
//     lastname:"anade",
//     age:"20",

//     rollno:"15CS3004"
// }

// console.log(tavish)


// class student {
//     firstname = undefined
//     lastname = undefined
//     age = undefined
//     rollno = undefined 

// }

// let obj=new student()
// console.log(obj)
// obj.firstname="Tavish"
// obj.lastname="Anade"
// obj.age=20
// obj.rollno="15CS3004"
// console.log(obj)


// class constructor
// class Student{
//     constructor(fname,lname,age,rno){
//         this.firstname=fname
//         this.lastname=lname
//         this.age=age
//         this.rollno=rno
//         }
// }
// let stu1= new Student("Tavish","Anade",20,"15CS3004")
// console.log(stu1)


// // function / method  of the class
// class StudentB {
//      setFirstName(fn) {
//          this.firstName = fn
//      }
//      setLastName(ln) {
//          this.lastName = ln
//      }
//      setAge(ag) {
//          this.age = ag
//      }
//      setRollNumber(rn) {
//          this.rollNumber = rn
//      }
// }


// let tav= new StudentB()
// console.log(tav.setFirstName("Tavish"))
// console.log(tav.setLastName("Kumar"))
// tav.setAge(26)
// tav.setRollNumber("15CS3007")
// console.log(tav)


// set and get key words 

class StudentC {
    set  firstName(fn){
        this.first_Name = fn
    }
    get firstName(){
        return `First Name : ${this.first_Name}`
    }
    set  lastName(ln){
        this.last_Name = ln
    }
    get lastName(){
        return `Last Name: ${this.last_Name}`
    }
}

let  tom = new StudentC()
tom.firstName="Tom"
console.log(tom.firstName)
tom.lastName="Hanks"
console.log(tom.lastName)












