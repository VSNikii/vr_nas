import './aboutUs.module.scss';


function AboutUs(){
    return (
        <div className='aboutUs d-flex'>
            <div className='aboutUs__images'>
                <img className='images__men' src='/img/men2.png' alt='men'/>
            </div>
            <div className='aboutUs__texts d-flex flex-column '>
                <p className='texts__caption1' title='About us'>About us</p>
                <h2 className='texts__head2'>Bring your events to life like never before with our VR services.</h2>
                <p className='texts__body1'>VRNas is a leading provider of VR services for education, entertainment, architecture, and events. Our mission is to bring the power of virtual reality to everyone, allowing them to explore new worlds, learn in new ways, and experience events in a whole new light.</p>
                <ul className='texts__body3'>
                    <li>Cutting-Edge Technology</li>
                    <li>Versatile Applications</li>
                    <li>Affordable and Accessible</li>
                </ul>
                <button className='texts__button button-neon'>Read more</button>
            </div>
        </div>
    );
}

export default AboutUs;