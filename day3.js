//single level 
//multilevel

//hirarichal inheritance

//1 parent 
//multiple child

// class Mother {
//     constructor(firstName, lastName) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     displayMName() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Son extends Mother {
//     constructor(firstName, lastName, SFirstName) {
//         super(firstName, lastName)
//         this.SFirstName = SFirstName
//     }
//     displaySName() {
//         console.log(this.SFirstName + this.lastName)
//     }
// }

// class Daughter extends Mother {
//     constructor(firstName, lastName, DFirstName) {
//         super(firstName, lastName)
//         this.DFirstName = DFirstName
//     }
//     displayDName() {
//         console.log(this.DFirstName + this.lastName)

//     }

// }

// let shami=new Son("Shamila","Rao","shami")
// console.log(shami)

// class Vehical{
//     constructor(model,year){
//         this.model=model
//         this.year=year
//     }
//     honk(){
//         console.log('I am honk method')
//     }
// }

// class Car extends Vehical{
//     //2 property 1 method
//     constructor(model,year,color){
//         super(model,year)
//         this.color=color
//     }
//     drive(){
//         console.log('I am drive method')
//     }
// }

// class MothorCycle extends Vehical{
//     //2 perpty and 1 method

//     wheelie(){
//         console.log('this is wheelie method')
//     }
// }

// class Cycle extends Vehical{
//     cycling(){
//         console.log('this is cycling method')
//     }
// }

// let audi=new Car("Suv",1998)
// console.log(audi)
// console.log(audi.model)
// console.log(audi.year)
// audi.drive()
// audi.honk()


//whatsapp

//texing
//multimedia
//calling


class Whatsapp{
    texing(){
        console.log('I am texing feature')
    }
}

class WhatsappA extends Whatsapp{
    multimedia(){
        console.log('I am multimedia feature')
    }
}

class WhatsappB extends WhatsappA{
    calling(){
        console.log('I am calling feature')
    }
}