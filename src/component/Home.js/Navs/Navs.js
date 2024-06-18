import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link , Navigate} from 'react-router-dom';
import logo from './../../../assets/logoo.png';
import './Navs.css'
import Home from '../../Home/Home';
import Service from "../../Service/Service";
import ServiceItem from "../../Service/ServiceItem";
import Blog from "../../Home/Blog";
import Cookie from 'cookie-universal';
import { PROFILE} from "../../../Api/Api";


import { Axios } from '../../../Api/axios';
import { Dropdown } from "react-bootstrap";
import {useEffect, useState } from "react";

const Navs = () => {
  const cookie = Cookie();
  const token = cookie.get("e-commerce");
//   console.log(token);
  
  const [name, setName] = useState("");
  const [is_admin, setIs_admin] = useState("");

  async function fetchData() {
      try {
          if (!token) {
              return;
          }
          Axios.get(`/${PROFILE}`)
          .then((data) => {
            setName(data.data.user.name)
            console.log(data.data.user)
            setIs_admin(data.data.user.is_admin)
          })       
          .catch(() => Navigate("/login", {replace: true}));
          
      } catch (error) {
          console.log(error);
      }
  }
  useEffect(() => {
      fetchData();
  }, []);


  async function handleLogout() {
      try {
          const res = await Axios.post(`http://127.0.0.1:8000/api/logout`);
          cookie.remove("e-commerce");
          window.location.pathname = "/login";
      } catch (err) {
          console.log(err);
      }
  }
 

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
            <Link to="/community">Community</Link>
            <Link to="/AboutUs">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
          </Nav>   
           {/* <Nav className="Register"> */}
           <div className="d-flex"> 
           {!token ? (
                        <>
                            <Link
                                to="/register"
                                // style={{ textAlign: "center" }}
                                // className="register-nav"
                                style={{ textAlign: "center", marginRight:"10px" }}
                                className="btn-dashboard"
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                style={{ textAlign: "center" }}
                                className="btn-dashboard"
                            >
                                Login
                            </Link>
                        </>
                    ) : (<> {is_admin === 1 ? <Link
                        to="/dashboard/posts"
                        style={{ textAlign: "center" }}
                     
                        className="btn-dashboard"
                    >
                        Dashboard
                    </Link> : ' '}
                        <Dropdown className="mt">
                        <Dropdown.Toggle variant=" button-color text-white bg-black " >
                                {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/profile' style={{textDecoration:"none" , color:"black"}}>my Profile</Link>
                                </Dropdown.Item>
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/membership' style={{textDecoration:"none" , color:"black"}}>MemberShip</Link>
                                </Dropdown.Item>
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/hiring' style={{textDecoration:"none" , color:"black"}}>Apply for hiring</Link>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout} className="bgcolor">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> </>)}
                        </div>

          {/* </Nav>  */}
        </Navbar.Collapse>
      </Navbar>

  )
}

export default Navs;


 {/* <Nav className="d-flex"> */}
           {/* <Link to="/Sign Up">Sign Up</Link>
           <Link to="/Sign In">Sign In</Link> */}



            {/* <nav className="Register">
           <div className="d-flex">
                    {!token ? (
                        <>
                            <Link
                                to="/register"
                                style={{ textAlign: "center" }}
                                className="register-navBar"
                            >
                                Register
                            </Link>
                            <Link
                                to="/login"
                                style={{ textAlign: "center" }}
                                className="register-navBar"
                            >
                                Login
                            </Link>
                        </>
                    ) : (<> {is_admin === 1 ? <Link
                        to="/dashboard"
                        style={{ textAlign: "center" }}
                        className="btn-dashboard"
                    >
                        Dashboard
                    </Link> : ' '}
                        <Dropdown className="mt">
                            <Dropdown.Toggle variant=" button-color text-white bg-black " >
                                {name}
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{position:"absolute",zIndex:'2'}}>
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/profile' style={{textDecoration:"none" , color:"black"}}>my Profile</Link>
                                </Dropdown.Item>
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/membership' style={{textDecoration:"none" , color:"black"}}>MemberShip</Link>
                                </Dropdown.Item>
                            <Dropdown.Item className="bgcolor" >
                                    <Link to='/hiring' style={{textDecoration:"none" , color:"black"}}>Apply for hiring</Link>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleLogout} className="bgcolor">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> </>)}
                </div>
                </nav> */}