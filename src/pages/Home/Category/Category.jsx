// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
   return (
      <section>
         <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
         ></SectionTitle>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-20"
         >
            <SwiperSlide>
               <img src={slide1} alt="Slide1" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Soups</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide2} alt="Slide2" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Salads</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide3} alt="Slide3" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Pizzas</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide4} alt="Slide4" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Desserts</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide5} alt="Slide5" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Kacci</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide1} alt="Slide1" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Cools</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide2} alt="Slide2" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Semai</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide3} alt="Slide3" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Nodeles</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide4} alt="Slide4" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Feerni</h2>
            </SwiperSlide>
            <SwiperSlide><img src={slide5} alt="Slide5" />
               <h2 className="text-4xl font-bold uppercase -mt-20 text-center opacity-80">Biriyani</h2>
            </SwiperSlide>
         </Swiper>
      </section>
   );
};

export default Category;