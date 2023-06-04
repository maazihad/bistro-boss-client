import Cover from "../../Shared/Cover/Cover";
import overCover from "../../../assets/shop/banner2.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
   const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
   const { category } = useParams();
   const initialIndex = categories.indexOf(category);
   const [tabIndex, setTabIndex] = useState(initialIndex);
   const [menu] = useMenu();

   const drinks = menu.filter(item => item.category === 'drinks');
   const desserts = menu.filter(item => item.category === 'dessert');
   const pizzas = menu.filter(item => item.category === 'pizza');
   const salads = menu.filter(item => item.category === 'salad');
   const soups = menu.filter(item => item.category === 'soup');
   return (
      <div>
         <Helmet>
            <title>Bistro Boss Restaurant || Order Food</title>
         </Helmet>
         <Cover img={overCover} title="Order Food"></Cover>

         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="text-center my-5">
               <Tab className="btn btn-outline border-0 border-b-4 rounded-none mx-2 w-28">Salad</Tab>
               <Tab className="btn btn-outline border-0 border-b-4 rounded-none mx-2 w-28">Pizza</Tab>
               <Tab className="btn btn-outline border-0 border-b-4 rounded-none mx-2 w-28">Soups</Tab>
               <Tab className="btn btn-outline border-0 border-b-4 rounded-none mx-2 w-28">Desserts</Tab>
               <Tab className="btn btn-outline border-0 border-b-4 rounded-none mx-2 w-28">Drinks</Tab>
            </TabList>
            <TabPanel>
               <OrderTab items={salads}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={pizzas}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={soups}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={desserts}></OrderTab>
            </TabPanel>
            <TabPanel>
               <OrderTab items={drinks}></OrderTab>
            </TabPanel>
         </Tabs>

      </div>
   );
};

export default Order;