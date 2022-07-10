import { createContext,useState } from "react";

const feedbackContext =createContext('');

export const feedbackProvider =({children})=>{
   
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [feedback,setFeedback]=useState([{
        id:1,
        text:'This item is from context',
        rating:10
    }])
    return <feedbackContext.Provider value={{feedback}}>
        {children}
    </feedbackContext.Provider>

}
export default feedbackContext