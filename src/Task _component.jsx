function Task_component(props) {
  return (
    
    <div className="flex flex-col justify-between border border-gray-900 bg-white m-3 rounded-4xl  ">
       <div className="text-xl md:text-2xl font-bold text-center p-4 ">
           {props.heading}
        </div>

       <div className="p-4 text-sm sm:text-base justify-center text-center">
            {props.content}
       </div>

       <div className="m-4 items-center justify-center text-center  ">
            <button className=" shadow-xl bg-gray-700 hover:bg-gray-400 hover:text-gray-900 text-white font-bold p-3 rounded-2xl ">Apply Now</button>
       </div>

    </div>
  )
}

export default Task_component
