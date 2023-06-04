import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

// import required modules



const Testimonials = () => {

   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5333/reviews')
         .then(res => res.json())
         .then(data => {
            // console.log(data);
            setReviews(data);
         });
   }, []);

   return (
      <section className="lg:w-9/12 text-center mx-auto my-14">
         <SectionTitle
            subHeading="What our client say"
            heading="Testimonials"
         ></SectionTitle>

         <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {
               reviews.map(review => <SwiperSlide
                  key={review._id}
               >
                  <div className="mx-28 flex flex-col items-center">
                     <Rating
                        className="text-center"
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                     />
                     <p className="text-center mt-7 mb-5 text-6xl font-bold"><FaQuoteLeft /></p>
                     <p className="mt-5 mb-3">{review.details}</p>
                     <p className="text-2xl text-orange-500 uppercase">{review.name}</p>
                  </div>
               </SwiperSlide>)
            }
         </Swiper>
      </section>
   );
};

export default Testimonials;