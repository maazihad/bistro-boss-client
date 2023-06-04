import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const { googleSignIn, githubSignIn } = useContext(AuthContext);

   /// ========================google login==================
   const handleGoogleSignIn = () => {
      googleSignIn()
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            const saveUser = { name: loggedUser.displayName, email: loggedUser.email };
            fetch('http://localhost:5333/users', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json'
               },
               body: JSON.stringify(saveUser)
            })
               .then(res => res.json())
               .then(() => {
                  Swal.fire({
                     position: 'center',
                     icon: 'success',
                     title: 'Google login successfully!!!!',
                     showConfirmButton: false,
                     timer: 1500
                  });
                  navigate(from, { replace: true });
               });
         })
         .catch(error => {
            console.log(error.message);
            toast(error.message);
         });
   };




   ///==============github login==================
   const handleGithubSignIn = () => {
      githubSignIn()
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'User created successful!!!',
               showConfirmButton: false,
               timer: 1500
            });
            navigate(from, { replace: true });
         })
         .catch(error => {
            console.log(error.message);
            toast(error.message);
         });
   };

   return (
      <div className="flex justify-center items-center mb-10">
         <button onClick={handleGoogleSignIn} className="capitalize flex items-center btn btn-primary btn-circle bg-red-500 hover:bg-red-800 gap-3 border-0">
            <FaGoogle className="text-white text-lg font-bold" />
         </button>
         <div className="divider divider-horizontal">OR</div>
         <button onClick={handleGithubSignIn} className="capitalize flex items-center btn btn-primary btn-circle bg-gray-500 hover:bg-gray-800 gap-3 border-0">
            <FaGithub className=" text-lg font-bold" />
         </button>

      </div>
   );
};

export default SocialLogin;