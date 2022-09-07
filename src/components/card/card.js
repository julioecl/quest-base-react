import React from 'react';
import Text from '../text/text'
import Button from '../button/button';
import '../card/card.css';

const Card = () => {
    return (
        <div className='principal'>
            <h1>Quest Base React</h1>            
            <Text color='green' format='uppercase'></Text>            
            <Text color='red' format='capitalize'></Text>              
            <Text color='blue' format='lowercase' background='lightGrey'></Text>
            <Button label='Download CV'></Button>   
            <Button label='Listen to music'></Button>  
            <Button label='Next'></Button>              
        </div>
    ) 
}

export default Card;

