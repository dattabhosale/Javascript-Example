console.log('Hello World');
numarr=[10,40,90,50,20]
str= 'How Are You'
console.log(str)
console.log(numarr)

val1=numarr.reduce(function(total,item){
    return total+=item
})

vals = numarr.reduce(function(t,it){
    return t+it
})
console.log('New array : '+vals)

valmap = numarr.map(function(item){
    return item*2
})
console.log(`val of map is : ${valmap}`)

valnewMap= valmap.map((lable)=>lable*2)
console.log(`arrow function ${valnewMap}`)
/*
console.log(val1)
val2 = numarr.reduce((t,i)=>t+=i)
console.log('Value of arr 2 is :'+val2)
val3 = numarr.filter(function(item,i){
    return i
})
console.log(val3)
val4= numarr.some(function(item){
    return item<10
})

console.log('Some function :'+val4)
val5 = numarr.some(tot=>tot>40)
console.log('Value of Val5 is :'+val5)

val6 = numarr.every(function(item){
    return item>10
})

console.log(val6)

val7= numarr.every(tot=>tot>9)
console.log(val7)
obj={
    Course:'Salesforce',
    Dat:'1098'
}
var {Course,Dat}=obj
console.log(Course)
console.log(Dat)
*/
