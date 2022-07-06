import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import {FaTimes } from 'react-icons/fa'


function FeedbackItem(props) {
  
  
  return (
    <Card reverse={false}>
        <div className="num-display">{props.rating}</div>
        <button className='close' onClick={()=>props.handleDelete(props.id)}><FaTimes color='purple' /></button>
        <div className="text-display">{props.item}</div>

      
    </Card>
  )
}

export default FeedbackItem
