import { Link } from "react-router-dom";
import "../Css/card.css";
import { AllSUITABLEPLANTS, PLANT } from "../Api/Api";
import EastIcon from '@mui/icons-material/East';

export default function CardSuitableP(props) {
    const { suitablePlant ,showButton } = props;
    return (       <>
                <div className='box mt-5'>
                    <img src={suitablePlant.image}  alt="img" className="img"/> 
                    <div className="contentbox">
                        <h3 className="limitnumberh" style={{fontWeight:"bold"}}>
                            {suitablePlant.name}
                        </h3>
                      
                        <p className="limitnumber">{suitablePlant["Planting Method"]}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/${AllSUITABLEPLANTS}/${PLANT}/${suitablePlant.id}`}>Read More</Link>  
                        <EastIcon className="icon"/>           
                        </div> }
                    
                </div>
                 
              </> 
        );
}