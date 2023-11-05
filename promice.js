/*new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('In Promise method');
        //resolve()
    },2000)
}).then(function(){
    console.log('In then Function');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Resolve Status');
        resolve()
    },1000)
}).then(function(){
    console.log('Resolve Problem');
}).catch(()=>console.log('reject problem'))

fetch('https://jsonplaceholder.typicode.com/users').then((responce)=>responce.json())
.then((responce)=>console.log(responce)).catch(()=>console.log('in catch'))
*/
async function abc(){
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

//abc()

const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];
  
  const aa = products.map((product) => {

    let obj={...product}
    obj.price = 100;
    return obj
  });
console.log('products ',products);  
console.log('products == ',aa);
const productsWithPrice = products.map((product) => {
    return { ...product, price: 100 };
  });

  console.log('productsWithPrice ',productsWithPrice);
  console.log('products ',products);

  let obj = [
    {
        bookName:'Sales',
        launchYear:2000,
        country:'US'
    },
    {
        bookName:'SAP',
        launchYear:2002,
        country:'UK'
    },
    {
        bookName:'Google',
        launchYear:1997,
        country:'US'
    },
    {
        bookName:'Oracle',
        launchYear:1980,
        country:'UK'
    }
  ]
  console.log('Object Data ',obj)

  let obj1 = obj.map(item=>{
    return {...item,price:200}
  })

  console.log('Obj1 Data ',obj1);

  let arr = obj.forEach(item=>{
    return {...item,Page:500}
  })

  console.log('arr ',arr)

  let obj2 = obj.map(item=>{
    return  item.bookName +' ' + item.country
  })
  console.log(obj2)