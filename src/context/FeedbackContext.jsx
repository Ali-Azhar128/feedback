import  { createContext, useState } from 'react'
import FeedbackData from '../data/feedbackData'
import FeedbackInput from '../components/feedbackInput'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const onDelete = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
    const addItem = (newFeedback) => {
        console.log(newFeedback)
    
    
        setFeedback([...feedback, newFeedback])
        console.log(...feedback)
    
    
    
      }
    const editItem = (e, text, rating) => {
        e.preventDefault()
       // console.log(feedback[clickedItem].rating)
       feedback[clickedItem].rating = rating
        feedback[clickedItem].text = text
        //console.log(clickedItem)
       
        setFeedback([...feedback])
        setEnaleEdit(true)
    } 
      
    const enableEditing = () => {
        setEnaleEdit(false)
      }




    const [enableEdit, setEnaleEdit] = useState(true)
    const [feedback, setFeedback] = useState(FeedbackData)
    const [clickedItem, setClickedItem] = useState(-1)
    const setIndex = (index) => {
        setClickedItem(index)
    }
    return <FeedbackContext.Provider value={{
        feedback,
        onDelete,
        addItem, 
        setIndex,
        enableEditing,
        enableEdit,
        editItem
        
        
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext