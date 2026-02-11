import React from 'react'
function Reusable_component(props) {
  return (
    <>
    <div className='flex flex-col justify-center'>
        <div>{ <img src={props.src} alt="Image" />}</div>
     
    
    <div className='text-center mt-10 text-lg font-semibold text-gray-800'>
        {props.heading}
    </div>
    <div className='text-green-600 text-center'>
        {props.sellprice}
    </div>
    <div className='text-center'><span className='text-center font-bold text-black'>{props.price}</span>&nbsp;&nbsp;
        <span className='line-through text-gray-500 text-center'>{props.mrp}</span>
    </div >
        
    </div>
    
    </>
  )
}

export default Reusable_component
