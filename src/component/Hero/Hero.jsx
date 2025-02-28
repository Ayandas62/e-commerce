import './Hero.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'


const Hero = ()=>{
    return(
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                        <img src={hand_icon} alt='hand'/>
                    </div>
                    <p>Collection</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <p>Latest collection</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="" />
            </div>
        </div>
    )
};

export default Hero