import React from 'react';
import Text from '../text/text'
import Button from '../button/button';
import '../card/card.css';

const Card = () => {
    return (
        <div className='principal'>
            <h1>Quest Base React</h1>            
            <Text color='green' format='uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi minus, suscipit culpa illo libero reiciendis, aperiam accusantium aliquid dignissimos iure quaerat voluptates architecto quo quos. Excepturi ratione cumque a.</Text>            
            <Text color='red' format='capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ratione cumque a.</Text>              
            <Text color='blue' format='lowercase' background='lightGrey'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quasi minus, suscipit culpa illo libero reiciendis, aperiam accusantium aliquid dignissimos iure quaerat voluptates architecto quo quos.</Text>
            <Button label='Download CV'>Download CV</Button>   
            <Button label='Listen to music'>Listen to music</Button>  
            <Button label='Next'>Next</Button>              
        </div>
    ) 
}

export default Card;

