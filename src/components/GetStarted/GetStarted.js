import NeonButton from '../NeonButton/NeonButton';
import './getStarted.module.scss';
import NeonText from '../NeonText/NeonText';



function getStarted(){
    return(
        <div className='getStarted d-flex flex-column align-center'> 
            <NeonText text={'How get started'}/>
            <h1 className='getStarted__head2'>Bringing Your Virtual Reality Dreams to Life</h1>
            <img className='getStarted__video' width={1200} height={522} src='/img/video__getStarted.jpg' alt='video'/>
            <NeonButton text={"Get started"}/>
        </div>
    );
}


export default getStarted;
