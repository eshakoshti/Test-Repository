import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Home from './Home.jsx'
// import Task1 from './Task1.jsx'
 import Task2 from './task2/Task2.jsx'
//import Reusable from './task2/Reusable'
// import Task3 from './Task_3/Task3.jsx'
// import Imagedata from './Task_3/Imagedata.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from './Contact.jsx' 
// import Navbar from './Navbar.jsx' 
export const UserContext = createContext();
import Home from './Task4_Navigation/Pages/Home.jsx'
import Contact from './Task4_Navigation/Pages/Contact.jsx'
import About from './Task4_Navigation/Pages/About.jsx'
import Profile from './Task4_Navigation/Pages/Profile.jsx'  
import Navigation from './Task4_Navigation/Navigation.jsx'              

function App() {
  //const [count, setCount] = useState(0)
  const str1="Hello, Everyone! Welcome to my React App.";
  return (
    <>
    {/* <Router> 
        <Navbar /> 
          <UserContext.Provider value={{str1}}>
        <Routes> 
          <Route path="/" element={<Task2 />} /> 
          {/* <Route path="/menu" element={<Menu />} /> 
          <Route path="/contact" element={<Contact />} />  */}
          {/* <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} /> 
        </Routes> 
          </UserContext.Provider>
      </Router>  */} 

      <div className="App">  
      <Router> 
        <Navigation />
        <UserContext.Provider value={{str1}}>

        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/navigation" element={<Navigation />} /> 
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} /> 
        </Routes> 
        </UserContext.Provider> 
      </Router> 
    </div>
  


      {/* <Task1 /> */}
      {/* <Task2/> */}
       
      {/* <Task3/> */}
       {/* <Imagedata/>  */}
      {/* <Reusable /> */}
        {/* <Home str="Welcome to my React App!" /> */}
        

      {/* <div className="bg-blue-900 mt-40 w-110 mx-auto pb-1 rounded-2xl">
        <div className="text-white text-4xl   text-center justify-center pt-8 ">
          Calculator
        </div>
        <div className='grid grid-cols-1 items-center m-3'>
          <input type="text" placeholder='0' id="input" className="mt-7 pr-5 h-17 text-right text-2xl rounded-xl bg-white" />
        </div>
        <div className="grid grid-cols-4 gap-2 m-4">
          <button onClick={() => {document.getElementById("input").value += "7"}} className="bg-white  hover:bg-gray-400 text-black p-2">7</button>
          <button onClick={() => {document.getElementById("input").value += "8"}} className="bg-white  hover:bg-gray-400 text-black p-2">8</button>
          <button onClick={() => {document.getElementById("input").value += "9"}} className="bg-white  hover:bg-gray-400 text-black p-2">9</button>
          <button onClick={() => {
            const ans=document.getElementById("input");
            input.value=eval(ans.value);
            }} className="bg-white  hover:bg-gray-400 text-black p-2">=</button>
          <button onClick={() => {document.getElementById("input").value += "4"}} className="bg-white hover:bg-gray-400 text-black p-2">4</button>
          <button onClick={() => {document.getElementById("input").value += "5"}} className="bg-white hover:bg-gray-400 text-black p-2">5</button>
          <button onClick={() => {document.getElementById("input").value += "6"}} className="bg-white hover:bg-gray-400 text-black p-2">6</button>
          <button onClick={() => {document.getElementById("input").value += "+"}} className="bg-white hover:bg-gray-400 text-black p-2 ">+</button>
          <button onClick={() => {document.getElementById("input").value += "1"}} className="bg-white hover:bg-gray-400 text-black p-2">1</button>
          <button onClick={() => {document.getElementById("input").value += "2"}} className="bg-white hover:bg-gray-400 text-black p-2">2</button>
          <button onClick={() => {document.getElementById("input").value += "3"}} className="bg-white hover:bg-gray-400 text-black p-2">3</button>
          <button onClick={() => {document.getElementById("input").value += "-"}} className="bg-white hover:bg-gray-400 text-black p-2 ">-</button>
          <button onClick={() => {document.getElementById("input").value += "."}} className="bg-white hover:bg-gray-400 text-black p-2 ">.</button>
          <button onClick={() => {document.getElementById("input").value += "%"}} className="bg-white hover:bg-gray-400 text-black p-2 ">%</button>
          <button onClick={() => {document.getElementById("input").value += "/"}} className="bg-white hover:bg-gray-400 text-black p-2 ">/</button>
          <button onClick={() => {document.getElementById("input").value += "*"}} className="bg-white hover:bg-gray-400 text-black p-2">*</button>
          <button onClick={() => {document.getElementById("input").value += "0"}} className="bg-white hover:bg-gray-400 text-black p-2 col-span-2">0</button>
          <button onClick={() => {document.getElementById("input").value = ""}} className="bg-orange-400 text-white p-2  hover:bg-gray-400 col-span-2">A/C</button>
          
          
        </div>

      </div> */}
    </>
  )
}

export  {App}
