import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Home.css';
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import axios from "axios";
import { Axios } from './../../Api/axios';
import { blogs, baseURL } from "../../Api/Api";
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


function Blogg() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        Axios.get(`http://127.0.0.1:8000/api/blogs`)
            // Axios.get(`${baseURL}/blogs`)
            .then((data) => setBlogs(data.data.blogs));

    }, []);
    return (
        <>
            <section className="ourBlog" >
                <div className="heade">
                    <h1 className="head" style={{ color: '#6F9A61', fontSize: '60px', fontWeight: 'bold', paddingTop: '40px', display: 'flex', justifyContent: 'center' }}>Our Blogs</h1>
                    <p style={{ color: 'gray' }}>"Some blogs teach you more about farming include information on soil conditions,<br /> watering frequency, and other factors"</p>
                </div>
                <div className="container" >
                    <div className="row">
                        {blogs.map((blog) => {
                            return (
                                <div className="col-4" key={blog.id} style={{ marginBottom: '160px' }}>
                                    <Blog blog={blog} />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        </>
    )

}
export default Blogg;
