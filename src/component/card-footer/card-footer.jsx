import React from 'react';

import './card-footer.scss';

const CardFooter = () => {

    let inputValue = 30;
    let criteria;

    if (!inputValue) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    }else if (inputValue < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        };
    } else if (inputValue < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        };
    } else if (inputValue >= 40) {
        criteria = {
            title: 'FAST',
            backgroundColor: '#13d569',
        };
    }
    
    return (
        <div 
            className='card-footer'
            style={{backgroundColor: criteria.backgroundColor}}
        >
            {criteria.title}
        </div>
    );
};

export default CardFooter;