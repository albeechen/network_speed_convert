import React, {useState} from 'react';

import Convert from '../converter/converter';
import CardFooter from '../card-footer/card-footer';

import './speedconverter.scss';

const CardHeader = () => (
    <div className='card-header'><h4>Network Speed Converter</h4></div>
);
const SpeedConvert = () => {
    const [inputValue, setInputValue] = useState(1000); 
    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <div className='container'>
            <CardHeader />
            <Convert onChange={handleInputChange} value={inputValue}/>
            <CardFooter value={inputValue/8}/>
        </div>
    );
};

export default SpeedConvert;