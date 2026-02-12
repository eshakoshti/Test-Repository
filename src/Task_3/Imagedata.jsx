import React from 'react'

function Imagedata() {
    const products = [{id:1,price:"40000",title:"VM",category:"Television",image:"src/Task_3/Product/t2.png"},
        {id:2,price:"30000",title:"Samsung",category:"Television",image:"src/Task_3/Product/tv1.png"},
        {id:3,price:"45000",title:"Philips",category:"Television",image:"src/Task_3/Product/t4.png"},
        {id:4,price:"34000",title:"Vivo",category:"Mobile",image:"src/Task_3/Product/vivo.png"},
        {id:5,price:"30000",title:"Samsung",category:"Mobile",image:"src/Task_3/Product/s1.png"},
        {id:6,price:"30000",title:"Realme",category:"Mobile",image:"src/Task_3/Product/realme.png"},
        {id:7,price:"50000",title:"Lloyd",category:"Air conditioner",image:"src/Task_3/Product/a4.png"},
        {id:8,price:"37000",title:"LG",category:"Air conditioner",image:"src/Task_3/Product/a2.png"},
        {id:9,price:"55000",title:"Voltas",category:"Air conditioner",image:"src/Task_3/Product/a3.png"},


    ]
    
    const Tv=products.filter((product)=>product.category==='Television')
    const Mobile=products.filter((product)=>product.category==='Mobile')
    const Ac=products.filter((product)=>product.category==='Air conditioner')

  return (
   <>
   <div className='text-center text-5xl font-bold m-10'>Television</div>
    <div className='grid sm:grid-col-1 md:grid-cols-3 m-4 gap-7'>
   {
    Tv.map((product)=><div className='text-center' >
         <div className="m-10 h-fit w-fit"><img src={product.image}></img></div>
        <div className="font-bold text-2xl">{product.title}</div>
        <div>{product.category}</div>
        <div>&#8377;{product.price}</div>
        
        
        </div>
   )}
       
    </div>
    <div className='text-center text-5xl font-bold m-10'>Mobile</div>
    <div className='grid sm:grid-col-1 md:grid-cols-3 m-4 gap-7'>
   {
    Mobile.map((product)=><div className='text-center' >
         <div className="m-10 h-fit w-fit"><img src={product.image}></img></div>
        <div className="font-bold text-2xl">{product.title}</div>
        <div>{product.category}</div>
        <div>&#8377;{product.price}</div>
        
        
        </div>
   )}
       
    </div>
    <div className='text-center text-5xl font-bold m-10'>Air Conditioner</div>
    <div className='grid sm:grid-col-1 md:grid-cols-3 m-4 gap-7'>
   {
    Ac.map((product)=><div className='text-center' >
         <div className="m-10 h-fit w-fit"><img src={product.image}></img></div>
        <div className="font-bold text-2xl">{product.title}</div>
        <div>{product.category}</div>
        <div>&#8377;{product.price}</div>
        
        
        </div>
   )}
       
    </div>
    </>
  )
  
}




export default Imagedata
