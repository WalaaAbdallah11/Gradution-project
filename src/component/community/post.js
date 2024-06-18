import './postts.css';
import React, { useEffect, useState } from 'react';
import ImageProfile from './../../assets/userprofile.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import postImage from './../../assets/GrowingTipsDetails.png';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EastIcon from '@mui/icons-material/East';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { Users } from '../../assets/data';
import growingtips from './../../assets/growingtips.png';
import blogimg from './../../assets/blog.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faPaperPlane, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import Community from './community';
import { PROFILE, baseURL, QUESTUION } from '../../Api/Api';
import axios from 'axios';
import { Axios } from "./../../Api/axios";
import Loading from "./../Loading";
import moment from 'moment';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";



export default function Postts(props) {
    const { Post } = props;
    // const { Post } = props;
    // const { dataprofile } = props;
    const [dataprofile, setProfiles] = useState([]);
    const [LikesCount,setLikesCount] = useState(Post.likes);
    const [isLiked,setIsLiked] = useState(false);
    
    const [addLike, setAddLike] = useState([]);
    const [free_trails, setfree_trails] = useState("");
    const [membership_level_id, setmembership_level_id] = useState("");

    // const [loading, setLoading] = useState(false);
    // const [body, setBody] = useState("");
 
    // const [Comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [body, setBody] = useState('');
    const [Comments, setComments] = useState([]);

    const formattedDate = moment(Post.updated_at).format('YYYY-MM-DD HH:mm:ss');
  
   
    const nav = useNavigate();
    

    useEffect(() => {
        Axios.get(`${baseURL}/${PROFILE}`)
          .then((dataprofile) => {
            setProfiles(dataprofile.data.user)
            setmembership_level_id(dataprofile.data.user.membership_level_id)
            setfree_trails(dataprofile.data.user.free_trails)
            // setQuestions(dataprofile.data.user.questions)
            // console.log(dataprofile.data.user.questions)
            console.log(dataprofile.data.user)
    
          })            
      }, []);

    //  const [isLiked, setIsLiked] = useState(false);



    useEffect(() => {
        const savedLikesCount = localStorage.getItem(`likesCount_${Post.id}`);
        const savedIsLiked = localStorage.getItem(`isLiked_${Post.id}`);

        if (savedLikesCount) {
            setLikesCount(parseInt(savedLikesCount, 10));
        }

        if (savedIsLiked) {
            setIsLiked(JSON.parse(savedIsLiked));
        }
    }, [Post.id]);

     async function handleLike(e) {
        setLoading(true);
        e.preventDefault();

        try {
            const res = await Axios.post(`http://127.0.0.1:8000/api/questions/${Post.id}/likes`);
            console.log(res);
            const newIsLiked = !isLiked;
            setIsLiked(newIsLiked);
            const newLikesCount = newIsLiked ? LikesCount + 1 : LikesCount - 1;
            setLikesCount(newLikesCount);
            localStorage.setItem(`likesCount_${Post.id}`, newLikesCount);
            localStorage.setItem(`isLiked_${Post.id}`, newIsLiked);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }
    
   

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await Axios.get(`${baseURL}/questions/${Post.id}/comments`);
                setComments(res.data);
                localStorage.setItem(`comments_${Post.id}`, JSON.stringify(newComments));
            } catch (err) {
                console.log(err);
            }
        };

        const savedComments = localStorage.getItem(`comments_${Post.id}`);
        if (savedComments) {
            setComments(JSON.parse(savedComments));
        } else {
            fetchComments();
        }
    }, [Post.id]);
    

