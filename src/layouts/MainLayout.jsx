import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const MainLayout = () => {
   const location = useLocation();
   // console.log(location);
   const noHeaderFooterInLoginPage = location.pathname.includes("login") || location.pathname.includes("signup");
   return (
      <div>
         {noHeaderFooterInLoginPage || <Navbar />}
         <Outlet />
         {noHeaderFooterInLoginPage || <Footer />}
      </div>
   );
};

export default MainLayout;