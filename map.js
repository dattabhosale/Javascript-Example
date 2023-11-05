arr=[
    {FirstName:'Mahesh',LastName:'Survase',Age:23},
    {FirstName:'Ram',LastName:'Karhale',Age:26},
    {FirstName:'Suraj',LastName:'Bargaje',Age:24},
    {FirstName:'Divyansh',LastName:'Paliwal',Age:31}

]

console.log(arr);

//output = arr.filter((curr)=>curr.Age<25).map(curr=>curr.FirstName+""+curr.LastName)
output = arr.reduce((acc,curr)=>{
    if(curr.Age<25){
        acc.push(curr.FirstName+" "+curr.LastName)
    }
    return acc
},[])

console.log(output);
