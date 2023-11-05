console.log('Hello World')
let a=10,b=20
console.log(`addition of ${a} and ${b} is :${a+b}`)
//sprade operator
var c='ASUS vivobook'
var arr=[...c]
console.log(arr)
var d=['Amazon','Flipkart']
var e=['Walmart','Dmart']
var arr1=[...d,...e]
console.log(arr1)
var f='Datta`s'
var arr2=[f,...c]
console.log('Value of arr2 is :'+arr2)
var arr3=[...c,f]
console.log('value of arr3 is :'+arr3)
var arr4=[...e,'Ebay']
console.log('value of arr4 is :'+arr4)
var obj1={Name:'Suraj',Age:22,Empid:1234}
var obj2={Name:'Amol',Age:23,Empid:4321}
var obj3={...obj1,...obj2}
console.log(obj3)
var obj4={...obj1,Address:'Pune'}
console.log(obj4)
var Name='Mahesh'
var Surname='Survase'
console.log(`My Name is ${Name} and Surname is ${Surname}`)
let id=123456
console.log(`My Name is ${Name+" "+Surname} and Emp ID is ${id}`)
//destructure array and object
var arr5=['Salesforce','SAP','Tablue']
let[aa,bb,cc]=arr5
console.log(`value of aa is ${aa},value of bb is ${bb} and value of cc is ${cc}`)
var obj5={Add:'Pune',ID:3212,Salary:40000,Age:22}
var{Add,ID,Salary}=obj5
console.log(`Value of Add is ${Add}, value of ID is ${ID} and value of Salary is ${Salary}`)

//string methods
var str='Hello how are you'
console.log(str.includes('how'))
var str1='are'
console.log(str.includes(str1))
console.log(str.includes('hello'))
console.log(str.indexOf('o'))
console.log(str.slice(0,7))
var str2='   how are you   '
console.log(str2)
console.log(str2.trim())
console.log(str.startsWith('Hello'))
console.log(str.startsWith('are'))
var str3='SaleSforCE Crm'
console.log(str3.toLocaleLowerCase())
let str4=str.toUpperCase()
console.log(str4)

//json method
var obj6={
    Name:'Salesforce',
    Age:22,
    Address:'USA'
}

console.log(Object.keys(obj6))
console.log(Object.values(obj6))
var obj7=JSON.stringify(obj6)
console.log(obj7)
console.log(JSON.parse(obj7))