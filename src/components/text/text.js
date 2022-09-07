import React from 'react'
import './text.css'

const Text = ({color, format, background}) => {
    return ( <>
        <h2>Text colored in {color} and {format} </h2>
        <p className='text' style={{color: color, textTransform: format, backgroundColor: background}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi minus, suscipit culpa illo libero reiciendis, aperiam accusantium aliquid dignissimos iure quaerat voluptates architecto quo quos. Excepturi ratione cumque a.</p>    
    </>
    )    
}

Text.defaultProps = {
    color: 'black',
    format: 'normal',
    background: 'white'
}


export default Text