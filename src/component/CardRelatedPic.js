// import "../Css/card.css";

// export default function CardRelatedPic(props) {
//     const { relatedPicture } = props;
//     return (        
//                 <div className='box'>
//                     <img src={relatedPicture.image}  alt="img"/> 
                    
//                 </div>
//         );
// }


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

