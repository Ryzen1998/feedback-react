import {React,useContext} from 'react';

import feedbackContext from '../context/Context'


function FeedbackStats() {
  const {feedback}=useContext(feedbackContext);
  //calc avg rating
  let average = feedback.reduce((acc,cur)=>{
    return acc+cur.rating
  },0)/feedback.length

 average= average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
     <h4>{feedback.length} Reviews</h4>
     <h4>Average rating:{isNaN(average)?0:average}</h4>
    </div>
  )
}
// eslint-disable-next-line react/no-typos


export default FeedbackStats
