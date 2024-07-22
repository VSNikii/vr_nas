import { NavLink } from 'react-router-dom';
import './nav.module.scss';

function Nav(){
    return (
        <div className='nav d-flex justify-around align-center'>
            <img className='logo' src='/img/logo.png' alt='logo'/>
            <ul className='nav__ul d-flex justify-between'>
                <li>Home</li>
                <li>About us</li>
                <li>Service</li>
                <div className='d-flex align-center'>
                <li>Page</li>
                <img src='/img/downArrow.svg'/>
                </div>
                <div className='d-flex '>
                <li>Blog</li>
               <img src='/img/downArrow.svg'/>

                </div>
            </ul>
            {/* сделать постоянное переливание градиаента у кнопки */}
            <div className='btn-contact'>Contact Us</div>
            
        </div>
    );
}

export default Nav;