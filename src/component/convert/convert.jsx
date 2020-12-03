import React from 'react';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './convert.scss';


const Convert = () => {

    return (
        <div className='convert_container'>
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
                <div className='title name'></div>
                <div><ArrowForwardIosIcon/></div>
                <div className='title name'></div>
            </div>
        </div>
    );
};

export default Convert;