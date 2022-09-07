import React from 'react';
import Text from '../text/text'
import Button from '../button/button';
import '../card/card.css';




const Card = () => {
    return (
        <div className='principal'>
            <h1>Quest Base React</h1>            
            <Text color='green' format='uppercase' background='lightGrey'></Text>            
            <Text color='red' format='capitalize'></Text>              
            <Text color='blue' format='lowercase'></Text>
            <Button label='Baixar CV'></Button>   
            <Button label='Ouvir músicas'></Button>  
            <Button label='Avançar'></Button>              
        </div>
    ) 
}

export default Card;

