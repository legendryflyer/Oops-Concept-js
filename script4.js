// object litral
let tavish ={
    name:"Tavish",
    lastname:"anade",
    age:25,
    profession:"Software Engineer",
    display:function(){
        return (this.name+"  "+ this.lastname)
    }
}
console.log(tavish.display())
// console.log(tavish.profession)



// function constructor
function person(fn,ln,pf,ag){
    this.firstName= fn
    this.lastName= ln
    this.profession= pf
    this.age= ag
    this.display=function(){
        return `${this.firstName} ${this.lastName}, a ${this.age +" year old " + this.profession}`
    }
}

let jhon= new person("tavish","anade","devloper",20)
console.log(jhon.display())
// console.log(jhon.profession)
// console.log(jhon.age)
// console.log(jhon.firstName)


//Es6 class 
class Employee {
    constructor(fn,ln,pf,ag){
        this.firstName= fn
        this.lastName= ln
        this.profession= pf
        this.age= ag
        }
        getFullName() {
            return `${this.firstName} ${this.lastName}`
            }
        introduce() {
            return `Hi! My name is ${this.getFullName()} and I am a ${this.profession}.`
            }
}
let emp=new Employee("tavish","anade","software devloper",20)
console.log(emp.introduce())
console.log(emp.getFullName())





class bank{
    constructor(name,balance,trans){
        this._name = name
        this._balance = balance
        this.transaction=[]
        }
        get name (){
            return this._name
        }
        deposit(amt){
            this._balance = this._balance + amt 
            this.transaction.push(amt)
            return this._balance
           
        }
        withdrawal(amt){
            if(this._balance>=amt){
                this._balance=this._balance-amt
                this.transaction.push(-amt)
        
            }
            else{
                console.log('Insufficient Balance')
            }
                return this._balance
        }

        lastThreetransaction(){
            return this.transaction.slice(-3)
            
        }
}
let b1= new bank ("Tavish",500)
console.log(b1.deposit(200))
console.log(b1.withdrawal(80))
console.log(b1.deposit(358734))
console.log(b1.withdrawal(326))
console.log(b1.lastThreetransaction())





