import React from 'react'

function Home({str}) {
  return (
    // <div>
    //     <h1 className='text-4xl text-amber-900'> Home Page</h1>
    //     <p>{str}</p>
      
    // </div>
    <div>
    <h1 className="text-4xl text-blue-950 text-center">course=react</h1>
    <p className='text-center text-2xl pt-5 text-indigo-500'>{str}</p>
    </div>

  )
}

export default Home

