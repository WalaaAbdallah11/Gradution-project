import blogimg from './../../assets/blog.png';
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";
import './Home.css';
function Blog(props) {
    const { blog } = props;
    return (
        <>
            <div className="card" style={{ width: '33%px !important', height: '1000px !important', width: '100%', borderRadius: '20px' }}>
                <img className='blogImg' src={blog.image} style={{ borderRadius: '16px', objectFit: 'cover' }} />
                <div className="c-contain" style={{ backgroundColor: '#fff' }}>
                    <h4 className='header' style={{ color: '#6f9A61', marginTop: '10px',fontWeight:'bold', fontSize: '19px', disdlay: 'flex', justifyContent: 'center', paddingTop: '5px', alignItems: 'center' }}>
                        {/* why you choose the Ankjbh */}{blog.title}
                    </h4>
                    <p className='text' style={{ padding: '5px', borderBottom: '2px solid #ddd', fontSize: '15px' }}>{blog.slug}</p>
                    <div className='growbm' style={{ marginTop: '0', display: 'flex', justifyContent: 'space-between' }}>
                        <Link to={`/home/${blog.id}`} key={blog.id} style={{ textDecoration: 'none', color: "#6f9A61", fontSize: '18px', marginLeft: "20px",fontWeight:'bold' }}>
                            Read More
                        </Link>

                        <h3 style={{ marginRight: '20px', color: "#6F9A61" }}>

                            <Link to={`/home/${blog.id}`} key={blog.id} style={{ textDecoration: 'none', color: "#6f9A61", fontSize: '18px',fontWeight:'bold' }} >
                                <EastIcon />
                            </Link>
                        </h3>

                    </div>
                </div>
            </div></>
    );
}

export default Blog;