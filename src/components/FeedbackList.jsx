import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback,handleDelete}) {
    if(!feedback||feedback.length===0){
return(<p>No feedback yet</p>)
    }

  return (
    <div className='feedback-list'>
        {feedback.map((feedback,index)=>(
<FeedbackItem key={index} item={feedback.text} id={feedback.id} rating={feedback.rating} handleDelete={handleDelete}/>

        ))}
      
    </div>
  )
}

export default FeedbackList
