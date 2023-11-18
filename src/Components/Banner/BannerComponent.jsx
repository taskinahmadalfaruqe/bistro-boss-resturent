import bannerImage01 from '../../assets/home/bg01.jpg'
import bannerImage02 from '../../assets/home/02.jpg'
import bannerImage03 from '../../assets/home/03.png'
import bannerImage04 from '../../assets/home/04.jpg'
import bannerImage05 from '../../assets/home/05.png'
import bannerImage06 from '../../assets/home/06.png'
import bannerImage07 from '../../assets/home/07.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Banner.css'

const BannerComponent = () => {
    return (
        <Carousel autoPlay={true} stopOnHover={false} infiniteLoop={true}>
            <div>
                <img src={bannerImage01} alt="BannerImage01" style={{maxHeight:'540px'}} />
            </div>
            <div>
                <img src={bannerImage02} alt="BannerImage02" style={{maxHeight:'540px'}}/>
            </div>
            <div>
                <img src={bannerImage03} alt="BannerImage03" style={{maxHeight:'540px'}}/>
            </div>
            <div>
                <img src={bannerImage04} alt="BannerImage04" style={{maxHeight:'540px'}}/>
            </div>
            <div>
                <img src={bannerImage05} alt="BannerImage05" style={{maxHeight:'540px'}}/>
            </div>
            <div>
                <img src={bannerImage06} alt="BannerImage06" style={{maxHeight:'540px'}}/>
            </div>
            <div>
                <img src={bannerImage07} alt="BannerImage07" style={{maxHeight:'540px'}}/>
            </div>
        </Carousel>
    );
};

export default BannerComponent;