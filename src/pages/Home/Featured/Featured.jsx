import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import moment from "moment/moment";
import "./Featured.css";

const Featured = () => {
   return (
      <section className="featured-bg-img bg-fixed bg-gray-700 bg-gradient-to-tr bg-opacity-50">

         <SectionTitle
            subHeading="check it out"
            heading="Our Features"
         ></SectionTitle>

         <div className="flex gap-5 items-center justify-center ">
            <div className="pl-20 pb-20 pt-20">
               <img className="" src={featuredImage} alt="featured image" />
            </div>
            <div className="space-y-3 text-white ">
               <p>{moment().format("MMM D, YYYY")}</p>
               <p className="text-lg">Where can i get ?</p>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ipsa suscipit consectetur sed. Eligendi aut est sequi libero maxime voluptatibus eius fugit explicabo perspiciatis, reiciendis corrupti saepe omnis excepturi ipsum unde vero. Repudiandae dolore iure dolorum magnam dolorem veniam ipsum, ratione quae fuga beatae soluta unde, eos corrupti! Quam, odio.</p>
               <button className="btn btn-outline text-white border-b-4 border-0">Order me</button>
            </div>
         </div>
      </section>
   );
};

export default Featured;