import React from "react";
// import ServiceItem from "./ServiceItem";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import soildetect from './../../assets/soildetect .png';
import suitableplant from './../../assets/suitableplant.png';
import smartsensor from './../../assets/smartsensor.png';
import diseasedetection from './../../assets/diseasedetection.png';
import growingtips from './../../assets/growingtips.png';
import consultation from './../../assets/consultation.png';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
import './Service.css';




const Service = () => {
    // const{service} = props;
    return (
        <>
            {/* <h2 className="text-center p-3" style={{ color: "#6F9A61", fontSize: "55px" }}> Our Service</h2> */}
            <div className="container " style={{marginTop:'100px',marginBottom:'150px'}} >
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" >
                            <img src={soildetect} />
                            <div className="c-contain" >
                                {/* header class name */}
                                <h4 className="left" > Soil Detection</h4>
                                <p className="text" >Detect The type of the soil</p>
                                <div className='growbm'>
                                    <Link to="/soilType" > Try It</Link>
                                    <h2 >
                                        <Link to='/soilType'>   <EastIcon /> </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={suitableplant} />
                            <div className="c-contain" >
                                <h4 className="left">Suitable Plant </h4>
                                <p className="text" >The best plant rely on soil type</p>
                                <div className='growbm' >
                                    <Link to="/suitableplant" > Try It </Link>
                                    <h2 >
                                        <Link to='/suitableplant'  >  <EastIcon /> </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={smartsensor} />
                            <div className="c-contain" >
                                <h4 className="left" > Smart Sensor </h4>                                                                
                                <p className="text" >Measure the amount af water</p>
                                <div className='growbm' >
                                    <Link to="/sensor" > Try It  </Link>
                                    <h2>
                                        <Link to='/sensor'  >  <EastIcon />  </Link>                         
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}

            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <img src={diseasedetection} />
                            <div className="c-contain">
                                <h4 className="left" >  Disease Detection  </h4>                                                                
                                <p className="text" >Detect Pests and diseases that can hurt the plant</p>
                                <div className='growbm' >
                                    <Link to="/plantdetection" >    Try It  </Link>
                                    <h2 >
                                        <Link to='/plantdetection' >   <EastIcon />    </Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card">
                            <img src={growingtips} />
                            <div className="c-contain" >
                                <h4 className="left" > Growing Tips </h4>                       
                                <p className="text" >Include information on soil , watering frequency, and other </p>
                                {/* <Link to='/GrowingTips' style={{ textDecoration: 'none', color: '#6F9A61', fontSize: '20px', marginLeft: '250px', paddingTop: '0px' }}>Try It</Link> */}
                                <div className='growbm' >
                                    <Link to='/GrowingTips'> Try It  </Link>
                                    <h2>
                                        <Link to='/GrowingTips'  >  <EastIcon />   </Link> 
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <img src={consultation} />
                            <div className="c-contain" >
                                <h4 className="left" >  Consultation  </h4>                            
                                <p className="text" >Contact with one of our instructors for  advice</p>
                                <div className='growbm' >
                                    <Link to="/consultation" >  Try It  </Link>
                                    <h2 >
                                        <Link to="/consultation"  >  <EastIcon /> </Link>         
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Service;