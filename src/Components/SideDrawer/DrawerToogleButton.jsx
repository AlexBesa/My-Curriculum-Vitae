import React from 'react';
import './DrawerToogleButton.css'

const DrawerToogleButton = props =>(
    <button className='toggle-btn'onClick={props.click} >
        <div className='toggle-btn-line'></div>
        <div className='toggle-btn-line'></div>
        <div className='toggle-btn-line'></div>
    </button>
)
export default DrawerToogleButton;