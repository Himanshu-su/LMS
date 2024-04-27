import { Navigate, useRoutes,useParams } from 'react-router-dom';
import { useContext } from 'react';
import {ProfilePage} from './pages/ProfilePage';


// layouts
// import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';

//

import BlogPage from './pages/BlogPage';
// import UserPage from './pages/po/Purchase';
import LoginPage from './sections/auth/login/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
// import DashboardAppPage from './pages/dashboard/DashboardAppPage';
import DashboardLayout from './layouts/dashboard/DashboardLayout';
// import { Ledger } from './pages/Ledger';
// import { Delivery } from './pages/Delivery';
// import { Subpurchase } from './pages/po/Subpurchase';
// import { useAuthContext } from './pages/AuthProvider';
// import { Drnlist } from './pages/createDrn'
// import { Newdrn } from './pages/Newdrn';
// import { Footer } from './pages/Footer';
//  import { CompanySelection } from './pages/Companyselection';
// import { Drndetail } from './pages/po/drndetail';
// import { Calender } from './pages/po/calender';
// import { Drnconcern } from './pages/po/drnConcern';
// import { Weeklycalender } from './pages/po/weeklycalender';
import { Whislist, Wislist } from './pages/dashboard/Whislist';
import { Addtocart } from './pages/dashboard/Addtocart';
import Admin from './pages/dashboard/Admin';
import Popadmin from './pages/dashboard/Popadmin';
import AdminNavItem from './pages/dashboard/Popadmin';
// import Adminsign from './pages/dashboard/Adminsign';
// import Registration from './sections/auth/login/Registration';
import RegistrationPage from './sections/auth/login/PageRegistration';
import StudentList from './sections/auth/login/Listfolder/studentlist';
import { Imgaauto } from './sections/auth/login/openai/imgaito';
import Checkout from './pages/Checkout';
import DashboardAppPage from './pages/dashboard/DashboardAppPage';
// import DashboardAppPage from './pages/dashboard/DashboardAppPage';





// ----------------------------------------------------------------------

export default function Router() {
  // const {purchaseId}=useAuthContext()
  // const IdPurchase=localStorage.getItem('purchaseid')
  //  console.log(purchaseId)
  //  console.log(IdPurchase)
 // const id=purchaseId
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout /> ,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        // { path: `user/${purchaseId}`, element: <UserPage /> },
        // { path: 'purchase/open', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'wishlist', element: <Wislist /> },   
        { path: 'addtocart', element: <Addtocart /> },
        { path: 'popupadmin', element: <AdminNavItem /> },
        { path: 'admin', element: <Admin /> },
        {
          path: 'purchase/schedule',
          element: <Navigate to="/dashboard/purchase/schedule/monthly" />,
        }, 
        {
          path: 'studentlist',
          element: <StudentList />,
        },
        {
          path: 'checkout',
          element: <Checkout />,
        },
        {
          path: 'imgauto',
          element: <Imgaauto />,
        },
      ],
    },


   {
    path: 'signup',
    element: <RegistrationPage />,
  },


    {
      path: 'login',
      element: <LoginPage />,
    },
    // { path: 'adminsign', element: <Adminsign /> },
    // { path: 'companyselection', element: <CompanySelection /> },
    
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
   
  ]);

  return routes;
}
