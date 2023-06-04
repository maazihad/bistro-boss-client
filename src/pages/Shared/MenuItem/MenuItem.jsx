
const MenuItem = ({ item }) => {
   const { name, image, price, recipe } = item;

   return (
      <div className="flex gap-5">
         <img style={{ borderRadius: "0px 200px 200px 200px" }} className="w-24 h-24" src={image} alt="" />
         <div>
            <h3 className="uppercase text-lg">{name}------------------</h3>
            <p className="text-md text-gray-600">{recipe}</p>
         </div>
         <p className="text-amber-500">${price}</p>
      </div>
   );
};

export default MenuItem;