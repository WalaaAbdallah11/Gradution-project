import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home'
import Navs from './component/Home.js/Navs/Navs';
// ward
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import SendOtp from './Pages/Auth/SendOtp';
import VerifyOtp from './Pages/Auth/VerifyOtp';
import ResetPassword from './Pages/Auth/ResetPassword';
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/RequireAuth";
import Err404 from "./Pages/Auth/404";
import RequireBack from "./Pages/Auth/RequireBack";
import Posts from "./Pages/Dashboard/Posts";
import AddPost from "./Pages/Dashboard/AddPost";
import Post from "./Pages/Dashboard/Post";
import Test from "./Pages/Website/Test";
import { DISEASE, PLANT } from "./Api/Api";
import ResetSuccess from "./Pages/Auth/ResetSuccess";
import Consultation from './Pages/Website/Consultation';
import Contact from './Pages/Website/Contact';
import SoilType from './component/Service/SoilType/SoilType';
import SoilTypeDetails from './component/Service/SoilType/SoilTypeDetails';
// **********************


import {
  BrowserRouter,

  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import { Fragment } from 'react';
import GrowingTips from './component/Service/GrowingTips';
import ServiceItem from './component/Service/ServiceItem';
import Service from './component/Service/Service';
import Community from './component/community/community';
import Layout from './component/layout/layout';
import AboutUs from './component/About/aboutUs';
import BlogDetails from './component/Home/BlogDetails';
import GrowingTipsDetails from './component/Service/GrowingTipsDetails';


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index path='home' element={<Home />} />
    <Route index path='home/:blogId' element={<BlogDetails />} />
    <Route path='service' element={<Service/>} />
    <Route path='community' element={<Community/>} />
    <Route path='AboutUs' element={<AboutUs/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='GrowingTips' element={<GrowingTips/>} />
    <Route path='GrowingTips/:GrowingTipsId' element={<GrowingTipsDetails/>} />
    <Route path='/consultation' element={<Consultation/>}/>
    <Route path='/soilType' element={<SoilType/>}/>
    <Route path='/soilType/:soilTypeId' element={<SoilTypeDetails/>} />
    

     {/* ward */}
     <Route element={<RequireBack></RequireBack>}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Route>
        <Route path="/*" element={<Err404></Err404>}></Route>
        <Route path='/sendotp' element={<SendOtp />}></Route>
          <Route path='/verifyotp' element={<VerifyOtp />}></Route>
          <Route path='/resetpassword' element={<ResetPassword />}></Route>
          <Route path='/resetsuccess' element={<ResetSuccess />}></Route>
          <Route
          element={
            <RequireAuth allowedRole={[1]}></RequireAuth>
          }
        >
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
              <Route
                path="posts"
                element={<Posts></Posts>}
              ></Route>
              <Route
                path="posts/:id"
                element={<Post></Post>}
              ></Route>
              <Route
                path="create_post"
                element={<AddPost></AddPost>}
              ></Route>
            </Route>
          </Route>
          {/* ****************** */}

    
  </Route>
))


function App() {
  return (
    // <div className='App'>
    //   <Navs />
    //   <Home />
    // </div>
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
