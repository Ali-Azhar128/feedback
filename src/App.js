import React, { useEffect, useState, useContext } from 'react'
import './pages/feedbackForm.jsx'
import FeedbackForm from './pages/feedbackForm.jsx'
import feedbackData from './data/feedbackData.js'
import FeedbackState from './components/feedbackState.jsx'
import FeedbackInput from './components/feedbackInput.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about.jsx'
import AboutIconLink from './components/AboutIconLink.jsx'
import { FeedbackProvider } from './context/FeedbackContext.jsx'
import FeedbackContext from './context/FeedbackContext.jsx'

function App() {
 
  
  //const [feedback, setFeedback] = useState(feedbackData)



  

 
  return (
    
    <FeedbackProvider >
      <div className='mainContainer'>
        <h1 className='mainHeading'>Feedback UI</h1>
        
      </div>
    
      <Router>
        <Routes>
          <Route
          exact path='/' element={
            <>
              <FeedbackInput/>
              <FeedbackState/>
              <FeedbackForm  />
              <AboutIconLink/>
              

            </>}/>

          <Route exact path='/about' element={<About/>}/>
          
            
        </Routes>
        
      </Router>


 
      
      
    </FeedbackProvider>
    

  )
}

export default App
