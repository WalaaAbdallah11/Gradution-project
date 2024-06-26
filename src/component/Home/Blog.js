import blogimg from './../../assets/blog.png';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
import './Home.css';
function Blog(props) {
    const { blog } = props;
    return (
        <>
            <div className="card" style={{ width: '33%px !important', height: '1000px !important', width: '100%', borderRadius: '20px' }}>
               

                <img className='blogImg' src={blog.image} style={{ borderRadius: '16px 16px 0 0', objectFit: 'cover' }} />
                <div className="c-contain" style={{ backgroundColor: '#fff' }}>
                   <h4 className='header' style={{color:'#6f9A61',marginLeft:'5px', marginTop:'10px',fontWeight:'bold',fontSize:'18px',display:'flex',justifyContent:'center', paddingTop:'5px',overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box"}}>
                   {blog.title}
                   </h4>
                   <p className='tex' style={{ fontSize:'18px',color:'gray',paddingLeft:'5px',borderBottom:'2px solid #ddd',overflow: "hidden",textOverflow: "ellipsis",display: "-webkit-box", WebkitLineClamp:" 2", lineClamp: "2",WebkitBoxOrient: "vertical"}}>{blog.slug}</p>
                    <div className='growbm' style={{ marginTop: '0', display: 'flex', justifyContent: 'space-between' }}>
                        <Link to={`/blogg/${blog.id}`} key={blog.id} style={{ textDecoration: 'none', color: "#6f9A61", fontSize: '18px', marginLeft: "20px",fontWeight:'bold' }}>
                            Read More
                        </Link>
                        <h3 style={{ marginRight: '20px', color: "#6F9A61" }}>
                            <Link to={`/blogg/${blog.id}`} key={blog.id} style={{ textDecoration: 'none', color: "#6f9A61", fontSize: '18px',fontWeight:'bold' }} >
                                <EastIcon />
                            </Link>
                        </h3>
                    </div>
                </div>
               
            </div></>
    );
}

export default Blog;










{/* <h4 className='header' style={{ color: '#6f9A61',fontWeight:'bold', fontSize: '19px',paddingTop:'15px',marginLeft:'15px' }}>
                      {blog.title}
                    </h4>
                    <p className='text' style={{ paddingLeft: '15px', borderBottom: '2px solid #ddd', fontSize: '15px' }}>{blog.slug}</p> */}