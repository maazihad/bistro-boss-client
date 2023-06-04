import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import TableRow from "./TableRow";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
   const [cart, refetch] = useCart();
   const total = cart.reduce((sum, item) => item.price + sum, 0);
   const totalPrice = parseFloat(total.toFixed(2));
   const handleDeleteCart = item => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5333/carts/${item._id}`, {
               method: 'DELETE',
            })
               .then(res => res.json())
               .then(data => {
                  if (data.deletedCount > 0) {
                     refetch();
                     Swal.fire(
                        'Deleted!',
                        'Your item has been deleted.',
                        'success'
                     );
                  }
               });
         }
      });
   };
   return (
      <div>
         <Helmet>
            <title>Bistro Boss Restaurant || My Cart</title>
         </Helmet>

         <div className="flex justify-between gap-5 items-center my-5">
            <h2 className="text-3xl font-bold text-red-800">Total order : {cart.length}</h2>
            <h2 className="text-3xl font-bold text-red-800">Total Price : ${totalPrice}</h2>
            <Link to="/dashboard/payment">
               <button className="btn btn-warning">PAY</button>
            </Link>
         </div>

         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Food</th>
                     <th>Item Name</th>
                     <th>Price</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     cart.map((item, index) => <TableRow
                        key={item._id}
                        item={item}
                        index={index}
                        handleDeleteCart={handleDeleteCart}
                     ></TableRow>)
                  }
               </tbody>
            </table>
         </div>

      </div>
   );
};

export default MyCart;