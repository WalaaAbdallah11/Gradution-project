import blogimg from '../../../assests/blog photo1.png';
import { Link } from '@mui/material';
function Blog(props) {
    const  {blog} = props;
    return (
        <>
            <div className="card" style={{ width: '380px', height: '720px', width: '100%' }}>
                <img src={blogimg} style={{ height: '300px' }} />
                <div className="c-contain" style={{ backgroundColor: '#fff' }}>
                    <h4 className='header' style={{ color: '#6f9A61', marginLeft: '20px', marginTop: '10px', fontSize: '27px', disdlay: 'flex', justifyContent: 'center', paddingTop: '5px' }}>
                        why you choose the Ankjbh
                    </h4>
                    <p className='text' style={{ padding: '7px', borderBottom: '2px solid #ddd' }}>soil detection help us you can sea it with our service you are welcome</p>
                    <Link to='/service' style={{ textDecoration: 'none', color: "#6f9A61", fontSize: '18px', marginLeft: "20px" }}>
                        Read More
                    </Link>
                </div>
            </div></>
    );
}

export default Blog;