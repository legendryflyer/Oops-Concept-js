// polymorphism 

//  polymorphism is a feature of object-oriented programming that allows variables to hold values of different data
// overridding --->different  class ---->same mathod -------> same parameters


class worldbank{
    lone(){
        return ("lone from world bank")
    }
    save(){
        return ("save from world baank")
    }
} 

class SBI extends worldbank{
    lone(){
        return ("I am lone from SBI")

    }
    save(){
        return ("I am save from SBI")
    }
}

let obj= new  SBI()
console.log(obj.lone())
console.log(obj.save())



// overloding  ---> same method ---- > same classes --> same parameter -- > different results

class calculator{
    add(a,b){
        return a+b
    }
    add(a,b,c){
        return a+b+c
    }
    add(a,b,c,d){
        return a+b+c+d
    }
}

let s= new calculator()
console.log(s.add(1,2))
console.log(s.add(3,4))

