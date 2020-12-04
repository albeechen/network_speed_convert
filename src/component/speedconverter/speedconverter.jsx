import React  from 'react';

import Convert from '../converter/converter';
import CardFooter from '../card-footer/card-footer';

import './speedconverter.scss';

const CardHeader = () => (
    <div className='card-header'><h4>Network Speed Converter</h4></div>
);
const SpeedConvert = () => {
     
    return (
        <div className='container'>
            <CardHeader />
            <Convert />
            <CardFooter />
        </div>
    );
};

export default SpeedConvert;