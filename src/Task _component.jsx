function Task_component(props) {
  return (
    // <div className="  ">
    //   <h1 className="text-3xl ">Computer Engineering</h1>
    //   <p>Computer Engineering is a four-year undergraduate program introducing its student to realms of computer,includingthe theory and design of data </p>
    // </div>
    <div className="flex flex-col justify-between border border-gray-900 bg-white mt-5 rounded-4xl  ">
       <div className="text-2xl font-bold text-center p-4 ">
           {props.heading}
        </div>

       <div className="p-4 justify-center text-center">
            {props.content}
       </div>

       <div className="m-4 items-center justify-center text-center  ">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold p-2 rounded-2xl ">Apply Now</button>
       </div>

    </div>
  )
}

export default Task_component
