// program 1
class student{
    constructor(fn,ln,roll){
        this.firstName=fn
        this.lastName = ln
        this.RollNo = roll

    }
    displayName(){
        return (this.firstName + this.lastName)
    }
}


// let tav= new student("tavish","anade",65)
// console.log(tav.firstName)
// console.log(tav.lastName)
// console.log(tav.RollNo)
// console.log(tav.displayName())



class teacher extends student {
    constructor(fn,ln,roll,sub){
        super(fn,ln,roll)
        this.subject = sub

    }
    displaySub(){
        return ("this subject " + this.subject + " is tought by " + this.firstName + this.lastName)
    }
}

// let tav = new teacher("tavish ","anade",65,"english")
// console.log(tav.displaySub())
// console.log(tav.firstName)
// console.log(tav.lastName)
// console.log(tav.RollNo)
// console.log(tav)


//program 2
class papa {
    constructor(fn,ln,age,aadhar) {
        this.firstName = fn
        this.lastName = ln
        this.Age = age
        this.AadhaarNumber = aadhar
    }
    displayName(){
        return (this.firstName +" "+ this.lastName)

    }
    
}

class beta extends papa {
    constructor(fn,ln,age,aadhar,bn){
        super(fn,ln,age,aadhar)
        this.sonName=bn
    }
    displayBname(){
        return (this.sonName + this.lastName)
    }
}


class mother extends papa {
    constructor(fn,ln,age,aadhar,mn){
        super(fn,ln,age,aadhar)
        this.mothername=mn
    }
    displayMname(){
        return (this.mothername + "  "   +this.lastName)
    }    
}

let tav=new mother ("tavishh","anade","20",746326094,"manjusha")
console.log(tav.displayName())
console.log(tav.displayMname())

console.log(tav.firstName)
console.log(tav.lastName)