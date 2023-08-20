import { v4 as uuidv4 } from 'uuid'
import React from 'react'
import Card from '../shared/card'
import {useState, useContext} from 'react'
import Button from '../shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackInput() {
 
  const {addItem, enableEdit, editItem} = useContext(FeedbackContext)
  const [rating, setRating] = useState(10);
  const [text, setText] = useState('')
  const [disabled, setDisabled] = useState(false)
  const handleChangeEvent = (e) => {
    setText(e.target.value)
    text.length < 10 ? setDisabled(true) : setDisabled(false)

   // console.log(submitVal)


    //console.log(setFunction())
  }
  
  const setFunction = () => {
    var disabledButton;
    disabledButton = text.length < 10 ? true : false;
 
    return disabledButton
  }
  const submitValue = (value) => {
   // console.log(value)
    setRating(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newFeedback = {
      text,
      rating
    }
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    addItem(newFeedback)

    setText('')
    
    //console.log(text)
    

  }

 
  

  
  return (
      <Card>
        {
          enableEdit?
      <form onSubmit={handleSubmit}>
        <h2 className='feedbackText'>How would you rate your service with us</h2>
        <RatingSelect submitValue={submitValue}/>
        <div className='input-group'>
          <input onChange={handleChangeEvent} placeholder='Write a review'/>
          <Button type='submit' isDisabled={disabled}>Send</Button>
        </div>
        <h4 className='warningText' style={{display:`${text.length < 10 ? 'flex' : 'none'}`,
  
         }}>You need atleast 10 characters</h4>
      </form> :
      <form onSubmit={(e) => editItem(e, text, rating)}>
      <h2 className='feedbackText'>Edit your review</h2>
      <RatingSelect submitValue={submitValue}/>
      <div className='input-group'>
        <input onChange={handleChangeEvent} placeholder='Write a review'/>
        <Button type='submit' isDisabled={disabled}>Send</Button>
      </div>
      <h4 className='warningText' style={{display:`${text.length < 10 ? 'flex' : 'none'}`,

       }}>You need atleast 10 characters</h4>
    </form> 

}
      
      
      
    </Card>
  )
}

export default FeedbackInput