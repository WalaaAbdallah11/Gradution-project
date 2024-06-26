import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from './../../../Api/axios';
import SoilTypeList from "./SoilTypeList";
import axios from "axios";
import { baseURL2 } from "../../../Api/Api";
import soilType from './../../../assets/plant-leaf 1 (1).png';
import upload from './../../../assets/upload.png' 
import vector from './../../../assets/Vector.png';
import SoilTypeDetails from "./SoilTypeDetails";
import SoilCrop from "./SoilCrop";
import SearchIcon from '@mui/icons-material/Search';




function SoilType() {
  const [Soil, setSoil] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredSoil, setFilteredSoil] = useState([]);
  const [fileup, setfileup] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/soils")
      .then((data) => {
        console.log(data.data);
        setSoil(data.data);
        setFilteredSoil(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function HandleSubmit() {
    setLoading(true);
    // قيمة ثابتة لتجربة التصفية
    const soilName = "Chalky".toLowerCase();
    const matchedSoil = Soil.filter(soil => soil.name.toLowerCase() === soilName);
    setFilteredSoil(matchedSoil);
    setLoading(false);
  }

  const handleFileChange = (e) => {
    const file = e.target.files.item(0);
    setfileup(file);
    HandleSubmit();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filtered = Soil.filter(soil => soil.name.toLowerCase().includes(searchTerm));
    setFilteredSoil(filtered);
  };

  return (
    <>
      <div className="text-center" style={{ width: '100%', backgroundColor: 'rgba(238, 238, 238, 0.5)' }}>
        <div>
          <img src={soilType} alt='not found' style={{ marginTop: '40px' }} />
          <img src={vector} alt='not found' style={{ marginTop: '195px', marginLeft: '-26px' }} />
        </div>
        <p style={{ color: "#6F9A61", fontSize: "44px", fontWeight: 'bold' }}>Identify Soil For Free</p>
        <p style={{ color: "black", fontSize: "26px" }}>You Can Take a photo or search by soil name</p>
        <input 
          placeholder="Enter Common Name" 
          onChange={handleSearchChange} 
          style={{ width: '50%', marginBottom: '40px', borderRadius: '50px' }} 
        />
        <input 
          id="file-upload" 
          className="image-upload" 
          onChange={handleFileChange} 
          type="file" 
          style={{ display: 'none' }} 
        />
        <label htmlFor="file-upload" style={{ cursor: 'pointer', marginLeft: '-55px' }}>
          <img src={upload} alt="Upload Icon" />
        </label>
      </div>

      <div className="container">
        <h2 className="text-center" style={{ color: "#6F9A61", fontSize: "57px", paddingTop: '30px', fontWeight: 'bold' }}>Soil Type</h2>
        <p className="text-center" style={{ fontSize: "16px", marginBottom: '55px', color: 'gray' }}>
          "Detect The type of the soil, Know information about every soil and 
          Know <br />the best plant rely on the type soil"
        </p>
        <div className="row">
          {filteredSoil &&
            filteredSoil.map((soil, index) => (
              <div key={soil.id}>
                <SoilTypeList soil={soil} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
export default SoilType;


// function SoilType() {

//   const [Soil, setSoil] = useState([]);
//   const [search, setSearch] = useState("")
//   const [Crop, SetCrop] = useState([]);
//   const [fileup, setfileup] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     Axios.get(`http://127.0.0.1:8000/api/soils`)
//       .then((data) => {
//         console.log(data.data);
//         setSoil(data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//   }, []);


//   async function HandleSubmit(e) {
//     setLoading(true);
//     // e.preventDefault();
//     const form = new FormData();
//     form.append('fileup', fileup);
//     try {
//       const res = await Axios.post(`http://127.0.0.1:5000/api`, form);
//       console.log(res.data.soilname);
//       setLoading(false);
//       // window.location.pathname = "/soilType/soilTypeId";
//     } catch (err) {
//       setLoading(false);
//       console.log(err);
//     }
//   }

//   const handleFileChange = (e) => {
//     const file = e.target.files.item(0);
//     setfileup(file);
//     HandleSubmit(file);
//   };

//   return (
//     <>
//       <div className="text-center" style={{ width: '100%', backgroundColor: 'rgba(238, 238, 238, 0.5)' }}>
//         <div>
//           <img src={soilType} alt='not found' style={{ marginTop: '40px' }} />
//           <img src={vector} alt='not found' style={{ marginTop: '195px', marginLeft: '-26px' }} />
//         </div>
//         <p style={{ color: "#6F9A61", fontSize: "44px", fontWeight: 'bold' }}>Identify Soil For Free</p>
//         <p style={{ color: "black", fontSize: "26px" }}>You Can Take a photo or search by soil name</p>
//         <input placeholder="Enter Common Name" onChange={event =>
//           setSearch(event.target.value)} style={{ width: '50%', marginBottom: '40px', borderRadius: '50px' }} />

//         {/* <div className="text-center mt-5"> */}
//         <input id="file-upload" className="image-upload" onChange={handleFileChange} type="file" style={{ display: 'none' }} />
//         <label htmlFor="file-upload" style={{ cursor: 'pointer', marginLeft: '-55px' }}>
//           <img src={upload} alt="Upload Icon" />
//         </label>
//         {/* </div> */}

//       </div>

//       {/* ll */}
//       {/* <div className="text-center mt-5" style={{}}>
//       <input id="file-upload" className="image-upload" onChange={(e) => setfileup(e.target.files.item(0))} type="file" style={{ display: 'none' }} />
//           <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
//             <img src={upload} alt="Upload Icon" />
//           </label>
//              <button type="submit" className="btn-upload" onClick={HandleSubmit} style={{ background: 'none', border: 'none',marginLeft:'-40px' }}>
//             <SearchIcon style={{ fontSize: '2rem', color: '#6F9A61' }} />
//           </button>
//         </div> */}



//       <div className="container">
//         <h2 className="text-center " style={{ color: "#6F9A61", fontSize: "57px", paddingTop: '30px', fontWeight: 'bold' }}>Soil Type</h2>
//         <p className="text-center " style={{ fontSize: "16px", marginBottom: '55px', color: 'gray' }}>
//           "Detect The type of the soil , Know information about every soil and
//           Know <br />the best plant rely on the type soil"</p>

//         <div className="row">
//           {Soil &&
//             Soil.filter(soil => {
//               if (search === '') {
//                 return soil;
//               } else if (soil.name.toLowerCase().includes(search.toLowerCase())) {
//                 return soil;
//               }
//             }).map((soil, index) => {
//               return (
//                 <div key={soil.id}>
//                   <SoilTypeList soil={soil} />
//                 </div>
//               );
//             })}
//         </div>
//       </div>
//     </>

//   )
// }
// export default SoilType;























{/* {Soil.map((soil) => {
            return (
              <div className="col-md-4  " key={soil.id} style={{ marginTop: '20px' }}>
                <SoilTypeList soil={soil} />
              </div>
            );
          })} */}