import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
   const [menu] = useMenu();
   const offered = menu.filter(item => item.category === 'offered');
   const desserts = menu.filter(item => item.category === 'dessert');
   const pizzas = menu.filter(item => item.category === 'pizza');
   const salads = menu.filter(item => item.category === 'salad');
   const soups = menu.filter(item => item.category === 'soup');


   return (
      <div>
         <Helmet>
            <title>Bistro Boss Restaurant || Our Menu</title>
         </Helmet>

         {/* ======================Main Cover=============== */}
         <Cover img={menuBg} title="Our Menu" ></Cover>

         {/* =======================Offered================ */}
         <SectionTitle subHeading="Don't miss it" heading="Today's Offer"></SectionTitle>
         <MenuCategory items={offered}></MenuCategory>

         {/* =======================desserts================ */}
         <MenuCategory items={desserts} title="dessert" coverImg={desertBg}></MenuCategory>

         {/* =======================Pizza================ */}
         <MenuCategory items={pizzas} title="pizza" coverImg={pizzaBg}></MenuCategory>

         {/* =======================Salad================ */}
         <MenuCategory items={salads} title="salad" coverImg={saladBg}></MenuCategory>

         {/* =======================Soup================ */}
         <MenuCategory items={soups} title="soup" coverImg={soupBg}></MenuCategory>
      </div>
   );
};

export default Menu;