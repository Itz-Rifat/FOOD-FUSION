import SectionTitle from "../../../Components/Section Title/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from 'swiper/modules';

import '@smastrom/react-rating/style.css';
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { SiComma } from "react-icons/si";



const Testimonial = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("review.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="mx-auto max-w-[1220px] pb-6">
            <SectionTitle subheading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTitle>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className="mx-auto flex flex-col items-center justify-center text-center gap-2 max-w-[1040px] px-6">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly />

                                {/* <div className="flex text-9xl">
                                    <TfiLayoutLineSolid className=" text-gray-300"></TfiLayoutLineSolid>
                                    <div className="flex">
                                        <SiComma></SiComma>
                                        <SiComma></SiComma>
                                    </div>
                                </div> */}
                                <p className="text-lg leading-relaxed text-[#333]">{review.details}</p>
                                <h3 className="text-2xl font-semibold">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                }


            </Swiper>
        </div>
    )
}

export default Testimonial
