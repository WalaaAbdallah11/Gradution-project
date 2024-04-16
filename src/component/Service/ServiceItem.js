// import React, { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Service from './Service';
// import {Link } from 'react-router-dom';


// function ServiceItem() {
//     const api_url = "https://fakestoreapi.com/products?limit=5";
//     const [services, setServices] = useState([]);

//     useEffect(() => {
//         fetch(api_url)
//             .then((res) => res.json())
//             .then((data) => setServices(data));
//     }, []);
//     return (
//         <>
//             <h2 className="text-center p-3" style={{ color: "#6F9A61", fontSize: "55px" }}> Our Service</h2>
//             <div className="container">
//                 <div className="row">
//                     {services.map((service) => {
//                         return (
//                             <div className="col-4" key={service.id}>
//                                 <Service service={service} />
                                
//                             </div>

//                         );
//                     })}
//                 </div>
//             </div>
//         </>
//     )
// }
// export default ServiceItem;

{/* <div className="col-4">

<Card style={{ width: '21rem' }}>
    <Card.Img variant="top" src={soildetect} />
    <Card.Body>
    <Card.Title>suitable plant</Card.Title>
    <Card.Text>
    louuu jjgjko jhjygvnju
    </Card.Text>
   <Button variant="primary">try it</Button>
   </Card.Body>
</Card> */}
// </div>


// import React from 'react';
//  import soildetect from './../../assets/soildetect .png';
//  import { Link } from "react-router-dom";

//  function GrowingTipsList(props) {
//     const{Growing} = props;
//     return(
//         <>
//         <div className="card">
//             <img src={soildetec}/>
//             <div className="c-contain" style={{backgroundColor:'#fff'}}>
//                 <h4 className='header' style={{color:'#6f9A61', marginTop:'10px',fontSize:'27px',disdlay:'flex',justifyContent:'center', paddingTop:'5px'}}>
//                     Soil Detection
//                 </h4>
//                 <p className='text' style={{padding:'7px',borderBottom:'2px solid #ddd'}}>soil detection help us you can sea it with our service you are welcome</p>
//                 <Link to={`/GrowinTips/${Growing.id}`} style={{textDecoration:'none',color:"#6f9A61",fontSize:'18px',marginLeft:"138px"}}>
//                     Read More
//                 </Link>
//             </div>

//         </div>
//         </>
//     )
//  }
//  export default GrowingTipsList;
