console.log('Arrow Function')
let a=10
const b=()=>a*a
console.log(b())
const c=()=>10+10
console.log(c())

var obj={ 
    Company:'TCS',
    dee: function(){
        console.log(this.Company)
        aa=()=>{
            console.log('This is my company name '+this.Company)
        }
        
        aa()
    }
}

obj.dee()

const d=()=>a+40
console.log(d())
const f=(a,b)=>a*b
console.log(f(50,3))
var e = b =>b+200
console.log(e(10))
var h=()=>{
    console.log('In function')
    return 20+30
}

console.log(h())

var abc=()=>22+44
console.log(abc())
