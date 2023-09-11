import './Post.css'
export default function Post({post}){
        console.log(post)
        const {userId,title,id} =post;
        return(
                <div className="box-post">
                        <h3>Post Id: {id}</h3>
                        <h4>User-Id: {userId}</h4>
                        <p>Title:{title}</p>
                </div>
        )
}