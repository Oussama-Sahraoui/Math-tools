'use client';
import {useState,useEffect} from 'react'
import Link from 'next/link';
export default function page() {
 let copy=[]
 let [arr,setArr]=useState([])
 let [Q,setQ]=useState("")
  let data=[
    {
      name:"greatest common factor",
      link:"/DashBoard/greatest_common_factor"
    },
    {
      name:"first degree equation",
      link:"/DashBoard/first_degree_equation"
    },
      {
      name:"find factors of a number",
      link:"/DashBoard/find_factors"
    },
      {
      name:"simplify square root",
      link:"/DashBoard/simplify_square_root"
    },
  
  ]

  function handleChange(e){
  
  setQ(e.target.value)
  }
  useEffect(() => {



    copy=[...data]
    setArr([])
  setArr(copy.map((item)=>{


    if (item.name.includes(Q))
    {return <div className="flex w-[90%]  justify-between mb-[0.5rem]"><p className="w-[60%]">{item.name}</p><Link className="hover:bg-gray-500 transition duration-300 flex h-[1.5em] justify-center items-center w-[20%] border border-white rounded " href={item.link}>go to</Link></div>
 } else {return <div></div>}
   }))

 
  }, [Q]); 



  return (
    <main className="text-white h-screen w-screen bg-gray-800 flex items-center justify-center p-[1rem] ">
      
      <div className="flex flex-col items-center w-[80vw] h-[25vh] md:w-[60vw] sm:w-[60vw] lg:w-[37vw] border border-white overflow-auto p-[1rem]">
       <p>Search for a tool</p>
      <input onChange={handleChange} className="text-black w-[90%] rounded outline-none" type="text" />
       <div className="flex flex-col items-center mt-[0.5rem] w-[100%]">
       {arr}
       </div>
      </div>
    </main>
  );
}