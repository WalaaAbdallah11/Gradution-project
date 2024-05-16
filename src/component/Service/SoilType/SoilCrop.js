import React from 'react';
import EastIcon from '@mui/icons-material/East';
import soildetect from './../../../assets/soildetect .png';
// import './GrowingTips.css';
  
  


import { Link } from "react-router-dom";
 
import SoilType from './SoilType';
import SoilTypeDetails from './SoilTypeDetails';
import { useState } from 'react';

 function SoilCrop(props) {
    const{crops} = props;
    // const [Crop, SetCrop] =useState([]);
    // const [Growings, setGrowing] = useState([]);
     return(
        <>
        
         
            <div className="card" style={{width:'400px' ,height:'800px !important',borderRadius:'30px'}}>
           <img src={crops.image} style={{ minHeight: '170px',borderRadius:'16px' }}/>
          
             <div className="c-contain" style={{backgroundColor:'#fff'}}>
                <h4 className='header' style={{color:'#6f9A61',fontSize:'30px',borderBottom:'2px solid #ddd',paddingBottom:'10px',textAlign:'center', paddingTop:'10px'}}>
                   
                  {crops.name}
                </h4>
               <p className="limitnumber" style={{border:'None' ,padding:'4px',fontSize:'14px', overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box", WebkitLineClamp:" 2", lineClamp: "2",WebkitBoxOrient: "vertical"}}>{crops["Planting Method"]}</p> 
              </div>
             

        </div>
           
         
         </>
    )
  }
  export default SoilCrop;
