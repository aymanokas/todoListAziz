import React, { useState,useRef } from 'react'
import './Quiz.css'
import {data} from '../src/data'
function Todolist() {
  let [index ,setindex]=useState(0);
  let [Guestion , setquestion]=useState(data[index]);
  let [answr,setanswr]=useState(false);
  
  const option1=useRef(null);
  const option2=useRef(null);
  const option3=useRef(null);
  const option4=useRef(null);
  var correctarray=[option1,option2,option3,option4];

  const chekans =(e :any,ans :number)=>{
      if (answr==false){
        if (Guestion.ans===ans){
          e.target.classList.add('correct');
          setanswr(true)
         }
         else{
          e.target.classList.add('worng');
          setanswr(true);
           //@ts-ignore
          correctarray[Guestion.ans-1].current.classList.add('correct');
         }
      }
   }
  return (
  
    <div className='container'>
       <h1>Quiz application</h1>
       <hr/>
       <h2>{index + 1}.{Guestion.Question} !
       </h2>
       <ul>
         <li ref={option1} onClick={(e)=>{chekans(e,1)}}>{Guestion.option1} </li>
         <li ref={option2} onClick={(e)=>{chekans(e,2)}}>{Guestion.option2}</li>
         <li ref={option3} onClick={(e)=>{chekans(e,3)}}>{Guestion.option3}</li>
         <li ref={option4} onClick={(e)=>{chekans(e,4)}}>{Guestion.option4}</li>

       </ul>
       <button>Next</button>
       <div className='index'> 1  of 5 questions</div>

          
    </div>
  
  )
}

export default Todolist;
