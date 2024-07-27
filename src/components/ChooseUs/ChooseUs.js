import './chooseUs.module.scss';

function ChooseUs() {
    return (
        <div className='choose d-flex justify-around'>
            <div className='choose__texts'>
                <p className='choose__neon'>Why choose up</p>
                <h1 className='choose__head2'>Why Choose Us for Your VR Needs</h1>
                <details>
                    <summary><b>Passionate and Experienced Team</b></summary>
                    <p>We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                </details>
                <details>
                    <summary><b>Customized Solutions</b></summary>
                    <p>We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                </details>
                <details>
                    <summary><b>Exceptional Customer Service</b></summary>
                    <p>We are proud of our team of VR experts who are passionate about VR and dedicated to delivering the highest quality work. Our team consists of experienced VR developers, designers, and technicians who have a proven track record of creating immersive and engaging VR experiences.</p>
                </details>
            </div>
            <div className='choose__media'>
                <img className='media__men' src='/img/men3.svg' alt='men'/>
                <img className='media__video' src='/img/video_choose.jpg' alt='video'/>
            </div>
        </div>
    );
}


export default ChooseUs;