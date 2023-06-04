import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
   return (
      <div className="my-10">
         {title && <Cover img={coverImg} title={title} ></Cover>}
         <div className="grid md:grid-cols-2 gap-7 mt-10">
            {
               items.map(item => <MenuItem
                  key={item._id}
                  item={item}
               ></MenuItem>)
            }
         </div>
         <div className="text-center">
            <Link to={`/order/${title}`}>
               <button className="btn btn-outline  border-b-4 border-0">Order Now</button>
            </Link>
         </div>
      </div>
   );
};

export default MenuCategory;