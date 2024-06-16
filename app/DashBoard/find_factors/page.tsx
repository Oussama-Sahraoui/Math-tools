'use client';
import {useState,useEffect} from 'react'

export default function Page() {
  let [input,setInput]=useState(0)
  let [answer,setAnswer]=useState()
  function is_prime(num){

    
    for(let i=2;i<num;i++){
     

      console.log("i in prime func is ",i)
      if(num%i==0){
        console.log("returning",i)
        return i
      }
      
    }
        console.log("exiting")
  return -1
  }
  useEffect(() => {
    let neg
    let temp
    if(input<0){
     temp=input*-1
     neg=true
    }
    
else {
    temp=input
     }
    let arr=[]
    let div
    console.log(input)
    let safe_fuse=0
    while(safe_fuse<1000){
      safe_fuse++

    div=is_prime(temp)
    if(div==-1){
      break
    }
  
    arr.push(div)
    temp=temp/div


    

   }
   if (neg==true){
    temp*=-1
   }
      arr.push(temp)
   

   console.log(arr)

   setAnswer(arr.toString())
  }, [input] );
   

  function handleChange(e){
      if(e.target.value!=0){
      setInput(e.target.value)
    }
  }
  return (
      <div className="flex flex-col items-center md:w-[30vw] sm:w-[40vw] lg:w-[25vw] w-[65vw] h-[20vh] border border-white">
        <p className="m-[1rem]">input your number</p>
        <input onChange={handleChange} className="text-black w-[90%] rounded outline-none" type="number" />
         <p className="mt-[0.25rem]">the factors of the number are:</p>
        <p className="mt-[0.25rem]">{answer}</p>
      </div> 
  );
}
