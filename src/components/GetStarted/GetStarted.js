import './getStarted.module.scss';


function getStarted(){
    return(
        <div className='getStarted d-flex flex-column align-center'> 
            <p className='getStarted__neon'>How get started</p>
            <h1 className='getStarted__head2'>Bringing Your Virtual Reality Dreams to Life</h1>
            <img className='getStarted__video' width={1200} height={522} src='/img/video__getStarted.jpg' alt='video'/>
            <button className='getStarted__button'>Get started</button>
        </div>
    );
}


export default getStarted;
