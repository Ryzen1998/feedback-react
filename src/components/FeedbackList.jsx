import {React,useContext} from 'react'
import FeedbackItem from './FeedbackItem'
import {motion,AnimatePresence} from 'framer-motion'

import feedbackContext from '../context/Context'

function FeedbackList({handleDelete}) {
  
  const {feedback}=useContext(feedbackContext)


    if(!feedback||feedback.length===0){
return(<p>No feedback yet</p>)
    }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((feedback,index)=>(
          <motion.div key={index} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
<FeedbackItem key={index} item={feedback.text} id={feedback.id} rating={feedback.rating} handleDelete={handleDelete}/>
</motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
