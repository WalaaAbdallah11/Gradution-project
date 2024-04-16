import React from "react";
import { Link } from "react-router-dom";
import './aboutUs.css';
import aboutUs from './../../assets/aboutUs.png';


function AboutUs  () {
    return(
        <>
        <div className="heading">
                <h1>About Us</h1>
                <p>Agriculture and soil detection play a crucial role in modern farming practices </p>
        </div>
        <div className="about-container" >
          <div className="row">
            <div className="col-md-6">
              <img src={aboutUs} alt="chosse us"style={{maxWidth:'100%'}} />
            </div>
            <div className="col-md-6" style={{paddingTop:'8px'}} >
              <p>ًWelcome to our AgriGuide Website,We are a graduate team who would like to
                 help develop agriculture using modern technology so we researched how we
                 can develop agriculture and we read about some of the challenges that we face such as
                 <span style={{fontSize:'24px',fontWeight:'bold'}}>:-</span>
              </p>
              <ul style={{fontSize:'18px',paddingLeft:'40px'}}>
                <li>Not choosing the appropriate crop for the type of soil and climate at the present time can 
                cause agriculture to face several problems.Below we review some of these problems:</li>
                <ul style={{fontSize:'18px',paddingLeft:'40px'}}>
                    <li>Lack of Productivity</li>
                    <li>Lack of resources</li>
                    {/* <li>Increased environment risks</li> */}
                </ul>
                <li>Bad timing of planting</li>
                <li>Spread of pests and diseases</li>
                <li>lack of good planting and knowledge</li>
              </ul>
            </div>
          </div>
          <div className="objective">
            <p></p>
          </div>

        </div>
        </>
    );
}

export default AboutUs;