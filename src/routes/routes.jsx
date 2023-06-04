import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";


const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />
         },
         {
            path: "menu",
            element: <Menu />
         },
         {
            path: "order/:category",
            element: <Order />
         },
         {
            path: "login",
            element: <Login />
         },
         {
            path: "signup",
            element: <SignUp />
         },
         {
            path: "secret",
            element: <PrivateRoute> <Secret /></PrivateRoute>
         }
      ]
   },
   {
      path: "dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
         {
            path: 'userhome',
            element: <UserHome />
         },
         {
            path: 'mycart',
            element: <MyCart />
         },
         {
            path: 'payment',
            element: <Payment />
         },
         //=================Admin routes
         {
            path: 'adminhome',
            element: <AdminHome />
         },
         {
            path: 'allusers',
            element: <AdminRoute><AllUsers /></AdminRoute>
         },
         {
            path: 'additem',
            element: <AdminRoute><AddItem /></AdminRoute>
         },
         {
            path: 'manageitems',
            element: <AdminRoute><ManageItems /></AdminRoute>
         }
      ]
   }
]);

export default router;