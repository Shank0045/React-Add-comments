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
   
   if(val===" " || val===""){
     alert("Add something ");
     return;
   }



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
  
    <div className="w-full min-h-[100vh] flex items-center justify-center flex-col relative bg-black text-white  "> 
    
     <h1 className="text-5xl capitalize  font-[700] ">Instagram Post</h1>


    <h2 className="uppercase  mt-[30px] text-2xl font-[500]"> posted by ufc </h2>
    <p className="uppercase  mt-[30px] text-2xl font-[500]">Tony el Cucuy Ferguson 🐉 </p>
     <img src="tony.avif" className="w-[800px] border-[10px] rounded-[50px] mt-[50px] h-[400px] " alt="tony" />

     <h1 className=" text-4xl font-[900] underline py-[50px] text-center">ADD COMMENTS  </h1>


     { comments.map((item,index)=>{
         return ( <div className="flex items-center flex-col justify-center" key={index}> <div  className=" w-[800px] h-[50px] rounded-[50px] flex items-center justify-between bg-gray-300 text-black text-2xl m-8  "> {item.text}  <button onClick={()=>{
           addReplay(index)
         }} className="w-[100px] h-[50px] rounded-[50px]  bg-black text-white text-l">Reply</button> </div> 

         {item.replay && <div> {item.replay.map((item,index)=>{
           return <div className="bg-white w-[300px] h-[50px] flex my-[20px] items-center justify-center text-black rounded-[50px]"  key={index}> <span className="text-l underline font-[800]">Sub Comment</span>  :    {item}</div>
         })}</div> }

           {item.isreplay && <form onSubmit={(e)=>{
             subReplay(e,index)
           }}  > <input ref={repVal} type="text" className="w-[400px] h-[7vh] bg-white text-black rounded-[50px] "  /> <button className="w-[100px] h-[7vh] rounded-[50px] bg-gray-700 my-[50px] text-white text-[13px]" >Add Reply</button> </form> } </div>  )
     })}
 




  <form  onSubmit={(e)=>{
     addComment(e)
  }} className="flex items-center sticky gap-[20px] justify-center" >
     <input ref={comtVal} type="text" className="w-[400px] h-[7vh] bg-white text-black rounded-[50px] "  /> <button className="w-[100px] h-[7vh] rounded-[50px] bg-gray-700 text-white text-[13px]" >ADD Comment </button>  </form>
    
        </div>

  )

};

export default App