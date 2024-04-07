// let tav = {
//     firstName:"Tavish",
//     lastName:"anade",
//     age:20,
//     displayName(){
//         console.log(`${this.firstName} ${this.lastName}`)

//         let displayName2 = function(){
//             console.log(`${this.firstName}  ${this.lastName}`)  // no scope for this  so it will refer to the window object
//         }
//         displayName2()


//     }
// }
// tav.displayName()


let tav = {
    firstName:"Tavish",
    lastName:"anade",
    age:20,
    displayName(){
        console.log(`${this.firstName} ${this.lastName}`)

        let displayName2 = ()=>{
            console.log(`${this.firstName}  ${this.lastName}`)  // no scope for this  so it will refer to the window object
        }
        displayName2()


    }
}
tav.displayName()
