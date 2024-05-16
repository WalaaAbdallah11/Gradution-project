// import {data} from "../../data";
import CardDiseasesDetection from "../../component/CardDiseaseDetection";
// import CardDiseasesDetection from "../../Components/CardDiseaseDetection";
import { useEffect, useState } from "react";
import { DISEASES} from "../../Api/Api";
import Navs from "../../component/Home.js/Navs/Navs";
import plantLeaf from "../../assets/plant-leaf 1 (1).png";
// import plantLeaf from "../../assets/plant-leaf 1.png";
import vector from "../../assets/Vector.png"
import { Axios } from "../../Api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function PlantDetection() {
    // const [plantDetection, setplantDetection] = useState([]);
    const [PlantDiseases, setPlantDiseases] = useState([]);
    // const [nameDisease, setNameDisease] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(2);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
    

    // const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");

    const getPlantsDisease = () => {
        Axios.get(`/${DISEASES}?page=${currentPage}`)
            .then((data) => {
                setPlantDiseases(data.data.data)
            }
            
            );
    };
   

    useEffect(() => {
        getPlantsDisease();
        // getAllCategoriesPlants();
    }, [currentPage]);

    return (
        <>
            {/* <NavBar></NavBar> */}
            {/* <div>
                <div className="sec2det text-centerr">
                    <img className="text-center" src={plantLeaf}></img>
                    <img className="img-diseases vec" src={vector}></img>
                    <h1 className="main-title-diseases">Identify disease For Free</h1>
                    <p className="main-titlep-diseases">
                        You Can Take a photo or search by Disease  name
                    </p>

                    <br />
                    <input
                        placeholder="Enter Common Name "
                        className="searchDiseases"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <br/>
                </div> */}
                 <div className="text-center" style={{width:'100%',backgroundColor:'rgba(238, 238, 238, 0.5)'}}>
          <img src={plantLeaf} alt='not found'style={{marginTop:'40px'}}/>
          {/* <img className="img-diseases vec" src={vector}></img> */}
          <p style={{ color: "#6F9A61", fontSize: "44px",fontWeight:'bold'}}>Identify Disease For Free</p>
          <p style={{ color: "black", fontSize: "30px"}}>You Can Take a photo or search by Disease name</p>
          <input placeholder="Enter Common Name"  onChange={event => setSearch(event.target.value)}style={{width:'50%',marginBottom:'40px',borderRadius:'50px'}} />
         </div>

                <div className="cards" id="cards">
                    <h2 className="main-title"> Diseases Type</h2>
                    <p className="main-titlep limitnumbersuitable ">
                        Li Europan lingues es membres del sam familie. Lor separat
                        existentie es un myth Por scientie, musica.
                    </p>
                    <div>
                        <div className="container">
                            {PlantDiseases &&
                                PlantDiseases
                                    .filter((PlantDisease) => {
                                        if (search === "") {
                                            return PlantDisease;
                                        } else if (
                                            PlantDisease.name
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        ) {
                                            return PlantDisease;
                                        }
                                    })
                                    .map((PlantDisease, index) => {
                                        return (
                                            localStorage.setItem("DiseaseId", PlantDisease.id),
                                            <div key={PlantDisease.id}>
                                                <CardDiseasesDetection
                                                    PlantDisease={PlantDisease}
                                                    showButton={true}
                                                />
                                            </div>
                                        );
                                    })}
                         <div className="" style={{textAlign:"center"}}>
        <button className="btn-pagination" onClick={handlePrevPage} disabled={currentPage === 1}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <span>{currentPage} - {totalPages}</span>
        <button className="btn-pagination" onClick={handleNextPage} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faAngleRight} />
        </button>
       
      </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}
