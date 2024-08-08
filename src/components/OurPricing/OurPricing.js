import './ourPricing.module.scss';
import NeonText from '../NeonText/NeonText';
import NeonButton from '../NeonButton/NeonButton';


function OurPricing() {
    return (
        <div className='pricing d-flex flex-column'>
            <div className='pricing__text-block'>
                <div className='text-block__heads'>
                    <NeonText text={"Our pricing"} />
                    <h1 className='heads__head2'>Affordable VR Services for Everyone</h1>
                    <p className='heads__body1'>At VRNas, we believe that everyone should have access to the benefits of VR. That's why we offer a range of pricing options to meet the needs of any budget.</p>
                </div>

                <div className='text-block__description'>
                    <ul className='description__advantages'>
                        <li className=' '>
                            <h4 className='advantages__head9'>Customizable Packages</h4>
                            <p className='advantages__body3'>We understand that each project is unique, so we offer customizable packages to ensure that you get the services you need at a price that works for you. Our team will work with you to create a package that meets your specific goals and budget.</p>
                        </li>
                        <li>
                            <h4 className='advantages__head9'>Flexible Payment Options</h4>
                            <p className='advantages__body3'>We offer flexible payment options to make it easy for you to get started with our services. We accept various payment methods, including credit cards, bank transfers, and PayPal, and we can also work with you to create a payment plan that suits your needs.</p>
                        </li>
                        <li>
                            <h4 className='advantages__head9'>Satisfaction Guarantee</h4>
                            <p className='advantages__body3'>We stand behind our services and are committed to ensuring that you are completely satisfied with the final product. If for any reason you are not happy with our services, we will work with you to make it right or provide a full refund.</p>
                        </li>
                    </ul>
                    <img className='description__backlight' src='/img/backlight_pricing.svg' />
                    <div className='pricing__price d-flex flex-column justify-center align-center'>
                        <p className='price__caption2'>Start from</p>
                        <h2 className='price__price'>$99</h2>
                        <NeonButton text={'get started'} />
                        <p className='price__body4'>30 Days Moneyback Guarantee</p>
                    </div>
                </div>


            </div>


        </div>
    );
}


export default OurPricing;