// شغال
    // async function onClickHandler(e) {
    //     setLoading(true);
    //     e.preventDefault();

    //     const form = new FormData();
    //     form.append('body', body);
    //     try {
    //         const res = await Axios.post(`${baseURL}/${QUESTUION}/${Post.id}`, form)
    //         // console.log(res)   
    //         // setComments([...Comments, res.data])      
    //         // setBody("");
    //         const newComments = [...Comments,newComments];
    //         setComments(newComments);
    //         localStorage.setItem(`comments_${Post.id}`, JSON.stringify(newComments));
    //         setBody('');

            
    //     } catch (err) {
    //         nav('/404', { replace: true });

    //         setLoading(false);
    //         console.log(err);
    //     }

    // }
    async function onClickHandler(e) {
        setLoading(true);
        e.preventDefault();
    
        const form = new FormData();
        form.append('body', body);
    
        try {
            const res = await Axios.post(`${baseURL}/${QUESTUION}/${Post.id}`, form);
            const newComment = res.data; // الحصول على التعليق الجديد
            const newComments = [...Comments, newComment]; // إضافة التعليق الجديد إلى قائمة التعليقات الحالية
            setComments(newComments); // تحديث حالة التعليقات
            localStorage.setItem(`comments_${Post.id}`, JSON.stringify(newComments)); // تخزين التعليقات المحدثة في localStorage
            setBody(''); // إعادة تعيين حقل النص إلى فارغ
        } catch (err) {
            nav('/404', { replace: true }); // إذا كان هناك خطأ، الانتقال إلى صفحة الخطأ
            console.log(err);
        } finally {
            setLoading(false); // إيقاف عرض مؤشر التحميل
        }
    }


    // display comment
    const handleShow = () => {
        if (show === false) {
            setShow(true)
        } else {
            setShow(false)
        }
    }



    return (
        <>
               {/* {loading && <Loading></Loading>} */}
          
            <div className='post'>
                <div className='postWrapper'>
                    <div className='postTop'>
                        <div className='PostTopLeft'>
                            
                        <Link to='/profile' style={{textDecoration:"none" , color:"black"}}>
                            <img className='postProfileImg'
                                src={Post.user.thumbnail}
                                // src={Post.user.thumbnail}
                                alt='not found' /></Link>

                            {/* <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}/> */}
                            <span className='postUsername' style={{fontSize:'18px'}}>{Post.user.name} </span>
                            <span className='postDate' >{formattedDate}</span>
                            {/* <span className='postDate' >{Post.updated_at}</span> */}
                        </div>
                        <div className='PostTopRight'>
                            <MoreVertIcon />
                        </div>
                    </div>
                    <div className='postCenter'>
                        <span className='postText' style={{ paddingLeft: '20px',fontSize:'19px' }}>{Post.body}</span>
                        {/* <img className='postImg' src={Post.image} alt="" style={{ width: '758px ' }} /> */}
                        {/* <img className='postImg' src={post.photo} alt=""/> */}
                    </div>
                    <div className='postBottom'>
                          <div  style={{ marginLeft: '20px' }}>
                          
                  
                    {/* <span className='likeButton' onClick={handleLike}> */}
                        {/* {LikesCount}  */}
                     
                    {/* </span> */}
                       {membership_level_id === 1 && free_trails === 0 ? (
                                <Link style={{ textDecoration: "none", color: "black" }} onClick={() => (alert("go to pricing page"))}>
                                    <FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "33px" }} />
                                    <span>{LikesCount}</span>
                                </Link>
                            ) : (
                                <Link style={{ textDecoration: "none", color: "black" }}>
                                    <FontAwesomeIcon icon={faThumbsUp} style={{ color: isLiked ? "blue" : "black", marginRight: "6px", fontSize: "33px" }}
                                        onClick={handleLike}
                                    />
                                    <span>{LikesCount}</span>
                                </Link>
                            )}
                        </div>
                    
                        <div className='postbottomRight'>
                            <span className='postCommentText' onClick={handleShow} >  
                                {/* <ChatBubbleOutlineIcon style={{color:'black' }} /> */}
                                <FontAwesomeIcon icon={faComment} style={{ marginRight: "8px", color: "black", fontSize: "30px" ,marginBottom:"-6px" }} />
                                <span >Comment</span>
                                </span>
                        </div>
                    </div>
                    {show === true ?
                    

                    
                        <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>

                            {Comments.map((Comment) => (
                            
                            <div  key={Comment.id} style={{ display: 'flex',marginBottom:'15px' }}>
                                <img className='postProfileImg' src={Comment.thumbnail} alt='' />
                                {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}

                                {/* <input type='text' className='commentInput' style={{ display: 'flex', flexWrap: 'wrap',width:'auto',borderRadius:'15px' }}
                                value={Comment.body} /> */}
                                <div  style={{ display: 'flex',flexDirection:'column' ,flexWrap:'wrap', marginLeft:'20px',width:'auto',height:'auto',backgroundColor:'#dadada',padding:"5px 20px 5px 20px",borderRadius:'10px'}}> 

                                <p style={{marginLeft:'10px',fontSize:'16px',fontWeight:'bold'}}>{dataprofile.name}</p>
                               
                                <p style={{marginLeft:'10px',marginTop:'-20px',fontSize:'19px',marginBottom:'-1px'}}>{Comment.body}</p>
                                </div>
                            </div>  

                         ))}

                            {/* image */}
                            {/* ask */}
                        
                            <img className='postProfileImg' src={dataprofile.thumbnail} alt='' />
                                                        
                                
                            {membership_level_id === 1 && free_trails === 0 ? (
                            <Link style={{ textDecoration: "none", color: "black" }} onClick={() => (alert("Go to pricing page"))}>
                            <input type='text' className='commentInput' style={{ backgroundColor: '#dadada', borderRadius: '10px', marginLeft: '20px' }} placeholder='Write Your Comment' disabled />
                            </Link>
                            ) : (
                                 <>
                           <input type='text' className='commentInput' style={{ backgroundColor: '#dadada', borderRadius: '10px', marginLeft: '20px' }}
                             value={body}
                             onChange={(e) => setBody(e.target.value)}
                            placeholder='Write Your Comment'
                            />
                           <button className='postco' style={{  width: '48px', marginLeft: '-62px', height: '5vh', border: 'none' }}>
                              <SendIcon className='addCommentbtn' onClick={onClickHandler} />
                           </button>
                           </>
                           )}
                               
                            
                        </div>
                        : ''}
                </div>
            </div>
        </>
    )
}








