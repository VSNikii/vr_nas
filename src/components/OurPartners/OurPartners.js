import './ourPartners.module.scss'

import NeonText from "../NeonText/NeonText";


function OurPartners(){
    return(
        <div className='ourPartners d-flex flex-column align-center'>
            <NeonText text={'Our Trusted Partners'}/>
            <h1 className='ourPartners__head2'>Discover the Companies We Work With</h1>
            <img src='/img/men__ourPartners.svg' alt=''/>
        </div>
    );
}

export default OurPartners;