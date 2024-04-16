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




function Community() {

  const [posts, setposts] = useState([]);
  useEffect(() => {
    Axios.get(`http://127.0.0.1:8000/api/question`)
      .then((data) => {
        console.log(data.data.questions.data);
        setposts(data.data.questions.data);
        })
        .catch((error) => {
        console.log(error);
         });

  }, []);
//   useEffect(() => {
//     Axios.get('http://127.0.0.1:8000/api/growing_tips/1')
//         .then((response) => {
//             console.log(response.data.tip); // تحقق من البيانات المسترجعة
//             setGrowing(response.data.tip);
//         })
//         .catch((error) => {
//             console.log(error); // إذا كان هناك خطأ في الطلب
//         });
// }, []);

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

    </>
  )
}

export default Community;