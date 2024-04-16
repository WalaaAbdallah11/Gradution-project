import React, { Fragment } from "react";
import Navs from "../Home.js/Navs/Navs";
import { Outlet } from "react-router-dom";
import Footer from "../Home/Footer";

const Layout =()=>{
    return(
        <Fragment>
          <Navs />
          <main>
            <Outlet/>
          </main>
          <Footer/> 
        </Fragment>


    )
}
export default Layout;