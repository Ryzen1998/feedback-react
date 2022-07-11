import {React,useContext} from 'react'
import Card from './shared/Card'
import {FaTimes,FaEdit } from 'react-icons/fa'
import feedbackContext from '../context/Context'



function FeedbackItem(props) {
  
  const {deleteFeedback,editFeedback}=useContext(feedbackContext)
  return (
    <Card reverse={false}>
        <div className="num-display">{props.rating}</div>
        <button className='close' onClick={()=>deleteFeedback(props.id)} ><FaTimes color='purple' /></button>
        <button className='edit' onClick={()=>editFeedback(props)}><FaEdit color='purple'></FaEdit></button>
        <div className="text-display">{props.item}</div>

      
    </Card>
  )
}

export default FeedbackItem
