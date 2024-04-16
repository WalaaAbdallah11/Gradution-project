import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import {Link , Navigate} from 'react-router-dom';
import logo from './../../../assets/logo.png';
import './Navs.css'
import Home from '../../Home/Home';
import Service from "../../Service/Service";
import ServiceItem from "../../Service/ServiceItem";

// ward
import Cookie from 'cookie-universal';

// import { Axios } from "../Api/axios";
import { Axios } from '../../../Api/axios';
import { Dropdown } from "react-bootstrap";
import {useEffect, useState } from "react";
// import { USER } from "../Api/Api";
// import { USER } from '../../../Api/Api';
// *************************




const Navs = () => {
  // ward
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
  console.log(token);
  
  const [name, setName] = useState("");
  const [is_admin, setIs_admin] = useState("");

//   async function fetchData() {
//       try {
//           if (!token) {
//               return;
//           }
//           Axios.get(`/${USER}`)
//           .then((data) => {setName(data.data.name)
//               setIs_admin(data.data.is_admin)
//           })       
//           .catch(() => Navigate("/login", {replace: true}));
          
//       } catch (error) {
//           console.log(error);
//       }
//   }
//   useEffect(() => {
//       fetchData();
//   }, []);


  async function handleLogout() {
      try {
          const res = await Axios.post(`http://127.0.0.1:8000/api/logout`);
          cookie.remove("e-commerce");
          window.location.pathname = "/login";
      } catch (err) {
          console.log(err);
      }
  }
  // *************************

  return (
    
      <Navbar expand="lg">

        <Navbar.Brand href="#home">
          <img src={logo} title="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/sensor">Sensor</Link>
            <Link to="/community">Community</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
          </Nav>
         
          <Nav className="Register">
           {/* <Link to="/Sign Up">Sign Up</Link>
           <Link to="/Sign In">Sign In</Link> */}
           {!token ? (
                        <>
                            <Link
                                to="/register"
                                style={{ textAlign: "center" }}
                                className="register-nav"
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                style={{ textAlign: "center" }}
                                className="register-nav"
                            >
                                Login
                            </Link>
                        </>
                    ) : (<> {is_admin === 1 ? <Link
                        to="/dashboard"
                        style={{ textAlign: "center" }}
                        className="register-nav"
                    >
                        Dashboard
                    </Link> : ' '}
                        <Dropdown className="mt">
                            <Dropdown.Toggle variant=" button-color text-white bg-black " >
                                {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item onClick={handleLogout} className="bgcolor">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> </>)}

          </Nav> 
          

        </Navbar.Collapse>
      </Navbar>
     

  )
}

export default Navs;