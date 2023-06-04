
import MenuItem from "../../Shared/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const PopularMenus = () => {
   //from custom hook
   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === 'popular');


   return (
      <section className="mb-10">
         <SectionTitle
            subHeading="Check it out"
            heading="FROM OUR MENU"
         ></SectionTitle>
         <div className="grid md:grid-cols-2 gap-7 mt-10">
            {
               popular.map(item => <MenuItem
                  key={item._id}
                  item={item}
               ></MenuItem>)
            }
         </div>
      </section>
   );
};

export default PopularMenus;