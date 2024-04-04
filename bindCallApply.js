let info = {
    firstName:"John",
    lastName: "Doe",

    displayName:function(){
        console.log(this.firstName + ' ' + this.lastName)
    }
}

let info2 = {
    firstName: 'Jane',
    lastName :'Smith', 
}


let info3 = {
    firstName:"Alice",
    lastName:"Bob"
}

info.displayName()// John  Doe

let displayName2 = info.displayName

// displayName2 = function(){
//         console.log(this.firstName + ' ' + this.lastName)
//     }


// bind 

let a = displayName2.bind(info2)// binds the method to obj2, so when we call it, it will use those properties

// a = function(){
//         console.log(info2.firstName + ' ' + info2.lastName)
//     }


a() // Jane Smith


let b =  displayName2.bind(info3)
b() // Alice Bob


// call


displayName2.call(info) // Alice Bob
displayName2.call(info2) 
displayName2.call(info3)



// displayName2.call({firstName:'Charlie'}, {lastName:'Johnson'}) // Charlie Johnson


// apply 


displayName2.apply(info)
displayName2.apply(info2, ['Jane'])
displayName2.apply(info3,['Alice','Bob'])
console.log('-----------')
// displayName2.apply(null,['Jane', 'Smith'].concat(['is a great person'])) // Jane Smith is a great person


let  displayName3 = function(arg1){
    console.log(this.firstName + ' ' + this.lastName)
    console.log( arg1 )
}

displayName3.apply(info2,['is awesome'])






 
