import React from "react";
import { useState } from "react"
import image1 from './s1.png'
// import img2 from './realme.png'




function Increment() {
    const [count, setcount] = useState(0);
    
        const change = () => {
            setcount(count + 1);
        }
        const decrement = () => {
            if (count <= 0) {
                return setcount(0);
            }
    
            else {
                return setcount(count - 1);
            }
        };
function Event(){
    const click=(a)=>{
        alert(a);
    }
}
return (
    <>
    <div className="justify-items-center mx-150 my-40">
                <img src={image1}className="border-2 p-5 border-gray-500 h-80 w-70 " />
      
        <button onClick={()=>alert('Product Successfully Added')}className='bg-blue-800 p-2 m-5 text-amber-50 h-10 w-40 '>Add to Cart</button>
                            <button type='button' onClick={decrement} className="p-2 border-2 w-10  bg-black text-amber-50">-</button>
                            <span>{count}</span>
                            <button type='button' onClick={change} className="p-2 border-2  w-10 bg-black text-amber-50">+</button>
                      
        
        </div>

    </>
)
}
export default Increment
