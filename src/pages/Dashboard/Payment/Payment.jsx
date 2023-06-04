import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";


const Payment = () => {

   const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
   const [cart] = useCart();
   const total = cart.reduce((sum, current) => sum + current.price, 0);
   const price = parseFloat(total.toFixed(2));
   return (
      <div>
         <SectionTitle subHeading="Process your" heading="Payment"></SectionTitle>
         <h2 className="text-3xl my-5 text-center text-red-800 font-semibold">Teka dao noile mor!!!</h2>
         <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price} />
         </Elements>
      </div>
   );
};

export default Payment;