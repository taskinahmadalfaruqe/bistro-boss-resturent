import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay,FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';

const Category = () => {

    return (
        <div className="container">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                freeMode={true}
                modules={[FreeMode, Pagination,Autoplay]}
                className="mySwiper mb-24 mx-auto"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide className="border-2 border-PrimaryColor rounded-md overflow-hidden">
                    <img src={slide1} alt="CategotyImage"/>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-BlackColor font-semibold">Salads</h3>
                </SwiperSlide>
                <SwiperSlide className="border-2 border-PrimaryColor rounded-md overflow-hidden">
                    <img src={slide2} alt="CategotyImage"/>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-BlackColor font-semibold">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide className="border-2 border-PrimaryColor rounded-md overflow-hidden">
                    <img src={slide3} alt="CategotyImage"/>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-BlackColor font-semibold">Soups</h3>
                </SwiperSlide>
                <SwiperSlide className="border-2 border-PrimaryColor rounded-md overflow-hidden">
                    <img src={slide5} alt="CategotyImage"/>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-BlackColor font-semibold">Salads</h3>
                </SwiperSlide>
                <SwiperSlide className="border-2 border-PrimaryColor rounded-md overflow-hidden">
                    <img src={slide4} alt="CategotyImage"/>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-BlackColor font-semibold">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide className="border-2 border-PrimaryColor rounded-md overflow-hidden">
                    <img src={slide2} alt="CategotyImage"/>
                    <h3 className="text-4xl uppercase text-center -mt-16 text-BlackColor font-semibold">Pizzas</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;