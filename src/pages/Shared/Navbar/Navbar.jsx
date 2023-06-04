import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
   const { user, logOut } = useContext(AuthContext);
   const [cart] = useCart();
   const [isAdmin] = useAdmin();


   const handleLogout = () => {
      logOut()
         .then(() => { })
         .catch(error => console.log(error.message));
   };
   const navItems = <>
      <li>
         <Link to="/">Home</Link>
      </li>
      <li>
         <Link to="/menu">Our Menu</Link>
      </li>
      <li>
         <Link to="/order/salad">Order Food</Link>
      </li>
      {
         isAdmin ?
            <li><Link to="/dashboard/adminhome">Dashboard</Link></li> :
            <li><Link to="/dashboard/userhome">Dashboard</Link></li>
      }
      <li>
         <Link to="/dashboard/mycart">
            <button className="btn btn-sm bg-inherit border-0 gap-2">
               <FaShoppingCart className="text-lg" />
               <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
         </Link>
      </li>
      {
         user
            ?
            <><button onClick={handleLogout} className="btn btn-ghost capitalize">Logout</button></>
            :
            <>
               <li>
                  <Link to="/login">Login</Link>
               </li>
            </>
      }
      {/* <li>
         <Link to="/">{user?.displayName}</Link>
      </li> */}

      <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
         <div className="avatar">
            <div className="w-6 h-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
               <Link> <img src={user?.photoURL} /></Link>
            </div>
         </div>
      </div>




   </>;

   return (
      <>
         <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {navItems}
                  </ul>
               </div>
               <a className="btn btn-ghost normal-case text-xl">bistro boss</a>
            </div>
            <div className="navbar-center hidden lg:flex  ">
               <ul className="menu menu-horizontal px-1 items-center">
                  {navItems}
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn">Get started</a>
            </div>
         </div>
      </>
   );
};

export default Navbar;