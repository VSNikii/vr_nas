import './insert.module.scss';

function Insert() {
    return (
        <div className='d-flex justify-center'>
        <div className='insert d-flex justify-around'>
            <div className='insert__block d-flex flex-column'>
                <img width={70} height={70} src='/img/img-head1.svg' />
                <h3 className='block__head7'>Expertise</h3>
                <p className='block__body2'>Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service</p>
            </div>
            <div className='insert__block d-flex flex-column'>
                <img width={70} height={70} src='/img/img-head2.svg' />
                <h3 className='block__head7'>Customization</h3>
                <p className='block__body2'>Every client is unique, and we believe every VR experience should be too. We'll work with you to create a customized solution that meets your specific needs and goals</p>
            </div>
            <div className='insert__block d-flex flex-column'>
                <img width={70} height={70} src='/img/img-head3.svg' width={70} height={70} />
                <h3 className='block__head7'>Service</h3>
                <p className='block__body2'>We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you're satisfied with every aspect of your VR experience.</p>
            </div>
        </div>
        </div>
    );
}

export default Insert;