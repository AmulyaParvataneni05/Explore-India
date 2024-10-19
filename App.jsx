import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { AuthProvider } from 'react-auth-kit';
import RootLayout from './RootLayout';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import AboutUs from './components/aboutus/AboutUs';
import Favorites from './components/favorites/Favorites'
import RoutingError from './RoutingError';
import UserProfile from './components/user-profile/UserProfile';
import AndhraPradesh from './components/states/AndhraPradesh';
import ArunachalPradesh from './components/states/ArunachalPradesh';
import Assam from './components/states/Assam';
import Bihar from './components/states/Bihar';
import Chhattisgarh from './components/states/Chhattisgarh';
import Goa from './components/states/Goa';
import Gujarat from './components/states/Gujarat';
import Haryana from './components/states/Haryana';
import HimachalPradesh from './components/states/HimachalPradesh';
import Jharkhand from './components/states/Jharkhand';
import Karnataka from './components/states/Karnataka';
import Kerala from './components/states/Kerala';
import MadhyaPradesh from './components/states/MadhyaPradesh';
import Maharashtra from './components/states/Maharashtra';
import Manipur from './components/states/Manipur';
import Meghalaya from './components/states/Meghalaya';
import Mizoram from './components/states/Mizoram';
import Nagaland from './components/states/Nagaland';
import Odisha from './components/states/Odisha';
import Punjab from './components/states/Punjab';
import Rajasthan from './components/states/Rajasthan';
import Sikkim from './components/states/Sikkim';
import TamilNadu from './components/states/TamilNadu';
import Telangana from './components/states/Telangana';
import Tripura from './components/states/Tripura';
import UttarPradesh from './components/states/UttarPradesh';
import Uttarakhand from './components/states/Uttarakhand';
import WestBengal from './components/states/WestBengal';
import AndamanAndNicobarIslands from './components/States/AndamanAndNicobarIslands';
import Chandigarh from './components/states/Chandigarh';
import DadraAndNagarHaveliAndDamanAndDiu from './components/states/DadraAndNagarHaveliAndDamanAndDiu';
import Delhi from './components/states/TheGovernmntOfNCTOfDelhi';
import JammuKashmir from './components/states/JammuAndKashmir';
import Ladakh from './components/states/Ladakh';
import Lakshadweep from './components/states/Lakshadweep';
import Puducherry from './components/states/Puducherry';


function App() {
  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <RoutingError />,
      children: [
        { path: '', element: <Home /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'about', element: <AboutUs /> },
        {
          path: 'user-profile',
          element: <UserProfile />,
          children: [
            { path: 'favorites', element: <Favorites /> },
          ],
        },
        { path: 'states/andhra-pradesh', element: <AndhraPradesh /> },
        { path: 'states/arunachal-pradesh', element: <ArunachalPradesh /> },
        { path: 'states/assam', element: <Assam /> },
        { path: 'states/bihar', element: <Bihar /> },
        { path: 'states/chhattisgarh', element: <Chhattisgarh /> },
        { path: 'states/goa', element: <Goa /> },
        { path: 'states/gujarat', element: <Gujarat /> },
        { path: 'states/haryana', element: <Haryana /> },
        { path: 'states/himachal-pradesh', element: <HimachalPradesh /> },
        { path: 'states/jharkhand', element: <Jharkhand /> },
        { path: 'states/karnataka', element: <Karnataka /> },
        { path: 'states/kerala', element: <Kerala /> },
        { path: 'states/madhya-pradesh', element: <MadhyaPradesh /> },
        { path: 'states/maharashtra', element: <Maharashtra /> },
        { path: 'states/manipur', element: <Manipur /> },
        { path: 'states/meghalaya', element: <Meghalaya /> },
        { path: 'states/mizoram', element: <Mizoram /> },
        { path: 'states/nagaland', element: <Nagaland /> },
        { path: 'states/odisha', element: <Odisha /> },
        { path: 'states/punjab', element: <Punjab /> },
        { path: 'states/rajasthan', element: <Rajasthan /> },
        { path: 'states/sikkim', element: <Sikkim /> },
        { path: 'states/tamil-nadu', element: <TamilNadu /> },
        { path: 'states/telangana', element: <Telangana /> },
        { path: 'states/tripura', element: <Tripura /> },
        { path: 'states/uttar-pradesh', element: <UttarPradesh /> },
        { path: 'states/uttarakhand', element: <Uttarakhand /> },
        { path: 'states/west-bengal', element: <WestBengal /> },
        { path: 'states/andaman-and-nicobar-islands', element: <AndamanAndNicobarIslands /> },
        { path: 'states/chandigarh', element: <Chandigarh /> },
        { path: 'states/dadra-and-nagar-haveli-and-daman-and-diu', element: <DadraAndNagarHaveliAndDamanAndDiu /> },
        { path: 'states/delhi', element: <Delhi /> },
        { path: 'states/jammu-and-kashmir', element: <JammuKashmir /> },
        { path: 'states/ladakh', element: <Ladakh /> },
        { path: 'states/lakshadweep', element: <Lakshadweep /> },
        { path: 'states/puducherry', element: <Puducherry /> },
        {/* path: '*', element: <RoutingError /> */},
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
