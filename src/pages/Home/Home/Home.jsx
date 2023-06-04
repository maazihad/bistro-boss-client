import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenus from "../PopularMenus/PopularMenus";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss Restaurant || Home</title>
         </Helmet>
         <Banner />
         <Category />
         <PopularMenus />
         <Featured />
         <Testimonials />
      </div>
   );
};

export default Home;