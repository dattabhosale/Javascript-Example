console.log('Hello World')
var arr=['Amazon','Salesforce','Walmart']
var num=[20,50,30,10,40]
var num1=[70,50,80,10,40]
var str='Hello everyonE'
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(8))
console.log(str.indexOf('l'))
console.log(str.slice(0,4))
console.log(str.trim())

var arr1=['Flipkart',...arr]
console.log(arr1)
var arr2=[...arr,'Apple']
console.log(arr2)

var arr3=num.reduce(function(total,item){
    return total+item
},10)
console.log(arr3)
var arr4=num.reduce((tot,it)=>tot+it)
console.log(arr4)
var arr5=num.every(function(item){
    return item>1
})
console.log(arr5)
var arr6=num.every(item=>item>20)
console.log(arr6)
var arr7=num.some(function(item){
    return item>50
})
console.log(arr7)
var arr8=num.some(item=>item>10)
console.log(arr8)
var arr9=num.sort(function(a,b){
    return b-a
})
console.log(arr9)
var arr10=num.sort((a,b)=>a-b)
console.log(arr10)

num1.forEach(function(item){
    console.log(item)
})
num1.forEach(item=>console.log(item))

var a=10,b=20
console.log(`value of a is ${a} and b is ${b} addition :${a+b}`)
obj1={
    course:'ABC',
    price:450
}

var {course,price}=obj1
console.log(`Value of course ${course} and value of price is ${price}`)
var[a,b,c]=arr
console.log(a +" "+b+" "+c)