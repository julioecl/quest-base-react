import React from 'react'
import './text.css'

const Text = ({color, children}) => {
    return ( <>
        <h2>Text colored in {color} and Uppercase </h2>
        <p className='text' style={{color: color}}>{children.toUpperCase()}</p>    
    </>
    )    
}

Text.defaultProps = {
    color: 'black',
   
}


export default Text