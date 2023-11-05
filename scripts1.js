console.log("Hello World")
var a=null
console.log(a)
var b
console.log(b)
console.log(typeof a)
console.log(typeof b)

function abc(){
    a=10,b=20
    var c=a+b
    console.log(c)
}

abc()
//sprade operater
//expanding 
var aa="Hello Everyone"
var arr=[...aa]
console.log(arr)
//combining array
var arr1=['Amazon','Flipkart','B']
var arr2=['Apple','Samsung','X']
var arr3=[...arr1,...arr2]
console.log(arr3)
//adding value in array using sprade operator
console.log(arr1)
var arr4=[...arr1,'Microsoft']
console.log(arr4)
arr4=['Tesla',...arr1]
console.log(arr4)
//sprade operator combining operator
var obj1={Name:"suraj",age:24,company:'data'}
var obj2={Name:'Mahesh',age:25}
console.log(obj1)
console.log(obj2)
var obj3={...obj1,...obj2}
console.log(obj3)
//shallo copy

var arr5=[1,2,3]
var arr6=arr5
console.log(arr5)
console.log(arr6)
arr6.push(4)
console.log(arr5)
console.log(arr6)
var arr7=[...arr5] //copy using sprade 
arr7.push(5)
console.log(arr5)
console.log(arr7)