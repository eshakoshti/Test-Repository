import React from 'react'
import Task2_commponent from './Task2_commponent'
// import nature from 'https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_wordcount_boost&w=740&q=80'
function Task2() {
  return (
    <>
    <div className=" border-2 m-20 bg-indigo-50">
        <div className="md:text-4xl sm:text-2xl text-xl text-center font-bold m-5 text-blue-800">
            Image Gallery
        </div>
        <div className="grid sm:grid-col-1 md:grid-cols-3 items-center justify-center  ">
            <Task2_commponent src="https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_wordcount_boost&w=740&q=80"  name="Nature"/>
            <Task2_commponent src="https://i0.wp.com/unusualplaces.org/wp-content/uploads/2021/05/AdobeStock_231891851-scaled.jpeg?ssl=1" name="Travel"/>
            <Task2_commponent src="https://animalimages.net/wp-content/gallery/chital-dear/Chital-Deer-008.jpg" name="Animal"/>

        </div>
        
    </div>
    </>
  )
}

export default Task2
