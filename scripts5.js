console.log('Hello JS')

//array function

//map function
let arr=[1,2,3,4,5]
let newarr=arr.map(function(curruntitem,index,array){
    return curruntitem*2
})

console.log('arr value is :'+arr)
console.log('newarr value is :'+newarr)

//filter
let arr1=[10,20,30,40]
let newarr1=arr1.filter(function(curruntitem,index,array){
    return curruntitem>20
})

console.log(`arr1 values ${arr1} and newarr1 values ${newarr1}`)

//every function
var arr3=[2,3,4,5,6,7]
var newarr3=arr3.every(function(curruntitem){
    return curruntitem>2
})
console.log(`arr3 values ${arr3} and value of newarr3 ${newarr3}`)
var arr4=[23,45,67,89]
var newarr4=arr4.every(function(curruntitem){
    return curruntitem<100
})
console.log('every operator :'+newarr4)
//some function
var arr5=[12,34,56,78]
var newarr5=arr5.some(function(curruntitem){
    return curruntitem>34
})
console.log('Some operator :'+newarr5)

var newarr55=arr5.some(function(curruntitem){
    return curruntitem>78
})
console.log('some operator '+newarr55)
let arr6=[56,34,78,12,22]
//console.log('Number sort :'+arr6.sort())
let newarr6=arr6.sort(function(curruntitem,nextcurruntitem){
    return nextcurruntitem-curruntitem
})
console.log(newarr6)
let arr7=['Suraj','Divyansh','Arpit','Mahesh']
console.log(arr7.sort())
//reduce fuction
var arr8=[10,20,30,40]
var newarr8=arr8.reduce(function(total,a){
    return total+a
},0)
console.log(newarr8)

//foreach function
var arr9=[11,22,44,55,33,23]
arr9.forEach(function(curruntitem){
    console.log(curruntitem)
})