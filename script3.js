//overloding and overcrouding 
// class calculator{
//     add(x,y){
//         console.log(x+y)

//     }
//     add(x,y,z){
//         console.log(x+y+z)

//     }
//     add(x,y,z,a){
//         console.log(x+y+z+a)

//     }
// }


// let b=new calculator()
// b.add(12,3)
// b.add(12,34,55,554)
// b.add(12,23,34)

// overriding
class worldbank{
    save(){
        console.log("Data saved")
    }
    lone(){
        console.log("i am lone")
    }
}

class sbi extends worldbank{
    lone(){
        console.log("lone from sbi")

    }
    save(){
        console.log("data saved in sbi")

    }
}

let ng=new sbi()
ng.save()
ng.lone()

//overloding
class calculator{
    add (x,y,z,w) {
        if(x != undefined && y != undefined && z !=undefined && w != undefined){
            return x + y + z + w
        }
        else if(x != undefined && y!=undefined && z!= undefined){
            return x+ y + z
        }
        else if(x != undefined && y!=undefined){
            return x + y
        }
    }
}

let a=new calculator()
console.log(a.add(10,20))
console.log(a.add(5,6,7))