//  <ThumbDownOffAltIcon style={{ color: 'rgb(158, 150, 150)',paddingLeft:'10px' }} className='likeIcon' onClick={likeHandler} />
// <span className='postLikeCounter'>{like}</span> 



{/* <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '100px', paddingTop: '20px' }}>
<img className='postProfileImg' src={ImageProfile} alt='' /> */}
{/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */ }
{/* <input type='text' className='commentInput'
    value={Comment}
    onChange={onChangeHandler}
    placeholder='Write Your Comment' />
<button className='addCommentbtn'
    onClick={onClickHandler}>Add Comment</button>
</div> */}





    // const [like, setLike] = useState(post.like)
    // const [like, setLike] = useState(FavoriteBorderIcon)
    // const [isLiked, setIsLiked] = useState(false)
    // const [addLike, setAddLike] = useState([]);


   




    // const likeHandler = () => {
    //     // setLike(isLiked ? like - 1 : like + 1)
    //     // if(like === FavoriteBorderIcon){
    //     //          setLike(FavoriteIcon);
    //     //          setIsLiked(isLiked +1)

    //     setIsLiked(!isLiked)
    //     if(like === FavoriteBorderIcon){
    //         setLike(FavoriteIcon);
    //         setIsLiked(isLiked +1)
    //     // }

    //     }


    //     // setIsLiked(!isLiked)
    //     // if(like === post.like){
    //     //     setLike(FavoriteIcon);
    //     //     setIsLiked(isLiked +1)
    //     // }
    // }

     // const handleLikeClick = ()=>{
    //     Axios.post(`http://127.0.0.1:8000/api/questions/${Post.id}/likes`)
    //     .then(res =>{
    //         setIsLiked({...isLiked, isLiked:isLiked.likes +1});
    //     })
    //         .catch(error=>
    //         console.error('Error liking post:',error));
     
    // }
 
// profile
     {/* <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}/> */}





                    {/* show comment */}
                    {/* التعليق ال بكتبو بيظخر فيه */}
                    {/* {show ===true? */}

                    {/* {Comments.map((text) => (
                         
                        <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', paddingTop: '20px' }}>
                            <img className='postProfileImg' src={ImageProfile} alt='' />
                           
                          <input type='text' className='commentInput'  style={{display:'flex',flexWrap:'wrap'}}
                            
                          value={text} /> 
                        </div>
                      
                       
                    ))} */}
                    {/* :''} */}

                        {/* <div className='postbottomLeft' style={{ marginLeft: '30px' }}>

                            <span ><FavoriteBorderIcon style={{ color: 'rgb(158, 150, 150)' }} className='likeIcon' onClick={handleLikeClick} /></span>
                            <span className='postLikeCounter'>{Post.likes}</span>


                        </div> */}


                        // {membership_level_id === 1 && free_trails === 0 ?
                        //     (<Link style={{ textDecoration: "none", color: "black" }} onClick={() => (alert("go to pricing page"))}>
                        //         {Post.likes === 0 ? <FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }} /> : <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }} />
                        //         }
                        //         <span >
                        //             {Post.likes}
                        //         </span>
                        //     </Link>) : (

                        //         <Link style={{ textDecoration: "none", color: "black" }} >
                        //             {isLiked ? (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }}
                        //                 value={addLike}
                        //                 onChange={(e) => setAddLike(e.target.value)}
                        //                 onClick={HandleAddLike}
                        //             />) : (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }}
                        //                 value={addLike}
                        //                 onChange={(e) => setAddLike(e.target.value)}
                        //                 onClick={HandleAddLike}
                        //             />)}

                        //             <span >
                        //                 {Post.likes}
                        //             </span>
                        //         </Link>

                        //     )}


                         // value={Comment.body}
                        //  comment
                         // const onClickHandler = async () => {
    //     try {
    //         const response = await Axios.post('http://127.0.0.1:8000/api/question/${Post.id}', {
    //             body: body,
    //             // body: Comment,
    //             name: dataprofile.name,
    //             thumbnail: dataprofile.thumbnail
    //         });

    //         if (response.status === 200) {
    //             setComments([...Comments, response.data]);
    //             // setComments((prevComments) => [...prevComments, response.data]);
    //             setBody('');
    //         }
    //     } catch (error) {
    //         console.error('Error adding the comment:', error);
    //     }
    // };











