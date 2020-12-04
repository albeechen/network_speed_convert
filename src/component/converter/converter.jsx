import React, { useState } from 'react';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import './converter.scss';


const Convert = () => {
    const [imputValue, setInputValue] = useState(1000); 

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <div className='card-converter'>
            <div className='layout_control'>
                <div className='title unit'>Mbps</div>
                <div><SwapHorizIcon /></div>
                <div className='title unit'>MB/s</div>
            </div>
            <div className='layout_control'>
                <div className='title name'>Set</div>
                <div className='title name'>Show</div>
            </div>
            <div className='layout_control'>
                <TextField 
                    type="numbers" 
                    onChange={handleInputChange}
                    value={imputValue} 
                    />
                <div><ArrowForwardIosIcon/></div>
                <div className='title result'>{imputValue/8}</div>
            </div>
        </div>
    );
};

export default Convert;