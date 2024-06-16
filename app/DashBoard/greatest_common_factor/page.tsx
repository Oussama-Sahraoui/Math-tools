'use client';
import {useState} from 'react'

export default function Page() {
  let [input,setInput]=useState("")
  let [answer,setAnswer]=useState()
  function handleClick(){
    let chars=[]
    let nums=[]
    let actual_nums=[]
    let arr = input.split('');
   arr.map((item) => {
   if (item === " ") {
     console.log(chars)
     nums.push(chars);
     chars=[]
   } else {
    chars.push(item);
    }
   });
    console.log(chars)
    nums.push(chars);
    console.log(nums)
    nums.map((item)=>{
      actual_nums.push(item.join(''))
    })
    console.log(actual_nums)
    let ans=Math.min(...actual_nums)
    let cont=true

    while(cont&&ans>1){
      for(let i=0;i<actual_nums.length;i++){
      if( parseInt(actual_nums[i])%ans!=0){
        ans--
        break
      }
      else if(i==actual_nums.length-1){
       
        cont=false
      }
    }
    }
    setAnswer(ans)
  }

  function handleChange(e){
      setInput(e.target.value)
  }
  return (
      <div className="flex flex-col items-center md:w-[30vw] sm:w-[40vw] lg:w-[25vw] w-[65vw] h-[20vh] border border-white">
        <p className="m-[1rem]">input your numbers</p>
        <input onChange={handleChange} className="text-black w-[90%] rounded outline-none" type="text" />
        <button onClick={handleClick} className="hover:bg-gray-500 transition duration-300 w-[90%] border border-white rounded mt-[1rem]">find greatest common factor</button>
        <p className="mt-[0.25rem]">{answer}</p>
      </div> 
  );
}
