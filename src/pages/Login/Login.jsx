
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const [disabled, setDisabled] = useState(true);
   const { signIn } = useContext(AuthContext);

   const from = location.state?.from?.pathname || "/";

   useEffect(() => {
      loadCaptchaEnginge(6);
   }, []);

   const handleLogin = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      signIn(email, password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Successfully login!!!',
               showConfirmButton: false,
               timer: 1500
            });
            navigate(from, { replace: true });
         })
         .catch(error => {
            console.log(error.message);
         });
   };

   const handleValidate = (event) => {
      const userCaptchaValue = event.target.value;
      console.log(userCaptchaValue);
      if (validateCaptcha(userCaptchaValue)) {

         setDisabled(false);
      }
      else {
         setDisabled(true);
      }
   };

   return (
      <>
         {/* Helmet */}
         <Helmet>
            <title>Bistro Boss Restaurant || Login</title>
         </Helmet>

         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
               </div>
               <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                  <form onSubmit={handleLogin} className="card-body">

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" />
                     </div>


                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />
                     </div>

                     <div className="form-control">
                        <span className="label-text">
                           <label className="label">
                              <LoadCanvasTemplate />
                           </label>
                        </span>
                        <input onBlur={handleValidate} type="text" placeholder="type the captcha above" className="input input-bordered" />
                     </div>


                     <div className="form-control mt-6">
                        <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
                     </div>
                  </form>
                  <div className='mb-5 text-center'>
                     <p>New here ? <Link to="/signup" className='text-red-700'>Create an account.</Link></p>
                  </div>
                  <SocialLogin />
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;