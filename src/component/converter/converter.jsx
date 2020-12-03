import React from 'react';

import Convert from '../convert/convert';
import './converter.scss';

const Converter = () => {

    return (
        <div className='container'>
            <div className='card-header'>
                <h4>Network Speed Converter</h4>
            </div>
            <Convert />
            <div className='card-footer'>Fast</div>
        </div>
    );
};

export default Converter;