// {membership_level_id === 1 && free_trails === 0 ?
//                             (<Link style={{ textDecoration: "none", color: "black" }} onClick={() => (alert("go to pricing page"))}>
//                                {/* {Post.likes === 0 ? <FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }} /> : <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }} />
//                                 }
//                                 <span >
//                                 {LikesCount} 
//                                 </span> */}
//                             </Link>) : (

//                                 <Link style={{ textDecoration: "none", color: "black" }} >
//                                     {LikesCount ? (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }}
//                                         value={LikesCount}
//                                         onChange={(e) => setLikesCount(e.target.value)}
//                                         onClick={handleLike}
//                                     />) : (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }}
//                                         value={LikesCount}
//                                         onChange={(e) => setLikesCount(e.target.value)}
//                                         onClick={handleLike}
//                                     />)}

//                                     <span >
//                                     {LikesCount}
//                                     </span>
//                                 </Link>

//                             )}
//                             {/* new */}

                            
                           
//                             </div>



//    ال كان شغال
    // async function handleLike(e) {
    //     setLoading(true);
    //     e.preventDefault();
    //     setLikesCount(!LikesCount)
    //     setLoading(true);
    //     e.preventDefault();
    //     setLikesCount(LikesCount + 1)

       
    //     try {
    //         const res = await Axios.post(`http://127.0.0.1:8000/api/questions/${Id}/likes`)
           
    //         console.log(res)
    //         setLikesCount(res)
    //         LikesCount(!setLikesCount)
    //         setLoading(false);
    //         window.location.pathname = "/profile";
    //     } catch (err) {
            
    //         setLoading(false);
           
    //     }
    // }
    // نهايتو

    // const handleLike = async () => {
    //     try {
    //         const response = await Axios.post('http://127.0.0.1:8000/api/questions/${Post.id}/likes', {
    //             message: 'Questions liked successfully.'
                
    //         });
           
    //         if (response.status === 200) {
    //             setLikesCount(LikesCount + 1); // تحديث عدد اللايكات محلياً
    //         }
    //     } catch (error) {
    //         console.error('Error liking the post:', error);
    //     }
    // };





    // {Comments.map((Comment) => (

    //     <div  key={Comment.id} style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px', paddingTop: '20px' }}>
    //         <img className='postProfileImg' src={Comment.thumbnail} alt='' />
    //         {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}
     
    //          <input type='text' className='commentInput' style={{ display: 'flex', flexWrap: 'wrap',width:'auto' }}

               
    //            value={Comment.body}
              

    //              />
    //     </div>   ))}



    // <div  key={Comment.id} style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px', paddingBottom: '20px' }}>
    //                             <div> 
    //                             <img className='postProfileImg' src={Comment.thumbnail} alt='' />
    //                             {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}

    //                             {/* <input type='text' className='commentInput' style={{ display: 'flex', flexWrap: 'wrap',width:'auto',borderRadius:'15px' }}
    //                             value={Comment.body} /> */}
    //                             <p style={{marginLeft:'10px'}}>{dataprofile.name}</p>
    //                             </div>

    //                         </div>  

// write your comment
    // <img className='postProfileImg' src={dataprofile.thumbnail} alt='' />
    // {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}
    
        
    //     <input type='text' className='commentInput'
    
    //    default value={body}
    //     // value={body}
    //     // onChange={onChangeHandler}
    //     onChange={(e) => setBody(e.target.value)}
    //     // onChange={onChangeHandler}
    //     placeholder='Write Your Comment'
    //      />
    //     <button className='postco' style={{ width: '48px', marginLeft: '-62px', borderRadius: '22px', height: '6vh', border: 'none', background: 'rgb(248, 244, 244)' }}>
    //     <EastIcon className='addCommentbtn'
    //         onClick={onClickHandler}
    //          />
    //     </button>  



    // <img className='postProfileImg' src={dataprofile.thumbnail} alt='' />
                                                        
                                
    //                             <input type='text' className='commentInput' style={{backgroundColor:'rgba(218, 218, 218, 1)',borderRadius:'10px',marginLeft:'20px'}}
                            
    //                            default value={body}
    //                             // value={body}
    //                             // onChange={onChangeHandler}
    //                             onChange={(e) => setBody(e.target.value)}
    //                             // onChange={onChangeHandler}
    //                             placeholder='Write Your Comment'
    //                              />
    //                             <button className='postco' style={{backgroundColor:'rgba(218, 218, 218, 1)', width: '48px', marginLeft: '-62px', borderRadius: '22px', height: '6vh', border: 'none', background: 'rgb(248, 244, 244)' }}>
    //                             <SendIcon className='addCommentbtn'
    //                                 onClick={onClickHandler}
    //                                  />
                                   
    //                             </button> 
