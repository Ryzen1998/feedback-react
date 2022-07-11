import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid'

const feedbackContext =createContext('');

export const feedbackProvider =({children})=>{
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [feedback,setFeedback]=useState([{
        id:1,
        text:'This is a review',
        rating:10
    }])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false,
    })

    const addFeedback=(newFeedback)=>{

        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback])
    }


    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })

    }

    const updateFeedback=(id,updatedItem)=>{
       setFeedback(feedback.map((item)=>(item.id===id?{...item,...updatedItem}:item)

        
       ))

    }
    const deleteFeedback=(id)=>{
        if(window.confirm('are you sure you want to delete?')){
         setFeedback(feedback.filter((item)=>item.id!==id))
      
        }
 
     };

    return <feedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
        {children}
    </feedbackContext.Provider>

}
export default feedbackContext