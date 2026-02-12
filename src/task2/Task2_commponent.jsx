import React from 'react'

function Task2_commponent(props) {
  return (
    <div className="flex flex-col items-center justify-center">
       <div className="m-10">
        <img src={props.src} alt={props.name}></img>
       </div>
       <div className="text-2xl  items-center justify-center m-1">
        {props.name}
       </div>
       <div className='bg-gray-400 text-2xl w-30 h-10 text-center items-center justify-center flex rounded-2xl text-black m-3'>
        <button className="w-full h-full">Explore</button>
       </div>
      
    </div>
  )
}

export default Task2_commponent
