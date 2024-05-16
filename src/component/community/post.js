import './postts.css';
import React, { useEffect, useState } from 'react';
import ImageProfile from './../../assets/userprofile.png';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import postImage from './../../assets/GrowingTipsDetails.png';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import EastIcon from '@mui/icons-material/East';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Users } from '../../assets/data';
import growingtips from './../../assets/growingtips.png';
import blogimg from './../../assets/blog.png';
import { faL, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Community from './community';
import { PROFILE, baseURL } from '../../Api/Api';
import axios from 'axios';
import { Axios } from '../../Api/axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from "react-router-dom";



export default function Postts(props) {
    const { Post } = props;
    // const { dataprofile } = props;
    const [dataprofile, setProfiles] = useState([]);

    const [membership_level_id, setmembership_level_id] = useState("");
    const [loading, setLoading] = useState(false);
    const [Comment, setComment] = useState('');
    const [Comments, setComments] = useState([]);
    const [show, setShow] = useState(false);
    const [addLike, setAddLike] = useState([]);
    const nav = useNavigate();
 
    const [free_trails, setfree_trails] = useState("");






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

     const [isLiked, setIsLiked] = useState(false);

    // const handleLikeClick = ()=>{
    //     Axios.post(`http://127.0.0.1:8000/api/questions/${Post.id}/likes`)
    //     .then(res =>{
    //         setIsLiked({...isLiked, isLiked:isLiked.likes +1});
    //     })
    //         .catch(error=>
    //         console.error('Error liking post:',error));
     
    // }
 
    async function HandleAddLike(e) {
        setLoading(true);
        e.preventDefault();
        setIsLiked(!isLiked)
        // setLoading(true);
        // e.preventDefault();

        try {
            const res = await Axios.post(`http://127.0.0.1:8000/api/questions/${Post.id}/likes`)
            console.log(res)
             setAddLike(res)
            Liked(!isLiked)
            setLoading(false);
            window.location.pathname = "/profile";


        } catch (err) {
            // nav('/profile', { replace: true });
            setLoading(false);
            // console.log(err);
        }

    }


    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };
    //button
    const onClickHandler = () => {
        setComments((Comments) => [...Comments, Comment]);
    };

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
                            <img className='postProfileImg'
                                src={ImageProfile}
                                // src={Post.user.thumbnail}
                                alt='not found' />

                            {/* <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}/> */}
                            <span className='postUsername'>{Post.user.name} </span>


                            <span className='postDate' >{Post.updated_at}</span>

                        </div>
                        <div className='PostTopRight'>
                            <MoreVertIcon />
                        </div>
                    </div>
                    <div className='postCenter'>
                        <span className='postText' style={{ paddingLeft: '20px' }}>{Post.body}</span>
                        <img className='postImg' src={Post.image} alt="" style={{ width: '758px ' }} />
                        {/* <img className='postImg' src={post.photo} alt=""/> */}
                    </div>
                    <div className='postBottom'>






                        {/* <div className='postbottomLeft' style={{ marginLeft: '30px' }}>

                            <span ><FavoriteBorderIcon style={{ color: 'rgb(158, 150, 150)' }} className='likeIcon' onClick={handleLikeClick} /></span>
                            <span className='postLikeCounter'>{Post.likes}</span>


                        </div> */}
                          <div  style={{ marginLeft: '20px' }}>
                            {membership_level_id === 1 && free_trails === 0 ?
                                (<Link style={{ textDecoration: "none", color: "black" }} onClick={() => (alert("go to pricing page"))}>
                                    {Post.likes === 0 ? <FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }} /> : <FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }} />
                                    }
                                    <span >
                                        {Post.likes}
                                    </span>
                                </Link>) : (

                                    <Link style={{ textDecoration: "none", color: "black" }} >
                                        {isLiked ? (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "blue", marginRight: "6px", fontSize: "30px" }}
                                            value={addLike}
                                            onChange={(e) => setAddLike(e.target.value)}
                                            onClick={HandleAddLike}
                                        />) : (<FontAwesomeIcon icon={faThumbsUp} style={{ color: "black", marginRight: "6px", fontSize: "30px" }}
                                            value={addLike}
                                            onChange={(e) => setAddLike(e.target.value)}
                                            onClick={HandleAddLike}
                                        />)}

                                        <span >
                                            {Post.likes}
                                        </span>
                                    </Link>

                                )}
                            </div>


                        <div className='postbottomRight'>
                            <span className='postCommentText' onClick={handleShow} > 5 <ChatBubbleOutlineIcon style={{ color: 'rgb(158, 150, 150)' }} /></span>
                        </div>


                    </div>

                    {show === true ?
                        <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
                            <img className='postProfileImg' src={ImageProfile} alt='' />
                            {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}
                            <input type='text' className='commentInput'
                                value={Comment}
                                onChange={onChangeHandler}
                                placeholder='Write Your Comment'
                            />

                            <button className='postco' style={{ width: '48px', marginLeft: '-62px', borderRadius: '22px', height: '6vh', border: 'none', background: 'rgb(248, 244, 244)' }}>
                                <EastIcon className='addCommentbtn'
                                    onClick={onClickHandler} />
                            </button>
                            {/* التعليق ال بيظهر */}
                            {Comments.map((text) => (

                                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px', paddingTop: '20px' }}>
                                    <img className='postProfileImg' src={ImageProfile} alt='' />
                                    {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}
                                    <input type='text' className='commentInput' style={{ display: 'flex', flexWrap: 'wrap' }}

                                        value={text} />
                                </div>


                            ))}

                        </div>
                        : ''}

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





