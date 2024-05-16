import React from "react";
import './community.css';
// import { Posts} from './../../assets/data'
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
  const [totalPages] = useState(3);

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
      <h1 style={{ display: 'flex', justifyContent: 'center', color: '#6F9A61', marginTop: '30px', marginBottom: '50px', fontSize: '55px' }}>Our Community</h1>
      {/* <PostCard/> */}

     <div>
      {posts.map((Post) => {

        // <Post  key={Post.id} post={Post}/>
        return (
          <div key={Post.id}>
            <Postts Post={Post} />
          </div>

        );

      })}
      </div>
      <div className="" style={{textAlign:"center"}}>
        <button className="btn-pagination" onClick={handlePrevPage} disabled={currentPage === 1}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <span>{currentPage} - {totalPages}</span>
        <button className="btn-pagination" onClick={handleNextPage} disabled={currentPage === totalPages}>
        <FontAwesomeIcon icon={faAngleRight} />
        </button>     
      </div>

    </>
  )
}

export default Community;