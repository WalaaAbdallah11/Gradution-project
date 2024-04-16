import './post.css';
import React, { useState } from 'react';
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
import { faL } from '@fortawesome/free-solid-svg-icons';
import Community from './community';



export default function Postts(props) {
    const  {Post} = props;

    // const [like, setLike] = useState(post.like)
    const [like, setLike] = useState(FavoriteBorderIcon)
    const [isLiked, setIsLiked] = useState(false)
    const [Comment, setComment] = useState('');
    const [Comments, setComments] = useState([]);
    const [show, setShow] = useState(false);





    const likeHandler = () => {
        // setLike(isLiked ? like - 1 : like + 1)
        // if(like === FavoriteBorderIcon){
        //          setLike(FavoriteIcon);
        //          setIsLiked(isLiked +1)
        
        setIsLiked(!isLiked)
        if(like === FavoriteBorderIcon){
            setLike(FavoriteIcon);
            setIsLiked(isLiked +1)
        // }

        }
        

        // setIsLiked(!isLiked)
        // if(like === post.like){
        //     setLike(FavoriteIcon);
        //     setIsLiked(isLiked +1)
        // }
    }

    

    const onChangeHandler = (e) => {
        setComment(e.target.value);
    };
    //button
    const onClickHandler = () => {
        setComments((Comments) => [...Comments, Comment]);
    };

    // display comment
    const handleShow = ()=>{
        if(show === false){
            setShow(true)
        }else{
            setShow(false)
        }
    }
   
        

    return (
        <>
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
                        <img className='postImg' src={postImage} alt="" />
                        {/* <img className='postImg' src={post.photo} alt=""/> */}
                    </div>
                    <div className='postBottom'>
                        <div className='postbottomLeft' style={{ paddingLeft: '20px' }}>
                        
                            <FavoriteBorderIcon style={{ color: 'rgb(158, 150, 150)' }} className='likeIcon' onClick={likeHandler} />
                            <span className='postLikeCounter'>{Post.likes}</span>

                        </div>

                        <div className='postbottomLeft' style={{ marginLeft:'30px' }}>
                        
                            <ThumbDownOffAltIcon style={{ color: 'rgb(158, 150, 150)' }} className='likeIcon' onClick={likeHandler} />
                            <span className='postLikeCounter'>{Post.likes}</span> 


                        </div>

                        <div className='postbottomRight' style={{ paddingRight: '20px' ,marginLeft:'40px'}}>
                            <span className='postCommentText'onClick={handleShow} > 5 <ChatBubbleOutlineIcon style={{ color: 'rgb(158, 150, 150)' }}/></span>
                        </div>
                        

                    </div>

                    {show ===true?
                    <div style={{ paddingLeft: '20px', paddingTop: '20px' }}>
                        <img className='postProfileImg' src={ImageProfile} alt='' />
                        {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}
                        <input type='text' className='commentInput'
                            value={Comment}
                            onChange={onChangeHandler}
                            placeholder='Write Your Comment'
                             />
                        
                            <button className='postco' style={{width:'48px', marginLeft:'-62px',borderRadius:'22px', height: '6vh', border:'none',background:'rgb(248, 244, 244)'}}>
                            <EastIcon className='addCommentbtn' 
                            onClick={onClickHandler}/>
                            </button>
                            {/* التعليق ال بيظهر */}
                            {Comments.map((text) => (
                         
                         <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '0px', paddingTop: '20px' }}>
                             <img className='postProfileImg' src={ImageProfile} alt='' />
                             {/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}
                           <input type='text' className='commentInput'  style={{display:'flex',flexWrap:'wrap'}}
                             
                           value={text} /> 
                         </div>
                       
                        
                     ))}

                    </div>
                     :''}

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
{/* <span className='postUsername' style={{marginLeft:'10px'}}>{Users.filter((u) => u.id === post?.userId)[0].username}</span> */}
{/* <input type='text' className='commentInput'
    value={Comment}
    onChange={onChangeHandler}
    placeholder='Write Your Comment' />
<button className='addCommentbtn'
    onClick={onClickHandler}>Add Comment</button>
</div> */}





