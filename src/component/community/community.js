import React from "react";
import './community.css';
import axios from "axios";
import { baseURL } from "../../Api/Api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from "./post";
import { Axios } from "./../../Api/axios";
import Postts from "./post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Community() {

  const [posts, setposts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(2);
  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };
  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/question?page=${currentPage}`)
      .then((data) => {
        console.log(data.data.questions.data);
        setposts(data.data.questions.data);
        })
        .catch((error) => {
        console.log(error);
         });

  }, [currentPage]);

  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center', color: '#6F9A61',
        marginTop: '30px',  fontSize: '50px',fontWeight:'bold' }}>Our Community</h1>
        <p className="text-center" style={{marginBottom:'80px',color:'gray'}}>
          "Our community is a unique page where you can post,
         explore published posts to gain more <br/>experience,
       and interact with content through likes."</p>
    
     <div>
      {posts.map((Post) => {
        return (
          <div key={Post.id}>
            <Postts Post={Post} />
          </div>
        );
      })}
      </div>
      <div className="" style={{textAlign:"center"}}>
        <button className="btn-pagination" onClick={handlePrevPage} disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faAngleLeft} /></button>
        <span>{currentPage} - {totalPages}</span>
        <button className="btn-pagination" onClick={handleNextPage} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faAngleRight} />
        </button>     
      </div>

    </>
  )
}

export default Community;








// <h1 style={{ display: 'flex', justifyContent: 'center', color: '#6F9A61',
//        marginTop: '30px',  fontSize: '62px',fontWeight:'bold' }}>Our Community</h1>
//        <p className="text-center" style={{marginBottom:'80px'}}>"Our community is a unique page where you can post, explore published posts to gain more experience,<br/>
//        and interact with content through likes."</p>