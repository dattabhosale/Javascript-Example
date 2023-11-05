console.log('Hello world')
//destructure aray and object
var array=['Salesforce','Amazon','Apple']
var[a,b,c]=array
console.log(`value of a is ${a} , value of b is ${b} and value of c is ${c}`)
var obj={Name:'Datta',Age:23,loc:'Nagpur'}
var{Name,Age,loc}=obj
console.log(Name)
console.log(Age)
console.log(loc)
//object keys and values
console.log(Object.keys(obj))
console.log(Object.values(obj))
//stringyfy and parse method
var obj1=JSON.stringify(obj)
console.log(obj1)
var obj2=JSON.parse(obj1)
console.log(obj2)
//string methods
var str='Hello Everyone'
console.log(str.includes('ello'))
console.log(str.indexOf('E'))
console.log(str.slice(0,5))
var str1='    How are You    '
console.log(str1)
console.log(str1.trim())
console.log(str.startsWith('He'))
console.log(str1.startsWith(" "))
console.log(str.startsWith("Eve"))
console.log(str.toUpperCase())
console.log(str.toLowerCase())
//array method
//map
var arr=[2,3,4,5,6,7]
var narr=arr.map(function(curruntitem){
    return curruntitem*2
})
console.log(narr)
//every
var arr1=arr.every(function(curruntitem){
    return curruntitem>=2
})
console.log(arr1)
//some
var arr2=arr.some(function(curruntitem){
    return curruntitem>5
})
console.log(arr2)
//reduce
var arr3=arr.reduce(function(total,curruntitem){
    return total+curruntitem
},0)
console.log(arr3)
//sort
var arr12=['kiran','suraj','mahesh','divyansh']
console.log(arr12.sort())
var narr12=[54,34,12,98,90,56]
var arr4=narr12.sort(function(a,b){
    return b-a;
})
console.log(arr4)
//foreach 
arr.forEach(function(curruntitem){
    console.log(curruntitem)
})
//filter
var arr5=arr.filter(function(curruntitem){
    return curruntitem>6
})
console.log(arr5)
//spread opaerator
var aa=[...str]
console.log(aa)
var aa1=['Salesforce','Amazon']
var aa2=['Filpkart','Dmart']
console.log([...aa1,...aa2])
var obj5={Name:'ABC',Age:22,emp:1234}
var obj6={Name:'BAC',Age:23}
var obj7={...obj5,...obj6}
console.log(obj7)
var aa3=[...aa1]
console.log(aa3)
console.log([...aa1,'Microsoft'])
