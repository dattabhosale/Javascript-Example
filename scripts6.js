import mul,{pi,add} from './script6'
let element = document.querySelector('div')
console.log(element)
let allelement = document.querySelectorAll('div')
console.log(allelement)



console.log('Hello world')
//array function
var arr=[10,20,30,40]
//map function
var narr=arr.map(function(curruntitem){
    return curruntitem*2
})
console.log(`array value using map function ${narr}`)
//filter function
var arr1=[23,45,67,89,12]
var narr1=arr1.filter(function(curruntitem){
    return curruntitem>45
})
console.log('array value using filter function :'+narr1)
//every function
var arr2=[23,12,43,65,87,98]
var narr2=arr2.every(function(curruntitem){
    return curruntitem>10
})
console.log(`array value using every function : ${narr2}`)
//some function
var newarr2=arr2.some(function(curruntitem){
    return curruntitem>34
})
console.log(`array value using some function : ${newarr2}`)
//sort function
var stringarray=['suraj','ram','divyansh','mahesh']
console.log(`array value using sort function on string ${stringarray.sort()}`)
var arr3=[89,45,67,32,12,76]
var narr3=arr3.sort(function(a,b){
    return b-a
})
console.log(`array sort using sort function decending order : ${narr3}`)
//reduce function
var arr4=[20,30,40,50]
var narr4=arr4.reduce(function(total,curruntitem){
    return total+curruntitem
},0)
console.log(`calclute value arr4 using reduce functionn ${narr4}`)
//foreach function
var arr5=[45,5,67,89,12,34]
arr5.forEach(function(curruntitem){
    console.log('value print using foreach function : '+curruntitem)
})

//string function
//includes
var ar=['Hello','How','Are','you']
console.log(ar.includes('Hello'))
console.log(ar.includes('how'))
//startwith
var ar1='     how are you    '
var ar2=ar1.trim()
console.log(ar2)
console.log(ar.indexOf('Are'))
console.log(ar.indexOf('E'))
let a='HoW aRe YoU'
console.log(a.toLocaleLowerCase())
console.log(a.toUpperCase())
console.log(a.startsWith('aRe'))
console.log(a.startsWith('H'))
var abc=a.split()
console.log(abc)
console.log(a.slice(0,5))

var obj1={name:'Dee',Age:23}
console.log(Object.keys(obj1))
console.log(Object.values(obj1))
var obj2=JSON.stringify(obj1)
console.log(obj2)
console.log(JSON.parse(obj2))

//importing function and variable

console.log(pi)
console.log(add(10,20))
console.log(mul(2,4))
//query selecter
