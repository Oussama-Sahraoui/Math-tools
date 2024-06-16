'use client';
import {useState} from 'react'

export default function Page() {
  let [input,setInput]=useState("")
  let [answer,setAnswer]=useState()
  function handleClick(){
   

    
    }

  function handleChange(e){
      setInput(e.target.value)
  }
  return (
      <div className="flex flex-col items-center md:w-[30vw] sm:w-[40vw] lg:w-[25vw] w-[65vw] h-[20vh] border border-white">
        <p className="m-[1rem]">input your operations</p>
        <input onChange={handleChange} className="text-black w-[90%] rounded outline-none" type="text" />
        <button onClick={handleClick} className="hover:bg-gray-500 transition duration-300 w-[90%] border border-white rounded mt-[1rem]">calculate</button>
        <p className="mt-[0.25rem]">{answer}</p>
      </div> 
  );
}
