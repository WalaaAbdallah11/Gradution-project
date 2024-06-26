import { Link } from "react-router-dom";
import "../Css/card.css";
import { DISEASE, DISEASES } from "../Api/Api";
import EastIcon from '@mui/icons-material/East';

export default function CardDiseasesDetection(props) {
    const { PlantDisease ,showButton } = props;
    return (        
                <div className='box'>
                    <img src={PlantDisease.image}  alt="img" /> 
                    <div className="contentbox">
                        <h3 className="limitnumberh" style={{fontWeight:"bold"}}>
                            {PlantDisease.name}
                        </h3>
                        <p className="limitnumber">{PlantDisease.description}</p>
                    </div>
                    {showButton && <div className="infoPlant">
                        
                        <Link to={`/${DISEASES}/${PlantDisease.id}`}>Read More</Link>  
                        <EastIcon className="icon"/>
                    </div> }
                    
                </div>
        );
}
