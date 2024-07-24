import './header.module.scss';

function Header(){
    return(
        <>
        <img className='gradientStroke' src='/img/gradientStroke.png' alt=' '/>
        <div className='header d-flex align-center justify-between mt-50'>
            <div className='d-flex flex-column'>
                <h1 className='header__head1'>Immerse Yourself in Virtual Reality</h1>
                <p className='header__body1'>Experience Unforgettable Events in VR. Bring your events to life like never before with our VR services</p>
                <button className='header__button1 button-neon'>discover more</button>
                <div className='header__clients d-flex align-center'>
                    <img src='/img/clients.svg' alt='happy clients'/> 
                    <p className='happyClients'><b><img className='underline-purple'src='/img/underline.svg'/>32k+</b> Happy Client</p>
                    <img src='/img/video__header.jpg' className='ml-50' alt='video'/>
                    
                </div>
            </div>
            <div className='header__menVr'>
                <img className='header__menVr__img' src='/img/men1.svg'/>
                <img className='header__backlight' src='/img/backlight.svg'/>
            </div>
            
        </div>
        <img className='cells' src='/img/cells.svg'/>
        </>
    );
}

export default Header;