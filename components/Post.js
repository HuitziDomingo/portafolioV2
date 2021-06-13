import Link from 'next/link'

const Post = ({ post }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="overflow">
                    <img className="img-fluid card-img-top" src={post.imageUrl} alt="" />
                </div>
                <div className="card-body">
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <Link href={`/post?title=${post.title}`} as={`post/${post.title}`}>
                        <a className="btn btn-primary">Leer</a>
                    </Link>
                </div>
            </div>
        </div>


    )
}

export default Post