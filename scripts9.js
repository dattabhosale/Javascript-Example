console.log('hello world')
var str='Hello everyone'
console.log(str.toLocaleLowerCase())
console.log(str.toUpperCase())
console.log(str.slice(0,7))
console.log(str.startsWith('H'))
console.log(str.startsWith('e'))
console.log(str.indexOf('v'))
console.log(str.includes('every'))
var str1='    hello    '
console.log(str1.trim())
var array=['Salesforce','Walmart','Amazon']
var[a,b,c]=array
console.log(`value of a is ${a} value of b is ${b} and value of c is ${c}`)
var obj1={Age:22,Add:'Pune'}
var{Age,Add}=obj1
console.log(`value of aa is ${Age} and value of b is ${Add}`)
var arr1=['Hello','How','Are']
var arr2=[...arr1,'you']
console.log(arr2)
var arr3=[...str]
console.log(arr3)
var arr4=['Hi',...arr1]
console.log(arr4)
var obj2={...obj1,Name:"Salesforce"}
console.log(obj2)
var obj4={Name:'Amazon',}
var obj3={...obj1,...obj2}
console.log(obj3)
var num=[30,40,20,10,50]
var n1=num.map(function(curruntitem){
    return curruntitem*2
})
console.log(n1)
var n2=num.map((curruntitem)=>curruntitem*3)
console.log(n2)
var n3=num.every(function(curruntitem){
    return curruntitem>=10
})
console.log(n3)
var n4=num.every((item)=>item>10)
console.log(n4)
var n5=num.some(function(b){
    return b>100
})
console.log(n5)
var n6=num.some((i)=>i>20)
console.log(n6)
var n7=num.sort(function(a,b){
    return b-a
})
console.log(n7)
var n8=num.sort((c,d)=>c-d)
console.log(n8)
var n9=num.reduce(function(total,item){
    return total+item
},0)
console.log(n9)
var n10=num.reduce((a,b)=>a+b,10)
console.log(n10)
var n11=num.forEach(element => {
    console.log(element)
});
x=10,y=20
a=()=>x+y
console.log(a())
