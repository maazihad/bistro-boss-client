import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
   const { user, loading } = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const { refetch, data: cart = [] } = useQuery({
      queryKey: ['carts', user?.email],
      enabled: !loading,
      queryFn: async () => {
         const res = await axiosSecure(`/carts?email=${user?.email}`);
         // console.log("response from axios", res);
         return res.data;
      },
   });
   return [cart, refetch];
};
export default useCart;



   // ==============jwt
   // const token = localStorage.getItem("boss-access-token");

   // ====================step-1 
   // (main.jsx এর মধ্যে স্টেপ -১ যেটা দিয়ে প্রজেক্টটাকে রেপিং করা হয়েছে।  )

   //==========step-2

   
   
   //==========step-3
   //============এখানে isLoading বদলে refetch ইউজ করা হয়েছে। 

   
    //============step-4
      // ============ এখানে carts এর নামটা মোটামুটি সবজায়গায় একই নাম হতে হবে। 

      
      
      //===============interceptors
      // ============step-5
      
       // queryFn: async () => {
      //    const res = await fetch(`http://localhost:5333/carts?email=${user?.email}`, {
      //       headers: {
      //          authorization: `bearer ${token}`
      //       }
      //    });
      //    // if (!res.ok) {
      //    //    throw new Error('Network response was not ok');
      //    // }
      //    return res.json();
      // },
      
      
   //=============optional

   // if (isError) {
   //    return <span>Error: {error.message}</span>;
   // }



   //==================step-6
      