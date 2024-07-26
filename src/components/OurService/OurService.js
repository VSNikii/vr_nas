import React from 'react';
import './ourService.module.scss';
import CardsRender from './../../utils/CardsRender.js';

function OurService() {
    
    return (
        <div className='service d-flex flex-column align-center'>
            <div className='service__header d-flex justify-around'>
                <div className='service__heads d-flex flex-column'>
                    <p>Our Service</p>
                    <h1>Our Service</h1>
                </div>
                <p className='header__description'>We use the latest VR hardware and software to create high-quality VR experiences that are accessible and affordable. Our goal is to provide exceptional customer service and support, and our team is always available to answer any questions and address any concerns you may have.</p>
                <img src='/img/backlight_service.svg' alt=''/>
            </div>

            <div className='service__cards d-flex justify-center'>

                <CardsRender />

            </div>

        </div>
    );
}

export default OurService;