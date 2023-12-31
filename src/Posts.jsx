import { useEffect, useState } from "react"
import Post from "./Post";

export default function Posts(){
        const [post,setPost] = useState([]);

        useEffect(() =>{
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res=> res.json())
                .then(data => setPost(data))
        },[])
        
        return(
                <div>
                        <h3>Post: {post.length}</h3>
                        {
                                post.map(post=>
                                <Post post={post}></Post>)
                        }
                </div>
        )
}