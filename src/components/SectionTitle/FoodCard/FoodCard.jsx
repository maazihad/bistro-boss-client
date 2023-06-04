import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
   const { _id, name, image, price, recipe } = item;

   //====================step-7 
   //================প্রথমটা ইউজ করছিনা তাই খালি
   const [, refetch] = useCart();

   const { user } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();

   const handleAddToCard = menuItem => {
      console.log(menuItem);
      if (user && user.email) {
         const cartItem = {
            menuItemId: _id,
            name,
            image,
            price,
            email: user.email
         };
         fetch('http://localhost:5333/carts', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(cartItem)
         })
            .then(res => res.json())
            .then(data => {
               if (data.insertedId) {

                  //===================step-8
                  refetch();
                  Swal.fire({
                     position: 'center',
                     icon: 'success',
                     title: 'Add to cart successfully',
                     showConfirmButton: false,
                     timer: 1500
                  });
               }
            });
      }
      else {
         Swal.fire({
            title: 'Please Login first!!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to Login'
         }).then((result) => {
            if (result.isConfirmed) {

               // এখানে যে পেইজ থেকে লগিন করার জন্য রিডাইরেক্ট করা হয়েছে তখন লগিন করার সাথে সাথে সেই পেইজেই নিয়ে যাবে। 
               navigate("/login", { state: { from: location } });
            }
         });
      }
   };

   return (
      <div className="card w-full bg-base-100 shadow-xl">
         <figure><img src={image} alt="Shoes" /></figure>
         <p className="absolute bg-slate-900 text-white right-8 top-5 p-2">${price}</p>
         <div className="card-body text-center">
            <h2 className="font-bold text-lg text-center">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-end">
               <button onClick={() => handleAddToCard(item)} className="btn btn-primary">Add to card</button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;