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
// import Err404 from "./Pages/Auth/404";
// new
import PlantDetalis from './Pages/Website/PlantDetalis';
import Consultation from './Pages/Website/Consultation';
import SUitablePlant from './Pages/Website/SuitablePlant';
import PlantDetection from './Pages/Website/PlantDetection';
import PlantDiseases from './Pages/Website/PlantDiseases';
// 
import RequireBack from "./Pages/Auth/RequireBack";
import Posts from "./Pages/Dashboard/Posts";
import AddPost from "./Pages/Dashboard/AddPost";
import Post from "./Pages/Dashboard/Post";
// import Test from "./Pages/Website/Test";

import {AllSUITABLEPLANTS, DISEASE, DISEASES, PLANT } from "./Api/Api";
import ResetSuccess from "./Pages/Auth/ResetSuccess";
import VerifySuccess from "./Pages/Auth/VerifySuccess";

import Contact from './Pages/Website/Contact';
import Profile from "./Pages/Website/Profile/Profile";
import Sensor from "./Pages/Website/Sensor";

import Chat from "./Pages/Website/Chat/Chat";
import ForgetPassVerify from "./Pages/Auth/FogetPassVerify";
import Hiring from "./Pages/Website/Hiring";
import ThanksApplying from "./Pages/Website/ThanksApplying";
import EditProfile from "./Pages/Website/Profile/EditProfile";
import Conversation from "./Pages/Website/Chat/Conversition";
import MemberShip from "./Pages/Website/MemberShip";
import BuyingMembership from "./Pages/Website/Buying_Membership";
import Err403 from "./Pages/Auth/403";
import ConsultationProfile from "./Pages/Website/ConsultationProfile";
import AllChats from "./Pages/Website/Chat/AllChats";
import RequireAuthMember from "./Pages/Auth/RequireAuth copy";
import AddQuestions from "./Pages/Website/Profile/AddQuestions";
import CardQuestion from "./component/CardQuestion";





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
import blogg from './component/Home/blogg';
import Blogg from './component/Home/blogg';


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index path='home' element={<Home />} />
    <Route index path='blogg' element={<Blogg />} />
    <Route index path='blogg/:blogId' element={<BlogDetails />} />
    {/* <Route index path='home/:blogId' element={<BlogDetails />} /> */}
    <Route path='service' element={<Service/>} />
    <Route path='community' element={<Community/>} />
    <Route path='AboutUs' element={<AboutUs/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='GrowingTips' element={<GrowingTips/>} />
    <Route path='GrowingTips/:GrowingTipsId' element={<GrowingTipsDetails/>} />
    {/* <Route path='/consultation' element={<Consultation/>}/> */}
    <Route path='/sensor' element={<Sensor/>}/>
    <Route path='/soilType' element={<SoilType/>}/>
    <Route path='/soilType/:soilTypeId' element={<SoilTypeDetails/>} />
    

     {/* ward */}
     <Route element={<RequireBack></RequireBack>}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          {/* <Route path="/test" element={<Test />}></Route> */}
        </Route>
        <Route path="/*" element={<Err403></Err403>}></Route>
        <Route path='/sendotp' element={<SendOtp />}></Route>
          <Route path='/verifyotp' element={<VerifyOtp />}></Route>
          <Route path='/resetpassword' element={<ResetPassword />}></Route>
          <Route path='/resetsuccess' element={<ResetSuccess />}></Route>
          <Route path='/suitableplant' element={<SUitablePlant></SUitablePlant>}></Route>
          <Route path='/plantdetection' element={<PlantDetection></PlantDetection>}></Route>
          <Route path="/profile" element={<Profile></Profile>}> </Route>
         {/* <Route path="/addquestion" element={<AddQuestion></AddQuestion>}></Route> */}
          <Route path="/editprofile" element={<EditProfile></EditProfile>}></Route>
          <Route path="/hiring" element={<Hiring></Hiring>}></Route>
          <Route path="/thanksapplying" element={<ThanksApplying></ThanksApplying>}></Route>
          <Route path="/membership" element={<MemberShip></MemberShip>}></Route>
          <Route path="/membership/:membershipId" element={<BuyingMembership></BuyingMembership>}></Route>
          <Route path="/chat" element={<Chat></Chat>}></Route>
          <Route path="/allchats" element={<AllChats></AllChats>}></Route>
          <Route path="/allchats/:convID" element={<Conversation></Conversation>}></Route>

          <Route path={`${AllSUITABLEPLANTS}/${PLANT}/:plantId`} element={<PlantDetalis></PlantDetalis>}></Route>
          <Route path={`${DISEASES}/${DISEASE}/:diseaseId`} element={<PlantDiseases></PlantDiseases>}></Route>

          <Route  element={ <RequireAuthMember allowedMemberShip={["3","2","1"]}></RequireAuthMember>}>
          <Route path='/consultation' element={<Consultation></Consultation>}></Route>
          <Route path='/consultation/:consID' element={<ConsultationProfile></ConsultationProfile>}></Route>
         </Route>

         <Route  element={ <RequireAuthMember allowedMemberShip={["3","2","1"]}></RequireAuthMember>}>
          <Route path='/addquestions' element={<AddQuestions></AddQuestions>}></Route>
          <Route path='/cardquestion' element={<CardQuestion></CardQuestion>}></Route>
         </Route>

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
                path="posts/edit/:id"
                element={<Post></Post>}
              ></Route>
              <Route
                path="posts/create_post"
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
