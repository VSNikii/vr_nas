import './neonButton.module.scss';


export default function NeonButton({text}){
    return(
        <button className='neon-btn'>{text}</button>
    );
}