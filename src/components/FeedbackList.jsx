import {React,useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'
import Spinner from './shared/Spinner'

import feedbackContext from '../context/Context'

function FeedbackList({handleDelete}) {
  
  const {feedback,isLoading}=useContext(feedbackContext)


    if(!isLoading && (!feedback||feedback.length===0)){
return(<p>No feedback yet</p>)
    }

    return isLoading?(<Spinner/>):(<div className='feedback-list'>
    <AnimatePresence>
      {feedback.map((feedback,index)=>(
        <motion.div key={index} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
<FeedbackItem key={index} item={feedback.text} id={feedback.id} rating={feedback.rating} />
</motion.div>

      ))}
    </AnimatePresence>
   
  </div>)
  
}

export default FeedbackList
