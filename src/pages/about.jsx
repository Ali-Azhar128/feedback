import React from 'react'
import Card from '../shared/card'
import { Link } from 'react-router-dom'

function About() {
  return (
     <>
        <Card>
            <div className='about'>
                <h1>
                    About this project
                </h1>
                <p>
                    This is a react app to leave feedback for a project or service
                </p>
                <p>Version: 2.1.5</p>
                <Link to={'/'}>Back To Home</Link>

            </div>

        </Card>
    </>
  )
}

export default About