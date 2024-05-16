import React from "react";
import Navs from "../../component/Home.js/Navs/Navs";
import sensor from '../../assets/sensor.png'

const Sensor = () => {

    return (
        <>
            {/* <NavBar></NavBar> */}
            <div className="sensor" id="sensor">
                <div className="container d-flex align-items-center justify-content-between d-small">
                    <div className="col-5 headersensor" >
                        <p className="sensor-titlep">Welcome to our Website</p>
                        <h2 className="headers">Water sensor </h2>
                        <p className="sensor-title">If you want to buy sensor
                            please click this button</p>
                            <button className="register-navBar btn-sensor">Buy</button>
                    </div>
                    <div>
                    <img src={sensor} alt="img" class="infoSen"></img>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Sensor;

