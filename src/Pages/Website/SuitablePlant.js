// import {data} from "../../data";
import CardSuitableP from "../../component/CardSuitableP";
import { useEffect, useState } from "react";
import { AllSUITABLEPLANTS, CATOGRIES, baseURL, baseURL2 } from "../../Api/Api";
import Navs from "../../component/Home.js/Navs/Navs";
import { Axios } from "../../Api/axios";

export default function PlantDetalis() {
    const [suitablePlants, setsuitablePlants] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("")


    const getPlants = () => {
        Axios.get(`${baseURL}/${AllSUITABLEPLANTS}`)
            .then((data) => {setsuitablePlants(data.data.crops.data)
                console.log(data.data.crops.data)
                
                });
    }
    //Get Catogries in panigation
    const getAllCategoriesPlants = () => {
        Axios.get(`${baseURL}/${AllSUITABLEPLANTS}/${CATOGRIES}`)
            .then((data) => setCategories(data.data));
    }

    //Get every Catogies alone
    const getPlantsInCategory = (catName) => {
        console.log(catName);
        Axios.get(`${baseURL}/${AllSUITABLEPLANTS}/category/${catName}`)
            .then((data) => setsuitablePlants(data.data));
    }


    useEffect(() => {
        getPlants();
        getAllCategoriesPlants();
    }, []);

    return (
        <>
        {/* <NavBar></NavBar> */}
            <div>
                <div className="cards" id="cards">
                    <h2 className="main-title"> Suitable Plant</h2>
                    <p className="main-titlep limitnumbersuitable">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt.</p>
                    {/* <Search></Search> */}
                    <div>
                        <div className="catogries">
                            <button onClick={() => {
                                getPlants();
                            }} className="btn-catog"> All</button>
                            {
                                categories.map((cat) => {
                                    return <button key={cat} onClick={() => {
                                        getPlantsInCategory(cat)
                                    }} className="btn-catog">{cat}</button>
                                })
                            }
                        </div>
                        <br />
                        <input placeholder="Enter" className="search" onChange={event => setSearch(event.target.value)} /><br />                       
                        <div className="container">
                            
                            {suitablePlants &&
                                suitablePlants.filter(suitablePlant => {
                                    if (search === '') {
                                        return suitablePlant;
                                    } else if (suitablePlant.name.toLowerCase().includes(search.toLowerCase())) {
                                        return suitablePlant;
                                    }
                                }).map((suitablePlant, index) => {
                                    return (
                                        <div key={suitablePlant.id}>
                                            <CardSuitableP suitablePlant={suitablePlant}  showButton={true}/>
                                        </div>

                                    );
                                })}

                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}