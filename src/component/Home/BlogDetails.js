import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from './../../Api/axios';
import Blog from "./Blog";
import Home from "./Home";
import { blogs, baseURL } from "../../Api/Api";
import aboutUs from './../../assets/aboutUs.png';

function BlogDetails(blogId) {
    const api_url = "https://fakestoreapi.com/products?limit=5";
    const [blog, setBlog] = useState({});

    const params = useParams();


    useEffect(() => {        
    Axios.get(`http://127.0.0.1:8000/api/growing_tips/${params.blogId}`)
    .then((data )=> {
        console.log(data.data.tip);
        setBlog(data.data.tip)})

    .catch((error) => {
        console.log(error);
    });
    
        }, []);

    return (
        <>
        
       
        <div className="heading">
                <h1>Blog Details  </h1> 
                <p>{blog.slug}</p>       
         </div>
         {/* <p>{blog.slug}</p> */}
           
            
          <div className="about-container">
                <div className="row">
                    <div className="col-md-6" style={{marginBottom:'200px'}}>
                        <img src={blog.image} alt="chosse us" style={{ width: '100%',borderRadius:'15px' ,minHeight:'260px'}} />
                    </div>
                    <div className="col-md-6" style={{ paddingTop: '8px',marginBottom:'200px' }} >                     
                      <h2 style={{ color: '#6f9A61', fontSize: '35px' }}> {blog.title} </h2>                          
                      <p>{blog.slug}</p>
                      <div className="body"style={{fontSize:'18px'}}> {blog.body}  </div>
                    </div>
                </div>
          </div>
        </>
    )
}

export default BlogDetails;


 {/* BlogDetails - {params.blogId} */}