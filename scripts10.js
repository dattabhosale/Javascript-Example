console.log('HELLO WORLD')
var arr=[10,20,30,40]
console.log(arr)
var a=10,b=20
console.log(`addition of ${a} and ${b} is ${a+b}`)
var str='Hello Everyone'
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.startsWith('Hello'))
var str1='   hello eve   '
console.log(str1.trim())
console.log(str.slice(0,4))
var c=[...str]
console.log(c)
console.log(str.includes('every'))
console.log(str.indexOf('E'))
var arr1=arr.map(function(item){
    return item*2
})
console.log(arr1)
var arr2=arr.reduce(function(total,item){
    return total+item;
},10)
console.log(arr2)
var arr3=arr.reduce((tot,ite)=>tot=tot+ite,20)
console.log(arr3)
var arr4=arr.every(function(item){
    return item>=10
})
console.log(arr4)
var arr5=arr.every(item=>item>20)
console.log(arr5)
var arr6=arr.some(function(item){
    return item>20
})
console.log(arr6)
var arr7=arr.some(bb=>bb>5)
console.log(arr7)
arr.forEach(function(it){
    console.log(it)
})
arr.forEach(i=>console.log(i))
var arr8=arr.sort(function(a,b){
    return b-a
})
console.log(arr8)
var arr9=arr.sort((it,ti)=>ti-it)
console.log(arr9)