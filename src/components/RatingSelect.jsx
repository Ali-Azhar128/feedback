import React from 'react'
import {useState} from 'react'

function RatingSelect( {submitValue, selectedVal} ) {
    const [selected, setSelected] = useState(10)
    
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    submitValue(+e.target.value)
    if(selectedVal){
        setSelected(selectedVal)
    }
  }


 

  return (
    <ul className='rating'>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='1'
            id='num1'
            name='rating'
            checked={selected === 1}
            />
            <label htmlFor="num1">1</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='2'
            id='num2'
            name='rating'
            checked={selected === 2}
            />
            <label htmlFor="num2">2</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='3'
            id='num3'
            name='rating'
            checked={selected === 3}
            />
            <label htmlFor="num3">3</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='4'
            id='num4'
            name='rating'
            checked={selected === 4}
            />
            <label htmlFor="num4">4</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='5'
            id='num5'
            name='rating'
            checked={selected === 5}
            />
            <label htmlFor="num5">5</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='6'
            id='num6'
            name='rating'
            checked={selected === 6}
            />
            <label htmlFor="num6">6</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='7'
            id='num7'
            name='rating'
            checked={selected === 7}
            />
            <label htmlFor="num7">7</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='8'
            id='num8'
            name='rating'
            checked={selected === 8}
            />
            <label htmlFor="num8">8</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='9'
            id='num9'
            name='rating'
            checked={selected === 9}
            />
            <label htmlFor="num9">9</label>
        </li>
        <li>
            <input
            type='radio' 
            onChange={handleChange}
            value='10'
            id='num10'
            name='rating'
            checked={selected === 10}
            />
            <label htmlFor="num10">10</label>
        </li>
    </ul>
  )
}

export default RatingSelect