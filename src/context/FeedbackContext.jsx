import  { createContext, useState, useEffect } from 'react'

import FeedbackInput from '../components/feedbackInput'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    var feedbackData;

    const fetchFeedback = async () => {
        const response = await fetch('/feedback')
        const data = await response.json()
        setFeedback(data)
 
    }

    const onDelete = async (id) => {
        await fetch(`/feedback/${id}`,
        {
            method: 'DELETE'
        })

        setFeedback(feedback.filter((item) => item.id !== id))
    }
    const addItem = async (newFeedback) => {
        //console.log(newFeedback)
        const response = await fetch(
            '/feedback', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newFeedback)
            }
        )
        const data = await response.json()
        console.log(data)
        setFeedback([...feedback, data])
       // console.log(...feedback)
      }

    const editItem = async (e, text, rating) => {
        e.preventDefault()
       // console.log(feedback[clickedItem].rating)
      
       feedback[clickedItem].rating = rating
        feedback[clickedItem].text = text
        //console.log(clickedItem)
        var updItem = {
            rating: feedback[clickedItem].rating,
            text: feedback[clickedItem].text,
            ...feedback[clickedItem]
        
        
        }

        await fetch(`feedback/${feedback[clickedItem].id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        }
        )


       
        setFeedback([...feedback])
        setEnaleEdit(true)
    } 
      
    const enableEditing = () => {
        setEnaleEdit(false)
      }



    useEffect(() => {
        fetchFeedback()
    },
    [])
    const [enableEdit, setEnaleEdit] = useState(true)
    const [feedback, setFeedback] = useState([])
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