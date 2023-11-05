console.log('Hello world')
let a=item=>item*5
console.log(a(10))
var b=item=>item+10
console.log(b(10))
var array=[10,20,30,40,50]
var arr=array.sort((a,b)=>b-a)
console.log(arr)
var d=document.querySelector('h1')
console.log(d.innerText)
var c=document.querySelectorAll('div')
var st='He llo eve ryone@ gm ail.c om '
var ar=[...st]
console.log(ar)
var i=0
var bb=''
for(var i=0;i<ar.length;i++)
{
    if(ar[i]==' '){

    }
    else{
        bb=bb+ar[i]
    }
}
console.log(bb)

var z=[10,20,30,40]
var zz=z.map(item=>item+10)
console.log(zz)
var x=z.map(function(item){
    return item+40
})
console.log(x)