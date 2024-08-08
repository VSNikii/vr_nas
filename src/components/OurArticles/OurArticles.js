import './ourArticles.module.scss';

import NeonText from '../NeonText/NeonText';


function OurArticles() {
    return (
        <div className='ourArticles'>
            <div className='ourArticles__text-block d-flex flex-column'>
                <NeonText text={'Our Articles'} />
                <div className='d-flex justify-between align-center'>
                    <h1 className='text-block__head2'>Stay Up-to-Date with Our VR Insights</h1>
                    <button className='text-block__btn--neon-border'>See all</button>
                </div>
            </div>
            <div className='d-flex'>
                <div className='ourArticles__currentMedia'>
                    {/* Сделать в будущем с помощью map */}
                    <h1 className='currentMedia__head6'>Popular Article</h1>
                    <img className='currentMedia__media' src='/img/news-img/VRGames.svg' />
                    <div className='currentMedia__inner'>
                        <p className='currentMedia__theme'>VR Games</p>
                        <h1 className='currentMedia__head5'>Entertainment Goes Virtual: The Rise of VR Gaming</h1>
                        <button className='currentMedia__next'><img className='btn-next' src='/img/news-img/next-big.svg' /></button>
                    </div>  
                </div>
                <div className='ourArticles__media-block'>
                    {/* Также сделать с помощью Map */}
                    <div className='media-block__news'>
                        <h2 className='media-block__header'>Recent Article</h2>
                        <div className='card'>
                            <img className='news__img' src='/img/news-img/VREducation.svg' />
                            <p className='media-block__theme'>VR Education</p>
                            <h3 className='media-block__title'>The Future of Education: How VR is Revolutionizing the Classroom</h3>
                            <button className='media-block__next'><img className='btn-next' src='/img/news-img/next-small.svg' /></button>
                        </div>
                        <div className='card'>
                            <img className='news__img' src='/img/news-img/VRArchitecture.svg' />
                            <p className='media-block__theme'>VR Architecture</p>
                            <h3 className='media-block__title'>Bringing Designs to Life: How VR is Changing Architecture</h3>
                            <button className='media-block__next'><img className='btn-next' src='/img/news-img/next-small.svg' /></button>
                        </div>
                        <div className='card'>
                            <img className='news__img' src='/img/news-img/VREnvertainment.svg' />
                            <p className='media-block__theme'>VR Envertainment</p>
                            <h3 className='media-block__title'>Making Events Memorable: The Power of VR for Corporate and Special Occasions</h3>
                            <button className='media-block__next'><img className='btn-next' src='/img/news-img/next-small.svg' /></button>
                        </div>
                        <div className='card'>
                            <img className='news__img' src='/img/news-img/VREvent.svg' />
                            <p className='media-block__theme'>VR Event</p>
                            <h3 className='media-block__title'>Exploring New Worlds: The Benefits of VR Travel</h3>
                            <button className='media-block__next'><img className='btn-next' src='/img/news-img/next-small.svg' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default OurArticles;