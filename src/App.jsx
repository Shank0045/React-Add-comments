import REACT from "react";

import { useRef,useState,useEffect } from "react";

const App=()=>{
 
  const comtVal=useRef(null);

  const repVal=useRef(null)

const [comments,setComments]=useState([])  ;

useEffect(() => {

console.log(comments)

}, [comments])


let addComment=(e)=>{
   e.preventDefault();

   const val=comtVal.current.value


   setComments((pre)=>{
       return [...pre, {text:val,isreplay:false,replay:[]}]
   })

comtVal.current.value=" "

}

let addReplay=(index)=>{


  
  setComments((pre)=>{
     return pre.map((item,i)=>{
       return  i===index ? {...item,isreplay:!item.isreplay } : item
     })
  })



}

let subReplay=(e,index)=>{

  e.preventDefault();

  let rval=repVal.current.value

setComments((pre)=>{
 
   return pre.map((item,i)=>{
      return i===index ? { ...item , replay:[...item.replay,rval],isreplay:!item.isreplay }: item
   });
   
})



}

   
  return ( 
  
    <div className="w-full min-h-[50vh] bg-yellow-400 text-black  "> 
     <h1 className=" text-4xl font-[900] text-center">ADD COMMENTS  </h1>


     { comments.map((item,index)=>{
         return ( <div key={index}> <div  className=" w-[300px] h-[50px] flex items-center justify-between bg-pink-400 m-8  "> {item.text}  <button onClick={()=>{
           addReplay(index)
         }} className="w-[100px] h-[50px] rounded-[50px] bg-black text-white text-l">replay</button> </div> 

         {item.replay && <div> {item.replay.map((item,index)=>{
           return <div key={index}> {item}</div>
         })}</div> }

           {item.isreplay && <form onSubmit={(e)=>{
             subReplay(e,index)
           }}  > <input ref={repVal} type="text" className="w-[400px] h-[10vh] bg-red-800 rounded-[50px] "  /> <button className="w-[100px] h-[50px] rounded-[50px] bg-black text-white text-l">Add replay</button> </form> } </div>  )
     })}
 




  <form onSubmit={(e)=>{
     addComment(e)
  }} className="flex items-center justify-center" >
     <input ref={comtVal} type="text" className="w-[400px] h-[10vh] bg-red-800 rounded-[50px] "  /> <button className="w-[100px] h-[50px] rounded-[50px] bg-black text-white text-l" >ADD Comment </button>  </form>
    
        </div>

  )

};

export default App