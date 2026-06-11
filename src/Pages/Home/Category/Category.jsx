// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import Slide1 from "../../../assets/home/slide1.jpg";
import Slide2 from "../../../assets/home/slide2.jpg";
import Slide3 from "../../../assets/home/slide3.jpg";
import Slide4 from "../../../assets/home/slide4.jpg";
import Slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/Section Title/SectionTitle';





const Category = () => {
  return (
    <div className='max-w-[1320px] mx-auto'>
      <section>
        <SectionTitle
          heading={"ORDER ONLINE"}
          subheading={"From 11:00am to 10:00pm"}>

        </SectionTitle>
      </section>
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img className="w-full rounded-xl" src={Slide1} alt="Slide 1" />
          <p className='absolute inset-x-0 bottom-6 text-center text-3xl text-white font-semibold'>SALADS</p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full rounded-xl" src={Slide2} alt="Slide 2" />
          <p className='absolute inset-x-0 bottom-6 text-center text-3xl text-white font-semibold'>PIZZAS</p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full rounded-xl" src={Slide3} alt="Slide 3" />
          <p className='absolute inset-x-0 bottom-6 text-center text-3xl text-white font-semibold'>SOUPS</p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full rounded-xl" src={Slide4} alt="Slide 4" />
          <p className='absolute inset-x-0 bottom-6 text-center text-3xl text-white font-semibold'>DESSERTS</p>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img className="w-full rounded-xl" src={Slide5} alt="Slide 5" />
          <p className='absolute inset-x-0 bottom-6 text-center text-3xl text-white font-semibold'>MAIN COURSES</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category
