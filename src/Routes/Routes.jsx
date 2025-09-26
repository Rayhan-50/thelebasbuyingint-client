import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";

import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import useAdmin from "../hooks/useAdmin";
import Loading from "../components/Loading/Loading";
import Profile from "../pages/Dashboard/Profile";
import NotFound from "../pages/NotFoumd";
import ProductsCategory from "../pages/ProductsCategory";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Portfolio from "../pages/Portfolio";
import Production from "../pages/Production";
import Products from "../pages/Products";
import Services from "../pages/Services";
import VideoSection from "../pages/VideoSection";
import WhyChooseUs from "../pages/WhyChooseUs";
import ShowContactData from "../pages/Dashboard/ShowContactData";
import AddCategoryForm from "../pages/Dashboard/AddCategoryForm";
import ShowAllCategoriesData from "../pages/Dashboard/ShowAllCategoriesData";



// Custom wrapper to restrict routes to admins
const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  if (isAdminLoading) return <div><Loading></Loading></div>;
  if (!isAdmin) return <div className="text-center py-10 text-red-500">Access Denied: Admins Only</div>;
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      

     {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/production",
        element: <Production />,
      },
      {
        path: "/products",
        element: <Products />,
      },


      {
        path: "/products/:category",
        element: <ProductsCategory />,
      },


      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/video",
        element: <VideoSection />,
      },
      {
        path: "/why-choose-us",
        element: <WhyChooseUs />,
      },


      // end
    
      {
        path: "login",
        element: <Login></Login>,
      },
     {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      
 
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // admin routes
      {
        path: "manage-users",
        element: (
         <AdminRoute>
               <ManageUsers />
          </AdminRoute>
           
          
        ),
      },
    
   
      {
        path: "showContact",
        element: (
         <AdminRoute>
            <ShowContactData></ShowContactData>
         </AdminRoute>
           
          
        ),
      },
      {
        path: "AddCategoryForm",
        element: (
         <AdminRoute>
            <AddCategoryForm></AddCategoryForm>
         </AdminRoute>
           
          
        ),
      },
       {
        path: "ShowCategoryFormData",
        element: (
         <AdminRoute>
           <ShowAllCategoriesData></ShowAllCategoriesData>
         </AdminRoute>
           
          
        ),
      },
     
      // user routes
      {
        path: "Profile",
        element: (
          <Profile></Profile>
          
        ),
      },
     
  {
  path: "*",
  element: <NotFound />,
}

    ],
  },
]);