'use client';
import {useState,useEffect} from 'react'

export default function Page() {
  let [input,setInput]=useState(0)
  let [answer_outside,setAnswerOutside]=useState()
  let [answer_inside,setAnswerInside]=useState()

  function is_prime(num){

    
    for(let i=2;i<num;i++){
     


      if(num%i==0){

        return i
      }
      
    }

  return -1
  }
  useEffect(() => {
    let temp
    temp=input
    let arr=[]
    let div
    
    while(true){
      

    div=is_prime(temp)
    if(div==-1){
      break
    }
  
    arr.push(div)
    temp=temp/div
   }

  let outside_sum=1
  let inside_sum=1
     arr.push(temp)
  
  const map = new Map();
  for(let i=0;i<arr.length;i++){
 
    if (!map.get(arr[i])){
    map.set(arr[i], 1);

  }

  else{
    map.set(arr[i],map.get(arr[i])+1)
  }

  }
    console.log(map)
  for(let i=0;i<arr.length;i++){
 while(map.get(arr[i])>=2){
   outside_sum*=arr[i]
   map.set(arr[i],map.get(arr[i])-2)  
  console.log("outside vals",outside_sum)
 }

  }
map.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
    if(value!=0){
    inside_sum*=key}
});
   if (outside_sum==1){
    outside_sum=""
   }
   if (inside_sum==1){
    inside_sum=""
   }
   setAnswerOutside (outside_sum)
  setAnswerInside (inside_sum)
  }, [input] );
   
  function handleChange(e){
      if(e.target.value!=0){
      setInput(e.target.value)
    }
  }
  return (
      <div className="flex flex-col items-center md:w-[30vw] sm:w-[40vw] lg:w-[25vw] w-[65vw] h-[20vh] border border-white">
        <p className="m-[1rem]">input your SQRT</p>
        <div className="flex"><p>√</p><input onChange={handleChange} className="text-black w-[90%] rounded outline-none" type="number" /></div>
         <p className="mt-[0.25rem]">simplified SQRT is</p>
        <p className="mt-[0.25rem]">{answer_outside}{answer_inside ? "√" : ""}{answer_inside}</p>
      </div> 
  );
}
