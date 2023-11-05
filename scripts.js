console.log("1Hello")
var a="dee"
console.log(a)
function abc(x){
    var a="Datta"
    var d=x
    console.log(a)
    console.log(d)
}
abc('hello')
console.log(a)
if(2===2)
{
    var a='true'
    console.log(a)
}
console.log(a);

let b='how are you'
console.log(b)
if(true)
{
    console.log(b)
    let c='Ok'
    console.log(c)
}
function xyz(){
    let e='ABC'
    console.log(e)
}
xyz()
const f='Datta'
console.log(f)
if(true)
{
    const g='Mahesh'
    console.log(g)
}
//console.log(g)

//sprade operator
var a1='Hello World'
var arr=[...a1]
console.log(arr)
var b1=['Java','Python']
var c1=['Salesforce','Zoho']
var arr1=[...b1]
console.log(arr1)
var arr2=[...b1,...c1]
console.log(arr2)
var arr3=[...b1,'C++']
console.log(arr3)
var arr4=['CRM',...c1]
console.log(arr4)
alert('Refresh Tab')
var obj1={Name:'Dee',Company:'TCS',Id:1111}
var obj2={Name:'Mahesh',Company:'Wipro',ID:2222}
var obj3={...obj1,...obj2}
console.log(obj3)