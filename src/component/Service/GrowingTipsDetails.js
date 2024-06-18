import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GrowingDetails from './../../assets/GrowingTipsDetails.png';
import { Axios } from './../../Api/axios';
import { dark } from "@mui/material/styles/createPalette";
import aboutUs from './../../assets/aboutUs.png';
// import axios from "axios";


function GrowingTipsDetails(GrowingTipsId) {
    
    const api_url = "https://fakestoreapi.com/products";
    // const api_url = "http://127.0.0.1:8000/api/growing_tips";
    const [Growing, setGrowing] = useState({});
    const params = useParams();

    useEffect(() => {
        // fetch(`${api_url}/${params.GrowingTipsId}`)
        //     .then((res) => res.json())
        //     .then((data) => setGrowing(data));

        Axios.get(`http://127.0.0.1:8000/api/growing_tips/${params.GrowingTipsId}`)
        .then((data )=> {
            console.log(data.data.tip);
            setGrowing(data.data.tip)})

        .catch((error) => {
            console.log(error);
        });
        
       
        
       
    }, []);

    return (
        <>
           

            {/* new */}
            {/* <div className="heading"> */}
                <h1 className="text-center" style={{ color: "#6F9A61", fontSize: "47px", paddingTop: '30px',fontWeight:'bold' }}>Growing Details</h1>
                <p className="text-center " style={{ fontSize: "18px",color:'gray',marginBottom:'60px' }}>"{Growing.slug}" </p>
            {/* </div> */}
            
            <div className="about-container">
              <div className="row">
                 <div className="col-md-6">
                   <img src={Growing.image} alt="chosse us"style={{width:'100%',borderRadius:'15px',height:'355px'}} />
                 </div>
                 <div className="col-md-6" style={{paddingTop:'8px'}} >
                   <div className="title" style={{display:'flex',justifyContent:'space-between'}}>
                    <h2 style={{ color: '#6f9A61', fontSize: '25px',fontWeight:'bold'}}> {Growing.title}</h2>
                    {/* <h5 style={{color:'gray',fontSize: '15px'}}>By Ahmed   </h5> */}
                    {/* {Growing.user.name} */}
                  </div> 
                  <p>{Growing.slug}  {Growing.body}</p>
                  {/* <div className="body"style={{fontSize:'17px'}}>
                    {Growing.body},he
                  </div> */}
              
             
              </div>
            </div>
          

            </div>

        </>
    )
}

export default GrowingTipsDetails;




 {/* <h1>
                GrowingTipsDetails - {Growing.title} {params.GrowingTipsId}
                
            </h1> */}
            {/* <div className='Growingdetails' style={{ paddingTop: '30px',width:'80%',margin:'0 auto' }}>
                <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '35px' }}>Growing Tips</h2>
                <div className="GrowingContent" style={{ display: 'flex', paddingTop: '40px', paddingLeft: '50px',paddingRight:'50px' }}>
                    <img src={GrowingDetails} style={{ maxWidth: '100%', height: '100%' }} />
                    <div className="GrowingText">
                        <h5 style={{ color: '#6f9A61', fontSize: '25px', paddingTop: '10px', paddingLeft: '15px' }}>
                            sunlight Tips
                            {Growing.title}
                            </h5>
                        <p style={{ paddingLeft: '15px' }}>jhguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            variant hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jksssss
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            hguit hhjt7i jkssssssssk nnnnnnnnnnn hhhhhhhh hfuibh htujgv hgih lorem  lorem
                            
                           
                           
                        </p>
                    </div>
                </div>



            </div> */}