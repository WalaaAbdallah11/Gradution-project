import { useEffect, useState } from "react";
import { DISEASE, DISEASES,  RELATEDPICTUREDISEASES, baseURL2 } from "../../Api/Api";
// import {useParams } from "react-router-dom";
import CardRelatedPic from "../../component/CardRelatedPic";
// import CardRelatedPic from "../../Components/CardRelatedPic";
import Navs from "../../component/Home.js/Navs/Navs";
import { Axios } from "../../Api/axios";
// import CardSuitableP from "../../Components/CardSuitableP";

import { useParams } from "react-router-dom";

export default function PlantDiseases(props) {
    const params = useParams();

    const [disease, setDisease] = useState({});
    // const [relatedPictures, setrelatedPictures] = useState([]);

  
    useEffect(() => {
        Axios.get(`/${DISEASES}/${DISEASE}/${params.diseaseId}`)
            .then((disease) => setDisease(disease.data.disease));
    }, []);

    // useEffect(() => {
    //     fetch(`${baseURL2}/${RELATEDPICTUREDISEASES}`)
    //         .then((res) => res.json())
    //         .then((data) => setrelatedPictures(data));/
    // }, []);

    return (
        <>
        {/* <NavBar></NavBar> */}
            <h1 className="plantDetDes">Plant Diseases</h1>
            <div className=' d-flex align-content-center'>
                    <img src={disease.image}  alt="img" className="imgplantdetial col-4"/> 
                    <div className="contentplant col-4">
                        <h3 className="limitnumberh">
                            {disease.name}
                        </h3>
                        <p className="limitnumber"><span className="fw-bold m-1">Description :</span>{disease.description}</p>
                        <p><span className="fw-bold m-1">Prevention and Control :</span>{disease["Prevention and Control"]}</p>
                        {/* <Link to={`/product/${disease.id}`} showButton={true} c bG lassName="btn-detail">Read More</Link>   */}
                    </div> 
                    
                </div>

            {/* <div className="cards" id="cards">
                <h2 className="plantDetDessec">Related Pictures</h2>
                <div className='container'>
                    {relatedPictures.map((relatedPicture) => {
                        return (
                            <div key={relatedPicture.id}>
                                <CardRelatedPic relatedPicture={relatedPicture} />
                            </div>
                        );
                    })}
                </div>
            </div> */}
            {/* <Footer></Footer> */}

        </>
    );
}