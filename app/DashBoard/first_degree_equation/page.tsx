'use client';
import {useState} from 'react'

export default function Page() {
  let [input_1,setInput_1]=useState("")
  let [input_2,setInput_2]=useState("")
  let [answer,setAnswer]=useState("")





  function handleClick(){
   const algebra = require('algebra.js');
   const Equation = algebra.Equation;
   const expr = new Equation(algebra.parse(input_1), algebra.parse(input_2));
   const result = expr.solveFor("x");
   setAnswer(result.toString()); // Output: 2
  }

  function handleChange_1(e){
      setInput_1(e.target.value)
  }
  function handleChange_2(e){
      setInput_2(e.target.value)
  }
  return (
      <div className="flex flex-col items-center md:w-[30vw] sm:w-[40vw] lg:w-[25vw] w-[65vw] h-[20vh] border border-white">
        <p className="m-[1rem]">input both sides</p>
     <span className="flex w-[90%] justify-between"> <input onChange={handleChange_1} className="text-black w-[47%] rounded outline-none" type="text" />
        <p>=</p>
        <input onChange={handleChange_2} className="text-black w-[47%] rounded outline-none" type="text" /> </span>
        <button onClick={handleClick} className="hover:bg-gray-500 transition duration-300 w-[90%] border border-white rounded mt-[1rem]">find X</button>
        <p className="mt-[0.25rem]">{answer}</p>
      </div> 
  );
}