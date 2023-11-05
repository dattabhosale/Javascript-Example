console.log('hello world')
var arr=[10,20,30,40,50]
var narr= arr.map(function(item){
    return item*2
})
console.log(narr)
//arrow function
var a=arr.map((aa)=>aa*3)
console.log(a)
//every function
var narr1=arr.every(function(curruntitem){
    return curruntitem>=10
})
console.log(narr1)
//every functiion using arrow
var arr1=arr.every(curruntitem=>curruntitem>=10)
console.log(arr1)
var i=3
const aa=()=>i*5
console.log(aa())
var bb=item=>item+20
console.log(bb(10))
var cc=(a,b,c)=>a*b*c
console.log(cc(10,10,10))
var dd=(a,b,c)=>{
    console.log(`addition of a and b is ${a+b}`)
    console.log(`subtraction of a and b is ${a-b}`)
    return a*b
}


console.log(dd(20,10))
//some function
var arr2=arr.some(function(curruntitem){
    return curruntitem>20
})
console.log(arr2)
//some function using arrow 
var narr2=arr.some(curruntitem=>curruntitem<10)
console.log(narr2)
//filter function
var arr3=arr.filter(function(item){
    return item>20
})
console.log(arr3)
//filter function using arrow
var narr3=arr.filter(item=>item>30)
console.log(narr3)
//reduce function
var arr4=arr.reduce(function(item,curruntitem){
    return item+curruntitem
},0)
console.log(arr4)
//reduce function using arrow
var narr4=arr.reduce((item,curruntitem)=>item+curruntitem,0)
console.log(narr4)
//sort fuction
var str=['suraj','mahesh','divansh','satish']
console.log(str.sort())
var num=[89,45,67,54,76,90]
var arr5=num.sort(function(a,b){
    return b-a
})
console.log(arr5)
//sort function using arrow
var nnum=num.sort((a,b)=>a-b)
console.log(nnum)

let ee=item=>item*5
console.log(ee(10))
//foreach function
arr.forEach(function(curruntitem){
    console.log(curruntitem)
})
//foreach function using arrow
arr.forEach(curruntitem=>console.log('arrow :'+curruntitem))
var aaa=document.querySelector('h1')
console.log(aaa.innerText)
let id=window.setTimeout(function(){
    console.log('Hello')
},1000)
console.log(id)
window.clearTimeout(id)
let id1=window.setInterval(function(){
    console.log('Interval function')
},1000)
console.log(id1)
window.clearInterval(id1)