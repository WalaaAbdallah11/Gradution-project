import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlogDetails() {
    const api_url = "https://fakestoreapi.com/products?limit=5";
    const [blog, setBlog] = useState({});
    const params = useParams();


    useEffect(() => {
        fetch(`${api_url}/${params.blogId}`)
            .then((res) => res.json())
            .then((blog) => setBlog(blog));
    }, []);



    return (
        <>BlogDetails - {blog.price}{params.blogId}</>
    )
}

export default BlogDetails;