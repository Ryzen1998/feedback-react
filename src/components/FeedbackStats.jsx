import React from 'react';
import PropTypes from 'prop-types'


function FeedbackStats(props) {
  //calc avg rating
  let average = props.feedback.reduce((acc,cur)=>{
    return acc+cur.rating
  },0)/props.feedback.length

 average= average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
     <h4>{props.feedback.length} Reviews</h4>
     <h4>Average rating:{isNaN(average)?0:average}</h4>
    </div>
  )
}
FeedbackStats.prototypes={
  feedback:PropTypes.array.isRequired,
}

export default FeedbackStats
