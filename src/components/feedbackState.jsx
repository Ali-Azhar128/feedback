import { React, useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackState() {
  const {feedback} = useContext(FeedbackContext)
    var average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length
  return (
    <div className='feedbackReviews'>
        <h4>{feedback.length} reviews</h4>
        <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackState