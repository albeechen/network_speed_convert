import React from 'react';

import './card-footer.scss';

const CardFooter = ({value}) => {
    let criteria;

    if (!value) {
        criteria = {
            title: '---',
            backgroundColor: '#d3d8e2',
        };
    }else if (value < 15) {
        criteria = {
            title: 'SLOW',
            backgroundColor: '#ee362d',
        };
    } else if (value < 40) {
        criteria = {
            title: 'GOOD',
            backgroundColor: '#1b82f1',
        };
    } else if (value >= 40) {
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