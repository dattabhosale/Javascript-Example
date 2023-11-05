console.log('Hello World')
//sprade operator
var a='Hello World'
var b=[...a]
console.log(b)
var c=['Datta','Bhosale']
var d=['Mahesh','Survase']
var e=[...c,...d]
console.log('Print E variable '+e)
var f=['Mr',...c]
console.log('Print f variable adding value '+f)
var g=[...d,'abc']
console.log('Print e variable value :'+g)
var obj1={Name:'Suraj',age:24}
var obj2={Name:'Amol',age:22}
var h={...obj1,...obj2}
console.log('Print object value :'+h)
var i=[...c]
console.log('Print copy of array :'+i)
console.log('destructure array and object')
var arr=['abc','xyz']
var[aa,bb]=arr
console.log('Value of aa is :'+aa+' value of bb is :'+bb)
var obj3={Name:'Divyansh',age:23}
var{Name,age}=obj3
console.log('Value of Name is :'+Name+' value of age is :'+age)
console.log(`Hi may name is ${a}`)
console.log(`hello how are you ${c}`)
let cc=12345
console.log(`salesforce id is ${cc}`)
let n='Rahul'
console.log(`My name is ${n} and my age is ${age}`)