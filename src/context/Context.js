/* eslint-disable react-hooks/rules-of-hooks */
import { createContext,useState,useEffect } from "react";


const feedbackContext =createContext('');

export const feedbackProvider =({children})=>{
   
   
    const [feedback,setFeedback]=useState([])
    const [isLoading,setIsLoading]=useState(true)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false,
    })
    
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
fetchFeedback();
    },[])

    const fetchFeedback =async()=>{
        const response = await fetch('/feedback?feedback?_sort=id&_order=desc')
        const data =await response.json();
        setFeedback(data);
        setIsLoading(false)
    }

    const addFeedback=async (newFeedback)=>{
        const response=await fetch('/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newFeedback)

        })
        const data =await response.json()
        

       
        setFeedback([data,...feedback])
    }


    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })

    }

    const updateFeedback=async (id,updatedItem)=>{
        const response = await fetch(`/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',

            }, 
            body:JSON.stringify(updatedItem)
        })
        const data =await response.json();
       setFeedback(feedback.map((item)=>(item.id===id?{...item,...data}:item)

        
       ))

    }
    const deleteFeedback=async (id)=>{
        if(window.confirm('are you sure you want to delete?')){
            await fetch(`/feedback/${id}`,{method:'DELETE'})
         setFeedback(feedback.filter((item)=>item.id!==id))
      
        }
 
     };

    return <feedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
        {children}
    </feedbackContext.Provider>

}
export default feedbackContext