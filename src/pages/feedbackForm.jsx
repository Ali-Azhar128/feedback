import { motion, AnimatePresence } from 'framer-motion'
import React, {useState, useEffect} from 'react'
import { FaEdit } from 'react-icons/fa'
import Card from '../shared/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaTimes } from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
import Button from '../shared/Button'


function FeedbackForm() {
    const {feedback, onDelete} = useContext(FeedbackContext)
    var {setIndex, enableEditing, enableEdit} = useContext(FeedbackContext)


    
    
    
    //const feedbackKeys = Object.keys(feedback)
    
    
    if (!feedback || feedback.length === 0){
        return <p style={{marginLeft: '20px'}}>No reviews yet</p>
    }
  return (
   <>
        <AnimatePresence>
            {feedback.map((item) => (
            
                
                    <motion.div
                    key={item.id}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    
                    
                        <Card>
                            
                            
                        
                            
                            <div className='edit'>
                                
                                
                                <button onClick={() => {
                                    setIndex(feedback.indexOf(item))
                                    enableEditing()
                                   // console.log(clickedItem)
                                    console.log(enableEdit) 

                                }}>
                                <FaEdit color='purple' />
                                </button>

                            </div>
                            <div className='crossButton'>
                                
                                
                                <button className='close' onClick={() => onDelete(item.id)}>
                                    <FaTimes icon="check-square" color='purple' />
                                </button>

                            </div>
                        
                            
                            <div className="num-display">{item.rating}</div>
                            <div className="text-display">{item.text}</div>
                            
                        
                        
                     
                        
                        </Card>
                    </motion.div>
        
        
        
        
            ))}
        </AnimatePresence>
   
        
   </>
  )
}

export default FeedbackForm