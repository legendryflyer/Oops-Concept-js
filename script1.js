let tavish ={
    firstname:"tavish",
    lastname:"anade",
    age:25,
    rollno:65
}

let anade ={
    firstname:"harshita",
    lastname:"anande",
    age:30,
    rollno:64
}

console.log(tavish)
console.log(anade)


// program 2
function person (firstname,lastname,age){
    this.firstname=firstname
    this.lastname=lastname
    this.age=age
    }
    var p1=new person("Tavish","Anade",25)
    console.log(p1)

// program 3
class persona {
    constructor(first_name,last_name,ag,rn){
        this.f_name=first_name
        this.l_name=last_name
        this.a_ge=ag
        this.r_num=rn

    }
    displayName(){
        console.log(this.f_name + this.l_name)
    }
}
let tav= new persona("tavish","anade",55,77)
console.log(tav)
tav.displayName()
tav.city="mumbai"
console.log(tav)



// set and get methods 
 

// properties value - set 
class personb{
    setAge(ag){
        this.age=ag
    }
    setCity(cty){
        this.city= cty
    }
    setFirstname(fn){
        this.firstname = fn
    }
    setLastname(ln){
        this.lastname = ln
    }
    //get method returns full value to the user 
    getAge(){
        console.log(this.age)
    }
    getCity(){
        console.log(this.city)
    }
    getFirstname(){
        console.log(this.firstname)
    }
    getLastname(){
        console.log(this.lastname)
    }
    
}


let harshita = new personb()
//console.log(harshita)

harshita.setAge("19")
harshita.setCity("New York City")
harshita.setFirstname("Harshita")
harshita.setLastname("anade")
harshita.getAge()
harshita.getCity()
harshita.getFirstname()
harshita.getLastname()
console.log(harshita.age)
console.log(harshita.city)
console.log(harshita.firstname)
console.log(harshita.lastname)



// program 4


// // let info ={
//     fullName:"tavish",
//     lastname:"anade"
// }

// info.city="pune"
// console.log(info)

